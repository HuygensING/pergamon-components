import * as React from 'react'
import { basicAnnotation } from '../default-styles'
import { Tag } from '../interfaces'
import { Div, Span, None, Ul, Li } from './system-tags'
import NotImplemented from './not-implemented'

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
	<td
		style={{
			borderBottom: '1px solid #ddd',
			paddingRight: '.5em',
		}}
	>
		{props.children}
	</td>

export const Corr: Tag = (props) =>
	<Span
		style={{
			borderBottom: '1px solid #ddd',
			marginRight: '.2em',
		}}
		{...props}
		>
		{props.children}
		<sup
			style={{
				paddingLeft: '.3em',
				color: '#aaa',
			}}
		>corr</sup>
	</Span>

const ParaDivTag: Tag = (props) =>
	<Div
		{...props}
		style={{
			borderLeft: '1px solid #eee',
			paddingLeft: '.5em',
			marginLeft: '-.5em',
		}}
	/>

const TranslationDivTag: Tag = (props) =>
	<Div
		{...props}
		style={{
			// ...
		}}
	/>
// DivTag is the TEI <div> tag (there is also a Div tag which represents the HTML <div> tag)
export const DivTag: Tag = (props) =>
	(
		props.annotation.attributes.type === 'comment' ||
		props.annotation.attributes.type === 'notes' ||
		props.annotation.attributes.type === 'provenance'
	) ?
		<None /> :
		props.annotation.attributes.type === 'para' ?
			<ParaDivTag {...props} /> :
			props.annotation.attributes.type === 'translation' ?
				<TranslationDivTag {...props} /> :
				<Div {...props} />

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

export const GeogName: Tag = (props) =>
	<Span
		style={basicAnnotation}
		{...props}
	>
		<Icon src="" />
		{props.children}
	</Span>

export const Item: Tag = (props) =>
	<Li
		style={{
			padding: '0 0 0 0em',
			margin: '0 0 .5em 1em',
		}}
		{...props}
	/>

export const Line: Tag = (props) =>
	<Div
		style={{ lineHeight: '2em' }}
		{...props}
	>
	{props.children}
	</Div>

export const List: Tag = (props) =>
	<Ul
		style={{
			padding: '0',
			margin: '.5em 0 .5em 0 ',
		}}
		{...props}
	/>

export const LineGroup: Tag = (props) =>
	<Div
		style={{
			margin: '2em 0',
			textIndent: props.annotation.attributes.type === 'poem' ? '1em' : 'initial',
			fontStyle: props.annotation.attributes.type === 'poem' ? 'italic' : 'initial',
			}}
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
	<tr
		style={{
			borderBottom: '1px solid #aaa',
		}}
	>{props.children}</tr>

export const Rs: Tag = (props) =>
	props.annotation.attributes.type === 'person' ?
		<PersName {...props} /> :
		props.annotation.attributes.type === 'place' ?
			<PlaceName {...props} /> :
			null

export const Sic: Tag = (props) =>
	<Span
		style={{
			borderBottom: '1px solid #ddd',
			marginRight: '.2em',
		}}
		{...props}
		>
		{props.children}
		<sup
			style={{
				paddingLeft: '.3em',
				color: '#aaa',
			}}
		>sic</sup>
		</Span>

export const Space: Tag = (props) =>
	<Div
		style={{
			height: '2em',
		}}
		{...props}
	/>

export const Table: Tag = (props) =>
	<table
		style={{
			fontFamily: "'Roboto', sans-serif",
		}}
	>
		<tbody>
			{props.children}
		</tbody>
	</table>

export const Title: Tag = (props) =>
	<Span
		style={basicAnnotation}
		{...props}
	>
		<Icon src="http://design.huygens.knaw.nl/static/icons/book.svg" />
		{props.children}
	</Span>
