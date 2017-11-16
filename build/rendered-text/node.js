"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const not_implemented_1 = require("../tags/not-implemented");
const TextTreeNode = (props) => {
    if (!props.tags.hasOwnProperty(props.annotation.type)) {
        console.error(`Component not found: ${props.annotation.type}`);
    }
    const Tag = props.tags.hasOwnProperty(props.annotation.type) ?
        props.tags[props.annotation.type].component :
        not_implemented_1.default;
    return (React.createElement(Tag, { activateAnnotation: props.activateAnnotation, activeAnnotation: props.activeAnnotation, annotation: props.annotation, id: props.annotation._tagId, root: props.root, tags: props.tags }, props.children));
};
exports.default = TextTreeNode;
