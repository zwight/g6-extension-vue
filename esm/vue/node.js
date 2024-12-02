import { HTML } from "@antv/g6";
import { render } from "vue";
export class VueNode extends HTML {
    getKeyStyle(attributes) {
        return Object.assign({}, super.getKeyStyle(attributes));
    }
    connectedCallback() {
        super.connectedCallback();
        const { component } = this.attributes;
        render(component, this.getDomElement());
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "component" && oldValue !== newValue) {
            render(null, this.getDomElement());
            setTimeout(() => {
                render(this.attributes.component, this.getDomElement());
            });
        }
    }
    destroy() {
        render(null, this.getDomElement());
        super.destroy();
    }
}
//# sourceMappingURL=node.js.map