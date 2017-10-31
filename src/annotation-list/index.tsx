import * as React from 'react';
import styled from "styled-components";
import {default as Annotation, IAnnotationCommon} from "./annotation";
import {orange} from "../constants";
import {IAnnotation} from "../interfaces";
import { byStartEnd } from '../rendered-text/create-tree/sort';

export interface IAnnotationListProps extends IAnnotationCommon {
	rootAnnotation: IAnnotation;
}

const showAnnotationTypes = ['persName', 'placeName', 'geogName', 'name']

const AnnotationList: React.SFC<IAnnotationListProps> = (props) =>
	<ul>
		{
			props.rootAnnotation.children
				.filter(a => showAnnotationTypes.indexOf(a.type) > -1)
				.sort(byStartEnd)
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
	</ul>;

export default AnnotationList;
