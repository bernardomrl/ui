import n, { useCallback as u } from "react";
import { UI as i } from "./index.es172.js";
import { useDayPicker as v } from "./index.es175.js";
function x(c) {
  const { onPreviousClick: l, onNextClick: s, previousMonth: e, nextMonth: t, ...d } = c, { components: a, classNames: o, labels: { labelPrevious: m, labelNext: b } } = v(), f = u((r) => {
    t && s?.(r);
  }, [t, s]), h = u((r) => {
    e && l?.(r);
  }, [e, l]);
  return n.createElement(
    "nav",
    { ...d },
    n.createElement(
      a.PreviousMonthButton,
      { type: "button", className: o[i.PreviousMonthButton], tabIndex: e ? void 0 : -1, "aria-disabled": e ? void 0 : !0, "aria-label": m(e), onClick: h },
      n.createElement(a.Chevron, { disabled: e ? void 0 : !0, className: o[i.Chevron], orientation: "left" })
    ),
    n.createElement(
      a.NextMonthButton,
      { type: "button", className: o[i.NextMonthButton], tabIndex: t ? void 0 : -1, "aria-disabled": t ? void 0 : !0, "aria-label": b(t), onClick: f },
      n.createElement(a.Chevron, { disabled: t ? void 0 : !0, orientation: "right", className: o[i.Chevron] })
    )
  );
}
export {
  x as Nav
};
//# sourceMappingURL=index.es146.js.map
