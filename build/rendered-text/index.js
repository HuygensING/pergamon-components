"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const node_1 = require("./node");
const index_1 = require("./create-tree/index");
const constants_1 = require("../constants");
const default_styles_1 = require("../default-styles");
const activeTagStyle = `
	background-color: rgba(${constants_1.orangeRGB}, 0.03);
	border: 1px solid ${constants_1.orange};
	box-shadow: 4px 4px 0px rgba(${constants_1.orangeRGB}, 0.4);
	line-height: 2.8em;
	margin: 0.5em;
	padding: 0.5em;
`;
class RenderedText extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            textTree: null,
        };
    }
    componentDidMount() {
        this.init(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.init(nextProps);
    }
    render() {
        return (React.createElement("div", { ref: (el) => { this.el = el; }, style: default_styles_1.fontReadStyle }, this.state.textTree));
    }
    activeTags(activeAnnotation) {
        const tagId = index_1.generateTagId(activeAnnotation, false);
        return this.el.querySelectorAll(`[id^=${tagId}]`);
    }
    init(props) {
        if (props.root.id == null)
            return;
        if (this.state.textTree == null || this.props.root.id !== props.root.id) {
            const root = index_1.default(JSON.parse(JSON.stringify(props.root)), props.tags);
            const textTree = this.textTree(root, props.root.text, props);
            this.setState({ textTree });
        }
        if (this.props.activeAnnotation !== props.activeAnnotation) {
            if (this.props.activeAnnotation !== null) {
                [...this.activeTags(this.props.activeAnnotation)].forEach((a) => {
                    a.style.cssText = this.inactiveTagStyle;
                    this.inactiveTagStyle = null;
                });
            }
            if (props.activeAnnotation != null) {
                [...this.activeTags(props.activeAnnotation)].forEach((a) => {
                    this.inactiveTagStyle = a.style.cssText;
                    a.style.cssText = activeTagStyle;
                });
            }
        }
    }
    textTree(root, text, props) {
        if (root.text == null && text == null)
            return null;
        const children = (root.hasOwnProperty('children') && root.children.length) ?
            root.children.map((child, i) => this.textTree(child, text, props)) :
            text.slice(root.start, root.end);
        return (React.createElement(node_1.default, { activeAnnotation: props.activeAnnotation, annotation: root, key: window.crypto.getRandomValues(new Uint32Array(1))[0], tags: props.tags }, children));
    }
}
exports.default = RenderedText;
