import TreeNode from '../../models/tree-node';
export declare const toSplitPoints: (splitPoints: number[], curr: TreeNode, index: any, arr: TreeNode[]) => number[];
export declare const splitAnnotation: (node: TreeNode, splitPoints: number[]) => TreeNode[];
export declare const splitAnnotations: () => (agg: TreeNode[], curr: TreeNode, index: number, arr: TreeNode[]) => TreeNode[];
