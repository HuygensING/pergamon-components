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
        const row = (this.row != null) ? `_${this.row}` : '';
        return `${this.type}_${this.start}_${this.end}${row}${suffix}`;
    }
    clone() {
        return new TreeNode(this);
    }
}
exports.default = TreeNode;
