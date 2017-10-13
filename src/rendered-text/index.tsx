import * as React from 'react';
import TextTreeNode, {ITextAnnotationCommon} from "./node";
import createTree, { generateTagId } from "./create-tree/index";
import {IAnnotation} from "../interfaces";
import { orangeRGB, orange } from '../constants';
import { IComponentsByTags } from '../tags/system-components-by-tags';

export interface IProps extends ITextAnnotationCommon {
	root: IAnnotation;
	tags: IComponentsByTags;
}

export interface ITree extends IProps {
	text: string;
}

export interface IState {
	textTree: Object;
}

const activeTagStyle: string = `
	background-color: rgba(${orangeRGB}, 0.03);
	border: 1px solid ${orange};
	box-shadow: 4px 4px 0px rgba(${orangeRGB}, 0.4);
	line-height: 2.8em;
	margin: 0.5em;
	padding: 0.5em;
`;

class RenderedText extends React.Component<IProps, IState> {
	private el: HTMLDivElement;

	// Holds the inactive style for a currently active tag.
	// When the tag is deactivated, the inactive style re-set on the tag.
	private inactiveTagStyle: string;

	public state = {
		textTree: null,
	}

	public componentDidMount() {
		this.init(this.props)
	}

	public componentWillReceiveProps(nextProps: IProps) {
		this.init(nextProps)
	}


	public shouldComponentUpdate(nextProps: IProps, nextState: IState) {
		return this.state.textTree == null && nextState.textTree != null;
	}

	public render() {
		return (
			<div
				ref={(el) => { this.el = el; }}
			>
				{this.state.textTree}
			</div>
		);
	}

	private activeTags(activeAnnotation) {
		const tagId = generateTagId(activeAnnotation, false);
		return this.el.querySelectorAll(`[id^=${tagId}]`);
	}

	private init(props) {
		if (this.state.textTree == null) {
			const root = createTree(JSON.parse(JSON.stringify(props.root)), props.tags);
			const textTree = this.textTree(root, props.root.text, props);
			this.setState({ textTree });
		}

		if (this.props.activeAnnotation !== props.activeAnnotation) {
			// Current props has an active annotation which needs to be deactivated
			if (this.props.activeAnnotation !== null) {
				[...this.activeTags(this.props.activeAnnotation)].forEach((a: HTMLElement) => {
					// Return the inactive style to the tag
					a.style.cssText = this.inactiveTagStyle;
					this.inactiveTagStyle = null;
				});
			}

			// Next props has an active annotation which needs to be activated
 			if (props.activeAnnotation != null) {
				[...this.activeTags(props.activeAnnotation)].forEach((a: HTMLElement) => {
					// Remember the activated tags style
					this.inactiveTagStyle = a.style.cssText; // Little overhead, because it is overwritten in the loop, but taking it out requires a lot more code (and type checking)
					a.style.cssText = activeTagStyle;
				})
			}
		}
	}

	private textTree(root, text, props) {
		if (root.text == null && text == null) return null;

		const children = (root.hasOwnProperty('children') && root.children.length) ?
			root.children.map((child, i) => this.textTree(child, text, props)) :
			text.slice(root.start, root.end);

		return (
			<TextTreeNode
				activeAnnotation={props.activeAnnotation}
				annotation={root}
				key={window.crypto.getRandomValues(new Uint32Array(1))[0]}
				tags={props.tags}
			>
				{children}
			</TextTreeNode>
		);
	}
}

export default RenderedText;
