import { defaultAnnotation } from "../../.storybook/dummy";
import { IAnnotation } from "../../src";

// The original test data, but the first p overlaps
// the second (by just one codepoint).

export const annotations: IAnnotation[] = [
	{
		...defaultAnnotation,
		start: 6,
		end: 32,
		type: 'p',
	},
	{
		...defaultAnnotation,
		start: 31,
		end: 72,
		type: 'p',
	},
	{
		...defaultAnnotation,
		start: 8,
		end: 17,
		type: 'geogName',
	},
	{
		...defaultAnnotation,
		start: 23,
		end: 39,
		type: 'persName',
	},
	{
		...defaultAnnotation,
		start: 34,
		end: 36,
		type: 'placeName',
	}
];

export const annotationsWithRow: IAnnotation[]  = [
	{
		...defaultAnnotation,
		start: 6,
		end: 32,
		row: 0,
		type: 'p',
	},
	{
		...defaultAnnotation,
		start: 31,
		end: 72,
		row: 1,
		type: 'p',
	},
	{
		...defaultAnnotation,
		start: 8,
		end: 17,
		row: 1,
		type: 'geogName',
	},
	{
		...defaultAnnotation,
		start: 23,
		end: 39,
		row: 2,
		type: 'persName',
	},
	{
		...defaultAnnotation,
		start: 34,
		end: 36,
		row: 3,
		type: 'placeName',
	}
];

export const annotationsSplitted: IAnnotation[] = [
	{
		...defaultAnnotation,
		start: 6,
		end: 32,
		type: 'p',
	},
	{
		...defaultAnnotation,
		_first: true,
		start: 31,
		end: 32,
		type: 'p',
	},
	{
		...defaultAnnotation,
		_last: true,
		start: 32,
		end: 72,
		type: 'p',
	},
	{
		...defaultAnnotation,
		start: 8,
		end: 17,
		type: 'geogName',
	},
	{
		...defaultAnnotation,
		_first: true,
		start: 23,
		end: 31,
		type: 'persName',
	},
	{
		...defaultAnnotation,
		_segment: true,
		start: 31,
		end: 32,
		type: 'persName',
	},
	{
		...defaultAnnotation,
		_last: true,
		start: 32,
		end: 39,
		type: 'persName',
	},
	{
		...defaultAnnotation,
		start: 34,
		end: 36,
		type: 'placeName',
	}
];

export const tree: IAnnotation[] = [
	{
		...defaultAnnotation,
		start: 6,
		end: 32,
		type: 'p',
		children: [
			{
				...defaultAnnotation,
				_first: true,
				start: 31,
				end: 32,
				type: 'p',
				children: [
					{
						...defaultAnnotation,
						_segment: true,
						start: 31,
						end: 32,
						type: 'persName',
					}
				]
			},
			{
				...defaultAnnotation,
				start: 8,
				end: 17,
				type: 'geogName',
			},
			{
				...defaultAnnotation,
				_first: true,
				start: 23,
				end: 31,
				type: 'persName',
			},
		]
	},
	{
		...defaultAnnotation,
		_last: true,
		start: 32,
		end: 72,
		type: 'p',
		children: [
			{
				...defaultAnnotation,
				_last: true,
				start: 32,
				end: 39,
				type: 'persName',
				children: [
					{
						...defaultAnnotation,
						start: 34,
						end: 36,
						type: 'placeName',
					}
				]
			},
		]
	},
];
