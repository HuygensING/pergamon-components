import {byDisplayStartEnd, byRowStartEnd} from "./sort";
import {splitAnnotations} from "./split-annotations";
import toTree from "./to-tree";
import {addRow} from "./add-row";
import fillGaps from "./fill-gaps";
import {IAnnotation} from "../../interfaces";
import { IComponentsByTags } from "../../tags/system-components-by-tags";

export const hasOverlap = (a, b) => !(a.end <= b.start || a.start >= b.end);

export const generateTagId = (a: IAnnotation) => {
	const suffix = a.hasOwnProperty('_first') ?
		'_first' :
		a.hasOwnProperty('_last') ?
			'_last' :
			a.hasOwnProperty('_segment') ?
				`_segment_${Math.round(Math.random() * 1000000)}` :
				'';

	return `${a.type}_${a.id}${suffix}`;
}

const addTagId = (a: IAnnotation) => {
	a._tagId = generateTagId(a);
	return a;
}

const orderAnnotations = (annotations, tags) =>
	annotations
		.sort(byDisplayStartEnd(tags))
		.map(addRow(tags))
		.sort(byRowStartEnd)
		.reduce(splitAnnotations(), [])
		.map(addRow(tags))
		.sort(byRowStartEnd)
		.map(addTagId);

const createTree = (annotation: IAnnotation, tags: IComponentsByTags): IAnnotation => {
	annotation.children = orderAnnotations(annotation.children, tags)
	 .reduce(toTree, []);

	return fillGaps(annotation);
};

export default createTree;
