"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const system_tags_1 = require("./system-tags");
const default_styles_1 = require("../default-styles");
const Hr = ({ top = false }) => React.createElement("hr", { style: {
        height: '1px',
        backgroundColor: '#ddd',
        color: '#eee',
        width: '20px',
        border: 'none',
        marginLeft: '-10px',
        marginTop: top ? '1em' : '.5em',
        marginBottom: top ? '.5em' : '1em',
    } });
const Label = (props) => React.createElement("div", { style: Object.assign({}, default_styles_1.fontStyle, { color: '#999', fontSize: '.8em', marginBottom: '.5em' }) }, props.children);
const AuxDivTag = (props) => React.createElement("div", { style: { margin: '1em 0' } },
    React.createElement(Hr, { top: true }),
    React.createElement(Label, null, props.annotation.attributes.type === 'para' ? 'ENVELOPE' : 'TRANSLATION'),
    React.createElement(system_tags_1.Div, Object.assign({}, props)),
    React.createElement(Hr, null));
const DivTag = (props) => (props.annotation.attributes.type === 'comment' ||
    props.annotation.attributes.type === 'notes') ?
    React.createElement(system_tags_1.None, null) :
    (props.annotation.attributes.type === 'para' ||
        props.annotation.attributes.type === 'translation') ?
        React.createElement(AuxDivTag, Object.assign({}, props)) :
        React.createElement(system_tags_1.Div, Object.assign({}, props));
exports.default = DivTag;
