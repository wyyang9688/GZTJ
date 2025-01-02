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
            <div class="context">
                <div class="lf">
                    <div class="list">
                        <div class="row" v-for="(item, index) in showList" :key="index">
                            <div class="icon vcenter">
                                <div class="imgBox">
                                    <img class="resImg" :src="item.icon" mode="" />
                                </div>
                            </div>
                            <div class="inputShowBox vcenter">
                                <div class="textBox">
                                    <div class="title">{{ item.title }}</div>
                                    <div class="stitle">{{ item.stitle }}</div>
                                </div>
                            </div>
                            <div class="return vcenter" @click="goBack()">
                                <div class="imgBox">
                                    <img class="resImg" src="/images/back.png" mode="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="stitle">
                        文章创作大约2分钟，完成后将发送至您的邮箱：
                    </div>
                    <div class="inputBox">
                        <div class="icon vcenter">
                            <div class="imgBox">
                                <img class="resImg" src="/images/email.png" mode="" />
                            </div>
                        </div>
                        <div class="input myInput vcenter">
                            <el-input class="clearInput" v-model="input" placeholder="请输入邮箱地址" />
                        </div>
                        <div class="icon2 vcenter">
                            <div class="imgBox">
                                <img class="resImg" src="/images/edit.png" mode="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md">
                    <div class="paylist" v-show="payType == 1">
                        <div class="item pick">
                            <div class="icon vcenter">
                                <div class="imgBox">
                                    <img class="resImg" src="/images/wx.png" mode="" />
                                </div>
                            </div>
                            <div class="payname vcenter">
                                微信支付
                            </div>
                        </div>
                        <div class="item m20">
                            <div class="icon vcenter">
                                <div class="imgBox">
                                    <img class="resImg" src="/images/ali.png" mode="" />
                                </div>
                            </div>
                            <div class="payname vcenter">
                                支付宝支付
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rt" v-show="payType == 1">
                    <div class="cBox vcenter">
                        <canvas class="qrcode"></canvas>
                    </div>
                    <div class="info">
                        <div class="num">68.6</div>
                        <div class="text">元</div>
                        <div class="unit">/篇</div>
                    </div>
                </div>
                <div class="rt2" v-show="payType == 2">
                    <div class="status">
                        支付成功！
                    </div>
                    <div class="fpBox">
                        <div class="fp">
                            <div class="ftitle">发票管理：</div>
                            <div class="row">
                                <div class="label">发票抬头：</div>
                                <div class="val">XXX</div>
                            </div>
                            <div class="row">
                                <div class="label">税号：</div>
                                <div class="val"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btm">
            <div class="text">
                ——让每一位知识创造者都能轻松地向世界诠释自己的研究与成果，让专业知识的传播不再受限于领域壁垒——
            </div>
        </div>
        <div class="floatText">
            POPULARIZATION
            <br>
            OF SCIENCE
        </div>
    </div>
</template>

<script setup lang='ts'>
import QRCode from "qrcode";

const route = useRoute()
const router = useRouter()
const input = ref('')
const showList = ref([
    {
        icon: '/images/fwzc.png',
        title: '文件名',
        stitle: '',
    },
    {
        icon: '/images/part.png',
        title: '儿童版',
        stitle: '适合18岁以下的读者',
    },
    {
        icon: '/images/xz.png',
        title: '思想家',
        stitle: '诙谐深刻、辛辣幽默',
    },
])
const payType = ref(1)
// setTimeout(() => {
//     payType.value = 2
// }, 5000)
const goBack = () => {
    router.back()
}
onMounted(() => {
    //
    console.log('main onMounted')
    gcanvas("https://www.baidu.com/https://www.baidu.com/https://www.baidu.com/")


})
const gcanvas = (code: string) => {
    let canvas = document.querySelector(".qrcode");
    QRCode.toCanvas(canvas, code, {
        width: 200,

    });
}
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

    .top {
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

    .mid {
        position: relative;
        z-index: 10;
        padding-top: 197px;
        padding-left: 145px;

        >.stitle {
            font-size: 20px;
            font-weight: bold;
            letter-spacing: 0px;
            line-height: 28.96px;
            color: rgba(7, 7, 7, 0.9);
            text-align: left;
            vertical-align: top;
        }

        .context {
            display: flex;
            justify-content: space-between;

            .lf {
                margin-top: 19px;

                >.list {
                    width: 516px;
                    height: 219px;
                    opacity: 1;
                    border-radius: 16px;
                    background: rgba(255, 255, 255, 1);
                    padding: 25px 24px 0 37px;
                }

                .row {
                    display: flex;
                    justify-content: space-between;

                    &+.row {
                        margin-top: 10px;
                    }

                    .icon {
                        .imgBox {
                            width: 32.4px;
                            height: 36px;
                        }
                    }

                    .inputShowBox {
                        width: 326px;
                        height: 50px;
                        opacity: 1;
                        border-radius: 11.11px;
                        background: rgba(230, 236, 236, 1);

                        .title {
                            font-size: 16px;
                            font-weight: 400;
                            letter-spacing: 0px;
                            line-height: 23.17px;
                            color: rgba(0, 0, 0, 0.7);
                            text-align: center;
                            vertical-align: middle;
                        }

                        .stitle {
                            font-size: 10px;
                            font-weight: 400;
                            letter-spacing: 0px;
                            line-height: 14.48px;
                            color: rgba(116, 121, 130, 1);
                            text-align: center;
                            vertical-align: middle;
                        }
                    }

                    .return {
                        .imgBox {
                            width: 32.76px;
                            height: 32.37px;
                        }
                    }
                }

                >.stitle {
                    margin-top: 17px;
                    font-size: 20px;
                    font-weight: bold;
                    letter-spacing: 0px;
                    line-height: 28.96px;
                    color: rgba(7, 7, 7, 0.9);
                    text-align: left;
                    vertical-align: top;
                }

                >.inputBox {
                    margin-top: 24px;
                    top: 528px;
                    width: 516px;
                    height: 68px;
                    opacity: 1;
                    border-radius: 16px;
                    background: rgba(255, 255, 255, 1);
                    display: flex;
                    justify-content: space-between;

                    .icon {
                        margin-left: 34px;

                        .imgBox {
                            width: 40px;
                            height: 30px;
                        }
                    }

                    .icon2 {
                        margin-right: 16px;

                        .imgBox {
                            width: 37.87px;
                            height: 36.48px;
                        }
                    }
                }
            }

            .md {
                padding-top: 25px;
                width: 285px;
                padding-left: 98px;

                .paylist {
                    .item {
                        left: 759px;
                        top: 246px;
                        width: 160px;
                        height: 55px;
                        opacity: 1;
                        border-radius: 16px;
                        background: rgba(255, 255, 255, 1);


                        display: flex;
                        padding-left: 16px;

                        &.pick {
                            border: 2px solid rgba(48, 110, 111, 1);
                        }

                        .icon {
                            .imgBox {
                                width: 32.01px;
                                height: 28.11px;
                            }
                        }

                        .payname {
                            margin-left: 9px;
                            font-size: 16px;
                            font-weight: 400;
                            letter-spacing: 0px;
                            line-height: 23.17px;
                            color: rgba(0, 0, 0, 1);
                            text-align: center;
                            vertical-align: middle;
                        }

                    }
                }
            }

            .rt {
                margin-top: 20px;
                margin-right: 144px;
                width: 350px;
                height: 355px;
                opacity: 1;
                border-radius: 16px;
                background: rgba(255, 255, 255, 1);

                .cBox {
                    .qrcode {
                        width: 280px !important;
                        height: 280px !important;
                    }
                }

                .info {
                    display: flex;
                    text-align: center;
                    justify-content: center;
                    // margin-left: 25px;
                    margin-top: -10px;

                    .num {
                        font-size: 48px;
                        font-weight: 500;
                        letter-spacing: 0px;
                        line-height: 69.5px;
                        color: rgba(0, 0, 0, 1);
                    }

                    .text {
                        font-size: 44px;
                        font-weight: 400;
                        letter-spacing: 0px;
                        line-height: 69.5px;
                        color: rgba(0, 0, 0, 1);
                    }

                    .unit {
                        font-size: 24px;
                        font-weight: 400;
                        letter-spacing: 0px;
                        line-height: 82px;
                        color: rgba(0, 0, 0, 0.8);
                        text-align: center;
                        vertical-align: middle;

                    }
                }
            }

            .rt2 {
                width: 350px;
                margin-right: 144px;

                .status {
                    font-size: 36px;
                    font-weight: 700;
                    letter-spacing: 0px;
                    line-height: 52.13px;
                    color: rgba(48, 110, 111, 1);
                    text-align: center;
                    vertical-align: middle;
                }

                .fpBox {
                    margin-top: 16px;
                    left: 859px;
                    top: 251px;
                    width: 406px;
                    height: 193px;
                    opacity: 1;
                    border-radius: 16px;
                    background: rgba(255, 255, 255, 1);
                    padding: 21px;

                    .fp {
                        .ftitle {
                            height: 24px;
                            opacity: 1;
                            /** 文本1 */
                            font-size: 16px;
                            font-weight: bold;
                            letter-spacing: 0px;
                            line-height: 23.17px;
                            color: rgba(0, 0, 0, 1);
                            vertical-align: middle;
                        }

                        .row {
                            padding-left: 10px;
                            left: 881px;
                            top: 306px;
                            width: 358px;
                            height: 50px;
                            line-height: 50px;
                            opacity: 1;
                            border-radius: 11.11px;
                            background: rgba(230, 236, 236, 1);
                            margin-top: 10px;
                            display: flex;
                            justify-content: flex-start;
                            overflow: hidden;
                            text-overflow: ellipsis;

                            .label,
                            .val {
                                font-size: 16px;
                                font-weight: 400;
                                letter-spacing: 0px;
                                color: rgba(0, 0, 0, 0.7);
                                vertical-align: middle;
                            }

                            &+.row {}
                        }
                    }
                }
            }
        }
    }

    .btm {
        margin-top: 124px;
        margin-left: 145px;

        .text {
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0px;
            line-height: 23.17px;
            color: rgba(116, 121, 130, 1);
            text-align: left;
            vertical-align: middle;
        }
    }

    .floatText {
        position: absolute;
        z-index: 1;
        left: 727px;
        top: 489px;
        width: 653px;
        height: 209px;
        opacity: 1;
        /** 文本1 */
        font-size: 72px;
        font-weight: 700;
        letter-spacing: 0px;
        line-height: 104.26px;
        color: rgba(225, 139, 31, 0.1);
        text-align: right;
        vertical-align: top;

    }
}
</style>

<style lang="scss">
.myInput {
    width: 100%;

    .clearInput {
        .el-input__wrapper {
            box-shadow: none !important;
        }

        input {
            padding-left: 26px;
            width: 100%;
            border: none;
            outline: none;
            font-size: 20px;
            font-weight: 400;
            letter-spacing: 0px;
            color: rgba(0, 0, 0, 0.7);

        }
    }
}
</style>