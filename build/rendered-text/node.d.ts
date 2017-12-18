/// <reference types="react" />
import * as React from 'react';
import Annotation from '../models/annotation';
import { IComponentsByTags } from '../tags/system-components-by-tags';
import { IRenderedTextCommon } from './index';
import TreeNode from '../models/tree-node';
export interface ITextTreeNode extends IRenderedTextCommon {
    custom?: any;
    node: TreeNode;
    root: Annotation;
    tags: IComponentsByTags;
}
declare const TextTreeNode: React.SFC<ITextTreeNode>;
export default TextTreeNode;
