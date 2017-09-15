import {byDisplayStartEnd, byRowStartEnd} from "./sort";
import {splitAnnotations} from "./split-annotations";
import toTree from "./to-tree";
import {addRow} from "./add-row";
import fillGaps from "./fill-gaps";
import {IAnnotation} from "../../interfaces";

export const hasOverlap = (a, b) => !(a.end <= b.start || a.start >= b.end);

const orderAnnotations = (annotations) =>
	annotations
		.sort(byDisplayStartEnd)
		.map(addRow())
		.sort(byRowStartEnd)
		.reduce(splitAnnotations(), [])
		.map(addRow())
		.sort(byRowStartEnd)
		.map((a: IAnnotation) => {
			const suffix = a.hasOwnProperty('_first') ?
				'_first' :
				a.hasOwnProperty('_last') ?
					'_last' :
					a.hasOwnProperty('_segment') ?
						`_segment_${Math.round(Math.random() * 1000000)}` :
						'';

			a._tagId = `${a.id}__${a.type}${suffix}`;
			return a;
	});

const createTree = (annotation: IAnnotation): IAnnotation => {
	annotation.children = orderAnnotations(annotation.children)
	 .reduce(toTree, []);

	return fillGaps(annotation);
};

export default createTree;
