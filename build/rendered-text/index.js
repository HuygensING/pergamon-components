"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const node_1 = require("./node");
const index_1 = require("./create-tree/index");
const constants_1 = require("../constants");
class RenderedText extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            textTree: null,
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.state.textTree == null) {
            const root = index_1.default(JSON.parse(JSON.stringify(nextProps.root)));
            const textTree = this.textTree(root, nextProps.root.text, nextProps.activeAnnotation);
            this.setState({ textTree });
        }
        if (this.props.activeAnnotation !== nextProps.activeAnnotation) {
            const activeAnnotations = this.el.querySelectorAll('.active');
            [...activeAnnotations].forEach((a) => {
                a.style.cssText = '';
                a.classList.remove('active');
            });
            if (nextProps.activeAnnotation != null) {
                const activeTag = this.el.querySelector(`#${index_1.generateTagId(nextProps.activeAnnotation)}`);
                if (activeTag instanceof HTMLElement) {
                    const tagStyle = `
						background-color: rgba(${constants_1.orangeRGB}, 0.03);
						border: 1px solid ${constants_1.orange};
						box-shadow: 4px 4px 0px rgba(${constants_1.orangeRGB}, 0.4);
						line-height: 2.8em;
						margin: 0.5em;
						padding: 0.5em;
					`;
                    activeTag.style.cssText = tagStyle;
                    activeTag.classList.add('active');
                }
            }
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.textTree == null && nextState.textTree != null;
    }
    render() {
        return (React.createElement("div", { ref: (el) => { this.el = el; } }, this.state.textTree));
    }
    textTree(root, text, activeAnnotation) {
        if (root.text == null && text == null)
            return null;
        const children = (root.hasOwnProperty('children') && root.children.length) ?
            root.children.map((child, i) => this.textTree(child, text, activeAnnotation)) :
            text.slice(root.start, root.end);
        return (React.createElement(node_1.default, { activeAnnotation: activeAnnotation, annotation: root, key: Math.random() * 999999999 }, children));
    }
}
exports.default = RenderedText;
