import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Tags from '../../src/tags'
const P = Tags.p.component
import Dummy from '../dummy'

storiesOf("Tags/Passive/{ type: p }", module)
	.add('default', () =>
		<div>
			<Dummy comp={P}>
				Dummyroident Lorem ut cillum duis. Eiusmod reprehenderit ea mollit id excepteur occaecat dolor consequat.
				Est culpa ea consequat nulla est eiusmod ex incididunt laboris.
			</Dummy>
			<Dummy comp={P}>
				Dolore nisi sit aliquip reprehenderit proident adipisicing dolore excepteur cupidatat. 
				Deserunt veniam reprehenderit deserunt exercitation eu ipsum non. 
				Qui culpa exercitation pariatur commodo adipisicing reprehenderit mollit fugiat anim dolore anim.
			</Dummy>
			<Dummy comp={P}>
				Et in reprehenderit ea nisi nostrud occaecat deserunt anim ullamco in dolor.
				Sint deserunt labore aute fugiat.
				Cupidatat irure mollit aliquip dolor cillum commodo exercitation culpa duis sint ullamco ad.
			</Dummy>
		</div>
	)