import { IText } from '../../commons/interface/text';
interface IRealTime extends IText {
    format: string;
}
declare const _sfc_main: import("vue").DefineComponent<{
    basicOption: {
        type: ObjectConstructor;
        required: true;
    };
    datasource: {
        type: any;
        required: true;
    };
}, {
    props: any;
    useRealTime: (option: IRealTime) => {
        updateRealTime: (format: string) => void;
        realTime: import("vue").Ref<string>;
        rendererDomStyle: (css: IText['css']) => any;
    };
    updateRealTime: (format: string) => void;
    realTime: import("vue").Ref<string>;
    rendererDomStyle: (css: IText['css']) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    basicOption: {
        type: ObjectConstructor;
        required: true;
    };
    datasource: {
        type: any;
        required: true;
    };
}>>, {}, {}>;
export default _sfc_main;
