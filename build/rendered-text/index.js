"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const node_1 = require("./node");
const index_1 = require("./create-tree/index");
class RenderedText extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            tree: null,
        };
    }
    componentWillReceiveProps(nextProps) {
        const activeChanged = this.props.activeAnnotation !== nextProps.activeAnnotation;
        if (this.state.tree == null || activeChanged) {
            const root = index_1.default(JSON.parse(JSON.stringify(nextProps.root)));
            const tree = this.createTree(root, nextProps.root.text, nextProps.activeAnnotation);
            this.setState({ tree });
        }
    }
    render() {
        return this.state.tree;
    }
    createTree(root, text, activeAnnotation) {
        if (root.text == null && text == null)
            return null;
        const children = (root.hasOwnProperty('children') && root.children.length) ?
            root.children.map((child, i) => this.createTree(child, text, activeAnnotation)) :
            text.slice(root.start, root.end);
        return (React.createElement(node_1.default, { activeAnnotation: activeAnnotation, annotation: root, key: Math.random() * 999999999 }, children));
    }
}
exports.default = RenderedText;
