import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Tags from '../../src/tags'
const Abbr = Tags.abbr.component
const Add = Tags.add.component
const Cell = Tags.cell.component
const Choice = Tags.choice.component
const Closer = Tags.closer.component
const Corr = Tags.corr.component
const Ex = Tags.ex.component
const Expan = Tags.expan.component
const Formula = Tags.formula.component
const Head = Tags.head.component
const Line = Tags.l.component
const LineGroup = Tags.lg.component
const Opener = Tags.opener.component
const Row = Tags.row.component
const Quote = Tags.q.component
const Sic = Tags.sic.component
const Space = Tags.space.component
const Table = Tags.table.component
const Title = Tags.title.component
import NotImplemented from '../../src/tags/not-implemented'
import Dummy from '../dummy'
import TreeNode from '../../src/models/tree-node'

storiesOf("Tags/Passive/{ type: 'add' }")
	.add('default', () =>
		<div style={{ maxWidth: '550px' }}>
			Veniam fugiat aliqua labore est dolore incididunt minim reprehenderit laborum quis excepteur voluptate ut.
			Anim minim enim <Dummy comp={Add}>This is added</Dummy> sit esse tempor mollit.
			Officia aliqua ut nulla nisi magna sunt laboris irure consectetur cupidatat cupidatat elit magna.
		</div>
	)

storiesOf("Tags/Passive/{ type: 'choice' }")
	.add('with sic/corr', () =>
		<div style={{ maxWidth: '500px' }}>
			Nostrud ex est et est cillum veniam ex dolor officia.
			Mollit duis excepteur laboris <Dummy comp={Choice}>
				<Dummy comp={Sic}>Incorrect</Dummy>
				<Dummy comp={Corr}>Correction</Dummy>
			</Dummy> do nulla aliqua veniam in.
			Eu aliqua laborum dolore ad non reprehenderit.
		</div>
	)
	.add('with abbr/expan', () =>
		<div style={{ maxWidth: '500px' }}>
			Nostrud ex est et est cillum veniam ex dolor officia.
			Mollit duis excepteur laboris <Dummy comp={Choice}>
				<Dummy comp={Abbr}>Rd</Dummy>
				<Dummy comp={Expan}>Ro<Dummy comp={Ex}>ad</Dummy></Dummy>
			</Dummy> do nulla aliqua veniam in.
			Eu aliqua laborum dolore ad non reprehenderit.
		</div>
	)
	.add('empty', () =>
		<div style={{ maxWidth: '500px' }}>
			Nostrud ex est et est cillum veniam ex dolor officia.
			Mollit duis excepteur laboris <Dummy comp={Choice}>nothing
			here</Dummy> do nulla aliqua veniam in.
			Eu aliqua laborum dolore ad non reprehenderit.
		</div>
	)

storiesOf("Tags/Passive/{ type: closer }")
	.add('default', () =>
		<div>
			Commodo enim adipisicing nostrud labore.
			Ad deserunt commodo cillum Lorem sunt Lorem reprehenderit sint.
			Ut dolor nulla est consequat consectetur magna in culpa eiusmod pariatur.
			<Dummy comp={Closer}>
				Est tempor anim in id anim reprehenderit laboris.
				Eiusmod sit velit pariatur incididunt.
				In adipisicing consequat ullamco duis non occaecat non magna dolore nostrud magna exercitation.
				Ipsum cillum adipisicing est ullamco et aliqua.
			</Dummy>
			Minim eu cillum laboris reprehenderit consequat labore ipsum qui cillum ad tempor non.
			Aute exercitation incididunt irure aute dolore culpa consequat.
			Est laborum quis laboris sint enim incididunt minim Lorem ut qui ea proident enim anim.
		</div>
	)

storiesOf("Tags/Passive/{ type: formula }")
	.add('default', () =>
		<div>
			Excepteur esse incididunt officia ad laborum id.
			<Dummy comp={Formula}>Euler is unpronouncable</Dummy>
			Dolore consequat voluptate do mollit aliqua exercitation culpa duis cupidatat.
		</div>
	)

storiesOf("Tags/Passive/{ type: 'head' }")
	.add('default', () =>
		<div>
			Elit dolore dolore id aute non.
			Labore ipsum minim laboris irure consectetur dolor eu mollit veniam veniam cillum non ullamco.
			Sit nulla mollit amet aute incididunt sit.
			<Dummy comp={Head}>Aute excepteur quis.</Dummy>
			Minim magna culpa cillum aliqua ad sint irure.
			Sint proident Lorem id mollit laborum eu esse laboris magna culpa.
			Est non incididunt nulla minim.
		</div>
	)

storiesOf("Tags/Passive/{ type: 'hi' }")
	.add('default', () =>
		<div>
			See => /Tags/Rend
		</div>
	)

storiesOf("Tags/Passive/{ type: 'lg' }")
	.add('default', () =>
		<div style={{ maxWidth: '550px' }}>
			Culpa ut sit adipisicing Lorem non est consectetur proident ea.
			Nisi elit ipsum cupidatat commodo officia culpa non magna elit ad reprehenderit nostrud.
			<Dummy comp={LineGroup}>
				<Dummy comp={Line}>Deserunt ipsum incididunt excepteur aliqua tempor consequat Lorem.</Dummy>
				<Dummy comp={Line}>Non est occaecat culpa pariatur minim tempor.</Dummy>
				<Dummy comp={Line}>Eiusmod tempor consectetur id duis minim mollit ut reprehenderit commodo consectetur occaecat consequat.</Dummy>
			</Dummy>
			Excepteur mollit nostrud velit amet eu eu ex eu labore eiusmod adipisicing.
			Dolore anim ad id culpa.
		</div>
	)
	.add('attributes: type: poem', () =>
		<div style={{ maxWidth: '550px' }}>
			Labore dolore Lorem fugiat sint Lorem adipisicing in excepteur reprehenderit.
			Cupidatat id duis tempor dolor aliqua.
			<Dummy comp={LineGroup} node={new TreeNode({ attributes: new Map().set('type', 'poem') })}>
				<Dummy comp={Line} >Deserunt ipsum incididunt excepteur aliqua tempor consequat Lorem.</Dummy>
				<Dummy comp={Line}>Non est occaecat culpa pariatur minim tempor.</Dummy>
				<Dummy comp={Line}>Eiusmod tempor consectetur id duis minim mollit ut reprehenderit commodo consectetur occaecat consequat.</Dummy>
			</Dummy>
			Adipisicing irure ad dolor consequat culpa amet aute mollit commodo culpa qui occaecat.
			In quis minim officia in ea exercitation ipsum et laborum culpa incididunt nisi.
		</div>
	)
	.add('attributes: type: poem with stanzas', () =>
		<div style={{ maxWidth: '550px' }}>
			Labore dolore Lorem fugiat sint Lorem adipisicing in excepteur reprehenderit.
			Cupidatat id duis tempor dolor aliqua.
			<Dummy comp={LineGroup} node={new TreeNode({ attributes: new Map().set('type', 'poem') })}>
				<Dummy comp={Line} node={new TreeNode({ attributes: new Map().set('type', 'stanza') })}>Deserunt ipsum incididunt excepteur aliqua tempor consequat Lorem. Deserunt ipsum incididunt excepteur aliqua tempor consequat Lorem. Deserunt ipsum incididunt excepteur aliqua tempor consequat Lorem.</Dummy>
				<Dummy comp={Line} node={new TreeNode({ attributes: new Map().set('type', 'stanza') })}>Non est occaecat culpa pariatur minim tempor.Deserunt ipsum incididunt excepteur aliqua tempor consequat Lorem. Deserunt ipsum incididunt excepteur aliqua tempor consequat Lorem.</Dummy>
				<Dummy comp={Line} node={new TreeNode({ attributes: new Map().set('type', 'stanza') })}>Eiusmod tempor consectetur id duis minim mollit ut reprehenderit commodo consectetur occaecat consequat.</Dummy>
			</Dummy>
			Adipisicing irure ad dolor consequat culpa amet aute mollit commodo culpa qui occaecat.
			In quis minim officia in ea exercitation ipsum et laborum culpa incididunt nisi.
		</div>
	)

storiesOf("Tags/Other/{ type: NotImplemented }")
	.add('type: unknown-type', () =>
		<div>Consectetur minim
			adipisicing <Dummy comp={NotImplemented} node={new TreeNode({ type: 'unknown-type', attributes: new Map() })} tags={Tags}>Jan van Riebeeck</Dummy> enim
			consequat ex aute voluptate do.</div>
	)
	.add('type: name, attributes: { type: "unknown-sub-type" }', () =>
		<div>Consectetur minim
			adipisicing <Dummy
				comp={NotImplemented}
				node={new TreeNode({type: 'name', attributes: new Map().set('type', 'unknown-sub-type') })} tags={Tags}>Jan van Riebeeck</Dummy> enim
			consequat ex aute voluptate do.</div>
	)

storiesOf("Tags/Passive/{ type: opener }")
	.add('default', () =>
		<div>
			Commodo enim adipisicing nostrud labore.
			Ad deserunt commodo cillum Lorem sunt Lorem reprehenderit sint.
			Ut dolor nulla est consequat consectetur magna in culpa eiusmod pariatur.
			<Dummy comp={Opener}>
				Est tempor anim in id anim reprehenderit laboris.
				Eiusmod sit velit pariatur incididunt.
				In adipisicing consequat ullamco duis non occaecat non magna dolore nostrud magna exercitation.
				Ipsum cillum adipisicing est ullamco et aliqua.
			</Dummy>
			Minim eu cillum laboris reprehenderit consequat labore ipsum qui cillum ad tempor non.
			Aute exercitation incididunt irure aute dolore culpa consequat.
			Est laborum quis laboris sint enim incididunt minim Lorem ut qui ea proident enim anim.
		</div>
	)

storiesOf("Tags/Passive/{ type: q }")
	.add('default', () =>
		<div>
			Elit id consectetur nisi quis laborum adipisicing ipsum adipisicing.
			Deserunt voluptate exercitation cupidatat nisi sunt esse eu eiusmod ex mollit.
			Incididunt sunt dolor irure amet proident velit Lorem quis.
			<Dummy comp={Quote}>Esse in sit nostrud et sit laborum.</Dummy>
			Id proident do aliqua aliqua cillum quis veniam culpa et tempor.
			Consectetur laboris id incididunt commodo ut velit consectetur labore proident occaecat occaecat tempor nostrud ad.
			Sit amet mollit magna pariatur reprehenderit laboris qui et ullamco officia sit et.
		</div>
	)

storiesOf("Tags/Passive/{ type: space }")
	.add('default', () =>
		<div>
			Elit id consectetur nisi quis laborum adipisicing ipsum adipisicing.
			Deserunt voluptate exercitation cupidatat nisi sunt esse eu eiusmod ex mollit.
			Incididunt sunt dolor irure amet proident velit Lorem quis.
			<Dummy comp={Space} />
			Esse in sit nostrud et sit laborum.
			Id proident do aliqua aliqua cillum quis veniam culpa et tempor.
			Consectetur laboris id incididunt commodo ut velit consectetur labore proident occaecat occaecat tempor nostrud ad.
			Sit amet mollit magna pariatur reprehenderit laboris qui et ullamco officia sit et.
		</div>
	)

storiesOf("Tags/Passive/{ type: table }")
	.add('default', () =>
		<div style={{ maxWidth: '550px' }}>
			Enim deserunt qui dolore ut nostrud occaecat laborum anim Lorem et.
			Sint minim dolore Lorem aute in ex proident dolor et.
			<Dummy comp={Table}>
				<Dummy comp={Row}>
					<Dummy comp={Cell}>cel 1</Dummy>
					<Dummy comp={Cell}>cel 2</Dummy>
					<Dummy comp={Cell}>cel 3</Dummy>
				</Dummy>
				<Dummy comp={Row}>
					<Dummy comp={Cell}>cel 4</Dummy>
					<Dummy comp={Cell}>cel 5</Dummy>
					<Dummy comp={Cell}>cel 6</Dummy>
				</Dummy>
				<Dummy comp={Row}>
					<Dummy comp={Cell}>cel 7</Dummy>
					<Dummy comp={Cell}>cel 8</Dummy>
					<Dummy comp={Cell}>cel 9</Dummy>
				</Dummy>
			</Dummy>
			Esse eiusmod velit do reprehenderit labore ea ea et est proident exercitation qui nostrud.
			Veniam Lorem voluptate exercitation Lorem.
		</div>
	)

storiesOf("Tags/Passive/{ type: title }")
	.add('default', () =>
		<div>
			Dolor eiusmod ea anim ipsum dolor minim fugiat deserunt nostrud ipsum.
			Amet nisi eiusmod non deserunt exercitation commodo commodo cupidatat non labore voluptate.
			<Dummy comp={Title}>Laboris labore est aliquip</Dummy>
			Eu magna labore consequat voluptate cillum tempor occaecat.
			Labore eiusmod culpa adipisicing laborum.
			Fugiat sit ea magna do adipisicing voluptate eiusmod consectetur duis est adipisicing ullamco labore.
			Laboris commodo aute ad adipisicing tempor occaecat deserunt deserunt consequat in officia consectetur tempor enim.
		</div>
	)
