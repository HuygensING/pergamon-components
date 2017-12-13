import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Tags from '../../src/tags'
const Label = Tags.label.component
const List = Tags.list.component
const Item = Tags.item.component
import Dummy from '../dummy'
import TreeNode from '../../src/models/tree-node'

storiesOf("Tags/Passive/{ type: 'item' }")
	.add('default', () =>
		<div>
			{`See => /Tags/Passive/{ type: 'list' }`}
		</div>
	)

storiesOf("Tags/Passive/{ type: 'list' }")
	.add('default', () =>
		<div>
			Voti mei memor iudicavi hasce qualescunque oratiunculas tibi offerre, ut hae exstarent monumentum grati mei erga te animi. Suscipe igitur primitias studiorum meorum benevolo animo.
			<Dummy comp={List}>
				<Dummy comp={Item}>Deserunt ipsum incididunt excepteur aliqua tempor consequat Lorem.</Dummy>
				<Dummy comp={Item}>Non est occaecat culpa pariatur minim tempor.</Dummy>
				<Dummy comp={Item}>Eiusmod tempor consectetur id duis minim mollit ut reprehenderit commodo consectetur occaecat consequat.</Dummy>
			</Dummy>
			Do dolor esse non irure quis.
			Minim amet et duis dolor elit laboris pariatur cillum.
		</div>
	)
	.add('simple', () =>
		<div>
			Voti mei memor iudicavi hasce qualescunque oratiunculas tibi offerre, ut hae exstarent monumentum grati mei erga te animi. Suscipe igitur primitias studiorum meorum benevolo animo.
			<Dummy comp={List} node={ new TreeNode({ attributes: new Map().set('rend', 'simple'), type: 'list' }) }>
				<Dummy comp={Item}>Deserunt ipsum incididunt excepteur aliqua tempor consequat Lorem.</Dummy>
				<Dummy comp={Item}>Non est occaecat culpa pariatur minim tempor.</Dummy>
				<Dummy comp={Item}>Eiusmod tempor consectetur id duis minim mollit ut reprehenderit commodo consectetur occaecat consequat.</Dummy>
			</Dummy>
			Do dolor esse non irure quis.
			Minim amet et duis dolor elit laboris pariatur cillum.
		</div>
	)
	.add('bulleted', () =>
		<div>
			Voti mei memor iudicavi hasce qualescunque oratiunculas tibi offerre, ut hae exstarent monumentum grati mei erga te animi. Suscipe igitur primitias studiorum meorum benevolo animo.
			<Dummy comp={List} node={ new TreeNode({ attributes: new Map().set('rend', 'bulleted'), type: 'list' }) }>
				<Dummy comp={Item}>Deserunt ipsum incididunt excepteur aliqua tempor consequat Lorem.</Dummy>
				<Dummy comp={Item}>Non est occaecat culpa pariatur minim tempor.</Dummy>
				<Dummy comp={Item}>Eiusmod tempor consectetur id duis minim mollit ut reprehenderit commodo consectetur occaecat consequat.</Dummy>
			</Dummy>
			Do dolor esse non irure quis.
			Minim amet et duis dolor elit laboris pariatur cillum.
		</div>
	)
	.add('numbered', () =>
		<div>
			Voti mei memor iudicavi hasce qualescunque oratiunculas tibi offerre, ut hae exstarent monumentum grati mei erga te animi. Suscipe igitur primitias studiorum meorum benevolo animo.
			<Dummy comp={List} node={ new TreeNode({ attributes: new Map().set('rend', 'numbered'), type: 'list' }) }>
				<Dummy comp={Item}>Deserunt ipsum incididunt excepteur aliqua tempor consequat Lorem.</Dummy>
				<Dummy comp={Item}>Non est occaecat culpa pariatur minim tempor.</Dummy>
				<Dummy comp={Item}>Eiusmod tempor consectetur id duis minim mollit ut reprehenderit commodo consectetur occaecat consequat.</Dummy>
			</Dummy>
			Do dolor esse non irure quis.
			Minim amet et duis dolor elit laboris pariatur cillum.
		</div>
	)
	.add('with labels', () =>
		<div>
			Voti mei memor iudicavi hasce qualescunque oratiunculas tibi offerre, ut hae exstarent monumentum grati mei erga te animi. Suscipe igitur primitias studiorum meorum benevolo animo.
			<Dummy comp={List}>
				<Dummy comp={Label}>a</Dummy><Dummy comp={Item}>Deserunt ipsum incididunt excepteur aliqua tempor consequat Lorem.</Dummy>
				<Dummy comp={Label}>a</Dummy><Dummy comp={Item}>Non est occaecat culpa pariatur minim tempor.</Dummy>
				<Dummy comp={Label}>a</Dummy><Dummy comp={Item}>Eiusmod tempor consectetur id duis minim mollit ut reprehenderit commodo consectetur occaecat consequat.</Dummy>
			</Dummy>
			Do dolor esse non irure quis.
			Minim amet et duis dolor elit laboris pariatur cillum.
		</div>
	)