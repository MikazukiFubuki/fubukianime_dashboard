import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

export type RestResult<T> = {
    code: number,
    msg: string,
    data?: T
}

export class HttpRequest {
    public instance: AxiosInstance

    constructor() {
        this.instance = axios.create()
    }

    /**
     * GET 请求
     * @param url
     * @param config
     * @returns
     */
    public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<RestResult<T>> {
        return this.instance.get(url, config)
    }

    /**
     * POST 请求
     * @param url
     * @param data
     * @param config
     * @returns
     */
    public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<RestResult<T>> {
        const defaultConfig: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return this.instance.post(url, data, config || defaultConfig)
    }

    /**
     * PUT 请求
     * @param url
     * @param data
     * @param config
     * @returns
     */
    public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<RestResult<T>> {
        const defaultConfig: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            transformRequest: [
                function (transform) {
                    let ret = ''
                    for (const it in transform) {
                        ret +=
                            encodeURIComponent(it) + '=' + encodeURIComponent(transform[it]) + '&'
                    }
                    return ret
                }
            ]
        }
        return this.instance.put(url, data, config || defaultConfig)
    }

    /**
     * DELETE 请求
     * @param url
     * @param config
     * @returns
     */
    public delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<RestResult<T>> {
        const defaultConfig: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }
        return this.instance.delete(url, config || defaultConfig)
    }

    /**
     * 文件上传
     * @param url
     * @param params
     * @param config
     * @returns
     */
    public upload<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<RestResult<T>> {
        const defaultConfig: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        return this.instance.post(url, params, config || defaultConfig)
    }

    /**
     * blob文件下载
     * @param url
     * @param params
     * @param config
     * @returns
     */
    public download<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<RestResult<T>> {
        const defaultConfig: AxiosRequestConfig = {
            responseType: 'blob',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return this.instance.post(url, params, config || defaultConfig)
    }

    /**
     * Custom 请求
     * @param url
     * @param config
     * @returns
     */
    public custom<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.get(url, config)
    }
}