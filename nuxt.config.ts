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
      routes: [
        '/',
        '/about', 
        '/blog',
        '/projects',
        '/speaking',
        // Blog post routes
        '/blog/2024-11-12-combat',
        '/blog/2024-8-21-dungball',
        '/blog/2024-8-3-polyspell',
        '/blog/2025-5-18-investor',
        '/blog/2024-12-30-alien'
      ],
      crawlLinks: true,
      ignore: [
        '/api/**'
      ],
      failOnError: false
    },
    // Generate proper file structure for static hosting
    output: {
      publicDir: 'docs'
    }
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
