import * as React from 'react'
import { IAnnotation } from '../interfaces';

const MetadataList = (props) =>
	<ul
		style={{
			color: '#888',
			fontFamily: "'Roboto', sans-serif",
			margin: '3em auto',
			maxWidth: '550px',
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
			marginLeft: '-65px',
			position: 'absolute',
			textAlign: 'right',
			width: '50px',
		}}
	>
		{props.children}
	</label>

const Bold = (props) =>
	<div style={{color: '#444', fontWeight: 700}}>{props.children}</div>

export interface IMetadata {
	rootAnnotation: IAnnotation
}
const Metadata: React.SFC<IMetadata> = (props) =>
	<MetadataList>
		<MetadataItem>
			<Label>FROM</Label>
			<div>
				<Bold>{props.rootAnnotation.metadata.sender}</Bold>
				<div>{props.rootAnnotation.metadata.senderloc}</div>
			</div>
		</MetadataItem>
		<MetadataItem>
			<Label>TO</Label>
			<div>
				<div>{props.rootAnnotation.metadata.recipient}</div>
				<div>{props.rootAnnotation.metadata.recipientloc}</div>
			</div>
		</MetadataItem>
		<MetadataItem>
			<Label>DATE</Label>
			<Bold>{props.rootAnnotation.metadata.date}</Bold>
		</MetadataItem>
	</MetadataList>
export default Metadata
