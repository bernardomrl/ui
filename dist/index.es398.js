import { __require as w } from "./index.es384.js";
var A, j;
function B() {
  if (j) return A;
  j = 1;
  var m = w();
  function k(r, n) {
    if (r !== n) {
      var d = r !== void 0, q = r === null, c = r === r, i = m(r), u = n !== void 0, g = n === null, _ = n === n, p = m(n);
      if (!g && !p && !i && r > n || i && u && _ && !g && !p || q && u && _ || !d && _ || !c)
        return 1;
      if (!q && !i && !p && r < n || p && d && c && !q && !i || g && d && c || !u && c || !_)
        return -1;
    }
    return 0;
  }
  return A = k, A;
}
export {
  B as __require
};
//# sourceMappingURL=index.es398.js.map
