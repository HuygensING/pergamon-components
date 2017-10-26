import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'
import {
	AnnotationList,
	RenderedText,
	SemanticSuggestions,
} from '../src'
import Tags from '../src/tags'
import {
	Add,
	Choice,
	Corr,
	DateTag, // Date is a reserved keyword
	Hi,
	Line,
	LineGroup,
	Name,
	P,
	PersName,
	PlaceName,
	Rs,
	Sic,
	Title,
} from '../src/tags/tags'
import { 
	Div,
} from '../src/tags/default-tags'
import { activeAnnotation, rootAnnotation } from './data'

export const createStory = (name) => storiesOf(name, module)

export const createStoryWithKnobs = (name) => {
	const stories = createStory(name)
	stories.addDecorator(withKnobs)
	return stories
}

createStoryWithKnobs('AnnotationList')
	.add('default', () =>
		<AnnotationList
			activateAnnotation={ action('activate Annotation') }
			rootAnnotation={ object('rootAnnotation', rootAnnotation) }
		/>
	)
	.add('active annotation', () =>
		<AnnotationList
			activeAnnotation={ object('activeAnnotation', activeAnnotation) }
			activateAnnotation={ action('activate Annotation') }
			rootAnnotation={ object('rootAnnotation', rootAnnotation) }
		/>
	)

createStoryWithKnobs('RenderedText')
	.add('default', () =>
		<RenderedText
			root={ object('rootAnnotation', rootAnnotation) }
			tags={Tags}
		/>
	)
	.add('active annotation', () =>
		<RenderedText
			activeAnnotation={ object('activeAnnotation', Object.assign({}, activeAnnotation)) }
			root={ object('rootAnnotation', rootAnnotation) }
			tags={Tags}
		/>
	)

createStory('SemanticSearch')
	.add('default', () =>
		<SemanticSuggestions
			fullTextSearch={ () => {} }
			semanticSuggestions={[
				{ text: 'reprehenderit', weight: 1 },
				{ text: 'pariatur', weight: 0.9 },
				{ text: 'occaecat', weight: 0.9 },
				{ text: 'tempor', weight: 0.7 },
				{ text: 'nostrud', weight: 0.6 },
				{ text: 'eiusmod', weight: 0.5 },
				{ text: 'quis', weight: 0.2 },
			]}
		/>
	)

createStory("Tags/Passive/Add, { type: 'add' }")
	.add('default', () => <Add>This is added</Add>);

// createStory('Anchor')
// 	.add('default', () =>
// 		<Body>
// 			<span>Wow</span><Anchor n="no1" /><span>, arrr.</span><br />
// 			<span>Jolly, undead tunas</span><Anchor n="no2" activeNote="no2" /><span> darkly burn a mighty, scurvy mainland.</span><br />
// 			<Anchor n="no3" /><span>Why does the son travel?</span><Anchor n="no4" /><br />
// 			<span>Seas</span><Anchor n="no5" /><Anchor n="no6" /><Anchor n="no7" /><span> die with power!</span><br />
// 		</Body>
// 	);

createStory("Tags/Passive/Choice, { type: 'choice' }")
	.add('default', () =>
		<Choice>
			<Sic>Incorrect</Sic>
			<Corr>Correction</Corr>
		</Choice>
	);

createStory("Tags/Passive/DateTag, { type: date }")
	.add('default', () => <DateTag>Jan van Riebeeck</DateTag>)

createStory("Tags/Passive/Div, { type: div }")
	.add('default', () =>
		<div>
			<Div>
				Fugiat non commodo non tempor. Esse nisi et sit aute.
				Adipisicing duis labore commodo aliqua cupidatat officia eiusmod proident aliqua do.
				Velit eu aute cupidatat adipisicing voluptate in ullamco.
			</Div>
			<Div>
				Minim minim eiusmod ad dolore tempor.
				Eiusmod id occaecat sint qui aliqua sint minim.
				Voluptate ullamco fugiat pariatur voluptate occaecat laborum ipsum culpa dolore quis dolor sit sunt.
			</Div>
		</div>
	)

// createStory('Del')
// 	.add('default', () => <Del>This is deleted</Del>);

createStory("Tags/Passive/Hi', { type: 'hi' }")
	.add('attributes: rend: bold', () => <div>Aliens <Hi annotation={{ attributes: { rend: 'bold' }}}>warp</Hi> with tragedy!</div>)
	.add('attributes: rend: italic', () => <div>Aliens <Hi annotation={{ attributes: { rend: 'italic' }}}>warp</Hi> with tragedy!</div>)
	.add('attributes: rend: underline', () => <Hi annotation={{ attributes: { rend: 'underline' }}}>Underline</Hi>)
	.add('attributes: rend: strikethrough', () => <div>Aliens warp with tragedy! <Hi annotation={{ attributes: { rend: 'strikethrough' }}}>Super</Hi></div>)
	.add('attributes: rend: superscript', () => <div>Aliens <Hi annotation={{ attributes: { rend: 'superscript' }}}>warp</Hi> with tragedy!</div>)
	.add('attributes: rend: subscript', () => <div>Aliens <Hi annotation={{ attributes: { rend: 'subscript' }}}>warp</Hi> with tragedy!</div>)
	.add('attributes: rend: case(smallcaps)', () => <div>Aliens <Hi annotation={{ attributes: { rend: 'case(smallcaps)' }}}>warp</Hi> with tragedy!</div>)

createStory("Tags/Passive/LineGroup { type: 'lg' }")
	.add('default', () =>
		<LineGroup>
			<Line>Deserunt ipsum incididunt excepteur aliqua tempor consequat Lorem.</Line>
			<Line>Non est occaecat culpa pariatur minim tempor.</Line>
			<Line>Eiusmod tempor consectetur id duis minim mollit ut reprehenderit commodo consectetur occaecat consequat.</Line>
		</LineGroup>
	)
	.add('attributes: type: poem', () =>
		<LineGroup annotation={{ attributes: { type: 'poem' }}}>
			<Line>Deserunt ipsum incididunt excepteur aliqua tempor consequat Lorem.</Line>
			<Line>Non est occaecat culpa pariatur minim tempor.</Line>
			<Line>Eiusmod tempor consectetur id duis minim mollit ut reprehenderit commodo consectetur occaecat consequat.</Line>
		</LineGroup>
	)

createStory("Tags/Interactive/Note { type: 'note' }")
	.add('default', () =>
		<LineGroup>
			<Line>Deserunt ipsum incididunt excepteur aliqua tempor consequat Lorem.</Line>
			<Line>Non est occaecat culpa pariatur minim tempor.</Line>
			<Line>Eiusmod tempor consectetur id duis minim mollit ut reprehenderit commodo consectetur occaecat consequat.</Line>
		</LineGroup>
	)
	.add('attributes: type: poem', () =>
		<LineGroup annotation={{ attributes: { type: 'poem' }}}>
			<Line>Deserunt ipsum incididunt excepteur aliqua tempor consequat Lorem.</Line>
			<Line>Non est occaecat culpa pariatur minim tempor.</Line>
			<Line>Eiusmod tempor consectetur id duis minim mollit ut reprehenderit commodo consectetur occaecat consequat.</Line>
		</LineGroup>
	)

createStory("Tags/Passive/Name, { type: Name }")
	.add('attributes: type: person', () =>
		<div>Consectetur minim adipisicing <Name annotation={{ attributes: { type: 'person' }}}>Jan van Riebeeck</Name> enim consequat ex aute voluptate do.</div>
	)
	.add('attributes: type: place', () =>
		<div>Fugiat consequat ex mollit <Name annotation={{ attributes: { type: 'place' }}}>Culemborg</Name> incididunt quis non pariatur laborum veniam.</div>
	)

import storiesOfP from './tags/p'
storiesOfP(createStory)

createStory("Tags/Passive/PersName, { type: personName }")
	.add('default', () =>
		<div>Consectetur minim adipisicing <PersName annotation={{ attributes: { type: 'person' }}}>Jan van Riebeeck</PersName> enim consequat ex aute voluptate do.</div>
	)

createStory("Tags/Passive/PlaceName, { type: placeName }")
	.add('default', () =>
		<div>Fugiat consequat ex mollit <PlaceName annotation={{ attributes: { type: 'place' }}}>Culemborg</PlaceName> incididunt quis non pariatur laborum veniam.</div>
	)

createStory("Tags/Passive/Rs, { type: rs }")
	.add('attributes: type: person', () =>
		<div>Consectetur minim adipisicing <Rs annotation={{ attributes: { type: 'person' }}}>ab eo</Rs> enim consequat ex aute voluptate do.</div>
	)
	.add('attributes: type: place', () =>
		<div>Fugiat consequat ex mollit <Rs annotation={{ attributes: { type: 'place' }}}>est ibi</Rs> incididunt quis non pariatur laborum veniam.</div>
	)

import storiesOfSeg from './tags/seg'
storiesOfSeg(createStory)

createStory("Tags/Passive/Title, { type: title }")
	.add('default', () =>
		<div>
			Dolor eiusmod ea anim ipsum dolor minim fugiat deserunt nostrud ipsum.
			Amet nisi eiusmod non deserunt exercitation commodo commodo cupidatat non labore voluptate.
			<Title annotation={{ attributes: {} }}>Laboris labore est aliquip</Title>
			Eu magna labore consequat voluptate cillum tempor occaecat.
			Labore eiusmod culpa adipisicing laborum.
			Fugiat sit ea magna do adipisicing voluptate eiusmod consectetur duis est adipisicing ullamco labore.
			Laboris commodo aute ad adipisicing tempor occaecat deserunt deserunt consequat in officia consectetur tempor enim.
		</div>
	)

// createStory('Notes')
// 	.add('default', () =>
// 		<Body>
// 		<Lb><No>10</No></Lb>Virtually deserve a sun.<br />
// 		<Lb><No>11</No></Lb>
// 		Shield, mystery, and energy.<Anchor activeNote="n1" n="n1" />
// 		Girl of a final attitude, <Anchor n="n2" />gather the mind!<br />
// 		<Lb><No>12</No></Lb>Spaces meet with paralysis!<br />
// 		<Notes activeNote="n2" noteTop="46">
// 			<Note n="n1">A holy form of extend is the ascension.</Note>
// 			<Note n="n2">Safely emptiness is to remember the silence of the ego's ignorance.</Note>
// 			<Note n="n3">Our mysterious art for sorrow is to understand others theosophically.</Note>
// 		</Notes>
// 		</Body>
// 	);

// createStory('Pagebreak')
// 	.add('default', () =>
// 		<Body>
// 			<Pb>
// 				<FacsThumb
// 					url="SRA024000001_0004_L"
// 				/>
// 			</Pb>
// 			<Lb><No>1</No></Lb>Teleporters die with mind!<br />
// 			<Lb><No>2</No></Lb>Virtually desire a sun.<br />
// 			<Lb><No>3</No></Lb>Spaces warp with procedure!<br />
// 			<Lb><No>4</No></Lb>Devastation, energy, and advice.<br />
// 			<Lb><No>5</No></Lb>Virtually avoid a klingon.<br />
// 			<Lb><No>6</No></Lb>Alignment, sensor, and mineral.<br />
// 			<Lb><No>7</No></Lb>Suns warp with death!<br />
// 			<Pb>
// 				<FacsThumb
// 					url="SRA024000001_0005_L"
// 				/>
// 			</Pb>
// 			<Lb><No>8</No></Lb>C-beams fly with sonic shower!<br />
// 			<Lb><No>9</No></Lb>Sonic shower, alarm, and disconnection.<br />
// 			<Lb><No>10</No></Lb>Virtually deserve a sun.<br />
// 			<Lb><No>11</No></Lb>Shield, mystery, and energy.<br />
// 			<Lb><No>12</No></Lb>Spaces meet with paralysis!<br />
// 			...
// 		</Body>
// 	)
// 	.add('With active note', () =>
// 		<Body>
// 			<Pb>
// 				<FacsThumb
// 					activeNote="some-note"
// 					url="SRA024000001_0004_L"
// 				/>
// 			</Pb>
// 			<Lb><No>1</No></Lb>Teleporters die with mind!<br />
// 			<Lb><No>2</No></Lb>Virtually desire a sun.<br />
// 			<Lb><No>3</No></Lb>Spaces warp with procedure!<br />
// 			<Lb><No>4</No></Lb>Devastation, energy, and advice.<br />
// 			<Lb><No>5</No></Lb>Virtually avoid a klingon.<br />
// 			<Lb><No>6</No></Lb>Alignment, sensor, and mineral.<br />
// 			<Lb><No>7</No></Lb>Suns warp with death!<br />
// 			<Pb>
// 				<FacsThumb
// 					activeNote="some-note"
// 					url="SRA024000001_0005_L"
// 				/>
// 			</Pb>
// 			<Lb><No>8</No></Lb>C-beams fly with sonic shower!<br />
// 			<Lb><No>9</No></Lb>Sonic shower, alarm, and disconnection.<br />
// 			<Lb><No>10</No></Lb>Virtually deserve a sun.<br />
// 			<Lb><No>11</No></Lb>Shield, mystery, and energy.<br />
// 			<Lb><No>12</No></Lb>Spaces meet with paralysis!<br />
// 			...
// 		</Body>
// 	);

// createStory('Supplied')
// 	.add('default', () => <div>AFAIK <Supplied>As Far As I Know</Supplied></div>)

// createStory('Unclear')
// 	.add('default', () => <Unclear>Unclear</Unclear>);
