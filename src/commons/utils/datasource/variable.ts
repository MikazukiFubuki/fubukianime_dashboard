import { storeToRefs } from 'pinia'
import { usePageStore } from '../../stores/pageStore'
import { useProcessData } from './useMapping'

import pinia from '../piniaInstance'

const pageStore = usePageStore(pinia)
const { currentPage } = storeToRefs(pageStore)

export const parseVariableData = (source: any, id: string, isSample: boolean) => {
  
    return new Promise(function (resolve, reject) {
        const currentVariableData = currentPage.value.variableData.find(item => item.id === source.source.variableId)
        if (currentVariableData) {
            useProcessData(source.source.filter, currentVariableData._value, source.source.mapping, id, source.source.dynamicMapping, isSample).then(response => {
                resolve(response)
            }).catch(() => {
                resolve([])
            })
        } else {
            resolve([])
        }
    })
}