import { defineComponent as y, useCssVars as S, ref as b, onMounted as k, watch as O, openBlock as o, createElementBlock as i, createElementVNode as w, Fragment as d, renderList as p, toDisplayString as m, createVNode as B, unref as V, withCtx as C, createCommentVNode as D } from "vue";
import { Vue3SeamlessScroll as E } from "../../node_modules/.pnpm/vue3-seamless-scroll@2.0.1/node_modules/vue3-seamless-scroll/dist/vue3-seamless-scroll.es.mjs";
import { l as n } from "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
import { nanoid as f } from "../../node_modules/.pnpm/nanoid@4.0.2/node_modules/nanoid/index.browser.mjs";
const W = { class: "table-header" }, N = y({ name: "zv-text-table-scroll" }), J = /* @__PURE__ */ y({
  ...N,
  props: {
    basicOption: {},
    useEvents: {},
    sources: {}
  },
  setup(g, { expose: v }) {
    S((e) => ({
      "50ef4882": e.basicOption.css.table.borderWidth + "px",
      "4c12a996": e.basicOption.css.table.borderStyle,
      "4b2ebb48": e.basicOption.css.table.borderColor,
      "735bfc04": e.basicOption.css.table.paddingLeft + "px",
      "9db6262c": e.basicOption.css.table.alignItems,
      "77bbbd10": e.basicOption.css.table.justifyContent,
      "1afe2400": e.basicOption.css.header.background,
      "9da05720": e.basicOption.css.header.borderBottomWidth + "px",
      "3558e530": e.basicOption.css.header.borderBottomStyle,
      "3720c1cc": e.basicOption.css.header.borderBottomColor,
      "5a0e2b74": e.basicOption.css.header.height + "px",
      "4d72db51": e.basicOption.css.header.color,
      "04474642": e.basicOption.css.header.fontSize,
      "16221c79": e.basicOption.css.header.fontWeight,
      f6b300e0: e.basicOption.css.header.fontStyle,
      "508a3f3b": e.basicOption.css.body.borderBottomWidth + "px",
      "6674e0fd": e.basicOption.css.body.borderBottomStyle,
      "6590f2af": e.basicOption.css.body.borderBottomColor,
      "2aaadcee": e.basicOption.css.body.height + "px",
      "7c25b334": e.basicOption.css.body.color,
      b0a2b1e6: e.basicOption.css.body.fontSize,
      "7d347684": e.basicOption.css.body.fontWeight,
      "4e2b3825": e.basicOption.css.body.fontStyle,
      "5993480b": e.basicOption.css.body.background,
      "6651070e": e.basicOption.css.oddBackground
    }));
    const u = b(f()), l = b([]), t = g, c = b(t.basicOption.scroll.start), a = () => {
      window.SHJDatasourceTimer(t.sources, () => {
        window.SHJDatasource(t.sources).then((e) => {
          l.value = n.cloneDeep(e[0].data[0].data), u.value = f(), c.value = t.basicOption.scroll.start;
        });
      });
    };
    return k(() => a()), O(() => n.cloneDeep(t.basicOption), (e, r) => {
      n.isEqual(e, r) || a();
    }, {
      deep: !0
    }), O(() => n.cloneDeep(t.sources), (e, r) => {
      n.isEqual(e, r) || a();
    }, {
      deep: !0
    }), v({
      refresh: () => a(),
      refreshView: () => a(),
      refreshData: () => a()
    }), (e, r) => l.value.length > 0 ? (o(), i("div", {
      key: u.value,
      class: "table-scroll"
    }, [
      w("div", W, [
        (o(!0), i(d, null, p(Object.keys(l.value[0]), (s) => (o(), i("div", {
          key: s,
          class: "th"
        }, m(s), 1))), 128))
      ]),
      B(V(E), {
        modelValue: c.value,
        "onUpdate:modelValue": r[0] || (r[0] = (s) => c.value = s),
        direction: e.basicOption.scroll.direction,
        list: l.value,
        "is-watch": "",
        hover: e.basicOption.scroll.hover,
        "limit-scroll-num": e.basicOption.scroll.limitScrollNum,
        "single-height": e.basicOption.scroll.isSingle ? e.basicOption.css.body.height : 0,
        "single-wait-time": e.basicOption.scroll.singleWaitTime,
        class: "table-body"
      }, {
        default: C(() => [
          (o(!0), i(d, null, p(l.value, (s) => (o(), i("div", {
            key: s,
            class: "tr"
          }, [
            (o(!0), i(d, null, p(s, (h) => (o(), i("div", {
              key: h,
              class: "td"
            }, m(h), 1))), 128))
          ]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "direction", "list", "hover", "limit-scroll-num", "single-height", "single-wait-time"])
    ])) : D("", !0);
  }
});
export {
  J as default
};
