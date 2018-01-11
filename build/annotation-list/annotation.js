"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const annotation_form_1 = require("./annotation-form");
const index_1 = require("../rendered-text/index");
const default_styles_1 = require("../default-styles");
const label_1 = require("./label");
const AnnotationItem = (props) => React.createElement("li", { style: { minHeight: '2em' } },
    React.createElement("h4", { onClick: () => props.activateAnnotation(props.annotation.id), style: Object.assign({}, default_styles_1.fontStyle) }, (props.annotation.type === 'note' && props.annotation.attributes.has('n')) ?
        React.createElement("div", { style: { color: '#444', fontSize: '.85em' } },
            props.annotation.attributes.get('n'),
            React.createElement("br", null),
            props.rootAnnotation.text.slice(props.annotation.start, props.annotation.end)) :
        React.createElement(label_1.default, { annotation: props.annotation, rootAnnotation: props.rootAnnotation })),
    (props.activeAnnotation != null &&
        props.annotation.id === props.activeAnnotation.id) ?
        React.createElement(annotation_form_1.default, { activeAnnotation: props.activeAnnotation, rootAnnotation: props.rootAnnotation }) :
        (props.activeAnnotation != null &&
            props.activeAnnotation.text != null) ?
            React.createElement(index_1.default, { root: props.activeAnnotation, tags: props.tags }) :
            null);
exports.default = AnnotationItem;
