import { defineComponent as d, watch as u, openBlock as D, createElementBlock as b, createElementVNode as w, unref as O } from "vue";
import { l as s } from "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
import { useChart as v } from "../../useCore/useChart.mjs";
import { parseDataset as E } from "../../utils/parseDataset.mjs";
const g = { class: "zerov-widget" }, x = ["id"], k = d({ name: "zv-chart-line-smooth" }), J = /* @__PURE__ */ d({
  ...k,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {}
  },
  emits: [
    "chart-click",
    "chart-dblclick",
    "chart-mousedown",
    "chart-mouseover",
    "chart-mouseout",
    "chart-contextmenu"
  ],
  setup(h, { expose: l, emit: p }) {
    const t = h, m = p, {
      id: f,
      setOption: r,
      renderChart: c,
      renderData: n
    } = v({
      basicOption: s.cloneDeep(t.basicOption),
      useEvents: t.useEvents,
      customRenderData: (e) => (e = s.cloneDeep(e), new Promise((o) => {
        window.SHJDatasourceTimer(t.sources, () => {
          window.SHJDatasource(t.sources).then((a) => {
            if (e.dataset = E(s.cloneDeep(a)), a[0] !== void 0) {
              const _ = a[0].data.length - e.series.length;
              for (let i = 0; i < _; i++)
                e.series.push(s.cloneDeep(e.series[0]));
            }
            o(e);
          });
        });
      })),
      emit: m
    });
    return u(() => t.sources, () => {
      n(t.basicOption).then((e) => {
        r(e);
      });
    }, {
      deep: !0
    }), u(() => s.cloneDeep(t.basicOption), (e, o) => {
      s.isEqual(e, o) || c(e);
    }, {
      deep: !0
    }), l({
      refresh: () => {
        t.sources && t.sources.length > 0 && c(t.basicOption), n(t.basicOption).then((e) => {
          r(e);
        });
      },
      refreshView: () => {
        t.sources && t.sources.length > 0 && c(t.basicOption);
      },
      refreshData: () => {
        n(t.basicOption).then((e) => {
          r(e);
        });
      }
    }), (e, o) => (D(), b("div", g, [
      w("div", {
        id: O(f),
        class: "widget"
      }, null, 8, x)
    ]));
  }
});
export {
  J as default
};
