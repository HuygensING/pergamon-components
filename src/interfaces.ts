export type SourceType = 'system' | 'xml' | 'user';
export interface IAnnotation {
	// If the annotation is splitted, is it the first segment?
	_first?: boolean;

	// If the annotation is splitted, is it the last segment?
	_last?: boolean;

	// If the annotation is splitted, is it not the first and not the last?
	// Ie. somewhere in between.
	_segment?: boolean;

	_tagId?: string;

	// Type and id of the target (parent)
	// _targetId?: string;
	// TODO remove?
	_targetType?: 'annotation' | 'document';

	annotations?: IAnnotation[];
	attributes?: any;
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
	_activeNoteId?: string,
	id: string;
	annotations: IAnnotation[],
	text: string;
	tree: IAnnotation,
}

