import { l as s } from "../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
const i = (a, e) => {
  const t = s.cloneDeep(e);
  return a[0] && s.isArray(a[0].data) && a[0].data.forEach((o, r) => {
    a[0].data[r] ? t.series[r].data = a[0].data[r].data : t.series[r].data = [];
  }), t;
};
export {
  i as parseOtherData
};
