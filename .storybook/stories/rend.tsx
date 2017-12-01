import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Tags from '../../src/tags'
import Dummy, { defaultAnnotation } from '../dummy';

const stories = storiesOf("Tags/Rend", module)

Object.keys(Tags).forEach(tagName => {
	const skip = ['anchor', '__text', '__root']
	if (skip.indexOf(tagName) > -1) return

	const comp = Tags[tagName].component
	stories.add(tagName, () =>
		<div style={{ maxWidth: '550px' }}>
			<h2>Italic</h2>
			<Dummy comp={comp} annotation={{ ...defaultAnnotation, attributes: { rend: "italic" }}}>
				Dummyroident Lorem ut cillum duis. Eiusmod reprehenderit ea mollit id excepteur occaecat dolor consequat.
				Est culpa ea consequat nulla est eiusmod ex incididunt laboris.
				Ex cillum dolor enim eu nostrud voluptate quis.
			</Dummy>

			<h2>Bold</h2>
			<Dummy comp={comp} annotation={{ ...defaultAnnotation, attributes: { rend: 'bold' }}}>
				Dolore nisi sit aliquip reprehenderit proident adipisicing dolore excepteur cupidatat. 
				Deserunt veniam reprehenderit deserunt exercitation eu ipsum non. 
				Qui culpa exercitation pariatur commodo adipisicing reprehenderit mollit fugiat anim dolore anim.
			</Dummy>

			<h2>Underline</h2>
			<Dummy comp={comp} annotation={{ ...defaultAnnotation, attributes: { rend: 'underline' }}}>
				Et in reprehenderit ea nisi nostrud occaecat deserunt anim ullamco in dolor.
				Sint deserunt labore aute fugiat.
				Nisi dolore irure laborum proident culpa eu enim et ut laboris est.
			</Dummy>

			<h2>Strikethrough</h2>
			<Dummy comp={comp} annotation={{ ...defaultAnnotation, attributes: { rend: 'strikethrough' }}}>
				Eiusmod pariatur adipisicing commodo nostrud velit occaecat tempor incididunt.
				Culpa ex deserunt occaecat fugiat ea est.
				Ullamco anim commodo reprehenderit sint occaecat anim aute.
			</Dummy>

			<h2>Small caps</h2>
			<Dummy comp={comp} annotation={{ ...defaultAnnotation, attributes: { rend: 'case(smallcaps)' }}}>
				Fugiat aliquip reprehenderit ullamco culpa adipisicing fugiat reprehenderit cupidatat id.
				Dummyroident est velit deserunt nostrud magna occaecat veniam est quis.
				Exercitation cupidatat nostrud sit laboris officia occaecat aliqua Lorem.
			</Dummy>
		</div>
	)
})