import ky from 'ky-universal'
export default function defineNuxtPlugin() {
  const runtimeConfig = useRuntimeConfig()
  console.log(runtimeConfig)

  const apis: any = {
    fn: createAPI({
      apiBaseUrl: runtimeConfig.public.API_BASE_URL,
      logoutUrl: ''
    })
  }

  return {
    provide: { apis }
  }
}

function createAPI(config: { logoutUrl: string; apiBaseUrl: string }) {
  return ky.create({
    prefixUrl: config.apiBaseUrl,
    timeout: 30000,
    credentials: 'include',
    hooks: {
      afterResponse: [
        async (_, req, response) => {
          if (response.status === 401) {
            window.location.href = config.logoutUrl

            return
          }

          if (response.status === 403) {
            showError({
              statusCode: 403
            })

            return
          }

          if (!response.ok) {
            console.log('fail')
          }
          return response
        }
      ]
    }
  })
}
