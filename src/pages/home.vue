<!--  -->
<template>
    <div class='homePage'>
        <div class="w100">
            Home</div>
        <div class="rem1">
            格致通解 Home</div>
    </div>
</template>

<script setup lang='ts'>

onMounted(() => {
    //
    console.log('home')
})


</script>
<style lang='scss' scoped>
.homePage {

    .w100 {
        width: 1440px;
        background-color: gray;
    }

    .rem1 {
        left: 113px;
        top: 27px;
        width: 1440px;
        background-color: red;
        height: 55px;
        opacity: 1;
        /** 文本1 */
        font-size: 44px;
        font-weight: 700;
        letter-spacing: 0px;
        line-height: 63.71px;
        color: rgba(48, 110, 111, 1);
        text-align: left;
        vertical-align: top;
    }
}
</style>