// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/mdc',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt'
  ],

  // MDC configuration
  mdc: {
    highlight: {
      theme: 'github-dark'
    }
  },

  // Static site generation for GitHub Pages
  ssr: true,

  devtools: {
    enabled: true
  },

  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/'
  },

  // GitHub Pages configuration
  nitro: {
    prerender: {
      routes: ['/', '/about', '/blog', '/projects', '/speaking'],
      crawlLinks: true
    }
  },

  // Output directory for GitHub Pages
  output: {
    dir: 'docs'
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-11-01',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
