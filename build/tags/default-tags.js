"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.Span = ({ activeAnnotation, annotation, children, id }) => React.createElement("span", { id: id }, children);
exports.Div = ({ activeAnnotation, annotation, children, id }) => React.createElement("div", { id: id }, children);
exports.None = () => null;
