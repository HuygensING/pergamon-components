import * as React from 'react';
import { Tag } from "../interfaces";
import Annotation from '../models/annotation'
import { IComponentsByTags } from '../tags/system-components-by-tags';
import { IRenderedTextCommon } from './index';
import NotImplemented from '../tags/not-implemented'
import TreeNode from '../models/tree-node'

export interface ITextTreeNode extends IRenderedTextCommon {
	node: TreeNode
	root: Annotation
	tags: IComponentsByTags
}

const TextTreeNode: React.SFC<ITextTreeNode> = (props) => {
	if (!props.tags.hasOwnProperty(props.node.type)) {
		console.error(`Component not found: ${props.node.type}`)
	}

	const TextTreeTag: Tag = props.tags.hasOwnProperty(props.node.type) ?
		props.tags[props.node.type].component :
		NotImplemented

	return (
		<TextTreeTag
			activateAnnotation={props.activateAnnotation}
			activeAnnotation={props.activeAnnotation}
			node={props.node}
			root={props.root}
			tags={props.tags}
		>
			{props.children}
		</TextTreeTag>
	);
};

export default TextTreeNode;
