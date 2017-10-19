import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'
import {
	AnnotationList,
	RenderedText
} from '../src'
import Tags from '../src/tags/epistolarium'
import { Add, Choice, Corr, Hi, Sic } from '../src/tags/epistolarium/tags'
import { activeAnnotation, rootAnnotation } from './data'

const createStory = (name) => {
	const stories = storiesOf(name, module)
	stories.addDecorator(withKnobs)
	return stories
}

createStory('AnnotationList')
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

createStory('RenderedText')
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

createStory('Add')
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

createStory('Choice')
	.add('default', () =>
		<Choice>
			<Sic>Incorrect</Sic>
			<Corr>Correction</Corr>
		</Choice>
	);

// createStory('Del')
// 	.add('default', () => <Del>This is deleted</Del>);

createStory('Hi')
	.add('underline', () => <Hi data-rend="underline">Underline</Hi>)
	.add('super', () => <div>Aliens warp with tragedy! <Hi data-rend="super">Super</Hi></div>);

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
