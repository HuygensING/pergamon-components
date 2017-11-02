"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const annotation_1 = require("./annotation");
const showAnnotationTypes = ['persName', 'placeName', 'geogName', 'name'];
const AnnotationList = (props) => {
    let annotations = props.rootAnnotation.children;
    if (props.filter != null) {
        annotations = annotations.filter(props.filter);
    }
    if (props.sort != null) {
        annotations = annotations.sort(props.sort);
    }
    return (React.createElement("ul", null, annotations
        .map((annotation, index) => React.createElement(annotation_1.default, { activateAnnotation: props.activateAnnotation, activeAnnotation: props.activeAnnotation, annotation: annotation, key: index, rootAnnotation: props.rootAnnotation, tags: props.tags }))));
};
exports.default = AnnotationList;
