import { annotations, annotationsWithRow, annotationsSplitted, tree } from './data/original-b';
import { addRow } from '../src/rendered-text/create-tree/add-row';
import { toSplitPoints, splitAnnotations } from '../src/rendered-text/create-tree/split-annotations';
import { byDisplayStartEnd } from '../src/rendered-text/create-tree/sort';
import toTree from '../src/rendered-text/create-tree/to-tree';
import tags from '../src/tags'

describe('addRow', () => {
	test('addRow 1', () => {
		const received = annotations.map(addRow(tags));
		expect(received).toEqual(annotationsWithRow);
	})
});

describe('toSplitPoints', () => {
	test('toSplitPoints 1', () => {
		const received = annotationsWithRow.reduce(toSplitPoints, []);
		const expected = [31, 32];
		expect(received).toEqual(expected);
	});
});

describe('splitAnnotations', () => {
	test('splitAnnotations: second', () => {
		const received = annotationsWithRow
			.reduce(splitAnnotations(), [])
			.map((a) => { delete a.row; return a; });
		expect(received).toEqual(annotationsSplitted);
	});
});

describe('toTree', () => {
	test('toTree 1', () => {
		const received = annotationsSplitted
			.sort(byDisplayStartEnd(tags))
			.reduce(toTree, []);
		expect(received).toEqual(tree);
	})
});
