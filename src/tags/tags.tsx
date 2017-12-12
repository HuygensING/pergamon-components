import * as React from 'react'
import { basicAnnotation, fontStyle } from '../default-styles'
import { Tag } from '../interfaces'
import { Div, Span, Ul, Li } from './system-tags'
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

export const Graphic: Tag = (props) => {
	let width: number
	let height: number
	const attrs = props.node.attributes
	const exts = ['px', 'em', 'ex', 'vw', 'vh', '%', 'cm', 'mm', 'in', 'pt', 'rem', 'vm', 'pc', 'gd']

	if (attrs.get('height') != null && attrs.get('width') != null) {
		const widthExt: string = exts.find(e => attrs.get('width').slice(-e.length) === e)
		const heightExt: string = exts.find(e => attrs.get('height').slice(-e.length) === e)
		if (
			exts.some(e => widthExt === e) &&
			exts.some(e => heightExt === e)
		) {
			const scale = attrs.get('scale') != null ? Number.parseFloat(attrs.get('scale')) : 1
			width = Number.parseInt(attrs.get('width').slice(0, -widthExt.length)) * scale
			height = Number.parseInt(attrs.get('height').slice(0, -heightExt.length)) * scale
		}
	}

	return (
		<img
			id={props.id}
			src={`/static/graphics/${props.node.attributes.get('url')}`}
			style={{
				height: height != null ? height : 'auto',
				width: width != null ? width : 'auto',
				maxWidth: '100%',
			}}
		/>
	)
}

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
		<Icon src="http://design.huygens.knaw.nl/static/icons/location.svg" />
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
		style={{
			lineHeight: props.node.attributes.get('type') === 'stanza' ? '1em' : '2em',
			marginTop: props.node.attributes.get('type') === 'stanza' ? '.5em' : 'initial',
			marginBottom: props.node.attributes.get('type') === 'stanza' ? '.5em' : 'initial',
			}}
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
			marginTop: '2em',
			marginLeft: props.node.attributes.get('type') === 'poem' ? '1em' : 'initial',
			fontStyle: props.node.attributes.get('type') === 'poem' ? 'italic' : 'initial',
			}}
		{...props}
	/>

export const Name: Tag = (props) =>
	props.node.attributes.get('type') === 'person' ?
		<PersName {...props} /> :
		props.node.attributes.get('type') === 'place' ?
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
	props.node.attributes.get('type') === 'person' ?
		<PersName {...props} /> :
		props.node.attributes.get('type') === 'place' ?
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
		style={fontStyle}
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
