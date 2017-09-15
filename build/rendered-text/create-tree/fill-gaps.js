"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4 = require("uuid/v4");
const constants_1 = require("../../constants");
exports.reducer = (parent) => {
    let prevEnd = parent.start;
    return (agg, curr, index, arr) => {
        const prev = agg[agg.length - 1];
        curr = Object.assign({}, curr);
        curr.start = curr.start < parent.start ? parent.start : curr.start;
        curr.end = curr.end > parent.end ? parent.end : curr.end;
        if (prev == null && curr.start > parent.start) {
            agg.push({
                end: curr.start,
                _tagId: `${constants_1.SYSTEM_TEXT_TYPE}_${uuidv4()}_first`,
                start: parent.start,
                type: constants_1.SYSTEM_TEXT_TYPE,
            });
            prevEnd = curr.start;
        }
        if (curr.start > prevEnd) {
            const start = prevEnd;
            const end = curr.start;
            agg.push({
                end,
                _tagId: `${constants_1.SYSTEM_TEXT_TYPE}_${uuidv4()}_segment`,
                start,
                type: constants_1.SYSTEM_TEXT_TYPE,
            });
        }
        agg.push(curr);
        prevEnd = curr.end > prevEnd ? curr.end : prevEnd;
        if (index === arr.length - 1 && prevEnd < parent.end) {
            agg.push({
                end: parent.end,
                _tagId: `${constants_1.SYSTEM_TEXT_TYPE}_${uuidv4()}_last`,
                start: prevEnd,
                type: constants_1.SYSTEM_TEXT_TYPE,
            });
        }
        return agg;
    };
};
const fillGaps = (root) => {
    if (root.hasOwnProperty('children')) {
        root.children = root.children
            .reduce(exports.reducer(root), [])
            .map(fillGaps);
    }
    return root;
};
exports.default = fillGaps;
