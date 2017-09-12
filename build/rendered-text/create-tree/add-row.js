"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tags_1 = require("../tags");
const index_1 = require("./index");
exports.addRow = () => {
    const rows = [[]];
    return annotation => {
        const space = [];
        for (let row = 0; row < rows.length; row++) {
            const annotationsInRow = rows[row];
            const isRowWithSpace = annotationsInRow.reduce((hasSpace, curr) => {
                return hasSpace && !index_1.hasOverlap(annotation, curr);
            }, true);
            if (isRowWithSpace) {
                space[row] = null;
            }
            else {
                space[row] = annotationsInRow
                    .filter(a => index_1.hasOverlap(annotation, a))
                    .some(a => tags_1.default[a.type].display === 'block');
            }
        }
        const highestBlockIndex = space.lastIndexOf(true);
        let rowIndex = space.findIndex((x, i) => x == null && i > highestBlockIndex);
        if (rowIndex === -1) {
            const newLength = rows.push([annotation]);
            rowIndex = newLength - 1;
        }
        else {
            rows[rowIndex].push(annotation);
        }
        annotation.row = rowIndex;
        return annotation;
    };
};
