import * as React from 'react';
import { Div, ITag } from '../default-tags';

export const Line: React.StatelessComponent<ITag> = (props) =>
	<div
		id={props.id}
		style={{ lineHeight: '2em' }}
	>
		{props.children}
	</div>;

export const LineGroup: React.StatelessComponent<ITag> = (props) =>
	<div
		id={props.id}
		style={{ margin: '2em 0' }}
	>
		{props.children}
	</div>;

export const Title: React.StatelessComponent<ITag> = (props) =>
	<h2
		id={props.id}
		style={{
			fontSize: '2em',
			fontWeight: 'bold',
		}}
	>
		{props.children}
	</h2>;
