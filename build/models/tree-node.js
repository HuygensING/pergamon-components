"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
    constructor(raw) {
        this.start = 0;
        if (raw == null)
            return;
        Object.keys(raw).forEach(k => {
            const value = raw[k];
            if (value != null)
                this[k] = raw[k];
        });
    }
}
exports.default = TreeNode;
