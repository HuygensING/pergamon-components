import systemComponentsByTags, { Display, IComponentsByTags } from './system-components-by-tags'
import {
	Cell,
	Closer,
	Corr,
	DateTag,
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
import NotImplemented from './not-implemented'

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
			component: Div,
			display: Display.Block,
		},
		date: {
			component: DateTag,
			display: Display.Inline,
		},
		figDesc: {
			component: NotImplemented,
			display: Display.Block,
		},
		figure: {
			component: Figure,
			display: Display.Block,
		},
		formula: {
			component: Formula,
			display: Display.Inline,
		},
		geogName: {
			component: NotImplemented,
			display: Display.Block,
		},
		graphic: {
			component: Graphic,
			display: Display.Block,
		},
		head: {
			component: NotImplemented,
			display: Display.Block,
		},
		hi: {
			component: Hi,
			display: Display.Inline,
		},
		item: {
			component: NotImplemented,
			display: Display.Block,
		},
		l: {
			component: Line,
			display: Display.Block,
		},
		label: {
			component: NotImplemented,
			display: Display.Block,
		},
		lb: {
			component: NotImplemented,
			display: Display.Block,
		},
		lg: {
			component: LineGroup,
			display: Display.Block,
		},
		list: {
			component: NotImplemented,
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
		orgName: {
			component: NotImplemented,
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
		q: {
			component: NotImplemented,
			display: Display.Block,
		},
		quote: {
			component: NotImplemented,
			display: Display.Block,
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
		sup: {
			component: NotImplemented,
			display: Display.Block,
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
