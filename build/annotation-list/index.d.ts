/// <reference types="react" />
import * as React from 'react';
import { IAnnotationCommon } from "./annotation";
import { IAnnotation } from "../interfaces";
export interface IAnnotationListProps extends IAnnotationCommon {
    rootAnnotation: IAnnotation;
}
declare const AnnotationList: React.SFC<IAnnotationListProps>;
export default AnnotationList;
