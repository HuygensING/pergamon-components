"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const annotation_form_1 = require("./annotation-form");
const index_1 = require("../rendered-text/index");
const Annotation = (props) => React.createElement("li", { style: { minHeight: '2em' } },
    React.createElement("h4", { onClick: () => props.activateAnnotation(props.annotation), style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 3fr',
        } },
        props.annotation.type,
        React.createElement("small", null,
            "(",
            props.annotation.start,
            " - ",
            props.annotation.end,
            ")"),
        React.createElement("small", null, props.annotation.id)),
    (props.activeAnnotation != null &&
        props.annotation.id === props.activeAnnotation.id) ?
        React.createElement(annotation_form_1.default, { activeAnnotation: props.activeAnnotation, rootAnnotation: props.rootAnnotation }) :
        (props.activeAnnotation != null &&
            props.activeAnnotation.text != null) ?
            React.createElement(index_1.default, { root: props.activeAnnotation }) :
            null);
exports.default = Annotation;
