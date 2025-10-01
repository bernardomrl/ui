import { forwardRef as m, createElement as l } from "react";
import { mergeClasses as d, toKebabCase as f, toPascalCase as r } from "./index.es229.js";
import n from "./index.es230.js";
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C = (e, t) => {
  const o = m(
    ({ className: a, ...s }, c) => l(n, {
      ref: c,
      iconNode: t,
      className: d(
        `lucide-${f(r(e))}`,
        `lucide-${e}`,
        a
      ),
      ...s
    })
  );
  return o.displayName = r(e), o;
};
export {
  C as default
};
//# sourceMappingURL=index.es228.js.map
