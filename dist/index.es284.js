function O(o, r) {
  let { startMonth: t, endMonth: e } = o;
  const { startOfYear: M, startOfDay: d, startOfMonth: c, endOfMonth: Y, addYears: l, endOfYear: w, newDate: f, today: i } = r, { fromYear: a, toYear: n, fromMonth: s, toMonth: h } = o;
  !t && s && (t = s), !t && a && (t = r.newDate(a, 0, 1)), !e && h && (e = h), !e && n && (e = f(n, 11, 31));
  const y = o.captionLayout === "dropdown" || o.captionLayout === "dropdown-years";
  return t ? t = c(t) : a ? t = f(a, 0, 1) : !t && y && (t = M(l(o.today ?? i(), -100))), e ? e = Y(e) : n ? e = f(n, 11, 31) : !e && y && (e = w(o.today ?? i())), [
    t && d(t),
    e && d(e)
  ];
}
export {
  O as getNavMonths
};
//# sourceMappingURL=index.es284.js.map
