"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRendValue = (node) => node.hasOwnProperty('attributes') &&
    node.attributes.has('rend') ?
    node.attributes.get('rend') :
    '';
const rendStyle = (props) => {
    const rend = exports.getRendValue(props.node);
    if (rend == null)
        return {};
    let rendStyle = {
        display: rend === 'block' ? 'block' : null,
        fontSize: rend === 'superscript' || rend === 'subscript' ? '.8em' : null,
        fontStyle: rend === 'italic' ? 'italic' : null,
        fontVariant: rend === 'case(smallcaps)' ? 'small-caps' : null,
        fontWeight: rend === 'bold' ? 'bold' : null,
        lineHeight: rend === 'superscript' || rend === 'subscript' ? 0 : null,
        textAlign: rend === 'align(right)' ? 'right' : null,
        textDecoration: rend === 'underline' ?
            'underline' :
            rend === 'strikethrough' ? 'line-through' : null,
        verticalAlign: rend === 'superscript' ?
            'super' :
            rend === 'subscript' ? 'sub' : null,
    };
    if (props.node.type === 'list') {
        let listStyleType = 'disc';
        if (rend === 'simple')
            listStyleType = 'none';
        else if (rend === 'numbered')
            listStyleType = 'decimal';
        rendStyle = Object.assign({}, rendStyle, { listStyleType });
    }
    return rendStyle;
};
exports.default = rendStyle;
