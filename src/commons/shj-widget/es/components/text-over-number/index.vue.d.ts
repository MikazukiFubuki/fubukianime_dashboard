import type { CountUpOptions } from 'vue-countup-v3';
import { IText } from '../../commons/interface/text';
interface IOverNumber extends IText {
    countUp: {
        startVal: number;
        separator: string;
        decimal: string;
        decimalPlaces: number;
        duration: number;
        prefix: string;
        suffix: string;
        loop: boolean;
        delay: number;
        isOdometer: boolean;
    };
    value: number;
}
declare const _sfc_main: import("vue").DefineComponent<{
    basicOption: {
        type: ObjectConstructor;
        required: true;
    };
    sources: {
        type: ArrayConstructor;
        required: true;
    };
}, {
    props: any;
    useOverNumber: (basicOption: IOverNumber) => {
        key: import("vue").Ref<string>;
        init: () => void;
        options: import("vue").Ref<CountUpOptions>;
        endValue: import("vue").Ref<number>;
        onFinished: () => void;
        rendererDomStyle: (css: IText['css']) => any;
    };
    key: import("vue").Ref<string>;
    init: () => void;
    options: import("vue").Ref<CountUpOptions>;
    endValue: import("vue").Ref<number>;
    onFinished: () => void;
    rendererDomStyle: (css: IText['css']) => any;
    readonly CountUp: import("vue").DefineComponent<{
        endVal: {
            type: import("vue").PropType<string | number>;
            required: true;
        };
        startVal: {
            type: import("vue").PropType<string | number>;
        } & {
            default: number;
        };
        duration: {
            type: import("vue").PropType<string | number>;
        } & {
            default: number;
        };
        decimalPlaces: {
            type: import("vue").PropType<number>;
        } & {
            default: number;
        };
        autoplay: {
            type: import("vue").PropType<boolean>;
        } & {
            default: boolean;
        };
        loop: {
            type: import("vue").PropType<number | boolean>;
        } & {
            default: boolean;
        };
        delay: {
            type: import("vue").PropType<number>;
        } & {
            default: number;
        };
        options: {
            type: import("vue").PropType<CountUpOptions>;
        } & {
            default: undefined;
        };
    }, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        init: (countup: import("countup.js").CountUp) => void;
    } & {
        finished: () => void;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        endVal: {
            type: import("vue").PropType<string | number>;
            required: true;
        };
        startVal: {
            type: import("vue").PropType<string | number>;
        } & {
            default: number;
        };
        duration: {
            type: import("vue").PropType<string | number>;
        } & {
            default: number;
        };
        decimalPlaces: {
            type: import("vue").PropType<number>;
        } & {
            default: number;
        };
        autoplay: {
            type: import("vue").PropType<boolean>;
        } & {
            default: boolean;
        };
        loop: {
            type: import("vue").PropType<number | boolean>;
        } & {
            default: boolean;
        };
        delay: {
            type: import("vue").PropType<number>;
        } & {
            default: number;
        };
        options: {
            type: import("vue").PropType<CountUpOptions>;
        } & {
            default: undefined;
        };
    }>> & {
        onFinished?: () => any;
        onInit?: (countup: import("countup.js").CountUp) => any;
    }, {
        options: CountUpOptions;
        duration: string | number;
        autoplay: boolean;
        loop: number | boolean;
        startVal: string | number;
        decimalPlaces: number;
        delay: number;
    }, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    basicOption: {
        type: ObjectConstructor;
        required: true;
    };
    sources: {
        type: ArrayConstructor;
        required: true;
    };
}>>, {}, {}>;
export default _sfc_main;
