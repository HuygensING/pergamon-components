"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const default_styles_1 = require("../default-styles");
const suggestion_1 = require("./suggestion");
const Suggestions = (props) => React.createElement("div", { style: Object.assign({}, default_styles_1.fontStyle, default_styles_1.grayLightBackground, { padding: '.5em' }) },
    React.createElement("img", { src: "http://design.huygens.knaw.nl/static/icons/loader.svg", style: {
            width: '30px',
            height: 'auto'
        } }),
    React.createElement("p", null, "Generating semantic suggestions for better search results."),
    React.createElement("p", null, "The ePistolarium has found 9 terms that are used in the same context. You can add them to improve your search results:"),
    React.createElement("ul", { style: {
            listStyle: 'none',
            margin: '.5em 0 0 0',
            padding: 0,
        } }, props.children));
const SemanticSuggestions = (props) => React.createElement(Suggestions, null, props.semanticSuggestions.map(((s) => React.createElement(suggestion_1.default, { key: s.text, onClick: (ev) => props.fullTextSearch(s.text), suggestion: s }, s.text))));
exports.default = SemanticSuggestions;
