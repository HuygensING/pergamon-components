"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const system_tags_1 = require("./system-tags");
const not_implemented_1 = require("./not-implemented");
class Choice extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            expanded: false,
        };
    }
    render() {
        const defaultComp = React.createElement(system_tags_1.Span, Object.assign({}, this.props));
        if (!Array.isArray(this.props.node.children))
            return defaultComp;
        const sicCorr = this.props.node.children.some(child => child.type === 'sic' || child.type === 'corr');
        if (sicCorr)
            return defaultComp;
        const abbrExpan = this.props.node.children.some(child => child.type === 'abbr' || child.type === 'expan');
        if (abbrExpan) {
            return (React.createElement("span", { id: this.props.node.id(), onClick: () => this.setState({ expanded: !this.state.expanded }), style: { cursor: 'pointer' } },
                React.createElement("span", { style: { color: 'gray' } }, this.state.expanded ? '»' : '«'),
                React.Children.map(this.props.children, (child) => {
                    const cloned = React.cloneElement(child, { custom: this.state });
                    return cloned;
                }),
                React.createElement("span", { style: { color: 'gray' } }, this.state.expanded ? '«' : '»')));
        }
        return React.createElement(not_implemented_1.default, Object.assign({}, this.props));
    }
}
exports.default = Choice;
