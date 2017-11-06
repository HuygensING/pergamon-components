/// <reference types="react" />
import * as React from 'react';
import { IAnnotation } from "../interfaces";
import { IComponentsByTags } from '../tags/system-components-by-tags';
import { IRenderedTextCommon } from './index';
export interface ITextTreeNode extends IRenderedTextCommon {
    annotation: IAnnotation;
    root: IAnnotation;
    tags: IComponentsByTags;
}
declare const TextTreeNode: React.SFC<ITextTreeNode>;
export default TextTreeNode;
