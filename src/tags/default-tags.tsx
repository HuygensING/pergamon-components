import * as React from 'react';
import { Tag } from '../interfaces';

export const Span: Tag = (props) =>
	<span id={props.id}>{props.children}</span>;

export const Div: Tag = (props) =>
	<div id={props.id}>{props.children}</div>;

export const NotImplemented: Tag = (props) =>
	<div
		style={{
			backgroundColor: 'red',
			color: 'white',
			padding: '0.5em',
		}}
	>
		[{props.annotation.type} | NOT IMPLEMENTED]
		&nbsp;{props.children}
	</div>

export const None: React.SFC = () => null;