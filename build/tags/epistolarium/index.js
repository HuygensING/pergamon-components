"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const note_1 = require("./note");
const system_components_by_tags_1 = require("../system-components-by-tags");
const tags_1 = require("./tags");
const default_tags_1 = require("../default-tags");
const componentsByTags = Object.assign({}, system_components_by_tags_1.default, {
    body: {
        component: default_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    head: {
        component: default_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    l: {
        component: tags_1.Line,
        display: system_components_by_tags_1.Display.Block,
    },
    lg: {
        component: tags_1.LineGroup,
        display: system_components_by_tags_1.Display.Block,
    },
    note: {
        component: note_1.default,
        display: system_components_by_tags_1.Display.Inline,
    },
    seg: {
        component: default_tags_1.Span,
        display: system_components_by_tags_1.Display.Inline,
    },
    text: {
        component: default_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    TEI: {
        component: default_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    teiHeader: {
        component: default_tags_1.None,
        display: system_components_by_tags_1.Display.None,
    },
    title: {
        component: tags_1.Title,
        display: system_components_by_tags_1.Display.Block,
    },
});
exports.default = componentsByTags;
