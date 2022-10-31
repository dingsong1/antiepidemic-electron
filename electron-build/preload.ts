// preload.js
// 所有Node.js API都可以在预加载过程中使用。
// 它拥有与Chrome扩展一样的沙盒。
// @ts-ignore
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector: string, text: string) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }
    for (const dependency of ['chrome', 'node', 'electron']) {
        if (process.versions) {
            replaceText(`${dependency}-version`, process.versions.dependency || '')
        }

    }
})
