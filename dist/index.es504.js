import { __require as p } from "./index.es519.js";
var e, t;
function h() {
  if (t) return e;
  t = 1;
  var i = p();
  function u(r) {
    var a = i(this, r).delete(r);
    return this.size -= a ? 1 : 0, a;
  }
  return e = u, e;
}
export {
  h as __require
};
//# sourceMappingURL=index.es504.js.map
