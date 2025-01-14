"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GVueNode = void 0;
const g_1 = require("@antv/g");
const g6_1 = require("@antv/g6");
const render_1 = require("./render");
class GVueNode extends g6_1.Rect {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { style: Object.assign(Object.assign({}, GVueNode.defaultStyleProps), options.style) }));
    }
    drawKeyShape(attributes, container) {
        const { component } = attributes;
        const [width, height] = this.getSize();
        return this.upsert("key", g_1.Group, { width, height }, container, {
            afterCreate: (dom) => {
                (0, render_1.render)(component, dom);
            },
            afterUpdate: (dom) => {
                (0, render_1.render)(component, dom);
            },
        });
    }
}
exports.GVueNode = GVueNode;
GVueNode.defaultStyleProps = {
    halo: false,
    label: false,
    icon: false,
};
//# sourceMappingURL=node.js.map