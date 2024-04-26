import { isArray } from 'lodash'
import { nextTick } from 'vue'

export const useRenderDomChildren = (parent:Element, status:string, type:string) => {
    nextTick(() => {
        if (parent && parent.children) {
            for (let i = 0; i < parent.children.length; i++) {
                // 遍历第一级子元素
                const child = parent.children[i] as HTMLElement
                // console.log(child)
                if (status === 'show') {
                    child.style.display = 'block'
                    child.style.visibility = 'visible'
                } else if (status === 'hide') {
                    child.style.display = 'none'
                    child.style.visibility = 'hidden'
                } else {
                    if (type === 'visible') {
                        child.style.display = 'block'
                        child.style.visibility = 'visible'
                    } else {
                        child.style.display = 'block'
                        child.style.visibility = 'visible'
                    }
                }
                // 递归调用
                useRenderDomChildren(child, status, type)
            }
        }
    })
}