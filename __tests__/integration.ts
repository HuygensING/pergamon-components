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