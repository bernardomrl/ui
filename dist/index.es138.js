import e from "react";
import { UI as o } from "./index.es172.js";
function f(c) {
  const { options: l, className: r, components: s, classNames: a, ...n } = c, i = [a[o.Dropdown], r].join(" "), m = l?.find(({ value: t }) => t === n.value);
  return e.createElement(
    "span",
    { "data-disabled": n.disabled, className: a[o.DropdownRoot] },
    e.createElement(s.Select, { className: i, ...n }, l?.map(({ value: t, label: d, disabled: p }) => e.createElement(s.Option, { key: t, value: t, disabled: p }, d))),
    e.createElement(
      "span",
      { className: a[o.CaptionLabel], "aria-hidden": !0 },
      m?.label,
      e.createElement(s.Chevron, { orientation: "down", size: 18, className: a[o.Chevron] })
    )
  );
}
export {
  f as Dropdown
};
//# sourceMappingURL=index.es138.js.map
