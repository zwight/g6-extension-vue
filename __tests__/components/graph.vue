<script setup lang="ts">
import type { NodeData, TreeData } from "@antv/g6";
import { ExtensionCategory, Graph, register, treeToGraphData } from "@antv/g6";
import { VueNode } from "@zwight/g6-extension-vue";
import vueEle from "./vueEle.vue";
import Node from "./vue-node";
import { h, onMounted } from "vue";

register(ExtensionCategory.NODE, "vue", VueNode);

const initGraph = async () => {
  const res = await fetch(
    "https://assets.antv.antgroup.com/g6/decision-tree.json",
  ).then((res) => res.json());
  const data = treeToGraphData(res, {
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
      type: "vue",
      style: {
        size: [200, 60],
        component: (data: any) => {
          console.log(data);
          // return Node({})
          return h(vueEle, { data });
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
