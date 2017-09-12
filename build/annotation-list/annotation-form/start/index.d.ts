/// <reference types="react" />
import * as React from 'react';
import { IAnnotation } from "../../../interfaces";
export interface IProps {
    activeAnnotation: IAnnotation;
    updateAnnotation: (any) => void;
    start: number;
}
export interface IState {
    value: string;
}
declare class Start extends React.Component<IProps, IState> {
    state: {
        value: string;
    };
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
}
export default Start;
