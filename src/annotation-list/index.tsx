import * as React from 'react';
import styled from "styled-components";
import {default as Annotation, IAnnotationCommon} from "./annotation";
import {orange} from "../constants";
import {IAnnotation} from "../interfaces";
import { byStartEnd } from '../rendered-text/create-tree/sort';

export interface IAnnotationListProps extends IAnnotationCommon {
	filter?: (a: IAnnotation) => boolean
	rootAnnotation: IAnnotation
	sort?: (a: IAnnotation, b: IAnnotation) => -1 | 0 | 1
}

const showAnnotationTypes = ['persName', 'placeName', 'geogName', 'name']

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
