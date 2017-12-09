import createTree from '../src/rendered-text/create-tree/to-tree'
import {byDisplayStartEnd, byStartEnd} from '../src/rendered-text/create-tree/sort';
import {splitAnnotations, toSplitPoints} from '../src/rendered-text/create-tree/split-annotations';
import {addRow} from "../src/rendered-text/create-tree/add-row";
import tags from '../src/tags'
import {
	annotations,
	annotationsWithRow,
	annotationsSorted,
	annotationsSplitted,
	tree
} from './data/original';

describe('byDisplayStartEnd - set 1', () => {
	test('byDisplayStartEnd 1', () => {
		const received = annotations.sort(byDisplayStartEnd(tags));
		expect(received).toEqual(annotationsSorted);
	})
});

describe('addRow', () => {
	test('addRow 1', () => {
		const received = annotationsSorted.map(addRow(tags));
		expect(received).toEqual(annotationsWithRow);
	})
});

describe('toSplitPoints', () => {
	test('toSplitPoints 1', () => {
		const received = annotationsWithRow.reduce(toSplitPoints, []);
		const expected = [30, 31];
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
			.sort(byStartEnd)
			.reduce(createTree, []);
		expect(received).toEqual(tree);
	})
});
