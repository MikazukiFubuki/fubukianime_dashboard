import { l as r } from "../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
function l(t, o) {
  const e = {};
  for (const s in t)
    if (!r.isObject(t[s])) {
      const c = a(s);
      ["fontSize", "borderWidth", "borderRadius", "gap", "-webkit-text-stroke-width", "letterSpacing"].includes(s) && r.isNumber(t[s]) ? e[(o ? `--${o}-` : "") + c] = `${t[s]}px` : e[(o ? `--${o}-` : "") + c] = t[s];
    }
  return e;
}
function a(t) {
  return t.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
}
const d = (t) => {
  if (t && t.startsWith("SHJ-")) {
    let o = !1;
    if (document.fonts.forEach((e) => {
      e.family === t && (o = !0);
    }), !o) {
      const e = t.slice(4, t.lastIndexOf("-")), s = e.slice(0, e.lastIndexOf("-")), c = t.slice(t.lastIndexOf("-") + 1, t.length), n = new FontFace(t, `url(https://lganv-1304359499.cos.ap-beijing.myqcloud.com/lg_cos_static/fonts/${s}/${e}.${c})`);
      document.fonts.add(n), n.load().then(() => {
        console.log(`字体加载成功 [${t}]`);
      }).catch(() => {
        console.error(`字体加载失败 [${t}]`);
      });
    }
  }
};
export {
  d as autoInstallFont,
  a as camelCaseToDash,
  l as jsonToCssStyle
};
