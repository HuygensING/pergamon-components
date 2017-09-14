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

const TextAnnotation: React.SFC<ITextAnnotationProps> = (props) => {
	if (!componentByTag.hasOwnProperty(props.annotation.type)) {
		throw new Error(`Component not found: ${props.annotation.type}`);
	}

	const Tag = componentByTag[props.annotation.type].component;

	let tagStyle: React.CSSProperties = {};
	if (
		(props.annotation != null) &&
		(
			props.activeAnnotation != null &&
			props.activeAnnotation.id === props.annotation.id
		) 
	) {
		tagStyle = {
			backgroundColor: `rgba(${orangeRGB}, 0.03)`,
			border: `1px solid ${orange}`,
			boxShadow: `4px 4px 0px rgba(${orangeRGB}, 0.4)`,
			lineHeight: '2.8em',
			margin: '0.5em',
			padding: '0.5em',
		}
	}	
	
	return (
		<Tag
			activeAnnotation={props.activeAnnotation}
			annotation={props.annotation}
			className={props.annotation.type}
			id={props.annotation._tagId}
			style={tagStyle}
		>
			{props.children}
		</Tag>
	);
};

export default TextAnnotation;
