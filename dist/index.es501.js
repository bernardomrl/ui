var i, d;
function a() {
  if (d) return i;
  d = 1;
  function u(n, t, s, r) {
    for (var x = n.length, e = s + (r ? 1 : -1); r ? e-- : ++e < x; )
      if (t(n[e], e, n))
        return e;
    return -1;
  }
  return i = u, i;
}
export {
  a as __require
};
//# sourceMappingURL=index.es501.js.map
