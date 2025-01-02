function scrollToElementWithClass(className: string) {
    const element = document.querySelector(`.${className}`);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    } else {
        console.log(`未找到类名为 ${className} 的元素`);
    }
}
const com={
    scrollToElementWithClass
}
export default com