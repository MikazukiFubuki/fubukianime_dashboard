import { defineComponent as d, watch as u, openBlock as b, createElementBlock as D, createElementVNode as w, unref as O } from "vue";
import { l as t } from "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
import { useChart as v } from "../../useCore/useChart.mjs";
import { parseDataset as E } from "../../utils/parseDataset.mjs";
const g = { class: "zerov-widget" }, x = ["id"], k = d({ name: "zv-chart-line-basic" }), J = /* @__PURE__ */ d({
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
  setup(l, { expose: p, emit: h }) {
    const s = l, m = h, {
      id: f,
      setOption: c,
      renderChart: o,
      renderData: n
    } = v({
      basicOption: t.cloneDeep(s.basicOption),
      useEvents: s.useEvents,
      customRenderData: (e) => (e = t.cloneDeep(e), new Promise((r) => {
        window.SHJDatasourceTimer(s.sources, () => {
          window.SHJDatasource(s.sources).then((a) => {
            if (e.dataset = E(t.cloneDeep(a)), a[0] !== void 0) {
              const _ = a[0].data.length - e.series.length;
              for (let i = 0; i < _; i++)
                e.series.push(t.cloneDeep(e.series[0]));
            }
            r(e);
          });
        });
      })),
      emit: m
    });
    return u(() => s.sources, () => {
      n(s.basicOption).then((e) => {
        c(e);
      });
    }, {
      deep: !0
    }), u(() => t.cloneDeep(s.basicOption), (e, r) => {
      t.isEqual(e, r) || o(e);
    }, {
      deep: !0
    }), p({
      refresh: () => {
        s.sources && s.sources.length > 0 && o(s.basicOption), n(s.basicOption).then((e) => {
          c(e);
        });
      },
      refreshView: () => {
        s.sources && s.sources.length > 0 && o(s.basicOption);
      },
      refreshData: () => {
        n(s.basicOption).then((e) => {
          c(e);
        });
      }
    }), (e, r) => (b(), D("div", g, [
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
