"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ErrorLabel = (props) => React.createElement("div", { style: { display: 'inline-block' } },
    React.createElement("div", null, props.rootAnnotation.text.slice(props.annotation.start, props.annotation.end)),
    React.createElement("div", { style: { color: 'red', fontSize: '.8em' } }, "Not identified"));
exports.default = ErrorLabel;
