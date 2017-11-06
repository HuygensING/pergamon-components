import * as React from 'react';
import {IAnnotation, Tag, ITag} from "../interfaces";
import { IComponentsByTags } from '../tags/system-components-by-tags';
import { IRenderedTextCommon } from './index';

export interface ITextTreeNode extends IRenderedTextCommon {
	annotation: IAnnotation
	root: IAnnotation
	tags: IComponentsByTags
}

const TextTreeNode: React.SFC<ITextTreeNode> = (props) => {
	if (!props.tags.hasOwnProperty(props.annotation.type)) {
		throw new Error(`Component not found: ${props.annotation.type}`);
	}

	const Tag: Tag | React.ComponentClass<ITag> = props.tags[props.annotation.type].component;

	return (
		<Tag
			activateAnnotation={props.activateAnnotation}
			activeAnnotation={props.activeAnnotation}
			annotation={props.annotation}
			id={props.annotation._tagId}
			root={props.root}
			tags={props.tags}
		>
			{props.children}
		</Tag>
	);
};

export default TextTreeNode;
