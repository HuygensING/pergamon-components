import * as React from 'react'
import { ITagProps } from '../interfaces'
import TreeNode from '../models/tree-node'

export const getRendValue = (node: TreeNode): string =>
	node.hasOwnProperty('attributes') &&
	node.attributes.has('rend') ?
		node.attributes.get('rend') :
		''

const rendStyle = (props: ITagProps): React.CSSProperties => {
	const rend = getRendValue(props.node)
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
		textAlign:
			rend === 'align(right)' ? 'right' : null,
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
		let listStyleType: string = 'disc'
		if (rend === 'simple') listStyleType = 'none'
		else if (rend === 'numbered') listStyleType = 'decimal'
		rendStyle = { ...rendStyle, listStyleType }
	}

	return rendStyle
}

export default rendStyle