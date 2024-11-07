<script setup lang="ts">
import { computed, defineProps } from "vue";

const props = defineProps<{
  data: any;
}>();
const COLORS: any = {
  B: "#1783FF",
  R: "#F46649",
  Y: "#DB9D0D",
  G: "#60C42D",
  DI: "#A7A7A7",
};
const color = computed(() => COLORS[props.data.status]);
const percent = computed(() => `${Number(props.data.rate) * 100}%`);
</script>

<template>
  <div class="node-container">
    <div class="node-title">{{ props.data.name }}</div>
    <div class="node-price">
      <div class="node-price__left">
        {{ props.data.label }}<span>{{ props.data.currency }}</span>
      </div>
      <div class="node-price__right">
        {{ props.data.variableName }}
        <span
          :style="{
            color,
          }"
        >
          <span
            class="icon"
            :style="{
              transform: `rotate(${props.data.variableUp ? 0 : 180}deg)`,
            }"
          ></span>
          {{ `${((Number(props.data.variableValue) || 0) * 100).toFixed(2)}%` }}
        </span>
      </div>
    </div>
    <div
      class="node-process-bar"
      :style="{
        background: `linear-gradient(to right, ${color} ${percent}, #CED4D9 ${percent})`,
      }"
    ></div>
    {{ color }}{{ percent }}
  </div>
</template>

<style lang="less">
@import url("//at.alicdn.com/t/a/font_470089_8hnbbf8n4u8.css");

.node-container {
  border: 1px solid #ced4d9;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  padding: 8px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  .node-process-bar {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
  }

  .node-title {
    width: 100%;
    font-size: 12;
    cursor: pointer;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .node-price {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    &__left {
      font-size: 16px;

      span {
        font-size: 12px;
        margin-left: 4px;
        color: rgba(0, 0, 0, 0.75);
      }
    }

    &__right {
      color: rgba(0, 0, 0, 0.45);
      font-size: 12px;

      & > span {
        margin-left: 16px;
        position: relative;
        .icon {
          font-size: 14px;
          font-family: "iconfont" !important;
          font-style: normal;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          position: absolute;
          left: -16px;
          width: 16px;
          height: 16px;
          &:before {
            content: "\e62d";
          }
        }
      }
    }
  }
}
</style>
