import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        shim: false
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/colors.scss";',
                },
            },
        },
    },
    css: [
        '@/assets/styles/main.scss',
        '@/assets/styles/var.css',
        '@/assets/font/stylesheet.css',
    ],
})
