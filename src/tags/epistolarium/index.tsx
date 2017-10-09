import * as React from 'react';
import Note from "./note";
import systemComponentsByTags, { Display, IComponentsByTags } from '../system-components-by-tags';
import { PersName, PlaceName, Line, LineGroup, Name, Hi, P, DateTag } from './tags';
import { Span, Div, None } from '../default-tags';

const componentsByTags: IComponentsByTags = {
	...systemComponentsByTags,
	...{
		body: {
			component: Div,
			display: Display.Block,
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
		text: {
			component: Div,
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
