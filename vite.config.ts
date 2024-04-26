import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
// @ts-ignore
import {defineConfig, loadEnv} from 'vite'

// https://vitejs.dev/config/
export default ({mode}: any) => defineConfig({
    base: './',
    server: {
        port: 3000,
        open: true,
        proxy: {
            '/api': {
                target: loadEnv(mode, ''),
                changeOrigin: true
            }
        }
    },
    plugins: [vue()],
    resolve: {alias: {'@': resolve(__dirname, './src')}},
})