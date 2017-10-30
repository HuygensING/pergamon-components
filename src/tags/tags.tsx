import * as React from 'react'
import rendStyle from './rend'
import { basicAnnotation } from '../default-styles'
import { Tag } from '../interfaces';


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
	</div>

export const LineGroup: Tag = (props) =>
	<div
		id={props.id}
		style={{ margin: '2em 0' }}
	>
		{props.children}
	</div>

export const Name: Tag = (props) =>
	props.annotation.attributes.type === 'person' ?
		<PersName {...props} /> :
		props.annotation.attributes.type === 'place' ?
		<PlaceName {...props} /> :
		null	

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
	</div>

export const PersName: Tag = (props) =>
	<span
		id={props.id}
		style={{
			...rendStyle(props),
            ...basicAnnotation,   
			...{
				
			}
		}}
	>
		{props.children}
	</span>

export const PlaceName: Tag = (props) =>
	<span
		id={props.id}
		style={{
			...rendStyle(props),
            ...basicAnnotation,
			...{
				
			}
		}}
	>
		{props.children}
	</span>

export const Rs: Tag = (props) =>
	props.annotation.attributes.type === 'person' ?
		<PersName {...props} /> :
		props.annotation.attributes.type === 'place' ?
		<PlaceName {...props} /> :
		null	

export const Seg: Tag = (props) =>
	<div
		id={props.id}
		style={rendStyle(props)}
	>
		{props.children}
	</div>

export const Title: Tag = (props) =>
	<div
		id={props.id}
		style={{
			...rendStyle(props),
			...{
				fontSize: '2em',
				fontWeight: 'bold',
			}
		}}
	>
		{props.children}
	</div>;
