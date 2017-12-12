/// <reference types="react" />
import * as React from 'react';
import { IAnnotationCommon } from "./annotation";
import { Annotation } from '../index';
export interface IAnnotationListProps extends IAnnotationCommon {
    filter?: (a: Annotation) => boolean;
    rootAnnotation: Annotation;
    sort?: (a: Annotation, b: Annotation) => -1 | 0 | 1;
}
declare const AnnotationList: React.SFC<IAnnotationListProps>;
export default AnnotationList;
