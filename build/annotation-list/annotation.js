"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const annotation_form_1 = require("./annotation-form");
const index_1 = require("../rendered-text/index");
const default_styles_1 = require("../default-styles");
const Annotation = (props) => React.createElement("li", { style: { minHeight: '2em' } },
    React.createElement("h4", { onClick: () => props.activateAnnotation(props.annotation), style: Object.assign({}, default_styles_1.fontStyle) },
        props.annotation.type !== 'persName' &&
            React.createElement("div", { style: { color: '#444', fontSize: '.85em' } }, "34"),
        props.annotation.type === 'persName' &&
            React.createElement("img", { style: {
                    width: "12px",
                    height: 'auto',
                    marginRight: '.2em',
                }, src: "http://design.huygens.knaw.nl/static/icons/person.svg" }),
        props.annotation.type === 'placeName' &&
            React.createElement("img", { style: {
                    width: "12px",
                    height: 'auto',
                    marginRight: '.2em',
                }, src: "http://design.huygens.knaw.nl/static/icons/location.svg" }),
        props.rootAnnotation.text.slice(props.annotation.start, props.annotation.end),
        props.annotation.type === 'persName' &&
            React.createElement("small", { style: { color: '#444', marginLeft: '1em' } }, "(xxxx - xxxx)")),
    (props.activeAnnotation != null &&
        props.annotation.id === props.activeAnnotation.id) ?
        React.createElement(annotation_form_1.default, { activeAnnotation: props.activeAnnotation, rootAnnotation: props.rootAnnotation }) :
        (props.activeAnnotation != null &&
            props.activeAnnotation.text != null) ?
            React.createElement(index_1.default, { root: props.activeAnnotation, tags: props.tags }) :
            null);
exports.default = Annotation;
