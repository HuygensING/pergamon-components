
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Tags from '../../src/tags'
const DateTag = Tags.date.component
const GeogName = Tags.geogName.component
const Name = Tags.name.component
const PersName = Tags.persName.component
const PlaceName = Tags.placeName.component
const Rs = Tags.rs.component
import Dummy, { defaultAnnotation } from '../dummy';

storiesOf("Tags/Passive/Named Entities/{ type: date }")
	.add('default', () =>
		<div>
			Minim irure ipsum ea dolore exercitation minim.
			<Dummy comp={DateTag}>12th of May</Dummy>
			Officia incididunt eu est amet adipisicing reprehenderit quis voluptate eiusmod.
		</div>
	)

storiesOf("Tags/Passive/Named Entities/{ type: geogName }")
	.add('default', () =>
		<div>
			Consectetur minim 
			adipisicing <Dummy comp={GeogName}>Cape of Good Hope</Dummy> enim 
			consequat ex aute voluptate do.
		</div>
	)

storiesOf("Tags/Passive/Named Entities/{ type: name }")
	.add('attributes: type: person', () =>
		<div>Consectetur minim adipisicing <Dummy comp={Name} annotation={{ ...defaultAnnotation, attributes: { type: 'person' }}}>Jan van Riebeeck</Dummy> enim consequat ex aute voluptate do.</div>
	)
	.add('attributes: type: place', () =>
		<div>Fugiat consequat ex mollit <Dummy comp={Name} annotation={{ ...defaultAnnotation, attributes: { type: 'place' }}}>Culemborg</Dummy> incididunt quis non pariatur laborum veniam.</div>
	)

storiesOf("Tags/Passive/Named Entities/{ type: personName }")
	.add('default', () =>
		<div>Consectetur minim adipisicing <Dummy comp={PersName} annotation={{ ...defaultAnnotation, attributes: { type: 'person' }}}>Jan van Riebeeck</Dummy> enim consequat ex aute voluptate do.</div>
	)

storiesOf("Tags/Passive/Named Entities/{ type: placeName }")
	.add('default', () =>
		<div>Fugiat consequat ex mollit <Dummy comp={PlaceName} annotation={{ ...defaultAnnotation, attributes: { type: 'place' }}}>Culemborg</Dummy> incididunt quis non pariatur laborum veniam.</div>
	)

storiesOf("Tags/Passive/Named Entities/{ type: rs }")
	.add('attributes: type: person', () =>
		<div>Consectetur minim adipisicing <Dummy comp={Rs} annotation={{ ...defaultAnnotation, attributes: { type: 'person' }}}>ab eo</Dummy> enim consequat ex aute voluptate do.</div>
	)
	.add('attributes: type: place', () =>
		<div>Fugiat consequat ex mollit <Dummy comp={Rs} annotation={{ ...defaultAnnotation, attributes: { type: 'place' }}}>est ibi</Dummy> incididunt quis non pariatur laborum veniam.</div>
	)
