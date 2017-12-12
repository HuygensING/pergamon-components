/// <reference types="react" />
import * as React from 'react';
import { Annotation } from '../index';
export interface IProps {
    annotation: Annotation;
    rootAnnotation: Annotation;
}
declare class Place extends React.PureComponent<IProps, null> {
    render(): JSX.Element;
}
export default Place;
