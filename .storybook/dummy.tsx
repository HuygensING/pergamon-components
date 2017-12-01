import * as React from 'react'
import { IAnnotation, Tag, ITag } from '../src/interfaces';
import Tags from '../src/tags'

export const defaultAnnotation: IAnnotation = {
	attributes: {},
	end: 0,
	id: 'some-default-id',
	source: 'xml',
	start: 0,
	target: 'some-target-id',
	text: 'some-text',
	type: 'some-type',
}

export interface IDummyTag extends ITag {
	comp: Tag
}
const Dummy: React.SFC<Partial<IDummyTag>> = (props) => {
	props = {
		activeAnnotation: defaultAnnotation,
		activateAnnotation: (defaultAnnotation) => {},
		annotation: defaultAnnotation,
		id: null,
		root: defaultAnnotation,
		...props
	}

	return (
		<props.comp
			activeAnnotation={props.activeAnnotation}
			activateAnnotation={props.activateAnnotation}
			annotation={props.annotation}
			id={props.id}
			root={props.root}
			tags={Tags}
		>
			{props.children}
		</props.comp>
	)
}

export default Dummy