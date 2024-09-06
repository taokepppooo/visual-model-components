import path from 'node:path'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const entryFilename = process.env.ENTRY_NAME;
const entryPath = path.resolve(__dirname, process.env.ENTRY_PATH!);

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    vueJsx(),
  ],
  build: {
    rollupOptions: {
      preserveEntrySignatures: 'allow-extension',
      input: {
        [`${entryFilename}`]: entryPath,
      },
      output: {
        dir: 'dist',
        format: 'es',
        entryFileNames: `[name]/index.js`,
        globals: {
          vue: 'Vue'
        },
      },
      external: ['vue', 'ant-design-vue', 'vue-router', 'unocss'],
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
