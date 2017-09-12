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
const AnnotationList = (props) => React.createElement(Ul, null, props.rootAnnotation.annotations.map((annotation, index) => React.createElement(annotation_1.default, { activateAnnotation: props.activateAnnotation, activateAnnotationDocument: props.activateAnnotationDocument, activeAnnotation: props.activeAnnotation, activeAnnotationDocument: props.activeAnnotationDocument, activeDocument: props.activeDocument, annotation: annotation, createAnnotationDocument: props.createAnnotationDocument, createAnnotationOnAnnotation: props.createAnnotationOnAnnotation, deleteAnnotation: props.deleteAnnotation, documents: props.documents, key: index, updateAnnotation: props.updateAnnotation, updateAnnotationDocumentText: props.updateAnnotationDocumentText, updateText: props.updateText })));
exports.default = AnnotationList;
