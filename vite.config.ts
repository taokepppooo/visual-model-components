import { defineConfig } from 'vite'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  build: {
    rollupOptions: {
      input: {
        'output-encryption-decryption': path.resolve(__dirname, 'src/instance/output-encryption-decryption/src'),
        'output-transform': path.resolve(__dirname, 'src/instance/output-transform/src'),
      },
      output: {
        dir: 'dist',
        entryFileNames: '[name].js',
        format: 'es',
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
