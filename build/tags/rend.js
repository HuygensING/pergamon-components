"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rendStyle = (props) => ({
    fontStyle: props.annotation.attributes.hasOwnProperty('rend') &&
        props.annotation.attributes.rend === 'italic' ?
        'italic' :
        'initial',
    fontVariant: props.annotation.attributes.hasOwnProperty('rend') &&
        props.annotation.attributes.rend === 'case(smallcaps)' ?
        'small-caps' :
        'initial',
    fontWeight: props.annotation.attributes.hasOwnProperty('rend') &&
        props.annotation.attributes.rend === 'bold' ?
        'bold' :
        'initial',
    textDecoration: props.annotation.attributes.hasOwnProperty('rend') &&
        props.annotation.attributes.rend === 'underline' ?
        'underline' :
        props.annotation.attributes.hasOwnProperty('rend') &&
            props.annotation.attributes.rend === 'strikethrough' ?
            'line-through' :
            'initial',
    verticalAlign: props.annotation.attributes.hasOwnProperty('rend') &&
        props.annotation.attributes.rend === 'superscript' ?
        'super' :
        props.annotation.attributes.hasOwnProperty('rend') &&
            props.annotation.attributes.rend === 'subscript' ?
            'sub' :
            'initial',
});
exports.default = rendStyle;
