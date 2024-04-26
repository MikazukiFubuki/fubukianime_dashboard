// @ts-ignore
import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', {
    state() {
        return {
            currentPage: {}
        } as {
            currentPage: {
                sceneOption:any,
                sceneId: number,
                globalEvent: any[],
                variableData: any[],
                environments: any[]
            }
        }
    },
    actions: {
        // 初始化Page
        setCurrentPage(data: any): void {
            this.currentPage = data
        }
    }
})