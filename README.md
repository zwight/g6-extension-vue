## Vue extension for G6

This extension allows you to define G6 node by Vue component and JSX syntax.

## Usage

1. Install

```bash
npm install @zwight/g6-extension-vue
```

2. Import and Register

```js
import { ExtensionCategory, register } from '@antv/g6';
import { VueNode, GVueNode } from '@zwight/g6-extension-vue';

register(ExtensionCategory.NODE, 'vue', VueNode);
register(ExtensionCategory.NODE, 'g', GVueNode);
```

3. Define Node

Vue Node:

JSX Component
```jsx
const VueComponent = () => {
  return <div>component</div>;
};
```
OR Vue Component
```vue
<script setup lang="ts">
</script>

<template>
    <div>vue component</div>
</template>
```

G Node:
```jsx
import { Group, Rect, Text } from '@zwight/g6-extension-vue';

const GComponent = () => {
  return <Group>
    <Rect width={100} height={100}></Rect>
    <Text text={"node"} />
  <Group>
};
```

4. Use

Use VueNode:

```vue
<script setup lange="tsx">
import VueComponent from vueComponent.vue;
import { ExtensionCategory, register } from '@antv/g6';
import { VueNode } from '@zwight/g6-extension-vue';

register(ExtensionCategory.NODE, 'vue', VueNode);

const graph = new Graph({
  // ... other options
  node: {
    type: 'vue',
    style: {
      component: () => <VueComponent />,
    },
  },
});
</script>
```

Use GNode:
```vue
<script setup lange="tsx">
import GComponent from gComponent;
import { ExtensionCategory, register } from '@antv/g6';
import { GVueNode } from "@zwight/g6-extension-vue";
register(ExtensionCategory.NODE, 'g', GVueNode);

const graph = new Graph({
  // ... other options
  node: {
    type: 'g',
    style: {
      component: () => <GComponent />,
    },
  },
});
</script>
```

## Thanks

This plugin draws inspiration from `@antv/g6-extension-react`