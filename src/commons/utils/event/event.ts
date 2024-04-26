/* eslint-disable */
import { isArray } from 'lodash'
import { storeToRefs } from 'pinia'
import { nextTick } from 'vue'
import { useFullscreen } from '@vueuse/core'

import { useRenderDomChildren } from '../useRenderDomChildren'

import { usePageStore } from '../../stores/pageStore'
import pinia from '../piniaInstance'
import router from '../../router'
import { execUpdateVariable } from './execUpdateVariable'
import { execEventUe } from './execEventUe'

const pageStore = usePageStore(pinia)
const { currentPage } = storeToRefs(pageStore)

const { enter, exit, toggle } = useFullscreen()

/** 解析事件 */
export const parseEvents = (events: any[], type: string, params: any) => {
    try {
        if (isArray(events) && events.length > 0) {
            events.forEach(item => {
                if (item.eventType === type) {
                    setTimeout(() => {
                        /** 1. 过滤事件返回值 */
                        if (item.filterCode) {
                            try {
                                const codeStr = `
                                    ${item.filterCode}
                        
                                    // 在这里调用 filter 函数，并传递 data 参数
                                    return filter(data);
                                `
                                const dynamicFunction = new Function('data', codeStr)
                                params = dynamicFunction(params)
                            } catch (error: any) {
                                console.log('错误：过滤器语法错误')
                            }
                        }

                        /** 2. 条件逻辑判断 */
                        let flag = true
                        if (item.condition && isArray(item.condition.list) && item.condition.list.length > 0) {
                            for (let index = 0; index < item.condition.list.length; index++) {
                                const condition = item.condition.list[index]
                                if (condition.type === 'field') {
                                    try {
                                        if (condition.conditionName && params && params[condition.conditionName] !== undefined) {

                                            switch (condition.conditionExpression) {
                                                case 'eq':
                                                    flag = params[condition.conditionName].toString() === (condition.conditionValue || '').toString()
                                                    break
                                                case 'neq':
                                                    flag = params[condition.conditionName] !== condition.conditionValue
                                                    break
                                                case 'lt':
                                                    flag = params[condition.conditionName] < Number(condition.conditionValue)
                                                    break
                                                case 'gt':
                                                    flag = params[condition.conditionName] > Number(condition.conditionValue)
                                                    break
                                                case 'lte':
                                                    flag = params[condition.conditionName] <= Number(condition.conditionValue)
                                                    break
                                                case 'gte':
                                                    flag = params[condition.conditionName] >= Number(condition.conditionValue)
                                                    break
                                                case 'includes':
                                                    flag = (params[condition.conditionName] as string).includes((condition.conditionValue) as string)
                                                    break
                                                case 'noincludes':
                                                    flag = !(params[condition.conditionName] as string).includes((condition.conditionValue) as string)
                                                    break
                                                default:
                                                    flag = false
                                                    break
                                            }
                                        } else {
                                            flag = false
                                        }
                                    } catch (error) {
                                        flag = false
                                    }
                                }
                                if (condition.type === 'custom') {
                                    flag = false
                                    try {
                                        const codeStr = `
                                            ${condition.customValue}
                                
                                            // 在这里调用 condition 函数，并传递 data 参数
                                            return condition(data);
                                        `
                                        // eslint-disable-next-line no-new-func
                                        const dynamicFunction = new Function('data', codeStr)
                                        flag = dynamicFunction(params)
                                    } catch (error: any) {
                                        flag = false
                                    }
                                }
                                if (item.condition.type === 'and' && !flag) {
                                    break
                                }
                                if (item.condition.type === 'or' && flag) {
                                    break
                                }
                            }
                            console.log('通过/未通过：', flag)
                        }

                        /** 3. 执行动作 */
                        if (flag) {
                            if (item.actions === 'page') exeEventPage(item)
                            if (item.actions === 'link') exeEventLink(item)
                            if (item.actions === 'visibled') exeEventVisibled(item)
                            if (item.actions === 'updatePage') exeUpdatePage(item)
                            if (item.actions === 'invoke') exeEventInvoke(item)
                            if (item.actions === 'fullscreen') exeEventFullScreen(item)
                            if (item.actions === 'updateVariable') execUpdateVariable(item, params)
                            if (item.actions === 'updateWidget') exeUpdateWidget(item)
                            if (item.actions === 'ueCommonsWebscoket' || item.actions === 'ueShjExecMethod') execEventUe(item, params)
                            if (item.actions === 'unityWebglExecMethod' || item.actions === 'unityIframeExecMethod') exeEventUnity(item)
                        }
                    }, item.delay)
                }
            })
        }
    } catch (error) {
        console.error('解析事件错误', error)
    }
}

/** 执行 刷新页面 */
export const exeUpdatePage = (event: any) => {
    try {
        window.location.reload()
    } catch (error) {
        console.error('执行 刷新页面错误', error, event)
    }
}

/** 执行 跳转页面 */
export const exeEventPage = (event: any) => {
    try {
        const { pageAction } = event
        if (pageAction && pageAction !== '') {
            router.push(pageAction)
        }
    } catch (error) {
        console.error('执行 跳转页面错误', error, event)
    }
}

/** 执行 跳转链接 */
export const exeEventLink = (event: any) => {
    try {
        const { linkAction } = event
        window.open(linkAction.url, linkAction.target)
    } catch (error) {
        console.error('执行 跳转链接错误', error, event)
    }
}

/** 执行 调用Unity方法 */
export const exeEventUnity = (event: any) => {
    console.log('执行 调用Unity方法', event)
    try {
        if (currentPage.value.sceneId === 3) {
            const { actions, unityIframeExecMethodAction, unityWebglExecMethodAction } = event
            if (actions === 'unityWebglExecMethod') {
                window.SHJDatasource([unityWebglExecMethodAction.useDataSource], false, true).then((res: any) => {
                    if (res && window.SHJSceneUnityInstance) {
                        window.SHJSceneUnityInstance.SendMessage(unityWebglExecMethodAction.objectName, unityWebglExecMethodAction.functionName, res[0])
                    }
                })
            }
            if (actions === 'unityIframeExecMethod') {
                window.SHJDatasource([unityIframeExecMethodAction.useDataSource], false, true).then((res: any) => {
                    if (res && window.SHJSceneUnityIframeInstance) {
                        window.SHJSceneUnityIframeInstance.contentWindow.postMessage({ object: unityIframeExecMethodAction.objectName, function: unityIframeExecMethodAction.functionName, data: res[0] }, currentPage.value.sceneOption.iframeUrl)
                    }
                })
            }
        }
    } catch (error) {
        console.error('执行 调用Unity方法错误', error, event)
    }
}

/** 执行 调用组件方法 */
export const exeEventInvoke = (event: any) => {
    try {
        const { invokeAction } = event
        const currentComponent = window.SHJComponentRefs.find((item: any) => item.layerId === invokeAction.targetLayerId)
        if (currentComponent) {
            currentComponent.ref[invokeAction.functionName](invokeAction.functionArgs.animationName, { ...invokeAction.functionArgs.animationConfig })
        }
    } catch (error) {
        console.error('执行 调用组件方法错误', error, event)
    }
}

/** 执行 显示/隐藏 */
export const exeEventVisibled = (event: any) => {
    try {
        const { visibledAction } = event
        if (visibledAction.layerIds && isArray(visibledAction.layerIds)) {
            nextTick(() => {
                visibledAction.layerIds.forEach((id) => {
                    const layer = document.getElementById(id) as HTMLElement
                    if (layer) {
                        if (visibledAction.status === 'show') {
                            exeEventAnimationEnter(event, layer)
                        } else if (visibledAction.status === 'hide') {
                            exeEventAnimationExit(event, layer)
                        } else {
                            if (layer.style.display === 'none' || layer.style.visibility === 'hidden') {
                                exeEventAnimationEnter(event, layer)
                            } else {
                                exeEventAnimationExit(event, layer)
                            }
                        }
                        const firstChild = layer.firstElementChild as HTMLElement
                        firstChild.addEventListener('webkitAnimationEnd', () => {
                            if (firstChild.style.animationName === event.animations.exit.name) {
                                layer.style.display = 'none'
                                layer.style.visibility = 'hidden'
                                useRenderDomChildren(layer, visibledAction.status, 'hidden')
                            }
                        })
                    }
                })
            })
        }
    } catch (error) {
        console.error('执行 显示/隐藏错误', error, event)
    }
}

/** 执行 全屏/窗口化 */
export const exeEventFullScreen = (event: any) => {
    try {
        const { fullscreenAction } = event
        if (fullscreenAction && fullscreenAction.status) {
            if (fullscreenAction.status === 'fullscreen') enter()
            if (fullscreenAction.status === 'window') exit()
            if (fullscreenAction.status === 'toggle') toggle()
        }
    } catch (error) {
        console.error('执行 全屏/窗口化错误', error, event)
    }
}

/** 执行 刷新组件 */
export const exeUpdateWidget = (event: any) => {
    console.log('执行 刷新组件', event)
    try {
        if (event.updateWidget.targetLayerId) {
            const currentComponent = window.SHJComponentRefs.find(i => i.layerId === event.updateWidget.targetLayerId)
            if (currentComponent && currentComponent.ref && currentComponent.ref.refresh) {
                currentComponent.ref.refresh()
            }
        }
    } catch (error) {
        console.error('执行 刷新组件错误', error, event)
    }
}

/** 执行 进入动画 */
function exeEventAnimationEnter(event: any, layer: HTMLElement) {
    console.log('执行 进入动画', event)
    try {
        const { animations, visibledAction } = event
        if (animations.enter.name) {
            const firstChild = layer.firstElementChild as HTMLElement
            layer.style.display = 'block'
            layer.style.visibility = 'visible'
            useRenderDomChildren(layer, visibledAction.status, 'visible')

            firstChild.style.animation = 'none'
            firstChild.style.animation = `${animations.enter.name} ${animations.enter.duration}ms ease ${animations.enter.delay}ms  normal both running ${animations.enter.count}`
        } else {
            layer.style.display = 'block'
            layer.style.visibility = 'visible'
            useRenderDomChildren(layer, visibledAction.status, 'visible')
        }
    } catch (error) {
        console.error('执行 进入动画错误', error, event)
    }
}

/** 执行 退出动画 */
function exeEventAnimationExit(event: any, layer: HTMLElement) {
    console.log('执行 退出动画')
    try {
        const { animations, visibledAction } = event
        if (animations.exit.name) {
            const firstChild = layer.firstElementChild as HTMLElement
            firstChild.style.animation = 'none'
            firstChild.style.animation = `${animations.exit.name} ${animations.exit.duration}ms ease ${animations.exit.delay}ms  normal both running ${animations.exit.count}`
        } else {
            layer.style.display = 'none'
            layer.style.visibility = 'hidden'
            useRenderDomChildren(layer, visibledAction.status, 'hidden')
        }
    } catch (error) {
        console.error('执行 退出动画错误', error, event)
    }
}

window.SHJParseEvent = parseEvents