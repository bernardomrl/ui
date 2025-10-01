import { sqrt as c } from "./index.es465.js";
const o = -0.5, s = c(3) / 2, m = 1 / c(12), f = (m / 2 + 1) * 3, b = {
  draw(l, d) {
    const e = c(d / f), i = e / 2, r = e * m, T = i, n = e * m + e, a = -T, y = n;
    l.moveTo(i, r), l.lineTo(T, n), l.lineTo(a, y), l.lineTo(o * i - s * r, s * i + o * r), l.lineTo(o * T - s * n, s * T + o * n), l.lineTo(o * a - s * y, s * a + o * y), l.lineTo(o * i + s * r, o * r - s * i), l.lineTo(o * T + s * n, o * n - s * T), l.lineTo(o * a + s * y, o * y - s * a), l.closePath();
  }
};
export {
  b as default
};
//# sourceMappingURL=index.es221.js.map
