import { useMulti as i } from "./index.es291.js";
import { useRange as o } from "./index.es292.js";
import { useSingle as s } from "./index.es293.js";
function f(e, n) {
  const t = s(e, n), r = i(e, n), u = o(e, n);
  switch (e.mode) {
    case "single":
      return t;
    case "multiple":
      return r;
    case "range":
      return u;
    default:
      return;
  }
}
export {
  f as useSelection
};
//# sourceMappingURL=index.es177.js.map
