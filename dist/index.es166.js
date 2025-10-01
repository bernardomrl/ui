import * as a from "./index.es181.js";
function f(n) {
  return n?.formatMonthCaption && !n.formatCaption && (n.formatCaption = n.formatMonthCaption), n?.formatYearCaption && !n.formatYearDropdown && (n.formatYearDropdown = n.formatYearCaption), {
    ...a,
    ...n
  };
}
export {
  f as getFormatters
};
//# sourceMappingURL=index.es166.js.map
