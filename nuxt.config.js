import axios from "axios"
let dynamicRoutes = () => {
  const routes = axios
    .get("https://css-tricks.com/wp-json/wp/v2/posts?page=1&per_page=20")
    .then(res => {
      return res.data.map(post => `/blog/${post.slug}`)
    })
  console.log(routes)
  return routes
}

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://use.typekit.net/fpw0lar.css'"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/mixins.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/posts.server.js",
    "~/plugins/tags.server.js",
    "~/plugins/dateformat.js"
  ],
  generate: {
    routes: dynamicRoutes
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
    // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
    vuetify: {
      customVariables: ['~/assets/variables.scss'],
      theme: {
        light: true,
        themes: {
          light: {
            primary: '#00579E', // a color that is not in the default material colors palette
            accent: '#235fa0',
            secondary: '#208495',
            info: '#1976D2',
            error: '#FF5252',
            success: '#4CAF50',
            warning: '#FFC107',
          },
        },
      },
    },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
