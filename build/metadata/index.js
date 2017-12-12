"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const default_styles_1 = require("../default-styles");
const MetadataList = (props) => React.createElement("ul", { style: Object.assign({ color: '#888', listStyle: 'none', margin: 0, padding: 0 }, default_styles_1.fontStyle) }, props.children);
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
            React.createElement(Bold, null, props.rootAnnotation.metadata.get('sender')),
            React.createElement("div", null, props.rootAnnotation.metadata.get('senderloc')))),
    React.createElement(MetadataItem, null,
        React.createElement(Label, null, "TO"),
        React.createElement("div", null,
            React.createElement(Bold, null, props.rootAnnotation.metadata.get('recipient')),
            React.createElement("div", null, props.rootAnnotation.metadata.get('recipientloc')))),
    React.createElement(MetadataItem, null,
        React.createElement(Label, null, "DATE"),
        React.createElement(Bold, null, props.rootAnnotation.metadata.get('date'))));
exports.default = Metadata;
