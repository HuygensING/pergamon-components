"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const annotation_form_1 = require("./annotation-form");
const index_1 = require("../rendered-text/index");
const Li = styled_components_1.default.li `
`;
const Small = styled_components_1.default.small `
	margin-left: 1em;
`;
const Head4 = styled_components_1.default.h4 ``;
const Annotation = (props) => {
    return (React.createElement(Li, null,
        React.createElement(Head4, { onClick: () => props.activateAnnotation(props.annotation) },
            props.annotation.type,
            React.createElement(Small, null,
                "(",
                props.annotation.start,
                " - ",
                props.annotation.end,
                ")"),
            React.createElement(Small, null, props.annotation._tagId)),
        (props.activeAnnotation != null &&
            props.annotation.id === props.activeAnnotation.id) ?
            React.createElement(annotation_form_1.default, { activeAnnotation: props.activeAnnotation, rootAnnotation: props.rootAnnotation }) :
            (props.activeAnnotation != null &&
                props.activeAnnotation.text != null) ?
                React.createElement(index_1.default, { root: props.activeAnnotation }) :
                null));
};
exports.default = Annotation;
