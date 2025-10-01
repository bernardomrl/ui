import * as r from "react";
import { useCallbackRef as s } from "./index.es104.js";
function p(n, e = globalThis?.document) {
  const t = s(n);
  r.useEffect(() => {
    const o = (a) => {
      a.key === "Escape" && t(a);
    };
    return e.addEventListener("keydown", o, { capture: !0 }), () => e.removeEventListener("keydown", o, { capture: !0 });
  }, [t, e]);
}
export {
  p as useEscapeKeydown
};
//# sourceMappingURL=index.es203.js.map
