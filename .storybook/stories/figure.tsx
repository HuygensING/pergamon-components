import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Tags from '../../src/tags'
const Figure = Tags.figure.component
const Graphic = Tags.graphic.component
import Dummy, { defaultAnnotation } from '../dummy'

storiesOf("Tags/Passive/{ type: figure }", module)
	.add('default', () =>
		<div>
			Deserunt aliquip veniam minim voluptate id.
			Labore consectetur deserunt ex fugiat nulla consequat elit ex pariatur officia nisi proident pariatur.
			<Dummy comp={Figure}>
				<Dummy comp={Graphic} annotation={{ ...defaultAnnotation, attributes: { url: 'docker-hub.png' }}} />
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
					annotation={{
						...defaultAnnotation,
						attributes: {
							height: '549px',
							scale: '.25',
							url: 'docker-hub.png',
							width: '860px',
						}
					}}
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