import { __require as u } from "./index.es513.js";
var r, a;
function c() {
  if (a) return r;
  a = 1;
  var _ = u();
  function n(t, i) {
    var e = this.__data__, s = _(e, t);
    return s < 0 ? (++this.size, e.push([t, i])) : e[s][1] = i, this;
  }
  return r = n, r;
}
export {
  c as __require
};
//# sourceMappingURL=index.es488.js.map
