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
    constructor(raw?: Partial<Annotation>);
}
export default Annotation;
