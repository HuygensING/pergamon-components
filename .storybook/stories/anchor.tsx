import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Tags from '../../src/tags'
const Anchor = Tags.anchor.component
import Dummy from '../dummy'
import TreeNode from '../../src/models/tree-node'
import Annotation from '../../src/models/annotation'

const activeAnnotation = new Annotation({
	attributes: { n: 'n2' }
})

const node1 = new TreeNode({ attributes: new Map().set('n', 'n1') })
const node2 = new TreeNode({ attributes: new Map().set('n', 'n2') })
const node3 = new TreeNode({ attributes: new Map().set('n', 'n3') })

storiesOf("Tags/Active/{ type: anchor }", module)
	.add('default', () =>
		<div>
			Laboris commodo ullamco incididunt sint voluptate incididunt non adipisicing magna non nostrud.
			<Dummy
				comp={Anchor}
				node={node1}
			/>
			Velit esse adipisicing
			<Dummy
				activeAnnotation={activeAnnotation}
				node={node2}
				comp={Anchor}
				root={new Annotation({
					annotations: [{
						attributes: { n: 'n2' },
						end: 42,
						id: 'note-n2',
						start: 18,
						type: 'note',
					}],
					id: 'my-root-id',
					body: {
						body: 'This is the text. A part of it is a note. You\'ll see'
					},
				})}
				tags={Tags}
			/>
			ad irure consequat enim incididunt fugiat adipisicing aute. 
			Eu consectetur in consectetur
			<Dummy
				node={node3}
				comp={Anchor}
			/>
			incididunt.
		</div>
	)
