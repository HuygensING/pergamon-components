"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tags_1 = require("../tags");
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
exports.byDisplayStartEnd = (a, b) => {
    if (!tags_1.default.hasOwnProperty(a.type)) {
        console.error(`Annotation type not found: "${a.type}"`);
        tags_1.default[a.type] = tags_1.default.text;
    }
    if (!tags_1.default.hasOwnProperty(b.type)) {
        console.error(`Annotation type not found: "${b.type}"`);
        tags_1.default[b.type] = tags_1.default.text;
    }
    const aDisplay = tags_1.default[a.type].display;
    const bDisplay = tags_1.default[b.type].display;
    if (aDisplay !== bDisplay) {
        return (aDisplay === 'inline') ? 1 : -1;
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
