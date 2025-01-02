// rem 函数
function setRem() {
    const defalutWidth = 1920 // 默认宽度 1920
    const defalueScale = 1 // 默认比例关系 1
    let defalutFontSize = 192 // 默认字体大小 192
   
    const getWidth = window.innerWidth // 获取屏幕的宽度
    let currentScale = getWidth / defalutWidth // 计算当前的屏幕大小和默认宽度之间的比例
   
    // // 防止缩放太小
    // if (currentScale < 0.85 && getWidth > 1024) {
    //   currentScale = 0.855
    // }
    if(getWidth>1670){
      defalutFontSize=168
    }
   
    // // 当前为平板时
    // if (getWidth <= 1024) {
    //   defalutFontSize = defalutFontSize * 2
    // }
   
    // 计算的宽度比例关系 再 * 默认的字体大小,获取计算的字体大小
    const currentFontSize = (currentScale / defalueScale) * defalutFontSize
    document.documentElement.style.fontSize = currentFontSize + 'px'
  }
   
  // 调用方法
  setRem()
   
  // 监听窗口在变化时重新设置跟文件大小
  window.onresize = function () {
    setRem()
  }
   
  // 如果没有生效，则在 main.ts 内导入本文件  import './utils/rem'
  // export default {}