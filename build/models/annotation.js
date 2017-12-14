"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../src/constants");
const tree_node_1 = require("./tree-node");
class Annotation {
    constructor(raw) {
        this.annotations = [];
        this.attributes = new Map();
        this.metadata = new Map();
        this.start = 0;
        this.type = constants_1.SYSTEM_ROOT_TYPE;
        if (raw == null)
            return;
        Object.keys(raw).forEach(k => {
            if (k === 'annotations')
                this[k] = raw[k].map(a => new Annotation(a));
            else if (k === 'attributes' && !(raw[k] instanceof Map)) {
                const attrs = raw[k];
                Object.keys(attrs).forEach(attrKey => this.attributes.set(attrKey, attrs[attrKey]));
            }
            else if (k === 'body') {
                const body = raw[k];
                Object.keys(body).forEach(bodyKey => {
                    if (bodyKey === 'body')
                        this.text = body.body;
                    else
                        this.metadata.set(bodyKey, body[bodyKey]);
                });
            }
            else if (k === 'text') { }
            else
                this[k] = raw[k];
        });
        if (this.end == null && this.text != null)
            this.end = this.text.length;
    }
    toRawAnnotation() {
        const body = [...this.metadata]
            .reduce((prev, [k, v]) => {
            prev[k] = v;
            return prev;
        }, {});
        if (this.text != null)
            body.body = this.text;
        return {
            annotations: this.annotations.map(a => a.toRawAnnotation()),
            attributes: [...this.attributes]
                .reduce((prev, [k, v]) => {
                prev[k] = v;
                return prev;
            }, {}),
            body,
            end: this.end,
            id: this.id,
            keywords: this.keywords,
            source: this.source,
            start: this.start,
            target: this.target,
            type: this.type,
        };
    }
    clone() {
        return new Annotation(this.toRawAnnotation());
    }
    toNode() {
        return new tree_node_1.default({
            annotationId: this.id,
            attributes: this.attributes,
            end: this.end,
            start: this.start,
            type: this.type,
        });
    }
}
exports.default = Annotation;
