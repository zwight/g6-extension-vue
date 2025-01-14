import type { DisplayObjectConfig, Element } from "@antv/g";
import { Group } from "@antv/g";
import type { BaseNodeStyleProps } from "@antv/g6";
import { Rect } from "@antv/g6";
import { VNode } from "vue";
import { render } from "./render";

export interface GVueNodeStyleProps extends BaseNodeStyleProps {
  component: VNode;
}

export class GVueNode extends Rect {
  static defaultStyleProps: Partial<GVueNodeStyleProps> = {
    halo: false,
    label: false,
    icon: false,
  };

  constructor(options: DisplayObjectConfig<GVueNodeStyleProps>) {
    super({
      ...options,
      style: { ...GVueNode.defaultStyleProps, ...options.style },
    });
  }

  protected drawKeyShape(
    attributes: Required<GVueNodeStyleProps>,
    container: Group,
  ): Group | undefined {
    const { component } = attributes;
    const [width, height] = this.getSize();
    return this.upsert("key", Group, { width, height }, container, {
      afterCreate: (dom) => {
        render(component, dom as unknown as Element);
      },
      afterUpdate: (dom) => {
        render(component, dom as unknown as Element);
      },
    });
  }
}
