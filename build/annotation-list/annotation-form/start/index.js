"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const hire_forms_input_1 = require("hire-forms-input");
class Start extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: (this.props.start != null) ? this.props.start.toString() : '',
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.start !== this.state.value) {
            this.setState({ value: nextProps.start });
        }
    }
    render() {
        const { activeAnnotation, updateAnnotation } = this.props;
        const { value } = this.state;
        return (React.createElement(hire_forms_input_1.default, { onChange: (value) => {
                let start = parseInt(value, 10);
                value = (Number.isNaN(start)) ? '' : start.toString();
                this.setState({ value });
            }, validate: (value) => {
                const start = parseInt(value, 10);
                const isValid = Number.isInteger(start) && start <= activeAnnotation.end;
                if (isValid)
                    updateAnnotation({ start });
                return isValid ? { isValid } : { isValid, message: "The start point cannot be greater than the end point." };
            }, value: value }));
    }
}
exports.default = Start;
