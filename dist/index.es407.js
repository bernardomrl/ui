var r, a;
function t() {
  if (a) return r;
  a = 1;
  function n(l, p, e) {
    switch (e.length) {
      case 0:
        return l.call(p);
      case 1:
        return l.call(p, e[0]);
      case 2:
        return l.call(p, e[0], e[1]);
      case 3:
        return l.call(p, e[0], e[1], e[2]);
    }
    return l.apply(p, e);
  }
  return r = n, r;
}
export {
  t as __require
};
//# sourceMappingURL=index.es407.js.map
