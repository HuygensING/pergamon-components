import * as React from "react";
import { Tag } from "../interfaces";
import { Div, None } from './system-tags'
import { fontStyle } from "../default-styles";

const Hr: React.SFC<{top?: boolean}> = ({top = false}) =>
	<hr
		style={{
			height: '1px',
			backgroundColor: '#ddd',
			color: '#eee',
			width: '20px',
			border: 'none',
			marginLeft: '-10px',
			marginTop: top ? '1em' : '.5em',
			marginBottom: top ? '.5em' : '1em',
		}}
	/>

const Label: React.SFC = (props) =>
	<div
		style={{
			...fontStyle,
			color: '#999',
			fontSize: '.8em',
			marginBottom: '.5em',
		}}
	>
		{props.children}	
	</div>


const AuxDivTag: Tag = (props) =>
	<div style={{ margin: '1em 0' }}>
		<Hr top />
		<Label>
			{ props.node.attributes.get('type') === 'para' ? 'ENVELOPE' : 'TRANSLATION' }	
		</Label>
		<Div {...props} />
		<Hr />
	</div>

// DivTag is the TEI <div> tag (there is also a Div tag which represents the HTML <div> tag)
const DivTag: Tag = (props) =>
	(
		props.node.attributes.get('type') === 'comment' ||
		props.node.attributes.get('type') === 'notes'
	) ?
		<None /> :
		(
			props.node.attributes.get('type') === 'para' ||
			props.node.attributes.get('type') === 'translation'
		) ?
			<AuxDivTag {...props} /> :
			<Div {...props} />

export default DivTag