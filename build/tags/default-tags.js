"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.Span = (props) => React.createElement("span", { id: props.id }, props.children);
exports.Div = (props) => React.createElement("div", { id: props.id }, props.children);
exports.None = () => null;
