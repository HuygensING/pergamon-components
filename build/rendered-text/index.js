"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const node_1 = require("./node");
const default_styles_1 = require("../default-styles");
const tree_builder_1 = require("./tree-builder");
class RenderedText extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            componentTree: null,
        };
    }
    componentDidMount() {
        this.init(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.init(nextProps);
    }
    render() {
        return (React.createElement("div", { style: default_styles_1.fontReadStyle }, this.state.componentTree));
    }
    init(props) {
        return __awaiter(this, void 0, void 0, function* () {
            if (props.root.id == null)
                return;
            if (this.state.componentTree == null ||
                this.props.root.id !== props.root.id ||
                this.props.activeAnnotation !== props.activeAnnotation) {
                const tree = tree_builder_1.default(props.root);
                const componentTree = tree.map(branch => this.nodeTreeToComponentTree(branch, props.root, props));
                this.setState({ componentTree });
            }
        });
    }
    nodeTreeToComponentTree(node, root, props) {
        const nodes = (node.hasOwnProperty('children') && node.children.length) ?
            node.children.map((child) => this.nodeTreeToComponentTree(child, root, props)) :
            root.text.slice(node.start, node.end);
        return (React.createElement(node_1.default, { activateAnnotation: props.activateAnnotation, activeAnnotation: props.activeAnnotation, node: node, key: node.id + Math.random().toString(), root: root, tags: props.tags }, nodes));
    }
}
exports.default = RenderedText;
