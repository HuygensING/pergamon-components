import * as React from 'react';
import Node, {ITextAnnotationCommon} from "./node";
import createTree from "./create-tree/index";
import {IAnnotation} from "../interfaces";

export interface ITree extends ITextAnnotationCommon {
	root: IAnnotation;
}

const Tree: React.StatelessComponent<ITree> = ({root}) => {
	const children = (root.hasOwnProperty('children') && root.children.length) ?
		root.children
			.map((child, i) => {
				child.text = root.text;
				return (
					<Tree
						key={i}
						root={child}
					/>
				);
			}) :
		root.text.slice(root.start, root.end);

	return (
		<Node
			annotation={root}
		>
			{children}
		</Node>
	);
};

const RenderedText: React.StatelessComponent<ITree> = ({root}) =>
	<Tree
		root={createTree(JSON.parse(JSON.stringify(root)))}
	/>;

export default RenderedText;
