import { defaultAnnotation } from "../../.storybook/dummy";
import { IAnnotation } from "../../src";

// The original data set, but the original persName goes from
// 23 to 38. If 23 is changed to 2, the persName (an inline el),
// crosses the two ps (block elements).

export const annotations: IAnnotation[] = [
	{
		...defaultAnnotation,
		start: 2,
		end: 39,
		type: 'persName',
	},
	{
		...defaultAnnotation,
		start: 6,
		end: 30,
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
		start: 31,
		end: 72,
		type: 'p',
	},
	{
		...defaultAnnotation,
		start: 34,
		end: 36,
		type: 'placeName',
	}
];

export const annotationsSorted = [
	{
		...defaultAnnotation,
		start: 6,
		end: 30,
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
		start: 2,
		end: 39,
		type: 'persName',
	},
	{
		...defaultAnnotation,
		start: 8,
		end: 17,
		type: 'geogName',
	},
	{
		...defaultAnnotation,
		start: 34,
		end: 36,
		type: 'placeName',
	}
];

export const annotationsWithRow = [
	{
		...defaultAnnotation,
		start: 6,
		end: 30,
		type: 'p',
		row: 0,
	},
	{
		...defaultAnnotation,
		start: 31,
		end: 72,
		type: 'p',
		row: 0,
	},
	{
		...defaultAnnotation,
		start: 2,
		end: 39,
		type: 'persName',
		row: 1,
	},
	{
		...defaultAnnotation,
		start: 8,
		end: 17,
		type: 'geogName',
		row: 2,
	},
	{
		...defaultAnnotation,
		start: 34,
		end: 36,
		type: 'placeName',
		row: 2,
	}
];

export const annotationsSplitted = [
	{
		...defaultAnnotation,
		start: 6,
		end: 30,
		type: 'p',
		row: 0,
	},
	{
		...defaultAnnotation,
		start: 31,
		end: 72,
		type: 'p',
		row: 0,
	},
	{
		...defaultAnnotation,
		_first: true,
		start: 2,
		end: 6,
		type: 'persName',
		row: 1,
	},
	{
		...defaultAnnotation,
		_segment: true,
		start: 6,
		end: 30,
		type: 'persName',
		row: 1,
	},
	{
		...defaultAnnotation,
		_segment: true,
		start: 30,
		end: 31,
		type: 'persName',
		row: 1,
	},
	{
		...defaultAnnotation,
		_last: true,
		start: 31,
		end: 39,
		type: 'persName',
		row: 1,
	},
	{
		...defaultAnnotation,
		start: 8,
		end: 17,
		type: 'geogName',
		row: 2,
	},
	{
		...defaultAnnotation,
		start: 34,
		end: 36,
		type: 'placeName',
		row: 2,
	}
];

export const tree = [
	{
		...defaultAnnotation,
		_first: true,
		start: 2,
		end: 6,
		type: 'persName',
		row: 1,
	},
	{
		...defaultAnnotation,
		start: 6,
		end: 30,
		type: 'p',
		row: 0,
		children: [
			{
				...defaultAnnotation,
				_segment: true,
				start: 6,
				end: 30,
				type: 'persName',
				row: 1,
				children: [
					{
						...defaultAnnotation,
						start: 8,
						end: 17,
						type: 'geogName',
						row: 2,
					},
				]
			},
		]
	},
	{
		...defaultAnnotation,
		_segment: true,
		start: 30,
		end: 31,
		type: 'persName',
		row: 1,
	},
	{
		...defaultAnnotation,
		start: 31,
		end: 72,
		type: 'p',
		row: 0,
		children: [
			{
				...defaultAnnotation,
				_last: true,
				start: 31,
				end: 39,
				type: 'persName',
				row: 1,
				children: [
					{
						...defaultAnnotation,
						start: 34,
						end: 36,
						type: 'placeName',
						row: 2,
					}
				]
			},
		]
	},
]
