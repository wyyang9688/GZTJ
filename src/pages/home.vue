<!--  -->
<template>
    <div class="homePage page">
        <div class="topCover noremMH"></div>
        <div class="top noremMH">
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
                <div class="uploadBox">
                    <el-upload class="" v-loading="loading" drag :data="formData" :on-progress="progress"
                        :on-success="fileUploadSuc" :on-error="fileError" :headers="{
                            Authorization: 123
                        }"
                        accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf,.txt"
                        :show-file-list="false" :multiple="false" :on-change="handleChange" :action="action">
                        <div class="center m20">
                            <div class="imgBox" v-show="!fileName">
                                <img class="resImg" src="/images/upload.png" mode="" />
                            </div>
                            <div class="imgBox" v-show="fileName">
                                <img class="resImg" src="/images/file.png" mode="" />
                            </div>
                        </div>
                        <div class="center ">
                            <div class="tex " v-show="!fileName">
                                拖拽文件到这里或点击上传
                                <br>
                                *支持word、pdf、txt格式文件
                                <br>
                                *单次创作仅限上传一个文件
                            </div>
                            <div class="tex " v-show="fileName">
                                {{ fileName }}
                            </div>
                        </div>
                    </el-upload>
                </div>
                <div class="info">
                    ——让每一位知识创造者都能轻松地向世界诠释自己的研究与成果，让专业知识的传播不再受限于领域壁垒——
                </div>
            </div>
            <div class="rt">
                <div class="s1">
                    <div class="titleBox">
                        <div class="imgBox">
                            <img class="resImg" src="/images/part.png" mode="" />
                        </div>
                        <div class="text ml10 vcenter">选择受众</div>
                    </div>
                    <div class="userTypeList m30">
                        <div class="item vcenter pointer" :class="{
                            pick: item.isPick
                        }" v-for="(item, index) in userTypeList" :key="index" @click="clickUserTypeList(item)">
                            <div>
                                <div class="name center f16 bold">{{ item.name }}</div>
                                <div class="info center f10">{{ item.info }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="s2 m15">
                    <div class="titleBox">
                        <div class="imgBox">
                            <img class="resImg" src="/images/xz.png" mode="" />
                        </div>
                        <div class="text ml10 vcenter">定制风格</div>
                    </div>
                    <div class="userTypeList m30">
                        <div class="item vcenter pointer" @click="clickStypeList(item)" :class="{
                            pick: item.isPick
                        }" v-for="(item, index) in styleList.filter((v: any) => v.key == userTypeList.find((v: any) => v.isPick)!.key)"
                            :key="index">
                            <div>
                                <div class="name center f16 bold">{{ item.name }}</div>
                                <div class="info center f10">{{ item.info }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="text ">
                        *篇幅默认在1500字左右
                        <br>
                        *更多风格，敬请期待
                    </div>
                    <div class="btnList">
                        <div class="help pointer" ref="helpRef" @click="callHelp">
                            <div class="imgBox vcenter">
                                <img class="resImg" src="/images/help.png" mode="" />
                            </div>
                            <div class="text ml10 vcenter">联系客服</div>
                        </div>
                        <div class="btn pointer kscz" @click="clickStart">
                            开始创作
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btm"></div>


        <el-popover ref="popoverRef" :virtual-ref="helpRef" :popper-style="{ width: 'fitContent' }" trigger="click"
            title="" virtual-triggering>
            <div class="imgBox vcenter" style="width: 400px;">
                <img class="resImg" src="/images/wxkf.png" mode="" />
            </div>
        </el-popover>
    </div>
</template>

<script setup lang="ts">
import type { UploadProps, UploadUserFile } from 'element-plus'
import type { AxiosInstance } from 'axios'
import { service } from '@/apis/index'
import com from "@/utils/com"
import { getConfig } from '@/config/config'
const $http = inject<AxiosInstance>('$http')
const fileList = ref<UploadUserFile[]>([

])
const loading = ref(false)
const tid = ref('')
const cid = ref('')//创作ID
const fileName = ref('')
const action = ref(
    getConfig().VITE_APP_BASE_URL +
    '/miaobi/creation/page/summary')
const fileUploadSuc = (response: any, file: any, fileList: any) => {
    console.log(response)
    console.log(file)
    if (response.code == 0) {
        tid.value = response.data.tid
        cid.value = response.data.id
        fileName.value = file.name
        ElMessage({
            showClose: true,
            message: '文件上传成功',
            type: 'success'
        })
    } else {
        if (response.msg) {
            ElMessage({
                showClose: true,
                message: response.msg,
                type: 'warning'
            })
        }
    }
    loading.value = false
}
const fileError = (err: any, file: any, fileList: any) => {
    console.error(err)
    loading.value = false
}
const progress = (evt: any) => {
    console.log(evt)
    loading.value = true
}
const userTypeList = ref([
    {
        name: "儿童版",
        info: "适合18岁以下的读者",
        isPick: true,
        key: 1,
    },
    {
        name: "所有人",
        info: "适合所有人理解",
        isPick: false,
        key: 2,
    },
    {
        name: "银发族",
        info: "适合60岁以上的读者",
        isPick: false,
        key: 3,
    },
])
const styleList = ref([
    {
        name: "启蒙师",
        info: "1-4岁",
        isPick: true,
        key: 1,
        val: 'initiation'
    },
    {
        name: "童心科普师",
        info: "5-8岁",
        isPick: false,
        key: 1,
        val: 'childishness'
    },
    {
        name: "科学探索家",
        info: "9-14岁",
        isPick: false,
        key: 1,
        val: 'explorer'
    },
    {
        name: "思想家",
        info: "诙谐深刻、辛辣幽默",
        isPick: false,
        key: 2,
        val: 'thoughtful'
    },
    {
        name: "温暖你",
        info: "温暖深刻、隽永细腻",
        isPick: false,
        key: 2,
        val: 'warm'
    },
    {
        name: "仗剑江湖",
        info: "宏大叙事、深邃厚重",
        isPick: false,
        key: 2,
        val: 'nation'
    },
    {
        name: "科普智者",
        info: "价值传承、徐徐道来",
        isPick: false,
        key: 3,
        val: 'seniors'
    },
])
const router = useRouter();
const route = useRoute();
const formData = ref({
    email: route.query.address
})
const helpRef = ref()
const popoverRef = ref()
const callHelp = () => {
    unref(popoverRef).popperRef?.delayHide?.()
}
onMounted(() => {
    //
    console.log("Home onMounted");
    console.log(route)
    console.log(route.query)

    if (route.query.address) {
        localStorage.setItem('uid', String(route.query.address))
    } else {
        ElMessageBox.prompt('请输入邮箱地址以继续', '请补全您的邮箱地址', {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            showClose: false,
            showCancelButton: false,
            customClass: 'myElMsg',
            inputPattern:
                /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            inputErrorMessage: '无效的邮箱地址',
        })
            .then(({ value }) => {
                localStorage.setItem('uid', String(value))
            })
            .catch(() => {

            })
    }
    com.scrollToElementWithClass('kscz')
});
const handleChange: UploadProps['onChange'] = (uploadFile, uploadFiles) => {

    console.log(uploadFile)
    // fileList.value = fileList.value.slice(-3)
}
const goToMain = () => {
    router.push({
        name: "main",
        query: {
            address: route.query.address,

        }
    });
};
const clickUserTypeList = (item: any) => {
    userTypeList.value.forEach((v: any) => {
        v.isPick = false;
    });
    item.isPick = true;
    styleList.value.forEach((v: any) => {
        v.isPick = false;
    });
    for (let v of styleList.value) {
        if (v.key == item.key) {
            v.isPick = true;
            break
        }
    }
}
const clickStypeList = (item: any) => {
    styleList.value.forEach((v: any) => {
        v.isPick = false;
    });
    item.isPick = true;
}
const clickStart = async () => {
    console.log('clickStart')
    if (!fileName.value) {
        ElMessage('请先上传一个文件，再进行操作')
        return
    }
    if (!tid.value) {
        ElMessage('文件上传错误，请重新上传文件')
        return
    }
    // const res = await service.startCZ({})
    // console.log(res)
    // if (res && res.code == 0) {
    //     res.data.num = 1
    // } else {

    // }
    localStorage.setItem('styleItem', JSON.stringify(styleList.value.filter(v => v.isPick)[0]))
    localStorage.setItem('userTypeItem', JSON.stringify(userTypeList.value.filter(v => v.isPick)[0]))
    localStorage.setItem('fileName', fileName.value)
    localStorage.setItem('tid', tid.value)
    localStorage.setItem('cid', cid.value)
    router.push({
        name: "main",
        query: {
            address: route.query.address,

        },
    });
    // console.log(res)
}
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

    .noremMH {}

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
                    // width: 223px;
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
                    // width: 90px;
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
        display: flex;
        justify-content: space-between;

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
                // width: 80px;
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

        .lf {
            width: 860px;
            height: 407px;
            opacity: 1;
            border-radius: 16px;
            background: rgba(250, 250, 250, 1);
            padding: 31px 23px;

            // background-color: #fff;


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

            .uploadBox {
                margin-top: 12px;
                left: 82px;
                top: 395px;

                opacity: 1;

                .imgBox {
                    left: 433px;
                    top: 446px;
                    width: 80px;
                    height: 80px;
                    background: rgba(48, 110, 111, 0.1);
                    border-radius: 50%;
                    padding: 20px;
                }

                .tex {
                    padding-top: 20px;
                    left: 373px;
                    top: 546px;
                    height: 74px;
                    opacity: 1;
                    // /** 文本1 */
                    // font-size: 14px;
                    // font-weight: 400;
                    // letter-spacing: 0px;
                    // line-height: 20.27px;
                    // color: rgba(116, 121, 130, 1);
                    // /** 文本2 */
                    // font-size: 14px;
                    // font-weight: 400;
                    // letter-spacing: 0px;
                    // line-height: 20.27px;
                    // color: rgba(48, 110, 111, 1);
                    // /** 文本3 */
                    font-size: 14px;
                    font-weight: 400;
                    letter-spacing: 0px;
                    line-height: 20.27px;
                    color: rgba(116, 121, 130, 1);
                    text-align: center;
                    vertical-align: top;

                }
            }

            .info {
                margin-top: 67px;
                left: 82px;
                top: 743px;
                height: 24px;
                opacity: 1;
                /** 文本1 */
                font-size: 16px;
                font-weight: 700;
                letter-spacing: 0px;
                line-height: 23.17px;
                color: rgba(116, 121, 130, 1);
                text-align: left;
                vertical-align: middle;

            }
        }

        .rt {
            padding-right: 30px;

            .s1 {
                padding: 23px 30px;

                left: 918px;
                top: 300px;
                width: 477px;
                height: 165px;
                opacity: 1;
                border-radius: 16px;
                background: rgba(250, 250, 250, 1);

                .userTypeList {
                    display: flex;
                    justify-content: space-between;

                    .item {
                        left: 1089px;
                        top: 384px;
                        width: 135px;
                        height: 50px;
                        opacity: 1;
                        border-radius: 11.11px;
                        background: rgba(230, 236, 236, 1);

                        &.pick {
                            border: 2px solid rgba(48, 110, 111, 1);
                        }
                    }
                }
            }

            .s2 {
                padding: 23px 30px;

                left: 918px;
                top: 300px;
                width: 477px;
                height: 165px;
                opacity: 1;
                border-radius: 16px;
                background: rgba(250, 250, 250, 1);

                .userTypeList {
                    display: flex;
                    justify-content: space-between;

                    .item {
                        left: 1089px;
                        top: 384px;
                        width: 135px;
                        height: 50px;
                        opacity: 1;
                        border-radius: 11.11px;
                        background: rgba(230, 236, 236, 1);

                        &.pick {
                            border: 2px solid rgba(48, 110, 111, 1);
                        }
                    }
                }

                >.text {
                    margin-top: 26px;
                    left: 948px;
                    top: 641px;
                    height: 29px;
                    opacity: 1;
                    /** 文本1 */
                    font-size: 10px;
                    font-weight: 400;
                    letter-spacing: 0px;
                    line-height: 14.48px;
                    color: rgba(116, 121, 130, 1);
                    text-align: left;
                    vertical-align: middle;

                }

                .btnList {
                    margin-top: 58px;
                    line-height: 50px;
                    height: 50px;
                    display: flex;
                    justify-content: flex-end;

                    .help {

                        display: flex;
                        justify-content: flex-end;
                        margin-right: 20px;

                        .imgBox {
                            .resImg {
                                width: 19.09px;
                                height: 23.29px;
                            }

                            vertical-align: middle;
                        }

                        .text {
                            left: 1144px;
                            top: 740px;
                            opacity: 1;
                            /** 文本1 */
                            font-size: 14px;
                            font-weight: 400;
                            letter-spacing: 0px;
                            text-decoration-line: underline;
                            color: rgba(116, 121, 130, 1);
                            text-align: left;
                            vertical-align: middle;

                        }
                    }

                    >.btn {
                        left: 1215px;
                        top: 725px;
                        width: 182px;
                        height: 50px;
                        opacity: 1;
                        border-radius: 11.11px;
                        background: rgba(48, 110, 111, 1);
                        left: 1219px;
                        opacity: 1;
                        /** 文本1 */
                        font-size: 24px;
                        font-weight: 700;
                        letter-spacing: 0px;
                        line-height: 50px;
                        color: rgba(255, 255, 255, 1);
                        text-align: center;

                    }
                }
            }
        }
    }
}
</style>

<style lang="scss">
.homePage {
    .el-upload-dragger {
        border-radius: 12.97px;
        background: rgba(250, 250, 250, 1);
        width: 796px;
        height: 281px;
        border: 2px solid rgba(48, 110, 111, 1);
    }
}
</style>
