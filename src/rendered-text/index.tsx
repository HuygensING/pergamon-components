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

	private init(props) {
		if (this.state.textTree == null) {
			const root = createTree(JSON.parse(JSON.stringify(props.root)), props.tags);
			const textTree = this.textTree(root, props.root.text, props);
			this.setState({ textTree });
		}

		if (this.props.activeAnnotation !== props.activeAnnotation) {
			const activeAnnotations = this.el.querySelectorAll('.active');
			[...activeAnnotations].forEach((a: HTMLElement) => {
				a.style.cssText = '';
				a.classList.remove('active');
			});

 			if (props.activeAnnotation != null) {
				const tagId = generateTagId(props.activeAnnotation, false);
				const activeTags = this.el.querySelectorAll(`[id^=${tagId}]`);
				[...activeTags].forEach(at => {
					if (at instanceof HTMLElement) {
						at.style.cssText = activeTagStyle;
						at.classList.add('active');
					}
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
