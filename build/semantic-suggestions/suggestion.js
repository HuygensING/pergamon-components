"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Suggestion extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            hover: false,
        };
    }
    render() {
        return (React.createElement("li", { onClick: this.props.onClick, onMouseEnter: () => this.setState({ hover: true }), onMouseLeave: () => this.setState({ hover: false }), style: {
                background: this.state.hover ? '#245b6d' : `linear-gradient(to right, lightblue 0%, lightblue ${100 * this.props.suggestion.weight}%, white ${20 + (100 * this.props.suggestion.weight)}%, white 100%)`,
                borderRadius: '3px',
                color: this.state.hover ? 'white' : 'inherit',
                cursor: 'pointer',
                marginBottom: '0.3em',
                marginRight: '0.2em',
                padding: '0.1em 0.3em',
            } }, this.props.children));
    }
}
exports.default = Suggestion;
