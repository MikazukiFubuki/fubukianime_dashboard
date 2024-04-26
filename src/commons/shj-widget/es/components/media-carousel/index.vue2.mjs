import { defineComponent as l, ref as f, watch as g, resolveComponent as s, openBlock as o, createBlock as a, withCtx as t, createElementBlock as w, Fragment as y, renderList as h, createElementVNode as v } from "vue";
import { register as k } from "../../node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/swiper-element-bundle.mjs";
import { nanoid as r } from "../../node_modules/.pnpm/nanoid@4.0.2/node_modules/nanoid/index.browser.mjs";
import { l as p } from "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
const E = ["src"], B = l({ name: "zv-media-carousel" }), V = /* @__PURE__ */ l({
  ...B,
  props: {
    basicOption: {},
    datasource: {}
  },
  setup(c) {
    k();
    const d = c, i = f(r());
    return g(() => p.cloneDeep(d.basicOption), (e, n) => {
      p.isEqual(e, n) || (i.value = r());
    }, {
      deep: !0
    }), (e, n) => {
      const u = s("swiper-slide"), b = s("swiper-container");
      return o(), a(b, {
        key: i.value,
        class: "carousel",
        direction: e.basicOption.direction,
        speed: e.basicOption.speed,
        "round-lengths": e.basicOption.roundLengths,
        "grab-cursor": e.basicOption.grabCursor,
        rewind: e.basicOption.rewind,
        loop: e.basicOption.loop,
        "slides-per-view": e.basicOption.slidesPerView,
        "space-between": e.basicOption.spaceBetween,
        autoplay: e.basicOption.autoplay,
        delay: e.basicOption.delay,
        "stop-on-last-slide": e.basicOption.stopOnLastSlide,
        "reverse-direction": e.basicOption.reverseDirection,
        "pause-on-mouse-enter": e.basicOption.pauseOnMouseEnter,
        "free-mode": e.basicOption.freeMode,
        effect: e.basicOption.effect,
        pagination: e.basicOption.pagination,
        "pagination-type": e.basicOption.paginationType
      }, {
        default: t(() => [
          (o(!0), w(y, null, h(e.basicOption.photoGallery, (m, O) => (o(), a(u, { key: O }, {
            default: t(() => [
              v("img", {
                class: "image",
                src: m.url,
                alt: ""
              }, null, 8, E)
            ]),
            _: 2
          }, 1024))), 128))
        ]),
        _: 1
      }, 8, ["direction", "speed", "round-lengths", "grab-cursor", "rewind", "loop", "slides-per-view", "space-between", "autoplay", "delay", "stop-on-last-slide", "reverse-direction", "pause-on-mouse-enter", "free-mode", "effect", "pagination", "pagination-type"]);
    };
  }
});
export {
  V as default
};
