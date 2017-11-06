"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.buttonBackgroundColor = '#EEE';
const Button = (props) => React.createElement("div", { style: Object.assign({ background: props.bare ? 'none' : exports.buttonBackgroundColor, borderRadius: '3px', border: props.bare ? 'none' : '1px solid #DDD', cursor: 'pointer', display: 'inline-block', fontSize: props.scale ? `${props.scale}em` : '1em', height: '1.5em', lineHeight: '1.5em', overflow: 'hidden', padding: '0 0.5em', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }, props.style) }, props.children);
exports.default = Button;
