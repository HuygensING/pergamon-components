"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const TextTreeNode = (props) => {
    if (!props.tags.hasOwnProperty(props.annotation.type)) {
        throw new Error(`Component not found: ${props.annotation.type}`);
    }
    const Tag = props.tags[props.annotation.type].component;
    return (React.createElement(Tag, { activateAnnotation: props.activateAnnotation, activeAnnotation: props.activeAnnotation, annotation: props.annotation, id: props.annotation._tagId, root: props.root, tags: props.tags }, props.children));
};
exports.default = TextTreeNode;
