<!--  -->
<template>
    <div class="homePage">
        <div class="topCover"></div>
        <div class="top">
            <div class="topInnerBox">
                <div class="title">
                    <div class="imgBox">
                        <img class="resImg" src="/images/ks.png" mode="" />
                    </div>
                    <div class="text">格致通解</div>
                </div>
                <div class="stitle">让专业知识不再孤独</div>
                <div class="sstitle">将您的研究成果转化为通俗易懂的科普文章</div>
                <div class="en">
                    POPULARIZATION
                    <br />
                    OF SCIENCE
                </div>
                <div class="item item1">
                    <div class="imgBox">
                        <img class="resImg" src="/images/fwzc.png" mode="" />
                    </div>
                    <div class="text">上传内容</div>
                </div>
                <div class="item item2">
                    <div class="imgBox">
                        <img class="resImg" src="/images/part.png" mode="" />
                    </div>
                    <div class="text">选择受众</div>
                </div>
                <div class="item item3">
                    <div class="imgBox">
                        <img class="resImg" src="/images/xz.png" mode="" />
                    </div>
                    <div class="text">定制风格</div>
                </div>
            </div>
        </div>
        <div class="mid">
            <div class="lf">
                <div class="titleBox">
                    <div class="imgBox">
                        <img class="resImg" src="/images/fwzc.png" mode="" />
                    </div>
                    <div class="text ml10 vcenter">上传内容</div>
                </div>
                <div class="stitle">
                    上传您想要普及的专业内容，我们将帮助您转化为通俗易懂的科普文章
                </div>
                <div class="upload"></div>
            </div>
            <div class="rt">
                <div class="s1"></div>
                <div class="s2"></div>
            </div>
        </div>
        <div class="btm"></div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();
onMounted(() => {
    //
    console.log("Home onMounted");
});
const goToMain = () => {
    router.push({
        name: "main",
    });
};
onActivated(() => {
    //
    console.log("Home onActivated");
});
</script>
<style lang="scss" scoped>
.homePage {
    left: 0px;
    top: 0px;
    width: 1440px;
    width: 100%;
    height: 814px;
    opacity: 1;
    background: linear-gradient(180deg,
            rgba(255, 255, 255, 1) 25.7%,
            rgba(193, 221, 138, 0.1) 80.56%);

    background-image: url("/images/pageBg.png");

    background-size: 100% 100%;

    .topCover {
        position: absolute;
        width: 1440px;
        height: 260px;
        background-image: url("/images/bg.png");
        background-size: 100% 100%;
        // background: conic-gradient(from 90deg at 50% 50%, rgba(239, 244, 244, 1) 5.9%, #D5E2DD 6.18%, transparent 43.05%);
    }

    .top {
        left: 0px;
        top: 0px;
        width: 1440px;
        height: 260px;
        opacity: 1;
        // background: conic-gradient(from 90deg at 50% 50%, rgba(48, 110, 111, 0.38) 5.9%, rgba(165, 210, 61, 0.45) 21.18%, rgba(193, 221, 138, 0.34) 43.05%, rgba(230, 236, 236, 0.34) 56.6%, rgba(255, 255, 255, 0) 97.22%);

        .topInnerBox {
            position: relative;

            .title {
                .imgBox {
                    position: absolute;
                    left: 51px;
                    top: 36px;
                    width: 55px;
                    height: 54px;
                    background: rgba(48, 110, 111, 0.1);
                    border-radius: 50%;
                }

                .text {
                    position: absolute;
                    left: 113px;
                    top: 29px;
                    width: 223px;
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

            .stitle {
                position: absolute;
                left: 75px;
                top: 104px;
                width: 344px;
                height: 47px;
                opacity: 1;
                /** 文本1 */
                font-size: 30px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 43.44px;
                color: rgba(7, 7, 7, 1);
                text-align: left;
                vertical-align: top;
            }

            .sstitle {
                position: absolute;
                left: 75px;
                top: 148px;
                width: 304px;
                height: 20.85px;
                opacity: 1;
                /** 文本1 */
                font-size: 16px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 23.17px;
                color: rgba(116, 121, 130, 1);
                text-align: left;
                vertical-align: top;
            }

            .en {
                position: absolute;
                left: 802px;
                top: 108px;
                width: 586px;
                height: 140px;
                opacity: 1;
                /** 文本1 */
                font-size: 48px;
                font-weight: 700;
                letter-spacing: 0px;
                line-height: 69.5px;
                color: rgba(245, 163, 64, 0.5);
                text-align: right;
                vertical-align: top;
            }

            .item {
                position: absolute;
                left: 83px;
                top: 204px;
                min-width: 36px;
                height: 36px;
                opacity: 1;
                display: flex;

                .text {
                    margin-left: 18px;
                    left: 137px;
                    top: 205px;
                    width: 90px;
                    height: 30px;
                    opacity: 1;
                    /** 文本1 */
                    font-size: 16px;
                    font-weight: 500;
                    letter-spacing: 0px;
                    line-height: 23.17px;
                    color: rgba(48, 110, 111, 1);
                    text-align: left;
                    vertical-align: top;
                }
            }

            .item2 {
                left: 300px;
                top: 206px;
                height: 36px;
                opacity: 1;
            }

            .item3 {
                left: 523px;
                height: 35.78px;
                opacity: 1;
                // background: rgba(165, 210, 61, 1);
            }
        }
    }

    .mid {
        margin-left: 51px;
        margin-top: 40px;

        .lf {
            width: 860px;
            height: 407px;
            opacity: 1;
            border-radius: 16px;
            background: rgba(250, 250, 250, 1);
            padding: 31px 23px;

            // background-color: #fff;
            .titleBox {
                display: flex;

                .imgBox {
                    width: 30.06px;
                    height: 34.2px;
                    opacity: 1;
                }

                .text {
                    left: 135px;
                    top: 325px;
                    width: 80px;
                    opacity: 1;
                    /** 文本1 */
                    font-size: 20px;
                    font-weight: 700;
                    letter-spacing: 0px;
                    line-height: 28.96px;
                    color: rgba(7, 7, 7, 1);
                    text-align: left;
                    vertical-align: top;
                }
            }

            .stitle {
                left: 82px;
                top: 365px;
                margin-top: 4px;
                width: 434px;
                height: 18.24px;
                opacity: 1;
                /** 文本1 */
                font-size: 14px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 20.27px;
                color: rgba(116, 121, 130, 1);
                text-align: left;
                vertical-align: top;
            }
        }
    }
}
</style>
