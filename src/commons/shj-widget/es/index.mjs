import * as r from "./components/index.mjs";
import "./commons/reset.scss.mjs";
import { ZvTextRealTime as uYerwW } from "./components/text-real-time/index.mjs";
import { ZvInteractionButtonImage as ChynSX } from "./components/interaction-button-image/index.mjs";
import { ZvTextTextDynamic as yQnJls } from "./components/text-text-dynamic/index.mjs";
import { ZvTextOverNumber as NXxdsi } from "./components/text-over-number/index.mjs";
import { ZvChartPieBasic as tkEdmo } from "./components/chart-pie-basic/index.mjs";
import { ZvMediaCarousel as JnvgOX } from "./components/media-carousel/index.mjs";
import { ZvTextTableScroll as ykJmMx } from "./components/text-table-scroll/index.mjs";
import { ZvChartLineBasic as qrwrsv } from "./components/chart-line-basic/index.mjs";
import { ZvChartBarBasic as nqslmO } from "./components/chart-bar-basic/index.mjs";
import { ZvChartLineSmooth as hkJSQa } from "./components/chart-line-smooth/index.mjs";
const a = {
    install: (o) => {
       for (const t in r)
            o.use(r[t]);
    }
};

export {
    uYerwW as ZvTextRealTime,
    ChynSX as ZvInteractionButtonImage,
    yQnJls as ZvTextTextDynamic,
    NXxdsi as ZvTextOverNumber,
    tkEdmo as ZvChartPieBasic,
    JnvgOX as ZvMediaCarousel,
    ykJmMx as ZvTextTableScroll,
    qrwrsv as ZvChartLineBasic,
    nqslmO as ZvChartBarBasic,
    hkJSQa as ZvChartLineSmooth,
    a as default
};
