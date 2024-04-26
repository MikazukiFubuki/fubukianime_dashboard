import { IText } from '../../commons/interface/text';
declare const _sfc_main: import("vue").DefineComponent<{
    basicOption: {
        type: any;
        required: true;
    };
    sources: {
        type: ArrayConstructor;
        required: true;
    };
}, {
    props: any;
    useTextDynamic: () => {
        rendererDomStyle: (css: IText['css']) => any;
        init: () => void;
        value: import("vue").Ref<string>;
    };
    rendererDomStyle: (css: IText['css']) => any;
    init: () => void;
    value: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    basicOption: {
        type: any;
        required: true;
    };
    sources: {
        type: ArrayConstructor;
        required: true;
    };
}>>, {}, {}>;
export default _sfc_main;
