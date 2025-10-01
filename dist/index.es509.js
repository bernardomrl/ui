import { addLeadingZeros as n } from "./index.es508.js";
const g = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), a = r > 0 ? r : 1 - r;
    return n(t === "yy" ? a % 100 : a, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : n(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return n(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return n(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return n(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return n(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return n(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, a = e.getMilliseconds(), s = Math.trunc(
      a * Math.pow(10, r - 3)
    );
    return n(s, t.length);
  }
};
export {
  g as lightFormatters
};
//# sourceMappingURL=index.es509.js.map
