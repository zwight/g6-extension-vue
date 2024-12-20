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
import { VueNode } from '@zwight/g6-extension-vue';

register(ExtensionCategory.NODE, 'vue', VueNode);
```

3. Define Node

Vue Node:

JSX Component
```jsx
const VueNode = () => {
  return <div>node</div>;
};
```
OR Vue Component
```vue
<script setup lang="ts">
</script>

<template>
    <div>vue node</div>
</template>
```

4. Use

Use VueNode:

```vue
<script setup lange="tsx">
import VueNode from vueNode.vue;

const graph = new Graph({
  // ... other options
  node: {
    type: 'vue',
    style: {
      component: () => <VueNode />,
    },
  },
});
</script>
```

## Thanks

This plugin draws inspiration from `@antv/g6-extension-react`