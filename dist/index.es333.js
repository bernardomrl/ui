var e, r;
function c() {
  if (r) return e;
  r = 1;
  var a = "\\ud800-\\udfff", u = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", s = "\\u20d0-\\u20ff", o = u + n + s, f = "\\ufe0e\\ufe0f", i = "\\u200d", d = RegExp("[" + i + a + o + f + "]");
  function t(R) {
    return d.test(R);
  }
  return e = t, e;
}
export {
  c as __require
};
//# sourceMappingURL=index.es333.js.map
