function d(t, r, c) {
  const a = t.today(), e = r ? t.startOfISOWeek(a) : t.startOfWeek(a), o = [];
  for (let s = 0; s < 7; s++) {
    const n = t.addDays(e, s);
    o.push(n);
  }
  return o;
}
export {
  d as getWeekdays
};
//# sourceMappingURL=index.es169.js.map
