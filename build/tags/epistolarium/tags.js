"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.DateTag = (props) => React.createElement("span", { id: props.id, style: {
        backgroundColor: 'orange',
        color: 'white'
    } }, props.children);
exports.PersName = (props) => React.createElement("span", { id: props.id, style: {
        backgroundColor: 'blue',
        color: 'white'
    } }, props.children);
exports.PlaceName = (props) => React.createElement("span", { id: props.id, style: {
        backgroundColor: 'green',
        color: 'white'
    } }, props.children);
exports.Name = (props) => React.createElement("span", { id: props.id, style: {
        backgroundColor: 'red',
        color: 'white'
    } }, props.children);
exports.Hi = (props) => React.createElement("span", { id: props.id, style: {
        backgroundColor: 'yellow',
    } }, props.children);
exports.Line = (props) => React.createElement("div", { id: props.id, style: { lineHeight: '2em' } }, props.children);
exports.LineGroup = (props) => React.createElement("div", { id: props.id, style: { margin: '2em 0' } }, props.children);
exports.P = (props) => React.createElement("div", { id: props.id, style: {
        margin: '1em 0'
    } },
    props.children,
    React.createElement("hr", { style: { margin: '1em' } }));
