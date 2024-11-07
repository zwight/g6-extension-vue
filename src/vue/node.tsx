import type { HTMLStyleProps as GHTMLStyleProps } from "@antv/g";
import type { BaseNodeStyleProps, HTMLStyleProps } from "@antv/g6";
import { HTML } from "@antv/g6";
import { render, VNode } from "vue";

export interface VueNodeStyleProps extends BaseNodeStyleProps {
  component: VNode;
}

export class VueNode extends HTML {
  protected getKeyStyle(attributes: Required<HTMLStyleProps>): GHTMLStyleProps {
    return { ...super.getKeyStyle(attributes) };
  }

  public connectedCallback(): void {
    super.connectedCallback();
    const { component } = this.attributes as unknown as VueNodeStyleProps;
    render(component, this.getDomElement());
  }

  public attributeChangedCallback(
    name: any,
    oldValue: any,
    newValue: any,
  ): void {
    if (name === "component" && oldValue !== newValue) {
      render(
        (this.attributes as unknown as VueNodeStyleProps).component,
        this.getDomElement(),
      );
    }
  }

  public destroy(): void {
    this.getDomElement().remove();
    super.destroy();
  }
}
