import TreeNode from '../../models/tree-node'
import { SYSTEM_TEXT_TYPE } from '../../constants';

// Export for __tests__/fill-gaps.test.ts
export const reducer = (parent: TreeNode) => {
	let prevEnd = parent.start

	return (agg: TreeNode[], curr: TreeNode, index: number, arr: TreeNode[]) => {
		const prev = agg[agg.length - 1]
		curr.start = curr.start < parent.start ? parent.start : curr.start
		curr.end = curr.end > parent.end ? parent.end : curr.end

		// If the first annotation does not start at 0, add a text component
		// from 0 until the start of the first annotation.
		if (prev == null && curr.start > parent.start) {
			agg.push(new TreeNode({
				end: curr.start,
				start: parent.start,
				type: SYSTEM_TEXT_TYPE,
			}))
			prevEnd = curr.start
		}

		// If the current start is bigger than the prevEnd, it means there
		// are some 'untagged' chars. Add a text component to the 'untagged' chars.
		// If "This {prevEnd}is{curr.start} an example", than "is" is untagged.
		if (curr.start > prevEnd) {
			const start = prevEnd
			const end = curr.start
			agg.push(new TreeNode({
				end,
				start,
				type: SYSTEM_TEXT_TYPE,
			}))
		}

		// Add current annotation to the aggregate.
		// curr.text = data.text.slice(curr.start - 1, curr.end)
		agg.push(curr)

		// Update the prevEnd if the curr.end is bigger than prevEnd.
		// If curr.end is smaller, the current annotation is a child.
		prevEnd = curr.end > prevEnd ? curr.end : prevEnd

		// If the last annotation does not end at the end of the text,
		// wrap the last chars in a text component.
		if (index === arr.length - 1 && prevEnd < parent.end) {
			agg.push(new TreeNode({
				end: parent.end,
				start: prevEnd,
				type: SYSTEM_TEXT_TYPE,
			}))
		}

		return agg
	}
}

const fillGaps = (root: TreeNode, tree: TreeNode[]): TreeNode[] =>
	tree
		.reduce(reducer(root), [])
		.map((subTree: TreeNode) => {
			if (subTree.hasOwnProperty('children')) {
				subTree.children = fillGaps(subTree, subTree.children)
			}

			return subTree
		})

export default fillGaps
