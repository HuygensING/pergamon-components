/// <reference types="react" />
import * as React from 'react';
import { ITextAnnotationCommon } from "./node";
import { IAnnotation } from "../interfaces";
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
declare class RenderedText extends React.Component<IProps, IState> {
    private el;
    private inactiveTagStyle;
    state: {
        textTree: any;
    };
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: IProps): void;
    render(): JSX.Element;
    private activeTags(activeAnnotation);
    private init(props);
    private textTree(root, text, props);
}
export default RenderedText;
