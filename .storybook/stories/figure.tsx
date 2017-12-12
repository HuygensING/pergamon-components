import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Tags from '../../src/tags'
const Figure = Tags.figure.component
const Graphic = Tags.graphic.component
import Dummy from '../dummy'
import TreeNode from '../../src/models/tree-node'

storiesOf("Tags/Passive/{ type: figure }", module)
	.add('default', () =>
		<div>
			Deserunt aliquip veniam minim voluptate id.
			Labore consectetur deserunt ex fugiat nulla consequat elit ex pariatur officia nisi proident pariatur.
			<Dummy comp={Figure}>
				<Dummy comp={Graphic} node={new TreeNode({ attributes: new Map().set('url', 'docker-hub.png') })} />
			</Dummy>
			Eiusmod irure elit fugiat aliqua in deserunt et.
			Anim nisi aute anim eiusmod consectetur eiusmod consectetur sunt aute elit.
		</div>
	)
	.add('scale=".25"', () =>
		<div>
			Deserunt aliquip veniam minim voluptate id.
			Labore consectetur deserunt ex fugiat nulla consequat elit ex pariatur officia nisi proident pariatur.
			<Dummy comp={Figure}>
				<Dummy
					comp={Graphic}
					node={
						new TreeNode({
							attributes: new Map()
								.set('height', '549px')
								.set('scale', '.25')
								.set('url', 'docker-hub.png')
								.set('width', '860px')
						})
					}
				/>
			</Dummy>
			Eiusmod irure elit fugiat aliqua in deserunt et.
			Anim nisi aute anim eiusmod consectetur eiusmod consectetur sunt aute elit.
		</div>
	)

storiesOf("Tags/Passive/{ type: graphic }", module)
	.add('default', () =>
		<div>
			See => Tags/Passive/Figure
		</div>
	)