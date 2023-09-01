export default defineNuxtConfig({
  ssr: false,
  devServer: {
    port: Number(process.env.PORT) || 3030
  },
  app: {
    head: {
      title: 'Pomerium demo',
      meta: [{ name: 'description', content: 'Pomerium demo' }]
    }
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'storeToRefs']
      }
    ],
    [
      '@vee-validate/nuxt',
      {
        autoImports: true,
        componentNames: {
          Form: 'VeeForm',
          Field: 'VeeField',
          FieldArray: 'VeeFieldArray',
          ErrorMessage: 'VeeErrorMessage'
        }
      }
    ],
    'nuxt-typed-router'
  ],
  imports: {
    dirs: ['stores', 'utils', 'types', 'constants', 'composables']
  },
  vite: {
    plugins: []
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
      API_BASE_URL: process.env.API_BASE_URL,
      AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
      AUTH0_LOGOUT_URL: process.env.AUTH0_LOGOUT_URL
    }
  },
  experimental: {
    typedPages: true
  },
  vue: {
    defineModel: true,
    propsDestructure: true
  }
})
