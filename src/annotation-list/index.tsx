import * as React from 'react';
import styled from "styled-components";
import {default as Annotation, IAnnotationCommon} from "./annotation";
import {orange} from "../constants";
import {IAnnotation} from "../interfaces";

const Ul = styled.ul`
	& ul {
		border-left: 2px solid ${orange};
		padding-left: 1em;
	}	
`;

export interface IAnnotationListProps extends IAnnotationCommon {
	rootAnnotation: IAnnotation;
}

const AnnotationList: React.SFC<IAnnotationListProps> = (props) =>
	<Ul>
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
	</Ul>;

export default AnnotationList;
