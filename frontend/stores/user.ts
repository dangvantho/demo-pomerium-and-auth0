export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const { $apis } = useNuxtApp()

  const fetchAuthUser = async () => {
    console.log('fetch user')
    user.value = await $apis.fn.get('me').json()
    console.log('fetch user donre')
  }

  return { user, fetchAuthUser }
})
