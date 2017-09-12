import * as React from 'react';
import HireFormsInput, { IProps as __IHireFormsInputProps } from "hire-forms-input";
import styled, { StyledComponentClass } from "styled-components";
import {IAnnotation} from "../../interfaces";

export const inputEl = `
	flex: 3;
`;

const Ul = styled.ul`
	margin: 1em 0;
`;
const Li = styled.li`
	display: flex;
	margin-bottom: 1em;
`;

const Label = styled.label`
	color: #666;
	flex: 1;
	font-size: 0.8em;
`;

export const Input = styled(HireFormsInput)`
	${inputEl}
`;

const Immutable = styled.div`
	${inputEl}
	color: #666;
	font-style: italic;
`;

export interface IAnnotationFormProps {
	activeAnnotation: IAnnotation;
	rootAnnotation: IAnnotation;
}

const AnnotationForm: React.SFC<IAnnotationFormProps> = (props) =>
	<Ul>
		<Li>
			<Label>ID</Label>
			<Immutable>{props.activeAnnotation.id}</Immutable>
		</Li>
		{
			props.activeAnnotation.start < props.activeAnnotation.end &&
			<Li>
				<Label>Text</Label>
				<Immutable>
					{
						props.rootAnnotation.text
							.slice(props.activeAnnotation.start, props.activeAnnotation.end)
					}
				</Immutable>
			</Li>
		}
		<Li>
			<Label>Type</Label>
			<Immutable>{props.activeAnnotation.type}</Immutable>
		</Li>
		<Li>
			<Label>Start</Label>
			<Immutable>{props.activeAnnotation.start}</Immutable>
		</Li>
		<Li>
			<Label>End</Label>
			<Immutable>{props.activeAnnotation.end}</Immutable>
		</Li>
	</Ul>;

export default AnnotationForm;