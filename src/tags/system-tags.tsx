import * as React from 'react'
import { Tag } from '../interfaces'
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
	</span>

export const Div: Tag = (props) =>
	<div
		id={props.id}
		style={{
			...rendStyle(props),
			...props.style,
		}}
	>
		{props.children}
	</div>

export const Ul: Tag = (props) =>
	<ul
		id={props.id}
		style={{
			...rendStyle(props),
			...props.style,
		}}
	>
		{props.children}
	</ul>

export const Li: Tag = (props) =>
	<li
		id={props.id}
		style={{
			...rendStyle(props),
			...props.style,
		}}
	>
		<label
			style={{
				fontStyle: 'italic',
				display: 'block',
			}}
		>a</label>
		{props.children}
	</li>

export const None: React.SFC = () => null
