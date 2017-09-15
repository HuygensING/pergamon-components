import * as React from 'react';
import {IAnnotation, IDocument} from "../interfaces";
import {orange, orangeRGB} from "../constants";
import { IComponentsByTags } from '../tags/system-components-by-tags';

export interface ITextAnnotationCommon {
	activateAnnotationDocument?: (IAnnotation, string) => void;
	activateNote?: (string) => void;
	activeAnnotation?: IAnnotation;
	activeAnnotationDocument?: IDocument;
	activeNoteId?: string;
	documents?: IDocument[];
}

export interface ITextAnnotationProps extends ITextAnnotationCommon {
	annotation: IAnnotation;
	tags: IComponentsByTags;
}

const TextTreeNode: React.SFC<ITextAnnotationProps> = (props) => {
	if (!props.tags.hasOwnProperty(props.annotation.type)) {
		throw new Error(`Component not found: ${props.annotation.type}`);
	}

	const Tag = props.tags[props.annotation.type].component;
	
	return (
		<Tag
			activeAnnotation={props.activeAnnotation}
			annotation={props.annotation}
			id={props.annotation._tagId}
		>
			{props.children}
		</Tag>
	);
};

export default TextTreeNode;
