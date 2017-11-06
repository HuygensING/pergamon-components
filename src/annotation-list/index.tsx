import * as React from 'react';
import {default as Annotation, IAnnotationCommon} from "./annotation";
import {IAnnotation} from "../interfaces";

export interface IAnnotationListProps extends IAnnotationCommon {
	filter?: (a: IAnnotation) => boolean
	rootAnnotation: IAnnotation
	sort?: (a: IAnnotation, b: IAnnotation) => -1 | 0 | 1
}

const AnnotationList: React.SFC<IAnnotationListProps> = (props) => {
	let annotations = props.rootAnnotation.children
	
	if (props.filter != null) {
		annotations = annotations.filter(props.filter)
	}

	if (props.sort != null) {
		annotations = annotations.sort(props.sort)
	}

	return (
		<ul>
			{
				annotations
					.map((annotation, index) =>
						<Annotation
							activateAnnotation={props.activateAnnotation}
							activeAnnotation={props.activeAnnotation}
							annotation={annotation}
							key={index}
							rootAnnotation={props.rootAnnotation}
							tags={props.tags}
						/>
					)
			}
		</ul>
	)
}

export default AnnotationList;
