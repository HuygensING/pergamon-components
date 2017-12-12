import Annotation from '../../models/annotation';
import TreeNode from '../../models/tree-node';
export declare const generateNodeId: (node: TreeNode, withSuffix?: boolean) => string;
declare const createTree: (root: Annotation) => TreeNode[];
export default createTree;
