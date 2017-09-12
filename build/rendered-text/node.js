"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const tags_1 = require("./tags");
const styled_components_1 = require("styled-components");
const constants_1 = require("../constants");
const TextAnnotation = (props) => {
    if (!tags_1.default.hasOwnProperty(props.annotation.type)) {
        throw new Error(`Component not found: ${props.annotation.type}`);
    }
    const Tag = tags_1.default[props.annotation.type].component;
    const ActiveTag = styled_components_1.default(Tag) `
		background-color: rgba(${constants_1.orangeRGB}, 0.03);
		border: 1px solid ${constants_1.orange};
		box-shadow: 4px 4px 0px rgba(${constants_1.orangeRGB}, 0.4);
		line-height: 2.8em;
		margin: 0.5em;
		padding: 0.5em;
	`;
    let Comp = Tag;
    if (props.annotation != null) {
        Comp = (props.activeAnnotation != null &&
            props.activeAnnotation.id === props.annotation.id) ?
            ActiveTag :
            Tag;
    }
    return (React.createElement(Comp, { annotation: props.annotation, className: props.annotation.type, id: props.annotation._tagId }, props.children));
};
exports.default = TextAnnotation;
