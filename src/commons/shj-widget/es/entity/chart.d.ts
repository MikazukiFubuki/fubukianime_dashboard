import * as echarts from 'echarts';
export interface IInteract {
    id: string;
    /** 事件类型 */
    eventType: string;
    /** 事件行为 */
    actions?: string;
    /** 目标页面 */
    targetPageId?: string;
    /** 跳转类型 _blank-打开新标签页  _self-在当前页面打开 */
    jumpToType?: string;
    /** 目标链接 */
    targetLink?: string;
    /** 目标图层 */
    targetLayerIds?: string[];
    /** 显隐切换方式 show-点击显示 hide-点击隐藏 toggle-点击显示隐藏切换 */
    visibled?: 'show' | 'hide' | 'toggle';
    /** 是否使用参数 */
    useParams: boolean;
    /** 弹出层位置 */
    popupPos?: string;
    /** 点击某个series */
    seriesName?: string;
    /** 场景类型 */
    sceneType: number;
    /** 场景类型方案 */
    sceneTypeMode: string;
    /** 场景参数 */
    sceneParams: {
        object: string;
        function: string;
        data: string;
    };
    /** 切换动画 */
    animation: {
        name: string;
        duration: number;
        delay: number;
        iterationCount: number;
    };
    ueShjName?: string;
    ueShjData?: string;
}
export interface IBasicOption extends echarts.EChartsOption {
    interacts: IInteract[];
}
export interface IUseEvent {
    id: string;
    /** 事件类型 */
    eventType: string;
    /** 事件行为 */
    actions?: string;
    clickname?: string;
    /** 页面行为 */
    pageAction?: {
        target: string;
        pageId: string;
    };
    /** 链接行为 */
    linkAction?: {
        target: string;
        url: string;
    };
    /** 组件显示隐藏行为 */
    visibledAction?: {
        status: string;
        layerIds: string[];
    };
    /** 调用方法行为 */
    invokeAction?: {
        targetLayerId: string;
        functionName: string;
        functionArgs: any;
    };
    /** 虚幻蓝图方法行为 */
    ueShjExecMethodAction?: {
        functionName: string;
        useDataSource: any;
    };
    /** 虚幻WebSocket行为 */
    ueCommonsWebscoketAction?: {
        socketUrl: string;
        useDataSource: any;
    };
    /** UnityWebGl场景方法行为 */
    unityWebglExecMethodAction?: {
        objectName: string;
        functionName: string;
        useDataSource: any;
    };
    /** UnityIframe场景方法行为 */
    unityIframeExecMethodAction?: {
        objectName: string;
        functionName: string;
        useDataSource: any;
    };
    /** 动画 */
    animations?: {
        enter: {
            name: string;
            duration: number;
            delay: number;
            count: number;
        };
        exit: {
            name: string;
            duration: number;
            delay: number;
            count: number;
        };
    };
}
