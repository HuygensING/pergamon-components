/// <reference types="react" />
import * as React from 'react';
import { IAnnotation } from '../interfaces';
export interface IMetadata {
    rootAnnotation: IAnnotation;
}
declare const Metadata: React.SFC<IMetadata>;
export default Metadata;
