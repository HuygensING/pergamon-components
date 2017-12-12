/// <reference types="react" />
import * as React from 'react';
import { Annotation } from '../index';
export interface IMetadata {
    rootAnnotation: Annotation;
}
declare const Metadata: React.SFC<IMetadata>;
export default Metadata;
