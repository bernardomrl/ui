import { __require as a } from "./index.es350.js";
var r, i;
function o() {
  if (i) return r;
  i = 1;
  var s = a();
  function u(n, t) {
    for (var e = n.length; e--; )
      if (s(n[e][0], t))
        return e;
    return -1;
  }
  return r = u, r;
}
export {
  o as __require
};
//# sourceMappingURL=index.es513.js.map
