/// <reference types="react" />
import * as React from 'react';
import { ITag } from '../interfaces';
export interface IState {
    active: boolean;
    height: number;
    left: number;
    top: number;
    width: number;
}
declare class Anchor extends React.Component<ITag, IState> {
    private el;
    state: {
        active: boolean;
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
