/// <reference types="react" />
import * as React from 'react';
import { ITagProps } from '../interfaces';
import Annotation from '../models/annotation';
export interface IState {
    active: boolean;
    activeNote: Annotation;
    height: number;
    left: number;
    top: number;
    width: number;
}
declare class Anchor extends React.PureComponent<ITagProps, IState> {
    private el;
    state: {
        active: boolean;
        activeNote: any;
        height: any;
        left: any;
        top: any;
        width: any;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private onResize;
}
export default Anchor;
