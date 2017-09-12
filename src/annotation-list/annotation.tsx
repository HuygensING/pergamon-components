import * as React from 'react';
import styled from "styled-components";
import AnnotationForm, {IAnnotationFormProps} from "./annotation-form";
import {IAnnotation, IDocument} from "../interfaces";
import RenderedText from "../rendered-text/index";

const Li = styled.li`
`;

const Small = styled.small`
	margin-left: 1em;
`;

const Head4 = styled.h4``;

export interface IAnnotationCommon extends IAnnotationFormProps {
	activateAnnotation: (string) => void;
}

export interface IAnnotationProps extends IAnnotationCommon {
	annotation: IAnnotation;
}

const Annotation: React.SFC<IAnnotationProps> = (props) => {
	return (
		<Li>
			<Head4 onClick={() =>
				props.activateAnnotation(props.annotation)
			}>
				{props.annotation.type}
				<Small>({props.annotation.start} - {props.annotation.end})</Small>
				<Small>{props.annotation._tagId}</Small>
			</Head4>
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
		</Li>
	);
};

export default Annotation;

