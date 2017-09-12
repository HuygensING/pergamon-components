/// <reference types="react" />
import * as React from 'react';
import { IAnnotationFormProps } from "./annotation-form";
import { IAnnotation } from "../interfaces";
export interface IAnnotationCommon extends IAnnotationFormProps {
    activateAnnotation: (string) => void;
}
export interface IAnnotationProps extends IAnnotationCommon {
    annotation: IAnnotation;
}
declare const Annotation: React.SFC<IAnnotationProps>;
export default Annotation;
