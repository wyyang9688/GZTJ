/// <reference types="vitest" />

import path from 'path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { configDefaults } from 'vitest/config'
import postCssPxToRem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "./import.d.ts",
      eslintrc: {
          enabled: false,
          filepath: "./.eslintrc-auto-import.json",
          globalsPropValue: true
      }
  }),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    ElementPlus({
      defaultLocale: 'zh-cn'
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'e2e/*'],
    root: fileURLToPath(new URL('./', import.meta.url))
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', 'axios']
  },
  base: "./",
  build: {
    sourcemap: true
  },
  server: {
    port: 8080,
    host: '0.0.0.0',
    proxy: {
      '/proxy/': {
        // target: "https://ruyingreview.hentre.top",
                    // target: "https://rysmall.hentre.top",
                    target: "http://172.16.8.58:8089",
                    // target: "https://local.hentre.com",
        changeOrigin: true,
        rewrite: p => p.replace(/^\/proxy/, '')
      },
      '/api-prod/': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: p => p.replace(/^\/api-prod/, '')
      },
      '/api-test/': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: p => p.replace(/^\/api-test/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 144, //pc端建议：192，移动端建议：75；
          propList: ['*', '!border'], // 除 border 外所有px 转 rem // 需要转换的属性，这里选择全部都进行转换
          selectorBlackList: ['norem'], // 过滤掉norem-开头的class，不进行rem转换，这个内容可以不写
          unitPrecision: 5, // 转换后的精度，即小数点位数
          replace: true, // 是否直接更换属性值而不添加备份属性
          mediaQuery: true, // 是否在媒体查询中也转换px为rem
          minPixelValue: 0 // 设置要转换的最小像素值
        })
      ]
    }
  }
})
