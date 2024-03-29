export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "MMW Frontend Test",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.2/css/bulma.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",
      },
    ],
    script: [
      {
        type: "module",
        src: "script.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["assets/stylesheets/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/http"],

  http: {
    // proxyHeaders: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
