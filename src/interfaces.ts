import { IComponentsByTags } from "./tags/system-components-by-tags";

export type SourceType = 'system' | 'xml' | 'user';
export interface IAnnotation {
	// If the annotation is splitted, is it the first segment?
	_first?: boolean;

	// If the annotation is splitted, is it the last segment?
	_last?: boolean;

	// If the annotation is splitted, is it not the first and not the last?
	// Ie. somewhere in between.
	_segment?: boolean;

	// A unique identifier to identify splitted tags correctly
	_tagId?: string;

	// Type and id of the target (parent)
	// _targetId?: string;
	// TODO remove?
	_targetType?: 'annotation' | 'document';

	annotations?: IAnnotation[];
	attributes?: {
		type: string
		[key: string]: any
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
	_activeNoteId?: string,
	id: string;
	annotations: IAnnotation[],
	text: string;
	tree: IAnnotation,
}

export interface ITag {
	activateAnnotation: (a: IAnnotation) => void
	activeAnnotation: IAnnotation
	annotation: IAnnotation
	id: string
	root: IAnnotation
	tags: IComponentsByTags
}

export type Tag = React.SFC<ITag>
	