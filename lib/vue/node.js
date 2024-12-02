"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VueNode = void 0;
const g6_1 = require("@antv/g6");
const vue_1 = require("vue");
class VueNode extends g6_1.HTML {
    getKeyStyle(attributes) {
        return Object.assign({}, super.getKeyStyle(attributes));
    }
    connectedCallback() {
        super.connectedCallback();
        const { component } = this.attributes;
        (0, vue_1.render)(component, this.getDomElement());
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "component" && oldValue !== newValue) {
            (0, vue_1.render)(null, this.getDomElement());
            setTimeout(() => {
                (0, vue_1.render)(this.attributes.component, this.getDomElement());
            });
        }
    }
    destroy() {
        (0, vue_1.render)(null, this.getDomElement());
        super.destroy();
    }
}
exports.VueNode = VueNode;
//# sourceMappingURL=node.js.map