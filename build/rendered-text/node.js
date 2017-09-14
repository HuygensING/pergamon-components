"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const tags_1 = require("./tags");
const constants_1 = require("../constants");
const TextAnnotation = (props) => {
    if (!tags_1.default.hasOwnProperty(props.annotation.type)) {
        throw new Error(`Component not found: ${props.annotation.type}`);
    }
    const Tag = tags_1.default[props.annotation.type].component;
    let tagStyle = {};
    if ((props.annotation != null) &&
        (props.activeAnnotation != null &&
            props.activeAnnotation.id === props.annotation.id)) {
        tagStyle = {
            backgroundColor: `rgba(${constants_1.orangeRGB}, 0.03)`,
            border: `1px solid ${constants_1.orange}`,
            boxShadow: `4px 4px 0px rgba(${constants_1.orangeRGB}, 0.4)`,
            lineHeight: '2.8em',
            margin: '0.5em',
            padding: '0.5em',
        };
    }
    return (React.createElement(Tag, { activeAnnotation: props.activeAnnotation, annotation: props.annotation, className: props.annotation.type, id: props.annotation._tagId, style: tagStyle }, props.children));
};
exports.default = TextAnnotation;
