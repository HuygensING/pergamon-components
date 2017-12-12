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
    const aDisplay = tags.hasOwnProperty(a.type) ? tags[a.type].display : system_components_by_tags_1.Display.Inline;
    const bDisplay = tags.hasOwnProperty(b.type) ? tags[b.type].display : system_components_by_tags_1.Display.Inline;
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
    else if (a.row < b.row)
        return -1;
    else
        return exports.byStartEnd(a, b);
};
