import { jsxs as i, jsx as e, Fragment as te } from "react/jsx-runtime";
import W, { useState as J, useRef as ee, useEffect as ae, useId as Ee, useCallback as re, useMemo as je } from "react";
import Te from "react-dom";
const De = ({ stroke: t }) => /* @__PURE__ */ i(
  "svg",
  {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ e("g", { clipPath: "url(#clip0_8677_116)", children: /* @__PURE__ */ e(
        "path",
        {
          d: "M9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10C18.3332 5.39765 14.6022 1.66669 9.99984 1.66669C5.39746 1.66669 1.6665 5.39765 1.6665 10C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334Z",
          stroke: t,
          strokeWidth: "1.67",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ) }),
      /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ e("clipPath", { id: "clip0_8677_116", children: /* @__PURE__ */ e("rect", { width: "20", height: "20", fill: "white" }) }) })
    ]
  }
), Be = W.forwardRef(({
  size: t = "md",
  hierarchy: n,
  variant: s = "primary",
  icon: a = "none",
  destructive: l = !1,
  state: r = "default",
  children: o = "Button CTA",
  disabled: c = !1,
  onClick: u,
  className: p,
  fullWidth: x = !1,
  style: f,
  ...m
}, v) => {
  const C = () => {
    if (n) return n;
    switch (s) {
      case "outline":
        return "secondary-color";
      case "subtle":
        return "secondary-gray";
      case "filled":
      case "primary":
      default:
        return "primary";
    }
  }, h = "nexus-button", d = `nexus-button--${t}`, w = `nexus-button--${C()}`, g = `nexus-button--icon-${a}`, _ = l ? "nexus-button--destructive" : "", M = r !== "default" ? `nexus-button--${r}` : "", y = [
    h,
    d,
    w,
    g,
    _,
    M,
    x ? "nexus-button--full-width" : "",
    p
  ].filter(Boolean).join(" "), H = (() => {
    if (c || r === "disabled") {
      if (n === "primary") return "#FFF";
      if (n === "secondary-color") return l ? "#67E8F9" : "#94A3B8";
      if (n === "secondary-gray") return "#D5D7DA";
    }
    return n === "primary" ? "#FFF" : n === "secondary-color" ? l ? "#0891B2" : "#0C1427" : n === "secondary-gray" ? l ? "#0891B2" : "#414651" : "#FFF";
  })();
  return /* @__PURE__ */ i(
    "button",
    {
      ref: v,
      type: "button",
      className: y,
      disabled: c || r === "disabled",
      onClick: u,
      style: f,
      ...m,
      children: [
        !(a === "only") && /* @__PURE__ */ e("span", { className: "nexus-button__text", children: o }),
        (a === "trailing" || a === "only") && /* @__PURE__ */ e(De, { stroke: H })
      ]
    }
  );
});
Be.displayName = "Button";
const Oe = () => /* @__PURE__ */ i(
  "svg",
  {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ e("g", { clipPath: "url(#clip0_8678_3350)", children: /* @__PURE__ */ e(
        "path",
        {
          d: "M10.0001 18.3334C14.6025 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6025 1.66669 10.0001 1.66669C5.39771 1.66669 1.66675 5.39765 1.66675 10C1.66675 14.6024 5.39771 18.3334 10.0001 18.3334Z",
          stroke: "#717680",
          strokeWidth: "1.67",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ) }),
      /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ e("clipPath", { id: "clip0_8678_3350", children: /* @__PURE__ */ e("rect", { width: "20", height: "20", fill: "white" }) }) })
    ]
  }
), Ge = () => /* @__PURE__ */ e(
  "svg",
  {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e(
      "path",
      {
        d: "M15.8334 10H4.16675M4.16675 10L10.0001 15.8334M4.16675 10L10.0001 4.16669",
        stroke: "#717680",
        strokeWidth: "1.67",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), Ue = () => /* @__PURE__ */ e(
  "svg",
  {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e(
      "path",
      {
        d: "M10.0001 4.16669V15.8334M4.16675 10H15.8334",
        stroke: "#717680",
        strokeWidth: "1.67",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), Xe = () => /* @__PURE__ */ e(
  "svg",
  {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e(
      "path",
      {
        d: "M4.16675 10H15.8334M15.8334 10L10.0001 4.16669M15.8334 10L10.0001 15.8334",
        stroke: "#717680",
        strokeWidth: "1.67",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), Ke = W.forwardRef(({
  icon: t = "false",
  items: n,
  className: s,
  ...a
}, l) => {
  const r = "nexus-button-group", o = `nexus-button-group--icon-${t}`, c = [
    r,
    o,
    s
  ].filter(Boolean).join(" "), u = [Ge, Ue, Xe];
  return /* @__PURE__ */ e(
    "div",
    {
      ref: l,
      className: c,
      role: "group",
      ...a,
      children: n.map((p, x) => {
        const f = x === n.length - 1, m = [
          "nexus-button-group__item",
          p.current ? "nexus-button-group__item--current" : "",
          f ? "nexus-button-group__item--last" : ""
        ].filter(Boolean).join(" ");
        return /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: m,
            onClick: p.onClick,
            children: [
              t === "leading" && /* @__PURE__ */ e(Oe, {}),
              t === "only" ? W.createElement(u[x % u.length]) : /* @__PURE__ */ e("span", { className: "nexus-button-group__text", children: p.children })
            ]
          },
          p.id || x
        );
      })
    }
  );
});
Ke.displayName = "ButtonGroup";
const Ye = ({ size: t }) => {
  const n = "12";
  return /* @__PURE__ */ e(
    "svg",
    {
      width: n,
      height: n,
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "nexus-badge__icon",
      children: /* @__PURE__ */ e(
        "path",
        {
          d: "M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}, ve = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px"
}, oe = W.forwardRef(({
  children: t,
  size: n = "sm",
  color: s = "primary",
  variant: a = "filled",
  icon: l = "none",
  mb: r,
  className: o,
  style: c,
  onClick: u,
  ...p
}, x) => {
  const f = "nexus-badge", m = `nexus-badge--size-${n}`, C = {
    marginBottom: r ? typeof r == "string" && ve[r] ? ve[r] : r : void 0,
    ...c
  }, h = `nexus-badge--color-${s}`, d = l !== "none" ? `nexus-badge--icon-${l}` : "", g = [
    f,
    m,
    h,
    d,
    u ? "nexus-badge--interactive" : "",
    o
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i(
    u ? "button" : "span",
    {
      ref: x,
      className: g,
      style: C,
      onClick: u,
      type: u ? "button" : void 0,
      ...p,
      children: [
        /* @__PURE__ */ e("span", { className: "nexus-badge__text", children: t }),
        l === "trailing" && /* @__PURE__ */ e(Ye, { size: n })
      ]
    }
  );
});
oe.displayName = "Badge";
const qe = () => /* @__PURE__ */ e(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "nexus-badge-group__message-icon",
    children: /* @__PURE__ */ e(
      "path",
      {
        d: "M3.33333 8.00001H12.6667M12.6667 8.00001L8 3.33334M12.6667 8.00001L8 12.6667",
        stroke: "currentColor",
        strokeWidth: "1.3333",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), Qe = W.forwardRef(({
  message: t,
  badge: n,
  badgePosition: s = "leading",
  size: a = "md",
  showMessageIcon: l = !1,
  className: r,
  onClick: o,
  ...c
}, u) => {
  const p = "nexus-badge-group", x = `nexus-badge-group--${s}`, f = `nexus-badge-group--size-${a}`, v = [
    p,
    x,
    f,
    o ? "nexus-badge-group--interactive" : "",
    r
  ].filter(Boolean).join(" "), C = a === "lg" ? "md" : "sm", h = n.hasIcon ? "trailing" : "none", d = /* @__PURE__ */ e(
    oe,
    {
      size: C,
      color: n.color,
      icon: h,
      onClick: o,
      children: n.children
    }
  ), w = /* @__PURE__ */ i("div", { className: "nexus-badge-group__message", children: [
    /* @__PURE__ */ e("span", { className: "nexus-badge-group__message-text", children: t }),
    l && /* @__PURE__ */ e(qe, {})
  ] });
  return /* @__PURE__ */ e(
    "div",
    {
      ref: u,
      className: v,
      onClick: o,
      role: o ? "button" : void 0,
      tabIndex: o ? 0 : void 0,
      ...c,
      children: s === "leading" ? /* @__PURE__ */ i(te, { children: [
        d,
        l ? l ? /* @__PURE__ */ e("div", { className: "nexus-badge-group__content", children: w }) : w : w
      ] }) : /* @__PURE__ */ i(te, { children: [
        w,
        d
      ] })
    }
  );
});
Qe.displayName = "BadgeGroup";
const Je = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
  "path",
  {
    d: "M18.3333 4.99998C18.3333 4.08331 17.5833 3.33331 16.6667 3.33331H3.33333C2.41666 3.33331 1.66666 4.08331 1.66666 4.99998M18.3333 4.99998V15C18.3333 15.9166 17.5833 16.6666 16.6667 16.6666H3.33333C2.41666 16.6666 1.66666 15.9166 1.66666 15V4.99998M18.3333 4.99998L10 10.8333L1.66666 4.99998",
    stroke: "#717680",
    strokeWidth: "1.66667",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), Pe = () => /* @__PURE__ */ i("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e("g", { clipPath: "url(#clip0_8677_842)", children: /* @__PURE__ */ e(
    "path",
    {
      d: "M6.06001 5.99998C6.21675 5.55442 6.52611 5.17872 6.93331 4.9394C7.34052 4.70009 7.81927 4.61261 8.28479 4.69245C8.75032 4.7723 9.17255 5.01433 9.47673 5.37567C9.7809 5.737 9.94738 6.19433 9.94668 6.66665C9.94668 7.99998 7.94668 8.66665 7.94668 8.66665M8.00001 11.3333H8.00668M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00001 14.6666C4.31811 14.6666 1.33334 11.6819 1.33334 7.99998C1.33334 4.31808 4.31811 1.33331 8.00001 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z",
      stroke: "#A4A7AE",
      strokeWidth: "1.33333",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ e("clipPath", { id: "clip0_8677_842", children: /* @__PURE__ */ e("rect", { width: "16", height: "16", fill: "white" }) }) })
] }), e1 = () => /* @__PURE__ */ i("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e("g", { clipPath: "url(#clip0_1094_4748)", children: /* @__PURE__ */ e(
    "path",
    {
      d: "M8.00001 5.33331V7.99998M8.00001 10.6666H8.00668M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00001 14.6666C4.31811 14.6666 1.33334 11.6819 1.33334 7.99998C1.33334 4.31808 4.31811 1.33331 8.00001 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z",
      stroke: "#0EA5E9",
      strokeWidth: "1.33333",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ e("clipPath", { id: "clip0_1094_4748", children: /* @__PURE__ */ e("rect", { width: "16", height: "16", fill: "white" }) }) })
] }), _e = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
  "path",
  {
    d: "M5 7.5L10 12.5L15 7.5",
    stroke: "#717680",
    strokeWidth: "1.66667",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), t1 = () => /* @__PURE__ */ i("div", { className: "nexus-input__payment-icon", children: [
  /* @__PURE__ */ e("svg", { width: "22", height: "13", viewBox: "0 0 23 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.179 11.8294C9.99493 12.8275 8.45902 13.43 6.78069 13.43C3.03582 13.43 0 10.4303 0 6.72997C0 3.02966 3.03582 0.0299683 6.78069 0.0299683C8.45902 0.0299683 9.99493 0.632466 11.179 1.63051C12.363 0.632466 13.8989 0.0299683 15.5773 0.0299683C19.3221 0.0299683 22.358 3.02966 22.358 6.72997C22.358 10.4303 19.3221 13.43 15.5773 13.43C13.8989 13.43 12.363 12.8275 11.179 11.8294Z",
      fill: "#ED0006"
    }
  ) }),
  /* @__PURE__ */ e("svg", { width: "11", height: "13", viewBox: "0 0 12 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0.178955 11.8294C1.63689 10.6005 2.56136 8.77192 2.56136 6.72997C2.56136 4.68801 1.63689 2.85941 0.178955 1.63051C1.363 0.632465 2.89891 0.0299683 4.57724 0.0299683C8.32211 0.0299683 11.3579 3.02966 11.3579 6.72997C11.3579 10.4303 8.32211 13.43 4.57724 13.43C2.89891 13.43 1.363 12.8275 0.178955 11.8294Z",
      fill: "#F9A000"
    }
  ) }),
  /* @__PURE__ */ e("svg", { width: "5", height: "10", viewBox: "0 0 6 11", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.17901 10.8294C4.63693 9.60052 5.56139 7.77193 5.56139 5.72999C5.56139 3.68805 4.63693 1.85946 3.17901 0.630554C1.72109 1.85946 0.796631 3.68805 0.796631 5.72999C0.796631 7.77193 1.72109 9.60052 3.17901 10.8294Z",
      fill: "#FF5E00"
    }
  ) })
] }), n1 = W.forwardRef(({
  type: t = "default",
  error: n = !1,
  label: s,
  placeholder: a,
  value: l,
  helpText: r,
  showHelpIcon: o = !0,
  leadingText: c,
  dropdownValue: u,
  dropdownOptions: p = [],
  icon: x,
  disabled: f = !1,
  onChange: m,
  onDropdownChange: v,
  className: C,
  ...h
}, d) => {
  const w = [
    "nexus-input-container",
    C
  ].filter(Boolean).join(" "), g = [
    "nexus-input",
    `nexus-input--${t}`,
    n ? "nexus-input--error" : "",
    f ? "nexus-input--disabled" : ""
  ].filter(Boolean).join(" "), _ = [
    "nexus-input__help-text",
    n ? "nexus-input__help-text--error" : ""
  ].filter(Boolean).join(" "), b = x || (() => {
    switch (t) {
      case "default":
        return /* @__PURE__ */ e(Je, {});
      case "payment":
        return /* @__PURE__ */ e(t1, {});
      default:
        return null;
    }
  })();
  return /* @__PURE__ */ i("div", { className: w, children: [
    s && /* @__PURE__ */ e("label", { className: "nexus-input__label", children: s }),
    /* @__PURE__ */ i("div", { className: g, children: [
      t === "leading-dropdown" && /* @__PURE__ */ i("div", { className: "nexus-input__dropdown nexus-input__dropdown--leading", children: [
        /* @__PURE__ */ e("span", { className: "nexus-input__dropdown-text", children: u || "US" }),
        /* @__PURE__ */ e(_e, {})
      ] }),
      t === "leading-text" && /* @__PURE__ */ e("div", { className: "nexus-input__leading-text", children: c || "http://" }),
      /* @__PURE__ */ i("div", { className: "nexus-input__content", children: [
        b && t !== "trailing-dropdown" && /* @__PURE__ */ e("span", { className: "nexus-input__icon", children: b }),
        t === "trailing-dropdown" && /* @__PURE__ */ e("span", { className: "nexus-input__currency", children: "$" }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: d,
            type: "text",
            placeholder: a,
            value: l,
            disabled: f,
            onChange: (y) => m == null ? void 0 : m(y.target.value),
            className: "nexus-input__field",
            ...h
          }
        ),
        n ? /* @__PURE__ */ e("span", { className: "nexus-input__alert", children: /* @__PURE__ */ e(e1, {}) }) : o && t !== "leading-dropdown" && t !== "trailing-dropdown" && /* @__PURE__ */ e("span", { className: "nexus-input__help-icon", children: /* @__PURE__ */ e(Pe, {}) })
      ] }),
      t === "trailing-dropdown" && /* @__PURE__ */ i("div", { className: "nexus-input__dropdown nexus-input__dropdown--trailing", children: [
        /* @__PURE__ */ e("span", { className: "nexus-input__dropdown-text", children: u || "USD" }),
        /* @__PURE__ */ e(_e, {})
      ] })
    ] }),
    r && /* @__PURE__ */ e("p", { className: _, children: r })
  ] });
});
n1.displayName = "Input";
const s1 = W.forwardRef(({
  error: t = !1,
  label: n,
  placeholder: s = "Enter a description...",
  value: a,
  helpText: l = "This is a hint text to help user.",
  rows: r = 4,
  disabled: o = !1,
  onChange: c,
  className: u,
  ...p
}, x) => {
  const f = [
    "nexus-textarea-container",
    u
  ].filter(Boolean).join(" "), m = [
    "nexus-textarea",
    t ? "nexus-textarea--error" : "",
    o ? "nexus-textarea--disabled" : ""
  ].filter(Boolean).join(" "), v = [
    "nexus-textarea__help-text",
    t ? "nexus-textarea__help-text--error" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i("div", { className: f, children: [
    n && /* @__PURE__ */ e("label", { className: "nexus-textarea__label", children: n }),
    /* @__PURE__ */ e("div", { className: m, children: /* @__PURE__ */ e(
      "textarea",
      {
        ref: x,
        placeholder: s,
        value: a,
        rows: r,
        disabled: o,
        onChange: (C) => c == null ? void 0 : c(C.target.value),
        className: "nexus-textarea__field",
        ...p
      }
    ) }),
    l && /* @__PURE__ */ e("p", { className: v, children: l })
  ] });
});
s1.displayName = "Textarea";
const a1 = W.forwardRef(({
  type: t,
  title: n,
  subtitle: s,
  avatarSrc: a,
  avatarAlt: l,
  className: r,
  ...o
}, c) => {
  const u = "nexus-dropdown-header", p = `nexus-dropdown-header--${t}`, x = [
    u,
    p,
    r
  ].filter(Boolean).join(" ");
  return t === "avatar" ? /* @__PURE__ */ e(
    "div",
    {
      ref: c,
      className: x,
      ...o,
      children: /* @__PURE__ */ i("div", { className: "nexus-dropdown-header__avatar-group", children: [
        /* @__PURE__ */ e("div", { className: "nexus-dropdown-header__avatar", children: /* @__PURE__ */ e(
          "img",
          {
            src: a || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facepad&facepad=2&w=256&h=256&q=80",
            alt: l || "User avatar",
            className: "nexus-dropdown-header__avatar-image"
          }
        ) }),
        /* @__PURE__ */ i("div", { className: "nexus-dropdown-header__text-group", children: [
          /* @__PURE__ */ e("div", { className: "nexus-dropdown-header__title", children: n }),
          s && /* @__PURE__ */ e("div", { className: "nexus-dropdown-header__subtitle", children: s })
        ] })
      ] })
    }
  ) : /* @__PURE__ */ e(
    "div",
    {
      ref: c,
      className: x,
      ...o,
      children: /* @__PURE__ */ e("div", { className: "nexus-dropdown-header__title", children: n })
    }
  );
});
a1.displayName = "DropdownHeader";
const r1 = W.forwardRef(({
  children: t,
  icon: n,
  shortcut: s,
  disabled: a = !1,
  onClick: l,
  active: r = !1,
  className: o,
  ...c
}, u) => {
  const m = [
    "nexus-dropdown-item",
    r ? "nexus-dropdown-item--active" : "",
    a ? "nexus-dropdown-item--disabled" : "",
    o
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i(
    "button",
    {
      ref: u,
      type: "button",
      className: m,
      onClick: l,
      disabled: a,
      ...c,
      children: [
        /* @__PURE__ */ i("div", { className: "nexus-dropdown-item__content", children: [
          n && /* @__PURE__ */ e("span", { className: "nexus-dropdown-item__icon", children: n }),
          /* @__PURE__ */ e("span", { className: "nexus-dropdown-item__text", children: t })
        ] }),
        s && /* @__PURE__ */ e("span", { className: "nexus-dropdown-item__shortcut", children: s })
      ]
    }
  );
});
r1.displayName = "DropdownItem";
const pt = () => /* @__PURE__ */ e("div", { className: "nexus-dropdown-divider" }), l1 = W.forwardRef(({
  children: t,
  isOpen: n = !0,
  onClose: s,
  className: a,
  width: l = 240,
  ...r
}, o) => {
  const p = [
    "nexus-dropdown",
    n ? "nexus-dropdown--open" : "",
    a
  ].filter(Boolean).join(" "), x = {
    width: typeof l == "number" ? `${l}px` : l
  };
  return /* @__PURE__ */ e(
    "div",
    {
      ref: o,
      className: p,
      style: x,
      ...r,
      children: t
    }
  );
});
l1.displayName = "Dropdown";
const i1 = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
  "path",
  {
    d: "M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66668C5.78262 12.5 4.93478 12.8512 4.30965 13.4763C3.68453 14.1014 3.33334 14.9493 3.33334 15.8333V17.5M13.3333 5.83333C13.3333 7.67428 11.841 9.16667 10 9.16667C8.15906 9.16667 6.66668 7.67428 6.66668 5.83333C6.66668 3.99238 8.15906 2.5 10 2.5C11.841 2.5 13.3333 3.99238 13.3333 5.83333Z",
    stroke: "currentColor",
    strokeWidth: "1.66667",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), o1 = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
  "path",
  {
    d: "M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z",
    stroke: "currentColor",
    strokeWidth: "1.66667",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), c1 = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
  "path",
  {
    d: "M5 7.5L10 12.5L15 7.5",
    stroke: "currentColor",
    strokeWidth: "1.66667",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), d1 = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
  "path",
  {
    d: "M15 12.5L10 7.5L5 12.5",
    stroke: "currentColor",
    strokeWidth: "1.66667",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), h1 = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
  "path",
  {
    d: "M16.6667 5L7.50001 14.1667L3.33334 10",
    stroke: "currentColor",
    strokeWidth: "1.66667",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), Re = W.forwardRef(({
  label: t,
  supportingText: n,
  icon: s,
  disabled: a = !1,
  isSelected: l = !1,
  onClick: r,
  showCheck: o = !0,
  ...c
}, u) => {
  const m = [
    "nexus-select-option",
    l ? "nexus-select-option--selected" : "",
    a ? "nexus-select-option--disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i(
    "button",
    {
      ref: u,
      type: "button",
      className: m,
      onClick: r,
      disabled: a,
      ...c,
      children: [
        /* @__PURE__ */ i("div", { className: "nexus-select-option__content", children: [
          s && /* @__PURE__ */ e("span", { className: "nexus-select-option__icon", children: s }),
          /* @__PURE__ */ i("div", { className: "nexus-select-option__text", children: [
            /* @__PURE__ */ e("span", { className: "nexus-select-option__label", children: t }),
            n && /* @__PURE__ */ e("span", { className: "nexus-select-option__supporting-text", children: n })
          ] })
        ] }),
        o && l && /* @__PURE__ */ e("span", { className: "nexus-select-option__check", children: /* @__PURE__ */ e(h1, {}) })
      ]
    }
  );
});
Re.displayName = "SelectOption";
const We = W.forwardRef(({
  options: t,
  selectedValue: n,
  onSelect: s,
  isOpen: a,
  showIcons: l = !1,
  ...r
}, o) => {
  const p = [
    "nexus-select-dropdown",
    a ? "nexus-select-dropdown--open" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "div",
    {
      ref: o,
      className: p,
      ...r,
      children: t.map((x, f) => /* @__PURE__ */ e(
        Re,
        {
          ...x,
          isSelected: x.value === n,
          onClick: () => s(x.value),
          showCheck: !l
        },
        `${x.value}-${f}`
      ))
    }
  );
});
We.displayName = "SelectDropdown";
const u1 = W.forwardRef(({
  options: t,
  value: n,
  placeholder: s = "Select an option",
  label: a,
  showLabel: l = !0,
  type: r = "default",
  disabled: o = !1,
  error: c = !1,
  helpText: u,
  onChange: p,
  onSearch: x,
  isOpen: f,
  onToggle: m,
  className: v,
  id: C,
  ...h
}, d) => {
  const [w, g] = J(!1), [_, M] = J(""), b = ee(null), y = ee(null), N = f !== void 0 ? f : w, H = t.find((j) => j.value === n), k = r === "search" && _ ? t.filter(
    (j) => j.label.toLowerCase().includes(_.toLowerCase()) || j.supportingText && j.supportingText.toLowerCase().includes(_.toLowerCase())
  ) : t, I = () => {
    const j = !N;
    m ? m(j) : g(j);
  }, L = (j) => {
    p && p(j), m ? m(!1) : g(!1), r === "search" && M("");
  }, S = (j) => {
    const z = j.target.value;
    M(z), x && x(z);
  };
  ae(() => {
    const j = (z) => {
      b.current && !b.current.contains(z.target) && y.current && !y.current.contains(z.target) && (m ? m(!1) : g(!1));
    };
    if (N)
      return document.addEventListener("mousedown", j), () => {
        document.removeEventListener("mousedown", j);
      };
  }, [N, m]);
  const V = (j) => {
    if (!o)
      switch (j.key) {
        case "Enter":
        case " ":
          N || (j.preventDefault(), I());
          break;
        case "Escape":
          N && (j.preventDefault(), m ? m(!1) : g(!1));
          break;
        case "ArrowDown":
          N || (j.preventDefault(), I());
          break;
      }
  }, K = [
    "nexus-select-container",
    c ? "nexus-select-container--error" : "",
    o ? "nexus-select-container--disabled" : "",
    v
  ].filter(Boolean).join(" "), Z = [
    "nexus-select-input",
    `nexus-select-input--${r}`,
    N ? "nexus-select-input--open" : "",
    c ? "nexus-select-input--error" : "",
    o ? "nexus-select-input--disabled" : ""
  ].filter(Boolean).join(" "), F = () => r === "search" ? /* @__PURE__ */ e(o1, {}) : r === "icon-leading" ? /* @__PURE__ */ e(i1, {}) : null, A = () => r === "search" && N ? _ : H ? H.label : s, R = () => r === "search" && N ? "" : H && H.supportingText ? H.supportingText : "";
  return /* @__PURE__ */ i("div", { className: K, ...h, children: [
    l && a && /* @__PURE__ */ e("label", { htmlFor: C, className: "nexus-select-label", children: a }),
    /* @__PURE__ */ i("div", { className: "nexus-select-wrapper", ref: b, children: [
      /* @__PURE__ */ i(
        "div",
        {
          className: Z,
          onClick: o ? void 0 : I,
          onKeyDown: V,
          tabIndex: o ? -1 : 0,
          role: "combobox",
          "aria-expanded": N,
          "aria-haspopup": "listbox",
          "aria-disabled": o,
          id: C,
          children: [
            /* @__PURE__ */ i("div", { className: "nexus-select-input__content", children: [
              F() && /* @__PURE__ */ e("span", { className: "nexus-select-input__icon", children: F() }),
              r === "search" && N ? /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  className: "nexus-select-input__search",
                  value: _,
                  onChange: S,
                  placeholder: s,
                  autoFocus: !0
                }
              ) : /* @__PURE__ */ i("div", { className: "nexus-select-input__text", children: [
                /* @__PURE__ */ e("span", { className: `nexus-select-input__value ${H ? "" : "nexus-select-input__placeholder"}`, children: A() }),
                R() && /* @__PURE__ */ e("span", { className: "nexus-select-input__supporting-text", children: R() })
              ] })
            ] }),
            /* @__PURE__ */ e("span", { className: "nexus-select-input__chevron", children: N ? /* @__PURE__ */ e(d1, {}) : /* @__PURE__ */ e(c1, {}) })
          ]
        }
      ),
      /* @__PURE__ */ e(
        We,
        {
          ref: y,
          options: k,
          selectedValue: n,
          onSelect: L,
          isOpen: N,
          showIcons: r === "icon-leading"
        }
      )
    ] }),
    u && /* @__PURE__ */ e("p", { className: `nexus-select-help-text ${c ? "nexus-select-help-text--error" : ""}`, children: u })
  ] });
});
u1.displayName = "Select";
const p1 = W.forwardRef(({
  checked: t,
  defaultChecked: n = !1,
  size: s = "md",
  showText: a = !1,
  label: l = "Remember me",
  showSupportingText: r = !1,
  supportingText: o = "Save my login details for next time.",
  disabled: c = !1,
  onChange: u,
  onClick: p,
  onFocus: x,
  onBlur: f,
  className: m,
  id: v,
  "aria-label": C,
  "aria-describedby": h,
  ...d
}, w) => {
  const [g, _] = J(n), M = t !== void 0, b = M ? t : g, y = v || `toggle-${Math.random().toString(36).substr(2, 9)}`, N = `${y}-label`, H = `${y}-supporting-text`, k = (A) => {
    if (c) return;
    const R = !b;
    M || _(R), u == null || u(R), p == null || p(A);
  }, I = (A) => {
    if (!c && (A.key === " " || A.key === "Enter")) {
      A.preventDefault();
      const R = !b;
      M || _(R), u == null || u(R);
    }
  }, L = "nexus-toggle", S = `nexus-toggle--${s}`, V = b ? "nexus-toggle--checked" : "", O = c ? "nexus-toggle--disabled" : "", X = a ? "nexus-toggle--with-text" : "", Q = [
    L,
    S,
    V,
    O,
    m
  ].filter(Boolean).join(" "), K = [
    "nexus-toggle-container",
    X
  ].filter(Boolean).join(" "), Z = [];
  a && l && Z.push(N), r && o && Z.push(H), h && Z.push(h);
  const F = Z.length > 0 ? Z.join(" ") : void 0;
  return !a && !r ? /* @__PURE__ */ e(
    "button",
    {
      ref: w,
      type: "button",
      role: "switch",
      id: y,
      className: Q,
      "aria-checked": b,
      "aria-label": C || l,
      "aria-describedby": F,
      disabled: c,
      onClick: k,
      onKeyDown: I,
      onFocus: x,
      onBlur: f,
      ...d,
      children: /* @__PURE__ */ e("span", { className: "nexus-toggle__track", children: /* @__PURE__ */ e("span", { className: "nexus-toggle__thumb" }) })
    }
  ) : /* @__PURE__ */ i("div", { className: K, children: [
    /* @__PURE__ */ e(
      "button",
      {
        ref: w,
        type: "button",
        role: "switch",
        id: y,
        className: Q,
        "aria-checked": b,
        "aria-label": C,
        "aria-describedby": F,
        disabled: c,
        onClick: k,
        onKeyDown: I,
        onFocus: x,
        onBlur: f,
        ...d,
        children: /* @__PURE__ */ e("span", { className: "nexus-toggle__track", children: /* @__PURE__ */ e("span", { className: "nexus-toggle__thumb" }) })
      }
    ),
    (a || r) && /* @__PURE__ */ i("div", { className: "nexus-toggle-text", children: [
      a && l && /* @__PURE__ */ e(
        "div",
        {
          id: N,
          className: "nexus-toggle-text__label",
          children: l
        }
      ),
      r && o && /* @__PURE__ */ e(
        "div",
        {
          id: H,
          className: "nexus-toggle-text__supporting",
          children: o
        }
      )
    ] })
  ] });
});
p1.displayName = "Toggle";
const ye = ({ size: t }) => t === "sm" ? /* @__PURE__ */ e(
  "svg",
  {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "nexus-checkbox__check-icon",
    children: /* @__PURE__ */ e(
      "path",
      {
        d: "M10 3L4.5 8.5L2 6",
        stroke: "currentColor",
        strokeWidth: "1.6666",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
) : /* @__PURE__ */ e(
  "svg",
  {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "nexus-checkbox__check-icon",
    children: /* @__PURE__ */ e(
      "path",
      {
        d: "M11.6666 3.5L5.24992 9.91667L2.33325 7",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), ke = ({ size: t }) => t === "sm" ? /* @__PURE__ */ e(
  "svg",
  {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "nexus-checkbox__minus-icon",
    children: /* @__PURE__ */ e(
      "path",
      {
        d: "M2.5 6H9.5",
        stroke: "currentColor",
        strokeWidth: "1.66666",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
) : /* @__PURE__ */ e(
  "svg",
  {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "nexus-checkbox__minus-icon",
    children: /* @__PURE__ */ e(
      "path",
      {
        d: "M2.91675 7H11.0834",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), m1 = W.forwardRef(({
  type: t = "checkbox",
  checked: n,
  defaultChecked: s = !1,
  indeterminate: a = !1,
  size: l = "md",
  showText: r = !1,
  label: o = "Remember me",
  showSupportingText: c = !1,
  supportingText: u = "Save my login details for next time.",
  disabled: p = !1,
  name: x,
  value: f,
  onChange: m,
  onClick: v,
  onFocus: C,
  onBlur: h,
  className: d,
  id: w,
  "aria-label": g,
  "aria-describedby": _,
  required: M = !1,
  ...b
}, y) => {
  const [N, H] = J(s), k = n !== void 0, I = k ? n : N, L = Ee(), S = w || `checkbox-${L}`, V = `${S}-label`, O = `${S}-supporting-text`, X = (z) => {
    const q = z.target.checked;
    k || H(q), m == null || m(q, z);
  }, Q = (z) => {
    v == null || v(z);
  }, K = [
    "nexus-checkbox-container",
    r || c ? "nexus-checkbox-container--with-text" : "",
    d
  ].filter(Boolean).join(" "), Z = [
    "nexus-checkbox",
    `nexus-checkbox--${t}`,
    `nexus-checkbox--${l}`,
    I ? "nexus-checkbox--checked" : "",
    a && t === "checkbox" ? "nexus-checkbox--indeterminate" : "",
    p ? "nexus-checkbox--disabled" : ""
  ].filter(Boolean).join(" "), F = [];
  c && u && F.push(O), _ && F.push(_);
  const A = F.length > 0 ? F.join(" ") : void 0, R = ee(null);
  W.useEffect(() => {
    R.current && t === "checkbox" && (R.current.indeterminate = a);
  }, [a, t]);
  const j = (z) => {
    R.current = z, typeof y == "function" ? y(z) : y && (y.current = z);
  };
  return !r && !c ? /* @__PURE__ */ i("div", { className: "nexus-checkbox-wrapper", children: [
    /* @__PURE__ */ e(
      "input",
      {
        ref: j,
        type: t,
        id: S,
        name: x,
        value: f,
        checked: I,
        disabled: p,
        required: M,
        className: Z,
        onChange: X,
        onClick: Q,
        onFocus: C,
        onBlur: h,
        "aria-label": g || o,
        "aria-describedby": A,
        ...b
      }
    ),
    /* @__PURE__ */ e("label", { htmlFor: S, className: "nexus-checkbox__visual", children: /* @__PURE__ */ i("span", { className: "nexus-checkbox__box", children: [
      I && !a && /* @__PURE__ */ e(ye, { size: l }),
      a && t === "checkbox" && /* @__PURE__ */ e(ke, { size: l }),
      t === "radio" && I && /* @__PURE__ */ e("span", { className: "nexus-checkbox__radio-dot" })
    ] }) })
  ] }) : /* @__PURE__ */ i("div", { className: K, children: [
    /* @__PURE__ */ i("div", { className: "nexus-checkbox-wrapper", children: [
      /* @__PURE__ */ e(
        "input",
        {
          ref: j,
          type: t,
          id: S,
          name: x,
          value: f,
          checked: I,
          disabled: p,
          required: M,
          className: Z,
          onChange: X,
          onClick: Q,
          onFocus: C,
          onBlur: h,
          "aria-describedby": A,
          ...b
        }
      ),
      /* @__PURE__ */ e("label", { htmlFor: S, className: "nexus-checkbox__visual", children: /* @__PURE__ */ i("span", { className: "nexus-checkbox__box", children: [
        I && !a && /* @__PURE__ */ e(ye, { size: l }),
        a && t === "checkbox" && /* @__PURE__ */ e(ke, { size: l }),
        t === "radio" && I && /* @__PURE__ */ e("span", { className: "nexus-checkbox__radio-dot" })
      ] }) })
    ] }),
    (r || c) && /* @__PURE__ */ i("div", { className: "nexus-checkbox-text", children: [
      r && o && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: S,
          id: V,
          className: "nexus-checkbox-text__label",
          children: o
        }
      ),
      c && u && /* @__PURE__ */ e(
        "div",
        {
          id: O,
          className: "nexus-checkbox-text__supporting",
          children: u
        }
      )
    ] })
  ] });
});
m1.displayName = "Checkbox";
const f1 = ({ size: t = 16 }) => /* @__PURE__ */ e("svg", { width: t, height: t, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e("path", { d: "M1.33325 9.66667L7.99992 13L14.6666 9.66667M7.99992 3L1.33325 6.33333L7.99992 9.66667L14.6666 6.33333L7.99992 3Z", stroke: "currentColor", strokeWidth: "1.33333", strokeLinecap: "round", strokeLinejoin: "round" }) }), g1 = ({ size: t = 16 }) => /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e("g", { clipPath: "url(#clip0_8716_10526)", children: /* @__PURE__ */ e("path", { d: "M1.33325 11.3334L7.99992 14.6667L14.6666 11.3334M1.33325 8.00004L7.99992 11.3334L14.6666 8.00004M7.99992 1.33337L1.33325 4.66671L7.99992 8.00004L14.6666 4.66671L7.99992 1.33337Z", stroke: "currentColor", strokeWidth: "1.33333", strokeLinecap: "round", strokeLinejoin: "round" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ e("clipPath", { id: "clip0_8716_10526", children: /* @__PURE__ */ e("rect", { width: "16", height: "16", fill: "white" }) }) })
] }), x1 = ({ size: t = 16 }) => /* @__PURE__ */ e("svg", { width: t, height: t, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e("path", { d: "M8.66667 1.33337L2 9.33337H8L7.33333 14.6667L14 6.66671H8L8.66667 1.33337Z", stroke: "currentColor", strokeWidth: "1.33333", strokeLinecap: "round", strokeLinejoin: "round" }) }), C1 = ({ size: t = 16 }) => /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e("g", { clipPath: "url(#clip0_8716_11002)", children: /* @__PURE__ */ e("path", { d: "M7.99992 1.33337L14.6666 5.66671M7.99992 1.33337L1.33325 5.66671M7.99992 1.33337V5.66671M14.6666 5.66671V10.3334M14.6666 5.66671L7.99992 10.3334M14.6666 10.3334L7.99992 14.6667M14.6666 10.3334L7.99992 5.66671M7.99992 14.6667L1.33325 10.3334M7.99992 14.6667V10.3334M1.33325 10.3334V5.66671M1.33325 10.3334L7.99992 5.66671M1.33325 5.66671L7.99992 10.3334", stroke: "currentColor", strokeWidth: "1.33333", strokeLinecap: "round", strokeLinejoin: "round" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ e("clipPath", { id: "clip0_8716_11002", children: /* @__PURE__ */ e("rect", { width: "16", height: "16", fill: "white" }) }) })
] }), b1 = ({ size: t = 16 }) => /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e("g", { clipPath: "url(#clip0_8716_11030)", children: /* @__PURE__ */ e("path", { d: "M5.33325 9.33337C5.33325 9.33337 6.33325 10.6667 7.99992 10.6667C9.66659 10.6667 10.6666 9.33337 10.6666 9.33337M5.99992 6.00004H6.00659M9.99992 6.00004H10.0066M14.6666 8.00004C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8.00004C1.33325 4.31814 4.31802 1.33337 7.99992 1.33337C11.6818 1.33337 14.6666 4.31814 14.6666 8.00004Z", stroke: "currentColor", strokeWidth: "1.33333", strokeLinecap: "round", strokeLinejoin: "round" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ e("clipPath", { id: "clip0_8716_11030", children: /* @__PURE__ */ e("rect", { width: "16", height: "16", fill: "white" }) }) })
] }), v1 = ({ size: t = 10 }) => /* @__PURE__ */ e("svg", { width: t, height: t, viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e("path", { d: "M8.33341 2.5L3.75008 7.08333L1.66675 5", stroke: "white", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }) }), _1 = ({ size: t = 14 }) => /* @__PURE__ */ e("svg", { width: t, height: t, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e("path", { d: "M11.6668 3.5L5.25016 9.91667L2.3335 7", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }), y1 = ({ children: t, color: n = "success" }) => /* @__PURE__ */ e("div", { className: `checkboxgroup-badge checkboxgroup-badge--${n}`, children: /* @__PURE__ */ e("div", { className: "checkboxgroup-badge__content", children: t }) }), Me = ({
  checked: t,
  size: n = "sm",
  onChange: s,
  disabled: a = !1
}) => /* @__PURE__ */ e(
  "div",
  {
    className: `checkboxgroup-checkbox checkboxgroup-checkbox--${n} ${t ? "checkboxgroup-checkbox--checked" : ""} ${a ? "checkboxgroup-checkbox--disabled" : ""}`,
    onClick: () => !a && (s == null ? void 0 : s(!t)),
    children: t && (n === "sm" ? /* @__PURE__ */ e(v1, {}) : /* @__PURE__ */ e(_1, {}))
  }
), we = ({
  icon: t,
  size: n = "sm"
}) => {
  const s = n === "sm" ? 16 : 20, a = {
    layers: /* @__PURE__ */ e(f1, { size: s }),
    "3-layers": /* @__PURE__ */ e(g1, { size: s }),
    zap: /* @__PURE__ */ e(x1, { size: s }),
    codepen: /* @__PURE__ */ e(C1, { size: s }),
    smile: /* @__PURE__ */ e(b1, { size: s })
  };
  return /* @__PURE__ */ e("div", { className: `checkboxgroup-featured-icon checkboxgroup-featured-icon--${n}`, children: a[t] });
}, k1 = ({
  item: t,
  size: n = "sm",
  layout: s = "simple",
  onSelectionChange: a,
  className: l = ""
}) => {
  const r = () => {
    t.disabled || a == null || a(t.id, !t.selected);
  };
  return s === "card" ? /* @__PURE__ */ i(
    "div",
    {
      className: `checkboxgroup-item checkboxgroup-item--card checkboxgroup-item--${n} ${t.selected ? "checkboxgroup-item--selected" : ""} ${t.disabled ? "checkboxgroup-item--disabled" : ""} ${t.icon ? "" : "checkboxgroup-item--no-icon"} ${l}`,
      onClick: r,
      children: [
        /* @__PURE__ */ i("div", { className: "checkboxgroup-item__header", children: [
          /* @__PURE__ */ i("div", { className: "checkboxgroup-item__header-content", children: [
            t.icon && /* @__PURE__ */ e("div", { className: "checkboxgroup-item__icon-wrapper", children: /* @__PURE__ */ e(we, { icon: t.icon, size: n }) }),
            /* @__PURE__ */ e("div", { className: "checkboxgroup-item__plan-name", children: t.planName })
          ] }),
          /* @__PURE__ */ e(
            Me,
            {
              checked: t.selected || !1,
              size: n,
              disabled: t.disabled,
              onChange: (o) => a == null ? void 0 : a(t.id, o)
            }
          )
        ] }),
        /* @__PURE__ */ e("div", { className: "checkboxgroup-item__body", children: /* @__PURE__ */ i("div", { className: "checkboxgroup-item__content", children: [
          t.badge && /* @__PURE__ */ e(y1, { color: "success", children: t.badge }),
          /* @__PURE__ */ i("div", { className: "checkboxgroup-item__pricing", children: [
            /* @__PURE__ */ i("div", { className: "checkboxgroup-item__price-row", children: [
              /* @__PURE__ */ e("div", { className: "checkboxgroup-item__price", children: t.price }),
              /* @__PURE__ */ e("div", { className: "checkboxgroup-item__period", children: t.period })
            ] }),
            /* @__PURE__ */ e("div", { className: "checkboxgroup-item__description", children: t.description })
          ] })
        ] }) })
      ]
    }
  ) : /* @__PURE__ */ i(
    "div",
    {
      className: `checkboxgroup-item checkboxgroup-item--simple checkboxgroup-item--${n} ${t.selected ? "checkboxgroup-item--selected" : ""} ${t.disabled ? "checkboxgroup-item--disabled" : ""} ${t.icon ? "" : "checkboxgroup-item--no-icon"} ${l}`,
      onClick: r,
      children: [
        /* @__PURE__ */ i("div", { className: "checkboxgroup-item__content", children: [
          t.icon && /* @__PURE__ */ e("div", { className: "checkboxgroup-item__icon-wrapper", children: /* @__PURE__ */ e(we, { icon: t.icon, size: n }) }),
          /* @__PURE__ */ i("div", { className: "checkboxgroup-item__text", children: [
            /* @__PURE__ */ i("div", { className: "checkboxgroup-item__title", children: [
              t.planName,
              " ",
              t.price,
              "/",
              t.period
            ] }),
            /* @__PURE__ */ e("div", { className: "checkboxgroup-item__description", children: t.description })
          ] })
        ] }),
        /* @__PURE__ */ e(
          Me,
          {
            checked: t.selected || !1,
            size: n,
            disabled: t.disabled,
            onChange: (o) => a == null ? void 0 : a(t.id, o)
          }
        )
      ]
    }
  );
}, mt = ({
  items: t,
  size: n = "sm",
  layout: s = "simple",
  allowMultiple: a = !1,
  onSelectionChange: l,
  className: r = "",
  disabled: o = !1,
  ...c
}) => {
  const [u, p] = J(
    t.filter((m) => m.selected).map((m) => m.id)
  ), x = (m, v) => {
    if (o) return;
    let C;
    a ? v ? C = [...u, m] : C = u.filter((h) => h !== m) : C = v ? [m] : [], p(C), l == null || l(C);
  }, f = t.map((m) => ({
    ...m,
    selected: u.includes(m.id),
    disabled: o || m.disabled
  }));
  return /* @__PURE__ */ e(
    "div",
    {
      className: `checkboxgroup checkboxgroup--${n} checkboxgroup--${s} ${r}`,
      ...c,
      children: f.map((m) => /* @__PURE__ */ e(
        k1,
        {
          item: m,
          size: n,
          layout: s,
          onSelectionChange: x
        },
        m.id
      ))
    }
  );
}, Ne = ({ direction: t = "down" }) => t === "down" ? /* @__PURE__ */ e("svg", { width: "16", height: "9", viewBox: "0 0 16 9", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e("path", { d: "M14.0711 0.485289C14.962 0.485289 15.4081 1.56243 14.7782 2.1924L8.70711 8.26347C8.31658 8.654 7.68342 8.654 7.29289 8.26347L1.22183 2.1924C0.591867 1.56243 1.03803 0.485289 1.92894 0.485289L14.0711 0.485289Z", fill: "white" }) }) : /* @__PURE__ */ e("svg", { width: "16", height: "9", viewBox: "0 0 16 9", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e("path", { d: "M1.92894 8.51471C1.03803 8.51471 0.591868 7.43757 1.22183 6.8076L7.29289 0.736529C7.68342 0.346004 8.31658 0.346005 8.70711 0.736529L14.7782 6.8076C15.4081 7.43757 14.962 8.51471 14.0711 8.51471L1.92894 8.51471Z", fill: "white" }) }), Le = ({
  children: t,
  position: n = "top",
  style: s
}) => /* @__PURE__ */ i("div", { className: `progressbar-tooltip progressbar-tooltip--${n}`, style: s, children: [
  n === "top" && /* @__PURE__ */ e(Ne, { direction: "down" }),
  /* @__PURE__ */ e("div", { className: "progressbar-tooltip__content", children: t }),
  n === "bottom" && /* @__PURE__ */ e(Ne, { direction: "up" })
] }), ft = ({
  value: t,
  max: n = 100,
  label: s = "right",
  showPercentage: a = !0,
  labelText: l,
  width: r = 320,
  height: o = 8,
  backgroundColor: c,
  progressColor: u,
  disabled: p = !1,
  className: x = "",
  "aria-label": f,
  "aria-describedby": m,
  animationDuration: v = 300,
  onProgressChange: C,
  ...h
}) => {
  const d = Math.max(0, Math.min(t, n)), w = Math.round(d / n * 100), g = `${w}%`, _ = l || `${w}%`;
  W.useEffect(() => {
    C == null || C(d);
  }, [d, C]);
  const M = () => {
    const H = typeof r == "number" ? r : 320, k = _.length <= 3 ? 43 : _.length <= 4 ? 50 : 56, I = w / 100 * H;
    return { left: `${Math.max(-17, Math.min(I - k / 2, H - k))}px` };
  }, b = [
    "progressbar",
    s && `progressbar--label-${s.replace("-", "_")}`,
    p && "progressbar--disabled",
    x
  ].filter(Boolean).join(" "), y = {
    width: typeof r == "number" ? `${r}px` : r,
    height: `${o}px`,
    backgroundColor: c,
    ...h.style
  }, N = {
    width: g,
    height: `${o}px`,
    backgroundColor: u,
    transition: `width ${v}ms ease-in-out`
  };
  return /* @__PURE__ */ i("div", { className: b, children: [
    /* @__PURE__ */ i("div", { className: "progressbar__container", children: [
      /* @__PURE__ */ i(
        "div",
        {
          className: "progressbar__track",
          style: y,
          role: "progressbar",
          "aria-valuenow": d,
          "aria-valuemin": 0,
          "aria-valuemax": n,
          "aria-label": f,
          "aria-describedby": m,
          children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: "progressbar__fill",
                style: N
              }
            ),
            s === "top-floating" && /* @__PURE__ */ e(Le, { position: "top", style: M(), children: a && _ }),
            s === "bottom-floating" && /* @__PURE__ */ e(Le, { position: "bottom", style: M(), children: a && _ })
          ]
        }
      ),
      s === "right" && a && /* @__PURE__ */ e("div", { className: "progressbar__label progressbar__label--right", children: _ })
    ] }),
    s === "bottom" && a && /* @__PURE__ */ e("div", { className: "progressbar__label progressbar__label--bottom", children: _ })
  ] });
}, M1 = {
  xxs: {
    diameter: 64,
    strokeWidth: 6,
    fontSize: 14,
    labelFontSize: 12
  },
  xs: {
    diameter: 160,
    strokeWidth: 16,
    fontSize: 24,
    labelFontSize: 12
  },
  sm: {
    diameter: 200,
    strokeWidth: 20,
    fontSize: 30,
    labelFontSize: 12
  },
  md: {
    diameter: 240,
    strokeWidth: 24,
    fontSize: 36,
    labelFontSize: 14
  },
  lg: {
    diameter: 280,
    strokeWidth: 28,
    fontSize: 48,
    labelFontSize: 14
  }
}, gt = ({
  value: t,
  max: n = 100,
  size: s = "md",
  shape: a = "circle",
  showLabel: l = !0,
  label: r = "Active users",
  showPercentage: o = !0,
  percentageText: c,
  backgroundColor: u,
  progressColor: p,
  textColor: x,
  labelColor: f,
  disabled: m = !1,
  className: v = "",
  "aria-label": C,
  animationDuration: h = 1e3,
  onProgressChange: d,
  ...w
}) => {
  const g = Math.max(0, Math.min(t, n)), _ = Math.round(g / n * 100), M = M1[s], { diameter: b, strokeWidth: y, fontSize: N, labelFontSize: H } = M, k = (b - y) / 2, I = 2 * Math.PI * k, L = b / 2, S = a === "half-circle" ? I / 2 : I, V = a === "half-circle" ? S * (100 - _) / 100 : I * (100 - _) / 100, O = c || `${_}%`;
  W.useEffect(() => {
    d == null || d(g);
  }, [g, d]);
  const X = (F = !1) => {
    const A = Math.PI, R = 0, j = L + k * Math.cos(A), z = L + k * Math.sin(A), q = L + k * Math.cos(R), P = L + k * Math.sin(R);
    return `M ${j} ${z} A ${k} ${k} 0 0 1 ${q} ${P}`;
  }, Q = () => {
    const F = Math.PI * (_ / 100), A = Math.PI, R = Math.PI - F, j = L + k * Math.cos(A), z = L + k * Math.sin(A), q = L + k * Math.cos(R), P = L + k * Math.sin(R), $ = F > Math.PI ? 1 : 0;
    return `M ${j} ${z} A ${k} ${k} 0 ${$} 1 ${q} ${P}`;
  }, K = [
    "progresscircle",
    `progresscircle--${s}`,
    `progresscircle--${a.replace("-", "_")}`,
    m && "progresscircle--disabled",
    v
  ].filter(Boolean).join(" "), Z = a === "half-circle" ? b / 2 + y : b;
  return /* @__PURE__ */ e("div", { className: K, ...w, children: /* @__PURE__ */ i("div", { className: "progresscircle__container", children: [
    /* @__PURE__ */ i(
      "svg",
      {
        className: "progresscircle__svg",
        width: b,
        height: Z,
        viewBox: `0 0 ${b} ${Z}`,
        role: "progressbar",
        "aria-valuenow": g,
        "aria-valuemin": 0,
        "aria-valuemax": n,
        "aria-label": C,
        children: [
          a === "circle" ? /* @__PURE__ */ e(
            "circle",
            {
              className: "progresscircle__background",
              cx: L,
              cy: L,
              r: k,
              fill: "none",
              stroke: u,
              strokeWidth: y,
              strokeLinecap: "round"
            }
          ) : /* @__PURE__ */ e(
            "path",
            {
              className: "progresscircle__background",
              d: X(!0),
              fill: "none",
              stroke: u,
              strokeWidth: y,
              strokeLinecap: "round"
            }
          ),
          a === "circle" ? /* @__PURE__ */ e(
            "circle",
            {
              className: "progresscircle__progress",
              cx: L,
              cy: L,
              r: k,
              fill: "none",
              stroke: p,
              strokeWidth: y,
              strokeLinecap: "round",
              strokeDasharray: I,
              strokeDashoffset: V,
              style: {
                transition: `stroke-dashoffset ${h}ms ease-in-out`,
                transform: "rotate(-90deg)",
                transformOrigin: "center"
              }
            }
          ) : /* @__PURE__ */ e(
            "path",
            {
              className: "progresscircle__progress",
              d: Q(),
              fill: "none",
              stroke: p,
              strokeWidth: y,
              strokeLinecap: "round",
              style: {
                transition: `d ${h}ms ease-in-out`
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ i("div", { className: "progresscircle__content", children: [
      l && r && s !== "xxs" && /* @__PURE__ */ e(
        "div",
        {
          className: "progresscircle__label",
          style: {
            fontSize: `${H}px`,
            color: f,
            ...a === "half-circle" && {
              transform: `translateY(${-N / 2}px)`
            }
          },
          children: r
        }
      ),
      o && /* @__PURE__ */ e(
        "div",
        {
          className: "progresscircle__percentage",
          style: {
            fontSize: `${N}px`,
            color: x
          },
          children: O
        }
      ),
      s === "xxs" && l && r && /* @__PURE__ */ e("div", { className: "progresscircle__external-label", children: r })
    ] })
  ] }) });
}, xt = ({
  value: t = 0,
  endValue: n,
  min: s = 0,
  max: a = 100,
  step: l = 1,
  showLabels: r = !0,
  labelFormat: o = (g) => `${g}%`,
  disabled: c = !1,
  width: u = "100%",
  height: p = 4,
  handleSize: x = 20,
  className: f = "",
  style: m,
  onChange: v,
  onSlideStart: C,
  onSlideEnd: h,
  "aria-label": d,
  "aria-labelledby": w
}) => {
  const g = n !== void 0, [_, M] = J(null), [b, y] = J(Math.max(s, Math.min(a, t))), [N, H] = J(g ? Math.max(s, Math.min(a, n)) : t), k = ee(null);
  ae(() => {
    g && b > N && (_ === "start" ? H(b) : _ === "end" && y(N));
  }, [b, N, g, _]), ae(() => {
    y(Math.max(s, Math.min(a, t)));
  }, [t, s, a]), ae(() => {
    g && n !== void 0 && H(Math.max(s, Math.min(a, n)));
  }, [n, s, a, g]);
  const I = re((F) => {
    if (!k.current) return s;
    const A = k.current.getBoundingClientRect(), R = Math.max(0, Math.min(1, (F - A.left) / A.width)), j = s + R * (a - s), z = Math.round(j / l) * l;
    return Math.max(s, Math.min(a, z));
  }, [s, a, l]), L = re((F) => (A) => {
    if (c) return;
    A.preventDefault(), M(F), C == null || C();
    const R = (z) => {
      const q = I(z.clientX);
      F === "start" ? (y(q), !g && v && v(q)) : F === "end" && g && H(q);
    }, j = () => {
      M(null), h == null || h(), v && v(g ? [Math.min(b, N), Math.max(b, N)] : b), document.removeEventListener("mousemove", R), document.removeEventListener("mouseup", j);
    };
    document.addEventListener("mousemove", R), document.addEventListener("mouseup", j);
  }, [c, I, g, v, C, h, b, N]), S = re((F) => {
    if (c || _) return;
    const A = I(F.clientX);
    if (g) {
      const R = Math.abs(A - b), j = Math.abs(A - N);
      if (R < j ? y(A) : H(A), v) {
        const z = [b, N].sort((q, P) => q - P);
        v([z[0], z[1]]);
      }
    } else
      y(A), v && v(A);
  }, [c, _, I, g, b, N, v]), V = re((F) => (A) => {
    if (c) return;
    let R = 0;
    switch (A.key) {
      case "ArrowLeft":
      case "ArrowDown":
        R = -l;
        break;
      case "ArrowRight":
      case "ArrowUp":
        R = l;
        break;
      case "Home":
        R = s - (F === "start" ? b : N);
        break;
      case "End":
        R = a - (F === "start" ? b : N);
        break;
      case "PageDown":
        R = -l * 10;
        break;
      case "PageUp":
        R = l * 10;
        break;
      default:
        return;
    }
    A.preventDefault();
    const z = Math.max(s, Math.min(a, (F === "start" ? b : N) + R));
    if (F === "start" ? (y(z), !g && v && v(z)) : F === "end" && g && H(z), g && v) {
      const q = F === "start" ? [z, N].sort((P, $) => P - $) : [b, z].sort((P, $) => P - $);
      v([q[0], q[1]]);
    }
  }, [c, l, s, a, b, N, g, v]), O = (b - s) / (a - s) * 100, X = g ? (N - s) / (a - s) * 100 : O, Q = g ? Math.min(O, X) : 0, K = g ? Math.abs(X - O) : O, Z = [
    "slider",
    c && "slider--disabled",
    _ && "slider--dragging",
    f
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i(
    "div",
    {
      className: Z,
      style: {
        ...m,
        width: u,
        "--slider-track-height": `${p}px`,
        "--slider-handle-size": `${x}px`
      },
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            className: "slider__track-container",
            ref: k,
            onClick: S,
            children: [
              /* @__PURE__ */ e("div", { className: "slider__track" }),
              /* @__PURE__ */ e(
                "div",
                {
                  className: "slider__progress",
                  style: {
                    left: `${Q}%`,
                    width: `${K}%`
                  }
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  className: `slider__handle slider__handle--start ${_ === "start" ? "slider__handle--dragging" : ""}`,
                  style: { left: `${O}%` },
                  role: "slider",
                  tabIndex: c ? -1 : 0,
                  "aria-valuemin": s,
                  "aria-valuemax": a,
                  "aria-valuenow": b,
                  "aria-valuetext": o(b),
                  "aria-label": d || (g ? "Start value" : "Slider value"),
                  "aria-labelledby": w,
                  "aria-disabled": c,
                  onMouseDown: L("start"),
                  onKeyDown: V("start")
                }
              ),
              g && /* @__PURE__ */ e(
                "div",
                {
                  className: `slider__handle slider__handle--end ${_ === "end" ? "slider__handle--dragging" : ""}`,
                  style: { left: `${X}%` },
                  role: "slider",
                  tabIndex: c ? -1 : 0,
                  "aria-valuemin": s,
                  "aria-valuemax": a,
                  "aria-valuenow": N,
                  "aria-valuetext": o(N),
                  "aria-label": "End value",
                  "aria-labelledby": w,
                  "aria-disabled": c,
                  onMouseDown: L("end"),
                  onKeyDown: V("end")
                }
              )
            ]
          }
        ),
        r && /* @__PURE__ */ i("div", { className: "slider__labels", children: [
          /* @__PURE__ */ e(
            "span",
            {
              className: "slider__label slider__label--start",
              style: { left: `${O}%` },
              children: o(b)
            }
          ),
          g && /* @__PURE__ */ e(
            "span",
            {
              className: "slider__label slider__label--end",
              style: { left: `${X}%` },
              children: o(N)
            }
          )
        ] })
      ]
    }
  );
}, w1 = () => /* @__PURE__ */ i("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e("path", { d: "M18 6L6 18", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M6 6L18 18", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
] }), Ct = ({
  isOpen: t,
  onClose: n,
  size: s = "md",
  title: a,
  description: l,
  children: r,
  showCloseButton: o = !0,
  closeOnBackdropClick: c = !0,
  closeOnEscape: u = !0,
  footer: p,
  headerContent: x,
  disableAnimation: f = !1,
  className: m = "",
  style: v,
  "aria-label": C,
  "aria-labelledby": h,
  "aria-describedby": d,
  onOpen: w,
  onAnimationComplete: g,
  zIndex: _ = 1e3,
  portalTarget: M,
  preventBodyScroll: b = !0
}) => {
  const y = ee(null), N = ee(null), H = ee(null), k = re((O) => {
    u && O.key === "Escape" && t && n();
  }, [u, t, n]), I = re((O) => {
    c && O.target === N.current && n();
  }, [c, n]);
  ae(() => {
    t ? (H.current = document.activeElement, setTimeout(() => {
      y.current && y.current.focus();
    }, 100), w == null || w()) : H.current && H.current.focus();
  }, [t, w]), ae(() => {
    if (t)
      return document.addEventListener("keydown", k), () => {
        document.removeEventListener("keydown", k);
      };
  }, [t, k]), ae(() => {
    if (b && t) {
      const O = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = O;
      };
    }
  }, [b, t]);
  const L = re((O) => {
    if (O.key !== "Tab" || !y.current) return;
    const X = y.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ), Q = X[0], K = X[X.length - 1];
    O.shiftKey ? document.activeElement === Q && (O.preventDefault(), K == null || K.focus()) : document.activeElement === K && (O.preventDefault(), Q == null || Q.focus());
  }, []);
  if (!t) return null;
  const S = [
    "modal",
    `modal--${s}`,
    f && "modal--no-animation",
    m
  ].filter(Boolean).join(" "), V = /* @__PURE__ */ e(
    "div",
    {
      className: "modal-backdrop",
      ref: N,
      onClick: I,
      style: { zIndex: _ },
      children: /* @__PURE__ */ i(
        "div",
        {
          className: S,
          ref: y,
          role: "dialog",
          "aria-modal": "true",
          "aria-label": C,
          "aria-labelledby": h,
          "aria-describedby": d,
          tabIndex: -1,
          style: v,
          onKeyDown: L,
          onAnimationEnd: g,
          children: [
            (a || l || x || o) && /* @__PURE__ */ i("div", { className: "modal__header", children: [
              x || /* @__PURE__ */ i("div", { className: "modal__header-content", children: [
                a && /* @__PURE__ */ e(
                  "h2",
                  {
                    className: "modal__title",
                    id: h || "modal-title",
                    children: a
                  }
                ),
                l && /* @__PURE__ */ e(
                  "p",
                  {
                    className: "modal__description",
                    id: d || "modal-description",
                    children: l
                  }
                )
              ] }),
              o && /* @__PURE__ */ e(
                "button",
                {
                  className: "modal__close-button",
                  onClick: n,
                  "aria-label": "Close modal",
                  type: "button",
                  children: /* @__PURE__ */ e(w1, {})
                }
              )
            ] }),
            r && /* @__PURE__ */ e("div", { className: "modal__content", children: r }),
            p && /* @__PURE__ */ e("div", { className: "modal__footer", children: p })
          ]
        }
      )
    }
  );
  return M ? Te.createPortal(V, M) : V;
}, bt = ({ children: t, className: n = "" }) => /* @__PURE__ */ e("div", { className: `modal__header-content ${n}`, children: t }), vt = ({ children: t, className: n = "", id: s }) => /* @__PURE__ */ e("h2", { className: `modal__title ${n}`, id: s, children: t }), _t = ({ children: t, className: n = "", id: s }) => /* @__PURE__ */ e("p", { className: `modal__description ${n}`, id: s, children: t }), yt = ({ children: t, className: n = "" }) => /* @__PURE__ */ e("div", { className: `modal__content ${n}`, children: t }), kt = ({ children: t, className: n = "", align: s = "right" }) => /* @__PURE__ */ e("div", { className: `modal__footer modal__footer--${s} ${n}`, children: t }), N1 = [
  "var(--chart-color-1, #1890ff)",
  "var(--chart-color-2, #52c41a)",
  "var(--chart-color-3, #faad14)",
  "var(--chart-color-4, #f5222d)",
  "var(--chart-color-5, #fa541c)",
  "var(--chart-color-6, #722ed1)",
  "var(--chart-color-7, #13c2c2)",
  "var(--chart-color-8, #eb2f96)"
], L1 = W.forwardRef(({
  series: t = [],
  type: n = "line",
  variant: s = "default",
  size: a = "md",
  title: l,
  xAxisLabel: r,
  yAxisLabel: o,
  showGrid: c = !0,
  showLegend: u = !0,
  showAxes: p = !0,
  height: x,
  width: f,
  loading: m = !1,
  error: v,
  colors: C = N1,
  animationDuration: h = 300,
  animate: d = !0,
  responsive: w = !0,
  className: g,
  onDataPointClick: _,
  onDataPointHover: M,
  ...b
}, y) => {
  const N = ee(null), [H, k] = W.useState(null), I = "nexus-chart", L = `nexus-chart--${n}`, S = `nexus-chart--${s}`, V = `nexus-chart--${a}`, K = [
    I,
    L,
    S,
    V,
    m ? "nexus-chart--loading" : "",
    v ? "nexus-chart--error" : "",
    w ? "nexus-chart--responsive" : "",
    g
  ].filter(Boolean).join(" "), Z = je(() => {
    if (!t.length) return null;
    const $ = t.flatMap((T) => T.data), G = $.map((T) => T.y), U = $.map((T) => T.x), E = Math.min(...G), B = Math.max(...G), D = B - E;
    return {
      yMin: E - D * 0.1,
      // Add 10% padding
      yMax: B + D * 0.1,
      yRange: D * 1.2,
      xValues: U,
      yValues: G,
      dataPointCount: Math.max(...t.map((T) => T.data.length))
    };
  }, [t]), F = () => {
    if (!Z || !t.length) return null;
    const $ = 300, G = 200;
    return t.map((U, E) => {
      const B = U.color || C[E % C.length];
      return n === "bar" ? A(U, E, B, $, G) : n === "line" ? R(U, E, B, $, G) : n === "area" ? j(U, E, B, $, G) : null;
    });
  }, A = ($, G, U, E, B) => {
    const D = E / (Z.dataPointCount * t.length + (t.length - 1));
    return /* @__PURE__ */ e("div", { className: "nexus-chart__series nexus-chart__series--bar", children: $.data.map((T, Y) => {
      const ne = (T.y - Z.yMin) / Z.yRange * B, se = Y * (E / Z.dataPointCount) + G * D;
      return /* @__PURE__ */ e(
        "div",
        {
          className: "nexus-chart__bar",
          style: {
            left: `${se / E * 100}%`,
            width: `${D / E * 100}%`,
            height: `${ne / B * 100}%`,
            backgroundColor: U,
            bottom: 0
          },
          onClick: () => _ == null ? void 0 : _(T, $.id),
          onMouseEnter: () => {
            k({ point: T, seriesId: $.id }), M == null || M(T, $.id);
          },
          onMouseLeave: () => {
            k(null), M == null || M(null, null);
          }
        },
        `${$.id}-${Y}`
      );
    }) }, $.id);
  }, R = ($, G, U, E, B) => {
    const D = $.data.map((T, Y) => {
      const ne = Y / (Z.dataPointCount - 1) * E, se = B - (T.y - Z.yMin) / Z.yRange * B;
      return `${ne},${se}`;
    }).join(" ");
    return /* @__PURE__ */ e("div", { className: "nexus-chart__series nexus-chart__series--line", children: /* @__PURE__ */ i(
      "svg",
      {
        className: "nexus-chart__line-svg",
        viewBox: `0 0 ${E} ${B}`,
        preserveAspectRatio: "none",
        children: [
          /* @__PURE__ */ e(
            "polyline",
            {
              points: D,
              fill: "none",
              stroke: U,
              strokeWidth: "2",
              className: "nexus-chart__line"
            }
          ),
          $.data.map((T, Y) => {
            const ne = Y / (Z.dataPointCount - 1) * E, se = B - (T.y - Z.yMin) / Z.yRange * B;
            return /* @__PURE__ */ e(
              "circle",
              {
                cx: ne,
                cy: se,
                r: "4",
                fill: U,
                className: "nexus-chart__point",
                onClick: () => _ == null ? void 0 : _(T, $.id),
                onMouseEnter: () => {
                  k({ point: T, seriesId: $.id }), M == null || M(T, $.id);
                },
                onMouseLeave: () => {
                  k(null), M == null || M(null, null);
                }
              },
              `${$.id}-point-${Y}`
            );
          })
        ]
      }
    ) }, $.id);
  }, j = ($, G, U, E, B) => {
    const D = $.data.map((Y, ne) => {
      const se = ne / (Z.dataPointCount - 1) * E, ce = B - (Y.y - Z.yMin) / Z.yRange * B;
      return `${se},${ce}`;
    }).join(" "), T = `0,${B} ${D} ${E},${B}`;
    return /* @__PURE__ */ e("div", { className: "nexus-chart__series nexus-chart__series--area", children: /* @__PURE__ */ i(
      "svg",
      {
        className: "nexus-chart__area-svg",
        viewBox: `0 0 ${E} ${B}`,
        preserveAspectRatio: "none",
        children: [
          /* @__PURE__ */ e(
            "polygon",
            {
              points: T,
              fill: U,
              fillOpacity: "0.3",
              className: "nexus-chart__area"
            }
          ),
          /* @__PURE__ */ e(
            "polyline",
            {
              points: D,
              fill: "none",
              stroke: U,
              strokeWidth: "2",
              className: "nexus-chart__area-line"
            }
          )
        ]
      }
    ) }, $.id);
  }, z = () => !u || !t.length ? null : /* @__PURE__ */ e("div", { className: "nexus-chart__legend", children: t.map(($, G) => /* @__PURE__ */ i("div", { className: "nexus-chart__legend-item", children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "nexus-chart__legend-indicator",
        style: { backgroundColor: $.color || C[G % C.length] }
      }
    ),
    /* @__PURE__ */ e("span", { className: "nexus-chart__legend-label", children: $.title })
  ] }, $.id)) }), q = () => !p || !Z ? null : /* @__PURE__ */ i("div", { className: "nexus-chart__axes", children: [
    r && /* @__PURE__ */ e("div", { className: "nexus-chart__axis-label nexus-chart__axis-label--x", children: r }),
    o && /* @__PURE__ */ e("div", { className: "nexus-chart__axis-label nexus-chart__axis-label--y", children: o })
  ] }), P = () => H ? /* @__PURE__ */ e("div", { className: "nexus-chart__tooltip", children: /* @__PURE__ */ i("div", { className: "nexus-chart__tooltip-content", children: [
    /* @__PURE__ */ e("div", { className: "nexus-chart__tooltip-label", children: H.point.label || H.point.x }),
    /* @__PURE__ */ e("div", { className: "nexus-chart__tooltip-value", children: H.point.y })
  ] }) }) : null;
  return m ? /* @__PURE__ */ e("div", { ref: y, className: K, ...b, children: /* @__PURE__ */ i("div", { className: "nexus-chart__loading", children: [
    /* @__PURE__ */ e("div", { className: "nexus-chart__loading-spinner" }),
    /* @__PURE__ */ e("span", { className: "nexus-chart__loading-text", children: "Loading chart..." })
  ] }) }) : v ? /* @__PURE__ */ e("div", { ref: y, className: K, ...b, children: /* @__PURE__ */ e("div", { className: "nexus-chart__error", children: /* @__PURE__ */ e("span", { className: "nexus-chart__error-text", children: v }) }) }) : t.length ? /* @__PURE__ */ i("div", { ref: y, className: K, style: { height: x, width: f }, ...b, children: [
    l && /* @__PURE__ */ e("div", { className: "nexus-chart__header", children: /* @__PURE__ */ e("h3", { className: "nexus-chart__title", children: l }) }),
    /* @__PURE__ */ i("div", { className: "nexus-chart__container", ref: N, children: [
      c && /* @__PURE__ */ e("div", { className: "nexus-chart__grid" }),
      /* @__PURE__ */ e("div", { className: "nexus-chart__content", children: F() }),
      q(),
      P()
    ] }),
    z()
  ] }) : /* @__PURE__ */ e("div", { ref: y, className: K, ...b, children: /* @__PURE__ */ e("div", { className: "nexus-chart__empty", children: /* @__PURE__ */ e("span", { className: "nexus-chart__empty-text", children: "No data available" }) }) });
});
L1.displayName = "Chart";
const $1 = [
  "var(--radar-color-1, #0F172A)",
  "var(--radar-color-2, #EE46BC)",
  "var(--radar-color-3, #0BA5EC)",
  "var(--radar-color-4, #52c41a)",
  "var(--radar-color-5, #faad14)",
  "var(--radar-color-6, #f5222d)"
], I1 = W.forwardRef(({
  series: t = [],
  size: n = "md",
  title: s,
  showLegend: a = !1,
  legendPosition: l = "right",
  maxValue: r,
  levels: o = 5,
  showScaleLabels: c = !0,
  showAxisLabels: u = !0,
  height: p,
  width: x,
  colors: f = $1,
  animate: m = !0,
  animationDuration: v = 300,
  loading: C = !1,
  error: h,
  className: d,
  onDataPointClick: w,
  onDataPointHover: g,
  ..._
}, M) => {
  const [b, y] = W.useState(null), N = "nexus-radar-chart", H = `nexus-radar-chart--${n}`, k = a ? `nexus-radar-chart--legend-${l}` : "", S = [
    N,
    H,
    k,
    C ? "nexus-radar-chart--loading" : "",
    h ? "nexus-radar-chart--error" : "",
    d
  ].filter(Boolean).join(" "), V = je(() => {
    if (!t.length) return null;
    const $ = Array.from(new Set(
      t.flatMap((B) => B.data.map((D) => D.axis))
    )), G = t.flatMap((B) => B.data.map((D) => D.value)), U = r || Math.max(...G, 1e3), E = t.map((B) => ({
      ...B,
      data: $.map((D) => B.data.find((Y) => Y.axis === D) || { axis: D, value: 0 })
    }));
    return {
      axes: $,
      maxValue: U,
      series: E,
      angleStep: 2 * Math.PI / $.length
    };
  }, [t, r]), O = () => {
    if (!V) return [];
    const $ = 156, G = 156, U = 140;
    return Array.from({ length: o }, (E, B) => {
      const D = B + 1, T = U * D / o, Y = V.maxValue * D / o, ne = V.axes.map((se, ce) => {
        const de = ce * V.angleStep - Math.PI / 2, fe = $ + T * Math.cos(de), ge = G + T * Math.sin(de);
        return `${fe},${ge}`;
      }).join(" ");
      return { level: D, radius: T, value: Y, points: ne };
    });
  }, X = () => {
    if (!V) return [];
    const $ = 156, G = 156, U = 140;
    return V.axes.map((E, B) => {
      const D = B * V.angleStep - Math.PI / 2, T = $ + U * Math.cos(D), Y = G + U * Math.sin(D);
      return {
        axis: E,
        x1: $,
        y1: G,
        x2: T,
        y2: Y,
        labelX: $ + (U + 20) * Math.cos(D),
        labelY: G + (U + 20) * Math.sin(D)
      };
    });
  }, Q = () => {
    if (!V) return [];
    const $ = 156, G = 156, U = 140;
    return V.series.map((E, B) => {
      const D = E.data.map((Y, ne) => {
        const se = ne * V.angleStep - Math.PI / 2, ce = Y.value / V.maxValue, de = U * ce, fe = $ + de * Math.cos(se), ge = G + de * Math.sin(se);
        return `${fe},${ge}`;
      }).join(" "), T = E.color || f[B % f.length];
      return {
        ...E,
        points: D,
        color: T,
        fillOpacity: b && b !== E.id ? 0.3 : 0.2
      };
    });
  }, K = O(), Z = X(), F = Q(), A = () => K.map(($) => /* @__PURE__ */ e(
    "polygon",
    {
      points: $.points,
      className: "nexus-radar-chart__scale-level",
      fill: "none",
      stroke: "var(--radar-grid-color)",
      strokeWidth: "1"
    },
    $.level
  )), R = () => Z.map(($, G) => /* @__PURE__ */ e(
    "line",
    {
      x1: $.x1,
      y1: $.y1,
      x2: $.x2,
      y2: $.y2,
      className: "nexus-radar-chart__axis-ray",
      stroke: "var(--radar-grid-color)",
      strokeWidth: "1"
    },
    $.axis
  )), j = () => {
    if (!c || !V) return null;
    const $ = 156, G = 156, U = 140, E = -Math.PI / 2;
    return K.map((B) => {
      const D = U * B.level / o, T = $ + D * Math.cos(E), Y = G + D * Math.sin(E);
      return /* @__PURE__ */ i("g", { className: "nexus-radar-chart__scale-label-group", children: [
        /* @__PURE__ */ e(
          "rect",
          {
            x: T - 24,
            y: Y - 11,
            width: 48,
            height: 22,
            rx: 11,
            className: "nexus-radar-chart__scale-label-bg"
          }
        ),
        /* @__PURE__ */ e(
          "text",
          {
            x: T,
            y: Y + 4,
            className: "nexus-radar-chart__scale-label",
            textAnchor: "middle",
            children: B.value.toLocaleString()
          }
        )
      ] }, `scale-${B.level}`);
    });
  }, z = () => u ? Z.map(($) => /* @__PURE__ */ e(
    "text",
    {
      x: $.labelX,
      y: $.labelY + 4,
      className: "nexus-radar-chart__axis-label",
      textAnchor: "middle",
      children: $.axis
    },
    `axis-${$.axis}`
  )) : null, q = () => F.map(($, G) => /* @__PURE__ */ e(
    "g",
    {
      className: "nexus-radar-chart__series",
      onMouseEnter: () => {
        y($.id), g == null || g(null, $.id);
      },
      onMouseLeave: () => {
        y(null), g == null || g(null, null);
      },
      children: /* @__PURE__ */ e(
        "polygon",
        {
          points: $.points,
          fill: $.color,
          fillOpacity: $.fillOpacity,
          stroke: $.color,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "nexus-radar-chart__series-path",
          style: {
            transition: m ? `all ${v}ms ease-in-out` : "none"
          }
        }
      )
    },
    $.id
  )), P = () => !a || !t.length ? null : /* @__PURE__ */ e("div", { className: `nexus-radar-chart__legend nexus-radar-chart__legend--${l}`, children: t.map(($, G) => /* @__PURE__ */ i("div", { className: "nexus-radar-chart__legend-item", children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "nexus-radar-chart__legend-indicator",
        style: { backgroundColor: $.color || f[G % f.length] }
      }
    ),
    /* @__PURE__ */ e("span", { className: "nexus-radar-chart__legend-label", children: $.title })
  ] }, $.id)) });
  return C ? /* @__PURE__ */ e("div", { ref: M, className: S, style: { height: p, width: x }, ..._, children: /* @__PURE__ */ i("div", { className: "nexus-radar-chart__loading", children: [
    /* @__PURE__ */ e("div", { className: "nexus-radar-chart__loading-spinner" }),
    /* @__PURE__ */ e("span", { className: "nexus-radar-chart__loading-text", children: "Loading chart..." })
  ] }) }) : h ? /* @__PURE__ */ e("div", { ref: M, className: S, style: { height: p, width: x }, ..._, children: /* @__PURE__ */ e("div", { className: "nexus-radar-chart__error", children: /* @__PURE__ */ e("span", { className: "nexus-radar-chart__error-text", children: h }) }) }) : t.length ? /* @__PURE__ */ i("div", { ref: M, className: S, style: { height: p, width: x }, ..._, children: [
    s && /* @__PURE__ */ e("div", { className: "nexus-radar-chart__header", children: /* @__PURE__ */ e("h3", { className: "nexus-radar-chart__title", children: s }) }),
    /* @__PURE__ */ i("div", { className: "nexus-radar-chart__container", children: [
      /* @__PURE__ */ e("div", { className: "nexus-radar-chart__chart", children: /* @__PURE__ */ i(
        "svg",
        {
          className: "nexus-radar-chart__svg",
          viewBox: "0 0 312 312",
          preserveAspectRatio: "xMidYMid meet",
          children: [
            A(),
            R(),
            j(),
            z(),
            q()
          ]
        }
      ) }),
      P()
    ] })
  ] }) : /* @__PURE__ */ e("div", { ref: M, className: S, style: { height: p, width: x }, ..._, children: /* @__PURE__ */ e("div", { className: "nexus-radar-chart__empty", children: /* @__PURE__ */ e("span", { className: "nexus-radar-chart__empty-text", children: "No data available" }) }) });
});
I1.displayName = "RadarChart";
const $e = [
  "#0F172A",
  // slate-900
  "#475569",
  // slate-600  
  "#64748B",
  // slate-500
  "#94A3B8",
  // slate-400
  "#CBD5E1",
  // slate-300
  "#E2E8F0"
  // slate-200
], S1 = {
  xxs: { size: 120, strokeWidth: 30 },
  xs: { size: 160, strokeWidth: 40 },
  sm: { size: 200, strokeWidth: 50 },
  md: { size: 240, strokeWidth: 60 },
  lg: { size: 280, strokeWidth: 70 }
};
function V1(t) {
  const n = t.reduce((a, l) => a + l.value, 0);
  let s = -90;
  return t.map((a, l) => {
    const r = a.value / n * 360, o = s, c = s + r;
    return s = c, {
      ...a,
      angle: r,
      startAngle: o,
      endAngle: c,
      color: a.color || $e[l % $e.length]
    };
  });
}
function H1(t, n, s, a, l, r) {
  const o = l * Math.PI / 180, c = r * Math.PI / 180, u = t + a * Math.cos(o), p = n + a * Math.sin(o), x = t + a * Math.cos(c), f = n + a * Math.sin(c), m = t + s * Math.cos(c), v = n + s * Math.sin(c), C = t + s * Math.cos(o), h = n + s * Math.sin(o), d = r - l <= 180 ? "0" : "1";
  return [
    "M",
    u,
    p,
    "A",
    a,
    a,
    0,
    d,
    1,
    x,
    f,
    "L",
    m,
    v,
    "A",
    s,
    s,
    0,
    d,
    0,
    C,
    h,
    "Z"
  ].join(" ");
}
const j1 = ({ color: t, label: n, className: s }) => /* @__PURE__ */ i("div", { className: `piechart-legend-item ${s || ""}`, children: [
  /* @__PURE__ */ e("div", { className: "piechart-legend-dot", style: { backgroundColor: t } }),
  /* @__PURE__ */ e("span", { className: "piechart-legend-label", children: n })
] }), B1 = ({ items: t, position: n, className: s }) => /* @__PURE__ */ e("div", { className: `piechart-legend piechart-legend--${n} ${s || ""}`, children: t.map((a, l) => /* @__PURE__ */ e(
  j1,
  {
    color: a.color,
    label: a.label
  },
  `${a.label}-${l}`
)) }), Mt = ({
  data: t,
  size: n = "md",
  showLegend: s = !0,
  innerRadius: a,
  outerRadius: l,
  className: r = "",
  legendPosition: o = "right",
  centerContent: c,
  animationDuration: u = 300,
  strokeWidth: p = 1,
  strokeColor: x = "transparent",
  ...f
}) => {
  const m = S1[n], v = m.size / 2 - m.strokeWidth, C = m.size / 2, h = a ?? v, d = l ?? C, w = V1(t), g = m.size / 2, _ = m.size / 2, M = w.map((b) => ({
    color: b.color,
    label: b.label
  }));
  return t.length === 0 ? /* @__PURE__ */ e("div", { className: `piechart piechart--${n} piechart--empty ${r}`, children: /* @__PURE__ */ e("div", { className: "piechart-empty-message", children: "No data available" }) }) : /* @__PURE__ */ i(
    "div",
    {
      className: `piechart piechart--${n} ${s ? `piechart--with-legend piechart--legend-${o}` : ""} ${r}`,
      ...f,
      children: [
        /* @__PURE__ */ i("div", { className: "piechart-chart-container", children: [
          /* @__PURE__ */ i(
            "svg",
            {
              className: "piechart-svg",
              width: m.size,
              height: m.size,
              viewBox: `0 0 ${m.size} ${m.size}`,
              children: [
                /* @__PURE__ */ e(
                  "circle",
                  {
                    cx: g,
                    cy: _,
                    r: d,
                    fill: "var(--piechart-background-color, #E2E8F0)",
                    className: "piechart-background"
                  }
                ),
                /* @__PURE__ */ e(
                  "circle",
                  {
                    cx: g,
                    cy: _,
                    r: h,
                    fill: "var(--piechart-inner-background, white)",
                    className: "piechart-inner-background"
                  }
                ),
                w.map((b, y) => {
                  const N = H1(
                    g,
                    _,
                    h,
                    d,
                    b.startAngle,
                    b.endAngle
                  );
                  return /* @__PURE__ */ e(
                    "path",
                    {
                      d: N,
                      fill: b.color,
                      stroke: x,
                      strokeWidth: p,
                      className: "piechart-slice",
                      style: {
                        animationDelay: `${y * 50}ms`,
                        animationDuration: `${u}ms`
                      }
                    },
                    `slice-${y}`
                  );
                })
              ]
            }
          ),
          c && /* @__PURE__ */ e("div", { className: "piechart-center-content", children: c })
        ] }),
        s && /* @__PURE__ */ e(
          B1,
          {
            items: M,
            position: o,
            className: "piechart-legend-container"
          }
        )
      ]
    }
  );
}, he = [
  "#0F172A",
  // Brand-600 - outer ring
  "#64748B",
  // Brand-400 - middle ring  
  "#09101F"
  // Brand-800 - inner ring
], R1 = {
  xs: {
    container: 160,
    outerRing: { radius: 76, strokeWidth: 8 },
    middleRing: { radius: 68, strokeWidth: 8 },
    innerRing: { radius: 56, strokeWidth: 8 },
    numberSize: 20,
    labelSize: 12
  },
  sm: {
    container: 200,
    outerRing: { radius: 94, strokeWidth: 12 },
    middleRing: { radius: 83, strokeWidth: 12 },
    innerRing: { radius: 67, strokeWidth: 12 },
    numberSize: 24,
    labelSize: 12
  },
  md: {
    container: 240,
    outerRing: { radius: 112, strokeWidth: 16 },
    middleRing: { radius: 100, strokeWidth: 16 },
    innerRing: { radius: 80, strokeWidth: 16 },
    numberSize: 30,
    labelSize: 14
  },
  lg: {
    container: 280,
    outerRing: { radius: 131, strokeWidth: 18 },
    middleRing: { radius: 116, strokeWidth: 18 },
    innerRing: { radius: 92, strokeWidth: 18 },
    numberSize: 36,
    labelSize: 14
  }
}, xe = ({
  radius: t,
  strokeWidth: n,
  progress: s,
  color: a,
  backgroundColor: l = "#F5F5F5"
}) => {
  const o = 2 * Math.PI * t, c = o, u = o * (1 - s);
  return /* @__PURE__ */ i("g", { children: [
    /* @__PURE__ */ e(
      "circle",
      {
        cx: 140,
        cy: 140,
        r: t,
        fill: "none",
        stroke: l,
        strokeWidth: n,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ e(
      "circle",
      {
        cx: 140,
        cy: 140,
        r: t,
        fill: "none",
        stroke: a,
        strokeWidth: n,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: c,
        strokeDashoffset: u,
        transform: "rotate(-90 140 140)",
        className: "activity-ring-progress"
      }
    )
  ] });
}, W1 = ({ color: t, label: n, isVertical: s = !1 }) => /* @__PURE__ */ i("div", { className: `activity-legend-item ${s ? "activity-legend-item--vertical" : ""}`, children: [
  /* @__PURE__ */ e("div", { className: "activity-legend-dot", style: { backgroundColor: t } }),
  /* @__PURE__ */ e("span", { className: "activity-legend-label", children: n })
] }), wt = ({
  data: t = [],
  size: n = "md",
  showLabel: s = !0,
  showLegend: a = !1,
  legendPosition: l = "bottom",
  label: r = "Active users",
  value: o = "1,000",
  className: c = "",
  ...u
}) => {
  var v, C, h, d, w, g;
  const p = R1[n], x = [...t];
  for (; x.length < 3; )
    x.push({ label: `Series ${x.length + 1}`, value: 0.75 });
  x.splice(3);
  const f = x.map((_, M) => ({
    ..._,
    color: _.color || he[M % he.length]
  })), m = [
    "activity-chart",
    `activity-chart--${n}`,
    a && `activity-chart--legend-${l}`,
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: m, ...u, children: /* @__PURE__ */ i("div", { className: "activity-chart-container", children: [
    /* @__PURE__ */ i("div", { className: "activity-chart-gauge", children: [
      /* @__PURE__ */ i(
        "svg",
        {
          width: p.container,
          height: p.container,
          viewBox: "0 0 280 280",
          className: "activity-chart-svg",
          children: [
            /* @__PURE__ */ e(
              xe,
              {
                radius: p.outerRing.radius,
                strokeWidth: p.outerRing.strokeWidth,
                progress: Math.min(Math.max(((v = f[0]) == null ? void 0 : v.value) || 0, 0), 1),
                color: ((C = f[0]) == null ? void 0 : C.color) || he[0]
              }
            ),
            /* @__PURE__ */ e(
              xe,
              {
                radius: p.middleRing.radius,
                strokeWidth: p.middleRing.strokeWidth,
                progress: Math.min(Math.max(((h = f[1]) == null ? void 0 : h.value) || 0, 0), 1),
                color: ((d = f[1]) == null ? void 0 : d.color) || he[1]
              }
            ),
            /* @__PURE__ */ e(
              xe,
              {
                radius: p.innerRing.radius,
                strokeWidth: p.innerRing.strokeWidth,
                progress: Math.min(Math.max(((w = f[2]) == null ? void 0 : w.value) || 0, 0), 1),
                color: ((g = f[2]) == null ? void 0 : g.color) || he[2]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ i("div", { className: "activity-chart-center", children: [
        s && /* @__PURE__ */ i("div", { className: "activity-chart-center-content", children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: "activity-chart-label",
              style: { fontSize: `${p.labelSize}px` },
              children: r
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              className: "activity-chart-value",
              style: { fontSize: `${p.numberSize}px` },
              children: o
            }
          )
        ] }),
        !s && /* @__PURE__ */ e(
          "div",
          {
            className: "activity-chart-value activity-chart-value--no-label",
            style: { fontSize: `${p.numberSize}px` },
            children: o
          }
        )
      ] })
    ] }),
    a && /* @__PURE__ */ e("div", { className: `activity-chart-legend activity-chart-legend--${l}`, children: f.map((_, M) => /* @__PURE__ */ e(
      W1,
      {
        color: _.color,
        label: _.label,
        isVertical: l === "right"
      },
      M
    )) })
  ] }) });
}, Ae = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
  "path",
  {
    d: "M15.8333 10H4.16663M4.16663 10L9.99996 15.8334M4.16663 10L9.99996 4.16669",
    stroke: "currentColor",
    strokeWidth: "1.67",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), ze = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
  "path",
  {
    d: "M4.16675 10H15.8334M15.8334 10L10.0001 4.16669M15.8334 10L10.0001 15.8334",
    stroke: "currentColor",
    strokeWidth: "1.67",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), A1 = ({
  currentPage: t,
  totalPages: n,
  size: s = "md",
  color: a = "primary-light",
  framed: l = !1,
  style: r = "dot",
  onPageChange: o,
  disabled: c = !1
}) => {
  const u = (x) => {
    !c && o && x !== t && o(x);
  }, p = [
    "pagination-dots",
    `pagination-dots--${s}`,
    `pagination-dots--${a}`,
    `pagination-dots--${r}`,
    l ? "pagination-dots--framed" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: p, role: "tablist", "aria-label": "Pagination dots", children: Array.from({ length: n }, (x, f) => {
    const m = f + 1, v = m === t;
    return /* @__PURE__ */ e(
      "button",
      {
        className: `pagination-dot ${v ? "pagination-dot--active" : ""}`,
        onClick: () => u(m),
        disabled: c,
        role: "tab",
        "aria-selected": v,
        "aria-label": `Go to page ${m}`
      },
      m
    );
  }) });
}, z1 = ({
  page: t,
  isActive: n = !1,
  isEllipsis: s = !1,
  shape: a = "square",
  onClick: l,
  disabled: r = !1
}) => /* @__PURE__ */ e(
  "button",
  {
    className: `pagination-number ${a === "circle" ? "pagination-number--circle" : "pagination-number--square"} ${n ? "pagination-number--active" : ""} ${s ? "pagination-number--ellipsis" : ""}`,
    onClick: () => {
      !r && !s && l && l(t);
    },
    disabled: r || s,
    "aria-current": n ? "page" : void 0,
    "aria-label": s ? "More pages" : `Page ${t}`,
    children: s ? "..." : t
  }
), le = ({
  direction: t,
  type: n = "link",
  disabled: s = !1,
  onClick: a,
  children: l
}) => {
  const r = t === "previous" ? /* @__PURE__ */ e(Ae, {}) : /* @__PURE__ */ e(ze, {}), o = t === "previous" ? "Previous" : "Next";
  return /* @__PURE__ */ e(
    "button",
    {
      className: `pagination-nav pagination-nav--${t} pagination-nav--${n}`,
      onClick: a,
      disabled: s,
      "aria-label": `Go to ${t} page`,
      children: n === "icon-only" ? r : t === "previous" ? /* @__PURE__ */ i(te, { children: [
        r,
        /* @__PURE__ */ e("span", { children: l || o })
      ] }) : /* @__PURE__ */ i(te, { children: [
        /* @__PURE__ */ e("span", { children: l || o }),
        r
      ] })
    }
  );
}, Ie = ({ currentPage: t, totalPages: n, maxPageButtons: s, onPageChange: a, onPrevious: l, onNext: r, disabled: o }) => {
  const c = Ze(t, n, s);
  return /* @__PURE__ */ i("div", { className: "pagination-button-group", children: [
    /* @__PURE__ */ i(
      "button",
      {
        className: "pagination-button-group__button pagination-button-group__button--previous",
        onClick: l,
        disabled: o || t <= 1,
        "aria-label": "Go to previous page",
        children: [
          /* @__PURE__ */ e(Ae, {}),
          /* @__PURE__ */ e("span", { children: "Previous" })
        ]
      }
    ),
    c.map((u, p) => /* @__PURE__ */ i(W.Fragment, { children: [
      p > 0 && /* @__PURE__ */ e("div", { className: "pagination-button-group__divider" }),
      /* @__PURE__ */ e(
        "button",
        {
          className: `pagination-button-group__button pagination-button-group__button--page ${u === t ? "pagination-button-group__button--active" : ""}`,
          onClick: () => a && a(u),
          disabled: o || typeof u != "number",
          "aria-current": u === t ? "page" : void 0,
          "aria-label": typeof u == "number" ? `Page ${u}` : "More pages",
          children: typeof u == "number" ? u : "..."
        }
      )
    ] }, p)),
    /* @__PURE__ */ e("div", { className: "pagination-button-group__divider" }),
    /* @__PURE__ */ i(
      "button",
      {
        className: "pagination-button-group__button pagination-button-group__button--next",
        onClick: r,
        disabled: o || t >= n,
        "aria-label": "Go to next page",
        children: [
          /* @__PURE__ */ e("span", { children: "Next" }),
          /* @__PURE__ */ e(ze, {})
        ]
      }
    )
  ] });
}, Ze = (t, n, s) => {
  if (n <= s)
    return Array.from({ length: n }, (r, o) => o + 1);
  const a = [], l = Math.floor(s / 2);
  if (a.push(1), t <= l + 2) {
    for (let r = 2; r <= Math.min(s - 1, n - 1); r++)
      a.push(r);
    n > s && a.push("...");
  } else if (t >= n - l - 1) {
    n > s && a.push("...");
    for (let r = Math.max(n - s + 2, 2); r <= n - 1; r++)
      a.push(r);
  } else {
    a.push("...");
    for (let r = t - l + 1; r <= t + l - 1; r++)
      a.push(r);
    a.push("...");
  }
  return n > 1 && a.push(n), a;
}, Nt = ({
  currentPage: t,
  totalPages: n,
  type: s = "page-default",
  shape: a = "square",
  breakpoint: l = "desktop",
  alignment: r = "center",
  showNavigation: o = !0,
  showPageNumbers: c = !0,
  showPageInfo: u = !1,
  maxPageButtons: p = 7,
  labels: x = {},
  onPageChange: f,
  onPrevious: m,
  onNext: v,
  className: C = "",
  disabled: h = !1,
  dotsConfig: d = {
    size: "md",
    color: "primary-light",
    framed: !1
  },
  ...w
}) => {
  const {
    previous: g = "Previous",
    next: _ = "Next",
    pageInfo: M = `Page ${t} of ${n}`
  } = x, b = (L) => {
    L !== t && f && f(L);
  }, y = () => {
    t > 1 && (m ? m() : f && f(t - 1));
  }, N = () => {
    t < n && (v ? v() : f && f(t + 1));
  }, H = Ze(t, n, p), k = [
    "pagination",
    `pagination--${s}`,
    `pagination--${l}`,
    `pagination--${r}`,
    C
  ].filter(Boolean).join(" ");
  if (s === "dots" || s === "lines") {
    const L = s === "dots" ? "dot" : "line";
    return /* @__PURE__ */ e("nav", { className: k, "aria-label": "Pagination", ...w, children: /* @__PURE__ */ e(
      A1,
      {
        currentPage: t,
        totalPages: n,
        size: d.size,
        color: d.color,
        framed: d.framed,
        style: L,
        onPageChange: b,
        disabled: h
      }
    ) });
  }
  if (l === "mobile")
    return s.includes("button-group") ? /* @__PURE__ */ e("nav", { className: k, "aria-label": "Pagination", ...w, children: /* @__PURE__ */ e(
      Ie,
      {
        currentPage: t,
        totalPages: n,
        maxPageButtons: 5,
        onPageChange: b,
        onPrevious: y,
        onNext: N,
        disabled: h
      }
    ) }) : /* @__PURE__ */ i("nav", { className: k, "aria-label": "Pagination", ...w, children: [
      o && /* @__PURE__ */ e(
        le,
        {
          direction: "previous",
          type: "icon-only",
          disabled: h || t <= 1,
          onClick: y
        }
      ),
      u && /* @__PURE__ */ e("div", { className: "pagination-info", children: M }),
      o && /* @__PURE__ */ e(
        le,
        {
          direction: "next",
          type: "icon-only",
          disabled: h || t >= n,
          onClick: N
        }
      )
    ] });
  if (s.includes("button-group"))
    return /* @__PURE__ */ e("nav", { className: k, "aria-label": "Pagination", ...w, children: /* @__PURE__ */ e(
      Ie,
      {
        currentPage: t,
        totalPages: n,
        maxPageButtons: p,
        onPageChange: b,
        onPrevious: y,
        onNext: N,
        disabled: h
      }
    ) });
  if (s.includes("minimal")) {
    const L = s.includes("card") ? "secondary" : "link";
    return /* @__PURE__ */ i("nav", { className: k, "aria-label": "Pagination", ...w, children: [
      r === "left" && u && /* @__PURE__ */ e("div", { className: "pagination-info", children: M }),
      o && /* @__PURE__ */ i("div", { className: "pagination-actions", children: [
        /* @__PURE__ */ e(
          le,
          {
            direction: "previous",
            type: L,
            disabled: h || t <= 1,
            onClick: y,
            children: g
          }
        ),
        /* @__PURE__ */ e(
          le,
          {
            direction: "next",
            type: L,
            disabled: h || t >= n,
            onClick: N,
            children: _
          }
        )
      ] }),
      (r === "center" || r === "right") && u && /* @__PURE__ */ e("div", { className: "pagination-info", children: M })
    ] });
  }
  const I = s.includes("card") ? "secondary" : "link";
  return /* @__PURE__ */ i("nav", { className: k, "aria-label": "Pagination", ...w, children: [
    o && /* @__PURE__ */ e(
      le,
      {
        direction: "previous",
        type: I,
        disabled: h || t <= 1,
        onClick: y,
        children: g
      }
    ),
    c && /* @__PURE__ */ e("div", { className: "pagination-numbers", children: H.map((L, S) => /* @__PURE__ */ e(
      z1,
      {
        page: typeof L == "number" ? L : 0,
        isActive: L === t,
        isEllipsis: typeof L == "string",
        shape: a,
        onClick: b,
        disabled: h
      },
      S
    )) }),
    o && /* @__PURE__ */ e(
      le,
      {
        direction: "next",
        type: I,
        disabled: h || t >= n,
        onClick: N,
        children: _
      }
    )
  ] });
}, Z1 = ({ size: t = "md" }) => {
  const n = t === "lg" ? 24 : 20, s = t === "lg" ? 2 : 1.67;
  return /* @__PURE__ */ e("svg", { width: n, height: n, viewBox: `0 0 ${n} ${n}`, fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
    "path",
    {
      d: t === "lg" ? "M15 18L9 12L15 6" : "M12.5 15L7.5 10L12.5 5",
      stroke: "currentColor",
      strokeWidth: s,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) });
}, F1 = ({ size: t = "md" }) => {
  const n = t === "lg" ? 24 : 20, s = t === "lg" ? 2 : 1.67;
  return /* @__PURE__ */ e("svg", { width: n, height: n, viewBox: `0 0 ${n} ${n}`, fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
    "path",
    {
      d: t === "lg" ? "M9 18L15 12L9 6" : "M7.5 15L12.5 10L7.5 5",
      stroke: "currentColor",
      strokeWidth: s,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) });
}, Se = ({
  direction: t,
  size: n = "md",
  theme: s = "primary",
  onClick: a,
  disabled: l = !1
}) => {
  const r = t === "left" ? Z1 : F1;
  return /* @__PURE__ */ e(
    "button",
    {
      className: `carousel-arrow carousel-arrow--${t} carousel-arrow--${n} carousel-arrow--${s}`,
      onClick: a,
      disabled: l,
      "aria-label": `${t === "left" ? "Previous" : "Next"} slide`,
      children: /* @__PURE__ */ e(r, { size: n })
    }
  );
}, E1 = ({
  currentSlide: t,
  totalSlides: n,
  size: s = "md",
  theme: a = "primary",
  onDotClick: l,
  disabled: r = !1
}) => {
  const o = (u) => {
    !r && l && u !== t && l(u);
  }, c = [
    "carousel-dots",
    `carousel-dots--${s}`,
    `carousel-dots--${a}`
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: c, role: "tablist", "aria-label": "Slide navigation", children: Array.from({ length: n }, (u, p) => {
    const x = p === t;
    return /* @__PURE__ */ e(
      "button",
      {
        className: `carousel-dot ${x ? "carousel-dot--active" : ""}`,
        onClick: () => o(p),
        disabled: r,
        role: "tab",
        "aria-selected": x,
        "aria-label": `Go to slide ${p + 1}`
      },
      p
    );
  }) });
}, Lt = ({
  slides: t,
  size: n = "md",
  theme: s = "primary",
  autoPlay: a = 0,
  showArrows: l = !0,
  showDots: r = !0,
  altTexts: o = [],
  onSlideChange: c,
  className: u = "",
  disabled: p = !1,
  ...x
}) => {
  const [f, m] = J(0), [v, C] = J(!1), h = ee(null), d = ee(null), w = ee(null), g = t.length, _ = (L) => {
    p || v || L === f || (C(!0), m(L), c && c(L), setTimeout(() => C(!1), 300));
  }, M = () => {
    const L = f === 0 ? g - 1 : f - 1;
    _(L);
  }, b = () => {
    const L = f === g - 1 ? 0 : f + 1;
    _(L);
  }, y = (L) => {
    p || (d.current = L.touches[0].clientX);
  }, N = (L) => {
    p || (w.current = L.touches[0].clientX);
  }, H = () => {
    if (p || d.current === null || w.current === null) return;
    const L = d.current - w.current;
    Math.abs(L) > 50 && (L > 0 ? b() : M()), d.current = null, w.current = null;
  };
  ae(() => {
    if (a > 0 && !p)
      return h.current = setInterval(() => {
        b();
      }, a), () => {
        h.current && clearInterval(h.current);
      };
  }, [a, f, p, g]), ae(() => () => {
    h.current && clearInterval(h.current);
  }, []);
  const k = [
    "carousel",
    `carousel--${n}`,
    `carousel--${s}`,
    u
  ].filter(Boolean).join(" "), I = (L, S) => typeof L == "string" ? /* @__PURE__ */ e(
    "img",
    {
      src: L,
      alt: o[S] || `Slide ${S + 1}`,
      className: "carousel-image",
      loading: S === 0 ? "eager" : "lazy"
    }
  ) : L;
  return /* @__PURE__ */ i(
    "div",
    {
      className: k,
      ...x,
      onTouchStart: y,
      onTouchMove: N,
      onTouchEnd: H,
      children: [
        /* @__PURE__ */ i("div", { className: "carousel-container", children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: "carousel-track",
              style: { transform: `translateX(-${f * 100}%)` },
              children: t.map((L, S) => /* @__PURE__ */ e(
                "div",
                {
                  className: `carousel-slide ${S === f ? "carousel-slide--active" : ""}`,
                  "aria-hidden": S !== f,
                  children: I(L, S)
                },
                S
              ))
            }
          ),
          l && g > 1 && /* @__PURE__ */ i(te, { children: [
            /* @__PURE__ */ e(
              Se,
              {
                direction: "left",
                size: n,
                theme: s,
                onClick: M,
                disabled: p
              }
            ),
            /* @__PURE__ */ e(
              Se,
              {
                direction: "right",
                size: n,
                theme: s,
                onClick: b,
                disabled: p
              }
            )
          ] })
        ] }),
        r && g > 1 && /* @__PURE__ */ e(
          E1,
          {
            currentSlide: f,
            totalSlides: g,
            size: n,
            theme: s,
            onDotClick: _,
            disabled: p
          }
        )
      ]
    }
  );
}, T1 = ({ type: t }) => t === "image" ? /* @__PURE__ */ e("div", { className: "message-file-icon message-file-icon--image", children: /* @__PURE__ */ e("div", { className: "message-file-icon__background", children: /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
  "path",
  {
    d: "M3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14ZM3.33333 14L10.6667 6.66667L14 10M6.66667 5.66667C6.66667 6.21895 6.21895 6.66667 5.66667 6.66667C5.11438 6.66667 4.66667 6.21895 4.66667 5.66667C4.66667 5.11438 5.11438 4.66667 5.66667 4.66667C6.21895 4.66667 6.66667 5.11438 6.66667 5.66667Z",
    stroke: "#0F172A",
    strokeWidth: "1.33333",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }) }) }) : /* @__PURE__ */ e("div", { className: "message-file-icon message-file-icon--document", children: /* @__PURE__ */ e("div", { className: "message-file-icon__background", children: /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
  "path",
  {
    d: "M8.66675 1.33337H4.00008C3.64646 1.33337 3.30732 1.47385 3.05727 1.7239C2.80722 1.97395 2.66675 2.31309 2.66675 2.66671V13.3334C2.66675 13.687 2.80722 14.0261 3.05727 14.2762C3.30732 14.5262 3.64646 14.6667 4.00008 14.6667H12.0001C12.3537 14.6667 12.6928 14.5262 12.9429 14.2762C13.1929 14.0261 13.3334 13.687 13.3334 13.3334V6.00004M8.66675 1.33337L13.3334 6.00004M8.66675 1.33337V6.00004H13.3334",
    stroke: "#0F172A",
    strokeWidth: "1.33333",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }) }) }), D1 = ({
  emoji: t,
  count: n,
  reacted: s = !1,
  onClick: a
}) => /* @__PURE__ */ i(
  "button",
  {
    className: `message-reaction ${s ? "message-reaction--reacted" : ""}`,
    onClick: () => {
      a && a();
    },
    "aria-label": `React with ${t}${n ? ` (${n} reactions)` : ""}`,
    children: [
      /* @__PURE__ */ e("span", { className: "message-reaction__emoji", children: t }),
      n && /* @__PURE__ */ e("span", { className: "message-reaction__count", children: n })
    ]
  }
), O1 = ({ sender: t }) => /* @__PURE__ */ i("div", { className: "message message--received message--typing", children: [
  /* @__PURE__ */ e("div", { className: "message__avatar", children: t.avatar ? /* @__PURE__ */ e("img", { src: t.avatar, alt: t.name, className: "message__avatar-image" }) : /* @__PURE__ */ e("div", { className: "message__avatar-placeholder", children: t.name.charAt(0).toUpperCase() }) }),
  /* @__PURE__ */ i("div", { className: "message__content", children: [
    /* @__PURE__ */ e("div", { className: "message__sender", children: t.name }),
    /* @__PURE__ */ e("div", { className: "message__bubble message__bubble--typing", children: /* @__PURE__ */ i("div", { className: "typing-indicator", children: [
      /* @__PURE__ */ e("div", { className: "typing-indicator__dot" }),
      /* @__PURE__ */ e("div", { className: "typing-indicator__dot" }),
      /* @__PURE__ */ e("div", { className: "typing-indicator__dot" })
    ] }) })
  ] })
] }), pe = ({
  content: t,
  type: n,
  variant: s = "text",
  sender: a,
  timestamp: l,
  attachment: r,
  reactions: o = [],
  showReactions: c = !1,
  onReactionClick: u,
  onAttachmentClick: p,
  className: x = "",
  ...f
}) => {
  if (s === "typing")
    return /* @__PURE__ */ e(O1, { sender: a });
  const m = [
    "message",
    `message--${n}`,
    `message--${s}`,
    x
  ].filter(Boolean).join(" "), v = () => {
    p && p();
  }, C = (d) => {
    u && u(d);
  }, h = () => s === "attachment" && r ? /* @__PURE__ */ i("div", { className: "message__attachment", onClick: v, children: [
    /* @__PURE__ */ e(T1, { type: r.type }),
    /* @__PURE__ */ i("div", { className: "message__attachment-info", children: [
      /* @__PURE__ */ e("div", { className: "message__attachment-name", children: r.name }),
      /* @__PURE__ */ e("div", { className: "message__attachment-size", children: r.size })
    ] })
  ] }) : /* @__PURE__ */ e("div", { className: "message__text", children: t });
  return /* @__PURE__ */ i("div", { className: m, ...f, children: [
    n === "received" && /* @__PURE__ */ i("div", { className: "message__avatar", children: [
      a.avatar ? /* @__PURE__ */ e("img", { src: a.avatar, alt: a.name, className: "message__avatar-image" }) : /* @__PURE__ */ e("div", { className: "message__avatar-placeholder", children: a.name.charAt(0).toUpperCase() }),
      a.isOnline && /* @__PURE__ */ e("div", { className: "message__avatar-status" })
    ] }),
    /* @__PURE__ */ i("div", { className: "message__content", children: [
      /* @__PURE__ */ i("div", { className: "message__header", children: [
        /* @__PURE__ */ e("div", { className: "message__sender", children: n === "sent" ? "You" : a.name }),
        /* @__PURE__ */ e("div", { className: "message__timestamp", children: l })
      ] }),
      /* @__PURE__ */ e("div", { className: `message__bubble message__bubble--${n} message__bubble--${s}`, children: h() }),
      c && o.length > 0 && /* @__PURE__ */ e("div", { className: "message__reactions", children: o.map((d, w) => /* @__PURE__ */ e(
        D1,
        {
          emoji: d.emoji,
          count: d.count,
          reacted: d.reacted,
          onClick: () => C(d.emoji)
        },
        w
      )) })
    ] })
  ] });
}, G1 = () => /* @__PURE__ */ i("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e("g", { clipPath: "url(#clip0_send)", children: /* @__PURE__ */ e(
    "path",
    {
      d: "M18.3332 1.66663L9.1665 10.8333M18.3332 1.66663L12.4998 18.3333L9.1665 10.8333M18.3332 1.66663L1.6665 7.49996L9.1665 10.8333",
      stroke: "currentColor",
      strokeWidth: "1.67",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ e("clipPath", { id: "clip0_send", children: /* @__PURE__ */ e("rect", { width: "20", height: "20", fill: "white" }) }) })
] }), U1 = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
  "path",
  {
    d: "M15 5L5 15M5 5L15 15",
    stroke: "currentColor",
    strokeWidth: "1.66667",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), X1 = ({ activeTab: t, participantCount: n, onTabChange: s }) => /* @__PURE__ */ e("div", { className: "chat-tabs", children: /* @__PURE__ */ i("div", { className: "chat-tabs__container", children: [
  /* @__PURE__ */ e(
    "button",
    {
      className: `chat-tabs__tab ${t === "messages" ? "chat-tabs__tab--active" : ""}`,
      onClick: () => s("messages"),
      children: "Messages"
    }
  ),
  /* @__PURE__ */ i(
    "button",
    {
      className: `chat-tabs__tab ${t === "participants" ? "chat-tabs__tab--active" : ""}`,
      onClick: () => s("participants"),
      children: [
        "Participants",
        n && /* @__PURE__ */ e("span", { className: "chat-tabs__badge", children: n })
      ]
    }
  )
] }) }), Ve = ({ placeholder: t, onSendMessage: n, disabled: s = !1 }) => {
  const [a, l] = J(""), r = (c) => {
    c.preventDefault(), a.trim() && !s && (n(a.trim()), l(""));
  };
  return /* @__PURE__ */ i("form", { className: "message-input", onSubmit: r, children: [
    /* @__PURE__ */ e("div", { className: "message-input__field", children: /* @__PURE__ */ e(
      "input",
      {
        type: "text",
        value: a,
        onChange: (c) => l(c.target.value),
        onKeyPress: (c) => {
          c.key === "Enter" && !c.shiftKey && (c.preventDefault(), r(c));
        },
        placeholder: t,
        disabled: s,
        className: "message-input__input"
      }
    ) }),
    /* @__PURE__ */ e(
      "button",
      {
        type: "submit",
        disabled: !a.trim() || s,
        className: "message-input__send",
        "aria-label": "Send message",
        children: /* @__PURE__ */ e(G1, {})
      }
    )
  ] });
}, He = ({ date: t }) => /* @__PURE__ */ i("div", { className: "date-divider", children: [
  /* @__PURE__ */ e("div", { className: "date-divider__line" }),
  /* @__PURE__ */ e("div", { className: "date-divider__text", children: t }),
  /* @__PURE__ */ e("div", { className: "date-divider__line" })
] }), $t = ({
  title: t = "Group chat",
  messages: n = [],
  currentUser: s,
  participantCount: a,
  activeTab: l = "messages",
  placeholder: r = "Message",
  isLoading: o = !1,
  onSendMessage: c,
  onTabChange: u,
  onClose: p,
  className: x = "",
  variant: f = "inline",
  ...m
}) => {
  const v = ee(null), C = ee(null);
  ae(() => {
    v.current && v.current.scrollIntoView({ behavior: "smooth" });
  }, [n]);
  const h = (M) => {
    c && c(M);
  }, d = (M) => {
    u && u(M);
  }, w = [
    "chat-interface",
    `chat-interface--${f}`,
    x
  ].filter(Boolean).join(" "), g = n.reduce((M, b) => {
    const y = new Date(b.timestamp).toDateString(), N = M[M.length - 1];
    return N && N.date === y ? N.messages.push(b) : M.push({ date: y, messages: [b] }), M;
  }, []), _ = (M) => {
    const b = new Date(M), y = /* @__PURE__ */ new Date(), N = new Date(y);
    return N.setDate(N.getDate() - 1), b.toDateString() === y.toDateString() ? "Today" : b.toDateString() === N.toDateString() ? "Yesterday" : b.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric"
    });
  };
  return /* @__PURE__ */ i("div", { className: w, ...m, children: [
    f === "panel" && /* @__PURE__ */ i("div", { className: "chat-interface__panel", children: [
      /* @__PURE__ */ i("div", { className: "chat-interface__header", children: [
        /* @__PURE__ */ i("div", { className: "chat-interface__title-section", children: [
          /* @__PURE__ */ e("h2", { className: "chat-interface__title", children: t }),
          p && /* @__PURE__ */ e(
            "button",
            {
              className: "chat-interface__close",
              onClick: p,
              "aria-label": "Close chat",
              children: /* @__PURE__ */ e(U1, {})
            }
          )
        ] }),
        /* @__PURE__ */ e(
          X1,
          {
            activeTab: l,
            participantCount: a,
            onTabChange: d
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { className: "chat-interface__content", children: l === "messages" ? /* @__PURE__ */ i(te, { children: [
        /* @__PURE__ */ i("div", { className: "chat-interface__messages", ref: C, children: [
          g.map((M, b) => /* @__PURE__ */ i("div", { className: "chat-interface__message-group", children: [
            b > 0 && /* @__PURE__ */ e(He, { date: _(M.date) }),
            M.messages.map((y, N) => /* @__PURE__ */ e(
              pe,
              {
                ...y
              },
              `${b}-${N}`
            ))
          ] }, b)),
          o && /* @__PURE__ */ e(
            pe,
            {
              content: "",
              type: "received",
              variant: "typing",
              sender: { name: "Someone", isOnline: !0 },
              timestamp: ""
            }
          ),
          /* @__PURE__ */ e("div", { ref: v })
        ] }),
        /* @__PURE__ */ e("div", { className: "chat-interface__footer", children: /* @__PURE__ */ e(
          Ve,
          {
            placeholder: r,
            onSendMessage: h,
            disabled: o
          }
        ) })
      ] }) : /* @__PURE__ */ e("div", { className: "chat-interface__participants", children: /* @__PURE__ */ e("p", { children: "Participants view would go here" }) }) })
    ] }),
    f === "inline" && /* @__PURE__ */ i("div", { className: "chat-interface__inline", children: [
      /* @__PURE__ */ i("div", { className: "chat-interface__messages", ref: C, children: [
        g.map((M, b) => /* @__PURE__ */ i("div", { className: "chat-interface__message-group", children: [
          b > 0 && /* @__PURE__ */ e(He, { date: _(M.date) }),
          M.messages.map((y, N) => /* @__PURE__ */ e(
            pe,
            {
              ...y
            },
            `${b}-${N}`
          ))
        ] }, b)),
        o && /* @__PURE__ */ e(
          pe,
          {
            content: "",
            type: "received",
            variant: "typing",
            sender: { name: "Someone", isOnline: !0 },
            timestamp: ""
          }
        ),
        /* @__PURE__ */ e("div", { ref: v })
      ] }),
      /* @__PURE__ */ e("div", { className: "chat-interface__footer", children: /* @__PURE__ */ e(
        Ve,
        {
          placeholder: r,
          onSendMessage: h,
          disabled: o
        }
      ) })
    ] })
  ] });
}, It = () => /* @__PURE__ */ i("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
  /* @__PURE__ */ e("path", { d: "M12.1464 1.85355C12.3417 1.65829 12.6583 1.65829 12.8536 1.85355L14.1464 3.14645C14.3417 3.34171 14.3417 3.65829 14.1464 3.85355L5.35355 12.6464C5.25979 12.7402 5.13261 12.7918 5 12.7918H2.75C2.33579 12.7918 2 12.456 2 12.0418V9.79179C2 9.65918 2.05164 9.532 2.14541 9.43823L10.9383 0.645348C11.1335 0.450086 11.45 0.450086 11.6453 0.645348L12.1464 1.85355Z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M10.5 3L13 5.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
] }), St = () => /* @__PURE__ */ i("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
  /* @__PURE__ */ e("path", { d: "M6.5 1.75H9.5C9.77614 1.75 10 1.97386 10 2.25V3H6V2.25C6 1.97386 6.22386 1.75 6.5 1.75Z", stroke: "currentColor", strokeWidth: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M3.75 3.75H12.25", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M4.75 3.75V12.25C4.75 12.6642 5.08579 13 5.5 13H10.5C10.9142 13 11.25 12.6642 11.25 12.25V3.75", stroke: "currentColor", strokeWidth: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M7 6.5V9.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M9 6.5V9.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
] }), K1 = ({ direction: t }) => /* @__PURE__ */ i("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", className: `table-sort-icon ${t ? `table-sort-icon--${t}` : ""}`, children: [
  /* @__PURE__ */ e("path", { d: "M8 3.5L5.5 6.5H10.5L8 3.5Z", fill: t === "asc" ? "currentColor" : "#9CA3AF" }),
  /* @__PURE__ */ e("path", { d: "M8 12.5L10.5 9.5H5.5L8 12.5Z", fill: t === "desc" ? "currentColor" : "#9CA3AF" })
] }), Vt = ({
  data: t,
  columns: n,
  actions: s = [],
  variant: a = "default",
  size: l = "md",
  hoverable: r = !0,
  selectable: o = !1,
  selectedRows: c = [],
  onSelectionChange: u,
  rowKey: p = "id",
  loading: x = !1,
  emptyMessage: f = "No data available",
  caption: m,
  stickyHeader: v = !1,
  sortConfig: C,
  onSort: h,
  className: d = "",
  ...w
}) => {
  const g = [
    "nexus-table",
    `nexus-table--${a}`,
    `nexus-table--${l}`,
    r && "nexus-table--hoverable",
    o && "nexus-table--selectable",
    v && "nexus-table--sticky-header",
    x && "nexus-table--loading",
    d
  ].filter(Boolean).join(" "), _ = (k) => {
    if (!h) return;
    const L = ((C == null ? void 0 : C.key) === k ? C.direction : void 0) === "asc" ? "desc" : "asc";
    h(k, L);
  }, M = () => {
    if (!u) return;
    const k = t.map((L) => L[p]), I = k.length > 0 && k.every((L) => c.includes(L));
    u(I ? [] : k);
  }, b = (k) => {
    if (!u) return;
    const I = c.includes(k);
    u(I ? c.filter((L) => L !== k) : [...c, k]);
  }, y = (k, I, L) => {
    const S = I[k.key];
    return k.render ? k.render(S, I, L) : S;
  }, N = t.length > 0 && t.every((k) => c.includes(k[p])), H = c.length > 0 && !N;
  return x ? /* @__PURE__ */ e("div", { className: g, children: /* @__PURE__ */ i("div", { className: "nexus-table__loading", children: [
    /* @__PURE__ */ e("div", { className: "nexus-table__spinner" }),
    /* @__PURE__ */ e("span", { children: "Loading..." })
  ] }) }) : t.length === 0 ? /* @__PURE__ */ e("div", { className: g, children: /* @__PURE__ */ e("div", { className: "nexus-table__empty", children: /* @__PURE__ */ e("span", { children: f }) }) }) : /* @__PURE__ */ e("div", { className: g, ...w, children: /* @__PURE__ */ i("table", { className: "nexus-table__table", children: [
    m && /* @__PURE__ */ e("caption", { className: "nexus-table__caption", children: m }),
    /* @__PURE__ */ e("thead", { className: "nexus-table__header", children: /* @__PURE__ */ i("tr", { className: "nexus-table__header-row", children: [
      o && /* @__PURE__ */ e("th", { className: "nexus-table__header-cell nexus-table__header-cell--checkbox", children: /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          className: "nexus-table__checkbox",
          checked: N,
          ref: (k) => {
            k && (k.indeterminate = H);
          },
          onChange: M,
          "aria-label": "Select all rows"
        }
      ) }),
      n.map((k) => /* @__PURE__ */ e(
        "th",
        {
          className: `nexus-table__header-cell nexus-table__header-cell--${k.align || "left"} ${k.sortable ? "nexus-table__header-cell--sortable" : ""}`,
          style: { width: k.width },
          onClick: k.sortable ? () => _(k.key) : void 0,
          children: /* @__PURE__ */ i("div", { className: "nexus-table__header-content", children: [
            /* @__PURE__ */ e("span", { children: k.header }),
            k.sortable && /* @__PURE__ */ e(
              K1,
              {
                direction: (C == null ? void 0 : C.key) === k.key ? C.direction : void 0
              }
            )
          ] })
        },
        k.key
      )),
      s.length > 0 && /* @__PURE__ */ e("th", { className: "nexus-table__header-cell nexus-table__header-cell--actions", children: "Actions" })
    ] }) }),
    /* @__PURE__ */ e("tbody", { className: "nexus-table__body", children: t.map((k, I) => {
      const L = k[p], S = c.includes(L);
      return /* @__PURE__ */ i(
        "tr",
        {
          className: `nexus-table__row ${S ? "nexus-table__row--selected" : ""}`,
          children: [
            o && /* @__PURE__ */ e("td", { className: "nexus-table__cell nexus-table__cell--checkbox", children: /* @__PURE__ */ e(
              "input",
              {
                type: "checkbox",
                className: "nexus-table__checkbox",
                checked: S,
                onChange: () => b(L),
                "aria-label": `Select row ${I + 1}`
              }
            ) }),
            n.map((V) => /* @__PURE__ */ e(
              "td",
              {
                className: `nexus-table__cell nexus-table__cell--${V.align || "left"}`,
                children: y(V, k, I)
              },
              V.key
            )),
            s.length > 0 && /* @__PURE__ */ e("td", { className: "nexus-table__cell nexus-table__cell--actions", children: /* @__PURE__ */ e("div", { className: "nexus-table__actions", children: s.map((V) => {
              var X;
              const O = ((X = V.disabled) == null ? void 0 : X.call(V, k)) || !1;
              return /* @__PURE__ */ e(
                "button",
                {
                  className: `nexus-table__action ${V.destructive ? "nexus-table__action--destructive" : ""}`,
                  onClick: () => V.onClick(k, I),
                  disabled: O,
                  "aria-label": V.label,
                  title: V.label,
                  children: V.icon
                },
                V.key
              );
            }) }) })
          ]
        },
        L
      );
    }) })
  ] }) });
}, Fe = ({
  variant: t = "text-md",
  weight: n = "regular",
  color: s = "default",
  children: a,
  as: l = "p",
  className: r = "",
  align: o = "left",
  ...c
}) => {
  const u = l, p = [
    "nexus-typography",
    `nexus-typography--${t}`,
    `nexus-typography--${n}`,
    `nexus-typography--${s}`,
    `nexus-typography--${o}`,
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(u, { className: p, ...c, children: a });
}, Ht = ({
  level: t = 1,
  weight: n = "semibold",
  ...s
}) => {
  const a = {
    1: "display-2xl",
    2: "display-xl",
    3: "display-lg",
    4: "display-md",
    5: "display-sm",
    6: "display-xs"
  }, l = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6"
  };
  return /* @__PURE__ */ e(
    Fe,
    {
      variant: a[t],
      weight: n,
      as: l[t],
      ...s
    }
  );
}, jt = ({
  weight: t = "regular",
  color: n = "muted",
  ...s
}) => /* @__PURE__ */ e(
  Fe,
  {
    variant: "text-xs",
    weight: t,
    color: n,
    as: "span",
    ...s
  }
), Y1 = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "30px",
  "4xl": "36px"
}, q1 = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px"
}, Q1 = {
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  500: "500",
  600: "600",
  700: "700"
}, Ce = W.forwardRef(
  ({
    children: t,
    size: n = "md",
    fw: s,
    c: a,
    mb: l,
    component: r = "span",
    className: o = "",
    style: c,
    ...u
  }, p) => {
    const x = r, f = Y1[n] || n, m = s ? Q1[s] || s : void 0, v = a === "dimmed" ? "#6b7280" : a, C = l ? q1[l] || l : void 0, h = {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: f,
      fontWeight: m,
      color: v,
      marginBottom: C,
      margin: C ? `0 0 ${C} 0` : void 0,
      lineHeight: "1.5",
      ...c
    };
    return /* @__PURE__ */ e(
      x,
      {
        ref: p,
        className: `nexus-text ${o}`,
        style: h,
        ...u,
        children: t
      }
    );
  }
);
Ce.displayName = "Text";
const J1 = {
  xs: "24px",
  sm: "32px",
  md: "40px",
  lg: "48px",
  xl: "56px"
}, P1 = {
  xs: "2px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "50%"
}, et = {
  xs: "10px",
  sm: "12px",
  md: "14px",
  lg: "16px",
  xl: "18px"
}, tt = W.forwardRef(
  ({
    children: t,
    src: n,
    alt: s,
    size: a = "md",
    radius: l = "md",
    color: r = "#6b7280",
    className: o = "",
    style: c,
    onClick: u,
    ...p
  }, x) => {
    const f = typeof a == "number" ? `${a}px` : J1[a], m = typeof l == "number" ? `${l}px` : P1[l], v = typeof a == "number" ? `${a * 0.35}px` : et[a], C = {
      width: f,
      height: f,
      borderRadius: m,
      backgroundColor: n ? "transparent" : r,
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: v,
      fontWeight: "500",
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      overflow: "hidden",
      cursor: u ? "pointer" : "default",
      flexShrink: 0,
      ...c
    }, h = {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    };
    return /* @__PURE__ */ e(
      "div",
      {
        ref: x,
        className: `nexus-avatar ${o}`,
        style: C,
        onClick: u,
        ...p,
        children: n ? /* @__PURE__ */ e("img", { src: n, alt: s, style: h }) : t
      }
    );
  }
);
tt.displayName = "Avatar";
const nt = {
  activity: "M22 12H18L15 21L9 3L6 12H2",
  airplay: "M5 17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V15C22 15.5304 21.7893 16.0391 21.4142 16.4142C21.0391 16.7893 20.5304 17 20 17H19M12 15L17 21H7L12 15Z",
  "alert-circle": "M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",
  "alert-octagon": "M12 8V12M12 16H12.01M7.86 2H16.14L22 7.86V16.14L16.14 22H7.86L2 16.14V7.86L7.86 2Z",
  "alert-triangle": "M11.9998 7.99996V12M11.9998 16H12.0098M10.2898 2.85996L1.81978 17C1.64514 17.3024 1.55274 17.6453 1.55177 17.9945C1.55079 18.3437 1.64127 18.6871 1.8142 18.9905C1.98714 19.2939 2.2365 19.5467 2.53748 19.7238C2.83847 19.9009 3.18058 19.9961 3.52978 20H20.4698C20.819 19.9961 21.1611 19.9009 21.4621 19.7238C21.7631 19.5467 22.0124 19.2939 22.1854 18.9905C22.3583 18.6871 22.4488 18.3437 22.4478 17.9945C22.4468 17.6453 22.3544 17.3024 22.1798 17L13.7098 2.85996C13.5315 2.56607 13.2805 2.32308 12.981 2.15444C12.6814 1.98581 12.3435 1.89722 11.9998 1.89722C11.656 1.89722 11.3181 1.98581 11.0186 2.15444C10.7191 2.32308 10.468 2.56607 10.2898 2.85996Z",
  "align-center": "M18 10H6M21 6H3M21 14H3M18 18H6",
  "align-justify": "M21 10H3M21 6H3M21 14H3M21 18H3",
  "align-left": "M17 10H3M21 6H3M21 14H3M17 18H3",
  "align-right": "M21 10H7M21 6H3M21 14H3M21 18H7",
  anchor: "M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8ZM12 8V22M12 22C9.34784 22 6.8043 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12H5M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12H19",
  aperture: "M14.31 8L20.05 17.94M9.69 8H21.17M7.38 12L13.12 2.06M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12L10.88 21.94M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",
  archive: "M21 8V21H3V8M10 12H14M1 3H23V8H1V3Z",
  "arrow-down-circle": "M8 12L12 16M12 16L16 12M12 16V8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",
  "arrow-down-left": "M17 7L7 17M7 17H17M7 17V7",
  "arrow-down-right": "M7 7L17 17M17 17V7M17 17H7",
  "arrow-down": "M12 5V19M12 19L19 12M12 19L5 12",
  "arrow-left-circle": "M12 8L8 12M8 12L12 16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",
  "arrow-left": "M19 12H5M5 12L12 19M5 12L12 5",
  "arrow-right-circle": "M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",
  "arrow-right": "M5 12H19M19 12L12 5M19 12L12 19",
  "arrow-up-circle": "M16 12L12 8M12 8L8 12M12 8V16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",
  "arrow-up-left": "M17 17L7 7M7 7V17M7 7H17",
  "arrow-up-right": "M7 17L17 7M17 7H7M17 7V17",
  "arrow-up": "M12 19V5M12 5L5 12M12 5L19 12",
  "at-sign": "M16 7.99999V13C16 13.7956 16.3161 14.5587 16.8787 15.1213C17.4413 15.6839 18.2044 16 19 16C19.7957 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V12C21.9999 9.74302 21.2362 7.55247 19.8333 5.78452C18.4303 4.01658 16.4706 2.77521 14.2726 2.26229C12.0747 1.74936 9.76794 1.99503 7.72736 2.95936C5.68677 3.92368 4.03241 5.54995 3.03327 7.57371C2.03413 9.59748 1.74898 11.8997 2.22418 14.1061C2.69938 16.3125 3.90699 18.2932 5.65064 19.7263C7.39429 21.1593 9.57144 21.9603 11.8281 21.9991C14.0847 22.0379 16.2881 21.3122 18.08 19.94M16 12C16 14.2091 14.2092 16 12 16C9.79087 16 8.00001 14.2091 8.00001 12C8.00001 9.79085 9.79087 7.99999 12 7.99999C14.2092 7.99999 16 9.79085 16 12Z",
  award: "M8.21 13.89L7 23L12 20L17 23L15.79 13.88M19 8C19 11.866 15.866 15 12 15C8.13401 15 5 11.866 5 8C5 4.13401 8.13401 1 12 1C15.866 1 19 4.13401 19 8Z",
  "bar-chart-2": "M18 20V10M12 20V4M6 20V14",
  "bar-chart": "M12 20V10M18 20V4M6 20V16",
  "battery-charging": "M5 18H3C2.46957 18 1.96086 17.7893 1.58579 17.4142C1.21071 17.0391 1 16.5304 1 16V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H6.19M15 6H17C17.5304 6 18.0391 6.21071 18.4142 6.58579C18.7893 6.96086 19 7.46957 19 8V16C19 16.5304 18.7893 17.0391 18.4142 17.4142C18.0391 17.7893 17.5304 18 17 18H13.81M23 13V11M11 6L7 12H13L9 18",
  battery: "M23 13V11M3 6H17C18.1046 6 19 6.89543 19 8V16C19 17.1046 18.1046 18 17 18H3C1.89543 18 1 17.1046 1 16V8C1 6.89543 1.89543 6 3 6Z",
  "bell-off": [
    "M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21M18.63 13C18.1851 11.3714 17.973 9.68804 18 8C18.0016 6.91306 17.7079 5.84611 17.1503 4.91309C16.5927 3.98008 15.7922 3.21606 14.8341 2.70264C13.8761 2.18922 12.7966 1.94569 11.7109 1.99807C10.6252 2.05044 9.57417 2.39675 8.67 3M6.26 6.26C6.08627 6.82361 5.99861 7.41022 6 8C6 15 3 17 3 17H17M1 1L23 23"
  ],
  bell: "M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z",
  bluetooth: "M6.5 6.5L17.5 17.5L12 23V1L17.5 6.5L6.5 17.5",
  bold: "M6 12H14C15.0609 12 16.0783 11.5786 16.8284 10.8284C17.5786 10.0783 18 9.06087 18 8C18 6.93913 17.5786 5.92172 16.8284 5.17157C16.0783 4.42143 15.0609 4 14 4H6V12ZM6 12H15C16.0609 12 17.0783 12.4214 17.8284 13.1716C18.5786 13.9217 19 14.9391 19 16C19 17.0609 18.5786 18.0783 17.8284 18.8284C17.0783 19.5786 16.0609 20 15 20H6V12Z",
  "book-open": "M12 7C12 5.93913 11.5786 4.92172 10.8284 4.17157C10.0783 3.42143 9.06087 3 8 3H2V18H9C9.79565 18 10.5587 18.3161 11.1213 18.8787C11.6839 19.4413 12 20.2044 12 21M12 7V21M12 7C12 5.93913 12.4214 4.92172 13.1716 4.17157C13.9217 3.42143 14.9391 3 16 3H22V18H15C14.2044 18 13.4413 18.3161 12.8787 18.8787C12.3161 19.4413 12 20.2044 12 21",
  book: "M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20M4 19.5C4 20.163 4.26339 20.7989 4.73223 21.2678C5.20107 21.7366 5.83696 22 6.5 22H20V2H6.5C5.83696 2 5.20107 2.26339 4.73223 2.73223C4.26339 3.20107 4 3.83696 4 4.5V19.5Z",
  bookmark: "M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z",
  box: "M3.27 6.96002L12 12.01L20.73 6.96002M12 22.08V12M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z",
  briefcase: "M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21M4 7H20C21.1046 7 22 7.89543 22 9V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V9C2 7.89543 2.89543 7 4 7Z",
  calendar: "M16 2V6M8 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z",
  "camera-off": [
    "M1 1L23 23M9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V17.34M15.28 15.28C14.9481 15.765 14.5134 16.171 14.0068 16.469C13.5002 16.7669 12.9342 16.9496 12.3489 17.004C11.7637 17.0584 11.1737 16.9831 10.6209 16.7836C10.0681 16.5841 9.56601 16.2652 9.15042 15.8496C8.73483 15.434 8.41593 14.9319 8.2164 14.3791C8.01688 13.8263 7.94163 13.2363 7.99601 12.6511C8.05039 12.0658 8.23306 11.4998 8.53103 10.9932C8.829 10.4866 9.23495 10.0519 9.72 9.72M21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H6L21 21Z"
  ],
  camera: [
    "M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z",
    "M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z"
  ],
  cast: "M2 16.1C2.96089 16.296 3.84294 16.7702 4.53638 17.4636C5.22982 18.1571 5.70403 19.0391 5.9 20M2 12.05C4.03079 12.2759 5.92428 13.186 7.36911 14.6309C8.81395 16.0757 9.72414 17.9692 9.95 20M2 8V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H14M2 20H2.01",
  "check-circle": "M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999M22 3.99999L12 14.01L9.00001 11.01",
  "check-square": "M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16",
  check: "M20 6L9 17L4 12",
  "chevron-down": "M6 9L12 15L18 9",
  "chevron-left": "M15 18L9 12L15 6",
  "chevron-right": "M9 18L15 12L9 6",
  "chevron-up": "M18 15L12 9L6 15",
  "chevrons-down": "M7 13L12 18L17 13M7 6L12 11L17 6",
  "chevrons-left": "M11 17L6 12L11 7M18 17L13 12L18 7",
  "chevrons-right": "M13 17L18 12L13 7M6 17L11 12L6 7",
  "chevrons-up": "M17 11L12 6L7 11M17 18L12 13L7 18",
  chrome: "M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM12 8H21.17M3.95 6.06L8.54 14M10.88 21.94L15.46 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",
  circle: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
  clipboard: "M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8M9 2H15C15.5523 2 16 2.44772 16 3V5C16 5.55228 15.5523 6 15 6H9C8.44772 6 8 5.55228 8 5V3C8 2.44772 8.44772 2 9 2Z",
  clock: "M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",
  "cloud-drizzle": "M7.99997 19V21M7.99997 13V15M16 19V21M16 13V15M12 21V23M12 15V17M20 16.58C21.0512 16.1196 21.9121 15.3116 22.4381 14.2916C22.964 13.2715 23.1231 12.1016 22.8886 10.9782C22.654 9.85478 22.0402 8.84623 21.15 8.12185C20.2599 7.39748 19.1476 7.00137 18 7.00002H16.74C16.423 5.77254 15.8188 4.63797 14.9773 3.68982C14.1357 2.74167 13.0809 2.00709 11.8997 1.54664C10.7186 1.08619 9.44488 0.913035 8.18365 1.04146C6.92243 1.16989 5.70978 1.59622 4.64567 2.2853C3.58155 2.97439 2.69644 3.9065 2.06328 5.00482C1.43012 6.10313 1.06704 7.33619 1.00398 8.60237C0.940923 9.86855 1.17968 11.1316 1.70058 12.2874C2.22147 13.4432 3.00959 14.4586 3.99997 15.25",
  "cloud-lightning": "M19 16.9C20.2151 16.6532 21.2953 15.9638 22.0307 14.9655C22.7661 13.9671 23.1043 12.7312 22.9797 11.4975C22.8551 10.2638 22.2765 9.12046 21.3563 8.28937C20.4361 7.45828 19.2399 6.99875 18 6.99999H16.74C16.4087 5.71731 15.764 4.53698 14.8639 3.56498C13.9638 2.59298 12.8363 1.85972 11.5828 1.43106C10.3293 1.00239 8.98897 0.891726 7.68213 1.109C6.37529 1.32628 5.14287 1.86469 4.0955 2.6759C3.04814 3.48711 2.21862 4.54573 1.68143 5.75671C1.14424 6.96768 0.916185 8.29311 1.01775 9.61399C1.11931 10.9349 1.54731 12.2098 2.26332 13.3245C2.97932 14.4391 3.96093 15.3584 5.12 16M13 11L9 17H15L11 23",
  "cloud-off": "M22.61 16.95C22.9322 16.1893 23.0609 15.3606 22.9845 14.5381C22.9082 13.7155 22.6293 12.9246 22.1726 12.2362C21.716 11.5478 21.0959 10.9832 20.3677 10.593C19.6396 10.2027 18.8261 9.99902 18 10H16.74C16.3318 8.39249 15.4341 6.95158 14.171 5.87666C12.908 4.80173 11.3421 4.14593 9.69 4M5 5C3.43808 5.86364 2.20981 7.22478 1.51059 8.86691C0.811366 10.509 0.681351 12.3378 1.14123 14.0623C1.6011 15.7869 2.62445 17.3081 4.04848 18.384C5.47251 19.4599 7.21544 20.0288 9 20H18C18.5798 19.9993 19.155 19.8978 19.7 19.7M0.999999 1L23 23",
  "cloud-rain": "M16 13V21M8 13V21M12 15V23M20 16.58C21.0512 16.1195 21.9121 15.3115 22.4381 14.2915C22.9641 13.2715 23.1231 12.1016 22.8886 10.9781C22.6541 9.85472 22.0402 8.84617 21.15 8.12179C20.2599 7.39742 19.1476 7.00131 18 6.99996H16.74C16.423 5.77248 15.8189 4.63791 14.9773 3.68976C14.1358 2.74161 13.0809 2.00703 11.8998 1.54658C10.7186 1.08612 9.44491 0.912974 8.18368 1.0414C6.92246 1.16983 5.70981 1.59615 4.6457 2.28524C3.58158 2.97433 2.69647 3.90644 2.06331 5.00475C1.43015 6.10307 1.06708 7.33613 1.00401 8.60231C0.940954 9.86849 1.17971 11.1315 1.70061 12.2873C2.2215 13.4431 3.00962 14.4585 4 15.25",
  "cloud-snow": "M20 17.58C21.0512 17.1195 21.9121 16.3115 22.4381 15.2915C22.9641 14.2715 23.1231 13.1016 22.8886 11.9781C22.6541 10.8547 22.0402 9.84617 21.15 9.12179C20.2599 8.39742 19.1476 8.00131 18 7.99996H16.74C16.423 6.77248 15.8189 5.63791 14.9773 4.68976C14.1358 3.74161 13.0809 3.00703 11.8998 2.54658C10.7186 2.08612 9.44491 1.91297 8.18368 2.0414C6.92246 2.16983 5.70981 2.59615 4.6457 3.28524C3.58158 3.97433 2.69647 4.90644 2.06331 6.00475C1.43015 7.10307 1.06708 8.33613 1.00401 9.60231C0.940954 10.8685 1.17971 12.1315 1.70061 13.2873C2.2215 14.4431 3.00962 15.4585 4 16.25M8 16H8.01M8 20H8.01M12 18H12.01M12 22H12.01M16 16H16.01M16 20H16.01",
  cloud: "M18 10H16.74C16.3659 8.551 15.5928 7.23599 14.5086 6.2044C13.4245 5.1728 12.0727 4.46599 10.6069 4.16428C9.14112 3.86256 7.62008 3.97804 6.21664 4.49759C4.8132 5.01714 3.58363 5.91993 2.66764 7.10338C1.75165 8.28683 1.18598 9.70348 1.0349 11.1924C0.883813 12.6812 1.15338 14.1826 1.81296 15.526C2.47255 16.8693 3.4957 18.0007 4.76617 18.7916C6.03663 19.5824 7.50347 20.0011 8.99999 20H18C19.3261 20 20.5978 19.4732 21.5355 18.5355C22.4732 17.5979 23 16.3261 23 15C23 13.6739 22.4732 12.4021 21.5355 11.4645C20.5978 10.5268 19.3261 10 18 10Z",
  code: "M16 18L22 12L16 6M8 6L2 12L8 18",
  codepen: "M12 2L22 8.5M12 2L2 8.5M12 2V8.5M22 8.5V15.5M22 8.5L12 15.5M22 15.5L12 22M22 15.5L12 8.5M12 22L2 15.5M12 22V15.5M2 15.5V8.5M2 15.5L12 8.5M2 8.5L12 15.5",
  codesandbox: "M7.5 4.21002L12 6.81002L16.5 4.21002M7.5 19.79V14.6L3 12M21 12L16.5 14.6V19.79M3.27 6.96002L12 12.01L20.73 6.96002M12 22.08V12M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z",
  coffee: "M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18M18 8H2V17C2 18.0609 2.42143 19.0783 3.17157 19.8284C3.92172 20.5786 4.93913 21 6 21H14C15.0609 21 16.0783 20.5786 16.8284 19.8284C17.5786 19.0783 18 18.0609 18 17V8ZM6 1V4M10 1V4M14 1V4",
  columns: "M12 3V21M12 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H12V3ZM12 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H12V3Z",
  command: "M18 3C17.2044 3 16.4413 3.31607 15.8787 3.87868C15.3161 4.44129 15 5.20435 15 6V18C15 18.7956 15.3161 19.5587 15.8787 20.1213C16.4413 20.6839 17.2044 21 18 21C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 17.2044 20.6839 16.4413 20.1213 15.8787C19.5587 15.3161 18.7956 15 18 15H6C5.20435 15 4.44129 15.3161 3.87868 15.8787C3.31607 16.4413 3 17.2044 3 18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21C6.79565 21 7.55871 20.6839 8.12132 20.1213C8.68393 19.5587 9 18.7956 9 18V6C9 5.20435 8.68393 4.44129 8.12132 3.87868C7.55871 3.31607 6.79565 3 6 3C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6C3 6.79565 3.31607 7.55871 3.87868 8.12132C4.44129 8.68393 5.20435 9 6 9H18C18.7956 9 19.5587 8.68393 20.1213 8.12132C20.6839 7.55871 21 6.79565 21 6C21 5.20435 20.6839 4.44129 20.1213 3.87868C19.5587 3.31607 18.7956 3 18 3Z",
  compass: [
    "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
    "M16.24 7.76L14.12 14.12L7.76 16.24L9.88 9.88L16.24 7.76Z"
  ],
  copy: "M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5M11 9H20C21.1046 9 22 9.89543 22 11V20C22 21.1046 21.1046 22 20 22H11C9.89543 22 9 21.1046 9 20V11C9 9.89543 9.89543 9 11 9Z",
  // Continue with more icons...
  x: "M18 6L6 18M6 6L18 18",
  youtube: [
    "M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12001 4 3.40001 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.5788 5.98541 1.46001 6.46C1.14522 8.20556 0.991243 9.97631 1.00001 11.75C0.988786 13.537 1.14277 15.3213 1.46001 17.08C1.59097 17.5398 1.83831 17.9581 2.17815 18.2945C2.51799 18.6308 2.93883 18.8738 3.40001 19C5.12001 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8572 8.1787 22.54 6.42Z",
    "M9.75001 15.02L15.5 11.75L9.75001 8.48V15.02Z"
  ],
  "zap-off": "M12.41 6.75L13 2L10.57 4.92M18.57 12.91L21 10H15.66M8 8L3 14H12L11 22L16 16M1 1L23 23",
  zap: "M13 2L3 14H12L11 22L21 10H12L13 2Z",
  "zoom-in": "M21 21L16.65 16.65M11 8V14M8 11H14M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",
  "zoom-out": "M21 21L16.65 16.65M8 11H14M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",
  "2-layers": "M2 14.5L12 19.5L22 14.5M12 4.5L2 9.5L12 14.5L22 9.5L12 4.5Z",
  "3-layers": "M2 17L12 22L22 17M2 12L12 17L22 12M12 2L2 7L12 12L22 7L12 2Z",
  "filters-lines": "M6 12H18M3 6H21M9 18H15",
  coins: "M9.42202 4.15802C12.2986 1.2801 16.964 1.28122 19.8417 4.15802C22.7194 7.03483 22.7194 11.7006 19.8417 14.5785M16.7374 14.6308C16.7374 18.7007 13.4383 22 9.36868 22C5.29907 22 2 18.7007 2 14.6308C2 10.5608 5.29907 7.26151 9.36868 7.26151C13.4383 7.26151 16.7374 10.5608 16.7374 14.6308Z",
  "coin-stack": "M14.1755 4.22225C14.1766 2.99445 11.6731 2 8.58832 2C5.50357 2 3.00224 2.99557 3 4.22225M3 4.22225C3 5.45004 5.50133 6.44449 8.58832 6.44449C11.6753 6.44449 14.1766 5.45004 14.1766 4.22225L14.1766 12.8445M3 4.22225V17.5556C3.00112 18.7834 5.50245 19.7779 8.58832 19.7779C10.0849 19.7779 11.4361 19.5412 12.4387 19.1601M3.00112 8.66672C3.00112 9.89451 5.50245 10.889 8.58944 10.889C11.6764 10.889 14.1778 9.89451 14.1778 8.66672M12.5057 14.6946C11.4976 15.0891 10.115 15.3335 8.58832 15.3335C5.50245 15.3335 3.00112 14.3391 3.00112 13.1113M20.5272 13.4646C22.4909 15.4169 22.4909 18.5836 20.5272 20.5358C18.5635 22.4881 15.3781 22.4881 13.4144 20.5358C11.4507 18.5836 11.4507 15.4169 13.4144 13.4646C15.3781 11.5124 18.5635 11.5124 20.5272 13.4646Z",
  rocket: "M13.3248 10.6752L5.44059 18.5594M6.29145 12.8375L2.42965 11.9253C2.00478 11.825 1.85535 11.2975 2.16313 10.9886L5.23428 7.91744C5.44059 7.71113 5.72049 7.59292 6.01378 7.59069L9.47635 7.56059M13.8377 3.59842C16.4149 5.35591 18.6441 7.58512 20.4016 10.1623M11.1614 17.7085L12.0736 21.5703C12.1739 21.9952 12.7014 22.1447 13.0103 21.8369L16.0814 18.7657C16.2878 18.5594 16.406 18.2795 16.4082 17.9862L16.4383 14.5236M21.0629 8.35012L21.9639 4.01438C22.2093 2.83454 21.1655 1.79075 19.9856 2.03608L15.6499 2.93713C14.373 3.20254 13.2021 3.83483 12.281 4.75707L8.72362 8.31332C7.36647 9.67047 6.48326 11.4302 6.20447 13.3293L6.19221 13.4107C6.01601 14.6229 6.42193 15.8462 7.28729 16.7127C8.15266 17.5781 9.3771 17.984 10.5893 17.8067L10.6707 17.7944C12.5698 17.5167 14.3295 16.6324 15.6867 15.2753L19.2429 11.719C20.1652 10.7979 20.7975 9.62698 21.0629 8.35012Z",
  "menu-2": "M3 12H17M3 6H21M3 18H21"
  // Add more icons as needed
}, be = W.memo(W.forwardRef(({
  name: t,
  size: n = "medium",
  color: s = "#181D27",
  className: a = "",
  strokeWidth: l = 2,
  "aria-label": r,
  ...o
}, c) => {
  const p = typeof n == "number" ? n : {
    small: 16,
    medium: 24,
    large: 32
  }[n], x = {
    width: p,
    height: p,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: `nexus-icon nexus-icon--${t} ${a}`.trim(),
    "aria-label": r || t.replace(/-/g, " "),
    ref: c,
    ...o
  }, f = {
    stroke: s,
    strokeWidth: l,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, m = nt[t];
  return m ? /* @__PURE__ */ e("svg", { ...x, children: Array.isArray(m) ? m.map((C, h) => /* @__PURE__ */ e("path", { d: C, ...f }, h)) : /* @__PURE__ */ e("path", { d: m, ...f }) }) : (console.warn(`Icon "${t}" not found`), null);
}));
be.displayName = "Icons";
const st = W.forwardRef(
  ({
    children: t,
    direction: n = "row",
    justify: s = "flex-start",
    align: a = "stretch",
    wrap: l = "nowrap",
    gap: r = 0,
    className: o = "",
    style: c,
    "data-testid": u,
    ...p
  }, x) => {
    const f = {
      display: "flex",
      flexDirection: n,
      justifyContent: s,
      alignItems: a,
      flexWrap: l,
      gap: typeof r == "number" ? `${r}px` : r,
      ...c
    };
    return /* @__PURE__ */ e(
      "div",
      {
        ref: x,
        className: `flex ${o}`,
        style: f,
        "data-testid": u,
        ...p,
        children: t
      }
    );
  }
);
st.displayName = "Flex";
const ie = W.forwardRef(
  ({
    children: t,
    justify: n = "flex-start",
    align: s = "center",
    gap: a = "16px",
    wrap: l = !1,
    className: r = "",
    style: o,
    "data-testid": c,
    ...u
  }, p) => {
    const x = {
      display: "flex",
      flexDirection: "row",
      justifyContent: n,
      alignItems: s,
      flexWrap: l ? "wrap" : "nowrap",
      gap: typeof a == "number" ? `${a}px` : a,
      ...o
    };
    return /* @__PURE__ */ e(
      "div",
      {
        ref: p,
        className: `group ${r}`,
        style: x,
        "data-testid": c,
        ...u,
        children: t
      }
    );
  }
);
ie.displayName = "Group";
const me = W.forwardRef(
  ({
    children: t,
    align: n = "stretch",
    justify: s = "flex-start",
    gap: a = "16px",
    className: l = "",
    style: r,
    "data-testid": o,
    ...c
  }, u) => {
    const p = {
      display: "flex",
      flexDirection: "column",
      alignItems: n,
      justifyContent: s,
      gap: typeof a == "number" ? `${a}px` : a,
      ...r
    };
    return /* @__PURE__ */ e(
      "div",
      {
        ref: u,
        className: `stack ${l}`,
        style: p,
        "data-testid": o,
        ...c,
        children: t
      }
    );
  }
);
me.displayName = "Stack";
const Bt = ({
  brand: t,
  items: n = [],
  rightSection: s,
  userMenu: a,
  height: l = 60,
  backgroundColor: r = "#ffffff",
  withBurger: o = !1,
  opened: c = !1,
  onToggle: u,
  className: p = "",
  style: x
}) => {
  const [f, m] = J(!1), [v, C] = J(c);
  W.useEffect(() => {
    C(c);
  }, [c]);
  const h = () => {
    C(!v), u == null || u();
  };
  return /* @__PURE__ */ i(te, { children: [
    /* @__PURE__ */ e(
      "nav",
      {
        className: `navigation ${p}`,
        style: {
          height: `${l}px`,
          backgroundColor: r,
          borderBottom: "1px solid #e5e7eb",
          position: "relative",
          ...x
        },
        children: /* @__PURE__ */ i("div", { style: {
          height: "100%",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ i(ie, { gap: "32px", children: [
            o && /* @__PURE__ */ i(
              "button",
              {
                className: "burger-button",
                onClick: h,
                style: {
                  display: "none",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  width: "24px",
                  height: "24px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0
                },
                children: [
                  /* @__PURE__ */ e("span", { style: {
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#374151",
                    borderRadius: "10px",
                    transform: v ? "rotate(45deg) translate(5px, 5px)" : "none",
                    transition: "transform 0.3s"
                  } }),
                  /* @__PURE__ */ e("span", { style: {
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#374151",
                    borderRadius: "10px",
                    opacity: v ? 0 : 1,
                    transition: "opacity 0.3s"
                  } }),
                  /* @__PURE__ */ e("span", { style: {
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#374151",
                    borderRadius: "10px",
                    transform: v ? "rotate(-45deg) translate(5px, -6px)" : "none",
                    transition: "transform 0.3s"
                  } })
                ]
              }
            ),
            t && /* @__PURE__ */ e("div", { className: "navigation-brand", children: t }),
            /* @__PURE__ */ e("div", { className: "navigation-items desktop-only", style: { display: "flex", gap: "4px" }, children: n.map((d, w) => /* @__PURE__ */ i(
              "button",
              {
                className: `navigation-item ${d.active ? "active" : ""}`,
                onClick: d.onClick,
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  backgroundColor: d.active ? "#f3f4f6" : "transparent",
                  border: "none",
                  borderRadius: "6px",
                  color: d.active ? "#0a0e1b" : "#6b7280",
                  fontSize: "14px",
                  fontWeight: d.active ? "500" : "400",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  fontFamily: "Inter, sans-serif"
                },
                onMouseEnter: (g) => {
                  d.active || (g.currentTarget.style.backgroundColor = "#f9fafb", g.currentTarget.style.color = "#374151");
                },
                onMouseLeave: (g) => {
                  d.active || (g.currentTarget.style.backgroundColor = "transparent", g.currentTarget.style.color = "#6b7280");
                },
                children: [
                  d.icon && /* @__PURE__ */ e("span", { children: d.icon }),
                  /* @__PURE__ */ e("span", { children: d.label }),
                  d.badge && /* @__PURE__ */ e(
                    oe,
                    {
                      variant: "filled",
                      size: "sm",
                      style: { marginLeft: "4px" },
                      children: d.badge
                    }
                  )
                ]
              },
              w
            )) })
          ] }),
          /* @__PURE__ */ i("div", { className: "navigation-right", children: [
            s,
            a && /* @__PURE__ */ i("div", { style: { position: "relative" }, children: [
              /* @__PURE__ */ i(
                "button",
                {
                  className: "user-menu-trigger",
                  onClick: () => m(!f),
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "6px 12px",
                    backgroundColor: "transparent",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  },
                  onMouseEnter: (d) => {
                    d.currentTarget.style.backgroundColor = "#f9fafb";
                  },
                  onMouseLeave: (d) => {
                    d.currentTarget.style.backgroundColor = "transparent";
                  },
                  children: [
                    a.avatar ? /* @__PURE__ */ e(
                      "img",
                      {
                        src: a.avatar,
                        alt: a.name,
                        style: {
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          objectFit: "cover"
                        }
                      }
                    ) : /* @__PURE__ */ e("div", { style: {
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "#e5e7eb",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#6b7280"
                    }, children: a.name.charAt(0).toUpperCase() }),
                    /* @__PURE__ */ i("div", { style: { textAlign: "left" }, children: [
                      /* @__PURE__ */ e("div", { style: { fontSize: "14px", fontWeight: "500", color: "#374151", fontFamily: "Inter, sans-serif" }, children: a.name }),
                      /* @__PURE__ */ e("div", { style: { fontSize: "12px", color: "#6b7280", fontFamily: "Inter, sans-serif" }, children: a.email })
                    ] }),
                    /* @__PURE__ */ e(
                      "svg",
                      {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        style: {
                          transform: f ? "rotate(180deg)" : "rotate(0)",
                          transition: "transform 0.2s"
                        },
                        children: /* @__PURE__ */ e(
                          "path",
                          {
                            d: "M4 6L8 10L12 6",
                            stroke: "#6b7280",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          }
                        )
                      }
                    )
                  ]
                }
              ),
              f && /* @__PURE__ */ i(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    right: 0,
                    minWidth: "200px",
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    zIndex: 1e3,
                    overflow: "hidden"
                  },
                  children: [
                    a.onProfile && /* @__PURE__ */ e(
                      "button",
                      {
                        onClick: () => {
                          var d;
                          (d = a.onProfile) == null || d.call(a), m(!1);
                        },
                        style: {
                          width: "100%",
                          padding: "10px 16px",
                          backgroundColor: "transparent",
                          border: "none",
                          textAlign: "left",
                          fontSize: "14px",
                          color: "#374151",
                          cursor: "pointer",
                          fontFamily: "Inter, sans-serif"
                        },
                        onMouseEnter: (d) => {
                          d.currentTarget.style.backgroundColor = "#f9fafb";
                        },
                        onMouseLeave: (d) => {
                          d.currentTarget.style.backgroundColor = "transparent";
                        },
                        children: "Profile"
                      }
                    ),
                    a.onSettings && /* @__PURE__ */ e(
                      "button",
                      {
                        onClick: () => {
                          var d;
                          (d = a.onSettings) == null || d.call(a), m(!1);
                        },
                        style: {
                          width: "100%",
                          padding: "10px 16px",
                          backgroundColor: "transparent",
                          border: "none",
                          textAlign: "left",
                          fontSize: "14px",
                          color: "#374151",
                          cursor: "pointer",
                          fontFamily: "Inter, sans-serif"
                        },
                        onMouseEnter: (d) => {
                          d.currentTarget.style.backgroundColor = "#f9fafb";
                        },
                        onMouseLeave: (d) => {
                          d.currentTarget.style.backgroundColor = "transparent";
                        },
                        children: "Settings"
                      }
                    ),
                    (a.onProfile || a.onSettings) && a.onLogout && /* @__PURE__ */ e("div", { style: { height: "1px", backgroundColor: "#e5e7eb", margin: "4px 0" } }),
                    a.onLogout && /* @__PURE__ */ e(
                      "button",
                      {
                        onClick: () => {
                          var d;
                          (d = a.onLogout) == null || d.call(a), m(!1);
                        },
                        style: {
                          width: "100%",
                          padding: "10px 16px",
                          backgroundColor: "transparent",
                          border: "none",
                          textAlign: "left",
                          fontSize: "14px",
                          color: "#ef4444",
                          cursor: "pointer",
                          fontFamily: "Inter, sans-serif"
                        },
                        onMouseEnter: (d) => {
                          d.currentTarget.style.backgroundColor = "#fef2f2";
                        },
                        onMouseLeave: (d) => {
                          d.currentTarget.style.backgroundColor = "transparent";
                        },
                        children: "Logout"
                      }
                    )
                  ]
                }
              )
            ] })
          ] })
        ] })
      }
    ),
    o && v && /* @__PURE__ */ e(
      "div",
      {
        className: "mobile-menu",
        style: {
          position: "fixed",
          top: `${l}px`,
          left: 0,
          right: 0,
          backgroundColor: "white",
          borderBottom: "1px solid #e5e7eb",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          zIndex: 999,
          padding: "8px"
        },
        children: n.map((d, w) => /* @__PURE__ */ i(
          "button",
          {
            className: `mobile-menu-item ${d.active ? "active" : ""}`,
            onClick: () => {
              var g;
              (g = d.onClick) == null || g.call(d), h();
            },
            style: {
              display: "flex",
              alignItems: "center",
              gap: "12px",
              width: "100%",
              padding: "12px 16px",
              backgroundColor: d.active ? "#f3f4f6" : "transparent",
              border: "none",
              borderRadius: "6px",
              color: d.active ? "#0a0e1b" : "#6b7280",
              fontSize: "14px",
              fontWeight: d.active ? "500" : "400",
              cursor: "pointer",
              transition: "all 0.2s",
              textAlign: "left",
              fontFamily: "Inter, sans-serif"
            },
            children: [
              d.icon && /* @__PURE__ */ e("span", { children: d.icon }),
              /* @__PURE__ */ e("span", { children: d.label }),
              d.badge && /* @__PURE__ */ e(
                oe,
                {
                  variant: "filled",
                  size: "sm",
                  style: { marginLeft: "auto" },
                  children: d.badge
                }
              )
            ]
          },
          w
        ))
      }
    ),
    /* @__PURE__ */ e("style", { children: `
        @media (max-width: 768px) {
          .burger-button {
            display: flex !important;
          }
          .desktop-only {
            display: none !important;
          }
        }
      ` })
  ] });
}, Rt = ({
  children: t,
  header: n,
  title: s,
  subtitle: a,
  footer: l,
  image: r,
  badge: o,
  actions: c = [],
  variant: u = "default",
  size: p = "md",
  interactive: x = !1,
  onClick: f,
  className: m,
  padding: v = "md",
  radius: C = "md",
  style: h,
  withDividers: d = !1,
  withBorder: w = !0,
  loading: g = !1,
  ..._
}) => {
  const M = n || s || a || o || c.length > 0, b = [
    "nexus-card",
    `nexus-card--${u}`,
    `nexus-card--${p}`,
    `nexus-card--radius-${C}`,
    x || f ? "nexus-card--interactive" : "",
    w ? "nexus-card--with-border" : "",
    g ? "nexus-card--loading" : "",
    m || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i(
    "div",
    {
      className: b,
      style: h,
      onClick: f,
      role: f ? "button" : void 0,
      tabIndex: f ? 0 : void 0,
      onKeyDown: f ? (y) => {
        (y.key === "Enter" || y.key === " ") && (y.preventDefault(), f());
      } : void 0,
      ..._,
      children: [
        r && /* @__PURE__ */ e("div", { className: "nexus-card__image", children: typeof r == "string" ? /* @__PURE__ */ e("img", { src: r, alt: "" }) : r }),
        M && /* @__PURE__ */ i(te, { children: [
          /* @__PURE__ */ e("div", { className: `nexus-card__header nexus-card__section--${v}`, children: n || /* @__PURE__ */ i(ie, { justify: "space-between", align: "flex-start", children: [
            /* @__PURE__ */ i("div", { className: "nexus-card__header-content", children: [
              /* @__PURE__ */ i(ie, { gap: "sm", align: "center", wrap: "wrap", children: [
                s && /* @__PURE__ */ e(Ce, { className: "nexus-card__title", weight: "semibold", size: p === "sm" ? "md" : p === "lg" ? "lg" : "md", children: s }),
                o && /* @__PURE__ */ e(
                  oe,
                  {
                    variant: o.variant || "secondary",
                    size: "sm",
                    className: "nexus-card__badge",
                    children: o.label
                  }
                )
              ] }),
              a && /* @__PURE__ */ e(Ce, { className: "nexus-card__subtitle", size: "sm", color: "secondary", children: a })
            ] }),
            c.length > 0 && /* @__PURE__ */ e(ie, { gap: "xs", children: c.map((y, N) => /* @__PURE__ */ e(
              Be,
              {
                variant: y.variant || "ghost",
                size: "sm",
                onClick: y.onClick,
                disabled: y.disabled,
                className: "nexus-card__action",
                "aria-label": y.label,
                children: y.icon || /* @__PURE__ */ e(be, { name: "more-horizontal", size: "small" })
              },
              N
            )) })
          ] }) }),
          d && /* @__PURE__ */ e("div", { className: "nexus-card__divider" })
        ] }),
        /* @__PURE__ */ e("div", { className: `nexus-card__content nexus-card__section--${v}`, children: t }),
        l && /* @__PURE__ */ i(te, { children: [
          d && /* @__PURE__ */ e("div", { className: "nexus-card__divider" }),
          /* @__PURE__ */ e("div", { className: `nexus-card__footer nexus-card__section--${v}`, children: l })
        ] }),
        g && /* @__PURE__ */ e("div", { className: "nexus-card__loading-overlay", children: /* @__PURE__ */ e(be, { name: "loader", size: "medium", className: "nexus-card__loading-spinner" }) })
      ]
    }
  );
}, at = {
  xs: "576px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
  xl: "1400px"
}, ue = W.forwardRef(
  ({ children: t, size: n = "md", className: s = "", style: a, "data-testid": l, ...r }, o) => {
    const u = {
      width: "100%",
      maxWidth: typeof n == "number" ? `${n}px` : at[n],
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "16px",
      paddingRight: "16px",
      ...a
    };
    return /* @__PURE__ */ e(
      "div",
      {
        ref: o,
        className: `container ${s}`,
        style: u,
        "data-testid": l,
        ...r,
        children: t
      }
    );
  }
);
ue.displayName = "Container";
const rt = ({
  title: t,
  subtitle: n,
  breadcrumbs: s,
  actions: a,
  className: l = ""
}) => /* @__PURE__ */ e(
  "div",
  {
    className: `page-header ${l}`,
    style: {
      padding: "24px 0",
      backgroundColor: "white",
      borderBottom: "1px solid #e5e7eb"
    },
    children: /* @__PURE__ */ e(ue, { size: "xl", children: /* @__PURE__ */ i(me, { gap: "16px", children: [
      s && s.length > 0 && /* @__PURE__ */ e("nav", { "aria-label": "Breadcrumb", children: /* @__PURE__ */ e(
        "ol",
        {
          style: {
            display: "flex",
            gap: "8px",
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontSize: "14px",
            fontFamily: "Inter, sans-serif"
          },
          children: s.map((r, o) => /* @__PURE__ */ i("li", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
            o > 0 && /* @__PURE__ */ e("span", { style: { color: "#9ca3af" }, children: "/" }),
            r.href || r.onClick ? /* @__PURE__ */ e(
              "a",
              {
                href: r.href,
                onClick: r.onClick,
                style: {
                  color: "#6b7280",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "color 0.2s"
                },
                onMouseEnter: (c) => {
                  c.currentTarget.style.color = "#374151";
                },
                onMouseLeave: (c) => {
                  c.currentTarget.style.color = "#6b7280";
                },
                children: r.label
              }
            ) : /* @__PURE__ */ e("span", { style: { color: "#374151", fontWeight: "500" }, children: r.label })
          ] }, o))
        }
      ) }),
      /* @__PURE__ */ i(ie, { justify: "space-between", align: "flex-start", children: [
        /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ e(
            "h1",
            {
              style: {
                margin: 0,
                fontSize: "32px",
                fontWeight: "700",
                color: "#111827",
                fontFamily: "Inter, sans-serif"
              },
              children: t
            }
          ),
          n && /* @__PURE__ */ e(
            "p",
            {
              style: {
                margin: "8px 0 0 0",
                fontSize: "16px",
                color: "#6b7280",
                fontFamily: "Inter, sans-serif"
              },
              children: n
            }
          )
        ] }),
        a && /* @__PURE__ */ e("div", { children: a })
      ] })
    ] }) })
  }
), Wt = ({
  children: t,
  size: n = "xl",
  className: s = "",
  style: a
}) => /* @__PURE__ */ e(ue, { size: n, className: `page-container ${s}`, style: a, children: t }), At = ({
  children: t,
  className: n = "",
  style: s
}) => /* @__PURE__ */ e(
  "div",
  {
    className: `page-content ${n}`,
    style: {
      padding: "32px 0",
      ...s
    },
    children: t
  }
), zt = ({
  children: t,
  header: n,
  navbar: s,
  aside: a,
  footer: l,
  containerSize: r = "xl",
  backgroundColor: o = "#f9fafb",
  className: c = "",
  style: u
}) => /* @__PURE__ */ i(
  "div",
  {
    className: `page-layout ${c}`,
    style: {
      minHeight: "100vh",
      backgroundColor: o,
      display: "flex",
      flexDirection: "column",
      ...u
    },
    children: [
      s && /* @__PURE__ */ e("div", { className: "page-layout-navbar", children: s }),
      n && /* @__PURE__ */ e(rt, { ...n }),
      /* @__PURE__ */ i(
        "div",
        {
          className: "page-layout-body",
          style: {
            flex: 1,
            display: "flex"
          },
          children: [
            a && /* @__PURE__ */ e("aside", { className: "page-layout-aside", children: a }),
            /* @__PURE__ */ e(
              "main",
              {
                className: "page-layout-main",
                style: {
                  flex: 1,
                  padding: "32px 0"
                },
                children: /* @__PURE__ */ e(ue, { size: r, children: t })
              }
            )
          ]
        }
      ),
      l && /* @__PURE__ */ e(
        "footer",
        {
          className: "page-layout-footer",
          style: {
            backgroundColor: "white",
            borderTop: "1px solid #e5e7eb",
            padding: "24px 0"
          },
          children: /* @__PURE__ */ e(ue, { size: r, children: l })
        }
      )
    ]
  }
), lt = ({
  sections: t,
  items: n,
  user: s,
  header: a,
  footer: l,
  width: r = 260,
  backgroundColor: o = "#ffffff",
  borderColor: c = "#e5e7eb",
  className: u = "",
  style: p
}) => {
  const [x, f] = J(/* @__PURE__ */ new Set()), m = (h) => {
    const d = new Set(x);
    d.has(h) ? d.delete(h) : d.add(h), f(d);
  }, v = (h, d = 0) => {
    const w = h.children && h.children.length > 0, g = x.has(h.label);
    return /* @__PURE__ */ i("div", { children: [
      /* @__PURE__ */ i(
        "button",
        {
          className: `sidebar-item ${h.active ? "active" : ""} ${h.disabled ? "disabled" : ""}`,
          onClick: () => {
            var _;
            w ? m(h.label) : h.disabled || (_ = h.onClick) == null || _.call(h);
          },
          disabled: h.disabled,
          style: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: `8px ${16 + d * 16}px`,
            backgroundColor: h.active ? "#f3f4f6" : "transparent",
            border: "none",
            borderRadius: "6px",
            color: h.disabled ? "#9ca3af" : h.active ? "#0a0e1b" : "#6b7280",
            fontSize: "14px",
            fontWeight: h.active ? "500" : "400",
            cursor: h.disabled ? "not-allowed" : "pointer",
            transition: "all 0.2s",
            textAlign: "left",
            fontFamily: "Inter, sans-serif"
          },
          onMouseEnter: (_) => {
            !h.active && !h.disabled && (_.currentTarget.style.backgroundColor = "#f9fafb", _.currentTarget.style.color = "#374151");
          },
          onMouseLeave: (_) => {
            !h.active && !h.disabled && (_.currentTarget.style.backgroundColor = "transparent", _.currentTarget.style.color = "#6b7280");
          },
          children: [
            h.icon && /* @__PURE__ */ e("span", { style: { display: "flex", alignItems: "center" }, children: h.icon }),
            /* @__PURE__ */ e("span", { style: { flex: 1 }, children: h.label }),
            h.badge && /* @__PURE__ */ e(
              oe,
              {
                variant: "filled",
                size: "sm",
                children: h.badge
              }
            ),
            w && /* @__PURE__ */ e(
              "svg",
              {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                style: {
                  transform: g ? "rotate(90deg)" : "rotate(0)",
                  transition: "transform 0.2s"
                },
                children: /* @__PURE__ */ e(
                  "path",
                  {
                    d: "M6 4L10 8L6 12",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }
                )
              }
            )
          ]
        }
      ),
      w && g && /* @__PURE__ */ e("div", { style: { marginTop: "4px" }, children: h.children.map((_) => v(_, d + 1)) })
    ] }, h.label);
  }, C = (h, d) => /* @__PURE__ */ i("div", { style: { marginBottom: "24px" }, children: [
    h.label && /* @__PURE__ */ e(
      "div",
      {
        style: {
          padding: "8px 16px",
          fontSize: "12px",
          fontWeight: "600",
          color: "#9ca3af",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          fontFamily: "Inter, sans-serif"
        },
        children: h.label
      }
    ),
    /* @__PURE__ */ e(me, { gap: "4px", children: h.items.map((w) => v(w)) })
  ] }, d);
  return /* @__PURE__ */ i(
    "aside",
    {
      className: `sidebar ${u}`,
      style: {
        width: `${r}px`,
        height: "100%",
        backgroundColor: o,
        borderRight: `1px solid ${c}`,
        display: "flex",
        flexDirection: "column",
        ...p
      },
      children: [
        a && /* @__PURE__ */ e("div", { className: "sidebar-header", style: { padding: "16px", borderBottom: `1px solid ${c}` }, children: a }),
        /* @__PURE__ */ i(
          "div",
          {
            className: "sidebar-content",
            style: {
              flex: 1,
              overflowY: "auto",
              padding: "16px"
            },
            children: [
              t && t.map((h, d) => C(h, d)),
              n && /* @__PURE__ */ e(me, { gap: "4px", children: n.map((h) => v(h)) })
            ]
          }
        ),
        s && /* @__PURE__ */ e(
          "div",
          {
            className: "sidebar-user",
            style: {
              padding: "16px",
              borderTop: `1px solid ${c}`
            },
            children: /* @__PURE__ */ i(
              "button",
              {
                onClick: s.onClick,
                style: {
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "8px",
                  backgroundColor: "transparent",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "background-color 0.2s"
                },
                onMouseEnter: (h) => {
                  h.currentTarget.style.backgroundColor = "#f9fafb";
                },
                onMouseLeave: (h) => {
                  h.currentTarget.style.backgroundColor = "transparent";
                },
                children: [
                  s.avatar ? /* @__PURE__ */ e(
                    "img",
                    {
                      src: s.avatar,
                      alt: s.name,
                      style: {
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        objectFit: "cover"
                      }
                    }
                  ) : /* @__PURE__ */ e(
                    "div",
                    {
                      style: {
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#e5e7eb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#6b7280"
                      },
                      children: s.name.charAt(0).toUpperCase()
                    }
                  ),
                  /* @__PURE__ */ i("div", { style: { flex: 1, textAlign: "left" }, children: [
                    /* @__PURE__ */ e("div", { style: { fontSize: "14px", fontWeight: "500", color: "#374151", fontFamily: "Inter, sans-serif" }, children: s.name }),
                    s.email && /* @__PURE__ */ e("div", { style: { fontSize: "12px", color: "#6b7280", fontFamily: "Inter, sans-serif" }, children: s.email }),
                    s.role && /* @__PURE__ */ e("div", { style: { fontSize: "11px", color: "#9ca3af", fontFamily: "Inter, sans-serif", marginTop: "2px" }, children: s.role })
                  ] })
                ]
              }
            )
          }
        ),
        l && /* @__PURE__ */ e("div", { className: "sidebar-footer", style: { padding: "16px", borderTop: `1px solid ${c}` }, children: l })
      ]
    }
  );
}, Zt = ({
  opened: t,
  onClose: n,
  position: s = "left",
  withOverlay: a = !0,
  width: l = 260,
  ...r
}) => t ? /* @__PURE__ */ i(te, { children: [
  a && /* @__PURE__ */ e(
    "div",
    {
      className: "drawer-overlay",
      onClick: n,
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 999
      }
    }
  ),
  /* @__PURE__ */ e(
    "div",
    {
      className: "drawer-sidebar",
      style: {
        position: "fixed",
        top: 0,
        bottom: 0,
        [s]: 0,
        width: `${l}px`,
        zIndex: 1e3,
        transform: t ? "translateX(0)" : s === "left" ? "translateX(-100%)" : "translateX(100%)",
        transition: "transform 0.3s ease"
      },
      children: /* @__PURE__ */ e(lt, { width: l, ...r })
    }
  )
] }) : null, Ft = {
  colors: {
    primary: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030712"
    },
    neutral: {
      0: "#ffffff",
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717"
    },
    success: {
      50: "#ecfdf5",
      100: "#d1fae5",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857"
    },
    warning: {
      50: "#fff8f5",
      100: "#fff0e6",
      300: "#ffc4a3",
      400: "#ffa574",
      500: "#ff8a4c",
      600: "#e8b4a2",
      700: "#d4a194"
    },
    error: {
      50: "#fff5f5",
      100: "#ffe3e3",
      300: "#ffa8a8",
      400: "#ff8787",
      500: "#ff6b6b",
      600: "#fa5252",
      700: "#e03131"
    },
    accent: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#00d9ff",
      700: "#00b8d9",
      800: "#0097a7"
    }
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px"
  },
  borderRadius: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px"
  },
  shadows: {
    xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  },
  typography: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px"
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700"
    }
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px"
  }
}, it = W.forwardRef(
  ({ children: t, gap: n = "16px", className: s = "", style: a, "data-testid": l, ...r }, o) => {
    const c = {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gap: typeof n == "number" ? `${n}px` : n,
      ...a
    };
    return /* @__PURE__ */ e(
      "div",
      {
        ref: o,
        className: `grid ${s}`,
        style: c,
        "data-testid": l,
        ...r,
        children: t
      }
    );
  }
);
it.displayName = "Grid";
const ot = W.forwardRef(
  ({ children: t, span: n = 12, offset: s = 0, className: a = "", style: l, "data-testid": r, ...o }, c) => {
    const u = (C, h) => {
      const d = h + 1, w = d + C;
      return `${d} / ${w}`;
    }, x = {
      ...(() => {
        const C = {};
        if (typeof n == "number" && typeof s == "number")
          C.gridColumn = u(n, s);
        else {
          const h = typeof n == "object" ? n : { base: n }, d = typeof s == "object" ? s : { base: s }, w = h.base || 12, g = d.base || 0;
          C.gridColumn = u(w, g);
        }
        return C;
      })(),
      minWidth: 0,
      // Prevent overflow
      ...l
    }, f = W.useMemo(() => {
      if (typeof n == "object" || typeof s == "object") {
        const C = typeof n == "object" ? n : {}, h = typeof s == "object" ? s : {};
        let d = "";
        return Object.entries({
          sm: "576px",
          md: "768px",
          lg: "992px",
          xl: "1200px"
        }).forEach(([g, _]) => {
          const M = C[g], b = h[g];
          if (M !== void 0 || b !== void 0) {
            const y = M !== void 0 ? M : C.base || 12, N = b !== void 0 ? b : h.base || 0;
            d += `
              @media (min-width: ${_}) {
                .grid-col-responsive {
                  grid-column: ${u(y, N)};
                }
              }
            `;
          }
        }), d;
      }
      return "";
    }, [n, s]), v = typeof n == "object" || typeof s == "object" ? `grid-col grid-col-responsive ${a}` : `grid-col ${a}`;
    return /* @__PURE__ */ i(te, { children: [
      f && /* @__PURE__ */ e("style", { dangerouslySetInnerHTML: { __html: f } }),
      /* @__PURE__ */ e(
        "div",
        {
          ref: c,
          className: v,
          style: x,
          "data-testid": r,
          ...o,
          children: t
        }
      )
    ] });
  }
);
ot.displayName = "GridCol";
const ct = W.forwardRef(
  ({
    children: t,
    cols: n = 1,
    spacing: s = "16px",
    verticalSpacing: a,
    className: l = "",
    style: r,
    "data-testid": o,
    ...c
  }, u) => {
    const p = (w) => typeof w == "number" ? `${w}px` : w, x = p(s), f = a ? p(a) : x, m = W.useMemo(() => {
      if (typeof n == "object") {
        const w = {
          base: "0px",
          sm: "576px",
          md: "768px",
          lg: "992px",
          xl: "1200px"
        };
        let g = "";
        return Object.entries(n).forEach(([_, M]) => {
          if (M !== void 0) {
            const b = w[_], y = _ === "base" ? "" : `@media (min-width: ${b})`, N = `
              ${y ? `${y} {` : ""}
                .simple-grid-responsive {
                  grid-template-columns: repeat(${M}, 1fr);
                }
              ${y ? "}" : ""}
            `;
            g += N;
          }
        }), g;
      }
      return "";
    }, [n]), C = {
      display: "grid",
      gridTemplateColumns: typeof n == "number" ? `repeat(${n}, 1fr)` : `repeat(${n.base || 1}, 1fr)`,
      gap: `${f} ${x}`,
      ...r
    }, d = typeof n == "object" ? `simple-grid simple-grid-responsive ${l}` : `simple-grid ${l}`;
    return /* @__PURE__ */ i(te, { children: [
      m && /* @__PURE__ */ e("style", { dangerouslySetInnerHTML: { __html: m } }),
      /* @__PURE__ */ e(
        "div",
        {
          ref: u,
          className: d,
          style: C,
          "data-testid": o,
          ...c,
          children: t
        }
      )
    ] });
  }
);
ct.displayName = "SimpleGrid";
export {
  wt as ActivityChart,
  tt as Avatar,
  oe as Badge,
  Qe as BadgeGroup,
  Be as Button,
  Ke as ButtonGroup,
  jt as Caption,
  Rt as Card,
  Lt as Carousel,
  L1 as Chart,
  $t as ChatInterface,
  m1 as Checkbox,
  mt as CheckboxGroup,
  ue as Container,
  St as DeleteIcon,
  Zt as DrawerSidebar,
  l1 as Dropdown,
  pt as DropdownDivider,
  a1 as DropdownHeader,
  r1 as DropdownItem,
  It as EditIcon,
  st as Flex,
  it as Grid,
  ot as GridCol,
  ie as Group,
  Ht as Heading,
  be as Icons,
  n1 as Input,
  pe as Message,
  D1 as MessageReaction,
  Ct as Modal,
  yt as ModalContent,
  _t as ModalDescription,
  kt as ModalFooter,
  bt as ModalHeader,
  vt as ModalTitle,
  Bt as Navigation,
  Wt as PageContainer,
  At as PageContent,
  rt as PageHeader,
  zt as PageLayout,
  Nt as Pagination,
  Mt as PieChart,
  ft as ProgressBar,
  gt as ProgressCircle,
  I1 as RadarChart,
  u1 as Select,
  We as SelectDropdown,
  Re as SelectOption,
  lt as Sidebar,
  ct as SimpleGrid,
  xt as Slider,
  K1 as SortIcon,
  me as Stack,
  Vt as Table,
  Ce as Text,
  s1 as Textarea,
  p1 as Toggle,
  O1 as TypingIndicator,
  Fe as Typography,
  Ft as designSystemTheme
};
//# sourceMappingURL=index.esm.js.map
