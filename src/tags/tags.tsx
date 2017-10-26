import * as React from 'react';
import { ITag } from './default-tags';

const rendStyle = (props): React.CSSProperties=> ({
	fontStyle:
		props.annotation.attributes.hasOwnProperty('rend') &&
		props.annotation.attributes.rend === 'italic' ?
			'italic' :
			'initial',
	fontVariant:
		props.annotation.attributes.hasOwnProperty('rend') &&
		props.annotation.attributes.rend === 'case(smallcaps)' ?
			'small-caps' :
			'initial',
	fontWeight:
		props.annotation.attributes.hasOwnProperty('rend') &&
		props.annotation.attributes.rend === 'bold' ?
			'bold' :
			'initial',
	textDecoration:
		props.annotation.attributes.hasOwnProperty('rend') &&
		props.annotation.attributes.rend === 'underline' ?
			'underline' :
			props.annotation.attributes.hasOwnProperty('rend') &&
			props.annotation.attributes.rend === 'strikethrough' ?
				'line-through' :
				'initial',
	verticalAlign:
		props.annotation.attributes.hasOwnProperty('rend') &&
		props.annotation.attributes.rend === 'superscript' ?
			'super' :
			props.annotation.attributes.hasOwnProperty('rend') &&
			props.annotation.attributes.rend === 'subscript' ?
				'sub' :
				'initial',
})

export type Tag = React.SFC<ITag>

export const Add: Tag = (props) =>
	<span
		style={{
			color: 'green',
		}}
	>
		+ {props.children}
	</span>

export const Choice: Tag = (props) =>
	<span>
		{props.children}
	</span>

export const Sic: Tag = (props) =>
	<span
		style={{
			borderBottom: '1px solid #AAA',
			paddingRight: '.6em',
		}}
	>
		{props.children}
	</span>

export const Corr: Tag = (props) =>
	<span
		style={{
			border: '1px solid #AAA',
			padding: '0 .6em',
		}}
	>
		{props.children}
	</span>

export const DateTag: Tag = (props) =>
	<span
		id={props.id}
		style={{
			backgroundColor: 'orange',
			color: 'white'
		}}
	>
		{props.children}
	</span>

export const PersName: Tag = (props) =>
	<span
		id={props.id}
		style={{
			backgroundColor: 'blue',
			color: 'white'
		}}
	>
		{props.children}
	</span>

export const PlaceName: Tag = (props) =>
	<span
		id={props.id}
		style={{
			backgroundColor: 'green',
			color: 'white'
		}}
	>
		{props.children}
	</span>

export const Name: Tag = (props) =>
	<span
		id={props.id}
		style={{
			backgroundColor: 'red',
			color: 'white'
		}}
	>
		{props.children}
	</span>

export const Hi: Tag = (props) =>
	<span
		id={props.id}
		style={rendStyle(props)}
	>
		{props.children}
	</span>

export const Line: Tag = (props) =>
	<div
		id={props.id}
		style={{ lineHeight: '2em' }}
	>
		{props.children}
	</div>;

export const LineGroup: Tag = (props) =>
	<div
		id={props.id}
		style={{ margin: '2em 0' }}
	>
		{props.children}
	</div>;

export const P: Tag = (props) =>
	<div
		id={props.id}
		style={{
			...rendStyle(props),
			...{ margin: '1em 0' }
		}}
	>
		{props.children}
		<hr style={{ margin: '1em' }} />
	</div>;

export const Seg: Tag = (props) =>
	<div
		id={props.id}
		style={rendStyle(props)}
	>
		{props.children}
	</div>;

// export const Title: Tag = (props) =>
// 	<h2
// 		id={props.id}
// 		style={{
// 			fontSize: '2em',
// 			fontWeight: 'bold',
// 		}}
// 	>
// 		{props.children}
// 	</h2>;
