// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'app/',
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  pages: true,
  css: ['@/assets/css/main.css'],
  googleFonts: {
    families: {
      Montserrat: [200, 300, 400, 500, 600, 700, 900]
    }
  }

})