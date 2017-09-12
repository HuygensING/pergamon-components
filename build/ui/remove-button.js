"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const button_1 = require("./button");
const styled_components_1 = require("styled-components");
const messages = [
    'Really? :(',
    'Never coming back!',
    'Talk about it?',
    'Farewell...',
    'Go out with a BOOM!',
];
const StyledButton = styled_components_1.default(button_1.default) `
	background-color: ${(props) => props.confirm ? 'red' : button_1.buttonBackgroundColor};
	color: ${(props) => props.confirm ? 'white' : 'black'};
	padding: 0 1em;
`;
class RemoveButton extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            confirm: false,
        };
    }
    render() {
        return (React.createElement(StyledButton, { className: this.props.className, confirm: this.state.confirm, onClick: () => {
                if (this.state.confirm) {
                    this.props.action();
                }
                else {
                    this.setState({ confirm: true });
                }
            }, scale: this.props.scale }, this.state.confirm ?
            messages[Math.ceil(Math.random() * messages.length)] :
            this.props.children));
    }
}
exports.default = RemoveButton;
