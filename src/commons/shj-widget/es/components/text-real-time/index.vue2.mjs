import { defineComponent as c, watch as S, openBlock as g, createElementBlock as T, normalizeStyle as w, unref as n, toDisplayString as _, ref as u, onMounted as b, onBeforeUnmount as z } from "vue";
import { l as f } from "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
import l from "../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/dayjs.min.mjs";
import "../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/locale/zh-cn.mjs";
import { autoInstallFont as j, jsonToCssStyle as C } from "../../utils/json2css.mjs";
const I = ["ztitle"], k = c({ name: "zv-text-real-time" }), B = /* @__PURE__ */ c({
  ...k,
  props: {
    basicOption: {},
    datasource: {}
  },
  setup(d) {
    const i = d, p = (o) => {
      const t = u(), r = u(l().locale("zh-cn").format(o.format)), h = (e) => {
        j(e.fontFamily);
        const a = {};
        e.color && e.color.includes("linear-gradient") && (a.backgroundImage = e.color, a["-webkit-background-clip"] = "text", a.color = "transparent");
        const y = {};
        return e.textAlign === "left" && (e.justifyContent = "flex-start"), e.textAlign === "center" && (e.justifyContent = "center"), e.textAlign === "right" && (e.justifyContent = "flex-end"), {
          ...C(e),
          ...a,
          ...y,
          ...e.textShadow.show ? { "--text-shadow": `${e.textShadow.x}px ${e.textShadow.y}px ${e.textShadow.value}px ${e.textShadow.color}` } : {}
        };
      }, v = (e) => {
        t.value && clearInterval(t.value), t.value = setInterval(() => {
          r.value = l().locale("zh-cn").format(e);
        }, 1e3);
      };
      return b(() => {
        t.value = setInterval(() => {
          r.value = l().locale("zh-cn").format(o.format);
        }, 1e3);
      }), z(() => {
        t.value && clearInterval(t.value);
      }), { updateRealTime: v, realTime: r, rendererDomStyle: h };
    }, { updateRealTime: s, realTime: m, rendererDomStyle: x } = p(i.basicOption);
    return S(() => f.cloneDeep(i.basicOption.format), (o, t) => {
      f.isEqual(o, t) || s(o);
    }, {
      deep: !0
    }), (o, t) => (g(), T("div", {
      class: "real-time",
      style: w(n(x)(o.basicOption.css)),
      ztitle: n(m)
    }, _(n(m)), 13, I));
  }
});
export {
  B as default
};
