import {hasOverlap} from "./index";
import { IComponentsByTags, Display } from "../../tags/system-components-by-tags";

export const addRow = (tags: IComponentsByTags) => {
	const rows = [[]];
	return annotation => {
		const space = [];
		for (let row = 0; row < rows.length; row++) {
			const annotationsInRow = rows[row];
			const isRowWithSpace = annotationsInRow.reduce((hasSpace, curr) => {
				return hasSpace && !hasOverlap(annotation, curr);
			}, true);

			if (isRowWithSpace) {
				space[row] = null;
			} else {
				space[row] = annotationsInRow
					.filter(a => hasOverlap(annotation, a))
					.some(a => tags.hasOwnProperty(a.type) && tags[a.type].display === Display.Block);
			}
		}

		const highestBlockIndex = space.lastIndexOf(true);
		let rowIndex = space.findIndex((x, i) => x == null && i > highestBlockIndex);
		if (rowIndex === -1) {
			const newLength = rows.push([annotation]);
			rowIndex = newLength - 1;
		} else {
			rows[rowIndex].push(annotation);
		}
		annotation.row = rowIndex;

		return annotation;
	}
};
