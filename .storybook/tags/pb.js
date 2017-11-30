import React from 'react'
import Tags from '../../src/tags'
const Pb = Tags.pb.component
import createStory from '../stories'

export default (createStory) => createStory("Tags/Passive/Pb, { type: pb }")
	.add('None', () =>
		<div>
			Proident Lorem ut cillum duis. Eiusmod reprehenderit ea mollit id excepteur occaecat dolor consequat.
			Est culpa ea consequat nulla est eiusmod ex incididunt laboris.
			<Pb annotation={{attributes: {}}} />
			Dolore nisi sit aliquip reprehenderit proident adipisicing dolore excepteur cupidatat. 
			Deserunt veniam reprehenderit deserunt exercitation eu ipsum non. 
			Qui culpa exercitation pariatur commodo adipisicing reprehenderit mollit fugiat anim dolore anim.
		</div>
	)