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
            render(this.attributes.component, this.getDomElement());
        }
    }
    destroy() {
        this.getDomElement().remove();
        super.destroy();
    }
}
//# sourceMappingURL=node.jsx.map