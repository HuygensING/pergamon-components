"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const default_styles_1 = require("../default-styles");
const system_tags_1 = require("./system-tags");
const not_implemented_1 = require("./not-implemented");
const constants_1 = require("../constants");
const rend_1 = require("./rend");
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
exports.DateTag = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: default_styles_1.basicAnnotation }, props),
    React.createElement(Icon, { src: `${constants_1.IMAGE_BASE_DIR}/ui/date.svg` }),
    props.children);
exports.Figure = (props) => {
    const rend = rend_1.getRendValue(props.node);
    return (React.createElement(system_tags_1.Div, Object.assign({ style: {
            display: (rend === 'inline') ? 'inline' : 'block',
            margin: (rend === 'inline') ? 0 : 'auto',
            width: (rend === 'inline') ? 'auto' : '75%',
        } }, props)));
};
exports.Graphic = (props) => {
    let width;
    let height;
    const attrs = props.node.attributes;
    const exts = ['px', 'em', 'ex', 'vw', 'vh', '%', 'cm', 'mm', 'in', 'pt', 'rem', 'vm', 'pc', 'gd'];
    if (attrs.get('height') != null && attrs.get('width') != null) {
        const widthExt = exts.find(e => attrs.get('width').slice(-e.length) === e);
        const heightExt = exts.find(e => attrs.get('height').slice(-e.length) === e);
        if (exts.some(e => widthExt === e) &&
            exts.some(e => heightExt === e)) {
            const scale = attrs.get('scale') != null ? Number.parseFloat(attrs.get('scale')) : 1;
            width = Number.parseInt(attrs.get('width').slice(0, -widthExt.length)) * scale;
            height = Number.parseInt(attrs.get('height').slice(0, -heightExt.length)) * scale;
        }
    }
    return (React.createElement("img", { id: props.node.id(), src: `/static/graphics/${props.node.attributes.get('url')}`, style: {
            height: height != null ? height : 'auto',
            width: width != null ? width : 'auto',
            maxWidth: '100%',
        } }));
};
exports.Formula = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: { fontStyle: 'italic' } }, props));
exports.GeogName = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: default_styles_1.basicAnnotation }, props),
    React.createElement(Icon, { src: `${constants_1.IMAGE_BASE_DIR}/ui/location.svg` }),
    props.children);
exports.Item = (props) => React.createElement(system_tags_1.Li, Object.assign({ style: {
        padding: '0 0 0 0em',
        margin: '0 0 .5em 1em',
    } }, props));
exports.Line = (props) => React.createElement(system_tags_1.Div, Object.assign({ style: {
        lineHeight: props.node.attributes.get('type') === 'stanza' ? '1em' : '2em',
        marginTop: props.node.attributes.get('type') === 'stanza' ? '.5em' : 'initial',
        marginBottom: props.node.attributes.get('type') === 'stanza' ? '.5em' : 'initial',
    } }, props), props.children);
exports.List = (props) => React.createElement(system_tags_1.Ul, Object.assign({ style: {
        padding: '0',
        margin: '.5em 0 .5em 0 ',
    } }, props));
exports.LineGroup = (props) => React.createElement(system_tags_1.Div, Object.assign({ style: {
        marginTop: '2em',
        marginLeft: props.node.attributes.get('type') === 'poem' ? '1em' : 'initial',
        fontStyle: props.node.attributes.get('type') === 'poem' ? 'italic' : 'initial',
    } }, props));
exports.Name = (props) => props.node.attributes.get('type') === 'person' ?
    React.createElement(exports.PersName, Object.assign({}, props)) :
    props.node.attributes.get('type') === 'place' ?
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
    React.createElement(Icon, { src: `${constants_1.IMAGE_BASE_DIR}/ui/person.svg` }),
    props.children);
exports.PlaceName = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: default_styles_1.basicAnnotation }, props),
    React.createElement(Icon, { src: `${constants_1.IMAGE_BASE_DIR}/ui/location.svg` }),
    props.children);
exports.Row = (props) => React.createElement("tr", { style: {
        borderBottom: '1px solid #aaa',
    } }, props.children);
exports.Rs = (props) => props.node.attributes.get('type') === 'person' ?
    React.createElement(exports.PersName, Object.assign({}, props)) :
    props.node.attributes.get('type') === 'place' ?
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
exports.Table = (props) => React.createElement("table", { style: default_styles_1.fontStyle },
    React.createElement("tbody", null, props.children));
exports.Title = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: default_styles_1.basicAnnotation }, props),
    React.createElement(Icon, { src: `${constants_1.IMAGE_BASE_DIR}/ui/book.svg` }),
    props.children);
