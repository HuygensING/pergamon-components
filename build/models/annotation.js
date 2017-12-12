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
                this[k] = new Map();
                Object.keys(raw[k]).forEach(attrKey => this[k].set(attrKey, raw[k][attrKey]));
            }
            else
                this[k] = raw[k];
        });
        if (this.end == null && this.text != null)
            this.end = this.text.length;
        this.annotations
            .filter(a => a.type === 'meta')
            .forEach(a => this.metadata.set(a.attributes.get('type'), a.attributes.get('value')));
    }
}
exports.default = Annotation;
