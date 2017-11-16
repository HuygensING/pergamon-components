import * as React from 'react'
import { basicAnnotation } from '../default-styles'
import { Tag } from '../interfaces';
import { Div, Span } from './system-tags';
import NotImplemented from './not-implemented';

export const Add: Tag = (props) =>
	<Span
		style={{
			color: 'green',
		}}
		{...props}
	>
		+ {props.children}
	</Span>

export const Cell: Tag = (props) =>
	<td>{props.children}</td>

export const Choice: Tag = Span

export const Closer: Tag = Div

export const Sic: Tag = (props) =>
	<Span
		style={{
			borderBottom: '1px solid #AAA',
			paddingRight: '.6em',
		}}
		{...props}
	/>

export const Corr: Tag = (props) =>
	<Span
		style={{
			border: '1px solid #AAA',
			padding: '0 .6em',
		}}
		{...props}
	/>

export const DateTag: Tag = (props) =>
	<Span
		style={basicAnnotation}
		{...props}
	>
        <Icon src="http://design.huygens.knaw.nl/static/icons/date.svg" />
		{props.children}
	</Span>

export const Figure: Tag = (props) =>
	<Div
		style={{
			margin: 'auto',
			width: '75%',
		}}
		{...props}
	/>

export const Graphic: Tag = (props) =>
	<img
		id={props.id}
		src={`/static/graphics/${props.annotation.attributes.url}`}
		style={{
			height: '100%',
			width: '100%',
		}}
	/>

export const Formula: Tag = (props) =>
	<Span
		style={{ fontStyle: 'italic' }}
		{...props}
	/>

export const Hi: Tag = Span

export const Line: Tag = (props) =>
	<Div
		style={{ lineHeight: '2em' }}
		{...props}
	>

	<span
		style={{
				width:'1em',
				textAline: 'right',
				fontFamily: "'Roboto', sans-serif",
				fontSize:'.8em',
				color: '#aaa',
				marginRight: '.5em',
			 }}
	>
		1
	</span>
	{props.children}
	</Div>


export const LineGroup: Tag = (props) =>
	<Div
		style={{ margin: '2em 0' }}
		{...props}
	/>

export const Name: Tag = (props) =>
	props.annotation.attributes.type === 'person' ?
		<PersName {...props} /> :
		props.annotation.attributes.type === 'place' ?
			<PlaceName {...props} /> :
			<NotImplemented {...props} />

export const Opener: Tag = Div

export const P: Tag = (props) =>
	<Div
		style={{ margin: '1em 0' }}
		{...props}
	>
		{props.children}

	</Div>

export const Pb: Tag = Div

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
	<Span
		style={basicAnnotation}
		{...props}
	>
		<Icon src="http://design.huygens.knaw.nl/static/icons/person.svg" />
		{props.children}
	</Span>

export const PlaceName: Tag = (props) =>
	<Span
		style={basicAnnotation}
		{...props}
	>
		<Icon src="http://design.huygens.knaw.nl/static/icons/location.svg" />
		{props.children}
	</Span>

export const Row: Tag = (props) =>
	<tr>{props.children}</tr>

export const Rs: Tag = (props) =>
	props.annotation.attributes.type === 'person' ?
		<PersName {...props} /> :
		props.annotation.attributes.type === 'place' ?
			<PlaceName {...props} /> :
			null

export const Seg: Tag = Div

export const Table: Tag = (props) =>
	<table>{props.children}</table>

export const Title: Tag = (props) =>
	<Span
		style={basicAnnotation}
		{...props}
	>
		<Icon src="http://design.huygens.knaw.nl/static/icons/book.svg" />
		{props.children}
	</Span>
