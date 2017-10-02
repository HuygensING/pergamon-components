"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_by_tags_1 = require("../../tags/system-components-by-tags");
exports.byStartEnd = (a, b) => {
    if (a.start > b.start)
        return 1;
    if (b.start > a.start)
        return -1;
    if (a.start === b.start) {
        if (a.end > b.end)
            return -1;
        if (b.end > a.end)
            return 1;
    }
    return 0;
};
exports.byDisplayStartEnd = (tags) => (a, b) => {
    if (!tags.hasOwnProperty(a.type)) {
        console.error(`Annotation type not found: "${a.type}"`);
        tags[a.type] = tags.__text;
    }
    if (!tags.hasOwnProperty(b.type)) {
        console.error(`Annotation type not found: "${b.type}"`);
        tags[b.type] = tags.__text;
    }
    const aDisplay = tags[a.type].display;
    const bDisplay = tags[b.type].display;
    if (aDisplay !== bDisplay) {
        return (aDisplay === system_components_by_tags_1.Display.Inline) ? 1 : -1;
    }
    else {
        return exports.byStartEnd(a, b);
    }
};
exports.byRowStartEnd = (a, b) => {
    if (a.row > b.row)
        return 1;
    if (b.row > a.row)
        return -1;
    if (a.row === b.row) {
        return exports.byStartEnd(a, b);
    }
};
