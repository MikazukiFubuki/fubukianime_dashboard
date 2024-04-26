import * as echarts from 'echarts';
import { IBasicOption, IUseEvent } from '../entity/chart';
export interface IUseChart {
    basicOption: IBasicOption;
    useEvents: IUseEvent[];
    customRenderData: Function;
    emit: any;
}
export declare const useChart: ({ basicOption, useEvents, customRenderData, emit }: IUseChart) => {
    id: string;
    status: import("vue").Ref<boolean>;
    chart: import("vue").ShallowRef<echarts.ECharts>;
    setOption: (option: any) => void;
    renderChart: import("lodash").DebouncedFunc<(option: echarts.EChartsOption) => void>;
    renderData: Function;
};
