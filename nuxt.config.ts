import { NuxtConfig } from '@nuxt/types'

const name = process.env.npm_package_name || ''
const isDev = process.env.NODE_ENV !== 'production'
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES' ? { router: { base: `/${name}/` } } : {}

const config: NuxtConfig = {
  dev: isDev,
  telemetry: false,
  mode: 'universal',
  ...routerBase,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/composition-api.ts'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', 'nuxt-typed-vuex'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ['/typed-vuex/'],
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
  },
  // Runtime type checking when running nuxt build
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },
}

export default config
