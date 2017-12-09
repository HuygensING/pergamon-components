import { IAnnotation } from '../../interfaces';
import { Display, IComponentsByTags } from '../../tags/system-components-by-tags';

export const byStartEnd = (a: IAnnotation, b: IAnnotation) => {
	if (a.start > b.start) return 1;
	if (b.start > a.start) return -1;
	if (a.start === b.start) {
		if (a.end > b.end) return -1;
		if (b.end > a.end) return 1;
	}
	return 0;
};

export const byDisplayStartEnd = (tags: IComponentsByTags) => (a: IAnnotation, b: IAnnotation) => {
	const aDisplay = tags.hasOwnProperty(a.type) ? tags[a.type].display : Display.Inline
	const bDisplay = tags.hasOwnProperty(b.type) ? tags[b.type].display : Display.Inline

	// If display prop are not the same, 'block' get precedence over 'inline'
	// If display prop is equal, look at start and end prop
	if (aDisplay !== bDisplay) {
		return (aDisplay === Display.Inline) ? 1 : -1;
	} else {
		return byStartEnd(a, b);
	}
};

export const byRowStartEnd = (a, b) => {
	if (a.row > b.row) return 1
	else if (a.row < b.row) return -1
	else return byStartEnd(a, b)
};

// export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
