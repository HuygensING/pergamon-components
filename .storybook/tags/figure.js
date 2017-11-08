import React from 'react'
import { Figure, Graphic } from '../../src/tags/tags'
import createStory from '../stories'

export default (createStory, title) => createStory(title)
	.add('default', () =>
		<div>
			Deserunt aliquip veniam minim voluptate id.
			Labore consectetur deserunt ex fugiat nulla consequat elit ex pariatur officia nisi proident pariatur.
			<Figure>
				<Graphic annotation={{attributes: { url: 'docker-hub.png' }}} />
			</Figure>
			Eiusmod irure elit fugiat aliqua in deserunt et.
			Anim nisi aute anim eiusmod consectetur eiusmod consectetur sunt aute elit.
		</div>
	)
