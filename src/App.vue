<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component" :key="route.name" v-if="route.meta.keepAlive"></component>
    </keep-alive>
    <component :is="Component" :key="route.name" v-if="!route.meta.keepAlive"></component>
  </router-view>
</template>

<style scoped></style>
