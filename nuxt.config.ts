import { NuxtConfig } from '@nuxt/types';
import { description, name } from './package.json';

const TITLE = 'Smart Foreman';
const isDev = process.env.NODE_ENV !== 'production';
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? { router: { base: `/${name}/` } }
    : {};

const config: NuxtConfig = {
  mode: 'universal',
  target: 'server',
  telemetry: false,
  dev: isDev,
  ...routerBase,
  // https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config/
  publicRuntimeConfig: {},
  privateRuntimeConfig: {},
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'prefetch',
        as: 'font',
        href: 'https://fonts.googleapis.com/css?family=Roboto',
      },
    ],
  },
  css: [],
  plugins: ['~/plugins/composition-api.ts', '~/plugins/vee-validate.ts'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: {
    dirs: [
      '~/components',
      {
        path: '~/components/app/',
        prefix: 'App',
      },
      {
        path: '~/components/base/',
        prefix: 'Base',
      },
      {
        path: '~/components/layout/',
        prefix: 'Layout',
      },
      {
        path: '~/components/form/',
        prefix: 'Form',
      },
      {
        path: '~/components/VinDecoder/',
        prefix: 'VinDecoder',
      },
    ],
  },
  router: {
    middleware: ['auth'],
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    'nuxt-typed-vuex',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/auth-next', '@nuxtjs/axios', '@nuxtjs/pwa'],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extractCSS: !isDev,
    transpile: [
      '/typed-vuex/',
      'vee-validate/dist/rules',
      'vuetify/lib/util/colors',
    ],
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
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    // customVariables: ['~/assets/variables.scss'],
    defaultAssets: false,
    optionsPath: '~/plugins/vuetify.ts',
  },
};

export default config;
