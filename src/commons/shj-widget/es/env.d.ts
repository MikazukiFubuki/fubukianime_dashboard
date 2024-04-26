declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
    readonly env: ImportMetaEnv
}

declare interface Window {
    SHJSceneUeStream: any;
    // Vr场景
    SHJSceneVrViewer: any;
    // Unity场景webgl-render方案：UNITYINSTANCE实例
    SHJSceneUnityInstance: any;
    // Unity场景iframe-render方案：UNITYINSTANCE实例
    SHJSceneUnityIframeInstance: any;
    // UE场景iframe websocket方案：websocket实例
    SHJSceneUnityIframeWebscoket: any;
    // 全局数据源定时器
    SHJDatasourceTimer: Function;
    // 全局数据源函数
    SHJDatasource: Function;
    // 全局事件解析器
    SHJParseEvent: Function;
    // 全局组件Ref
    SHJComponentRefs: any[];


    // 客户端 Electron对象
    electron: any;
    // 客户端 Electron对象
    electronAPI: any;
    // 外部插件 pannellum
    pannellum: any;
    // 外部插件 ue
    ue: any;
    // 外部插件 ue5
    ue5: Function;
}

declare module 'html2canvas'
declare module 'jexcel'
declare module '@swiftcarrot/color-fns'