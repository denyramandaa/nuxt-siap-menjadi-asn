// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt'
    ],
    vite: {
        server: {
            hmr: {
                 clientPort: 24600,
                 port: 24600
            }
        }  
    },
    imports: {
        dirs: ['stores'],
    },
    components: [
        { path: '~/components/atoms', prefix: 'atoms' },
        { path: '~/components/molecules', prefix: 'molecules' },
        { path: '~/components/organisms', prefix: 'organisms' },
        '~/components',
    ],
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
})
