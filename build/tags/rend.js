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
        fontSize: rend === 'superscript' || rend === 'subscript' ?
            '.8em' :
            'inherit',
        fontStyle: rend === 'italic' ?
            'italic' :
            'initial',
        fontVariant: rend === 'case(smallcaps)' ?
            'small-caps' :
            'initial',
        fontWeight: rend === 'bold' ?
            'bold' :
            'initial',
        textDecoration: rend === 'underline' ?
            'underline' :
            rend === 'strikethrough' ?
                'line-through' :
                'initial',
        verticalAlign: rend === 'superscript' ?
            'super' :
            rend === 'subscript' ?
                'sub' :
                'initial',
    };
};
exports.default = rendStyle;
