function copyToClipboard(e) {
  const t = document.createElement("textarea");
  (t.value = e.textContent.replace(/\n$/, "")),
    document.body.appendChild(t),
    t.select(),
    document.execCommand("copy"),
    document.body.removeChild(t);
}
function setupCodeCopy() {
  $("pre.highlight").prepend(
    '<div class="copy-clipboard"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg></div>'
  ),
    $(".copy-clipboard").on("click", function () {
      copyToClipboard(this.parentNode.children[1]);
    });
}
function adjustLanguageSelectorWidth() {
  const e = $(".dark-box > .lang-selector");
  e.width(e.parent().width());
}
!(function () {
  if ("ontouchstart" in window) {
    var e,
      t,
      n,
      r,
      i,
      o,
      s = {};
    (e = function (e, t) {
      return Math.abs(e[0] - t[0]) > 5 || Math.abs(e[1] - t[1]) > 5;
    }),
      (t = function (e) {
        (this.startXY = [e.touches[0].clientX, e.touches[0].clientY]),
          (this.threshold = !1);
      }),
      (n = function (t) {
        if (this.threshold) return !1;
        this.threshold = e(this.startXY, [
          t.touches[0].clientX,
          t.touches[0].clientY,
        ]);
      }),
      (r = function (t) {
        if (
          !this.threshold &&
          !e(this.startXY, [
            t.changedTouches[0].clientX,
            t.changedTouches[0].clientY,
          ])
        ) {
          var n = t.changedTouches[0],
            r = document.createEvent("MouseEvents");
          r.initMouseEvent(
            "click",
            !0,
            !0,
            window,
            0,
            n.screenX,
            n.screenY,
            n.clientX,
            n.clientY,
            !1,
            !1,
            !1,
            !1,
            0,
            null
          ),
            (r.simulated = !0),
            t.target.dispatchEvent(r);
        }
      }),
      (i = function (e) {
        var t = Date.now(),
          n = t - s.time,
          r = e.clientX,
          i = e.clientY,
          a = [Math.abs(s.x - r), Math.abs(s.y - i)],
          u = o(e.target, "A") || e.target,
          l = u.nodeName,
          c = "A" === l,
          f = window.navigator.standalone && c && e.target.getAttribute("href");
        if (
          ((s.time = t),
          (s.x = r),
          (s.y = i),
          ((!e.simulated &&
            (n < 500 || (n < 1500 && a[0] < 50 && a[1] < 50))) ||
            f) &&
            (e.preventDefault(), e.stopPropagation(), !f))
        )
          return !1;
        f && (window.location = u.getAttribute("href")),
          u &&
            u.classList &&
            (u.classList.add("energize-focus"),
            window.setTimeout(function () {
              u.classList.remove("energize-focus");
            }, 150));
      }),
      (o = function (e, t) {
        for (var n = e; n !== document.body; ) {
          if (!n || n.nodeName === t) return n;
          n = n.parentNode;
        }
        return null;
      }),
      document.addEventListener("touchstart", t, !1),
      document.addEventListener("touchmove", n, !1),
      document.addEventListener("touchend", r, !1),
      document.addEventListener("click", i, !0);
  }
})()
/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */,
  (function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    function n(e, t, n) {
      n = n || we;
      var r,
        i,
        o = n.createElement("script");
      if (((o.text = e), t))
        for (r in Te)
          (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
            o.setAttribute(r, i);
      n.head.appendChild(o).parentNode.removeChild(o);
    }
    function r(e) {
      return null == e
        ? e + ""
        : "object" == typeof e || "function" == typeof e
        ? pe[he.call(e)] || "object"
        : typeof e;
    }
    function i(e) {
      var t = !!e && "length" in e && e.length,
        n = r(e);
      return (
        !xe(e) &&
        !be(e) &&
        ("array" === n ||
          0 === t ||
          ("number" == typeof t && t > 0 && t - 1 in e))
      );
    }
    function o(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    function s(e, t, n) {
      return xe(t)
        ? Ce.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n;
          })
        : t.nodeType
        ? Ce.grep(e, function (e) {
            return (e === t) !== n;
          })
        : "string" != typeof t
        ? Ce.grep(e, function (e) {
            return de.call(t, e) > -1 !== n;
          })
        : Ce.filter(t, e, n);
    }
    function a(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; );
      return e;
    }
    function u(e) {
      var t = {};
      return (
        Ce.each(e.match(Pe) || [], function (e, n) {
          t[n] = !0;
        }),
        t
      );
    }
    function l(e) {
      return e;
    }
    function c(e) {
      throw e;
    }
    function f(e, t, n, r) {
      var i;
      try {
        e && xe((i = e.promise))
          ? i.call(e).done(t).fail(n)
          : e && xe((i = e.then))
          ? i.call(e, t, n)
          : t.apply(undefined, [e].slice(r));
      } catch (e) {
        n.apply(undefined, [e]);
      }
    }
    function d() {
      we.removeEventListener("DOMContentLoaded", d),
        e.removeEventListener("load", d),
        Ce.ready();
    }
    function p(e, t) {
      return t.toUpperCase();
    }
    function h(e) {
      return e.replace(Fe, "ms-").replace($e, p);
    }
    function g() {
      this.expando = Ce.expando + g.uid++;
    }
    function m(e) {
      return (
        "true" === e ||
        ("false" !== e &&
          ("null" === e
            ? null
            : e === +e + ""
            ? +e
            : Be.test(e)
            ? JSON.parse(e)
            : e))
      );
    }
    function y(e, t, n) {
      var r;
      if (n === undefined && 1 === e.nodeType)
        if (
          ((r = "data-" + t.replace(We, "-$&").toLowerCase()),
          "string" == typeof (n = e.getAttribute(r)))
        ) {
          try {
            n = m(n);
          } catch (e) {}
          Me.set(e, t, n);
        } else n = undefined;
      return n;
    }
    function v(e, t, n, r) {
      var i,
        o,
        s = 20,
        a = r
          ? function () {
              return r.cur();
            }
          : function () {
              return Ce.css(e, t, "");
            },
        u = a(),
        l = (n && n[3]) || (Ce.cssNumber[t] ? "" : "px"),
        c =
          e.nodeType &&
          (Ce.cssNumber[t] || ("px" !== l && +u)) &&
          Ve.exec(Ce.css(e, t));
      if (c && c[3] !== l) {
        for (u /= 2, l = l || c[3], c = +u || 1; s--; )
          Ce.style(e, t, c + l),
            (1 - o) * (1 - (o = a() / u || 0.5)) <= 0 && (s = 0),
            (c /= o);
        (c *= 2), Ce.style(e, t, c + l), (n = n || []);
      }
      return (
        n &&
          ((c = +c || +u || 0),
          (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
          r && ((r.unit = l), (r.start = c), (r.end = i))),
        i
      );
    }
    function x(e) {
      var t,
        n = e.ownerDocument,
        r = e.nodeName,
        i = Ke[r];
      return (
        i ||
        ((t = n.body.appendChild(n.createElement(r))),
        (i = Ce.css(t, "display")),
        t.parentNode.removeChild(t),
        "none" === i && (i = "block"),
        (Ke[r] = i),
        i)
      );
    }
    function b(e, t) {
      for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
        (r = e[o]),
          r.style &&
            ((n = r.style.display),
            t
              ? ("none" === n &&
                  ((i[o] = He.get(r, "display") || null),
                  i[o] || (r.style.display = "")),
                "" === r.style.display && Je(r) && (i[o] = x(r)))
              : "none" !== n && ((i[o] = "none"), He.set(r, "display", n)));
      for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
      return e;
    }
    function w(e, t) {
      var n;
      return (
        (n =
          "undefined" != typeof e.getElementsByTagName
            ? e.getElementsByTagName(t || "*")
            : "undefined" != typeof e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : []),
        t === undefined || (t && o(e, t)) ? Ce.merge([e], n) : n
      );
    }
    function T(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
        He.set(e[n], "globalEval", !t || He.get(t[n], "globalEval"));
    }
    function E(e, t, n, i, o) {
      for (
        var s,
          a,
          u,
          l,
          c,
          f,
          d = t.createDocumentFragment(),
          p = [],
          h = 0,
          g = e.length;
        h < g;
        h++
      )
        if ((s = e[h]) || 0 === s)
          if ("object" === r(s)) Ce.merge(p, s.nodeType ? [s] : s);
          else if (rt.test(s)) {
            for (
              a = a || d.appendChild(t.createElement("div")),
                u = (et.exec(s) || ["", ""])[1].toLowerCase(),
                l = nt[u] || nt._default,
                a.innerHTML = l[1] + Ce.htmlPrefilter(s) + l[2],
                f = l[0];
              f--;

            )
              a = a.lastChild;
            Ce.merge(p, a.childNodes), (a = d.firstChild), (a.textContent = "");
          } else p.push(t.createTextNode(s));
      for (d.textContent = "", h = 0; (s = p[h++]); )
        if (i && Ce.inArray(s, i) > -1) o && o.push(s);
        else if (
          ((c = Ye(s)), (a = w(d.appendChild(s), "script")), c && T(a), n)
        )
          for (f = 0; (s = a[f++]); ) tt.test(s.type || "") && n.push(s);
      return d;
    }
    function C() {
      return !0;
    }
    function k() {
      return !1;
    }
    function S(e, t) {
      return (e === L()) == ("focus" === t);
    }
    function L() {
      try {
        return we.activeElement;
      } catch (e) {}
    }
    function j(e, t, n, r, i, o) {
      var s, a;
      if ("object" == typeof t) {
        "string" != typeof n && ((r = r || n), (n = undefined));
        for (a in t) j(e, a, n, r, t[a], o);
        return e;
      }
      if (
        (null == r && null == i
          ? ((i = n), (r = n = undefined))
          : null == i &&
            ("string" == typeof n
              ? ((i = r), (r = undefined))
              : ((i = r), (r = n), (n = undefined))),
        !1 === i)
      )
        i = k;
      else if (!i) return e;
      return (
        1 === o &&
          ((s = i),
          (i = function (e) {
            return Ce().off(e), s.apply(this, arguments);
          }),
          (i.guid = s.guid || (s.guid = Ce.guid++))),
        e.each(function () {
          Ce.event.add(this, t, i, r, n);
        })
      );
    }
    function N(e, t, n) {
      if (!n) return void (He.get(e, t) === undefined && Ce.event.add(e, t, C));
      He.set(e, t, !1),
        Ce.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var r,
              i,
              o = He.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (o.length)
                (Ce.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((o = le.call(arguments)),
                He.set(this, t, o),
                (r = n(this, t)),
                this[t](),
                (i = He.get(this, t)),
                o !== i || r ? He.set(this, t, !1) : (i = {}),
                o !== i)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), i.value
                );
            } else
              o.length &&
                (He.set(this, t, {
                  value: Ce.event.trigger(
                    Ce.extend(o[0], Ce.Event.prototype),
                    o.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        });
    }
    function A(e, t) {
      return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr")
        ? Ce(e).children("tbody")[0] || e
        : e;
    }
    function D(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function I(e) {
      return (
        "true/" === (e.type || "").slice(0, 5)
          ? (e.type = e.type.slice(5))
          : e.removeAttribute("type"),
        e
      );
    }
    function O(e, t) {
      var n, r, i, o, s, a, u;
      if (1 === t.nodeType) {
        if (He.hasData(e) && ((o = He.get(e)), (u = o.events))) {
          He.remove(t, "handle events");
          for (i in u)
            for (n = 0, r = u[i].length; n < r; n++)
              Ce.event.add(t, i, u[i][n]);
        }
        Me.hasData(e) &&
          ((s = Me.access(e)), (a = Ce.extend({}, s)), Me.set(t, a));
      }
    }
    function P(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && Ze.test(e.type)
        ? (t.checked = e.checked)
        : ("input" !== n && "textarea" !== n) ||
          (t.defaultValue = e.defaultValue);
    }
    function Q(e, t, r, i) {
      t = ce(t);
      var o,
        s,
        a,
        u,
        l,
        c,
        f = 0,
        d = e.length,
        p = d - 1,
        h = t[0],
        g = xe(h);
      if (g || (d > 1 && "string" == typeof h && !ve.checkClone && ut.test(h)))
        return e.each(function (n) {
          var o = e.eq(n);
          g && (t[0] = h.call(this, n, o.html())), Q(o, t, r, i);
        });
      if (
        d &&
        ((o = E(t, e[0].ownerDocument, !1, e, i)),
        (s = o.firstChild),
        1 === o.childNodes.length && (o = s),
        s || i)
      ) {
        for (a = Ce.map(w(o, "script"), D), u = a.length; f < d; f++)
          (l = o),
            f !== p &&
              ((l = Ce.clone(l, !0, !0)), u && Ce.merge(a, w(l, "script"))),
            r.call(e[f], l, f);
        if (u)
          for (
            c = a[a.length - 1].ownerDocument, Ce.map(a, I), f = 0;
            f < u;
            f++
          )
            (l = a[f]),
              tt.test(l.type || "") &&
                !He.access(l, "globalEval") &&
                Ce.contains(c, l) &&
                (l.src && "module" !== (l.type || "").toLowerCase()
                  ? Ce._evalUrl &&
                    !l.noModule &&
                    Ce._evalUrl(
                      l.src,
                      { nonce: l.nonce || l.getAttribute("nonce") },
                      c
                    )
                  : n(l.textContent.replace(lt, ""), l, c));
      }
      return e;
    }
    function R(e, t, n) {
      for (var r, i = t ? Ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
        n || 1 !== r.nodeType || Ce.cleanData(w(r)),
          r.parentNode &&
            (n && Ye(r) && T(w(r, "script")), r.parentNode.removeChild(r));
      return e;
    }
    function q(e, t, n) {
      var r,
        i,
        o,
        s,
        a = e.style;
      return (
        (n = n || ft(e)),
        n &&
          ((s = n.getPropertyValue(t) || n[t]),
          "" !== s || Ye(e) || (s = Ce.style(e, t)),
          !ve.pixelBoxStyles() &&
            ct.test(s) &&
            pt.test(t) &&
            ((r = a.width),
            (i = a.minWidth),
            (o = a.maxWidth),
            (a.minWidth = a.maxWidth = a.width = s),
            (s = n.width),
            (a.width = r),
            (a.minWidth = i),
            (a.maxWidth = o))),
        s !== undefined ? s + "" : s
      );
    }
    function F(e, t) {
      return {
        get: function () {
          return e()
            ? void delete this.get
            : (this.get = t).apply(this, arguments);
        },
      };
    }
    function $(e) {
      for (var t = e[0].toUpperCase() + e.slice(1), n = ht.length; n--; )
        if ((e = ht[n] + t) in gt) return e;
    }
    function _(e) {
      var t = Ce.cssProps[e] || mt[e];
      return t || (e in gt ? e : (mt[e] = $(e) || e));
    }
    function H(e, t, n) {
      var r = Ve.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function M(e, t, n, r, i, o) {
      var s = "width" === t ? 1 : 0,
        a = 0,
        u = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; s < 4; s += 2)
        "margin" === n && (u += Ce.css(e, n + Ue[s], !0, i)),
          r
            ? ("content" === n && (u -= Ce.css(e, "padding" + Ue[s], !0, i)),
              "margin" !== n &&
                (u -= Ce.css(e, "border" + Ue[s] + "Width", !0, i)))
            : ((u += Ce.css(e, "padding" + Ue[s], !0, i)),
              "padding" !== n
                ? (u += Ce.css(e, "border" + Ue[s] + "Width", !0, i))
                : (a += Ce.css(e, "border" + Ue[s] + "Width", !0, i)));
      return (
        !r &&
          o >= 0 &&
          (u +=
            Math.max(
              0,
              Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - 0.5
              )
            ) || 0),
        u
      );
    }
    function B(e, t, n) {
      var r = ft(e),
        i = !ve.boxSizingReliable() || n,
        s = i && "border-box" === Ce.css(e, "boxSizing", !1, r),
        a = s,
        u = q(e, t, r),
        l = "offset" + t[0].toUpperCase() + t.slice(1);
      if (ct.test(u)) {
        if (!n) return u;
        u = "auto";
      }
      return (
        ((!ve.boxSizingReliable() && s) ||
          (!ve.reliableTrDimensions() && o(e, "tr")) ||
          "auto" === u ||
          (!parseFloat(u) && "inline" === Ce.css(e, "display", !1, r))) &&
          e.getClientRects().length &&
          ((s = "border-box" === Ce.css(e, "boxSizing", !1, r)),
          (a = l in e) && (u = e[l])),
        (u = parseFloat(u) || 0) +
          M(e, t, n || (s ? "border" : "content"), a, r, u) +
          "px"
      );
    }
    function W(e, t, n, r, i) {
      return new W.prototype.init(e, t, n, r, i);
    }
    function z() {
      Tt &&
        (!1 === we.hidden && e.requestAnimationFrame
          ? e.requestAnimationFrame(z)
          : e.setTimeout(z, Ce.fx.interval),
        Ce.fx.tick());
    }
    function V() {
      return (
        e.setTimeout(function () {
          wt = undefined;
        }),
        (wt = Date.now())
      );
    }
    function U(e, t) {
      var n,
        r = 0,
        i = { height: e };
      for (t = t ? 1 : 0; r < 4; r += 2 - t)
        (n = Ue[r]), (i["margin" + n] = i["padding" + n] = e);
      return t && (i.opacity = i.width = e), i;
    }
    function X(e, t, n) {
      for (
        var r,
          i = (J.tweeners[t] || []).concat(J.tweeners["*"]),
          o = 0,
          s = i.length;
        o < s;
        o++
      )
        if ((r = i[o].call(n, t, e))) return r;
    }
    function Y(e, t, n) {
      var r,
        i,
        o,
        s,
        a,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        d = this,
        p = {},
        h = e.style,
        g = e.nodeType && Je(e),
        m = He.get(e, "fxshow");
      n.queue ||
        ((s = Ce._queueHooks(e, "fx")),
        null == s.unqueued &&
          ((s.unqueued = 0),
          (a = s.empty.fire),
          (s.empty.fire = function () {
            s.unqueued || a();
          })),
        s.unqueued++,
        d.always(function () {
          d.always(function () {
            s.unqueued--, Ce.queue(e, "fx").length || s.empty.fire();
          });
        }));
      for (r in t)
        if (((i = t[r]), Et.test(i))) {
          if (
            (delete t[r],
            (o = o || "toggle" === i),
            i === (g ? "hide" : "show"))
          ) {
            if ("show" !== i || !m || m[r] === undefined) continue;
            g = !0;
          }
          p[r] = (m && m[r]) || Ce.style(e, r);
        }
      if ((u = !Ce.isEmptyObject(t)) || !Ce.isEmptyObject(p)) {
        f &&
          1 === e.nodeType &&
          ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
          (l = m && m.display),
          null == l && (l = He.get(e, "display")),
          (c = Ce.css(e, "display")),
          "none" === c &&
            (l
              ? (c = l)
              : (b([e], !0),
                (l = e.style.display || l),
                (c = Ce.css(e, "display")),
                b([e]))),
          ("inline" === c || ("inline-block" === c && null != l)) &&
            "none" === Ce.css(e, "float") &&
            (u ||
              (d.done(function () {
                h.display = l;
              }),
              null == l && ((c = h.display), (l = "none" === c ? "" : c))),
            (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            d.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1);
        for (r in p)
          u ||
            (m
              ? "hidden" in m && (g = m.hidden)
              : (m = He.access(e, "fxshow", { display: l })),
            o && (m.hidden = !g),
            g && b([e], !0),
            d.done(function () {
              g || b([e]), He.remove(e, "fxshow");
              for (r in p) Ce.style(e, r, p[r]);
            })),
            (u = X(g ? m[r] : 0, r, d)),
            r in m ||
              ((m[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      }
    }
    function G(e, t) {
      var n, r, i, o, s;
      for (n in e)
        if (
          ((r = h(n)),
          (i = t[r]),
          (o = e[n]),
          Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
          n !== r && ((e[r] = o), delete e[n]),
          (s = Ce.cssHooks[r]) && "expand" in s)
        ) {
          (o = s.expand(o)), delete e[r];
          for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
        } else t[r] = i;
    }
    function J(e, t, n) {
      var r,
        i,
        o = 0,
        s = J.prefilters.length,
        a = Ce.Deferred().always(function () {
          delete u.elem;
        }),
        u = function () {
          if (i) return !1;
          for (
            var t = wt || V(),
              n = Math.max(0, l.startTime + l.duration - t),
              r = n / l.duration || 0,
              o = 1 - r,
              s = 0,
              u = l.tweens.length;
            s < u;
            s++
          )
            l.tweens[s].run(o);
          return (
            a.notifyWith(e, [l, o, n]),
            o < 1 && u
              ? n
              : (u || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1)
          );
        },
        l = a.promise({
          elem: e,
          props: Ce.extend({}, t),
          opts: Ce.extend(
            !0,
            { specialEasing: {}, easing: Ce.easing._default },
            n
          ),
          originalProperties: t,
          originalOptions: n,
          startTime: wt || V(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var r = Ce.Tween(
              e,
              l.opts,
              t,
              n,
              l.opts.specialEasing[t] || l.opts.easing
            );
            return l.tweens.push(r), r;
          },
          stop: function (t) {
            var n = 0,
              r = t ? l.tweens.length : 0;
            if (i) return this;
            for (i = !0; n < r; n++) l.tweens[n].run(1);
            return (
              t
                ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t]))
                : a.rejectWith(e, [l, t]),
              this
            );
          },
        }),
        c = l.props;
      for (G(c, l.opts.specialEasing); o < s; o++)
        if ((r = J.prefilters[o].call(l, e, c, l.opts)))
          return (
            xe(r.stop) &&
              (Ce._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
            r
          );
      return (
        Ce.map(c, X, l),
        xe(l.opts.start) && l.opts.start.call(e, l),
        l
          .progress(l.opts.progress)
          .done(l.opts.done, l.opts.complete)
          .fail(l.opts.fail)
          .always(l.opts.always),
        Ce.fx.timer(Ce.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
        l
      );
    }
    function K(e) {
      return (e.match(Pe) || []).join(" ");
    }
    function Z(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function ee(e) {
      return Array.isArray(e)
        ? e
        : "string" == typeof e
        ? e.match(Pe) || []
        : [];
    }
    function te(e, t, n, i) {
      var o;
      if (Array.isArray(t))
        Ce.each(t, function (t, r) {
          n || Qt.test(e)
            ? i(e, r)
            : te(
                e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
                r,
                n,
                i
              );
        });
      else if (n || "object" !== r(t)) i(e, t);
      else for (o in t) te(e + "[" + o + "]", t[o], n, i);
    }
    function ne(e) {
      return function (t, n) {
        "string" != typeof t && ((n = t), (t = "*"));
        var r,
          i = 0,
          o = t.toLowerCase().match(Pe) || [];
        if (xe(n))
          for (; (r = o[i++]); )
            "+" === r[0]
              ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
              : (e[r] = e[r] || []).push(n);
      };
    }
    function re(e, t, n, r) {
      function i(a) {
        var u;
        return (
          (o[a] = !0),
          Ce.each(e[a] || [], function (e, a) {
            var l = a(t, n, r);
            return "string" != typeof l || s || o[l]
              ? s
                ? !(u = l)
                : void 0
              : (t.dataTypes.unshift(l), i(l), !1);
          }),
          u
        );
      }
      var o = {},
        s = e === Ut;
      return i(t.dataTypes[0]) || (!o["*"] && i("*"));
    }
    function ie(e, t) {
      var n,
        r,
        i = Ce.ajaxSettings.flatOptions || {};
      for (n in t) t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && Ce.extend(!0, e, r), e;
    }
    function oe(e, t, n) {
      for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; )
        u.shift(),
          r === undefined &&
            (r = e.mimeType || t.getResponseHeader("Content-Type"));
      if (r)
        for (i in a)
          if (a[i] && a[i].test(r)) {
            u.unshift(i);
            break;
          }
      if (u[0] in n) o = u[0];
      else {
        for (i in n) {
          if (!u[0] || e.converters[i + " " + u[0]]) {
            o = i;
            break;
          }
          s || (s = i);
        }
        o = o || s;
      }
      if (o) return o !== u[0] && u.unshift(o), n[o];
    }
    function se(e, t, n, r) {
      var i,
        o,
        s,
        a,
        u,
        l = {},
        c = e.dataTypes.slice();
      if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
      for (o = c.shift(); o; )
        if (
          (e.responseFields[o] && (n[e.responseFields[o]] = t),
          !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          (u = o),
          (o = c.shift()))
        )
          if ("*" === o) o = u;
          else if ("*" !== u && u !== o) {
            if (!(s = l[u + " " + o] || l["* " + o]))
              for (i in l)
                if (
                  ((a = i.split(" ")),
                  a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]]))
                ) {
                  !0 === s
                    ? (s = l[i])
                    : !0 !== l[i] && ((o = a[0]), c.unshift(a[1]));
                  break;
                }
            if (!0 !== s)
              if (s && e["throws"]) t = s(t);
              else
                try {
                  t = s(t);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: s ? e : "No conversion from " + u + " to " + o,
                  };
                }
          }
      return { state: "success", data: t };
    }
    var ae = [],
      ue = Object.getPrototypeOf,
      le = ae.slice,
      ce = ae.flat
        ? function (e) {
            return ae.flat.call(e);
          }
        : function (e) {
            return ae.concat.apply([], e);
          },
      fe = ae.push,
      de = ae.indexOf,
      pe = {},
      he = pe.toString,
      ge = pe.hasOwnProperty,
      me = ge.toString,
      ye = me.call(Object),
      ve = {},
      xe = function (e) {
        return "function" == typeof e && "number" != typeof e.nodeType;
      },
      be = function (e) {
        return null != e && e === e.window;
      },
      we = e.document,
      Te = { type: !0, src: !0, nonce: !0, noModule: !0 },
      Ee = "3.5.1",
      Ce = function (e, t) {
        return new Ce.fn.init(e, t);
      };
    (Ce.fn = Ce.prototype =
      {
        jquery: Ee,
        constructor: Ce,
        length: 0,
        toArray: function () {
          return le.call(this);
        },
        get: function (e) {
          return null == e
            ? le.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = Ce.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return Ce.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            Ce.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(le.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            Ce.grep(this, function (e, t) {
              return (t + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            Ce.grep(this, function (e, t) {
              return t % 2;
            })
          );
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: fe,
        sort: ae.sort,
        splice: ae.splice,
      }),
      (Ce.extend = Ce.fn.extend =
        function () {
          var e,
            t,
            n,
            r,
            i,
            o,
            s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
          for (
            "boolean" == typeof s && ((l = s), (s = arguments[a] || {}), a++),
              "object" == typeof s || xe(s) || (s = {}),
              a === u && ((s = this), a--);
            a < u;
            a++
          )
            if (null != (e = arguments[a]))
              for (t in e)
                (r = e[t]),
                  "__proto__" !== t &&
                    s !== r &&
                    (l && r && (Ce.isPlainObject(r) || (i = Array.isArray(r)))
                      ? ((n = s[t]),
                        (o =
                          i && !Array.isArray(n)
                            ? []
                            : i || Ce.isPlainObject(n)
                            ? n
                            : {}),
                        (i = !1),
                        (s[t] = Ce.extend(l, o, r)))
                      : r !== undefined && (s[t] = r));
          return s;
        }),
      Ce.extend({
        expando: "jQuery" + (Ee + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isPlainObject: function (e) {
          var t, n;
          return (
            !(!e || "[object Object]" !== he.call(e)) &&
            (!(t = ue(e)) ||
              ("function" ==
                typeof (n = ge.call(t, "constructor") && t.constructor) &&
                me.call(n) === ye))
          );
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        globalEval: function (e, t, r) {
          n(e, { nonce: t && t.nonce }, r);
        },
        each: function (e, t) {
          var n,
            r = 0;
          if (i(e))
            for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
          else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
          return e;
        },
        makeArray: function (e, t) {
          var n = t || [];
          return (
            null != e &&
              (i(Object(e))
                ? Ce.merge(n, "string" == typeof e ? [e] : e)
                : fe.call(n, e)),
            n
          );
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : de.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++)
            e[i++] = t[r];
          return (e.length = i), e;
        },
        grep: function (e, t, n) {
          for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
            !t(e[i], i) !== s && r.push(e[i]);
          return r;
        },
        map: function (e, t, n) {
          var r,
            o,
            s = 0,
            a = [];
          if (i(e))
            for (r = e.length; s < r; s++)
              null != (o = t(e[s], s, n)) && a.push(o);
          else for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
          return ce(a);
        },
        guid: 1,
        support: ve,
      }),
      "function" == typeof Symbol &&
        (Ce.fn[Symbol.iterator] = ae[Symbol.iterator]),
      Ce.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (e, t) {
          pe["[object " + t + "]"] = t.toLowerCase();
        }
      );
    var ke =
      /*!
       * Sizzle CSS Selector Engine v2.3.5
       * https://sizzlejs.com/
       *
       * Copyright JS Foundation and other contributors
       * Released under the MIT license
       * https://js.foundation/
       *
       * Date: 2020-03-14
       */
      (function (e) {
        function t(e, t, n, r) {
          var i,
            o,
            s,
            a,
            u,
            l,
            c,
            d = t && t.ownerDocument,
            h = t ? t.nodeType : 9;
          if (
            ((n = n || []),
            "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
          )
            return n;
          if (!r && (I(t), (t = t || O), Q)) {
            if (11 !== h && (u = xe.exec(e)))
              if ((i = u[1])) {
                if (9 === h) {
                  if (!(s = t.getElementById(i))) return n;
                  if (s.id === i) return n.push(s), n;
                } else if (
                  d &&
                  (s = d.getElementById(i)) &&
                  $(t, s) &&
                  s.id === i
                )
                  return n.push(s), n;
              } else {
                if (u[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                if (
                  (i = u[3]) &&
                  T.getElementsByClassName &&
                  t.getElementsByClassName
                )
                  return Z.apply(n, t.getElementsByClassName(i)), n;
              }
            if (
              T.qsa &&
              !U[e + " "] &&
              (!R || !R.test(e)) &&
              (1 !== h || "object" !== t.nodeName.toLowerCase())
            ) {
              if (((c = e), (d = t), 1 === h && (fe.test(e) || ce.test(e)))) {
                for (
                  d = (be.test(e) && f(t.parentNode)) || t,
                    (d === t && T.scope) ||
                      ((a = t.getAttribute("id"))
                        ? (a = a.replace(Ee, Ce))
                        : t.setAttribute("id", (a = _))),
                    l = S(e),
                    o = l.length;
                  o--;

                )
                  l[o] = (a ? "#" + a : ":scope") + " " + p(l[o]);
                c = l.join(",");
              }
              try {
                return Z.apply(n, d.querySelectorAll(c)), n;
              } catch (t) {
                U(e, !0);
              } finally {
                a === _ && t.removeAttribute("id");
              }
            }
          }
          return j(e.replace(ue, "$1"), t, n, r);
        }
        function n() {
          function e(n, r) {
            return (
              t.push(n + " ") > E.cacheLength && delete e[t.shift()],
              (e[n + " "] = r)
            );
          }
          var t = [];
          return e;
        }
        function r(e) {
          return (e[_] = !0), e;
        }
        function i(e) {
          var t = O.createElement("fieldset");
          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
        }
        function o(e, t) {
          for (var n = e.split("|"), r = n.length; r--; )
            E.attrHandle[n[r]] = t;
        }
        function s(e, t) {
          var n = t && e,
            r =
              n &&
              1 === e.nodeType &&
              1 === t.nodeType &&
              e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
          return e ? 1 : -1;
        }
        function a(e) {
          return function (t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e;
          };
        }
        function u(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e;
          };
        }
        function l(e) {
          return function (t) {
            return "form" in t
              ? t.parentNode && !1 === t.disabled
                ? "label" in t
                  ? "label" in t.parentNode
                    ? t.parentNode.disabled === e
                    : t.disabled === e
                  : t.isDisabled === e || (t.isDisabled !== !e && Se(t) === e)
                : t.disabled === e
              : "label" in t && t.disabled === e;
          };
        }
        function c(e) {
          return r(function (t) {
            return (
              (t = +t),
              r(function (n, r) {
                for (var i, o = e([], n.length, t), s = o.length; s--; )
                  n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
              })
            );
          });
        }
        function f(e) {
          return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        function d() {}
        function p(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
          return r;
        }
        function h(e, t, n) {
          var r = t.dir,
            i = t.next,
            o = i || r,
            s = n && "parentNode" === o,
            a = B++;
          return t.first
            ? function (t, n, i) {
                for (; (t = t[r]); )
                  if (1 === t.nodeType || s) return e(t, n, i);
                return !1;
              }
            : function (t, n, u) {
                var l,
                  c,
                  f,
                  d = [M, a];
                if (u) {
                  for (; (t = t[r]); )
                    if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
                } else
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || s)
                      if (
                        ((f = t[_] || (t[_] = {})),
                        (c = f[t.uniqueID] || (f[t.uniqueID] = {})),
                        i && i === t.nodeName.toLowerCase())
                      )
                        t = t[r] || t;
                      else {
                        if ((l = c[o]) && l[0] === M && l[1] === a)
                          return (d[2] = l[2]);
                        if (((c[o] = d), (d[2] = e(t, n, u)))) return !0;
                      }
                return !1;
              };
        }
        function g(e) {
          return e.length > 1
            ? function (t, n, r) {
                for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                return !0;
              }
            : e[0];
        }
        function m(e, n, r) {
          for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
          return r;
        }
        function y(e, t, n, r, i) {
          for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)
            (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), l && t.push(a)));
          return s;
        }
        function v(e, t, n, i, o, s) {
          return (
            i && !i[_] && (i = v(i)),
            o && !o[_] && (o = v(o, s)),
            r(function (r, s, a, u) {
              var l,
                c,
                f,
                d = [],
                p = [],
                h = s.length,
                g = r || m(t || "*", a.nodeType ? [a] : a, []),
                v = !e || (!r && t) ? g : y(g, d, e, a, u),
                x = n ? (o || (r ? e : h || i) ? [] : s) : v;
              if ((n && n(v, x, a, u), i))
                for (l = y(x, p), i(l, [], a, u), c = l.length; c--; )
                  (f = l[c]) && (x[p[c]] = !(v[p[c]] = f));
              if (r) {
                if (o || e) {
                  if (o) {
                    for (l = [], c = x.length; c--; )
                      (f = x[c]) && l.push((v[c] = f));
                    o(null, (x = []), l, u);
                  }
                  for (c = x.length; c--; )
                    (f = x[c]) &&
                      (l = o ? te(r, f) : d[c]) > -1 &&
                      (r[l] = !(s[l] = f));
                }
              } else (x = y(x === s ? x.splice(h, x.length) : x)), o ? o(null, s, x, u) : Z.apply(s, x);
            })
          );
        }
        function x(e) {
          for (
            var t,
              n,
              r,
              i = e.length,
              o = E.relative[e[0].type],
              s = o || E.relative[" "],
              a = o ? 1 : 0,
              u = h(
                function (e) {
                  return e === t;
                },
                s,
                !0
              ),
              l = h(
                function (e) {
                  return te(t, e) > -1;
                },
                s,
                !0
              ),
              c = [
                function (e, n, r) {
                  var i =
                    (!o && (r || n !== N)) ||
                    ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                  return (t = null), i;
                },
              ];
            a < i;
            a++
          )
            if ((n = E.relative[e[a].type])) c = [h(g(c), n)];
            else {
              if (((n = E.filter[e[a].type].apply(null, e[a].matches)), n[_])) {
                for (r = ++a; r < i && !E.relative[e[r].type]; r++);
                return v(
                  a > 1 && g(c),
                  a > 1 &&
                    p(
                      e
                        .slice(0, a - 1)
                        .concat({ value: " " === e[a - 2].type ? "*" : "" })
                    ).replace(ue, "$1"),
                  n,
                  a < r && x(e.slice(a, r)),
                  r < i && x((e = e.slice(r))),
                  r < i && p(e)
                );
              }
              c.push(n);
            }
          return g(c);
        }
        function b(e, n) {
          var i = n.length > 0,
            o = e.length > 0,
            s = function (r, s, a, u, l) {
              var c,
                f,
                d,
                p = 0,
                h = "0",
                g = r && [],
                m = [],
                v = N,
                x = r || (o && E.find.TAG("*", l)),
                b = (M += null == v ? 1 : Math.random() || 0.1),
                w = x.length;
              for (
                l && (N = s == O || s || l);
                h !== w && null != (c = x[h]);
                h++
              ) {
                if (o && c) {
                  for (
                    f = 0, s || c.ownerDocument == O || (I(c), (a = !Q));
                    (d = e[f++]);

                  )
                    if (d(c, s || O, a)) {
                      u.push(c);
                      break;
                    }
                  l && (M = b);
                }
                i && ((c = !d && c) && p--, r && g.push(c));
              }
              if (((p += h), i && h !== p)) {
                for (f = 0; (d = n[f++]); ) d(g, m, s, a);
                if (r) {
                  if (p > 0) for (; h--; ) g[h] || m[h] || (m[h] = J.call(u));
                  m = y(m);
                }
                Z.apply(u, m),
                  l &&
                    !r &&
                    m.length > 0 &&
                    p + n.length > 1 &&
                    t.uniqueSort(u);
              }
              return l && ((M = b), (N = v)), g;
            };
          return i ? r(s) : s;
        }
        var w,
          T,
          E,
          C,
          k,
          S,
          L,
          j,
          N,
          A,
          D,
          I,
          O,
          P,
          Q,
          R,
          q,
          F,
          $,
          _ = "sizzle" + 1 * new Date(),
          H = e.document,
          M = 0,
          B = 0,
          W = n(),
          z = n(),
          V = n(),
          U = n(),
          X = function (e, t) {
            return e === t && (D = !0), 0;
          },
          Y = {}.hasOwnProperty,
          G = [],
          J = G.pop,
          K = G.push,
          Z = G.push,
          ee = G.slice,
          te = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
          },
          ne =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          re = "[\\x20\\t\\r\\n\\f]",
          ie =
            "(?:\\\\[\\da-fA-F]{1,6}" +
            re +
            "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          oe =
            "\\[" +
            re +
            "*(" +
            ie +
            ")(?:" +
            re +
            "*([*^$|!~]?=)" +
            re +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            ie +
            "))|)" +
            re +
            "*\\]",
          se =
            ":(" +
            ie +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            oe +
            ")*)|.*)\\)|)",
          ae = new RegExp(re + "+", "g"),
          ue = new RegExp(
            "^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$",
            "g"
          ),
          le = new RegExp("^" + re + "*," + re + "*"),
          ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
          fe = new RegExp(re + "|>"),
          de = new RegExp(se),
          pe = new RegExp("^" + ie + "$"),
          he = {
            ID: new RegExp("^#(" + ie + ")"),
            CLASS: new RegExp("^\\.(" + ie + ")"),
            TAG: new RegExp("^(" + ie + "|[*])"),
            ATTR: new RegExp("^" + oe),
            PSEUDO: new RegExp("^" + se),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                re +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                re +
                "*(?:([+-]|)" +
                re +
                "*(\\d+)|))" +
                re +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + ne + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                re +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                re +
                "*((?:-\\d)?\\d*)" +
                re +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          ge = /HTML$/i,
          me = /^(?:input|select|textarea|button)$/i,
          ye = /^h\d$/i,
          ve = /^[^{]+\{\s*\[native \w/,
          xe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          be = /[+~]/,
          we = new RegExp(
            "\\\\[\\da-fA-F]{1,6}" + re + "?|\\\\([^\\r\\n\\f])",
            "g"
          ),
          Te = function (e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return (
              t ||
              (n < 0
                ? String.fromCharCode(n + 65536)
                : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
            );
          },
          Ee = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          Ce = function (e, t) {
            return t
              ? "\0" === e
                ? "\ufffd"
                : e.slice(0, -1) +
                  "\\" +
                  e.charCodeAt(e.length - 1).toString(16) +
                  " "
              : "\\" + e;
          },
          ke = function () {
            I();
          },
          Se = h(
            function (e) {
              return (
                !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
              );
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          Z.apply((G = ee.call(H.childNodes)), H.childNodes),
            G[H.childNodes.length].nodeType;
        } catch (e) {
          Z = {
            apply: G.length
              ? function (e, t) {
                  K.apply(e, ee.call(t));
                }
              : function (e, t) {
                  for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                  e.length = n - 1;
                },
          };
        }
        (T = t.support = {}),
          (k = t.isXML =
            function (e) {
              var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
              return !ge.test(t || (n && n.nodeName) || "HTML");
            }),
          (I = t.setDocument =
            function (e) {
              var t,
                n,
                r = e ? e.ownerDocument || e : H;
              return r != O && 9 === r.nodeType && r.documentElement
                ? ((O = r),
                  (P = O.documentElement),
                  (Q = !k(O)),
                  H != O &&
                    (n = O.defaultView) &&
                    n.top !== n &&
                    (n.addEventListener
                      ? n.addEventListener("unload", ke, !1)
                      : n.attachEvent && n.attachEvent("onunload", ke)),
                  (T.scope = i(function (e) {
                    return (
                      P.appendChild(e).appendChild(O.createElement("div")),
                      "undefined" != typeof e.querySelectorAll &&
                        !e.querySelectorAll(":scope fieldset div").length
                    );
                  })),
                  (T.attributes = i(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (T.getElementsByTagName = i(function (e) {
                    return (
                      e.appendChild(O.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (T.getElementsByClassName = ve.test(
                    O.getElementsByClassName
                  )),
                  (T.getById = i(function (e) {
                    return (
                      (P.appendChild(e).id = _),
                      !O.getElementsByName || !O.getElementsByName(_).length
                    );
                  })),
                  T.getById
                    ? ((E.filter.ID = function (e) {
                        var t = e.replace(we, Te);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (E.find.ID = function (e, t) {
                        if ("undefined" != typeof t.getElementById && Q) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((E.filter.ID = function (e) {
                        var t = e.replace(we, Te);
                        return function (e) {
                          var n =
                            "undefined" != typeof e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (E.find.ID = function (e, t) {
                        if ("undefined" != typeof t.getElementById && Q) {
                          var n,
                            r,
                            i,
                            o = t.getElementById(e);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                            for (
                              i = t.getElementsByName(e), r = 0;
                              (o = i[r++]);

                            )
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (E.find.TAG = T.getElementsByTagName
                    ? function (e, t) {
                        return "undefined" != typeof t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : T.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          i = 0,
                          o = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return o;
                      }),
                  (E.find.CLASS =
                    T.getElementsByClassName &&
                    function (e, t) {
                      if ("undefined" != typeof t.getElementsByClassName && Q)
                        return t.getElementsByClassName(e);
                    }),
                  (q = []),
                  (R = []),
                  (T.qsa = ve.test(O.querySelectorAll)) &&
                    (i(function (e) {
                      var t;
                      (P.appendChild(e).innerHTML =
                        "<a id='" +
                        _ +
                        "'></a><select id='" +
                        _ +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          R.push("[*^$]=" + re + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          R.push("\\[" + re + "*(?:value|" + ne + ")"),
                        e.querySelectorAll("[id~=" + _ + "-]").length ||
                          R.push("~="),
                        (t = O.createElement("input")),
                        t.setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length ||
                          R.push(
                            "\\[" +
                              re +
                              "*name" +
                              re +
                              "*=" +
                              re +
                              "*(?:''|\"\")"
                          ),
                        e.querySelectorAll(":checked").length ||
                          R.push(":checked"),
                        e.querySelectorAll("a#" + _ + "+*").length ||
                          R.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        R.push("[\\r\\n\\f]");
                    }),
                    i(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = O.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          R.push("name" + re + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          R.push(":enabled", ":disabled"),
                        (P.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          R.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        R.push(",.*:");
                    })),
                  (T.matchesSelector = ve.test(
                    (F =
                      P.matches ||
                      P.webkitMatchesSelector ||
                      P.mozMatchesSelector ||
                      P.oMatchesSelector ||
                      P.msMatchesSelector)
                  )) &&
                    i(function (e) {
                      (T.disconnectedMatch = F.call(e, "*")),
                        F.call(e, "[s!='']:x"),
                        q.push("!=", se);
                    }),
                  (R = R.length && new RegExp(R.join("|"))),
                  (q = q.length && new RegExp(q.join("|"))),
                  (t = ve.test(P.compareDocumentPosition)),
                  ($ =
                    t || ve.test(P.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (X = t
                    ? function (e, t) {
                        if (e === t) return (D = !0), 0;
                        var n =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          n ||
                          ((n =
                            (e.ownerDocument || e) == (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1),
                          1 & n ||
                          (!T.sortDetached &&
                            t.compareDocumentPosition(e) === n)
                            ? e == O || (e.ownerDocument == H && $(H, e))
                              ? -1
                              : t == O || (t.ownerDocument == H && $(H, t))
                              ? 1
                              : A
                              ? te(A, e) - te(A, t)
                              : 0
                            : 4 & n
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (D = !0), 0;
                        var n,
                          r = 0,
                          i = e.parentNode,
                          o = t.parentNode,
                          a = [e],
                          u = [t];
                        if (!i || !o)
                          return e == O
                            ? -1
                            : t == O
                            ? 1
                            : i
                            ? -1
                            : o
                            ? 1
                            : A
                            ? te(A, e) - te(A, t)
                            : 0;
                        if (i === o) return s(e, t);
                        for (n = e; (n = n.parentNode); ) a.unshift(n);
                        for (n = t; (n = n.parentNode); ) u.unshift(n);
                        for (; a[r] === u[r]; ) r++;
                        return r
                          ? s(a[r], u[r])
                          : a[r] == H
                          ? -1
                          : u[r] == H
                          ? 1
                          : 0;
                      }),
                  O)
                : O;
            }),
          (t.matches = function (e, n) {
            return t(e, null, null, n);
          }),
          (t.matchesSelector = function (e, n) {
            if (
              (I(e),
              T.matchesSelector &&
                Q &&
                !U[n + " "] &&
                (!q || !q.test(n)) &&
                (!R || !R.test(n)))
            )
              try {
                var r = F.call(e, n);
                if (
                  r ||
                  T.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (e) {
                U(n, !0);
              }
            return t(n, O, null, [e]).length > 0;
          }),
          (t.contains = function (e, t) {
            return (e.ownerDocument || e) != O && I(e), $(e, t);
          }),
          (t.attr = function (e, t) {
            (e.ownerDocument || e) != O && I(e);
            var n = E.attrHandle[t.toLowerCase()],
              r =
                n && Y.call(E.attrHandle, t.toLowerCase())
                  ? n(e, t, !Q)
                  : undefined;
            return r !== undefined
              ? r
              : T.attributes || !Q
              ? e.getAttribute(t)
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
          }),
          (t.escape = function (e) {
            return (e + "").replace(Ee, Ce);
          }),
          (t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (t.uniqueSort = function (e) {
            var t,
              n = [],
              r = 0,
              i = 0;
            if (
              ((D = !T.detectDuplicates),
              (A = !T.sortStable && e.slice(0)),
              e.sort(X),
              D)
            ) {
              for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
              for (; r--; ) e.splice(n[r], 1);
            }
            return (A = null), e;
          }),
          (C = t.getText =
            function (e) {
              var t,
                n = "",
                r = 0,
                i = e.nodeType;
              if (i) {
                if (1 === i || 9 === i || 11 === i) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
              } else for (; (t = e[r++]); ) n += C(t);
              return n;
            }),
          (E = t.selectors =
            {
              cacheLength: 50,
              createPseudo: r,
              match: he,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(we, Te)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || t.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && t.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return he.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          de.test(n) &&
                          (t = S(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(we, Te).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = W[e + " "];
                  return (
                    t ||
                    ((t = new RegExp(
                      "(^|" + re + ")" + e + "(" + re + "|$)"
                    )) &&
                      W(e, function (e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            ("undefined" != typeof e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (e, n, r) {
                  return function (i) {
                    var o = t.attr(i, e);
                    return null == o
                      ? "!=" === n
                      : !n ||
                          ((o += ""),
                          "=" === n
                            ? o === r
                            : "!=" === n
                            ? o !== r
                            : "^=" === n
                            ? r && 0 === o.indexOf(r)
                            : "*=" === n
                            ? r && o.indexOf(r) > -1
                            : "$=" === n
                            ? r && o.slice(-r.length) === r
                            : "~=" === n
                            ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1
                            : "|=" === n &&
                              (o === r ||
                                o.slice(0, r.length + 1) === r + "-"));
                  };
                },
                CHILD: function (e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3),
                    s = "last" !== e.slice(-4),
                    a = "of-type" === t;
                  return 1 === r && 0 === i
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, u) {
                        var l,
                          c,
                          f,
                          d,
                          p,
                          h,
                          g = o !== s ? "nextSibling" : "previousSibling",
                          m = t.parentNode,
                          y = a && t.nodeName.toLowerCase(),
                          v = !u && !a,
                          x = !1;
                        if (m) {
                          if (o) {
                            for (; g; ) {
                              for (d = t; (d = d[g]); )
                                if (
                                  a
                                    ? d.nodeName.toLowerCase() === y
                                    : 1 === d.nodeType
                                )
                                  return !1;
                              h = g = "only" === e && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((h = [s ? m.firstChild : m.lastChild]), s && v)
                          ) {
                            for (
                              d = m,
                                f = d[_] || (d[_] = {}),
                                c = f[d.uniqueID] || (f[d.uniqueID] = {}),
                                l = c[e] || [],
                                p = l[0] === M && l[1],
                                x = p && l[2],
                                d = p && m.childNodes[p];
                              (d =
                                (++p && d && d[g]) || (x = p = 0) || h.pop());

                            )
                              if (1 === d.nodeType && ++x && d === t) {
                                c[e] = [M, p, x];
                                break;
                              }
                          } else if (
                            (v &&
                              ((d = t),
                              (f = d[_] || (d[_] = {})),
                              (c = f[d.uniqueID] || (f[d.uniqueID] = {})),
                              (l = c[e] || []),
                              (p = l[0] === M && l[1]),
                              (x = p)),
                            !1 === x)
                          )
                            for (
                              ;
                              (d =
                                (++p && d && d[g]) || (x = p = 0) || h.pop()) &&
                              ((a
                                ? d.nodeName.toLowerCase() !== y
                                : 1 !== d.nodeType) ||
                                !++x ||
                                (v &&
                                  ((f = d[_] || (d[_] = {})),
                                  (c = f[d.uniqueID] || (f[d.uniqueID] = {})),
                                  (c[e] = [M, x])),
                                d !== t));

                            );
                          return (x -= i) === r || (x % r == 0 && x / r >= 0);
                        }
                      };
                },
                PSEUDO: function (e, n) {
                  var i,
                    o =
                      E.pseudos[e] ||
                      E.setFilters[e.toLowerCase()] ||
                      t.error("unsupported pseudo: " + e);
                  return o[_]
                    ? o(n)
                    : o.length > 1
                    ? ((i = [e, e, "", n]),
                      E.setFilters.hasOwnProperty(e.toLowerCase())
                        ? r(function (e, t) {
                            for (var r, i = o(e, n), s = i.length; s--; )
                              (r = te(e, i[s])), (e[r] = !(t[r] = i[s]));
                          })
                        : function (e) {
                            return o(e, 0, i);
                          })
                    : o;
                },
              },
              pseudos: {
                not: r(function (e) {
                  var t = [],
                    n = [],
                    i = L(e.replace(ue, "$1"));
                  return i[_]
                    ? r(function (e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--; )
                          (o = s[a]) && (e[a] = !(t[a] = o));
                      })
                    : function (e, r, o) {
                        return (
                          (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: r(function (e) {
                  return function (n) {
                    return t(e, n).length > 0;
                  };
                }),
                contains: r(function (e) {
                  return (
                    (e = e.replace(we, Te)),
                    function (t) {
                      return (t.textContent || C(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: r(function (e) {
                  return (
                    pe.test(e || "") || t.error("unsupported lang: " + e),
                    (e = e.replace(we, Te).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if (
                          (n = Q
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + "-")
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === P;
                },
                focus: function (e) {
                  return (
                    e === O.activeElement &&
                    (!O.hasFocus || O.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: l(!1),
                disabled: l(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !E.pseudos.empty(e);
                },
                header: function (e) {
                  return ye.test(e.nodeName);
                },
                input: function (e) {
                  return me.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: c(function () {
                  return [0];
                }),
                last: c(function (e, t) {
                  return [t - 1];
                }),
                eq: c(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: c(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: c(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: c(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                    e.push(r);
                  return e;
                }),
                gt: c(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }),
          (E.pseudos.nth = E.pseudos.eq);
        for (w in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0,
        })
          E.pseudos[w] = a(w);
        for (w in { submit: !0, reset: !0 }) E.pseudos[w] = u(w);
        return (
          (d.prototype = E.filters = E.pseudos),
          (E.setFilters = new d()),
          (S = t.tokenize =
            function (e, n) {
              var r,
                i,
                o,
                s,
                a,
                u,
                l,
                c = z[e + " "];
              if (c) return n ? 0 : c.slice(0);
              for (a = e, u = [], l = E.preFilter; a; ) {
                (r && !(i = le.exec(a))) ||
                  (i && (a = a.slice(i[0].length) || a), u.push((o = []))),
                  (r = !1),
                  (i = ce.exec(a)) &&
                    ((r = i.shift()),
                    o.push({ value: r, type: i[0].replace(ue, " ") }),
                    (a = a.slice(r.length)));
                for (s in E.filter)
                  !(i = he[s].exec(a)) ||
                    (l[s] && !(i = l[s](i))) ||
                    ((r = i.shift()),
                    o.push({ value: r, type: s, matches: i }),
                    (a = a.slice(r.length)));
                if (!r) break;
              }
              return n ? a.length : a ? t.error(e) : z(e, u).slice(0);
            }),
          (L = t.compile =
            function (e, t) {
              var n,
                r = [],
                i = [],
                o = V[e + " "];
              if (!o) {
                for (t || (t = S(e)), n = t.length; n--; )
                  (o = x(t[n])), o[_] ? r.push(o) : i.push(o);
                (o = V(e, b(i, r))), (o.selector = e);
              }
              return o;
            }),
          (j = t.select =
            function (e, t, n, r) {
              var i,
                o,
                s,
                a,
                u,
                l = "function" == typeof e && e,
                c = !r && S((e = l.selector || e));
              if (((n = n || []), 1 === c.length)) {
                if (
                  ((o = c[0] = c[0].slice(0)),
                  o.length > 2 &&
                    "ID" === (s = o[0]).type &&
                    9 === t.nodeType &&
                    Q &&
                    E.relative[o[1].type])
                ) {
                  if (
                    !(t = (E.find.ID(s.matches[0].replace(we, Te), t) || [])[0])
                  )
                    return n;
                  l && (t = t.parentNode),
                    (e = e.slice(o.shift().value.length));
                }
                for (
                  i = he.needsContext.test(e) ? 0 : o.length;
                  i-- && ((s = o[i]), !E.relative[(a = s.type)]);

                )
                  if (
                    (u = E.find[a]) &&
                    (r = u(
                      s.matches[0].replace(we, Te),
                      (be.test(o[0].type) && f(t.parentNode)) || t
                    ))
                  ) {
                    if ((o.splice(i, 1), !(e = r.length && p(o))))
                      return Z.apply(n, r), n;
                    break;
                  }
              }
              return (
                (l || L(e, c))(
                  r,
                  t,
                  !Q,
                  n,
                  !t || (be.test(e) && f(t.parentNode)) || t
                ),
                n
              );
            }),
          (T.sortStable = _.split("").sort(X).join("") === _),
          (T.detectDuplicates = !!D),
          I(),
          (T.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(O.createElement("fieldset"));
          })),
          i(function (e) {
            return (
              (e.innerHTML = "<a href='#'></a>"),
              "#" === e.firstChild.getAttribute("href")
            );
          }) ||
            o("type|href|height|width", function (e, t, n) {
              if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
          (T.attributes &&
            i(function (e) {
              return (
                (e.innerHTML = "<input/>"),
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
              );
            })) ||
            o("value", function (e, t, n) {
              if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue;
            }),
          i(function (e) {
            return null == e.getAttribute("disabled");
          }) ||
            o(ne, function (e, t, n) {
              var r;
              if (!n)
                return !0 === e[t]
                  ? t.toLowerCase()
                  : (r = e.getAttributeNode(t)) && r.specified
                  ? r.value
                  : null;
            }),
          t
        );
      })(e);
    (Ce.find = ke),
      (Ce.expr = ke.selectors),
      (Ce.expr[":"] = Ce.expr.pseudos),
      (Ce.uniqueSort = Ce.unique = ke.uniqueSort),
      (Ce.text = ke.getText),
      (Ce.isXMLDoc = ke.isXML),
      (Ce.contains = ke.contains),
      (Ce.escapeSelector = ke.escape);
    var Se = function (e, t, n) {
        for (var r = [], i = n !== undefined; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (i && Ce(e).is(n)) break;
            r.push(e);
          }
        return r;
      },
      Le = function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
      je = Ce.expr.match.needsContext,
      Ne = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    (Ce.filter = function (e, t, n) {
      var r = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType
          ? Ce.find.matchesSelector(r, e)
            ? [r]
            : []
          : Ce.find.matches(
              e,
              Ce.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      Ce.fn.extend({
        find: function (e) {
          var t,
            n,
            r = this.length,
            i = this;
          if ("string" != typeof e)
            return this.pushStack(
              Ce(e).filter(function () {
                for (t = 0; t < r; t++) if (Ce.contains(i[t], this)) return !0;
              })
            );
          for (n = this.pushStack([]), t = 0; t < r; t++) Ce.find(e, i[t], n);
          return r > 1 ? Ce.uniqueSort(n) : n;
        },
        filter: function (e) {
          return this.pushStack(s(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(s(this, e || [], !0));
        },
        is: function (e) {
          return !!s(
            this,
            "string" == typeof e && je.test(e) ? Ce(e) : e || [],
            !1
          ).length;
        },
      });
    var Ae,
      De = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((Ce.fn.init = function (e, t, n) {
      var r, i;
      if (!e) return this;
      if (((n = n || Ae), "string" == typeof e)) {
        if (
          !(r =
            "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
              ? [null, e, null]
              : De.exec(e)) ||
          (!r[1] && t)
        )
          return !t || t.jquery
            ? (t || n).find(e)
            : this.constructor(t).find(e);
        if (r[1]) {
          if (
            ((t = t instanceof Ce ? t[0] : t),
            Ce.merge(
              this,
              Ce.parseHTML(
                r[1],
                t && t.nodeType ? t.ownerDocument || t : we,
                !0
              )
            ),
            Ne.test(r[1]) && Ce.isPlainObject(t))
          )
            for (r in t) xe(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this;
        }
        return (
          (i = we.getElementById(r[2])),
          i && ((this[0] = i), (this.length = 1)),
          this
        );
      }
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : xe(e)
        ? n.ready !== undefined
          ? n.ready(e)
          : e(Ce)
        : Ce.makeArray(e, this);
    }).prototype = Ce.fn),
      (Ae = Ce(we));
    var Ie = /^(?:parents|prev(?:Until|All))/,
      Oe = { children: !0, contents: !0, next: !0, prev: !0 };
    Ce.fn.extend({
      has: function (e) {
        var t = Ce(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) if (Ce.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        var n,
          r = 0,
          i = this.length,
          o = [],
          s = "string" != typeof e && Ce(e);
        if (!je.test(e))
          for (; r < i; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (s
                  ? s.index(n) > -1
                  : 1 === n.nodeType && Ce.find.matchesSelector(n, e))
              ) {
                o.push(n);
                break;
              }
        return this.pushStack(o.length > 1 ? Ce.uniqueSort(o) : o);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? de.call(Ce(e), this[0])
            : de.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(Ce.uniqueSort(Ce.merge(this.get(), Ce(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
      Ce.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return Se(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return Se(e, "parentNode", n);
          },
          next: function (e) {
            return a(e, "nextSibling");
          },
          prev: function (e) {
            return a(e, "previousSibling");
          },
          nextAll: function (e) {
            return Se(e, "nextSibling");
          },
          prevAll: function (e) {
            return Se(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return Se(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return Se(e, "previousSibling", n);
          },
          siblings: function (e) {
            return Le((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return Le(e.firstChild);
          },
          contents: function (e) {
            return null != e.contentDocument && ue(e.contentDocument)
              ? e.contentDocument
              : (o(e, "template") && (e = e.content || e),
                Ce.merge([], e.childNodes));
          },
        },
        function (e, t) {
          Ce.fn[e] = function (n, r) {
            var i = Ce.map(this, t, n);
            return (
              "Until" !== e.slice(-5) && (r = n),
              r && "string" == typeof r && (i = Ce.filter(r, i)),
              this.length > 1 &&
                (Oe[e] || Ce.uniqueSort(i), Ie.test(e) && i.reverse()),
              this.pushStack(i)
            );
          };
        }
      );
    var Pe = /[^\x20\t\r\n\f]+/g;
    (Ce.Callbacks = function (e) {
      e = "string" == typeof e ? u(e) : Ce.extend({}, e);
      var t,
        n,
        i,
        o,
        s = [],
        a = [],
        l = -1,
        c = function () {
          for (o = o || e.once, i = t = !0; a.length; l = -1)
            for (n = a.shift(); ++l < s.length; )
              !1 === s[l].apply(n[0], n[1]) &&
                e.stopOnFalse &&
                ((l = s.length), (n = !1));
          e.memory || (n = !1), (t = !1), o && (s = n ? [] : "");
        },
        f = {
          add: function () {
            return (
              s &&
                (n && !t && ((l = s.length - 1), a.push(n)),
                (function t(n) {
                  Ce.each(n, function (n, i) {
                    xe(i)
                      ? (e.unique && f.has(i)) || s.push(i)
                      : i && i.length && "string" !== r(i) && t(i);
                  });
                })(arguments),
                n && !t && c()),
              this
            );
          },
          remove: function () {
            return (
              Ce.each(arguments, function (e, t) {
                for (var n; (n = Ce.inArray(t, s, n)) > -1; )
                  s.splice(n, 1), n <= l && l--;
              }),
              this
            );
          },
          has: function (e) {
            return e ? Ce.inArray(e, s) > -1 : s.length > 0;
          },
          empty: function () {
            return s && (s = []), this;
          },
          disable: function () {
            return (o = a = []), (s = n = ""), this;
          },
          disabled: function () {
            return !s;
          },
          lock: function () {
            return (o = a = []), n || t || (s = n = ""), this;
          },
          locked: function () {
            return !!o;
          },
          fireWith: function (e, n) {
            return (
              o ||
                ((n = n || []),
                (n = [e, n.slice ? n.slice() : n]),
                a.push(n),
                t || c()),
              this
            );
          },
          fire: function () {
            return f.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!i;
          },
        };
      return f;
    }),
      Ce.extend({
        Deferred: function (t) {
          var n = [
              [
                "notify",
                "progress",
                Ce.Callbacks("memory"),
                Ce.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                Ce.Callbacks("once memory"),
                Ce.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                Ce.Callbacks("once memory"),
                Ce.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            r = "pending",
            i = {
              state: function () {
                return r;
              },
              always: function () {
                return o.done(arguments).fail(arguments), this;
              },
              catch: function (e) {
                return i.then(null, e);
              },
              pipe: function () {
                var e = arguments;
                return Ce.Deferred(function (t) {
                  Ce.each(n, function (n, r) {
                    var i = xe(e[r[4]]) && e[r[4]];
                    o[r[1]](function () {
                      var e = i && i.apply(this, arguments);
                      e && xe(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[r[0] + "With"](this, i ? [e] : arguments);
                    });
                  }),
                    (e = null);
                }).promise();
              },
              then: function (t, r, i) {
                function o(t, n, r, i) {
                  return function () {
                    var a = this,
                      u = arguments,
                      f = function () {
                        var e, f;
                        if (!(t < s)) {
                          if ((e = r.apply(a, u)) === n.promise())
                            throw new TypeError("Thenable self-resolution");
                          (f =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then),
                            xe(f)
                              ? i
                                ? f.call(e, o(s, n, l, i), o(s, n, c, i))
                                : (s++,
                                  f.call(
                                    e,
                                    o(s, n, l, i),
                                    o(s, n, c, i),
                                    o(s, n, l, n.notifyWith)
                                  ))
                              : (r !== l && ((a = undefined), (u = [e])),
                                (i || n.resolveWith)(a, u));
                        }
                      },
                      d = i
                        ? f
                        : function () {
                            try {
                              f();
                            } catch (e) {
                              Ce.Deferred.exceptionHook &&
                                Ce.Deferred.exceptionHook(e, d.stackTrace),
                                t + 1 >= s &&
                                  (r !== c && ((a = undefined), (u = [e])),
                                  n.rejectWith(a, u));
                            }
                          };
                    t
                      ? d()
                      : (Ce.Deferred.getStackHook &&
                          (d.stackTrace = Ce.Deferred.getStackHook()),
                        e.setTimeout(d));
                  };
                }
                var s = 0;
                return Ce.Deferred(function (e) {
                  n[0][3].add(o(0, e, xe(i) ? i : l, e.notifyWith)),
                    n[1][3].add(o(0, e, xe(t) ? t : l)),
                    n[2][3].add(o(0, e, xe(r) ? r : c));
                }).promise();
              },
              promise: function (e) {
                return null != e ? Ce.extend(e, i) : i;
              },
            },
            o = {};
          return (
            Ce.each(n, function (e, t) {
              var s = t[2],
                a = t[5];
              (i[t[1]] = s.add),
                a &&
                  s.add(
                    function () {
                      r = a;
                    },
                    n[3 - e][2].disable,
                    n[3 - e][3].disable,
                    n[0][2].lock,
                    n[0][3].lock
                  ),
                s.add(t[3].fire),
                (o[t[0]] = function () {
                  return (
                    o[t[0] + "With"](this === o ? undefined : this, arguments),
                    this
                  );
                }),
                (o[t[0] + "With"] = s.fireWith);
            }),
            i.promise(o),
            t && t.call(o, o),
            o
          );
        },
        when: function (e) {
          var t = arguments.length,
            n = t,
            r = Array(n),
            i = le.call(arguments),
            o = Ce.Deferred(),
            s = function (e) {
              return function (n) {
                (r[e] = this),
                  (i[e] = arguments.length > 1 ? le.call(arguments) : n),
                  --t || o.resolveWith(r, i);
              };
            };
          if (
            t <= 1 &&
            (f(e, o.done(s(n)).resolve, o.reject, !t),
            "pending" === o.state() || xe(i[n] && i[n].then))
          )
            return o.then();
          for (; n--; ) f(i[n], s(n), o.reject);
          return o.promise();
        },
      });
    var Qe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (Ce.Deferred.exceptionHook = function (t, n) {
      e.console &&
        e.console.warn &&
        t &&
        Qe.test(t.name) &&
        e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
      (Ce.readyException = function (t) {
        e.setTimeout(function () {
          throw t;
        });
      });
    var Re = Ce.Deferred();
    (Ce.fn.ready = function (e) {
      return (
        Re.then(e)["catch"](function (e) {
          Ce.readyException(e);
        }),
        this
      );
    }),
      Ce.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (!0 === e ? --Ce.readyWait : Ce.isReady) ||
            ((Ce.isReady = !0),
            (!0 !== e && --Ce.readyWait > 0) || Re.resolveWith(we, [Ce]));
        },
      }),
      (Ce.ready.then = Re.then),
      "complete" === we.readyState ||
      ("loading" !== we.readyState && !we.documentElement.doScroll)
        ? e.setTimeout(Ce.ready)
        : (we.addEventListener("DOMContentLoaded", d),
          e.addEventListener("load", d));
    var qe = function (e, t, n, i, o, s, a) {
        var u = 0,
          l = e.length,
          c = null == n;
        if ("object" === r(n)) {
          o = !0;
          for (u in n) qe(e, t, u, n[u], !0, s, a);
        } else if (
          i !== undefined &&
          ((o = !0),
          xe(i) || (a = !0),
          c &&
            (a
              ? (t.call(e, i), (t = null))
              : ((c = t),
                (t = function (e, t, n) {
                  return c.call(Ce(e), n);
                }))),
          t)
        )
          for (; u < l; u++) t(e[u], n, a ? i : i.call(e[u], u, t(e[u], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : s;
      },
      Fe = /^-ms-/,
      $e = /-([a-z])/g,
      _e = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
    (g.uid = 1),
      (g.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              _e(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var r,
            i = this.cache(e);
          if ("string" == typeof t) i[h(t)] = n;
          else for (r in t) i[h(r)] = t[r];
          return i;
        },
        get: function (e, t) {
          return t === undefined
            ? this.cache(e)
            : e[this.expando] && e[this.expando][h(t)];
        },
        access: function (e, t, n) {
          return t === undefined ||
            (t && "string" == typeof t && n === undefined)
            ? this.get(e, t)
            : (this.set(e, t, n), n !== undefined ? n : t);
        },
        remove: function (e, t) {
          var n,
            r = e[this.expando];
          if (r !== undefined) {
            if (t !== undefined) {
              Array.isArray(t)
                ? (t = t.map(h))
                : ((t = h(t)), (t = t in r ? [t] : t.match(Pe) || [])),
                (n = t.length);
              for (; n--; ) delete r[t[n]];
            }
            (t === undefined || Ce.isEmptyObject(r)) &&
              (e.nodeType
                ? (e[this.expando] = undefined)
                : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return t !== undefined && !Ce.isEmptyObject(t);
        },
      });
    var He = new g(),
      Me = new g(),
      Be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      We = /[A-Z]/g;
    Ce.extend({
      hasData: function (e) {
        return Me.hasData(e) || He.hasData(e);
      },
      data: function (e, t, n) {
        return Me.access(e, t, n);
      },
      removeData: function (e, t) {
        Me.remove(e, t);
      },
      _data: function (e, t, n) {
        return He.access(e, t, n);
      },
      _removeData: function (e, t) {
        He.remove(e, t);
      },
    }),
      Ce.fn.extend({
        data: function (e, t) {
          var n,
            r,
            i,
            o = this[0],
            s = o && o.attributes;
          if (e === undefined) {
            if (
              this.length &&
              ((i = Me.get(o)), 1 === o.nodeType && !He.get(o, "hasDataAttrs"))
            ) {
              for (n = s.length; n--; )
                s[n] &&
                  ((r = s[n].name),
                  0 === r.indexOf("data-") &&
                    ((r = h(r.slice(5))), y(o, r, i[r])));
              He.set(o, "hasDataAttrs", !0);
            }
            return i;
          }
          return "object" == typeof e
            ? this.each(function () {
                Me.set(this, e);
              })
            : qe(
                this,
                function (t) {
                  var n;
                  if (o && t === undefined) {
                    if ((n = Me.get(o, e)) !== undefined) return n;
                    if ((n = y(o, e)) !== undefined) return n;
                  } else
                    this.each(function () {
                      Me.set(this, e, t);
                    });
                },
                null,
                t,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (e) {
          return this.each(function () {
            Me.remove(this, e);
          });
        },
      }),
      Ce.extend({
        queue: function (e, t, n) {
          var r;
          if (e)
            return (
              (t = (t || "fx") + "queue"),
              (r = He.get(e, t)),
              n &&
                (!r || Array.isArray(n)
                  ? (r = He.access(e, t, Ce.makeArray(n)))
                  : r.push(n)),
              r || []
            );
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = Ce.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = Ce._queueHooks(e, t),
            s = function () {
              Ce.dequeue(e, t);
            };
          "inprogress" === i && ((i = n.shift()), r--),
            i &&
              ("fx" === t && n.unshift("inprogress"),
              delete o.stop,
              i.call(e, s, o)),
            !r && o && o.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            He.get(e, n) ||
            He.access(e, n, {
              empty: Ce.Callbacks("once memory").add(function () {
                He.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      Ce.fn.extend({
        queue: function (e, t) {
          var n = 2;
          return (
            "string" != typeof e && ((t = e), (e = "fx"), n--),
            arguments.length < n
              ? Ce.queue(this[0], e)
              : t === undefined
              ? this
              : this.each(function () {
                  var n = Ce.queue(this, e, t);
                  Ce._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && Ce.dequeue(this, e);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            Ce.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            r = 1,
            i = Ce.Deferred(),
            o = this,
            s = this.length,
            a = function () {
              --r || i.resolveWith(o, [o]);
            };
          for (
            "string" != typeof e && ((t = e), (e = undefined)), e = e || "fx";
            s--;

          )
            (n = He.get(o[s], e + "queueHooks")) &&
              n.empty &&
              (r++, n.empty.add(a));
          return a(), i.promise(t);
        },
      });
    var ze = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Ve = new RegExp("^(?:([+-])=|)(" + ze + ")([a-z%]*)$", "i"),
      Ue = ["Top", "Right", "Bottom", "Left"],
      Xe = we.documentElement,
      Ye = function (e) {
        return Ce.contains(e.ownerDocument, e);
      },
      Ge = { composed: !0 };
    Xe.getRootNode &&
      (Ye = function (e) {
        return (
          Ce.contains(e.ownerDocument, e) ||
          e.getRootNode(Ge) === e.ownerDocument
        );
      });
    var Je = function (e, t) {
        return (
          (e = t || e),
          "none" === e.style.display ||
            ("" === e.style.display && Ye(e) && "none" === Ce.css(e, "display"))
        );
      },
      Ke = {};
    Ce.fn.extend({
      show: function () {
        return b(this, !0);
      },
      hide: function () {
        return b(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              Je(this) ? Ce(this).show() : Ce(this).hide();
            });
      },
    });
    var Ze = /^(?:checkbox|radio)$/i,
      et = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      tt = /^$|^module$|\/(?:java|ecma)script/i;
    !(function () {
      var e = we.createDocumentFragment(),
        t = e.appendChild(we.createElement("div")),
        n = we.createElement("input");
      n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        (ve.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (t.innerHTML = "<textarea>x</textarea>"),
        (ve.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
        (t.innerHTML = "<option></option>"),
        (ve.option = !!t.lastChild);
    })();
    var nt = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
    (nt.tbody = nt.tfoot = nt.colgroup = nt.caption = nt.thead),
      (nt.th = nt.td),
      ve.option ||
        (nt.optgroup = nt.option =
          [1, "<select multiple='multiple'>", "</select>"]);
    var rt = /<|&#?\w+;/,
      it = /^key/,
      ot = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      st = /^([^.]*)(?:\.(.+)|)/;
    (Ce.event = {
      global: {},
      add: function (e, t, n, r, i) {
        var o,
          s,
          a,
          u,
          l,
          c,
          f,
          d,
          p,
          h,
          g,
          m = He.get(e);
        if (_e(e))
          for (
            n.handler && ((o = n), (n = o.handler), (i = o.selector)),
              i && Ce.find.matchesSelector(Xe, i),
              n.guid || (n.guid = Ce.guid++),
              (u = m.events) || (u = m.events = Object.create(null)),
              (s = m.handle) ||
                (s = m.handle =
                  function (t) {
                    return void 0 !== Ce && Ce.event.triggered !== t.type
                      ? Ce.event.dispatch.apply(e, arguments)
                      : undefined;
                  }),
              t = (t || "").match(Pe) || [""],
              l = t.length;
            l--;

          )
            (a = st.exec(t[l]) || []),
              (p = g = a[1]),
              (h = (a[2] || "").split(".").sort()),
              p &&
                ((f = Ce.event.special[p] || {}),
                (p = (i ? f.delegateType : f.bindType) || p),
                (f = Ce.event.special[p] || {}),
                (c = Ce.extend(
                  {
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && Ce.expr.match.needsContext.test(i),
                    namespace: h.join("."),
                  },
                  o
                )),
                (d = u[p]) ||
                  ((d = u[p] = []),
                  (d.delegateCount = 0),
                  (f.setup && !1 !== f.setup.call(e, r, h, s)) ||
                    (e.addEventListener && e.addEventListener(p, s))),
                f.add &&
                  (f.add.call(e, c),
                  c.handler.guid || (c.handler.guid = n.guid)),
                i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                (Ce.event.global[p] = !0));
      },
      remove: function (e, t, n, r, i) {
        var o,
          s,
          a,
          u,
          l,
          c,
          f,
          d,
          p,
          h,
          g,
          m = He.hasData(e) && He.get(e);
        if (m && (u = m.events)) {
          for (t = (t || "").match(Pe) || [""], l = t.length; l--; )
            if (
              ((a = st.exec(t[l]) || []),
              (p = g = a[1]),
              (h = (a[2] || "").split(".").sort()),
              p)
            ) {
              for (
                f = Ce.event.special[p] || {},
                  p = (r ? f.delegateType : f.bindType) || p,
                  d = u[p] || [],
                  a =
                    a[2] &&
                    new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  s = o = d.length;
                o--;

              )
                (c = d[o]),
                  (!i && g !== c.origType) ||
                    (n && n.guid !== c.guid) ||
                    (a && !a.test(c.namespace)) ||
                    (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                    (d.splice(o, 1),
                    c.selector && d.delegateCount--,
                    f.remove && f.remove.call(e, c));
              s &&
                !d.length &&
                ((f.teardown && !1 !== f.teardown.call(e, h, m.handle)) ||
                  Ce.removeEvent(e, p, m.handle),
                delete u[p]);
            } else for (p in u) Ce.event.remove(e, p + t[l], n, r, !0);
          Ce.isEmptyObject(u) && He.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        var t,
          n,
          r,
          i,
          o,
          s,
          a = new Array(arguments.length),
          u = Ce.event.fix(e),
          l = (He.get(this, "events") || Object.create(null))[u.type] || [],
          c = Ce.event.special[u.type] || {};
        for (a[0] = u, t = 1; t < arguments.length; t++) a[t] = arguments[t];
        if (
          ((u.delegateTarget = this),
          !c.preDispatch || !1 !== c.preDispatch.call(this, u))
        ) {
          for (
            s = Ce.event.handlers.call(this, u, l), t = 0;
            (i = s[t++]) && !u.isPropagationStopped();

          )
            for (
              u.currentTarget = i.elem, n = 0;
              (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

            )
              (u.rnamespace &&
                !1 !== o.namespace &&
                !u.rnamespace.test(o.namespace)) ||
                ((u.handleObj = o),
                (u.data = o.data),
                (r = (
                  (Ce.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, a)) !== undefined &&
                  !1 === (u.result = r) &&
                  (u.preventDefault(), u.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, u), u.result;
        }
      },
      handlers: function (e, t) {
        var n,
          r,
          i,
          o,
          s,
          a = [],
          u = t.delegateCount,
          l = e.target;
        if (u && l.nodeType && !("click" === e.type && e.button >= 1))
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
              for (o = [], s = {}, n = 0; n < u; n++)
                (r = t[n]),
                  (i = r.selector + " "),
                  s[i] === undefined &&
                    (s[i] = r.needsContext
                      ? Ce(i, this).index(l) > -1
                      : Ce.find(i, this, null, [l]).length),
                  s[i] && o.push(r);
              o.length && a.push({ elem: l, handlers: o });
            }
        return (
          (l = this),
          u < t.length && a.push({ elem: l, handlers: t.slice(u) }),
          a
        );
      },
      addProp: function (e, t) {
        Object.defineProperty(Ce.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: xe(t)
            ? function () {
                if (this.originalEvent) return t(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[e];
              },
          set: function (t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            });
          },
        });
      },
      fix: function (e) {
        return e[Ce.expando] ? e : new Ce.Event(e);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function (e) {
            var t = this || e;
            return (
              Ze.test(t.type) && t.click && o(t, "input") && N(t, "click", C),
              !1
            );
          },
          trigger: function (e) {
            var t = this || e;
            return (
              Ze.test(t.type) && t.click && o(t, "input") && N(t, "click"), !0
            );
          },
          _default: function (e) {
            var t = e.target;
            return (
              (Ze.test(t.type) &&
                t.click &&
                o(t, "input") &&
                He.get(t, "click")) ||
              o(t, "a")
            );
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            e.result !== undefined &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    }),
      (Ce.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (Ce.Event = function (e, t) {
        if (!(this instanceof Ce.Event)) return new Ce.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented ||
              (e.defaultPrevented === undefined && !1 === e.returnValue)
                ? C
                : k),
            (this.target =
              e.target && 3 === e.target.nodeType
                ? e.target.parentNode
                : e.target),
            (this.currentTarget = e.currentTarget),
            (this.relatedTarget = e.relatedTarget))
          : (this.type = e),
          t && Ce.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || Date.now()),
          (this[Ce.expando] = !0);
      }),
      (Ce.Event.prototype = {
        constructor: Ce.Event,
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = C),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = C),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = C),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      Ce.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: function (e) {
            var t = e.button;
            return null == e.which && it.test(e.type)
              ? null != e.charCode
                ? e.charCode
                : e.keyCode
              : !e.which && t !== undefined && ot.test(e.type)
              ? 1 & t
                ? 1
                : 2 & t
                ? 3
                : 4 & t
                ? 2
                : 0
              : e.which;
          },
        },
        Ce.event.addProp
      ),
      Ce.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        Ce.event.special[e] = {
          setup: function () {
            return N(this, e, S), !1;
          },
          trigger: function () {
            return N(this, e), !0;
          },
          delegateType: t,
        };
      }),
      Ce.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, t) {
          Ce.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              var n,
                r = this,
                i = e.relatedTarget,
                o = e.handleObj;
              return (
                (i && (i === r || Ce.contains(r, i))) ||
                  ((e.type = o.origType),
                  (n = o.handler.apply(this, arguments)),
                  (e.type = t)),
                n
              );
            },
          };
        }
      ),
      Ce.fn.extend({
        on: function (e, t, n, r) {
          return j(this, e, t, n, r);
        },
        one: function (e, t, n, r) {
          return j(this, e, t, n, r, 1);
        },
        off: function (e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj)
            return (
              (r = e.handleObj),
              Ce(e.delegateTarget).off(
                r.namespace ? r.origType + "." + r.namespace : r.origType,
                r.selector,
                r.handler
              ),
              this
            );
          if ("object" == typeof e) {
            for (i in e) this.off(i, t, e[i]);
            return this;
          }
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = undefined)),
            !1 === n && (n = k),
            this.each(function () {
              Ce.event.remove(this, e, n, t);
            })
          );
        },
      });
    var at = /<script|<style|<link/i,
      ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
      lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    Ce.extend({
      htmlPrefilter: function (e) {
        return e;
      },
      clone: function (e, t, n) {
        var r,
          i,
          o,
          s,
          a = e.cloneNode(!0),
          u = Ye(e);
        if (
          !(
            ve.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            Ce.isXMLDoc(e)
          )
        )
          for (s = w(a), o = w(e), r = 0, i = o.length; r < i; r++)
            P(o[r], s[r]);
        if (t)
          if (n)
            for (o = o || w(e), s = s || w(a), r = 0, i = o.length; r < i; r++)
              O(o[r], s[r]);
          else O(e, a);
        return (
          (s = w(a, "script")), s.length > 0 && T(s, !u && w(e, "script")), a
        );
      },
      cleanData: function (e) {
        for (
          var t, n, r, i = Ce.event.special, o = 0;
          (n = e[o]) !== undefined;
          o++
        )
          if (_e(n)) {
            if ((t = n[He.expando])) {
              if (t.events)
                for (r in t.events)
                  i[r] ? Ce.event.remove(n, r) : Ce.removeEvent(n, r, t.handle);
              n[He.expando] = undefined;
            }
            n[Me.expando] && (n[Me.expando] = undefined);
          }
      },
    }),
      Ce.fn.extend({
        detach: function (e) {
          return R(this, e, !0);
        },
        remove: function (e) {
          return R(this, e);
        },
        text: function (e) {
          return qe(
            this,
            function (e) {
              return e === undefined
                ? Ce.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return Q(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              A(this, e).appendChild(e);
            }
          });
        },
        prepend: function () {
          return Q(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = A(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return Q(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return Q(this, arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (Ce.cleanData(w(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return Ce.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return qe(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                r = this.length;
              if (e === undefined && 1 === t.nodeType) return t.innerHTML;
              if (
                "string" == typeof e &&
                !at.test(e) &&
                !nt[(et.exec(e) || ["", ""])[1].toLowerCase()]
              ) {
                e = Ce.htmlPrefilter(e);
                try {
                  for (; n < r; n++)
                    (t = this[n] || {}),
                      1 === t.nodeType &&
                        (Ce.cleanData(w(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var e = [];
          return Q(
            this,
            arguments,
            function (t) {
              var n = this.parentNode;
              Ce.inArray(this, e) < 0 &&
                (Ce.cleanData(w(this)), n && n.replaceChild(t, this));
            },
            e
          );
        },
      }),
      Ce.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, t) {
          Ce.fn[e] = function (e) {
            for (var n, r = [], i = Ce(e), o = i.length - 1, s = 0; s <= o; s++)
              (n = s === o ? this : this.clone(!0)),
                Ce(i[s])[t](n),
                fe.apply(r, n.get());
            return this.pushStack(r);
          };
        }
      );
    var ct = new RegExp("^(" + ze + ")(?!px)[a-z%]+$", "i"),
      ft = function (t) {
        var n = t.ownerDocument.defaultView;
        return (n && n.opener) || (n = e), n.getComputedStyle(t);
      },
      dt = function (e, t, n) {
        var r,
          i,
          o = {};
        for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
        r = n.call(e);
        for (i in t) e.style[i] = o[i];
        return r;
      },
      pt = new RegExp(Ue.join("|"), "i");
    !(function () {
      function t() {
        if (c) {
          (l.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (c.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            Xe.appendChild(l).appendChild(c);
          var t = e.getComputedStyle(c);
          (r = "1%" !== t.top),
            (u = 12 === n(t.marginLeft)),
            (c.style.right = "60%"),
            (s = 36 === n(t.right)),
            (i = 36 === n(t.width)),
            (c.style.position = "absolute"),
            (o = 12 === n(c.offsetWidth / 3)),
            Xe.removeChild(l),
            (c = null);
        }
      }
      function n(e) {
        return Math.round(parseFloat(e));
      }
      var r,
        i,
        o,
        s,
        a,
        u,
        l = we.createElement("div"),
        c = we.createElement("div");
      c.style &&
        ((c.style.backgroundClip = "content-box"),
        (c.cloneNode(!0).style.backgroundClip = ""),
        (ve.clearCloneStyle = "content-box" === c.style.backgroundClip),
        Ce.extend(ve, {
          boxSizingReliable: function () {
            return t(), i;
          },
          pixelBoxStyles: function () {
            return t(), s;
          },
          pixelPosition: function () {
            return t(), r;
          },
          reliableMarginLeft: function () {
            return t(), u;
          },
          scrollboxSize: function () {
            return t(), o;
          },
          reliableTrDimensions: function () {
            var t, n, r, i;
            return (
              null == a &&
                ((t = we.createElement("table")),
                (n = we.createElement("tr")),
                (r = we.createElement("div")),
                (t.style.cssText = "position:absolute;left:-11111px"),
                (n.style.height = "1px"),
                (r.style.height = "9px"),
                Xe.appendChild(t).appendChild(n).appendChild(r),
                (i = e.getComputedStyle(n)),
                (a = parseInt(i.height) > 3),
                Xe.removeChild(t)),
              a
            );
          },
        }));
    })();
    var ht = ["Webkit", "Moz", "ms"],
      gt = we.createElement("div").style,
      mt = {},
      yt = /^(none|table(?!-c[ea]).+)/,
      vt = /^--/,
      xt = { position: "absolute", visibility: "hidden", display: "block" },
      bt = { letterSpacing: "0", fontWeight: "400" };
    Ce.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = q(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {},
      style: function (e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i,
            o,
            s,
            a = h(t),
            u = vt.test(t),
            l = e.style;
          if (
            (u || (t = _(a)),
            (s = Ce.cssHooks[t] || Ce.cssHooks[a]),
            n === undefined)
          )
            return s && "get" in s && (i = s.get(e, !1, r)) !== undefined
              ? i
              : l[t];
          (o = typeof n),
            "string" === o &&
              (i = Ve.exec(n)) &&
              i[1] &&
              ((n = v(e, t, i)), (o = "number")),
            null != n &&
              n === n &&
              ("number" !== o ||
                u ||
                (n += (i && i[3]) || (Ce.cssNumber[a] ? "" : "px")),
              ve.clearCloneStyle ||
                "" !== n ||
                0 !== t.indexOf("background") ||
                (l[t] = "inherit"),
              (s && "set" in s && (n = s.set(e, n, r)) === undefined) ||
                (u ? l.setProperty(t, n) : (l[t] = n)));
        }
      },
      css: function (e, t, n, r) {
        var i,
          o,
          s,
          a = h(t);
        return (
          vt.test(t) || (t = _(a)),
          (s = Ce.cssHooks[t] || Ce.cssHooks[a]),
          s && "get" in s && (i = s.get(e, !0, n)),
          i === undefined && (i = q(e, t, r)),
          "normal" === i && t in bt && (i = bt[t]),
          "" === n || n
            ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
            : i
        );
      },
    }),
      Ce.each(["height", "width"], function (e, t) {
        Ce.cssHooks[t] = {
          get: function (e, n, r) {
            if (n)
              return !yt.test(Ce.css(e, "display")) ||
                (e.getClientRects().length && e.getBoundingClientRect().width)
                ? B(e, t, r)
                : dt(e, xt, function () {
                    return B(e, t, r);
                  });
          },
          set: function (e, n, r) {
            var i,
              o = ft(e),
              s = !ve.scrollboxSize() && "absolute" === o.position,
              a = s || r,
              u = a && "border-box" === Ce.css(e, "boxSizing", !1, o),
              l = r ? M(e, t, r, u, o) : 0;
            return (
              u &&
                s &&
                (l -= Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    parseFloat(o[t]) -
                    M(e, t, "border", !1, o) -
                    0.5
                )),
              l &&
                (i = Ve.exec(n)) &&
                "px" !== (i[3] || "px") &&
                ((e.style[t] = n), (n = Ce.css(e, t))),
              H(e, n, l)
            );
          },
        };
      }),
      (Ce.cssHooks.marginLeft = F(ve.reliableMarginLeft, function (e, t) {
        if (t)
          return (
            (parseFloat(q(e, "marginLeft")) ||
              e.getBoundingClientRect().left -
                dt(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      Ce.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        (Ce.cssHooks[e + t] = {
          expand: function (n) {
            for (
              var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
              r < 4;
              r++
            )
              i[e + Ue[r] + t] = o[r] || o[r - 2] || o[0];
            return i;
          },
        }),
          "margin" !== e && (Ce.cssHooks[e + t].set = H);
      }),
      Ce.fn.extend({
        css: function (e, t) {
          return qe(
            this,
            function (e, t, n) {
              var r,
                i,
                o = {},
                s = 0;
              if (Array.isArray(t)) {
                for (r = ft(e), i = t.length; s < i; s++)
                  o[t[s]] = Ce.css(e, t[s], !1, r);
                return o;
              }
              return n !== undefined ? Ce.style(e, t, n) : Ce.css(e, t);
            },
            e,
            t,
            arguments.length > 1
          );
        },
      }),
      (Ce.Tween = W),
      (W.prototype = {
        constructor: W,
        init: function (e, t, n, r, i, o) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = i || Ce.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = o || (Ce.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = W.propHooks[this.prop];
          return e && e.get ? e.get(this) : W.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = W.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t =
                  Ce.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : W.propHooks._default.set(this),
            this
          );
        },
      }),
      (W.prototype.init.prototype = W.prototype),
      (W.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType ||
              (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : ((t = Ce.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
          },
          set: function (e) {
            Ce.fx.step[e.prop]
              ? Ce.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (!Ce.cssHooks[e.prop] && null == e.elem.style[_(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : Ce.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }),
      (W.propHooks.scrollTop = W.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (Ce.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (Ce.fx = W.prototype.init),
      (Ce.fx.step = {});
    var wt,
      Tt,
      Et = /^(?:toggle|show|hide)$/,
      Ct = /queueHooks$/;
    (Ce.Animation = Ce.extend(J, {
      tweeners: {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t);
            return v(n.elem, e, Ve.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        xe(e) ? ((t = e), (e = ["*"])) : (e = e.match(Pe));
        for (var n, r = 0, i = e.length; r < i; r++)
          (n = e[r]),
            (J.tweeners[n] = J.tweeners[n] || []),
            J.tweeners[n].unshift(t);
      },
      prefilters: [Y],
      prefilter: function (e, t) {
        t ? J.prefilters.unshift(e) : J.prefilters.push(e);
      },
    })),
      (Ce.speed = function (e, t, n) {
        var r =
          e && "object" == typeof e
            ? Ce.extend({}, e)
            : {
                complete: n || (!n && t) || (xe(e) && e),
                duration: e,
                easing: (n && t) || (t && !xe(t) && t),
              };
        return (
          Ce.fx.off
            ? (r.duration = 0)
            : "number" != typeof r.duration &&
              (r.duration in Ce.fx.speeds
                ? (r.duration = Ce.fx.speeds[r.duration])
                : (r.duration = Ce.fx.speeds._default)),
          (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
          (r.old = r.complete),
          (r.complete = function () {
            xe(r.old) && r.old.call(this), r.queue && Ce.dequeue(this, r.queue);
          }),
          r
        );
      }),
      Ce.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(Je)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, r);
        },
        animate: function (e, t, n, r) {
          var i = Ce.isEmptyObject(e),
            o = Ce.speed(t, n, r),
            s = function () {
              var t = J(this, Ce.extend({}, e), o);
              (i || He.get(this, "finish")) && t.stop(!0);
            };
          return (
            (s.finish = s),
            i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
          );
        },
        stop: function (e, t, n) {
          var r = function (e) {
            var t = e.stop;
            delete e.stop, t(n);
          };
          return (
            "string" != typeof e && ((n = t), (t = e), (e = undefined)),
            t && this.queue(e || "fx", []),
            this.each(function () {
              var t = !0,
                i = null != e && e + "queueHooks",
                o = Ce.timers,
                s = He.get(this);
              if (i) s[i] && s[i].stop && r(s[i]);
              else for (i in s) s[i] && s[i].stop && Ct.test(i) && r(s[i]);
              for (i = o.length; i--; )
                o[i].elem !== this ||
                  (null != e && o[i].queue !== e) ||
                  (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
              (!t && n) || Ce.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            !1 !== e && (e = e || "fx"),
            this.each(function () {
              var t,
                n = He.get(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = Ce.timers,
                s = r ? r.length : 0;
              for (
                n.finish = !0,
                  Ce.queue(this, e, []),
                  i && i.stop && i.stop.call(this, !0),
                  t = o.length;
                t--;

              )
                o[t].elem === this &&
                  o[t].queue === e &&
                  (o[t].anim.stop(!0), o.splice(t, 1));
              for (t = 0; t < s; t++)
                r[t] && r[t].finish && r[t].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      Ce.each(["toggle", "show", "hide"], function (e, t) {
        var n = Ce.fn[t];
        Ce.fn[t] = function (e, r, i) {
          return null == e || "boolean" == typeof e
            ? n.apply(this, arguments)
            : this.animate(U(t, !0), e, r, i);
        };
      }),
      Ce.each(
        {
          slideDown: U("show"),
          slideUp: U("hide"),
          slideToggle: U("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, t) {
          Ce.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r);
          };
        }
      ),
      (Ce.timers = []),
      (Ce.fx.tick = function () {
        var e,
          t = 0,
          n = Ce.timers;
        for (wt = Date.now(); t < n.length; t++)
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || Ce.fx.stop(), (wt = undefined);
      }),
      (Ce.fx.timer = function (e) {
        Ce.timers.push(e), Ce.fx.start();
      }),
      (Ce.fx.interval = 13),
      (Ce.fx.start = function () {
        Tt || ((Tt = !0), z());
      }),
      (Ce.fx.stop = function () {
        Tt = null;
      }),
      (Ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (Ce.fn.delay = function (t, n) {
        return (
          (t = Ce.fx ? Ce.fx.speeds[t] || t : t),
          (n = n || "fx"),
          this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
              e.clearTimeout(i);
            };
          })
        );
      }),
      (function () {
        var e = we.createElement("input"),
          t = we.createElement("select"),
          n = t.appendChild(we.createElement("option"));
        (e.type = "checkbox"),
          (ve.checkOn = "" !== e.value),
          (ve.optSelected = n.selected),
          (e = we.createElement("input")),
          (e.value = "t"),
          (e.type = "radio"),
          (ve.radioValue = "t" === e.value);
      })();
    var kt,
      St = Ce.expr.attrHandle;
    Ce.fn.extend({
      attr: function (e, t) {
        return qe(this, Ce.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          Ce.removeAttr(this, e);
        });
      },
    }),
      Ce.extend({
        attr: function (e, t, n) {
          var r,
            i,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return "undefined" == typeof e.getAttribute
              ? Ce.prop(e, t, n)
              : ((1 === o && Ce.isXMLDoc(e)) ||
                  (i =
                    Ce.attrHooks[t.toLowerCase()] ||
                    (Ce.expr.match.bool.test(t) ? kt : undefined)),
                n !== undefined
                  ? null === n
                    ? void Ce.removeAttr(e, t)
                    : i && "set" in i && (r = i.set(e, n, t)) !== undefined
                    ? r
                    : (e.setAttribute(t, n + ""), n)
                  : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : ((r = Ce.find.attr(e, t)), null == r ? undefined : r));
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!ve.radioValue && "radio" === t && o(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            r = 0,
            i = t && t.match(Pe);
          if (i && 1 === e.nodeType)
            for (; (n = i[r++]); ) e.removeAttribute(n);
        },
      }),
      (kt = {
        set: function (e, t, n) {
          return !1 === t ? Ce.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      Ce.each(Ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = St[t] || Ce.find.attr;
        St[t] = function (e, t, r) {
          var i,
            o,
            s = t.toLowerCase();
          return (
            r ||
              ((o = St[s]),
              (St[s] = i),
              (i = null != n(e, t, r) ? s : null),
              (St[s] = o)),
            i
          );
        };
      });
    var Lt = /^(?:input|select|textarea|button)$/i,
      jt = /^(?:a|area)$/i;
    Ce.fn.extend({
      prop: function (e, t) {
        return qe(this, Ce.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[Ce.propFix[e] || e];
        });
      },
    }),
      Ce.extend({
        prop: function (e, t, n) {
          var r,
            i,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return (
              (1 === o && Ce.isXMLDoc(e)) ||
                ((t = Ce.propFix[t] || t), (i = Ce.propHooks[t])),
              n !== undefined
                ? i && "set" in i && (r = i.set(e, n, t)) !== undefined
                  ? r
                  : (e[t] = n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = Ce.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : Lt.test(e.nodeName) || (jt.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      ve.optSelected ||
        (Ce.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      Ce.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          Ce.propFix[this.toLowerCase()] = this;
        }
      ),
      Ce.fn.extend({
        addClass: function (e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            a,
            u = 0;
          if (xe(e))
            return this.each(function (t) {
              Ce(this).addClass(e.call(this, t, Z(this)));
            });
          if (((t = ee(e)), t.length))
            for (; (n = this[u++]); )
              if (((i = Z(n)), (r = 1 === n.nodeType && " " + K(i) + " "))) {
                for (s = 0; (o = t[s++]); )
                  r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                (a = K(r)), i !== a && n.setAttribute("class", a);
              }
          return this;
        },
        removeClass: function (e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            a,
            u = 0;
          if (xe(e))
            return this.each(function (t) {
              Ce(this).removeClass(e.call(this, t, Z(this)));
            });
          if (!arguments.length) return this.attr("class", "");
          if (((t = ee(e)), t.length))
            for (; (n = this[u++]); )
              if (((i = Z(n)), (r = 1 === n.nodeType && " " + K(i) + " "))) {
                for (s = 0; (o = t[s++]); )
                  for (; r.indexOf(" " + o + " ") > -1; )
                    r = r.replace(" " + o + " ", " ");
                (a = K(r)), i !== a && n.setAttribute("class", a);
              }
          return this;
        },
        toggleClass: function (e, t) {
          var n = typeof e,
            r = "string" === n || Array.isArray(e);
          return "boolean" == typeof t && r
            ? t
              ? this.addClass(e)
              : this.removeClass(e)
            : xe(e)
            ? this.each(function (n) {
                Ce(this).toggleClass(e.call(this, n, Z(this), t), t);
              })
            : this.each(function () {
                var t, i, o, s;
                if (r)
                  for (i = 0, o = Ce(this), s = ee(e); (t = s[i++]); )
                    o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                  (e !== undefined && "boolean" !== n) ||
                    ((t = Z(this)),
                    t && He.set(this, "__className__", t),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        t || !1 === e ? "" : He.get(this, "__className__") || ""
                      ));
              });
        },
        hasClass: function (e) {
          var t,
            n,
            r = 0;
          for (t = " " + e + " "; (n = this[r++]); )
            if (1 === n.nodeType && (" " + K(Z(n)) + " ").indexOf(t) > -1)
              return !0;
          return !1;
        },
      });
    var Nt = /\r/g;
    Ce.fn.extend({
      val: function (e) {
        var t,
          n,
          r,
          i = this[0];
        {
          if (arguments.length)
            return (
              (r = xe(e)),
              this.each(function (n) {
                var i;
                1 === this.nodeType &&
                  ((i = r ? e.call(this, n, Ce(this).val()) : e),
                  null == i
                    ? (i = "")
                    : "number" == typeof i
                    ? (i += "")
                    : Array.isArray(i) &&
                      (i = Ce.map(i, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    Ce.valHooks[this.type] ||
                    Ce.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    t.set(this, i, "value") !== undefined) ||
                    (this.value = i));
              })
            );
          if (i)
            return (t =
              Ce.valHooks[i.type] || Ce.valHooks[i.nodeName.toLowerCase()]) &&
              "get" in t &&
              (n = t.get(i, "value")) !== undefined
              ? n
              : ((n = i.value),
                "string" == typeof n ? n.replace(Nt, "") : null == n ? "" : n);
        }
      },
    }),
      Ce.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = Ce.find.attr(e, "value");
              return null != t ? t : K(Ce.text(e));
            },
          },
          select: {
            get: function (e) {
              var t,
                n,
                r,
                i = e.options,
                s = e.selectedIndex,
                a = "select-one" === e.type,
                u = a ? null : [],
                l = a ? s + 1 : i.length;
              for (r = s < 0 ? l : a ? s : 0; r < l; r++)
                if (
                  ((n = i[r]),
                  (n.selected || r === s) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !o(n.parentNode, "optgroup")))
                ) {
                  if (((t = Ce(n).val()), a)) return t;
                  u.push(t);
                }
              return u;
            },
            set: function (e, t) {
              for (
                var n, r, i = e.options, o = Ce.makeArray(t), s = i.length;
                s--;

              )
                (r = i[s]),
                  (r.selected =
                    Ce.inArray(Ce.valHooks.option.get(r), o) > -1) && (n = !0);
              return n || (e.selectedIndex = -1), o;
            },
          },
        },
      }),
      Ce.each(["radio", "checkbox"], function () {
        (Ce.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t))
              return (e.checked = Ce.inArray(Ce(e).val(), t) > -1);
          },
        }),
          ve.checkOn ||
            (Ce.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      }),
      (ve.focusin = "onfocusin" in e);
    var At = /^(?:focusinfocus|focusoutblur)$/,
      Dt = function (e) {
        e.stopPropagation();
      };
    Ce.extend(Ce.event, {
      trigger: function (t, n, r, i) {
        var o,
          s,
          a,
          u,
          l,
          c,
          f,
          d,
          p = [r || we],
          h = ge.call(t, "type") ? t.type : t,
          g = ge.call(t, "namespace") ? t.namespace.split(".") : [];
        if (
          ((s = d = a = r = r || we),
          3 !== r.nodeType &&
            8 !== r.nodeType &&
            !At.test(h + Ce.event.triggered) &&
            (h.indexOf(".") > -1 &&
              ((g = h.split(".")), (h = g.shift()), g.sort()),
            (l = h.indexOf(":") < 0 && "on" + h),
            (t = t[Ce.expando]
              ? t
              : new Ce.Event(h, "object" == typeof t && t)),
            (t.isTrigger = i ? 2 : 3),
            (t.namespace = g.join(".")),
            (t.rnamespace = t.namespace
              ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = undefined),
            t.target || (t.target = r),
            (n = null == n ? [t] : Ce.makeArray(n, [t])),
            (f = Ce.event.special[h] || {}),
            i || !f.trigger || !1 !== f.trigger.apply(r, n)))
        ) {
          if (!i && !f.noBubble && !be(r)) {
            for (
              u = f.delegateType || h, At.test(u + h) || (s = s.parentNode);
              s;
              s = s.parentNode
            )
              p.push(s), (a = s);
            a === (r.ownerDocument || we) &&
              p.push(a.defaultView || a.parentWindow || e);
          }
          for (o = 0; (s = p[o++]) && !t.isPropagationStopped(); )
            (d = s),
              (t.type = o > 1 ? u : f.bindType || h),
              (c =
                (He.get(s, "events") || Object.create(null))[t.type] &&
                He.get(s, "handle")),
              c && c.apply(s, n),
              (c = l && s[l]) &&
                c.apply &&
                _e(s) &&
                ((t.result = c.apply(s, n)),
                !1 === t.result && t.preventDefault());
          return (
            (t.type = h),
            i ||
              t.isDefaultPrevented() ||
              (f._default && !1 !== f._default.apply(p.pop(), n)) ||
              !_e(r) ||
              (l &&
                xe(r[h]) &&
                !be(r) &&
                ((a = r[l]),
                a && (r[l] = null),
                (Ce.event.triggered = h),
                t.isPropagationStopped() && d.addEventListener(h, Dt),
                r[h](),
                t.isPropagationStopped() && d.removeEventListener(h, Dt),
                (Ce.event.triggered = undefined),
                a && (r[l] = a))),
            t.result
          );
        }
      },
      simulate: function (e, t, n) {
        var r = Ce.extend(new Ce.Event(), n, { type: e, isSimulated: !0 });
        Ce.event.trigger(r, null, t);
      },
    }),
      Ce.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            Ce.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return Ce.event.trigger(e, t, n, !0);
        },
      }),
      ve.focusin ||
        Ce.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          var n = function (e) {
            Ce.event.simulate(t, e.target, Ce.event.fix(e));
          };
          Ce.event.special[t] = {
            setup: function () {
              var r = this.ownerDocument || this.document || this,
                i = He.access(r, t);
              i || r.addEventListener(e, n, !0), He.access(r, t, (i || 0) + 1);
            },
            teardown: function () {
              var r = this.ownerDocument || this.document || this,
                i = He.access(r, t) - 1;
              i
                ? He.access(r, t, i)
                : (r.removeEventListener(e, n, !0), He.remove(r, t));
            },
          };
        });
    var It = e.location,
      Ot = { guid: Date.now() },
      Pt = /\?/;
    Ce.parseXML = function (t) {
      var n;
      if (!t || "string" != typeof t) return null;
      try {
        n = new e.DOMParser().parseFromString(t, "text/xml");
      } catch (e) {
        n = undefined;
      }
      return (
        (n && !n.getElementsByTagName("parsererror").length) ||
          Ce.error("Invalid XML: " + t),
        n
      );
    };
    var Qt = /\[\]$/,
      Rt = /\r?\n/g,
      qt = /^(?:submit|button|image|reset|file)$/i,
      Ft = /^(?:input|select|textarea|keygen)/i;
    (Ce.param = function (e, t) {
      var n,
        r = [],
        i = function (e, t) {
          var n = xe(t) ? t() : t;
          r[r.length] =
            encodeURIComponent(e) +
            "=" +
            encodeURIComponent(null == n ? "" : n);
        };
      if (null == e) return "";
      if (Array.isArray(e) || (e.jquery && !Ce.isPlainObject(e)))
        Ce.each(e, function () {
          i(this.name, this.value);
        });
      else for (n in e) te(n, e[n], t, i);
      return r.join("&");
    }),
      Ce.fn.extend({
        serialize: function () {
          return Ce.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = Ce.prop(this, "elements");
            return e ? Ce.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !Ce(this).is(":disabled") &&
                Ft.test(this.nodeName) &&
                !qt.test(e) &&
                (this.checked || !Ze.test(e))
              );
            })
            .map(function (e, t) {
              var n = Ce(this).val();
              return null == n
                ? null
                : Array.isArray(n)
                ? Ce.map(n, function (e) {
                    return { name: t.name, value: e.replace(Rt, "\r\n") };
                  })
                : { name: t.name, value: n.replace(Rt, "\r\n") };
            })
            .get();
        },
      });
    var $t = /%20/g,
      _t = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Wt = /^(?:GET|HEAD)$/,
      zt = /^\/\//,
      Vt = {},
      Ut = {},
      Xt = "*/".concat("*"),
      Yt = we.createElement("a");
    (Yt.href = It.href),
      Ce.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: It.href,
          type: "GET",
          isLocal: Bt.test(It.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Xt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": Ce.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? ie(ie(e, Ce.ajaxSettings), t) : ie(Ce.ajaxSettings, e);
        },
        ajaxPrefilter: ne(Vt),
        ajaxTransport: ne(Ut),
        ajax: function (t, n) {
          function r(t, n, r, a) {
            var l,
              d,
              p,
              b,
              w,
              T = n;
            c ||
              ((c = !0),
              u && e.clearTimeout(u),
              (i = undefined),
              (s = a || ""),
              (E.readyState = t > 0 ? 4 : 0),
              (l = (t >= 200 && t < 300) || 304 === t),
              r && (b = oe(h, E, r)),
              !l &&
                Ce.inArray("script", h.dataTypes) > -1 &&
                (h.converters["text script"] = function () {}),
              (b = se(h, b, E, l)),
              l
                ? (h.ifModified &&
                    ((w = E.getResponseHeader("Last-Modified")),
                    w && (Ce.lastModified[o] = w),
                    (w = E.getResponseHeader("etag")) && (Ce.etag[o] = w)),
                  204 === t || "HEAD" === h.type
                    ? (T = "nocontent")
                    : 304 === t
                    ? (T = "notmodified")
                    : ((T = b.state), (d = b.data), (p = b.error), (l = !p)))
                : ((p = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
              (E.status = t),
              (E.statusText = (n || T) + ""),
              l ? y.resolveWith(g, [d, T, E]) : y.rejectWith(g, [E, T, p]),
              E.statusCode(x),
              (x = undefined),
              f &&
                m.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? d : p]),
              v.fireWith(g, [E, T]),
              f &&
                (m.trigger("ajaxComplete", [E, h]),
                --Ce.active || Ce.event.trigger("ajaxStop")));
          }
          "object" == typeof t && ((n = t), (t = undefined)), (n = n || {});
          var i,
            o,
            s,
            a,
            u,
            l,
            c,
            f,
            d,
            p,
            h = Ce.ajaxSetup({}, n),
            g = h.context || h,
            m = h.context && (g.nodeType || g.jquery) ? Ce(g) : Ce.event,
            y = Ce.Deferred(),
            v = Ce.Callbacks("once memory"),
            x = h.statusCode || {},
            b = {},
            w = {},
            T = "canceled",
            E = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (c) {
                  if (!a)
                    for (a = {}; (t = Mt.exec(s)); )
                      a[t[1].toLowerCase() + " "] = (
                        a[t[1].toLowerCase() + " "] || []
                      ).concat(t[2]);
                  t = a[e.toLowerCase() + " "];
                }
                return null == t ? null : t.join(", ");
              },
              getAllResponseHeaders: function () {
                return c ? s : null;
              },
              setRequestHeader: function (e, t) {
                return (
                  null == c &&
                    ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                    (b[e] = t)),
                  this
                );
              },
              overrideMimeType: function (e) {
                return null == c && (h.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (c) E.always(e[E.status]);
                  else for (t in e) x[t] = [x[t], e[t]];
                return this;
              },
              abort: function (e) {
                var t = e || T;
                return i && i.abort(t), r(0, t), this;
              },
            };
          if (
            (y.promise(E),
            (h.url = ((t || h.url || It.href) + "").replace(
              zt,
              It.protocol + "//"
            )),
            (h.type = n.method || n.type || h.method || h.type),
            (h.dataTypes = (h.dataType || "*").toLowerCase().match(Pe) || [""]),
            null == h.crossDomain)
          ) {
            l = we.createElement("a");
            try {
              (l.href = h.url),
                (l.href = l.href),
                (h.crossDomain =
                  Yt.protocol + "//" + Yt.host != l.protocol + "//" + l.host);
            } catch (e) {
              h.crossDomain = !0;
            }
          }
          if (
            (h.data &&
              h.processData &&
              "string" != typeof h.data &&
              (h.data = Ce.param(h.data, h.traditional)),
            re(Vt, h, n, E),
            c)
          )
            return E;
          (f = Ce.event && h.global),
            f && 0 == Ce.active++ && Ce.event.trigger("ajaxStart"),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !Wt.test(h.type)),
            (o = h.url.replace(_t, "")),
            h.hasContent
              ? h.data &&
                h.processData &&
                0 ===
                  (h.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (h.data = h.data.replace($t, "+"))
              : ((p = h.url.slice(o.length)),
                h.data &&
                  (h.processData || "string" == typeof h.data) &&
                  ((o += (Pt.test(o) ? "&" : "?") + h.data), delete h.data),
                !1 === h.cache &&
                  ((o = o.replace(Ht, "$1")),
                  (p = (Pt.test(o) ? "&" : "?") + "_=" + Ot.guid++ + p)),
                (h.url = o + p)),
            h.ifModified &&
              (Ce.lastModified[o] &&
                E.setRequestHeader("If-Modified-Since", Ce.lastModified[o]),
              Ce.etag[o] && E.setRequestHeader("If-None-Match", Ce.etag[o])),
            ((h.data && h.hasContent && !1 !== h.contentType) ||
              n.contentType) &&
              E.setRequestHeader("Content-Type", h.contentType),
            E.setRequestHeader(
              "Accept",
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                    ("*" !== h.dataTypes[0] ? ", " + Xt + "; q=0.01" : "")
                : h.accepts["*"]
            );
          for (d in h.headers) E.setRequestHeader(d, h.headers[d]);
          if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
            return E.abort();
          if (
            ((T = "abort"),
            v.add(h.complete),
            E.done(h.success),
            E.fail(h.error),
            (i = re(Ut, h, n, E)))
          ) {
            if (((E.readyState = 1), f && m.trigger("ajaxSend", [E, h]), c))
              return E;
            h.async &&
              h.timeout > 0 &&
              (u = e.setTimeout(function () {
                E.abort("timeout");
              }, h.timeout));
            try {
              (c = !1), i.send(b, r);
            } catch (e) {
              if (c) throw e;
              r(-1, e);
            }
          } else r(-1, "No Transport");
          return E;
        },
        getJSON: function (e, t, n) {
          return Ce.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return Ce.get(e, undefined, t, "script");
        },
      }),
      Ce.each(["get", "post"], function (e, t) {
        Ce[t] = function (e, n, r, i) {
          return (
            xe(n) && ((i = i || r), (r = n), (n = undefined)),
            Ce.ajax(
              Ce.extend(
                { url: e, type: t, dataType: i, data: n, success: r },
                Ce.isPlainObject(e) && e
              )
            )
          );
        };
      }),
      Ce.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers)
          "content-type" === t.toLowerCase() &&
            (e.contentType = e.headers[t] || "");
      }),
      (Ce._evalUrl = function (e, t, n) {
        return Ce.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: { "text script": function () {} },
          dataFilter: function (e) {
            Ce.globalEval(e, t, n);
          },
        });
      }),
      Ce.fn.extend({
        wrapAll: function (e) {
          var t;
          return (
            this[0] &&
              (xe(e) && (e = e.call(this[0])),
              (t = Ce(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (e) {
          return xe(e)
            ? this.each(function (t) {
                Ce(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                var t = Ce(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
        },
        wrap: function (e) {
          var t = xe(e);
          return this.each(function (n) {
            Ce(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function (e) {
          return (
            this.parent(e)
              .not("body")
              .each(function () {
                Ce(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (Ce.expr.pseudos.hidden = function (e) {
        return !Ce.expr.pseudos.visible(e);
      }),
      (Ce.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (Ce.ajaxSettings.xhr = function () {
        try {
          return new e.XMLHttpRequest();
        } catch (e) {}
      });
    var Gt = { 0: 200, 1223: 204 },
      Jt = Ce.ajaxSettings.xhr();
    (ve.cors = !!Jt && "withCredentials" in Jt),
      (ve.ajax = Jt = !!Jt),
      Ce.ajaxTransport(function (t) {
        var n, r;
        if (ve.cors || (Jt && !t.crossDomain))
          return {
            send: function (i, o) {
              var s,
                a = t.xhr();
              if (
                (a.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
              )
                for (s in t.xhrFields) a[s] = t.xhrFields[s];
              t.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  i["X-Requested-With"] ||
                  (i["X-Requested-With"] = "XMLHttpRequest");
              for (s in i) a.setRequestHeader(s, i[s]);
              (n = function (e) {
                return function () {
                  n &&
                    ((n =
                      r =
                      a.onload =
                      a.onerror =
                      a.onabort =
                      a.ontimeout =
                      a.onreadystatechange =
                        null),
                    "abort" === e
                      ? a.abort()
                      : "error" === e
                      ? "number" != typeof a.status
                        ? o(0, "error")
                        : o(a.status, a.statusText)
                      : o(
                          Gt[a.status] || a.status,
                          a.statusText,
                          "text" !== (a.responseType || "text") ||
                            "string" != typeof a.responseText
                            ? { binary: a.response }
                            : { text: a.responseText },
                          a.getAllResponseHeaders()
                        ));
                };
              }),
                (a.onload = n()),
                (r = a.onerror = a.ontimeout = n("error")),
                a.onabort !== undefined
                  ? (a.onabort = r)
                  : (a.onreadystatechange = function () {
                      4 === a.readyState &&
                        e.setTimeout(function () {
                          n && r();
                        });
                    }),
                (n = n("abort"));
              try {
                a.send((t.hasContent && t.data) || null);
              } catch (e) {
                if (n) throw e;
              }
            },
            abort: function () {
              n && n();
            },
          };
      }),
      Ce.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      Ce.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (e) {
            return Ce.globalEval(e), e;
          },
        },
      }),
      Ce.ajaxPrefilter("script", function (e) {
        e.cache === undefined && (e.cache = !1),
          e.crossDomain && (e.type = "GET");
      }),
      Ce.ajaxTransport("script", function (e) {
        if (e.crossDomain || e.scriptAttrs) {
          var t, n;
          return {
            send: function (r, i) {
              (t = Ce("<script>")
                .attr(e.scriptAttrs || {})
                .prop({ charset: e.scriptCharset, src: e.url })
                .on(
                  "load error",
                  (n = function (e) {
                    t.remove(),
                      (n = null),
                      e && i("error" === e.type ? 404 : 200, e.type);
                  })
                )),
                we.head.appendChild(t[0]);
            },
            abort: function () {
              n && n();
            },
          };
        }
      });
    var Kt = [],
      Zt = /(=)\?(?=&|$)|\?\?/;
    Ce.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Kt.pop() || Ce.expando + "_" + Ot.guid++;
        return (this[e] = !0), e;
      },
    }),
      Ce.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i,
          o,
          s,
          a =
            !1 !== t.jsonp &&
            (Zt.test(t.url)
              ? "url"
              : "string" == typeof t.data &&
                0 ===
                  (t.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Zt.test(t.data) &&
                "data");
        if (a || "jsonp" === t.dataTypes[0])
          return (
            (i = t.jsonpCallback =
              xe(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
            a
              ? (t[a] = t[a].replace(Zt, "$1" + i))
              : !1 !== t.jsonp &&
                (t.url += (Pt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            (t.converters["script json"] = function () {
              return s || Ce.error(i + " was not called"), s[0];
            }),
            (t.dataTypes[0] = "json"),
            (o = e[i]),
            (e[i] = function () {
              s = arguments;
            }),
            r.always(function () {
              o === undefined ? Ce(e).removeProp(i) : (e[i] = o),
                t[i] && ((t.jsonpCallback = n.jsonpCallback), Kt.push(i)),
                s && xe(o) && o(s[0]),
                (s = o = undefined);
            }),
            "script"
          );
      }),
      (ve.createHTMLDocument = (function () {
        var e = we.implementation.createHTMLDocument("").body;
        return (
          (e.innerHTML = "<form></form><form></form>"),
          2 === e.childNodes.length
        );
      })()),
      (Ce.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && ((n = t), (t = !1));
        var r, i, o;
        return (
          t ||
            (ve.createHTMLDocument
              ? ((t = we.implementation.createHTMLDocument("")),
                (r = t.createElement("base")),
                (r.href = we.location.href),
                t.head.appendChild(r))
              : (t = we)),
          (i = Ne.exec(e)),
          (o = !n && []),
          i
            ? [t.createElement(i[1])]
            : ((i = E([e], t, o)),
              o && o.length && Ce(o).remove(),
              Ce.merge([], i.childNodes))
        );
      }),
      (Ce.fn.load = function (e, t, n) {
        var r,
          i,
          o,
          s = this,
          a = e.indexOf(" ");
        return (
          a > -1 && ((r = K(e.slice(a))), (e = e.slice(0, a))),
          xe(t)
            ? ((n = t), (t = undefined))
            : t && "object" == typeof t && (i = "POST"),
          s.length > 0 &&
            Ce.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
              .done(function (e) {
                (o = arguments),
                  s.html(r ? Ce("<div>").append(Ce.parseHTML(e)).find(r) : e);
              })
              .always(
                n &&
                  function (e, t) {
                    s.each(function () {
                      n.apply(this, o || [e.responseText, t, e]);
                    });
                  }
              ),
          this
        );
      }),
      (Ce.expr.pseudos.animated = function (e) {
        return Ce.grep(Ce.timers, function (t) {
          return e === t.elem;
        }).length;
      }),
      (Ce.offset = {
        setOffset: function (e, t, n) {
          var r,
            i,
            o,
            s,
            a,
            u,
            l,
            c = Ce.css(e, "position"),
            f = Ce(e),
            d = {};
          "static" === c && (e.style.position = "relative"),
            (a = f.offset()),
            (o = Ce.css(e, "top")),
            (u = Ce.css(e, "left")),
            (l =
              ("absolute" === c || "fixed" === c) &&
              (o + u).indexOf("auto") > -1),
            l
              ? ((r = f.position()), (s = r.top), (i = r.left))
              : ((s = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
            xe(t) && (t = t.call(e, n, Ce.extend({}, a))),
            null != t.top && (d.top = t.top - a.top + s),
            null != t.left && (d.left = t.left - a.left + i),
            "using" in t
              ? t.using.call(e, d)
              : ("number" == typeof d.top && (d.top += "px"),
                "number" == typeof d.left && (d.left += "px"),
                f.css(d));
        },
      }),
      Ce.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return e === undefined
              ? this
              : this.each(function (t) {
                  Ce.offset.setOffset(this, e, t);
                });
          var t,
            n,
            r = this[0];
          if (r)
            return r.getClientRects().length
              ? ((t = r.getBoundingClientRect()),
                (n = r.ownerDocument.defaultView),
                { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
              : { top: 0, left: 0 };
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n,
              r = this[0],
              i = { top: 0, left: 0 };
            if ("fixed" === Ce.css(r, "position"))
              t = r.getBoundingClientRect();
            else {
              for (
                t = this.offset(),
                  n = r.ownerDocument,
                  e = r.offsetParent || n.documentElement;
                e &&
                (e === n.body || e === n.documentElement) &&
                "static" === Ce.css(e, "position");

              )
                e = e.parentNode;
              e &&
                e !== r &&
                1 === e.nodeType &&
                ((i = Ce(e).offset()),
                (i.top += Ce.css(e, "borderTopWidth", !0)),
                (i.left += Ce.css(e, "borderLeftWidth", !0)));
            }
            return {
              top: t.top - i.top - Ce.css(r, "marginTop", !0),
              left: t.left - i.left - Ce.css(r, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e && "static" === Ce.css(e, "position");

            )
              e = e.offsetParent;
            return e || Xe;
          });
        },
      }),
      Ce.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (e, t) {
          var n = "pageYOffset" === t;
          Ce.fn[e] = function (r) {
            return qe(
              this,
              function (e, r, i) {
                var o;
                if (
                  (be(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                  i === undefined)
                )
                  return o ? o[t] : e[r];
                o
                  ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                  : (e[r] = i);
              },
              e,
              r,
              arguments.length
            );
          };
        }
      ),
      Ce.each(["top", "left"], function (e, t) {
        Ce.cssHooks[t] = F(ve.pixelPosition, function (e, n) {
          if (n)
            return (n = q(e, t)), ct.test(n) ? Ce(e).position()[t] + "px" : n;
        });
      }),
      Ce.each({ Height: "height", Width: "width" }, function (e, t) {
        Ce.each(
          { padding: "inner" + e, content: t, "": "outer" + e },
          function (n, r) {
            Ce.fn[r] = function (i, o) {
              var s = arguments.length && (n || "boolean" != typeof i),
                a = n || (!0 === i || !0 === o ? "margin" : "border");
              return qe(
                this,
                function (t, n, i) {
                  var o;
                  return be(t)
                    ? 0 === r.indexOf("outer")
                      ? t["inner" + e]
                      : t.document.documentElement["client" + e]
                    : 9 === t.nodeType
                    ? ((o = t.documentElement),
                      Math.max(
                        t.body["scroll" + e],
                        o["scroll" + e],
                        t.body["offset" + e],
                        o["offset" + e],
                        o["client" + e]
                      ))
                    : i === undefined
                    ? Ce.css(t, n, a)
                    : Ce.style(t, n, i, a);
                },
                t,
                s ? i : undefined,
                s
              );
            };
          }
        );
      }),
      Ce.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          Ce.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      Ce.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      Ce.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, t) {
          Ce.fn[t] = function (e, n) {
            return arguments.length > 0
              ? this.on(t, null, e, n)
              : this.trigger(t);
          };
        }
      );
    var en = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (Ce.proxy = function (e, t) {
      var n, r, i;
      return (
        "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
        xe(e)
          ? ((r = le.call(arguments, 2)),
            (i = function () {
              return e.apply(t || this, r.concat(le.call(arguments)));
            }),
            (i.guid = e.guid = e.guid || Ce.guid++),
            i)
          : undefined
      );
    }),
      (Ce.holdReady = function (e) {
        e ? Ce.readyWait++ : Ce.ready(!0);
      }),
      (Ce.isArray = Array.isArray),
      (Ce.parseJSON = JSON.parse),
      (Ce.nodeName = o),
      (Ce.isFunction = xe),
      (Ce.isWindow = be),
      (Ce.camelCase = h),
      (Ce.type = r),
      (Ce.now = Date.now),
      (Ce.isNumeric = function (e) {
        var t = Ce.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }),
      (Ce.trim = function (e) {
        return null == e ? "" : (e + "").replace(en, "");
      }),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return Ce;
        });
    var tn = e.jQuery,
      nn = e.$;
    return (
      (Ce.noConflict = function (t) {
        return (
          e.$ === Ce && (e.$ = nn), t && e.jQuery === Ce && (e.jQuery = tn), Ce
        );
      }),
      void 0 === t && (e.jQuery = e.$ = Ce),
      Ce
    );
  })
  /*!
   * imagesLoaded PACKAGED v4.1.4
   * JavaScript is all like "You images are done yet or what?"
   * MIT License
   */,
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", t)
      : "object" == typeof module && module.exports
      ? (module.exports = t())
      : (e.EvEmitter = t());
  })("undefined" != typeof window ? window : this, function () {
    function e() {}
    var t = e.prototype;
    return (
      (t.on = function (e, t) {
        if (e && t) {
          var n = (this._events = this._events || {}),
            r = (n[e] = n[e] || []);
          return -1 == r.indexOf(t) && r.push(t), this;
        }
      }),
      (t.once = function (e, t) {
        if (e && t) {
          this.on(e, t);
          var n = (this._onceEvents = this._onceEvents || {});
          return ((n[e] = n[e] || {})[t] = !0), this;
        }
      }),
      (t.off = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
          var r = n.indexOf(t);
          return -1 != r && n.splice(r, 1), this;
        }
      }),
      (t.emitEvent = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
          (n = n.slice(0)), (t = t || []);
          for (
            var r = this._onceEvents && this._onceEvents[e], i = 0;
            i < n.length;
            i++
          ) {
            var o = n[i];
            r && r[o] && (this.off(e, o), delete r[o]), o.apply(this, t);
          }
          return this;
        }
      }),
      (t.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      e
    );
  }),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (n) {
          return t(e, n);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("ev-emitter")))
      : (e.imagesLoaded = t(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function n(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function r(e) {
      return Array.isArray(e)
        ? e
        : "object" == typeof e && "number" == typeof e.length
        ? l.call(e)
        : [e];
    }
    function i(e, t, o) {
      if (!(this instanceof i)) return new i(e, t, o);
      var s = e;
      return (
        "string" == typeof e && (s = document.querySelectorAll(e)),
        s
          ? ((this.elements = r(s)),
            (this.options = n({}, this.options)),
            "function" == typeof t ? (o = t) : n(this.options, t),
            o && this.on("always", o),
            this.getImages(),
            a && (this.jqDeferred = new a.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void u.error("Bad element for imagesLoaded " + (s || e))
      );
    }
    function o(e) {
      this.img = e;
    }
    function s(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var a = e.jQuery,
      u = e.console,
      l = Array.prototype.slice;
    (i.prototype = Object.create(t.prototype)),
      (i.prototype.options = {}),
      (i.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (i.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e),
          !0 === this.options.background && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && c[t]) {
          for (var n = e.querySelectorAll("img"), r = 0; r < n.length; r++) {
            var i = n[r];
            this.addImage(i);
          }
          if ("string" == typeof this.options.background) {
            var o = e.querySelectorAll(this.options.background);
            for (r = 0; r < o.length; r++) {
              var s = o[r];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var c = { 1: !0, 9: !0, 11: !0 };
    return (
      (i.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (
            var n = /url\((['"])?(.*?)\1\)/gi, r = n.exec(t.backgroundImage);
            null !== r;

          ) {
            var i = r && r[2];
            i && this.addBackground(i, e), (r = n.exec(t.backgroundImage));
          }
      }),
      (i.prototype.addImage = function (e) {
        var t = new o(e);
        this.images.push(t);
      }),
      (i.prototype.addBackground = function (e, t) {
        var n = new s(e, t);
        this.images.push(n);
      }),
      (i.prototype.check = function () {
        function e(e, n, r) {
          setTimeout(function () {
            t.progress(e, n, r);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (i.prototype.progress = function (e, t, n) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent("progress", [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && u && u.log("progress: " + n, e, t);
      }),
      (i.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (o.prototype = Object.create(t.prototype)),
      (o.prototype.check = function () {
        return this.getIsImageComplete()
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (o.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (o.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
      }),
      (o.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (o.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (o.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (o.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(o.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url),
          this.getIsImageComplete() &&
            (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (e, t) {
        (this.isLoaded = e),
          this.emitEvent("progress", [this, this.element, t]);
      }),
      (i.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery) &&
          ((a = t),
          (a.fn.imagesLoaded = function (e, t) {
            return new i(this, e, t).jqDeferred.promise(a(this));
          }));
      }),
      i.makeJQueryPlugin(),
      i
    );
  }),
  (function () {
    "use strict";
    function e(e, o, s, a) {
      var u = {},
        l = 0,
        c = 0,
        f = document.title,
        d = function () {
          (u = {}),
            (l = $(document).height()),
            (c = $(window).height()),
            e.find(o).each(function () {
              var e = $(this).attr("href");
              "#" === e[0] &&
                (u[e] = $("#" + $.escapeSelector(e.substring(1))).offset().top);
            });
        },
        p = function () {
          var r = $(document).scrollTop() + a;
          r + c >= l && (r = l + 1e3);
          var i = null;
          for (var d in u) ((u[d] < r && u[d] > u[i]) || null === i) && (i = d);
          r != a || n || ((i = window.location.hash), (n = !0));
          var p = e.find("[href='" + i + "']").first();
          if (!p.hasClass("active")) {
            e.find(".active").removeClass("active"),
              e.find(".active-parent").removeClass("active-parent"),
              p.addClass("active"),
              p
                .parents(s)
                .addClass("active")
                .siblings(o)
                .addClass("active-parent"),
              p.siblings(s).addClass("active"),
              e.find(s).filter(":not(.active)").slideUp(150),
              e.find(s).filter(".active").slideDown(150),
              window.history.replaceState &&
                window.history.replaceState(null, "", i);
            var h = p.data("title");
            h !== undefined && h.length > 0
              ? (document.title = h.replace(t, "") + " \u2013 " + f)
              : (document.title = f);
          }
        };
      (function () {
        d(),
          p(),
          $("#nav-button").click(function () {
            return (
              $(".toc-wrapper").toggleClass("open"),
              $("#nav-button").toggleClass("open"),
              !1
            );
          }),
          $(".page-wrapper").click(i),
          $(".toc-link").click(i),
          e.find(o).click(function () {
            setTimeout(function () {
              p();
            }, 0);
          }),
          $(window).scroll(r(p, 200)),
          $(window).resize(r(d, 200));
      })(),
        (window.recacheHeights = d),
        (window.refreshToc = p);
    }
    var t = /<[^>]*>/g,
      n = !1,
      r = function (e, t) {
        var n = !1;
        return function () {
          !1 === n &&
            (setTimeout(function () {
              e(), (n = !1);
            }, t),
            (n = !0));
        };
      },
      i = function () {
        $(".toc-wrapper").removeClass("open"),
          $("#nav-button").removeClass("open");
      };
    window.loadToc = e;
  })(),
  (function () {
    "use strict";
    function e(e) {
      if (e && "" !== e) {
        $(".lang-selector a").removeClass("active"),
          $(".lang-selector a[data-language-name='" + e + "']").addClass(
            "active"
          );
        for (var t = 0; t < a.length; t++)
          $(".highlight.tab-" + a[t]).hide(),
            $(".lang-specific." + a[t]).hide();
        $(".highlight.tab-" + e).show(),
          $(".lang-specific." + e).show(),
          window.recacheHeights(),
          $(window.location.hash).get(0) &&
            $(window.location.hash).get(0).scrollIntoView(!0);
      }
    }
    function t(e) {
      return "string" != typeof e
        ? {}
        : ((e = e.trim().replace(/^(\?|#|&)/, "")),
          e
            ? e.split("&").reduce(function (e, t) {
                var n = t.replace(/\+/g, " ").split("="),
                  r = n[0],
                  i = n[1];
                return (
                  (r = decodeURIComponent(r)),
                  (i = i === undefined ? null : decodeURIComponent(i)),
                  e.hasOwnProperty(r)
                    ? Array.isArray(e[r])
                      ? e[r].push(i)
                      : (e[r] = [e[r], i])
                    : (e[r] = i),
                  e
                );
              }, {})
            : {});
    }
    function n(e) {
      return e
        ? Object.keys(e)
            .sort()
            .map(function (t) {
              var n = e[t];
              return Array.isArray(n)
                ? n
                    .sort()
                    .map(function (e) {
                      return (
                        encodeURIComponent(t) + "=" + encodeURIComponent(e)
                      );
                    })
                    .join("&")
                : encodeURIComponent(t) + "=" + encodeURIComponent(n);
            })
            .join("&")
        : "";
    }
    function r() {
      if (location.search.length >= 1) {
        var e = t(location.search).language;
        if (e) return e;
        if (-1 != jQuery.inArray(location.search.substr(1), a))
          return location.search.substr(1);
      }
      return !1;
    }
    function i(e) {
      var r = t(location.search);
      return r.language ? ((r.language = e), n(r)) : e;
    }
    function o(e) {
      if (history) {
        var t = window.location.hash;
        t && (t = t.replace(/^#+/, "")),
          history.pushState({}, "", "?" + i(e) + "#" + t),
          localStorage && localStorage.setItem("language", e);
      }
    }
    function s(t) {
      var n = null;
      localStorage && (n = localStorage.getItem("language")), (a = t);
      var i = r();
      i
        ? (e(i), localStorage && localStorage.setItem("language", i))
        : e(null !== n && -1 != jQuery.inArray(n, a) ? n : a[0]);
    }
    var a = [];
    (window.setupLanguages = s),
      (window.activateLanguage = e),
      (window.getLanguageFromQueryString = r),
      $(function () {
        $(".lang-selector a").on("click", function () {
          var t = $(this).data("language-name");
          return o(t), e(t), !1;
        });
      });
  })(),
  $(function () {
    loadToc($("#toc"), ".toc-link", ".toc-list-h2", 10),
      setupLanguages($("body").data("languages")),
      $(".content").imagesLoaded(function () {
        window.recacheHeights(), window.refreshToc();
      }),
      $(window).resize(function () {
        adjustLanguageSelectorWidth();
      }),
      adjustLanguageSelectorWidth();
  }),
  (window.onpopstate = function () {
    activateLanguage(getLanguageFromQueryString());
  }),
  (function () {
    var e = function (t) {
      var n = new e.Builder();
      return (
        n.pipeline.add(e.trimmer, e.stopWordFilter, e.stemmer),
        n.searchPipeline.add(e.stemmer),
        t.call(n, n),
        n.build()
      );
    };
    (e.version = "2.3.9")
    /*!
     * lunr.utils
     * Copyright (C) 2020 Oliver Nightingale
     */,
      (e.utils = {}),
      (e.utils.warn = (function (e) {
        return function (t) {
          e.console && console.warn && console.warn(t);
        };
      })(this)),
      (e.utils.asString = function (e) {
        return void 0 === e || null === e ? "" : e.toString();
      }),
      (e.utils.clone = function (e) {
        if (null === e || e === undefined) return e;
        for (
          var t = Object.create(null), n = Object.keys(e), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            o = e[i];
          if (Array.isArray(o)) t[i] = o.slice();
          else {
            if (
              "string" != typeof o &&
              "number" != typeof o &&
              "boolean" != typeof o
            )
              throw new TypeError(
                "clone is not deep and does not support nested objects"
              );
            t[i] = o;
          }
        }
        return t;
      }),
      (e.FieldRef = function (e, t, n) {
        (this.docRef = e), (this.fieldName = t), (this._stringValue = n);
      }),
      (e.FieldRef.joiner = "/"),
      (e.FieldRef.fromString = function (t) {
        var n = t.indexOf(e.FieldRef.joiner);
        if (-1 === n) throw "malformed field ref string";
        var r = t.slice(0, n),
          i = t.slice(n + 1);
        return new e.FieldRef(i, r, t);
      }),
      (e.FieldRef.prototype.toString = function () {
        return (
          this._stringValue == undefined &&
            (this._stringValue =
              this.fieldName + e.FieldRef.joiner + this.docRef),
          this._stringValue
        );
      })
      /*!
       * lunr.Set
       * Copyright (C) 2020 Oliver Nightingale
       */,
      (e.Set = function (e) {
        if (((this.elements = Object.create(null)), e)) {
          this.length = e.length;
          for (var t = 0; t < this.length; t++) this.elements[e[t]] = !0;
        } else this.length = 0;
      }),
      (e.Set.complete = {
        intersect: function (e) {
          return e;
        },
        union: function () {
          return this;
        },
        contains: function () {
          return !0;
        },
      }),
      (e.Set.empty = {
        intersect: function () {
          return this;
        },
        union: function (e) {
          return e;
        },
        contains: function () {
          return !1;
        },
      }),
      (e.Set.prototype.contains = function (e) {
        return !!this.elements[e];
      }),
      (e.Set.prototype.intersect = function (t) {
        var n,
          r,
          i,
          o = [];
        if (t === e.Set.complete) return this;
        if (t === e.Set.empty) return t;
        this.length < t.length ? ((n = this), (r = t)) : ((n = t), (r = this)),
          (i = Object.keys(n.elements));
        for (var s = 0; s < i.length; s++) {
          var a = i[s];
          a in r.elements && o.push(a);
        }
        return new e.Set(o);
      }),
      (e.Set.prototype.union = function (t) {
        return t === e.Set.complete
          ? e.Set.complete
          : t === e.Set.empty
          ? this
          : new e.Set(
              Object.keys(this.elements).concat(Object.keys(t.elements))
            );
      }),
      (e.idf = function (e, t) {
        var n = 0;
        for (var r in e) "_index" != r && (n += Object.keys(e[r]).length);
        var i = (t - n + 0.5) / (n + 0.5);
        return Math.log(1 + Math.abs(i));
      }),
      (e.Token = function (e, t) {
        (this.str = e || ""), (this.metadata = t || {});
      }),
      (e.Token.prototype.toString = function () {
        return this.str;
      }),
      (e.Token.prototype.update = function (e) {
        return (this.str = e(this.str, this.metadata)), this;
      }),
      (e.Token.prototype.clone = function (t) {
        return (
          (t =
            t ||
            function (e) {
              return e;
            }),
          new e.Token(t(this.str, this.metadata), this.metadata)
        );
      })
      /*!
       * lunr.tokenizer
       * Copyright (C) 2020 Oliver Nightingale
       */,
      (e.tokenizer = function (t, n) {
        if (null == t || t == undefined) return [];
        if (Array.isArray(t))
          return t.map(function (t) {
            return new e.Token(
              e.utils.asString(t).toLowerCase(),
              e.utils.clone(n)
            );
          });
        for (
          var r = t.toString().toLowerCase(),
            i = r.length,
            o = [],
            s = 0,
            a = 0;
          s <= i;
          s++
        ) {
          var u = r.charAt(s),
            l = s - a;
          if (u.match(e.tokenizer.separator) || s == i) {
            if (l > 0) {
              var c = e.utils.clone(n) || {};
              (c.position = [a, l]),
                (c.index = o.length),
                o.push(new e.Token(r.slice(a, s), c));
            }
            a = s + 1;
          }
        }
        return o;
      }),
      (e.tokenizer.separator = /[\s\-]+/)
      /*!
       * lunr.Pipeline
       * Copyright (C) 2020 Oliver Nightingale
       */,
      (e.Pipeline = function () {
        this._stack = [];
      }),
      (e.Pipeline.registeredFunctions = Object.create(null)),
      (e.Pipeline.registerFunction = function (t, n) {
        n in this.registeredFunctions &&
          e.utils.warn("Overwriting existing registered function: " + n),
          (t.label = n),
          (e.Pipeline.registeredFunctions[t.label] = t);
      }),
      (e.Pipeline.warnIfFunctionNotRegistered = function (t) {
        (t.label && t.label in this.registeredFunctions) ||
          e.utils.warn(
            "Function is not registered with pipeline. This may cause problems when serialising the index.\n",
            t
          );
      }),
      (e.Pipeline.load = function (t) {
        var n = new e.Pipeline();
        return (
          t.forEach(function (t) {
            var r = e.Pipeline.registeredFunctions[t];
            if (!r) throw new Error("Cannot load unregistered function: " + t);
            n.add(r);
          }),
          n
        );
      }),
      (e.Pipeline.prototype.add = function () {
        Array.prototype.slice.call(arguments).forEach(function (t) {
          e.Pipeline.warnIfFunctionNotRegistered(t), this._stack.push(t);
        }, this);
      }),
      (e.Pipeline.prototype.after = function (t, n) {
        e.Pipeline.warnIfFunctionNotRegistered(n);
        var r = this._stack.indexOf(t);
        if (-1 == r) throw new Error("Cannot find existingFn");
        (r += 1), this._stack.splice(r, 0, n);
      }),
      (e.Pipeline.prototype.before = function (t, n) {
        e.Pipeline.warnIfFunctionNotRegistered(n);
        var r = this._stack.indexOf(t);
        if (-1 == r) throw new Error("Cannot find existingFn");
        this._stack.splice(r, 0, n);
      }),
      (e.Pipeline.prototype.remove = function (e) {
        var t = this._stack.indexOf(e);
        -1 != t && this._stack.splice(t, 1);
      }),
      (e.Pipeline.prototype.run = function (e) {
        for (var t = this._stack.length, n = 0; n < t; n++) {
          for (var r = this._stack[n], i = [], o = 0; o < e.length; o++) {
            var s = r(e[o], o, e);
            if (null !== s && void 0 !== s && "" !== s)
              if (Array.isArray(s))
                for (var a = 0; a < s.length; a++) i.push(s[a]);
              else i.push(s);
          }
          e = i;
        }
        return e;
      }),
      (e.Pipeline.prototype.runString = function (t, n) {
        var r = new e.Token(t, n);
        return this.run([r]).map(function (e) {
          return e.toString();
        });
      }),
      (e.Pipeline.prototype.reset = function () {
        this._stack = [];
      }),
      (e.Pipeline.prototype.toJSON = function () {
        return this._stack.map(function (t) {
          return e.Pipeline.warnIfFunctionNotRegistered(t), t.label;
        });
      })
      /*!
       * lunr.Vector
       * Copyright (C) 2020 Oliver Nightingale
       */,
      (e.Vector = function (e) {
        (this._magnitude = 0), (this.elements = e || []);
      }),
      (e.Vector.prototype.positionForIndex = function (e) {
        if (0 == this.elements.length) return 0;
        for (
          var t = 0,
            n = this.elements.length / 2,
            r = n - t,
            i = Math.floor(r / 2),
            o = this.elements[2 * i];
          r > 1 && (o < e && (t = i), o > e && (n = i), o != e);

        )
          (r = n - t), (i = t + Math.floor(r / 2)), (o = this.elements[2 * i]);
        return o == e ? 2 * i : o > e ? 2 * i : o < e ? 2 * (i + 1) : void 0;
      }),
      (e.Vector.prototype.insert = function (e, t) {
        this.upsert(e, t, function () {
          throw "duplicate index";
        });
      }),
      (e.Vector.prototype.upsert = function (e, t, n) {
        this._magnitude = 0;
        var r = this.positionForIndex(e);
        this.elements[r] == e
          ? (this.elements[r + 1] = n(this.elements[r + 1], t))
          : this.elements.splice(r, 0, e, t);
      }),
      (e.Vector.prototype.magnitude = function () {
        if (this._magnitude) return this._magnitude;
        for (var e = 0, t = this.elements.length, n = 1; n < t; n += 2) {
          var r = this.elements[n];
          e += r * r;
        }
        return (this._magnitude = Math.sqrt(e));
      }),
      (e.Vector.prototype.dot = function (e) {
        for (
          var t = 0,
            n = this.elements,
            r = e.elements,
            i = n.length,
            o = r.length,
            s = 0,
            a = 0,
            u = 0,
            l = 0;
          u < i && l < o;

        )
          (s = n[u]),
            (a = r[l]),
            s < a
              ? (u += 2)
              : s > a
              ? (l += 2)
              : s == a && ((t += n[u + 1] * r[l + 1]), (u += 2), (l += 2));
        return t;
      }),
      (e.Vector.prototype.similarity = function (e) {
        return this.dot(e) / this.magnitude() || 0;
      }),
      (e.Vector.prototype.toArray = function () {
        for (
          var e = new Array(this.elements.length / 2), t = 1, n = 0;
          t < this.elements.length;
          t += 2, n++
        )
          e[n] = this.elements[t];
        return e;
      }),
      (e.Vector.prototype.toJSON = function () {
        return this.elements;
      })
      /*!
       * lunr.stemmer
       * Copyright (C) 2020 Oliver Nightingale
       * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
       */,
      (e.stemmer = (function () {
        var e = {
            ational: "ate",
            tional: "tion",
            enci: "ence",
            anci: "ance",
            izer: "ize",
            bli: "ble",
            alli: "al",
            entli: "ent",
            eli: "e",
            ousli: "ous",
            ization: "ize",
            ation: "ate",
            ator: "ate",
            alism: "al",
            iveness: "ive",
            fulness: "ful",
            ousness: "ous",
            aliti: "al",
            iviti: "ive",
            biliti: "ble",
            logi: "log",
          },
          t = {
            icate: "ic",
            ative: "",
            alize: "al",
            iciti: "ic",
            ical: "ic",
            ful: "",
            ness: "",
          },
          n = "[^aeiou]",
          r = "[aeiouy]",
          i = n + "[^aeiouy]*",
          o = r + "[aeiou]*",
          s = "^(" + i + ")?" + o + i,
          a = "^(" + i + ")?" + o + i + "(" + o + ")?$",
          u = "^(" + i + ")?" + o + i + o + i,
          l = "^(" + i + ")?" + r,
          c = new RegExp(s),
          f = new RegExp(u),
          d = new RegExp(a),
          p = new RegExp(l),
          h = /^(.+?)(ss|i)es$/,
          g = /^(.+?)([^s])s$/,
          m = /^(.+?)eed$/,
          y = /^(.+?)(ed|ing)$/,
          v = /.$/,
          x = /(at|bl|iz)$/,
          b = new RegExp("([^aeiouylsz])\\1$"),
          w = new RegExp("^" + i + r + "[^aeiouwxy]$"),
          T = /^(.+?[^aeiou])y$/,
          E =
            /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
          C = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
          k =
            /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,
          S = /^(.+?)(s|t)(ion)$/,
          L = /^(.+?)e$/,
          j = /ll$/,
          N = new RegExp("^" + i + r + "[^aeiouwxy]$"),
          A = function (n) {
            var r, i, o, s, a, u, l;
            if (n.length < 3) return n;
            if (
              ((o = n.substr(0, 1)),
              "y" == o && (n = o.toUpperCase() + n.substr(1)),
              (s = h),
              (a = g),
              s.test(n)
                ? (n = n.replace(s, "$1$2"))
                : a.test(n) && (n = n.replace(a, "$1$2")),
              (s = m),
              (a = y),
              s.test(n))
            ) {
              var A = s.exec(n);
              (s = c), s.test(A[1]) && ((s = v), (n = n.replace(s, "")));
            } else if (a.test(n)) {
              var A = a.exec(n);
              (r = A[1]),
                (a = p),
                a.test(r) &&
                  ((n = r),
                  (a = x),
                  (u = b),
                  (l = w),
                  a.test(n)
                    ? (n += "e")
                    : u.test(n)
                    ? ((s = v), (n = n.replace(s, "")))
                    : l.test(n) && (n += "e"));
            }
            if (((s = T), s.test(n))) {
              var A = s.exec(n);
              (r = A[1]), (n = r + "i");
            }
            if (((s = E), s.test(n))) {
              var A = s.exec(n);
              (r = A[1]), (i = A[2]), (s = c), s.test(r) && (n = r + e[i]);
            }
            if (((s = C), s.test(n))) {
              var A = s.exec(n);
              (r = A[1]), (i = A[2]), (s = c), s.test(r) && (n = r + t[i]);
            }
            if (((s = k), (a = S), s.test(n))) {
              var A = s.exec(n);
              (r = A[1]), (s = f), s.test(r) && (n = r);
            } else if (a.test(n)) {
              var A = a.exec(n);
              (r = A[1] + A[2]), (a = f), a.test(r) && (n = r);
            }
            if (((s = L), s.test(n))) {
              var A = s.exec(n);
              (r = A[1]),
                (s = f),
                (a = d),
                (u = N),
                (s.test(r) || (a.test(r) && !u.test(r))) && (n = r);
            }
            return (
              (s = j),
              (a = f),
              s.test(n) && a.test(n) && ((s = v), (n = n.replace(s, ""))),
              "y" == o && (n = o.toLowerCase() + n.substr(1)),
              n
            );
          };
        return function (e) {
          return e.update(A);
        };
      })()),
      e.Pipeline.registerFunction(e.stemmer, "stemmer")
      /*!
       * lunr.stopWordFilter
       * Copyright (C) 2020 Oliver Nightingale
       */,
      (e.generateStopWordFilter = function (e) {
        var t = e.reduce(function (e, t) {
          return (e[t] = t), e;
        }, {});
        return function (e) {
          if (e && t[e.toString()] !== e.toString()) return e;
        };
      }),
      (e.stopWordFilter = e.generateStopWordFilter([
        "a",
        "able",
        "about",
        "across",
        "after",
        "all",
        "almost",
        "also",
        "am",
        "among",
        "an",
        "and",
        "any",
        "are",
        "as",
        "at",
        "be",
        "because",
        "been",
        "but",
        "by",
        "can",
        "cannot",
        "could",
        "dear",
        "did",
        "do",
        "does",
        "either",
        "else",
        "ever",
        "every",
        "for",
        "from",
        "get",
        "got",
        "had",
        "has",
        "have",
        "he",
        "her",
        "hers",
        "him",
        "his",
        "how",
        "however",
        "i",
        "if",
        "in",
        "into",
        "is",
        "it",
        "its",
        "just",
        "least",
        "let",
        "like",
        "likely",
        "may",
        "me",
        "might",
        "most",
        "must",
        "my",
        "neither",
        "no",
        "nor",
        "not",
        "of",
        "off",
        "often",
        "on",
        "only",
        "or",
        "other",
        "our",
        "own",
        "rather",
        "said",
        "say",
        "says",
        "she",
        "should",
        "since",
        "so",
        "some",
        "than",
        "that",
        "the",
        "their",
        "them",
        "then",
        "there",
        "these",
        "they",
        "this",
        "tis",
        "to",
        "too",
        "twas",
        "us",
        "wants",
        "was",
        "we",
        "were",
        "what",
        "when",
        "where",
        "which",
        "while",
        "who",
        "whom",
        "why",
        "will",
        "with",
        "would",
        "yet",
        "you",
        "your",
      ])),
      e.Pipeline.registerFunction(e.stopWordFilter, "stopWordFilter")
      /*!
       * lunr.trimmer
       * Copyright (C) 2020 Oliver Nightingale
       */,
      (e.trimmer = function (e) {
        return e.update(function (e) {
          return e.replace(/^\W+/, "").replace(/\W+$/, "");
        });
      }),
      e.Pipeline.registerFunction(e.trimmer, "trimmer")
      /*!
       * lunr.TokenSet
       * Copyright (C) 2020 Oliver Nightingale
       */,
      (e.TokenSet = function () {
        (this["final"] = !1),
          (this.edges = {}),
          (this.id = e.TokenSet._nextId),
          (e.TokenSet._nextId += 1);
      }),
      (e.TokenSet._nextId = 1),
      (e.TokenSet.fromArray = function (t) {
        for (var n = new e.TokenSet.Builder(), r = 0, i = t.length; r < i; r++)
          n.insert(t[r]);
        return n.finish(), n.root;
      }),
      (e.TokenSet.fromClause = function (t) {
        return "editDistance" in t
          ? e.TokenSet.fromFuzzyString(t.term, t.editDistance)
          : e.TokenSet.fromString(t.term);
      }),
      (e.TokenSet.fromFuzzyString = function (t, n) {
        for (
          var r = new e.TokenSet(),
            i = [{ node: r, editsRemaining: n, str: t }];
          i.length;

        ) {
          var o = i.pop();
          if (o.str.length > 0) {
            var s,
              a = o.str.charAt(0);
            a in o.node.edges
              ? (s = o.node.edges[a])
              : ((s = new e.TokenSet()), (o.node.edges[a] = s)),
              1 == o.str.length && (s["final"] = !0),
              i.push({
                node: s,
                editsRemaining: o.editsRemaining,
                str: o.str.slice(1),
              });
          }
          if (0 != o.editsRemaining) {
            if ("*" in o.node.edges) var u = o.node.edges["*"];
            else {
              var u = new e.TokenSet();
              o.node.edges["*"] = u;
            }
            if (
              (0 == o.str.length && (u["final"] = !0),
              i.push({
                node: u,
                editsRemaining: o.editsRemaining - 1,
                str: o.str,
              }),
              o.str.length > 1 &&
                i.push({
                  node: o.node,
                  editsRemaining: o.editsRemaining - 1,
                  str: o.str.slice(1),
                }),
              1 == o.str.length && (o.node["final"] = !0),
              o.str.length >= 1)
            ) {
              if ("*" in o.node.edges) var l = o.node.edges["*"];
              else {
                var l = new e.TokenSet();
                o.node.edges["*"] = l;
              }
              1 == o.str.length && (l["final"] = !0),
                i.push({
                  node: l,
                  editsRemaining: o.editsRemaining - 1,
                  str: o.str.slice(1),
                });
            }
            if (o.str.length > 1) {
              var c,
                f = o.str.charAt(0),
                d = o.str.charAt(1);
              d in o.node.edges
                ? (c = o.node.edges[d])
                : ((c = new e.TokenSet()), (o.node.edges[d] = c)),
                1 == o.str.length && (c["final"] = !0),
                i.push({
                  node: c,
                  editsRemaining: o.editsRemaining - 1,
                  str: f + o.str.slice(2),
                });
            }
          }
        }
        return r;
      }),
      (e.TokenSet.fromString = function (t) {
        for (var n = new e.TokenSet(), r = n, i = 0, o = t.length; i < o; i++) {
          var s = t[i],
            a = i == o - 1;
          if ("*" == s) (n.edges[s] = n), (n["final"] = a);
          else {
            var u = new e.TokenSet();
            (u["final"] = a), (n.edges[s] = u), (n = u);
          }
        }
        return r;
      }),
      (e.TokenSet.prototype.toArray = function () {
        for (var e = [], t = [{ prefix: "", node: this }]; t.length; ) {
          var n = t.pop(),
            r = Object.keys(n.node.edges),
            i = r.length;
          n.node["final"] && (n.prefix.charAt(0), e.push(n.prefix));
          for (var o = 0; o < i; o++) {
            var s = r[o];
            t.push({ prefix: n.prefix.concat(s), node: n.node.edges[s] });
          }
        }
        return e;
      }),
      (e.TokenSet.prototype.toString = function () {
        if (this._str) return this._str;
        for (
          var e = this["final"] ? "1" : "0",
            t = Object.keys(this.edges).sort(),
            n = t.length,
            r = 0;
          r < n;
          r++
        ) {
          var i = t[r];
          e = e + i + this.edges[i].id;
        }
        return e;
      }),
      (e.TokenSet.prototype.intersect = function (t) {
        for (
          var n = new e.TokenSet(),
            r = undefined,
            i = [{ qNode: t, output: n, node: this }];
          i.length;

        ) {
          r = i.pop();
          for (
            var o = Object.keys(r.qNode.edges),
              s = o.length,
              a = Object.keys(r.node.edges),
              u = a.length,
              l = 0;
            l < s;
            l++
          )
            for (var c = o[l], f = 0; f < u; f++) {
              var d = a[f];
              if (d == c || "*" == c) {
                var p = r.node.edges[d],
                  h = r.qNode.edges[c],
                  g = p["final"] && h["final"],
                  m = undefined;
                d in r.output.edges
                  ? ((m = r.output.edges[d]), (m["final"] = m["final"] || g))
                  : ((m = new e.TokenSet()),
                    (m["final"] = g),
                    (r.output.edges[d] = m)),
                  i.push({ qNode: h, output: m, node: p });
              }
            }
        }
        return n;
      }),
      (e.TokenSet.Builder = function () {
        (this.previousWord = ""),
          (this.root = new e.TokenSet()),
          (this.uncheckedNodes = []),
          (this.minimizedNodes = {});
      }),
      (e.TokenSet.Builder.prototype.insert = function (t) {
        var n,
          r = 0;
        if (t < this.previousWord)
          throw new Error("Out of order word insertion");
        for (
          var i = 0;
          i < t.length &&
          i < this.previousWord.length &&
          t[i] == this.previousWord[i];
          i++
        )
          r++;
        this.minimize(r),
          (n =
            0 == this.uncheckedNodes.length
              ? this.root
              : this.uncheckedNodes[this.uncheckedNodes.length - 1].child);
        for (var i = r; i < t.length; i++) {
          var o = new e.TokenSet(),
            s = t[i];
          (n.edges[s] = o),
            this.uncheckedNodes.push({ parent: n, char: s, child: o }),
            (n = o);
        }
        (n["final"] = !0), (this.previousWord = t);
      }),
      (e.TokenSet.Builder.prototype.finish = function () {
        this.minimize(0);
      }),
      (e.TokenSet.Builder.prototype.minimize = function (e) {
        for (var t = this.uncheckedNodes.length - 1; t >= e; t--) {
          var n = this.uncheckedNodes[t],
            r = n.child.toString();
          r in this.minimizedNodes
            ? (n.parent.edges[n["char"]] = this.minimizedNodes[r])
            : ((n.child._str = r), (this.minimizedNodes[r] = n.child)),
            this.uncheckedNodes.pop();
        }
      })
      /*!
       * lunr.Index
       * Copyright (C) 2020 Oliver Nightingale
       */,
      (e.Index = function (e) {
        (this.invertedIndex = e.invertedIndex),
          (this.fieldVectors = e.fieldVectors),
          (this.tokenSet = e.tokenSet),
          (this.fields = e.fields),
          (this.pipeline = e.pipeline);
      }),
      (e.Index.prototype.search = function (t) {
        return this.query(function (n) {
          new e.QueryParser(t, n).parse();
        });
      }),
      (e.Index.prototype.query = function (t) {
        for (
          var n = new e.Query(this.fields),
            r = Object.create(null),
            i = Object.create(null),
            o = Object.create(null),
            s = Object.create(null),
            a = Object.create(null),
            u = 0;
          u < this.fields.length;
          u++
        )
          i[this.fields[u]] = new e.Vector();
        t.call(n, n);
        for (var u = 0; u < n.clauses.length; u++) {
          var l = n.clauses[u],
            c = null,
            f = e.Set.empty;
          c = l.usePipeline
            ? this.pipeline.runString(l.term, { fields: l.fields })
            : [l.term];
          for (var d = 0; d < c.length; d++) {
            var p = c[d];
            l.term = p;
            var h = e.TokenSet.fromClause(l),
              g = this.tokenSet.intersect(h).toArray();
            if (0 === g.length && l.presence === e.Query.presence.REQUIRED) {
              for (var m = 0; m < l.fields.length; m++) {
                var y = l.fields[m];
                s[y] = e.Set.empty;
              }
              break;
            }
            for (var v = 0; v < g.length; v++)
              for (
                var x = g[v], b = this.invertedIndex[x], w = b._index, m = 0;
                m < l.fields.length;
                m++
              ) {
                var y = l.fields[m],
                  T = b[y],
                  E = Object.keys(T),
                  C = x + "/" + y,
                  k = new e.Set(E);
                if (
                  (l.presence == e.Query.presence.REQUIRED &&
                    ((f = f.union(k)),
                    s[y] === undefined && (s[y] = e.Set.complete)),
                  l.presence != e.Query.presence.PROHIBITED)
                ) {
                  if (
                    (i[y].upsert(w, l.boost, function (e, t) {
                      return e + t;
                    }),
                    !o[C])
                  ) {
                    for (var S = 0; S < E.length; S++) {
                      var L,
                        j = E[S],
                        N = new e.FieldRef(j, y),
                        A = T[j];
                      (L = r[N]) === undefined
                        ? (r[N] = new e.MatchData(x, y, A))
                        : L.add(x, y, A);
                    }
                    o[C] = !0;
                  }
                } else
                  a[y] === undefined && (a[y] = e.Set.empty),
                    (a[y] = a[y].union(k));
              }
          }
          if (l.presence === e.Query.presence.REQUIRED)
            for (var m = 0; m < l.fields.length; m++) {
              var y = l.fields[m];
              s[y] = s[y].intersect(f);
            }
        }
        for (
          var D = e.Set.complete, I = e.Set.empty, u = 0;
          u < this.fields.length;
          u++
        ) {
          var y = this.fields[u];
          s[y] && (D = D.intersect(s[y])), a[y] && (I = I.union(a[y]));
        }
        var O = Object.keys(r),
          P = [],
          Q = Object.create(null);
        if (n.isNegated()) {
          O = Object.keys(this.fieldVectors);
          for (var u = 0; u < O.length; u++) {
            var N = O[u],
              R = e.FieldRef.fromString(N);
            r[N] = new e.MatchData();
          }
        }
        for (var u = 0; u < O.length; u++) {
          var R = e.FieldRef.fromString(O[u]),
            q = R.docRef;
          if (D.contains(q) && !I.contains(q)) {
            var F,
              $ = this.fieldVectors[R],
              _ = i[R.fieldName].similarity($);
            if ((F = Q[q]) !== undefined)
              (F.score += _), F.matchData.combine(r[R]);
            else {
              var H = { ref: q, score: _, matchData: r[R] };
              (Q[q] = H), P.push(H);
            }
          }
        }
        return P.sort(function (e, t) {
          return t.score - e.score;
        });
      }),
      (e.Index.prototype.toJSON = function () {
        var t = Object.keys(this.invertedIndex)
            .sort()
            .map(function (e) {
              return [e, this.invertedIndex[e]];
            }, this),
          n = Object.keys(this.fieldVectors).map(function (e) {
            return [e, this.fieldVectors[e].toJSON()];
          }, this);
        return {
          version: e.version,
          fields: this.fields,
          fieldVectors: n,
          invertedIndex: t,
          pipeline: this.pipeline.toJSON(),
        };
      }),
      (e.Index.load = function (t) {
        var n = {},
          r = {},
          i = t.fieldVectors,
          o = Object.create(null),
          s = t.invertedIndex,
          a = new e.TokenSet.Builder(),
          u = e.Pipeline.load(t.pipeline);
        t.version != e.version &&
          e.utils.warn(
            "Version mismatch when loading serialised index. Current version of lunr '" +
              e.version +
              "' does not match serialized index '" +
              t.version +
              "'"
          );
        for (var l = 0; l < i.length; l++) {
          var c = i[l],
            f = c[0],
            d = c[1];
          r[f] = new e.Vector(d);
        }
        for (var l = 0; l < s.length; l++) {
          var c = s[l],
            p = c[0],
            h = c[1];
          a.insert(p), (o[p] = h);
        }
        return (
          a.finish(),
          (n.fields = t.fields),
          (n.fieldVectors = r),
          (n.invertedIndex = o),
          (n.tokenSet = a.root),
          (n.pipeline = u),
          new e.Index(n)
        );
      })
      /*!
       * lunr.Builder
       * Copyright (C) 2020 Oliver Nightingale
       */,
      (e.Builder = function () {
        (this._ref = "id"),
          (this._fields = Object.create(null)),
          (this._documents = Object.create(null)),
          (this.invertedIndex = Object.create(null)),
          (this.fieldTermFrequencies = {}),
          (this.fieldLengths = {}),
          (this.tokenizer = e.tokenizer),
          (this.pipeline = new e.Pipeline()),
          (this.searchPipeline = new e.Pipeline()),
          (this.documentCount = 0),
          (this._b = 0.75),
          (this._k1 = 1.2),
          (this.termIndex = 0),
          (this.metadataWhitelist = []);
      }),
      (e.Builder.prototype.ref = function (e) {
        this._ref = e;
      }),
      (e.Builder.prototype.field = function (e, t) {
        if (/\//.test(e))
          throw new RangeError(
            "Field '" + e + "' contains illegal character '/'"
          );
        this._fields[e] = t || {};
      }),
      (e.Builder.prototype.b = function (e) {
        this._b = e < 0 ? 0 : e > 1 ? 1 : e;
      }),
      (e.Builder.prototype.k1 = function (e) {
        this._k1 = e;
      }),
      (e.Builder.prototype.add = function (t, n) {
        var r = t[this._ref],
          i = Object.keys(this._fields);
        (this._documents[r] = n || {}), (this.documentCount += 1);
        for (var o = 0; o < i.length; o++) {
          var s = i[o],
            a = this._fields[s].extractor,
            u = a ? a(t) : t[s],
            l = this.tokenizer(u, { fields: [s] }),
            c = this.pipeline.run(l),
            f = new e.FieldRef(r, s),
            d = Object.create(null);
          (this.fieldTermFrequencies[f] = d),
            (this.fieldLengths[f] = 0),
            (this.fieldLengths[f] += c.length);
          for (var p = 0; p < c.length; p++) {
            var h = c[p];
            if (
              (d[h] == undefined && (d[h] = 0),
              (d[h] += 1),
              this.invertedIndex[h] == undefined)
            ) {
              var g = Object.create(null);
              (g._index = this.termIndex), (this.termIndex += 1);
              for (var m = 0; m < i.length; m++) g[i[m]] = Object.create(null);
              this.invertedIndex[h] = g;
            }
            this.invertedIndex[h][s][r] == undefined &&
              (this.invertedIndex[h][s][r] = Object.create(null));
            for (var y = 0; y < this.metadataWhitelist.length; y++) {
              var v = this.metadataWhitelist[y],
                x = h.metadata[v];
              this.invertedIndex[h][s][r][v] == undefined &&
                (this.invertedIndex[h][s][r][v] = []),
                this.invertedIndex[h][s][r][v].push(x);
            }
          }
        }
      }),
      (e.Builder.prototype.calculateAverageFieldLengths = function () {
        for (
          var t = Object.keys(this.fieldLengths),
            n = t.length,
            r = {},
            i = {},
            o = 0;
          o < n;
          o++
        ) {
          var s = e.FieldRef.fromString(t[o]),
            a = s.fieldName;
          i[a] || (i[a] = 0),
            (i[a] += 1),
            r[a] || (r[a] = 0),
            (r[a] += this.fieldLengths[s]);
        }
        for (var u = Object.keys(this._fields), o = 0; o < u.length; o++) {
          var l = u[o];
          r[l] = r[l] / i[l];
        }
        this.averageFieldLength = r;
      }),
      (e.Builder.prototype.createFieldVectors = function () {
        for (
          var t = {},
            n = Object.keys(this.fieldTermFrequencies),
            r = n.length,
            i = Object.create(null),
            o = 0;
          o < r;
          o++
        ) {
          for (
            var s = e.FieldRef.fromString(n[o]),
              a = s.fieldName,
              u = this.fieldLengths[s],
              l = new e.Vector(),
              c = this.fieldTermFrequencies[s],
              f = Object.keys(c),
              d = f.length,
              p = this._fields[a].boost || 1,
              h = this._documents[s.docRef].boost || 1,
              g = 0;
            g < d;
            g++
          ) {
            var m,
              y,
              v,
              x = f[g],
              b = c[x],
              w = this.invertedIndex[x]._index;
            i[x] === undefined
              ? ((m = e.idf(this.invertedIndex[x], this.documentCount)),
                (i[x] = m))
              : (m = i[x]),
              (y =
                (m * ((this._k1 + 1) * b)) /
                (this._k1 *
                  (1 - this._b + this._b * (u / this.averageFieldLength[a])) +
                  b)),
              (y *= p),
              (y *= h),
              (v = Math.round(1e3 * y) / 1e3),
              l.insert(w, v);
          }
          t[s] = l;
        }
        this.fieldVectors = t;
      }),
      (e.Builder.prototype.createTokenSet = function () {
        this.tokenSet = e.TokenSet.fromArray(
          Object.keys(this.invertedIndex).sort()
        );
      }),
      (e.Builder.prototype.build = function () {
        return (
          this.calculateAverageFieldLengths(),
          this.createFieldVectors(),
          this.createTokenSet(),
          new e.Index({
            invertedIndex: this.invertedIndex,
            fieldVectors: this.fieldVectors,
            tokenSet: this.tokenSet,
            fields: Object.keys(this._fields),
            pipeline: this.searchPipeline,
          })
        );
      }),
      (e.Builder.prototype.use = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        t.unshift(this), e.apply(this, t);
      }),
      (e.MatchData = function (e, t, n) {
        for (
          var r = Object.create(null), i = Object.keys(n || {}), o = 0;
          o < i.length;
          o++
        ) {
          var s = i[o];
          r[s] = n[s].slice();
        }
        (this.metadata = Object.create(null)),
          e !== undefined &&
            ((this.metadata[e] = Object.create(null)),
            (this.metadata[e][t] = r));
      }),
      (e.MatchData.prototype.combine = function (e) {
        for (var t = Object.keys(e.metadata), n = 0; n < t.length; n++) {
          var r = t[n],
            i = Object.keys(e.metadata[r]);
          this.metadata[r] == undefined &&
            (this.metadata[r] = Object.create(null));
          for (var o = 0; o < i.length; o++) {
            var s = i[o],
              a = Object.keys(e.metadata[r][s]);
            this.metadata[r][s] == undefined &&
              (this.metadata[r][s] = Object.create(null));
            for (var u = 0; u < a.length; u++) {
              var l = a[u];
              this.metadata[r][s][l] == undefined
                ? (this.metadata[r][s][l] = e.metadata[r][s][l])
                : (this.metadata[r][s][l] = this.metadata[r][s][l].concat(
                    e.metadata[r][s][l]
                  ));
            }
          }
        }
      }),
      (e.MatchData.prototype.add = function (e, t, n) {
        if (!(e in this.metadata))
          return (
            (this.metadata[e] = Object.create(null)),
            void (this.metadata[e][t] = n)
          );
        if (!(t in this.metadata[e])) return void (this.metadata[e][t] = n);
        for (var r = Object.keys(n), i = 0; i < r.length; i++) {
          var o = r[i];
          o in this.metadata[e][t]
            ? (this.metadata[e][t][o] = this.metadata[e][t][o].concat(n[o]))
            : (this.metadata[e][t][o] = n[o]);
        }
      }),
      (e.Query = function (e) {
        (this.clauses = []), (this.allFields = e);
      }),
      (e.Query.wildcard = new String("*")),
      (e.Query.wildcard.NONE = 0),
      (e.Query.wildcard.LEADING = 1),
      (e.Query.wildcard.TRAILING = 2),
      (e.Query.presence = { OPTIONAL: 1, REQUIRED: 2, PROHIBITED: 3 }),
      (e.Query.prototype.clause = function (t) {
        return (
          "fields" in t || (t.fields = this.allFields),
          "boost" in t || (t.boost = 1),
          "usePipeline" in t || (t.usePipeline = !0),
          "wildcard" in t || (t.wildcard = e.Query.wildcard.NONE),
          t.wildcard & e.Query.wildcard.LEADING &&
            t.term.charAt(0) != e.Query.wildcard &&
            (t.term = "*" + t.term),
          t.wildcard & e.Query.wildcard.TRAILING &&
            t.term.slice(-1) != e.Query.wildcard &&
            (t.term = t.term + "*"),
          "presence" in t || (t.presence = e.Query.presence.OPTIONAL),
          this.clauses.push(t),
          this
        );
      }),
      (e.Query.prototype.isNegated = function () {
        for (var t = 0; t < this.clauses.length; t++)
          if (this.clauses[t].presence != e.Query.presence.PROHIBITED)
            return !1;
        return !0;
      }),
      (e.Query.prototype.term = function (t, n) {
        if (Array.isArray(t))
          return (
            t.forEach(function (t) {
              this.term(t, e.utils.clone(n));
            }, this),
            this
          );
        var r = n || {};
        return (r.term = t.toString()), this.clause(r), this;
      }),
      (e.QueryParseError = function (e, t, n) {
        (this.name = "QueryParseError"),
          (this.message = e),
          (this.start = t),
          (this.end = n);
      }),
      (e.QueryParseError.prototype = new Error()),
      (e.QueryLexer = function (e) {
        (this.lexemes = []),
          (this.str = e),
          (this.length = e.length),
          (this.pos = 0),
          (this.start = 0),
          (this.escapeCharPositions = []);
      }),
      (e.QueryLexer.prototype.run = function () {
        for (var t = e.QueryLexer.lexText; t; ) t = t(this);
      }),
      (e.QueryLexer.prototype.sliceString = function () {
        for (
          var e = [], t = this.start, n = this.pos, r = 0;
          r < this.escapeCharPositions.length;
          r++
        )
          (n = this.escapeCharPositions[r]),
            e.push(this.str.slice(t, n)),
            (t = n + 1);
        return (
          e.push(this.str.slice(t, this.pos)),
          (this.escapeCharPositions.length = 0),
          e.join("")
        );
      }),
      (e.QueryLexer.prototype.emit = function (e) {
        this.lexemes.push({
          type: e,
          str: this.sliceString(),
          start: this.start,
          end: this.pos,
        }),
          (this.start = this.pos);
      }),
      (e.QueryLexer.prototype.escapeCharacter = function () {
        this.escapeCharPositions.push(this.pos - 1), (this.pos += 1);
      }),
      (e.QueryLexer.prototype.next = function () {
        if (this.pos >= this.length) return e.QueryLexer.EOS;
        var t = this.str.charAt(this.pos);
        return (this.pos += 1), t;
      }),
      (e.QueryLexer.prototype.width = function () {
        return this.pos - this.start;
      }),
      (e.QueryLexer.prototype.ignore = function () {
        this.start == this.pos && (this.pos += 1), (this.start = this.pos);
      }),
      (e.QueryLexer.prototype.backup = function () {
        this.pos -= 1;
      }),
      (e.QueryLexer.prototype.acceptDigitRun = function () {
        var t, n;
        do {
          (t = this.next()), (n = t.charCodeAt(0));
        } while (n > 47 && n < 58);
        t != e.QueryLexer.EOS && this.backup();
      }),
      (e.QueryLexer.prototype.more = function () {
        return this.pos < this.length;
      }),
      (e.QueryLexer.EOS = "EOS"),
      (e.QueryLexer.FIELD = "FIELD"),
      (e.QueryLexer.TERM = "TERM"),
      (e.QueryLexer.EDIT_DISTANCE = "EDIT_DISTANCE"),
      (e.QueryLexer.BOOST = "BOOST"),
      (e.QueryLexer.PRESENCE = "PRESENCE"),
      (e.QueryLexer.lexField = function (t) {
        return (
          t.backup(),
          t.emit(e.QueryLexer.FIELD),
          t.ignore(),
          e.QueryLexer.lexText
        );
      }),
      (e.QueryLexer.lexTerm = function (t) {
        if (
          (t.width() > 1 && (t.backup(), t.emit(e.QueryLexer.TERM)),
          t.ignore(),
          t.more())
        )
          return e.QueryLexer.lexText;
      }),
      (e.QueryLexer.lexEditDistance = function (t) {
        return (
          t.ignore(),
          t.acceptDigitRun(),
          t.emit(e.QueryLexer.EDIT_DISTANCE),
          e.QueryLexer.lexText
        );
      }),
      (e.QueryLexer.lexBoost = function (t) {
        return (
          t.ignore(),
          t.acceptDigitRun(),
          t.emit(e.QueryLexer.BOOST),
          e.QueryLexer.lexText
        );
      }),
      (e.QueryLexer.lexEOS = function (t) {
        t.width() > 0 && t.emit(e.QueryLexer.TERM);
      }),
      (e.QueryLexer.termSeparator = e.tokenizer.separator),
      (e.QueryLexer.lexText = function (t) {
        for (;;) {
          var n = t.next();
          if (n == e.QueryLexer.EOS) return e.QueryLexer.lexEOS;
          if (92 != n.charCodeAt(0)) {
            if (":" == n) return e.QueryLexer.lexField;
            if ("~" == n)
              return (
                t.backup(),
                t.width() > 0 && t.emit(e.QueryLexer.TERM),
                e.QueryLexer.lexEditDistance
              );
            if ("^" == n)
              return (
                t.backup(),
                t.width() > 0 && t.emit(e.QueryLexer.TERM),
                e.QueryLexer.lexBoost
              );
            if ("+" == n && 1 === t.width())
              return t.emit(e.QueryLexer.PRESENCE), e.QueryLexer.lexText;
            if ("-" == n && 1 === t.width())
              return t.emit(e.QueryLexer.PRESENCE), e.QueryLexer.lexText;
            if (n.match(e.QueryLexer.termSeparator))
              return e.QueryLexer.lexTerm;
          } else t.escapeCharacter();
        }
      }),
      (e.QueryParser = function (t, n) {
        (this.lexer = new e.QueryLexer(t)),
          (this.query = n),
          (this.currentClause = {}),
          (this.lexemeIdx = 0);
      }),
      (e.QueryParser.prototype.parse = function () {
        this.lexer.run(), (this.lexemes = this.lexer.lexemes);
        for (var t = e.QueryParser.parseClause; t; ) t = t(this);
        return this.query;
      }),
      (e.QueryParser.prototype.peekLexeme = function () {
        return this.lexemes[this.lexemeIdx];
      }),
      (e.QueryParser.prototype.consumeLexeme = function () {
        var e = this.peekLexeme();
        return (this.lexemeIdx += 1), e;
      }),
      (e.QueryParser.prototype.nextClause = function () {
        var e = this.currentClause;
        this.query.clause(e), (this.currentClause = {});
      }),
      (e.QueryParser.parseClause = function (t) {
        var n = t.peekLexeme();
        if (n != undefined)
          switch (n.type) {
            case e.QueryLexer.PRESENCE:
              return e.QueryParser.parsePresence;
            case e.QueryLexer.FIELD:
              return e.QueryParser.parseField;
            case e.QueryLexer.TERM:
              return e.QueryParser.parseTerm;
            default:
              var r = "expected either a field or a term, found " + n.type;
              throw (
                (n.str.length >= 1 && (r += " with value '" + n.str + "'"),
                new e.QueryParseError(r, n.start, n.end))
              );
          }
      }),
      (e.QueryParser.parsePresence = function (t) {
        var n = t.consumeLexeme();
        if (n != undefined) {
          switch (n.str) {
            case "-":
              t.currentClause.presence = e.Query.presence.PROHIBITED;
              break;
            case "+":
              t.currentClause.presence = e.Query.presence.REQUIRED;
              break;
            default:
              var r = "unrecognised presence operator'" + n.str + "'";
              throw new e.QueryParseError(r, n.start, n.end);
          }
          var i = t.peekLexeme();
          if (i == undefined) {
            var r = "expecting term or field, found nothing";
            throw new e.QueryParseError(r, n.start, n.end);
          }
          switch (i.type) {
            case e.QueryLexer.FIELD:
              return e.QueryParser.parseField;
            case e.QueryLexer.TERM:
              return e.QueryParser.parseTerm;
            default:
              var r = "expecting term or field, found '" + i.type + "'";
              throw new e.QueryParseError(r, i.start, i.end);
          }
        }
      }),
      (e.QueryParser.parseField = function (t) {
        var n = t.consumeLexeme();
        if (n != undefined) {
          if (-1 == t.query.allFields.indexOf(n.str)) {
            var r = t.query.allFields
                .map(function (e) {
                  return "'" + e + "'";
                })
                .join(", "),
              i = "unrecognised field '" + n.str + "', possible fields: " + r;
            throw new e.QueryParseError(i, n.start, n.end);
          }
          t.currentClause.fields = [n.str];
          var o = t.peekLexeme();
          if (o == undefined) {
            var i = "expecting term, found nothing";
            throw new e.QueryParseError(i, n.start, n.end);
          }
          switch (o.type) {
            case e.QueryLexer.TERM:
              return e.QueryParser.parseTerm;
            default:
              var i = "expecting term, found '" + o.type + "'";
              throw new e.QueryParseError(i, o.start, o.end);
          }
        }
      }),
      (e.QueryParser.parseTerm = function (t) {
        var n = t.consumeLexeme();
        if (n != undefined) {
          (t.currentClause.term = n.str.toLowerCase()),
            -1 != n.str.indexOf("*") && (t.currentClause.usePipeline = !1);
          var r = t.peekLexeme();
          if (r == undefined) return void t.nextClause();
          switch (r.type) {
            case e.QueryLexer.TERM:
              return t.nextClause(), e.QueryParser.parseTerm;
            case e.QueryLexer.FIELD:
              return t.nextClause(), e.QueryParser.parseField;
            case e.QueryLexer.EDIT_DISTANCE:
              return e.QueryParser.parseEditDistance;
            case e.QueryLexer.BOOST:
              return e.QueryParser.parseBoost;
            case e.QueryLexer.PRESENCE:
              return t.nextClause(), e.QueryParser.parsePresence;
            default:
              var i = "Unexpected lexeme type '" + r.type + "'";
              throw new e.QueryParseError(i, r.start, r.end);
          }
        }
      }),
      (e.QueryParser.parseEditDistance = function (t) {
        var n = t.consumeLexeme();
        if (n != undefined) {
          var r = parseInt(n.str, 10);
          if (isNaN(r)) {
            var i = "edit distance must be numeric";
            throw new e.QueryParseError(i, n.start, n.end);
          }
          t.currentClause.editDistance = r;
          var o = t.peekLexeme();
          if (o == undefined) return void t.nextClause();
          switch (o.type) {
            case e.QueryLexer.TERM:
              return t.nextClause(), e.QueryParser.parseTerm;
            case e.QueryLexer.FIELD:
              return t.nextClause(), e.QueryParser.parseField;
            case e.QueryLexer.EDIT_DISTANCE:
              return e.QueryParser.parseEditDistance;
            case e.QueryLexer.BOOST:
              return e.QueryParser.parseBoost;
            case e.QueryLexer.PRESENCE:
              return t.nextClause(), e.QueryParser.parsePresence;
            default:
              var i = "Unexpected lexeme type '" + o.type + "'";
              throw new e.QueryParseError(i, o.start, o.end);
          }
        }
      }),
      (e.QueryParser.parseBoost = function (t) {
        var n = t.consumeLexeme();
        if (n != undefined) {
          var r = parseInt(n.str, 10);
          if (isNaN(r)) {
            var i = "boost must be numeric";
            throw new e.QueryParseError(i, n.start, n.end);
          }
          t.currentClause.boost = r;
          var o = t.peekLexeme();
          if (o == undefined) return void t.nextClause();
          switch (o.type) {
            case e.QueryLexer.TERM:
              return t.nextClause(), e.QueryParser.parseTerm;
            case e.QueryLexer.FIELD:
              return t.nextClause(), e.QueryParser.parseField;
            case e.QueryLexer.EDIT_DISTANCE:
              return e.QueryParser.parseEditDistance;
            case e.QueryLexer.BOOST:
              return e.QueryParser.parseBoost;
            case e.QueryLexer.PRESENCE:
              return t.nextClause(), e.QueryParser.parsePresence;
            default:
              var i = "Unexpected lexeme type '" + o.type + "'";
              throw new e.QueryParseError(i, o.start, o.end);
          }
        }
      }),
      (function (e, t) {
        "function" == typeof define && define.amd
          ? define(t)
          : "object" == typeof exports
          ? (module.exports = t())
          : (e.lunr = t());
      })(this, function () {
        return e;
      });
  })()
  /*
   * jQuery Highlight plugin
   *
   * Based on highlight v3 by Johann Burkard
   * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
   *
   * Code a little bit refactored and cleaned (in my humble opinion).
   * Most important changes:
   *  - has an option to highlight only entire words (wordsOnly - false by default),
   *  - has an option to be case sensitive (caseSensitive - false by default)
   *  - highlight element tag and class names can be specified in options
   *
   * Usage:
   *   // wrap every occurrance of text 'lorem' in content
   *   // with <span class='highlight'> (default options)
   *   $('#content').highlight('lorem');
   *
   *   // search for and highlight more terms at once
   *   // so you can save some time on traversing DOM
   *   $('#content').highlight(['lorem', 'ipsum']);
   *   $('#content').highlight('lorem ipsum');
   *
   *   // search only for entire word 'lorem'
   *   $('#content').highlight('lorem', { wordsOnly: true });
   *
   *   // don't ignore case during search of term 'lorem'
   *   $('#content').highlight('lorem', { caseSensitive: true });
   *
   *   // wrap every occurrance of term 'ipsum' in content
   *   // with <em class='important'>
   *   $('#content').highlight('ipsum', { element: 'em', className: 'important' });
   *
   *   // remove default highlight
   *   $('#content').unhighlight();
   *
   *   // remove custom highlight
   *   $('#content').unhighlight({ element: 'em', className: 'important' });
   *
   *
   * Copyright (c) 2009 Bartek Szopka
   *
   * Licensed under MIT license.
   *
   */,
  jQuery.extend({
    highlight: function (e, t, n, r) {
      if (3 === e.nodeType) {
        var i = e.data.match(t);
        if (i) {
          var o = document.createElement(n || "span");
          o.className = r || "highlight";
          var s = e.splitText(i.index);
          s.splitText(i[0].length);
          var a = s.cloneNode(!0);
          return o.appendChild(a), s.parentNode.replaceChild(o, s), 1;
        }
      } else if (
        1 === e.nodeType &&
        e.childNodes &&
        !/(script|style)/i.test(e.tagName) &&
        (e.tagName !== n.toUpperCase() || e.className !== r)
      )
        for (var u = 0; u < e.childNodes.length; u++)
          u += jQuery.highlight(e.childNodes[u], t, n, r);
      return 0;
    },
  }),
  (jQuery.fn.unhighlight = function (e) {
    var t = { className: "highlight", element: "span" };
    return (
      jQuery.extend(t, e),
      this.find(t.element + "." + t.className)
        .each(function () {
          var e = this.parentNode;
          e.replaceChild(this.firstChild, this), e.normalize();
        })
        .end()
    );
  }),
  (jQuery.fn.highlight = function (e, t) {
    var n = {
      className: "highlight",
      element: "span",
      caseSensitive: !1,
      wordsOnly: !1,
    };
    if (
      (jQuery.extend(n, t),
      e.constructor === String && (e = [e]),
      (e = jQuery.grep(e, function (e) {
        return "" != e;
      })),
      (e = jQuery.map(e, function (e) {
        return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      })),
      0 == e.length)
    )
      return this;
    var r = n.caseSensitive ? "" : "i",
      i = "(" + e.join("|") + ")";
    n.wordsOnly && (i = "\\b" + i + "\\b");
    var o = new RegExp(i, r);
    return this.each(function () {
      jQuery.highlight(this, o, n.element, n.className);
    });
  }),
  (function () {
    "use strict";
    function e() {
      (u = lunr(function () {
        this.ref("id"),
          this.field("title", { boost: 10 }),
          this.field("body"),
          this.pipeline.add(lunr.trimmer, lunr.stopWordFilter);
        var e = this;
        $("h1, h2").each(function () {
          var t = $(this),
            n = t.nextUntil("h1, h2");
          e.add({ id: t.prop("id"), title: t.text(), body: n.text() });
        });
      })),
        t();
    }
    function t() {
      u.tokenSet.toArray().length > 5e3 && (c = 300);
    }
    function n() {
      (s = $(".content")),
        (a = $(".search-results")),
        $("#input-search").on("keyup", function (e) {
          !(function () {
            return function (e, t) {
              clearTimeout(f), (f = setTimeout(e, t));
            };
          })()(function () {
            r(e);
          }, c);
        });
    }
    function r(e) {
      var t = $("#input-search")[0];
      if (
        (o(),
        a.addClass("visible"),
        27 === e.keyCode && (t.value = ""),
        t.value)
      ) {
        var n = u.search(t.value).filter(function (e) {
          return e.score > 1e-4;
        });
        n.length
          ? (a.empty(),
            $.each(n, function (e, t) {
              var n = document.getElementById(t.ref);
              a.append(
                "<li><a href='#" + t.ref + "'>" + $(n).text() + "</a></li>"
              );
            }),
            i.call(t))
          : (a.html("<li></li>"),
            $(".search-results li").text(
              'No Results Found for "' + t.value + '"'
            ));
      } else o(), a.removeClass("visible");
    }
    function i() {
      this.value && s.highlight(this.value, l);
    }
    function o() {
      s.unhighlight(l);
    }
    var s,
      a,
      u,
      l = { element: "span", className: "search-highlight" },
      c = 0,
      f = 0;
    $(e), $(n);
  })();
