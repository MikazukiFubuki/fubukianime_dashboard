import { storeToRefs } from 'pinia'
import { isArray } from 'lodash'
import { useDatasourceStore } from '../../stores/datasourceStore'
import { parseStaticData } from './static'
import { parseVariableData } from './variable'
import { parseAPIPort } from './api'
import { parseClickHouse, parseDameng, parseKingBase, parseMariadb, parseMongodb, parseMysql, parseOracle, parsePostpreSQL, parseSQLServer } from './database'


/**
 * 解析数据源-分发任务
 * @param sources
 * @param isSample 简单版，不需要过滤器和映射
 * @returns
 */
export const parseDataSources = (sources: any[], isStore: boolean = false, isSample: boolean = false): Promise<any> => {
    if (sources && sources.length > 0) {
        const tasks = sources.map((item) => {
            const { source, id } = item
            if (source.type === 'static') return parseStaticData(item, id, isSample)
            if (source.type === 'variable') return parseVariableData(item, id, isSample)
            if (source.type === 'api') return parseAPIPort(item, id, isSample)
            if (source.type === 'mysql') return parseMysql(item, id, isSample)
            if (source.type === 'sqlServer') return parseSQLServer(item, id, isSample)
            if (source.type === 'oracle') return parseOracle(item, id, isSample)
            if (source.type === 'mariadb') return parseMariadb(item, id, isSample)
            if (source.type === 'mongo') return parseMongodb(item, id, isSample)
            if (source.type === 'kingbase') return parseKingBase(item, id, isSample)
            if (source.type === 'pg') return parsePostpreSQL(item, id, isSample)
            if (source.type === 'ck') return parseClickHouse(item, id, isSample)
            if (source.type === 'dm') return parseDameng(item, id, isSample)
            return null
        })
        return new Promise<any>((resolve, reject) => {
            Promise.all(tasks).then(data => {
                // data => 最初 basicData
                // data => 最终 keyData
                // data => 最终 userData
                // data => 映射前 beforeMapping
                if (data[0]) {
                    console.log(data)
                    if (!isSample) {
                        resolve(data.map((item: any) => item.keyData))
                    } else {
                        resolve(data.map((item: any) => item.sampleData))
                    }
                } else {
                    resolve([])
                }
            }).catch(err => {
                reject(err)
            })
        })
    } else {
        return new Promise((resolve, reject) => {
            resolve([])
        })
    }
}

export const openTimerTask = (sources: any[], callback: Function) => {
    const datasourceStore = useDatasourceStore()
    const { dataSourceTimer } = storeToRefs(datasourceStore)

    if (sources && isArray(sources) && sources.length > 0) {
        sources.forEach(item => {
            const { source, id } = item
            const fd = dataSourceTimer.value.findIndex(i => i.id === id)
            if (fd !== -1) {
                clearInterval(dataSourceTimer.value[fd].timer)
                dataSourceTimer.value.splice(fd, 1)
            }
            if (source.isAutoUpdate) {
                const t = {
                    id,
                    timer: setInterval(() => {
                        callback()
                    }, source.autoUpdateTime * 1000)
                }
                datasourceStore.pushDataSourceTimer(t)
            }
            callback()
        })
    } else {
        callback()
    }
}

window.SHJDatasource = parseDataSources
window.SHJDatasourceTimer = openTimerTask
