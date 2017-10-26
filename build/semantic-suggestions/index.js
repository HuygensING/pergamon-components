"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const suggestion_1 = require("./suggestion");
const Suggestions = (props) => React.createElement("ul", { style: {
        listStyle: 'none',
        margin: '.5em 0 0 0',
        padding: 0,
    } }, props.children);
const SemanticSuggestions = (props) => React.createElement(Suggestions, null, props.semanticSuggestions.map(((s) => React.createElement(suggestion_1.default, { key: s.text, onClick: (ev) => props.fullTextSearch(s.text), suggestion: s }, s.text))));
exports.default = SemanticSuggestions;
