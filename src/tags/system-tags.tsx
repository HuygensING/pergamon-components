import * as React from 'react';
import { Tag } from '../interfaces';
import rendStyle from './rend'

export const Span: Tag = (props) =>
	<span
		id={props.id}
		style={{
			...rendStyle(props),
			...props.style,
		}}
	>
		{props.children}
	</span>;

export const Div: Tag = (props) =>
	<div
		id={props.id}
		style={{
			...rendStyle(props),
			...props.style,
		}}
	>
		{props.children}
	</div>;

export const NotImplemented: Tag = (props) =>
	<div
		style={{
			backgroundColor: '#EC7700',
			color: 'white',
			padding: '2em 1.5em',
			margin: '1em -.5em',
			fontFamily: "'Roboto', sans-serif",
		}}
	>
		<span
			style={{
				fontWeight: 'bold',
				fontSize: '1.3em',
			}}
		>
			<img
				style={{
					width:'2em',
					height: 'auto',
					display: 'block',
					marginBottom: '1em',
				}}
				src="http://design.huygens.knaw.nl/static/icons/caution-inv.svg"
			/>
			Warning: The tag {props.annotation.type} is not implemented!
		</span>
		<br/>
		Wrapped on <em>{props.children}</em>.
		<div
			style={{
				marginTop: '1em',
				fontStyle: 'italic',
			}}
		>
			This tag is not part of the Huygens ING TEI standard.
			Please visit
			{' '}<a
				style={{
					color: '#fff',
				}}
				href="http://servicedesk.huygens.knaw.nl"
				target="_blank"
			>
				Servicedesk.huygens.knaw.nl
			</a>{' '}
			to request support of this tag.
		</div>
	</div>

export const None: React.SFC = () => null;
