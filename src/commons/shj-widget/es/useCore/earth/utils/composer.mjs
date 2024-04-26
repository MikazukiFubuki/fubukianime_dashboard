import { Vector2 as P } from "../../../node_modules/.pnpm/three@0.135.0/node_modules/three/build/three.module.mjs";
import { EffectComposer as r } from "../../../node_modules/.pnpm/three@0.135.0/node_modules/three/examples/jsm/postprocessing/EffectComposer.mjs";
import { RenderPass as o } from "../../../node_modules/.pnpm/three@0.135.0/node_modules/three/examples/jsm/postprocessing/RenderPass.mjs";
import { UnrealBloomPass as d } from "../../../node_modules/.pnpm/three@0.135.0/node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.mjs";
import { GlitchPass as f } from "../../../node_modules/.pnpm/three@0.135.0/node_modules/three/examples/jsm/postprocessing/GlitchPass.mjs";
import { DotScreenPass as m } from "../../../node_modules/.pnpm/three@0.135.0/node_modules/three/examples/jsm/postprocessing/DotScreenPass.mjs";
import { FilmPass as c } from "../../../node_modules/.pnpm/three@0.135.0/node_modules/three/examples/jsm/postprocessing/FilmPass.mjs";
const C = (e, t, i, s = {
  unrealBloomPass: {},
  glitchPass: {},
  dotScreenPass: {},
  filmPass: {}
}) => {
  const n = new r(e), l = new o(t, i);
  if (n.addPass(l), s.unrealBloomPass.enable) {
    const a = new d(
      new P(window.innerWidth, window.innerHeight),
      s.unrealBloomPass.strength || 1,
      s.unrealBloomPass.radius || 0,
      s.unrealBloomPass.threshold || 0.83
    );
    n.addPass(a);
  }
  if (s.glitchPass.enable) {
    const a = new f(s.glitchPass.dtSize || 64);
    n.addPass(a);
  }
  if (s.dotScreenPass.enable) {
    const a = new m(void 0, s.dotScreenPass.angle, s.dotScreenPass.scale);
    n.addPass(a);
  }
  if (s.filmPass.enable) {
    const a = new c(s.filmPass.noiseIntensity, s.filmPass.scanlinesIntensity, s.filmPass.scanlinesCount, s.filmPass.grayscale);
    n.addPass(a);
  }
  return n;
};
export {
  C as createComposer
};
