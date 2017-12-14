import TreeNode from "./tree-node";
export interface IRawAnnotation {
    annotations: Partial<IRawAnnotation>[];
    attributes: {
        [key: string]: string;
    };
    body: {
        [key: string]: string;
    };
    end: number;
    id: string;
    keywords: IKeyword[];
    source: 'xml' | 'user';
    start: number;
    target: string;
    type: string;
}
export interface IKeyword {
    terms: string[];
    weight: number;
}
declare class Annotation {
    annotations: Annotation[];
    attributes: Map<string, string>;
    end: number;
    id: string;
    keywords: IKeyword[];
    metadata: Map<string, string>;
    source: 'xml' | 'user';
    start: number;
    target: string;
    text: string;
    type: string;
    constructor(raw?: Partial<IRawAnnotation>);
    private toRawAnnotation();
    clone(): Annotation;
    toNode(): TreeNode;
}
export default Annotation;
