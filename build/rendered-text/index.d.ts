/// <reference types="react" />
import * as React from 'react';
import { ITextAnnotationCommon } from "./node";
import { IAnnotation } from "../interfaces";
export interface ITree extends ITextAnnotationCommon {
    root: IAnnotation;
}
declare const RenderedText: React.StatelessComponent<ITree>;
export default RenderedText;
