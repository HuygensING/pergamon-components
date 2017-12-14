import * as React from 'react'
import { Tag, ITagProps } from '../src/interfaces';
import Tags from '../src/tags'
import Annotation from '../src/models/annotation'
import TreeNode from '../src/models/tree-node'

export interface IDummyTag extends ITagProps {
	comp: Tag
}
const Dummy: React.SFC<Partial<IDummyTag>> = (props) => {
	props = {
		activeAnnotation: new Annotation(),
		activateAnnotation: (defaultAnnotation) => {},
		node: new TreeNode({}),
		root: new Annotation(),
		...props
	}

	return (
		<props.comp
			activeAnnotation={props.activeAnnotation}
			activateAnnotation={props.activateAnnotation}
			node={props.node}
			root={props.root}
			tags={Tags}
		>
			{props.children}
		</props.comp>
	)
}

export default Dummy