/// <reference types="react" />
import * as React from 'react';
import { IProps as __IHireFormsInputProps } from "hire-forms-input";
import { StyledComponentClass } from "styled-components";
import { IAnnotation } from "../../interfaces";
export declare const inputEl = "\n\tflex: 3;\n";
export declare const Input: StyledComponentClass<__IHireFormsInputProps, any, __IHireFormsInputProps>;
export interface IAnnotationFormProps {
    activeAnnotation: IAnnotation;
    rootAnnotation: IAnnotation;
}
declare const AnnotationForm: React.SFC<IAnnotationFormProps>;
export default AnnotationForm;
