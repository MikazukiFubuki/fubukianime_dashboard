import { Earth } from './main';
declare const _sfc_main: import("vue").DefineComponent<{
    isComposer: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    radius: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    subdivision: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    color: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    opacity: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    transparent: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    wireframe: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    label: {
        type: ObjectConstructor;
        required: false;
        default: () => {
            show: boolean;
            color: string;
            fontSize: number;
        };
    };
    texture: {
        type: (BooleanConstructor | StringConstructor)[];
        required: false;
        skipCheck: boolean;
        default: any;
    };
    animation: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    animationSpeed: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    background: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    fog: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    fogColor: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    fogNear: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    fogFar: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    stats: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    statsType: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    aperture: {
        type: BooleanConstructor;
        required: true;
        skipCheck: boolean;
        default: boolean;
    };
    apertureColor: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    apertureOpacity: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    apertureTransparent: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    apertureDepthWrite: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    cloudCover: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    cloudCoverColor: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    cloudCoverOpacity: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    cloudCoverTransparent: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    cloudCoverTexture: {
        type: any;
        required: false;
    };
    cloudCoverAnimation: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    cloudCoverAnimationSpeed: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    starrySky: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    starrySkyTexture: {
        type: any;
        required: false;
        default: any;
    };
    starrySkyNumber: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    starrySkySize: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    starrySkyColor: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    starrySkyOpacity: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    starrySkyAnimation: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    starrySkyAnimationSpeed: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    gridHelper: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    gridHelperWidth: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    gridHelperHeight: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    gridHelperColor: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    axesHelper: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    axesHelperSize: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    ambientLightColor: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    ambientLightIntensity: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    directionalLightX: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    directionalLightY: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    directionalLightZ: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    directionalLightIntensity: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    directionalLightColor: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    composer: {
        type: any;
        required: true;
        default: {
            unrealBloomPass: {};
            glitchPass: {};
            dotScreenPass: {};
            filmPass: {};
        };
    };
    particle: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    particleColor: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    particleSize: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    flylines: {
        type: ArrayConstructor;
        required: true;
        default: () => any[];
    };
    lines: {
        type: ArrayConstructor;
        required: true;
        default: () => any[];
    };
    lightBeam: {
        type: ArrayConstructor;
        required: true;
        default: () => any[];
    };
}, {
    uuid: string;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
    props: any;
    sceneParameter: import("vue").ComputedRef<{
        background: any;
        fog: any;
        fogColor: any;
        fogNear: any;
        fogFar: any;
        stats: any;
        statsType: any;
    }>;
    composerParameter: import("vue").ComputedRef<{
        isComposer: any;
        composer: any;
    }>;
    earthParameter: import("vue").ComputedRef<{
        radius: any;
        subdivision: any;
        animation: any;
        animationSpeed: number;
        texture: any;
        color: any;
        opacity: any;
        transparent: any;
        wireframe: any;
        particle: any;
        particleColor: any;
        particleSize: any;
        label: any;
    }>;
    apertureParameter: import("vue").ComputedRef<{
        show: any;
        color: any;
        opacity: any;
        transparent: any;
        depthWrite: any;
    }>;
    cloudCoverParameter: import("vue").ComputedRef<{
        show: any;
        color: any;
        opacity: any;
        transparent: any;
        animation: any;
        animationSpeed: number;
    }>;
    starrySkyParameter: import("vue").ComputedRef<{
        show: any;
        texture: any;
        number: any;
        size: any;
        color: any;
        opacity: any;
        animation: any;
        animationSpeed: number;
    }>;
    ambientLightParameter: import("vue").ComputedRef<{
        color: any;
        intensity: any;
    }>;
    directionalLightParameter: import("vue").ComputedRef<{
        x: any;
        y: any;
        z: any;
        intensity: any;
        color: any;
    }>;
    parameter: import("vue").ComputedRef<{
        sceneParameter: {
            background: any;
            fog: any;
            fogColor: any;
            fogNear: any;
            fogFar: any;
            stats: any;
            statsType: any;
        };
        earthParameter: {
            radius: any;
            subdivision: any;
            animation: any;
            animationSpeed: number;
            texture: any;
            color: any;
            opacity: any;
            transparent: any;
            wireframe: any;
            particle: any;
            particleColor: any;
            particleSize: any;
            label: any;
        };
        apertureParameter: {
            show: any;
            color: any;
            opacity: any;
            transparent: any;
            depthWrite: any;
        };
        cloudCoverParameter: {
            show: any;
            color: any;
            opacity: any;
            transparent: any;
            animation: any;
            animationSpeed: number;
        };
        starrySkyParameter: {
            show: any;
            texture: any;
            number: any;
            size: any;
            color: any;
            opacity: any;
            animation: any;
            animationSpeed: number;
        };
        gridHelperParameter: {
            show: any;
            width: any;
            height: any;
            color: any;
        };
        axesHelperParameter: {
            show: any;
            size: any;
        };
        ambientLightParameter: {
            color: any;
            intensity: any;
        };
        directionalLightParameter: {
            x: any;
            y: any;
            z: any;
            intensity: any;
            color: any;
        };
        composerParameter: {
            isComposer: any;
            composer: any;
        };
    }>;
    emit: (event: "on-success", ...args: any[]) => void;
    weiTuEarth: Earth;
    createEarth: () => Promise<Earth>;
    createMapBorder: () => Promise<void>;
    createEarthFlightLine: () => void;
    createEarthFlyLine: () => Promise<void>;
    createEarthLightBeam: () => void;
    init: () => Promise<void>;
    getSlotsByName: (name: string) => Array<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-success"[], "on-success", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    isComposer: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    radius: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    subdivision: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    color: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    opacity: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    transparent: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    wireframe: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    label: {
        type: ObjectConstructor;
        required: false;
        default: () => {
            show: boolean;
            color: string;
            fontSize: number;
        };
    };
    texture: {
        type: (BooleanConstructor | StringConstructor)[];
        required: false;
        skipCheck: boolean;
        default: any;
    };
    animation: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    animationSpeed: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    background: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    fog: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    fogColor: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    fogNear: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    fogFar: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    stats: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    statsType: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    aperture: {
        type: BooleanConstructor;
        required: true;
        skipCheck: boolean;
        default: boolean;
    };
    apertureColor: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    apertureOpacity: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    apertureTransparent: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    apertureDepthWrite: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    cloudCover: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    cloudCoverColor: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    cloudCoverOpacity: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    cloudCoverTransparent: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    cloudCoverTexture: {
        type: any;
        required: false;
    };
    cloudCoverAnimation: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    cloudCoverAnimationSpeed: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    starrySky: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    starrySkyTexture: {
        type: any;
        required: false;
        default: any;
    };
    starrySkyNumber: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    starrySkySize: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    starrySkyColor: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    starrySkyOpacity: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    starrySkyAnimation: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    starrySkyAnimationSpeed: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    gridHelper: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    gridHelperWidth: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    gridHelperHeight: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    gridHelperColor: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    axesHelper: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    axesHelperSize: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    ambientLightColor: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    ambientLightIntensity: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    directionalLightX: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    directionalLightY: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    directionalLightZ: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    directionalLightIntensity: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    directionalLightColor: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    composer: {
        type: any;
        required: true;
        default: {
            unrealBloomPass: {};
            glitchPass: {};
            dotScreenPass: {};
            filmPass: {};
        };
    };
    particle: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    particleColor: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    particleSize: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    flylines: {
        type: ArrayConstructor;
        required: true;
        default: () => any[];
    };
    lines: {
        type: ArrayConstructor;
        required: true;
        default: () => any[];
    };
    lightBeam: {
        type: ArrayConstructor;
        required: true;
        default: () => any[];
    };
}>> & {
    "onOn-success"?: (...args: any[]) => any;
}, {
    lines: unknown[];
    color: string;
    animation: boolean;
    radius: number;
    label: Record<string, any>;
    background: string;
    subdivision: number;
    opacity: number;
    transparent: boolean;
    wireframe: boolean;
    texture: string | boolean;
    animationSpeed: number;
    fog: boolean;
    fogColor: string;
    fogNear: number;
    fogFar: number;
    stats: boolean;
    statsType: number;
    apertureColor: string;
    apertureOpacity: number;
    apertureTransparent: boolean;
    apertureDepthWrite: boolean;
    cloudCoverColor: string;
    cloudCoverOpacity: number;
    cloudCoverTransparent: boolean;
    cloudCoverTexture: any;
    cloudCoverAnimation: boolean;
    cloudCoverAnimationSpeed: number;
    starrySky: boolean;
    starrySkyTexture: any;
    starrySkyNumber: number;
    starrySkySize: number;
    starrySkyColor: string;
    starrySkyOpacity: number;
    starrySkyAnimation: boolean;
    starrySkyAnimationSpeed: number;
    gridHelperWidth: number;
    gridHelperHeight: number;
    gridHelperColor: string;
    axesHelperSize: number;
    ambientLightColor: string;
    ambientLightIntensity: number;
    directionalLightX: number;
    directionalLightY: number;
    directionalLightZ: number;
    directionalLightIntensity: number;
    directionalLightColor: string;
    particleColor: string;
    particleSize: number;
    flylines: unknown[];
    lightBeam: unknown[];
}, {}>;
export default _sfc_main;
