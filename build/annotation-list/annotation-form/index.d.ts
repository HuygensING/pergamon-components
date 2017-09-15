/// <reference types="react" />
import * as React from 'react';
import { IAnnotation } from "../../interfaces";
export interface IAnnotationFormProps {
    activeAnnotation: IAnnotation;
    rootAnnotation: IAnnotation;
}
declare const AnnotationForm: React.SFC<IAnnotationFormProps>;
export default AnnotationForm;
