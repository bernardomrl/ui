import * as l from "react";
import { createContextScope as b } from "./index.es103.js";
import { useComposedRefs as u } from "./index.es108.js";
import { createDialogScope as v, Root as w, Portal as M, Overlay as x, Trigger as I, WarningProvider as L, Content as $, Title as F, Description as G, Close as A } from "./index.es75.js";
import { composeEventHandlers as j } from "./index.es109.js";
import { createSlottable as W } from "./index.es56.js";
import { jsx as i, jsxs as Y } from "react/jsx-runtime";
var f = "AlertDialog", [q] = b(f, [
  v
]), n = v(), D = (e) => {
  const { __scopeAlertDialog: o, ...r } = e, t = n(o);
  return /* @__PURE__ */ i(w, { ...t, ...r, modal: !0 });
};
D.displayName = f;
var B = "AlertDialogTrigger", m = l.forwardRef(
  (e, o) => {
    const { __scopeAlertDialog: r, ...t } = e, a = n(r);
    return /* @__PURE__ */ i(I, { ...a, ...t, ref: o });
  }
);
m.displayName = B;
var H = "AlertDialogPortal", y = (e) => {
  const { __scopeAlertDialog: o, ...r } = e, t = n(o);
  return /* @__PURE__ */ i(M, { ...t, ...r });
};
y.displayName = H;
var V = "AlertDialogOverlay", _ = l.forwardRef(
  (e, o) => {
    const { __scopeAlertDialog: r, ...t } = e, a = n(r);
    return /* @__PURE__ */ i(x, { ...a, ...t, ref: o });
  }
);
_.displayName = V;
var s = "AlertDialogContent", [k, z] = q(s), J = W("AlertDialogContent"), N = l.forwardRef(
  (e, o) => {
    const { __scopeAlertDialog: r, children: t, ...a } = e, g = n(r), p = l.useRef(null), O = u(o, p), d = l.useRef(null);
    return /* @__PURE__ */ i(
      L,
      {
        contentName: s,
        titleName: R,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ i(k, { scope: r, cancelRef: d, children: /* @__PURE__ */ Y(
          $,
          {
            role: "alertdialog",
            ...g,
            ...a,
            ref: O,
            onOpenAutoFocus: j(a.onOpenAutoFocus, (c) => {
              c.preventDefault(), d.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (c) => c.preventDefault(),
            onInteractOutside: (c) => c.preventDefault(),
            children: [
              /* @__PURE__ */ i(J, { children: t }),
              /* @__PURE__ */ i(Q, { contentRef: p })
            ]
          }
        ) })
      }
    );
  }
);
N.displayName = s;
var R = "AlertDialogTitle", C = l.forwardRef(
  (e, o) => {
    const { __scopeAlertDialog: r, ...t } = e, a = n(r);
    return /* @__PURE__ */ i(F, { ...a, ...t, ref: o });
  }
);
C.displayName = R;
var h = "AlertDialogDescription", E = l.forwardRef((e, o) => {
  const { __scopeAlertDialog: r, ...t } = e, a = n(r);
  return /* @__PURE__ */ i(G, { ...a, ...t, ref: o });
});
E.displayName = h;
var K = "AlertDialogAction", P = l.forwardRef(
  (e, o) => {
    const { __scopeAlertDialog: r, ...t } = e, a = n(r);
    return /* @__PURE__ */ i(A, { ...a, ...t, ref: o });
  }
);
P.displayName = K;
var S = "AlertDialogCancel", T = l.forwardRef(
  (e, o) => {
    const { __scopeAlertDialog: r, ...t } = e, { cancelRef: a } = z(S, r), g = n(r), p = u(o, a);
    return /* @__PURE__ */ i(A, { ...g, ...t, ref: p });
  }
);
T.displayName = S;
var Q = ({ contentRef: e }) => {
  const o = `\`${s}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${s}\` by passing a \`${h}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${s}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return l.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(o);
  }, [o, e]), null;
}, te = D, ae = m, ie = y, le = _, ne = N, se = P, ce = T, pe = C, ge = E;
export {
  se as Action,
  D as AlertDialog,
  P as AlertDialogAction,
  T as AlertDialogCancel,
  N as AlertDialogContent,
  E as AlertDialogDescription,
  _ as AlertDialogOverlay,
  y as AlertDialogPortal,
  C as AlertDialogTitle,
  m as AlertDialogTrigger,
  ce as Cancel,
  ne as Content,
  ge as Description,
  le as Overlay,
  ie as Portal,
  te as Root,
  pe as Title,
  ae as Trigger
};
//# sourceMappingURL=index.es52.js.map
