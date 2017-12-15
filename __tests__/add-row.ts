import addRow from "../src/rendered-text/tree-builder/add-row"
import TreeNode from '../src/models/tree-node'

const nodes = [
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
	new TreeNode({ end: 3041, start: 3041, type: 'anchor' }),
	new TreeNode({ end: 13, start: 1, type: 'teiHeader' }),
	new TreeNode({ end: 3, start: 3, type: 'meta' }),
]

describe('byDisplayStartEnd', () => {
	test('case 1', () => {
		const received = nodes.map(addRow())
		const expected = [
			new TreeNode({ end: 13231, row: 0, start: 0, type: 'TEI' }),
			new TreeNode({ end: 13230, row: 1, start: 14, type: 'text' }),
			new TreeNode({ end: 13229, row: 2, start: 15, type: 'body' }),
			new TreeNode({ end: 10152, row: 3, start: 16, type: 'div' }),
			new TreeNode({ end: 1488, row: 4, start: 962, type: 'p' }),
			new TreeNode({ end: 1703, row: 4, start: 1489, type: 'p' }),
			new TreeNode({ end: 3042, row: 4, start: 1704, type: 'p' }),
			new TreeNode({ end: 3042, row: 5, start: 2995, type: 'lg' }),
			new TreeNode({ end: 3041, row: 6, start: 2996, type: 'l' }),
			new TreeNode({ end: 3316, row: 4, start: 3043, type: 'p' }),
			new TreeNode({ end: 669, row: 4, start: 661, type: 'placename' }),
			new TreeNode({ end: 3041, row: 7, start: 3041, type: 'anchor' }),
			new TreeNode({ end: 13, start: 1, type: 'teiHeader' }),
			new TreeNode({ end: 3, start: 3, type: 'meta' }),
		];
		expect(received).toEqual(expected);
	});
});
