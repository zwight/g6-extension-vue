import { Group } from "@antv/g";
import { Rect } from "@antv/g6";
import { render } from "./render";
export class GVueNode extends Rect {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { style: Object.assign(Object.assign({}, GVueNode.defaultStyleProps), options.style) }));
    }
    drawKeyShape(attributes, container) {
        const { component } = attributes;
        const [width, height] = this.getSize();
        return this.upsert("key", Group, { width, height }, container, {
            afterCreate: (dom) => {
                render(component, dom);
            },
            afterUpdate: (dom) => {
                render(component, dom);
            },
        });
    }
}
GVueNode.defaultStyleProps = {
    halo: false,
    label: false,
    icon: false,
};
//# sourceMappingURL=node.js.map