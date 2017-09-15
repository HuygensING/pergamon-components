"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sort_1 = require("./sort");
const split_annotations_1 = require("./split-annotations");
const to_tree_1 = require("./to-tree");
const add_row_1 = require("./add-row");
const fill_gaps_1 = require("./fill-gaps");
exports.hasOverlap = (a, b) => !(a.end <= b.start || a.start >= b.end);
exports.generateTagId = (a) => {
    const suffix = a.hasOwnProperty('_first') ?
        '_first' :
        a.hasOwnProperty('_last') ?
            '_last' :
            a.hasOwnProperty('_segment') ?
                `_segment_${Math.round(Math.random() * 1000000)}` :
                '';
    return `${a.type}_${a.id}${suffix}`;
};
const addTagId = (a) => {
    a._tagId = exports.generateTagId(a);
    return a;
};
const orderAnnotations = (annotations) => annotations
    .sort(sort_1.byDisplayStartEnd)
    .map(add_row_1.addRow())
    .sort(sort_1.byRowStartEnd)
    .reduce(split_annotations_1.splitAnnotations(), [])
    .map(add_row_1.addRow())
    .sort(sort_1.byRowStartEnd)
    .map(addTagId);
const createTree = (annotation) => {
    annotation.children = orderAnnotations(annotation.children)
        .reduce(to_tree_1.default, []);
    return fill_gaps_1.default(annotation);
};
exports.default = createTree;
