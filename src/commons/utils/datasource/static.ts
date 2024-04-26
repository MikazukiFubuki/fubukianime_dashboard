import { useProcessData } from './useMapping'

export const parseStaticData = (source: any, id: string, isSample: boolean) => {
    return new Promise(function (resolve, reject) {
        if (source.source.static) {
            useProcessData(source.source.filter, source.source.static, source.source.mapping, id, source.source.dynamicMapping, isSample).then(response => {
                resolve(response)
            }).catch(() => {
                resolve([])
            })
        } else {
            resolve([])
        }
    })
}