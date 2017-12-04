"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Place extends React.PureComponent {
    render() {
        return (React.createElement("div", null,
            React.createElement("img", { style: {
                    width: "12px",
                    height: 'auto',
                    marginRight: '.2em',
                }, src: "http://design.huygens.knaw.nl/static/icons/location.svg" }),
            this.props.rootAnnotation.text.slice(this.props.annotation.start, this.props.annotation.end)));
    }
}
exports.default = Place;
