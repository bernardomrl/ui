import { toDate as r } from "./index.es443.js";
function s(e, o) {
  const t = r(e, o?.in), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
export {
  s as default,
  s as endOfMonth
};
//# sourceMappingURL=index.es251.js.map
