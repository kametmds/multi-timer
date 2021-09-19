export default {
  head: {
    title: 'multimer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/css/main.css',
  ],
  plugins: [
    '@/plugins/StopWatch.js'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/vuetify',
    'nuxt-fontawesome'
  ],
  axios: {},
  content: {},
  build: {
  },
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons", // Solidアイコン
        icons: ["fas"],
      },
      {
        set: "@fortawesome/free-brands-svg-icons", // Brandアイコン
        icons: ["fab"],
      },
    ]
  }
}
