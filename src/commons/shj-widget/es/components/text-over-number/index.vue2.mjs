import { defineComponent as m, watch as c, openBlock as _, createBlock as C, unref as n, normalizeStyle as V, ref as d, onMounted as j, nextTick as $ } from "vue";
import { l } from "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
import b from "../../node_modules/.pnpm/vue-countup-v3@1.4.0_vue@3.4.19/node_modules/vue-countup-v3/dist/vue-countup-v3.es.mjs";
import { Odometer as T } from "../../node_modules/.pnpm/odometer_countup@1.0.4/node_modules/odometer_countup/dist/odometer.min.mjs";
import { nanoid as f } from "../../node_modules/.pnpm/nanoid@4.0.2/node_modules/nanoid/index.browser.mjs";
import { autoInstallFont as z, jsonToCssStyle as A } from "../../utils/json2css.mjs";
const E = m({ name: "zv-text-over-number" }), M = /* @__PURE__ */ m({
  ...E,
  props: {
    basicOption: {},
    sources: {}
  },
  setup(x, { expose: y }) {
    const r = x, h = (t) => {
      const o = d(f()), p = d(0), u = d(), s = () => {
        window.SHJDatasourceTimer(r.sources, () => {
          window.SHJDatasource(r.sources).then((e) => {
            o.value = f(), p.value = e[0].data[0].data[0].value, u.value = {
              startVal: t.countUp.startVal,
              separator: t.countUp.separator,
              decimal: t.countUp.decimal,
              decimalPlaces: t.countUp.decimalPlaces,
              duration: t.countUp.duration,
              prefix: t.countUp.prefix,
              suffix: t.countUp.suffix
            }, t.countUp.isOdometer && (u.value.plugin = new T({
              duration: t.countUp.duration,
              lastDigitDelay: 0
            }));
          });
        });
      }, k = (e) => {
        z(e.fontFamily);
        const i = {};
        e.color && e.color.includes("linear-gradient") && (i.backgroundImage = e.color, i["-webkit-background-clip"] = "text", i.color = "transparent");
        const F = {};
        return e.textAlign === "left" && (e.justifyContent = "flex-start"), e.textAlign === "center" && (e.justifyContent = "center"), e.textAlign === "right" && (e.justifyContent = "flex-end"), {
          ...A(e),
          ...i,
          ...F,
          ...e.textShadow.show ? { textShadow: `${e.textShadow.x}px ${e.textShadow.y}px ${e.textShadow.value}px ${e.textShadow.color}` } : {}
        };
      }, D = () => {
      };
      return j(() => $(() => s())), {
        key: o,
        init: s,
        options: u,
        endValue: p,
        onFinished: D,
        rendererDomStyle: k
      };
    }, {
      key: w,
      init: a,
      options: v,
      endValue: S,
      onFinished: g,
      rendererDomStyle: U
    } = h(r.basicOption);
    return c(() => l.cloneDeep(r.basicOption), (t, o) => {
      l.isEqual(t, o) || a();
    }, { deep: !0 }), c(() => l.cloneDeep(r.sources), (t, o) => {
      l.isEqual(t, o) || a();
    }, { deep: !0 }), y({
      refresh: () => a(),
      refreshView: () => a(),
      refreshData: () => a()
    }), (t, o) => (_(), C(n(b), {
      key: n(w),
      class: "zerov-widget-over-number",
      "end-val": n(S),
      options: n(v),
      loop: t.basicOption.countUp.loop,
      delay: t.basicOption.countUp.delay,
      style: V(n(U)(t.basicOption.css)),
      onFinished: n(g)
    }, null, 8, ["end-val", "options", "loop", "delay", "style", "onFinished"]));
  }
});
export {
  M as default
};
