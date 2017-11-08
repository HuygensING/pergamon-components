import * as React from 'react';
import { Tag } from '../interfaces';

export const Span: Tag = (props) =>
	<span id={props.id} style={props.style}>{props.children}</span>;

export const Div: Tag = (props) =>
	<div id={props.id} style={props.style}>{props.children}</div>;

export const NotImplemented: Tag = (props) =>
	<div
		style={{
			backgroundColor: 'red',
			border: '1px solid darkred',
			borderRadius: '3px',
			color: 'white',
			padding: '1em',
			boxShadow: '4px 4px 6px darkred'
		}}
	>
		<span style={{
			fontWeight: 'bold',
			fontSize: '1.5em',
		}}>
			[{props.annotation.type} | NOT IMPLEMENTED]
		</span>
		&nbsp;{props.children}
	</div>

export const None: React.SFC = () => null;