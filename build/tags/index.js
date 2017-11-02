"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_by_tags_1 = require("./system-components-by-tags");
const tags_1 = require("./tags");
const note_1 = require("./note");
const system_tags_1 = require("./system-tags");
const componentsByTags = Object.assign({}, system_components_by_tags_1.default, {
    ab: {
        component: system_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    body: {
        component: system_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    cell: {
        component: system_tags_1.NotImplemented,
        display: system_components_by_tags_1.Display.Block,
    },
    closer: {
        component: system_tags_1.NotImplemented,
        display: system_components_by_tags_1.Display.Block,
    },
    corr: {
        component: tags_1.Corr,
        display: system_components_by_tags_1.Display.Inline,
    },
    div: {
        component: system_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    date: {
        component: tags_1.DateTag,
        display: system_components_by_tags_1.Display.Inline,
    },
    figure: {
        component: system_tags_1.NotImplemented,
        display: system_components_by_tags_1.Display.Block,
    },
    formula: {
        component: system_tags_1.NotImplemented,
        display: system_components_by_tags_1.Display.Block,
    },
    geogName: {
        component: system_tags_1.NotImplemented,
        display: system_components_by_tags_1.Display.Block,
    },
    graphic: {
        component: system_tags_1.NotImplemented,
        display: system_components_by_tags_1.Display.Block,
    },
    hi: {
        component: tags_1.Hi,
        display: system_components_by_tags_1.Display.Inline,
    },
    item: {
        component: system_tags_1.NotImplemented,
        display: system_components_by_tags_1.Display.Block,
    },
    l: {
        component: tags_1.Line,
        display: system_components_by_tags_1.Display.Block,
    },
    label: {
        component: system_tags_1.NotImplemented,
        display: system_components_by_tags_1.Display.Block,
    },
    lb: {
        component: system_tags_1.NotImplemented,
        display: system_components_by_tags_1.Display.Block,
    },
    lg: {
        component: tags_1.LineGroup,
        display: system_components_by_tags_1.Display.Block,
    },
    list: {
        component: system_tags_1.NotImplemented,
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
        component: note_1.default,
        display: system_components_by_tags_1.Display.Inline,
    },
    opener: {
        component: system_tags_1.NotImplemented,
        display: system_components_by_tags_1.Display.Block,
    },
    orgName: {
        component: system_tags_1.NotImplemented,
        display: system_components_by_tags_1.Display.Block,
    },
    p: {
        component: tags_1.P,
        display: system_components_by_tags_1.Display.Block,
    },
    pb: {
        component: system_tags_1.NotImplemented,
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
    q: {
        component: system_tags_1.NotImplemented,
        display: system_components_by_tags_1.Display.Block,
    },
    quote: {
        component: system_tags_1.NotImplemented,
        display: system_components_by_tags_1.Display.Block,
    },
    row: {
        component: system_tags_1.NotImplemented,
        display: system_components_by_tags_1.Display.Block,
    },
    rs: {
        component: tags_1.Rs,
        display: system_components_by_tags_1.Display.Inline,
    },
    seg: {
        component: tags_1.Seg,
        display: system_components_by_tags_1.Display.Inline,
    },
    sup: {
        component: system_tags_1.NotImplemented,
        display: system_components_by_tags_1.Display.Block,
    },
    table: {
        component: system_tags_1.NotImplemented,
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
