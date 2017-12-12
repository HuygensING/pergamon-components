import * as React from 'react'
import TextTreeNode from "./node"
import Annotation from "../models/annotation"
import TreeNode from "../models/tree-node"
import { IComponentsByTags } from '../tags/system-components-by-tags'
import { fontReadStyle } from '../default-styles'
import createTree from 'pergamon-annotation-tree-builder'

export interface IRenderedTextCommon {
	activateAnnotation?: (id: string) => void;
	activeAnnotation?: Annotation;
}

export interface IProps extends IRenderedTextCommon {
	root: Annotation;
	tags: IComponentsByTags;
}
export interface IState {
	componentTree: any;
}
class RenderedText extends React.Component<IProps, IState> {
	public state = {
		componentTree: null,
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
				{this.state.componentTree}
			</div>
		);
	}

	private async init(props: IProps) {
		// No root, no init
		if (props.root.id == null) return

		if (
			this.state.componentTree == null ||
			this.props.root.id !== props.root.id ||
			this.props.activeAnnotation !== props.activeAnnotation
		) {
			const tree = createTree(props.root)
			const componentTree = tree.map(branch =>
				this.nodeTreeToComponentTree(branch, props.root, props)
			)
			this.setState({ componentTree })
		}
	}

	private nodeTreeToComponentTree(node: TreeNode, root: Annotation, props: any) {
		const nodes = (node.hasOwnProperty('children') && node.children.length) ?
			node.children.map((child: TreeNode) => this.nodeTreeToComponentTree(child, root, props)) :
			root.text.slice(node.start, node.end)

		return (
			<TextTreeNode
				activateAnnotation={props.activateAnnotation}
				activeAnnotation={props.activeAnnotation}
				node={node}
				key={node.id + Math.random().toString()}
				root={root}
				tags={props.tags}
			>
				{nodes}
			</TextTreeNode>
		);
	}
}

export default RenderedText;
