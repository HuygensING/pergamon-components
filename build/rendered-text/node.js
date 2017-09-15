"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const tags_1 = require("./tags");
const TextTreeNode = (props) => {
    if (!tags_1.default.hasOwnProperty(props.annotation.type)) {
        throw new Error(`Component not found: ${props.annotation.type}`);
    }
    const Tag = tags_1.default[props.annotation.type].component;
    return (React.createElement(Tag, { activeAnnotation: props.activeAnnotation, annotation: props.annotation, className: props.annotation.type, id: props.annotation._tagId }, props.children));
};
exports.default = TextTreeNode;
