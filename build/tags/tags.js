"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const default_styles_1 = require("../default-styles");
const system_tags_1 = require("./system-tags");
exports.Add = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: {
        color: 'green',
    } }, props),
    "+ ",
    props.children);
exports.Cell = (props) => React.createElement("td", null, props.children);
exports.Choice = system_tags_1.Span;
exports.Closer = system_tags_1.Div;
exports.Sic = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: {
        borderBottom: '1px solid #AAA',
        paddingRight: '.6em',
    } }, props));
exports.Corr = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: {
        border: '1px solid #AAA',
        padding: '0 .6em',
    } }, props));
exports.DateTag = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: default_styles_1.basicAnnotation }, props),
    React.createElement(Icon, { src: "http://design.huygens.knaw.nl/static/icons/date.svg" }),
    props.children);
exports.Figure = (props) => React.createElement(system_tags_1.Div, Object.assign({ style: {
        margin: 'auto',
        width: '75%',
    } }, props));
exports.Graphic = (props) => React.createElement("img", { id: props.id, src: `/static/graphics/${props.annotation.attributes.url}`, style: {
        height: '100%',
        width: '100%',
    } });
exports.Formula = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: { fontStyle: 'italic' } }, props));
exports.Hi = system_tags_1.Span;
exports.Line = (props) => React.createElement(system_tags_1.Div, Object.assign({ style: { lineHeight: '2em' } }, props),
    React.createElement("span", { style: {
            width: '1em',
            textAline: 'right',
            fontFamily: "'Roboto', sans-serif",
            fontSize: '.8em',
            color: '#aaa',
            marginRight: '.5em',
        } }, "1"),
    props.children);
exports.LineGroup = (props) => React.createElement(system_tags_1.Div, Object.assign({ style: { margin: '2em 0' } }, props));
exports.Name = (props) => props.annotation.attributes.type === 'person' ?
    React.createElement(exports.PersName, Object.assign({}, props)) :
    props.annotation.attributes.type === 'place' ?
        React.createElement(exports.PlaceName, Object.assign({}, props)) :
        null;
exports.Opener = system_tags_1.Div;
exports.P = (props) => React.createElement(system_tags_1.Div, Object.assign({ style: { margin: '1em 0' } }, props), props.children);
exports.Pb = system_tags_1.Div;
const Icon = (props) => React.createElement("img", { src: props.src, style: {
        width: "12px",
        height: 'auto',
        marginRight: '.2em',
    } });
exports.PersName = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: default_styles_1.basicAnnotation }, props),
    React.createElement(Icon, { src: "http://design.huygens.knaw.nl/static/icons/person.svg" }),
    props.children);
exports.PlaceName = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: default_styles_1.basicAnnotation }, props),
    React.createElement(Icon, { src: "http://design.huygens.knaw.nl/static/icons/location.svg" }),
    props.children);
exports.Row = (props) => React.createElement("tr", null, props.children);
exports.Rs = (props) => props.annotation.attributes.type === 'person' ?
    React.createElement(exports.PersName, Object.assign({}, props)) :
    props.annotation.attributes.type === 'place' ?
        React.createElement(exports.PlaceName, Object.assign({}, props)) :
        null;
exports.Seg = system_tags_1.Div;
exports.Table = (props) => React.createElement("table", null, props.children);
exports.Title = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: default_styles_1.basicAnnotation }, props),
    React.createElement(Icon, { src: "http://design.huygens.knaw.nl/static/icons/book.svg" }),
    props.children);
