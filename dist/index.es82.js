import * as o from "react";
import { Primitive as i } from "./index.es106.js";
import { jsx as f } from "react/jsx-runtime";
var l = "Label", e = o.forwardRef((r, a) => /* @__PURE__ */ f(
  i.label,
  {
    ...r,
    ref: a,
    onMouseDown: (t) => {
      t.target.closest("button, input, select, textarea") || (r.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
    }
  }
));
e.displayName = l;
var n = e;
export {
  e as Label,
  n as Root
};
//# sourceMappingURL=index.es82.js.map
