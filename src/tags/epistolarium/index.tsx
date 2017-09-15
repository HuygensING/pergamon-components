import * as React from 'react';
import Note from "./note";
import systemComponentsByTags, { Display, IComponentsByTags } from '../system-components-by-tags';
import { LineGroup, Line, Title } from './tags';
import { Span, Div, None } from '../default-tags';

const componentsByTags: IComponentsByTags = {
	...systemComponentsByTags,
	...{
		body: {
			component: Div,
			display: Display.Block,
		},
		head: {
			component: Div,
			display: Display.Block,
		},
		l: {
			component: Line,
			display: Display.Block,
		},
		lg: {
			component: LineGroup,
			display: Display.Block,
		},
		note: {
			component: Note,
			display: Display.Inline,
		},
		seg: {
			component: Span,
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
		title: {
			component: Title,
			display: Display.Block,
		},
	}
};

export default componentsByTags;
