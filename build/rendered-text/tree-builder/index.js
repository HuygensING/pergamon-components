"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sort_1 = require("./sort");
const split_annotations_1 = require("./split-annotations");
const add_row_1 = require("./add-row");
const to_tree_1 = require("./to-tree");
const fill_gaps_1 = require("./fill-gaps");
const tree_node_1 = require("../../models/tree-node");
exports.generateNodeId = (node, withSuffix = true) => {
    const suffix = node.hasOwnProperty('_first') ?
        '_first' :
        node.hasOwnProperty('_last') ?
            '_last' :
            node.hasOwnProperty('_segment') ?
                `_segment_${Math.round(Math.random() * 1000000)}` :
                '';
    return withSuffix ? `${node.type}_${node.annotationId}${suffix}` : `${node.type}_${node.annotationId}`;
};
const createTree = (root) => {
    let tree = root.annotations
        .map(a => a.toNode())
        .sort(sort_1.byDisplayStartEnd)
        .map(add_row_1.default())
        .sort(sort_1.byRowDisplayStartEnd)
        .reduce(split_annotations_1.splitAnnotations(), [])
        .map(add_row_1.default())
        .sort(sort_1.byStartEnd);
    tree = tree.reduce(to_tree_1.default, []);
    const rootNode = new tree_node_1.default({
        annotationId: root.id,
        attributes: root.attributes,
        start: root.start,
        end: root.end,
        type: root.type,
    });
    return fill_gaps_1.default(rootNode, tree);
};
exports.default = createTree;
