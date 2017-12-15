import hasOverlap from "../src/rendered-text/tree-builder/has-overlap"

// Start/end placement in the text
//    S   C   H   E   V   E   N   I   N   G   E   N
//  ^   ^   ^   ^   ^   ^   ^   ^   ^   ^   ^   ^   ^
//  0   1   2   3   4   5   6   7   8   9   10  11  12

describe('hasOverlap', () => {
	// <foo>Schev</foo>e<bar>ning</bar>en
	test('hasOverlap 1', () => {
		expect(hasOverlap({ start: 0, end: 5 }, { start : 6, end: 10 })).toBeFalsy();
	});

	// <bar>Schev</bar>e<foo>ninge</foo>en
	test('hasOverlap 2', () => {
		expect(hasOverlap({ start: 6, end: 10 }, { start : 0, end: 5 })).toBeFalsy();
	});

	// <foo>Schev</foo><bar>ening</bar>en
	test('hasOverlap 3', () => {
		expect(hasOverlap({ start: 0, end: 5 }, { start : 5, end: 10 })).toBeFalsy();
	});

	// Sc<bar>heve</bar><foo>ninge</foo>n
	test('hasOverlap 3b', () => {
		expect(hasOverlap({ start: 6, end: 11 }, { start : 2, end: 6 })).toBeFalsy();
	});

	// <foo><bar>Schev</bar></foo>eningen
	test('hasOverlap 4', () => {
		expect(hasOverlap({ start: 0, end: 5 }, { start : 0, end: 5 })).toBeTruthy();
	});

	// <foo>Sch<bar>ev</foo>eni</bar>ngen <- illegal XML/HTML, but after user edits this could happen
	test('hasOverlap 5', () => {
		expect(hasOverlap({ start: 0, end: 5 }, { start : 3, end: 8 })).toBeTruthy();
	});

	// <bar>Schev<foo>en</bar>ing</foo>en <- illegal XML/HTML, but after user edits this could happen
	test('hasOverlap 6', () => {
		expect(hasOverlap({ start: 5, end: 10 }, { start : 0, end: 7 })).toBeTruthy();
	});

	// <foo /><bar /> => this is the current output
	// <foo><bar /></foo> => this is converted to <foo /><bar />
	test('hasOverlap 7', () => {
		expect(hasOverlap({ start: 5, end: 5 }, { start : 5, end: 5 })).toBeFalsy();
	});

	// <foo><bar />text</foo>
	test('hasOverlap 8', () => {
		expect(hasOverlap({ start: 0, end: 4 }, { start : 0, end: 0 })).toBeTruthy();
	});

	// <foo>text<bar /></foo>
	test('hasOverlap 8', () => {
		expect(hasOverlap({ start: 0, end: 4 }, { start : 4, end: 4 })).toBeTruthy();
	});

	// <foo /><bar>text</bar>
	test('hasOverlap 9', () => {
		expect(hasOverlap({ start: 0, end: 0 }, { start : 0, end: 4 })).toBeFalsy();
	});
});
