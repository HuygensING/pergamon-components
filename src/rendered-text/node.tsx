import * as React from 'react';
import {IAnnotation, Tag} from "../interfaces";
import { IComponentsByTags } from '../tags/system-components-by-tags';
import { IRenderedTextCommon } from './index';
import NotImplemented from '../tags/not-implemented'

export interface ITextTreeNode extends IRenderedTextCommon {
	annotation: IAnnotation
	root: IAnnotation
	tags: IComponentsByTags
}

const TextTreeNode: React.SFC<ITextTreeNode> = (props) => {
	if (!props.tags.hasOwnProperty(props.annotation.type)) {
		console.error(`Component not found: ${props.annotation.type}`)
	}

	const TTag: Tag = props.tags.hasOwnProperty(props.annotation.type) ?
		props.tags[props.annotation.type].component :
		NotImplemented

	return (
		<TTag
			activateAnnotation={props.activateAnnotation}
			activeAnnotation={props.activeAnnotation}
			annotation={props.annotation}
			id={props.annotation._tagId}
			root={props.root}
			tags={props.tags}
		>
			{props.children}
		</TTag>
	);
};

export default TextTreeNode;
