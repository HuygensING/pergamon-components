"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const rend_1 = require("./rend");
exports.Span = (props) => React.createElement("span", { id: props.id, style: Object.assign({}, rend_1.default(props), props.style) }, props.children);
exports.Div = (props) => React.createElement("div", { id: props.id, style: Object.assign({}, rend_1.default(props), props.style) }, props.children);
exports.NotImplemented = (props) => React.createElement("div", { style: {
        backgroundColor: '#EC7700',
        color: 'white',
        padding: '2em 1.5em',
        margin: '1em -.5em',
        fontFamily: "'Roboto', sans-serif",
    } },
    React.createElement("span", { style: {
            fontWeight: 'bold',
            fontSize: '1.3em',
        } },
        React.createElement("img", { style: {
                width: '2em',
                height: 'auto',
                display: 'block',
                marginBottom: '1em',
            }, src: "http://design.huygens.knaw.nl/static/icons/caution-inv.svg" }),
        "Warning: The tag ",
        props.annotation.type,
        " is not implemented!"),
    React.createElement("br", null),
    "Wrapped on ",
    React.createElement("em", null, props.children),
    ".",
    React.createElement("div", { style: {
            marginTop: '1em',
            fontStyle: 'italic',
        } },
        "This tag is not part of the Huygens ING TEI standard. Please visit ",
        React.createElement("a", { style: {
                color: '#fff',
            }, href: "http://servicedesk.huygens.knaw.nl", target: "_blank" }, "Servicedesk.huygens.knaw.nl"),
        " to request support of this tag."));
exports.None = () => null;
