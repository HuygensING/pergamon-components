import * as React from 'react'
import { ITagProps } from '../interfaces';

const getRendAttr = (props: ITagProps) =>
	props.node.hasOwnProperty('attributes') &&
	props.node.attributes.has('rend') ?
		props.node.attributes.get('rend') :
		undefined

const rendStyle = (props: ITagProps): React.CSSProperties => {
	const rend = getRendAttr(props)
	if (rend == null) return {}
	let rendStyle: React.CSSProperties = {
		fontSize:
			rend === 'superscript' || rend === 'subscript' ? '.8em' : null,
		fontStyle:
			rend === 'italic' ? 'italic' : null,
		fontVariant:
			rend === 'case(smallcaps)' ? 'small-caps' : null,
		fontWeight:
			rend === 'bold' ? 'bold' : null,
		lineHeight:
			rend === 'superscript' || rend === 'subscript' ? 0 : null,
		textDecoration:
			rend === 'underline' ?
				'underline' :
				rend === 'strikethrough' ? 'line-through' : null,
		verticalAlign:
			rend === 'superscript' ?
				'super' :
				rend === 'subscript' ? 'sub' : null,
	}

	if (props.node.type === 'list') {
		console.log('HERE')
		let listStyleType: string = 'disc'
		if (rend === 'simple') listStyleType = 'none'
		else if (rend === 'numbered') listStyleType = 'decimal'
		rendStyle = { ...rendStyle, listStyleType }
	}

	return rendStyle
}

export default rendStyle