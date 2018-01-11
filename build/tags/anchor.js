"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const huc_ui_components_1 = require("huc-ui-components");
const constants_1 = require("../constants");
const rendered_text_1 = require("../rendered-text");
const default_styles_1 = require("../default-styles");
const AnchorComp = (props) => React.createElement("span", { className: constants_1.IGNORE_CLASSNAME, onClick: props.onClick, ref: props.setRef, style: Object.assign({}, default_styles_1.fontStyle, { backgroundColor: '#fff', border: '1px solid #aaa', borderRadius: '50%', cursor: 'pointer', fontSize: '10px', marginLeft: '.2em', marginRight: '.4em', padding: '.5em .4em', position: 'relative', top: '-.6em', whiteSpace: 'nowrap' }) }, props.children);
const minLeft = 18;
const tooltipWidth = 400;
class Anchor extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            active: false,
            activeNote: null,
            height: null,
            left: null,
            top: null,
            width: null,
        };
        this.onResize = (ev) => {
            const { height, left, top, width } = this.el.getBoundingClientRect();
            this.setState({ height, left, top, width });
        };
    }
    componentDidMount() {
        const active = this.props.activeAnnotation != null &&
            this.props.activeAnnotation.id === this.props.node.annotationId;
        this.setState({ active });
        if (active)
            window.addEventListener('resize', this.onResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }
    render() {
        let left = this.state.left - (tooltipWidth / 2) + this.state.width / 2;
        let shift = .5;
        if (left < 0) {
            shift = .5 - ((left - minLeft) / -tooltipWidth);
            left = minLeft;
        }
        let noteAnnotation;
        if (this.state.active) {
            noteAnnotation = this.props.root.annotations.find(a => a.type === 'note' &&
                a.hasOwnProperty('attributes') &&
                a.attributes.get('n') === this.props.activeAnnotation.attributes.get('n'));
            if (noteAnnotation != null) {
                noteAnnotation = noteAnnotation.clone();
                noteAnnotation.annotations = [noteAnnotation];
                noteAnnotation.text = this.props.root.text;
            }
        }
        return (React.createElement("span", { id: this.props.node.id() },
            React.createElement(AnchorComp, { onClick: ev => {
                    ev.stopPropagation();
                    this.props.activateAnnotation(this.props.node.annotationId);
                }, setRef: (el) => {
                    if (this.state.active && el && this.state.top == null) {
                        this.el = el;
                        const { height, left, top, width } = el.getBoundingClientRect();
                        this.setState({ height, left, top, width });
                    }
                } }, this.props.node.attributes.get('n')),
            this.state.active &&
                React.createElement(huc_ui_components_1.HucTooltip, { shift: shift, style: {
                        left,
                        top: this.state.top + this.state.height + 16 + window.scrollY,
                        width: `${tooltipWidth}px`,
                    } },
                    React.createElement(rendered_text_1.default, { root: noteAnnotation, tags: this.props.tags }))));
    }
}
exports.default = Anchor;
