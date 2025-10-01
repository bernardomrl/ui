import { useState as r } from "react";
import { calculateFocusTarget as T } from "./index.es289.js";
import { getNextFocus as l } from "./index.es290.js";
function S(c, o, F, a, f) {
  const { autoFocus: i } = c, [d, m] = r(), n = T(o.days, F, a || (() => !1), d), [s, t] = r(i ? n : void 0);
  return {
    isFocusTarget: (u) => !!n?.isEqualTo(u),
    setFocused: t,
    focused: s,
    blur: () => {
      m(s), t(void 0);
    },
    moveFocus: (u, g) => {
      if (!s)
        return;
      const e = l(u, g, s, o.navStart, o.navEnd, c, f);
      e && (o.goToDay(e), t(e));
    }
  };
}
export {
  S as useFocus
};
//# sourceMappingURL=index.es176.js.map
