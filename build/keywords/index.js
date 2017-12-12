"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const default_styles_1 = require("../default-styles");
const Li = (props) => React.createElement("li", { style: { display: 'inline-block', marginRight: '.5em' } }, props.children);
const Keywords = (props) => React.createElement("section", null,
    React.createElement("h3", { style: {
            fontSize: '1em',
        } }, "Keywords"),
    React.createElement("ul", { style: Object.assign({}, default_styles_1.blueFontStyle, { margin: 0, padding: 0 }) },
        props.keywords != null &&
            [...props.keywords]
                .reduce((prev, curr) => { return prev.concat(curr.terms); }, [])
                .map(k => React.createElement(Li, { key: k }, k)),
        props.children));
exports.default = Keywords;
