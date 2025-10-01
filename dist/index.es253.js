import { toDate as o } from "./index.es443.js";
function s(t, r) {
  const e = o(t, r?.in), a = e.getFullYear();
  return e.setFullYear(a + 1, 0, 0), e.setHours(23, 59, 59, 999), e;
}
export {
  s as default,
  s as endOfYear
};
//# sourceMappingURL=index.es253.js.map
