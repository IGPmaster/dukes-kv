export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  
  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // Google Fonts configuration
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
      Roboto: [100, 200, 300, 400, 500, 600, 700]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
    download: true,
    base64: false
  },
  
  // Updated Nitro configuration
  nitro: {
    compatibilityDate: '2024-11-11',
    preset: 'cloudflare-pages',
    output: {
      dir: '.output',
      publicDir: '.output/public'
    },
    prerender: {
      failOnError: false, // More forgiving prerendering
      crawlLinks: true,
      routes: ['/', '/blog'], // Make sure /blog is prerendered
      ignore: [
        '/blog/**' // Ignore dynamic blog routes during prerendering
      ]
    },
    routeRules: {
      '/**': { cors: true, headers: { 'access-control-allow-origin': '*' } }
    }
  },

  // Updated route rules for better dynamic route handling
  routeRules: {
    '/': { prerender: true },
    '/blog': { prerender: true },
    '/blog/**': { 
      ssr: true,
      swr: false,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    }
  },

  // Experimental features
  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true
  },

  // Router configuration
  router: {
    options: {
      strict: false
    }
  },

  css: ['~/assets/main.css'],

  plugins: [
    '~/plugins/language.js',
    '~/plugins/hreflang.js',
  ],

  app: {
    head: {
      title: 'Dukes Casino - Your Casino!',
      meta: [
        { name: 'description', content: "Enjoy seamless mobile gaming with Dukes Casino's mobile slots." }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/bd-faviconV2.png' },
        { 
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  hooks: {
    'app:created': async () => {
      await loadTranslations()
    }
  },

  // Build configuration
  build: {
    transpile: ['vue']
  },

  // Runtime config
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://your-site.com'
    }
  }
});