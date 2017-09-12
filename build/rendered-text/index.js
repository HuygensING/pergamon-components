"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const node_1 = require("./node");
const index_1 = require("./create-tree/index");
const Tree = ({ root }) => {
    const children = (root.hasOwnProperty('children') && root.children.length) ?
        root.children
            .map((child, i) => {
            child.text = root.text;
            return (React.createElement(Tree, { key: i, root: child }));
        }) :
        root.text.slice(root.start, root.end);
    return (React.createElement(node_1.default, { annotation: root }, children));
};
const RenderedText = ({ root }) => React.createElement(Tree, { root: index_1.default(JSON.parse(JSON.stringify(root))) });
exports.default = RenderedText;
