/// <reference types="react" />
import * as React from 'react';
import { IAnnotation } from "../interfaces";
import { IComponentsByTags } from '../tags/system-components-by-tags';
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
declare class RenderedText extends React.Component<IProps, IState> {
    state: {
        textTree: any;
    };
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: IProps): void;
    render(): JSX.Element;
    private init(props);
    private textTree(root, text, props);
}
export default RenderedText;
