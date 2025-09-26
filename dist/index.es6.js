import { j as e } from "./index.es49.js";
import * as r from "@radix-ui/react-avatar";
import { cn as l } from "./index.es47.js";
function i({
  className: a,
  ...t
}) {
  return /* @__PURE__ */ e.jsx(
    r.Root,
    {
      "data-slot": "avatar",
      className: l(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        a
      ),
      ...t
    }
  );
}
function n({
  className: a,
  ...t
}) {
  return /* @__PURE__ */ e.jsx(
    r.Image,
    {
      "data-slot": "avatar-image",
      className: l("aspect-square size-full", a),
      ...t
    }
  );
}
function m({
  className: a,
  ...t
}) {
  return /* @__PURE__ */ e.jsx(
    r.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: l(
        "bg-muted flex size-full items-center justify-center rounded-full",
        a
      ),
      ...t
    }
  );
}
export {
  i as Avatar,
  m as AvatarFallback,
  n as AvatarImage
};
//# sourceMappingURL=index.es6.js.map
