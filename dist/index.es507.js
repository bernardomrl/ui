import { __require as p } from "./index.es519.js";
var a, t;
function n() {
  if (t) return a;
  t = 1;
  var i = p();
  function s(r, u) {
    var e = i(this, r), h = e.size;
    return e.set(r, u), this.size += e.size == h ? 0 : 1, this;
  }
  return a = s, a;
}
export {
  n as __require
};
//# sourceMappingURL=index.es507.js.map
