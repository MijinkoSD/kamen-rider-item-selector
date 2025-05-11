import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      dts: './auto/typed-router.d.ts',
      routesFolder: './src/pages',
    }),
    vue(),
    vueDevTools(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
      ],
      dts: './auto/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './auto/.eslintrc-auto-import.mjs',
      },
    }),
  ],
  build: {
    target: [
      'es2022',
      'edge89',
      'firefox89',
      'chrome89',
      'safari15',
    ],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // この設定が無いとルートURLが変わった際に開けなくなる
  base: './',
})
