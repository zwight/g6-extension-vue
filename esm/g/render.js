import { createRenderer, } from "vue";
import { Circle, Ellipse, Group, HTML, Image, Line, Path, Polygon, Polyline, Rect, Shape, Text, } from "@antv/g";
import { updatePropSingle } from "./processProps";
const customRender = createRenderer({
    patchProp: function (el, key, prevValue, nextValue, namespace, parentComponent) {
        updatePropSingle(el, key, nextValue, prevValue);
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
            case Shape.GROUP:
                return new Group(vnodeProps);
            case Shape.TEXT:
                return new Text(vnodeProps);
            case Shape.CIRCLE:
                return new Circle(vnodeProps);
            case Shape.RECT:
                return new Rect(vnodeProps);
            case Shape.ELLIPSE:
                return new Ellipse(vnodeProps);
            case Shape.HTML:
                return new HTML(vnodeProps);
            case Shape.IMAGE:
                return new Image(vnodeProps);
            case Shape.LINE:
                return new Line(vnodeProps);
            case Shape.PATH:
                return new Path(vnodeProps);
            case Shape.POLYGON:
                return new Polygon(vnodeProps);
            case Shape.POLYLINE:
                return new Polyline(vnodeProps);
            default:
                break;
        }
    },
    createText: function (text) {
        const ele = new Text();
        ele.textContent = text;
        return ele;
    },
    createComment: function (text) {
        const ele = new Text();
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
export const render = (component, target, callback) => {
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
//# sourceMappingURL=render.js.map