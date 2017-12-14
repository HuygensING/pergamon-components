import TreeNode from '../../src/models/tree-node'

// The original test data, but the first p overlaps
// the second (by just one codepoint).

export const annotations: TreeNode[] = [
	new TreeNode({
		start: 6,
		end: 32,
		type: 'p',
	}),
	new TreeNode({
		start: 31,
		end: 72,
		type: 'p',
	}),
	new TreeNode({
		start: 8,
		end: 17,
		type: 'geogName',
	}),
	new TreeNode({
		start: 23,
		end: 39,
		type: 'persName',
	}),
	new TreeNode({
		start: 34,
		end: 36,
		type: 'placeName',
	}),
];

export const annotationsWithRow: TreeNode[]  = [
	new TreeNode({
		start: 6,
		end: 32,
		row: 0,
		type: 'p',
	}),
	new TreeNode({
		start: 31,
		end: 72,
		row: 1,
		type: 'p',
	}),
	new TreeNode({
		start: 8,
		end: 17,
		row: 1,
		type: 'geogName',
	}),
	new TreeNode({
		start: 23,
		end: 39,
		row: 2,
		type: 'persName',
	}),
	new TreeNode({
		start: 34,
		end: 36,
		row: 3,
		type: 'placeName',
	})
];

export const annotationsSplitted: TreeNode[] = [
	new TreeNode({
		end: 32,
		row: 0,
		start: 6,
		type: 'p',
	}),
	new TreeNode({
		segment: 'first',
		end: 32,
		row: 1,
		start: 31,
		type: 'p',
	}),
	new TreeNode({
		segment: 'last',
		end: 72,
		row: 1,
		start: 32,
		type: 'p',
	}),
	new TreeNode({
		end: 17,
		row: 1,
		start: 8,
		type: 'geogName',
	}),
	new TreeNode({
		segment: 'first',
		end: 31,
		row: 2,
		start: 23,
		type: 'persName',
	}),
	new TreeNode({
		segment: 'middle',
		end: 32,
		row: 2,
		start: 31,
		type: 'persName',
	}),
	new TreeNode({
		segment: 'last',
		row: 2,
		end: 39,
		start: 32,
		type: 'persName',
	}),
	new TreeNode({
		row: 3,
		end: 36,
		start: 34,
		type: 'placeName',
	})
];

export const tree: TreeNode[] = [
	new TreeNode({
		row: 0,
		end: 32,
		start: 6,
		type: 'p',
		children: [
			new TreeNode({
				segment: 'first',
				row: 1,
				end: 32,
				start: 31,
				type: 'p',
				children: [
					new TreeNode({
						row: 2,
						segment: 'middle',
						end: 32,
						start: 31,
						type: 'persName',
					})
				]
			}),
			new TreeNode({
				row: 1,
				end: 17,
				start: 8,
				type: 'geogName',
			}),
			new TreeNode({
				segment: 'first',
				row: 2,
				end: 31,
				start: 23,
				type: 'persName',
			}),
		]
	}),
	new TreeNode({
		segment: 'last',
		row: 1,
		end: 72,
		start: 32,
		type: 'p',
		children: [
			new TreeNode({
				segment: 'last',
				row: 2,
				end: 39,
				start: 32,
				type: 'persName',
				children: [
					new TreeNode({
						row: 3,
						end: 36,
						start: 34,
						type: 'placeName',
					})
				]
			}),
		]
	}),
]
