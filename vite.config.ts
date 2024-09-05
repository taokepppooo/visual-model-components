import { defineConfig } from 'vite'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const entryName = process.env.ENTRY_NAME!
  .replace(/-([a-z])/g, (g) => g[1].toUpperCase())
  .replace(/^([a-z])/g, (g) => g.toUpperCase());

const entryFilename = process.env.ENTRY_NAME;
const entryPath = path.resolve(__dirname, process.env.ENTRY_PATH || 'src/default/index.ts');

console.log('entryName:', entryName);
console.log('entryPath:', entryPath);

export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  build: {
    lib: {
      entry: entryPath,
      name: entryName,
      formats: ['es'],
      fileName: (format) => `${entryFilename}.${format}.js`,
    },
    rollupOptions: {
      output: {
        dir: 'dist',
        globals: {
          vue: 'Vue'
        },
      },
      external: ['vue', 'ant-design-vue', 'vue-router'],
    }
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
