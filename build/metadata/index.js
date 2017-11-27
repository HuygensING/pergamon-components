"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const MetadataList = (props) => React.createElement("ul", { style: {
        color: '#888',
        fontFamily: "'Roboto', sans-serif",
        listStyle: 'none',
        padding: 0,
    } }, props.children);
const MetadataItem = (props) => React.createElement("li", { style: {
        marginBottom: '1em',
    } }, props.children);
const Label = (props) => React.createElement("label", { style: {
        marginLeft: '-65px',
        position: 'absolute',
        textAlign: 'right',
        width: '50px',
    } }, props.children);
const Bold = (props) => React.createElement("div", { style: { color: '#444', fontWeight: 700 } }, props.children);
const Metadata = (props) => React.createElement(MetadataList, null,
    React.createElement(MetadataItem, null,
        React.createElement(Label, null, "FROM"),
        React.createElement("div", null,
            React.createElement(Bold, null, props.rootAnnotation.metadata.sender),
            React.createElement("div", null, props.rootAnnotation.metadata.senderloc))),
    React.createElement(MetadataItem, null,
        React.createElement(Label, null, "TO"),
        React.createElement("div", null,
            React.createElement(Bold, null, props.rootAnnotation.metadata.recipient),
            React.createElement("div", null, props.rootAnnotation.metadata.recipientloc))),
    React.createElement(MetadataItem, null,
        React.createElement(Label, null, "DATE"),
        React.createElement(Bold, null, props.rootAnnotation.metadata.date)));
exports.default = Metadata;
