"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const constants_1 = require("../constants");
const error_label_1 = require("./error-label");
class Label extends React.PureComponent {
    render() {
        const imgBasename = this.props.annotation.type === 'persName' ? 'person' : 'location';
        return (React.createElement("div", { style: {
                display: 'grid',
                gridTemplateColumns: 'calc(12px + .2em) auto',
            }, title: this.props.annotation.attributes.get('key') },
            React.createElement("img", { style: {
                    marginTop: '7px',
                    width: "12px",
                }, src: `${constants_1.IMAGE_BASE_DIR}/ui/${imgBasename}.svg` }),
            this.props.annotation.attributes.has('text') ?
                this.props.annotation.attributes.get('text') :
                React.createElement(error_label_1.default, Object.assign({}, this.props))));
    }
}
exports.default = Label;
