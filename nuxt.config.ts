// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxtjs/supabase"],
  shadcn: { componentDir: "./components/ui" },
  components: [
    {
      path: "~/components/ui",
      prefix: '',
      extensions: [".vue"]
    },
    {
      path: "~/components",
      extensions: [".vue"],
      prefix: ''
    }
  ],
  supabase: {
    redirectOptions: {
      login: "/auth",
      callback: "/confirm",
      exclude: ['/']
    }
  }
});
