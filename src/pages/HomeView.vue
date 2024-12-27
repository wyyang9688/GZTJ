<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
onMounted(() => {
  console.log('mounted HOME')
  ElMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
