import * as React from 'react'
import { fontStyle } from '../default-styles'
import { Annotation } from '../index'

const MetadataList = (props) =>
	<ul
		 style={{
			color: '#888',
			listStyle: 'none',
			margin: 0,
			padding: 0,
			...fontStyle
		}}>
		{props.children}
	</ul>

const MetadataItem = (props) =>
	<li
		style={{
			marginBottom: '1em',
		}}>
		{props.children}
	</li>

const Label = (props) =>
	<label
		style={{
			marginLeft: props.width < 400 ? 0 : '-65px',
			position: props.width < 400 ? 'static' : 'absolute',
			textAlign: 'right',
			width: '50px',
		}}
	>
		{props.children}
	</label>

const Bold = (props) =>
	<div style={{color: '#444', fontWeight: 700}}>{props.children}</div>

export interface IMetadata {
	rootAnnotation: Annotation
}
const Metadata: React.SFC<IMetadata> = (props) =>
	<MetadataList>
		<MetadataItem>
			<Label>FROM</Label>
			<div>
				<Bold>{props.rootAnnotation.metadata.get('sender')}</Bold>
				<div>{props.rootAnnotation.metadata.get('senderloc')}</div>
			</div>
		</MetadataItem>
		<MetadataItem>
			<Label>TO</Label>
			<div>
				<Bold>{props.rootAnnotation.metadata.get('recipient')}</Bold>
				<div>{props.rootAnnotation.metadata.get('recipientloc')}</div>
			</div>
		</MetadataItem>
		<MetadataItem>
			<Label>DATE</Label>
			<Bold>{props.rootAnnotation.metadata.get('date')}</Bold>
		</MetadataItem>
	</MetadataList>
export default Metadata
