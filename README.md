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
import { VueNode } from '@antvzwight/g6-extension-vue';

register(ExtensionCategory.NODE, 'vue', VueNode);
```

3. Define Node

Vue Node:

```jsx
const VueNode = () => {
  return <div>node</div>;
};
```
```vue
<script setup lang="ts">
</script>

<template>
    <div>vue node</div>
</template>
```

4. Use

Use VueNode:

```jsx
const graph = new Graph({
  // ... other options
  node: {
    type: 'vue',
    style: {
      component: () => <VueNode />,
    },
  },
});
```

## Thanks

This plugin draws inspiration from `@antv/g6-extension-react`