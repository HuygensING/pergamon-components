"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const annotation_1 = require("./annotation");
const sort_1 = require("../rendered-text/create-tree/sort");
const showAnnotationTypes = ['persName', 'placeName', 'geogName', 'name'];
const AnnotationList = (props) => React.createElement("ul", null, props.rootAnnotation.children
    .filter(a => showAnnotationTypes.indexOf(a.type) > -1)
    .sort(sort_1.byStartEnd)
    .map((annotation, index) => React.createElement(annotation_1.default, { activateAnnotation: props.activateAnnotation, activeAnnotation: props.activeAnnotation, annotation: annotation, key: index, rootAnnotation: props.rootAnnotation, tags: props.tags })));
exports.default = AnnotationList;
