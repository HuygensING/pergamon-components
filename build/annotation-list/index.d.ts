/// <reference types="react" />
import * as React from 'react';
import { IAnnotationCommon } from "./annotation";
import { IAnnotation } from "../interfaces";
export interface IAnnotationListProps extends IAnnotationCommon {
    filter?: (a: IAnnotation) => boolean;
    rootAnnotation: IAnnotation;
    sort?: (a: IAnnotation, b: IAnnotation) => -1 | 0 | 1;
}
declare const AnnotationList: React.SFC<IAnnotationListProps>;
export default AnnotationList;
