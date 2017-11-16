import systemComponentsByTags, { Display, IComponentsByTags } from './system-components-by-tags'
import {
	Cell,
	Closer,
	Corr,
	DateTag,
	DivTag, // DivTag === TEI <div>, Div === HTML <div>
	Figure,
	Formula,
	Graphic,
	Hi,
	Line,
	LineGroup,
	Name,
	Opener,
	P,
	Pb,
	PersName,
	PlaceName,
	Row,
	Rs,
	Seg,
	Table,
	Title,
} from './tags'
import Anchor from "./anchor"
import { Div, None } from './system-tags'

const componentsByTags: IComponentsByTags = {
	...systemComponentsByTags,
	...{
		ab: {
			component: Div,
			display: Display.Block,
		},
		anchor: {
			component: Anchor,
			display: Display.Inline,
		},
		body: {
			component: Div,
			display: Display.Block,
		},
		cell: {
			component: Cell,
			display: Display.Block,
		},
		closer: {
			component: Closer,
			display: Display.Block,
		},
		corr: {
			component: Corr,
			display: Display.Inline,
		},
		div: {
			component: DivTag,
			display: Display.Block,
		},
		date: {
			component: DateTag,
			display: Display.Inline,
		},
		figure: {
			component: Figure,
			display: Display.Block,
		},
		formula: {
			component: Formula,
			display: Display.Inline,
		},
		graphic: {
			component: Graphic,
			display: Display.Block,
		},
		hi: {
			component: Hi,
			display: Display.Inline,
		},
		l: {
			component: Line,
			display: Display.Block,
		},
		lg: {
			component: LineGroup,
			display: Display.Block,
		},
		meta: {
			component: None,
			display: Display.None,
		},
		name: {
			component: Name,
			display: Display.Inline,
		},
		note: {
			component: Div,
			display: Display.Block,
		},
		opener: {
			component: Opener,
			display: Display.Block,
		},
		p: {
			component: P,
			display: Display.Block,
		},
		pb: {
			component: Pb,
			display: Display.Block,
		},
		persName: {
			component: PersName,
			display: Display.Inline,
		},
		placeName: {
			component: PlaceName,
			display: Display.Inline,
		},
		row: {
			component: Row,
			display: Display.Block,
		},
		rs: {
			component: Rs,
			display: Display.Inline,
		},
		seg: {
			component: Seg,
			display: Display.Inline,
		},
		table: {
			component: Table,
			display: Display.Block,
		},
		text: {
			component: Div,
			display: Display.Block,
		},
		title: {
			component: Title,
			display: Display.Block,
		},
		TEI: {
			component: Div,
			display: Display.Block,
		},
		teiHeader: {
			component: None,
			display: Display.None,
		},
	}
};

export default componentsByTags;
