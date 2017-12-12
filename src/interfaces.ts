import { IComponentsByTags } from "./tags/system-components-by-tags";
import Annotation from './models/annotation'
import TreeNode from './models/tree-node'

export type SourceType = 'system' | 'xml' | 'user';
// export interface IAnnotation {
// 	// If the annotation is splitted, is it the first segment?
// 	_first?: boolean;

// 	// If the annotation is splitted, is it the last segment?
// 	_last?: boolean;

// 	// If the annotation is splitted, is it not the first and not the last?
// 	// Ie. somewhere in between.
// 	_segment?: boolean;

// 	// A unique identifier to identify splitted tags correctly
// 	_tagId?: string;

// 	// Type and id of the target (parent)
// 	// _targetId?: string;
// 	// TODO remove?
// 	_targetType?: 'annotation' | 'document';

// 	annotations?: IAnnotation[];
// 	attributes?: {
// 		type?: string
// 		[key: string]: any
// 	};
// 	children?: IAnnotation[];
// 	body?: string;
// 	end: number;
// 	id?: number | string;
// 	metadata?: {
// 		[key: string]: string
// 	}
// 	row?: number
// 	source: SourceType
// 	start: number
// 	target: string
// 	text: string
// 	type: string
// }

// export interface IDocument {
// 	_activeNoteId?: string,
// 	id: string;
// 	annotations: IAnnotation[],
// 	text: string;
// 	tree: IAnnotation,
// }

export interface ITagProps {
	activateAnnotation: (id: string) => void
	activeAnnotation: Annotation
	node: TreeNode
	id: string
	root: Annotation
	style?: React.CSSProperties
	tags: IComponentsByTags
}

export type Tag = React.SFC<ITagProps> | React.ComponentClass<ITagProps>
	