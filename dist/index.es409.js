var r, u;
function O() {
  if (u) return r;
  u = 1;
  var a = 800, i = 16, o = Date.now;
  function s(f) {
    var t = 0, e = 0;
    return function() {
      var n = o(), v = i - (n - e);
      if (e = n, v > 0) {
        if (++t >= a)
          return arguments[0];
      } else
        t = 0;
      return f.apply(void 0, arguments);
    };
  }
  return r = s, r;
}
export {
  O as __require
};
//# sourceMappingURL=index.es409.js.map
