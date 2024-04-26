import { Line2 as s } from "../../../node_modules/.pnpm/three@0.135.0/node_modules/three/examples/jsm/lines/Line2.mjs";
import { LineGeometry as c } from "../../../node_modules/.pnpm/three@0.135.0/node_modules/three/examples/jsm/lines/LineGeometry.mjs";
import { LineMaterial as m } from "../../../node_modules/.pnpm/three@0.135.0/node_modules/three/examples/jsm/lines/LineMaterial.mjs";
const u = (o, e) => {
  const r = [];
  o.forEach(({ x: n, y: a, z: l }) => r.push(n, a, l));
  const t = new c();
  t.setPositions(r);
  const i = new m({
    transparent: !0,
    color: e.color,
    linewidth: e.lineWidth * 0.01,
    opacity: e.opacity,
    worldUnits: !0,
    alphaToCoverage: !0
  });
  return new s(t, i);
};
export {
  u as DrawLine
};
