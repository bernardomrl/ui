import { Path as e } from "./index.es510.js";
function l(i) {
  let t = 3;
  return i.digits = function(n) {
    if (!arguments.length) return t;
    if (n == null)
      t = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${n}`);
      t = r;
    }
    return i;
  }, () => new e(t);
}
export {
  l as withPath
};
//# sourceMappingURL=index.es464.js.map
