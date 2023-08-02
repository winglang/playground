import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { viteExternalsPlugin } from 'vite-plugin-externals'

const copy = viteStaticCopy({
  targets: [
    // {
    //   src: '../../packages/console-build/dist/console.ui.js',
    //   dest: 'console'
    // },
    // {
    //   src: '../../packages/console-build/dist/console.ui.css',
    //   dest: 'console'
    // },
    {
      src: './temp/console.ui.js',
      dest: 'console'
    },
    {
      src: './temp/console.ui.css',
      dest: 'console'
    }
  ]
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copy as any, viteExternalsPlugin({
    react: 'React',
    'react-dom': 'ReactDOM',
  })],
})