"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const error_label_1 = require("./error-label");
class Place extends React.PureComponent {
    render() {
        return (React.createElement("div", null,
            React.createElement("img", { style: {
                    width: "12px",
                    height: 'auto',
                    marginRight: '.2em',
                }, src: "/static/graphics/ui/location.svg" }),
            this.props.annotation.attributes.has('text') ?
                this.props.annotation.attributes.get('text') :
                React.createElement(error_label_1.default, Object.assign({}, this.props))));
    }
}
exports.default = Place;
