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
	Seg,
	Title,
} from './tags'
import Note from "./note";
import { Span, Div, None } from './default-tags';

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
			component: Note,
			display: Display.Inline,
		},
		p: {
			component: P,
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
		seg: {
			component: Seg,
			display: Display.Inline,
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
