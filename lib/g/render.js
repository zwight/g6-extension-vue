"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const vue_1 = require("vue");
const g_1 = require("@antv/g");
const processProps_1 = require("./processProps");
const customRender = (0, vue_1.createRenderer)({
    patchProp: function (el, key, prevValue, nextValue, namespace, parentComponent) {
        (0, processProps_1.updatePropSingle)(el, key, nextValue, prevValue);
    },
    insert: function (el, parent, anchor) {
        parent.appendChild(el);
    },
    remove: function (el) {
        const parent = el.parent;
        parent === null || parent === void 0 ? void 0 : parent.removeChild(el);
    },
    createElement: function (type, namespace, isCustomizedBuiltIn, vnodeProps) {
        switch (type) {
            case g_1.Shape.GROUP:
                return new g_1.Group(vnodeProps);
            case g_1.Shape.TEXT:
                return new g_1.Text(vnodeProps);
            case g_1.Shape.CIRCLE:
                return new g_1.Circle(vnodeProps);
            case g_1.Shape.RECT:
                return new g_1.Rect(vnodeProps);
            case g_1.Shape.ELLIPSE:
                return new g_1.Ellipse(vnodeProps);
            case g_1.Shape.HTML:
                return new g_1.HTML(vnodeProps);
            case g_1.Shape.IMAGE:
                return new g_1.Image(vnodeProps);
            case g_1.Shape.LINE:
                return new g_1.Line(vnodeProps);
            case g_1.Shape.PATH:
                return new g_1.Path(vnodeProps);
            case g_1.Shape.POLYGON:
                return new g_1.Polygon(vnodeProps);
            case g_1.Shape.POLYLINE:
                return new g_1.Polyline(vnodeProps);
            default:
                break;
        }
    },
    createText: function (text) {
        const ele = new g_1.Text();
        ele.textContent = text;
        return ele;
    },
    createComment: function (text) {
        const ele = new g_1.Text();
        ele.textContent = text;
        return ele;
    },
    setText: function (node, text) {
        node.nodeValue = text;
    },
    setElementText: function (node, text) {
        node.textContent = text;
    },
    parentNode: function (node) {
        return node.parentNode;
    },
    nextSibling: function (node) {
        return node.nextSibling;
    },
});
const TargetContainerWeakMap = new WeakMap();
const render = (component, target, callback) => {
    const targetApp = TargetContainerWeakMap.get(target);
    const app = targetApp || customRender.createApp(component);
    TargetContainerWeakMap.set(target, app);
    if (targetApp) {
        customRender.render(component, target);
    }
    else {
        app.mount(target);
    }
};
exports.render = render;
//# sourceMappingURL=render.js.map