"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hasOverlap = (a, b) => !(a.end <= b.start || a.start >= b.end) ||
    (a.start === b.start && a.end !== b.end) ||
    (a.start !== b.start && a.end === b.end);
exports.default = hasOverlap;
