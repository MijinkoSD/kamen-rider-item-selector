<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { VBtn } from 'vuetify/components'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav id="menu-bar">
        <RouterLink to="/ooo"><vBtn variant="plain">オーズ</vBtn></RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
#menu-bar {
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
}
</style>
