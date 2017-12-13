"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Annotation {
    constructor(raw) {
        this.annotations = [];
        this.attributes = new Map();
        this.metadata = new Map();
        this.start = 0;
        this.type = '__root';
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
        if (this.end == null && this.text != null && this.metadata.has('body'))
            this.end = this.metadata.get('body').length;
    }
}
exports.default = Annotation;
