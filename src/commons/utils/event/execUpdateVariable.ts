import { storeToRefs } from 'pinia'
import pinia from '../piniaInstance'
import { usePageStore } from '../../stores/pageStore'

const pageStore = usePageStore(pinia)
const { currentPage } = storeToRefs(pageStore)

/** 执行 更新数据变量 */
export const execUpdateVariable = (event: any, params: any) => {
    console.log('执行 更新数据变量', event, params)
    try {
        const { updateVariableAction } = event
        const currentVariableDataIndex = currentPage.value.variableData.findIndex(i => i.id === updateVariableAction.name)
        if (currentVariableDataIndex !== -1) {
            if (event.updateVariableAction.dataType === 'params') {
                // 1. 事件返回值
                currentPage.value.variableData[currentVariableDataIndex]._value = params
                try {
                    currentPage.value.variableData[currentVariableDataIndex].useList?.forEach(item => {
                        const currentComponent = window.SHJComponentRefs.find(i => i.layerId === item)
                        if (currentComponent && currentComponent.ref) {
                            currentComponent.ref.refreshData()
                        }
                    })
                } catch (error) {
                    console.error(error)
                }
            } else {
                // 2. 自定义值
                window.SHJDatasource([updateVariableAction.useDataSource], false, true).then((res: any[]) => {
                    currentPage.value.variableData[currentVariableDataIndex]._value = res[0]
                    try {
                        currentPage.value.variableData[currentVariableDataIndex].useList?.forEach(item => {
                            const currentComponent = window.SHJComponentRefs.find(i => i.layerId === item)
                            if (currentComponent && currentComponent.ref) {
                                currentComponent.ref.refreshData()
                            }
                        })
                    } catch (error) {
                        console.error(error)
                    }
                })
            }
        }
    } catch (error) {
        console.error('执行 更新数据变量错误', error, event)
    }
}