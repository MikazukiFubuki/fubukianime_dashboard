import { defineComponent as i, watch as a, openBlock as f, createElementBlock as _, createElementVNode as b, unref as w } from "vue";
import { l as t } from "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
import { useChart as D } from "../../useCore/useChart.mjs";
import { parseDataset as O } from "../../utils/parseDataset.mjs";
const v = { class: "zerov-widget" }, E = ["id"], g = i({ name: "zv-chart-pie-basic" }), B = /* @__PURE__ */ i({
  ...g,
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
  setup(u, { expose: p, emit: d }) {
    const e = u, h = d, {
      id: l,
      setOption: r,
      renderChart: c,
      renderData: n
    } = D({
      basicOption: t.cloneDeep(e.basicOption),
      useEvents: e.useEvents,
      customRenderData: (s) => (s = t.cloneDeep(s), new Promise((o) => {
        window.SHJDatasourceTimer(e.sources, () => {
          window.SHJDatasource(e.sources).then((m) => {
            s.dataset = O(t.cloneDeep(m)), o(s);
          });
        });
      })),
      emit: h
    });
    return a(() => e.sources, () => {
      e.sources && e.sources.length > 0 && n(e.basicOption).then((s) => {
        r(s);
      });
    }, {
      deep: !0
    }), a(() => t.cloneDeep(e.basicOption), (s, o) => {
      t.isEqual(s, o) || c(s);
    }, {
      deep: !0
    }), p({
      refresh: () => {
        e.sources && e.sources.length > 0 && c(e.basicOption), n(e.basicOption).then((s) => {
          r(s);
        });
      },
      refreshView: () => {
        e.sources && e.sources.length > 0 && c(e.basicOption);
      },
      refreshData: () => {
        n(e.basicOption).then((s) => {
          r(s);
        });
      }
    }), (s, o) => (f(), _("div", v, [
      b("div", {
        id: w(l),
        class: "widget"
      }, null, 8, E)
    ]));
  }
});
export {
  B as default
};
