var l, _;
function h() {
  if (_) return l;
  _ = 1;
  function b(c, e, r) {
    var u = -1, i = c.length;
    e < 0 && (e = -e > i ? 0 : i + e), r = r > i ? i : r, r < 0 && (r += i), i = e > r ? 0 : r - e >>> 0, e >>>= 0;
    for (var f = Array(i); ++u < i; )
      f[u] = c[u + e];
    return f;
  }
  return l = b, l;
}
export {
  h as __require
};
//# sourceMappingURL=index.es385.js.map
