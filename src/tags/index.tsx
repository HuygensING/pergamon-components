import systemComponentsByTags, { Display, IComponentsByTags } from './system-components-by-tags'
import {
	Abbr,
	Add,
	Cell,
	Corr,
	DateTag,
	Del,
	Expan,
	Figure,
	Graphic,
	Lb,
	Line,
	LineGroup,
	List,
	Name,
	Opener,
	P,
	PersName,
	PlaceName,
	Row,
	Rs,
	Table,
	Title,
	Sic,
	Space,
	GeogName,
	Item,
} from './tags'
import DivTag from './div' // DivTag === TEI <div>, Div === HTML <div>
import Anchor from "./anchor"
import Choice from "./choice"
import { Div, H3, Italic, None, Span } from './system-tags'

const componentsByTags: IComponentsByTags = {
	...systemComponentsByTags,
	...{
		ab: {
			component: Div,
			display: Display.Block,
		},
		abbr: {
			component: Abbr,
			display: Display.Inline,
		},
		add: {
			component: Add,
			display: Display.Inline,
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
		choice: {
			component: Choice,
			display: Display.Inline,
		},
		closer: {
			component: Div,
			display: Display.Block,
		},
		corr: {
			component: Corr,
			display: Display.Inline,
		},
		date: {
			component: DateTag,
			display: Display.Inline,
		},
		del: {
			component: Del,
			display: Display.Inline,
		},
		div: {
			component: DivTag,
			display: Display.Block,
		},
		ex: {
			component: Italic,
			display: Display.Inline,
		},
		expan: {
			component: Expan,
			display: Display.Inline,
		},
		figure: {
			component: Figure,
			display: Display.Block,
		},
		formula: {
			component: Italic,
			display: Display.Inline,
		},
		g: {
			component: Span,
			display: Display.Inline,
		},
		geogName: {
			component: GeogName,
			display: Display.Inline,
		},
		graphic: {
			component: Graphic,
			display: Display.Block,
		},
		head: {
			component: H3,
			display: Display.Block,
		},
		hi: {
			component: Span,
			display: Display.Inline,
		},
		item: {
			component: Item,
			display: Display.Block,
		},
		l: {
			component: Line,
			display: Display.Block,
		},
		label: {
			component: Span,
			display: Display.Inline,
		},
		lb: {
			component: Lb,
			display: Display.Block,
		},
		lg: {
			component: LineGroup,
			display: Display.Block,
		},
		list: {
			component: List,
			display: Display.Block,
		},
		mentioned: {
			component: Span,
			display: Display.Inline,
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
			component: None,
			display: Display.None,
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
			component: Div,
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
			component: Span,
			display: Display.Inline,
		},
		sic: {
			component: Sic,
			display: Display.Inline,
		},
		space: {
			component: Space,
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
