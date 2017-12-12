"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const default_styles_1 = require("../default-styles");
const NotImplemented = (props) => React.createElement("div", { style: Object.assign({}, default_styles_1.fontStyle, { backgroundColor: '#EC7700', color: 'white', padding: '2em 1.5em', margin: '1em -.5em' }) },
    React.createElement("div", { style: {
            fontWeight: 'bold',
            fontSize: '1.3em',
        } },
        React.createElement("div", { style: { marginBottom: '1em' } },
            React.createElement("img", { style: {
                    width: '2em',
                    height: '2em',
                    display: 'inline-block',
                    verticalAlign: 'top',
                }, src: "http://design.huygens.knaw.nl/static/icons/caution-inv.svg" }),
            React.createElement("span", { style: {
                    display: 'inline-block',
                    fontSize: '1.5em',
                    lineHeight: '1.5em',
                    paddingLeft: '.5em',
                    verticalAlign: 'top',
                } }, "Warning")),
        props.tags.hasOwnProperty(props.node.type) ?
            React.createElement("span", null,
                "The tag <",
                props.node.type,
                "> is implemented, but the attributes are invalid:",
                React.createElement("pre", null, JSON.stringify(props.node.attributes, null, 2))) :
            React.createElement("span", null,
                "The tag <",
                props.node.type,
                "> is not implemented!")),
    React.createElement("br", null),
    "Wrapped on: \"",
    React.createElement("em", null, props.children),
    "\"",
    React.createElement("div", { style: {
            marginTop: '1em',
            fontStyle: 'italic',
        } },
        "This tag is not part of the Huygens ING TEI standard. Please visit",
        ' ',
        React.createElement("a", { style: {
                color: '#fff',
            }, href: "http://servicedesk.huygens.knaw.nl", target: "_blank" }, "Servicedesk.huygens.knaw.nl"),
        ' ',
        "to request support of this tag."));
exports.default = NotImplemented;
