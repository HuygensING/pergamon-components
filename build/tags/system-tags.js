"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.Span = (props) => React.createElement("span", { id: props.id, style: props.style }, props.children);
exports.Div = (props) => React.createElement("div", { id: props.id, style: props.style }, props.children);
exports.NotImplemented = (props) => React.createElement("div", { style: {
        backgroundColor: 'red',
        border: '1px solid darkred',
        borderRadius: '3px',
        color: 'white',
        padding: '1em',
        boxShadow: '4px 4px 6px darkred'
    } },
    React.createElement("span", { style: {
            fontWeight: 'bold',
            fontSize: '1.5em',
        } },
        "[",
        props.annotation.type,
        " | NOT IMPLEMENTED]"),
    "\u00A0",
    props.children);
exports.None = () => null;
