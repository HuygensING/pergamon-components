import React from 'react'
import Tags from '../../src/tags'
const P = Tags.p.component
import createStory from '../stories'

export default (createStory) => createStory("Tags/Passive/P, { type: p }")
	.add('default', () =>
		<div>
			<P annotation={{attributes: {}}}>
				Proident Lorem ut cillum duis. Eiusmod reprehenderit ea mollit id excepteur occaecat dolor consequat.
				Est culpa ea consequat nulla est eiusmod ex incididunt laboris.
			</P>
			<P annotation={{attributes: {}}}>
				Dolore nisi sit aliquip reprehenderit proident adipisicing dolore excepteur cupidatat. 
				Deserunt veniam reprehenderit deserunt exercitation eu ipsum non. 
				Qui culpa exercitation pariatur commodo adipisicing reprehenderit mollit fugiat anim dolore anim.
			</P>
			<P annotation={{attributes: {}}}>
				Et in reprehenderit ea nisi nostrud occaecat deserunt anim ullamco in dolor.
				Sint deserunt labore aute fugiat.
				Cupidatat irure mollit aliquip dolor cillum commodo exercitation culpa duis sint ullamco ad.
			</P>
		</div>
	)
	.add('attributes: rend: ...', () =>
		<div>
			<h2>Italic</h2>
			<P annotation={{attributes: { rend: "italic" }}}>
				Proident Lorem ut cillum duis. Eiusmod reprehenderit ea mollit id excepteur occaecat dolor consequat.
				Est culpa ea consequat nulla est eiusmod ex incididunt laboris.
				Ex cillum dolor enim eu nostrud voluptate quis.
			</P>

			<h2>Bold</h2>
			<P annotation={{attributes: { rend: 'bold' }}}>
				Dolore nisi sit aliquip reprehenderit proident adipisicing dolore excepteur cupidatat. 
				Deserunt veniam reprehenderit deserunt exercitation eu ipsum non. 
				Qui culpa exercitation pariatur commodo adipisicing reprehenderit mollit fugiat anim dolore anim.
			</P>

			<h2>Underline</h2>
			<P annotation={{attributes: { rend: 'underline' }}}>
				Et in reprehenderit ea nisi nostrud occaecat deserunt anim ullamco in dolor.
				Sint deserunt labore aute fugiat.
				Nisi dolore irure laborum proident culpa eu enim et ut laboris est.
			</P>

			<h2>Strikethrough</h2>
			<P annotation={{attributes: { rend: 'strikethrough' }}}>
				Eiusmod pariatur adipisicing commodo nostrud velit occaecat tempor incididunt.
				Culpa ex deserunt occaecat fugiat ea est.
				Ullamco anim commodo reprehenderit sint occaecat anim aute.
			</P>

			<h2>Small caps</h2>
			<P annotation={{attributes: { rend: 'case(smallcaps)' }}}>
				Fugiat aliquip reprehenderit ullamco culpa adipisicing fugiat reprehenderit cupidatat id.
				Proident est velit deserunt nostrud magna occaecat veniam est quis.
				Exercitation cupidatat nostrud sit laboris officia occaecat aliqua Lorem.
			</P>
		</div>
	)