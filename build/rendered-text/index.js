"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const node_1 = require("./node");
const default_styles_1 = require("../default-styles");
const tree_builder_1 = require("./tree-builder");
class RenderedText extends React.Component {
    constructor() {
        super(...arguments);
        this.constructTree = () => {
            if (this.props.root == null)
                return null;
            const tree = tree_builder_1.default(this.props.root);
            return tree.map(branch => this.nodeTreeToComponentTree(branch));
        };
    }
    render() {
        return (React.createElement("div", { ref: el => {
                if (this.props.onRef != null)
                    this.props.onRef(el);
            }, style: default_styles_1.fontReadStyle }, this.constructTree()));
    }
    nodeTreeToComponentTree(node) {
        const nodes = (node.hasOwnProperty('children') && node.children.length) ?
            node.children.map((child) => this.nodeTreeToComponentTree(child)) :
            this.props.root.text.slice(node.start, node.end);
        return (React.createElement(node_1.default, { activateAnnotation: this.props.activateAnnotation, activeAnnotation: this.props.activeAnnotation, node: node, key: node.id + Math.random().toString(), root: this.props.root, tags: this.props.tags }, nodes));
    }
}
exports.default = RenderedText;
