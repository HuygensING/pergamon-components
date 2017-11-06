"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Ul = (props) => React.createElement("ul", { style: { margin: '1em 0' } }, props.children);
const Li = (props) => React.createElement("li", { style: {
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
    } },
    props.children,
    " ");
const Label = (props) => React.createElement("label", { style: {
        color: '#666',
        fontSize: '0.8em',
    } }, props.children);
const Immutable = (props) => React.createElement("div", { style: {
        color: '#666',
        fontStyle: 'italic',
    } }, props.children);
const AnnotationForm = (props) => React.createElement(Ul, null,
    React.createElement(Li, null,
        React.createElement(Label, null, "ID"),
        React.createElement(Immutable, null, props.activeAnnotation.id)),
    props.activeAnnotation.start < props.activeAnnotation.end &&
        React.createElement(Li, null,
            React.createElement(Label, null, "Text"),
            React.createElement(Immutable, null, props.rootAnnotation.text
                .slice(props.activeAnnotation.start, props.activeAnnotation.end))),
    React.createElement(Li, null,
        React.createElement(Label, null, "Type"),
        React.createElement(Immutable, null, props.activeAnnotation.type)),
    React.createElement(Li, null,
        React.createElement(Label, null, "Start"),
        React.createElement(Immutable, null, props.activeAnnotation.start)),
    React.createElement(Li, null,
        React.createElement(Label, null, "End"),
        React.createElement(Immutable, null, props.activeAnnotation.end)));
exports.default = AnnotationForm;
