/// <reference types="react" />
import * as React from 'react';
import { IAnnotation } from '../interfaces';
export interface ITag {
    activeAnnotation: IAnnotation;
    annotation: IAnnotation;
    id: string;
}
export declare const Span: React.SFC<ITag>;
export declare const Div: React.SFC<ITag>;
export declare const None: React.SFC;
