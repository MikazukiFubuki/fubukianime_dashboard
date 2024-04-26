import { defineComponent as s, unref as i, openBlock as k, createElementBlock as y, normalizeStyle as h, toDisplayString as I, createCommentVNode as O, ref as c, onMounted as _ } from "vue";
import "../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/dayjs.min.mjs";
import "../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/locale/zh-cn.mjs";
import "../../zerov-packages/utils/src/dateTimeUtils.mjs";
import { imgsPreloader as S } from "../../zerov-packages/utils/src/imgPreloader.mjs";
import { autoInstallFont as B, jsonToCssStyle as r } from "../../utils/json2css.mjs";
const D = s({ name: "zv-interaction-button-image" }), W = /* @__PURE__ */ s({
  ...D,
  props: {
    basicOption: {}
  },
  setup(u) {
    const o = u, m = () => {
      const t = c(), n = c(!1), a = (e) => !e.startsWith("http") && !e.startsWith("//") ? "../" + e : e, d = (e) => {
        if (t.value) {
          B(o.basicOption.css.fontFamily);
          const p = `url(${e.backgroundImage})`, f = `url(${a(e.hover.backgroundImage)})`, v = `url(${a(e.active.backgroundImage)})`;
          return {
            ...r(e),
            ...r(e.hover, "hover"),
            ...r(e.active, "active"),
            "background-image": p,
            "--hover-background-image": f,
            "--active-background-image": v
          };
        }
        return {};
      };
      return _(() => {
        S(
          [
            o.basicOption.css.backgroundImage,
            o.basicOption.css.hover.backgroundImage,
            o.basicOption.css.active.backgroundImage
          ]
        ).finally(() => {
          setTimeout(() => n.value = !0, 100);
        });
      }), { rendererDomStyle: d, buttonRef: t, loading: n };
    }, { rendererDomStyle: g, buttonRef: l, loading: b } = m();
    return (t, n) => i(b) ? (k(), y("button", {
      key: 0,
      ref_key: "buttonRef",
      ref: l,
      class: "zv-button",
      style: h(i(g)(t.basicOption.css))
    }, I(t.basicOption.value), 5)) : O("", !0);
  }
});
export {
  W as default
};
