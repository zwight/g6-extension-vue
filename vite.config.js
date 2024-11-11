// import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsxPlugin from '@vitejs/plugin-vue-jsx';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })


import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: './__tests__',
  server: {
    port: 8082,
    open: '/',
  },
  plugins: [vue(), vueJsxPlugin(), { name: 'isolation' }],
  resolve: {
    alias: {
      '@zwight/g6-extension-vue': path.resolve(__dirname, './src'),
    },
    dedupe: ['vue']
  },
});