"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const hire_tooltip_1 = require("hire-tooltip");
const constants_1 = require("../constants");
const AnchorComp = (props) => React.createElement("span", { className: constants_1.IGNORE_CLASSNAME, onClick: props.onClick, ref: props.setRef, style: {
        backgroundColor: '#DDD',
        borderRadius: '1em',
        cursor: 'pointer',
        fontSize: '10px',
        marginLeft: '.2em',
        padding: '.3em .5em',
        verticalAlign: 'bottom',
    } }, props.children);
const minLeft = 18;
const tooltipWidth = 400;
class Anchor extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            height: 0,
            left: 0,
            top: 0,
            width: 0,
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
        return (React.createElement(AnchorComp, { onClick: ev => {
                ev.stopPropagation();
                this.props.activateAnnotation(this.props.annotation);
            }, setRef: (el) => {
                if (active && el && this.state.top === 0) {
                    const { height, left, top, width } = el.getBoundingClientRect();
                    this.setState({ height, left, top, width });
                }
            } },
            this.props.annotation.attributes.n,
            active &&
                React.createElement(hire_tooltip_1.default, { shift: shift, style: {
                        left,
                        top: this.state.top + this.state.height + 16 + window.scrollY,
                        width: `${tooltipWidth}px`,
                    } }, "Enim consectetur ullamco dolor laborum veniam mollit nulla in. Officia est tempor excepteur non fugiat Lorem reprehenderit aliqua sint cillum et nisi nulla culpa. Fugiat laboris Lorem sunt id eiusmod incididunt esse exercitation cupidatat do consequat exercitation tempor commodo. Sunt non voluptate qui ut in ex Lorem cupidatat proident eu elit nulla eiusmod ullamco. Pariatur amet cillum incididunt occaecat et do dolor. Laborum nisi cupidatat eu est aliqua nostrud esse.")));
    }
}
exports.default = Anchor;
