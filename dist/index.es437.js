var e, u;
function h() {
  if (u) return e;
  u = 1;
  function t(r, i, a) {
    for (var n = -1, l = r == null ? 0 : r.length; ++n < l; )
      if (a(i, r[n]))
        return !0;
    return !1;
  }
  return e = t, e;
}
export {
  h as __require
};
//# sourceMappingURL=index.es437.js.map
