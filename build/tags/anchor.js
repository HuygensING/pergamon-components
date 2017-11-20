"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const huc_ui_components_1 = require("huc-ui-components");
const constants_1 = require("../constants");
const rendered_text_1 = require("../rendered-text");
const AnchorComp = (props) => React.createElement("span", { className: constants_1.IGNORE_CLASSNAME, onClick: props.onClick, ref: props.setRef, style: {
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: '#fff',
        border: '1px solid #aaa',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '10px',
        marginLeft: '.2em',
        marginRight: '.4em',
        padding: '.5em .5em',
        verticalAlign: 'top',
        whiteSpace: 'nowrap'
    } }, props.children);
const minLeft = 18;
const tooltipWidth = 400;
class Anchor extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            height: null,
            left: null,
            top: null,
            width: null,
        };
    }
    render() {
        const active = this.props.activeAnnotation &&
            (this.props.activeAnnotation.id === this.props.annotation.id);
        let left = this.state.left - (tooltipWidth / 2) + this.state.width / 2;
        let shift = .5;
        if (left < 0) {
            shift = .5 - ((left - minLeft) / -tooltipWidth);
            left = minLeft;
        }
        let note;
        if (active) {
            note = this.props.root.children.find(a => a.type === 'note' &&
                a.hasOwnProperty('attributes') &&
                a.attributes.n === this.props.activeAnnotation.attributes.n);
        }
        return (React.createElement("span", null,
            React.createElement(AnchorComp, { onClick: ev => {
                    ev.stopPropagation();
                    this.props.activateAnnotation(this.props.annotation);
                }, setRef: (el) => {
                    if (active && el && this.state.top == null) {
                        const { height, left, top, width } = el.getBoundingClientRect();
                        this.setState({ height, left, top, width });
                    }
                } }, this.props.annotation.attributes.n),
            active &&
                React.createElement(huc_ui_components_1.HucTooltip, { shift: shift, style: {
                        left,
                        top: this.state.top + this.state.height + 16 + window.scrollY,
                        width: `${tooltipWidth}px`,
                    } },
                    React.createElement(rendered_text_1.default, { root: Object.assign({}, note, { annotations: [note], children: [note], text: this.props.root.text }), tags: this.props.tags }))));
    }
}
exports.default = Anchor;
