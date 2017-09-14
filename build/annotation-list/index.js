"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const annotation_1 = require("./annotation");
const AnnotationList = (props) => React.createElement("ul", null, props.rootAnnotation.children.map((annotation, index) => React.createElement(annotation_1.default, { activateAnnotation: props.activateAnnotation, activeAnnotation: props.activeAnnotation, annotation: annotation, key: index, rootAnnotation: props.rootAnnotation })));
exports.default = AnnotationList;
