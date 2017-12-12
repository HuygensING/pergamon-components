/// <reference types="react" />
import * as React from 'react';
import { IAnnotationFormProps } from "./annotation-form";
import { IComponentsByTags } from '../tags/system-components-by-tags';
import { Annotation } from '../index';
export interface IAnnotationCommon extends IAnnotationFormProps {
    activateAnnotation: (id: string) => void;
    tags: IComponentsByTags;
}
export interface IAnnotationProps extends IAnnotationCommon {
    annotation: Annotation;
}
declare const AnnotationItem: React.SFC<IAnnotationProps>;
export default AnnotationItem;
