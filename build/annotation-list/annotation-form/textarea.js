"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const debounce = require("lodash.debounce");
const hire_forms_textarea_1 = require("hire-forms-textarea");
const styled_components_1 = require("styled-components");
const Textarea = styled_components_1.default(hire_forms_textarea_1.default) `
	display: inline-block;
	outline: none;
	width: 70%;
`;
class AnnotationDocumentTextarea extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: this.props.activeAnnotationDocument.text
        };
        this.updateText = debounce(this.props.updateAnnotationDocumentText, 1000);
    }
    render() {
        return (React.createElement(Textarea, { autoresize: true, onChange: (value, ev) => {
                this.setState({ value });
                this.updateText(value, ev, this.props.activeAnnotationDocument.id);
            }, value: this.state.value }));
    }
}
exports.default = AnnotationDocumentTextarea;
