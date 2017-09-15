/// <reference types="react" />
import * as React from 'react';
import { IAnnotationFormProps } from "./annotation-form";
import { IAnnotation } from "../interfaces";
import { IComponentsByTags } from '../tags/system-components-by-tags';
export interface IAnnotationCommon extends IAnnotationFormProps {
    activateAnnotation: (string) => void;
    tags: IComponentsByTags;
}
export interface IAnnotationProps extends IAnnotationCommon {
    annotation: IAnnotation;
}
declare const Annotation: React.SFC<IAnnotationProps>;
export default Annotation;
