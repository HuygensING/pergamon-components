"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const hire_forms_input_1 = require("hire-forms-input");
class End extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: (this.props.end.toString()) ? this.props.end.toString() : '',
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.end !== this.state.value) {
            this.setState({ value: nextProps.end });
        }
    }
    render() {
        const { activeAnnotation, updateAnnotation } = this.props;
        const { value } = this.state;
        return (React.createElement(hire_forms_input_1.default, { onChange: (value) => {
                let end = parseInt(value, 10);
                if (Number.isNaN(end))
                    end = null;
                this.setState({ value: end.toString() });
            }, validate: (value) => {
                const end = parseInt(value, 10);
                const isValid = Number.isInteger(end) && activeAnnotation.start <= end;
                if (isValid)
                    updateAnnotation({ end });
                return isValid ? { isValid } : { isValid, message: "The end point cannot be lower than the start point." };
            }, value: value }));
    }
}
exports.default = End;
