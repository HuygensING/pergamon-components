"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const labelFromKey = (str) => {
    const index = str.lastIndexOf('.');
    const name = str.slice(0, index).split('.').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(', ');
    return `${name} (${str.slice(index + 1)})`;
};
class Person extends React.PureComponent {
    render() {
        return (React.createElement("div", { title: this.props.annotation.attributes.get('key') },
            React.createElement("img", { style: {
                    width: "12px",
                    height: 'auto',
                    marginRight: '.2em',
                }, src: "http://design.huygens.knaw.nl/static/icons/person.svg" }),
            this.props.annotation.attributes.has('key') ?
                labelFromKey(this.props.annotation.attributes.get('key')) :
                this.props.rootAnnotation.text.slice(this.props.annotation.start, this.props.annotation.end)));
    }
}
exports.default = Person;
