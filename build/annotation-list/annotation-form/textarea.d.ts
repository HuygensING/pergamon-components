/// <reference types="react" />
import * as React from 'react';
export interface IAnnotationFormTextareaProps {
}
export interface IState {
    value: string;
}
declare class AnnotationDocumentTextarea extends React.Component<IAnnotationFormTextareaProps, IState> {
    state: {
        value: any;
    };
    private updateText;
    render(): JSX.Element;
}
export default AnnotationDocumentTextarea;
