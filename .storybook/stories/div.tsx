import * as React from 'react'
import Tags from '../../src/tags'
const DivTag = Tags.div.component
import { storiesOf } from '@storybook/react'
import Dummy, { defaultAnnotation } from '../dummy'

storiesOf("Tags/Passive/{ type: div }", module)
	.add('default', () =>
		<div style={{ maxWidth: '550px' }}>
			Fugiat non commodo non tempor. Esse nisi et sit aute.
			Adipisicing duis labore commodo aliqua cupidatat officia eiusmod proident aliqua do.
			Velit eu aute cupidatat adipisicing voluptate in ullamco.
			<Dummy comp={DivTag}>
				Minim minim eiusmod ad dolore tempor.
				Eiusmod id occaecat sint qui aliqua sint minim.
				Voluptate ullamco fugiat pariatur voluptate occaecat laborum ipsum culpa dolore quis dolor sit sunt.
			</Dummy>
			Exercitation est exercitation aliquip anim incididunt.
			Lorem duis veniam proident est nulla.
			Nisi est exercitation Lorem aliquip ea qui.
		</div>
	)
	.add('para', () =>
		<div style={{ maxWidth: '550px' }}>
			<Dummy comp={DivTag}>
				Proident adipisicing excepteur ea fugiat incididunt pariatur dolor in.
				Qui non amet enim ex sit culpa qui sint quis est anim velit ex.
			</Dummy>
			<Dummy
				annotation={{ ...defaultAnnotation, attributes: { type: 'para' }}}
				comp={DivTag}
			>
				Fugiat non commodo non tempor. Esse nisi et sit aute.
				Adipisicing duis labore commodo aliqua cupidatat officia eiusmod proident aliqua do.
				Velit eu aute cupidatat adipisicing voluptate in ullamco.
			</Dummy>
			<Dummy comp={DivTag}>
				Minim minim eiusmod ad dolore tempor.
				Eiusmod id occaecat sint qui aliqua sint minim.
				Voluptate ullamco fugiat pariatur voluptate occaecat laborum ipsum culpa dolore quis dolor sit sunt.
			</Dummy>
		</div>
	)