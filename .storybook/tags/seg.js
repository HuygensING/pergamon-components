import React from 'react'
import Tags from '../../src/tags'
const Seg = Tags.seg.component
import createStory from '../stories'

export default (createStory) => createStory("Tags/Passive/Seg, { type: seg }")
	.add('default', () =>
		<div>
			<Seg annotation={{attributes: {}}}>
				Segroident Lorem ut cillum duis. Eiusmod reprehenderit ea mollit id excepteur occaecat dolor consequat.
				Est culpa ea consequat nulla est eiusmod ex incididunt laboris.
			</Seg>
			<Seg annotation={{attributes: {}}}>
				Dolore nisi sit aliquip reprehenderit proident adipisicing dolore excepteur cupidatat. 
				Deserunt veniam reprehenderit deserunt exercitation eu ipsum non. 
				Qui culpa exercitation pariatur commodo adipisicing reprehenderit mollit fugiat anim dolore anim.
			</Seg>
			<Seg annotation={{attributes: {}}}>
				Et in reprehenderit ea nisi nostrud occaecat deserunt anim ullamco in dolor.
				Sint deserunt labore aute fugiat.
				Cupidatat irure mollit aliquip dolor cillum commodo exercitation culpa duis sint ullamco ad.
			</Seg>
		</div>
	)
	.add('attributes: rend', () =>
		<div>
			<h2>Italic</h2>
			<Seg annotation={{attributes: { rend: "italic" }}}>
				Segroident Lorem ut cillum duis. Eiusmod reprehenderit ea mollit id excepteur occaecat dolor consequat.
				Est culpa ea consequat nulla est eiusmod ex incididunt laboris.
				Ex cillum dolor enim eu nostrud voluptate quis.
			</Seg>

			<h2>Bold</h2>
			<Seg annotation={{attributes: { rend: 'bold' }}}>
				Dolore nisi sit aliquip reprehenderit proident adipisicing dolore excepteur cupidatat. 
				Deserunt veniam reprehenderit deserunt exercitation eu ipsum non. 
				Qui culpa exercitation pariatur commodo adipisicing reprehenderit mollit fugiat anim dolore anim.
			</Seg>

			<h2>Underline</h2>
			<Seg annotation={{attributes: { rend: 'underline' }}}>
				Et in reprehenderit ea nisi nostrud occaecat deserunt anim ullamco in dolor.
				Sint deserunt labore aute fugiat.
				Nisi dolore irure laborum proident culpa eu enim et ut laboris est.
			</Seg>

			<h2>Strikethrough</h2>
			<Seg annotation={{attributes: { rend: 'strikethrough' }}}>
				Eiusmod pariatur adipisicing commodo nostrud velit occaecat tempor incididunt.
				Culpa ex deserunt occaecat fugiat ea est.
				Ullamco anim commodo reprehenderit sint occaecat anim aute.
			</Seg>

			<h2>Small caps</h2>
			<Seg annotation={{attributes: { rend: 'case(smallcaps)' }}}>
				Fugiat aliquip reprehenderit ullamco culpa adipisicing fugiat reprehenderit cupidatat id.
				Segroident est velit deserunt nostrud magna occaecat veniam est quis.
				Exercitation cupidatat nostrud sit laboris officia occaecat aliqua Lorem.
			</Seg>
		</div>
	)