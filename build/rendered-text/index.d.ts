/// <reference types="react" />
import * as React from 'react';
import { ITextAnnotationCommon } from "./node";
import { IAnnotation } from "../interfaces";
export interface IProps extends ITextAnnotationCommon {
    root: IAnnotation;
}
export interface ITree extends IProps {
    text: string;
}
export interface IState {
    tree: Object;
}
declare class RenderedText extends React.Component<IProps, IState> {
    state: {
        tree: any;
    };
    componentWillReceiveProps(nextProps: any): void;
    render(): any;
    private createTree(root, text, activeAnnotation);
}
export default RenderedText;
