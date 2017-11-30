import React from 'react'
import Tags from '../../src/tags'
const Anchor = Tags.anchor.component
import createStory from '../stories'
import { action } from '@storybook/addon-actions'
import { PergamonUITags } from '../../src'

export default (createStory) => createStory("Tags/Interactive/Anchor { type: 'anchor' }")
	.add('default', () =>
		<div>
			Laboris commodo ullamco incididunt sint voluptate incididunt non adipisicing magna non nostrud.
			<Anchor
				activateAnnotation={action('activateAnnotation')}
				annotation={{
					attributes: { n: 'n1' },
					id: 'id-n1'
				}}
			/>
			Velit esse adipisicing
			<Anchor
				activateAnnotation={action('activateAnnotation')}
				activeAnnotation={{
					attributes: { n: 'n2' },
					id: 'id-n2',
				}}
				annotation={{
					attributes: { n: 'n2' },
					id: 'id-n2',
				}}
				root={{
					children: [{
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
				tags={PergamonUITags}
			/>
			ad irure consequat enim incididunt fugiat adipisicing aute. 
			Eu consectetur in consectetur
			<Anchor
				activateAnnotation={action('activateAnnotation')}
				annotation={{
					attributes: { n: 'n3' },
					id: 'id-n3'
				}}
			/>
			incididunt.
		</div>
	)
