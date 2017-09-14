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

class Tree extends React.Component<ITree, IState> {
	public state = {
		tree: null,
	}

	public componentDidMount() {
		this.generateTree(this.props.root, this.props.text);
	}

	public componentWillReceiveProps(nextProps) {
		this.generateTree(nextProps.root, nextProps.text);
	}

	public render() {
		return this.state.tree;
	}

	private generateTree(root: IAnnotation, text: string) {
		if (root.text == null && text == null) return null;
		const children = (root.hasOwnProperty('children') && root.children.length) ?
			root.children
				.map((child, i) => {
					return (
						<Tree
							key={i}
							root={child}
							text={text}
						/>
					);
				}) :
			text.slice(root.start, root.end);

		const tree = (
			<Node
				annotation={root}
			>
				{children}
			</Node>
		);

		this.setState({ tree });
	}
};

const RenderedText: React.StatelessComponent<IProps> = ({root}) =>
	<Tree
		root={createTree(JSON.parse(JSON.stringify(root)))}
		text={root.text}
	/>;

export default RenderedText;
