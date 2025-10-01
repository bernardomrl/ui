import { constructFrom as r } from "./index.es442.js";
function i(e, ...o) {
  const n = r.bind(
    null,
    o.find((t) => typeof t == "object")
  );
  return o.map(n);
}
export {
  i as normalizeDates
};
//# sourceMappingURL=index.es446.js.map
