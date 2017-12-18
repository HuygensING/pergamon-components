import * as React from 'react'
import { Tag } from '../interfaces'
import rendStyle from './rend'

export const Span: Tag = (props) =>
	<span
		id={props.node.id()}
		style={{
			...rendStyle(props),
			...props.style,
		}}
	>
		{props.children}
	</span>

export const Div: Tag = (props) =>
	<div
		id={props.node.id()}
		style={{
			...rendStyle(props),
			...props.style,
		}}
	>
		{props.children}
	</div>

export const Ul: Tag = (props) =>
	<ul
		id={props.node.id()}
		style={{
			...rendStyle(props),
			...props.style,
		}}
	>
		{props.children}
	</ul>

export const Li: Tag = (props) =>
	<li
		id={props.node.id()}
		style={{
			...rendStyle(props),
			...props.style,
		}}
	>
		{props.children}
	</li>

export const Italic: Tag = (props) =>
	<em
		id={props.node.id()}
		style={{
			...rendStyle(props),
			fontStyle: 'italic',
			...props.style,
		}}
	>
		{props.children}
	</em>

export const H3: Tag = (props) =>
	<h3
		id={props.node.id()}
		style={{
			...rendStyle(props),
			...props.style,
		}}
	>
		{props.children}
	</h3>

export const None: React.SFC = () => null
