import * as React from 'react';
import AnnotationForm, {IAnnotationFormProps} from "./annotation-form";
import {IAnnotation, IDocument} from "../interfaces";
import RenderedText from "../rendered-text/index";

export interface IAnnotationCommon extends IAnnotationFormProps {
	activateAnnotation: (string) => void;
}

export interface IAnnotationProps extends IAnnotationCommon {
	annotation: IAnnotation;
}

const Small = (props) => <small style={{marginLeft: '1em'}}>{props.children}</small>

const Annotation: React.SFC<IAnnotationProps> = (props) => {
	return (
		<li>
			<h4 onClick={() =>
				props.activateAnnotation(props.annotation)
			}>
				{props.annotation.type}
				<Small>({props.annotation.start} - {props.annotation.end})</Small>
				<Small>{props.annotation._tagId}</Small>
			</h4>
			{
				(
					props.activeAnnotation != null &&
					props.annotation.id === props.activeAnnotation.id
				) ?
					<AnnotationForm
						activeAnnotation={props.activeAnnotation}
						rootAnnotation={props.rootAnnotation}
					/> :
					(
						props.activeAnnotation != null &&
						props.activeAnnotation.text != null
					) ?
						<RenderedText
							root={props.activeAnnotation}
						/> :
						null
			}
		</li>
	);
};

export default Annotation;

