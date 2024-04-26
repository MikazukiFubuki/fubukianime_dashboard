import { DoubleSide as d, Color as w } from "../../../node_modules/.pnpm/three@0.135.0/node_modules/three/build/three.module.mjs";
import { Line2 as g } from "../../../node_modules/.pnpm/three@0.135.0/node_modules/three/examples/jsm/lines/Line2.mjs";
import { LineGeometry as L } from "../../../node_modules/.pnpm/three@0.135.0/node_modules/three/examples/jsm/lines/LineGeometry.mjs";
import { LineMaterial as m } from "../../../node_modules/.pnpm/three@0.135.0/node_modules/three/examples/jsm/lines/LineMaterial.mjs";
const V = (s, o) => {
  const r = [], t = [];
  return new Array(o).fill(0).forEach((i, c) => {
    const e = b(s, c * 100);
    r.push(e), t.push(e.mesh);
  }), { mesh: t, animations: r };
}, v = (s) => {
  s.forEach((o) => {
    o.index + 1 > o.linePointsV3.length - o.verticNum ? o.index = 0 : o.index += 3, o.mesh.geometry.setPositions(
      o.linePointsV3.slice(o.index, o.index + o.verticNum).reduce((r, t) => r.concat(t.x, t.y, t.z), [])
    );
  });
}, b = (s, o = 0, r = ["#00ffff", "#ffffff"], t = 400, i = 30) => {
  const c = new L(), e = s.getPoints(t);
  c.setPositions(
    e.slice(o, o + i).reduce((a, n) => a.concat(n.x, n.y, n.z), [])
  );
  const l = new m({
    transparent: !0,
    side: d,
    linewidth: 5,
    depthTest: !1,
    // 慎用
    vertexColors: !0
  }), p = y(r[1], r[0], i, 1).reduce((a, n) => {
    const u = new w(n);
    return a.concat(u.r, u.g, u.b);
  }, []);
  c.setColors(p), l.resolution.set(window.innerWidth, window.innerHeight);
  const f = new g(c, l);
  return f.computeLineDistances(), {
    index: o,
    verticNum: i,
    mesh: f,
    linePointsV3: e
  };
}, y = (s, o, r, t) => {
  const i = function(n) {
    return n.length === 4 ? n.substr(1).split("").map(function(u) {
      return 17 * parseInt(u, 16);
    }) : [
      n.substr(1, 2),
      n.substr(3, 2),
      n.substr(5, 2)
    ].map(function(u) {
      return parseInt(u, 16);
    });
  }, c = function(n) {
    return n.length === 1 ? `0${n}` : n;
  };
  let e, l, h;
  const p = [], f = [];
  t = t || 1;
  const a = function(n) {
    return Math.pow(n / 255, t);
  };
  s = i(s).map(a), o = i(o).map(a);
  for (let n = 0; n < r; n++) {
    for (l = n / (r - 1), h = 1 - l, e = 0; e < 3; e++)
      f[e] = c(
        Math.round(
          Math.pow(s[e] * h + o[e] * l, 1 / t) * 255
        ).toString(16)
      );
    p.push(`#${f.join("")}`);
  }
  return p;
};
export {
  V as createGradientLine,
  b as createMovingLine,
  y as gradientColors,
  v as startAnimationGradientLine
};
