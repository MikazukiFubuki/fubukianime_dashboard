var J = Object.defineProperty;
var K = (v, f, t) => f in v ? J(v, f, { enumerable: !0, configurable: !0, writable: !0, value: t }) : v[f] = t;
var c = (v, f, t) => (K(v, typeof f != "symbol" ? f + "" : f, t), t);
import { nanoid as T } from "../../node_modules/.pnpm/nanoid@4.0.2/node_modules/nanoid/index.browser.mjs";
import { Group as p, Sprite as W, SphereBufferGeometry as I, Points as R, PointsMaterial as $, MeshStandardMaterial as C, Color as z, DoubleSide as L, Mesh as M, CatmullRomCurve3 as V, SpriteMaterial as Y, TextureLoader as G, BufferGeometry as H, Float32BufferAttribute as q, AdditiveBlending as j, Vector3 as m, CubicBezierCurve3 as _, TubeBufferGeometry as U, BufferAttribute as X, ShaderMaterial as tt, PlaneBufferGeometry as E, BoxBufferGeometry as et, MeshBasicMaterial as rt, Matrix4 as Q, Euler as it, Quaternion as ot, Spherical as at, Ray as st } from "../../node_modules/.pnpm/three@0.135.0/node_modules/three/build/three.module.mjs";
import { gsap as nt } from "../../node_modules/.pnpm/gsap@3.12.2/node_modules/gsap/index.mjs";
import { textureCallout as ct } from "./base64/Callout.mjs";
import { textureCalloutAperture as ht } from "./base64/CalloutAperture.mjs";
import { innner as lt } from "./base64/rotation/innner.mjs";
import { out as mt } from "./base64/rotation/out.mjs";
import { textureLightColumn as ut } from "./base64/LightColumn.mjs";
import { Scene as pt } from "./utils/scene.mjs";
import { ObtControls as dt } from "./utils/controls/obt.mjs";
import { createComposer as yt } from "./utils/composer.mjs";
import { DrawLine as O } from "./utils/line2.mjs";
import { createGradientLine as ft, startAnimationGradientLine as gt } from "./utils/GradientLine.mjs";
import { tag2D as D } from "./utils/label.mjs";
class Ft extends pt {
  constructor(t, e) {
    super(t, e.sceneParameter);
    c(this, "group", new p());
    c(this, "name");
    c(this, "mesh");
    c(this, "earth");
    c(this, "geometry");
    c(this, "material");
    c(this, "apertureName");
    c(this, "apertureSprite");
    c(this, "apertureMaterial");
    c(this, "cloudCoverName");
    c(this, "cloudCoverGeometry");
    c(this, "cloudCoverMaterial");
    c(this, "cloudCoverMesh");
    c(this, "starrySkyName");
    c(this, "starrySkyGeometry");
    c(this, "starrySkyPoints");
    c(this, "starrySkyMaterial");
    c(this, "flightLinesName");
    c(this, "flightLinesGroup");
    c(this, "lightBeamScatterName");
    c(this, "lightBeamScatterGroup");
    c(this, "scatterPoints", []);
    c(this, "rotationPoints", []);
    c(this, "lineCurve", []);
    c(this, "earthParameter");
    c(this, "apertureParameter");
    c(this, "cloudCoverParameter");
    c(this, "starrySkyParameter");
    c(this, "composerParameter");
    c(this, "gridHelperParameter");
    c(this, "axesHelperParameter");
    c(this, "ambientLightParameter");
    c(this, "directionalLightParameter");
    c(this, "animationGradientSegmentLine");
    c(this, "flyLineAnimation", { time: { value: 0 } });
    c(this, "starrySky");
    /**
    * Test Data
    * progress | velocity
    */
    c(this, "progress", 0);
    c(this, "velocity", 0.01);
    c(this, "composer");
    this.group.scale.set(0, 0, 0), this.name = "Earth", this.apertureName = "Aperture", this.cloudCoverName = "CloudCover", this.starrySkyName = "StarrySky", this.flightLinesName = "flightLinesName", this.earth = new p(), this.apertureSprite = new W(), this.earthParameter = e.earthParameter, this.apertureParameter = e.apertureParameter, this.cloudCoverParameter = e.cloudCoverParameter, this.starrySkyParameter = e.starrySkyParameter, this.composerParameter = e.composerParameter, this.gridHelperParameter = e.gridHelperParameter, this.axesHelperParameter = e.axesHelperParameter, this.ambientLightParameter = e.ambientLightParameter, this.directionalLightParameter = e.directionalLightParameter;
  }
  /** ********************************* 创建地球 START ******************************************** */
  async createEarth(t) {
    const e = this.earth.getObjectByName(this.name);
    return e && this.earth.remove(e), this.geometry = new I(
      t.radius * 0.1,
      t.subdivision,
      t.subdivision
    ), t.particle && this.earth.add(new R(this.geometry, new $({
      color: t.particleColor,
      transparent: !0,
      size: t.particleSize / 100
    }))), this.material = new C({
      map: this.textures.earthTexture,
      color: new z(t.color),
      side: L,
      transparent: t.transparent,
      opacity: t.opacity,
      wireframe: t.wireframe
    }), this.mesh = new M(this.geometry, this.material), this.mesh.name = this.name, this.earth.add(this.mesh), this.earth.rotation.set(0, 3.6, 0), this.earth;
  }
  /** ********************************* 创建地图描边 START ******************************************** */
  async createMapBorder(t, e) {
    let r = t;
    t === "china" && (r = (await import("./geojson/china.mjs")).default), t === "china-border" && (r = (await import("./geojson/china-border.mjs")).default), t === "world" && (r = (await import("./geojson/world.mjs")).default);
    const o = new p(), n = [];
    if (r.features.forEach((i) => {
      const a = new p();
      if (a.name = "border" + i.properties.name, this.earthParameter.label && this.earthParameter.label.show && t === "china" && i.properties.center && i.properties.name) {
        const s = D(`<p style="color:${this.earthParameter.label.color};font-size:${this.earthParameter.label.fontSize}px;">${i.properties.name}</p>`);
        s.position.copy(this.coordinateTransform(i.properties.center[0], i.properties.center[1])), o.add(s);
      }
      i.geometry.coordinates.forEach((s) => {
        const l = [];
        s.forEach((h, y) => {
          if (h[y] instanceof Array) {
            const g = h.map((u) => this.coordinateTransform(u[0], u[1]));
            n.push(g), a.add(O(g, e));
          } else
            l.push(this.coordinateTransform(h[0], h[1]));
        }), l.length > 0 && a.add(O(l, e));
      }), o.add(a);
    }), e.wakeline) {
      const i = new V(n[0]), { animations: a, mesh: s } = ft(i, e.wakelineNumber);
      this.animationGradientSegmentLine = a, s.forEach((l) => {
        this.earth.add(l);
      });
    }
    return o.name = t, o;
  }
  /** ********************************* 创建光晕 START ******************************************** */
  async createAperture(t, e) {
    const r = this.scene.getObjectByName(this.apertureName);
    if (r && this.scene.remove(r), t.show)
      return this.apertureMaterial = new Y({
        map: new G().load((await import("./base64/Aperture.mjs")).texture),
        transparent: t.transparent,
        color: new z(t.color),
        opacity: t.opacity,
        depthWrite: t.depthWrite
      }), this.apertureSprite = new W(this.apertureMaterial), this.apertureSprite.scale.set(
        e.radius * 0.1 * 3,
        e.radius * 0.1 * 3,
        1
      ), this.apertureSprite.name = this.apertureName, this.apertureSprite;
  }
  /** ********************************* 创建云层 START ******************************************** */
  async createCloudCover(t, e) {
    const r = this.earth.getObjectByName(this.cloudCoverName);
    if (r && this.earth.remove(r), t.show)
      return this.cloudCoverGeometry = new I(
        e.radius * 0.1 + 0.1,
        e.subdivision,
        e.subdivision
      ), this.cloudCoverMaterial = new C({
        map: new G().load((await import("./base64/CloudCover.mjs")).texture),
        color: new z(t.color),
        side: L,
        transparent: t.transparent,
        opacity: t.opacity,
        depthWrite: !1
      }), this.cloudCoverMesh = new M(this.cloudCoverGeometry, this.cloudCoverMaterial), this.cloudCoverMesh.name = this.cloudCoverName, this.cloudCoverMesh;
  }
  /** ********************************* 创建星空 START ******************************************** */
  async createStarrySky(t) {
    const e = this.scene.getObjectByName(this.starrySkyName);
    if (e && this.scene.remove(e), t.show) {
      const r = [], o = [];
      this.starrySkyGeometry = new H();
      for (let n = 0; n < t.number; n++) {
        const i = new m();
        i.x = Math.random() * 2 - 1, i.y = Math.random() * 2 - 1, i.z = Math.random() * 2 - 1, r.push(i.x, i.y, i.z);
        const a = new z();
        a.setHSL(Math.random() * 0.2 + 0.5, 0.55, Math.random() * 0.25 + 0.55), o.push(a.r, a.g, a.b);
      }
      return this.starrySkyGeometry.setAttribute(
        "position",
        new q(r, 3)
      ), this.starrySkyGeometry.setAttribute(
        "color",
        new q(o, 3)
      ), this.starrySkyMaterial = new $({
        map: new G().load((await import("./base64/StarrySky.mjs")).texture),
        color: t.color,
        size: t.size,
        transparent: !0,
        opacity: t.opacity,
        vertexColors: !0,
        blending: j,
        sizeAttenuation: !0
      }), this.starrySkyPoints = new R(this.starrySkyGeometry, this.starrySkyMaterial), this.starrySkyPoints.name = this.starrySkyName, this.starrySkyPoints.scale.set(500, 500, 500), this.starrySkyPoints;
    }
  }
  /** ********************************* 创建航线 START ******************************************** */
  createFlightLines(t, e) {
    const r = this.earth.getObjectByName(this.flightLinesName);
    return r && this.earth.remove(r), this.flightLinesGroup = new p(), this.flightLinesGroup.name = this.flightLinesName + T(), t.forEach((o) => {
      const n = this.coordinateTransform(o.coords[0][0], o.coords[0][1]), i = this.coordinateTransform(o.coords[1][0], o.coords[1][1]), a = this.createFlightLineBezierCurve(o, n, i, e.lineParameter, e.labelParameter), s = this.createScatterPoint("s->" + o.fromName, n, e.startScatterParameter), l = this.createScatterPoint("e->" + o.toName, i, e.endScatterParameter);
      this.flightLinesGroup.add(a, s, l);
    }), this.flightLinesGroup;
  }
  createFlightLineBezierCurve(t, e, r, o, n) {
    const [i, a, s, l] = this.getBezierCurveVCoords(
      e,
      r
    );
    if (n.show) {
      const u = D(`
                <p style="color:${n.color};font-size:${n.fontSize}px;">${t.fromName + " > " + t.toName}</p>
            `), b = new m().copy(a).add(s).multiplyScalar(0.5);
      u.position.copy(b), this.flightLinesGroup.add(u);
    }
    const h = new _(
      i,
      a,
      s,
      l
    );
    this.lineCurve.push(h);
    const y = h.getSpacedPoints(100), g = O(y, o);
    return g.name = t.fromName + "->" + t.toName, g;
  }
  /** ********************************* 创建飞线 START ******************************************** */
  async createFlyLines(t, e) {
    const r = this.earth.getObjectByName(this.flightLinesName);
    r && this.earth.remove(r), this.flightLinesGroup = new p(), this.flightLinesGroup.name = this.flightLinesName + T();
    let o, n, i;
    for await (const a of t) {
      const s = this.coordinateTransform(a.coords[0][0], a.coords[0][1]), l = this.coordinateTransform(a.coords[1][0], a.coords[1][1]);
      if (!i)
        i = this.createFlyLineBezierCurve(a, s, l, e.lineParameter, e.labelParameter, e.bgLineParameter), this.flightLinesGroup.add(i);
      else {
        const h = i.clone(), [y, g, u, b] = this.getBezierCurveVCoords(
          s,
          l
        ), S = new _(y, g, u, b).getPoints(1e3), F = new V(S), k = e.bgLineParameter.radius, d = e.bgLineParameter.segments, w = new U(F, S.length * d, k, d, !1);
        h.getObjectByName("hollowTube").geometry = w;
        const A = new H().setFromPoints(S), x = S.length, N = new Float32Array(x);
        for (let P = 0; P < x; P += 1)
          N[P] = P / x;
        A.setAttribute("percent", new X(N, 1)), h.getObjectByName("line").geometry = A, this.flightLinesGroup.add(h);
      }
      if (e.labelParameter.show && this.flightLinesGroup.add(this.createFlyLine2DLabel(a, s, l, e.labelParameter)), !n)
        n = this.createScatterPoint("e->" + a.toName, l, e.endScatterParameter), this.flightLinesGroup.add(n);
      else {
        const h = n.clone();
        h.position.set(s.x, s.y, s.z), h.quaternion.setFromUnitVectors(
          new m(0, 0, 1),
          new m(s.x, s.y, s.z).normalize()
        ), this.flightLinesGroup.add(h);
      }
      if (!o)
        o = this.createScatterPoint("s->" + a.fromName, s, e.startScatterParameter), this.flightLinesGroup.add(o);
      else {
        const h = o.clone();
        h.position.set(s.x, s.y, s.z), h.quaternion.setFromUnitVectors(
          new m(0, 0, 1),
          new m(s.x, s.y, s.z).normalize()
        ), this.flightLinesGroup.add(h);
      }
    }
    return this.flightLinesGroup;
  }
  createFlyLineMaterial(t) {
    const e = {
      number: { value: t.number },
      speed: { value: t.speed },
      length: { value: t.length },
      size: { value: t.size },
      color: { value: t.color }
    };
    return new tt({
      uniforms: {
        time: this.flyLineAnimation.time,
        number: e.number,
        speed: e.speed,
        length: e.length,
        size: e.size,
        color: {
          value: e.color.value ? new z(e.color.value) : new z(Math.random(), Math.random(), Math.random())
        }
      },
      vertexShader: `
            attribute float percent;
            uniform float time;
            uniform float number;
            uniform float speed;
            uniform float length;
            varying float opacity;
            uniform float size;
        
            void main()
            {
                float l = clamp(1.0-length, 0.0, 1.0);
        
                gl_PointSize = clamp(fract(percent*number + l - time*number*speed)-l, 0.0, 1.) * size * (1./length);
        
                opacity = gl_PointSize/size;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }`,
      fragmentShader: `
            varying float opacity;
            uniform vec3 color;

            void main(){
                if (opacity <=0.2){
                    discard;
                }
                gl_FragColor = vec4(color, 1.0);
            }
            `,
      transparent: !0,
      blending: j
    });
  }
  createFlyLineBezierCurve(t, e, r, o, n, i) {
    const a = new p(), [s, l, h, y] = this.getBezierCurveVCoords(
      e,
      r
    ), u = new _(s, l, h, y).getPoints(1e3);
    try {
      let d = function(w) {
        const A = new V(w), x = i.radius, N = i.segments, P = new U(A, w.length * N, x, N, !1), Z = new C({
          color: i.color,
          opacity: i.opacity,
          transparent: !0,
          depthTest: !1
        });
        return new M(P, Z);
      };
      if (i.show) {
        const w = d(u);
        w && (w.name = "hollowTube", a.add(w));
      }
    } catch {
    }
    const b = new H().setFromPoints(u), B = u.length, S = new Float32Array(B);
    for (let d = 0; d < B; d += 1)
      S[d] = d / B;
    b.setAttribute("percent", new X(S, 1));
    const F = this.createFlyLineMaterial(o), k = new R(b, F);
    return k.name = "line", a.add(k), a;
  }
  createFlyLine2DLabel(t, e, r, o) {
    const [n, i, a, s] = this.getBezierCurveVCoords(
      e,
      r
    );
    if (o.show) {
      const l = D(`
                    <p style="color:${o.color};font-size:${o.fontSize}px;">${t.fromName + " > " + t.toName}</p>
                `), h = new m().copy(i).add(a).multiplyScalar(0.5);
      return l.position.copy(h), l;
    }
    return null;
  }
  /** ********************************* 创建散点 START ******************************************** */
  createScatterPoint(t, e, r) {
    const o = new p();
    o.name = t, o.position.set(e.x, e.y, e.z), o.quaternion.setFromUnitVectors(
      new m(0, 0, 1),
      new m(e.x, e.y, e.z).normalize()
    );
    const n = this.createScatterPointMesh("in", ct, r), i = this.createScatterPointMesh("out", ht, r);
    return this.scatterPoints.push(i), o.add(n, i);
  }
  createScatterPointMesh(t, e, r) {
    const o = new G().load(e), n = new E(1, 1);
    n.rotateX(Math.PI);
    const i = new C({
      color: r.color,
      opacity: r.opacity,
      map: o,
      transparent: !0,
      side: L,
      depthWrite: !1
    }), a = new M(n, i), s = (t === "out" ? 0.025 : 0.015) * r.size;
    return a.scale.set(s, s, s), t === "out" && (a.size = s, a._s = Math.random() * 1 + 1), a;
  }
  /** ********************************* 创建旋转点 START ******************************************** */
  createRotationPoint(t, e, r) {
    const o = new p();
    o.name = t, o.position.set(e.x, e.y, e.z), o.quaternion.setFromUnitVectors(
      new m(0, 0, 1),
      new m(e.x, e.y, e.z).normalize()
    );
    const n = this.createRotationPointMesh("in", lt, r), i = this.createRotationPointMesh("out", mt, r);
    return this.rotationPoints.push(n), o.add(n, i);
  }
  createRotationPointMesh(t, e, r) {
    const o = new G().load(e), n = new E(1, 1);
    n.rotateX(Math.PI);
    const i = new C({
      color: r.color,
      opacity: r.opacity,
      map: o,
      transparent: !0,
      side: L,
      depthWrite: !1
    }), a = new M(n, i), s = (t === "out" ? 0.02 : 0.015) * r.size;
    return a.scale.set(s, s, s), t === "out" && (a.size = s, a._s = Math.random() * 1 + 1), a;
  }
  /** ********************************* 创建光柱 START ******************************************** */
  async createLightBeamScatter(t, e) {
    const r = this.earth.getObjectByName(this.lightBeamScatterName);
    r && this.earth.remove(r), this.lightBeamScatterGroup = new p(), this.lightBeamScatterGroup.name = this.lightBeamScatterName + T();
    for await (const o of t) {
      const n = this.coordinateTransform(o.value[0], o.value[1]), i = this.createRotationPoint(o.name, n, e.scatterParameter), a = this.createLightBeam(n, o.value[2], e.lightBeamParameter);
      this.earth.add(a), this.lightBeamScatterGroup.add(i);
    }
    return this.lightBeamScatterGroup;
  }
  createLightBeam(t, e, r) {
    const o = new p(), n = e ? r.baseHeight * e : r.baseHeight;
    let i, a;
    if (r.type === 1) {
      const y = new G().load(ut);
      i = new E(r.radius / 2, n), i.rotateX(Math.PI / 2), i.translate(0, 0, n / 2), a = new C({
        map: y,
        color: r.color,
        opacity: r.opacity,
        transparent: !0,
        side: L,
        depthWrite: !1
      });
    }
    r.type === 2 && (i = new et(0.05, n, 0.05), i.rotateX(Math.PI / 2), i.translate(0, 0, n / 2), a = new rt({
      color: r.color,
      opacity: r.opacity,
      transparent: !0,
      side: L,
      depthWrite: !1
    }));
    const s = new M(i, a);
    o.position.set(t.x, t.y, t.z), o.add(s, s.clone().rotateZ(Math.PI / 2));
    const l = new m(t.x, t.y, t.z).normalize(), h = new m(0, 0, 1);
    return o.quaternion.setFromUnitVectors(h, l), o;
  }
  moveOnCurve(t, e) {
    if (!(!t && !e))
      if (this.progress <= 1 - this.velocity) {
        const r = t.getPointAt(this.progress), o = t.getPointAt(this.progress + this.velocity);
        if (r && o) {
          e.position.set(r.x, r.y, r.z);
          const n = o, i = 0, a = new Q();
          a.lookAt(e.position, n, e.up), a.multiply(new Q().makeRotationFromEuler(new it(0, i, 0)));
          const s = new ot().setFromRotationMatrix(a);
          e.quaternion.slerp(s, 0.2);
        }
        this.progress += this.velocity;
      } else
        this.progress = 0;
  }
  /** ********************************* 场景渲染 START ******************************************** */
  render() {
    this.animationFrameId = requestAnimationFrame(() => {
      this.starrySkyPoints && this.starrySkyParameter.animation && (this.starrySkyPoints.rotation.y += this.starrySkyParameter.animationSpeed), this.earth && this.earthParameter.animation && (this.earth.rotation.y += this.earthParameter.animationSpeed), this.cloudCoverMesh && this.cloudCoverParameter.animation && (this.cloudCoverMesh.rotation.y += this.cloudCoverParameter.animationSpeed), this.scatterPoints.length && this.scatterPoints.forEach((t) => {
        t._s += 4e-3, t.scale.set(t.size * t._s, t.size * t._s, t.size * t._s), t._s <= 1.5 ? t.material.opacity = (t._s - 1) * 2 : t._s > 1.5 && t._s <= 2 ? t.material.opacity = 1 - (t._s - 1.5) * 2 : t._s = 1;
      }), this.rotationPoints.length && this.rotationPoints.forEach((t) => {
        t.rotation.z += 0.01;
      }), this.stats && this.stats.update(), this.animationGradientSegmentLine && gt(this.animationGradientSegmentLine), this.webGlRenderer.autoClear = !1, this.webGlRenderer.clear(), this.composerParameter.isComposer ? (this.composer.render(), this.webGlRenderer.clearDepth()) : this.webGlRenderer.render(this.scene, this.camera), this.labelRenderer.render(this.scene, this.camera), this.flyLineAnimation.time.value += 0.01, this.render();
    });
  }
  start() {
    return new Promise((t) => {
      this.loadTextures([{
        key: "earthTexture",
        value: this.earthParameter.texture
      }], () => {
        this.createEarth(this.earthParameter).then((i) => {
          this.add(i);
        }), this.createAperture(this.apertureParameter, this.earthParameter).then((i) => {
          this.add(i);
        }), this.createCloudCover(this.cloudCoverParameter, this.earthParameter).then((i) => {
          this.add(i);
        }), this.createStarrySky(this.starrySkyParameter).then((i) => {
          this.starrySky = i;
        });
        const e = this.createGridHelper(this.gridHelperParameter), r = this.createAxesHelper(this.axesHelperParameter), o = this.createAmbientLight(this.ambientLightParameter), n = this.createDirectionalLight(this.directionalLightParameter);
        this.add(e, r, o, n), this.scene.add(this.group), new dt(this.camera, this.webGlRenderer).init(), this.composer = yt(this.webGlRenderer, this.scene, this.camera, this.composerParameter.composer), this.render(), t(this);
      });
    });
  }
  /**
   * 进入
   */
  accessAnimation() {
    return new Promise((t) => {
      nt.to(this.group.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 2,
        ease: "Quadratic",
        onComplete: () => {
          this.add(this.starrySky), t(!0);
        }
      });
    });
  }
  /** ********************************* 场景工具 START ******************************************** */
  add(...t) {
    t.forEach((e) => {
      e && this.group.add(e);
    });
  }
  coordinateTransform(t, e) {
    const r = (90 - e) * (Math.PI / 180), o = (90 + t) * (Math.PI / 180), n = new at(this.earthParameter.radius * 0.1, r, o);
    return new m().setFromSpherical(n);
  }
  getBezierCurveVCoords(t, e) {
    const r = t.angleTo(e) * 1.5 / Math.PI / 0.1, o = r * 0.4, n = r * r * 12, i = new st(new m(0, 0, 0), t.clone().add(e.clone()).divideScalar(2)), a = i.at(
      n / i.at(1, new m()).distanceTo(new m(0, 0, 0)) + 1,
      new m()
    ), s = t.clone().lerp(a, o / t.clone().distanceTo(a)), l = e.clone().lerp(a, o / e.clone().distanceTo(a));
    return [t, s, l, e];
  }
}
export {
  Ft as Earth
};
