import { defaultDateLib as a } from "./index.es161.js";
class h {
  constructor(t, i, s = a) {
    this.date = t, this.displayMonth = i, this.outside = !!(i && !s.isSameMonth(t, i)), this.dateLib = s;
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(t) {
    return this.dateLib.isSameDay(t.date, this.date) && this.dateLib.isSameMonth(t.displayMonth, this.displayMonth);
  }
}
export {
  h as CalendarDay
};
//# sourceMappingURL=index.es238.js.map
