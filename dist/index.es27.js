import { jsx as i, jsxs as e } from "react/jsx-runtime";
import l from "./index.es61.js";
import c from "./index.es57.js";
import p from "./index.es58.js";
import { cn as t } from "./index.es48.js";
import { buttonVariants as m } from "./index.es9.js";
function N({ className: a, ...n }) {
  return /* @__PURE__ */ i(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: t("mx-auto flex w-full justify-center", a),
      ...n
    }
  );
}
function P({ className: a, ...n }) {
  return /* @__PURE__ */ i(
    "ul",
    {
      "data-slot": "pagination-content",
      className: t("flex flex-row items-center gap-1", a),
      ...n
    }
  );
}
function v({ ...a }) {
  return /* @__PURE__ */ i("li", { "data-slot": "pagination-item", ...a });
}
function o({
  className: a,
  isActive: n,
  size: r = "icon",
  ...s
}) {
  return /* @__PURE__ */ i(
    "a",
    {
      "aria-current": n ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": n,
      className: t(
        m({
          variant: n ? "outline" : "ghost",
          size: r
        }),
        a
      ),
      ...s
    }
  );
}
function b({
  className: a,
  ...n
}) {
  return /* @__PURE__ */ e(
    o,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: t("gap-1 px-2.5 sm:pl-2.5", a),
      ...n,
      children: [
        /* @__PURE__ */ i(l, {}),
        /* @__PURE__ */ i("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function j({
  className: a,
  ...n
}) {
  return /* @__PURE__ */ e(
    o,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: t("gap-1 px-2.5 sm:pr-2.5", a),
      ...n,
      children: [
        /* @__PURE__ */ i("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ i(c, {})
      ]
    }
  );
}
function k({ className: a, ...n }) {
  return /* @__PURE__ */ e(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: t("flex size-9 items-center justify-center", a),
      ...n,
      children: [
        /* @__PURE__ */ i(p, { className: "size-4" }),
        /* @__PURE__ */ i("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
export {
  N as Pagination,
  P as PaginationContent,
  k as PaginationEllipsis,
  v as PaginationItem,
  o as PaginationLink,
  j as PaginationNext,
  b as PaginationPrevious
};
//# sourceMappingURL=index.es27.js.map
