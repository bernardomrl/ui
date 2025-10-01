import { sqrt as n } from "./index.es465.js";
const l = n(1 / 3), m = l * 2, t = {
  draw(o, i) {
    const s = n(i / m), a = s * l;
    o.moveTo(0, -s), o.lineTo(a, 0), o.lineTo(0, s), o.lineTo(-a, 0), o.closePath();
  }
};
export {
  t as default
};
//# sourceMappingURL=index.es225.js.map
