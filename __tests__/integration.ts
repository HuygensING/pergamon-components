import createTree from '../src/rendered-text/tree-builder'
import Annotation from '../src/models/annotation'
import TreeNode from '../src/models/tree-node'

describe('integration', () => {
	test('simple', () => {
		const annotation = new Annotation({
			annotations: [
				{ end: 40 },
				{ end: 80, start: 40 },
			],
			end: 80,
		})

		const expected = [
			new TreeNode({
				"attributes": new Map(),
				"row": 0,
				"end": 40,
				"start": 0,
				"type": "__root",
			}),
			new TreeNode({
				"attributes": new Map(),
				"row": 0,
				"end": 80,
				"start": 40,
				"type": "__root",
			}),
		]

		expect(createTree(annotation)).toEqual(expected)
	})

	test('medium', () => {
		const annotation = new Annotation({
			annotations: [
				{ end: 60, start: 50, type: 'l' },
				{ end: 60, start: 60, type: 'anchor' },
				{ end: 80, start: 40, type: 'p' },
				{ end: 40, type: 'p' },
			],
			end: 80,
		})

		const expected = [
			new TreeNode({
				"attributes": new Map(),
				"end": 40,
				row: 0,
				segment: 'none',
				"start": 0,
				"type": "p",
			}),
			new TreeNode({
				"attributes": new Map(),
				children: [
					new TreeNode({ end: 50, start: 40, type: '__text' }),
					new TreeNode({
						"attributes": new Map(),
						children: [
							new TreeNode({ end: 60, start: 50, type: '__text' }),
							new TreeNode({
								"attributes": new Map(),
								end: 60,
								row: 2,
								segment: 'none',
								start: 60,
								type: 'anchor',
							})
						],
						end: 60,
						row: 1,
						segment: 'none',
						start: 50,
						type: 'l',
					}),
					new TreeNode({ end: 80, start: 60, type: '__text' }),
				],
				"end": 80,
				row: 0,
				segment: 'none',
				"start": 40,
				"type": "p",
			}),
		]

		expect(createTree(annotation)).toEqual(expected)
	})

	// test('parent - child', () => {
	// 	const annotation = new Annotation({
	// 		annotations: [
	// 			{ end: 40 },
	// 			{ end: 30, start: 30, id: 'parentId' },
	// 			{ end: 30, start: 30, target: 'parentId' },
	// 			{ end: 80, start: 40 },
	// 		],
	// 		end: 80,
	// 	})

	// 	const parent = new TreeNode({
	// 		"annotationId": 'parentId',
	// 		"attributes": new Map(),
	// 		"row": 0,
	// 		"end": 30,
	// 		"start": 30,
	// 		"type": "__root",
	// 	})

	// 	parent.children = [
	// 		new TreeNode({
	// 			"attributes": new Map(),
	// 			"row": 0,
	// 			"end": 30,
	// 			"start": 30,
	// 			"type": "__root",
	// 		})
	// 	]

	// 	const expected = [
	// 		new TreeNode({
	// 			"attributes": new Map(),
	// 			"row": 0,
	// 			"end": 40,
	// 			"start": 0,
	// 			"type": "__root",
	// 		}),
	// 		parent,
	// 		new TreeNode({
	// 			"attributes": new Map(),
	// 			"row": 0,
	// 			"end": 80,
	// 			"start": 40,
	// 			"type": "__root",
	// 		}),
	// 	]

	// 	expect(createTree(annotation)).toEqual(expected)
	// })
})