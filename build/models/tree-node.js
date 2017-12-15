"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
    constructor(raw) {
        this.segment = 'none';
        this.start = 0;
        Object.keys(raw).forEach(k => {
            const value = raw[k];
            if (value != null)
                this[k] = raw[k];
        });
    }
    id() {
        const suffix = (this.segment !== 'none') ? `_${this.segment}` : '';
        return `${this.type}_${this.start}_${this.end}_${this.row}${suffix}`;
    }
    clone() {
        return new TreeNode(this);
    }
}
exports.default = TreeNode;
