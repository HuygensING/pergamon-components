"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.Span = ({ children, id }) => React.createElement("span", { id: id }, children);
exports.Div = ({ children, id }) => React.createElement("div", { id: id }, children);
exports.None = () => null;
