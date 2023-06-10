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
      a = {};
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
          n = t - a.time,
          r = e.clientX,
          i = e.clientY,
          s = [Math.abs(a.x - r), Math.abs(a.y - i)],
          u = o(e.target, "A") || e.target,
          c = u.nodeName,
          l = "A" === c,
          f = window.navigator.standalone && l && e.target.getAttribute("href");
        if (
          ((a.time = t),
          (a.x = r),
          (a.y = i),
          ((!e.simulated &&
            (n < 500 || (n < 1500 && s[0] < 50 && s[1] < 50))) ||
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
    function a(e, t, n) {
      return xe(t)
        ? Ee.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n;
          })
        : t.nodeType
        ? Ee.grep(e, function (e) {
            return (e === t) !== n;
          })
        : "string" != typeof t
        ? Ee.grep(e, function (e) {
            return de.call(t, e) > -1 !== n;
          })
        : Ee.filter(t, e, n);
    }
    function s(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; );
      return e;
    }
    function u(e) {
      var t = {};
      return (
        Ee.each(e.match(He) || [], function (e, n) {
          t[n] = !0;
        }),
        t
      );
    }
    function c(e) {
      return e;
    }
    function l(e) {
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
        Ee.ready();
    }
    function p(e, t) {
      return t.toUpperCase();
    }
    function h(e) {
      return e.replace(Re, "ms-").replace(Me, p);
    }
    function g() {
      this.expando = Ee.expando + g.uid++;
    }
    function m(e) {
      return (
        "true" === e ||
        ("false" !== e &&
          ("null" === e
            ? null
            : e === +e + ""
            ? +e
            : _e.test(e)
            ? JSON.parse(e)
            : e))
      );
    }
    function y(e, t, n) {
      var r;
      if (n === undefined && 1 === e.nodeType)
        if (
          ((r = "data-" + t.replace(ze, "-$&").toLowerCase()),
          "string" == typeof (n = e.getAttribute(r)))
        ) {
          try {
            n = m(n);
          } catch (e) {}
          Fe.set(e, t, n);
        } else n = undefined;
      return n;
    }
    function v(e, t, n, r) {
      var i,
        o,
        a = 20,
        s = r
          ? function () {
              return r.cur();
            }
          : function () {
              return Ee.css(e, t, "");
            },
        u = s(),
        c = (n && n[3]) || (Ee.cssNumber[t] ? "" : "px"),
        l =
          e.nodeType &&
          (Ee.cssNumber[t] || ("px" !== c && +u)) &&
          Ue.exec(Ee.css(e, t));
      if (l && l[3] !== c) {
        for (u /= 2, c = c || l[3], l = +u || 1; a--; )
          Ee.style(e, t, l + c),
            (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
            (l /= o);
        (l *= 2), Ee.style(e, t, l + c), (n = n || []);
      }
      return (
        n &&
          ((l = +l || +u || 0),
          (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
          r && ((r.unit = c), (r.start = l), (r.end = i))),
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
        (i = Ee.css(t, "display")),
        t.parentNode.removeChild(t),
        "none" === i && (i = "block"),
        (Ke[r] = i),
        i)
      );
    }
    function b(e, t) {
      for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
        (r = e[o]),
          r.style &&
            ((n = r.style.display),
            t
              ? ("none" === n &&
                  ((i[o] = Be.get(r, "display") || null),
                  i[o] || (r.style.display = "")),
                "" === r.style.display && Je(r) && (i[o] = x(r)))
              : "none" !== n && ((i[o] = "none"), Be.set(r, "display", n)));
      for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
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
        t === undefined || (t && o(e, t)) ? Ee.merge([e], n) : n
      );
    }
    function T(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
        Be.set(e[n], "globalEval", !t || Be.get(t[n], "globalEval"));
    }
    function C(e, t, n, i, o) {
      for (
        var a,
          s,
          u,
          c,
          l,
          f,
          d = t.createDocumentFragment(),
          p = [],
          h = 0,
          g = e.length;
        h < g;
        h++
      )
        if ((a = e[h]) || 0 === a)
          if ("object" === r(a)) Ee.merge(p, a.nodeType ? [a] : a);
          else if (rt.test(a)) {
            for (
              s = s || d.appendChild(t.createElement("div")),
                u = (et.exec(a) || ["", ""])[1].toLowerCase(),
                c = nt[u] || nt._default,
                s.innerHTML = c[1] + Ee.htmlPrefilter(a) + c[2],
                f = c[0];
              f--;

            )
              s = s.lastChild;
            Ee.merge(p, s.childNodes), (s = d.firstChild), (s.textContent = "");
          } else p.push(t.createTextNode(a));
      for (d.textContent = "", h = 0; (a = p[h++]); )
        if (i && Ee.inArray(a, i) > -1) o && o.push(a);
        else if (
          ((l = Ve(a)), (s = w(d.appendChild(a), "script")), l && T(s), n)
        )
          for (f = 0; (a = s[f++]); ) tt.test(a.type || "") && n.push(a);
      return d;
    }
    function E() {
      return !0;
    }
    function k() {
      return !1;
    }
    function S(e, t) {
      return (e === A()) == ("focus" === t);
    }
    function A() {
      try {
        return we.activeElement;
      } catch (e) {}
    }
    function j(e, t, n, r, i, o) {
      var a, s;
      if ("object" == typeof t) {
        "string" != typeof n && ((r = r || n), (n = undefined));
        for (s in t) j(e, s, n, r, t[s], o);
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
          ((a = i),
          (i = function (e) {
            return Ee().off(e), a.apply(this, arguments);
          }),
          (i.guid = a.guid || (a.guid = Ee.guid++))),
        e.each(function () {
          Ee.event.add(this, t, i, r, n);
        })
      );
    }
    function D(e, t, n) {
      if (!n) return void (Be.get(e, t) === undefined && Ee.event.add(e, t, E));
      Be.set(e, t, !1),
        Ee.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var r,
              i,
              o = Be.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (o.length)
                (Ee.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((o = ce.call(arguments)),
                Be.set(this, t, o),
                (r = n(this, t)),
                this[t](),
                (i = Be.get(this, t)),
                o !== i || r ? Be.set(this, t, !1) : (i = {}),
                o !== i)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), i.value
                );
            } else
              o.length &&
                (Be.set(this, t, {
                  value: Ee.event.trigger(
                    Ee.extend(o[0], Ee.Event.prototype),
                    o.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        });
    }
    function N(e, t) {
      return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr")
        ? Ee(e).children("tbody")[0] || e
        : e;
    }
    function L(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function q(e) {
      return (
        "true/" === (e.type || "").slice(0, 5)
          ? (e.type = e.type.slice(5))
          : e.removeAttribute("type"),
        e
      );
    }
    function I(e, t) {
      var n, r, i, o, a, s, u;
      if (1 === t.nodeType) {
        if (Be.hasData(e) && ((o = Be.get(e)), (u = o.events))) {
          Be.remove(t, "handle events");
          for (i in u)
            for (n = 0, r = u[i].length; n < r; n++)
              Ee.event.add(t, i, u[i][n]);
        }
        Fe.hasData(e) &&
          ((a = Fe.access(e)), (s = Ee.extend({}, a)), Fe.set(t, s));
      }
    }
    function H(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && Ze.test(e.type)
        ? (t.checked = e.checked)
        : ("input" !== n && "textarea" !== n) ||
          (t.defaultValue = e.defaultValue);
    }
    function O(e, t, r, i) {
      t = le(t);
      var o,
        a,
        s,
        u,
        c,
        l,
        f = 0,
        d = e.length,
        p = d - 1,
        h = t[0],
        g = xe(h);
      if (g || (d > 1 && "string" == typeof h && !ve.checkClone && ut.test(h)))
        return e.each(function (n) {
          var o = e.eq(n);
          g && (t[0] = h.call(this, n, o.html())), O(o, t, r, i);
        });
      if (
        d &&
        ((o = C(t, e[0].ownerDocument, !1, e, i)),
        (a = o.firstChild),
        1 === o.childNodes.length && (o = a),
        a || i)
      ) {
        for (s = Ee.map(w(o, "script"), L), u = s.length; f < d; f++)
          (c = o),
            f !== p &&
              ((c = Ee.clone(c, !0, !0)), u && Ee.merge(s, w(c, "script"))),
            r.call(e[f], c, f);
        if (u)
          for (
            l = s[s.length - 1].ownerDocument, Ee.map(s, q), f = 0;
            f < u;
            f++
          )
            (c = s[f]),
              tt.test(c.type || "") &&
                !Be.access(c, "globalEval") &&
                Ee.contains(l, c) &&
                (c.src && "module" !== (c.type || "").toLowerCase()
                  ? Ee._evalUrl &&
                    !c.noModule &&
                    Ee._evalUrl(
                      c.src,
                      { nonce: c.nonce || c.getAttribute("nonce") },
                      l
                    )
                  : n(c.textContent.replace(ct, ""), c, l));
      }
      return e;
    }
    function $(e, t, n) {
      for (var r, i = t ? Ee.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
        n || 1 !== r.nodeType || Ee.cleanData(w(r)),
          r.parentNode &&
            (n && Ve(r) && T(w(r, "script")), r.parentNode.removeChild(r));
      return e;
    }
    function P(e, t, n) {
      var r,
        i,
        o,
        a,
        s = e.style;
      return (
        (n = n || ft(e)),
        n &&
          ((a = n.getPropertyValue(t) || n[t]),
          "" !== a || Ve(e) || (a = Ee.style(e, t)),
          !ve.pixelBoxStyles() &&
            lt.test(a) &&
            pt.test(t) &&
            ((r = s.width),
            (i = s.minWidth),
            (o = s.maxWidth),
            (s.minWidth = s.maxWidth = s.width = a),
            (a = n.width),
            (s.width = r),
            (s.minWidth = i),
            (s.maxWidth = o))),
        a !== undefined ? a + "" : a
      );
    }
    function R(e, t) {
      return {
        get: function () {
          return e()
            ? void delete this.get
            : (this.get = t).apply(this, arguments);
        },
      };
    }
    function M(e) {
      for (var t = e[0].toUpperCase() + e.slice(1), n = ht.length; n--; )
        if ((e = ht[n] + t) in gt) return e;
    }
    function W(e) {
      var t = Ee.cssProps[e] || mt[e];
      return t || (e in gt ? e : (mt[e] = M(e) || e));
    }
    function B(e, t, n) {
      var r = Ue.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function F(e, t, n, r, i, o) {
      var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; a < 4; a += 2)
        "margin" === n && (u += Ee.css(e, n + Ye[a], !0, i)),
          r
            ? ("content" === n && (u -= Ee.css(e, "padding" + Ye[a], !0, i)),
              "margin" !== n &&
                (u -= Ee.css(e, "border" + Ye[a] + "Width", !0, i)))
            : ((u += Ee.css(e, "padding" + Ye[a], !0, i)),
              "padding" !== n
                ? (u += Ee.css(e, "border" + Ye[a] + "Width", !0, i))
                : (s += Ee.css(e, "border" + Ye[a] + "Width", !0, i)));
      return (
        !r &&
          o >= 0 &&
          (u +=
            Math.max(
              0,
              Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
              )
            ) || 0),
        u
      );
    }
    function _(e, t, n) {
      var r = ft(e),
        i = !ve.boxSizingReliable() || n,
        a = i && "border-box" === Ee.css(e, "boxSizing", !1, r),
        s = a,
        u = P(e, t, r),
        c = "offset" + t[0].toUpperCase() + t.slice(1);
      if (lt.test(u)) {
        if (!n) return u;
        u = "auto";
      }
      return (
        ((!ve.boxSizingReliable() && a) ||
          (!ve.reliableTrDimensions() && o(e, "tr")) ||
          "auto" === u ||
          (!parseFloat(u) && "inline" === Ee.css(e, "display", !1, r))) &&
          e.getClientRects().length &&
          ((a = "border-box" === Ee.css(e, "boxSizing", !1, r)),
          (s = c in e) && (u = e[c])),
        (u = parseFloat(u) || 0) +
          F(e, t, n || (a ? "border" : "content"), s, r, u) +
          "px"
      );
    }
    function z(e, t, n, r, i) {
      return new z.prototype.init(e, t, n, r, i);
    }
    function X() {
      Tt &&
        (!1 === we.hidden && e.requestAnimationFrame
          ? e.requestAnimationFrame(X)
          : e.setTimeout(X, Ee.fx.interval),
        Ee.fx.tick());
    }
    function U() {
      return (
        e.setTimeout(function () {
          wt = undefined;
        }),
        (wt = Date.now())
      );
    }
    function Y(e, t) {
      var n,
        r = 0,
        i = { height: e };
      for (t = t ? 1 : 0; r < 4; r += 2 - t)
        (n = Ye[r]), (i["margin" + n] = i["padding" + n] = e);
      return t && (i.opacity = i.width = e), i;
    }
    function Q(e, t, n) {
      for (
        var r,
          i = (J.tweeners[t] || []).concat(J.tweeners["*"]),
          o = 0,
          a = i.length;
        o < a;
        o++
      )
        if ((r = i[o].call(n, t, e))) return r;
    }
    function V(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        c,
        l,
        f = "width" in t || "height" in t,
        d = this,
        p = {},
        h = e.style,
        g = e.nodeType && Je(e),
        m = Be.get(e, "fxshow");
      n.queue ||
        ((a = Ee._queueHooks(e, "fx")),
        null == a.unqueued &&
          ((a.unqueued = 0),
          (s = a.empty.fire),
          (a.empty.fire = function () {
            a.unqueued || s();
          })),
        a.unqueued++,
        d.always(function () {
          d.always(function () {
            a.unqueued--, Ee.queue(e, "fx").length || a.empty.fire();
          });
        }));
      for (r in t)
        if (((i = t[r]), Ct.test(i))) {
          if (
            (delete t[r],
            (o = o || "toggle" === i),
            i === (g ? "hide" : "show"))
          ) {
            if ("show" !== i || !m || m[r] === undefined) continue;
            g = !0;
          }
          p[r] = (m && m[r]) || Ee.style(e, r);
        }
      if ((u = !Ee.isEmptyObject(t)) || !Ee.isEmptyObject(p)) {
        f &&
          1 === e.nodeType &&
          ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
          (c = m && m.display),
          null == c && (c = Be.get(e, "display")),
          (l = Ee.css(e, "display")),
          "none" === l &&
            (c
              ? (l = c)
              : (b([e], !0),
                (c = e.style.display || c),
                (l = Ee.css(e, "display")),
                b([e]))),
          ("inline" === l || ("inline-block" === l && null != c)) &&
            "none" === Ee.css(e, "float") &&
            (u ||
              (d.done(function () {
                h.display = c;
              }),
              null == c && ((l = h.display), (c = "none" === l ? "" : l))),
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
              : (m = Be.access(e, "fxshow", { display: c })),
            o && (m.hidden = !g),
            g && b([e], !0),
            d.done(function () {
              g || b([e]), Be.remove(e, "fxshow");
              for (r in p) Ee.style(e, r, p[r]);
            })),
            (u = Q(g ? m[r] : 0, r, d)),
            r in m ||
              ((m[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      }
    }
    function G(e, t) {
      var n, r, i, o, a;
      for (n in e)
        if (
          ((r = h(n)),
          (i = t[r]),
          (o = e[n]),
          Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
          n !== r && ((e[r] = o), delete e[n]),
          (a = Ee.cssHooks[r]) && "expand" in a)
        ) {
          (o = a.expand(o)), delete e[r];
          for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
        } else t[r] = i;
    }
    function J(e, t, n) {
      var r,
        i,
        o = 0,
        a = J.prefilters.length,
        s = Ee.Deferred().always(function () {
          delete u.elem;
        }),
        u = function () {
          if (i) return !1;
          for (
            var t = wt || U(),
              n = Math.max(0, c.startTime + c.duration - t),
              r = n / c.duration || 0,
              o = 1 - r,
              a = 0,
              u = c.tweens.length;
            a < u;
            a++
          )
            c.tweens[a].run(o);
          return (
            s.notifyWith(e, [c, o, n]),
            o < 1 && u
              ? n
              : (u || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
          );
        },
        c = s.promise({
          elem: e,
          props: Ee.extend({}, t),
          opts: Ee.extend(
            !0,
            { specialEasing: {}, easing: Ee.easing._default },
            n
          ),
          originalProperties: t,
          originalOptions: n,
          startTime: wt || U(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var r = Ee.Tween(
              e,
              c.opts,
              t,
              n,
              c.opts.specialEasing[t] || c.opts.easing
            );
            return c.tweens.push(r), r;
          },
          stop: function (t) {
            var n = 0,
              r = t ? c.tweens.length : 0;
            if (i) return this;
            for (i = !0; n < r; n++) c.tweens[n].run(1);
            return (
              t
                ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
                : s.rejectWith(e, [c, t]),
              this
            );
          },
        }),
        l = c.props;
      for (G(l, c.opts.specialEasing); o < a; o++)
        if ((r = J.prefilters[o].call(c, e, l, c.opts)))
          return (
            xe(r.stop) &&
              (Ee._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
            r
          );
      return (
        Ee.map(l, Q, c),
        xe(c.opts.start) && c.opts.start.call(e, c),
        c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always),
        Ee.fx.timer(Ee.extend(u, { elem: e, anim: c, queue: c.opts.queue })),
        c
      );
    }
    function K(e) {
      return (e.match(He) || []).join(" ");
    }
    function Z(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function ee(e) {
      return Array.isArray(e)
        ? e
        : "string" == typeof e
        ? e.match(He) || []
        : [];
    }
    function te(e, t, n, i) {
      var o;
      if (Array.isArray(t))
        Ee.each(t, function (t, r) {
          n || Ot.test(e)
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
          o = t.toLowerCase().match(He) || [];
        if (xe(n))
          for (; (r = o[i++]); )
            "+" === r[0]
              ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
              : (e[r] = e[r] || []).push(n);
      };
    }
    function re(e, t, n, r) {
      function i(s) {
        var u;
        return (
          (o[s] = !0),
          Ee.each(e[s] || [], function (e, s) {
            var c = s(t, n, r);
            return "string" != typeof c || a || o[c]
              ? a
                ? !(u = c)
                : void 0
              : (t.dataTypes.unshift(c), i(c), !1);
          }),
          u
        );
      }
      var o = {},
        a = e === Yt;
      return i(t.dataTypes[0]) || (!o["*"] && i("*"));
    }
    function ie(e, t) {
      var n,
        r,
        i = Ee.ajaxSettings.flatOptions || {};
      for (n in t) t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && Ee.extend(!0, e, r), e;
    }
    function oe(e, t, n) {
      for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
        u.shift(),
          r === undefined &&
            (r = e.mimeType || t.getResponseHeader("Content-Type"));
      if (r)
        for (i in s)
          if (s[i] && s[i].test(r)) {
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
          a || (a = i);
        }
        o = o || a;
      }
      if (o) return o !== u[0] && u.unshift(o), n[o];
    }
    function ae(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        c = {},
        l = e.dataTypes.slice();
      if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
      for (o = l.shift(); o; )
        if (
          (e.responseFields[o] && (n[e.responseFields[o]] = t),
          !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          (u = o),
          (o = l.shift()))
        )
          if ("*" === o) o = u;
          else if ("*" !== u && u !== o) {
            if (!(a = c[u + " " + o] || c["* " + o]))
              for (i in c)
                if (
                  ((s = i.split(" ")),
                  s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]]))
                ) {
                  !0 === a
                    ? (a = c[i])
                    : !0 !== c[i] && ((o = s[0]), l.unshift(s[1]));
                  break;
                }
            if (!0 !== a)
              if (a && e["throws"]) t = a(t);
              else
                try {
                  t = a(t);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: a ? e : "No conversion from " + u + " to " + o,
                  };
                }
          }
      return { state: "success", data: t };
    }
    var se = [],
      ue = Object.getPrototypeOf,
      ce = se.slice,
      le = se.flat
        ? function (e) {
            return se.flat.call(e);
          }
        : function (e) {
            return se.concat.apply([], e);
          },
      fe = se.push,
      de = se.indexOf,
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
      Ce = "3.5.1",
      Ee = function (e, t) {
        return new Ee.fn.init(e, t);
      };
    (Ee.fn = Ee.prototype =
      {
        jquery: Ce,
        constructor: Ee,
        length: 0,
        toArray: function () {
          return ce.call(this);
        },
        get: function (e) {
          return null == e
            ? ce.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = Ee.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return Ee.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            Ee.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(ce.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            Ee.grep(this, function (e, t) {
              return (t + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            Ee.grep(this, function (e, t) {
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
        sort: se.sort,
        splice: se.splice,
      }),
      (Ee.extend = Ee.fn.extend =
        function () {
          var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            c = !1;
          for (
            "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
              "object" == typeof a || xe(a) || (a = {}),
              s === u && ((a = this), s--);
            s < u;
            s++
          )
            if (null != (e = arguments[s]))
              for (t in e)
                (r = e[t]),
                  "__proto__" !== t &&
                    a !== r &&
                    (c && r && (Ee.isPlainObject(r) || (i = Array.isArray(r)))
                      ? ((n = a[t]),
                        (o =
                          i && !Array.isArray(n)
                            ? []
                            : i || Ee.isPlainObject(n)
                            ? n
                            : {}),
                        (i = !1),
                        (a[t] = Ee.extend(c, o, r)))
                      : r !== undefined && (a[t] = r));
          return a;
        }),
      Ee.extend({
        expando: "jQuery" + (Ce + Math.random()).replace(/\D/g, ""),
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
                ? Ee.merge(n, "string" == typeof e ? [e] : e)
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
          for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
            !t(e[i], i) !== a && r.push(e[i]);
          return r;
        },
        map: function (e, t, n) {
          var r,
            o,
            a = 0,
            s = [];
          if (i(e))
            for (r = e.length; a < r; a++)
              null != (o = t(e[a], a, n)) && s.push(o);
          else for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
          return le(s);
        },
        guid: 1,
        support: ve,
      }),
      "function" == typeof Symbol &&
        (Ee.fn[Symbol.iterator] = se[Symbol.iterator]),
      Ee.each(
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
            a,
            s,
            u,
            c,
            l,
            d = t && t.ownerDocument,
            h = t ? t.nodeType : 9;
          if (
            ((n = n || []),
            "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
          )
            return n;
          if (!r && (q(t), (t = t || I), O)) {
            if (11 !== h && (u = xe.exec(e)))
              if ((i = u[1])) {
                if (9 === h) {
                  if (!(a = t.getElementById(i))) return n;
                  if (a.id === i) return n.push(a), n;
                } else if (
                  d &&
                  (a = d.getElementById(i)) &&
                  M(t, a) &&
                  a.id === i
                )
                  return n.push(a), n;
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
              !Y[e + " "] &&
              (!$ || !$.test(e)) &&
              (1 !== h || "object" !== t.nodeName.toLowerCase())
            ) {
              if (((l = e), (d = t), 1 === h && (fe.test(e) || le.test(e)))) {
                for (
                  d = (be.test(e) && f(t.parentNode)) || t,
                    (d === t && T.scope) ||
                      ((s = t.getAttribute("id"))
                        ? (s = s.replace(Ce, Ee))
                        : t.setAttribute("id", (s = W))),
                    c = S(e),
                    o = c.length;
                  o--;

                )
                  c[o] = (s ? "#" + s : ":scope") + " " + p(c[o]);
                l = c.join(",");
              }
              try {
                return Z.apply(n, d.querySelectorAll(l)), n;
              } catch (t) {
                Y(e, !0);
              } finally {
                s === W && t.removeAttribute("id");
              }
            }
          }
          return j(e.replace(ue, "$1"), t, n, r);
        }
        function n() {
          function e(n, r) {
            return (
              t.push(n + " ") > C.cacheLength && delete e[t.shift()],
              (e[n + " "] = r)
            );
          }
          var t = [];
          return e;
        }
        function r(e) {
          return (e[W] = !0), e;
        }
        function i(e) {
          var t = I.createElement("fieldset");
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
            C.attrHandle[n[r]] = t;
        }
        function a(e, t) {
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
        function s(e) {
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
        function c(e) {
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
        function l(e) {
          return r(function (t) {
            return (
              (t = +t),
              r(function (n, r) {
                for (var i, o = e([], n.length, t), a = o.length; a--; )
                  n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
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
            a = n && "parentNode" === o,
            s = _++;
          return t.first
            ? function (t, n, i) {
                for (; (t = t[r]); )
                  if (1 === t.nodeType || a) return e(t, n, i);
                return !1;
              }
            : function (t, n, u) {
                var c,
                  l,
                  f,
                  d = [F, s];
                if (u) {
                  for (; (t = t[r]); )
                    if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                } else
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || a)
                      if (
                        ((f = t[W] || (t[W] = {})),
                        (l = f[t.uniqueID] || (f[t.uniqueID] = {})),
                        i && i === t.nodeName.toLowerCase())
                      )
                        t = t[r] || t;
                      else {
                        if ((c = l[o]) && c[0] === F && c[1] === s)
                          return (d[2] = c[2]);
                        if (((l[o] = d), (d[2] = e(t, n, u)))) return !0;
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
          for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++)
            (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), c && t.push(s)));
          return a;
        }
        function v(e, t, n, i, o, a) {
          return (
            i && !i[W] && (i = v(i)),
            o && !o[W] && (o = v(o, a)),
            r(function (r, a, s, u) {
              var c,
                l,
                f,
                d = [],
                p = [],
                h = a.length,
                g = r || m(t || "*", s.nodeType ? [s] : s, []),
                v = !e || (!r && t) ? g : y(g, d, e, s, u),
                x = n ? (o || (r ? e : h || i) ? [] : a) : v;
              if ((n && n(v, x, s, u), i))
                for (c = y(x, p), i(c, [], s, u), l = c.length; l--; )
                  (f = c[l]) && (x[p[l]] = !(v[p[l]] = f));
              if (r) {
                if (o || e) {
                  if (o) {
                    for (c = [], l = x.length; l--; )
                      (f = x[l]) && c.push((v[l] = f));
                    o(null, (x = []), c, u);
                  }
                  for (l = x.length; l--; )
                    (f = x[l]) &&
                      (c = o ? te(r, f) : d[l]) > -1 &&
                      (r[c] = !(a[c] = f));
                }
              } else (x = y(x === a ? x.splice(h, x.length) : x)), o ? o(null, a, x, u) : Z.apply(a, x);
            })
          );
        }
        function x(e) {
          for (
            var t,
              n,
              r,
              i = e.length,
              o = C.relative[e[0].type],
              a = o || C.relative[" "],
              s = o ? 1 : 0,
              u = h(
                function (e) {
                  return e === t;
                },
                a,
                !0
              ),
              c = h(
                function (e) {
                  return te(t, e) > -1;
                },
                a,
                !0
              ),
              l = [
                function (e, n, r) {
                  var i =
                    (!o && (r || n !== D)) ||
                    ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
                  return (t = null), i;
                },
              ];
            s < i;
            s++
          )
            if ((n = C.relative[e[s].type])) l = [h(g(l), n)];
            else {
              if (((n = C.filter[e[s].type].apply(null, e[s].matches)), n[W])) {
                for (r = ++s; r < i && !C.relative[e[r].type]; r++);
                return v(
                  s > 1 && g(l),
                  s > 1 &&
                    p(
                      e
                        .slice(0, s - 1)
                        .concat({ value: " " === e[s - 2].type ? "*" : "" })
                    ).replace(ue, "$1"),
                  n,
                  s < r && x(e.slice(s, r)),
                  r < i && x((e = e.slice(r))),
                  r < i && p(e)
                );
              }
              l.push(n);
            }
          return g(l);
        }
        function b(e, n) {
          var i = n.length > 0,
            o = e.length > 0,
            a = function (r, a, s, u, c) {
              var l,
                f,
                d,
                p = 0,
                h = "0",
                g = r && [],
                m = [],
                v = D,
                x = r || (o && C.find.TAG("*", c)),
                b = (F += null == v ? 1 : Math.random() || 0.1),
                w = x.length;
              for (
                c && (D = a == I || a || c);
                h !== w && null != (l = x[h]);
                h++
              ) {
                if (o && l) {
                  for (
                    f = 0, a || l.ownerDocument == I || (q(l), (s = !O));
                    (d = e[f++]);

                  )
                    if (d(l, a || I, s)) {
                      u.push(l);
                      break;
                    }
                  c && (F = b);
                }
                i && ((l = !d && l) && p--, r && g.push(l));
              }
              if (((p += h), i && h !== p)) {
                for (f = 0; (d = n[f++]); ) d(g, m, a, s);
                if (r) {
                  if (p > 0) for (; h--; ) g[h] || m[h] || (m[h] = J.call(u));
                  m = y(m);
                }
                Z.apply(u, m),
                  c &&
                    !r &&
                    m.length > 0 &&
                    p + n.length > 1 &&
                    t.uniqueSort(u);
              }
              return c && ((F = b), (D = v)), g;
            };
          return i ? r(a) : a;
        }
        var w,
          T,
          C,
          E,
          k,
          S,
          A,
          j,
          D,
          N,
          L,
          q,
          I,
          H,
          O,
          $,
          P,
          R,
          M,
          W = "sizzle" + 1 * new Date(),
          B = e.document,
          F = 0,
          _ = 0,
          z = n(),
          X = n(),
          U = n(),
          Y = n(),
          Q = function (e, t) {
            return e === t && (L = !0), 0;
          },
          V = {}.hasOwnProperty,
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
          ae =
            ":(" +
            ie +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            oe +
            ")*)|.*)\\)|)",
          se = new RegExp(re + "+", "g"),
          ue = new RegExp(
            "^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$",
            "g"
          ),
          ce = new RegExp("^" + re + "*," + re + "*"),
          le = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
          fe = new RegExp(re + "|>"),
          de = new RegExp(ae),
          pe = new RegExp("^" + ie + "$"),
          he = {
            ID: new RegExp("^#(" + ie + ")"),
            CLASS: new RegExp("^\\.(" + ie + ")"),
            TAG: new RegExp("^(" + ie + "|[*])"),
            ATTR: new RegExp("^" + oe),
            PSEUDO: new RegExp("^" + ae),
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
          Ce = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          Ee = function (e, t) {
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
            q();
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
          Z.apply((G = ee.call(B.childNodes)), B.childNodes),
            G[B.childNodes.length].nodeType;
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
          (q = t.setDocument =
            function (e) {
              var t,
                n,
                r = e ? e.ownerDocument || e : B;
              return r != I && 9 === r.nodeType && r.documentElement
                ? ((I = r),
                  (H = I.documentElement),
                  (O = !k(I)),
                  B != I &&
                    (n = I.defaultView) &&
                    n.top !== n &&
                    (n.addEventListener
                      ? n.addEventListener("unload", ke, !1)
                      : n.attachEvent && n.attachEvent("onunload", ke)),
                  (T.scope = i(function (e) {
                    return (
                      H.appendChild(e).appendChild(I.createElement("div")),
                      "undefined" != typeof e.querySelectorAll &&
                        !e.querySelectorAll(":scope fieldset div").length
                    );
                  })),
                  (T.attributes = i(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (T.getElementsByTagName = i(function (e) {
                    return (
                      e.appendChild(I.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (T.getElementsByClassName = ve.test(
                    I.getElementsByClassName
                  )),
                  (T.getById = i(function (e) {
                    return (
                      (H.appendChild(e).id = W),
                      !I.getElementsByName || !I.getElementsByName(W).length
                    );
                  })),
                  T.getById
                    ? ((C.filter.ID = function (e) {
                        var t = e.replace(we, Te);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (C.find.ID = function (e, t) {
                        if ("undefined" != typeof t.getElementById && O) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((C.filter.ID = function (e) {
                        var t = e.replace(we, Te);
                        return function (e) {
                          var n =
                            "undefined" != typeof e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (C.find.ID = function (e, t) {
                        if ("undefined" != typeof t.getElementById && O) {
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
                  (C.find.TAG = T.getElementsByTagName
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
                  (C.find.CLASS =
                    T.getElementsByClassName &&
                    function (e, t) {
                      if ("undefined" != typeof t.getElementsByClassName && O)
                        return t.getElementsByClassName(e);
                    }),
                  (P = []),
                  ($ = []),
                  (T.qsa = ve.test(I.querySelectorAll)) &&
                    (i(function (e) {
                      var t;
                      (H.appendChild(e).innerHTML =
                        "<a id='" +
                        W +
                        "'></a><select id='" +
                        W +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          $.push("[*^$]=" + re + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          $.push("\\[" + re + "*(?:value|" + ne + ")"),
                        e.querySelectorAll("[id~=" + W + "-]").length ||
                          $.push("~="),
                        (t = I.createElement("input")),
                        t.setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length ||
                          $.push(
                            "\\[" +
                              re +
                              "*name" +
                              re +
                              "*=" +
                              re +
                              "*(?:''|\"\")"
                          ),
                        e.querySelectorAll(":checked").length ||
                          $.push(":checked"),
                        e.querySelectorAll("a#" + W + "+*").length ||
                          $.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        $.push("[\\r\\n\\f]");
                    }),
                    i(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = I.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          $.push("name" + re + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          $.push(":enabled", ":disabled"),
                        (H.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          $.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        $.push(",.*:");
                    })),
                  (T.matchesSelector = ve.test(
                    (R =
                      H.matches ||
                      H.webkitMatchesSelector ||
                      H.mozMatchesSelector ||
                      H.oMatchesSelector ||
                      H.msMatchesSelector)
                  )) &&
                    i(function (e) {
                      (T.disconnectedMatch = R.call(e, "*")),
                        R.call(e, "[s!='']:x"),
                        P.push("!=", ae);
                    }),
                  ($ = $.length && new RegExp($.join("|"))),
                  (P = P.length && new RegExp(P.join("|"))),
                  (t = ve.test(H.compareDocumentPosition)),
                  (M =
                    t || ve.test(H.contains)
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
                  (Q = t
                    ? function (e, t) {
                        if (e === t) return (L = !0), 0;
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
                            ? e == I || (e.ownerDocument == B && M(B, e))
                              ? -1
                              : t == I || (t.ownerDocument == B && M(B, t))
                              ? 1
                              : N
                              ? te(N, e) - te(N, t)
                              : 0
                            : 4 & n
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (L = !0), 0;
                        var n,
                          r = 0,
                          i = e.parentNode,
                          o = t.parentNode,
                          s = [e],
                          u = [t];
                        if (!i || !o)
                          return e == I
                            ? -1
                            : t == I
                            ? 1
                            : i
                            ? -1
                            : o
                            ? 1
                            : N
                            ? te(N, e) - te(N, t)
                            : 0;
                        if (i === o) return a(e, t);
                        for (n = e; (n = n.parentNode); ) s.unshift(n);
                        for (n = t; (n = n.parentNode); ) u.unshift(n);
                        for (; s[r] === u[r]; ) r++;
                        return r
                          ? a(s[r], u[r])
                          : s[r] == B
                          ? -1
                          : u[r] == B
                          ? 1
                          : 0;
                      }),
                  I)
                : I;
            }),
          (t.matches = function (e, n) {
            return t(e, null, null, n);
          }),
          (t.matchesSelector = function (e, n) {
            if (
              (q(e),
              T.matchesSelector &&
                O &&
                !Y[n + " "] &&
                (!P || !P.test(n)) &&
                (!$ || !$.test(n)))
            )
              try {
                var r = R.call(e, n);
                if (
                  r ||
                  T.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (e) {
                Y(n, !0);
              }
            return t(n, I, null, [e]).length > 0;
          }),
          (t.contains = function (e, t) {
            return (e.ownerDocument || e) != I && q(e), M(e, t);
          }),
          (t.attr = function (e, t) {
            (e.ownerDocument || e) != I && q(e);
            var n = C.attrHandle[t.toLowerCase()],
              r =
                n && V.call(C.attrHandle, t.toLowerCase())
                  ? n(e, t, !O)
                  : undefined;
            return r !== undefined
              ? r
              : T.attributes || !O
              ? e.getAttribute(t)
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
          }),
          (t.escape = function (e) {
            return (e + "").replace(Ce, Ee);
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
              ((L = !T.detectDuplicates),
              (N = !T.sortStable && e.slice(0)),
              e.sort(Q),
              L)
            ) {
              for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
              for (; r--; ) e.splice(n[r], 1);
            }
            return (N = null), e;
          }),
          (E = t.getText =
            function (e) {
              var t,
                n = "",
                r = 0,
                i = e.nodeType;
              if (i) {
                if (1 === i || 9 === i || 11 === i) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += E(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
              } else for (; (t = e[r++]); ) n += E(t);
              return n;
            }),
          (C = t.selectors =
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
                  var t = z[e + " "];
                  return (
                    t ||
                    ((t = new RegExp(
                      "(^|" + re + ")" + e + "(" + re + "|$)"
                    )) &&
                      z(e, function (e) {
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
                            ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1
                            : "|=" === n &&
                              (o === r ||
                                o.slice(0, r.length + 1) === r + "-"));
                  };
                },
                CHILD: function (e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice(-4),
                    s = "of-type" === t;
                  return 1 === r && 0 === i
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, u) {
                        var c,
                          l,
                          f,
                          d,
                          p,
                          h,
                          g = o !== a ? "nextSibling" : "previousSibling",
                          m = t.parentNode,
                          y = s && t.nodeName.toLowerCase(),
                          v = !u && !s,
                          x = !1;
                        if (m) {
                          if (o) {
                            for (; g; ) {
                              for (d = t; (d = d[g]); )
                                if (
                                  s
                                    ? d.nodeName.toLowerCase() === y
                                    : 1 === d.nodeType
                                )
                                  return !1;
                              h = g = "only" === e && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((h = [a ? m.firstChild : m.lastChild]), a && v)
                          ) {
                            for (
                              d = m,
                                f = d[W] || (d[W] = {}),
                                l = f[d.uniqueID] || (f[d.uniqueID] = {}),
                                c = l[e] || [],
                                p = c[0] === F && c[1],
                                x = p && c[2],
                                d = p && m.childNodes[p];
                              (d =
                                (++p && d && d[g]) || (x = p = 0) || h.pop());

                            )
                              if (1 === d.nodeType && ++x && d === t) {
                                l[e] = [F, p, x];
                                break;
                              }
                          } else if (
                            (v &&
                              ((d = t),
                              (f = d[W] || (d[W] = {})),
                              (l = f[d.uniqueID] || (f[d.uniqueID] = {})),
                              (c = l[e] || []),
                              (p = c[0] === F && c[1]),
                              (x = p)),
                            !1 === x)
                          )
                            for (
                              ;
                              (d =
                                (++p && d && d[g]) || (x = p = 0) || h.pop()) &&
                              ((s
                                ? d.nodeName.toLowerCase() !== y
                                : 1 !== d.nodeType) ||
                                !++x ||
                                (v &&
                                  ((f = d[W] || (d[W] = {})),
                                  (l = f[d.uniqueID] || (f[d.uniqueID] = {})),
                                  (l[e] = [F, x])),
                                d !== t));

                            );
                          return (x -= i) === r || (x % r == 0 && x / r >= 0);
                        }
                      };
                },
                PSEUDO: function (e, n) {
                  var i,
                    o =
                      C.pseudos[e] ||
                      C.setFilters[e.toLowerCase()] ||
                      t.error("unsupported pseudo: " + e);
                  return o[W]
                    ? o(n)
                    : o.length > 1
                    ? ((i = [e, e, "", n]),
                      C.setFilters.hasOwnProperty(e.toLowerCase())
                        ? r(function (e, t) {
                            for (var r, i = o(e, n), a = i.length; a--; )
                              (r = te(e, i[a])), (e[r] = !(t[r] = i[a]));
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
                    i = A(e.replace(ue, "$1"));
                  return i[W]
                    ? r(function (e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--; )
                          (o = a[s]) && (e[s] = !(t[s] = o));
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
                      return (t.textContent || E(t)).indexOf(e) > -1;
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
                          (n = O
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
                  return e === H;
                },
                focus: function (e) {
                  return (
                    e === I.activeElement &&
                    (!I.hasFocus || I.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: c(!1),
                disabled: c(!0),
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
                  return !C.pseudos.empty(e);
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
                first: l(function () {
                  return [0];
                }),
                last: l(function (e, t) {
                  return [t - 1];
                }),
                eq: l(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: l(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: l(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: l(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                    e.push(r);
                  return e;
                }),
                gt: l(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }),
          (C.pseudos.nth = C.pseudos.eq);
        for (w in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0,
        })
          C.pseudos[w] = s(w);
        for (w in { submit: !0, reset: !0 }) C.pseudos[w] = u(w);
        return (
          (d.prototype = C.filters = C.pseudos),
          (C.setFilters = new d()),
          (S = t.tokenize =
            function (e, n) {
              var r,
                i,
                o,
                a,
                s,
                u,
                c,
                l = X[e + " "];
              if (l) return n ? 0 : l.slice(0);
              for (s = e, u = [], c = C.preFilter; s; ) {
                (r && !(i = ce.exec(s))) ||
                  (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                  (r = !1),
                  (i = le.exec(s)) &&
                    ((r = i.shift()),
                    o.push({ value: r, type: i[0].replace(ue, " ") }),
                    (s = s.slice(r.length)));
                for (a in C.filter)
                  !(i = he[a].exec(s)) ||
                    (c[a] && !(i = c[a](i))) ||
                    ((r = i.shift()),
                    o.push({ value: r, type: a, matches: i }),
                    (s = s.slice(r.length)));
                if (!r) break;
              }
              return n ? s.length : s ? t.error(e) : X(e, u).slice(0);
            }),
          (A = t.compile =
            function (e, t) {
              var n,
                r = [],
                i = [],
                o = U[e + " "];
              if (!o) {
                for (t || (t = S(e)), n = t.length; n--; )
                  (o = x(t[n])), o[W] ? r.push(o) : i.push(o);
                (o = U(e, b(i, r))), (o.selector = e);
              }
              return o;
            }),
          (j = t.select =
            function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                c = "function" == typeof e && e,
                l = !r && S((e = c.selector || e));
              if (((n = n || []), 1 === l.length)) {
                if (
                  ((o = l[0] = l[0].slice(0)),
                  o.length > 2 &&
                    "ID" === (a = o[0]).type &&
                    9 === t.nodeType &&
                    O &&
                    C.relative[o[1].type])
                ) {
                  if (
                    !(t = (C.find.ID(a.matches[0].replace(we, Te), t) || [])[0])
                  )
                    return n;
                  c && (t = t.parentNode),
                    (e = e.slice(o.shift().value.length));
                }
                for (
                  i = he.needsContext.test(e) ? 0 : o.length;
                  i-- && ((a = o[i]), !C.relative[(s = a.type)]);

                )
                  if (
                    (u = C.find[s]) &&
                    (r = u(
                      a.matches[0].replace(we, Te),
                      (be.test(o[0].type) && f(t.parentNode)) || t
                    ))
                  ) {
                    if ((o.splice(i, 1), !(e = r.length && p(o))))
                      return Z.apply(n, r), n;
                    break;
                  }
              }
              return (
                (c || A(e, l))(
                  r,
                  t,
                  !O,
                  n,
                  !t || (be.test(e) && f(t.parentNode)) || t
                ),
                n
              );
            }),
          (T.sortStable = W.split("").sort(Q).join("") === W),
          (T.detectDuplicates = !!L),
          q(),
          (T.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(I.createElement("fieldset"));
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
    (Ee.find = ke),
      (Ee.expr = ke.selectors),
      (Ee.expr[":"] = Ee.expr.pseudos),
      (Ee.uniqueSort = Ee.unique = ke.uniqueSort),
      (Ee.text = ke.getText),
      (Ee.isXMLDoc = ke.isXML),
      (Ee.contains = ke.contains),
      (Ee.escapeSelector = ke.escape);
    var Se = function (e, t, n) {
        for (var r = [], i = n !== undefined; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (i && Ee(e).is(n)) break;
            r.push(e);
          }
        return r;
      },
      Ae = function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
      je = Ee.expr.match.needsContext,
      De = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    (Ee.filter = function (e, t, n) {
      var r = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType
          ? Ee.find.matchesSelector(r, e)
            ? [r]
            : []
          : Ee.find.matches(
              e,
              Ee.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      Ee.fn.extend({
        find: function (e) {
          var t,
            n,
            r = this.length,
            i = this;
          if ("string" != typeof e)
            return this.pushStack(
              Ee(e).filter(function () {
                for (t = 0; t < r; t++) if (Ee.contains(i[t], this)) return !0;
              })
            );
          for (n = this.pushStack([]), t = 0; t < r; t++) Ee.find(e, i[t], n);
          return r > 1 ? Ee.uniqueSort(n) : n;
        },
        filter: function (e) {
          return this.pushStack(a(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(a(this, e || [], !0));
        },
        is: function (e) {
          return !!a(
            this,
            "string" == typeof e && je.test(e) ? Ee(e) : e || [],
            !1
          ).length;
        },
      });
    var Ne,
      Le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((Ee.fn.init = function (e, t, n) {
      var r, i;
      if (!e) return this;
      if (((n = n || Ne), "string" == typeof e)) {
        if (
          !(r =
            "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
              ? [null, e, null]
              : Le.exec(e)) ||
          (!r[1] && t)
        )
          return !t || t.jquery
            ? (t || n).find(e)
            : this.constructor(t).find(e);
        if (r[1]) {
          if (
            ((t = t instanceof Ee ? t[0] : t),
            Ee.merge(
              this,
              Ee.parseHTML(
                r[1],
                t && t.nodeType ? t.ownerDocument || t : we,
                !0
              )
            ),
            De.test(r[1]) && Ee.isPlainObject(t))
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
          : e(Ee)
        : Ee.makeArray(e, this);
    }).prototype = Ee.fn),
      (Ne = Ee(we));
    var qe = /^(?:parents|prev(?:Until|All))/,
      Ie = { children: !0, contents: !0, next: !0, prev: !0 };
    Ee.fn.extend({
      has: function (e) {
        var t = Ee(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) if (Ee.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && Ee(e);
        if (!je.test(e))
          for (; r < i; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (a
                  ? a.index(n) > -1
                  : 1 === n.nodeType && Ee.find.matchesSelector(n, e))
              ) {
                o.push(n);
                break;
              }
        return this.pushStack(o.length > 1 ? Ee.uniqueSort(o) : o);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? de.call(Ee(e), this[0])
            : de.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(Ee.uniqueSort(Ee.merge(this.get(), Ee(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
      Ee.each(
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
            return s(e, "nextSibling");
          },
          prev: function (e) {
            return s(e, "previousSibling");
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
            return Ae((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return Ae(e.firstChild);
          },
          contents: function (e) {
            return null != e.contentDocument && ue(e.contentDocument)
              ? e.contentDocument
              : (o(e, "template") && (e = e.content || e),
                Ee.merge([], e.childNodes));
          },
        },
        function (e, t) {
          Ee.fn[e] = function (n, r) {
            var i = Ee.map(this, t, n);
            return (
              "Until" !== e.slice(-5) && (r = n),
              r && "string" == typeof r && (i = Ee.filter(r, i)),
              this.length > 1 &&
                (Ie[e] || Ee.uniqueSort(i), qe.test(e) && i.reverse()),
              this.pushStack(i)
            );
          };
        }
      );
    var He = /[^\x20\t\r\n\f]+/g;
    (Ee.Callbacks = function (e) {
      e = "string" == typeof e ? u(e) : Ee.extend({}, e);
      var t,
        n,
        i,
        o,
        a = [],
        s = [],
        c = -1,
        l = function () {
          for (o = o || e.once, i = t = !0; s.length; c = -1)
            for (n = s.shift(); ++c < a.length; )
              !1 === a[c].apply(n[0], n[1]) &&
                e.stopOnFalse &&
                ((c = a.length), (n = !1));
          e.memory || (n = !1), (t = !1), o && (a = n ? [] : "");
        },
        f = {
          add: function () {
            return (
              a &&
                (n && !t && ((c = a.length - 1), s.push(n)),
                (function t(n) {
                  Ee.each(n, function (n, i) {
                    xe(i)
                      ? (e.unique && f.has(i)) || a.push(i)
                      : i && i.length && "string" !== r(i) && t(i);
                  });
                })(arguments),
                n && !t && l()),
              this
            );
          },
          remove: function () {
            return (
              Ee.each(arguments, function (e, t) {
                for (var n; (n = Ee.inArray(t, a, n)) > -1; )
                  a.splice(n, 1), n <= c && c--;
              }),
              this
            );
          },
          has: function (e) {
            return e ? Ee.inArray(e, a) > -1 : a.length > 0;
          },
          empty: function () {
            return a && (a = []), this;
          },
          disable: function () {
            return (o = s = []), (a = n = ""), this;
          },
          disabled: function () {
            return !a;
          },
          lock: function () {
            return (o = s = []), n || t || (a = n = ""), this;
          },
          locked: function () {
            return !!o;
          },
          fireWith: function (e, n) {
            return (
              o ||
                ((n = n || []),
                (n = [e, n.slice ? n.slice() : n]),
                s.push(n),
                t || l()),
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
      Ee.extend({
        Deferred: function (t) {
          var n = [
              [
                "notify",
                "progress",
                Ee.Callbacks("memory"),
                Ee.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                Ee.Callbacks("once memory"),
                Ee.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                Ee.Callbacks("once memory"),
                Ee.Callbacks("once memory"),
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
                return Ee.Deferred(function (t) {
                  Ee.each(n, function (n, r) {
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
                    var s = this,
                      u = arguments,
                      f = function () {
                        var e, f;
                        if (!(t < a)) {
                          if ((e = r.apply(s, u)) === n.promise())
                            throw new TypeError("Thenable self-resolution");
                          (f =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then),
                            xe(f)
                              ? i
                                ? f.call(e, o(a, n, c, i), o(a, n, l, i))
                                : (a++,
                                  f.call(
                                    e,
                                    o(a, n, c, i),
                                    o(a, n, l, i),
                                    o(a, n, c, n.notifyWith)
                                  ))
                              : (r !== c && ((s = undefined), (u = [e])),
                                (i || n.resolveWith)(s, u));
                        }
                      },
                      d = i
                        ? f
                        : function () {
                            try {
                              f();
                            } catch (e) {
                              Ee.Deferred.exceptionHook &&
                                Ee.Deferred.exceptionHook(e, d.stackTrace),
                                t + 1 >= a &&
                                  (r !== l && ((s = undefined), (u = [e])),
                                  n.rejectWith(s, u));
                            }
                          };
                    t
                      ? d()
                      : (Ee.Deferred.getStackHook &&
                          (d.stackTrace = Ee.Deferred.getStackHook()),
                        e.setTimeout(d));
                  };
                }
                var a = 0;
                return Ee.Deferred(function (e) {
                  n[0][3].add(o(0, e, xe(i) ? i : c, e.notifyWith)),
                    n[1][3].add(o(0, e, xe(t) ? t : c)),
                    n[2][3].add(o(0, e, xe(r) ? r : l));
                }).promise();
              },
              promise: function (e) {
                return null != e ? Ee.extend(e, i) : i;
              },
            },
            o = {};
          return (
            Ee.each(n, function (e, t) {
              var a = t[2],
                s = t[5];
              (i[t[1]] = a.add),
                s &&
                  a.add(
                    function () {
                      r = s;
                    },
                    n[3 - e][2].disable,
                    n[3 - e][3].disable,
                    n[0][2].lock,
                    n[0][3].lock
                  ),
                a.add(t[3].fire),
                (o[t[0]] = function () {
                  return (
                    o[t[0] + "With"](this === o ? undefined : this, arguments),
                    this
                  );
                }),
                (o[t[0] + "With"] = a.fireWith);
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
            i = ce.call(arguments),
            o = Ee.Deferred(),
            a = function (e) {
              return function (n) {
                (r[e] = this),
                  (i[e] = arguments.length > 1 ? ce.call(arguments) : n),
                  --t || o.resolveWith(r, i);
              };
            };
          if (
            t <= 1 &&
            (f(e, o.done(a(n)).resolve, o.reject, !t),
            "pending" === o.state() || xe(i[n] && i[n].then))
          )
            return o.then();
          for (; n--; ) f(i[n], a(n), o.reject);
          return o.promise();
        },
      });
    var Oe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (Ee.Deferred.exceptionHook = function (t, n) {
      e.console &&
        e.console.warn &&
        t &&
        Oe.test(t.name) &&
        e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
      (Ee.readyException = function (t) {
        e.setTimeout(function () {
          throw t;
        });
      });
    var $e = Ee.Deferred();
    (Ee.fn.ready = function (e) {
      return (
        $e.then(e)["catch"](function (e) {
          Ee.readyException(e);
        }),
        this
      );
    }),
      Ee.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (!0 === e ? --Ee.readyWait : Ee.isReady) ||
            ((Ee.isReady = !0),
            (!0 !== e && --Ee.readyWait > 0) || $e.resolveWith(we, [Ee]));
        },
      }),
      (Ee.ready.then = $e.then),
      "complete" === we.readyState ||
      ("loading" !== we.readyState && !we.documentElement.doScroll)
        ? e.setTimeout(Ee.ready)
        : (we.addEventListener("DOMContentLoaded", d),
          e.addEventListener("load", d));
    var Pe = function (e, t, n, i, o, a, s) {
        var u = 0,
          c = e.length,
          l = null == n;
        if ("object" === r(n)) {
          o = !0;
          for (u in n) Pe(e, t, u, n[u], !0, a, s);
        } else if (
          i !== undefined &&
          ((o = !0),
          xe(i) || (s = !0),
          l &&
            (s
              ? (t.call(e, i), (t = null))
              : ((l = t),
                (t = function (e, t, n) {
                  return l.call(Ee(e), n);
                }))),
          t)
        )
          for (; u < c; u++) t(e[u], n, s ? i : i.call(e[u], u, t(e[u], n)));
        return o ? e : l ? t.call(e) : c ? t(e[0], n) : a;
      },
      Re = /^-ms-/,
      Me = /-([a-z])/g,
      We = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
    (g.uid = 1),
      (g.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              We(e) &&
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
                : ((t = h(t)), (t = t in r ? [t] : t.match(He) || [])),
                (n = t.length);
              for (; n--; ) delete r[t[n]];
            }
            (t === undefined || Ee.isEmptyObject(r)) &&
              (e.nodeType
                ? (e[this.expando] = undefined)
                : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return t !== undefined && !Ee.isEmptyObject(t);
        },
      });
    var Be = new g(),
      Fe = new g(),
      _e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ze = /[A-Z]/g;
    Ee.extend({
      hasData: function (e) {
        return Fe.hasData(e) || Be.hasData(e);
      },
      data: function (e, t, n) {
        return Fe.access(e, t, n);
      },
      removeData: function (e, t) {
        Fe.remove(e, t);
      },
      _data: function (e, t, n) {
        return Be.access(e, t, n);
      },
      _removeData: function (e, t) {
        Be.remove(e, t);
      },
    }),
      Ee.fn.extend({
        data: function (e, t) {
          var n,
            r,
            i,
            o = this[0],
            a = o && o.attributes;
          if (e === undefined) {
            if (
              this.length &&
              ((i = Fe.get(o)), 1 === o.nodeType && !Be.get(o, "hasDataAttrs"))
            ) {
              for (n = a.length; n--; )
                a[n] &&
                  ((r = a[n].name),
                  0 === r.indexOf("data-") &&
                    ((r = h(r.slice(5))), y(o, r, i[r])));
              Be.set(o, "hasDataAttrs", !0);
            }
            return i;
          }
          return "object" == typeof e
            ? this.each(function () {
                Fe.set(this, e);
              })
            : Pe(
                this,
                function (t) {
                  var n;
                  if (o && t === undefined) {
                    if ((n = Fe.get(o, e)) !== undefined) return n;
                    if ((n = y(o, e)) !== undefined) return n;
                  } else
                    this.each(function () {
                      Fe.set(this, e, t);
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
            Fe.remove(this, e);
          });
        },
      }),
      Ee.extend({
        queue: function (e, t, n) {
          var r;
          if (e)
            return (
              (t = (t || "fx") + "queue"),
              (r = Be.get(e, t)),
              n &&
                (!r || Array.isArray(n)
                  ? (r = Be.access(e, t, Ee.makeArray(n)))
                  : r.push(n)),
              r || []
            );
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = Ee.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = Ee._queueHooks(e, t),
            a = function () {
              Ee.dequeue(e, t);
            };
          "inprogress" === i && ((i = n.shift()), r--),
            i &&
              ("fx" === t && n.unshift("inprogress"),
              delete o.stop,
              i.call(e, a, o)),
            !r && o && o.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            Be.get(e, n) ||
            Be.access(e, n, {
              empty: Ee.Callbacks("once memory").add(function () {
                Be.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      Ee.fn.extend({
        queue: function (e, t) {
          var n = 2;
          return (
            "string" != typeof e && ((t = e), (e = "fx"), n--),
            arguments.length < n
              ? Ee.queue(this[0], e)
              : t === undefined
              ? this
              : this.each(function () {
                  var n = Ee.queue(this, e, t);
                  Ee._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && Ee.dequeue(this, e);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            Ee.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            r = 1,
            i = Ee.Deferred(),
            o = this,
            a = this.length,
            s = function () {
              --r || i.resolveWith(o, [o]);
            };
          for (
            "string" != typeof e && ((t = e), (e = undefined)), e = e || "fx";
            a--;

          )
            (n = Be.get(o[a], e + "queueHooks")) &&
              n.empty &&
              (r++, n.empty.add(s));
          return s(), i.promise(t);
        },
      });
    var Xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Ue = new RegExp("^(?:([+-])=|)(" + Xe + ")([a-z%]*)$", "i"),
      Ye = ["Top", "Right", "Bottom", "Left"],
      Qe = we.documentElement,
      Ve = function (e) {
        return Ee.contains(e.ownerDocument, e);
      },
      Ge = { composed: !0 };
    Qe.getRootNode &&
      (Ve = function (e) {
        return (
          Ee.contains(e.ownerDocument, e) ||
          e.getRootNode(Ge) === e.ownerDocument
        );
      });
    var Je = function (e, t) {
        return (
          (e = t || e),
          "none" === e.style.display ||
            ("" === e.style.display && Ve(e) && "none" === Ee.css(e, "display"))
        );
      },
      Ke = {};
    Ee.fn.extend({
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
              Je(this) ? Ee(this).show() : Ee(this).hide();
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
      at = /^([^.]*)(?:\.(.+)|)/;
    (Ee.event = {
      global: {},
      add: function (e, t, n, r, i) {
        var o,
          a,
          s,
          u,
          c,
          l,
          f,
          d,
          p,
          h,
          g,
          m = Be.get(e);
        if (We(e))
          for (
            n.handler && ((o = n), (n = o.handler), (i = o.selector)),
              i && Ee.find.matchesSelector(Qe, i),
              n.guid || (n.guid = Ee.guid++),
              (u = m.events) || (u = m.events = Object.create(null)),
              (a = m.handle) ||
                (a = m.handle =
                  function (t) {
                    return void 0 !== Ee && Ee.event.triggered !== t.type
                      ? Ee.event.dispatch.apply(e, arguments)
                      : undefined;
                  }),
              t = (t || "").match(He) || [""],
              c = t.length;
            c--;

          )
            (s = at.exec(t[c]) || []),
              (p = g = s[1]),
              (h = (s[2] || "").split(".").sort()),
              p &&
                ((f = Ee.event.special[p] || {}),
                (p = (i ? f.delegateType : f.bindType) || p),
                (f = Ee.event.special[p] || {}),
                (l = Ee.extend(
                  {
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && Ee.expr.match.needsContext.test(i),
                    namespace: h.join("."),
                  },
                  o
                )),
                (d = u[p]) ||
                  ((d = u[p] = []),
                  (d.delegateCount = 0),
                  (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                    (e.addEventListener && e.addEventListener(p, a))),
                f.add &&
                  (f.add.call(e, l),
                  l.handler.guid || (l.handler.guid = n.guid)),
                i ? d.splice(d.delegateCount++, 0, l) : d.push(l),
                (Ee.event.global[p] = !0));
      },
      remove: function (e, t, n, r, i) {
        var o,
          a,
          s,
          u,
          c,
          l,
          f,
          d,
          p,
          h,
          g,
          m = Be.hasData(e) && Be.get(e);
        if (m && (u = m.events)) {
          for (t = (t || "").match(He) || [""], c = t.length; c--; )
            if (
              ((s = at.exec(t[c]) || []),
              (p = g = s[1]),
              (h = (s[2] || "").split(".").sort()),
              p)
            ) {
              for (
                f = Ee.event.special[p] || {},
                  p = (r ? f.delegateType : f.bindType) || p,
                  d = u[p] || [],
                  s =
                    s[2] &&
                    new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  a = o = d.length;
                o--;

              )
                (l = d[o]),
                  (!i && g !== l.origType) ||
                    (n && n.guid !== l.guid) ||
                    (s && !s.test(l.namespace)) ||
                    (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                    (d.splice(o, 1),
                    l.selector && d.delegateCount--,
                    f.remove && f.remove.call(e, l));
              a &&
                !d.length &&
                ((f.teardown && !1 !== f.teardown.call(e, h, m.handle)) ||
                  Ee.removeEvent(e, p, m.handle),
                delete u[p]);
            } else for (p in u) Ee.event.remove(e, p + t[c], n, r, !0);
          Ee.isEmptyObject(u) && Be.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          u = Ee.event.fix(e),
          c = (Be.get(this, "events") || Object.create(null))[u.type] || [],
          l = Ee.event.special[u.type] || {};
        for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
        if (
          ((u.delegateTarget = this),
          !l.preDispatch || !1 !== l.preDispatch.call(this, u))
        ) {
          for (
            a = Ee.event.handlers.call(this, u, c), t = 0;
            (i = a[t++]) && !u.isPropagationStopped();

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
                  (Ee.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) !== undefined &&
                  !1 === (u.result = r) &&
                  (u.preventDefault(), u.stopPropagation()));
          return l.postDispatch && l.postDispatch.call(this, u), u.result;
        }
      },
      handlers: function (e, t) {
        var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          c = e.target;
        if (u && c.nodeType && !("click" === e.type && e.button >= 1))
          for (; c !== this; c = c.parentNode || this)
            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
              for (o = [], a = {}, n = 0; n < u; n++)
                (r = t[n]),
                  (i = r.selector + " "),
                  a[i] === undefined &&
                    (a[i] = r.needsContext
                      ? Ee(i, this).index(c) > -1
                      : Ee.find(i, this, null, [c]).length),
                  a[i] && o.push(r);
              o.length && s.push({ elem: c, handlers: o });
            }
        return (
          (c = this),
          u < t.length && s.push({ elem: c, handlers: t.slice(u) }),
          s
        );
      },
      addProp: function (e, t) {
        Object.defineProperty(Ee.Event.prototype, e, {
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
        return e[Ee.expando] ? e : new Ee.Event(e);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function (e) {
            var t = this || e;
            return (
              Ze.test(t.type) && t.click && o(t, "input") && D(t, "click", E),
              !1
            );
          },
          trigger: function (e) {
            var t = this || e;
            return (
              Ze.test(t.type) && t.click && o(t, "input") && D(t, "click"), !0
            );
          },
          _default: function (e) {
            var t = e.target;
            return (
              (Ze.test(t.type) &&
                t.click &&
                o(t, "input") &&
                Be.get(t, "click")) ||
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
      (Ee.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (Ee.Event = function (e, t) {
        if (!(this instanceof Ee.Event)) return new Ee.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented ||
              (e.defaultPrevented === undefined && !1 === e.returnValue)
                ? E
                : k),
            (this.target =
              e.target && 3 === e.target.nodeType
                ? e.target.parentNode
                : e.target),
            (this.currentTarget = e.currentTarget),
            (this.relatedTarget = e.relatedTarget))
          : (this.type = e),
          t && Ee.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || Date.now()),
          (this[Ee.expando] = !0);
      }),
      (Ee.Event.prototype = {
        constructor: Ee.Event,
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = E),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = E),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = E),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      Ee.each(
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
        Ee.event.addProp
      ),
      Ee.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        Ee.event.special[e] = {
          setup: function () {
            return D(this, e, S), !1;
          },
          trigger: function () {
            return D(this, e), !0;
          },
          delegateType: t,
        };
      }),
      Ee.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, t) {
          Ee.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              var n,
                r = this,
                i = e.relatedTarget,
                o = e.handleObj;
              return (
                (i && (i === r || Ee.contains(r, i))) ||
                  ((e.type = o.origType),
                  (n = o.handler.apply(this, arguments)),
                  (e.type = t)),
                n
              );
            },
          };
        }
      ),
      Ee.fn.extend({
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
              Ee(e.delegateTarget).off(
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
              Ee.event.remove(this, e, n, t);
            })
          );
        },
      });
    var st = /<script|<style|<link/i,
      ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ct = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    Ee.extend({
      htmlPrefilter: function (e) {
        return e;
      },
      clone: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.cloneNode(!0),
          u = Ve(e);
        if (
          !(
            ve.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            Ee.isXMLDoc(e)
          )
        )
          for (a = w(s), o = w(e), r = 0, i = o.length; r < i; r++)
            H(o[r], a[r]);
        if (t)
          if (n)
            for (o = o || w(e), a = a || w(s), r = 0, i = o.length; r < i; r++)
              I(o[r], a[r]);
          else I(e, s);
        return (
          (a = w(s, "script")), a.length > 0 && T(a, !u && w(e, "script")), s
        );
      },
      cleanData: function (e) {
        for (
          var t, n, r, i = Ee.event.special, o = 0;
          (n = e[o]) !== undefined;
          o++
        )
          if (We(n)) {
            if ((t = n[Be.expando])) {
              if (t.events)
                for (r in t.events)
                  i[r] ? Ee.event.remove(n, r) : Ee.removeEvent(n, r, t.handle);
              n[Be.expando] = undefined;
            }
            n[Fe.expando] && (n[Fe.expando] = undefined);
          }
      },
    }),
      Ee.fn.extend({
        detach: function (e) {
          return $(this, e, !0);
        },
        remove: function (e) {
          return $(this, e);
        },
        text: function (e) {
          return Pe(
            this,
            function (e) {
              return e === undefined
                ? Ee.text(this)
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
          return O(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              N(this, e).appendChild(e);
            }
          });
        },
        prepend: function () {
          return O(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = N(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return O(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return O(this, arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (Ee.cleanData(w(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return Ee.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return Pe(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                r = this.length;
              if (e === undefined && 1 === t.nodeType) return t.innerHTML;
              if (
                "string" == typeof e &&
                !st.test(e) &&
                !nt[(et.exec(e) || ["", ""])[1].toLowerCase()]
              ) {
                e = Ee.htmlPrefilter(e);
                try {
                  for (; n < r; n++)
                    (t = this[n] || {}),
                      1 === t.nodeType &&
                        (Ee.cleanData(w(t, !1)), (t.innerHTML = e));
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
          return O(
            this,
            arguments,
            function (t) {
              var n = this.parentNode;
              Ee.inArray(this, e) < 0 &&
                (Ee.cleanData(w(this)), n && n.replaceChild(t, this));
            },
            e
          );
        },
      }),
      Ee.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, t) {
          Ee.fn[e] = function (e) {
            for (var n, r = [], i = Ee(e), o = i.length - 1, a = 0; a <= o; a++)
              (n = a === o ? this : this.clone(!0)),
                Ee(i[a])[t](n),
                fe.apply(r, n.get());
            return this.pushStack(r);
          };
        }
      );
    var lt = new RegExp("^(" + Xe + ")(?!px)[a-z%]+$", "i"),
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
      pt = new RegExp(Ye.join("|"), "i");
    !(function () {
      function t() {
        if (l) {
          (c.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (l.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            Qe.appendChild(c).appendChild(l);
          var t = e.getComputedStyle(l);
          (r = "1%" !== t.top),
            (u = 12 === n(t.marginLeft)),
            (l.style.right = "60%"),
            (a = 36 === n(t.right)),
            (i = 36 === n(t.width)),
            (l.style.position = "absolute"),
            (o = 12 === n(l.offsetWidth / 3)),
            Qe.removeChild(c),
            (l = null);
        }
      }
      function n(e) {
        return Math.round(parseFloat(e));
      }
      var r,
        i,
        o,
        a,
        s,
        u,
        c = we.createElement("div"),
        l = we.createElement("div");
      l.style &&
        ((l.style.backgroundClip = "content-box"),
        (l.cloneNode(!0).style.backgroundClip = ""),
        (ve.clearCloneStyle = "content-box" === l.style.backgroundClip),
        Ee.extend(ve, {
          boxSizingReliable: function () {
            return t(), i;
          },
          pixelBoxStyles: function () {
            return t(), a;
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
              null == s &&
                ((t = we.createElement("table")),
                (n = we.createElement("tr")),
                (r = we.createElement("div")),
                (t.style.cssText = "position:absolute;left:-11111px"),
                (n.style.height = "1px"),
                (r.style.height = "9px"),
                Qe.appendChild(t).appendChild(n).appendChild(r),
                (i = e.getComputedStyle(n)),
                (s = parseInt(i.height) > 3),
                Qe.removeChild(t)),
              s
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
    Ee.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = P(e, "opacity");
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
            a,
            s = h(t),
            u = vt.test(t),
            c = e.style;
          if (
            (u || (t = W(s)),
            (a = Ee.cssHooks[t] || Ee.cssHooks[s]),
            n === undefined)
          )
            return a && "get" in a && (i = a.get(e, !1, r)) !== undefined
              ? i
              : c[t];
          (o = typeof n),
            "string" === o &&
              (i = Ue.exec(n)) &&
              i[1] &&
              ((n = v(e, t, i)), (o = "number")),
            null != n &&
              n === n &&
              ("number" !== o ||
                u ||
                (n += (i && i[3]) || (Ee.cssNumber[s] ? "" : "px")),
              ve.clearCloneStyle ||
                "" !== n ||
                0 !== t.indexOf("background") ||
                (c[t] = "inherit"),
              (a && "set" in a && (n = a.set(e, n, r)) === undefined) ||
                (u ? c.setProperty(t, n) : (c[t] = n)));
        }
      },
      css: function (e, t, n, r) {
        var i,
          o,
          a,
          s = h(t);
        return (
          vt.test(t) || (t = W(s)),
          (a = Ee.cssHooks[t] || Ee.cssHooks[s]),
          a && "get" in a && (i = a.get(e, !0, n)),
          i === undefined && (i = P(e, t, r)),
          "normal" === i && t in bt && (i = bt[t]),
          "" === n || n
            ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
            : i
        );
      },
    }),
      Ee.each(["height", "width"], function (e, t) {
        Ee.cssHooks[t] = {
          get: function (e, n, r) {
            if (n)
              return !yt.test(Ee.css(e, "display")) ||
                (e.getClientRects().length && e.getBoundingClientRect().width)
                ? _(e, t, r)
                : dt(e, xt, function () {
                    return _(e, t, r);
                  });
          },
          set: function (e, n, r) {
            var i,
              o = ft(e),
              a = !ve.scrollboxSize() && "absolute" === o.position,
              s = a || r,
              u = s && "border-box" === Ee.css(e, "boxSizing", !1, o),
              c = r ? F(e, t, r, u, o) : 0;
            return (
              u &&
                a &&
                (c -= Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    parseFloat(o[t]) -
                    F(e, t, "border", !1, o) -
                    0.5
                )),
              c &&
                (i = Ue.exec(n)) &&
                "px" !== (i[3] || "px") &&
                ((e.style[t] = n), (n = Ee.css(e, t))),
              B(e, n, c)
            );
          },
        };
      }),
      (Ee.cssHooks.marginLeft = R(ve.reliableMarginLeft, function (e, t) {
        if (t)
          return (
            (parseFloat(P(e, "marginLeft")) ||
              e.getBoundingClientRect().left -
                dt(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      Ee.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        (Ee.cssHooks[e + t] = {
          expand: function (n) {
            for (
              var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
              r < 4;
              r++
            )
              i[e + Ye[r] + t] = o[r] || o[r - 2] || o[0];
            return i;
          },
        }),
          "margin" !== e && (Ee.cssHooks[e + t].set = B);
      }),
      Ee.fn.extend({
        css: function (e, t) {
          return Pe(
            this,
            function (e, t, n) {
              var r,
                i,
                o = {},
                a = 0;
              if (Array.isArray(t)) {
                for (r = ft(e), i = t.length; a < i; a++)
                  o[t[a]] = Ee.css(e, t[a], !1, r);
                return o;
              }
              return n !== undefined ? Ee.style(e, t, n) : Ee.css(e, t);
            },
            e,
            t,
            arguments.length > 1
          );
        },
      }),
      (Ee.Tween = z),
      (z.prototype = {
        constructor: z,
        init: function (e, t, n, r, i, o) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = i || Ee.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = o || (Ee.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = z.propHooks[this.prop];
          return e && e.get ? e.get(this) : z.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = z.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t =
                  Ee.easing[this.easing](
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
            n && n.set ? n.set(this) : z.propHooks._default.set(this),
            this
          );
        },
      }),
      (z.prototype.init.prototype = z.prototype),
      (z.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType ||
              (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : ((t = Ee.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
          },
          set: function (e) {
            Ee.fx.step[e.prop]
              ? Ee.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (!Ee.cssHooks[e.prop] && null == e.elem.style[W(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : Ee.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }),
      (z.propHooks.scrollTop = z.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (Ee.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (Ee.fx = z.prototype.init),
      (Ee.fx.step = {});
    var wt,
      Tt,
      Ct = /^(?:toggle|show|hide)$/,
      Et = /queueHooks$/;
    (Ee.Animation = Ee.extend(J, {
      tweeners: {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t);
            return v(n.elem, e, Ue.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        xe(e) ? ((t = e), (e = ["*"])) : (e = e.match(He));
        for (var n, r = 0, i = e.length; r < i; r++)
          (n = e[r]),
            (J.tweeners[n] = J.tweeners[n] || []),
            J.tweeners[n].unshift(t);
      },
      prefilters: [V],
      prefilter: function (e, t) {
        t ? J.prefilters.unshift(e) : J.prefilters.push(e);
      },
    })),
      (Ee.speed = function (e, t, n) {
        var r =
          e && "object" == typeof e
            ? Ee.extend({}, e)
            : {
                complete: n || (!n && t) || (xe(e) && e),
                duration: e,
                easing: (n && t) || (t && !xe(t) && t),
              };
        return (
          Ee.fx.off
            ? (r.duration = 0)
            : "number" != typeof r.duration &&
              (r.duration in Ee.fx.speeds
                ? (r.duration = Ee.fx.speeds[r.duration])
                : (r.duration = Ee.fx.speeds._default)),
          (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
          (r.old = r.complete),
          (r.complete = function () {
            xe(r.old) && r.old.call(this), r.queue && Ee.dequeue(this, r.queue);
          }),
          r
        );
      }),
      Ee.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(Je)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, r);
        },
        animate: function (e, t, n, r) {
          var i = Ee.isEmptyObject(e),
            o = Ee.speed(t, n, r),
            a = function () {
              var t = J(this, Ee.extend({}, e), o);
              (i || Be.get(this, "finish")) && t.stop(!0);
            };
          return (
            (a.finish = a),
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
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
                o = Ee.timers,
                a = Be.get(this);
              if (i) a[i] && a[i].stop && r(a[i]);
              else for (i in a) a[i] && a[i].stop && Et.test(i) && r(a[i]);
              for (i = o.length; i--; )
                o[i].elem !== this ||
                  (null != e && o[i].queue !== e) ||
                  (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
              (!t && n) || Ee.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            !1 !== e && (e = e || "fx"),
            this.each(function () {
              var t,
                n = Be.get(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = Ee.timers,
                a = r ? r.length : 0;
              for (
                n.finish = !0,
                  Ee.queue(this, e, []),
                  i && i.stop && i.stop.call(this, !0),
                  t = o.length;
                t--;

              )
                o[t].elem === this &&
                  o[t].queue === e &&
                  (o[t].anim.stop(!0), o.splice(t, 1));
              for (t = 0; t < a; t++)
                r[t] && r[t].finish && r[t].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      Ee.each(["toggle", "show", "hide"], function (e, t) {
        var n = Ee.fn[t];
        Ee.fn[t] = function (e, r, i) {
          return null == e || "boolean" == typeof e
            ? n.apply(this, arguments)
            : this.animate(Y(t, !0), e, r, i);
        };
      }),
      Ee.each(
        {
          slideDown: Y("show"),
          slideUp: Y("hide"),
          slideToggle: Y("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, t) {
          Ee.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r);
          };
        }
      ),
      (Ee.timers = []),
      (Ee.fx.tick = function () {
        var e,
          t = 0,
          n = Ee.timers;
        for (wt = Date.now(); t < n.length; t++)
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || Ee.fx.stop(), (wt = undefined);
      }),
      (Ee.fx.timer = function (e) {
        Ee.timers.push(e), Ee.fx.start();
      }),
      (Ee.fx.interval = 13),
      (Ee.fx.start = function () {
        Tt || ((Tt = !0), X());
      }),
      (Ee.fx.stop = function () {
        Tt = null;
      }),
      (Ee.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (Ee.fn.delay = function (t, n) {
        return (
          (t = Ee.fx ? Ee.fx.speeds[t] || t : t),
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
      St = Ee.expr.attrHandle;
    Ee.fn.extend({
      attr: function (e, t) {
        return Pe(this, Ee.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          Ee.removeAttr(this, e);
        });
      },
    }),
      Ee.extend({
        attr: function (e, t, n) {
          var r,
            i,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return "undefined" == typeof e.getAttribute
              ? Ee.prop(e, t, n)
              : ((1 === o && Ee.isXMLDoc(e)) ||
                  (i =
                    Ee.attrHooks[t.toLowerCase()] ||
                    (Ee.expr.match.bool.test(t) ? kt : undefined)),
                n !== undefined
                  ? null === n
                    ? void Ee.removeAttr(e, t)
                    : i && "set" in i && (r = i.set(e, n, t)) !== undefined
                    ? r
                    : (e.setAttribute(t, n + ""), n)
                  : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : ((r = Ee.find.attr(e, t)), null == r ? undefined : r));
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
            i = t && t.match(He);
          if (i && 1 === e.nodeType)
            for (; (n = i[r++]); ) e.removeAttribute(n);
        },
      }),
      (kt = {
        set: function (e, t, n) {
          return !1 === t ? Ee.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      Ee.each(Ee.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = St[t] || Ee.find.attr;
        St[t] = function (e, t, r) {
          var i,
            o,
            a = t.toLowerCase();
          return (
            r ||
              ((o = St[a]),
              (St[a] = i),
              (i = null != n(e, t, r) ? a : null),
              (St[a] = o)),
            i
          );
        };
      });
    var At = /^(?:input|select|textarea|button)$/i,
      jt = /^(?:a|area)$/i;
    Ee.fn.extend({
      prop: function (e, t) {
        return Pe(this, Ee.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[Ee.propFix[e] || e];
        });
      },
    }),
      Ee.extend({
        prop: function (e, t, n) {
          var r,
            i,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return (
              (1 === o && Ee.isXMLDoc(e)) ||
                ((t = Ee.propFix[t] || t), (i = Ee.propHooks[t])),
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
              var t = Ee.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : At.test(e.nodeName) || (jt.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      ve.optSelected ||
        (Ee.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      Ee.each(
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
          Ee.propFix[this.toLowerCase()] = this;
        }
      ),
      Ee.fn.extend({
        addClass: function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u = 0;
          if (xe(e))
            return this.each(function (t) {
              Ee(this).addClass(e.call(this, t, Z(this)));
            });
          if (((t = ee(e)), t.length))
            for (; (n = this[u++]); )
              if (((i = Z(n)), (r = 1 === n.nodeType && " " + K(i) + " "))) {
                for (a = 0; (o = t[a++]); )
                  r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                (s = K(r)), i !== s && n.setAttribute("class", s);
              }
          return this;
        },
        removeClass: function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u = 0;
          if (xe(e))
            return this.each(function (t) {
              Ee(this).removeClass(e.call(this, t, Z(this)));
            });
          if (!arguments.length) return this.attr("class", "");
          if (((t = ee(e)), t.length))
            for (; (n = this[u++]); )
              if (((i = Z(n)), (r = 1 === n.nodeType && " " + K(i) + " "))) {
                for (a = 0; (o = t[a++]); )
                  for (; r.indexOf(" " + o + " ") > -1; )
                    r = r.replace(" " + o + " ", " ");
                (s = K(r)), i !== s && n.setAttribute("class", s);
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
                Ee(this).toggleClass(e.call(this, n, Z(this), t), t);
              })
            : this.each(function () {
                var t, i, o, a;
                if (r)
                  for (i = 0, o = Ee(this), a = ee(e); (t = a[i++]); )
                    o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                  (e !== undefined && "boolean" !== n) ||
                    ((t = Z(this)),
                    t && Be.set(this, "__className__", t),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        t || !1 === e ? "" : Be.get(this, "__className__") || ""
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
    var Dt = /\r/g;
    Ee.fn.extend({
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
                  ((i = r ? e.call(this, n, Ee(this).val()) : e),
                  null == i
                    ? (i = "")
                    : "number" == typeof i
                    ? (i += "")
                    : Array.isArray(i) &&
                      (i = Ee.map(i, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    Ee.valHooks[this.type] ||
                    Ee.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    t.set(this, i, "value") !== undefined) ||
                    (this.value = i));
              })
            );
          if (i)
            return (t =
              Ee.valHooks[i.type] || Ee.valHooks[i.nodeName.toLowerCase()]) &&
              "get" in t &&
              (n = t.get(i, "value")) !== undefined
              ? n
              : ((n = i.value),
                "string" == typeof n ? n.replace(Dt, "") : null == n ? "" : n);
        }
      },
    }),
      Ee.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = Ee.find.attr(e, "value");
              return null != t ? t : K(Ee.text(e));
            },
          },
          select: {
            get: function (e) {
              var t,
                n,
                r,
                i = e.options,
                a = e.selectedIndex,
                s = "select-one" === e.type,
                u = s ? null : [],
                c = s ? a + 1 : i.length;
              for (r = a < 0 ? c : s ? a : 0; r < c; r++)
                if (
                  ((n = i[r]),
                  (n.selected || r === a) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !o(n.parentNode, "optgroup")))
                ) {
                  if (((t = Ee(n).val()), s)) return t;
                  u.push(t);
                }
              return u;
            },
            set: function (e, t) {
              for (
                var n, r, i = e.options, o = Ee.makeArray(t), a = i.length;
                a--;

              )
                (r = i[a]),
                  (r.selected =
                    Ee.inArray(Ee.valHooks.option.get(r), o) > -1) && (n = !0);
              return n || (e.selectedIndex = -1), o;
            },
          },
        },
      }),
      Ee.each(["radio", "checkbox"], function () {
        (Ee.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t))
              return (e.checked = Ee.inArray(Ee(e).val(), t) > -1);
          },
        }),
          ve.checkOn ||
            (Ee.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      }),
      (ve.focusin = "onfocusin" in e);
    var Nt = /^(?:focusinfocus|focusoutblur)$/,
      Lt = function (e) {
        e.stopPropagation();
      };
    Ee.extend(Ee.event, {
      trigger: function (t, n, r, i) {
        var o,
          a,
          s,
          u,
          c,
          l,
          f,
          d,
          p = [r || we],
          h = ge.call(t, "type") ? t.type : t,
          g = ge.call(t, "namespace") ? t.namespace.split(".") : [];
        if (
          ((a = d = s = r = r || we),
          3 !== r.nodeType &&
            8 !== r.nodeType &&
            !Nt.test(h + Ee.event.triggered) &&
            (h.indexOf(".") > -1 &&
              ((g = h.split(".")), (h = g.shift()), g.sort()),
            (c = h.indexOf(":") < 0 && "on" + h),
            (t = t[Ee.expando]
              ? t
              : new Ee.Event(h, "object" == typeof t && t)),
            (t.isTrigger = i ? 2 : 3),
            (t.namespace = g.join(".")),
            (t.rnamespace = t.namespace
              ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = undefined),
            t.target || (t.target = r),
            (n = null == n ? [t] : Ee.makeArray(n, [t])),
            (f = Ee.event.special[h] || {}),
            i || !f.trigger || !1 !== f.trigger.apply(r, n)))
        ) {
          if (!i && !f.noBubble && !be(r)) {
            for (
              u = f.delegateType || h, Nt.test(u + h) || (a = a.parentNode);
              a;
              a = a.parentNode
            )
              p.push(a), (s = a);
            s === (r.ownerDocument || we) &&
              p.push(s.defaultView || s.parentWindow || e);
          }
          for (o = 0; (a = p[o++]) && !t.isPropagationStopped(); )
            (d = a),
              (t.type = o > 1 ? u : f.bindType || h),
              (l =
                (Be.get(a, "events") || Object.create(null))[t.type] &&
                Be.get(a, "handle")),
              l && l.apply(a, n),
              (l = c && a[c]) &&
                l.apply &&
                We(a) &&
                ((t.result = l.apply(a, n)),
                !1 === t.result && t.preventDefault());
          return (
            (t.type = h),
            i ||
              t.isDefaultPrevented() ||
              (f._default && !1 !== f._default.apply(p.pop(), n)) ||
              !We(r) ||
              (c &&
                xe(r[h]) &&
                !be(r) &&
                ((s = r[c]),
                s && (r[c] = null),
                (Ee.event.triggered = h),
                t.isPropagationStopped() && d.addEventListener(h, Lt),
                r[h](),
                t.isPropagationStopped() && d.removeEventListener(h, Lt),
                (Ee.event.triggered = undefined),
                s && (r[c] = s))),
            t.result
          );
        }
      },
      simulate: function (e, t, n) {
        var r = Ee.extend(new Ee.Event(), n, { type: e, isSimulated: !0 });
        Ee.event.trigger(r, null, t);
      },
    }),
      Ee.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            Ee.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return Ee.event.trigger(e, t, n, !0);
        },
      }),
      ve.focusin ||
        Ee.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          var n = function (e) {
            Ee.event.simulate(t, e.target, Ee.event.fix(e));
          };
          Ee.event.special[t] = {
            setup: function () {
              var r = this.ownerDocument || this.document || this,
                i = Be.access(r, t);
              i || r.addEventListener(e, n, !0), Be.access(r, t, (i || 0) + 1);
            },
            teardown: function () {
              var r = this.ownerDocument || this.document || this,
                i = Be.access(r, t) - 1;
              i
                ? Be.access(r, t, i)
                : (r.removeEventListener(e, n, !0), Be.remove(r, t));
            },
          };
        });
    var qt = e.location,
      It = { guid: Date.now() },
      Ht = /\?/;
    Ee.parseXML = function (t) {
      var n;
      if (!t || "string" != typeof t) return null;
      try {
        n = new e.DOMParser().parseFromString(t, "text/xml");
      } catch (e) {
        n = undefined;
      }
      return (
        (n && !n.getElementsByTagName("parsererror").length) ||
          Ee.error("Invalid XML: " + t),
        n
      );
    };
    var Ot = /\[\]$/,
      $t = /\r?\n/g,
      Pt = /^(?:submit|button|image|reset|file)$/i,
      Rt = /^(?:input|select|textarea|keygen)/i;
    (Ee.param = function (e, t) {
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
      if (Array.isArray(e) || (e.jquery && !Ee.isPlainObject(e)))
        Ee.each(e, function () {
          i(this.name, this.value);
        });
      else for (n in e) te(n, e[n], t, i);
      return r.join("&");
    }),
      Ee.fn.extend({
        serialize: function () {
          return Ee.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = Ee.prop(this, "elements");
            return e ? Ee.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !Ee(this).is(":disabled") &&
                Rt.test(this.nodeName) &&
                !Pt.test(e) &&
                (this.checked || !Ze.test(e))
              );
            })
            .map(function (e, t) {
              var n = Ee(this).val();
              return null == n
                ? null
                : Array.isArray(n)
                ? Ee.map(n, function (e) {
                    return { name: t.name, value: e.replace($t, "\r\n") };
                  })
                : { name: t.name, value: n.replace($t, "\r\n") };
            })
            .get();
        },
      });
    var Mt = /%20/g,
      Wt = /#.*$/,
      Bt = /([?&])_=[^&]*/,
      Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      _t = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      zt = /^(?:GET|HEAD)$/,
      Xt = /^\/\//,
      Ut = {},
      Yt = {},
      Qt = "*/".concat("*"),
      Vt = we.createElement("a");
    (Vt.href = qt.href),
      Ee.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: qt.href,
          type: "GET",
          isLocal: _t.test(qt.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Qt,
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
            "text xml": Ee.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? ie(ie(e, Ee.ajaxSettings), t) : ie(Ee.ajaxSettings, e);
        },
        ajaxPrefilter: ne(Ut),
        ajaxTransport: ne(Yt),
        ajax: function (t, n) {
          function r(t, n, r, s) {
            var c,
              d,
              p,
              b,
              w,
              T = n;
            l ||
              ((l = !0),
              u && e.clearTimeout(u),
              (i = undefined),
              (a = s || ""),
              (C.readyState = t > 0 ? 4 : 0),
              (c = (t >= 200 && t < 300) || 304 === t),
              r && (b = oe(h, C, r)),
              !c &&
                Ee.inArray("script", h.dataTypes) > -1 &&
                (h.converters["text script"] = function () {}),
              (b = ae(h, b, C, c)),
              c
                ? (h.ifModified &&
                    ((w = C.getResponseHeader("Last-Modified")),
                    w && (Ee.lastModified[o] = w),
                    (w = C.getResponseHeader("etag")) && (Ee.etag[o] = w)),
                  204 === t || "HEAD" === h.type
                    ? (T = "nocontent")
                    : 304 === t
                    ? (T = "notmodified")
                    : ((T = b.state), (d = b.data), (p = b.error), (c = !p)))
                : ((p = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
              (C.status = t),
              (C.statusText = (n || T) + ""),
              c ? y.resolveWith(g, [d, T, C]) : y.rejectWith(g, [C, T, p]),
              C.statusCode(x),
              (x = undefined),
              f &&
                m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? d : p]),
              v.fireWith(g, [C, T]),
              f &&
                (m.trigger("ajaxComplete", [C, h]),
                --Ee.active || Ee.event.trigger("ajaxStop")));
          }
          "object" == typeof t && ((n = t), (t = undefined)), (n = n || {});
          var i,
            o,
            a,
            s,
            u,
            c,
            l,
            f,
            d,
            p,
            h = Ee.ajaxSetup({}, n),
            g = h.context || h,
            m = h.context && (g.nodeType || g.jquery) ? Ee(g) : Ee.event,
            y = Ee.Deferred(),
            v = Ee.Callbacks("once memory"),
            x = h.statusCode || {},
            b = {},
            w = {},
            T = "canceled",
            C = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (l) {
                  if (!s)
                    for (s = {}; (t = Ft.exec(a)); )
                      s[t[1].toLowerCase() + " "] = (
                        s[t[1].toLowerCase() + " "] || []
                      ).concat(t[2]);
                  t = s[e.toLowerCase() + " "];
                }
                return null == t ? null : t.join(", ");
              },
              getAllResponseHeaders: function () {
                return l ? a : null;
              },
              setRequestHeader: function (e, t) {
                return (
                  null == l &&
                    ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                    (b[e] = t)),
                  this
                );
              },
              overrideMimeType: function (e) {
                return null == l && (h.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (l) C.always(e[C.status]);
                  else for (t in e) x[t] = [x[t], e[t]];
                return this;
              },
              abort: function (e) {
                var t = e || T;
                return i && i.abort(t), r(0, t), this;
              },
            };
          if (
            (y.promise(C),
            (h.url = ((t || h.url || qt.href) + "").replace(
              Xt,
              qt.protocol + "//"
            )),
            (h.type = n.method || n.type || h.method || h.type),
            (h.dataTypes = (h.dataType || "*").toLowerCase().match(He) || [""]),
            null == h.crossDomain)
          ) {
            c = we.createElement("a");
            try {
              (c.href = h.url),
                (c.href = c.href),
                (h.crossDomain =
                  Vt.protocol + "//" + Vt.host != c.protocol + "//" + c.host);
            } catch (e) {
              h.crossDomain = !0;
            }
          }
          if (
            (h.data &&
              h.processData &&
              "string" != typeof h.data &&
              (h.data = Ee.param(h.data, h.traditional)),
            re(Ut, h, n, C),
            l)
          )
            return C;
          (f = Ee.event && h.global),
            f && 0 == Ee.active++ && Ee.event.trigger("ajaxStart"),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !zt.test(h.type)),
            (o = h.url.replace(Wt, "")),
            h.hasContent
              ? h.data &&
                h.processData &&
                0 ===
                  (h.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (h.data = h.data.replace(Mt, "+"))
              : ((p = h.url.slice(o.length)),
                h.data &&
                  (h.processData || "string" == typeof h.data) &&
                  ((o += (Ht.test(o) ? "&" : "?") + h.data), delete h.data),
                !1 === h.cache &&
                  ((o = o.replace(Bt, "$1")),
                  (p = (Ht.test(o) ? "&" : "?") + "_=" + It.guid++ + p)),
                (h.url = o + p)),
            h.ifModified &&
              (Ee.lastModified[o] &&
                C.setRequestHeader("If-Modified-Since", Ee.lastModified[o]),
              Ee.etag[o] && C.setRequestHeader("If-None-Match", Ee.etag[o])),
            ((h.data && h.hasContent && !1 !== h.contentType) ||
              n.contentType) &&
              C.setRequestHeader("Content-Type", h.contentType),
            C.setRequestHeader(
              "Accept",
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                    ("*" !== h.dataTypes[0] ? ", " + Qt + "; q=0.01" : "")
                : h.accepts["*"]
            );
          for (d in h.headers) C.setRequestHeader(d, h.headers[d]);
          if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || l))
            return C.abort();
          if (
            ((T = "abort"),
            v.add(h.complete),
            C.done(h.success),
            C.fail(h.error),
            (i = re(Yt, h, n, C)))
          ) {
            if (((C.readyState = 1), f && m.trigger("ajaxSend", [C, h]), l))
              return C;
            h.async &&
              h.timeout > 0 &&
              (u = e.setTimeout(function () {
                C.abort("timeout");
              }, h.timeout));
            try {
              (l = !1), i.send(b, r);
            } catch (e) {
              if (l) throw e;
              r(-1, e);
            }
          } else r(-1, "No Transport");
          return C;
        },
        getJSON: function (e, t, n) {
          return Ee.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return Ee.get(e, undefined, t, "script");
        },
      }),
      Ee.each(["get", "post"], function (e, t) {
        Ee[t] = function (e, n, r, i) {
          return (
            xe(n) && ((i = i || r), (r = n), (n = undefined)),
            Ee.ajax(
              Ee.extend(
                { url: e, type: t, dataType: i, data: n, success: r },
                Ee.isPlainObject(e) && e
              )
            )
          );
        };
      }),
      Ee.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers)
          "content-type" === t.toLowerCase() &&
            (e.contentType = e.headers[t] || "");
      }),
      (Ee._evalUrl = function (e, t, n) {
        return Ee.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: { "text script": function () {} },
          dataFilter: function (e) {
            Ee.globalEval(e, t, n);
          },
        });
      }),
      Ee.fn.extend({
        wrapAll: function (e) {
          var t;
          return (
            this[0] &&
              (xe(e) && (e = e.call(this[0])),
              (t = Ee(e, this[0].ownerDocument).eq(0).clone(!0)),
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
                Ee(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                var t = Ee(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
        },
        wrap: function (e) {
          var t = xe(e);
          return this.each(function (n) {
            Ee(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function (e) {
          return (
            this.parent(e)
              .not("body")
              .each(function () {
                Ee(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (Ee.expr.pseudos.hidden = function (e) {
        return !Ee.expr.pseudos.visible(e);
      }),
      (Ee.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (Ee.ajaxSettings.xhr = function () {
        try {
          return new e.XMLHttpRequest();
        } catch (e) {}
      });
    var Gt = { 0: 200, 1223: 204 },
      Jt = Ee.ajaxSettings.xhr();
    (ve.cors = !!Jt && "withCredentials" in Jt),
      (ve.ajax = Jt = !!Jt),
      Ee.ajaxTransport(function (t) {
        var n, r;
        if (ve.cors || (Jt && !t.crossDomain))
          return {
            send: function (i, o) {
              var a,
                s = t.xhr();
              if (
                (s.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
              )
                for (a in t.xhrFields) s[a] = t.xhrFields[a];
              t.mimeType &&
                s.overrideMimeType &&
                s.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  i["X-Requested-With"] ||
                  (i["X-Requested-With"] = "XMLHttpRequest");
              for (a in i) s.setRequestHeader(a, i[a]);
              (n = function (e) {
                return function () {
                  n &&
                    ((n =
                      r =
                      s.onload =
                      s.onerror =
                      s.onabort =
                      s.ontimeout =
                      s.onreadystatechange =
                        null),
                    "abort" === e
                      ? s.abort()
                      : "error" === e
                      ? "number" != typeof s.status
                        ? o(0, "error")
                        : o(s.status, s.statusText)
                      : o(
                          Gt[s.status] || s.status,
                          s.statusText,
                          "text" !== (s.responseType || "text") ||
                            "string" != typeof s.responseText
                            ? { binary: s.response }
                            : { text: s.responseText },
                          s.getAllResponseHeaders()
                        ));
                };
              }),
                (s.onload = n()),
                (r = s.onerror = s.ontimeout = n("error")),
                s.onabort !== undefined
                  ? (s.onabort = r)
                  : (s.onreadystatechange = function () {
                      4 === s.readyState &&
                        e.setTimeout(function () {
                          n && r();
                        });
                    }),
                (n = n("abort"));
              try {
                s.send((t.hasContent && t.data) || null);
              } catch (e) {
                if (n) throw e;
              }
            },
            abort: function () {
              n && n();
            },
          };
      }),
      Ee.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      Ee.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (e) {
            return Ee.globalEval(e), e;
          },
        },
      }),
      Ee.ajaxPrefilter("script", function (e) {
        e.cache === undefined && (e.cache = !1),
          e.crossDomain && (e.type = "GET");
      }),
      Ee.ajaxTransport("script", function (e) {
        if (e.crossDomain || e.scriptAttrs) {
          var t, n;
          return {
            send: function (r, i) {
              (t = Ee("<script>")
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
    Ee.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Kt.pop() || Ee.expando + "_" + It.guid++;
        return (this[e] = !0), e;
      },
    }),
      Ee.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i,
          o,
          a,
          s =
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
        if (s || "jsonp" === t.dataTypes[0])
          return (
            (i = t.jsonpCallback =
              xe(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
            s
              ? (t[s] = t[s].replace(Zt, "$1" + i))
              : !1 !== t.jsonp &&
                (t.url += (Ht.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            (t.converters["script json"] = function () {
              return a || Ee.error(i + " was not called"), a[0];
            }),
            (t.dataTypes[0] = "json"),
            (o = e[i]),
            (e[i] = function () {
              a = arguments;
            }),
            r.always(function () {
              o === undefined ? Ee(e).removeProp(i) : (e[i] = o),
                t[i] && ((t.jsonpCallback = n.jsonpCallback), Kt.push(i)),
                a && xe(o) && o(a[0]),
                (a = o = undefined);
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
      (Ee.parseHTML = function (e, t, n) {
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
          (i = De.exec(e)),
          (o = !n && []),
          i
            ? [t.createElement(i[1])]
            : ((i = C([e], t, o)),
              o && o.length && Ee(o).remove(),
              Ee.merge([], i.childNodes))
        );
      }),
      (Ee.fn.load = function (e, t, n) {
        var r,
          i,
          o,
          a = this,
          s = e.indexOf(" ");
        return (
          s > -1 && ((r = K(e.slice(s))), (e = e.slice(0, s))),
          xe(t)
            ? ((n = t), (t = undefined))
            : t && "object" == typeof t && (i = "POST"),
          a.length > 0 &&
            Ee.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
              .done(function (e) {
                (o = arguments),
                  a.html(r ? Ee("<div>").append(Ee.parseHTML(e)).find(r) : e);
              })
              .always(
                n &&
                  function (e, t) {
                    a.each(function () {
                      n.apply(this, o || [e.responseText, t, e]);
                    });
                  }
              ),
          this
        );
      }),
      (Ee.expr.pseudos.animated = function (e) {
        return Ee.grep(Ee.timers, function (t) {
          return e === t.elem;
        }).length;
      }),
      (Ee.offset = {
        setOffset: function (e, t, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            c,
            l = Ee.css(e, "position"),
            f = Ee(e),
            d = {};
          "static" === l && (e.style.position = "relative"),
            (s = f.offset()),
            (o = Ee.css(e, "top")),
            (u = Ee.css(e, "left")),
            (c =
              ("absolute" === l || "fixed" === l) &&
              (o + u).indexOf("auto") > -1),
            c
              ? ((r = f.position()), (a = r.top), (i = r.left))
              : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
            xe(t) && (t = t.call(e, n, Ee.extend({}, s))),
            null != t.top && (d.top = t.top - s.top + a),
            null != t.left && (d.left = t.left - s.left + i),
            "using" in t
              ? t.using.call(e, d)
              : ("number" == typeof d.top && (d.top += "px"),
                "number" == typeof d.left && (d.left += "px"),
                f.css(d));
        },
      }),
      Ee.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return e === undefined
              ? this
              : this.each(function (t) {
                  Ee.offset.setOffset(this, e, t);
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
            if ("fixed" === Ee.css(r, "position"))
              t = r.getBoundingClientRect();
            else {
              for (
                t = this.offset(),
                  n = r.ownerDocument,
                  e = r.offsetParent || n.documentElement;
                e &&
                (e === n.body || e === n.documentElement) &&
                "static" === Ee.css(e, "position");

              )
                e = e.parentNode;
              e &&
                e !== r &&
                1 === e.nodeType &&
                ((i = Ee(e).offset()),
                (i.top += Ee.css(e, "borderTopWidth", !0)),
                (i.left += Ee.css(e, "borderLeftWidth", !0)));
            }
            return {
              top: t.top - i.top - Ee.css(r, "marginTop", !0),
              left: t.left - i.left - Ee.css(r, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e && "static" === Ee.css(e, "position");

            )
              e = e.offsetParent;
            return e || Qe;
          });
        },
      }),
      Ee.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (e, t) {
          var n = "pageYOffset" === t;
          Ee.fn[e] = function (r) {
            return Pe(
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
      Ee.each(["top", "left"], function (e, t) {
        Ee.cssHooks[t] = R(ve.pixelPosition, function (e, n) {
          if (n)
            return (n = P(e, t)), lt.test(n) ? Ee(e).position()[t] + "px" : n;
        });
      }),
      Ee.each({ Height: "height", Width: "width" }, function (e, t) {
        Ee.each(
          { padding: "inner" + e, content: t, "": "outer" + e },
          function (n, r) {
            Ee.fn[r] = function (i, o) {
              var a = arguments.length && (n || "boolean" != typeof i),
                s = n || (!0 === i || !0 === o ? "margin" : "border");
              return Pe(
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
                    ? Ee.css(t, n, s)
                    : Ee.style(t, n, i, s);
                },
                t,
                a ? i : undefined,
                a
              );
            };
          }
        );
      }),
      Ee.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          Ee.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      Ee.fn.extend({
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
      Ee.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, t) {
          Ee.fn[t] = function (e, n) {
            return arguments.length > 0
              ? this.on(t, null, e, n)
              : this.trigger(t);
          };
        }
      );
    var en = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (Ee.proxy = function (e, t) {
      var n, r, i;
      return (
        "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
        xe(e)
          ? ((r = ce.call(arguments, 2)),
            (i = function () {
              return e.apply(t || this, r.concat(ce.call(arguments)));
            }),
            (i.guid = e.guid = e.guid || Ee.guid++),
            i)
          : undefined
      );
    }),
      (Ee.holdReady = function (e) {
        e ? Ee.readyWait++ : Ee.ready(!0);
      }),
      (Ee.isArray = Array.isArray),
      (Ee.parseJSON = JSON.parse),
      (Ee.nodeName = o),
      (Ee.isFunction = xe),
      (Ee.isWindow = be),
      (Ee.camelCase = h),
      (Ee.type = r),
      (Ee.now = Date.now),
      (Ee.isNumeric = function (e) {
        var t = Ee.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }),
      (Ee.trim = function (e) {
        return null == e ? "" : (e + "").replace(en, "");
      }),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return Ee;
        });
    var tn = e.jQuery,
      nn = e.$;
    return (
      (Ee.noConflict = function (t) {
        return (
          e.$ === Ee && (e.$ = nn), t && e.jQuery === Ee && (e.jQuery = tn), Ee
        );
      }),
      void 0 === t && (e.jQuery = e.$ = Ee),
      Ee
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
        ? c.call(e)
        : [e];
    }
    function i(e, t, o) {
      if (!(this instanceof i)) return new i(e, t, o);
      var a = e;
      return (
        "string" == typeof e && (a = document.querySelectorAll(e)),
        a
          ? ((this.elements = r(a)),
            (this.options = n({}, this.options)),
            "function" == typeof t ? (o = t) : n(this.options, t),
            o && this.on("always", o),
            this.getImages(),
            s && (this.jqDeferred = new s.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void u.error("Bad element for imagesLoaded " + (a || e))
      );
    }
    function o(e) {
      this.img = e;
    }
    function a(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var s = e.jQuery,
      u = e.console,
      c = Array.prototype.slice;
    (i.prototype = Object.create(t.prototype)),
      (i.prototype.options = {}),
      (i.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (i.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e),
          !0 === this.options.background && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && l[t]) {
          for (var n = e.querySelectorAll("img"), r = 0; r < n.length; r++) {
            var i = n[r];
            this.addImage(i);
          }
          if ("string" == typeof this.options.background) {
            var o = e.querySelectorAll(this.options.background);
            for (r = 0; r < o.length; r++) {
              var a = o[r];
              this.addElementBackgroundImages(a);
            }
          }
        }
      });
    var l = { 1: !0, 9: !0, 11: !0 };
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
        var n = new a(e, t);
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
      (a.prototype = Object.create(o.prototype)),
      (a.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url),
          this.getIsImageComplete() &&
            (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            this.unbindEvents());
      }),
      (a.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (a.prototype.confirm = function (e, t) {
        (this.isLoaded = e),
          this.emitEvent("progress", [this, this.element, t]);
      }),
      (i.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery) &&
          ((s = t),
          (s.fn.imagesLoaded = function (e, t) {
            return new i(this, e, t).jqDeferred.promise(s(this));
          }));
      }),
      i.makeJQueryPlugin(),
      i
    );
  }),
  (function () {
    "use strict";
    function e(e, o, a, s) {
      var u = {},
        c = 0,
        l = 0,
        f = document.title,
        d = function () {
          (u = {}),
            (c = $(document).height()),
            (l = $(window).height()),
            e.find(o).each(function () {
              var e = $(this).attr("href");
              "#" === e[0] &&
                (u[e] = $("#" + $.escapeSelector(e.substring(1))).offset().top);
            });
        },
        p = function () {
          var r = $(document).scrollTop() + s;
          r + l >= c && (r = c + 1e3);
          var i = null;
          for (var d in u) ((u[d] < r && u[d] > u[i]) || null === i) && (i = d);
          r != s || n || ((i = window.location.hash), (n = !0));
          var p = e.find("[href='" + i + "']").first();
          if (!p.hasClass("active")) {
            e.find(".active").removeClass("active"),
              e.find(".active-parent").removeClass("active-parent"),
              p.addClass("active"),
              p
                .parents(a)
                .addClass("active")
                .siblings(o)
                .addClass("active-parent"),
              p.siblings(a).addClass("active"),
              e.find(a).filter(":not(.active)").slideUp(150),
              e.find(a).filter(".active").slideDown(150),
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
        for (var t = 0; t < s.length; t++)
          $(".highlight.tab-" + s[t]).hide(),
            $(".lang-specific." + s[t]).hide();
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
        if (-1 != jQuery.inArray(location.search.substr(1), s))
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
    function a(t) {
      var n = null;
      localStorage && (n = localStorage.getItem("language")), (s = t);
      var i = r();
      i
        ? (e(i), localStorage && localStorage.setItem("language", i))
        : e(null !== n && -1 != jQuery.inArray(n, s) ? n : s[0]);
    }
    var s = [];
    (window.setupLanguages = a),
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
  });
