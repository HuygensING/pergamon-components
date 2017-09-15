import * as React from 'react';
import AnnotationForm, {IAnnotationFormProps} from "./annotation-form";
import {IAnnotation, IDocument} from "../interfaces";
import RenderedText from "../rendered-text/index";
import { IComponentsByTags } from '../tags/system-components-by-tags';

export interface IAnnotationCommon extends IAnnotationFormProps {
	activateAnnotation: (string) => void;
	tags: IComponentsByTags;
}

export interface IAnnotationProps extends IAnnotationCommon {
	annotation: IAnnotation;
}

const Annotation: React.SFC<IAnnotationProps> = (props) =>
	<li style={{ minHeight: '2em' }}>
		<h4
			onClick={() =>
				props.activateAnnotation(props.annotation)
			}
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr 3fr',
			}}
		>
			{props.annotation.type}
			<small>({props.annotation.start} - {props.annotation.end})</small>
			<small>{props.annotation.id}</small>
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
						tags={props.tags}
					/> :
					null
		}
	</li>;

export default Annotation;

