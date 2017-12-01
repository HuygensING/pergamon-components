import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Tags from '../../src/tags'
const Anchor = Tags.anchor.component
import Dummy, { defaultAnnotation } from '../dummy'

storiesOf("Tags/Active/{ type: anchor }", module)
	.add('default', () =>
		<div>
			Laboris commodo ullamco incididunt sint voluptate incididunt non adipisicing magna non nostrud.
			<Dummy
				comp={Anchor}
				annotation={{
					...defaultAnnotation,
					attributes: { n: 'n1' },
					id: 'id-n1'
				}}
			/>
			Velit esse adipisicing
			<Dummy
				activeAnnotation={{
					...defaultAnnotation,
					attributes: { n: 'n2' },
					id: 'id-n2',
				}}
				annotation={{
					...defaultAnnotation,
					attributes: { n: 'n2' },
					id: 'id-n2',
				}}
				comp={Anchor}
				root={{
					...defaultAnnotation,
					children: [{
						...defaultAnnotation,
						attributes: {
							n: 'n2'
						},
						end: 42,
						id: 'note-n2',
						start: 18,
						type: 'note',
					}],
					id: 'my-root-id',
					text: 'This is the text. A part of it is a note. You\'ll see',
				}}
				tags={Tags}
			/>
			ad irure consequat enim incididunt fugiat adipisicing aute. 
			Eu consectetur in consectetur
			<Dummy
				annotation={{
					...defaultAnnotation,
					attributes: { n: 'n3' },
					id: 'id-n3'
				}}
				comp={Anchor}
			/>
			incididunt.
		</div>
	)
