import { defineComponent as s, watch as d, openBlock as w, createElementBlock as y, normalizeStyle as S, unref as l, toDisplayString as g, ref as D, onMounted as _, nextTick as v } from "vue";
import { l as i } from "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
import { autoInstallFont as b, jsonToCssStyle as k } from "../../utils/json2css.mjs";
const C = ["ztitle"], j = s({ name: "zv-text-text-dynamic" }), $ = /* @__PURE__ */ s({
  ...j,
  props: {
    basicOption: {},
    sources: {}
  },
  setup(p, { expose: f }) {
    const r = p, x = () => {
      const t = D(""), o = (e) => {
        b(e.fontFamily);
        const a = {};
        e.color && e.color.includes("linear-gradient") && (a.backgroundImage = e.color, a["-webkit-background-clip"] = "text", a.color = "transparent");
        const h = {};
        return e.textAlign === "left" && (e.justifyContent = "flex-start"), e.textAlign === "center" && (e.justifyContent = "center"), e.textAlign === "right" && (e.justifyContent = "flex-end"), {
          ...k(e),
          ...a,
          ...h,
          ...e.textShadow.show ? { "--text-shadow": `${e.textShadow.x}px ${e.textShadow.y}px ${e.textShadow.value}px ${e.textShadow.color}` } : {}
        };
      }, c = () => {
        window.SHJDatasourceTimer(r.sources, () => {
          window.SHJDatasource(r.sources).then((e) => {
            t.value = e[0].data[0].data[0].value;
          });
        });
      };
      return _(() => v(() => c())), { rendererDomStyle: o, init: c, value: t };
    }, { rendererDomStyle: m, init: n, value: u } = x();
    return d(() => i.cloneDeep(r.basicOption), (t, o) => {
      i.isEqual(t, o) || n();
    }, { deep: !0 }), d(() => i.cloneDeep(r.sources), (t, o) => {
      i.isEqual(t, o) || n();
    }, { deep: !0 }), f({
      refresh: () => n(),
      refreshView: () => n(),
      refreshData: () => n()
    }), (t, o) => (w(), y("p", {
      class: "zerov-widget-text",
      style: S(l(m)(t.basicOption.css)),
      ztitle: l(u)
    }, g(l(u)), 13, C));
  }
});
export {
  $ as default
};
