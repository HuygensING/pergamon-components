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
                color: this.state.hover ? '#ccc' : 'inherit',
                cursor: 'pointer',
            } },
            this.props.children,
            React.createElement("span", { style: {
                    color: '#bbb',
                    fontSize: '14px',
                } },
                "(",
                100 * this.props.suggestion.weight,
                "%)")));
    }
}
exports.default = Suggestion;
