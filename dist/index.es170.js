function g(a, s, o, t, i = !1) {
  if (!a || !s)
    return;
  const { startOfYear: l, endOfYear: u, addYears: Y, getYear: d, isBefore: c, isSameYear: p } = t, m = l(a), n = u(s), r = [];
  let e = m;
  for (; c(e, n) || p(e, n); )
    r.push(e), e = Y(e, 1);
  return i && r.reverse(), r.map((f) => {
    const O = o.formatYearDropdown(f, t);
    return {
      value: d(f),
      label: O,
      disabled: !1
    };
  });
}
export {
  g as getYearOptions
};
//# sourceMappingURL=index.es170.js.map
