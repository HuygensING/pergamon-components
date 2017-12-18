import createTree from '../src/rendered-text/tree-builder'
import Annotation from '../src/models/annotation'
import TreeNode from '../src/models/tree-node'

const filterText = (root) => {
	if (root.hasOwnProperty('children')) {
		root.children = root.children
			.map(filterText)
			.filter(c => c != null)
	}
	return root.type === '__text' ? null : root
}

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

	// TODO fix test. <abbr> and <expan> should be children of <choice>
	// test('manuscript', () => {
	// 	const annotation = new Annotation(
	// 		{"body":{"date":"1643-12-15","correspondence":"Blauwe Schuit","body":"\n\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\n\t\t\t\n    \n        'Welc is die minste dinc van minnen'\n        \n        Welc is die misteminste dinc van minenminnen\n        Die meest forteertconforteert therte binnen\n    \n    \n\n\t\t"},"id":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","text":"\n\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\n\t\t\t\n    \n        'Welc is die minste dinc van minnen'\n        \n        Welc is die misteminste dinc van minenminnen\n        Die meest forteertconforteert therte binnen\n    \n    \n\n\t\t","annotations":[{"id":"90ed7571-6197-4891-80c9-05196641f706","start":0,"end":210,"type":"TEI","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"id":"39459035-2bd8-4df6-a71f-c6369c4d4fd6","start":4,"end":28,"type":"teiHeader","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"attributes":{"type":"uuid","value":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce"},"id":"fb7dab78-a6bc-49d9-89a0-8270cfbc8812","start":9,"end":9,"type":"meta","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"attributes":{"type":"corr","value":"Blauwe Schuit"},"id":"da7c3803-1aac-4d90-b347-cb50f0c88961","start":14,"end":14,"type":"meta","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"attributes":{"type":"id","value":"bs103a51e9-d8f7-4b6f-aa3f-b8447a1828ce"},"id":"47adecde-68a3-44f7-bca0-9a820e56ccee","start":19,"end":19,"type":"meta","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"attributes":{"type":"date","value":"1643-12-15"},"id":"e2ebed93-c4f8-443b-a9ed-d8b41263f7c6","start":24,"end":24,"type":"meta","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"attributes":{"n":"3.33","xml:id":"BS3.33"},"id":"809c209c-952b-4cfa-a4db-05b90dcd4ef5","start":32,"end":207,"type":"text","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"id":"06e949cb-9508-4d05-b437-1a2ac193c183","start":37,"end":206,"type":"body","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"attributes":{"type":"assigned"},"id":"3c608706-6704-4fec-8ec3-93b19a5d8994","start":46,"end":82,"type":"head","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"id":"f86c5930-9640-4864-94ae-1cd1d6708a14","start":91,"end":201,"type":"lg","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"attributes":{"n":"17","xml:id":"BSf26r.17"},"id":"6a834dab-08d0-4f0e-af96-fe9f5c5d2b5d","start":100,"end":100,"type":"lb","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"attributes":{"n":"1","xml:id":"BS3.33.1"},"id":"6c4c6cea-9583-4839-9fad-9c92384017f4","start":100,"end":144,"type":"l","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"id":"6421352c-5788-4123-b8b1-9c2b8f8e8e2e","start":112,"end":123,"type":"choice","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"id":"2bb83405-f29d-449d-ad70-d18ac69e10bc","start":112,"end":117,"type":"abbr","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"attributes":{"ref":"#bar"},"id":"0603c843-49fc-4da1-992e-6ed88086cac5","start":114,"end":114,"type":"g","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"id":"01ca7baa-f14c-4272-904a-443fc9632deb","start":117,"end":123,"type":"expan","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"id":"d0a5dd58-0e4c-46da-8a31-3f04d2186736","start":119,"end":120,"type":"ex","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"id":"a325e705-d6a1-4e8e-841f-90f15eabc370","start":133,"end":144,"type":"choice","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"id":"c2026e7d-8909-4f9a-bf0e-d6a94cc19a6b","start":133,"end":138,"type":"abbr","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"attributes":{"ref":"#bar"},"id":"4aacd4c1-8d01-4153-85ce-2d4b1dd8a43e","start":135,"end":135,"type":"g","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"id":"ddfbe3ba-5e2f-4025-b8f3-2b6af13cf10c","start":138,"end":144,"type":"expan","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"id":"76c24f91-310e-4e44-8989-b6c8c18330a4","start":140,"end":141,"type":"ex","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"attributes":{"n":"18","xml:id":"BSf26r.18"},"id":"ea11d00e-0d90-465a-ba7c-ecf4be20d39f","start":153,"end":153,"type":"lb","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"attributes":{"n":"2","xml:id":"BS3.33.2"},"id":"06749b68-86af-45e3-a30a-f77a977e59bc","start":153,"end":196,"type":"l","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"id":"409ebad9-f3df-4aa9-a34e-7c515d8eddad","start":163,"end":182,"type":"choice","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"id":"b79d7009-f65a-4ee6-b614-586222c4726a","start":163,"end":171,"type":"abbr","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"attributes":{"ref":"#condes"},"id":"520475b1-405c-4580-99fa-e8128f8d4046","start":163,"end":163,"type":"g","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"id":"2b29f899-9737-4453-a179-4d2d448944ce","start":171,"end":182,"type":"expan","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"},{"id":"4f451a46-f6ed-4fa7-b6f7-f14d96356f67","start":171,"end":174,"type":"ex","target":"103a51e9-d8f7-4b6f-aa3f-b8447a1828ce","source":"xml"}]}
	// 	)
	// 	expect(filterText(createTree(annotation)[0])).toEqual({})
	// })
})