import * as o from "react";
import n from "react-dom";
import { Primitive as s } from "./index.es106.js";
import { useLayoutEffect as c } from "./index.es105.js";
import { jsx as u } from "react/jsx-runtime";
var l = "Portal", p = o.forwardRef((r, e) => {
  const { container: a, ...f } = r, [i, m] = o.useState(!1);
  c(() => m(!0), []);
  const t = a || i && globalThis?.document?.body;
  return t ? n.createPortal(/* @__PURE__ */ u(s.div, { ...f, ref: e }), t) : null;
});
p.displayName = l;
export {
  p as Portal
};
//# sourceMappingURL=index.es122.js.map
