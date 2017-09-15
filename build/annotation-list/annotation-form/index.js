"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const Ul = styled_components_1.default.ul `
	margin: 1em 0;
`;
const Li = styled_components_1.default.li `
	display: grid;
	grid-template-columns: 1fr 4fr; 
`;
const Label = styled_components_1.default.label `
	color: #666;
	font-size: 0.8em;
`;
const Immutable = styled_components_1.default.div `
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
