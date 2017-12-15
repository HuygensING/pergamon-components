import hasOverlap from "./has-overlap";
import TreeNode from '../../models/tree-node'

const toTree = (agg: TreeNode[], curr: TreeNode, index: number, arr: TreeNode[]) => {
	if (agg.length === 0) {
		agg.push(curr);
		return agg;
	}

	const prevAnnotations = arr.slice(0, index);

	for (let i = prevAnnotations.length - 1; i >= 0; i--) {
		const prevAnnotation = prevAnnotations[i];
		if (
			hasOverlap(prevAnnotation, curr) ||
			// TODO make an exception for figure and graphic due to PER-331
			(
				prevAnnotation.type === 'figure' &&
				curr.type === 'graphic' &&
				prevAnnotation.start === curr.start &&
				prevAnnotation.end === curr.end
			)
		) {
			if (!prevAnnotation.hasOwnProperty('children')) prevAnnotation.children = [];
			prevAnnotation.children.push(curr);

			return agg;
		}
	}

	agg.push(curr);

	return agg;
};

export default toTree
