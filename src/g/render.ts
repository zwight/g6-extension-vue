import {
  App,
  ComponentInternalInstance,
  createRenderer,
  ElementNamespace,
  VNode,
} from "vue";
import {
  Canvas,
  Circle,
  Element,
  Ellipse,
  Group,
  HTML,
  Image,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Shape,
  Text,
} from "@antv/g";
import { updatePropSingle } from "./processProps";
const customRender = createRenderer<VNode, Element>({
  patchProp: function (
    el: any,
    key: string,
    prevValue: any,
    nextValue: any,
    namespace?: ElementNamespace,
    parentComponent?: ComponentInternalInstance | null,
  ): void {
    updatePropSingle(el, key, nextValue, prevValue);
  },
  insert: function (el: any, parent: any, anchor?: any): void {
    parent.appendChild(el);
  },
  remove: function (el: any): void {
    const parent = el.parent;
    parent?.removeChild(el);
  },
  createElement: function (
    type: string,
    namespace?: ElementNamespace,
    isCustomizedBuiltIn?: string,
    vnodeProps?: any,
  ): any {
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
  createText: function (text: string): any {
    const ele = new Text();
    ele.textContent = text;
    return ele;
  },
  createComment: function (text: string): any {
    const ele = new Text();
    ele.textContent = text;
    return ele;
  },
  setText: function (node: any, text: string): void {
    node.nodeValue = text;
  },
  setElementText: function (node: Element, text: string): void {
    node.textContent = text;
  },
  parentNode: function (node: any): Element | null {
    return node.parentNode;
  },
  nextSibling: function (node: any) {
    return node.nextSibling;
  },
});
const TargetContainerWeakMap = new WeakMap<Element | Canvas, App<Element>>();

export const render = (
  component: VNode,
  target: Element,
  callback?: (() => void) | null,
) => {
  const targetApp = TargetContainerWeakMap.get(target);

  const app = targetApp || customRender.createApp(component as any);
  TargetContainerWeakMap.set(target, app);

  if (targetApp) {
    customRender.render(component, target);
  } else {
    app.mount(target);
  }
};
