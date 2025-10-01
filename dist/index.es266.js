import { constructFrom as e } from "./index.es442.js";
import { toDate as c } from "./index.es443.js";
function u(i, f) {
  let t, o = f?.in;
  return i.forEach((r) => {
    !o && typeof r == "object" && (o = e.bind(null, r));
    const n = c(r, o);
    (!t || t > n || isNaN(+n)) && (t = n);
  }), e(o, t || NaN);
}
export {
  u as default,
  u as min
};
//# sourceMappingURL=index.es266.js.map
