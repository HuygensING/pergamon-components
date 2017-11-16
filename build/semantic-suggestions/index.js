"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const default_styles_1 = require("../default-styles");
const suggestion_1 = require("./suggestion");
const Wrapper = (props) => React.createElement("div", { style: Object.assign({}, default_styles_1.fontStyle, default_styles_1.grayLightBackground, { padding: props.semanticSuggestions.length > 0 ? '.5em' : 0 }) }, props.children);
const Suggestions = (props) => React.createElement("ul", { style: {
        listStyle: 'none',
        margin: '.5em 0 0 0',
        padding: 0,
    } }, props.children);
const SemanticSuggestions = (props) => React.createElement(Wrapper, Object.assign({}, props),
    props.requesting &&
        React.createElement("p", { style: {
                alignItems: 'center',
                display: 'grid',
                fontSize: '0.9em',
                gridTemplateColumns: '62px auto',
                justifyItems: 'center',
                padding: '.5em',
            } },
            React.createElement("img", { src: "http://design.huygens.knaw.nl/static/icons/loader.svg", style: {
                    height: 'auto',
                    width: '30px',
                } }),
            "Generating semantic suggestions for better search results."),
    (props.semanticSuggestions.length > 0) &&
        React.createElement("p", null,
            "The ePistolarium has found ",
            props.semanticSuggestions.length,
            " terms that are used in the same context. You can add them to improve your search results:"),
    (props.semanticSuggestions.length > 0) &&
        React.createElement(Suggestions, null, props.semanticSuggestions.map(((s) => React.createElement(suggestion_1.default, { key: s.text, onClick: (ev) => props.fullTextSearch(s.text), suggestion: s })))));
exports.default = SemanticSuggestions;
