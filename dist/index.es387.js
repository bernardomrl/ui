var u, i;
function M() {
  if (i) return u;
  i = 1;
  var o = "\\ud800-\\udfff", t = "\\u0300-\\u036f", c = "\\ufe20-\\ufe2f", b = "\\u20d0-\\u20ff", g = t + c + b, R = "\\ufe0e\\ufe0f", m = "[" + o + "]", r = "[" + g + "]", e = "\\ud83c[\\udffb-\\udfff]", l = "(?:" + r + "|" + e + ")", a = "[^" + o + "]", f = "(?:\\ud83c[\\udde6-\\uddff]){2}", s = "[\\ud800-\\udbff][\\udc00-\\udfff]", A = "\\u200d", d = l + "?", n = "[" + R + "]?", v = "(?:" + A + "(?:" + [a, f, s].join("|") + ")" + n + d + ")*", y = n + d + v, p = "(?:" + [a + r + "?", r, f, s, m].join("|") + ")", C = RegExp(e + "(?=" + e + ")|" + p + y, "g");
  function _(q) {
    return q.match(C) || [];
  }
  return u = _, u;
}
export {
  M as __require
};
//# sourceMappingURL=index.es387.js.map
