"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const hire_forms_input_1 = require("hire-forms-input");
const styled_components_1 = require("styled-components");
exports.inputEl = `
	flex: 3;
`;
const Ul = styled_components_1.default.ul `
	margin: 1em 0;
`;
const Li = styled_components_1.default.li `
	display: flex;
	margin-bottom: 1em;
`;
const Label = styled_components_1.default.label `
	color: #666;
	flex: 1;
	font-size: 0.8em;
`;
exports.Input = styled_components_1.default(hire_forms_input_1.default) `
	${exports.inputEl}
`;
const Immutable = styled_components_1.default.div `
	${exports.inputEl}
	color: #666;
	font-style: italic;
`;
const AnnotationForm = (props) => React.createElement(Ul, null,
    React.createElement(Li, null,
        React.createElement(Label, null, "ID"),
        React.createElement(Immutable, null, props.activeAnnotation.id)),
    props.activeAnnotation.start < props.activeAnnotation.end &&
        React.createElement(Li, null,
            React.createElement(Label, null, "Text"),
            React.createElement(Immutable, null, props.rootAnnotation.text
                .slice(props.activeAnnotation.start, props.activeAnnotation.end))),
    React.createElement(Li, null,
        React.createElement(Label, null, "Type"),
        React.createElement(Immutable, null, props.activeAnnotation.type)),
    React.createElement(Li, null,
        React.createElement(Label, null, "Start"),
        React.createElement(Immutable, null, props.activeAnnotation.start)),
    React.createElement(Li, null,
        React.createElement(Label, null, "End"),
        React.createElement(Immutable, null, props.activeAnnotation.end)));
exports.default = AnnotationForm;
