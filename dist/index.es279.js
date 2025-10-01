function T(o, f, h, d) {
  const s = o[0], a = o[o.length - 1], { ISOWeek: c, fixedWeeks: l, broadcastCalendar: r } = h ?? {}, { addDays: O, differenceInCalendarDays: D, differenceInCalendarMonths: g, endOfBroadcastWeek: I, endOfISOWeek: u, endOfMonth: W, endOfWeek: x, isAfter: y, startOfBroadcastWeek: C, startOfISOWeek: F, startOfWeek: M } = d, k = r ? C(s, d) : c ? F(s) : M(s), S = r ? I(a) : c ? u(W(a)) : x(W(a)), A = D(S, k), B = g(a, s) + 1, e = [];
  for (let t = 0; t <= A; t++) {
    const n = O(k, t);
    if (f && y(n, f))
      break;
    e.push(n);
  }
  const i = (r ? 35 : 42) * B;
  if (l && e.length < i) {
    const t = i - e.length;
    for (let n = 0; n < t; n++) {
      const b = O(e[e.length - 1], 1);
      e.push(b);
    }
  }
  return e;
}
export {
  T as getDates
};
//# sourceMappingURL=index.es279.js.map
