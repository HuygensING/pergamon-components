"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const default_styles_1 = require("../default-styles");
const system_tags_1 = require("./system-tags");
const not_implemented_1 = require("./not-implemented");
exports.Add = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: {
        color: 'green',
    } }, props),
    "+ ",
    props.children);
exports.Cell = (props) => React.createElement("td", { style: {
        borderBottom: '1px solid #ddd',
        paddingRight: '.5em',
    } }, props.children);
exports.Corr = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: {
        borderBottom: '1px solid #ddd',
        marginRight: '.2em',
    } }, props),
    props.children,
    React.createElement("sup", { style: {
            paddingLeft: '.3em',
            color: '#aaa',
        } }, "corr"));
const ParaDivTag = (props) => React.createElement(system_tags_1.Div, Object.assign({}, props, { style: {
        borderLeft: '1px solid #eee',
        paddingLeft: '.5em',
        marginLeft: '-.5em',
    } }));
const TranslationDivTag = (props) => React.createElement(system_tags_1.Div, Object.assign({}, props, { style: {} }));
exports.DivTag = (props) => (props.annotation.attributes.type === 'comment' ||
    props.annotation.attributes.type === 'notes' ||
    props.annotation.attributes.type === 'provenance') ?
    React.createElement(system_tags_1.None, null) :
    props.annotation.attributes.type === 'para' ?
        React.createElement(ParaDivTag, Object.assign({}, props)) :
        props.annotation.attributes.type === 'translation' ?
            React.createElement(TranslationDivTag, Object.assign({}, props)) :
            React.createElement(system_tags_1.Div, Object.assign({}, props));
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
exports.GeogName = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: default_styles_1.basicAnnotation }, props),
    React.createElement(Icon, { src: "" }),
    props.children);
exports.Item = (props) => React.createElement(system_tags_1.Li, Object.assign({ style: {
        padding: '0 0 0 0em',
        margin: '0 0 .5em 1em',
    } }, props));
exports.Line = (props) => React.createElement(system_tags_1.Div, Object.assign({ style: { lineHeight: '2em' } }, props), props.children);
exports.List = (props) => React.createElement(system_tags_1.Ul, Object.assign({ style: {
        padding: '0',
        margin: '.5em 0 .5em 0 ',
    } }, props));
exports.LineGroup = (props) => React.createElement(system_tags_1.Div, Object.assign({ style: {
        margin: '2em 0',
        textIndent: props.annotation.attributes.type === 'poem' ? '1em' : 'initial',
        fontStyle: props.annotation.attributes.type === 'poem' ? 'italic' : 'initial',
    } }, props));
exports.Name = (props) => props.annotation.attributes.type === 'person' ?
    React.createElement(exports.PersName, Object.assign({}, props)) :
    props.annotation.attributes.type === 'place' ?
        React.createElement(exports.PlaceName, Object.assign({}, props)) :
        React.createElement(not_implemented_1.default, Object.assign({}, props));
exports.Opener = system_tags_1.Div;
exports.P = (props) => React.createElement(system_tags_1.Div, Object.assign({ style: { margin: '1em 0' } }, props), props.children);
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
exports.Row = (props) => React.createElement("tr", { style: {
        borderBottom: '1px solid #aaa',
    } }, props.children);
exports.Rs = (props) => props.annotation.attributes.type === 'person' ?
    React.createElement(exports.PersName, Object.assign({}, props)) :
    props.annotation.attributes.type === 'place' ?
        React.createElement(exports.PlaceName, Object.assign({}, props)) :
        null;
exports.Sic = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: {
        borderBottom: '1px solid #ddd',
        marginRight: '.2em',
    } }, props),
    props.children,
    React.createElement("sup", { style: {
            paddingLeft: '.3em',
            color: '#aaa',
        } }, "sic"));
exports.Space = (props) => React.createElement(system_tags_1.Div, Object.assign({ style: {
        height: '2em',
    } }, props));
exports.Table = (props) => React.createElement("table", { style: {
        fontFamily: "'Roboto', sans-serif",
    } },
    React.createElement("tbody", null, props.children));
exports.Title = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: default_styles_1.basicAnnotation }, props),
    React.createElement(Icon, { src: "http://design.huygens.knaw.nl/static/icons/book.svg" }),
    props.children);
