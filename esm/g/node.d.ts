import type { DisplayObjectConfig } from "@antv/g";
import { Group } from "@antv/g";
import type { BaseNodeStyleProps } from "@antv/g6";
import { Rect } from "@antv/g6";
import { VNode } from "vue";
export interface GVueNodeStyleProps extends BaseNodeStyleProps {
    component: VNode;
}
export declare class GVueNode extends Rect {
    static defaultStyleProps: Partial<GVueNodeStyleProps>;
    constructor(options: DisplayObjectConfig<GVueNodeStyleProps>);
    protected drawKeyShape(attributes: Required<GVueNodeStyleProps>, container: Group): Group | undefined;
}
