"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const button_1 = require("./button");
const styled_components_1 = require("styled-components");
const TopRightButton = styled_components_1.default(button_1.default) `
	color: #BBB;
	position: absolute;
	right: 0;
	top: 0;
	
	&:hover {
		color: #444;
	}	
`;
const EditAnnotationDocumentButton = (props) => {
    const Comp = props.topRight ? TopRightButton : button_1.default;
    return props.activeAnnotation.hasOwnProperty('body') &&
        React.createElement(Comp, { bare: props.bare, onClick: () => props.activateAnnotationDocument(props.activeAnnotation, props.activeAnnotationDocument.id) }, "\u270E");
};
exports.default = EditAnnotationDocumentButton;
