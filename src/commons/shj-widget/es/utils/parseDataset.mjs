import { l as o } from "../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
const i = (a, n) => {
  const e = {};
  a[0] && o.isArray(a[0].data) ? a[0].data.forEach((r) => {
    const t = r.key;
    o.isArray(r.data) && r.data.forEach((c) => {
      const s = c.category, l = c.value;
      e[s] || (e[s] = { category: s }), e[s][t] ? e[s][t] += l : e[s][t] = l;
    });
  }) : e.key = {};
  const d = Object.values(e);
  return {
    dimensions: n || Object.keys(d[0]),
    source: Object.values(o.cloneDeep(e))
  };
};
export {
  i as parseDataset
};
