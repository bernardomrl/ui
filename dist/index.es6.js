import { jsx as e } from "react/jsx-runtime";
import { Root as l, Image as o, Fallback as s } from "./index.es55.js";
import { cn as r } from "./index.es48.js";
function u({
  className: a,
  ...t
}) {
  return /* @__PURE__ */ e(
    l,
    {
      "data-slot": "avatar",
      className: r(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        a
      ),
      ...t
    }
  );
}
function m({
  className: a,
  ...t
}) {
  return /* @__PURE__ */ e(
    o,
    {
      "data-slot": "avatar-image",
      className: r("aspect-square size-full", a),
      ...t
    }
  );
}
function c({
  className: a,
  ...t
}) {
  return /* @__PURE__ */ e(
    s,
    {
      "data-slot": "avatar-fallback",
      className: r(
        "bg-muted flex size-full items-center justify-center rounded-full",
        a
      ),
      ...t
    }
  );
}
export {
  u as Avatar,
  c as AvatarFallback,
  m as AvatarImage
};
//# sourceMappingURL=index.es6.js.map
