import { cloneDeep, isArray, isEqual } from 'lodash'

import { useFilterData } from './useFilter'

/** 映射关系处理 */
export const useProcessData = (filter: string, data: any, mappings: any[], id: string, dynamicMapping?: boolean, isSample?: boolean) => {
    return new Promise(function (resolve): void {
        // basicData
        const basicData = cloneDeep({ id, data })
        useFilterData(filter, data).then(response => {
            console.log(data)
            // beforeMapping
            const beforeMapping = cloneDeep({ id, data: response })
            console.log(isSample)
            if (!isSample) {
                let mappedData: any[] = []
                if (isArray(response)) {
                    mappedData = response.map((item: any, index: number) => {
                        const newItem: Record<string, any> = {}
                        if (dynamicMapping && dynamicMapping) {
                            if (index === 0) {
                                if (!isEqual(Object.keys(item).sort(), mappings.map(m => m.name).sort())) {
                                    // 动态 mappings
                                    console.log('动态 mappings')
                                    console.log('重新组建 mappings')
                                    const result: any[] = []
                                    for (const key in item) {
                                        const oldItem = mappings.find(fm => fm.name === key)
                                        if (oldItem) {
                                            result.push({ alias: oldItem.alias, name: key, type: 'any', label: key, mapping: oldItem.mapping, status: true })
                                        } else {
                                            result.push({ alias: key, name: key, type: 'any', label: key, mapping: key, status: true })
                                        }
                                    }
                                    mappings.splice(0, mappings.length)
                                    mappings.push(...result)
                                }
                            }
                        }
                        mappings.forEach((field: any) => {
                            if (field.alias) {
                                newItem[field.alias] = item[field.mapping]
                            } else {
                                newItem[field.name] = item[field.mapping]
                            }
                        })
                        return newItem
                    })
                }

                // userData
                const userData = cloneDeep({ id, data: mappedData })
                // keyData
                const keyData = parseMappedData(mappedData, mappings, id)
                resolve({
                    keyData: mappedData.length === 0 ? response : { id, data: keyData },
                    userData: mappedData.length === 0 ? response : userData,
                    beforeMapping,
                    basicData
                })
            } else {
                resolve({
                    keyData: [],
                    userData: [],
                    beforeMapping: [],
                    basicData: [],
                    sampleData: response
                })
            }
        })
    })
}

/** 解析数据为Key、Data格式 */
export const parseMappedData = (data: any[], mappings: any[], id: string) => {
    return data.reduce<{ key: string; data: any[]; }[]>(
        (results, item) => {
            let seriesKey: string = '系列一'
            if (mappings && mappings.find((field) => field.name === 'series')) {
                seriesKey = item[(mappings.find((field) => field.name === 'series')!.name)]
                delete item[(mappings.find((field) => field.name === 'series')!.name)]
            }

            const existingSeries = results.find((series) => series.key === seriesKey)

            if (existingSeries) {
                existingSeries.data.push(item)
            } else {
                results.push({ key: seriesKey, data: [item] })
            }
            return results
        },
        []
    )
}
