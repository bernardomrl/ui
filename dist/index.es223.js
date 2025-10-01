import { sqrt as p, sin as n, cos as m, tau as l, pi as k } from "./index.es465.js";
const y = 0.8908130915292852, T = n(k / 10) / n(7 * k / 10), d = n(l / 10) * T, u = -m(l / 10) * T, h = {
  draw(o, f) {
    const s = p(f * y), t = d * s, c = u * s;
    o.moveTo(0, -s), o.lineTo(t, c);
    for (let r = 1; r < 5; ++r) {
      const e = l * r / 5, a = m(e), i = n(e);
      o.lineTo(i * s, -a * s), o.lineTo(a * t - i * c, i * t + a * c);
    }
    o.closePath();
  }
};
export {
  h as default
};
//# sourceMappingURL=index.es223.js.map
