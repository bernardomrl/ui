import { constructFrom as n } from "./index.es442.js";
import { toDate as c } from "./index.es443.js";
function m(f, i) {
  let t, o = i?.in;
  return f.forEach((r) => {
    !o && typeof r == "object" && (o = n.bind(null, r));
    const e = c(r, o);
    (!t || t < e || isNaN(+e)) && (t = e);
  }), n(o, t || NaN);
}
export {
  m as default,
  m as max
};
//# sourceMappingURL=index.es265.js.map
