<!--  -->
<template>
    <div class='mainPage page'>
        <div class="top">
            <div class="title">
                <div class="imgBox">
                    <img class="resImg" src="/images/ks.png" mode="" />
                </div>
                <div class="text">格致通解</div>
                <div class="help pointer" ref="helpRef" @click="callHelp">
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
                            <div class="return vcenter pointer" @click="goBack()">
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
                            <el-input class="clearInput" ref="inputRef" clearable
                                :title="isDisabledEdit ? '请点击右侧图标进行编辑' : ''" :disabled="isDisabledEdit" v-model="email"
                                placeholder="请输入邮箱地址" />
                        </div>
                        <div class="icon2 vcenter">
                            <div v-show="isDisabledEdit" class="imgBox pointer" @click="emailEditSwitch">
                                <img class="resImg" src="/images/edit.png" mode="" />

                            </div>
                            <div v-show="!isDisabledEdit" class="imgBox pointer" @click="emailEditCheck">
                                <img class="resImg" src="/images/check.png" mode="" />

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
                        <!-- <div class="item m20">
                            <div class="icon vcenter">
                                <div class="imgBox">
                                    <img class="resImg" src="/images/ali.png" mode="" />
                                </div>
                            </div>
                            <div class="payname vcenter">
                                支付宝支付
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="rt" v-show="payType == 1">
                    <div class="cBox vcenter">
                        <div class="reload vcenter pointer" v-if="isShowReload" @click="reloadQr">
                            <div class="box">
                                <div class="icon center">
                                    <el-icon size="60">
                                        <RefreshRight />
                                    </el-icon>
                                </div>
                                <!-- <div class="text center f18">确认邮箱地址</div> -->
                                <div class="text center f18">点击刷新二维码</div>
                            </div>
                        </div>
                        <div class="reload vcenter pointer" v-if="isShowEditMsg" @click="checkMsg">
                            <div class="box">
                                <div class="icon center">
                                    <el-icon size="60">
                                        <Edit />
                                    </el-icon>
                                </div>
                                <!-- <div class="text center f18">确认邮箱地址</div> -->
                                <div class="text center f18">请先确认好邮箱地址</div>
                            </div>
                        </div>
                        <canvas class="qrcode"></canvas>
                    </div>
                    <div class="info" v-if="prdItem?.info?.amount">
                        <div class="num">{{ prdItem?.info?.amount }}</div>
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
                            <div class="btnG center">
                                <div class="btn vcenter m10" style="left: 1003px;
top: 407px;
width: 118px;
height: 40px;
opacity: 1;
border-radius: 8.89px;
background: rgba(48, 110, 111, 1);font-size: 16px;
font-weight: 700;
letter-spacing: 0px;
color: rgba(255, 255, 255, 1);
text-align: center;
vertical-align: middle;
">
                                    确定
                                </div>
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



        <el-popover ref="popoverRef" :virtual-ref="helpRef" :popper-style="{ width: 'fitContent' }" trigger="click"
            title="" virtual-triggering>
            <div class="imgBox vcenter" style="width: 400px;">
                <img class="resImg" src="/images/wxkf.png" mode="" />
            </div>
        </el-popover>
    </div>
</template>

<script setup lang='ts'>
import { service } from '@/apis/index'
import QRCode from "qrcode";
const helpRef = ref()
const popoverRef = ref()
const callHelp = () => {
    unref(popoverRef).popperRef?.delayHide?.()
}
const route = useRoute()
const router = useRouter()
const email = ref<any>('')
const isDisabledEdit = ref(true)

const inputRef = ref()
const isShowEditMsg = ref(false)
const emailEditSwitch = () => {
    if (isCanEditEmail) {
        isDisabledEdit.value = false
        inputRef.value.focus();
        isShowEditMsg.value = true
    } else {
        ElMessage({
            message: '邮件地址已锁定，不能更改',
            showClose: true,
            type: 'warning'
        })
    }

}
const checkMsg = () => {
    ElMessage({
        message: '请先确认好邮箱地址',
        showClose: true,
        type: 'warning'
    })
    inputRef.value.focus();
}
const emailEditCheck = () => {
    let reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
    if (reg.test(email.value)) {

        isDisabledEdit.value = true
        isShowEditMsg.value = false
    } else {
        ElMessage({
            message: '请填写正确的邮件地址',
            showClose: true,
            type: 'warning'
        })
    }
}
const prdItem = ref<any>({
    id: '',
    info: {
        amount: 0
    }
})
const isCanEditEmail = ref(true)
const isShowReload = ref(false)
const orderId = ref('')
const generationGZTJ = async () => {
    payType.value = 2
    isCanEditEmail.value = false
    isDisabledEdit.value = true
    const res = await service.generationGZTJ({
        id: localStorage.getItem('cid'),//上传文件的id
        uid: localStorage.getItem('uid'),
        email: email.value,
        tid: localStorage.getItem('tid'),
        style: showList.value[2].val
    })
    if (res.code == 0) {

    }
}
const queryOrder = async () => {
    const res = await service.queryOrderById(orderId.value)
    if (res.code == 0) {
        if (res.data.status == 3) {

            generationGZTJ()
            closeReQuery()
        }
    }
}
const closeReQuery = () => {
    console.log('closeReQuery')
    if (timer.value) {
        clearInterval(timer.value)
        timer.value = null
    }
}
onUnmounted(() => {
    closeReQuery()
})
const timer = ref<any>(null)
const reQueryOrder = () => {
    if (timer.value) {
        clearInterval(timer.value)
        timer.value = null
    }
    timer.value = setInterval(() => {
        queryOrder()
    }, 3000)
}
const getPayUrl = async () => {
    const res = await service.getPayUrl({
        id: prdItem.value.id,
        uid: localStorage.getItem('uid'),
        payType: 15
    })
    if (res.code == 0) {
        gcanvas(res.data.qrcode)
        orderId.value = res.data.orderId
        reQueryOrder()
    }
}
const getPrd = async () => {
    const res = await service.getPrd({})
    if (res.code == 0 && res.data?.length) {
        prdItem.value = res.data[0]
        getPayUrl()
    } else {
        ElMessage({
            message: '获取系统信息失败，请稍后重试',
            showClose: true,
            type: 'warning'
        })
    }
}
const reloadQr = () => {
    getPayUrl()
}
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
        val: ''
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
    checkRouteQuery()
    getPrd()


})
const gcanvas = (code: string) => {
    let canvas = document.querySelector(".qrcode");
    QRCode.toCanvas(canvas, code, {
        width: 200,

    });
}
const checkRouteQuery = () => {
    if (route.query.address || localStorage.getItem('uid')) {
        email.value = route.query.address || localStorage.getItem('uid')
    }
    let styleItem = localStorage.getItem('styleItem')
    if (styleItem) {
        styleItem = JSON.parse(styleItem)
        showList.value[2].title = (styleItem as any).name
        showList.value[2].stitle = (styleItem as any).info
        showList.value[2].val = (styleItem as any).val
    }
    let userTypeItem = localStorage.getItem('userTypeItem')
    if (userTypeItem) {
        userTypeItem = JSON.parse(userTypeItem)
        showList.value[1].title = (userTypeItem as any).name
        showList.value[1].stitle = (userTypeItem as any).info
    }
    console.log(
        styleItem
    )
    showList.value[0].title = localStorage.getItem('fileName') || ''

    console.log(
        userTypeItem
    )
}
onActivated(() => {
    //
    console.log('main onActivated')
    checkRouteQuery()
})


</script>
<style lang='scss' scoped>
.mainPage {
    position: relative;
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
                z-index: 100;
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
                    font-weight: bold;
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
                            font-weight: bold;
                            letter-spacing: 0px;
                            line-height: 23.17px;
                            color: rgba(0, 0, 0, 0.7);
                            text-align: center;
                            vertical-align: middle;
                        }

                        .stitle {
                            font-size: 10px;
                            font-weight: bold;
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
                            font-weight: bold;
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
                    position: relative;

                    .reload {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 339px;
                        height: 280px;
                        background-color: rgba(255, 255, 255, 0.9);
                    }

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
                    height: 233px;
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

    .el-input.is-disabled .el-input__wrapper {
        background-color: #fff !important;
    }

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