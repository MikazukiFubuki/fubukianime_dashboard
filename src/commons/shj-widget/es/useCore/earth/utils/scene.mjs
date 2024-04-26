var c = Object.defineProperty;
var d = (s, e, t) => e in s ? c(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var r = (s, e, t) => (d(s, typeof e != "symbol" ? e + "" : e, t), t);
import { Scene as f, Color as n, Fog as m, PerspectiveCamera as w, WebGLRenderer as u, AmbientLight as g, DirectionalLight as R, GridHelper as b, AxesHelper as p, TextureLoader as x } from "../../../node_modules/.pnpm/three@0.135.0/node_modules/three/build/three.module.mjs";
import G from "../../../node_modules/.pnpm/stats.js@0.17.0/node_modules/stats.js/build/stats.min.mjs";
import { labelRenderer as C } from "./label.mjs";
class y {
  constructor(e, t) {
    r(this, "stats");
    r(this, "scene");
    r(this, "camera");
    r(this, "webGlRenderer");
    r(this, "labelRenderer");
    r(this, "element");
    r(this, "animationFrameId", 0);
    r(this, "textures", {});
    this.element = e, this.scene = this.createScene(t), this.stats = this.createStats(t), this.camera = this.createCamera(this.element), this.webGlRenderer = this.createWebGLRenderer(this.element), window.addEventListener("resize", () => this.onWindowResize(this.element));
  }
  createScene(e) {
    const t = new f();
    return t.background = new n(e.background), e.fog && (t.fog = new m(e.fogColor, e.fogNear, e.fogFar)), t;
  }
  createCamera(e) {
    const t = new w(45, e.offsetWidth / e.offsetHeight, 0.1, 1e4);
    return t.position.set(10, 10, 10), t.lookAt(0, 0, 0), t;
  }
  createWebGLRenderer(e) {
    const t = new u({
      preserveDrawingBuffer: !0,
      // 开启缓冲区保护
      antialias: !0,
      alpha: !0
    });
    return t.setClearColor(new n(0)), t.setPixelRatio(window.devicePixelRatio), t.autoClear = !1, t.clearColor(), t.setSize(e.offsetWidth, e.offsetHeight), e.appendChild(t.domElement), this.labelRenderer = C(e), t;
  }
  createAmbientLight(e) {
    return new g(
      new n(e.color),
      e.intensity
    );
  }
  createDirectionalLight(e) {
    const t = new R(
      new n(e.color),
      e.intensity
    );
    return t.position.set(
      e.x,
      e.y,
      e.z
    ), t.lookAt(0, 0, 0), t;
  }
  createGridHelper(e) {
    if (e.show)
      return new b(
        e.width,
        e.height,
        new n(e.color),
        new n(e.color)
      );
  }
  createAxesHelper(e) {
    if (e.show)
      return new p(e.size);
  }
  createStats(e) {
    if (e.stats) {
      const t = new G();
      return t.domElement.style.position = "absolute", t.domElement.style.top = "5px", t.domElement.style.left = "5px", t.showPanel(e.statsType), this.element.appendChild(t.dom), t;
    }
    return null;
  }
  resize() {
    this.webGlRenderer.setSize(this.element.offsetWidth, this.element.offsetHeight), this.camera.aspect = this.element.offsetWidth / this.element.offsetHeight, this.camera.updateProjectionMatrix();
  }
  render() {
    this.animationFrameId = requestAnimationFrame(() => {
      this.stats && this.stats.update(), this.render(), this.webGlRenderer.clear(), this.webGlRenderer.render(this.scene, this.camera);
    });
  }
  add(...e) {
    e.forEach((t) => {
      t && this.scene.add(t);
    });
  }
  dispose() {
    try {
      cancelAnimationFrame(this.animationFrameId), this.element.innerHTML = "", this.camera.clear(), this.webGlRenderer.forceContextLoss(), this.webGlRenderer.dispose(), this.scene.clear();
    } catch {
      console.error("ERROR ：clearScene");
    }
  }
  onWindowResize(e) {
    const t = e.offsetWidth, o = e.offsetHeight;
    this.webGlRenderer.setSize(t, o), this.camera.aspect = t / o, this.camera.updateProjectionMatrix();
  }
  loadTextures(e, t) {
    const o = new x();
    let i = 0;
    const a = () => {
      if (i < e.length) {
        const h = e[i].value;
        h ? o.load(
          h,
          (l) => {
            this.textures[e[i].key] = l, i++, a();
          },
          void 0,
          function(l) {
            console.error("An error occurred while loading texture: ", l), i++, a();
          }
        ) : (i++, a());
      } else
        t(this.textures);
    };
    a();
  }
}
export {
  y as Scene
};
