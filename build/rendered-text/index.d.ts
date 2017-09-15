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
    textTree: Object;
}
declare class RenderedText extends React.Component<IProps, IState> {
    private el;
    state: {
        textTree: any;
    };
    componentWillReceiveProps(nextProps: IProps): void;
    shouldComponentUpdate(nextProps: IProps, nextState: IState): boolean;
    render(): JSX.Element;
    private textTree(root, text, activeAnnotation);
}
export default RenderedText;
