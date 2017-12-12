/// <reference types="react" />
import * as React from 'react';
import Annotation from '../../models/annotation';
export interface IAnnotationFormProps {
    activeAnnotation: Annotation;
    rootAnnotation: Annotation;
}
declare const AnnotationForm: React.SFC<IAnnotationFormProps>;
export default AnnotationForm;
