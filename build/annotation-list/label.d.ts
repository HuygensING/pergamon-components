import * as React from 'react';
import Annotation from '../models/annotation';
export interface IProps {
    annotation: Annotation;
    rootAnnotation: Annotation;
}
declare class Label extends React.PureComponent<IProps, null> {
    render(): JSX.Element;
}
export default Label;
