import { __require as c } from "./index.es432.js";
var e, t;
function v() {
  if (t) return e;
  t = 1;
  var i = c(), o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, u = /\\(\\)?/g, n = i(function(a) {
    var r = [];
    return a.charCodeAt(0) === 46 && r.push(""), a.replace(o, function(p, s, h, _) {
      r.push(h ? _.replace(u, "$1") : s || p);
    }), r;
  });
  return e = n, e;
}
export {
  v as __require
};
//# sourceMappingURL=index.es359.js.map
