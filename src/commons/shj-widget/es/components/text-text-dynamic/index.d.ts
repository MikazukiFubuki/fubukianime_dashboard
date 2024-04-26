export declare const ZvTextTextDynamic: import("../../utils/typescript").SFCWithInstall<import("vue").DefineComponent<{
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
        rendererDomStyle: (css: {
            color: string;
            fontSize: number;
            fontStyle: string;
            fontWeight: string;
            textAlign: string;
            lineHeight: number;
            letterSpacing: number;
            fontFamily: string;
            textShadow: {
                color: string;
                show: boolean;
                x: number;
                y: number;
                value: number;
            };
            alignItems: string;
            justifyContent: string;
            '-webkit-text-stroke-width': number;
            '-webkit-text-stroke-color': string;
        }) => any;
        init: () => void;
        value: import("vue").Ref<string>;
    };
    rendererDomStyle: (css: {
        color: string;
        fontSize: number;
        fontStyle: string;
        fontWeight: string;
        textAlign: string;
        lineHeight: number;
        letterSpacing: number;
        fontFamily: string;
        textShadow: {
            color: string;
            show: boolean;
            x: number;
            y: number;
            value: number;
        };
        alignItems: string;
        justifyContent: string;
        '-webkit-text-stroke-width': number;
        '-webkit-text-stroke-color': string;
    }) => any;
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
}>>, {}, {}>> & Record<string, any>;
export default ZvTextTextDynamic;
