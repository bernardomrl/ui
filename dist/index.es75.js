import * as s from "react";
import { composeEventHandlers as p } from "./index.es109.js";
import { useComposedRefs as _ } from "./index.es108.js";
import { createContextScope as V, createContext as q } from "./index.es103.js";
import { useId as R } from "./index.es112.js";
import { useControllableState as K } from "./index.es111.js";
import { DismissableLayer as U } from "./index.es123.js";
import { FocusScope as Y } from "./index.es127.js";
import { Portal as Z } from "./index.es122.js";
import { Presence as h } from "./index.es116.js";
import { Primitive as g } from "./index.es106.js";
import { useFocusGuards as z } from "./index.es126.js";
import J from "./index.es129.js";
import { hideOthers as Q } from "./index.es128.js";
import { createSlot as X } from "./index.es56.js";
import { jsx as i, jsxs as P, Fragment as O } from "react/jsx-runtime";
var D = "Dialog", [I, Ne] = V(D), [ee, u] = I(D), x = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: a,
    defaultOpen: r,
    onOpenChange: o,
    modal: l = !0
  } = e, c = s.useRef(null), f = s.useRef(null), [v, C] = K({
    prop: a,
    defaultProp: r ?? !1,
    onChange: o,
    caller: D
  });
  return /* @__PURE__ */ i(
    ee,
    {
      scope: t,
      triggerRef: c,
      contentRef: f,
      contentId: R(),
      titleId: R(),
      descriptionId: R(),
      open: v,
      onOpenChange: C,
      onOpenToggle: s.useCallback(() => C((H) => !H), [C]),
      modal: l,
      children: n
    }
  );
};
x.displayName = D;
var A = "DialogTrigger", T = s.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...a } = e, r = u(A, n), o = _(t, r.triggerRef);
    return /* @__PURE__ */ i(
      g.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": N(r.open),
        ...a,
        ref: o,
        onClick: p(e.onClick, r.onOpenToggle)
      }
    );
  }
);
T.displayName = A;
var E = "DialogPortal", [oe, b] = I(E, {
  forceMount: void 0
}), M = (e) => {
  const { __scopeDialog: t, forceMount: n, children: a, container: r } = e, o = u(E, t);
  return /* @__PURE__ */ i(oe, { scope: t, forceMount: n, children: s.Children.map(a, (l) => /* @__PURE__ */ i(h, { present: n || o.open, children: /* @__PURE__ */ i(Z, { asChild: !0, container: r, children: l }) })) });
};
M.displayName = E;
var m = "DialogOverlay", w = s.forwardRef(
  (e, t) => {
    const n = b(m, e.__scopeDialog), { forceMount: a = n.forceMount, ...r } = e, o = u(m, e.__scopeDialog);
    return o.modal ? /* @__PURE__ */ i(h, { present: a || o.open, children: /* @__PURE__ */ i(re, { ...r, ref: t }) }) : null;
  }
);
w.displayName = m;
var te = X("DialogOverlay.RemoveScroll"), re = s.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...a } = e, r = u(m, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ i(J, { as: te, allowPinchZoom: !0, shards: [r.contentRef], children: /* @__PURE__ */ i(
        g.div,
        {
          "data-state": N(r.open),
          ...a,
          ref: t,
          style: { pointerEvents: "auto", ...a.style }
        }
      ) })
    );
  }
), d = "DialogContent", S = s.forwardRef(
  (e, t) => {
    const n = b(d, e.__scopeDialog), { forceMount: a = n.forceMount, ...r } = e, o = u(d, e.__scopeDialog);
    return /* @__PURE__ */ i(h, { present: a || o.open, children: o.modal ? /* @__PURE__ */ i(ne, { ...r, ref: t }) : /* @__PURE__ */ i(ae, { ...r, ref: t }) });
  }
);
S.displayName = d;
var ne = s.forwardRef(
  (e, t) => {
    const n = u(d, e.__scopeDialog), a = s.useRef(null), r = _(t, n.contentRef, a);
    return s.useEffect(() => {
      const o = a.current;
      if (o) return Q(o);
    }, []), /* @__PURE__ */ i(
      F,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: p(e.onCloseAutoFocus, (o) => {
          o.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: p(e.onPointerDownOutside, (o) => {
          const l = o.detail.originalEvent, c = l.button === 0 && l.ctrlKey === !0;
          (l.button === 2 || c) && o.preventDefault();
        }),
        onFocusOutside: p(
          e.onFocusOutside,
          (o) => o.preventDefault()
        )
      }
    );
  }
), ae = s.forwardRef(
  (e, t) => {
    const n = u(d, e.__scopeDialog), a = s.useRef(!1), r = s.useRef(!1);
    return /* @__PURE__ */ i(
      F,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (o) => {
          e.onCloseAutoFocus?.(o), o.defaultPrevented || (a.current || n.triggerRef.current?.focus(), o.preventDefault()), a.current = !1, r.current = !1;
        },
        onInteractOutside: (o) => {
          e.onInteractOutside?.(o), o.defaultPrevented || (a.current = !0, o.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const l = o.target;
          n.triggerRef.current?.contains(l) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && r.current && o.preventDefault();
        }
      }
    );
  }
), F = s.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: a, onOpenAutoFocus: r, onCloseAutoFocus: o, ...l } = e, c = u(d, n), f = s.useRef(null), v = _(t, f);
    return z(), /* @__PURE__ */ P(O, { children: [
      /* @__PURE__ */ i(
        Y,
        {
          asChild: !0,
          loop: !0,
          trapped: a,
          onMountAutoFocus: r,
          onUnmountAutoFocus: o,
          children: /* @__PURE__ */ i(
            U,
            {
              role: "dialog",
              id: c.contentId,
              "aria-describedby": c.descriptionId,
              "aria-labelledby": c.titleId,
              "data-state": N(c.open),
              ...l,
              ref: v,
              onDismiss: () => c.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ P(O, { children: [
        /* @__PURE__ */ i(ie, { titleId: c.titleId }),
        /* @__PURE__ */ i(ce, { contentRef: f, descriptionId: c.descriptionId })
      ] })
    ] });
  }
), y = "DialogTitle", W = s.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...a } = e, r = u(y, n);
    return /* @__PURE__ */ i(g.h2, { id: r.titleId, ...a, ref: t });
  }
);
W.displayName = y;
var k = "DialogDescription", G = s.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...a } = e, r = u(k, n);
    return /* @__PURE__ */ i(g.p, { id: r.descriptionId, ...a, ref: t });
  }
);
G.displayName = k;
var L = "DialogClose", $ = s.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...a } = e, r = u(L, n);
    return /* @__PURE__ */ i(
      g.button,
      {
        type: "button",
        ...a,
        ref: t,
        onClick: p(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
$.displayName = L;
function N(e) {
  return e ? "open" : "closed";
}
var B = "DialogTitleWarning", [Pe, j] = q(B, {
  contentName: d,
  titleName: y,
  docsSlug: "dialog"
}), ie = ({ titleId: e }) => {
  const t = j(B), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return s.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, se = "DialogDescriptionWarning", ce = ({ contentRef: e, descriptionId: t }) => {
  const a = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${j(se).contentName}}.`;
  return s.useEffect(() => {
    const r = e.current?.getAttribute("aria-describedby");
    t && r && (document.getElementById(t) || console.warn(a));
  }, [a, e, t]), null;
}, Oe = x, Ie = T, xe = M, Ae = w, Te = S, be = W, Me = G, we = $;
export {
  we as Close,
  Te as Content,
  Me as Description,
  x as Dialog,
  $ as DialogClose,
  S as DialogContent,
  G as DialogDescription,
  w as DialogOverlay,
  M as DialogPortal,
  W as DialogTitle,
  T as DialogTrigger,
  Ae as Overlay,
  xe as Portal,
  Oe as Root,
  be as Title,
  Ie as Trigger,
  Pe as WarningProvider,
  Ne as createDialogScope
};
//# sourceMappingURL=index.es75.js.map
