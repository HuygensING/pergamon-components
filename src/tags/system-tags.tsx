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

export const None: React.SFC = () => null
