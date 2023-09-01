<script lang="ts" setup>
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
useAsyncData(async () => {
  await userStore.fetchAuthUser()
  console.log(user)
})
</script>
<template>
  <div>Hello {{ user?.name }}</div>
</template>
