import * as React from 'react';
import { Annotation } from '../index';
export interface IProps {
    rootAnnotation: Annotation;
}
export interface IState {
    width: number;
}
declare class Metadata extends React.PureComponent<IProps, IState> {
    state: {
        width: any;
    };
    render(): JSX.Element;
}
export default Metadata;
