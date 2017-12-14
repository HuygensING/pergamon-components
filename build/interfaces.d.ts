/// <reference types="react" />
import { IComponentsByTags } from "./tags/system-components-by-tags";
import Annotation from './models/annotation';
import TreeNode from './models/tree-node';
export declare type SourceType = 'system' | 'xml' | 'user';
export interface ITagProps {
    activateAnnotation: (id: string) => void;
    activeAnnotation: Annotation;
    node: TreeNode;
    root: Annotation;
    style?: React.CSSProperties;
    tags: IComponentsByTags;
}
export declare type Tag = React.SFC<ITagProps> | React.ComponentClass<ITagProps>;
