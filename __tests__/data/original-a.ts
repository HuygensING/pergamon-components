import TreeNode from '../../src/models/tree-node'
import Annotation from '../../src/models/annotation'

// The original data set, but the original persName goes from
// 23 to 38. If 23 is changed to 2, the persName (an inline el),
// crosses the two ps (block elements).

export const rootAnnotation: Annotation = new Annotation({
	annotations: [
		{
			start: 2,
			end: 39,
			type: 'persName',
		},
		{
			start: 6,
			end: 30,
			type: 'p',
		},
		{
			start: 8,
			end: 17,
			type: 'geogName',
		},
		{
			start: 31,
			end: 72,
			type: 'p',
		},
		{
			start: 34,
			end: 36,
			type: 'placeName',
		},
	],
	start: 0,
	end: 80,
})

export const nodes: TreeNode[] = [
	new TreeNode({
		start: 2,
		end: 39,
		type: 'persName',
	}),
	new TreeNode({
		start: 6,
		end: 30,
		type: 'p',
	}),
	new TreeNode({
		start: 8,
		end: 17,
		type: 'geogName',
	}),
	new TreeNode({
		start: 31,
		end: 72,
		type: 'p',
	}),
	new TreeNode({
		start: 34,
		end: 36,
		type: 'placeName',
	}),
];

export const annotationsSorted = [
	new TreeNode({
		start: 6,
		end: 30,
		type: 'p',
	}),
	new TreeNode({
		start: 31,
		end: 72,
		type: 'p',
	}),
	new TreeNode({
		start: 2,
		end: 39,
		type: 'persName',
	}),
	new TreeNode({
		start: 8,
		end: 17,
		type: 'geogName',
	}),
	new TreeNode({
		start: 34,
		end: 36,
		type: 'placeName',
	})
];

export const annotationsWithRow = [
	new TreeNode({
		start: 6,
		end: 30,
		type: 'p',
		row: 0,
	}),
	new TreeNode({
		start: 31,
		end: 72,
		type: 'p',
		row: 0,
	}),
	new TreeNode({
		start: 2,
		end: 39,
		type: 'persName',
		row: 1,
	}),
	new TreeNode({
		start: 8,
		end: 17,
		type: 'geogName',
		row: 2,
	}),
	new TreeNode({
		start: 34,
		end: 36,
		type: 'placeName',
		row: 2,
	})
];

export const annotationsSplitted = [
	new TreeNode({
		start: 6,
		end: 30,
		type: 'p',
		row: 0,
	}),
	new TreeNode({
		start: 31,
		end: 72,
		type: 'p',
		row: 0,
	}),
	new TreeNode({
		segment: 'first',
		start: 2,
		end: 6,
		type: 'persName',
		row: 1,
	}),
	new TreeNode({
		segment: 'middle',
		start: 6,
		end: 30,
		type: 'persName',
		row: 1,
	}),
	new TreeNode({
		segment: 'middle',
		start: 30,
		end: 31,
		type: 'persName',
		row: 1,
	}),
	new TreeNode({
		segment: 'last',
		start: 31,
		end: 39,
		type: 'persName',
		row: 1,
	}),
	new TreeNode({
		start: 8,
		end: 17,
		type: 'geogName',
		row: 2,
	}),
	new TreeNode({
		start: 34,
		end: 36,
		type: 'placeName',
		row: 2,
	})
];

export const tree = [
	new TreeNode({
		segment: 'first',
		start: 2,
		end: 6,
		type: 'persName',
		row: 1,
	}),
	new TreeNode({
		start: 6,
		end: 30,
		type: 'p',
		row: 0,
		children: [
			new TreeNode({
				segment: 'middle',
				start: 6,
				end: 30,
				type: 'persName',
				row: 1,
				children: [
					new TreeNode({
						start: 8,
						end: 17,
						type: 'geogName',
						row: 2,
					}),
				]
			}),
		]
	}),
	new TreeNode({
		segment: 'middle',
		start: 30,
		end: 31,
		type: 'persName',
		row: 1,
	}),
	new TreeNode({
		start: 31,
		end: 72,
		type: 'p',
		row: 0,
		children: [
			new TreeNode({
				segment: 'last',
				start: 31,
				end: 39,
				type: 'persName',
				row: 1,
				children: [
					new TreeNode({
						start: 34,
						end: 36,
						type: 'placeName',
						row: 2,
					})
				]
			}),
		]
	}),
]

export const treeIntegration = [
	new TreeNode({ end: 2, start: 0, type: '__text' }),
	new TreeNode({
		attributes: new Map(),
		end: 6,
		row: 0,
		segment: 'first',
		start: 2,
		type: 'persName',
	}),
	new TreeNode({
		attributes: new Map(),
		start: 6,
		end: 30,
		type: 'p',
		row: 0,
		children: [
			new TreeNode({
				attributes: new Map(),
				segment: 'middle',
				start: 6,
				end: 30,
				type: 'persName',
				row: 1,
				children: [
					new TreeNode({ end: 8, start: 6, type: '__text' }),
					new TreeNode({
						attributes: new Map(),
						start: 8,
						end: 17,
						type: 'geogName',
						row: 2,
					}),
					new TreeNode({ end: 30, start: 17, type: '__text' }),
				]
			}),
		]
	}),
	new TreeNode({
		attributes: new Map(),
		end: 31,
		row: 0,
		segment: 'middle',
		start: 30,
		type: 'persName',
	}),
	new TreeNode({
		attributes: new Map(),
		end: 72,
		row: 0,
		start: 31,
		type: 'p',
		children: [
			new TreeNode({
				attributes: new Map(),
				segment: 'last',
				start: 31,
				end: 39,
				type: 'persName',
				row: 1,
				children: [
					new TreeNode({ end: 34, start: 31, type: '__text' }),
					new TreeNode({
						attributes: new Map(),
						start: 34,
						end: 36,
						type: 'placeName',
						row: 2,
					}),
					new TreeNode({ end: 39, start: 36, type: '__text' }),
				]
			}),
			new TreeNode({ end: 72, start: 39, type: '__text' }),
		]
	}),
	new TreeNode({ end: 80, start: 72, type: '__text' }),
]
