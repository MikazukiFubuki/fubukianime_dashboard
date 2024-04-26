import { storeToRefs } from 'pinia'
import pinia from '../piniaInstance'
import { usePageStore } from '../../stores/pageStore'

const pageStore = usePageStore(pinia)
const { currentPage } = storeToRefs(pageStore)

const toStringify = (json: any): string => {
    let cache: any = []
    const str = JSON.stringify(json, (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) return
            cache.push(value)
        }
        return value
    })
    cache = null
    return str
}

export const execEventUe = (event: any, params: any) => {
    console.log('执行 调用UE', event, params)
    try {
        if (currentPage.value.sceneId === 2) {
            const { actions, ueCommonsWebscoketAction, ueShjExecMethodAction } = event
            if (actions === 'ueCommonsWebscoket') {
                if (event.ueCommonsWebscoketAction.dataType === 'params') {
                    try {
                        window.SHJSceneUnityIframeWebscoket.send(toStringify(params))
                    } catch (error) {
                        console.log(error)
                    }
                } else {
                    window.SHJDatasource([ueCommonsWebscoketAction.useDataSource], false, true).then((res: any) => {
                        if (res && window.SHJSceneUnityIframeWebscoket) {
                            window.SHJSceneUnityIframeWebscoket.send(toStringify(res[0]))
                        }
                    })
                }
            }
            if (actions === 'ueShjExecMethod') {
                if (event.ueShjExecMethodAction.dataType === 'params') {
                    try {
                        window.ue5(ueShjExecMethodAction.functionName, toStringify(params))
                    } catch (error) {
                        console.log(error)
                    }
                } else {
                    window.SHJDatasource([ueShjExecMethodAction.useDataSource], false, true).then((res: any) => {
                        if (res) {
                            window.ue5(ueShjExecMethodAction.functionName, toStringify(res[0]))
                        }
                    })
                }
            }
        }
    } catch (error) {
        console.error('执行 调用UE错误', error, event)
    }
}