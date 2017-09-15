import * as React from 'react';
import Node, {ITextAnnotationCommon} from "./node";
import createTree from "./create-tree/index";
import {IAnnotation} from "../interfaces";

export interface IProps extends ITextAnnotationCommon {
	root: IAnnotation;
}

export interface ITree extends IProps {
	text: string;
}

export interface IState {
	tree: Object;
}

class RenderedText extends React.Component<IProps, IState> {
	public state = {
		tree: null,
	}

	public componentWillReceiveProps(nextProps) {
		const activeChanged = this.props.activeAnnotation !== nextProps.activeAnnotation;

		if (this.state.tree == null || activeChanged) {
			const root = createTree(JSON.parse(JSON.stringify(nextProps.root)));
			const nodes = this.createNodes(root, nextProps.root.text, nextProps.activeAnnotation);
			this.setState({ tree: nodes });
		}
	}

	public render() {
		return this.state.tree;
	}

	// TODO move activeAnnotation to settings
	private createNodes(root, text, activeAnnotation) {
		if (root.text == null && text == null) return null;

		// console.log(root, text.slice(root.start, root.end))

		const children = (root.hasOwnProperty('children') && root.children.length) ?
			root.children.map((child, i) => this.createNodes(child, text, activeAnnotation)) :
			text.slice(root.start, root.end);

		return (
			<Node
				activeAnnotation={activeAnnotation}
				annotation={root}
				key={Math.random() * 999999999}
			>
				{children}
			</Node>
		);
	}
}

export default RenderedText;
