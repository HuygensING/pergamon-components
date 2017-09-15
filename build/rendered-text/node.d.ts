/// <reference types="react" />
import * as React from 'react';
import { IAnnotation, IDocument } from "../interfaces";
export interface ITextAnnotationCommon {
    activateAnnotationDocument?: (IAnnotation, string) => void;
    activateNote?: (string) => void;
    activeAnnotation?: IAnnotation;
    activeAnnotationDocument?: IDocument;
    activeNoteId?: string;
    documents?: IDocument[];
}
export interface ITextAnnotationProps extends ITextAnnotationCommon {
    annotation: IAnnotation;
}
declare const TextTreeNode: React.SFC<ITextAnnotationProps>;
export default TextTreeNode;
