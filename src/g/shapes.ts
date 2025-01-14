import type {
  BaseStyleProps,
  Circle as GCircle,
  CircleStyleProps,
  Ellipse as GEllipse,
  EllipseStyleProps,
  Group as GGroup,
  HTML as GHTML,
  HTMLStyleProps,
  Image as GImage,
  ImageStyleProps,
  Line as GLine,
  LineStyleProps,
  Path as GPath,
  PathStyleProps,
  Polygon as GPolygon,
  PolygonStyleProps,
  Polyline as GPolyline,
  PolylineStyleProps,
  Rect as GRect,
  RectStyleProps,
  Text as GText,
  TextStyleProps,
} from "@antv/g";
import { Shape } from "@antv/g";
import type { GEvents } from "./types";
import { Ref } from "vue";
import { JSX } from "vue/jsx-runtime";

type BaseProps<Element, Prop> = {
  key?: number | string;
  ref?: Ref<Element>;
} & Prop &
  GEvents;

export function ElementOf<Element, Prop, T extends string>(
  type: T,
): (props: BaseProps<Element, Prop>) => JSX.Element {
  return type as any;
}

export const Circle = ElementOf<GCircle, CircleStyleProps, Shape.CIRCLE>(
  Shape.CIRCLE,
);
export const Ellipse = ElementOf<GEllipse, EllipseStyleProps, Shape.ELLIPSE>(
  Shape.ELLIPSE,
);
export const Group = ElementOf<GGroup, BaseStyleProps, Shape.GROUP>(
  Shape.GROUP,
);
export const HTML = ElementOf<GHTML, HTMLStyleProps, Shape.HTML>(Shape.HTML);
export const Image = ElementOf<GImage, ImageStyleProps, Shape.IMAGE>(
  Shape.IMAGE,
);
export const Line = ElementOf<GLine, LineStyleProps, Shape.LINE>(Shape.LINE);
export const Path = ElementOf<GPath, PathStyleProps, Shape.PATH>(Shape.PATH);
export const Polygon = ElementOf<GPolygon, PolygonStyleProps, Shape.POLYGON>(
  Shape.POLYGON,
);
export const Polyline = ElementOf<
  GPolyline,
  PolylineStyleProps,
  Shape.POLYLINE
>(Shape.POLYLINE);
export const Rect = ElementOf<GRect, RectStyleProps, Shape.RECT>(Shape.RECT);
export const Text = ElementOf<GText, TextStyleProps, Shape.TEXT>(Shape.TEXT);
