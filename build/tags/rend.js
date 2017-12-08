"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRendAttr = (props) => props.annotation.hasOwnProperty('attributes') &&
    props.annotation.attributes.hasOwnProperty('rend') ?
    props.annotation.attributes.rend :
    undefined;
const rendStyle = (props) => {
    const rend = getRendAttr(props);
    if (rend == null)
        return {};
    return {
        fontSize: rend === 'superscript' || rend === 'subscript' ? '.8em' : null,
        fontStyle: rend === 'italic' ? 'italic' : null,
        fontVariant: rend === 'case(smallcaps)' ? 'small-caps' : null,
        fontWeight: rend === 'bold' ? 'bold' : null,
        lineHeight: rend === 'superscript' || rend === 'subscript' ? 0 : null,
        textDecoration: rend === 'underline' ?
            'underline' :
            rend === 'strikethrough' ? 'line-through' : null,
        verticalAlign: rend === 'superscript' ?
            'super' :
            rend === 'subscript' ? 'sub' : null,
    };
};
exports.default = rendStyle;
