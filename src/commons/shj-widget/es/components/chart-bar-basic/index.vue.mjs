import { defineComponent as d, watch as u, openBlock as _, createElementBlock as D, createElementVNode as w, unref as O } from "vue";
import { l as t } from "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
import { useChart as v } from "../../useCore/useChart.mjs";
import { parseDataset as g } from "../../utils/parseDataset.mjs";
const E = { class: "zerov-widget" }, x = ["id"], k = d({ name: "zv-chart-bar-basic" }), J = /* @__PURE__ */ d({
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
    const e = h, m = p, {
      id: f,
      setOption: c,
      renderChart: o,
      renderData: n
    } = v({
      basicOption: t.cloneDeep(e.basicOption),
      useEvents: e.useEvents,
      customRenderData: (s) => (s = t.cloneDeep(s), new Promise((r) => {
        window.SHJDatasourceTimer(e.sources, () => {
          window.SHJDatasource(e.sources).then((a) => {
            if (s.dataset = g(t.cloneDeep(a)), a[0] !== void 0) {
              const b = a[0].data.length - s.series.length;
              for (let i = 0; i < b; i++)
                s.series.push(t.cloneDeep(s.series[0]));
            }
            r(s);
          });
        });
      })),
      emit: m
    });
    return u(() => e.sources, () => {
      e.sources && e.sources.length > 0 && n(e.basicOption).then((s) => {
        c(s);
      });
    }, {
      deep: !0
    }), u(() => t.cloneDeep(e.basicOption), (s, r) => {
      t.isEqual(s, r) || o(s);
    }, {
      deep: !0
    }), l({
      refresh: () => {
        e.sources && e.sources.length > 0 && o(e.basicOption), n(e.basicOption).then((s) => {
          c(s);
        });
      },
      refreshView: () => {
        e.sources && e.sources.length > 0 && o(e.basicOption);
      },
      refreshData: () => {
        n(e.basicOption).then((s) => {
          c(s);
        });
      }
    }), (s, r) => (_(), D("div", E, [
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
