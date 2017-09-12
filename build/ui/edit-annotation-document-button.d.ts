/// <reference types="react" />
import * as React from "react";
import { IAnnotation, IDocument } from "../interfaces";
export interface IProps {
    activateAnnotationDocument: (IAnnotation, string) => void;
    activeAnnotation: IAnnotation;
    activeAnnotationDocument: IDocument;
    bare?: boolean;
    topRight?: boolean;
}
declare const EditAnnotationDocumentButton: React.SFC<IProps>;
export default EditAnnotationDocumentButton;
