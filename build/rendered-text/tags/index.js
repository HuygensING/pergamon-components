"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const note_1 = require("./note");
const base_1 = require("./base");
const Paragraph = styled_components_1.default.div `
	margin: 1em;
`;
const Text = base_1.InlineDiv.extend ``;
const Bold = base_1.InlineDiv.extend `
	font-weight: bold;
`;
const Italic = base_1.InlineDiv.extend `
	font-style: italic;
`;
const Underline = base_1.InlineDiv.extend `
	text-decoration: underline;
`;
const Highlight = base_1.InlineDiv.extend `
	background-color: rgba(255, 255, 0, 0.8);
`;
const Del = base_1.InlineDiv.extend `
	display: none;
`;
const LineGroup = base_1.Div.extend `
	margin: 2em 0;
`;
const Line = base_1.Div.extend `
	line-height: 2em;
`;
const componentsByTags = {
    __text: {
        component: Text,
        display: 'inline',
    },
    bold: {
        component: Bold,
        display: 'inline',
    },
    del: {
        component: Del,
        display: 'inline',
    },
    doc: {
        component: base_1.Div,
        display: 'block',
    },
    TEI: {
        component: base_1.Div,
        display: 'block',
    },
    teiHeader: {
        component: Del,
        display: 'block',
    },
    lg: {
        component: LineGroup,
        display: 'block',
    },
    l: {
        component: Line,
        display: 'block',
    },
    italic: {
        component: Italic,
        display: 'inline',
    },
    note: {
        component: note_1.default,
        display: 'inline',
    },
    paragraph: {
        component: Paragraph,
        display: 'block',
    },
    para: {
        component: Paragraph,
        display: 'block',
    },
    p: {
        component: Paragraph,
        display: 'block',
    },
    text: {
        component: base_1.Div,
        display: 'block',
    },
    underline: {
        component: Underline,
        display: 'inline',
    },
    highlight: {
        component: Highlight,
        display: 'inline',
    },
    meta: {
        component: base_1.InlineDiv,
        display: 'inline',
    },
    body: {
        component: base_1.Div,
        display: 'block',
    },
    div: {
        component: Paragraph,
        display: 'block',
    },
    head: {
        component: styled_components_1.default.h2 ``,
        display: 'block',
    },
    ref: {
        component: base_1.InlineDiv,
        display: 'inline',
    },
    pb: {
        component: base_1.InlineDiv,
        display: 'inline',
    },
    placeName: {
        component: base_1.InlineDiv,
        display: 'inline',
    },
    persName: {
        component: base_1.InlineDiv,
        display: 'inline',
    },
    rs: {
        component: base_1.InlineDiv,
        display: 'inline',
    },
    geogName: {
        component: base_1.InlineDiv,
        display: 'inline',
    },
    name: {
        component: base_1.InlineDiv,
        display: 'inline',
    },
    lb: {
        component: base_1.InlineDiv,
        display: 'inline',
    },
    seg: {
        component: base_1.InlineDiv,
        display: 'inline',
    },
    hi: {
        component: Highlight,
        display: 'inline',
    },
    sup: {
        component: styled_components_1.default.sup ``,
        display: 'inline',
    },
    graphic: {
        component: base_1.InlineDiv,
        display: 'inline',
    },
    figure: {
        component: base_1.InlineDiv,
        display: 'inline',
    },
    table: {
        component: base_1.InlineDiv,
        display: 'inline',
    },
    row: {
        component: base_1.InlineDiv,
        display: 'inline',
    },
    cell: {
        component: base_1.InlineDiv,
        display: 'inline',
    }
};
exports.default = componentsByTags;
