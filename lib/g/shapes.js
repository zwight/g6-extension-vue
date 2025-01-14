"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.Rect = exports.Polyline = exports.Polygon = exports.Path = exports.Line = exports.Image = exports.HTML = exports.Group = exports.Ellipse = exports.Circle = void 0;
exports.ElementOf = ElementOf;
const g_1 = require("@antv/g");
function ElementOf(type) {
    return type;
}
exports.Circle = ElementOf(g_1.Shape.CIRCLE);
exports.Ellipse = ElementOf(g_1.Shape.ELLIPSE);
exports.Group = ElementOf(g_1.Shape.GROUP);
exports.HTML = ElementOf(g_1.Shape.HTML);
exports.Image = ElementOf(g_1.Shape.IMAGE);
exports.Line = ElementOf(g_1.Shape.LINE);
exports.Path = ElementOf(g_1.Shape.PATH);
exports.Polygon = ElementOf(g_1.Shape.POLYGON);
exports.Polyline = ElementOf(g_1.Shape.POLYLINE);
exports.Rect = ElementOf(g_1.Shape.RECT);
exports.Text = ElementOf(g_1.Shape.TEXT);
//# sourceMappingURL=shapes.js.map