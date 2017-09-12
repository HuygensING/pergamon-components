"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const annotation_1 = require("./annotation");
const constants_1 = require("../constants");
const Ul = styled_components_1.default.ul `
	& ul {
		border-left: 2px solid ${constants_1.orange};
		padding-left: 1em;
	}	
`;
const AnnotationList = (props) => React.createElement(Ul, null, props.rootAnnotation.children.map((annotation, index) => React.createElement(annotation_1.default, { activateAnnotation: props.activateAnnotation, activeAnnotation: props.activeAnnotation, annotation: annotation, key: index, rootAnnotation: props.rootAnnotation })));
exports.default = AnnotationList;
