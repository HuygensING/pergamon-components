/// <reference types="react" />
import * as React from 'react';
import Annotation from "../models/annotation";
import { IComponentsByTags } from '../tags/system-components-by-tags';
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
declare class RenderedText extends React.PureComponent<IProps, IState> {
    state: {
        componentTree: any;
    };
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: IProps): void;
    render(): JSX.Element;
    private init(props);
    private nodeTreeToComponentTree(node, root, props);
}
export default RenderedText;
