"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_tags_1 = require("./system-tags");
var Display;
(function (Display) {
    Display[Display["None"] = 0] = "None";
    Display[Display["Inline"] = 1] = "Inline";
    Display[Display["Block"] = 2] = "Block";
})(Display = exports.Display || (exports.Display = {}));
;
const systemComponentsByTags = {
    __text: {
        component: system_tags_1.Span,
        display: Display.Inline,
    },
    __root: {
        component: system_tags_1.Div,
        display: Display.Block,
    },
};
exports.default = systemComponentsByTags;
