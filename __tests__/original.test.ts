import createTree from '../src/rendered-text/tree-builder/to-tree'
import {byDisplayStartEnd, byStartEnd} from '../src/rendered-text/tree-builder/sort'
import {splitAnnotations, toSplitPoints} from '../src/rendered-text/tree-builder/split-annotations'
import addRow from "../src/rendered-text/tree-builder/add-row"
import {
	annotations,
	annotationsWithRow,
	annotationsSorted,
	annotationsSplitted,
	tree
} from './data/original'

describe('byDisplayStartEnd - set 1', () => {
	test('byDisplayStartEnd 1', () => {
		const received = annotations.sort(byDisplayStartEnd)
		expect(received).toEqual(annotationsSorted)
	})
});

describe('addRow', () => {
	test('addRow 1', () => {
		const received = annotationsSorted.map(addRow())
		expect(received).toEqual(annotationsWithRow)
	})
});

describe('toSplitPoints', () => {
	test('toSplitPoints 1', () => {
		const received = annotationsWithRow.reduce(toSplitPoints, [])
		const expected = [30, 31]
		expect(received).toEqual(expected)
	})
})

describe('splitAnnotations', () => {
	test('splitAnnotations: second', () => {
		const received = annotationsWithRow
			.reduce(splitAnnotations(), [])
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
