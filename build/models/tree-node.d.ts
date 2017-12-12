declare class TreeNode {
    first: boolean;
    annotationId: string;
    last: boolean;
    row: number;
    segment: boolean;
    id: string;
    children: TreeNode[];
    attributes: Map<string, string>;
    end: number;
    start: number;
    type: string;
    constructor(raw?: Partial<TreeNode>);
}
export default TreeNode;
