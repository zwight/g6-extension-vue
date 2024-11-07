import type { HTMLStyleProps as GHTMLStyleProps } from "@antv/g";
import type { BaseNodeStyleProps, HTMLStyleProps } from "@antv/g6";
import { HTML } from "@antv/g6";
import { VNode } from "vue";
export interface VueNodeStyleProps extends BaseNodeStyleProps {
    component: VNode;
}
export declare class VueNode extends HTML {
    protected getKeyStyle(attributes: Required<HTMLStyleProps>): GHTMLStyleProps;
    connectedCallback(): void;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    destroy(): void;
}
