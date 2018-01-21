/// <reference types="react" />
import * as React from 'react';
import Annotation from "../models/annotation";
import TreeNode from "../models/tree-node";
import { IComponentsByTags } from '../tags/system-components-by-tags';
export interface IRenderedTextCommon {
    activateAnnotation?: (id: string) => void;
    activeAnnotation?: Annotation;
}
export interface IProps extends IRenderedTextCommon {
    onChange?: (tree: TreeNode[]) => void;
    onRef?: (el: Element) => void;
    root: Annotation;
    tags: IComponentsByTags;
}
export interface IState {
    componentTree: any;
}
declare class RenderedText extends React.Component<IProps, IState> {
    render(): JSX.Element;
    private nodeTreeToComponentTree(node);
    private constructTree;
}
export default RenderedText;
