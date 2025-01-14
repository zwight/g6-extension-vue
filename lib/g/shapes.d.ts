import type { BaseStyleProps, Circle as GCircle, CircleStyleProps, Ellipse as GEllipse, EllipseStyleProps, Group as GGroup, HTML as GHTML, HTMLStyleProps, Image as GImage, ImageStyleProps, Line as GLine, LineStyleProps, Path as GPath, PathStyleProps, Polygon as GPolygon, PolygonStyleProps, Polyline as GPolyline, PolylineStyleProps, Rect as GRect, RectStyleProps, Text as GText, TextStyleProps } from "@antv/g";
import type { GEvents } from "./types";
import { Ref } from "vue";
import { JSX } from "vue/jsx-runtime";
type BaseProps<Element, Prop> = {
    key?: number | string;
    ref?: Ref<Element>;
} & Prop & GEvents;
export declare function ElementOf<Element, Prop, T extends string>(type: T): (props: BaseProps<Element, Prop>) => JSX.Element;
export declare const Circle: (props: BaseProps<GCircle, CircleStyleProps>) => JSX.Element;
export declare const Ellipse: (props: BaseProps<GEllipse, EllipseStyleProps>) => JSX.Element;
export declare const Group: (props: BaseProps<GGroup, BaseStyleProps>) => JSX.Element;
export declare const HTML: (props: BaseProps<GHTML, HTMLStyleProps>) => JSX.Element;
export declare const Image: (props: BaseProps<GImage, ImageStyleProps>) => JSX.Element;
export declare const Line: (props: BaseProps<GLine, LineStyleProps>) => JSX.Element;
export declare const Path: (props: BaseProps<GPath, PathStyleProps>) => JSX.Element;
export declare const Polygon: (props: BaseProps<GPolygon, PolygonStyleProps>) => JSX.Element;
export declare const Polyline: (props: BaseProps<GPolyline, PolylineStyleProps>) => JSX.Element;
export declare const Rect: (props: BaseProps<GRect, RectStyleProps>) => JSX.Element;
export declare const Text: (props: BaseProps<GText, TextStyleProps>) => JSX.Element;
export {};
