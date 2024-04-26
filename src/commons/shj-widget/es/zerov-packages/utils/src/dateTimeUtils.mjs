import n from "../../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/dayjs.min.mjs";
import "../../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/locale/zh-cn.mjs";
import s from "../../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/relativeTime.mjs";
n.extend(s);
n.locale("zh-cn");
const a = () => {
  const t = /* @__PURE__ */ new Date(), e = /* @__PURE__ */ new Date();
  return e.setTime(e.getTime() - 3600 * 1e3 * 24), [e, t];
}, o = () => {
  const t = /* @__PURE__ */ new Date(), e = /* @__PURE__ */ new Date();
  return e.setTime(e.getTime() - 3600 * 1e3 * 24 * 7), [e, t];
}, r = () => {
  const t = /* @__PURE__ */ new Date(), e = /* @__PURE__ */ new Date();
  return e.setTime(e.getTime() - 3600 * 1e3 * 24 * 30), [e, t];
}, c = () => {
  const t = /* @__PURE__ */ new Date(), e = /* @__PURE__ */ new Date();
  return e.setTime(e.getTime() - 3600 * 1e3 * 24 * 30 * 3), [e, t];
}, m = () => {
  const t = /* @__PURE__ */ new Date(), e = /* @__PURE__ */ new Date();
  return e.setTime(e.getTime() - 3600 * 1e3 * 24 * 30 * 12), [e, t];
};
a(), o(), r(), c(), m();
export {
  c as getLast3Month,
  a as getLastDay,
  r as getLastMonth,
  o as getLastWeek,
  m as getLastYear
};
