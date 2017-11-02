import * as React from 'react';
import systemComponentsByTags, { Display, IComponentsByTags } from './system-components-by-tags';
import {
	Corr,
	DateTag,
	Hi,
	Line,
	LineGroup,
	Name,
	P,
	PersName,
	PlaceName,
	Rs,
	Seg,
	Title,
} from './tags'
import Note from "./note";
import { Span, Div, None, NotImplemented } from './system-tags';

const componentsByTags: IComponentsByTags = {
	...systemComponentsByTags,
	...{
		ab: {
			component: Div,
			display: Display.Block,
		},
		body: {
			component: Div,
			display: Display.Block,
		},
		cell: {
			component: NotImplemented,
			display: Display.Block,
		},
		closer: {
			component: NotImplemented,
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
		figure: {
			component: NotImplemented,
			display: Display.Block,
		},
		formula: {
			component: NotImplemented,
			display: Display.Block,
		},
		geogName: {
			component: NotImplemented,
			display: Display.Block,
		},
		graphic: {
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
			component: Note,
			display: Display.Inline,
		},
		opener: {
			component: NotImplemented,
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
			component: NotImplemented,
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
			component: NotImplemented,
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
			component: NotImplemented,
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
