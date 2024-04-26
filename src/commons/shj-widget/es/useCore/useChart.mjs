import { ref as d, shallowRef as g, onMounted as p, onBeforeUnmount as w } from "vue";
import { useResizeObserver as y } from "../node_modules/.pnpm/@vueuse_core@9.13.0_vue@3.4.3/node_modules/@vueuse/core/index.mjs";
import { l as i } from "../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
import A from "../node_modules/.pnpm/is-electron@2.2.2/node_modules/is-electron/index.mjs";
import "../node_modules/.pnpm/echarts@5.4.3/node_modules/echarts/index.mjs";
import { nanoid as S } from "../node_modules/.pnpm/nanoid@4.0.2/node_modules/nanoid/index.browser.mjs";
import "../node_modules/.pnpm/echarts-wordcloud@2.1.0_echarts@5.4.3/node_modules/echarts-wordcloud/src/wordCloud.mjs";
import "../node_modules/.pnpm/echarts-liquidfill@3.1.0_echarts@5.4.3/node_modules/echarts-liquidfill/src/liquidFillSeries.mjs";
import "../node_modules/.pnpm/echarts-liquidfill@3.1.0_echarts@5.4.3/node_modules/echarts-liquidfill/src/liquidFillView.mjs";
import { registerMap as m, init as J } from "../node_modules/.pnpm/echarts@5.4.3/node_modules/echarts/lib/core/echarts.mjs";
const P = (c) => {
  const r = [];
  c.geo && (i.isArray(c.geo) ? r.push(...c.geo.map((a) => a.map)) : r.push(c.geo.map)), c.series && i.isArray(c.series) && c.series.forEach((a) => {
    a.map && r.push(a.map);
  });
  const h = r.map((a) => {
    if (a === "customize")
      if (i.isArray(c.geo)) {
        const t = JSON.parse(c.geo.find((n) => n.map === "customize").geoData);
        return m(a, t);
      } else {
        const t = JSON.parse(c.geo.geoData);
        return m(a, t);
      }
    else
      return fetch((A() ? "gismap/" : "/gismap/") + a + ".json").then((t) => t.json()).then((t) => {
        m(a, t);
      }).catch((t) => console.error("获取地理GIS失败", t));
  });
  return Promise.all(h);
}, H = async (c) => {
  c.bmap && await import(
    /* @vite-ignore */
    "../node_modules/.pnpm/echarts@5.4.3/node_modules/echarts/extension/bmap/bmap.mjs"
  );
}, C = ({ basicOption: c, useEvents: r, customRenderData: h, emit: a }) => {
  const t = S(), n = d(!0), e = g(null), u = h, s = (l) => {
    try {
      e.value || (e.value = J(document.getElementById(t), null, { renderer: "svg" })), l && (e.value.setOption(l, !0), console.log(r), e.value.on("click", (o) => {
        r && i.isArray(r) && r.length > 0 && (a("chart-click", o), window.SHJParseEvent(r, "chart-click", o));
      }), e.value.on("dblclick", (o) => {
        r && i.isArray(r) && r.length > 0 && (a("chart-dblclick", o), window.SHJParseEvent(r, "chart-dblclick", o));
      }), e.value.on("mousedown", (o) => {
        r && i.isArray(r) && r.length > 0 && (a("chart-mousedown", o), window.SHJParseEvent(r, "chart-mousedown", o));
      }), e.value.on("mouseup", (o) => {
        r && i.isArray(r) && r.length > 0 && (a("chart-mouseup", o), window.SHJParseEvent(r, "chart-mouseup", o));
      }), e.value.on("mouseover", (o) => {
        r && i.isArray(r) && r.length > 0 && (a("chart-mouseover", o), window.SHJParseEvent(r, "chart-mouseover", o));
      }), e.value.on("mouseout", (o) => {
        r && i.isArray(r) && r.length > 0 && (a("chart-mouseout", o), window.SHJParseEvent(r, "chart-mouseout", o));
      }), e.value.on("contextmenu", (o) => {
        r && i.isArray(r) && r.length > 0 && (a("chart-contextmenu", o), window.SHJParseEvent(r, "chart-contextmenu", o));
      }), n.value = !1);
    } catch {
      try {
        e.value.dispose();
      } catch {
      }
      e.value = null;
    }
  }, f = i.debounce((l) => {
    n.value = !0, l = i.cloneDeep(l), P(l).then(() => {
      H(l).then(() => {
        u(l).then((o) => {
          s(o);
        });
      });
    }).catch((o) => {
      console.error("Error during dynamic imports:", o);
    });
  }, 100);
  return p(() => {
    f(c), y(document.getElementById(t), (l) => {
      e.value && e.value.resize();
    });
  }), w(() => {
    e.value && e.value.dispose();
  }), {
    id: t,
    status: n,
    chart: e,
    setOption: s,
    renderChart: f,
    renderData: u
  };
};
export {
  C as useChart
};
