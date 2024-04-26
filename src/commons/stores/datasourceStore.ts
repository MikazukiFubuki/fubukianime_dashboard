// @ts-ignore
import { defineStore } from 'pinia'

export const useDatasourceStore = defineStore('datasource', {
    state() {
        return {
            dataSourceTimer: []
        } as {
            dataSourceTimer: any[]
        }
    },
    actions: {
        // 初始化定时器
        initDataSourceTimer(data: any[]): void {
            this.dataSourceTimer = data
        },
        // 添加定时器
        pushDataSourceTimer(data: any): void {
            this.dataSourceTimer.push(data)
        },
        // 移除定时器
        delDataSourceTimer(id: string): void {
            const fd = this.dataSourceTimer.findIndex(i => i.id === id)
            this.dataSourceTimer.splice(fd, 1)
        }
    }
})