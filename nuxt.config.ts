// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    vite: {
        server: {
            hmr: {
                 clientPort: 24600,
                 port: 24600
            }
        }  
    }
})
