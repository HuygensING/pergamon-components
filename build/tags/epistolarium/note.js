"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const hire_tooltip_1 = require("hire-tooltip");
const rendered_text_1 = require("../../rendered-text");
const constants_1 = require("../../constants");
const index_1 = require("./index");
const noteNumberStyle = {
    backgroundColor: '#DDD',
    borderRadius: '1em',
    cursor: 'pointer',
    fontSize: '10px',
    lineHeight: '1.9em',
    marginLeft: '0.2em',
    position: 'absolute',
    textAlign: 'center',
    width: '1.9em',
};
const spanStyle = {
    backgroundColor: 'none',
    marginRight: '0.6em',
};
const tooltipStyle = {
    fontSize: '16px',
    marginLeft: 'calc(-10vw + 8px)',
    marginTop: '16px',
    width: '20vw',
    zIndex: 1,
};
const Note = (props) => {
    const isLast = ((!props.annotation.hasOwnProperty('_first') &&
        !props.annotation.hasOwnProperty('_segment') &&
        !props.annotation.hasOwnProperty('_last')) ||
        props.annotation._last);
    const active = props.activeNoteId === props.annotation.id;
    return (React.createElement("span", { id: props.id, style: { spanStyle } },
        props.children,
        isLast &&
            React.createElement("div", { className: constants_1.IGNORE_CLASSNAME, onClick: (ev) => {
                    ev.stopPropagation();
                    if (props.activateNote)
                        props.activateNote(props.annotation);
                }, style: noteNumberStyle },
                "N",
                active &&
                    React.createElement(hire_tooltip_1.default, { borderColor: "black" },
                        React.createElement(rendered_text_1.default, { root: props.annotation, tags: index_1.default })))));
};
exports.default = Note;
