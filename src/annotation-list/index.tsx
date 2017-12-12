import * as React from 'react'
import AnnotationItem, {IAnnotationCommon} from "./annotation"
import { Annotation } from '../index'

export interface IAnnotationListProps extends IAnnotationCommon {
	filter?: (a: Annotation) => boolean
	rootAnnotation: Annotation
	sort?: (a: Annotation, b: Annotation) => -1 | 0 | 1
}
const AnnotationList: React.SFC<IAnnotationListProps> = (props) => {
	let annotations = props.rootAnnotation.annotations
	
	if (props.filter != null) {
		annotations = annotations.filter(props.filter)
	}

	if (props.sort != null) {
		annotations = annotations.sort(props.sort)
	}

	return (
		<ul
			style={{
				listStyle: 'none',
				margin: 0,
				padding: 0,
			}}	
		>
			{
				annotations
					.map((annotation, index) =>
						<AnnotationItem
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
