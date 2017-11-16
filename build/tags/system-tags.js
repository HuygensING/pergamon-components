"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const rend_1 = require("./rend");
exports.Span = (props) => React.createElement("span", { id: props.id, style: Object.assign({}, rend_1.default(props), props.style) }, props.children);
exports.Div = (props) => React.createElement("div", { id: props.id, style: Object.assign({}, rend_1.default(props), props.style) }, props.children);
exports.None = () => null;
