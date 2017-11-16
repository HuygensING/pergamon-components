"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const node_1 = require("./node");
const index_1 = require("./create-tree/index");
const default_styles_1 = require("../default-styles");
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
        return (React.createElement("div", { style: default_styles_1.fontReadStyle }, this.state.textTree));
    }
    init(props) {
        if (props.root.id == null)
            return;
        if (this.state.textTree == null ||
            this.props.root.id !== props.root.id ||
            (this.props.activeAnnotation !== props.activeAnnotation)) {
            const root = index_1.default(JSON.parse(JSON.stringify(props.root)), props.tags);
            const textTree = this.textTree(root, props.root.text, props);
            this.setState({ textTree });
        }
    }
    textTree(root, text, props) {
        const children = (root.hasOwnProperty('children') && root.children.length) ?
            root.children.map((child, i) => this.textTree(child, text, props)) :
            text.slice(root.start, root.end);
        return (React.createElement(node_1.default, Object.assign({}, props, { annotation: root, key: root._tagId }), children));
    }
}
exports.default = RenderedText;
