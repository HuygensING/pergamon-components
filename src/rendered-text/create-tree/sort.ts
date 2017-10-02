import { IAnnotation } from '../../interfaces';
import { Display } from '../../tags/system-components-by-tags';

export const byStartEnd = (a, b) => {
	if (a.start > b.start) return 1;
	if (b.start > a.start) return -1;
	if (a.start === b.start) {
		if (a.end > b.end) return -1;
		if (b.end > a.end) return 1;
	}
	return 0;
};

export const byDisplayStartEnd = (tags) => (a: IAnnotation, b: IAnnotation) => {
	if (!tags.hasOwnProperty(a.type)) {
		console.error(`Annotation type not found: "${a.type}"`)
		tags[a.type] = tags.__text;
	}

	if (!tags.hasOwnProperty(b.type)) {
		console.error(`Annotation type not found: "${b.type}"`)
		tags[b.type] = tags.__text;
	}

	const aDisplay = tags[a.type].display;
	const bDisplay = tags[b.type].display;

	// If display prop are not the same, 'block' get precedence over 'inline'
	// If display prop is equal, look at start and end prop
	if (aDisplay !== bDisplay) {
		return (aDisplay === Display.Inline) ? 1 : -1;
	} else {
		return byStartEnd(a, b);
	}
};

export const byRowStartEnd = (a, b) => {
	if (a.row > b.row) return 1;
	if (b.row > a.row) return -1;
	if (a.row === b.row) {
		return byStartEnd(a, b);
	}
};

// export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
