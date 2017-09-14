import * as React from 'react';
import styled from "styled-components";
import {default as Annotation, IAnnotationCommon} from "./annotation";
import {orange} from "../constants";
import {IAnnotation} from "../interfaces";

export interface IAnnotationListProps extends IAnnotationCommon {
	rootAnnotation: IAnnotation;
}

const AnnotationList: React.SFC<IAnnotationListProps> = (props) =>
	<ul>
		{
			props.rootAnnotation.children.map((annotation, index) =>
				<Annotation
					activateAnnotation={props.activateAnnotation}
					activeAnnotation={props.activeAnnotation}
					annotation={annotation}
					key={index}
					rootAnnotation={props.rootAnnotation}
				/>
			)
		}
	</ul>;

export default AnnotationList;
