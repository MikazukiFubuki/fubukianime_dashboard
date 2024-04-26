export const initVariableDataValue = (variableData: any[]) => {
    return new Promise<any[]>((resolve, reject) => {
        const variableDataTasks: Promise<any>[] = []
        variableData.forEach((item) => {
            variableDataTasks.push(window.SHJDatasource([item.sources], false, true))
        })
        Promise.all(variableDataTasks).then((task) => {
            task.forEach((data, index) => {
                variableData[index]._value = data[0]
            })
            resolve(variableData)
        }).catch(err => {
            reject(err)
        })
    })
}