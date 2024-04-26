import { storeToRefs } from 'pinia'
import { isArray, isString } from 'lodash'
import { HttpRequest } from '../request/index'
import { usePageStore } from '../../stores/pageStore'
import { useProcessData } from './useMapping'


import pinia from '../piniaInstance'
const pageStore = usePageStore(pinia)
const { currentPage } = storeToRefs(pageStore)

const httpRequest = new HttpRequest()

export const parseAPIPort = (source: any, id: string, isSample: boolean) => {
    return new Promise(function (resolve, reject) {
        const { api } = source.source
        try {
            if (api) {
                const { headers, cookie } = api

                if (api.isHeaders) {
                    httpRequest.instance.interceptors.request.use(
                        (config: any) => {
                            config.headers = headers
                            return config
                        },
                        (error: any) => {
                            return Promise.reject(error)
                        }
                    )
                }

                const request = (req: any) => {
                    req.then((res: any) => {
                        if (res.status === 200) {
                            const {
                                filter,
                                mapping
                            } = source.source
                            useProcessData(filter, res.data, mapping, id, undefined, isSample)
                                .then((response) => {
                                    if (response) {
                                        resolve(response)
                                    }
                                }).catch(() => {
                                resolve([])
                            })
                        } else {
                            resolve([])
                        }
                    })
                }

                /**
                 * 解析URL是否包含http，
                 * 不包含  则解析BaseUrl
                 * 包含    则忽略解析BaseUrl
                 */
                let preUrl: string = ''
                if (!api.url.includes('http')) {
                    const currentEnv = currentPage.value.environments.filter(i => i.selected)
                    if (currentEnv && isArray(currentEnv) && currentEnv.length > 0) {
                        preUrl = currentEnv[0].envBaseUrl
                    }
                }

                /**
                 * 解析URL中是否包含全局变量
                 * 包含   则解析全局变量
                 * 不包含 则忽略
                 */
                const matches = api.url.match(/\${(.*?)}/g)
                if (matches) {
                    let newUrl = api.url
                    for (let i = 0; i < matches.length; i++) {
                        const variable = currentPage.value.variableData.filter(item => item.name === matches[i].substring(2, matches[i].length - 1))
                        if (variable && isArray(variable) && variable.length > 0) {
                            if (isString(variable[0]._value)) {
                                newUrl = newUrl.replaceAll(matches[i], variable[0]._value)
                            } else {
                                try {
                                    newUrl = newUrl.replaceAll(matches[i], JSON.stringify(variable[0]._value))
                                } catch (error) {}
                            }
                            if (api.type === 'GET') request(httpRequest.get(`${preUrl}${newUrl}`, api.postParam))
                            if (api.type === 'POST') request(httpRequest.post(preUrl + newUrl, api.postParam))
                            if (api.type === 'PUT') request(httpRequest.put(preUrl + newUrl, api.postParam))
                            if (api.type === 'DELETE') request(httpRequest.delete(preUrl + newUrl, api.postParam))
                        }
                    }
                } else {
                    if (api.type === 'GET') request(httpRequest.get(`${preUrl}${api.url}`, api.postParam))
                    if (api.type === 'POST') request(httpRequest.post(preUrl + api.url, api.postParam))
                    if (api.type === 'PUT') request(httpRequest.put(preUrl + api.url, api.postParam))
                    if (api.type === 'DELETE') request(httpRequest.delete(preUrl + api.url, api.postParam))
                }
            } else {
                resolve([])
            }
        } catch (error) {
            console.log(error)
            resolve([])
        }

    })
}