/// <reference types="react" />
export declare type SourceType = 'system' | 'xml' | 'user';
export interface IAnnotation {
    _first?: boolean;
    _last?: boolean;
    _segment?: boolean;
    _tagId?: string;
    _targetType?: 'annotation' | 'document';
    annotations?: IAnnotation[];
    attributes?: {
        type: string;
        [key: string]: any;
    };
    children?: IAnnotation[];
    body?: string;
    end: number;
    id?: number | string;
    source: SourceType;
    start: number;
    target: string;
    text: string;
    type: string;
}
export interface IDocument {
    _activeNoteId?: string;
    id: string;
    annotations: IAnnotation[];
    text: string;
    tree: IAnnotation;
}
export interface ITag {
    activeAnnotation: IAnnotation;
    annotation: IAnnotation;
    id: string;
}
export declare type Tag = React.SFC<ITag>;
