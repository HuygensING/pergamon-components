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
			...rendStyle(props),
			...basicAnnotation,   
		}}
	>
        <Icon src="http://design.huygens.knaw.nl/static/icons/date.svg" />
		{props.children}
	</span>

export const Figure: Tag = (props) =>
	<div
		id={props.id}
		style={{
			margin: 'auto',
			width: '75%',
		}}
	>
		{props.children}
	</div>

export const Graphic: Tag = (props) =>
	<img
		src={`/static/graphics/${props.annotation.attributes.url}`}
		style={{
			height: '100%',
			width: '100%',
		}}
	/>

export const Formula: React.SFC = (props) =>
	<span style={{ fontStyle: 'italic' }}>
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
		<hr style={{ 
            height: '1px',
            backgroundColor: '#ddd',
            color: '#eee',
            width: '20px',
            border: 'none',
            marginLeft: '-10px',
            marginTop: '1em',
                   
        }} />
	</div>

interface IIcon { src: string }
const Icon: React.SFC<IIcon> = (props) =>
	<img
		src={props.src}
		style={{
			width: "12px",
			height:'auto',
            marginRight: '.2em',
		}}
	/>

export const PersName: Tag = (props) =>
	<span
		id={props.id}
		style={{
			...rendStyle(props),
			...basicAnnotation,   
		}}
	>
		<Icon src="http://design.huygens.knaw.nl/static/icons/person.svg" />
		{props.children}
	</span>

export const PlaceName: Tag = (props) =>
	<span
		id={props.id}
		style={{
			...rendStyle(props),
			...basicAnnotation,
		}}
	>
		<Icon src="http://design.huygens.knaw.nl/static/icons/location.svg" />
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
