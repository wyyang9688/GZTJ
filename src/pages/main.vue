<!--  -->
<template>
    <div class='mainPage'>
        <div class="top">
            <div class="title">
                <div class="imgBox">
                    <img class="resImg" src="/images/ks.png" mode="" />
                </div>
                <div class="text">格致通解</div>
                <div class="help pointer">
                    <div class="imgBox vcenter">
                        <img class="resImg" src="/images/help.png" mode="" />
                    </div>
                    <div class="text ml10 vcenter">联系客服</div>
                </div>
            </div>

        </div>
        <div class="mid">
            <div class="stitle">
                科普文创作，预计1500字左右：
            </div>
        </div>
        <!-- <canvas class="qrcode"></canvas> -->
    </div>
</template>

<script setup lang='ts'>
import QRCode from "qrcode";

const route = useRoute()
onMounted(() => {
    //
    console.log('main onMounted')

    let canvas = document.querySelector(".qrcode");
    QRCode.toCanvas(canvas, "https://www.baidu.com/", {
        width: 200,

    });
})

onActivated(() => {
    //
    console.log('main onActivated')
    console.log(route)
})


</script>
<style lang='scss' scoped>
.mainPage {
    width: 1440px;
    width: 100%;
    height: 814px;
    opacity: 1;
    background-image: url("/images/pageBg2.png");

    background-size: 100% 100%;

    .title {
        >.imgBox {
            position: absolute;
            left: 145px;
            top: 102px;
            width: 55px;
            height: 53px;
            background: rgba(48, 110, 111, 0.1);
            border-radius: 50%;
            padding: 10px;
        }

        .text {
            position: absolute;
            left: 210px;
            top: 94px;
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

        .help {
            position: absolute;
            left: 412px;
            top: 117px;
            width: 32px;
            height: 32px;

            .text {
                position: absolute;
                left: -5px;
                top: 10px;
                width: 125px;
                height: 21px;
                opacity: 1;
                /** 文本1 */
                font-size: 14px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 20.27px;
                text-decoration-line: underline;
                color: rgba(116, 121, 130, 1);
                text-align: left;
                vertical-align: middle;

            }
        }
    }
}
</style>