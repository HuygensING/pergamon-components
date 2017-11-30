"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const rend_1 = require("./rend");
exports.Span = (props) => React.createElement("span", { id: props.id, style: Object.assign({}, rend_1.default(props), props.style) }, props.children);
exports.Div = (props) => React.createElement("div", { id: props.id, style: Object.assign({}, rend_1.default(props), props.style) }, props.children);
exports.Ul = (props) => React.createElement("ul", { id: props.id, style: Object.assign({}, rend_1.default(props), props.style) }, props.children);
exports.Li = (props) => React.createElement("li", { id: props.id, style: Object.assign({}, rend_1.default(props), props.style, { padding: '0 0 0 0em', margin: '0 0 .5em 1em' }) },
    React.createElement("label", { style: {
            fontStyle: 'italic',
            display: 'block',
        } }, "a"),
    props.children);
exports.None = () => null;
