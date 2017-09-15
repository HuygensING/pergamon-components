"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const componentsByTags = Object.assign({}, systemComponentsByTags, {
    lg: {
        component: Div,
        display: Display.Block,
    },
    l: {
        component: Div,
        display: Display.Block,
    },
    seg: {
        component: Span,
        display: Display.Inline,
    },
    body: {
        component: Div,
        display: Display.Block,
    },
    text: {
        component: Div,
        display: Display.Block,
    },
    head: {
        component: Div,
        display: Display.Block,
    },
    title: {
        component: Div,
        display: Display.Block,
    },
    TEI: {
        component: Div,
        display: Display.Block,
    },
    teiHeader: {
        component: None,
        display: Display.None,
    },
});
exports.default = componentsByTags;
