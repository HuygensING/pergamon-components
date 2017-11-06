/// <reference types="react" />
import * as React from 'react';
import { ITag } from '../interfaces';
export interface IState {
    height: number;
    left: number;
    top: number;
    width: number;
}
declare class Anchor extends React.Component<ITag, IState> {
    state: {
        height: number;
        left: number;
        top: number;
        width: number;
    };
    render(): JSX.Element;
}
export default Anchor;
