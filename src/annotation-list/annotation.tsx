import * as React from 'react';
import AnnotationForm, {IAnnotationFormProps} from "./annotation-form";
import {IAnnotation} from "../interfaces";
import RenderedText from "../rendered-text/index";
import { IComponentsByTags } from '../tags/system-components-by-tags';
import { fontStyle } from '../default-styles';

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
				...fontStyle,
				color: '#085CAF',
				cursor: 'pointer',
				fontWeight: 'normal',
			}}
		>
			{props.rootAnnotation.text.slice(props.annotation.start, props.annotation.end)}
			{
				props.annotation.type === 'persName' ?
					<small style={{ color: '#444', marginLeft: '1em' }}>(xxxx - xxxx)</small> : null
			}
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

