"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const has_overlap_1 = require("./has-overlap");
exports.toSplitPoints = (splitPoints, curr, index, arr) => {
    if (index === 0)
        return splitPoints;
    const prevAnnotations = arr.slice(0, index);
    prevAnnotations.forEach((prev) => {
        if (has_overlap_1.default(prev, curr)) {
            if (prev.end > curr.start && prev.end < curr.end) {
                splitPoints.push(prev.end);
            }
            if (prev.start > curr.start && prev.start < curr.end) {
                splitPoints.push(prev.start);
            }
        }
    });
    return [...new Set(splitPoints)]
        .sort((a, b) => a - b);
};
exports.splitAnnotation = (node, splitPoints) => {
    if (node.start !== splitPoints[0]) {
        splitPoints = [node.start].concat(splitPoints);
    }
    if (node.end !== splitPoints[splitPoints.length - 1]) {
        splitPoints = splitPoints.concat(node.end);
    }
    const parts = splitPoints
        .reduce((agg, curr, index, arr) => {
        if (index === arr.length - 1)
            return agg;
        const clone = node.clone();
        clone.start = curr;
        clone.end = arr[index + 1];
        if (index === 0 && arr.length > 2)
            clone.segment = 'first';
        else if (index === (arr.length - 2) && arr.length > 2)
            clone.segment = 'last';
        else if (arr.length > 2)
            clone.segment = 'middle';
        agg.push(clone);
        return agg;
    }, []);
    return parts;
};
exports.splitAnnotations = () => {
    let splitPointIndex = 0;
    let splitPoints;
    const extractSplitPoints = (arr) => {
        splitPoints = arr.reduce(exports.toSplitPoints, [])
            .map((sp) => ({
            value: sp,
            active: false,
        }));
    };
    return (agg, curr, index, arr) => {
        if (splitPoints == null)
            extractSplitPoints(arr);
        if (!splitPoints.length) {
            agg.push(curr);
            return agg;
        }
        let currSplitPoint = splitPoints[splitPointIndex];
        if (curr.start > currSplitPoint.value) {
            if (arr.length < splitPointIndex - 1)
                splitPointIndex += 1;
            currSplitPoint = splitPoints[splitPointIndex];
        }
        if (currSplitPoint == null) {
            agg.push(curr);
            return agg;
        }
        const splitPointsInCurr = splitPoints.filter((sp) => {
            return sp.active && sp.value > curr.start && sp.value < curr.end;
        });
        if (splitPointsInCurr.length) {
            agg = agg.concat(exports.splitAnnotation(curr, splitPointsInCurr.map((sp) => sp.value)));
        }
        else {
            agg.push(curr);
        }
        for (let i = 0; i < splitPoints.length; i++) {
            const sp = splitPoints[i];
            if (sp.value === curr.start || sp.value === curr.end)
                sp.active = true;
        }
        return agg;
    };
};
