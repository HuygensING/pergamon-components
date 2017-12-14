"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4 = require("uuid/v4");
const constants_1 = require("../constants");
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
        return `${constants_1.SYSTEM_TEXT_TYPE}_${uuidv4()}${suffix}`;
    }
    clone() {
        return new TreeNode(this);
    }
}
exports.default = TreeNode;
