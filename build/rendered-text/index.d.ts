/// <reference types="react" />
import * as React from 'react';
import { ITextAnnotationCommon } from "./node";
import { IAnnotation } from "../interfaces";
export interface IProps extends ITextAnnotationCommon {
    root: IAnnotation;
    text: string;
}
export interface IState {
    tree: Object;
}
declare const RenderedText: React.StatelessComponent<IProps>;
export default RenderedText;
