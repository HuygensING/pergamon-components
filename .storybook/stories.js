import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'
import {
	AnnotationList,
	Keywords,
	Metadata,
	RenderedText,
	SemanticSuggestions,
} from '../src'
import { Div } from '../src/tags/system-tags'
import NotImplemented from '../src/tags/not-implemented'
import { activeAnnotation, rootAnnotation } from './data'

import Tags from '../src/tags'
const Add = Tags.add.component
const Cell = Tags.cell.component
const Choice = Tags.choice.component
const Closer = Tags.closer.component
const Corr = Tags.corr.component
const DateTag = Tags.date.component
const Formula = Tags.formula.component
const GeogName = Tags.geogName.component
const Head = Tags.head.component
const Hi = Tags.hi.component
const Item = Tags.item.component
const Line = Tags.l.component
const LineGroup = Tags.lg.component
const List = Tags.list.component
const Name = Tags.name.component
const Opener = Tags.opener.component
const P = Tags.p.component
const PersName = Tags.persName.component
const PlaceName = Tags.placeName.component
const Row = Tags.row.component
const Rs = Tags.rs.component
const Sic = Tags.sic.component
const Space = Tags.space.component
const Table = Tags.table.component
const Title = Tags.title.component

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

createStory('Keywords')
	.add('default', () =>
		<Keywords keywords={[
			{ weight: 0.9, terms: ['oliebol', 'africa'] },
			{ weight: 0.8, terms: ['brief', 'scherm'] },
			{ weight: 0.7, terms: ['opstapje', 'geheugen'] },
			{ weight: 0.7, terms: ['frituurpan', 'belasting'] },
			{ weight: 0.6, terms: ['softbal', 'vriend'] },
			{ weight: 0.4, terms: ['stopcontact'] },
			{ weight: 0.3, terms: ['afhaal'] },
			{ weight: 0.3, terms: ['vakantiepark'] },
			{ weight: 0.3, terms: ['pech'] },
			{ weight: 0.1, terms: ['rond', 'stoel', 'rsa', 'filter', 'groente'] },
		]} />
	)

createStoryWithKnobs('Metadata')
	.add('default', () =>
		<Metadata rootAnnotation={rootAnnotation} />
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

createStory('SemanticSuggestions')
	.add('default', () =>
		<SemanticSuggestions
			fullTextSearch={ () => {} }
			semanticSuggestions={[]}
		/>
	)
	.add('requesting', () =>
		<SemanticSuggestions
			fullTextSearch={ () => {} }
			requesting
			semanticSuggestions={[]}
		/>
	)
	.add('found', () =>
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
	.add('default', () => <Add annotation={{ attributes: {} }}>This is added</Add>);

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
		<Choice annotation={{ attributes: {} }}>
			<Sic annotation={{ attributes: {} }}>Incorrect</Sic>
			<Corr annotation={{ attributes: {} }}>Correction</Corr>
		</Choice>
	);

createStory("Tags/Passive/Closer, { type: closer }")
	.add('default', () =>
		<div>
			Commodo enim adipisicing nostrud labore.
			Ad deserunt commodo cillum Lorem sunt Lorem reprehenderit sint.
			Ut dolor nulla est consequat consectetur magna in culpa eiusmod pariatur.
			<Closer annotation={{ attributes: {} }}>
				Est tempor anim in id anim reprehenderit laboris.
				Eiusmod sit velit pariatur incididunt.
				In adipisicing consequat ullamco duis non occaecat non magna dolore nostrud magna exercitation.
				Ipsum cillum adipisicing est ullamco et aliqua.
			</Closer>
			Minim eu cillum laboris reprehenderit consequat labore ipsum qui cillum ad tempor non.
			Aute exercitation incididunt irure aute dolore culpa consequat.
			Est laborum quis laboris sint enim incididunt minim Lorem ut qui ea proident enim anim.
		</div>
	)

createStory("Tags/Passive/DateTag, { type: date }")
	.add('default', () =>
		<div>
			Minim irure ipsum ea dolore exercitation minim.
			<DateTag annotation={{ attributes: {}}}>Jan van Riebeeck</DateTag>
			Officia incididunt eu est amet adipisicing reprehenderit quis voluptate eiusmod.
		</div>
	)

createStory("Tags/Passive/Div, { type: div }")
	.add('default', () =>
		<div>
			<Div annotation={{ attributes: {} }}>
				Fugiat non commodo non tempor. Esse nisi et sit aute.
				Adipisicing duis labore commodo aliqua cupidatat officia eiusmod proident aliqua do.
				Velit eu aute cupidatat adipisicing voluptate in ullamco.
			</Div>
			<Div annotation={{ attributes: {} }}>
				Minim minim eiusmod ad dolore tempor.
				Eiusmod id occaecat sint qui aliqua sint minim.
				Voluptate ullamco fugiat pariatur voluptate occaecat laborum ipsum culpa dolore quis dolor sit sunt.
			</Div>
		</div>
	)

// createStory('Del')
// 	.add('default', () => <Del>This is deleted</Del>);
import storiesOfFigure from './tags/figure'
storiesOfFigure(createStory, "Tags/Passive/Figure, { type: 'figure' }")

import storiesOfGraphic from './tags/figure'
storiesOfGraphic(createStory, "Tags/Passive/Graphic, { type: 'graphic' }")

createStory("Tags/Passive/Formula, { type: formula }")
	.add('default', () =>
		<div>
			Excepteur esse incididunt officia ad laborum id.
			<Formula annotation={{attributes: {}}}>Euler is unpronouncable</Formula>
			Dolore consequat voluptate do mollit aliqua exercitation culpa duis cupidatat.
		</div>
	)

createStory("Tags/Passive/GeogName, { type: geogName }")
	.add('default', () =>
		<div>Consectetur minim adipisicing <GeogName annotation={{ attributes: { type: 'person' }}}>Cape of Good Hope</GeogName> enim consequat ex aute voluptate do.</div>
	)

createStory("Tags/Passive/Head, { type: 'head' }")
	.add('default', () =>
		<div>
			Elit dolore dolore id aute non.
			Labore ipsum minim laboris irure consectetur dolor eu mollit veniam veniam cillum non ullamco.
			Sit nulla mollit amet aute incididunt sit.
			<Head annotation={{ attributes: {} }}>Aute excepteur quis.</Head>
			Minim magna culpa cillum aliqua ad sint irure.
			Sint proident Lorem id mollit laborum eu esse laboris magna culpa.
			Est non incididunt nulla minim.
		</div>
	)

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
		<LineGroup annotation={{ attributes: {} }}>
			<Line annotation={{ attributes: {} }}>Deserunt ipsum incididunt excepteur aliqua tempor consequat Lorem.</Line>
			<Line annotation={{ attributes: {} }}>Non est occaecat culpa pariatur minim tempor.</Line>
			<Line annotation={{ attributes: {} }}>Eiusmod tempor consectetur id duis minim mollit ut reprehenderit commodo consectetur occaecat consequat.</Line>
		</LineGroup>
	)
	.add('attributes: type: poem', () =>
		<LineGroup annotation={{ attributes: { type: 'poem' }}}>
			<Line annotation={{ attributes: {} }}>Deserunt ipsum incididunt excepteur aliqua tempor consequat Lorem.</Line>
			<Line annotation={{ attributes: {} }}>Non est occaecat culpa pariatur minim tempor.</Line>
			<Line annotation={{ attributes: {} }}>Eiusmod tempor consectetur id duis minim mollit ut reprehenderit commodo consectetur occaecat consequat.</Line>
		</LineGroup>
	)

createStory("Tags/Passive/List { type: 'list' }")
	.add('default', () =>
		<div>
			Voti mei memor iudicavi hasce qualescunque oratiunculas tibi offerre, ut hae exstarent monumentum grati mei erga te animi. Suscipe igitur primitias studiorum meorum benevolo animo.
			<List annotation={{ attributes: {} }}>
				<Item annotation={{ attributes: {} }}>Deserunt ipsum incididunt excepteur aliqua tempor consequat Lorem.</Item>
				<Item annotation={{ attributes: {} }}>Non est occaecat culpa pariatur minim tempor.</Item>
				<Item annotation={{ attributes: {} }}>Eiusmod tempor consectetur id duis minim mollit ut reprehenderit commodo consectetur occaecat consequat.</Item>
			</List>
			Voti mei memor iudicavi hasce qualescunque oratiunculas tibi offerre, ut hae exstarent monumentum grati mei erga te animi. Suscipe igitur primitias studiorum meorum benevolo animo.
		</div>
	)

createStory("Tags/Passive/Name, { type: Name }")
	.add('attributes: type: person', () =>
		<div>Consectetur minim adipisicing <Name annotation={{ attributes: { type: 'person' }}}>Jan van Riebeeck</Name> enim consequat ex aute voluptate do.</div>
	)
	.add('attributes: type: place', () =>
		<div>Fugiat consequat ex mollit <Name annotation={{ attributes: { type: 'place' }}}>Culemborg</Name> incididunt quis non pariatur laborum veniam.</div>
	)

import storiesOfNote from './tags/note'
storiesOfNote(createStory)

createStory("Tags/Other/NotImplemented, { type: NotImplemented }")
	.add('type: unknown-type', () =>
		<div>Consectetur minim adipisicing <NotImplemented annotation={{ type: 'unknown-type', attributes: {} }} tags={Tags}>Jan van Riebeeck</NotImplemented> enim consequat ex aute voluptate do.</div>
	)
	.add('type: name, attributes: { type: "unknown-sub-type" }', () =>
		<div>Consectetur minim adipisicing <NotImplemented annotation={{ type: 'name', attributes: { type: 'unknown-sub-type' } }} tags={Tags}>Jan van Riebeeck</NotImplemented> enim consequat ex aute voluptate do.</div>
	)

createStory("Tags/Passive/Opener, { type: opener }")
	.add('default', () =>
		<div>
			Commodo enim adipisicing nostrud labore.
			Ad deserunt commodo cillum Lorem sunt Lorem reprehenderit sint.
			Ut dolor nulla est consequat consectetur magna in culpa eiusmod pariatur.
			<Opener annotation={{ attributes: {} }}>
				Est tempor anim in id anim reprehenderit laboris.
				Eiusmod sit velit pariatur incididunt.
				In adipisicing consequat ullamco duis non occaecat non magna dolore nostrud magna exercitation.
				Ipsum cillum adipisicing est ullamco et aliqua.
			</Opener>
			Minim eu cillum laboris reprehenderit consequat labore ipsum qui cillum ad tempor non.
			Aute exercitation incididunt irure aute dolore culpa consequat.
			Est laborum quis laboris sint enim incididunt minim Lorem ut qui ea proident enim anim.
		</div>
	)

import storiesOfP from './tags/p'
storiesOfP(createStory)

import storiesOfPb from './tags/pb'
storiesOfPb(createStory)

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

createStory("Tags/Passive/Space, { type: space }")
	.add('default', () =>
		<div>
			Elit id consectetur nisi quis laborum adipisicing ipsum adipisicing.
			Deserunt voluptate exercitation cupidatat nisi sunt esse eu eiusmod ex mollit.
			Incididunt sunt dolor irure amet proident velit Lorem quis.
			<Space annotation={{attributes: {}}} />
			Esse in sit nostrud et sit laborum.
			Id proident do aliqua aliqua cillum quis veniam culpa et tempor.
			Consectetur laboris id incididunt commodo ut velit consectetur labore proident occaecat occaecat tempor nostrud ad.
			Sit amet mollit magna pariatur reprehenderit laboris qui et ullamco officia sit et.
		</div>
	)

createStory("Tags/Passive/Table, { type: table }")
	.add('default', () =>
		<Table annotation={{attributes: {}}}>
			<Row annotation={{attributes: {}}}>
				<Cell annotation={{attributes: {}}}>cel 1</Cell>
				<Cell annotation={{attributes: {}}}>cel 2</Cell>
				<Cell annotation={{attributes: {}}}>cel 3</Cell>
			</Row>
			<Row annotation={{attributes: {}}}>
				<Cell annotation={{attributes: {}}}>cel 4</Cell>
				<Cell annotation={{attributes: {}}}>cel 5</Cell>
				<Cell annotation={{attributes: {}}}>cel 6</Cell>
			</Row>
			<Row annotation={{attributes: {}}}>
				<Cell annotation={{attributes: {}}}>cel 7</Cell>
				<Cell annotation={{attributes: {}}}>cel 8</Cell>
				<Cell annotation={{attributes: {}}}>cel 9</Cell>
			</Row>
		</Table>
	)

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
