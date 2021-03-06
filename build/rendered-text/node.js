"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const not_implemented_1 = require("../tags/not-implemented");
const TextTreeNode = (props) => {
    if (!props.tags.hasOwnProperty(props.node.type)) {
        console.error(`Component not found: ${props.node.type}`);
    }
    const TextTreeTag = props.tags.hasOwnProperty(props.node.type) ?
        props.tags[props.node.type].component :
        not_implemented_1.default;
    return (React.createElement(TextTreeTag, { activateAnnotation: props.activateAnnotation, activeAnnotation: props.activeAnnotation, custom: props.custom, node: props.node, root: props.root, tags: props.tags }, props.children));
};
exports.default = TextTreeNode;
