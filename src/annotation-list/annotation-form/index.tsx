import * as React from 'react'
import Annotation from '../../models/annotation'

const Ul = (props) => <ul style={{ margin: '1em 0'}}>{props.children}</ul>
const Li = (props) =>
	<li style={{
		display: 'grid',
		gridTemplateColumns: '1fr 4fr',
	}}>
		{props.children} </li>
const Label = (props) =>
	<label style={{
		color: '#666',
		fontSize: '0.8em',
	}}>
		{props.children}
	</label>
const Immutable = (props) =>
	<div style={{
		color: '#666',
		fontStyle: 'italic',
	}}>
		{props.children}
	</div>

export interface IAnnotationFormProps {
	activeAnnotation: Annotation
	rootAnnotation: Annotation
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