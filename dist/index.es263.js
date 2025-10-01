import { normalizeDates as o } from "./index.es446.js";
function i(a, r, n) {
  const [e, t] = o(
    n?.in,
    a,
    r
  );
  return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth();
}
export {
  i as default,
  i as isSameMonth
};
//# sourceMappingURL=index.es263.js.map
