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
		console.log('rendered text, render', this.state, this.props)
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
		console.log('init', props, this.props)
		if (props.root.id == null) return

		if (
			this.state.textTree == null ||
			this.props.root.id !== props.root.id ||
			(
				this.props.activeAnnotation !== props.activeAnnotation
			)
		) {
			const root = createTree(JSON.parse(JSON.stringify(props.root)), props.tags);
			const textTree = this.textTree(root, props.root.text, props);
			this.setState({ textTree });
		}
	}

	private textTree(root: IAnnotation, text: string, props: any) {
		const children = (root.hasOwnProperty('children') && root.children.length) ?
			root.children.map((child, i) => this.textTree(child, text, props)) :
			text.slice(root.start, root.end);

		return (
			<TextTreeNode
				{...props}
				annotation={root}
				key={root._tagId}
			>
				{children}
			</TextTreeNode>
		);
	}
}

export default RenderedText;
