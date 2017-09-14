"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const annotation_form_1 = require("./annotation-form");
const index_1 = require("../rendered-text/index");
const Small = (props) => React.createElement("small", { style: { marginLeft: '1em' } }, props.children);
const Annotation = (props) => {
    return (React.createElement("li", null,
        React.createElement("h4", { onClick: () => props.activateAnnotation(props.annotation) },
            props.annotation.type,
            React.createElement(Small, null,
                "(",
                props.annotation.start,
                " - ",
                props.annotation.end,
                ")"),
            React.createElement(Small, null, props.annotation._tagId)),
        (props.activeAnnotation != null &&
            props.annotation.id === props.activeAnnotation.id) ?
            React.createElement(annotation_form_1.default, { activeAnnotation: props.activeAnnotation, rootAnnotation: props.rootAnnotation }) :
            (props.activeAnnotation != null &&
                props.activeAnnotation.text != null) ?
                React.createElement(index_1.default, { root: props.activeAnnotation }) :
                null));
};
exports.default = Annotation;
