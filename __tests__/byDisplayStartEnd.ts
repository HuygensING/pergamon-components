import {byDisplayStartEnd} from "../src/rendered-text/tree-builder/sort"
import TreeNode from '../src/models/tree-node'

const nodes = [
	new TreeNode({ end: 13, start: 1, type: 'teiHeader' }),
	new TreeNode({ end: 1488, start: 962, type: 'p' }),
	new TreeNode({ start: 15, end: 13229, type: 'body' }),
	new TreeNode({ end: 3316, start: 3043, type: 'p' }),
	new TreeNode({ end: 3, start: 3, type: 'meta' }),
	new TreeNode({ start: 2995, end: 3042, type: 'lg' }),
	new TreeNode({ end: 13231, start: 0, type: 'TEI' }),
	new TreeNode({ start: 1704, end: 3042, type: 'p' }),
	new TreeNode({ start: 2996, end: 3041, type: 'l' }),
	new TreeNode({ start: 14, end: 13230, type: 'text' }),
	new TreeNode({ start: 16, end: 10152, type: 'div' }),
	new TreeNode({ end: 1703, start: 1489, type: 'p' }),
	new TreeNode({ end: 669, start: 661, type: 'placename' }),
]

describe('byDisplayStartEnd', () => {
	test('case 1', () => {
		const received = nodes.sort(byDisplayStartEnd)
		const expected = [
			new TreeNode({ end: 13231, start: 0, type: 'TEI' }),
			new TreeNode({ end: 13230, start: 14, type: 'text' }),
			new TreeNode({ end: 13229, start: 15, type: 'body' }),
			new TreeNode({ end: 10152, start: 16, type: 'div' }),
			new TreeNode({ end: 1488, start: 962, type: 'p' }),
			new TreeNode({ end: 1703, start: 1489, type: 'p' }),
			new TreeNode({ end: 3042, start: 1704, type: 'p' }),
			new TreeNode({ end: 3042, start: 2995, type: 'lg' }),
			new TreeNode({ end: 3041, start: 2996, type: 'l' }),
			new TreeNode({ end: 3316, start: 3043, type: 'p' }),
			new TreeNode({ end: 669, start: 661, type: 'placename' }),
			new TreeNode({ end: 13, start: 1, type: 'teiHeader' }),
			new TreeNode({ end: 3, start: 3, type: 'meta' }),
		];
		expect(received).toEqual(expected);
	});
});
