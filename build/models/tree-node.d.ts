declare class TreeNode {
    segment: 'first' | 'middle' | 'last' | 'none';
    annotationId: string;
    row: number;
    children: TreeNode[];
    attributes: Map<string, string>;
    end: number;
    start: number;
    type: string;
    constructor(raw: Partial<TreeNode>);
    id(): string;
    clone(): any;
}
export default TreeNode;
