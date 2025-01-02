!(function (e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function (e, t) {
  'use strict';
  var n = [],
    i = Object.getPrototypeOf,
    r = n.slice,
    o = n.flat
      ? function (e) {
          return n.flat.call(e);
        }
      : function (e) {
          return n.concat.apply([], e);
        },
    a = n.push,
    s = n.indexOf,
    l = {},
    u = l.toString,
    c = l.hasOwnProperty,
    f = c.toString,
    d = f.call(Object),
    h = {},
    p = function (e) {
      return 'function' == typeof e && 'number' != typeof e.nodeType;
    },
    g = function (e) {
      return null != e && e === e.window;
    },
    m = e.document,
    v = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function y(e, t, n) {
    var i,
      r,
      o = (n = n || m).createElement('script');
    if (((o.text = e), t))
      for (i in v)
        (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
          o.setAttribute(i, r);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function b(e) {
    return null == e
      ? e + ''
      : 'object' == typeof e || 'function' == typeof e
        ? l[u.call(e)] || 'object'
        : typeof e;
  }
  var _ = '3.5.1',
    w = function (e, t) {
      return new w.fn.init(e, t);
    };
  function x(e) {
    var t = !!e && 'length' in e && e.length,
      n = b(e);
    return (
      !p(e) &&
      !g(e) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && 0 < t && t - 1 in e))
    );
  }
  (w.fn = w.prototype =
    {
      jquery: _,
      constructor: w,
      length: 0,
      toArray: function () {
        return r.call(this);
      },
      get: function (e) {
        return null == e
          ? r.call(this)
          : e < 0
            ? this[e + this.length]
            : this[e];
      },
      pushStack: function (e) {
        var t = w.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return w.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          w.map(this, function (t, n) {
            return e.call(t, n, t);
          }),
        );
      },
      slice: function () {
        return this.pushStack(r.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          w.grep(this, function (e, t) {
            return (t + 1) % 2;
          }),
        );
      },
      odd: function () {
        return this.pushStack(
          w.grep(this, function (e, t) {
            return t % 2;
          }),
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: a,
      sort: n.sort,
      splice: n.splice,
    }),
    (w.extend = w.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          r,
          o,
          a = arguments[0] || {},
          s = 1,
          l = arguments.length,
          u = !1;
        for (
          'boolean' == typeof a && ((u = a), (a = arguments[s] || {}), s++),
            'object' == typeof a || p(a) || (a = {}),
            s === l && ((a = this), s--);
          s < l;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (i = e[t]),
                '__proto__' !== t &&
                  a !== i &&
                  (u && i && (w.isPlainObject(i) || (r = Array.isArray(i)))
                    ? ((n = a[t]),
                      (o =
                        r && !Array.isArray(n)
                          ? []
                          : r || w.isPlainObject(n)
                            ? n
                            : {}),
                      (r = !1),
                      (a[t] = w.extend(u, o, i)))
                    : void 0 !== i && (a[t] = i));
        return a;
      }),
    w.extend({
      expando: 'jQuery' + (_ + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          '[object Object]' !== u.call(e) ||
          ((t = i(e)) &&
            ('function' !=
              typeof (n = c.call(t, 'constructor') && t.constructor) ||
              f.call(n) !== d))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        y(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (x(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (x(Object(e))
              ? w.merge(n, 'string' == typeof e ? [e] : e)
              : a.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : s.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
        return (e.length = r), e;
      },
      grep: function (e, t, n) {
        for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)
          !t(e[r], r) !== a && i.push(e[r]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          r,
          a = 0,
          s = [];
        if (x(e))
          for (i = e.length; a < i; a++)
            null != (r = t(e[a], a, n)) && s.push(r);
        else for (a in e) null != (r = t(e[a], a, n)) && s.push(r);
        return o(s);
      },
      guid: 1,
      support: h,
    }),
    'function' == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' ',
      ),
      function (e, t) {
        l['[object ' + t + ']'] = t.toLowerCase();
      },
    );
  var k = (function (e) {
    var t,
      n,
      i,
      r,
      o,
      a,
      s,
      l,
      u,
      c,
      f,
      d,
      h,
      p,
      g,
      m,
      v,
      y,
      b,
      _ = 'sizzle' + 1 * new Date(),
      w = e.document,
      x = 0,
      k = 0,
      T = le(),
      E = le(),
      C = le(),
      S = le(),
      A = function (e, t) {
        return e === t && (f = !0), 0;
      },
      N = {}.hasOwnProperty,
      D = [],
      j = D.pop,
      P = D.push,
      I = D.push,
      O = D.slice,
      L = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      F =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      q = '[\\x20\\t\\r\\n\\f]',
      $ =
        '(?:\\\\[\\da-fA-F]{1,6}' +
        q +
        '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
      R =
        '\\[' +
        q +
        '*(' +
        $ +
        ')(?:' +
        q +
        '*([*^$|!~]?=)' +
        q +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        $ +
        '))|)' +
        q +
        '*\\]',
      z =
        ':(' +
        $ +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        R +
        ')*)|.*)\\)|)',
      H = new RegExp(q + '+', 'g'),
      M = new RegExp('^' + q + '+|((?:^|[^\\\\])(?:\\\\.)*)' + q + '+$', 'g'),
      B = new RegExp('^' + q + '*,' + q + '*'),
      W = new RegExp('^' + q + '*([>+~]|' + q + ')' + q + '*'),
      U = new RegExp(q + '|>'),
      Q = new RegExp(z),
      X = new RegExp('^' + $ + '$'),
      V = {
        ID: new RegExp('^#(' + $ + ')'),
        CLASS: new RegExp('^\\.(' + $ + ')'),
        TAG: new RegExp('^(' + $ + '|[*])'),
        ATTR: new RegExp('^' + R),
        PSEUDO: new RegExp('^' + z),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            q +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            q +
            '*(?:([+-]|)' +
            q +
            '*(\\d+)|))' +
            q +
            '*\\)|)',
          'i',
        ),
        bool: new RegExp('^(?:' + F + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            q +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            q +
            '*((?:-\\d)?\\d*)' +
            q +
            '*\\)|)(?=[^-]|$)',
          'i',
        ),
      },
      Z = /HTML$/i,
      Y = /^(?:input|select|textarea|button)$/i,
      K = /^h\d$/i,
      G = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp('\\\\[\\da-fA-F]{1,6}' + q + '?|\\\\([^\\r\\n\\f])', 'g'),
      ne = function (e, t) {
        var n = '0x' + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      re = function (e, t) {
        return t
          ? '\0' === e
            ? '\ufffd'
            : e.slice(0, -1) +
              '\\' +
              e.charCodeAt(e.length - 1).toString(16) +
              ' '
          : '\\' + e;
      },
      oe = function () {
        d();
      },
      ae = _e(
        function (e) {
          return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
        },
        { dir: 'parentNode', next: 'legend' },
      );
    try {
      I.apply((D = O.call(w.childNodes)), w.childNodes);
    } catch (t) {
      I = {
        apply: D.length
          ? function (e, t) {
              P.apply(e, O.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    function se(e, t, i, r) {
      var o,
        s,
        u,
        c,
        f,
        p,
        v,
        y = t && t.ownerDocument,
        w = t ? t.nodeType : 9;
      if (
        ((i = i || []),
        'string' != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
      )
        return i;
      if (!r && (d(t), (t = t || h), g)) {
        if (11 !== w && (f = J.exec(e)))
          if ((o = f[1])) {
            if (9 === w) {
              if (!(u = t.getElementById(o))) return i;
              if (u.id === o) return i.push(u), i;
            } else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o)
              return i.push(u), i;
          } else {
            if (f[2]) return I.apply(i, t.getElementsByTagName(e)), i;
            if (
              (o = f[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return I.apply(i, t.getElementsByClassName(o)), i;
          }
        if (
          n.qsa &&
          !S[e + ' '] &&
          (!m || !m.test(e)) &&
          (1 !== w || 'object' !== t.nodeName.toLowerCase())
        ) {
          if (((v = e), (y = t), 1 === w && (U.test(e) || W.test(e)))) {
            for (
              ((y = (ee.test(e) && ve(t.parentNode)) || t) === t && n.scope) ||
                ((c = t.getAttribute('id'))
                  ? (c = c.replace(ie, re))
                  : t.setAttribute('id', (c = _))),
                s = (p = a(e)).length;
              s--;

            )
              p[s] = (c ? '#' + c : ':scope') + ' ' + be(p[s]);
            v = p.join(',');
          }
          try {
            return I.apply(i, y.querySelectorAll(v)), i;
          } catch (t) {
            S(e, !0);
          } finally {
            c === _ && t.removeAttribute('id');
          }
        }
      }
      return l(e.replace(M, '$1'), t, i, r);
    }
    function le() {
      var e = [];
      return function t(n, r) {
        return (
          e.push(n + ' ') > i.cacheLength && delete t[e.shift()],
          (t[n + ' '] = r)
        );
      };
    }
    function ue(e) {
      return (e[_] = !0), e;
    }
    function ce(e) {
      var t = h.createElement('fieldset');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      for (var n = e.split('|'), r = n.length; r--; ) i.attrHandle[n[r]] = t;
    }
    function de(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function he(e) {
      return function (t) {
        return 'input' === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ('input' === n || 'button' === n) && t.type === e;
      };
    }
    function ge(e) {
      return function (t) {
        return 'form' in t
          ? t.parentNode && !1 === t.disabled
            ? 'label' in t
              ? 'label' in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
            : t.disabled === e
          : 'label' in t && t.disabled === e;
      };
    }
    function me(e) {
      return ue(function (t) {
        return (
          (t = +t),
          ue(function (n, i) {
            for (var r, o = e([], n.length, t), a = o.length; a--; )
              n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
          })
        );
      });
    }
    function ve(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = se.support = {}),
    (o = se.isXML =
      function (e) {
        var t = (e.ownerDocument || e).documentElement;
        return !Z.test(e.namespaceURI || (t && t.nodeName) || 'HTML');
      }),
    (d = se.setDocument =
      function (e) {
        var t,
          r,
          a = e ? e.ownerDocument || e : w;
        return (
          a != h &&
            9 === a.nodeType &&
            a.documentElement &&
            ((p = (h = a).documentElement),
            (g = !o(h)),
            w != h &&
              (r = h.defaultView) &&
              r.top !== r &&
              (r.addEventListener
                ? r.addEventListener('unload', oe, !1)
                : r.attachEvent && r.attachEvent('onunload', oe)),
            (n.scope = ce(function (e) {
              return (
                p.appendChild(e).appendChild(h.createElement('div')),
                void 0 !== e.querySelectorAll &&
                  !e.querySelectorAll(':scope fieldset div').length
              );
            })),
            (n.attributes = ce(function (e) {
              return (e.className = 'i'), !e.getAttribute('className');
            })),
            (n.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(h.createComment('')),
                !e.getElementsByTagName('*').length
              );
            })),
            (n.getElementsByClassName = G.test(h.getElementsByClassName)),
            (n.getById = ce(function (e) {
              return (
                (p.appendChild(e).id = _),
                !h.getElementsByName || !h.getElementsByName(_).length
              );
            })),
            n.getById
              ? ((i.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute('id') === t;
                  };
                }),
                (i.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((i.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    var n =
                      void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                    return n && n.value === t;
                  };
                }),
                (i.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && g) {
                    var n,
                      i,
                      r,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode('id')) && n.value === e)
                        return [o];
                      for (r = t.getElementsByName(e), i = 0; (o = r[i++]); )
                        if ((n = o.getAttributeNode('id')) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (i.find.TAG = n.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                }
              : function (e, t) {
                  var n,
                    i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                  if ('*' === e) {
                    for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }
                  return o;
                }),
            (i.find.CLASS =
              n.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && g)
                  return t.getElementsByClassName(e);
              }),
            (v = []),
            (m = []),
            (n.qsa = G.test(h.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (p.appendChild(e).innerHTML =
                  "<a id='" +
                  _ +
                  "'></a><select id='" +
                  _ +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    m.push('[*^$]=' + q + '*(?:\'\'|"")'),
                  e.querySelectorAll('[selected]').length ||
                    m.push('\\[' + q + '*(?:value|' + F + ')'),
                  e.querySelectorAll('[id~=' + _ + '-]').length || m.push('~='),
                  (t = h.createElement('input')).setAttribute('name', ''),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    m.push('\\[' + q + '*name' + q + '*=' + q + '*(?:\'\'|"")'),
                  e.querySelectorAll(':checked').length || m.push(':checked'),
                  e.querySelectorAll('a#' + _ + '+*').length ||
                    m.push('.#.+[+~]'),
                  e.querySelectorAll('\\\f'),
                  m.push('[\\r\\n\\f]');
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = h.createElement('input');
                t.setAttribute('type', 'hidden'),
                  e.appendChild(t).setAttribute('name', 'D'),
                  e.querySelectorAll('[name=d]').length &&
                    m.push('name' + q + '*[*^$|!~]?='),
                  2 !== e.querySelectorAll(':enabled').length &&
                    m.push(':enabled', ':disabled'),
                  (p.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(':disabled').length &&
                    m.push(':enabled', ':disabled'),
                  e.querySelectorAll('*,:x'),
                  m.push(',.*:');
              })),
            (n.matchesSelector = G.test(
              (y =
                p.matches ||
                p.webkitMatchesSelector ||
                p.mozMatchesSelector ||
                p.oMatchesSelector ||
                p.msMatchesSelector),
            )) &&
              ce(function (e) {
                (n.disconnectedMatch = y.call(e, '*')),
                  y.call(e, "[s!='']:x"),
                  v.push('!=', z);
              }),
            (m = m.length && new RegExp(m.join('|'))),
            (v = v.length && new RegExp(v.join('|'))),
            (t = G.test(p.compareDocumentPosition)),
            (b =
              t || G.test(p.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      i = t && t.parentNode;
                    return (
                      e === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (A = t
              ? function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var i =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    i ||
                    (1 &
                      (i =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!n.sortDetached && t.compareDocumentPosition(e) === i)
                      ? e == h || (e.ownerDocument == w && b(w, e))
                        ? -1
                        : t == h || (t.ownerDocument == w && b(w, t))
                          ? 1
                          : c
                            ? L(c, e) - L(c, t)
                            : 0
                      : 4 & i
                        ? -1
                        : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var n,
                    i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!r || !o)
                    return e == h
                      ? -1
                      : t == h
                        ? 1
                        : r
                          ? -1
                          : o
                            ? 1
                            : c
                              ? L(c, e) - L(c, t)
                              : 0;
                  if (r === o) return de(e, t);
                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                  for (n = t; (n = n.parentNode); ) s.unshift(n);
                  for (; a[i] === s[i]; ) i++;
                  return i
                    ? de(a[i], s[i])
                    : a[i] == w
                      ? -1
                      : s[i] == w
                        ? 1
                        : 0;
                })),
          h
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (d(e),
        n.matchesSelector &&
          g &&
          !S[t + ' '] &&
          (!v || !v.test(t)) &&
          (!m || !m.test(t)))
      )
        try {
          var i = y.call(e, t);
          if (
            i ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return i;
        } catch (e) {
          S(t, !0);
        }
      return 0 < se(t, h, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != h && d(e), b(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != h && d(e);
      var r = i.attrHandle[t.toLowerCase()],
        o = r && N.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
      return void 0 !== o
        ? o
        : n.attributes || !g
          ? e.getAttribute(t)
          : (o = e.getAttributeNode(t)) && o.specified
            ? o.value
            : null;
    }),
    (se.escape = function (e) {
      return (e + '').replace(ie, re);
    }),
    (se.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        i = [],
        r = 0,
        o = 0;
      if (
        ((f = !n.detectDuplicates),
        (c = !n.sortStable && e.slice(0)),
        e.sort(A),
        f)
      ) {
        for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
        for (; r--; ) e.splice(i[r], 1);
      }
      return (c = null), e;
    }),
    (r = se.getText =
      function (e) {
        var t,
          n = '',
          i = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ('string' == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; (t = e[i++]); ) n += r(t);
        return n;
      }),
    ((i = se.selectors =
      {
        cacheLength: 50,
        createPseudo: ue,
        match: V,
        attrHandle: {},
        find: {},
        relative: {
          '>': { dir: 'parentNode', first: !0 },
          ' ': { dir: 'parentNode' },
          '+': { dir: 'previousSibling', first: !0 },
          '~': { dir: 'previousSibling' },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
              '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ('even' === e[3] || 'odd' === e[3]))),
                  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return V.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : n &&
                    Q.test(n) &&
                    (t = a(n, !0)) &&
                    (t = n.indexOf(')', n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return '*' === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = T[e + ' '];
            return (
              t ||
              ((t = new RegExp('(^|' + q + ')' + e + '(' + q + '|$)')) &&
                T(e, function (e) {
                  return t.test(
                    ('string' == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                      '',
                  );
                }))
            );
          },
          ATTR: function (e, t, n) {
            return function (i) {
              var r = se.attr(i, e);
              return null == r
                ? '!=' === t
                : !t ||
                    ((r += ''),
                    '=' === t
                      ? r === n
                      : '!=' === t
                        ? r !== n
                        : '^=' === t
                          ? n && 0 === r.indexOf(n)
                          : '*=' === t
                            ? n && -1 < r.indexOf(n)
                            : '$=' === t
                              ? n && r.slice(-n.length) === n
                              : '~=' === t
                                ? -1 <
                                  (' ' + r.replace(H, ' ') + ' ').indexOf(n)
                                : '|=' === t &&
                                  (r === n ||
                                    r.slice(0, n.length + 1) === n + '-'));
            };
          },
          CHILD: function (e, t, n, i, r) {
            var o = 'nth' !== e.slice(0, 3),
              a = 'last' !== e.slice(-4),
              s = 'of-type' === t;
            return 1 === i && 0 === r
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, l) {
                  var u,
                    c,
                    f,
                    d,
                    h,
                    p,
                    g = o !== a ? 'nextSibling' : 'previousSibling',
                    m = t.parentNode,
                    v = s && t.nodeName.toLowerCase(),
                    y = !l && !s,
                    b = !1;
                  if (m) {
                    if (o) {
                      for (; g; ) {
                        for (d = t; (d = d[g]); )
                          if (
                            s
                              ? d.nodeName.toLowerCase() === v
                              : 1 === d.nodeType
                          )
                            return !1;
                        p = g = 'only' === e && !p && 'nextSibling';
                      }
                      return !0;
                    }
                    if (((p = [a ? m.firstChild : m.lastChild]), a && y)) {
                      for (
                        b =
                          (h =
                            (u =
                              (c =
                                (f = (d = m)[_] || (d[_] = {}))[d.uniqueID] ||
                                (f[d.uniqueID] = {}))[e] || [])[0] === x &&
                            u[1]) && u[2],
                          d = h && m.childNodes[h];
                        (d = (++h && d && d[g]) || (b = h = 0) || p.pop());

                      )
                        if (1 === d.nodeType && ++b && d === t) {
                          c[e] = [x, h, b];
                          break;
                        }
                    } else if (
                      (y &&
                        (b = h =
                          (u =
                            (c =
                              (f = (d = t)[_] || (d[_] = {}))[d.uniqueID] ||
                              (f[d.uniqueID] = {}))[e] || [])[0] === x && u[1]),
                      !1 === b)
                    )
                      for (
                        ;
                        (d = (++h && d && d[g]) || (b = h = 0) || p.pop()) &&
                        ((s
                          ? d.nodeName.toLowerCase() !== v
                          : 1 !== d.nodeType) ||
                          !++b ||
                          (y &&
                            ((c =
                              (f = d[_] || (d[_] = {}))[d.uniqueID] ||
                              (f[d.uniqueID] = {}))[e] = [x, b]),
                          d !== t));

                      );
                    return (b -= r) === i || (b % i == 0 && 0 <= b / i);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var n,
              r =
                i.pseudos[e] ||
                i.setFilters[e.toLowerCase()] ||
                se.error('unsupported pseudo: ' + e);
            return r[_]
              ? r(t)
              : 1 < r.length
                ? ((n = [e, e, '', t]),
                  i.setFilters.hasOwnProperty(e.toLowerCase())
                    ? ue(function (e, n) {
                        for (var i, o = r(e, t), a = o.length; a--; )
                          e[(i = L(e, o[a]))] = !(n[i] = o[a]);
                      })
                    : function (e) {
                        return r(e, 0, n);
                      })
                : r;
          },
        },
        pseudos: {
          not: ue(function (e) {
            var t = [],
              n = [],
              i = s(e.replace(M, '$1'));
            return i[_]
              ? ue(function (e, t, n, r) {
                  for (var o, a = i(e, null, r, []), s = e.length; s--; )
                    (o = a[s]) && (e[s] = !(t[s] = o));
                })
              : function (e, r, o) {
                  return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
                };
          }),
          has: ue(function (e) {
            return function (t) {
              return 0 < se(e, t).length;
            };
          }),
          contains: ue(function (e) {
            return (
              (e = e.replace(te, ne)),
              function (t) {
                return -1 < (t.textContent || r(t)).indexOf(e);
              }
            );
          }),
          lang: ue(function (e) {
            return (
              X.test(e || '') || se.error('unsupported lang: ' + e),
              (e = e.replace(te, ne).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = g
                      ? t.lang
                      : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-')
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
            return e === p;
          },
          focus: function (e) {
            return (
              e === h.activeElement &&
              (!h.hasFocus || h.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ('input' === t && !!e.checked) || ('option' === t && !!e.selected)
            );
          },
          selected: function (e) {
            return !0 === e.selected;
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !i.pseudos.empty(e);
          },
          header: function (e) {
            return K.test(e.nodeName);
          },
          input: function (e) {
            return Y.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ('input' === t && 'button' === e.type) || 'button' === t;
          },
          text: function (e) {
            var t;
            return (
              'input' === e.nodeName.toLowerCase() &&
              'text' === e.type &&
              (null == (t = e.getAttribute('type')) ||
                'text' === t.toLowerCase())
            );
          },
          first: me(function () {
            return [0];
          }),
          last: me(function (e, t) {
            return [t - 1];
          }),
          eq: me(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: me(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: me(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: me(function (e, t, n) {
            for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
            return e;
          }),
          gt: me(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
            return e;
          }),
        },
      }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[t] = he(t);
    for (t in { submit: !0, reset: !0 }) i.pseudos[t] = pe(t);
    function ye() {}
    function be(e) {
      for (var t = 0, n = e.length, i = ''; t < n; t++) i += e[t].value;
      return i;
    }
    function _e(e, t, n) {
      var i = t.dir,
        r = t.next,
        o = r || i,
        a = n && 'parentNode' === o,
        s = k++;
      return t.first
        ? function (t, n, r) {
            for (; (t = t[i]); ) if (1 === t.nodeType || a) return e(t, n, r);
            return !1;
          }
        : function (t, n, l) {
            var u,
              c,
              f,
              d = [x, s];
            if (l) {
              for (; (t = t[i]); )
                if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || a)
                  if (
                    ((c =
                      (f = t[_] || (t[_] = {}))[t.uniqueID] ||
                      (f[t.uniqueID] = {})),
                    r && r === t.nodeName.toLowerCase())
                  )
                    t = t[i] || t;
                  else {
                    if ((u = c[o]) && u[0] === x && u[1] === s)
                      return (d[2] = u[2]);
                    if (((c[o] = d)[2] = e(t, n, l))) return !0;
                  }
            return !1;
          };
    }
    function we(e) {
      return 1 < e.length
        ? function (t, n, i) {
            for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function xe(e, t, n, i, r) {
      for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
        (o = e[s]) && ((n && !n(o, i, r)) || (a.push(o), u && t.push(s)));
      return a;
    }
    function ke(e, t, n, i, r, o) {
      return (
        i && !i[_] && (i = ke(i)),
        r && !r[_] && (r = ke(r, o)),
        ue(function (o, a, s, l) {
          var u,
            c,
            f,
            d = [],
            h = [],
            p = a.length,
            g =
              o ||
              (function (e, t, n) {
                for (var i = 0, r = t.length; i < r; i++) se(e, t[i], n);
                return n;
              })(t || '*', s.nodeType ? [s] : s, []),
            m = !e || (!o && t) ? g : xe(g, d, e, s, l),
            v = n ? (r || (o ? e : p || i) ? [] : a) : m;
          if ((n && n(m, v, s, l), i))
            for (u = xe(v, h), i(u, [], s, l), c = u.length; c--; )
              (f = u[c]) && (v[h[c]] = !(m[h[c]] = f));
          if (o) {
            if (r || e) {
              if (r) {
                for (u = [], c = v.length; c--; )
                  (f = v[c]) && u.push((m[c] = f));
                r(null, (v = []), u, l);
              }
              for (c = v.length; c--; )
                (f = v[c]) &&
                  -1 < (u = r ? L(o, f) : d[c]) &&
                  (o[u] = !(a[u] = f));
            }
          } else
            (v = xe(v === a ? v.splice(p, v.length) : v)),
              r ? r(null, a, v, l) : I.apply(a, v);
        })
      );
    }
    function Te(e) {
      for (
        var t,
          n,
          r,
          o = e.length,
          a = i.relative[e[0].type],
          s = a || i.relative[' '],
          l = a ? 1 : 0,
          c = _e(
            function (e) {
              return e === t;
            },
            s,
            !0,
          ),
          f = _e(
            function (e) {
              return -1 < L(t, e);
            },
            s,
            !0,
          ),
          d = [
            function (e, n, i) {
              var r =
                (!a && (i || n !== u)) ||
                ((t = n).nodeType ? c(e, n, i) : f(e, n, i));
              return (t = null), r;
            },
          ];
        l < o;
        l++
      )
        if ((n = i.relative[e[l].type])) d = [_e(we(d), n)];
        else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
            for (r = ++l; r < o && !i.relative[e[r].type]; r++);
            return ke(
              1 < l && we(d),
              1 < l &&
                be(
                  e
                    .slice(0, l - 1)
                    .concat({ value: ' ' === e[l - 2].type ? '*' : '' }),
                ).replace(M, '$1'),
              n,
              l < r && Te(e.slice(l, r)),
              r < o && Te((e = e.slice(r))),
              r < o && be(e),
            );
          }
          d.push(n);
        }
      return we(d);
    }
    return (
      (ye.prototype = i.filters = i.pseudos),
      (i.setFilters = new ye()),
      (a = se.tokenize =
        function (e, t) {
          var n,
            r,
            o,
            a,
            s,
            l,
            u,
            c = E[e + ' '];
          if (c) return t ? 0 : c.slice(0);
          for (s = e, l = [], u = i.preFilter; s; ) {
            for (a in ((n && !(r = B.exec(s))) ||
              (r && (s = s.slice(r[0].length) || s), l.push((o = []))),
            (n = !1),
            (r = W.exec(s)) &&
              ((n = r.shift()),
              o.push({ value: n, type: r[0].replace(M, ' ') }),
              (s = s.slice(n.length))),
            i.filter))
              !(r = V[a].exec(s)) ||
                (u[a] && !(r = u[a](r))) ||
                ((n = r.shift()),
                o.push({ value: n, type: a, matches: r }),
                (s = s.slice(n.length)));
            if (!n) break;
          }
          return t ? s.length : s ? se.error(e) : E(e, l).slice(0);
        }),
      (s = se.compile =
        function (e, t) {
          var n,
            r,
            o,
            s,
            l,
            c,
            f = [],
            p = [],
            m = C[e + ' '];
          if (!m) {
            for (t || (t = a(e)), n = t.length; n--; )
              (m = Te(t[n]))[_] ? f.push(m) : p.push(m);
            (m = C(
              e,
              ((r = p),
              (s = 0 < (o = f).length),
              (l = 0 < r.length),
              (c = function (e, t, n, a, c) {
                var f,
                  p,
                  m,
                  v = 0,
                  y = '0',
                  b = e && [],
                  _ = [],
                  w = u,
                  k = e || (l && i.find.TAG('*', c)),
                  T = (x += null == w ? 1 : Math.random() || 0.1),
                  E = k.length;
                for (
                  c && (u = t == h || t || c);
                  y !== E && null != (f = k[y]);
                  y++
                ) {
                  if (l && f) {
                    for (
                      p = 0, t || f.ownerDocument == h || (d(f), (n = !g));
                      (m = r[p++]);

                    )
                      if (m(f, t || h, n)) {
                        a.push(f);
                        break;
                      }
                    c && (x = T);
                  }
                  s && ((f = !m && f) && v--, e && b.push(f));
                }
                if (((v += y), s && y !== v)) {
                  for (p = 0; (m = o[p++]); ) m(b, _, t, n);
                  if (e) {
                    if (0 < v) for (; y--; ) b[y] || _[y] || (_[y] = j.call(a));
                    _ = xe(_);
                  }
                  I.apply(a, _),
                    c &&
                      !e &&
                      0 < _.length &&
                      1 < v + o.length &&
                      se.uniqueSort(a);
                }
                return c && ((x = T), (u = w)), b;
              }),
              s ? ue(c) : c),
            )).selector = e;
          }
          return m;
        }),
      (l = se.select =
        function (e, t, n, r) {
          var o,
            l,
            u,
            c,
            f,
            d = 'function' == typeof e && e,
            h = !r && a((e = d.selector || e));
          if (((n = n || []), 1 === h.length)) {
            if (
              2 < (l = h[0] = h[0].slice(0)).length &&
              'ID' === (u = l[0]).type &&
              9 === t.nodeType &&
              g &&
              i.relative[l[1].type]
            ) {
              if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              d && (t = t.parentNode), (e = e.slice(l.shift().value.length));
            }
            for (
              o = V.needsContext.test(e) ? 0 : l.length;
              o-- && !i.relative[(c = (u = l[o]).type)];

            )
              if (
                (f = i.find[c]) &&
                (r = f(
                  u.matches[0].replace(te, ne),
                  (ee.test(l[0].type) && ve(t.parentNode)) || t,
                ))
              ) {
                if ((l.splice(o, 1), !(e = r.length && be(l))))
                  return I.apply(n, r), n;
                break;
              }
          }
          return (
            (d || s(e, h))(
              r,
              t,
              !g,
              n,
              !t || (ee.test(e) && ve(t.parentNode)) || t,
            ),
            n
          );
        }),
      (n.sortStable = _.split('').sort(A).join('') === _),
      (n.detectDuplicates = !!f),
      d(),
      (n.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(h.createElement('fieldset'));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          '#' === e.firstChild.getAttribute('href')
        );
      }) ||
        fe('type|href|height|width', function (e, t, n) {
          if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          );
        })) ||
        fe('value', function (e, t, n) {
          if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute('disabled');
      }) ||
        fe(F, function (e, t, n) {
          var i;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
                ? i.value
                : null;
        }),
      se
    );
  })(e);
  (w.find = k),
    (w.expr = k.selectors),
    (w.expr[':'] = w.expr.pseudos),
    (w.uniqueSort = w.unique = k.uniqueSort),
    (w.text = k.getText),
    (w.isXMLDoc = k.isXML),
    (w.contains = k.contains),
    (w.escapeSelector = k.escape);
  var T = function (e, t, n) {
      for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (r && w(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    E = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    C = w.expr.match.needsContext;
  function S(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function N(e, t, n) {
    return p(t)
      ? w.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
        ? w.grep(e, function (e) {
            return (e === t) !== n;
          })
        : 'string' != typeof t
          ? w.grep(e, function (e) {
              return -1 < s.call(t, e) !== n;
            })
          : w.filter(t, e, n);
  }
  (w.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === i.nodeType
        ? w.find.matchesSelector(i, e)
          ? [i]
          : []
        : w.find.matches(
            e,
            w.grep(t, function (e) {
              return 1 === e.nodeType;
            }),
          )
    );
  }),
    w.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          r = this;
        if ('string' != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; t < i; t++) if (w.contains(r[t], this)) return !0;
            }),
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, r[t], n);
        return 1 < i ? w.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(N(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(N(this, e || [], !0));
      },
      is: function (e) {
        return !!N(this, 'string' == typeof e && C.test(e) ? w(e) : e || [], !1)
          .length;
      },
    });
  var D,
    j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (e, t, n) {
    var i, r;
    if (!e) return this;
    if (((n = n || D), 'string' == typeof e)) {
      if (
        !(i =
          '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : j.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          (w.merge(
            this,
            w.parseHTML(
              i[1],
              (t = t instanceof w ? t[0] : t) && t.nodeType
                ? t.ownerDocument || t
                : m,
              !0,
            ),
          ),
          A.test(i[1]) && w.isPlainObject(t))
        )
          for (i in t) p(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (r = m.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : p(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(w)
        : w.makeArray(e, this);
  }).prototype = w.fn),
    (D = w(m));
  var P = /^(?:parents|prev(?:Until|All))/,
    I = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  w.fn.extend({
    has: function (e) {
      var t = w(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        r = this.length,
        o = [],
        a = 'string' != typeof e && w(e);
      if (!C.test(e))
        for (; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && w.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? w.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? s.call(w(e), this[0])
          : s.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    w.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return T(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return T(e, 'parentNode', n);
        },
        next: function (e) {
          return O(e, 'nextSibling');
        },
        prev: function (e) {
          return O(e, 'previousSibling');
        },
        nextAll: function (e) {
          return T(e, 'nextSibling');
        },
        prevAll: function (e) {
          return T(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return T(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return T(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return E((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return E(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && i(e.contentDocument)
            ? e.contentDocument
            : (S(e, 'template') && (e = e.content || e),
              w.merge([], e.childNodes));
        },
      },
      function (e, t) {
        w.fn[e] = function (n, i) {
          var r = w.map(this, t, n);
          return (
            'Until' !== e.slice(-5) && (i = n),
            i && 'string' == typeof i && (r = w.filter(i, r)),
            1 < this.length &&
              (I[e] || w.uniqueSort(r), P.test(e) && r.reverse()),
            this.pushStack(r)
          );
        };
      },
    );
  var L = /[^\x20\t\r\n\f]+/g;
  function F(e) {
    return e;
  }
  function q(e) {
    throw e;
  }
  function $(e, t, n, i) {
    var r;
    try {
      e && p((r = e.promise))
        ? r.call(e).done(t).fail(n)
        : e && p((r = e.then))
          ? r.call(e, t, n)
          : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (w.Callbacks = function (e) {
    var t;
    e =
      'string' == typeof e
        ? ((t = {}),
          w.each(e.match(L) || [], function (e, n) {
            t[n] = !0;
          }),
          t)
        : w.extend({}, e);
    var n,
      i,
      r,
      o,
      a = [],
      s = [],
      l = -1,
      u = function () {
        for (o = o || e.once, r = n = !0; s.length; l = -1)
          for (i = s.shift(); ++l < a.length; )
            !1 === a[l].apply(i[0], i[1]) &&
              e.stopOnFalse &&
              ((l = a.length), (i = !1));
        e.memory || (i = !1), (n = !1), o && (a = i ? [] : '');
      },
      c = {
        add: function () {
          return (
            a &&
              (i && !n && ((l = a.length - 1), s.push(i)),
              (function t(n) {
                w.each(n, function (n, i) {
                  p(i)
                    ? (e.unique && c.has(i)) || a.push(i)
                    : i && i.length && 'string' !== b(i) && t(i);
                });
              })(arguments),
              i && !n && u()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (e, t) {
              for (var n; -1 < (n = w.inArray(t, a, n)); )
                a.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < w.inArray(e, a) : 0 < a.length;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (o = s = []), (a = i = ''), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (o = s = []), i || n || (a = i = ''), this;
        },
        locked: function () {
          return !!o;
        },
        fireWith: function (e, t) {
          return (
            o ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              s.push(t),
              n || u()),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return c;
  }),
    w.extend({
      Deferred: function (t) {
        var n = [
            [
              'notify',
              'progress',
              w.Callbacks('memory'),
              w.Callbacks('memory'),
              2,
            ],
            [
              'resolve',
              'done',
              w.Callbacks('once memory'),
              w.Callbacks('once memory'),
              0,
              'resolved',
            ],
            [
              'reject',
              'fail',
              w.Callbacks('once memory'),
              w.Callbacks('once memory'),
              1,
              'rejected',
            ],
          ],
          i = 'pending',
          r = {
            state: function () {
              return i;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return r.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return w
                .Deferred(function (t) {
                  w.each(n, function (n, i) {
                    var r = p(e[i[4]]) && e[i[4]];
                    o[i[1]](function () {
                      var e = r && r.apply(this, arguments);
                      e && p(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[i[0] + 'With'](this, r ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, i, r) {
              var o = 0;
              function a(t, n, i, r) {
                return function () {
                  var s = this,
                    l = arguments,
                    u = function () {
                      var e, u;
                      if (!(t < o)) {
                        if ((e = i.apply(s, l)) === n.promise())
                          throw new TypeError('Thenable self-resolution');
                        p(
                          (u =
                            e &&
                            ('object' == typeof e || 'function' == typeof e) &&
                            e.then),
                        )
                          ? r
                            ? u.call(e, a(o, n, F, r), a(o, n, q, r))
                            : (o++,
                              u.call(
                                e,
                                a(o, n, F, r),
                                a(o, n, q, r),
                                a(o, n, F, n.notifyWith),
                              ))
                          : (i !== F && ((s = void 0), (l = [e])),
                            (r || n.resolveWith)(s, l));
                      }
                    },
                    c = r
                      ? u
                      : function () {
                          try {
                            u();
                          } catch (u) {
                            w.Deferred.exceptionHook &&
                              w.Deferred.exceptionHook(u, c.stackTrace),
                              o <= t + 1 &&
                                (i !== q && ((s = void 0), (l = [u])),
                                n.rejectWith(s, l));
                          }
                        };
                  t
                    ? c()
                    : (w.Deferred.getStackHook &&
                        (c.stackTrace = w.Deferred.getStackHook()),
                      e.setTimeout(c));
                };
              }
              return w
                .Deferred(function (e) {
                  n[0][3].add(a(0, e, p(r) ? r : F, e.notifyWith)),
                    n[1][3].add(a(0, e, p(t) ? t : F)),
                    n[2][3].add(a(0, e, p(i) ? i : q));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? w.extend(e, r) : r;
            },
          },
          o = {};
        return (
          w.each(n, function (e, t) {
            var a = t[2],
              s = t[5];
            (r[t[1]] = a.add),
              s &&
                a.add(
                  function () {
                    i = s;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock,
                ),
              a.add(t[3].fire),
              (o[t[0]] = function () {
                return (
                  o[t[0] + 'With'](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[t[0] + 'With'] = a.fireWith);
          }),
          r.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          o = r.call(arguments),
          a = w.Deferred(),
          s = function (e) {
            return function (n) {
              (i[e] = this),
                (o[e] = 1 < arguments.length ? r.call(arguments) : n),
                --t || a.resolveWith(i, o);
            };
          };
        if (
          t <= 1 &&
          ($(e, a.done(s(n)).resolve, a.reject, !t),
          'pending' === a.state() || p(o[n] && o[n].then))
        )
          return a.then();
        for (; n--; ) $(o[n], s(n), a.reject);
        return a.promise();
      },
    });
  var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      R.test(t.name) &&
      e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n);
  }),
    (w.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var z = w.Deferred();
  function H() {
    m.removeEventListener('DOMContentLoaded', H),
      e.removeEventListener('load', H),
      w.ready();
  }
  (w.fn.ready = function (e) {
    return (
      z.then(e).catch(function (e) {
        w.readyException(e);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0) !== e && 0 < --w.readyWait) ||
          z.resolveWith(m, [w]);
      },
    }),
    (w.ready.then = z.then),
    'complete' === m.readyState ||
    ('loading' !== m.readyState && !m.documentElement.doScroll)
      ? e.setTimeout(w.ready)
      : (m.addEventListener('DOMContentLoaded', H),
        e.addEventListener('load', H));
  var M = function (e, t, n, i, r, o, a) {
      var s = 0,
        l = e.length,
        u = null == n;
      if ('object' === b(n))
        for (s in ((r = !0), n)) M(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== i &&
        ((r = !0),
        p(i) || (a = !0),
        u &&
          (a
            ? (t.call(e, i), (t = null))
            : ((u = t),
              (t = function (e, t, n) {
                return u.call(w(e), n);
              }))),
        t)
      )
        for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
      return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
    },
    B = /^-ms-/,
    W = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function Q(e) {
    return e.replace(B, 'ms-').replace(W, U);
  }
  var X = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function V() {
    this.expando = w.expando + V.uid++;
  }
  (V.uid = 1),
    (V.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            X(e) &&
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
        var i,
          r = this.cache(e);
        if ('string' == typeof t) r[Q(t)] = n;
        else for (i in t) r[Q(i)] = t[i];
        return r;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][Q(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(Q)
              : (t = Q(t)) in i
                ? [t]
                : t.match(L) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || w.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      },
    });
  var Z = new V(),
    Y = new V(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    G = /[A-Z]/g;
  function J(e, t, n) {
    var i, r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = 'data-' + t.replace(G, '-$&').toLowerCase()),
        'string' == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n =
            'true' === (r = n) ||
            ('false' !== r &&
              ('null' === r
                ? null
                : r === +r + ''
                  ? +r
                  : K.test(r)
                    ? JSON.parse(r)
                    : r));
        } catch (e) {}
        Y.set(e, t, n);
      } else n = void 0;
    return n;
  }
  w.extend({
    hasData: function (e) {
      return Y.hasData(e) || Z.hasData(e);
    },
    data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    removeData: function (e, t) {
      Y.remove(e, t);
    },
    _data: function (e, t, n) {
      return Z.access(e, t, n);
    },
    _removeData: function (e, t) {
      Z.remove(e, t);
    },
  }),
    w.fn.extend({
      data: function (e, t) {
        var n,
          i,
          r,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((r = Y.get(o)), 1 === o.nodeType && !Z.get(o, 'hasDataAttrs'))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                0 === (i = a[n].name).indexOf('data-') &&
                ((i = Q(i.slice(5))), J(o, i, r[i]));
            Z.set(o, 'hasDataAttrs', !0);
          }
          return r;
        }
        return 'object' == typeof e
          ? this.each(function () {
              Y.set(this, e);
            })
          : M(
              this,
              function (t) {
                var n;
                if (o && void 0 === t)
                  return void 0 !== (n = Y.get(o, e)) ||
                    void 0 !== (n = J(o, e))
                    ? n
                    : void 0;
                this.each(function () {
                  Y.set(this, e, t);
                });
              },
              null,
              t,
              1 < arguments.length,
              null,
              !0,
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Y.remove(this, e);
        });
      },
    }),
    w.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (i = Z.get(e, (t = (t || 'fx') + 'queue'))),
            n &&
              (!i || Array.isArray(n)
                ? (i = Z.access(e, t, w.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        var n = w.queue(e, (t = t || 'fx')),
          i = n.length,
          r = n.shift(),
          o = w._queueHooks(e, t);
        'inprogress' === r && ((r = n.shift()), i--),
          r &&
            ('fx' === t && n.unshift('inprogress'),
            delete o.stop,
            r.call(
              e,
              function () {
                w.dequeue(e, t);
              },
              o,
            )),
          !i && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks';
        return (
          Z.get(e, n) ||
          Z.access(e, n, {
            empty: w.Callbacks('once memory').add(function () {
              Z.remove(e, [t + 'queue', n]);
            }),
          })
        );
      },
    }),
    w.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          'string' != typeof e && ((t = e), (e = 'fx'), n--),
          arguments.length < n
            ? w.queue(this[0], e)
            : void 0 === t
              ? this
              : this.each(function () {
                  var n = w.queue(this, e, t);
                  w._queueHooks(this, e),
                    'fx' === e && 'inprogress' !== n[0] && w.dequeue(this, e);
                })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          r = w.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --i || r.resolveWith(o, [o]);
          };
        for (
          'string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx';
          a--;

        )
          (n = Z.get(o[a], e + 'queueHooks')) &&
            n.empty &&
            (i++, n.empty.add(s));
        return s(), r.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp('^(?:([+-])=|)(' + ee + ')([a-z%]*)$', 'i'),
    ne = ['Top', 'Right', 'Bottom', 'Left'],
    ie = m.documentElement,
    re = function (e) {
      return w.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  ie.getRootNode &&
    (re = function (e) {
      return (
        w.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      'none' === (e = t || e).style.display ||
      ('' === e.style.display && re(e) && 'none' === w.css(e, 'display'))
    );
  };
  function se(e, t, n, i) {
    var r,
      o,
      a = 20,
      s = i
        ? function () {
            return i.cur();
          }
        : function () {
            return w.css(e, t, '');
          },
      l = s(),
      u = (n && n[3]) || (w.cssNumber[t] ? '' : 'px'),
      c =
        e.nodeType &&
        (w.cssNumber[t] || ('px' !== u && +l)) &&
        te.exec(w.css(e, t));
    if (c && c[3] !== u) {
      for (u = u || c[3], c = +(l /= 2) || 1; a--; )
        w.style(e, t, c + u),
          (1 - o) * (1 - (o = s() / l || 0.5)) <= 0 && (a = 0),
          (c /= o);
      w.style(e, t, (c *= 2) + u), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +l || 0),
        (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = u), (i.start = c), (i.end = r))),
      r
    );
  }
  var le = {};
  function ue(e, t) {
    for (var n, i, r, o, a, s, l, u = [], c = 0, f = e.length; c < f; c++)
      (i = e[c]).style &&
        ((n = i.style.display),
        t
          ? ('none' === n &&
              ((u[c] = Z.get(i, 'display') || null),
              u[c] || (i.style.display = '')),
            '' === i.style.display &&
              ae(i) &&
              (u[c] =
                ((l = a = o = void 0),
                (a = (r = i).ownerDocument),
                (l = le[(s = r.nodeName)]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (l = w.css(o, 'display')),
                  o.parentNode.removeChild(o),
                  'none' === l && (l = 'block'),
                  (le[s] = l)))))
          : 'none' !== n && ((u[c] = 'none'), Z.set(i, 'display', n)));
    for (c = 0; c < f; c++) null != u[c] && (e[c].style.display = u[c]);
    return e;
  }
  w.fn.extend({
    show: function () {
      return ue(this, !0);
    },
    hide: function () {
      return ue(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? w(this).show() : w(this).hide();
          });
    },
  });
  var ce,
    fe,
    de = /^(?:checkbox|radio)$/i,
    he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    pe = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = m.createDocumentFragment().appendChild(m.createElement('div'))),
    (fe = m.createElement('input')).setAttribute('type', 'radio'),
    fe.setAttribute('checked', 'checked'),
    fe.setAttribute('name', 't'),
    ce.appendChild(fe),
    (h.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = '<textarea>x</textarea>'),
    (h.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = '<option></option>'),
    (h.option = !!ce.lastChild);
  var ge = {
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: [0, '', ''],
  };
  function me(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || '*')
          : void 0 !== e.querySelectorAll
            ? e.querySelectorAll(t || '*')
            : []),
      void 0 === t || (t && S(e, t)) ? w.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      Z.set(e[n], 'globalEval', !t || Z.get(t[n], 'globalEval'));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    h.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", '</select>']);
  var ye = /<|&#?\w+;/;
  function be(e, t, n, i, r) {
    for (
      var o,
        a,
        s,
        l,
        u,
        c,
        f = t.createDocumentFragment(),
        d = [],
        h = 0,
        p = e.length;
      h < p;
      h++
    )
      if ((o = e[h]) || 0 === o)
        if ('object' === b(o)) w.merge(d, o.nodeType ? [o] : o);
        else if (ye.test(o)) {
          for (
            a = a || f.appendChild(t.createElement('div')),
              s = (he.exec(o) || ['', ''])[1].toLowerCase(),
              a.innerHTML =
                (l = ge[s] || ge._default)[1] + w.htmlPrefilter(o) + l[2],
              c = l[0];
            c--;

          )
            a = a.lastChild;
          w.merge(d, a.childNodes), ((a = f.firstChild).textContent = '');
        } else d.push(t.createTextNode(o));
    for (f.textContent = '', h = 0; (o = d[h++]); )
      if (i && -1 < w.inArray(o, i)) r && r.push(o);
      else if (
        ((u = re(o)), (a = me(f.appendChild(o), 'script')), u && ve(a), n)
      )
        for (c = 0; (o = a[c++]); ) pe.test(o.type || '') && n.push(o);
    return f;
  }
  var _e = /^key/,
    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    xe = /^([^.]*)(?:\.(.+)|)/;
  function ke() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ee(e, t) {
    return (
      (e ===
        (function () {
          try {
            return m.activeElement;
          } catch (e) {}
        })()) ==
      ('focus' === t)
    );
  }
  function Ce(e, t, n, i, r, o) {
    var a, s;
    if ('object' == typeof t) {
      for (s in ('string' != typeof n && ((i = i || n), (n = void 0)), t))
        Ce(e, s, n, i, t[s], o);
      return e;
    }
    if (
      (null == i && null == r
        ? ((r = n), (i = n = void 0))
        : null == r &&
          ('string' == typeof n
            ? ((r = i), (i = void 0))
            : ((r = i), (i = n), (n = void 0))),
      !1 === r)
    )
      r = Te;
    else if (!r) return e;
    return (
      1 === o &&
        ((a = r),
        ((r = function (e) {
          return w().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = w.guid++))),
      e.each(function () {
        w.event.add(this, t, r, i, n);
      })
    );
  }
  function Se(e, t, n) {
    n
      ? (Z.set(e, t, !1),
        w.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var i,
              o,
              a = Z.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (a.length)
                (w.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((a = r.call(arguments)),
                Z.set(this, t, a),
                (i = n(this, t)),
                this[t](),
                a !== (o = Z.get(this, t)) || i ? Z.set(this, t, !1) : (o = {}),
                a !== o)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), o.value
                );
            } else
              a.length &&
                (Z.set(this, t, {
                  value: w.event.trigger(
                    w.extend(a[0], w.Event.prototype),
                    a.slice(1),
                    this,
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Z.get(e, t) && w.event.add(e, t, ke);
  }
  (w.event = {
    global: {},
    add: function (e, t, n, i, r) {
      var o,
        a,
        s,
        l,
        u,
        c,
        f,
        d,
        h,
        p,
        g,
        m = Z.get(e);
      if (X(e))
        for (
          n.handler && ((n = (o = n).handler), (r = o.selector)),
            r && w.find.matchesSelector(ie, r),
            n.guid || (n.guid = w.guid++),
            (l = m.events) || (l = m.events = Object.create(null)),
            (a = m.handle) ||
              (a = m.handle =
                function (t) {
                  return void 0 !== w && w.event.triggered !== t.type
                    ? w.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            u = (t = (t || '').match(L) || ['']).length;
          u--;

        )
          (h = g = (s = xe.exec(t[u]) || [])[1]),
            (p = (s[2] || '').split('.').sort()),
            h &&
              ((f = w.event.special[h] || {}),
              (f =
                w.event.special[(h = (r ? f.delegateType : f.bindType) || h)] ||
                {}),
              (c = w.extend(
                {
                  type: h,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && w.expr.match.needsContext.test(r),
                  namespace: p.join('.'),
                },
                o,
              )),
              (d = l[h]) ||
                (((d = l[h] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, i, p, a)) ||
                  (e.addEventListener && e.addEventListener(h, a))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              r ? d.splice(d.delegateCount++, 0, c) : d.push(c),
              (w.event.global[h] = !0));
    },
    remove: function (e, t, n, i, r) {
      var o,
        a,
        s,
        l,
        u,
        c,
        f,
        d,
        h,
        p,
        g,
        m = Z.hasData(e) && Z.get(e);
      if (m && (l = m.events)) {
        for (u = (t = (t || '').match(L) || ['']).length; u--; )
          if (
            ((h = g = (s = xe.exec(t[u]) || [])[1]),
            (p = (s[2] || '').split('.').sort()),
            h)
          ) {
            for (
              f = w.event.special[h] || {},
                d = l[(h = (i ? f.delegateType : f.bindType) || h)] || [],
                s =
                  s[2] &&
                  new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                a = o = d.length;
              o--;

            )
              (c = d[o]),
                (!r && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (i && i !== c.selector && ('**' !== i || !c.selector)) ||
                  (d.splice(o, 1),
                  c.selector && d.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !d.length &&
              ((f.teardown && !1 !== f.teardown.call(e, p, m.handle)) ||
                w.removeEvent(e, h, m.handle),
              delete l[h]);
          } else for (h in l) w.event.remove(e, h + t[u], n, i, !0);
        w.isEmptyObject(l) && Z.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        r,
        o,
        a,
        s = new Array(arguments.length),
        l = w.event.fix(e),
        u = (Z.get(this, 'events') || Object.create(null))[l.type] || [],
        c = w.event.special[l.type] || {};
      for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((l.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, l))
      ) {
        for (
          a = w.event.handlers.call(this, l, u), t = 0;
          (r = a[t++]) && !l.isPropagationStopped();

        )
          for (
            l.currentTarget = r.elem, n = 0;
            (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();

          )
            (l.rnamespace &&
              !1 !== o.namespace &&
              !l.rnamespace.test(o.namespace)) ||
              ((l.handleObj = o),
              (l.data = o.data),
              void 0 !==
                (i = (
                  (w.event.special[o.origType] || {}).handle || o.handler
                ).apply(r.elem, s)) &&
                !1 === (l.result = i) &&
                (l.preventDefault(), l.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, l), l.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        r,
        o,
        a,
        s = [],
        l = t.delegateCount,
        u = e.target;
      if (l && u.nodeType && !('click' === e.type && 1 <= e.button))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && ('click' !== e.type || !0 !== u.disabled)) {
            for (o = [], a = {}, n = 0; n < l; n++)
              void 0 === a[(r = (i = t[n]).selector + ' ')] &&
                (a[r] = i.needsContext
                  ? -1 < w(r, this).index(u)
                  : w.find(r, this, null, [u]).length),
                a[r] && o.push(i);
            o.length && s.push({ elem: u, handlers: o });
          }
      return (
        (u = this), l < t.length && s.push({ elem: u, handlers: t.slice(l) }), s
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: p(t)
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
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            de.test(t.type) && t.click && S(t, 'input') && Se(t, 'click', ke),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            de.test(t.type) && t.click && S(t, 'input') && Se(t, 'click'), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (de.test(t.type) &&
              t.click &&
              S(t, 'input') &&
              Z.get(t, 'click')) ||
            S(t, 'a')
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (w.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (w.Event = function (e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? ke
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && w.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = ke),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = ke),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = ke),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    w.each(
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
          return null == e.which && _e.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && we.test(e.type)
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
      w.event.addProp,
    ),
    w.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
      w.event.special[e] = {
        setup: function () {
          return Se(this, e, Ee), !1;
        },
        trigger: function () {
          return Se(this, e), !0;
        },
        delegateType: t,
      };
    }),
    w.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = e.relatedTarget,
              r = e.handleObj;
            return (
              (i && (i === this || w.contains(this, i))) ||
                ((e.type = r.origType),
                (n = r.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      },
    ),
    w.fn.extend({
      on: function (e, t, n, i) {
        return Ce(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return Ce(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            w(e.delegateTarget).off(
              i.namespace ? i.origType + '.' + i.namespace : i.origType,
              i.selector,
              i.handler,
            ),
            this
          );
        if ('object' == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this;
        }
        return (
          (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            w.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ae = /<script|<style|<link/i,
    Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
    De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function je(e, t) {
    return (
      (S(e, 'table') &&
        S(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
        w(e).children('tbody')[0]) ||
      e
    );
  }
  function Pe(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function Ie(e) {
    return (
      'true/' === (e.type || '').slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute('type'),
      e
    );
  }
  function Oe(e, t) {
    var n, i, r, o, a, s;
    if (1 === t.nodeType) {
      if (Z.hasData(e) && (s = Z.get(e).events))
        for (r in (Z.remove(t, 'handle events'), s))
          for (n = 0, i = s[r].length; n < i; n++) w.event.add(t, r, s[r][n]);
      Y.hasData(e) && ((o = Y.access(e)), (a = w.extend({}, o)), Y.set(t, a));
    }
  }
  function Le(e, t, n, i) {
    t = o(t);
    var r,
      a,
      s,
      l,
      u,
      c,
      f = 0,
      d = e.length,
      g = d - 1,
      m = t[0],
      v = p(m);
    if (v || (1 < d && 'string' == typeof m && !h.checkClone && Ne.test(m)))
      return e.each(function (r) {
        var o = e.eq(r);
        v && (t[0] = m.call(this, r, o.html())), Le(o, t, n, i);
      });
    if (
      d &&
      ((a = (r = be(t, e[0].ownerDocument, !1, e, i)).firstChild),
      1 === r.childNodes.length && (r = a),
      a || i)
    ) {
      for (l = (s = w.map(me(r, 'script'), Pe)).length; f < d; f++)
        (u = r),
          f !== g &&
            ((u = w.clone(u, !0, !0)), l && w.merge(s, me(u, 'script'))),
          n.call(e[f], u, f);
      if (l)
        for (c = s[s.length - 1].ownerDocument, w.map(s, Ie), f = 0; f < l; f++)
          pe.test((u = s[f]).type || '') &&
            !Z.access(u, 'globalEval') &&
            w.contains(c, u) &&
            (u.src && 'module' !== (u.type || '').toLowerCase()
              ? w._evalUrl &&
                !u.noModule &&
                w._evalUrl(
                  u.src,
                  { nonce: u.nonce || u.getAttribute('nonce') },
                  c,
                )
              : y(u.textContent.replace(De, ''), u, c));
    }
    return e;
  }
  function Fe(e, t, n) {
    for (var i, r = t ? w.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
      n || 1 !== i.nodeType || w.cleanData(me(i)),
        i.parentNode &&
          (n && re(i) && ve(me(i, 'script')), i.parentNode.removeChild(i));
    return e;
  }
  w.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var i,
        r,
        o,
        a,
        s,
        l,
        u,
        c = e.cloneNode(!0),
        f = re(e);
      if (
        !(
          h.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          w.isXMLDoc(e)
        )
      )
        for (a = me(c), i = 0, r = (o = me(e)).length; i < r; i++)
          (s = o[i]),
            'input' === (u = (l = a[i]).nodeName.toLowerCase()) &&
            de.test(s.type)
              ? (l.checked = s.checked)
              : ('input' !== u && 'textarea' !== u) ||
                (l.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || me(e), a = a || me(c), i = 0, r = o.length; i < r; i++)
            Oe(o[i], a[i]);
        else Oe(e, c);
      return (
        0 < (a = me(c, 'script')).length && ve(a, !f && me(e, 'script')), c
      );
    },
    cleanData: function (e) {
      for (var t, n, i, r = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (X(n)) {
          if ((t = n[Z.expando])) {
            if (t.events)
              for (i in t.events)
                r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
            n[Z.expando] = void 0;
          }
          n[Y.expando] && (n[Y.expando] = void 0);
        }
    },
  }),
    w.fn.extend({
      detach: function (e) {
        return Fe(this, e, !0);
      },
      remove: function (e) {
        return Fe(this, e);
      },
      text: function (e) {
        return M(
          this,
          function (e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length,
        );
      },
      append: function () {
        return Le(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Le(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Le(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Le(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(me(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return w.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return M(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              'string' == typeof e &&
              !Ae.test(e) &&
              !ge[(he.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (w.cleanData(me(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length,
        );
      },
      replaceWith: function () {
        var e = [];
        return Le(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 &&
              (w.cleanData(me(this)), n && n.replaceChild(t, this));
          },
          e,
        );
      },
    }),
    w.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, t) {
        w.fn[e] = function (e) {
          for (var n, i = [], r = w(e), o = r.length - 1, s = 0; s <= o; s++)
            (n = s === o ? this : this.clone(!0)),
              w(r[s])[t](n),
              a.apply(i, n.get());
          return this.pushStack(i);
        };
      },
    );
  var qe = new RegExp('^(' + ee + ')(?!px)[a-z%]+$', 'i'),
    $e = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Re = function (e, t, n) {
      var i,
        r,
        o = {};
      for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
      for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
      return i;
    },
    ze = new RegExp(ne.join('|'), 'i');
  function He(e, t, n) {
    var i,
      r,
      o,
      a,
      s = e.style;
    return (
      (n = n || $e(e)) &&
        ('' !== (a = n.getPropertyValue(t) || n[t]) ||
          re(e) ||
          (a = w.style(e, t)),
        !h.pixelBoxStyles() &&
          qe.test(a) &&
          ze.test(t) &&
          ((i = s.width),
          (r = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = i),
          (s.minWidth = r),
          (s.maxWidth = o))),
      void 0 !== a ? a + '' : a
    );
  }
  function Me(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function t() {
      if (c) {
        (u.style.cssText =
          'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (c.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          ie.appendChild(u).appendChild(c);
        var t = e.getComputedStyle(c);
        (i = '1%' !== t.top),
          (l = 12 === n(t.marginLeft)),
          (c.style.right = '60%'),
          (a = 36 === n(t.right)),
          (r = 36 === n(t.width)),
          (c.style.position = 'absolute'),
          (o = 12 === n(c.offsetWidth / 3)),
          ie.removeChild(u),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      r,
      o,
      a,
      s,
      l,
      u = m.createElement('div'),
      c = m.createElement('div');
    c.style &&
      ((c.style.backgroundClip = 'content-box'),
      (c.cloneNode(!0).style.backgroundClip = ''),
      (h.clearCloneStyle = 'content-box' === c.style.backgroundClip),
      w.extend(h, {
        boxSizingReliable: function () {
          return t(), r;
        },
        pixelBoxStyles: function () {
          return t(), a;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), l;
        },
        scrollboxSize: function () {
          return t(), o;
        },
        reliableTrDimensions: function () {
          var t, n, i, r;
          return (
            null == s &&
              ((t = m.createElement('table')),
              (n = m.createElement('tr')),
              (i = m.createElement('div')),
              (t.style.cssText = 'position:absolute;left:-11111px'),
              (n.style.height = '1px'),
              (i.style.height = '9px'),
              ie.appendChild(t).appendChild(n).appendChild(i),
              (r = e.getComputedStyle(n)),
              (s = 3 < parseInt(r.height)),
              ie.removeChild(t)),
            s
          );
        },
      }));
  })();
  var Be = ['Webkit', 'Moz', 'ms'],
    We = m.createElement('div').style,
    Ue = {};
  function Qe(e) {
    return (
      w.cssProps[e] ||
      Ue[e] ||
      (e in We
        ? e
        : (Ue[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = Be.length;
                n--;

              )
                if ((e = Be[n] + t) in We) return e;
            })(e) || e))
    );
  }
  var Xe = /^(none|table(?!-c[ea]).+)/,
    Ve = /^--/,
    Ze = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Ye = { letterSpacing: '0', fontWeight: '400' };
  function Ke(e, t, n) {
    var i = te.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : t;
  }
  function Ge(e, t, n, i, r, o) {
    var a = 'width' === t ? 1 : 0,
      s = 0,
      l = 0;
    if (n === (i ? 'border' : 'content')) return 0;
    for (; a < 4; a += 2)
      'margin' === n && (l += w.css(e, n + ne[a], !0, r)),
        i
          ? ('content' === n && (l -= w.css(e, 'padding' + ne[a], !0, r)),
            'margin' !== n &&
              (l -= w.css(e, 'border' + ne[a] + 'Width', !0, r)))
          : ((l += w.css(e, 'padding' + ne[a], !0, r)),
            'padding' !== n
              ? (l += w.css(e, 'border' + ne[a] + 'Width', !0, r))
              : (s += w.css(e, 'border' + ne[a] + 'Width', !0, r)));
    return (
      !i &&
        0 <= o &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e['offset' + t[0].toUpperCase() + t.slice(1)] - o - l - s - 0.5,
            ),
          ) || 0),
      l
    );
  }
  function Je(e, t, n) {
    var i = $e(e),
      r =
        (!h.boxSizingReliable() || n) &&
        'border-box' === w.css(e, 'boxSizing', !1, i),
      o = r,
      a = He(e, t, i),
      s = 'offset' + t[0].toUpperCase() + t.slice(1);
    if (qe.test(a)) {
      if (!n) return a;
      a = 'auto';
    }
    return (
      ((!h.boxSizingReliable() && r) ||
        (!h.reliableTrDimensions() && S(e, 'tr')) ||
        'auto' === a ||
        (!parseFloat(a) && 'inline' === w.css(e, 'display', !1, i))) &&
        e.getClientRects().length &&
        ((r = 'border-box' === w.css(e, 'boxSizing', !1, i)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Ge(e, t, n || (r ? 'border' : 'content'), o, i, a) +
        'px'
    );
  }
  function et(e, t, n, i, r) {
    return new et.prototype.init(e, t, n, i, r);
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = He(e, 'opacity');
            return '' === n ? '1' : n;
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
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
          o,
          a,
          s = Q(t),
          l = Ve.test(t),
          u = e.style;
        if (
          (l || (t = Qe(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n)
        )
          return a && 'get' in a && void 0 !== (r = a.get(e, !1, i)) ? r : u[t];
        'string' == (o = typeof n) &&
          (r = te.exec(n)) &&
          r[1] &&
          ((n = se(e, t, r)), (o = 'number')),
          null != n &&
            n == n &&
            ('number' !== o ||
              l ||
              (n += (r && r[3]) || (w.cssNumber[s] ? '' : 'px')),
            h.clearCloneStyle ||
              '' !== n ||
              0 !== t.indexOf('background') ||
              (u[t] = 'inherit'),
            (a && 'set' in a && void 0 === (n = a.set(e, n, i))) ||
              (l ? u.setProperty(t, n) : (u[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var r,
        o,
        a,
        s = Q(t);
      return (
        Ve.test(t) || (t = Qe(s)),
        (a = w.cssHooks[t] || w.cssHooks[s]) &&
          'get' in a &&
          (r = a.get(e, !0, n)),
        void 0 === r && (r = He(e, t, i)),
        'normal' === r && t in Ye && (r = Ye[t]),
        '' === n || n
          ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
          : r
      );
    },
  }),
    w.each(['height', 'width'], function (e, t) {
      w.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return !Xe.test(w.css(e, 'display')) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Je(e, t, i)
              : Re(e, Ze, function () {
                  return Je(e, t, i);
                });
        },
        set: function (e, n, i) {
          var r,
            o = $e(e),
            a = !h.scrollboxSize() && 'absolute' === o.position,
            s = (a || i) && 'border-box' === w.css(e, 'boxSizing', !1, o),
            l = i ? Ge(e, t, i, s, o) : 0;
          return (
            s &&
              a &&
              (l -= Math.ceil(
                e['offset' + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(o[t]) -
                  Ge(e, t, 'border', !1, o) -
                  0.5,
              )),
            l &&
              (r = te.exec(n)) &&
              'px' !== (r[3] || 'px') &&
              ((e.style[t] = n), (n = w.css(e, t))),
            Ke(0, n, l)
          );
        },
      };
    }),
    (w.cssHooks.marginLeft = Me(h.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(He(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              Re(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    w.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
      (w.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var i = 0, r = {}, o = 'string' == typeof n ? n.split(' ') : [n];
            i < 4;
            i++
          )
            r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
          return r;
        },
      }),
        'margin' !== e && (w.cssHooks[e + t].set = Ke);
    }),
    w.fn.extend({
      css: function (e, t) {
        return M(
          this,
          function (e, t, n) {
            var i,
              r,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (i = $e(e), r = t.length; a < r; a++)
                o[t[a]] = w.css(e, t[a], !1, i);
              return o;
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
          },
          e,
          t,
          1 < arguments.length,
        );
      },
    }),
    (((w.Tween = et).prototype = {
      constructor: et,
      init: function (e, t, n, i, r, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = r || w.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = o || (w.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          (this.pos = t =
            this.options.duration
              ? w.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration,
                )
              : e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = w.css(e.elem, e.prop, '')) && 'auto' !== t
              ? t
              : 0;
        },
        set: function (e) {
          w.fx.step[e.prop]
            ? w.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
                (!w.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : w.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = et.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (w.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing',
    }),
    (w.fx = et.prototype.init),
    (w.fx.step = {});
  var tt,
    nt,
    it,
    rt,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function st() {
    nt &&
      (!1 === m.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(st)
        : e.setTimeout(st, w.fx.interval),
      w.fx.tick());
  }
  function lt() {
    return (
      e.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function ut(e, t) {
    var n,
      i = 0,
      r = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      r['margin' + (n = ne[i])] = r['padding' + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function ct(e, t, n) {
    for (
      var i,
        r = (ft.tweeners[t] || []).concat(ft.tweeners['*']),
        o = 0,
        a = r.length;
      o < a;
      o++
    )
      if ((i = r[o].call(n, t, e))) return i;
  }
  function ft(e, t, n) {
    var i,
      r,
      o = 0,
      a = ft.prefilters.length,
      s = w.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (r) return !1;
        for (
          var t = tt || lt(),
            n = Math.max(0, u.startTime + u.duration - t),
            i = 1 - (n / u.duration || 0),
            o = 0,
            a = u.tweens.length;
          o < a;
          o++
        )
          u.tweens[o].run(i);
        return (
          s.notifyWith(e, [u, i, n]),
          i < 1 && a
            ? n
            : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
        );
      },
      u = s.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: tt || lt(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = w.Tween(
            e,
            u.opts,
            t,
            n,
            u.opts.specialEasing[t] || u.opts.easing,
          );
          return u.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? u.tweens.length : 0;
          if (r) return this;
          for (r = !0; n < i; n++) u.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t]))
              : s.rejectWith(e, [u, t]),
            this
          );
        },
      }),
      c = u.props;
    for (
      (function (e, t) {
        var n, i, r, o, a;
        for (n in e)
          if (
            ((r = t[(i = Q(n))]),
            (o = e[n]),
            Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
            n !== i && ((e[i] = o), delete e[n]),
            (a = w.cssHooks[i]) && ('expand' in a))
          )
            for (n in ((o = a.expand(o)), delete e[i], o))
              (n in e) || ((e[n] = o[n]), (t[n] = r));
          else t[i] = r;
      })(c, u.opts.specialEasing);
      o < a;
      o++
    )
      if ((i = ft.prefilters[o].call(u, e, c, u.opts)))
        return (
          p(i.stop) &&
            (w._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
          i
        );
    return (
      w.map(c, ct, u),
      p(u.opts.start) && u.opts.start.call(e, u),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always),
      w.fx.timer(w.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
      u
    );
  }
  (w.Animation = w.extend(ft, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      p(e) ? ((t = e), (e = ['*'])) : (e = e.match(L));
      for (var n, i = 0, r = e.length; i < r; i++)
        (ft.tweeners[(n = e[i])] = ft.tweeners[n] || []).unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var i,
          r,
          o,
          a,
          s,
          l,
          u,
          c,
          f = 'width' in t || 'height' in t,
          d = this,
          h = {},
          p = e.style,
          g = e.nodeType && ae(e),
          m = Z.get(e, 'fxshow');
        for (i in (n.queue ||
          (null == (a = w._queueHooks(e, 'fx')).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          d.always(function () {
            d.always(function () {
              a.unqueued--, w.queue(e, 'fx').length || a.empty.fire();
            });
          })),
        t))
          if (ot.test((r = t[i]))) {
            if (
              (delete t[i],
              (o = o || 'toggle' === r),
              r === (g ? 'hide' : 'show'))
            ) {
              if ('show' !== r || !m || void 0 === m[i]) continue;
              g = !0;
            }
            h[i] = (m && m[i]) || w.style(e, i);
          }
        if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h))
          for (i in (f &&
            1 === e.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            null == (u = m && m.display) && (u = Z.get(e, 'display')),
            'none' === (c = w.css(e, 'display')) &&
              (u
                ? (c = u)
                : (ue([e], !0),
                  (u = e.style.display || u),
                  (c = w.css(e, 'display')),
                  ue([e]))),
            ('inline' === c || ('inline-block' === c && null != u)) &&
              'none' === w.css(e, 'float') &&
              (l ||
                (d.done(function () {
                  p.display = u;
                }),
                null == u && (u = 'none' === (c = p.display) ? '' : c)),
              (p.display = 'inline-block'))),
          n.overflow &&
            ((p.overflow = 'hidden'),
            d.always(function () {
              (p.overflow = n.overflow[0]),
                (p.overflowX = n.overflow[1]),
                (p.overflowY = n.overflow[2]);
            })),
          (l = !1),
          h))
            l ||
              (m
                ? 'hidden' in m && (g = m.hidden)
                : (m = Z.access(e, 'fxshow', { display: u })),
              o && (m.hidden = !g),
              g && ue([e], !0),
              d.done(function () {
                for (i in (g || ue([e]), Z.remove(e, 'fxshow'), h))
                  w.style(e, i, h[i]);
              })),
              (l = ct(g ? m[i] : 0, i, d)),
              i in m ||
                ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    },
  })),
    (w.speed = function (e, t, n) {
      var i =
        e && 'object' == typeof e
          ? w.extend({}, e)
          : {
              complete: n || (!n && t) || (p(e) && e),
              duration: e,
              easing: (n && t) || (t && !p(t) && t),
            };
      return (
        w.fx.off
          ? (i.duration = 0)
          : 'number' != typeof i.duration &&
            (i.duration =
              i.duration in w.fx.speeds
                ? w.fx.speeds[i.duration]
                : w.fx.speeds._default),
        (null != i.queue && !0 !== i.queue) || (i.queue = 'fx'),
        (i.old = i.complete),
        (i.complete = function () {
          p(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
        }),
        i
      );
    }),
    w.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(ae)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var r = w.isEmptyObject(e),
          o = w.speed(t, n, i),
          a = function () {
            var t = ft(this, w.extend({}, e), o);
            (r || Z.get(this, 'finish')) && t.stop(!0);
          };
        return (
          (a.finish = a),
          r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          'string' != typeof e && ((n = t), (t = e), (e = void 0)),
          t && this.queue(e || 'fx', []),
          this.each(function () {
            var t = !0,
              r = null != e && e + 'queueHooks',
              o = w.timers,
              a = Z.get(this);
            if (r) a[r] && a[r].stop && i(a[r]);
            else for (r in a) a[r] && a[r].stop && at.test(r) && i(a[r]);
            for (r = o.length; r--; )
              o[r].elem !== this ||
                (null != e && o[r].queue !== e) ||
                (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
            (!t && n) || w.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || 'fx'),
          this.each(function () {
            var t,
              n = Z.get(this),
              i = n[e + 'queue'],
              r = n[e + 'queueHooks'],
              o = w.timers,
              a = i ? i.length : 0;
            for (
              n.finish = !0,
                w.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    w.each(['toggle', 'show', 'hide'], function (e, t) {
      var n = w.fn[t];
      w.fn[t] = function (e, i, r) {
        return null == e || 'boolean' == typeof e
          ? n.apply(this, arguments)
          : this.animate(ut(t, !0), e, i, r);
      };
    }),
    w.each(
      {
        slideDown: ut('show'),
        slideUp: ut('hide'),
        slideToggle: ut('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (e, t) {
        w.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      },
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var e,
        t = 0,
        n = w.timers;
      for (tt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || w.fx.stop(), (tt = void 0);
    }),
    (w.fx.timer = function (e) {
      w.timers.push(e), w.fx.start();
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      nt || ((nt = !0), st());
    }),
    (w.fx.stop = function () {
      nt = null;
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function (t, n) {
      return (
        (t = (w.fx && w.fx.speeds[t]) || t),
        this.queue((n = n || 'fx'), function (n, i) {
          var r = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(r);
          };
        })
      );
    }),
    (it = m.createElement('input')),
    (rt = m.createElement('select').appendChild(m.createElement('option'))),
    (it.type = 'checkbox'),
    (h.checkOn = '' !== it.value),
    (h.optSelected = rt.selected),
    ((it = m.createElement('input')).value = 't'),
    (it.type = 'radio'),
    (h.radioValue = 't' === it.value);
  var dt,
    ht = w.expr.attrHandle;
  w.fn.extend({
    attr: function (e, t) {
      return M(this, w.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    },
  }),
    w.extend({
      attr: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? w.prop(e, t, n)
            : ((1 === o && w.isXMLDoc(e)) ||
                (r =
                  w.attrHooks[t.toLowerCase()] ||
                  (w.expr.match.bool.test(t) ? dt : void 0)),
              void 0 !== n
                ? null === n
                  ? void w.removeAttr(e, t)
                  : r && 'set' in r && void 0 !== (i = r.set(e, n, t))
                    ? i
                    : (e.setAttribute(t, n + ''), n)
                : r && 'get' in r && null !== (i = r.get(e, t))
                  ? i
                  : null == (i = w.find.attr(e, t))
                    ? void 0
                    : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!h.radioValue && 'radio' === t && S(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          r = t && t.match(L);
        if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
      },
    }),
    (dt = {
      set: function (e, t, n) {
        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ht[t] || w.find.attr;
      ht[t] = function (e, t, i) {
        var r,
          o,
          a = t.toLowerCase();
        return (
          i ||
            ((o = ht[a]),
            (ht[a] = r),
            (r = null != n(e, t, i) ? a : null),
            (ht[a] = o)),
          r
        );
      };
    });
  var pt = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;
  function mt(e) {
    return (e.match(L) || []).join(' ');
  }
  function vt(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  function yt(e) {
    return Array.isArray(e) ? e : ('string' == typeof e && e.match(L)) || [];
  }
  w.fn.extend({
    prop: function (e, t) {
      return M(this, w.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    },
  }),
    w.extend({
      prop: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && w.isXMLDoc(e)) ||
              (r = w.propHooks[(t = w.propFix[t] || t)]),
            void 0 !== n
              ? r && 'set' in r && void 0 !== (i = r.set(e, n, t))
                ? i
                : (e[t] = n)
              : r && 'get' in r && null !== (i = r.get(e, t))
                ? i
                : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, 'tabindex');
            return t
              ? parseInt(t, 10)
              : pt.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
                ? 0
                : -1;
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    h.optSelected ||
      (w.propHooks.selected = {
        get: function (e) {
          return null;
        },
        set: function (e) {},
      }),
    w.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        w.propFix[this.toLowerCase()] = this;
      },
    ),
    w.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          a,
          s,
          l = 0;
        if (p(e))
          return this.each(function (t) {
            w(this).addClass(e.call(this, t, vt(this)));
          });
        if ((t = yt(e)).length)
          for (; (n = this[l++]); )
            if (((r = vt(n)), (i = 1 === n.nodeType && ' ' + mt(r) + ' '))) {
              for (a = 0; (o = t[a++]); )
                i.indexOf(' ' + o + ' ') < 0 && (i += o + ' ');
              r !== (s = mt(i)) && n.setAttribute('class', s);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          a,
          s,
          l = 0;
        if (p(e))
          return this.each(function (t) {
            w(this).removeClass(e.call(this, t, vt(this)));
          });
        if (!arguments.length) return this.attr('class', '');
        if ((t = yt(e)).length)
          for (; (n = this[l++]); )
            if (((r = vt(n)), (i = 1 === n.nodeType && ' ' + mt(r) + ' '))) {
              for (a = 0; (o = t[a++]); )
                for (; -1 < i.indexOf(' ' + o + ' '); )
                  i = i.replace(' ' + o + ' ', ' ');
              r !== (s = mt(i)) && n.setAttribute('class', s);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          i = 'string' === n || Array.isArray(e);
        return 'boolean' == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : p(e)
            ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, vt(this), t), t);
              })
            : this.each(function () {
                var t, r, o, a;
                if (i)
                  for (r = 0, o = w(this), a = yt(e); (t = a[r++]); )
                    o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                  (void 0 !== e && 'boolean' !== n) ||
                    ((t = vt(this)) && Z.set(this, '__className__', t),
                    this.setAttribute &&
                      this.setAttribute(
                        'class',
                        t || !1 === e ? '' : Z.get(this, '__className__') || '',
                      ));
              });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = ' ' + e + ' '; (n = this[i++]); )
          if (1 === n.nodeType && -1 < (' ' + mt(vt(n)) + ' ').indexOf(t))
            return !0;
        return !1;
      },
    });
  var bt = /\r/g;
  w.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        r = this[0];
      return arguments.length
        ? ((i = p(e)),
          this.each(function (n) {
            var r;
            1 === this.nodeType &&
              (null == (r = i ? e.call(this, n, w(this).val()) : e)
                ? (r = '')
                : 'number' == typeof r
                  ? (r += '')
                  : Array.isArray(r) &&
                    (r = w.map(r, function (e) {
                      return null == e ? '' : e + '';
                    })),
              ((t =
                w.valHooks[this.type] ||
                w.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in t &&
                void 0 !== t.set(this, r, 'value')) ||
                (this.value = r));
          }))
        : r
          ? (t = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) &&
            'get' in t &&
            void 0 !== (n = t.get(r, 'value'))
            ? n
            : 'string' == typeof (n = r.value)
              ? n.replace(bt, '')
              : null == n
                ? ''
                : n
          : void 0;
    },
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = w.find.attr(e, 'value');
            return null != t ? t : mt(w.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              r = e.options,
              o = e.selectedIndex,
              a = 'select-one' === e.type,
              s = a ? null : [],
              l = a ? o + 1 : r.length;
            for (i = o < 0 ? l : a ? o : 0; i < l; i++)
              if (
                ((n = r[i]).selected || i === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !S(n.parentNode, 'optgroup'))
              ) {
                if (((t = w(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            for (
              var n, i, r = e.options, o = w.makeArray(t), a = r.length;
              a--;

            )
              ((i = r[a]).selected =
                -1 < w.inArray(w.valHooks.option.get(i), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    w.each(['radio', 'checkbox'], function () {
      (w.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < w.inArray(w(e).val(), t));
        },
      }),
        h.checkOn ||
          (w.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    }),
    (h.focusin = 'onfocusin' in e);
  var _t = /^(?:focusinfocus|focusoutblur)$/,
    wt = function (e) {
      e.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (t, n, i, r) {
      var o,
        a,
        s,
        l,
        u,
        f,
        d,
        h,
        v = [i || m],
        y = c.call(t, 'type') ? t.type : t,
        b = c.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (
        ((a = h = s = i = i || m),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !_t.test(y + w.event.triggered) &&
          (-1 < y.indexOf('.') && ((y = (b = y.split('.')).shift()), b.sort()),
          (u = y.indexOf(':') < 0 && 'on' + y),
          ((t = t[w.expando]
            ? t
            : new w.Event(y, 'object' == typeof t && t)).isTrigger = r ? 2 : 3),
          (t.namespace = b.join('.')),
          (t.rnamespace = t.namespace
            ? new RegExp('(^|\\.)' + b.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : w.makeArray(n, [t])),
          (d = w.event.special[y] || {}),
          r || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!r && !d.noBubble && !g(i)) {
          for (
            _t.test((l = d.delegateType || y) + y) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            v.push(a), (s = a);
          s === (i.ownerDocument || m) &&
            v.push(s.defaultView || s.parentWindow || e);
        }
        for (o = 0; (a = v[o++]) && !t.isPropagationStopped(); )
          (h = a),
            (t.type = 1 < o ? l : d.bindType || y),
            (f =
              (Z.get(a, 'events') || Object.create(null))[t.type] &&
              Z.get(a, 'handle')) && f.apply(a, n),
            (f = u && a[u]) &&
              f.apply &&
              X(a) &&
              ((t.result = f.apply(a, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = y),
          r ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(v.pop(), n)) ||
            !X(i) ||
            (u &&
              p(i[y]) &&
              !g(i) &&
              ((s = i[u]) && (i[u] = null),
              (w.event.triggered = y),
              t.isPropagationStopped() && h.addEventListener(y, wt),
              i[y](),
              t.isPropagationStopped() && h.removeEventListener(y, wt),
              (w.event.triggered = void 0),
              s && (i[u] = s))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
      w.event.trigger(i, null, t);
    },
  }),
    w.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          w.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return w.event.trigger(e, t, n, !0);
      },
    }),
    h.focusin ||
      w.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
        var n = function (e) {
          w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this.document || this,
              r = Z.access(i, t);
            r || i.addEventListener(e, n, !0), Z.access(i, t, (r || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this.document || this,
              r = Z.access(i, t) - 1;
            r
              ? Z.access(i, t, r)
              : (i.removeEventListener(e, n, !0), Z.remove(i, t));
          },
        };
      });
  var xt = e.location,
    kt = { guid: Date.now() },
    Tt = /\?/;
  w.parseXML = function (t) {
    var n;
    if (!t || 'string' != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, 'text/xml');
    } catch (t) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName('parsererror').length) ||
        w.error('Invalid XML: ' + t),
      n
    );
  };
  var Et = /\[\]$/,
    Ct = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    At = /^(?:input|select|textarea|keygen)/i;
  function Nt(e, t, n, i) {
    var r;
    if (Array.isArray(t))
      w.each(t, function (t, r) {
        n || Et.test(e)
          ? i(e, r)
          : Nt(
              e + '[' + ('object' == typeof r && null != r ? t : '') + ']',
              r,
              n,
              i,
            );
      });
    else if (n || 'object' !== b(t)) i(e, t);
    else for (r in t) Nt(e + '[' + r + ']', t[r], n, i);
  }
  (w.param = function (e, t) {
    var n,
      i = [],
      r = function (e, t) {
        var n = p(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (null == e) return '';
    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function () {
        r(this.name, this.value);
      });
    else for (n in e) Nt(n, e[n], t, r);
    return i.join('&');
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, 'elements');
          return e ? w.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !w(this).is(':disabled') &&
              At.test(this.nodeName) &&
              !St.test(e) &&
              (this.checked || !de.test(e))
            );
          })
          .map(function (e, t) {
            var n = w(this).val();
            return null == n
              ? null
              : Array.isArray(n)
                ? w.map(n, function (e) {
                    return { name: t.name, value: e.replace(Ct, '\r\n') };
                  })
                : { name: t.name, value: n.replace(Ct, '\r\n') };
          })
          .get();
      },
    });
  var Dt = /%20/g,
    jt = /#.*$/,
    Pt = /([?&])_=[^&]*/,
    It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Lt = /^\/\//,
    Ft = {},
    qt = {},
    $t = '*/'.concat('*'),
    Rt = m.createElement('a');
  function zt(e) {
    return function (t, n) {
      'string' != typeof t && ((n = t), (t = '*'));
      var i,
        r = 0,
        o = t.toLowerCase().match(L) || [];
      if (p(n))
        for (; (i = o[r++]); )
          '+' === i[0]
            ? ((i = i.slice(1) || '*'), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function Ht(e, t, n, i) {
    var r = {},
      o = e === qt;
    function a(s) {
      var l;
      return (
        (r[s] = !0),
        w.each(e[s] || [], function (e, s) {
          var u = s(t, n, i);
          return 'string' != typeof u || o || r[u]
            ? o
              ? !(l = u)
              : void 0
            : (t.dataTypes.unshift(u), a(u), !1);
        }),
        l
      );
    }
    return a(t.dataTypes[0]) || (!r['*'] && a('*'));
  }
  function Mt(e, t) {
    var n,
      i,
      r = w.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && w.extend(!0, e, i), e;
  }
  (Rt.href = xt.href),
    w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: xt.href,
        type: 'GET',
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            xt.protocol,
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': $t,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON',
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': JSON.parse,
          'text xml': w.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Mt(Mt(e, w.ajaxSettings), t) : Mt(w.ajaxSettings, e);
      },
      ajaxPrefilter: zt(Ft),
      ajaxTransport: zt(qt),
      ajax: function (t, n) {
        'object' == typeof t && ((n = t), (t = void 0));
        var i,
          r,
          o,
          a,
          s,
          l,
          u,
          c,
          f,
          d,
          h = w.ajaxSetup({}, (n = n || {})),
          p = h.context || h,
          g = h.context && (p.nodeType || p.jquery) ? w(p) : w.event,
          v = w.Deferred(),
          y = w.Callbacks('once memory'),
          b = h.statusCode || {},
          _ = {},
          x = {},
          k = 'canceled',
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (u) {
                if (!a)
                  for (a = {}; (t = It.exec(o)); )
                    a[t[1].toLowerCase() + ' '] = (
                      a[t[1].toLowerCase() + ' '] || []
                    ).concat(t[2]);
                t = a[e.toLowerCase() + ' '];
              }
              return null == t ? null : t.join(', ');
            },
            getAllResponseHeaders: function () {
              return u ? o : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == u &&
                  ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                  (_[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == u && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (u) T.always(e[T.status]);
                else for (t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || k;
              return i && i.abort(t), E(0, t), this;
            },
          };
        if (
          (v.promise(T),
          (h.url = ((t || h.url || xt.href) + '').replace(
            Lt,
            xt.protocol + '//',
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || '*').toLowerCase().match(L) || ['']),
          null == h.crossDomain)
        ) {
          l = m.createElement('a');
          try {
            (l.href = h.url),
              (l.href = l.href),
              (h.crossDomain =
                Rt.protocol + '//' + Rt.host != l.protocol + '//' + l.host);
          } catch (t) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            'string' != typeof h.data &&
            (h.data = w.param(h.data, h.traditional)),
          Ht(Ft, h, n, T),
          u)
        )
          return T;
        for (f in ((c = w.event && h.global) &&
          0 == w.active++ &&
          w.event.trigger('ajaxStart'),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Ot.test(h.type)),
        (r = h.url.replace(jt, '')),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || '').indexOf(
                'application/x-www-form-urlencoded',
              ) &&
            (h.data = h.data.replace(Dt, '+'))
          : ((d = h.url.slice(r.length)),
            h.data &&
              (h.processData || 'string' == typeof h.data) &&
              ((r += (Tt.test(r) ? '&' : '?') + h.data), delete h.data),
            !1 === h.cache &&
              ((r = r.replace(Pt, '$1')),
              (d = (Tt.test(r) ? '&' : '?') + '_=' + kt.guid++ + d)),
            (h.url = r + d)),
        h.ifModified &&
          (w.lastModified[r] &&
            T.setRequestHeader('If-Modified-Since', w.lastModified[r]),
          w.etag[r] && T.setRequestHeader('If-None-Match', w.etag[r])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          T.setRequestHeader('Content-Type', h.contentType),
        T.setRequestHeader(
          'Accept',
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ('*' !== h.dataTypes[0] ? ', ' + $t + '; q=0.01' : '')
            : h.accepts['*'],
        ),
        h.headers))
          T.setRequestHeader(f, h.headers[f]);
        if (h.beforeSend && (!1 === h.beforeSend.call(p, T, h) || u))
          return T.abort();
        if (
          ((k = 'abort'),
          y.add(h.complete),
          T.done(h.success),
          T.fail(h.error),
          (i = Ht(qt, h, n, T)))
        ) {
          if (((T.readyState = 1), c && g.trigger('ajaxSend', [T, h]), u))
            return T;
          h.async &&
            0 < h.timeout &&
            (s = e.setTimeout(function () {
              T.abort('timeout');
            }, h.timeout));
          try {
            (u = !1), i.send(_, E);
          } catch (t) {
            if (u) throw t;
            E(-1, t);
          }
        } else E(-1, 'No Transport');
        function E(t, n, a, l) {
          var f,
            d,
            m,
            _,
            x,
            k = n;
          u ||
            ((u = !0),
            s && e.clearTimeout(s),
            (i = void 0),
            (o = l || ''),
            (T.readyState = 0 < t ? 4 : 0),
            (f = (200 <= t && t < 300) || 304 === t),
            a &&
              (_ = (function (e, t, n) {
                for (
                  var i, r, o, a, s = e.contents, l = e.dataTypes;
                  '*' === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                      (i = e.mimeType || t.getResponseHeader('Content-Type'));
                if (i)
                  for (r in s)
                    if (s[r] && s[r].test(i)) {
                      l.unshift(r);
                      break;
                    }
                if (l[0] in n) o = l[0];
                else {
                  for (r in n) {
                    if (!l[0] || e.converters[r + ' ' + l[0]]) {
                      o = r;
                      break;
                    }
                    a || (a = r);
                  }
                  o = o || a;
                }
                if (o) return o !== l[0] && l.unshift(o), n[o];
              })(h, T, a)),
            !f &&
              -1 < w.inArray('script', h.dataTypes) &&
              (h.converters['text script'] = function () {}),
            (_ = (function (e, t, n, i) {
              var r,
                o,
                a,
                s,
                l,
                u = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
              for (o = c.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = o),
                  (o = c.shift()))
                )
                  if ('*' === o) o = l;
                  else if ('*' !== l && l !== o) {
                    if (!(a = u[l + ' ' + o] || u['* ' + o]))
                      for (r in u)
                        if (
                          (s = r.split(' '))[1] === o &&
                          (a = u[l + ' ' + s[0]] || u['* ' + s[0]])
                        ) {
                          !0 === a
                            ? (a = u[r])
                            : !0 !== u[r] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e.throws) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: 'parsererror',
                            error: a
                              ? e
                              : 'No conversion from ' + l + ' to ' + o,
                          };
                        }
                  }
              return { state: 'success', data: t };
            })(h, _, T, f)),
            f
              ? (h.ifModified &&
                  ((x = T.getResponseHeader('Last-Modified')) &&
                    (w.lastModified[r] = x),
                  (x = T.getResponseHeader('etag')) && (w.etag[r] = x)),
                204 === t || 'HEAD' === h.type
                  ? (k = 'nocontent')
                  : 304 === t
                    ? (k = 'notmodified')
                    : ((k = _.state), (d = _.data), (f = !(m = _.error))))
              : ((m = k), (!t && k) || ((k = 'error'), t < 0 && (t = 0))),
            (T.status = t),
            (T.statusText = (n || k) + ''),
            f ? v.resolveWith(p, [d, k, T]) : v.rejectWith(p, [T, k, m]),
            T.statusCode(b),
            (b = void 0),
            c && g.trigger(f ? 'ajaxSuccess' : 'ajaxError', [T, h, f ? d : m]),
            y.fireWith(p, [T, k]),
            c &&
              (g.trigger('ajaxComplete', [T, h]),
              --w.active || w.event.trigger('ajaxStop')));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return w.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return w.get(e, void 0, t, 'script');
      },
    }),
    w.each(['get', 'post'], function (e, t) {
      w[t] = function (e, n, i, r) {
        return (
          p(n) && ((r = r || i), (i = n), (n = void 0)),
          w.ajax(
            w.extend(
              { url: e, type: t, dataType: r, data: n, success: i },
              w.isPlainObject(e) && e,
            ),
          )
        );
      };
    }),
    w.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        'content-type' === t.toLowerCase() &&
          (e.contentType = e.headers[t] || '');
    }),
    (w._evalUrl = function (e, t, n) {
      return w.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        converters: { 'text script': function () {} },
        dataFilter: function (e) {
          w.globalEval(e, t, n);
        },
      });
    }),
    w.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (p(e) && (e = e.call(this[0])),
            (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
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
        return p(e)
          ? this.each(function (t) {
              w(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = w(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = p(e);
        return this.each(function (n) {
          w(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not('body')
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e);
    }),
    (w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (t) {}
    });
  var Bt = { 0: 200, 1223: 204 },
    Wt = w.ajaxSettings.xhr();
  (h.cors = !!Wt && 'withCredentials' in Wt),
    (h.ajax = Wt = !!Wt),
    w.ajaxTransport(function (t) {
      var n, i;
      if (h.cors || (Wt && !t.crossDomain))
        return {
          send: function (r, o) {
            var a,
              s = t.xhr();
            if (
              (s.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            for (a in (t.mimeType &&
              s.overrideMimeType &&
              s.overrideMimeType(t.mimeType),
            t.crossDomain ||
              r['X-Requested-With'] ||
              (r['X-Requested-With'] = 'XMLHttpRequest'),
            r))
              s.setRequestHeader(a, r[a]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    i =
                    s.onload =
                    s.onerror =
                    s.onabort =
                    s.ontimeout =
                    s.onreadystatechange =
                      null),
                  'abort' === e
                    ? s.abort()
                    : 'error' === e
                      ? 'number' != typeof s.status
                        ? o(0, 'error')
                        : o(s.status, s.statusText)
                      : o(
                          Bt[s.status] || s.status,
                          s.statusText,
                          'text' !== (s.responseType || 'text') ||
                            'string' != typeof s.responseText
                            ? { binary: s.response }
                            : { text: s.responseText },
                          s.getAllResponseHeaders(),
                        ));
              };
            }),
              (s.onload = n()),
              (i = s.onerror = s.ontimeout = n('error')),
              void 0 !== s.onabort
                ? (s.onabort = i)
                : (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      e.setTimeout(function () {
                        n && i();
                      });
                  }),
              (n = n('abort'));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (r) {
              if (n) throw r;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    w.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return w.globalEval(e), e;
        },
      },
    }),
    w.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }),
    w.ajaxTransport('script', function (e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (i, r) {
            (t = w('<script>')
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                'load error',
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && r('error' === e.type ? 404 : 200, e.type);
                }),
              )),
              m.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var Ut,
    Qt = [],
    Xt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = Qt.pop() || w.expando + '_' + kt.guid++;
      return (this[e] = !0), e;
    },
  }),
    w.ajaxPrefilter('json jsonp', function (t, n, i) {
      var r,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (Xt.test(t.url)
            ? 'url'
            : 'string' == typeof t.data &&
              0 ===
                (t.contentType || '').indexOf(
                  'application/x-www-form-urlencoded',
                ) &&
              Xt.test(t.data) &&
              'data');
      if (s || 'jsonp' === t.dataTypes[0])
        return (
          (r = t.jsonpCallback =
            p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Xt, '$1' + r))
            : !1 !== t.jsonp &&
              (t.url += (Tt.test(t.url) ? '&' : '?') + t.jsonp + '=' + r),
          (t.converters['script json'] = function () {
            return a || w.error(r + ' was not called'), a[0];
          }),
          (t.dataTypes[0] = 'json'),
          (o = e[r]),
          (e[r] = function () {
            a = arguments;
          }),
          i.always(function () {
            void 0 === o ? w(e).removeProp(r) : (e[r] = o),
              t[r] && ((t.jsonpCallback = n.jsonpCallback), Qt.push(r)),
              a && p(o) && o(a[0]),
              (a = o = void 0);
          }),
          'script'
        );
    }),
    (h.createHTMLDocument =
      (((Ut = m.implementation.createHTMLDocument('').body).innerHTML =
        '<form></form><form></form>'),
      2 === Ut.childNodes.length)),
    (w.parseHTML = function (e, t, n) {
      return 'string' != typeof e
        ? []
        : ('boolean' == typeof t && ((n = t), (t = !1)),
          t ||
            (h.createHTMLDocument
              ? (((i = (t =
                  m.implementation.createHTMLDocument('')).createElement(
                  'base',
                )).href = m.location.href),
                t.head.appendChild(i))
              : (t = m)),
          (o = !n && []),
          (r = A.exec(e))
            ? [t.createElement(r[1])]
            : ((r = be([e], t, o)),
              o && o.length && w(o).remove(),
              w.merge([], r.childNodes)));
      var i, r, o;
    }),
    (w.fn.load = function (e, t, n) {
      var i,
        r,
        o,
        a = this,
        s = e.indexOf(' ');
      return (
        -1 < s && ((i = mt(e.slice(s))), (e = e.slice(0, s))),
        p(t)
          ? ((n = t), (t = void 0))
          : t && 'object' == typeof t && (r = 'POST'),
        0 < a.length &&
          w
            .ajax({ url: e, type: r || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              (o = arguments),
                a.html(i ? w('<div>').append(w.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                },
            ),
        this
      );
    }),
    (w.expr.pseudos.animated = function (e) {
      return w.grep(w.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (e, t, n) {
        var i,
          r,
          o,
          a,
          s,
          l,
          u = w.css(e, 'position'),
          c = w(e),
          f = {};
        'static' === u && (e.style.position = 'relative'),
          (s = c.offset()),
          (o = w.css(e, 'top')),
          (l = w.css(e, 'left')),
          ('absolute' === u || 'fixed' === u) && -1 < (o + l).indexOf('auto')
            ? ((a = (i = c.position()).top), (r = i.left))
            : ((a = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
          p(t) && (t = t.call(e, n, w.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + r),
          'using' in t
            ? t.using.call(e, f)
            : ('number' == typeof f.top && (f.top += 'px'),
              'number' == typeof f.left && (f.left += 'px'),
              c.css(f));
      },
    }),
    w.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                w.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? {
                top:
                  (t = i.getBoundingClientRect()).top +
                  (n = i.ownerDocument.defaultView).pageYOffset,
                left: t.left + n.pageXOffset,
              }
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            r = { top: 0, left: 0 };
          if ('fixed' === w.css(i, 'position')) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = i.ownerDocument,
                e = i.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              'static' === w.css(e, 'position');

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((r = w(e).offset()).top += w.css(e, 'borderTopWidth', !0)),
              (r.left += w.css(e, 'borderLeftWidth', !0)));
          }
          return {
            top: t.top - r.top - w.css(i, 'marginTop', !0),
            left: t.left - r.left - w.css(i, 'marginLeft', !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && 'static' === w.css(e, 'position');

          )
            e = e.offsetParent;
          return e || ie;
        });
      },
    }),
    w.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (e, t) {
        var n = 'pageYOffset' === t;
        w.fn[e] = function (i) {
          return M(
            this,
            function (e, i, r) {
              var o;
              if (
                (g(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                void 0 === r)
              )
                return o ? o[t] : e[i];
              o
                ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                : (e[i] = r);
            },
            e,
            i,
            arguments.length,
          );
        };
      },
    ),
    w.each(['top', 'left'], function (e, t) {
      w.cssHooks[t] = Me(h.pixelPosition, function (e, n) {
        if (n)
          return (n = He(e, t)), qe.test(n) ? w(e).position()[t] + 'px' : n;
      });
    }),
    w.each({ Height: 'height', Width: 'width' }, function (e, t) {
      w.each(
        { padding: 'inner' + e, content: t, '': 'outer' + e },
        function (n, i) {
          w.fn[i] = function (r, o) {
            var a = arguments.length && (n || 'boolean' != typeof r),
              s = n || (!0 === r || !0 === o ? 'margin' : 'border');
            return M(
              this,
              function (t, n, r) {
                var o;
                return g(t)
                  ? 0 === i.indexOf('outer')
                    ? t['inner' + e]
                    : t.document.documentElement['client' + e]
                  : 9 === t.nodeType
                    ? ((o = t.documentElement),
                      Math.max(
                        t.body['scroll' + e],
                        o['scroll' + e],
                        t.body['offset' + e],
                        o['offset' + e],
                        o['client' + e],
                      ))
                    : void 0 === r
                      ? w.css(t, n, s)
                      : w.style(t, n, r, s);
              },
              t,
              a ? r : void 0,
              a,
            );
          };
        },
      );
    }),
    w.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend',
      ],
      function (e, t) {
        w.fn[t] = function (e) {
          return this.on(t, e);
        };
      },
    ),
    w.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, '**')
          : this.off(t, e || '**', n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    w.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' ',
      ),
      function (e, t) {
        w.fn[t] = function (e, n) {
          return 0 < arguments.length
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      },
    );
  var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (w.proxy = function (e, t) {
    var n, i, o;
    if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), p(e)))
      return (
        (i = r.call(arguments, 2)),
        ((o = function () {
          return e.apply(t || this, i.concat(r.call(arguments)));
        }).guid = e.guid =
          e.guid || w.guid++),
        o
      );
  }),
    (w.holdReady = function (e) {
      e ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = S),
    (w.isFunction = p),
    (w.isWindow = g),
    (w.camelCase = Q),
    (w.type = b),
    (w.now = Date.now),
    (w.isNumeric = function (e) {
      var t = w.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }),
    (w.trim = function (e) {
      return null == e ? '' : (e + '').replace(Vt, '');
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return w;
      });
  var Zt = e.jQuery,
    Yt = e.$;
  return (
    (w.noConflict = function (t) {
      return e.$ === w && (e.$ = Yt), t && e.jQuery === w && (e.jQuery = Zt), w;
    }),
    void 0 === t && (e.jQuery = e.$ = w),
    w
  );
});
import { popperGenerator, detectOverflow } from './createPopper.js';
import eventListeners from './modifiers/eventListeners.js';
import popperOffsets from './modifiers/popperOffsets.js';
import computeStyles from './modifiers/computeStyles.js';
import applyStyles from './modifiers/applyStyles.js';
import offset from './modifiers/offset.js';
import flip from './modifiers/flip.js';
import preventOverflow from './modifiers/preventOverflow.js';
import arrow from './modifiers/arrow.js';
import hide from './modifiers/hide.js';
var defaultModifiers = [
    eventListeners,
    popperOffsets,
    computeStyles,
    applyStyles,
    offset,
    flip,
    preventOverflow,
    arrow,
    hide,
  ],
  createPopper = popperGenerator({ defaultModifiers: defaultModifiers });
export { createPopper, popperGenerator, defaultModifiers, detectOverflow };
export { createPopper as createPopperLite } from './popper-lite.js';
export * from './modifiers/index.js';
!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports, require('jquery'), require('popper.js'))
    : 'function' == typeof define && define.amd
      ? define(['exports', 'jquery', 'popper.js'], t)
      : t(
          ((e =
            'undefined' != typeof globalThis
              ? globalThis
              : e || self).bootstrap = {}),
          e.jQuery,
          e.Popper,
        );
})(this, function (e, t, n) {
  'use strict';
  function i(e) {
    return e && 'object' == typeof e && 'default' in e ? e : { default: e };
  }
  var r = i(t),
    o = i(n);
  function a(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function s(e, t, n) {
    return t && a(e.prototype, t), n && a(e, n), e;
  }
  function l() {
    return (l =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        }
        return e;
      }).apply(this, arguments);
  }
  var u = 'transitionend',
    c = {
      TRANSITION_END: 'bsTransitionEnd',
      getUID: function (e) {
        do {
          e += ~~(1e6 * Math.random());
        } while (document.getElementById(e));
        return e;
      },
      getSelectorFromElement: function (e) {
        var t = e.getAttribute('data-target');
        if (!t || '#' === t) {
          var n = e.getAttribute('href');
          t = n && '#' !== n ? n.trim() : '';
        }
        try {
          return document.querySelector(t) ? t : null;
        } catch (i) {
          return null;
        }
      },
      getTransitionDurationFromElement: function (e) {
        if (!e) return 0;
        var t = r.default(e).css('transition-duration'),
          n = r.default(e).css('transition-delay'),
          i = parseFloat(t),
          o = parseFloat(n);
        return i || o
          ? ((t = t.split(',')[0]),
            (n = n.split(',')[0]),
            1e3 * (parseFloat(t) + parseFloat(n)))
          : 0;
      },
      reflow: function (e) {
        return e.offsetHeight;
      },
      triggerTransitionEnd: function (e) {
        r.default(e).trigger(u);
      },
      supportsTransitionEnd: function () {
        return Boolean(u);
      },
      isElement: function (e) {
        return (e[0] || e).nodeType;
      },
      typeCheckConfig: function (e, t, n) {
        for (var i in n)
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var r = n[i],
              o = t[i],
              a =
                o && c.isElement(o)
                  ? 'element'
                  : null == (s = o)
                    ? '' + s
                    : {}.toString
                        .call(s)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase();
            if (!new RegExp(r).test(a))
              throw new Error(
                e.toUpperCase() +
                  ': Option "' +
                  i +
                  '" provided type "' +
                  a +
                  '" but expected type "' +
                  r +
                  '".',
              );
          }
        var s;
      },
      findShadowRoot: function (e) {
        if (!document.documentElement.attachShadow) return null;
        if ('function' == typeof e.getRootNode) {
          var t = e.getRootNode();
          return t instanceof ShadowRoot ? t : null;
        }
        return e instanceof ShadowRoot
          ? e
          : e.parentNode
            ? c.findShadowRoot(e.parentNode)
            : null;
      },
      jQueryDetection: function () {
        if (void 0 === r.default)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.",
          );
        var e = r.default.fn.jquery.split(' ')[0].split('.');
        if (
          (e[0] < 2 && e[1] < 9) ||
          (1 === e[0] && 9 === e[1] && e[2] < 1) ||
          e[0] >= 4
        )
          throw new Error(
            "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0",
          );
      },
    };
  c.jQueryDetection(),
    (r.default.fn.emulateTransitionEnd = function (e) {
      var t = this,
        n = !1;
      return (
        r.default(this).one(c.TRANSITION_END, function () {
          n = !0;
        }),
        setTimeout(function () {
          n || c.triggerTransitionEnd(t);
        }, e),
        this
      );
    }),
    (r.default.event.special[c.TRANSITION_END] = {
      bindType: u,
      delegateType: u,
      handle: function (e) {
        if (r.default(e.target).is(this))
          return e.handleObj.handler.apply(this, arguments);
      },
    });
  var f = 'bs.alert',
    d = r.default.fn.alert,
    h = (function () {
      function e(e) {
        this._element = e;
      }
      var t = e.prototype;
      return (
        (t.close = function (e) {
          var t = this._element;
          e && (t = this._getRootElement(e)),
            this._triggerCloseEvent(t).isDefaultPrevented() ||
              this._removeElement(t);
        }),
        (t.dispose = function () {
          r.default.removeData(this._element, f), (this._element = null);
        }),
        (t._getRootElement = function (e) {
          var t = c.getSelectorFromElement(e),
            n = !1;
          return (
            t && (n = document.querySelector(t)),
            n || (n = r.default(e).closest('.alert')[0]),
            n
          );
        }),
        (t._triggerCloseEvent = function (e) {
          var t = r.default.Event('close.bs.alert');
          return r.default(e).trigger(t), t;
        }),
        (t._removeElement = function (e) {
          var t = this;
          if (
            (r.default(e).removeClass('show'), r.default(e).hasClass('fade'))
          ) {
            var n = c.getTransitionDurationFromElement(e);
            r.default(e)
              .one(c.TRANSITION_END, function (n) {
                return t._destroyElement(e, n);
              })
              .emulateTransitionEnd(n);
          } else this._destroyElement(e);
        }),
        (t._destroyElement = function (e) {
          r.default(e).detach().trigger('closed.bs.alert').remove();
        }),
        (e._jQueryInterface = function (t) {
          return this.each(function () {
            var n = r.default(this),
              i = n.data(f);
            i || ((i = new e(this)), n.data(f, i)), 'close' === t && i[t](this);
          });
        }),
        (e._handleDismiss = function (e) {
          return function (t) {
            t && t.preventDefault(), e.close(this);
          };
        }),
        s(e, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.5.3';
            },
          },
        ]),
        e
      );
    })();
  r
    .default(document)
    .on(
      'click.bs.alert.data-api',
      '[data-dismiss="alert"]',
      h._handleDismiss(new h()),
    ),
    (r.default.fn.alert = h._jQueryInterface),
    (r.default.fn.alert.Constructor = h),
    (r.default.fn.alert.noConflict = function () {
      return (r.default.fn.alert = d), h._jQueryInterface;
    });
  var p = 'bs.button',
    g = r.default.fn.button,
    m = 'active',
    v = '[data-toggle^="button"]',
    y = 'input:not([type="hidden"])',
    b = '.btn',
    _ = (function () {
      function e(e) {
        (this._element = e), (this.shouldAvoidTriggerChange = !1);
      }
      var t = e.prototype;
      return (
        (t.toggle = function () {
          var e = !0,
            t = !0,
            n = r.default(this._element).closest('[data-toggle="buttons"]')[0];
          if (n) {
            var i = this._element.querySelector(y);
            if (i) {
              if ('radio' === i.type)
                if (i.checked && this._element.classList.contains(m)) e = !1;
                else {
                  var o = n.querySelector('.active');
                  o && r.default(o).removeClass(m);
                }
              e &&
                (('checkbox' !== i.type && 'radio' !== i.type) ||
                  (i.checked = !this._element.classList.contains(m)),
                this.shouldAvoidTriggerChange ||
                  r.default(i).trigger('change')),
                i.focus(),
                (t = !1);
            }
          }
          this._element.hasAttribute('disabled') ||
            this._element.classList.contains('disabled') ||
            (t &&
              this._element.setAttribute(
                'aria-pressed',
                !this._element.classList.contains(m),
              ),
            e && r.default(this._element).toggleClass(m));
        }),
        (t.dispose = function () {
          r.default.removeData(this._element, p), (this._element = null);
        }),
        (e._jQueryInterface = function (t, n) {
          return this.each(function () {
            var i = r.default(this),
              o = i.data(p);
            o || ((o = new e(this)), i.data(p, o)),
              (o.shouldAvoidTriggerChange = n),
              'toggle' === t && o[t]();
          });
        }),
        s(e, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.5.3';
            },
          },
        ]),
        e
      );
    })();
  r
    .default(document)
    .on('click.bs.button.data-api', v, function (e) {
      var t = e.target,
        n = t;
      if (
        (r.default(t).hasClass('btn') || (t = r.default(t).closest(b)[0]),
        !t || t.hasAttribute('disabled') || t.classList.contains('disabled'))
      )
        e.preventDefault();
      else {
        var i = t.querySelector(y);
        if (
          i &&
          (i.hasAttribute('disabled') || i.classList.contains('disabled'))
        )
          return void e.preventDefault();
        ('INPUT' !== n.tagName && 'LABEL' === t.tagName) ||
          _._jQueryInterface.call(
            r.default(t),
            'toggle',
            'INPUT' === n.tagName,
          );
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', v, function (e) {
      var t = r.default(e.target).closest(b)[0];
      r.default(t).toggleClass('focus', /^focus(in)?$/.test(e.type));
    }),
    r.default(window).on('load.bs.button.data-api', function () {
      for (
        var e = [].slice.call(
            document.querySelectorAll('[data-toggle="buttons"] .btn'),
          ),
          t = 0,
          n = e.length;
        t < n;
        t++
      ) {
        var i = e[t],
          r = i.querySelector(y);
        r.checked || r.hasAttribute('checked')
          ? i.classList.add(m)
          : i.classList.remove(m);
      }
      for (
        var o = 0,
          a = (e = [].slice.call(
            document.querySelectorAll('[data-toggle="button"]'),
          )).length;
        o < a;
        o++
      ) {
        var s = e[o];
        'true' === s.getAttribute('aria-pressed')
          ? s.classList.add(m)
          : s.classList.remove(m);
      }
    }),
    (r.default.fn.button = _._jQueryInterface),
    (r.default.fn.button.Constructor = _),
    (r.default.fn.button.noConflict = function () {
      return (r.default.fn.button = g), _._jQueryInterface;
    });
  var w = 'carousel',
    x = 'bs.carousel',
    k = r.default.fn[w],
    T = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: 'hover',
      wrap: !0,
      touch: !0,
    },
    E = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean',
      touch: 'boolean',
    },
    C = 'next',
    S = 'prev',
    A = 'slid.bs.carousel',
    N = 'active',
    D = '.active.carousel-item',
    j = { TOUCH: 'touch', PEN: 'pen' },
    P = (function () {
      function e(e, t) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(t)),
          (this._element = e),
          (this._indicatorsElement = this._element.querySelector(
            '.carousel-indicators',
          )),
          (this._touchSupported =
            'ontouchstart' in document.documentElement ||
            navigator.maxTouchPoints > 0),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent,
          )),
          this._addEventListeners();
      }
      var t = e.prototype;
      return (
        (t.next = function () {
          this._isSliding || this._slide(C);
        }),
        (t.nextWhenVisible = function () {
          var e = r.default(this._element);
          !document.hidden &&
            e.is(':visible') &&
            'hidden' !== e.css('visibility') &&
            this.next();
        }),
        (t.prev = function () {
          this._isSliding || this._slide(S);
        }),
        (t.pause = function (e) {
          e || (this._isPaused = !0),
            this._element.querySelector(
              '.carousel-item-next, .carousel-item-prev',
            ) && (c.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (t.cycle = function (e) {
          e || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval,
              ));
        }),
        (t.to = function (e) {
          var t = this;
          this._activeElement = this._element.querySelector(D);
          var n = this._getItemIndex(this._activeElement);
          if (!(e > this._items.length - 1 || e < 0))
            if (this._isSliding)
              r.default(this._element).one(A, function () {
                return t.to(e);
              });
            else {
              if (n === e) return this.pause(), void this.cycle();
              this._slide(e > n ? C : S, this._items[e]);
            }
        }),
        (t.dispose = function () {
          r.default(this._element).off('.bs.carousel'),
            r.default.removeData(this._element, x),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (t._getConfig = function (e) {
          return (e = l({}, T, e)), c.typeCheckConfig(w, e, E), e;
        }),
        (t._handleSwipe = function () {
          var e = Math.abs(this.touchDeltaX);
          if (!(e <= 40)) {
            var t = e / this.touchDeltaX;
            (this.touchDeltaX = 0), t > 0 && this.prev(), t < 0 && this.next();
          }
        }),
        (t._addEventListeners = function () {
          var e = this;
          this._config.keyboard &&
            r.default(this._element).on('keydown.bs.carousel', function (t) {
              return e._keydown(t);
            }),
            'hover' === this._config.pause &&
              r
                .default(this._element)
                .on('mouseenter.bs.carousel', function (t) {
                  return e.pause(t);
                })
                .on('mouseleave.bs.carousel', function (t) {
                  return e.cycle(t);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (t._addTouchEventListeners = function () {
          var e = this;
          if (this._touchSupported) {
            var t = function (t) {
                e._pointerEvent && j[t.originalEvent.pointerType.toUpperCase()]
                  ? (e.touchStartX = t.originalEvent.clientX)
                  : e._pointerEvent ||
                    (e.touchStartX = t.originalEvent.touches[0].clientX);
              },
              n = function (t) {
                e._pointerEvent &&
                  j[t.originalEvent.pointerType.toUpperCase()] &&
                  (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                  e._handleSwipe(),
                  'hover' === e._config.pause &&
                    (e.pause(),
                    e.touchTimeout && clearTimeout(e.touchTimeout),
                    (e.touchTimeout = setTimeout(function (t) {
                      return e.cycle(t);
                    }, 500 + e._config.interval)));
              };
            r
              .default(this._element.querySelectorAll('.carousel-item img'))
              .on('dragstart.bs.carousel', function (e) {
                return e.preventDefault();
              }),
              this._pointerEvent
                ? (r
                    .default(this._element)
                    .on('pointerdown.bs.carousel', function (e) {
                      return t(e);
                    }),
                  r
                    .default(this._element)
                    .on('pointerup.bs.carousel', function (e) {
                      return n(e);
                    }),
                  this._element.classList.add('pointer-event'))
                : (r
                    .default(this._element)
                    .on('touchstart.bs.carousel', function (e) {
                      return t(e);
                    }),
                  r
                    .default(this._element)
                    .on('touchmove.bs.carousel', function (t) {
                      return (function (t) {
                        e.touchDeltaX =
                          t.originalEvent.touches &&
                          t.originalEvent.touches.length > 1
                            ? 0
                            : t.originalEvent.touches[0].clientX -
                              e.touchStartX;
                      })(t);
                    }),
                  r
                    .default(this._element)
                    .on('touchend.bs.carousel', function (e) {
                      return n(e);
                    }));
          }
        }),
        (t._keydown = function (e) {
          if (!/input|textarea/i.test(e.target.tagName))
            switch (e.which) {
              case 37:
                e.preventDefault(), this.prev();
                break;
              case 39:
                e.preventDefault(), this.next();
            }
        }),
        (t._getItemIndex = function (e) {
          return (
            (this._items =
              e && e.parentNode
                ? [].slice.call(e.parentNode.querySelectorAll('.carousel-item'))
                : []),
            this._items.indexOf(e)
          );
        }),
        (t._getItemByDirection = function (e, t) {
          var n = e === C,
            i = e === S,
            r = this._getItemIndex(t);
          if (
            ((i && 0 === r) || (n && r === this._items.length - 1)) &&
            !this._config.wrap
          )
            return t;
          var o = (r + (e === S ? -1 : 1)) % this._items.length;
          return -1 === o
            ? this._items[this._items.length - 1]
            : this._items[o];
        }),
        (t._triggerSlideEvent = function (e, t) {
          var n = this._getItemIndex(e),
            i = this._getItemIndex(this._element.querySelector(D)),
            o = r.default.Event('slide.bs.carousel', {
              relatedTarget: e,
              direction: t,
              from: i,
              to: n,
            });
          return r.default(this._element).trigger(o), o;
        }),
        (t._setActiveIndicatorElement = function (e) {
          if (this._indicatorsElement) {
            var t = [].slice.call(
              this._indicatorsElement.querySelectorAll('.active'),
            );
            r.default(t).removeClass(N);
            var n = this._indicatorsElement.children[this._getItemIndex(e)];
            n && r.default(n).addClass(N);
          }
        }),
        (t._slide = function (e, t) {
          var n,
            i,
            o,
            a = this,
            s = this._element.querySelector(D),
            l = this._getItemIndex(s),
            u = t || (s && this._getItemByDirection(e, s)),
            f = this._getItemIndex(u),
            d = Boolean(this._interval);
          if (
            (e === C
              ? ((n = 'carousel-item-left'),
                (i = 'carousel-item-next'),
                (o = 'left'))
              : ((n = 'carousel-item-right'),
                (i = 'carousel-item-prev'),
                (o = 'right')),
            u && r.default(u).hasClass(N))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(u, o).isDefaultPrevented() &&
            s &&
            u
          ) {
            (this._isSliding = !0),
              d && this.pause(),
              this._setActiveIndicatorElement(u);
            var h = r.default.Event(A, {
              relatedTarget: u,
              direction: o,
              from: l,
              to: f,
            });
            if (r.default(this._element).hasClass('slide')) {
              r.default(u).addClass(i),
                c.reflow(u),
                r.default(s).addClass(n),
                r.default(u).addClass(n);
              var p = parseInt(u.getAttribute('data-interval'), 10);
              p
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = p))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval);
              var g = c.getTransitionDurationFromElement(s);
              r.default(s)
                .one(c.TRANSITION_END, function () {
                  r
                    .default(u)
                    .removeClass(n + ' ' + i)
                    .addClass(N),
                    r.default(s).removeClass('active ' + i + ' ' + n),
                    (a._isSliding = !1),
                    setTimeout(function () {
                      return r.default(a._element).trigger(h);
                    }, 0);
                })
                .emulateTransitionEnd(g);
            } else
              r.default(s).removeClass(N),
                r.default(u).addClass(N),
                (this._isSliding = !1),
                r.default(this._element).trigger(h);
            d && this.cycle();
          }
        }),
        (e._jQueryInterface = function (t) {
          return this.each(function () {
            var n = r.default(this).data(x),
              i = l({}, T, r.default(this).data());
            'object' == typeof t && (i = l({}, i, t));
            var o = 'string' == typeof t ? t : i.slide;
            if (
              (n || ((n = new e(this, i)), r.default(this).data(x, n)),
              'number' == typeof t)
            )
              n.to(t);
            else if ('string' == typeof o) {
              if (void 0 === n[o])
                throw new TypeError('No method named "' + o + '"');
              n[o]();
            } else i.interval && i.ride && (n.pause(), n.cycle());
          });
        }),
        (e._dataApiClickHandler = function (t) {
          var n = c.getSelectorFromElement(this);
          if (n) {
            var i = r.default(n)[0];
            if (i && r.default(i).hasClass('carousel')) {
              var o = l({}, r.default(i).data(), r.default(this).data()),
                a = this.getAttribute('data-slide-to');
              a && (o.interval = !1),
                e._jQueryInterface.call(r.default(i), o),
                a && r.default(i).data(x).to(a),
                t.preventDefault();
            }
          }
        }),
        s(e, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.5.3';
            },
          },
          {
            key: 'Default',
            get: function () {
              return T;
            },
          },
        ]),
        e
      );
    })();
  r
    .default(document)
    .on(
      'click.bs.carousel.data-api',
      '[data-slide], [data-slide-to]',
      P._dataApiClickHandler,
    ),
    r.default(window).on('load.bs.carousel.data-api', function () {
      for (
        var e = [].slice.call(
            document.querySelectorAll('[data-ride="carousel"]'),
          ),
          t = 0,
          n = e.length;
        t < n;
        t++
      ) {
        var i = r.default(e[t]);
        P._jQueryInterface.call(i, i.data());
      }
    }),
    (r.default.fn[w] = P._jQueryInterface),
    (r.default.fn[w].Constructor = P),
    (r.default.fn[w].noConflict = function () {
      return (r.default.fn[w] = k), P._jQueryInterface;
    });
  var I = 'collapse',
    O = 'bs.collapse',
    L = r.default.fn[I],
    F = { toggle: !0, parent: '' },
    q = { toggle: 'boolean', parent: '(string|element)' },
    $ = 'show',
    R = 'collapse',
    z = 'collapsing',
    H = 'collapsed',
    M = 'width',
    B = '[data-toggle="collapse"]',
    W = (function () {
      function e(e, t) {
        (this._isTransitioning = !1),
          (this._element = e),
          (this._config = this._getConfig(t)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                e.id +
                '"],[data-toggle="collapse"][data-target="#' +
                e.id +
                '"]',
            ),
          ));
        for (
          var n = [].slice.call(document.querySelectorAll(B)),
            i = 0,
            r = n.length;
          i < r;
          i++
        ) {
          var o = n[i],
            a = c.getSelectorFromElement(o),
            s = [].slice
              .call(document.querySelectorAll(a))
              .filter(function (t) {
                return t === e;
              });
          null !== a &&
            s.length > 0 &&
            ((this._selector = a), this._triggerArray.push(o));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var t = e.prototype;
      return (
        (t.toggle = function () {
          r.default(this._element).hasClass($) ? this.hide() : this.show();
        }),
        (t.show = function () {
          var t,
            n,
            i = this;
          if (
            !(
              this._isTransitioning ||
              r.default(this._element).hasClass($) ||
              (this._parent &&
                0 ===
                  (t = [].slice
                    .call(this._parent.querySelectorAll('.show, .collapsing'))
                    .filter(function (e) {
                      return 'string' == typeof i._config.parent
                        ? e.getAttribute('data-parent') === i._config.parent
                        : e.classList.contains(R);
                    })).length &&
                (t = null),
              t &&
                (n = r.default(t).not(this._selector).data(O)) &&
                n._isTransitioning)
            )
          ) {
            var o = r.default.Event('show.bs.collapse');
            if (
              (r.default(this._element).trigger(o), !o.isDefaultPrevented())
            ) {
              t &&
                (e._jQueryInterface.call(
                  r.default(t).not(this._selector),
                  'hide',
                ),
                n || r.default(t).data(O, null));
              var a = this._getDimension();
              r.default(this._element).removeClass(R).addClass(z),
                (this._element.style[a] = 0),
                this._triggerArray.length &&
                  r
                    .default(this._triggerArray)
                    .removeClass(H)
                    .attr('aria-expanded', !0),
                this.setTransitioning(!0);
              var s = 'scroll' + (a[0].toUpperCase() + a.slice(1)),
                l = c.getTransitionDurationFromElement(this._element);
              r
                .default(this._element)
                .one(c.TRANSITION_END, function () {
                  r
                    .default(i._element)
                    .removeClass(z)
                    .addClass('collapse show'),
                    (i._element.style[a] = ''),
                    i.setTransitioning(!1),
                    r.default(i._element).trigger('shown.bs.collapse');
                })
                .emulateTransitionEnd(l),
                (this._element.style[a] = this._element[s] + 'px');
            }
          }
        }),
        (t.hide = function () {
          var e = this;
          if (!this._isTransitioning && r.default(this._element).hasClass($)) {
            var t = r.default.Event('hide.bs.collapse');
            if (
              (r.default(this._element).trigger(t), !t.isDefaultPrevented())
            ) {
              var n = this._getDimension();
              (this._element.style[n] =
                this._element.getBoundingClientRect()[n] + 'px'),
                c.reflow(this._element),
                r
                  .default(this._element)
                  .addClass(z)
                  .removeClass('collapse show');
              var i = this._triggerArray.length;
              if (i > 0)
                for (var o = 0; o < i; o++) {
                  var a = this._triggerArray[o],
                    s = c.getSelectorFromElement(a);
                  null !== s &&
                    (r
                      .default([].slice.call(document.querySelectorAll(s)))
                      .hasClass($) ||
                      r.default(a).addClass(H).attr('aria-expanded', !1));
                }
              this.setTransitioning(!0), (this._element.style[n] = '');
              var l = c.getTransitionDurationFromElement(this._element);
              r.default(this._element)
                .one(c.TRANSITION_END, function () {
                  e.setTransitioning(!1),
                    r
                      .default(e._element)
                      .removeClass(z)
                      .addClass(R)
                      .trigger('hidden.bs.collapse');
                })
                .emulateTransitionEnd(l);
            }
          }
        }),
        (t.setTransitioning = function (e) {
          this._isTransitioning = e;
        }),
        (t.dispose = function () {
          r.default.removeData(this._element, O),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (t._getConfig = function (e) {
          return (
            ((e = l({}, F, e)).toggle = Boolean(e.toggle)),
            c.typeCheckConfig(I, e, q),
            e
          );
        }),
        (t._getDimension = function () {
          return r.default(this._element).hasClass(M) ? M : 'height';
        }),
        (t._getParent = function () {
          var t,
            n = this;
          c.isElement(this._config.parent)
            ? ((t = this._config.parent),
              void 0 !== this._config.parent.jquery &&
                (t = this._config.parent[0]))
            : (t = document.querySelector(this._config.parent));
          var i = [].slice.call(
            t.querySelectorAll(
              '[data-toggle="collapse"][data-parent="' +
                this._config.parent +
                '"]',
            ),
          );
          return (
            r.default(i).each(function (t, i) {
              n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i]);
            }),
            t
          );
        }),
        (t._addAriaAndCollapsedClass = function (e, t) {
          var n = r.default(e).hasClass($);
          t.length && r.default(t).toggleClass(H, !n).attr('aria-expanded', n);
        }),
        (e._getTargetFromElement = function (e) {
          var t = c.getSelectorFromElement(e);
          return t ? document.querySelector(t) : null;
        }),
        (e._jQueryInterface = function (t) {
          return this.each(function () {
            var n = r.default(this),
              i = n.data(O),
              o = l({}, F, n.data(), 'object' == typeof t && t ? t : {});
            if (
              (!i &&
                o.toggle &&
                'string' == typeof t &&
                /show|hide/.test(t) &&
                (o.toggle = !1),
              i || ((i = new e(this, o)), n.data(O, i)),
              'string' == typeof t)
            ) {
              if (void 0 === i[t])
                throw new TypeError('No method named "' + t + '"');
              i[t]();
            }
          });
        }),
        s(e, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.5.3';
            },
          },
          {
            key: 'Default',
            get: function () {
              return F;
            },
          },
        ]),
        e
      );
    })();
  r.default(document).on('click.bs.collapse.data-api', B, function (e) {
    'A' === e.currentTarget.tagName && e.preventDefault();
    var t = r.default(this),
      n = c.getSelectorFromElement(this),
      i = [].slice.call(document.querySelectorAll(n));
    r.default(i).each(function () {
      var e = r.default(this),
        n = e.data(O) ? 'toggle' : t.data();
      W._jQueryInterface.call(e, n);
    });
  }),
    (r.default.fn[I] = W._jQueryInterface),
    (r.default.fn[I].Constructor = W),
    (r.default.fn[I].noConflict = function () {
      return (r.default.fn[I] = L), W._jQueryInterface;
    });
  var U = 'dropdown',
    Q = 'bs.dropdown',
    X = r.default.fn[U],
    V = new RegExp('38|40|27'),
    Z = 'hide.bs.dropdown',
    Y = 'hidden.bs.dropdown',
    K = 'click.bs.dropdown.data-api',
    G = 'keydown.bs.dropdown.data-api',
    J = 'disabled',
    ee = 'show',
    te = 'dropdown-menu-right',
    ne = '[data-toggle="dropdown"]',
    ie = '.dropdown-menu',
    re = {
      offset: 0,
      flip: !0,
      boundary: 'scrollParent',
      reference: 'toggle',
      display: 'dynamic',
      popperConfig: null,
    },
    oe = {
      offset: '(number|string|function)',
      flip: 'boolean',
      boundary: '(string|element)',
      reference: '(string|element)',
      display: 'string',
      popperConfig: '(null|object)',
    },
    ae = (function () {
      function e(e, t) {
        (this._element = e),
          (this._popper = null),
          (this._config = this._getConfig(t)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var t = e.prototype;
      return (
        (t.toggle = function () {
          if (
            !this._element.disabled &&
            !r.default(this._element).hasClass(J)
          ) {
            var t = r.default(this._menu).hasClass(ee);
            e._clearMenus(), t || this.show(!0);
          }
        }),
        (t.show = function (t) {
          if (
            (void 0 === t && (t = !1),
            !(
              this._element.disabled ||
              r.default(this._element).hasClass(J) ||
              r.default(this._menu).hasClass(ee)
            ))
          ) {
            var n = { relatedTarget: this._element },
              i = r.default.Event('show.bs.dropdown', n),
              a = e._getParentFromElement(this._element);
            if ((r.default(a).trigger(i), !i.isDefaultPrevented())) {
              if (!this._inNavbar && t) {
                if (void 0 === o.default)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)",
                  );
                var s = this._element;
                'parent' === this._config.reference
                  ? (s = a)
                  : c.isElement(this._config.reference) &&
                    ((s = this._config.reference),
                    void 0 !== this._config.reference.jquery &&
                      (s = this._config.reference[0])),
                  'scrollParent' !== this._config.boundary &&
                    r.default(a).addClass('position-static'),
                  (this._popper = new o.default(
                    s,
                    this._menu,
                    this._getPopperConfig(),
                  ));
              }
              'ontouchstart' in document.documentElement &&
                0 === r.default(a).closest('.navbar-nav').length &&
                r
                  .default(document.body)
                  .children()
                  .on('mouseover', null, r.default.noop),
                this._element.focus(),
                this._element.setAttribute('aria-expanded', !0),
                r.default(this._menu).toggleClass(ee),
                r
                  .default(a)
                  .toggleClass(ee)
                  .trigger(r.default.Event('shown.bs.dropdown', n));
            }
          }
        }),
        (t.hide = function () {
          if (
            !this._element.disabled &&
            !r.default(this._element).hasClass(J) &&
            r.default(this._menu).hasClass(ee)
          ) {
            var t = { relatedTarget: this._element },
              n = r.default.Event(Z, t),
              i = e._getParentFromElement(this._element);
            r.default(i).trigger(n),
              n.isDefaultPrevented() ||
                (this._popper && this._popper.destroy(),
                r.default(this._menu).toggleClass(ee),
                r.default(i).toggleClass(ee).trigger(r.default.Event(Y, t)));
          }
        }),
        (t.dispose = function () {
          r.default.removeData(this._element, Q),
            r.default(this._element).off('.bs.dropdown'),
            (this._element = null),
            (this._menu = null),
            null !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (t.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (t._addEventListeners = function () {
          var e = this;
          r.default(this._element).on('click.bs.dropdown', function (t) {
            t.preventDefault(), t.stopPropagation(), e.toggle();
          });
        }),
        (t._getConfig = function (e) {
          return (
            (e = l(
              {},
              this.constructor.Default,
              r.default(this._element).data(),
              e,
            )),
            c.typeCheckConfig(U, e, this.constructor.DefaultType),
            e
          );
        }),
        (t._getMenuElement = function () {
          if (!this._menu) {
            var t = e._getParentFromElement(this._element);
            t && (this._menu = t.querySelector(ie));
          }
          return this._menu;
        }),
        (t._getPlacement = function () {
          var e = r.default(this._element.parentNode),
            t = 'bottom-start';
          return (
            e.hasClass('dropup')
              ? (t = r.default(this._menu).hasClass(te)
                  ? 'top-end'
                  : 'top-start')
              : e.hasClass('dropright')
                ? (t = 'right-start')
                : e.hasClass('dropleft')
                  ? (t = 'left-start')
                  : r.default(this._menu).hasClass(te) && (t = 'bottom-end'),
            t
          );
        }),
        (t._detectNavbar = function () {
          return r.default(this._element).closest('.navbar').length > 0;
        }),
        (t._getOffset = function () {
          var e = this,
            t = {};
          return (
            'function' == typeof this._config.offset
              ? (t.fn = function (t) {
                  return (
                    (t.offsets = l(
                      {},
                      t.offsets,
                      e._config.offset(t.offsets, e._element) || {},
                    )),
                    t
                  );
                })
              : (t.offset = this._config.offset),
            t
          );
        }),
        (t._getPopperConfig = function () {
          var e = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            'static' === this._config.display &&
              (e.modifiers.applyStyle = { enabled: !1 }),
            l({}, e, this._config.popperConfig)
          );
        }),
        (e._jQueryInterface = function (t) {
          return this.each(function () {
            var n = r.default(this).data(Q);
            if (
              (n ||
                ((n = new e(this, 'object' == typeof t ? t : null)),
                r.default(this).data(Q, n)),
              'string' == typeof t)
            ) {
              if (void 0 === n[t])
                throw new TypeError('No method named "' + t + '"');
              n[t]();
            }
          });
        }),
        (e._clearMenus = function (t) {
          if (!t || (3 !== t.which && ('keyup' !== t.type || 9 === t.which)))
            for (
              var n = [].slice.call(document.querySelectorAll(ne)),
                i = 0,
                o = n.length;
              i < o;
              i++
            ) {
              var a = e._getParentFromElement(n[i]),
                s = r.default(n[i]).data(Q),
                l = { relatedTarget: n[i] };
              if ((t && 'click' === t.type && (l.clickEvent = t), s)) {
                var u = s._menu;
                if (
                  r.default(a).hasClass(ee) &&
                  !(
                    t &&
                    (('click' === t.type &&
                      /input|textarea/i.test(t.target.tagName)) ||
                      ('keyup' === t.type && 9 === t.which)) &&
                    r.default.contains(a, t.target)
                  )
                ) {
                  var c = r.default.Event(Z, l);
                  r.default(a).trigger(c),
                    c.isDefaultPrevented() ||
                      ('ontouchstart' in document.documentElement &&
                        r
                          .default(document.body)
                          .children()
                          .off('mouseover', null, r.default.noop),
                      n[i].setAttribute('aria-expanded', 'false'),
                      s._popper && s._popper.destroy(),
                      r.default(u).removeClass(ee),
                      r
                        .default(a)
                        .removeClass(ee)
                        .trigger(r.default.Event(Y, l)));
                }
              }
            }
        }),
        (e._getParentFromElement = function (e) {
          var t,
            n = c.getSelectorFromElement(e);
          return n && (t = document.querySelector(n)), t || e.parentNode;
        }),
        (e._dataApiKeydownHandler = function (t) {
          if (
            !(/input|textarea/i.test(t.target.tagName)
              ? 32 === t.which ||
                (27 !== t.which &&
                  ((40 !== t.which && 38 !== t.which) ||
                    r.default(t.target).closest(ie).length))
              : !V.test(t.which)) &&
            !this.disabled &&
            !r.default(this).hasClass(J)
          ) {
            var n = e._getParentFromElement(this),
              i = r.default(n).hasClass(ee);
            if (i || 27 !== t.which) {
              if (
                (t.preventDefault(),
                t.stopPropagation(),
                !i || 27 === t.which || 32 === t.which)
              )
                return (
                  27 === t.which &&
                    r.default(n.querySelector(ne)).trigger('focus'),
                  void r.default(this).trigger('click')
                );
              var o = [].slice
                .call(
                  n.querySelectorAll(
                    '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
                  ),
                )
                .filter(function (e) {
                  return r.default(e).is(':visible');
                });
              if (0 !== o.length) {
                var a = o.indexOf(t.target);
                38 === t.which && a > 0 && a--,
                  40 === t.which && a < o.length - 1 && a++,
                  a < 0 && (a = 0),
                  o[a].focus();
              }
            }
          }
        }),
        s(e, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.5.3';
            },
          },
          {
            key: 'Default',
            get: function () {
              return re;
            },
          },
          {
            key: 'DefaultType',
            get: function () {
              return oe;
            },
          },
        ]),
        e
      );
    })();
  r
    .default(document)
    .on(G, ne, ae._dataApiKeydownHandler)
    .on(G, ie, ae._dataApiKeydownHandler)
    .on(K + ' keyup.bs.dropdown.data-api', ae._clearMenus)
    .on(K, ne, function (e) {
      e.preventDefault(),
        e.stopPropagation(),
        ae._jQueryInterface.call(r.default(this), 'toggle');
    })
    .on(K, '.dropdown form', function (e) {
      e.stopPropagation();
    }),
    (r.default.fn[U] = ae._jQueryInterface),
    (r.default.fn[U].Constructor = ae),
    (r.default.fn[U].noConflict = function () {
      return (r.default.fn[U] = X), ae._jQueryInterface;
    });
  var se = 'bs.modal',
    le = r.default.fn.modal,
    ue = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    ce = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean',
    },
    fe = 'hidden.bs.modal',
    de = 'show.bs.modal',
    he = 'focusin.bs.modal',
    pe = 'resize.bs.modal',
    ge = 'click.dismiss.bs.modal',
    me = 'keydown.dismiss.bs.modal',
    ve = 'mousedown.dismiss.bs.modal',
    ye = 'modal-open',
    be = 'fade',
    _e = 'show',
    we = 'modal-static',
    xe = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    ke = (function () {
      function e(e, t) {
        (this._config = this._getConfig(t)),
          (this._element = e),
          (this._dialog = e.querySelector('.modal-dialog')),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var t = e.prototype;
      return (
        (t.toggle = function (e) {
          return this._isShown ? this.hide() : this.show(e);
        }),
        (t.show = function (e) {
          var t = this;
          if (!this._isShown && !this._isTransitioning) {
            r.default(this._element).hasClass(be) &&
              (this._isTransitioning = !0);
            var n = r.default.Event(de, { relatedTarget: e });
            r.default(this._element).trigger(n),
              this._isShown ||
                n.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                r
                  .default(this._element)
                  .on(ge, '[data-dismiss="modal"]', function (e) {
                    return t.hide(e);
                  }),
                r.default(this._dialog).on(ve, function () {
                  r.default(t._element).one(
                    'mouseup.dismiss.bs.modal',
                    function (e) {
                      r.default(e.target).is(t._element) &&
                        (t._ignoreBackdropClick = !0);
                    },
                  );
                }),
                this._showBackdrop(function () {
                  return t._showElement(e);
                }));
          }
        }),
        (t.hide = function (e) {
          var t = this;
          if (
            (e && e.preventDefault(), this._isShown && !this._isTransitioning)
          ) {
            var n = r.default.Event('hide.bs.modal');
            if (
              (r.default(this._element).trigger(n),
              this._isShown && !n.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var i = r.default(this._element).hasClass(be);
              if (
                (i && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                r.default(document).off(he),
                r.default(this._element).removeClass(_e),
                r.default(this._element).off(ge),
                r.default(this._dialog).off(ve),
                i)
              ) {
                var o = c.getTransitionDurationFromElement(this._element);
                r.default(this._element)
                  .one(c.TRANSITION_END, function (e) {
                    return t._hideModal(e);
                  })
                  .emulateTransitionEnd(o);
              } else this._hideModal();
            }
          }
        }),
        (t.dispose = function () {
          [window, this._element, this._dialog].forEach(function (e) {
            return r.default(e).off('.bs.modal');
          }),
            r.default(document).off(he),
            r.default.removeData(this._element, se),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (t.handleUpdate = function () {
          this._adjustDialog();
        }),
        (t._getConfig = function (e) {
          return (e = l({}, ue, e)), c.typeCheckConfig('modal', e, ce), e;
        }),
        (t._triggerBackdropTransition = function () {
          var e = this;
          if ('static' === this._config.backdrop) {
            var t = r.default.Event('hidePrevented.bs.modal');
            if ((r.default(this._element).trigger(t), t.isDefaultPrevented()))
              return;
            var n =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            n || (this._element.style.overflowY = 'hidden'),
              this._element.classList.add(we);
            var i = c.getTransitionDurationFromElement(this._dialog);
            r.default(this._element).off(c.TRANSITION_END),
              r
                .default(this._element)
                .one(c.TRANSITION_END, function () {
                  e._element.classList.remove(we),
                    n ||
                      r
                        .default(e._element)
                        .one(c.TRANSITION_END, function () {
                          e._element.style.overflowY = '';
                        })
                        .emulateTransitionEnd(e._element, i);
                })
                .emulateTransitionEnd(i),
              this._element.focus();
          } else this.hide();
        }),
        (t._showElement = function (e) {
          var t = this,
            n = r.default(this._element).hasClass(be),
            i = this._dialog ? this._dialog.querySelector('.modal-body') : null;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = 'block'),
            this._element.removeAttribute('aria-hidden'),
            this._element.setAttribute('aria-modal', !0),
            this._element.setAttribute('role', 'dialog'),
            r.default(this._dialog).hasClass('modal-dialog-scrollable') && i
              ? (i.scrollTop = 0)
              : (this._element.scrollTop = 0),
            n && c.reflow(this._element),
            r.default(this._element).addClass(_e),
            this._config.focus && this._enforceFocus();
          var o = r.default.Event('shown.bs.modal', { relatedTarget: e }),
            a = function () {
              t._config.focus && t._element.focus(),
                (t._isTransitioning = !1),
                r.default(t._element).trigger(o);
            };
          if (n) {
            var s = c.getTransitionDurationFromElement(this._dialog);
            r.default(this._dialog)
              .one(c.TRANSITION_END, a)
              .emulateTransitionEnd(s);
          } else a();
        }),
        (t._enforceFocus = function () {
          var e = this;
          r.default(document)
            .off(he)
            .on(he, function (t) {
              document !== t.target &&
                e._element !== t.target &&
                0 === r.default(e._element).has(t.target).length &&
                e._element.focus();
            });
        }),
        (t._setEscapeEvent = function () {
          var e = this;
          this._isShown
            ? r.default(this._element).on(me, function (t) {
                e._config.keyboard && 27 === t.which
                  ? (t.preventDefault(), e.hide())
                  : e._config.keyboard ||
                    27 !== t.which ||
                    e._triggerBackdropTransition();
              })
            : this._isShown || r.default(this._element).off(me);
        }),
        (t._setResizeEvent = function () {
          var e = this;
          this._isShown
            ? r.default(window).on(pe, function (t) {
                return e.handleUpdate(t);
              })
            : r.default(window).off(pe);
        }),
        (t._hideModal = function () {
          var e = this;
          (this._element.style.display = 'none'),
            this._element.setAttribute('aria-hidden', !0),
            this._element.removeAttribute('aria-modal'),
            this._element.removeAttribute('role'),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              r.default(document.body).removeClass(ye),
                e._resetAdjustments(),
                e._resetScrollbar(),
                r.default(e._element).trigger(fe);
            });
        }),
        (t._removeBackdrop = function () {
          this._backdrop &&
            (r.default(this._backdrop).remove(), (this._backdrop = null));
        }),
        (t._showBackdrop = function (e) {
          var t = this,
            n = r.default(this._element).hasClass(be) ? be : '';
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement('div')),
              (this._backdrop.className = 'modal-backdrop'),
              n && this._backdrop.classList.add(n),
              r.default(this._backdrop).appendTo(document.body),
              r.default(this._element).on(ge, function (e) {
                t._ignoreBackdropClick
                  ? (t._ignoreBackdropClick = !1)
                  : e.target === e.currentTarget &&
                    t._triggerBackdropTransition();
              }),
              n && c.reflow(this._backdrop),
              r.default(this._backdrop).addClass(_e),
              !e)
            )
              return;
            if (!n) return void e();
            var i = c.getTransitionDurationFromElement(this._backdrop);
            r.default(this._backdrop)
              .one(c.TRANSITION_END, e)
              .emulateTransitionEnd(i);
          } else if (!this._isShown && this._backdrop) {
            r.default(this._backdrop).removeClass(_e);
            var o = function () {
              t._removeBackdrop(), e && e();
            };
            if (r.default(this._element).hasClass(be)) {
              var a = c.getTransitionDurationFromElement(this._backdrop);
              r.default(this._backdrop)
                .one(c.TRANSITION_END, o)
                .emulateTransitionEnd(a);
            } else o();
          } else e && e();
        }),
        (t._adjustDialog = function () {
          var e =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            e &&
            (this._element.style.paddingLeft = this._scrollbarWidth + 'px'),
            this._isBodyOverflowing &&
              !e &&
              (this._element.style.paddingRight = this._scrollbarWidth + 'px');
        }),
        (t._resetAdjustments = function () {
          (this._element.style.paddingLeft = ''),
            (this._element.style.paddingRight = '');
        }),
        (t._checkScrollbar = function () {
          var e = document.body.getBoundingClientRect();
          (this._isBodyOverflowing =
            Math.round(e.left + e.right) < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (t._setScrollbar = function () {
          var e = this;
          if (this._isBodyOverflowing) {
            var t = [].slice.call(document.querySelectorAll(xe)),
              n = [].slice.call(document.querySelectorAll('.sticky-top'));
            r.default(t).each(function (t, n) {
              var i = n.style.paddingRight,
                o = r.default(n).css('padding-right');
              r.default(n)
                .data('padding-right', i)
                .css('padding-right', parseFloat(o) + e._scrollbarWidth + 'px');
            }),
              r.default(n).each(function (t, n) {
                var i = n.style.marginRight,
                  o = r.default(n).css('margin-right');
                r.default(n)
                  .data('margin-right', i)
                  .css(
                    'margin-right',
                    parseFloat(o) - e._scrollbarWidth + 'px',
                  );
              });
            var i = document.body.style.paddingRight,
              o = r.default(document.body).css('padding-right');
            r.default(document.body)
              .data('padding-right', i)
              .css(
                'padding-right',
                parseFloat(o) + this._scrollbarWidth + 'px',
              );
          }
          r.default(document.body).addClass(ye);
        }),
        (t._resetScrollbar = function () {
          var e = [].slice.call(document.querySelectorAll(xe));
          r.default(e).each(function (e, t) {
            var n = r.default(t).data('padding-right');
            r.default(t).removeData('padding-right'),
              (t.style.paddingRight = n || '');
          });
          var t = [].slice.call(document.querySelectorAll('.sticky-top'));
          r.default(t).each(function (e, t) {
            var n = r.default(t).data('margin-right');
            void 0 !== n &&
              r.default(t).css('margin-right', n).removeData('margin-right');
          });
          var n = r.default(document.body).data('padding-right');
          r.default(document.body).removeData('padding-right'),
            (document.body.style.paddingRight = n || '');
        }),
        (t._getScrollbarWidth = function () {
          var e = document.createElement('div');
          (e.className = 'modal-scrollbar-measure'),
            document.body.appendChild(e);
          var t = e.getBoundingClientRect().width - e.clientWidth;
          return document.body.removeChild(e), t;
        }),
        (e._jQueryInterface = function (t, n) {
          return this.each(function () {
            var i = r.default(this).data(se),
              o = l(
                {},
                ue,
                r.default(this).data(),
                'object' == typeof t && t ? t : {},
              );
            if (
              (i || ((i = new e(this, o)), r.default(this).data(se, i)),
              'string' == typeof t)
            ) {
              if (void 0 === i[t])
                throw new TypeError('No method named "' + t + '"');
              i[t](n);
            } else o.show && i.show(n);
          });
        }),
        s(e, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.5.3';
            },
          },
          {
            key: 'Default',
            get: function () {
              return ue;
            },
          },
        ]),
        e
      );
    })();
  r
    .default(document)
    .on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
      var t,
        n = this,
        i = c.getSelectorFromElement(this);
      i && (t = document.querySelector(i));
      var o = r.default(t).data(se)
        ? 'toggle'
        : l({}, r.default(t).data(), r.default(this).data());
      ('A' !== this.tagName && 'AREA' !== this.tagName) || e.preventDefault();
      var a = r.default(t).one(de, function (e) {
        e.isDefaultPrevented() ||
          a.one(fe, function () {
            r.default(n).is(':visible') && n.focus();
          });
      });
      ke._jQueryInterface.call(r.default(t), o, this);
    }),
    (r.default.fn.modal = ke._jQueryInterface),
    (r.default.fn.modal.Constructor = ke),
    (r.default.fn.modal.noConflict = function () {
      return (r.default.fn.modal = le), ke._jQueryInterface;
    });
  var Te = [
      'background',
      'cite',
      'href',
      'itemtype',
      'longdesc',
      'poster',
      'src',
      'xlink:href',
    ],
    Ee = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
    Ce =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  function Se(e, t, n) {
    if (0 === e.length) return e;
    if (n && 'function' == typeof n) return n(e);
    for (
      var i = new window.DOMParser().parseFromString(e, 'text/html'),
        r = Object.keys(t),
        o = [].slice.call(i.body.querySelectorAll('*')),
        a = function (e, n) {
          var i = o[e],
            a = i.nodeName.toLowerCase();
          if (-1 === r.indexOf(i.nodeName.toLowerCase()))
            return i.parentNode.removeChild(i), 'continue';
          var s = [].slice.call(i.attributes),
            l = [].concat(t['*'] || [], t[a] || []);
          s.forEach(function (e) {
            (function (e, t) {
              var n = e.nodeName.toLowerCase();
              if (-1 !== t.indexOf(n))
                return (
                  -1 === Te.indexOf(n) ||
                  Boolean(e.nodeValue.match(Ee) || e.nodeValue.match(Ce))
                );
              for (
                var i = t.filter(function (e) {
                    return e instanceof RegExp;
                  }),
                  r = 0,
                  o = i.length;
                r < o;
                r++
              )
                if (n.match(i[r])) return !0;
              return !1;
            })(e, l) || i.removeAttribute(e.nodeName);
          });
        },
        s = 0,
        l = o.length;
      s < l;
      s++
    )
      a(s);
    return i.body.innerHTML;
  }
  var Ae = 'tooltip',
    Ne = 'bs.tooltip',
    De = r.default.fn.tooltip,
    je = new RegExp('(^|\\s)bs-tooltip\\S+', 'g'),
    Pe = ['sanitize', 'whiteList', 'sanitizeFn'],
    Ie = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string|function)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)',
      boundary: '(string|element)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      whiteList: 'object',
      popperConfig: '(null|object)',
    },
    Oe = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left',
    },
    Le = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: !1,
      selector: !1,
      placement: 'top',
      offset: 0,
      container: !1,
      fallbackPlacement: 'flip',
      boundary: 'scrollParent',
      sanitize: !0,
      sanitizeFn: null,
      whiteList: {
        '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
        a: ['target', 'href', 'title', 'rel'],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      popperConfig: null,
    },
    Fe = 'show',
    qe = 'out',
    $e = {
      HIDE: 'hide.bs.tooltip',
      HIDDEN: 'hidden.bs.tooltip',
      SHOW: 'show.bs.tooltip',
      SHOWN: 'shown.bs.tooltip',
      INSERTED: 'inserted.bs.tooltip',
      CLICK: 'click.bs.tooltip',
      FOCUSIN: 'focusin.bs.tooltip',
      FOCUSOUT: 'focusout.bs.tooltip',
      MOUSEENTER: 'mouseenter.bs.tooltip',
      MOUSELEAVE: 'mouseleave.bs.tooltip',
    },
    Re = 'fade',
    ze = 'show',
    He = 'hover',
    Me = 'focus',
    Be = (function () {
      function e(e, t) {
        if (void 0 === o.default)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)",
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ''),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = e),
          (this.config = this._getConfig(t)),
          (this.tip = null),
          this._setListeners();
      }
      var t = e.prototype;
      return (
        (t.enable = function () {
          this._isEnabled = !0;
        }),
        (t.disable = function () {
          this._isEnabled = !1;
        }),
        (t.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (t.toggle = function (e) {
          if (this._isEnabled)
            if (e) {
              var t = this.constructor.DATA_KEY,
                n = r.default(e.currentTarget).data(t);
              n ||
                ((n = new this.constructor(
                  e.currentTarget,
                  this._getDelegateConfig(),
                )),
                r.default(e.currentTarget).data(t, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger()
                  ? n._enter(null, n)
                  : n._leave(null, n);
            } else {
              if (r.default(this.getTipElement()).hasClass(ze))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (t.dispose = function () {
          clearTimeout(this._timeout),
            r.default.removeData(this.element, this.constructor.DATA_KEY),
            r.default(this.element).off(this.constructor.EVENT_KEY),
            r
              .default(this.element)
              .closest('.modal')
              .off('hide.bs.modal', this._hideModalHandler),
            this.tip && r.default(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (t.show = function () {
          var e = this;
          if ('none' === r.default(this.element).css('display'))
            throw new Error('Please use show on visible elements');
          var t = r.default.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            r.default(this.element).trigger(t);
            var n = c.findShadowRoot(this.element),
              i = r.default.contains(
                null !== n ? n : this.element.ownerDocument.documentElement,
                this.element,
              );
            if (t.isDefaultPrevented() || !i) return;
            var a = this.getTipElement(),
              s = c.getUID(this.constructor.NAME);
            a.setAttribute('id', s),
              this.element.setAttribute('aria-describedby', s),
              this.setContent(),
              this.config.animation && r.default(a).addClass(Re);
            var l =
                'function' == typeof this.config.placement
                  ? this.config.placement.call(this, a, this.element)
                  : this.config.placement,
              u = this._getAttachment(l);
            this.addAttachmentClass(u);
            var f = this._getContainer();
            r.default(a).data(this.constructor.DATA_KEY, this),
              r.default.contains(
                this.element.ownerDocument.documentElement,
                this.tip,
              ) || r.default(a).appendTo(f),
              r.default(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new o.default(
                this.element,
                a,
                this._getPopperConfig(u),
              )),
              r.default(a).addClass(ze),
              'ontouchstart' in document.documentElement &&
                r
                  .default(document.body)
                  .children()
                  .on('mouseover', null, r.default.noop);
            var d = function () {
              e.config.animation && e._fixTransition();
              var t = e._hoverState;
              (e._hoverState = null),
                r.default(e.element).trigger(e.constructor.Event.SHOWN),
                t === qe && e._leave(null, e);
            };
            if (r.default(this.tip).hasClass(Re)) {
              var h = c.getTransitionDurationFromElement(this.tip);
              r.default(this.tip)
                .one(c.TRANSITION_END, d)
                .emulateTransitionEnd(h);
            } else d();
          }
        }),
        (t.hide = function (e) {
          var t = this,
            n = this.getTipElement(),
            i = r.default.Event(this.constructor.Event.HIDE),
            o = function () {
              t._hoverState !== Fe &&
                n.parentNode &&
                n.parentNode.removeChild(n),
                t._cleanTipClass(),
                t.element.removeAttribute('aria-describedby'),
                r.default(t.element).trigger(t.constructor.Event.HIDDEN),
                null !== t._popper && t._popper.destroy(),
                e && e();
            };
          if ((r.default(this.element).trigger(i), !i.isDefaultPrevented())) {
            if (
              (r.default(n).removeClass(ze),
              'ontouchstart' in document.documentElement &&
                r
                  .default(document.body)
                  .children()
                  .off('mouseover', null, r.default.noop),
              (this._activeTrigger.click = !1),
              (this._activeTrigger.focus = !1),
              (this._activeTrigger.hover = !1),
              r.default(this.tip).hasClass(Re))
            ) {
              var a = c.getTransitionDurationFromElement(n);
              r.default(n).one(c.TRANSITION_END, o).emulateTransitionEnd(a);
            } else o();
            this._hoverState = '';
          }
        }),
        (t.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (t.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (t.addAttachmentClass = function (e) {
          r.default(this.getTipElement()).addClass('bs-tooltip-' + e);
        }),
        (t.getTipElement = function () {
          return (
            (this.tip = this.tip || r.default(this.config.template)[0]),
            this.tip
          );
        }),
        (t.setContent = function () {
          var e = this.getTipElement();
          this.setElementContent(
            r.default(e.querySelectorAll('.tooltip-inner')),
            this.getTitle(),
          ),
            r.default(e).removeClass('fade show');
        }),
        (t.setElementContent = function (e, t) {
          'object' != typeof t || (!t.nodeType && !t.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (t = Se(t, this.config.whiteList, this.config.sanitizeFn)),
                e.html(t))
              : e.text(t)
            : this.config.html
              ? r.default(t).parent().is(e) || e.empty().append(t)
              : e.text(r.default(t).text());
        }),
        (t.getTitle = function () {
          var e = this.element.getAttribute('data-original-title');
          return (
            e ||
              (e =
                'function' == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            e
          );
        }),
        (t._getPopperConfig = function (e) {
          var t = this;
          return l(
            {},
            {
              placement: e,
              modifiers: {
                offset: this._getOffset(),
                flip: { behavior: this.config.fallbackPlacement },
                arrow: { element: '.arrow' },
                preventOverflow: { boundariesElement: this.config.boundary },
              },
              onCreate: function (e) {
                e.originalPlacement !== e.placement &&
                  t._handlePopperPlacementChange(e);
              },
              onUpdate: function (e) {
                return t._handlePopperPlacementChange(e);
              },
            },
            this.config.popperConfig,
          );
        }),
        (t._getOffset = function () {
          var e = this,
            t = {};
          return (
            'function' == typeof this.config.offset
              ? (t.fn = function (t) {
                  return (
                    (t.offsets = l(
                      {},
                      t.offsets,
                      e.config.offset(t.offsets, e.element) || {},
                    )),
                    t
                  );
                })
              : (t.offset = this.config.offset),
            t
          );
        }),
        (t._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : c.isElement(this.config.container)
              ? r.default(this.config.container)
              : r.default(document).find(this.config.container);
        }),
        (t._getAttachment = function (e) {
          return Oe[e.toUpperCase()];
        }),
        (t._setListeners = function () {
          var e = this;
          this.config.trigger.split(' ').forEach(function (t) {
            if ('click' === t)
              r.default(e.element).on(
                e.constructor.Event.CLICK,
                e.config.selector,
                function (t) {
                  return e.toggle(t);
                },
              );
            else if ('manual' !== t) {
              var n =
                  t === He
                    ? e.constructor.Event.MOUSEENTER
                    : e.constructor.Event.FOCUSIN,
                i =
                  t === He
                    ? e.constructor.Event.MOUSELEAVE
                    : e.constructor.Event.FOCUSOUT;
              r.default(e.element)
                .on(n, e.config.selector, function (t) {
                  return e._enter(t);
                })
                .on(i, e.config.selector, function (t) {
                  return e._leave(t);
                });
            }
          }),
            (this._hideModalHandler = function () {
              e.element && e.hide();
            }),
            r
              .default(this.element)
              .closest('.modal')
              .on('hide.bs.modal', this._hideModalHandler),
            this.config.selector
              ? (this.config = l({}, this.config, {
                  trigger: 'manual',
                  selector: '',
                }))
              : this._fixTitle();
        }),
        (t._fixTitle = function () {
          var e = typeof this.element.getAttribute('data-original-title');
          (this.element.getAttribute('title') || 'string' !== e) &&
            (this.element.setAttribute(
              'data-original-title',
              this.element.getAttribute('title') || '',
            ),
            this.element.setAttribute('title', ''));
        }),
        (t._enter = function (e, t) {
          var n = this.constructor.DATA_KEY;
          (t = t || r.default(e.currentTarget).data(n)) ||
            ((t = new this.constructor(
              e.currentTarget,
              this._getDelegateConfig(),
            )),
            r.default(e.currentTarget).data(n, t)),
            e && (t._activeTrigger['focusin' === e.type ? Me : He] = !0),
            r.default(t.getTipElement()).hasClass(ze) || t._hoverState === Fe
              ? (t._hoverState = Fe)
              : (clearTimeout(t._timeout),
                (t._hoverState = Fe),
                t.config.delay && t.config.delay.show
                  ? (t._timeout = setTimeout(function () {
                      t._hoverState === Fe && t.show();
                    }, t.config.delay.show))
                  : t.show());
        }),
        (t._leave = function (e, t) {
          var n = this.constructor.DATA_KEY;
          (t = t || r.default(e.currentTarget).data(n)) ||
            ((t = new this.constructor(
              e.currentTarget,
              this._getDelegateConfig(),
            )),
            r.default(e.currentTarget).data(n, t)),
            e && (t._activeTrigger['focusout' === e.type ? Me : He] = !1),
            t._isWithActiveTrigger() ||
              (clearTimeout(t._timeout),
              (t._hoverState = qe),
              t.config.delay && t.config.delay.hide
                ? (t._timeout = setTimeout(function () {
                    t._hoverState === qe && t.hide();
                  }, t.config.delay.hide))
                : t.hide());
        }),
        (t._isWithActiveTrigger = function () {
          for (var e in this._activeTrigger)
            if (this._activeTrigger[e]) return !0;
          return !1;
        }),
        (t._getConfig = function (e) {
          var t = r.default(this.element).data();
          return (
            Object.keys(t).forEach(function (e) {
              -1 !== Pe.indexOf(e) && delete t[e];
            }),
            'number' ==
              typeof (e = l(
                {},
                this.constructor.Default,
                t,
                'object' == typeof e && e ? e : {},
              )).delay && (e.delay = { show: e.delay, hide: e.delay }),
            'number' == typeof e.title && (e.title = e.title.toString()),
            'number' == typeof e.content && (e.content = e.content.toString()),
            c.typeCheckConfig(Ae, e, this.constructor.DefaultType),
            e.sanitize &&
              (e.template = Se(e.template, e.whiteList, e.sanitizeFn)),
            e
          );
        }),
        (t._getDelegateConfig = function () {
          var e = {};
          if (this.config)
            for (var t in this.config)
              this.constructor.Default[t] !== this.config[t] &&
                (e[t] = this.config[t]);
          return e;
        }),
        (t._cleanTipClass = function () {
          var e = r.default(this.getTipElement()),
            t = e.attr('class').match(je);
          null !== t && t.length && e.removeClass(t.join(''));
        }),
        (t._handlePopperPlacementChange = function (e) {
          (this.tip = e.instance.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(e.placement));
        }),
        (t._fixTransition = function () {
          var e = this.getTipElement(),
            t = this.config.animation;
          null === e.getAttribute('x-placement') &&
            (r.default(e).removeClass(Re),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = t));
        }),
        (e._jQueryInterface = function (t) {
          return this.each(function () {
            var n = r.default(this),
              i = n.data(Ne),
              o = 'object' == typeof t && t;
            if (
              (i || !/dispose|hide/.test(t)) &&
              (i || ((i = new e(this, o)), n.data(Ne, i)), 'string' == typeof t)
            ) {
              if (void 0 === i[t])
                throw new TypeError('No method named "' + t + '"');
              i[t]();
            }
          });
        }),
        s(e, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.5.3';
            },
          },
          {
            key: 'Default',
            get: function () {
              return Le;
            },
          },
          {
            key: 'NAME',
            get: function () {
              return Ae;
            },
          },
          {
            key: 'DATA_KEY',
            get: function () {
              return Ne;
            },
          },
          {
            key: 'Event',
            get: function () {
              return $e;
            },
          },
          {
            key: 'EVENT_KEY',
            get: function () {
              return '.bs.tooltip';
            },
          },
          {
            key: 'DefaultType',
            get: function () {
              return Ie;
            },
          },
        ]),
        e
      );
    })();
  (r.default.fn.tooltip = Be._jQueryInterface),
    (r.default.fn.tooltip.Constructor = Be),
    (r.default.fn.tooltip.noConflict = function () {
      return (r.default.fn.tooltip = De), Be._jQueryInterface;
    });
  var We = 'bs.popover',
    Ue = r.default.fn.popover,
    Qe = new RegExp('(^|\\s)bs-popover\\S+', 'g'),
    Xe = l({}, Be.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    Ve = l({}, Be.DefaultType, { content: '(string|element|function)' }),
    Ze = {
      HIDE: 'hide.bs.popover',
      HIDDEN: 'hidden.bs.popover',
      SHOW: 'show.bs.popover',
      SHOWN: 'shown.bs.popover',
      INSERTED: 'inserted.bs.popover',
      CLICK: 'click.bs.popover',
      FOCUSIN: 'focusin.bs.popover',
      FOCUSOUT: 'focusout.bs.popover',
      MOUSEENTER: 'mouseenter.bs.popover',
      MOUSELEAVE: 'mouseleave.bs.popover',
    },
    Ye = (function (e) {
      var t, n;
      function i() {
        return e.apply(this, arguments) || this;
      }
      (n = e),
        ((t = i).prototype = Object.create(n.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = n);
      var o = i.prototype;
      return (
        (o.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (o.addAttachmentClass = function (e) {
          r.default(this.getTipElement()).addClass('bs-popover-' + e);
        }),
        (o.getTipElement = function () {
          return (
            (this.tip = this.tip || r.default(this.config.template)[0]),
            this.tip
          );
        }),
        (o.setContent = function () {
          var e = r.default(this.getTipElement());
          this.setElementContent(e.find('.popover-header'), this.getTitle());
          var t = this._getContent();
          'function' == typeof t && (t = t.call(this.element)),
            this.setElementContent(e.find('.popover-body'), t),
            e.removeClass('fade show');
        }),
        (o._getContent = function () {
          return (
            this.element.getAttribute('data-content') || this.config.content
          );
        }),
        (o._cleanTipClass = function () {
          var e = r.default(this.getTipElement()),
            t = e.attr('class').match(Qe);
          null !== t && t.length > 0 && e.removeClass(t.join(''));
        }),
        (i._jQueryInterface = function (e) {
          return this.each(function () {
            var t = r.default(this).data(We),
              n = 'object' == typeof e ? e : null;
            if (
              (t || !/dispose|hide/.test(e)) &&
              (t || ((t = new i(this, n)), r.default(this).data(We, t)),
              'string' == typeof e)
            ) {
              if (void 0 === t[e])
                throw new TypeError('No method named "' + e + '"');
              t[e]();
            }
          });
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.5.3';
            },
          },
          {
            key: 'Default',
            get: function () {
              return Xe;
            },
          },
          {
            key: 'NAME',
            get: function () {
              return 'popover';
            },
          },
          {
            key: 'DATA_KEY',
            get: function () {
              return We;
            },
          },
          {
            key: 'Event',
            get: function () {
              return Ze;
            },
          },
          {
            key: 'EVENT_KEY',
            get: function () {
              return '.bs.popover';
            },
          },
          {
            key: 'DefaultType',
            get: function () {
              return Ve;
            },
          },
        ]),
        i
      );
    })(Be);
  (r.default.fn.popover = Ye._jQueryInterface),
    (r.default.fn.popover.Constructor = Ye),
    (r.default.fn.popover.noConflict = function () {
      return (r.default.fn.popover = Ue), Ye._jQueryInterface;
    });
  var Ke = 'scrollspy',
    Ge = 'bs.scrollspy',
    Je = r.default.fn[Ke],
    et = { offset: 10, method: 'auto', target: '' },
    tt = { offset: 'number', method: 'string', target: '(string|element)' },
    nt = 'active',
    it = '.nav, .list-group',
    rt = 'position',
    ot = (function () {
      function e(e, t) {
        var n = this;
        (this._element = e),
          (this._scrollElement = 'BODY' === e.tagName ? window : e),
          (this._config = this._getConfig(t)),
          (this._selector =
            this._config.target +
            ' .nav-link,' +
            this._config.target +
            ' .list-group-item,' +
            this._config.target +
            ' .dropdown-item'),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          r
            .default(this._scrollElement)
            .on('scroll.bs.scrollspy', function (e) {
              return n._process(e);
            }),
          this.refresh(),
          this._process();
      }
      var t = e.prototype;
      return (
        (t.refresh = function () {
          var e = this,
            t =
              'auto' === this._config.method
                ? this._scrollElement === this._scrollElement.window
                  ? 'offset'
                  : rt
                : this._config.method,
            n = t === rt ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (e) {
                var i,
                  o = c.getSelectorFromElement(e);
                if ((o && (i = document.querySelector(o)), i)) {
                  var a = i.getBoundingClientRect();
                  if (a.width || a.height)
                    return [r.default(i)[t]().top + n, o];
                }
                return null;
              })
              .filter(function (e) {
                return e;
              })
              .sort(function (e, t) {
                return e[0] - t[0];
              })
              .forEach(function (t) {
                e._offsets.push(t[0]), e._targets.push(t[1]);
              });
        }),
        (t.dispose = function () {
          r.default.removeData(this._element, Ge),
            r.default(this._scrollElement).off('.bs.scrollspy'),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (t._getConfig = function (e) {
          if (
            'string' !=
              typeof (e = l({}, et, 'object' == typeof e && e ? e : {}))
                .target &&
            c.isElement(e.target)
          ) {
            var t = r.default(e.target).attr('id');
            t || ((t = c.getUID(Ke)), r.default(e.target).attr('id', t)),
              (e.target = '#' + t);
          }
          return c.typeCheckConfig(Ke, e, tt), e;
        }),
        (t._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (t._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight,
            )
          );
        }),
        (t._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (t._process = function () {
          var e = this._getScrollTop() + this._config.offset,
            t = this._getScrollHeight(),
            n = this._config.offset + t - this._getOffsetHeight();
          if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              e < this._offsets[0] &&
              this._offsets[0] > 0
            )
              return (this._activeTarget = null), void this._clear();
            for (var r = this._offsets.length; r--; )
              this._activeTarget !== this._targets[r] &&
                e >= this._offsets[r] &&
                (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) &&
                this._activate(this._targets[r]);
          }
        }),
        (t._activate = function (e) {
          (this._activeTarget = e), this._clear();
          var t = this._selector.split(',').map(function (t) {
              return (
                t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
              );
            }),
            n = r.default(
              [].slice.call(document.querySelectorAll(t.join(','))),
            );
          n.hasClass('dropdown-item')
            ? (n.closest('.dropdown').find('.dropdown-toggle').addClass(nt),
              n.addClass(nt))
            : (n.addClass(nt),
              n.parents(it).prev('.nav-link, .list-group-item').addClass(nt),
              n
                .parents(it)
                .prev('.nav-item')
                .children('.nav-link')
                .addClass(nt)),
            r
              .default(this._scrollElement)
              .trigger('activate.bs.scrollspy', { relatedTarget: e });
        }),
        (t._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (e) {
              return e.classList.contains(nt);
            })
            .forEach(function (e) {
              return e.classList.remove(nt);
            });
        }),
        (e._jQueryInterface = function (t) {
          return this.each(function () {
            var n = r.default(this).data(Ge);
            if (
              (n ||
                ((n = new e(this, 'object' == typeof t && t)),
                r.default(this).data(Ge, n)),
              'string' == typeof t)
            ) {
              if (void 0 === n[t])
                throw new TypeError('No method named "' + t + '"');
              n[t]();
            }
          });
        }),
        s(e, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.5.3';
            },
          },
          {
            key: 'Default',
            get: function () {
              return et;
            },
          },
        ]),
        e
      );
    })();
  r.default(window).on('load.bs.scrollspy.data-api', function () {
    for (
      var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
        t = e.length;
      t--;

    ) {
      var n = r.default(e[t]);
      ot._jQueryInterface.call(n, n.data());
    }
  }),
    (r.default.fn[Ke] = ot._jQueryInterface),
    (r.default.fn[Ke].Constructor = ot),
    (r.default.fn[Ke].noConflict = function () {
      return (r.default.fn[Ke] = Je), ot._jQueryInterface;
    });
  var at = 'bs.tab',
    st = r.default.fn.tab,
    lt = 'active',
    ut = 'fade',
    ct = 'show',
    ft = '.active',
    dt = '> li > .active',
    ht = (function () {
      function e(e) {
        this._element = e;
      }
      var t = e.prototype;
      return (
        (t.show = function () {
          var e = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                r.default(this._element).hasClass(lt)) ||
              r.default(this._element).hasClass('disabled')
            )
          ) {
            var t,
              n,
              i = r.default(this._element).closest('.nav, .list-group')[0],
              o = c.getSelectorFromElement(this._element);
            if (i) {
              var a = 'UL' === i.nodeName || 'OL' === i.nodeName ? dt : ft;
              n = (n = r.default.makeArray(r.default(i).find(a)))[n.length - 1];
            }
            var s = r.default.Event('hide.bs.tab', {
                relatedTarget: this._element,
              }),
              l = r.default.Event('show.bs.tab', { relatedTarget: n });
            if (
              (n && r.default(n).trigger(s),
              r.default(this._element).trigger(l),
              !l.isDefaultPrevented() && !s.isDefaultPrevented())
            ) {
              o && (t = document.querySelector(o)),
                this._activate(this._element, i);
              var u = function () {
                var t = r.default.Event('hidden.bs.tab', {
                    relatedTarget: e._element,
                  }),
                  i = r.default.Event('shown.bs.tab', { relatedTarget: n });
                r.default(n).trigger(t), r.default(e._element).trigger(i);
              };
              t ? this._activate(t, t.parentNode, u) : u();
            }
          }
        }),
        (t.dispose = function () {
          r.default.removeData(this._element, at), (this._element = null);
        }),
        (t._activate = function (e, t, n) {
          var i = this,
            o = (
              !t || ('UL' !== t.nodeName && 'OL' !== t.nodeName)
                ? r.default(t).children(ft)
                : r.default(t).find(dt)
            )[0],
            a = n && o && r.default(o).hasClass(ut),
            s = function () {
              return i._transitionComplete(e, o, n);
            };
          if (o && a) {
            var l = c.getTransitionDurationFromElement(o);
            r.default(o)
              .removeClass(ct)
              .one(c.TRANSITION_END, s)
              .emulateTransitionEnd(l);
          } else s();
        }),
        (t._transitionComplete = function (e, t, n) {
          if (t) {
            r.default(t).removeClass(lt);
            var i = r.default(t.parentNode).find('> .dropdown-menu .active')[0];
            i && r.default(i).removeClass(lt),
              'tab' === t.getAttribute('role') &&
                t.setAttribute('aria-selected', !1);
          }
          if (
            (r.default(e).addClass(lt),
            'tab' === e.getAttribute('role') &&
              e.setAttribute('aria-selected', !0),
            c.reflow(e),
            e.classList.contains(ut) && e.classList.add(ct),
            e.parentNode && r.default(e.parentNode).hasClass('dropdown-menu'))
          ) {
            var o = r.default(e).closest('.dropdown')[0];
            if (o) {
              var a = [].slice.call(o.querySelectorAll('.dropdown-toggle'));
              r.default(a).addClass(lt);
            }
            e.setAttribute('aria-expanded', !0);
          }
          n && n();
        }),
        (e._jQueryInterface = function (t) {
          return this.each(function () {
            var n = r.default(this),
              i = n.data(at);
            if (
              (i || ((i = new e(this)), n.data(at, i)), 'string' == typeof t)
            ) {
              if (void 0 === i[t])
                throw new TypeError('No method named "' + t + '"');
              i[t]();
            }
          });
        }),
        s(e, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.5.3';
            },
          },
        ]),
        e
      );
    })();
  r
    .default(document)
    .on(
      'click.bs.tab.data-api',
      '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      function (e) {
        e.preventDefault(), ht._jQueryInterface.call(r.default(this), 'show');
      },
    ),
    (r.default.fn.tab = ht._jQueryInterface),
    (r.default.fn.tab.Constructor = ht),
    (r.default.fn.tab.noConflict = function () {
      return (r.default.fn.tab = st), ht._jQueryInterface;
    });
  var pt = 'bs.toast',
    gt = r.default.fn.toast,
    mt = 'click.dismiss.bs.toast',
    vt = 'hide',
    yt = 'show',
    bt = 'showing',
    _t = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
    wt = { animation: !0, autohide: !0, delay: 500 },
    xt = (function () {
      function e(e, t) {
        (this._element = e),
          (this._config = this._getConfig(t)),
          (this._timeout = null),
          this._setListeners();
      }
      var t = e.prototype;
      return (
        (t.show = function () {
          var e = this,
            t = r.default.Event('show.bs.toast');
          if ((r.default(this._element).trigger(t), !t.isDefaultPrevented())) {
            this._clearTimeout(),
              this._config.animation && this._element.classList.add('fade');
            var n = function () {
              e._element.classList.remove(bt),
                e._element.classList.add(yt),
                r.default(e._element).trigger('shown.bs.toast'),
                e._config.autohide &&
                  (e._timeout = setTimeout(function () {
                    e.hide();
                  }, e._config.delay));
            };
            if (
              (this._element.classList.remove(vt),
              c.reflow(this._element),
              this._element.classList.add(bt),
              this._config.animation)
            ) {
              var i = c.getTransitionDurationFromElement(this._element);
              r.default(this._element)
                .one(c.TRANSITION_END, n)
                .emulateTransitionEnd(i);
            } else n();
          }
        }),
        (t.hide = function () {
          if (this._element.classList.contains(yt)) {
            var e = r.default.Event('hide.bs.toast');
            r.default(this._element).trigger(e),
              e.isDefaultPrevented() || this._close();
          }
        }),
        (t.dispose = function () {
          this._clearTimeout(),
            this._element.classList.contains(yt) &&
              this._element.classList.remove(yt),
            r.default(this._element).off(mt),
            r.default.removeData(this._element, pt),
            (this._element = null),
            (this._config = null);
        }),
        (t._getConfig = function (e) {
          return (
            (e = l(
              {},
              wt,
              r.default(this._element).data(),
              'object' == typeof e && e ? e : {},
            )),
            c.typeCheckConfig('toast', e, this.constructor.DefaultType),
            e
          );
        }),
        (t._setListeners = function () {
          var e = this;
          r.default(this._element).on(
            mt,
            '[data-dismiss="toast"]',
            function () {
              return e.hide();
            },
          );
        }),
        (t._close = function () {
          var e = this,
            t = function () {
              e._element.classList.add(vt),
                r.default(e._element).trigger('hidden.bs.toast');
            };
          if ((this._element.classList.remove(yt), this._config.animation)) {
            var n = c.getTransitionDurationFromElement(this._element);
            r.default(this._element)
              .one(c.TRANSITION_END, t)
              .emulateTransitionEnd(n);
          } else t();
        }),
        (t._clearTimeout = function () {
          clearTimeout(this._timeout), (this._timeout = null);
        }),
        (e._jQueryInterface = function (t) {
          return this.each(function () {
            var n = r.default(this),
              i = n.data(pt);
            if (
              (i ||
                ((i = new e(this, 'object' == typeof t && t)), n.data(pt, i)),
              'string' == typeof t)
            ) {
              if (void 0 === i[t])
                throw new TypeError('No method named "' + t + '"');
              i[t](this);
            }
          });
        }),
        s(e, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.5.3';
            },
          },
          {
            key: 'DefaultType',
            get: function () {
              return _t;
            },
          },
          {
            key: 'Default',
            get: function () {
              return wt;
            },
          },
        ]),
        e
      );
    })();
  (r.default.fn.toast = xt._jQueryInterface),
    (r.default.fn.toast.Constructor = xt),
    (r.default.fn.toast.noConflict = function () {
      return (r.default.fn.toast = gt), xt._jQueryInterface;
    }),
    (e.Alert = h),
    (e.Button = _),
    (e.Carousel = P),
    (e.Collapse = W),
    (e.Dropdown = ae),
    (e.Modal = ke),
    (e.Popover = Ye),
    (e.Scrollspy = ot),
    (e.Tab = ht),
    (e.Toast = xt),
    (e.Tooltip = Be),
    (e.Util = c),
    Object.defineProperty(e, '__esModule', { value: !0 });
}),
  (function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = t())
      : 'function' == typeof define && define.amd
        ? define(t)
        : ((e =
            'undefined' != typeof globalThis ? globalThis : e || self).marked =
            t());
  })(this, function () {
    'use strict';
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function t(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    function n(e, n) {
      var i;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (
          Array.isArray(e) ||
          (i = (function (e, n) {
            if (e) {
              if ('string' == typeof e) return t(e, n);
              var i = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === i && e.constructor && (i = e.constructor.name),
                'Map' === i || 'Set' === i
                  ? Array.from(e)
                  : 'Arguments' === i ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                    ? t(e, n)
                    : void 0
              );
            }
          })(e)) ||
          (n && e && 'number' == typeof e.length)
        ) {
          i && (e = i);
          var r = 0;
          return function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          };
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      return (i = e[Symbol.iterator]()).next.bind(i);
    }
    var i = (function (e, t) {
        return (
          (function (e) {
            e.exports = {
              defaults: {
                baseUrl: null,
                breaks: !1,
                gfm: !0,
                headerIds: !0,
                headerPrefix: '',
                highlight: null,
                langPrefix: 'language-',
                mangle: !0,
                pedantic: !1,
                renderer: null,
                sanitize: !1,
                sanitizer: null,
                silent: !1,
                smartLists: !1,
                smartypants: !1,
                tokenizer: null,
                walkTokens: null,
                xhtml: !1,
              },
              getDefaults: function () {
                return {
                  baseUrl: null,
                  breaks: !1,
                  gfm: !0,
                  headerIds: !0,
                  headerPrefix: '',
                  highlight: null,
                  langPrefix: 'language-',
                  mangle: !0,
                  pedantic: !1,
                  renderer: null,
                  sanitize: !1,
                  sanitizer: null,
                  silent: !1,
                  smartLists: !1,
                  smartypants: !1,
                  tokenizer: null,
                  walkTokens: null,
                  xhtml: !1,
                };
              },
              changeDefaults: function (t) {
                e.exports.defaults = t;
              },
            };
          })((t = { exports: {} })),
          t.exports
        );
      })(),
      r = /[&<>"']/,
      o = /[&<>"']/g,
      a = /[<>"']|&(?!#?\w+;)/,
      s = /[<>"']|&(?!#?\w+;)/g,
      l = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      },
      u = function (e) {
        return l[e];
      },
      c = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
    function f(e) {
      return e.replace(c, function (e, t) {
        return 'colon' === (t = t.toLowerCase())
          ? ':'
          : '#' === t.charAt(0)
            ? 'x' === t.charAt(1)
              ? String.fromCharCode(parseInt(t.substring(2), 16))
              : String.fromCharCode(+t.substring(1))
            : '';
      });
    }
    var d = /(^|[^\[])\^/g,
      h = /[^\w:]/g,
      p = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i,
      g = {},
      m = /^[^:]+:\/*[^/]*$/,
      v = /^([^:]+:)[\s\S]*$/,
      y = /^([^:]+:\/*[^/]*)[\s\S]*$/;
    function b(e, t, n) {
      var i = e.length;
      if (0 === i) return '';
      for (var r = 0; r < i; ) {
        var o = e.charAt(i - r - 1);
        if (o !== t || n) {
          if (o === t || !n) break;
          r++;
        } else r++;
      }
      return e.substr(0, i - r);
    }
    var _ = function (e, t) {
        if (t) {
          if (r.test(e)) return e.replace(o, u);
        } else if (a.test(e)) return e.replace(s, u);
        return e;
      },
      w = f,
      x = function (e) {
        for (var t, n, i = 1; i < arguments.length; i++)
          for (n in (t = arguments[i]))
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
      },
      k = i.defaults,
      T = b,
      E = function (e, t) {
        var n = e
            .replace(/\|/g, function (e, t, n) {
              for (var i = !1, r = t; --r >= 0 && '\\' === n[r]; ) i = !i;
              return i ? '|' : ' |';
            })
            .split(/ \|/),
          i = 0;
        if (n.length > t) n.splice(t);
        else for (; n.length < t; ) n.push('');
        for (; i < n.length; i++) n[i] = n[i].trim().replace(/\\\|/g, '|');
        return n;
      },
      C = _;
    function S(e, t, n) {
      var i = t.href,
        r = t.title ? C(t.title) : null,
        o = e[1].replace(/\\([\[\]])/g, '$1');
      return '!' !== e[0].charAt(0)
        ? { type: 'link', raw: n, href: i, title: r, text: o }
        : { type: 'image', raw: n, href: i, title: r, text: C(o) };
    }
    var A = (function () {
        function e(e) {
          this.options = e || k;
        }
        var t = e.prototype;
        return (
          (t.space = function (e) {
            var t = this.rules.block.newline.exec(e);
            if (t)
              return t[0].length > 1
                ? { type: 'space', raw: t[0] }
                : { raw: '\n' };
          }),
          (t.code = function (e, t) {
            var n = this.rules.block.code.exec(e);
            if (n) {
              var i = t[t.length - 1];
              if (i && 'paragraph' === i.type)
                return { raw: n[0], text: n[0].trimRight() };
              var r = n[0].replace(/^ {4}/gm, '');
              return {
                type: 'code',
                raw: n[0],
                codeBlockStyle: 'indented',
                text: this.options.pedantic ? r : T(r, '\n'),
              };
            }
          }),
          (t.fences = function (e) {
            var t = this.rules.block.fences.exec(e);
            if (t) {
              var n = t[0],
                i = (function (e, t) {
                  var n = e.match(/^(\s+)(?:```)/);
                  if (null === n) return t;
                  var i = n[1];
                  return t
                    .split('\n')
                    .map(function (e) {
                      var t = e.match(/^\s+/);
                      return null === t
                        ? e
                        : t[0].length >= i.length
                          ? e.slice(i.length)
                          : e;
                    })
                    .join('\n');
                })(n, t[3] || '');
              return {
                type: 'code',
                raw: n,
                lang: t[2] ? t[2].trim() : t[2],
                text: i,
              };
            }
          }),
          (t.heading = function (e) {
            var t = this.rules.block.heading.exec(e);
            if (t)
              return {
                type: 'heading',
                raw: t[0],
                depth: t[1].length,
                text: t[2],
              };
          }),
          (t.nptable = function (e) {
            var t = this.rules.block.nptable.exec(e);
            if (t) {
              var n = {
                type: 'table',
                header: E(t[1].replace(/^ *| *\| *$/g, '')),
                align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                cells: t[3] ? t[3].replace(/\n$/, '').split('\n') : [],
                raw: t[0],
              };
              if (n.header.length === n.align.length) {
                var i,
                  r = n.align.length;
                for (i = 0; i < r; i++)
                  n.align[i] = /^ *-+: *$/.test(n.align[i])
                    ? 'right'
                    : /^ *:-+: *$/.test(n.align[i])
                      ? 'center'
                      : /^ *:-+ *$/.test(n.align[i])
                        ? 'left'
                        : null;
                for (r = n.cells.length, i = 0; i < r; i++)
                  n.cells[i] = E(n.cells[i], n.header.length);
                return n;
              }
            }
          }),
          (t.hr = function (e) {
            var t = this.rules.block.hr.exec(e);
            if (t) return { type: 'hr', raw: t[0] };
          }),
          (t.blockquote = function (e) {
            var t = this.rules.block.blockquote.exec(e);
            if (t) {
              var n = t[0].replace(/^ *> ?/gm, '');
              return { type: 'blockquote', raw: t[0], text: n };
            }
          }),
          (t.list = function (e) {
            var t = this.rules.block.list.exec(e);
            if (t) {
              var n,
                i,
                r,
                o,
                a,
                s,
                l,
                u,
                c = t[0],
                f = t[2],
                d = f.length > 1,
                h = {
                  type: 'list',
                  raw: c,
                  ordered: d,
                  start: d ? +f.slice(0, -1) : '',
                  loose: !1,
                  items: [],
                },
                p = t[0].match(this.rules.block.item),
                g = !1,
                m = p.length;
              r = this.rules.block.listItemStart.exec(p[0]);
              for (var v = 0; v < m; v++) {
                if (((c = n = p[v]), v !== m - 1)) {
                  if (
                    (o = this.rules.block.listItemStart.exec(p[v + 1]))[1]
                      .length > r[0].length ||
                    o[1].length > 3
                  ) {
                    p.splice(v, 2, p[v] + '\n' + p[v + 1]), v--, m--;
                    continue;
                  }
                  (!this.options.pedantic || this.options.smartLists
                    ? o[2][o[2].length - 1] !== f[f.length - 1]
                    : d === (1 === o[2].length)) &&
                    ((a = p.slice(v + 1).join('\n')),
                    (h.raw = h.raw.substring(0, h.raw.length - a.length)),
                    (v = m - 1)),
                    (r = o);
                }
                (i = n.length),
                  ~(n = n.replace(/^ *([*+-]|\d+[.)]) ?/, '')).indexOf('\n ') &&
                    ((i -= n.length),
                    (n = n.replace(
                      this.options.pedantic
                        ? /^ {1,4}/gm
                        : new RegExp('^ {1,' + i + '}', 'gm'),
                      '',
                    ))),
                  (s = g || /\n\n(?!\s*$)/.test(n)),
                  v !== m - 1 &&
                    ((g = '\n' === n.charAt(n.length - 1)), s || (s = g)),
                  s && (h.loose = !0),
                  (u = void 0),
                  (l = /^\[[ xX]\] /.test(n)) &&
                    ((u = ' ' !== n[1]), (n = n.replace(/^\[[ xX]\] +/, ''))),
                  h.items.push({
                    type: 'list_item',
                    raw: c,
                    task: l,
                    checked: u,
                    loose: s,
                    text: n,
                  });
              }
              return h;
            }
          }),
          (t.html = function (e) {
            var t = this.rules.block.html.exec(e);
            if (t)
              return {
                type: this.options.sanitize ? 'paragraph' : 'html',
                raw: t[0],
                pre:
                  !this.options.sanitizer &&
                  ('pre' === t[1] || 'script' === t[1] || 'style' === t[1]),
                text: this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(t[0])
                    : C(t[0])
                  : t[0],
              };
          }),
          (t.def = function (e) {
            var t = this.rules.block.def.exec(e);
            if (t)
              return (
                t[3] && (t[3] = t[3].substring(1, t[3].length - 1)),
                {
                  tag: t[1].toLowerCase().replace(/\s+/g, ' '),
                  raw: t[0],
                  href: t[2],
                  title: t[3],
                }
              );
          }),
          (t.table = function (e) {
            var t = this.rules.block.table.exec(e);
            if (t) {
              var n = {
                type: 'table',
                header: E(t[1].replace(/^ *| *\| *$/g, '')),
                align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                cells: t[3] ? t[3].replace(/\n$/, '').split('\n') : [],
              };
              if (n.header.length === n.align.length) {
                n.raw = t[0];
                var i,
                  r = n.align.length;
                for (i = 0; i < r; i++)
                  n.align[i] = /^ *-+: *$/.test(n.align[i])
                    ? 'right'
                    : /^ *:-+: *$/.test(n.align[i])
                      ? 'center'
                      : /^ *:-+ *$/.test(n.align[i])
                        ? 'left'
                        : null;
                for (r = n.cells.length, i = 0; i < r; i++)
                  n.cells[i] = E(
                    n.cells[i].replace(/^ *\| *| *\| *$/g, ''),
                    n.header.length,
                  );
                return n;
              }
            }
          }),
          (t.lheading = function (e) {
            var t = this.rules.block.lheading.exec(e);
            if (t)
              return {
                type: 'heading',
                raw: t[0],
                depth: '=' === t[2].charAt(0) ? 1 : 2,
                text: t[1],
              };
          }),
          (t.paragraph = function (e) {
            var t = this.rules.block.paragraph.exec(e);
            if (t)
              return {
                type: 'paragraph',
                raw: t[0],
                text:
                  '\n' === t[1].charAt(t[1].length - 1)
                    ? t[1].slice(0, -1)
                    : t[1],
              };
          }),
          (t.text = function (e, t) {
            var n = this.rules.block.text.exec(e);
            if (n) {
              var i = t[t.length - 1];
              return i && 'text' === i.type
                ? { raw: n[0], text: n[0] }
                : { type: 'text', raw: n[0], text: n[0] };
            }
          }),
          (t.escape = function (e) {
            var t = this.rules.inline.escape.exec(e);
            if (t) return { type: 'escape', raw: t[0], text: C(t[1]) };
          }),
          (t.tag = function (e, t, n) {
            var i = this.rules.inline.tag.exec(e);
            if (i)
              return (
                !t && /^<a /i.test(i[0])
                  ? (t = !0)
                  : t && /^<\/a>/i.test(i[0]) && (t = !1),
                !n && /^<(pre|code|kbd|script)(\s|>)/i.test(i[0])
                  ? (n = !0)
                  : n &&
                    /^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0]) &&
                    (n = !1),
                {
                  type: this.options.sanitize ? 'text' : 'html',
                  raw: i[0],
                  inLink: t,
                  inRawBlock: n,
                  text: this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(i[0])
                      : C(i[0])
                    : i[0],
                }
              );
          }),
          (t.link = function (e) {
            var t = this.rules.inline.link.exec(e);
            if (t) {
              var n = (function (e, t) {
                if (-1 === e.indexOf(t[1])) return -1;
                for (var n = e.length, i = 0, r = 0; r < n; r++)
                  if ('\\' === e[r]) r++;
                  else if (e[r] === t[0]) i++;
                  else if (e[r] === t[1] && --i < 0) return r;
                return -1;
              })(t[2], '()');
              if (n > -1) {
                var i = (0 === t[0].indexOf('!') ? 5 : 4) + t[1].length + n;
                (t[2] = t[2].substring(0, n)),
                  (t[0] = t[0].substring(0, i).trim()),
                  (t[3] = '');
              }
              var r = t[2],
                o = '';
              if (this.options.pedantic) {
                var a = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);
                a ? ((r = a[1]), (o = a[3])) : (o = '');
              } else o = t[3] ? t[3].slice(1, -1) : '';
              return S(
                t,
                {
                  href: (r = r.trim().replace(/^<([\s\S]*)>$/, '$1'))
                    ? r.replace(this.rules.inline._escapes, '$1')
                    : r,
                  title: o ? o.replace(this.rules.inline._escapes, '$1') : o,
                },
                t[0],
              );
            }
          }),
          (t.reflink = function (e, t) {
            var n;
            if (
              (n = this.rules.inline.reflink.exec(e)) ||
              (n = this.rules.inline.nolink.exec(e))
            ) {
              var i = (n[2] || n[1]).replace(/\s+/g, ' ');
              if (!(i = t[i.toLowerCase()]) || !i.href) {
                var r = n[0].charAt(0);
                return { type: 'text', raw: r, text: r };
              }
              return S(n, i, n[0]);
            }
          }),
          (t.strong = function (e, t, n) {
            void 0 === n && (n = '');
            var i = this.rules.inline.strong.start.exec(e);
            if (
              i &&
              (!i[1] ||
                (i[1] && ('' === n || this.rules.inline.punctuation.exec(n))))
            ) {
              t = t.slice(-1 * e.length);
              var r,
                o =
                  '**' === i[0]
                    ? this.rules.inline.strong.endAst
                    : this.rules.inline.strong.endUnd;
              for (o.lastIndex = 0; null != (i = o.exec(t)); )
                if (
                  (r = this.rules.inline.strong.middle.exec(
                    t.slice(0, i.index + 3),
                  ))
                )
                  return {
                    type: 'strong',
                    raw: e.slice(0, r[0].length),
                    text: e.slice(2, r[0].length - 2),
                  };
            }
          }),
          (t.em = function (e, t, n) {
            void 0 === n && (n = '');
            var i = this.rules.inline.em.start.exec(e);
            if (
              i &&
              (!i[1] ||
                (i[1] && ('' === n || this.rules.inline.punctuation.exec(n))))
            ) {
              t = t.slice(-1 * e.length);
              var r,
                o =
                  '*' === i[0]
                    ? this.rules.inline.em.endAst
                    : this.rules.inline.em.endUnd;
              for (o.lastIndex = 0; null != (i = o.exec(t)); )
                if (
                  (r = this.rules.inline.em.middle.exec(
                    t.slice(0, i.index + 2),
                  ))
                )
                  return {
                    type: 'em',
                    raw: e.slice(0, r[0].length),
                    text: e.slice(1, r[0].length - 1),
                  };
            }
          }),
          (t.codespan = function (e) {
            var t = this.rules.inline.code.exec(e);
            if (t) {
              var n = t[2].replace(/\n/g, ' '),
                i = /[^ ]/.test(n),
                r = n.startsWith(' ') && n.endsWith(' ');
              return (
                i && r && (n = n.substring(1, n.length - 1)),
                (n = C(n, !0)),
                { type: 'codespan', raw: t[0], text: n }
              );
            }
          }),
          (t.br = function (e) {
            var t = this.rules.inline.br.exec(e);
            if (t) return { type: 'br', raw: t[0] };
          }),
          (t.del = function (e) {
            var t = this.rules.inline.del.exec(e);
            if (t) return { type: 'del', raw: t[0], text: t[2] };
          }),
          (t.autolink = function (e, t) {
            var n,
              i,
              r = this.rules.inline.autolink.exec(e);
            if (r)
              return (
                (i =
                  '@' === r[2]
                    ? 'mailto:' + (n = C(this.options.mangle ? t(r[1]) : r[1]))
                    : (n = C(r[1]))),
                {
                  type: 'link',
                  raw: r[0],
                  text: n,
                  href: i,
                  tokens: [{ type: 'text', raw: n, text: n }],
                }
              );
          }),
          (t.url = function (e, t) {
            var n;
            if ((n = this.rules.inline.url.exec(e))) {
              var i, r;
              if ('@' === n[2])
                r = 'mailto:' + (i = C(this.options.mangle ? t(n[0]) : n[0]));
              else {
                var o;
                do {
                  (o = n[0]),
                    (n[0] = this.rules.inline._backpedal.exec(n[0])[0]);
                } while (o !== n[0]);
                (i = C(n[0])), (r = 'www.' === n[1] ? 'http://' + i : i);
              }
              return {
                type: 'link',
                raw: n[0],
                text: i,
                href: r,
                tokens: [{ type: 'text', raw: i, text: i }],
              };
            }
          }),
          (t.inlineText = function (e, t, n) {
            var i,
              r = this.rules.inline.text.exec(e);
            if (r)
              return (
                (i = t
                  ? this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(r[0])
                      : C(r[0])
                    : r[0]
                  : C(this.options.smartypants ? n(r[0]) : r[0])),
                { type: 'text', raw: r[0], text: i }
              );
          }),
          e
        );
      })(),
      N = { exec: function () {} },
      D = function (e, t) {
        (e = e.source || e), (t = t || '');
        var n = {
          replace: function (t, i) {
            return (
              (i = (i = i.source || i).replace(d, '$1')),
              (e = e.replace(t, i)),
              n
            );
          },
          getRegex: function () {
            return new RegExp(e, t);
          },
        };
        return n;
      },
      j = x,
      P = {
        newline: /^\n+/,
        code: /^( {4}[^\n]+\n*)+/,
        fences:
          /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
        hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
        heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
        list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
        html: '^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))',
        def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
        nptable: N,
        table: N,
        lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
        _paragraph:
          /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
        text: /^[^\n]+/,
        _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
        _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
      };
    (P.def = D(P.def)
      .replace('label', P._label)
      .replace('title', P._title)
      .getRegex()),
      (P.bullet = /(?:[*+-]|\d{1,9}[.)])/),
      (P.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/),
      (P.item = D(P.item, 'gm').replace(/bull/g, P.bullet).getRegex()),
      (P.listItemStart = D(/^( *)(bull)/)
        .replace('bull', P.bullet)
        .getRegex()),
      (P.list = D(P.list)
        .replace(/bull/g, P.bullet)
        .replace(
          'hr',
          '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))',
        )
        .replace('def', '\\n+(?=' + P.def.source + ')')
        .getRegex()),
      (P._tag =
        'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'),
      (P._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
      (P.html = D(P.html, 'i')
        .replace('comment', P._comment)
        .replace('tag', P._tag)
        .replace(
          'attribute',
          / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/,
        )
        .getRegex()),
      (P.paragraph = D(P._paragraph)
        .replace('hr', P.hr)
        .replace('heading', ' {0,3}#{1,6} ')
        .replace('|lheading', '')
        .replace('blockquote', ' {0,3}>')
        .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
        .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
        .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
        .replace('tag', P._tag)
        .getRegex()),
      (P.blockquote = D(P.blockquote)
        .replace('paragraph', P.paragraph)
        .getRegex()),
      (P.normal = j({}, P)),
      (P.gfm = j({}, P.normal, {
        nptable:
          '^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
        table:
          '^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
      })),
      (P.gfm.nptable = D(P.gfm.nptable)
        .replace('hr', P.hr)
        .replace('heading', ' {0,3}#{1,6} ')
        .replace('blockquote', ' {0,3}>')
        .replace('code', ' {4}[^\\n]')
        .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
        .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
        .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
        .replace('tag', P._tag)
        .getRegex()),
      (P.gfm.table = D(P.gfm.table)
        .replace('hr', P.hr)
        .replace('heading', ' {0,3}#{1,6} ')
        .replace('blockquote', ' {0,3}>')
        .replace('code', ' {4}[^\\n]')
        .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
        .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
        .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
        .replace('tag', P._tag)
        .getRegex()),
      (P.pedantic = j({}, P.normal, {
        html: D(
          '^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))',
        )
          .replace('comment', P._comment)
          .replace(
            /tag/g,
            '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b',
          )
          .getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
        fences: N,
        paragraph: D(P.normal._paragraph)
          .replace('hr', P.hr)
          .replace('heading', ' *#{1,6} *[^\n]')
          .replace('lheading', P.lheading)
          .replace('blockquote', ' {0,3}>')
          .replace('|fences', '')
          .replace('|list', '')
          .replace('|html', '')
          .getRegex(),
      }));
    var I = {
      escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
      autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
      url: N,
      tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
      link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
      reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
      nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
      reflinkSearch: 'reflink|nolink(?!\\()',
      strong: {
        start: /^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,
        middle:
          /^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,
        endAst:
          /[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,
        endUnd: /[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/,
      },
      em: {
        start: /^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,
        middle:
          /^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,
        endAst:
          /[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,
        endUnd: /[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/,
      },
      code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
      br: /^( {2,}|\\)\n(?!\s*$)/,
      del: N,
      text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,
      punctuation: /^([\s*punctuation])/,
      _punctuation: '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~',
    };
    (I.punctuation = D(I.punctuation)
      .replace(/punctuation/g, I._punctuation)
      .getRegex()),
      (I._blockSkip = '\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>'),
      (I._overlapSkip = '__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*'),
      (I._comment = D(P._comment).replace('(?:--\x3e|$)', '--\x3e').getRegex()),
      (I.em.start = D(I.em.start)
        .replace(/punctuation/g, I._punctuation)
        .getRegex()),
      (I.em.middle = D(I.em.middle)
        .replace(/punctuation/g, I._punctuation)
        .replace(/overlapSkip/g, I._overlapSkip)
        .getRegex()),
      (I.em.endAst = D(I.em.endAst, 'g')
        .replace(/punctuation/g, I._punctuation)
        .getRegex()),
      (I.em.endUnd = D(I.em.endUnd, 'g')
        .replace(/punctuation/g, I._punctuation)
        .getRegex()),
      (I.strong.start = D(I.strong.start)
        .replace(/punctuation/g, I._punctuation)
        .getRegex()),
      (I.strong.middle = D(I.strong.middle)
        .replace(/punctuation/g, I._punctuation)
        .replace(/overlapSkip/g, I._overlapSkip)
        .getRegex()),
      (I.strong.endAst = D(I.strong.endAst, 'g')
        .replace(/punctuation/g, I._punctuation)
        .getRegex()),
      (I.strong.endUnd = D(I.strong.endUnd, 'g')
        .replace(/punctuation/g, I._punctuation)
        .getRegex()),
      (I.blockSkip = D(I._blockSkip, 'g').getRegex()),
      (I.overlapSkip = D(I._overlapSkip, 'g').getRegex()),
      (I._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
      (I._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
      (I._email =
        /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
      (I.autolink = D(I.autolink)
        .replace('scheme', I._scheme)
        .replace('email', I._email)
        .getRegex()),
      (I._attribute =
        /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
      (I.tag = D(I.tag)
        .replace('comment', I._comment)
        .replace('attribute', I._attribute)
        .getRegex()),
      (I._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
      (I._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/),
      (I._title =
        /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
      (I.link = D(I.link)
        .replace('label', I._label)
        .replace('href', I._href)
        .replace('title', I._title)
        .getRegex()),
      (I.reflink = D(I.reflink).replace('label', I._label).getRegex()),
      (I.reflinkSearch = D(I.reflinkSearch, 'g')
        .replace('reflink', I.reflink)
        .replace('nolink', I.nolink)
        .getRegex()),
      (I.normal = j({}, I)),
      (I.pedantic = j({}, I.normal, {
        strong: {
          start: /^__|\*\*/,
          middle:
            /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
          endAst: /\*\*(?!\*)/g,
          endUnd: /__(?!_)/g,
        },
        em: {
          start: /^_|\*/,
          middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
          endAst: /\*(?!\*)/g,
          endUnd: /_(?!_)/g,
        },
        link: D(/^!?\[(label)\]\((.*?)\)/)
          .replace('label', I._label)
          .getRegex(),
        reflink: D(/^!?\[(label)\]\s*\[([^\]]*)\]/)
          .replace('label', I._label)
          .getRegex(),
      })),
      (I.gfm = j({}, I.normal, {
        escape: D(I.escape).replace('])', '~|])').getRegex(),
        _extended_email:
          /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal:
          /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/,
      })),
      (I.gfm.url = D(I.gfm.url, 'i')
        .replace('email', I.gfm._extended_email)
        .getRegex()),
      (I.breaks = j({}, I.gfm, {
        br: D(I.br).replace('{2,}', '*').getRegex(),
        text: D(I.gfm.text)
          .replace('\\b_', '\\b_| {2,}\\n')
          .replace(/\{2,\}/g, '*')
          .getRegex(),
      }));
    var O = { block: P, inline: I },
      L = i.defaults,
      F = O.block,
      q = O.inline,
      $ = function (e, t) {
        if (t < 1) return '';
        for (var n = ''; t > 1; ) 1 & t && (n += e), (t >>= 1), (e += e);
        return n + e;
      };
    function R(e) {
      return e
        .replace(/---/g, '\u2014')
        .replace(/--/g, '\u2013')
        .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
        .replace(/'/g, '\u2019')
        .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
        .replace(/"/g, '\u201d')
        .replace(/\.{3}/g, '\u2026');
    }
    function z(e) {
      var t,
        n,
        i = '',
        r = e.length;
      for (t = 0; t < r; t++)
        (n = e.charCodeAt(t)),
          Math.random() > 0.5 && (n = 'x' + n.toString(16)),
          (i += '&#' + n + ';');
      return i;
    }
    var H = (function () {
        function t(e) {
          (this.tokens = []),
            (this.tokens.links = Object.create(null)),
            (this.options = e || L),
            (this.options.tokenizer = this.options.tokenizer || new A()),
            (this.tokenizer = this.options.tokenizer),
            (this.tokenizer.options = this.options);
          var t = { block: F.normal, inline: q.normal };
          this.options.pedantic
            ? ((t.block = F.pedantic), (t.inline = q.pedantic))
            : this.options.gfm &&
              ((t.block = F.gfm),
              (t.inline = this.options.breaks ? q.breaks : q.gfm)),
            (this.tokenizer.rules = t);
        }
        (t.lex = function (e, n) {
          return new t(n).lex(e);
        }),
          (t.lexInline = function (e, n) {
            return new t(n).inlineTokens(e);
          });
        var n,
          i,
          r = t.prototype;
        return (
          (r.lex = function (e) {
            return (
              (e = e.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ')),
              this.blockTokens(e, this.tokens, !0),
              this.inline(this.tokens),
              this.tokens
            );
          }),
          (r.blockTokens = function (e, t, n) {
            var i, r, o, a;
            for (
              void 0 === t && (t = []),
                void 0 === n && (n = !0),
                e = e.replace(/^ +$/gm, '');
              e;

            )
              if ((i = this.tokenizer.space(e)))
                (e = e.substring(i.raw.length)), i.type && t.push(i);
              else if ((i = this.tokenizer.code(e, t)))
                (e = e.substring(i.raw.length)),
                  i.type
                    ? t.push(i)
                    : (((a = t[t.length - 1]).raw += '\n' + i.raw),
                      (a.text += '\n' + i.text));
              else if ((i = this.tokenizer.fences(e)))
                (e = e.substring(i.raw.length)), t.push(i);
              else if ((i = this.tokenizer.heading(e)))
                (e = e.substring(i.raw.length)), t.push(i);
              else if ((i = this.tokenizer.nptable(e)))
                (e = e.substring(i.raw.length)), t.push(i);
              else if ((i = this.tokenizer.hr(e)))
                (e = e.substring(i.raw.length)), t.push(i);
              else if ((i = this.tokenizer.blockquote(e)))
                (e = e.substring(i.raw.length)),
                  (i.tokens = this.blockTokens(i.text, [], n)),
                  t.push(i);
              else if ((i = this.tokenizer.list(e))) {
                for (
                  e = e.substring(i.raw.length), o = i.items.length, r = 0;
                  r < o;
                  r++
                )
                  i.items[r].tokens = this.blockTokens(i.items[r].text, [], !1);
                t.push(i);
              } else if ((i = this.tokenizer.html(e)))
                (e = e.substring(i.raw.length)), t.push(i);
              else if (n && (i = this.tokenizer.def(e)))
                (e = e.substring(i.raw.length)),
                  this.tokens.links[i.tag] ||
                    (this.tokens.links[i.tag] = {
                      href: i.href,
                      title: i.title,
                    });
              else if ((i = this.tokenizer.table(e)))
                (e = e.substring(i.raw.length)), t.push(i);
              else if ((i = this.tokenizer.lheading(e)))
                (e = e.substring(i.raw.length)), t.push(i);
              else if (n && (i = this.tokenizer.paragraph(e)))
                (e = e.substring(i.raw.length)), t.push(i);
              else if ((i = this.tokenizer.text(e, t)))
                (e = e.substring(i.raw.length)),
                  i.type
                    ? t.push(i)
                    : (((a = t[t.length - 1]).raw += '\n' + i.raw),
                      (a.text += '\n' + i.text));
              else if (e) {
                var s = 'Infinite loop on byte: ' + e.charCodeAt(0);
                if (this.options.silent) {
                  console.error(s);
                  break;
                }
                throw new Error(s);
              }
            return t;
          }),
          (r.inline = function (e) {
            var t,
              n,
              i,
              r,
              o,
              a,
              s = e.length;
            for (t = 0; t < s; t++)
              switch ((a = e[t]).type) {
                case 'paragraph':
                case 'text':
                case 'heading':
                  (a.tokens = []), this.inlineTokens(a.text, a.tokens);
                  break;
                case 'table':
                  for (
                    a.tokens = { header: [], cells: [] },
                      r = a.header.length,
                      n = 0;
                    n < r;
                    n++
                  )
                    (a.tokens.header[n] = []),
                      this.inlineTokens(a.header[n], a.tokens.header[n]);
                  for (r = a.cells.length, n = 0; n < r; n++)
                    for (
                      o = a.cells[n], a.tokens.cells[n] = [], i = 0;
                      i < o.length;
                      i++
                    )
                      (a.tokens.cells[n][i] = []),
                        this.inlineTokens(o[i], a.tokens.cells[n][i]);
                  break;
                case 'blockquote':
                  this.inline(a.tokens);
                  break;
                case 'list':
                  for (r = a.items.length, n = 0; n < r; n++)
                    this.inline(a.items[n].tokens);
              }
            return e;
          }),
          (r.inlineTokens = function (e, t, n, i, r) {
            var o;
            void 0 === t && (t = []),
              void 0 === n && (n = !1),
              void 0 === i && (i = !1),
              void 0 === r && (r = '');
            var a,
              s = e;
            if (this.tokens.links) {
              var l = Object.keys(this.tokens.links);
              if (l.length > 0)
                for (
                  ;
                  null !=
                  (a = this.tokenizer.rules.inline.reflinkSearch.exec(s));

                )
                  l.includes(a[0].slice(a[0].lastIndexOf('[') + 1, -1)) &&
                    (s =
                      s.slice(0, a.index) +
                      '[' +
                      $('a', a[0].length - 2) +
                      ']' +
                      s.slice(
                        this.tokenizer.rules.inline.reflinkSearch.lastIndex,
                      ));
            }
            for (
              ;
              null != (a = this.tokenizer.rules.inline.blockSkip.exec(s));

            )
              s =
                s.slice(0, a.index) +
                '[' +
                $('a', a[0].length - 2) +
                ']' +
                s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
            for (; e; )
              if ((o = this.tokenizer.escape(e)))
                (e = e.substring(o.raw.length)), t.push(o);
              else if ((o = this.tokenizer.tag(e, n, i)))
                (e = e.substring(o.raw.length)),
                  (n = o.inLink),
                  (i = o.inRawBlock),
                  t.push(o);
              else if ((o = this.tokenizer.link(e)))
                (e = e.substring(o.raw.length)),
                  'link' === o.type &&
                    (o.tokens = this.inlineTokens(o.text, [], !0, i)),
                  t.push(o);
              else if ((o = this.tokenizer.reflink(e, this.tokens.links)))
                (e = e.substring(o.raw.length)),
                  'link' === o.type &&
                    (o.tokens = this.inlineTokens(o.text, [], !0, i)),
                  t.push(o);
              else if ((o = this.tokenizer.strong(e, s, r)))
                (e = e.substring(o.raw.length)),
                  (o.tokens = this.inlineTokens(o.text, [], n, i)),
                  t.push(o);
              else if ((o = this.tokenizer.em(e, s, r)))
                (e = e.substring(o.raw.length)),
                  (o.tokens = this.inlineTokens(o.text, [], n, i)),
                  t.push(o);
              else if ((o = this.tokenizer.codespan(e)))
                (e = e.substring(o.raw.length)), t.push(o);
              else if ((o = this.tokenizer.br(e)))
                (e = e.substring(o.raw.length)), t.push(o);
              else if ((o = this.tokenizer.del(e)))
                (e = e.substring(o.raw.length)),
                  (o.tokens = this.inlineTokens(o.text, [], n, i)),
                  t.push(o);
              else if ((o = this.tokenizer.autolink(e, z)))
                (e = e.substring(o.raw.length)), t.push(o);
              else if (n || !(o = this.tokenizer.url(e, z))) {
                if ((o = this.tokenizer.inlineText(e, i, R)))
                  (e = e.substring(o.raw.length)),
                    (r = o.raw.slice(-1)),
                    t.push(o);
                else if (e) {
                  var u = 'Infinite loop on byte: ' + e.charCodeAt(0);
                  if (this.options.silent) {
                    console.error(u);
                    break;
                  }
                  throw new Error(u);
                }
              } else (e = e.substring(o.raw.length)), t.push(o);
            return t;
          }),
          (n = t),
          (i = [
            {
              key: 'rules',
              get: function () {
                return { block: F, inline: q };
              },
            },
          ]) && e(n, i),
          t
        );
      })(),
      M = i.defaults,
      B = function (e, t, n) {
        if (e) {
          var i;
          try {
            i = decodeURIComponent(f(n)).replace(h, '').toLowerCase();
          } catch (r) {
            return null;
          }
          if (
            0 === i.indexOf('javascript:') ||
            0 === i.indexOf('vbscript:') ||
            0 === i.indexOf('data:')
          )
            return null;
        }
        t &&
          !p.test(n) &&
          (n = (function (e, t) {
            g[' ' + e] || (g[' ' + e] = m.test(e) ? e + '/' : b(e, '/', !0));
            var n = -1 === (e = g[' ' + e]).indexOf(':');
            return '//' === t.substring(0, 2)
              ? n
                ? t
                : e.replace(v, '$1') + t
              : '/' === t.charAt(0)
                ? n
                  ? t
                  : e.replace(y, '$1') + t
                : e + t;
          })(t, n));
        try {
          n = encodeURI(n).replace(/%25/g, '%');
        } catch (r) {
          return null;
        }
        return n;
      },
      W = _,
      U = (function () {
        function e(e) {
          this.options = e || M;
        }
        var t = e.prototype;
        return (
          (t.code = function (e, t, n) {
            var i = (t || '').match(/\S*/)[0];
            if (this.options.highlight) {
              var r = this.options.highlight(e, i);
              null != r && r !== e && ((n = !0), (e = r));
            }
            return i
              ? '<pre><code class="' +
                  this.options.langPrefix +
                  W(i, !0) +
                  '">' +
                  (n ? e : W(e, !0)) +
                  '</code></pre>\n'
              : '<pre><code>' + (n ? e : W(e, !0)) + '</code></pre>\n';
          }),
          (t.blockquote = function (e) {
            return '<blockquote>\n' + e + '</blockquote>\n';
          }),
          (t.html = function (e) {
            return e;
          }),
          (t.heading = function (e, t, n, i) {
            return this.options.headerIds
              ? '<h' +
                  t +
                  ' id="' +
                  this.options.headerPrefix +
                  i.slug(n) +
                  '">' +
                  e +
                  '</h' +
                  t +
                  '>\n'
              : '<h' + t + '>' + e + '</h' + t + '>\n';
          }),
          (t.hr = function () {
            return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
          }),
          (t.list = function (e, t, n) {
            var i = t ? 'ol' : 'ul';
            return (
              '<' +
              i +
              (t && 1 !== n ? ' start="' + n + '"' : '') +
              '>\n' +
              e +
              '</' +
              i +
              '>\n'
            );
          }),
          (t.listitem = function (e) {
            return '<li>' + e + '</li>\n';
          }),
          (t.checkbox = function (e) {
            return (
              '<input ' +
              (e ? 'checked="" ' : '') +
              'disabled="" type="checkbox"' +
              (this.options.xhtml ? ' /' : '') +
              '> '
            );
          }),
          (t.paragraph = function (e) {
            return '<p>' + e + '</p>\n';
          }),
          (t.table = function (e, t) {
            return (
              t && (t = '<tbody>' + t + '</tbody>'),
              '<table>\n<thead>\n' + e + '</thead>\n' + t + '</table>\n'
            );
          }),
          (t.tablerow = function (e) {
            return '<tr>\n' + e + '</tr>\n';
          }),
          (t.tablecell = function (e, t) {
            var n = t.header ? 'th' : 'td';
            return (
              (t.align
                ? '<' + n + ' align="' + t.align + '">'
                : '<' + n + '>') +
              e +
              '</' +
              n +
              '>\n'
            );
          }),
          (t.strong = function (e) {
            return '<strong>' + e + '</strong>';
          }),
          (t.em = function (e) {
            return '<em>' + e + '</em>';
          }),
          (t.codespan = function (e) {
            return '<code>' + e + '</code>';
          }),
          (t.br = function () {
            return this.options.xhtml ? '<br/>' : '<br>';
          }),
          (t.del = function (e) {
            return '<del>' + e + '</del>';
          }),
          (t.link = function (e, t, n) {
            if (
              null === (e = B(this.options.sanitize, this.options.baseUrl, e))
            )
              return n;
            var i = '<a href="' + W(e) + '"';
            return t && (i += ' title="' + t + '"'), i + '>' + n + '</a>';
          }),
          (t.image = function (e, t, n) {
            if (
              null === (e = B(this.options.sanitize, this.options.baseUrl, e))
            )
              return n;
            var i = '<img src="' + e + '" alt="' + n + '"';
            return (
              t && (i += ' title="' + t + '"'),
              i + (this.options.xhtml ? '/>' : '>')
            );
          }),
          (t.text = function (e) {
            return e;
          }),
          e
        );
      })(),
      Q = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.strong = function (e) {
            return e;
          }),
          (t.em = function (e) {
            return e;
          }),
          (t.codespan = function (e) {
            return e;
          }),
          (t.del = function (e) {
            return e;
          }),
          (t.html = function (e) {
            return e;
          }),
          (t.text = function (e) {
            return e;
          }),
          (t.link = function (e, t, n) {
            return '' + n;
          }),
          (t.image = function (e, t, n) {
            return '' + n;
          }),
          (t.br = function () {
            return '';
          }),
          e
        );
      })(),
      X = (function () {
        function e() {
          this.seen = {};
        }
        var t = e.prototype;
        return (
          (t.serialize = function (e) {
            return e
              .toLowerCase()
              .trim()
              .replace(/<[!\/a-z].*?>/gi, '')
              .replace(
                /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
                '',
              )
              .replace(/\s/g, '-');
          }),
          (t.getNextSafeSlug = function (e, t) {
            var n = e,
              i = 0;
            if (this.seen.hasOwnProperty(n)) {
              i = this.seen[e];
              do {
                n = e + '-' + ++i;
              } while (this.seen.hasOwnProperty(n));
            }
            return t || ((this.seen[e] = i), (this.seen[n] = 0)), n;
          }),
          (t.slug = function (e, t) {
            void 0 === t && (t = {});
            var n = this.serialize(e);
            return this.getNextSafeSlug(n, t.dryrun);
          }),
          e
        );
      })(),
      V = i.defaults,
      Z = w,
      Y = (function () {
        function e(e) {
          (this.options = e || V),
            (this.options.renderer = this.options.renderer || new U()),
            (this.renderer = this.options.renderer),
            (this.renderer.options = this.options),
            (this.textRenderer = new Q()),
            (this.slugger = new X());
        }
        (e.parse = function (t, n) {
          return new e(n).parse(t);
        }),
          (e.parseInline = function (t, n) {
            return new e(n).parseInline(t);
          });
        var t = e.prototype;
        return (
          (t.parse = function (e, t) {
            void 0 === t && (t = !0);
            var n,
              i,
              r,
              o,
              a,
              s,
              l,
              u,
              c,
              f,
              d,
              h,
              p,
              g,
              m,
              v,
              y,
              b,
              _ = '',
              w = e.length;
            for (n = 0; n < w; n++)
              switch ((f = e[n]).type) {
                case 'space':
                  continue;
                case 'hr':
                  _ += this.renderer.hr();
                  continue;
                case 'heading':
                  _ += this.renderer.heading(
                    this.parseInline(f.tokens),
                    f.depth,
                    Z(this.parseInline(f.tokens, this.textRenderer)),
                    this.slugger,
                  );
                  continue;
                case 'code':
                  _ += this.renderer.code(f.text, f.lang, f.escaped);
                  continue;
                case 'table':
                  for (u = '', l = '', o = f.header.length, i = 0; i < o; i++)
                    l += this.renderer.tablecell(
                      this.parseInline(f.tokens.header[i]),
                      { header: !0, align: f.align[i] },
                    );
                  for (
                    u += this.renderer.tablerow(l),
                      c = '',
                      o = f.cells.length,
                      i = 0;
                    i < o;
                    i++
                  ) {
                    for (
                      l = '', a = (s = f.tokens.cells[i]).length, r = 0;
                      r < a;
                      r++
                    )
                      l += this.renderer.tablecell(this.parseInline(s[r]), {
                        header: !1,
                        align: f.align[r],
                      });
                    c += this.renderer.tablerow(l);
                  }
                  _ += this.renderer.table(u, c);
                  continue;
                case 'blockquote':
                  (c = this.parse(f.tokens)),
                    (_ += this.renderer.blockquote(c));
                  continue;
                case 'list':
                  for (
                    d = f.ordered,
                      h = f.start,
                      p = f.loose,
                      o = f.items.length,
                      c = '',
                      i = 0;
                    i < o;
                    i++
                  )
                    (v = (m = f.items[i]).checked),
                      (y = m.task),
                      (g = ''),
                      m.task &&
                        ((b = this.renderer.checkbox(v)),
                        p
                          ? m.tokens.length > 0 && 'text' === m.tokens[0].type
                            ? ((m.tokens[0].text = b + ' ' + m.tokens[0].text),
                              m.tokens[0].tokens &&
                                m.tokens[0].tokens.length > 0 &&
                                'text' === m.tokens[0].tokens[0].type &&
                                (m.tokens[0].tokens[0].text =
                                  b + ' ' + m.tokens[0].tokens[0].text))
                            : m.tokens.unshift({ type: 'text', text: b })
                          : (g += b)),
                      (g += this.parse(m.tokens, p)),
                      (c += this.renderer.listitem(g, y, v));
                  _ += this.renderer.list(c, d, h);
                  continue;
                case 'html':
                  _ += this.renderer.html(f.text);
                  continue;
                case 'paragraph':
                  _ += this.renderer.paragraph(this.parseInline(f.tokens));
                  continue;
                case 'text':
                  for (
                    c = f.tokens ? this.parseInline(f.tokens) : f.text;
                    n + 1 < w && 'text' === e[n + 1].type;

                  )
                    c +=
                      '\n' +
                      ((f = e[++n]).tokens
                        ? this.parseInline(f.tokens)
                        : f.text);
                  _ += t ? this.renderer.paragraph(c) : c;
                  continue;
                default:
                  var x = 'Token with "' + f.type + '" type was not found.';
                  if (this.options.silent) return void console.error(x);
                  throw new Error(x);
              }
            return _;
          }),
          (t.parseInline = function (e, t) {
            t = t || this.renderer;
            var n,
              i,
              r = '',
              o = e.length;
            for (n = 0; n < o; n++)
              switch ((i = e[n]).type) {
                case 'escape':
                  r += t.text(i.text);
                  break;
                case 'html':
                  r += t.html(i.text);
                  break;
                case 'link':
                  r += t.link(i.href, i.title, this.parseInline(i.tokens, t));
                  break;
                case 'image':
                  r += t.image(i.href, i.title, i.text);
                  break;
                case 'strong':
                  r += t.strong(this.parseInline(i.tokens, t));
                  break;
                case 'em':
                  r += t.em(this.parseInline(i.tokens, t));
                  break;
                case 'codespan':
                  r += t.codespan(i.text);
                  break;
                case 'br':
                  r += t.br();
                  break;
                case 'del':
                  r += t.del(this.parseInline(i.tokens, t));
                  break;
                case 'text':
                  r += t.text(i.text);
                  break;
                default:
                  var a = 'Token with "' + i.type + '" type was not found.';
                  if (this.options.silent) return void console.error(a);
                  throw new Error(a);
              }
            return r;
          }),
          e
        );
      })(),
      K = x,
      G = function (e) {
        e &&
          e.sanitize &&
          !e.silent &&
          console.warn(
            'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options',
          );
      },
      J = _,
      ee = i.getDefaults,
      te = i.changeDefaults,
      ne = i.defaults;
    function ie(e, t, n) {
      if (null == e)
        throw new Error('marked(): input parameter is undefined or null');
      if ('string' != typeof e)
        throw new Error(
          'marked(): input parameter is of type ' +
            Object.prototype.toString.call(e) +
            ', string expected',
        );
      if (
        ('function' == typeof t && ((n = t), (t = null)),
        (t = K({}, ie.defaults, t || {})),
        G(t),
        n)
      ) {
        var i,
          r = t.highlight;
        try {
          i = H.lex(e, t);
        } catch (l) {
          return n(l);
        }
        var o = function (e) {
          var o;
          if (!e)
            try {
              o = Y.parse(i, t);
            } catch (l) {
              e = l;
            }
          return (t.highlight = r), e ? n(e) : n(null, o);
        };
        if (!r || r.length < 3) return o();
        if ((delete t.highlight, !i.length)) return o();
        var a = 0;
        return (
          ie.walkTokens(i, function (e) {
            'code' === e.type &&
              (a++,
              setTimeout(function () {
                r(e.text, e.lang, function (t, n) {
                  if (t) return o(t);
                  null != n && n !== e.text && ((e.text = n), (e.escaped = !0)),
                    0 == --a && o();
                });
              }, 0));
          }),
          void (0 === a && o())
        );
      }
      try {
        var s = H.lex(e, t);
        return t.walkTokens && ie.walkTokens(s, t.walkTokens), Y.parse(s, t);
      } catch (l) {
        if (
          ((l.message +=
            '\nPlease report this to https://github.com/markedjs/marked.'),
          t.silent)
        )
          return (
            '<p>An error occurred:</p><pre>' + J(l.message + '', !0) + '</pre>'
          );
        throw l;
      }
    }
    return (
      (ie.options = ie.setOptions =
        function (e) {
          return K(ie.defaults, e), te(ie.defaults), ie;
        }),
      (ie.getDefaults = ee),
      (ie.defaults = ne),
      (ie.use = function (e) {
        var t = K({}, e);
        if (
          (e.renderer &&
            (function () {
              var n = ie.defaults.renderer || new U(),
                i = function (t) {
                  var i = n[t];
                  n[t] = function () {
                    for (
                      var r = arguments.length, o = new Array(r), a = 0;
                      a < r;
                      a++
                    )
                      o[a] = arguments[a];
                    var s = e.renderer[t].apply(n, o);
                    return !1 === s && (s = i.apply(n, o)), s;
                  };
                };
              for (var r in e.renderer) i(r);
              t.renderer = n;
            })(),
          e.tokenizer &&
            (function () {
              var n = ie.defaults.tokenizer || new A(),
                i = function (t) {
                  var i = n[t];
                  n[t] = function () {
                    for (
                      var r = arguments.length, o = new Array(r), a = 0;
                      a < r;
                      a++
                    )
                      o[a] = arguments[a];
                    var s = e.tokenizer[t].apply(n, o);
                    return !1 === s && (s = i.apply(n, o)), s;
                  };
                };
              for (var r in e.tokenizer) i(r);
              t.tokenizer = n;
            })(),
          e.walkTokens)
        ) {
          var n = ie.defaults.walkTokens;
          t.walkTokens = function (t) {
            e.walkTokens(t), n && n(t);
          };
        }
        ie.setOptions(t);
      }),
      (ie.walkTokens = function (e, t) {
        for (var i, r = n(e); !(i = r()).done; ) {
          var o = i.value;
          switch ((t(o), o.type)) {
            case 'table':
              for (var a, s = n(o.tokens.header); !(a = s()).done; )
                ie.walkTokens(a.value, t);
              for (var l, u = n(o.tokens.cells); !(l = u()).done; )
                for (var c, f = n(l.value); !(c = f()).done; )
                  ie.walkTokens(c.value, t);
              break;
            case 'list':
              ie.walkTokens(o.items, t);
              break;
            default:
              o.tokens && ie.walkTokens(o.tokens, t);
          }
        }
      }),
      (ie.parseInline = function (e, t) {
        if (null == e)
          throw new Error(
            'marked.parseInline(): input parameter is undefined or null',
          );
        if ('string' != typeof e)
          throw new Error(
            'marked.parseInline(): input parameter is of type ' +
              Object.prototype.toString.call(e) +
              ', string expected',
          );
        (t = K({}, ie.defaults, t || {})), G(t);
        try {
          var n = H.lexInline(e, t);
          return (
            t.walkTokens && ie.walkTokens(n, t.walkTokens), Y.parseInline(n, t)
          );
        } catch (i) {
          if (
            ((i.message +=
              '\nPlease report this to https://github.com/markedjs/marked.'),
            t.silent)
          )
            return (
              '<p>An error occurred:</p><pre>' +
              J(i.message + '', !0) +
              '</pre>'
            );
          throw i;
        }
      }),
      (ie.Parser = Y),
      (ie.parser = Y.parse),
      (ie.Renderer = U),
      (ie.TextRenderer = Q),
      (ie.Lexer = H),
      (ie.lexer = H.lex),
      (ie.Tokenizer = A),
      (ie.Slugger = X),
      (ie.parse = ie),
      ie
    );
  });
var _self =
    'undefined' != typeof window
      ? window
      : 'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope
        ? self
        : {},
  Prism = (function (e) {
    var t = /\blang(?:uage)?-([\w-]+)\b/i,
      n = 0,
      i = {
        manual: e.Prism && e.Prism.manual,
        disableWorkerMessageHandler:
          e.Prism && e.Prism.disableWorkerMessageHandler,
        util: {
          encode: function e(t) {
            return t instanceof r
              ? new r(t.type, e(t.content), t.alias)
              : Array.isArray(t)
                ? t.map(e)
                : t
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/\u00a0/g, ' ');
          },
          type: function (e) {
            return Object.prototype.toString.call(e).slice(8, -1);
          },
          objId: function (e) {
            return (
              e.__id || Object.defineProperty(e, '__id', { value: ++n }), e.__id
            );
          },
          clone: function e(t, n) {
            var r, o;
            switch (((n = n || {}), i.util.type(t))) {
              case 'Object':
                if (((o = i.util.objId(t)), n[o])) return n[o];
                for (var a in ((n[o] = r = {}), t))
                  t.hasOwnProperty(a) && (r[a] = e(t[a], n));
                return r;
              case 'Array':
                return (
                  (o = i.util.objId(t)),
                  n[o]
                    ? n[o]
                    : ((n[o] = r = []),
                      t.forEach(function (t, i) {
                        r[i] = e(t, n);
                      }),
                      r)
                );
              default:
                return t;
            }
          },
          getLanguage: function (e) {
            for (; e && !t.test(e.className); ) e = e.parentElement;
            return e
              ? (e.className.match(t) || [, 'none'])[1].toLowerCase()
              : 'none';
          },
          currentScript: function () {
            if ('undefined' == typeof document) return null;
            if ('currentScript' in document) return document.currentScript;
            try {
              throw new Error();
            } catch (i) {
              var e = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(i.stack) || [])[1];
              if (e) {
                var t = document.getElementsByTagName('script');
                for (var n in t) if (t[n].src == e) return t[n];
              }
              return null;
            }
          },
          isActive: function (e, t, n) {
            for (var i = 'no-' + t; e; ) {
              var r = e.classList;
              if (r.contains(t)) return !0;
              if (r.contains(i)) return !1;
              e = e.parentElement;
            }
            return !!n;
          },
        },
        languages: {
          extend: function (e, t) {
            var n = i.util.clone(i.languages[e]);
            for (var r in t) n[r] = t[r];
            return n;
          },
          insertBefore: function (e, t, n, r) {
            var o = (r = r || i.languages)[e],
              a = {};
            for (var s in o)
              if (o.hasOwnProperty(s)) {
                if (s == t)
                  for (var l in n) n.hasOwnProperty(l) && (a[l] = n[l]);
                n.hasOwnProperty(s) || (a[s] = o[s]);
              }
            var u = r[e];
            return (
              (r[e] = a),
              i.languages.DFS(i.languages, function (t, n) {
                n === u && t != e && (this[t] = a);
              }),
              a
            );
          },
          DFS: function e(t, n, r, o) {
            o = o || {};
            var a = i.util.objId;
            for (var s in t)
              if (t.hasOwnProperty(s)) {
                n.call(t, s, t[s], r || s);
                var l = t[s],
                  u = i.util.type(l);
                'Object' !== u || o[a(l)]
                  ? 'Array' !== u || o[a(l)] || ((o[a(l)] = !0), e(l, n, s, o))
                  : ((o[a(l)] = !0), e(l, n, null, o));
              }
          },
        },
        plugins: {},
        highlightAll: function (e, t) {
          i.highlightAllUnder(document, e, t);
        },
        highlightAllUnder: function (e, t, n) {
          var r = {
            callback: n,
            container: e,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
          };
          i.hooks.run('before-highlightall', r),
            (r.elements = Array.prototype.slice.apply(
              r.container.querySelectorAll(r.selector),
            )),
            i.hooks.run('before-all-elements-highlight', r);
          for (var o, a = 0; (o = r.elements[a++]); )
            i.highlightElement(o, !0 === t, r.callback);
        },
        highlightElement: function (n, r, o) {
          var a = i.util.getLanguage(n),
            s = i.languages[a];
          n.className =
            n.className.replace(t, '').replace(/\s+/g, ' ') + ' language-' + a;
          var l = n.parentElement;
          l &&
            'pre' === l.nodeName.toLowerCase() &&
            (l.className =
              l.className.replace(t, '').replace(/\s+/g, ' ') +
              ' language-' +
              a);
          var u = { element: n, language: a, grammar: s, code: n.textContent };
          function c(e) {
            (u.highlightedCode = e),
              i.hooks.run('before-insert', u),
              (u.element.innerHTML = u.highlightedCode),
              i.hooks.run('after-highlight', u),
              i.hooks.run('complete', u),
              o && o.call(u.element);
          }
          if ((i.hooks.run('before-sanity-check', u), !u.code))
            return i.hooks.run('complete', u), void (o && o.call(u.element));
          if ((i.hooks.run('before-highlight', u), u.grammar))
            if (r && e.Worker) {
              var f = new Worker(i.filename);
              (f.onmessage = function (e) {
                c(e.data);
              }),
                f.postMessage(
                  JSON.stringify({
                    language: u.language,
                    code: u.code,
                    immediateClose: !0,
                  }),
                );
            } else c(i.highlight(u.code, u.grammar, u.language));
          else c(i.util.encode(u.code));
        },
        highlight: function (e, t, n) {
          var o = { code: e, grammar: t, language: n };
          return (
            i.hooks.run('before-tokenize', o),
            (o.tokens = i.tokenize(o.code, o.grammar)),
            i.hooks.run('after-tokenize', o),
            r.stringify(i.util.encode(o.tokens), o.language)
          );
        },
        tokenize: function (e, t) {
          var n = t.rest;
          if (n) {
            for (var l in n) t[l] = n[l];
            delete t.rest;
          }
          var u = new o();
          return (
            a(u, u.head, e),
            (function e(t, n, o, l, u, c) {
              for (var f in o)
                if (o.hasOwnProperty(f) && o[f]) {
                  var d = o[f];
                  d = Array.isArray(d) ? d : [d];
                  for (var h = 0; h < d.length; ++h) {
                    if (c && c.cause == f + ',' + h) return;
                    var p = d[h],
                      g = p.inside,
                      m = !!p.lookbehind,
                      v = !!p.greedy,
                      y = 0,
                      b = p.alias;
                    if (v && !p.pattern.global) {
                      var _ = p.pattern.toString().match(/[imsuy]*$/)[0];
                      p.pattern = RegExp(p.pattern.source, _ + 'g');
                    }
                    for (
                      var w = p.pattern || p, x = l.next, k = u;
                      x !== n.tail && !(c && k >= c.reach);
                      k += x.value.length, x = x.next
                    ) {
                      var T = x.value;
                      if (n.length > t.length) return;
                      if (!(T instanceof r)) {
                        var E = 1;
                        if (v && x != n.tail.prev) {
                          if (((w.lastIndex = k), !(D = w.exec(t)))) break;
                          var C = D.index + (m && D[1] ? D[1].length : 0),
                            S = D.index + D[0].length,
                            A = k;
                          for (A += x.value.length; C >= A; )
                            A += (x = x.next).value.length;
                          if (((k = A -= x.value.length), x.value instanceof r))
                            continue;
                          for (
                            var N = x;
                            N !== n.tail &&
                            (A < S || 'string' == typeof N.value);
                            N = N.next
                          )
                            E++, (A += N.value.length);
                          E--, (T = t.slice(k, A)), (D.index -= k);
                        } else {
                          w.lastIndex = 0;
                          var D = w.exec(T);
                        }
                        if (D) {
                          m && (y = D[1] ? D[1].length : 0), (C = D.index + y);
                          var j = D[0].slice(y),
                            P = ((S = C + j.length), T.slice(0, C)),
                            I = T.slice(S),
                            O = k + T.length;
                          c && O > c.reach && (c.reach = O);
                          var L = x.prev;
                          P && ((L = a(n, L, P)), (k += P.length)),
                            s(n, L, E),
                            (x = a(
                              n,
                              L,
                              new r(f, g ? i.tokenize(j, g) : j, b, j),
                            )),
                            I && a(n, x, I),
                            E > 1 &&
                              e(t, n, o, x.prev, k, {
                                cause: f + ',' + h,
                                reach: O,
                              });
                        }
                      }
                    }
                  }
                }
            })(e, u, t, u.head, 0),
            (function (e) {
              for (var t = [], n = e.head.next; n !== e.tail; )
                t.push(n.value), (n = n.next);
              return t;
            })(u)
          );
        },
        hooks: {
          all: {},
          add: function (e, t) {
            var n = i.hooks.all;
            (n[e] = n[e] || []), n[e].push(t);
          },
          run: function (e, t) {
            var n = i.hooks.all[e];
            if (n && n.length) for (var r, o = 0; (r = n[o++]); ) r(t);
          },
        },
        Token: r,
      };
    function r(e, t, n, i) {
      (this.type = e),
        (this.content = t),
        (this.alias = n),
        (this.length = 0 | (i || '').length);
    }
    function o() {
      var e = { value: null, prev: null, next: null },
        t = { value: null, prev: e, next: null };
      (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
    }
    function a(e, t, n) {
      var i = t.next,
        r = { value: n, prev: t, next: i };
      return (t.next = r), (i.prev = r), e.length++, r;
    }
    function s(e, t, n) {
      for (var i = t.next, r = 0; r < n && i !== e.tail; r++) i = i.next;
      (t.next = i), (i.prev = t), (e.length -= r);
    }
    if (
      ((e.Prism = i),
      (r.stringify = function e(t, n) {
        if ('string' == typeof t) return t;
        if (Array.isArray(t)) {
          var r = '';
          return (
            t.forEach(function (t) {
              r += e(t, n);
            }),
            r
          );
        }
        var o = {
            type: t.type,
            content: e(t.content, n),
            tag: 'span',
            classes: ['token', t.type],
            attributes: {},
            language: n,
          },
          a = t.alias;
        a &&
          (Array.isArray(a)
            ? Array.prototype.push.apply(o.classes, a)
            : o.classes.push(a)),
          i.hooks.run('wrap', o);
        var s = '';
        for (var l in o.attributes)
          s +=
            ' ' +
            l +
            '="' +
            (o.attributes[l] || '').replace(/"/g, '&quot;') +
            '"';
        return (
          '<' +
          o.tag +
          ' class="' +
          o.classes.join(' ') +
          '"' +
          s +
          '>' +
          o.content +
          '</' +
          o.tag +
          '>'
        );
      }),
      !e.document)
    )
      return e.addEventListener
        ? (i.disableWorkerMessageHandler ||
            e.addEventListener(
              'message',
              function (t) {
                var n = JSON.parse(t.data),
                  r = n.language,
                  o = n.immediateClose;
                e.postMessage(i.highlight(n.code, i.languages[r], r)),
                  o && e.close();
              },
              !1,
            ),
          i)
        : i;
    var l = i.util.currentScript();
    function u() {
      i.manual || i.highlightAll();
    }
    if (
      (l &&
        ((i.filename = l.src),
        l.hasAttribute('data-manual') && (i.manual = !0)),
      !i.manual)
    ) {
      var c = document.readyState;
      'loading' === c || ('interactive' === c && l && l.defer)
        ? document.addEventListener('DOMContentLoaded', u)
        : window.requestAnimationFrame
          ? window.requestAnimationFrame(u)
          : window.setTimeout(u, 16);
    }
    return i;
  })(_self);
'undefined' != typeof module && module.exports && (module.exports = Prism),
  'undefined' != typeof global && (global.Prism = Prism),
  (Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: {
      pattern:
        /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        'internal-subset': {
          pattern: /(\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null,
        },
        string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
        punctuation: /^<!|>$|[[\]]/,
        'doctype-tag': /^DOCTYPE/,
        name: /[^\s<>'"]+/,
      },
    },
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
      pattern:
        /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
        },
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
          },
        },
        punctuation: /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: { namespace: /^[^\s>\/:]+:/ },
        },
      },
    },
    entity: [
      { pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
      /&#x?[\da-f]{1,8};/i,
    ],
  }),
  (Prism.languages.markup.tag.inside['attr-value'].inside.entity =
    Prism.languages.markup.entity),
  (Prism.languages.markup.doctype.inside['internal-subset'].inside =
    Prism.languages.markup),
  Prism.hooks.add('wrap', function (e) {
    'entity' === e.type &&
      (e.attributes.title = e.content.replace(/&amp;/, '&'));
  }),
  Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    value: function (e, t) {
      var n = {};
      (n['language-' + t] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: Prism.languages[t],
      }),
        (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
      var i = {
        'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n },
      };
      i['language-' + t] = { pattern: /[\s\S]+/, inside: Prism.languages[t] };
      var r = {};
      (r[e] = {
        pattern: RegExp(
          /(<__[\s\S]*?>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
            /__/g,
            function () {
              return e;
            },
          ),
          'i',
        ),
        lookbehind: !0,
        greedy: !0,
        inside: i,
      }),
        Prism.languages.insertBefore('markup', 'cdata', r);
    },
  }),
  (Prism.languages.html = Prism.languages.markup),
  (Prism.languages.mathml = Prism.languages.markup),
  (Prism.languages.svg = Prism.languages.markup),
  (Prism.languages.xml = Prism.languages.extend('markup', {})),
  (Prism.languages.ssml = Prism.languages.xml),
  (Prism.languages.atom = Prism.languages.xml),
  (Prism.languages.rss = Prism.languages.xml),
  (function (e) {
    var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    (e.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
        inside: {
          rule: /^@[\w-]+/,
          'selector-function-argument': {
            pattern:
              /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
            lookbehind: !0,
            alias: 'selector',
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0,
          },
        },
      },
      url: {
        pattern: RegExp(
          '\\burl\\((?:' +
            t.source +
            '|' +
            /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
            ')\\)',
          'i',
        ),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: { pattern: RegExp('^' + t.source + '$'), alias: 'url' },
        },
      },
      selector: RegExp('[^{}\\s](?:[^{};"\']|' + t.source + ')*?(?=\\s*\\{)'),
      string: { pattern: t, greedy: !0 },
      property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
      important: /!important\b/i,
      function: /[-a-z0-9]+(?=\()/i,
      punctuation: /[(){};:,]/,
    }),
      (e.languages.css.atrule.inside.rest = e.languages.css);
    var n = e.languages.markup;
    n &&
      (n.tag.addInlined('style', 'css'),
      e.languages.insertBefore(
        'inside',
        'attr-value',
        {
          'style-attr': {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
              'attr-name': { pattern: /^\s*style/i, inside: n.tag.inside },
              punctuation: /^\s*=\s*['"]|['"]\s*$/,
              'attr-value': { pattern: /.+/i, inside: e.languages.css },
            },
            alias: 'language-css',
          },
        },
        n.tag,
      ));
  })(Prism),
  (Prism.languages.clike = {
    comment: [
      { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
      { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0,
    },
    'class-name': {
      pattern:
        /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: { punctuation: /[.\\]/ },
    },
    keyword:
      /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/,
  }),
  (Prism.languages.javascript = Prism.languages.extend('clike', {
    'class-name': [
      Prism.languages.clike['class-name'],
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
        lookbehind: !0,
      },
    ],
    keyword: [
      { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
      {
        pattern:
          /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0,
      },
    ],
    number:
      /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    function:
      /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    operator:
      /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
  })),
  (Prism.languages.javascript['class-name'][0].pattern =
    /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
  Prism.languages.insertBefore('javascript', 'keyword', {
    regex: {
      pattern:
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        'regex-source': {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: 'language-regex',
          inside: Prism.languages.regex,
        },
        'regex-flags': /[a-z]+$/,
        'regex-delimiter': /^\/|\/$/,
      },
    },
    'function-variable': {
      pattern:
        /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
      alias: 'function',
    },
    parameter: [
      {
        pattern:
          /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
      {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: Prism.languages.javascript,
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
      {
        pattern:
          /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
  }),
  Prism.languages.insertBefore('javascript', 'string', {
    'template-string': {
      pattern:
        /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
      greedy: !0,
      inside: {
        'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
          lookbehind: !0,
          inside: {
            'interpolation-punctuation': {
              pattern: /^\${|}$/,
              alias: 'punctuation',
            },
            rest: Prism.languages.javascript,
          },
        },
        string: /[\s\S]+/,
      },
    },
  }),
  Prism.languages.markup &&
    Prism.languages.markup.tag.addInlined('script', 'javascript'),
  (Prism.languages.js = Prism.languages.javascript),
  (function () {
    if ('undefined' != typeof self && self.Prism && self.document) {
      var e = window.Prism,
        t = {
          js: 'javascript',
          py: 'python',
          rb: 'ruby',
          ps1: 'powershell',
          psm1: 'powershell',
          sh: 'bash',
          bat: 'batch',
          h: 'c',
          tex: 'latex',
        },
        n = 'data-src-status',
        i =
          'pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',
        r = /\blang(?:uage)?-([\w-]+)\b/i;
      e.hooks.add('before-highlightall', function (e) {
        e.selector += ', ' + i;
      }),
        e.hooks.add('before-sanity-check', function (r) {
          var o = r.element;
          if (o.matches(i)) {
            (r.code = ''), o.setAttribute(n, 'loading');
            var s = o.appendChild(document.createElement('CODE'));
            s.textContent = 'Loading\u2026';
            var l = o.getAttribute('data-src'),
              u = r.language;
            if ('none' === u) {
              var c = (/\.(\w+)$/.exec(l) || [, 'none'])[1];
              u = t[c] || c;
            }
            a(s, u), a(o, u);
            var f = e.plugins.autoloader;
            f && f.loadLanguages(u);
            var d = new XMLHttpRequest();
            d.open('GET', l, !0),
              (d.onreadystatechange = function () {
                4 == d.readyState &&
                  (d.status < 400 && d.responseText
                    ? (o.setAttribute(n, 'loaded'),
                      (s.textContent = d.responseText),
                      e.highlightElement(s))
                    : (o.setAttribute(n, 'failed'),
                      (s.textContent =
                        d.status >= 400
                          ? '\u2716 Error ' +
                            d.status +
                            ' while fetching file: ' +
                            d.statusText
                          : '\u2716 Error: File does not exist or is empty')));
              }),
              d.send(null);
          }
        }),
        (e.plugins.fileHighlight = {
          highlight: function (t) {
            for (
              var n, r = (t || document).querySelectorAll(i), o = 0;
              (n = r[o++]);

            )
              e.highlightElement(n);
          },
        });
      var o = !1;
      e.fileHighlight = function () {
        o ||
          (console.warn(
            'Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.',
          ),
          (o = !0)),
          e.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    }
    function a(e, t) {
      var n = e.className;
      (n = n.replace(r, ' ') + ' language-' + t),
        (e.className = n.replace(/\s+/g, ' ').trim());
    }
  })(),
  ('undefined' != typeof self && !self.Prism) ||
    ('undefined' != typeof global && !global.Prism) ||
    Prism.hooks.add('wrap', function (e) {
      'keyword' === e.type && e.classes.push('keyword-' + e.content);
    }),
  (function () {
    if (
      'undefined' != typeof self &&
      self.Prism &&
      self.document &&
      document.querySelector
    ) {
      var e,
        t = function () {
          if (void 0 === e) {
            var t = document.createElement('div');
            (t.style.fontSize = '13px'),
              (t.style.lineHeight = '1.5'),
              (t.style.padding = '0'),
              (t.style.border = '0'),
              (t.innerHTML = '&nbsp;<br />&nbsp;'),
              document.body.appendChild(t),
              (e = 38 === t.offsetHeight),
              document.body.removeChild(t);
          }
          return e;
        },
        n = !0,
        i = 0;
      Prism.hooks.add('before-sanity-check', function (e) {
        var t = e.element.parentNode,
          n = t && t.getAttribute('data-line');
        if (t && n && /pre/i.test(t.nodeName)) {
          var i = 0;
          r('.line-highlight', t).forEach(function (e) {
            (i += e.textContent.length), e.parentNode.removeChild(e);
          }),
            i &&
              /^( \n)+$/.test(e.code.slice(-i)) &&
              (e.code = e.code.slice(0, -i));
        }
      }),
        Prism.hooks.add('complete', function e(t) {
          var n = t.element.parentNode,
            r = n && n.getAttribute('data-line');
          if (n && r && /pre/i.test(n.nodeName)) {
            clearTimeout(i);
            var a = Prism.plugins.lineNumbers,
              u = t.plugins && t.plugins.lineNumbers;
            o(n, 'line-numbers') && a && !u
              ? Prism.hooks.add('line-numbers', e)
              : (s(n, r)(), (i = setTimeout(l, 1)));
          }
        }),
        window.addEventListener('hashchange', l),
        window.addEventListener('resize', function () {
          r('pre[data-line]')
            .map(function (e) {
              return s(e);
            })
            .forEach(a);
        });
    }
    function r(e, t) {
      return Array.prototype.slice.call((t || document).querySelectorAll(e));
    }
    function o(e, t) {
      return (
        (t = ' ' + t + ' '),
        (' ' + e.className + ' ').replace(/[\n\t]/g, ' ').indexOf(t) > -1
      );
    }
    function a(e) {
      e();
    }
    function s(e, i, s) {
      var l = (i = 'string' == typeof i ? i : e.getAttribute('data-line'))
          .replace(/\s+/g, '')
          .split(',')
          .filter(Boolean),
        u = +e.getAttribute('data-line-offset') || 0,
        c = (t() ? parseInt : parseFloat)(getComputedStyle(e).lineHeight),
        f = o(e, 'line-numbers'),
        d = f ? e : e.querySelector('code') || e,
        h = [];
      l.forEach(function (t) {
        var n = t.split('-'),
          i = +n[0],
          r = +n[1] || i,
          o =
            e.querySelector('.line-highlight[data-range="' + t + '"]') ||
            document.createElement('div');
        if (
          (h.push(function () {
            o.setAttribute('aria-hidden', 'true'),
              o.setAttribute('data-range', t),
              (o.className = (s || '') + ' line-highlight');
          }),
          f && Prism.plugins.lineNumbers)
        ) {
          var a = Prism.plugins.lineNumbers.getLine(e, i),
            l = Prism.plugins.lineNumbers.getLine(e, r);
          if (a) {
            var p = a.offsetTop + 'px';
            h.push(function () {
              o.style.top = p;
            });
          }
          if (l) {
            var g = l.offsetTop - a.offsetTop + l.offsetHeight + 'px';
            h.push(function () {
              o.style.height = g;
            });
          }
        } else
          h.push(function () {
            o.setAttribute('data-start', i),
              r > i && o.setAttribute('data-end', r),
              (o.style.top = (i - u - 1) * c + 'px'),
              (o.textContent = new Array(r - i + 2).join(' \n'));
          });
        h.push(function () {
          d.appendChild(o);
        });
      });
      var p = e.id;
      if (f && p) {
        for (var g = 'linkable-line-numbers', m = !1, v = e; v; ) {
          if (o(v, g)) {
            m = !0;
            break;
          }
          v = v.parentElement;
        }
        if (m) {
          o(e, g) ||
            h.push(function () {
              e.className = (e.className + ' ' + g).trim();
            });
          var y = parseInt(e.getAttribute('data-start') || '1');
          r('.line-numbers-rows > span', e).forEach(function (e, t) {
            var i = t + y;
            e.onclick = function () {
              (n = !1),
                (location.hash = p + '.' + i),
                setTimeout(function () {
                  n = !0;
                }, 1);
            };
          });
        }
      }
      return function () {
        h.forEach(a);
      };
    }
    function l() {
      var e = location.hash.slice(1);
      r('.temporary.line-highlight').forEach(function (e) {
        e.parentNode.removeChild(e);
      });
      var t = (e.match(/\.([\d,-]+)$/) || [, ''])[1];
      if (t && !document.getElementById(e)) {
        var i = e.slice(0, e.lastIndexOf('.')),
          o = document.getElementById(i);
        o &&
          (o.hasAttribute('data-line') || o.setAttribute('data-line', ''),
          s(o, t, 'temporary ')(),
          n &&
            document
              .querySelector('.temporary.line-highlight')
              .scrollIntoView());
      }
    }
  })(),
  (function () {
    if ('undefined' != typeof self && self.Prism && self.document) {
      var e = 'line-numbers',
        t = /\n(?!$)/g,
        n = (Prism.plugins.lineNumbers = {
          getLine: function (t, n) {
            if ('PRE' === t.tagName && t.classList.contains(e)) {
              var i = t.querySelector('.line-numbers-rows'),
                r = parseInt(t.getAttribute('data-start'), 10) || 1,
                o = r + (i.children.length - 1);
              return n < r && (n = r), n > o && (n = o), i.children[n - r];
            }
          },
          resize: function (e) {
            o([e]);
          },
          assumeViewportIndependence: !0,
        }),
        i = function (e) {
          return e
            ? window.getComputedStyle
              ? getComputedStyle(e)
              : e.currentStyle || null
            : null;
        },
        r = void 0;
      window.addEventListener('resize', function () {
        (n.assumeViewportIndependence && r === window.innerWidth) ||
          ((r = window.innerWidth),
          o(
            Array.prototype.slice.call(
              document.querySelectorAll('pre.line-numbers'),
            ),
          ));
      }),
        Prism.hooks.add('complete', function (n) {
          if (n.code) {
            var i = n.element,
              r = i.parentNode;
            if (
              r &&
              /pre/i.test(r.nodeName) &&
              !i.querySelector('.line-numbers-rows') &&
              Prism.util.isActive(i, e)
            ) {
              i.classList.remove(e), r.classList.add(e);
              var a,
                s = n.code.match(t),
                l = new Array((s ? s.length + 1 : 1) + 1).join('<span></span>');
              (a = document.createElement('span')).setAttribute(
                'aria-hidden',
                'true',
              ),
                (a.className = 'line-numbers-rows'),
                (a.innerHTML = l),
                r.hasAttribute('data-start') &&
                  (r.style.counterReset =
                    'linenumber ' +
                    (parseInt(r.getAttribute('data-start'), 10) - 1)),
                n.element.appendChild(a),
                o([r]),
                Prism.hooks.run('line-numbers', n);
            }
          }
        }),
        Prism.hooks.add('line-numbers', function (e) {
          (e.plugins = e.plugins || {}), (e.plugins.lineNumbers = !0);
        });
    }
    function o(e) {
      if (
        0 !=
        (e = e.filter(function (e) {
          var t = i(e)['white-space'];
          return 'pre-wrap' === t || 'pre-line' === t;
        })).length
      ) {
        var n = e
          .map(function (e) {
            var n = e.querySelector('code'),
              i = e.querySelector('.line-numbers-rows');
            if (n && i) {
              var r = e.querySelector('.line-numbers-sizer'),
                o = n.textContent.split(t);
              r ||
                (((r = document.createElement('span')).className =
                  'line-numbers-sizer'),
                n.appendChild(r)),
                (r.innerHTML = '0'),
                (r.style.display = 'block');
              var a = r.getBoundingClientRect().height;
              return (
                (r.innerHTML = ''),
                {
                  element: e,
                  lines: o,
                  lineHeights: [],
                  oneLinerHeight: a,
                  sizer: r,
                }
              );
            }
          })
          .filter(Boolean);
        n.forEach(function (e) {
          var t = e.sizer,
            n = e.lines,
            i = e.lineHeights,
            r = e.oneLinerHeight;
          (i[n.length - 1] = void 0),
            n.forEach(function (e, n) {
              if (e && e.length > 1) {
                var o = t.appendChild(document.createElement('span'));
                (o.style.display = 'block'), (o.textContent = e);
              } else i[n] = r;
            });
        }),
          n.forEach(function (e) {
            for (
              var t = e.sizer, n = e.lineHeights, i = 0, r = 0;
              r < n.length;
              r++
            )
              void 0 === n[r] &&
                (n[r] = t.children[i++].getBoundingClientRect().height);
          }),
          n.forEach(function (e) {
            var t = e.sizer,
              n = e.element.querySelector('.line-numbers-rows');
            (t.style.display = 'none'),
              (t.innerHTML = ''),
              e.lineHeights.forEach(function (e, t) {
                n.children[t].style.height = e + 'px';
              });
          });
      }
    }
  })(),
  (Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: {
      pattern:
        /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        'internal-subset': {
          pattern: /(\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null,
        },
        string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
        punctuation: /^<!|>$|[[\]]/,
        'doctype-tag': /^DOCTYPE/,
        name: /[^\s<>'"]+/,
      },
    },
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
      pattern:
        /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
        },
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
          },
        },
        punctuation: /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: { namespace: /^[^\s>\/:]+:/ },
        },
      },
    },
    entity: [
      { pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
      /&#x?[\da-f]{1,8};/i,
    ],
  }),
  (Prism.languages.markup.tag.inside['attr-value'].inside.entity =
    Prism.languages.markup.entity),
  (Prism.languages.markup.doctype.inside['internal-subset'].inside =
    Prism.languages.markup),
  Prism.hooks.add('wrap', function (e) {
    'entity' === e.type &&
      (e.attributes.title = e.content.replace(/&amp;/, '&'));
  }),
  Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    value: function (e, t) {
      var n = {};
      (n['language-' + t] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: Prism.languages[t],
      }),
        (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
      var i = {
        'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n },
      };
      i['language-' + t] = { pattern: /[\s\S]+/, inside: Prism.languages[t] };
      var r = {};
      (r[e] = {
        pattern: RegExp(
          '(<__[^]*?>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)'.replace(
            /__/g,
            function () {
              return e;
            },
          ),
          'i',
        ),
        lookbehind: !0,
        greedy: !0,
        inside: i,
      }),
        Prism.languages.insertBefore('markup', 'cdata', r);
    },
  }),
  (Prism.languages.html = Prism.languages.markup),
  (Prism.languages.mathml = Prism.languages.markup),
  (Prism.languages.svg = Prism.languages.markup),
  (Prism.languages.xml = Prism.languages.extend('markup', {})),
  (Prism.languages.ssml = Prism.languages.xml),
  (Prism.languages.atom = Prism.languages.xml),
  (Prism.languages.rss = Prism.languages.xml),
  (function (e) {
    function t(e) {
      return (
        (e = e.replace(/<inner>/g, function () {
          return '(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))';
        })),
        RegExp('((?:^|[^\\\\])(?:\\\\{2})*)(?:' + e + ')')
      );
    }
    var n = '(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+',
      i = '\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|$)'.replace(/__/g, function () {
        return n;
      }),
      r =
        '\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\n|\r\n?)';
    (e.languages.markdown = e.languages.extend('markup', {})),
      e.languages.insertBefore('markdown', 'prolog', {
        blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
        table: {
          pattern: RegExp('^' + i + r + '(?:' + i + ')*', 'm'),
          inside: {
            'table-data-rows': {
              pattern: RegExp('^(' + i + r + ')(?:' + i + ')*$'),
              lookbehind: !0,
              inside: {
                'table-data': {
                  pattern: RegExp(n),
                  inside: e.languages.markdown,
                },
                punctuation: /\|/,
              },
            },
            'table-line': {
              pattern: RegExp('^(' + i + ')' + r + '$'),
              lookbehind: !0,
              inside: { punctuation: /\||:?-{3,}:?/ },
            },
            'table-header-row': {
              pattern: RegExp('^' + i + '$'),
              inside: {
                'table-header': {
                  pattern: RegExp(n),
                  alias: 'important',
                  inside: e.languages.markdown,
                },
                punctuation: /\|/,
              },
            },
          },
        },
        code: [
          {
            pattern:
              /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
            lookbehind: !0,
            alias: 'keyword',
          },
          { pattern: /``.+?``|`[^`\r\n]+`/, alias: 'keyword' },
          {
            pattern: /^```[\s\S]*?^```$/m,
            greedy: !0,
            inside: {
              'code-block': {
                pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                lookbehind: !0,
              },
              'code-language': { pattern: /^(```).+/, lookbehind: !0 },
              punctuation: /```/,
            },
          },
        ],
        title: [
          {
            pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
            alias: 'important',
            inside: { punctuation: /==+$|--+$/ },
          },
          {
            pattern: /(^\s*)#+.+/m,
            lookbehind: !0,
            alias: 'important',
            inside: { punctuation: /^#+|#+$/ },
          },
        ],
        hr: {
          pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
          lookbehind: !0,
          alias: 'punctuation',
        },
        list: {
          pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
          lookbehind: !0,
          alias: 'punctuation',
        },
        'url-reference': {
          pattern:
            /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
          inside: {
            variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
            string:
              /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
            punctuation: /^[\[\]!:]|[<>]/,
          },
          alias: 'url',
        },
        bold: {
          pattern: t(
            '\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*',
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: {
              pattern: /(^..)[\s\S]+(?=..$)/,
              lookbehind: !0,
              inside: {},
            },
            punctuation: /\*\*|__/,
          },
        },
        italic: {
          pattern: t(
            '\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*',
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: {
              pattern: /(^.)[\s\S]+(?=.$)/,
              lookbehind: !0,
              inside: {},
            },
            punctuation: /[*_]/,
          },
        },
        strike: {
          pattern: t('(~~?)(?:(?!~)<inner>)+?\\2'),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: {
              pattern: /(^~~?)[\s\S]+(?=\1$)/,
              lookbehind: !0,
              inside: {},
            },
            punctuation: /~~?/,
          },
        },
        url: {
          pattern: t(
            '!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)| ?\\[(?:(?!\\])<inner>)+\\])',
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            variable: { pattern: /(\[)[^\]]+(?=\]$)/, lookbehind: !0 },
            content: {
              pattern: /(^!?\[)[^\]]+(?=\])/,
              lookbehind: !0,
              inside: {},
            },
            string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ },
          },
        },
      }),
      ['url', 'bold', 'italic', 'strike'].forEach(function (t) {
        ['url', 'bold', 'italic', 'strike'].forEach(function (n) {
          t !== n &&
            (e.languages.markdown[t].inside.content.inside[n] =
              e.languages.markdown[n]);
        });
      }),
      e.hooks.add('after-tokenize', function (e) {
        ('markdown' !== e.language && 'md' !== e.language) ||
          (function e(t) {
            if (t && 'string' != typeof t)
              for (var n = 0, i = t.length; n < i; n++) {
                var r = t[n];
                if ('code' === r.type) {
                  var o = r.content[1],
                    a = r.content[3];
                  if (
                    o &&
                    a &&
                    'code-language' === o.type &&
                    'code-block' === a.type &&
                    'string' == typeof o.content
                  ) {
                    var s = o.content
                        .replace(/\b#/g, 'sharp')
                        .replace(/\b\+\+/g, 'pp'),
                      l =
                        'language-' +
                        (s = (/[a-z][\w-]*/i.exec(s) || [''])[0].toLowerCase());
                    a.alias
                      ? 'string' == typeof a.alias
                        ? (a.alias = [a.alias, l])
                        : a.alias.push(l)
                      : (a.alias = [l]);
                  }
                } else e(r.content);
              }
          })(e.tokens);
      }),
      e.hooks.add('wrap', function (t) {
        if ('code-block' === t.type) {
          for (var n = '', i = 0, r = t.classes.length; i < r; i++) {
            var o = /language-(.+)/.exec(t.classes[i]);
            if (o) {
              n = o[1];
              break;
            }
          }
          var a = e.languages[n];
          if (a) {
            var s = t.content.replace(/&lt;/g, '<').replace(/&amp;/g, '&');
            t.content = e.highlight(s, a, n);
          } else if (n && 'none' !== n && e.plugins.autoloader) {
            var l =
              'md-' +
              new Date().valueOf() +
              '-' +
              Math.floor(1e16 * Math.random());
            (t.attributes.id = l),
              e.plugins.autoloader.loadLanguages(n, function () {
                var t = document.getElementById(l);
                t &&
                  (t.innerHTML = e.highlight(t.textContent, e.languages[n], n));
              });
          }
        }
      }),
      (e.languages.md = e.languages.markdown);
  })(Prism),
  (function (e) {
    (e.languages.typescript = e.languages.extend('javascript', {
      'class-name': {
        pattern:
          /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      keyword:
        /\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
      builtin:
        /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
    })),
      delete e.languages.typescript.parameter;
    var t = e.languages.extend('typescript', {});
    delete t['class-name'],
      (e.languages.typescript['class-name'].inside = t),
      e.languages.insertBefore('typescript', 'function', {
        'generic-function': {
          pattern:
            /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
          greedy: !0,
          inside: {
            function: /^#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,
            generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: t },
          },
        },
      }),
      (e.languages.ts = e.languages.typescript);
  })(Prism);
