

import { useProcessData } from './useMapping'

export const databaseRequests = (params: any, filter: any, mapping: any[], id: string, isSample: boolean) => {
    return new Promise(function (resolve, reject) {
        if (params?.id) {
            // queryDataBaseDetail(params.id).then(res => {
            //     if (res.code === 1 && res.data) {
            //         const config = JSON.parse(fromBase64(res.data.config as string))
                   
            //     }
            // })
            window.electronAPI.databaseExecute('', {}, params.statement).then((rows: any) => {
                useProcessData(filter, rows, mapping, id, undefined, isSample).then((response) => {
                    resolve(response)
                })
            }).catch((err: Error) => {
                console.error(err.message)
                resolve([])
            })
        } else {
            resolve([])
        }
    })
}

/** mysql */
export const parseMysql = (source: any, id: string, isSample: boolean) => {
    const {
        mysql,
        filter,
        mapping
    } = source.source
    console.log('请求 parseMysql')
    return databaseRequests(mysql!, filter, mapping, id, isSample)
}

/** SQL Server */
export const parseSQLServer = (source: any, id: string, isSample: boolean) => {
    const {
        sqlServer,
        filter,
        mapping
    } = source.source
    console.log('请求 parseSQLServer')
    return databaseRequests(sqlServer!, filter, mapping, id, isSample)
}

/** Oracle */
export const parseOracle = (source: any, id: string, isSample: boolean) => {
    const {
        oracle,
        filter,
        mapping
    } = source.source
    console.log('请求 parseOracle')
    return databaseRequests(oracle!, filter, mapping, id, isSample)
}

/** mariadb */
export const parseMariadb = (source: any, id: string, isSample: boolean) => {
    const {
        mariadb,
        filter,
        mapping
    } = source.source
    console.log('请求 parseMariadb')
    return databaseRequests(mariadb!, filter, mapping, id, isSample)
}

/** mongo */
export const parseMongodb = (source: any, id: string, isSample: boolean) => {
    const {
        mongodb,
        filter,
        mapping
    } = source.source
    console.log('请求 parseMongodb')
    return databaseRequests(mongodb!, filter, mapping, id, isSample)
}

/** KingBase */
export const parseKingBase = (source: any, id: string, isSample: boolean) => {
    const {
        kingbase,
        filter,
        mapping
    } = source.source
    console.log('请求 parseKingBase')
    return databaseRequests(kingbase!, filter, mapping, id, isSample)
}

/** clickhouse */
export const parseClickHouse = (source: any, id: string, isSample: boolean) => {
    console.log(source.source)
    const {
        ck,
        filter,
        mapping
    } = source.source
    console.log('请求 parseClickHouse')
    return databaseRequests(ck!, filter, mapping, id, isSample)
}

/** parseDameng */
export const parseDameng = (source: any, id: string, isSample: boolean) => {
    const {
        dm,
        filter,
        mapping
    } = source.source
    console.log('请求 parseDameng')
    return databaseRequests(dm!, filter, mapping, id, isSample)
}

/** PostpreSQL */
export const parsePostpreSQL = (source: any, id: string, isSample: boolean) => {
    const {
        pg,
        filter,
        mapping
    } = source.source
    console.log('请求 PostpreSQL')
    return databaseRequests(pg!, filter, mapping, id, isSample)
}