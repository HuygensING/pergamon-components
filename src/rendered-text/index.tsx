import * as React from 'react';
import TextTreeNode from "./node";
import createTree from "./create-tree/index";
import {IAnnotation} from "../interfaces";
import { IComponentsByTags } from '../tags/system-components-by-tags';
import { fontReadStyle } from '../default-styles';

export interface IRenderedTextCommon {
	activateAnnotation?: (a: IAnnotation) => void;
	activeAnnotation?: IAnnotation;
}

export interface IProps extends IRenderedTextCommon {
	root: IAnnotation;
	tags: IComponentsByTags;
}

export interface ITree extends IProps {
	text: string;
}

export interface IState {
	textTree: Object;
}

class RenderedText extends React.Component<IProps, IState> {
	public state = {
		textTree: null,
	}

	public componentDidMount() {
		this.init(this.props)
	}

	public componentWillReceiveProps(nextProps: IProps) {
		this.init(nextProps)
	}

	public render() {
		return (
			<div
				style={fontReadStyle}
			>
				{this.state.textTree}
			</div>
		);
	}

	private init(props) {
		// No root, no init
		if (props.root.id == null) return

		if (
			this.state.textTree == null ||
			this.props.root.id !== props.root.id ||
			this.props.activeAnnotation !== props.activeAnnotation
		) {
			const root = createTree(JSON.parse(JSON.stringify(props.root)), props.tags);
			const textTree = this.textTree(root, root, root.text, props.tags);
			this.setState({ textTree });
		}
	}

	private textTree(annotation: IAnnotation, root: IAnnotation, text: string, tags: any) {
		const children = (annotation.hasOwnProperty('children') && annotation.children.length) ?
			annotation.children.map((child, i) => this.textTree(child, root, text, tags)) :
			text.slice(annotation.start, annotation.end)

		return (
			<TextTreeNode
				annotation={annotation}
				key={root._tagId + Math.random().toString()}
				root={root}
				tags={tags}
			>
				{children}
			</TextTreeNode>
		);
	}
}

export default RenderedText;
