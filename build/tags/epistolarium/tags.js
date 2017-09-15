"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.Line = (props) => React.createElement("div", { id: props.id, style: { lineHeight: '2em' } }, props.children);
exports.LineGroup = (props) => React.createElement("div", { id: props.id, style: { margin: '2em 0' } }, props.children);
exports.Title = (props) => React.createElement("h2", { id: props.id, style: {
        fontSize: '2em',
        fontWeight: 'bold',
    } }, props.children);
