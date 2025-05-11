<script setup lang="ts">
import router from '@/router'

onMounted(() => {
  console.log('index mounted')
  router.push({ name: '/ooo' })
})
</script>

<template>
  <div />
</template>
