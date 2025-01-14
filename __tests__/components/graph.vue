<script setup lang="tsx">
import type { NodeData, TreeData } from "@antv/g6";
import { ExtensionCategory, Graph, register, treeToGraphData } from "@antv/g6";
import { VueNode, GVueNode } from "@zwight/g6-extension-vue";
import VueEle from "./vueEle.vue";
import Node from "./vue-node";
import VueGNode from "./vueGNode";
import { h, onMounted, ref } from "vue";

register(ExtensionCategory.NODE, "vue", VueNode);
register(ExtensionCategory.NODE, "g", GVueNode);

const isG = true;

const initGraph = async () => {
  const res = await fetch(
    "https://assets.antv.antgroup.com/g6/decision-tree.json",
  ).then((res) => res.json());
  const data = isG
    ? {
        nodes: [
          {
            id: "node-1",
            data: {
              name: "Module",
              type: "module",
              status: "success",
              success: 90,
              time: 58,
              failure: 8,
            },
            style: { x: 100, y: 100 },
          },
          {
            id: "node-2",
            data: {
              name: "Process",
              type: "process",
              status: "error",
              success: 11,
              time: 12,
              failure: 26,
            },
            style: { x: 300, y: 100 },
          },
        ],
        edges: [{ source: "node-1", target: "node-2" }],
      }
    : treeToGraphData(res, {
        getNodeData: (datum: TreeData, depth: number) => {
          if (!datum.style) datum.style = {};
          // 隐藏三级以上节点
          datum.style.collapsed = depth >= 2;
          if (!datum.children) return datum as NodeData;
          const { children, ...restDatum } = datum;
          return { ...restDatum, children: children.map((child) => child.id) };
        },
      });
  const graph = new Graph({
    container: "container",
    autoResize: true,
    autoFit: "center",
    zoom: 1,
    data: data,
    animation: {
      delay: 0,
      duration: 300,
    },
    node: {
      type: isG ? "g" : "vue",
      style: {
        size: [200, 60],
        component: (data: any) => {
          // console.log(data);
          return isG ? (
            <VueGNode data={data} size={[200, 60]} />
          ) : (
            <VueEle data={data} />
          );
        },
      },
    },
    edge: {
      type: "polyline",
      style: {
        router: {
          type: "orth",
        },
        stroke: "#CED4D9",
      },
    },
    layout: {
      type: "dendrogram",
      direction: "LR", // H / V / LR / RL / TB / BT
      nodeSep: 70,
      rankSep: 250,
    },
    behaviors: ["zoom-canvas", "drag-canvas"],
    // ... 其他配置项
  });
  graph.render();
};
onMounted(() => {
  initGraph();
});
</script>

<template>
  <div id="container"></div>
</template>

<style lang="less">
#container {
  width: 1000px;
  height: 600px;
  canvas {
    left: 0;
    right: 0;
  }
}
</style>
