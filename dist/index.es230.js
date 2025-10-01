import { forwardRef as l, createElement as o } from "react";
import A from "./index.es231.js";
import { mergeClasses as b, hasA11yProp as c } from "./index.es229.js";
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h = l(
  ({
    color: m = "currentColor",
    size: t = 24,
    strokeWidth: e = 2,
    absoluteStrokeWidth: s,
    className: u = "",
    children: r,
    iconNode: f,
    ...a
  }, p) => o(
    "svg",
    {
      ref: p,
      ...A,
      width: t,
      height: t,
      stroke: m,
      strokeWidth: s ? Number(e) * 24 / Number(t) : e,
      className: b("lucide", u),
      ...!r && !c(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...f.map(([i, d]) => o(i, d)),
      ...Array.isArray(r) ? r : [r]
    ]
  )
);
export {
  h as default
};
//# sourceMappingURL=index.es230.js.map
