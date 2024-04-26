var s = Object.defineProperty;
var n = (e, t, o) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var r = (e, t, o) => (n(e, typeof t != "symbol" ? t + "" : t, o), o);
import * as i from "../../../../node_modules/.pnpm/three@0.135.0/node_modules/three/build/three.module.mjs";
import l from "../../../../node_modules/.pnpm/three-orbit-controls@82.1.0/node_modules/three-orbit-controls/index.mjs";
class C {
  constructor(t, o) {
    r(this, "OrbitControls");
    r(this, "Controls");
    r(this, "camera");
    r(this, "webGlRenderer");
    this.OrbitControls = l(i), this.camera = t, this.webGlRenderer = o;
  }
  init() {
    return this.Controls = new this.OrbitControls(this.camera, this.webGlRenderer.domElement), this.Controls.enableZoom = !0, this.Controls.autoRotate = !1, this.Controls.autoRotateSpeed = 2, this.Controls.minDistance = 5, this.Controls.maxDistance = 100, this.Controls.enablePan = !0, this.Controls.enableKeys = !1, this.Controls.update(), this;
  }
}
export {
  C as ObtControls
};
