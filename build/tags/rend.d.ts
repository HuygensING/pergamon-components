import * as React from 'react';
import { ITagProps } from '../interfaces';
import TreeNode from '../models/tree-node';
export declare const getRendValue: (node: TreeNode) => string;
declare const rendStyle: (props: ITagProps) => React.CSSProperties;
export default rendStyle;
