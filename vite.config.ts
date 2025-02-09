import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr({
      svgrOptions: {
        icon: true
      }
    })],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      constants: '/src/constants',
      pages: '/src/pages',
      styles: '/src/styles',
      types: '/src/types',
      '@': '/src'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/utils/functions" as *;`,
      }
    }
  }
})
