"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const hire_tooltip_1 = require("hire-tooltip");
const base_1 = require("./base");
const styled_components_1 = require("styled-components");
const index_1 = require("../index");
const constants_1 = require("../../constants");
const NoteNumber = base_1.InlineDiv.extend `
	background-color: ${(props) => props.active ?
    constants_1.orangeLight :
    '#DDD'};
	border-radius: 1em;
	cursor: pointer;
	font-size: 10px;
	line-height: 1.9em;
	margin-left: 0.2em;
	position: absolute;
	text-align: center;
	width: 1.9em;
`;
const Span = base_1.InlineDiv.extend `
	background-color: ${(props) => props.active ?
    `rgba(${constants_1.orangeRGB}, 0.2)` :
    'none'};
	
	${(props) => props.isLast ?
    `margin-right: 1em;
			padding-right: 0.6em;` :
    ''}			
`;
const Tooltip = styled_components_1.default(hire_tooltip_1.default) `
	font-size: 16px;
	margin-left: calc(-10vw + 8px);
	margin-top: 16px;
	width: 20vw;
	z-index: 1;
`;
class Note extends React.Component {
    render() {
        const { activateAnnotationDocument, activateNote, activeAnnotationDocument, activeNoteId, annotation, children, className, documents, } = this.props;
        const annotationDocument = (documents != null &&
            annotation.hasOwnProperty('body')) ?
            documents.find(d => d.id === annotation.body) :
            null;
        const isLast = ((!annotation.hasOwnProperty('_first') &&
            !annotation.hasOwnProperty('_segment') &&
            !annotation.hasOwnProperty('_last')) ||
            annotation._last);
        const active = activeNoteId === annotation.id;
        return (React.createElement(Span, { active: active, className: className, id: this.props.id, isLast: isLast },
            children,
            isLast &&
                React.createElement(NoteNumber, { active: active, className: "ignore", onClick: (ev) => {
                        ev.stopPropagation();
                        if (activateNote)
                            activateNote(annotation);
                    } },
                    "N",
                    active &&
                        React.createElement(Tooltip, { borderColor: "black" }, (annotationDocument &&
                            annotationDocument.tree != null) ?
                            React.createElement(index_1.default, { root: annotation }) :
                            null))));
    }
}
exports.default = Note;
