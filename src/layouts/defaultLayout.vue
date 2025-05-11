<script setup lang="ts">
import { injectKeys } from '@/constants/injectKeys'
import { injectWithInit } from '@/utils/vue/provideAndInject'
import menuBar from '@/components/menuBar.vue'

const layoutName = injectWithInit(injectKeys.layoutNameKey.key, undefined)
</script>

<template>
  <div v-if="layoutName === undefined" class="layout-default">
    <menuBar />
    <p>Default layout active</p>
    <slot />
  </div>
  <slot v-else />
</template>
