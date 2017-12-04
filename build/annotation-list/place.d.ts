/// <reference types="react" />
import * as React from 'react';
import { IAnnotation } from "../interfaces";
export interface IProps {
    annotation: IAnnotation;
    rootAnnotation: IAnnotation;
}
declare class Place extends React.PureComponent<IProps, null> {
    render(): JSX.Element;
}
export default Place;
