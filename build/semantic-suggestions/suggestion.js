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
                color: this.state.hover ? 'black' : '#444',
                cursor: 'pointer',
                display: 'grid',
                gridTemplateColumns: '4fr 1fr',
            } },
            this.props.suggestion.text,
            React.createElement("span", { style: {
                    color: this.state.hover ? 'black' : '#aaa',
                    fontSize: '14px',
                    textAlign: 'right',
                } },
                Math.round(100 * this.props.suggestion.weight),
                "%")));
    }
}
exports.default = Suggestion;
