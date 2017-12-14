import hasOverlap from "./has-overlap"
import TreeNode from '../../models/tree-node'

export const toSplitPoints = (splitPoints: number[], curr: TreeNode, index, arr: TreeNode[]) => {
	if (index === 0) return splitPoints;
	const prevAnnotations = arr.slice(0, index);
	prevAnnotations.forEach((prev) => {
		if (hasOverlap(prev, curr)) {
			if (prev.end > curr.start && prev.end < curr.end) {
				splitPoints.push(prev.end);
			}
			if (prev.start > curr.start && prev.start < curr.end) {
				splitPoints.push(prev.start)
			}
		}
	});

	return [...new Set(splitPoints)]
		.sort((a, b) => a - b); // Sort numerically
};

export const splitAnnotation = (node: TreeNode, splitPoints: number[]) => {
	if (node.start !== splitPoints[0]) {
		splitPoints = [node.start].concat(splitPoints);
	}
	if (node.end !== splitPoints[splitPoints.length - 1]) {
		splitPoints = splitPoints.concat(node.end);
	}

	const parts = splitPoints
		.reduce((agg: TreeNode[], curr, index, arr) => {
			if (index === arr.length - 1) return agg;

			const clone = node.clone()
			clone.start = curr
			clone.end = arr[index + 1]

			if (index === 0 && arr.length > 2) clone.segment = 'first'
			else if (index === (arr.length - 2) && arr.length > 2) clone.segment = 'last'
			else if (arr.length > 2) clone.segment = 'middle'

			agg.push(clone)

			return agg;
		}, [])

	return parts;
};

type SplitPoint = { value: number, active: boolean }
export const splitAnnotations = () => {
	let splitPointIndex = 0
	let splitPoints: SplitPoint[]
	const extractSplitPoints = (arr) => {
		splitPoints = arr.reduce(toSplitPoints, [])
			.map((sp: SplitPoint) => ({
				value: sp,
				active: false,
			}));
	};

	return (agg: TreeNode[], curr: TreeNode, index: number, arr: TreeNode[]) => {
		if (splitPoints == null) extractSplitPoints(arr);
		if (!splitPoints.length) {
			agg.push(curr);
			return agg;
		}
		let currSplitPoint = splitPoints[splitPointIndex];
		if (curr.start > currSplitPoint.value) {
			if (arr.length < splitPointIndex - 1) splitPointIndex += 1;
			currSplitPoint = splitPoints[splitPointIndex];
		}
		if (currSplitPoint == null) {
			agg.push(curr);
			return agg;
		}

		const splitPointsInCurr = splitPoints.filter((sp) => {
			return sp.active && sp.value > curr.start && sp.value < curr.end
		});

		if (splitPointsInCurr.length)	{
			agg = agg.concat(splitAnnotation(
				curr,
				splitPointsInCurr.map((sp) => sp.value)
			));
		} else {
			agg.push(curr);
		}

		for (let i = 0; i < splitPoints.length; i++) {
			const sp = splitPoints[i];
			if (sp.value === curr.start || sp.value === curr.end) sp.active = true;
		}

		return agg;
	};
};