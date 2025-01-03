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

<style lang="scss">
.page {
  max-width: 1440px;
  margin: 0 auto;
}

.helpImg {
  width: 400px;
}

.myElMsg {
  .el-button--primary {
    background: rgba(48, 110, 111, 1);
  }
}
</style>
