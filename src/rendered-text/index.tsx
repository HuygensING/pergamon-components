import * as React from 'react'
import TextTreeNode from "./node"
import Annotation from "../models/annotation"
import TreeNode from "../models/tree-node"
import { IComponentsByTags } from '../tags/system-components-by-tags'
import { fontReadStyle } from '../default-styles'
import createTree from './tree-builder'

export interface IRenderedTextCommon {
	activateAnnotation?: (id: string) => void;
	activeAnnotation?: Annotation;
}

export interface IProps extends IRenderedTextCommon {
	onChange?: (tree: TreeNode[]) => void
	onRef?: (el: Element) => void
	root: Annotation;
	tags: IComponentsByTags;
}
export interface IState {
	componentTree: any;
}
class RenderedText extends React.Component<IProps, IState> {
	public render() {
		return (
			<div
				ref={el => {
					if (this.props.onRef != null) this.props.onRef(el)
				}}
				style={fontReadStyle}
			>
				{this.constructTree()}
			</div>
		)
	}

	private nodeTreeToComponentTree(node: TreeNode) {
		const nodes = (node.hasOwnProperty('children') && node.children.length) ?
			node.children.map((child: TreeNode) => this.nodeTreeToComponentTree(child)) :
			this.props.root.text.slice(node.start, node.end)

		return (
			<TextTreeNode
				activateAnnotation={this.props.activateAnnotation}
				activeAnnotation={this.props.activeAnnotation}
				node={node}
				key={node.id + Math.random().toString()}
				root={this.props.root}
				tags={this.props.tags}
			>
				{nodes}
			</TextTreeNode>
		);
	}

	private constructTree = () => {
		if (this.props.root == null) return null
		const tree = createTree(this.props.root)
		return tree.map(branch =>
			this.nodeTreeToComponentTree(branch)
		)

	}
}

export default RenderedText;
