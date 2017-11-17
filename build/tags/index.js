"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_by_tags_1 = require("./system-components-by-tags");
const tags_1 = require("./tags");
const anchor_1 = require("./anchor");
const system_tags_1 = require("./system-tags");
const componentsByTags = Object.assign({}, system_components_by_tags_1.default, {
    ab: {
        component: system_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    add: {
        component: tags_1.Add,
        display: system_components_by_tags_1.Display.Inline,
    },
    anchor: {
        component: anchor_1.default,
        display: system_components_by_tags_1.Display.Inline,
    },
    body: {
        component: system_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    cell: {
        component: tags_1.Cell,
        display: system_components_by_tags_1.Display.Block,
    },
    choice: {
        component: system_tags_1.Span,
        display: system_components_by_tags_1.Display.Inline,
    },
    closer: {
        component: system_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    corr: {
        component: tags_1.Corr,
        display: system_components_by_tags_1.Display.Inline,
    },
    div: {
        component: tags_1.DivTag,
        display: system_components_by_tags_1.Display.Block,
    },
    date: {
        component: tags_1.DateTag,
        display: system_components_by_tags_1.Display.Inline,
    },
    figure: {
        component: tags_1.Figure,
        display: system_components_by_tags_1.Display.Block,
    },
    formula: {
        component: tags_1.Formula,
        display: system_components_by_tags_1.Display.Inline,
    },
    graphic: {
        component: tags_1.Graphic,
        display: system_components_by_tags_1.Display.Block,
    },
    hi: {
        component: system_tags_1.Span,
        display: system_components_by_tags_1.Display.Inline,
    },
    item: {
        component: system_tags_1.Li,
        display: system_components_by_tags_1.Display.Block,
    },
    l: {
        component: tags_1.Line,
        display: system_components_by_tags_1.Display.Block,
    },
    lb: {
        component: system_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    lg: {
        component: tags_1.LineGroup,
        display: system_components_by_tags_1.Display.Block,
    },
    list: {
        component: system_tags_1.Ul,
        display: system_components_by_tags_1.Display.Block,
    },
    meta: {
        component: system_tags_1.None,
        display: system_components_by_tags_1.Display.None,
    },
    name: {
        component: tags_1.Name,
        display: system_components_by_tags_1.Display.Inline,
    },
    note: {
        component: system_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    opener: {
        component: tags_1.Opener,
        display: system_components_by_tags_1.Display.Block,
    },
    p: {
        component: tags_1.P,
        display: system_components_by_tags_1.Display.Block,
    },
    pb: {
        component: system_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    persName: {
        component: tags_1.PersName,
        display: system_components_by_tags_1.Display.Inline,
    },
    placeName: {
        component: tags_1.PlaceName,
        display: system_components_by_tags_1.Display.Inline,
    },
    row: {
        component: tags_1.Row,
        display: system_components_by_tags_1.Display.Block,
    },
    rs: {
        component: tags_1.Rs,
        display: system_components_by_tags_1.Display.Inline,
    },
    seg: {
        component: system_tags_1.Span,
        display: system_components_by_tags_1.Display.Inline,
    },
    sic: {
        component: tags_1.Sic,
        display: system_components_by_tags_1.Display.Inline,
    },
    table: {
        component: tags_1.Table,
        display: system_components_by_tags_1.Display.Block,
    },
    text: {
        component: system_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    title: {
        component: tags_1.Title,
        display: system_components_by_tags_1.Display.Block,
    },
    TEI: {
        component: system_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    teiHeader: {
        component: system_tags_1.None,
        display: system_components_by_tags_1.Display.None,
    },
});
exports.default = componentsByTags;
