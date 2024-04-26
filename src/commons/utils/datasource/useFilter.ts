export const useFilterData = (filter: string, data: any) => {
    return new Promise((resolve, reject) => {
        if (filter) {
            try {
                const codeStr = `
                    ${filter}
        
                    // 在这里调用 filter 函数，并传递 data 参数
                    return filter(data);
                `
                const dynamicFunction = new Function('data', codeStr)
                resolve(dynamicFunction(data))
            } catch (error: any) {
                console.error(error.message)
                resolve(data)
            }
        } else {
            resolve(data)
        }
    })
}