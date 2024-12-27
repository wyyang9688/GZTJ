<!--  -->
<template>
    <div class=''>
        main</div>
</template>

<script setup lang='ts'>

const route = useRoute()
onMounted(() => {
    //
    console.log('main onMounted')
})

onActivated(() => {
    //
    console.log('main onActivated')
    console.log(route)
})


</script>
<style lang='scss' scoped></style>