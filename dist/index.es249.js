import { normalizeInterval as l } from "./index.es447.js";
import { constructFrom as m } from "./index.es442.js";
function u(s, a) {
  const { start: e, end: r } = l(a?.in, s);
  let n = +e > +r;
  const c = n ? +e : +r, t = n ? r : e;
  t.setHours(0, 0, 0, 0), t.setDate(1);
  let i = 1;
  const o = [];
  for (; +t <= c; )
    o.push(m(e, t)), t.setMonth(t.getMonth() + i);
  return n ? o.reverse() : o;
}
export {
  u as default,
  u as eachMonthOfInterval
};
//# sourceMappingURL=index.es249.js.map
