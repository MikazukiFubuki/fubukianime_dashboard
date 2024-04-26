export interface IText {
    css: {
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
    };
}
