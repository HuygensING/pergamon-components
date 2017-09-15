import * as React from 'react';
import componentByTag from './tags';
import {IAnnotation, IDocument} from "../interfaces";
import {orange, orangeRGB} from "../constants";

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
}

const TextTreeNode: React.SFC<ITextAnnotationProps> = (props) => {
	if (!componentByTag.hasOwnProperty(props.annotation.type)) {
		throw new Error(`Component not found: ${props.annotation.type}`);
	}

	const Tag = componentByTag[props.annotation.type].component;
	
	return (
		<Tag
			activeAnnotation={props.activeAnnotation}
			annotation={props.annotation}
			className={props.annotation.type}
			id={props.annotation._tagId}
		>
			{props.children}
		</Tag>
	);
};

export default TextTreeNode;
