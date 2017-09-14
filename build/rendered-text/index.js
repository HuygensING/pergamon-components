"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const node_1 = require("./node");
const index_1 = require("./create-tree/index");
class Tree extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            tree: null,
        };
    }
    componentDidMount() {
        this.generateTree(this.props.root, this.props.text);
    }
    componentWillReceiveProps(nextProps) {
        this.generateTree(nextProps.root, nextProps.text);
    }
    render() {
        return this.state.tree;
    }
    generateTree(root, text) {
        if (root.text == null && text == null)
            return null;
        const children = (root.hasOwnProperty('children') && root.children.length) ?
            root.children
                .map((child, i) => {
                return (React.createElement(Tree, { key: i, root: child, text: text }));
            }) :
            text.slice(root.start, root.end);
        const tree = (React.createElement(node_1.default, { annotation: root }, children));
        this.setState({ tree });
    }
}
;
const RenderedText = ({ root }) => React.createElement(Tree, { root: index_1.default(JSON.parse(JSON.stringify(root))), text: root.text });
exports.default = RenderedText;
