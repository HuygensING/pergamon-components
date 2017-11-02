"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.Span = (props) => React.createElement("span", { id: props.id }, props.children);
exports.Div = (props) => React.createElement("div", { id: props.id }, props.children);
exports.NotImplemented = (props) => React.createElement("div", { style: {
        backgroundColor: 'red',
        color: 'white',
        padding: '0.5em',
    } },
    "[",
    props.annotation.type,
    " | NOT IMPLEMENTED] \u00A0",
    props.children);
exports.None = () => null;
