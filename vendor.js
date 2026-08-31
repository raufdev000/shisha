var fg = Object.defineProperty;
var cg = (s, e, i) => e in s ? fg(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : s[e] = i;
var Se = (s, e, i) => cg(s, typeof e != "symbol" ? e + "" : e, i);
function hg(s) {
    return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s
}
var Tu = {
    exports: {}
};
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
var dg = Tu.exports, rc;
function pg() {
    return rc || (rc = 1,
    function(s) {
        (function(e, i) {
            s.exports = e.document ? i(e, !0) : function(t) {
                if (!t.document)
                    throw new Error("jQuery requires a window with a document");
                return i(t)
            }
        }
        )(typeof window < "u" ? window : dg, function(e, i) {
            var t = []
              , r = Object.getPrototypeOf
              , n = t.slice
              , u = t.flat ? function(o) {
                return t.flat.call(o)
            }
            : function(o) {
                return t.concat.apply([], o)
            }
              , l = t.push
              , c = t.indexOf
              , p = {}
              , _ = p.toString
              , x = p.hasOwnProperty
              , D = x.toString
              , h = D.call(Object)
              , b = {}
              , v = function(a) {
                return typeof a == "function" && typeof a.nodeType != "number" && typeof a.item != "function"
            }
              , E = function(a) {
                return a != null && a === a.window
            }
              , C = e.document
              , L = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };
            function A(o, a, d) {
                d = d || C;
                var g, m, y = d.createElement("script");
                if (y.text = o,
                a)
                    for (g in L)
                        m = a[g] || a.getAttribute && a.getAttribute(g),
                        m && y.setAttribute(g, m);
                d.head.appendChild(y).parentNode.removeChild(y)
            }
            function P(o) {
                return o == null ? o + "" : typeof o == "object" || typeof o == "function" ? p[_.call(o)] || "object" : typeof o
            }
            var M = "3.7.1"
              , z = /HTML$/i
              , f = function(o, a) {
                return new f.fn.init(o,a)
            };
            f.fn = f.prototype = {
                jquery: M,
                constructor: f,
                length: 0,
                toArray: function() {
                    return n.call(this)
                },
                get: function(o) {
                    return o == null ? n.call(this) : o < 0 ? this[o + this.length] : this[o]
                },
                pushStack: function(o) {
                    var a = f.merge(this.constructor(), o);
                    return a.prevObject = this,
                    a
                },
                each: function(o) {
                    return f.each(this, o)
                },
                map: function(o) {
                    return this.pushStack(f.map(this, function(a, d) {
                        return o.call(a, d, a)
                    }))
                },
                slice: function() {
                    return this.pushStack(n.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                even: function() {
                    return this.pushStack(f.grep(this, function(o, a) {
                        return (a + 1) % 2
                    }))
                },
                odd: function() {
                    return this.pushStack(f.grep(this, function(o, a) {
                        return a % 2
                    }))
                },
                eq: function(o) {
                    var a = this.length
                      , d = +o + (o < 0 ? a : 0);
                    return this.pushStack(d >= 0 && d < a ? [this[d]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: l,
                sort: t.sort,
                splice: t.splice
            },
            f.extend = f.fn.extend = function() {
                var o, a, d, g, m, y, w = arguments[0] || {}, k = 1, S = arguments.length, N = !1;
                for (typeof w == "boolean" && (N = w,
                w = arguments[k] || {},
                k++),
                typeof w != "object" && !v(w) && (w = {}),
                k === S && (w = this,
                k--); k < S; k++)
                    if ((o = arguments[k]) != null)
                        for (a in o)
                            g = o[a],
                            !(a === "__proto__" || w === g) && (N && g && (f.isPlainObject(g) || (m = Array.isArray(g))) ? (d = w[a],
                            m && !Array.isArray(d) ? y = [] : !m && !f.isPlainObject(d) ? y = {} : y = d,
                            m = !1,
                            w[a] = f.extend(N, y, g)) : g !== void 0 && (w[a] = g));
                return w
            }
            ,
            f.extend({
                expando: "jQuery" + (M + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(o) {
                    throw new Error(o)
                },
                noop: function() {},
                isPlainObject: function(o) {
                    var a, d;
                    return !o || _.call(o) !== "[object Object]" ? !1 : (a = r(o),
                    a ? (d = x.call(a, "constructor") && a.constructor,
                    typeof d == "function" && D.call(d) === h) : !0)
                },
                isEmptyObject: function(o) {
                    var a;
                    for (a in o)
                        return !1;
                    return !0
                },
                globalEval: function(o, a, d) {
                    A(o, {
                        nonce: a && a.nonce
                    }, d)
                },
                each: function(o, a) {
                    var d, g = 0;
                    if (q(o))
                        for (d = o.length; g < d && a.call(o[g], g, o[g]) !== !1; g++)
                            ;
                    else
                        for (g in o)
                            if (a.call(o[g], g, o[g]) === !1)
                                break;
                    return o
                },
                text: function(o) {
                    var a, d = "", g = 0, m = o.nodeType;
                    if (!m)
                        for (; a = o[g++]; )
                            d += f.text(a);
                    return m === 1 || m === 11 ? o.textContent : m === 9 ? o.documentElement.textContent : m === 3 || m === 4 ? o.nodeValue : d
                },
                makeArray: function(o, a) {
                    var d = a || [];
                    return o != null && (q(Object(o)) ? f.merge(d, typeof o == "string" ? [o] : o) : l.call(d, o)),
                    d
                },
                inArray: function(o, a, d) {
                    return a == null ? -1 : c.call(a, o, d)
                },
                isXMLDoc: function(o) {
                    var a = o && o.namespaceURI
                      , d = o && (o.ownerDocument || o).documentElement;
                    return !z.test(a || d && d.nodeName || "HTML")
                },
                merge: function(o, a) {
                    for (var d = +a.length, g = 0, m = o.length; g < d; g++)
                        o[m++] = a[g];
                    return o.length = m,
                    o
                },
                grep: function(o, a, d) {
                    for (var g, m = [], y = 0, w = o.length, k = !d; y < w; y++)
                        g = !a(o[y], y),
                        g !== k && m.push(o[y]);
                    return m
                },
                map: function(o, a, d) {
                    var g, m, y = 0, w = [];
                    if (q(o))
                        for (g = o.length; y < g; y++)
                            m = a(o[y], y, d),
                            m != null && w.push(m);
                    else
                        for (y in o)
                            m = a(o[y], y, d),
                            m != null && w.push(m);
                    return u(w)
                },
                guid: 1,
                support: b
            }),
            typeof Symbol == "function" && (f.fn[Symbol.iterator] = t[Symbol.iterator]),
            f.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(o, a) {
                p["[object " + a + "]"] = a.toLowerCase()
            });
            function q(o) {
                var a = !!o && "length"in o && o.length
                  , d = P(o);
                return v(o) || E(o) ? !1 : d === "array" || a === 0 || typeof a == "number" && a > 0 && a - 1 in o
            }
            function H(o, a) {
                return o.nodeName && o.nodeName.toLowerCase() === a.toLowerCase()
            }
            var I = t.pop
              , ee = t.sort
              , K = t.splice
              , G = "[\\x20\\t\\r\\n\\f]"
              , ne = new RegExp("^" + G + "+|((?:^|[^\\\\])(?:\\\\.)*)" + G + "+$","g");
            f.contains = function(o, a) {
                var d = a && a.parentNode;
                return o === d || !!(d && d.nodeType === 1 && (o.contains ? o.contains(d) : o.compareDocumentPosition && o.compareDocumentPosition(d) & 16))
            }
            ;
            var se = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
            function ae(o, a) {
                return a ? o === "\0" ? "�" : o.slice(0, -1) + "\\" + o.charCodeAt(o.length - 1).toString(16) + " " : "\\" + o
            }
            f.escapeSelector = function(o) {
                return (o + "").replace(se, ae)
            }
            ;
            var oe = C
              , Ce = l;
            (function() {
                var o, a, d, g, m, y = Ce, w, k, S, N, Q, Z = f.expando, X = 0, ue = 0, Be = ou(), st = ou(), qe = ou(), oi = ou(), jt = function(T, O) {
                    return T === O && (m = !0),
                    0
                }, yr = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", vr = "(?:\\\\[\\da-fA-F]{1,6}" + G + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", et = "\\[" + G + "*(" + vr + ")(?:" + G + "*([*^$|!~]?=)" + G + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + vr + "))|)" + G + "*\\]", An = ":(" + vr + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + et + ")*)|.*)\\)|)", at = new RegExp(G + "+","g"), Ft = new RegExp("^" + G + "*," + G + "*"), Jo = new RegExp("^" + G + "*([>+~]|" + G + ")" + G + "*"), Ca = new RegExp(G + "|>"), Dr = new RegExp(An), Zo = new RegExp("^" + vr + "$"), xr = {
                    ID: new RegExp("^#(" + vr + ")"),
                    CLASS: new RegExp("^\\.(" + vr + ")"),
                    TAG: new RegExp("^(" + vr + "|[*])"),
                    ATTR: new RegExp("^" + et),
                    PSEUDO: new RegExp("^" + An),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + G + "*(even|odd|(([+-]|)(\\d*)n|)" + G + "*(?:([+-]|)" + G + "*(\\d+)|))" + G + "*\\)|)","i"),
                    bool: new RegExp("^(?:" + yr + ")$","i"),
                    needsContext: new RegExp("^" + G + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + G + "*((?:-\\d)?\\d*)" + G + "*\\)|)(?=[^-]|$)","i")
                }, en = /^(?:input|select|textarea|button)$/i, tn = /^h\d$/i, Zi = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Ea = /[+~]/, Ir = new RegExp("\\\\[\\da-fA-F]{1,6}" + G + "?|\\\\([^\\r\\n\\f])","g"), Hr = function(T, O) {
                    var j = "0x" + T.slice(1) - 65536;
                    return O || (j < 0 ? String.fromCharCode(j + 65536) : String.fromCharCode(j >> 10 | 55296, j & 1023 | 56320))
                }, rg = function() {
                    rn()
                }, ng = uu(function(T) {
                    return T.disabled === !0 && H(T, "fieldset")
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
                function og() {
                    try {
                        return w.activeElement
                    } catch {}
                }
                try {
                    y.apply(t = n.call(oe.childNodes), oe.childNodes),
                    t[oe.childNodes.length].nodeType
                } catch {
                    y = {
                        apply: function(O, j) {
                            Ce.apply(O, n.call(j))
                        },
                        call: function(O) {
                            Ce.apply(O, n.call(arguments, 1))
                        }
                    }
                }
                function dt(T, O, j, V) {
                    var J, fe, pe, Ee, ge, Qe, Re, He = O && O.ownerDocument, Ke = O ? O.nodeType : 9;
                    if (j = j || [],
                    typeof T != "string" || !T || Ke !== 1 && Ke !== 9 && Ke !== 11)
                        return j;
                    if (!V && (rn(O),
                    O = O || w,
                    S)) {
                        if (Ke !== 11 && (ge = Zi.exec(T)))
                            if (J = ge[1]) {
                                if (Ke === 9)
                                    if (pe = O.getElementById(J)) {
                                        if (pe.id === J)
                                            return y.call(j, pe),
                                            j
                                    } else
                                        return j;
                                else if (He && (pe = He.getElementById(J)) && dt.contains(O, pe) && pe.id === J)
                                    return y.call(j, pe),
                                    j
                            } else {
                                if (ge[2])
                                    return y.apply(j, O.getElementsByTagName(T)),
                                    j;
                                if ((J = ge[3]) && O.getElementsByClassName)
                                    return y.apply(j, O.getElementsByClassName(J)),
                                    j
                            }
                        if (!oi[T + " "] && (!N || !N.test(T))) {
                            if (Re = T,
                            He = O,
                            Ke === 1 && (Ca.test(T) || Jo.test(T))) {
                                for (He = Ea.test(T) && Ta(O.parentNode) || O,
                                (He != O || !b.scope) && ((Ee = O.getAttribute("id")) ? Ee = f.escapeSelector(Ee) : O.setAttribute("id", Ee = Z)),
                                Qe = es(T),
                                fe = Qe.length; fe--; )
                                    Qe[fe] = (Ee ? "#" + Ee : ":scope") + " " + su(Qe[fe]);
                                Re = Qe.join(",")
                            }
                            try {
                                return y.apply(j, He.querySelectorAll(Re)),
                                j
                            } catch {
                                oi(T, !0)
                            } finally {
                                Ee === Z && O.removeAttribute("id")
                            }
                        }
                    }
                    return ic(T.replace(ne, "$1"), O, j, V)
                }
                function ou() {
                    var T = [];
                    function O(j, V) {
                        return T.push(j + " ") > a.cacheLength && delete O[T.shift()],
                        O[j + " "] = V
                    }
                    return O
                }
                function lr(T) {
                    return T[Z] = !0,
                    T
                }
                function so(T) {
                    var O = w.createElement("fieldset");
                    try {
                        return !!T(O)
                    } catch {
                        return !1
                    } finally {
                        O.parentNode && O.parentNode.removeChild(O),
                        O = null
                    }
                }
                function sg(T) {
                    return function(O) {
                        return H(O, "input") && O.type === T
                    }
                }
                function ug(T) {
                    return function(O) {
                        return (H(O, "input") || H(O, "button")) && O.type === T
                    }
                }
                function ec(T) {
                    return function(O) {
                        return "form"in O ? O.parentNode && O.disabled === !1 ? "label"in O ? "label"in O.parentNode ? O.parentNode.disabled === T : O.disabled === T : O.isDisabled === T || O.isDisabled !== !T && ng(O) === T : O.disabled === T : "label"in O ? O.disabled === T : !1
                    }
                }
                function Mn(T) {
                    return lr(function(O) {
                        return O = +O,
                        lr(function(j, V) {
                            for (var J, fe = T([], j.length, O), pe = fe.length; pe--; )
                                j[J = fe[pe]] && (j[J] = !(V[J] = j[J]))
                        })
                    })
                }
                function Ta(T) {
                    return T && typeof T.getElementsByTagName < "u" && T
                }
                function rn(T) {
                    var O, j = T ? T.ownerDocument || T : oe;
                    return j == w || j.nodeType !== 9 || !j.documentElement || (w = j,
                    k = w.documentElement,
                    S = !f.isXMLDoc(w),
                    Q = k.matches || k.webkitMatchesSelector || k.msMatchesSelector,
                    k.msMatchesSelector && oe != w && (O = w.defaultView) && O.top !== O && O.addEventListener("unload", rg),
                    b.getById = so(function(V) {
                        return k.appendChild(V).id = f.expando,
                        !w.getElementsByName || !w.getElementsByName(f.expando).length
                    }),
                    b.disconnectedMatch = so(function(V) {
                        return Q.call(V, "*")
                    }),
                    b.scope = so(function() {
                        return w.querySelectorAll(":scope")
                    }),
                    b.cssHas = so(function() {
                        try {
                            return w.querySelector(":has(*,:jqfake)"),
                            !1
                        } catch {
                            return !0
                        }
                    }),
                    b.getById ? (a.filter.ID = function(V) {
                        var J = V.replace(Ir, Hr);
                        return function(fe) {
                            return fe.getAttribute("id") === J
                        }
                    }
                    ,
                    a.find.ID = function(V, J) {
                        if (typeof J.getElementById < "u" && S) {
                            var fe = J.getElementById(V);
                            return fe ? [fe] : []
                        }
                    }
                    ) : (a.filter.ID = function(V) {
                        var J = V.replace(Ir, Hr);
                        return function(fe) {
                            var pe = typeof fe.getAttributeNode < "u" && fe.getAttributeNode("id");
                            return pe && pe.value === J
                        }
                    }
                    ,
                    a.find.ID = function(V, J) {
                        if (typeof J.getElementById < "u" && S) {
                            var fe, pe, Ee, ge = J.getElementById(V);
                            if (ge) {
                                if (fe = ge.getAttributeNode("id"),
                                fe && fe.value === V)
                                    return [ge];
                                for (Ee = J.getElementsByName(V),
                                pe = 0; ge = Ee[pe++]; )
                                    if (fe = ge.getAttributeNode("id"),
                                    fe && fe.value === V)
                                        return [ge]
                            }
                            return []
                        }
                    }
                    ),
                    a.find.TAG = function(V, J) {
                        return typeof J.getElementsByTagName < "u" ? J.getElementsByTagName(V) : J.querySelectorAll(V)
                    }
                    ,
                    a.find.CLASS = function(V, J) {
                        if (typeof J.getElementsByClassName < "u" && S)
                            return J.getElementsByClassName(V)
                    }
                    ,
                    N = [],
                    so(function(V) {
                        var J;
                        k.appendChild(V).innerHTML = "<a id='" + Z + "' href='' disabled='disabled'></a><select id='" + Z + "-\r\\' disabled='disabled'><option selected=''></option></select>",
                        V.querySelectorAll("[selected]").length || N.push("\\[" + G + "*(?:value|" + yr + ")"),
                        V.querySelectorAll("[id~=" + Z + "-]").length || N.push("~="),
                        V.querySelectorAll("a#" + Z + "+*").length || N.push(".#.+[+~]"),
                        V.querySelectorAll(":checked").length || N.push(":checked"),
                        J = w.createElement("input"),
                        J.setAttribute("type", "hidden"),
                        V.appendChild(J).setAttribute("name", "D"),
                        k.appendChild(V).disabled = !0,
                        V.querySelectorAll(":disabled").length !== 2 && N.push(":enabled", ":disabled"),
                        J = w.createElement("input"),
                        J.setAttribute("name", ""),
                        V.appendChild(J),
                        V.querySelectorAll("[name='']").length || N.push("\\[" + G + "*name" + G + "*=" + G + `*(?:''|"")`)
                    }),
                    b.cssHas || N.push(":has"),
                    N = N.length && new RegExp(N.join("|")),
                    jt = function(V, J) {
                        if (V === J)
                            return m = !0,
                            0;
                        var fe = !V.compareDocumentPosition - !J.compareDocumentPosition;
                        return fe || (fe = (V.ownerDocument || V) == (J.ownerDocument || J) ? V.compareDocumentPosition(J) : 1,
                        fe & 1 || !b.sortDetached && J.compareDocumentPosition(V) === fe ? V === w || V.ownerDocument == oe && dt.contains(oe, V) ? -1 : J === w || J.ownerDocument == oe && dt.contains(oe, J) ? 1 : g ? c.call(g, V) - c.call(g, J) : 0 : fe & 4 ? -1 : 1)
                    }
                    ),
                    w
                }
                dt.matches = function(T, O) {
                    return dt(T, null, null, O)
                }
                ,
                dt.matchesSelector = function(T, O) {
                    if (rn(T),
                    S && !oi[O + " "] && (!N || !N.test(O)))
                        try {
                            var j = Q.call(T, O);
                            if (j || b.disconnectedMatch || T.document && T.document.nodeType !== 11)
                                return j
                        } catch {
                            oi(O, !0)
                        }
                    return dt(O, w, null, [T]).length > 0
                }
                ,
                dt.contains = function(T, O) {
                    return (T.ownerDocument || T) != w && rn(T),
                    f.contains(T, O)
                }
                ,
                dt.attr = function(T, O) {
                    (T.ownerDocument || T) != w && rn(T);
                    var j = a.attrHandle[O.toLowerCase()]
                      , V = j && x.call(a.attrHandle, O.toLowerCase()) ? j(T, O, !S) : void 0;
                    return V !== void 0 ? V : T.getAttribute(O)
                }
                ,
                dt.error = function(T) {
                    throw new Error("Syntax error, unrecognized expression: " + T)
                }
                ,
                f.uniqueSort = function(T) {
                    var O, j = [], V = 0, J = 0;
                    if (m = !b.sortStable,
                    g = !b.sortStable && n.call(T, 0),
                    ee.call(T, jt),
                    m) {
                        for (; O = T[J++]; )
                            O === T[J] && (V = j.push(J));
                        for (; V--; )
                            K.call(T, j[V], 1)
                    }
                    return g = null,
                    T
                }
                ,
                f.fn.uniqueSort = function() {
                    return this.pushStack(f.uniqueSort(n.apply(this)))
                }
                ,
                a = f.expr = {
                    cacheLength: 50,
                    createPseudo: lr,
                    match: xr,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(T) {
                            return T[1] = T[1].replace(Ir, Hr),
                            T[3] = (T[3] || T[4] || T[5] || "").replace(Ir, Hr),
                            T[2] === "~=" && (T[3] = " " + T[3] + " "),
                            T.slice(0, 4)
                        },
                        CHILD: function(T) {
                            return T[1] = T[1].toLowerCase(),
                            T[1].slice(0, 3) === "nth" ? (T[3] || dt.error(T[0]),
                            T[4] = +(T[4] ? T[5] + (T[6] || 1) : 2 * (T[3] === "even" || T[3] === "odd")),
                            T[5] = +(T[7] + T[8] || T[3] === "odd")) : T[3] && dt.error(T[0]),
                            T
                        },
                        PSEUDO: function(T) {
                            var O, j = !T[6] && T[2];
                            return xr.CHILD.test(T[0]) ? null : (T[3] ? T[2] = T[4] || T[5] || "" : j && Dr.test(j) && (O = es(j, !0)) && (O = j.indexOf(")", j.length - O) - j.length) && (T[0] = T[0].slice(0, O),
                            T[2] = j.slice(0, O)),
                            T.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(T) {
                            var O = T.replace(Ir, Hr).toLowerCase();
                            return T === "*" ? function() {
                                return !0
                            }
                            : function(j) {
                                return H(j, O)
                            }
                        },
                        CLASS: function(T) {
                            var O = Be[T + " "];
                            return O || (O = new RegExp("(^|" + G + ")" + T + "(" + G + "|$)")) && Be(T, function(j) {
                                return O.test(typeof j.className == "string" && j.className || typeof j.getAttribute < "u" && j.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(T, O, j) {
                            return function(V) {
                                var J = dt.attr(V, T);
                                return J == null ? O === "!=" : O ? (J += "",
                                O === "=" ? J === j : O === "!=" ? J !== j : O === "^=" ? j && J.indexOf(j) === 0 : O === "*=" ? j && J.indexOf(j) > -1 : O === "$=" ? j && J.slice(-j.length) === j : O === "~=" ? (" " + J.replace(at, " ") + " ").indexOf(j) > -1 : O === "|=" ? J === j || J.slice(0, j.length + 1) === j + "-" : !1) : !0
                            }
                        },
                        CHILD: function(T, O, j, V, J) {
                            var fe = T.slice(0, 3) !== "nth"
                              , pe = T.slice(-4) !== "last"
                              , Ee = O === "of-type";
                            return V === 1 && J === 0 ? function(ge) {
                                return !!ge.parentNode
                            }
                            : function(ge, Qe, Re) {
                                var He, Ke, Pe, vt, Mi, hi = fe !== pe ? "nextSibling" : "previousSibling", er = ge.parentNode, br = Ee && ge.nodeName.toLowerCase(), uo = !Re && !Ee, bi = !1;
                                if (er) {
                                    if (fe) {
                                        for (; hi; ) {
                                            for (Pe = ge; Pe = Pe[hi]; )
                                                if (Ee ? H(Pe, br) : Pe.nodeType === 1)
                                                    return !1;
                                            Mi = hi = T === "only" && !Mi && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (Mi = [pe ? er.firstChild : er.lastChild],
                                    pe && uo) {
                                        for (Ke = er[Z] || (er[Z] = {}),
                                        He = Ke[T] || [],
                                        vt = He[0] === X && He[1],
                                        bi = vt && He[2],
                                        Pe = vt && er.childNodes[vt]; Pe = ++vt && Pe && Pe[hi] || (bi = vt = 0) || Mi.pop(); )
                                            if (Pe.nodeType === 1 && ++bi && Pe === ge) {
                                                Ke[T] = [X, vt, bi];
                                                break
                                            }
                                    } else if (uo && (Ke = ge[Z] || (ge[Z] = {}),
                                    He = Ke[T] || [],
                                    vt = He[0] === X && He[1],
                                    bi = vt),
                                    bi === !1)
                                        for (; (Pe = ++vt && Pe && Pe[hi] || (bi = vt = 0) || Mi.pop()) && !((Ee ? H(Pe, br) : Pe.nodeType === 1) && ++bi && (uo && (Ke = Pe[Z] || (Pe[Z] = {}),
                                        Ke[T] = [X, bi]),
                                        Pe === ge)); )
                                            ;
                                    return bi -= J,
                                    bi === V || bi % V === 0 && bi / V >= 0
                                }
                            }
                        },
                        PSEUDO: function(T, O) {
                            var j, V = a.pseudos[T] || a.setFilters[T.toLowerCase()] || dt.error("unsupported pseudo: " + T);
                            return V[Z] ? V(O) : V.length > 1 ? (j = [T, T, "", O],
                            a.setFilters.hasOwnProperty(T.toLowerCase()) ? lr(function(J, fe) {
                                for (var pe, Ee = V(J, O), ge = Ee.length; ge--; )
                                    pe = c.call(J, Ee[ge]),
                                    J[pe] = !(fe[pe] = Ee[ge])
                            }) : function(J) {
                                return V(J, 0, j)
                            }
                            ) : V
                        }
                    },
                    pseudos: {
                        not: lr(function(T) {
                            var O = []
                              , j = []
                              , V = Pa(T.replace(ne, "$1"));
                            return V[Z] ? lr(function(J, fe, pe, Ee) {
                                for (var ge, Qe = V(J, null, Ee, []), Re = J.length; Re--; )
                                    (ge = Qe[Re]) && (J[Re] = !(fe[Re] = ge))
                            }) : function(J, fe, pe) {
                                return O[0] = J,
                                V(O, null, pe, j),
                                O[0] = null,
                                !j.pop()
                            }
                        }),
                        has: lr(function(T) {
                            return function(O) {
                                return dt(T, O).length > 0
                            }
                        }),
                        contains: lr(function(T) {
                            return T = T.replace(Ir, Hr),
                            function(O) {
                                return (O.textContent || f.text(O)).indexOf(T) > -1
                            }
                        }),
                        lang: lr(function(T) {
                            return Zo.test(T || "") || dt.error("unsupported lang: " + T),
                            T = T.replace(Ir, Hr).toLowerCase(),
                            function(O) {
                                var j;
                                do
                                    if (j = S ? O.lang : O.getAttribute("xml:lang") || O.getAttribute("lang"))
                                        return j = j.toLowerCase(),
                                        j === T || j.indexOf(T + "-") === 0;
                                while ((O = O.parentNode) && O.nodeType === 1);
                                return !1
                            }
                        }),
                        target: function(T) {
                            var O = e.location && e.location.hash;
                            return O && O.slice(1) === T.id
                        },
                        root: function(T) {
                            return T === k
                        },
                        focus: function(T) {
                            return T === og() && w.hasFocus() && !!(T.type || T.href || ~T.tabIndex)
                        },
                        enabled: ec(!1),
                        disabled: ec(!0),
                        checked: function(T) {
                            return H(T, "input") && !!T.checked || H(T, "option") && !!T.selected
                        },
                        selected: function(T) {
                            return T.parentNode && T.parentNode.selectedIndex,
                            T.selected === !0
                        },
                        empty: function(T) {
                            for (T = T.firstChild; T; T = T.nextSibling)
                                if (T.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(T) {
                            return !a.pseudos.empty(T)
                        },
                        header: function(T) {
                            return tn.test(T.nodeName)
                        },
                        input: function(T) {
                            return en.test(T.nodeName)
                        },
                        button: function(T) {
                            return H(T, "input") && T.type === "button" || H(T, "button")
                        },
                        text: function(T) {
                            var O;
                            return H(T, "input") && T.type === "text" && ((O = T.getAttribute("type")) == null || O.toLowerCase() === "text")
                        },
                        first: Mn(function() {
                            return [0]
                        }),
                        last: Mn(function(T, O) {
                            return [O - 1]
                        }),
                        eq: Mn(function(T, O, j) {
                            return [j < 0 ? j + O : j]
                        }),
                        even: Mn(function(T, O) {
                            for (var j = 0; j < O; j += 2)
                                T.push(j);
                            return T
                        }),
                        odd: Mn(function(T, O) {
                            for (var j = 1; j < O; j += 2)
                                T.push(j);
                            return T
                        }),
                        lt: Mn(function(T, O, j) {
                            var V;
                            for (j < 0 ? V = j + O : j > O ? V = O : V = j; --V >= 0; )
                                T.push(V);
                            return T
                        }),
                        gt: Mn(function(T, O, j) {
                            for (var V = j < 0 ? j + O : j; ++V < O; )
                                T.push(V);
                            return T
                        })
                    }
                },
                a.pseudos.nth = a.pseudos.eq;
                for (o in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                    a.pseudos[o] = sg(o);
                for (o in {
                    submit: !0,
                    reset: !0
                })
                    a.pseudos[o] = ug(o);
                function tc() {}
                tc.prototype = a.filters = a.pseudos,
                a.setFilters = new tc;
                function es(T, O) {
                    var j, V, J, fe, pe, Ee, ge, Qe = st[T + " "];
                    if (Qe)
                        return O ? 0 : Qe.slice(0);
                    for (pe = T,
                    Ee = [],
                    ge = a.preFilter; pe; ) {
                        (!j || (V = Ft.exec(pe))) && (V && (pe = pe.slice(V[0].length) || pe),
                        Ee.push(J = [])),
                        j = !1,
                        (V = Jo.exec(pe)) && (j = V.shift(),
                        J.push({
                            value: j,
                            type: V[0].replace(ne, " ")
                        }),
                        pe = pe.slice(j.length));
                        for (fe in a.filter)
                            (V = xr[fe].exec(pe)) && (!ge[fe] || (V = ge[fe](V))) && (j = V.shift(),
                            J.push({
                                value: j,
                                type: fe,
                                matches: V
                            }),
                            pe = pe.slice(j.length));
                        if (!j)
                            break
                    }
                    return O ? pe.length : pe ? dt.error(T) : st(T, Ee).slice(0)
                }
                function su(T) {
                    for (var O = 0, j = T.length, V = ""; O < j; O++)
                        V += T[O].value;
                    return V
                }
                function uu(T, O, j) {
                    var V = O.dir
                      , J = O.next
                      , fe = J || V
                      , pe = j && fe === "parentNode"
                      , Ee = ue++;
                    return O.first ? function(ge, Qe, Re) {
                        for (; ge = ge[V]; )
                            if (ge.nodeType === 1 || pe)
                                return T(ge, Qe, Re);
                        return !1
                    }
                    : function(ge, Qe, Re) {
                        var He, Ke, Pe = [X, Ee];
                        if (Re) {
                            for (; ge = ge[V]; )
                                if ((ge.nodeType === 1 || pe) && T(ge, Qe, Re))
                                    return !0
                        } else
                            for (; ge = ge[V]; )
                                if (ge.nodeType === 1 || pe)
                                    if (Ke = ge[Z] || (ge[Z] = {}),
                                    J && H(ge, J))
                                        ge = ge[V] || ge;
                                    else {
                                        if ((He = Ke[fe]) && He[0] === X && He[1] === Ee)
                                            return Pe[2] = He[2];
                                        if (Ke[fe] = Pe,
                                        Pe[2] = T(ge, Qe, Re))
                                            return !0
                                    }
                        return !1
                    }
                }
                function Sa(T) {
                    return T.length > 1 ? function(O, j, V) {
                        for (var J = T.length; J--; )
                            if (!T[J](O, j, V))
                                return !1;
                        return !0
                    }
                    : T[0]
                }
                function ag(T, O, j) {
                    for (var V = 0, J = O.length; V < J; V++)
                        dt(T, O[V], j);
                    return j
                }
                function au(T, O, j, V, J) {
                    for (var fe, pe = [], Ee = 0, ge = T.length, Qe = O != null; Ee < ge; Ee++)
                        (fe = T[Ee]) && (!j || j(fe, V, J)) && (pe.push(fe),
                        Qe && O.push(Ee));
                    return pe
                }
                function ka(T, O, j, V, J, fe) {
                    return V && !V[Z] && (V = ka(V)),
                    J && !J[Z] && (J = ka(J, fe)),
                    lr(function(pe, Ee, ge, Qe) {
                        var Re, He, Ke, Pe, vt = [], Mi = [], hi = Ee.length, er = pe || ag(O || "*", ge.nodeType ? [ge] : ge, []), br = T && (pe || !O) ? au(er, vt, T, ge, Qe) : er;
                        if (j ? (Pe = J || (pe ? T : hi || V) ? [] : Ee,
                        j(br, Pe, ge, Qe)) : Pe = br,
                        V)
                            for (Re = au(Pe, Mi),
                            V(Re, [], ge, Qe),
                            He = Re.length; He--; )
                                (Ke = Re[He]) && (Pe[Mi[He]] = !(br[Mi[He]] = Ke));
                        if (pe) {
                            if (J || T) {
                                if (J) {
                                    for (Re = [],
                                    He = Pe.length; He--; )
                                        (Ke = Pe[He]) && Re.push(br[He] = Ke);
                                    J(null, Pe = [], Re, Qe)
                                }
                                for (He = Pe.length; He--; )
                                    (Ke = Pe[He]) && (Re = J ? c.call(pe, Ke) : vt[He]) > -1 && (pe[Re] = !(Ee[Re] = Ke))
                            }
                        } else
                            Pe = au(Pe === Ee ? Pe.splice(hi, Pe.length) : Pe),
                            J ? J(null, Ee, Pe, Qe) : y.apply(Ee, Pe)
                    })
                }
                function Fa(T) {
                    for (var O, j, V, J = T.length, fe = a.relative[T[0].type], pe = fe || a.relative[" "], Ee = fe ? 1 : 0, ge = uu(function(He) {
                        return He === O
                    }, pe, !0), Qe = uu(function(He) {
                        return c.call(O, He) > -1
                    }, pe, !0), Re = [function(He, Ke, Pe) {
                        var vt = !fe && (Pe || Ke != d) || ((O = Ke).nodeType ? ge(He, Ke, Pe) : Qe(He, Ke, Pe));
                        return O = null,
                        vt
                    }
                    ]; Ee < J; Ee++)
                        if (j = a.relative[T[Ee].type])
                            Re = [uu(Sa(Re), j)];
                        else {
                            if (j = a.filter[T[Ee].type].apply(null, T[Ee].matches),
                            j[Z]) {
                                for (V = ++Ee; V < J && !a.relative[T[V].type]; V++)
                                    ;
                                return ka(Ee > 1 && Sa(Re), Ee > 1 && su(T.slice(0, Ee - 1).concat({
                                    value: T[Ee - 2].type === " " ? "*" : ""
                                })).replace(ne, "$1"), j, Ee < V && Fa(T.slice(Ee, V)), V < J && Fa(T = T.slice(V)), V < J && su(T))
                            }
                            Re.push(j)
                        }
                    return Sa(Re)
                }
                function lg(T, O) {
                    var j = O.length > 0
                      , V = T.length > 0
                      , J = function(fe, pe, Ee, ge, Qe) {
                        var Re, He, Ke, Pe = 0, vt = "0", Mi = fe && [], hi = [], er = d, br = fe || V && a.find.TAG("*", Qe), uo = X += er == null ? 1 : Math.random() || .1, bi = br.length;
                        for (Qe && (d = pe == w || pe || Qe); vt !== bi && (Re = br[vt]) != null; vt++) {
                            if (V && Re) {
                                for (He = 0,
                                !pe && Re.ownerDocument != w && (rn(Re),
                                Ee = !S); Ke = T[He++]; )
                                    if (Ke(Re, pe || w, Ee)) {
                                        y.call(ge, Re);
                                        break
                                    }
                                Qe && (X = uo)
                            }
                            j && ((Re = !Ke && Re) && Pe--,
                            fe && Mi.push(Re))
                        }
                        if (Pe += vt,
                        j && vt !== Pe) {
                            for (He = 0; Ke = O[He++]; )
                                Ke(Mi, hi, pe, Ee);
                            if (fe) {
                                if (Pe > 0)
                                    for (; vt--; )
                                        Mi[vt] || hi[vt] || (hi[vt] = I.call(ge));
                                hi = au(hi)
                            }
                            y.apply(ge, hi),
                            Qe && !fe && hi.length > 0 && Pe + O.length > 1 && f.uniqueSort(ge)
                        }
                        return Qe && (X = uo,
                        d = er),
                        Mi
                    };
                    return j ? lr(J) : J
                }
                function Pa(T, O) {
                    var j, V = [], J = [], fe = qe[T + " "];
                    if (!fe) {
                        for (O || (O = es(T)),
                        j = O.length; j--; )
                            fe = Fa(O[j]),
                            fe[Z] ? V.push(fe) : J.push(fe);
                        fe = qe(T, lg(J, V)),
                        fe.selector = T
                    }
                    return fe
                }
                function ic(T, O, j, V) {
                    var J, fe, pe, Ee, ge, Qe = typeof T == "function" && T, Re = !V && es(T = Qe.selector || T);
                    if (j = j || [],
                    Re.length === 1) {
                        if (fe = Re[0] = Re[0].slice(0),
                        fe.length > 2 && (pe = fe[0]).type === "ID" && O.nodeType === 9 && S && a.relative[fe[1].type]) {
                            if (O = (a.find.ID(pe.matches[0].replace(Ir, Hr), O) || [])[0],
                            O)
                                Qe && (O = O.parentNode);
                            else
                                return j;
                            T = T.slice(fe.shift().value.length)
                        }
                        for (J = xr.needsContext.test(T) ? 0 : fe.length; J-- && (pe = fe[J],
                        !a.relative[Ee = pe.type]); )
                            if ((ge = a.find[Ee]) && (V = ge(pe.matches[0].replace(Ir, Hr), Ea.test(fe[0].type) && Ta(O.parentNode) || O))) {
                                if (fe.splice(J, 1),
                                T = V.length && su(fe),
                                !T)
                                    return y.apply(j, V),
                                    j;
                                break
                            }
                    }
                    return (Qe || Pa(T, Re))(V, O, !S, j, !O || Ea.test(T) && Ta(O.parentNode) || O),
                    j
                }
                b.sortStable = Z.split("").sort(jt).join("") === Z,
                rn(),
                b.sortDetached = so(function(T) {
                    return T.compareDocumentPosition(w.createElement("fieldset")) & 1
                }),
                f.find = dt,
                f.expr[":"] = f.expr.pseudos,
                f.unique = f.uniqueSort,
                dt.compile = Pa,
                dt.select = ic,
                dt.setDocument = rn,
                dt.tokenize = es,
                dt.escape = f.escapeSelector,
                dt.getText = f.text,
                dt.isXML = f.isXMLDoc,
                dt.selectors = f.expr,
                dt.support = f.support,
                dt.uniqueSort = f.uniqueSort
            }
            )();
            var U = function(o, a, d) {
                for (var g = [], m = d !== void 0; (o = o[a]) && o.nodeType !== 9; )
                    if (o.nodeType === 1) {
                        if (m && f(o).is(d))
                            break;
                        g.push(o)
                    }
                return g
            }
              , R = function(o, a) {
                for (var d = []; o; o = o.nextSibling)
                    o.nodeType === 1 && o !== a && d.push(o);
                return d
            }
              , _e = f.expr.match.needsContext
              , be = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function $e(o, a, d) {
                return v(a) ? f.grep(o, function(g, m) {
                    return !!a.call(g, m, g) !== d
                }) : a.nodeType ? f.grep(o, function(g) {
                    return g === a !== d
                }) : typeof a != "string" ? f.grep(o, function(g) {
                    return c.call(a, g) > -1 !== d
                }) : f.filter(a, o, d)
            }
            f.filter = function(o, a, d) {
                var g = a[0];
                return d && (o = ":not(" + o + ")"),
                a.length === 1 && g.nodeType === 1 ? f.find.matchesSelector(g, o) ? [g] : [] : f.find.matches(o, f.grep(a, function(m) {
                    return m.nodeType === 1
                }))
            }
            ,
            f.fn.extend({
                find: function(o) {
                    var a, d, g = this.length, m = this;
                    if (typeof o != "string")
                        return this.pushStack(f(o).filter(function() {
                            for (a = 0; a < g; a++)
                                if (f.contains(m[a], this))
                                    return !0
                        }));
                    for (d = this.pushStack([]),
                    a = 0; a < g; a++)
                        f.find(o, m[a], d);
                    return g > 1 ? f.uniqueSort(d) : d
                },
                filter: function(o) {
                    return this.pushStack($e(this, o || [], !1))
                },
                not: function(o) {
                    return this.pushStack($e(this, o || [], !0))
                },
                is: function(o) {
                    return !!$e(this, typeof o == "string" && _e.test(o) ? f(o) : o || [], !1).length
                }
            });
            var ve, we = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, ke = f.fn.init = function(o, a, d) {
                var g, m;
                if (!o)
                    return this;
                if (d = d || ve,
                typeof o == "string")
                    if (o[0] === "<" && o[o.length - 1] === ">" && o.length >= 3 ? g = [null, o, null] : g = we.exec(o),
                    g && (g[1] || !a))
                        if (g[1]) {
                            if (a = a instanceof f ? a[0] : a,
                            f.merge(this, f.parseHTML(g[1], a && a.nodeType ? a.ownerDocument || a : C, !0)),
                            be.test(g[1]) && f.isPlainObject(a))
                                for (g in a)
                                    v(this[g]) ? this[g](a[g]) : this.attr(g, a[g]);
                            return this
                        } else
                            return m = C.getElementById(g[2]),
                            m && (this[0] = m,
                            this.length = 1),
                            this;
                    else
                        return !a || a.jquery ? (a || d).find(o) : this.constructor(a).find(o);
                else {
                    if (o.nodeType)
                        return this[0] = o,
                        this.length = 1,
                        this;
                    if (v(o))
                        return d.ready !== void 0 ? d.ready(o) : o(f)
                }
                return f.makeArray(o, this)
            }
            ;
            ke.prototype = f.fn,
            ve = f(C);
            var Ne = /^(?:parents|prev(?:Until|All))/
              , Le = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            f.fn.extend({
                has: function(o) {
                    var a = f(o, this)
                      , d = a.length;
                    return this.filter(function() {
                        for (var g = 0; g < d; g++)
                            if (f.contains(this, a[g]))
                                return !0
                    })
                },
                closest: function(o, a) {
                    var d, g = 0, m = this.length, y = [], w = typeof o != "string" && f(o);
                    if (!_e.test(o)) {
                        for (; g < m; g++)
                            for (d = this[g]; d && d !== a; d = d.parentNode)
                                if (d.nodeType < 11 && (w ? w.index(d) > -1 : d.nodeType === 1 && f.find.matchesSelector(d, o))) {
                                    y.push(d);
                                    break
                                }
                    }
                    return this.pushStack(y.length > 1 ? f.uniqueSort(y) : y)
                },
                index: function(o) {
                    return o ? typeof o == "string" ? c.call(f(o), this[0]) : c.call(this, o.jquery ? o[0] : o) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(o, a) {
                    return this.pushStack(f.uniqueSort(f.merge(this.get(), f(o, a))))
                },
                addBack: function(o) {
                    return this.add(o == null ? this.prevObject : this.prevObject.filter(o))
                }
            });
            function gt(o, a) {
                for (; (o = o[a]) && o.nodeType !== 1; )
                    ;
                return o
            }
            f.each({
                parent: function(o) {
                    var a = o.parentNode;
                    return a && a.nodeType !== 11 ? a : null
                },
                parents: function(o) {
                    return U(o, "parentNode")
                },
                parentsUntil: function(o, a, d) {
                    return U(o, "parentNode", d)
                },
                next: function(o) {
                    return gt(o, "nextSibling")
                },
                prev: function(o) {
                    return gt(o, "previousSibling")
                },
                nextAll: function(o) {
                    return U(o, "nextSibling")
                },
                prevAll: function(o) {
                    return U(o, "previousSibling")
                },
                nextUntil: function(o, a, d) {
                    return U(o, "nextSibling", d)
                },
                prevUntil: function(o, a, d) {
                    return U(o, "previousSibling", d)
                },
                siblings: function(o) {
                    return R((o.parentNode || {}).firstChild, o)
                },
                children: function(o) {
                    return R(o.firstChild)
                },
                contents: function(o) {
                    return o.contentDocument != null && r(o.contentDocument) ? o.contentDocument : (H(o, "template") && (o = o.content || o),
                    f.merge([], o.childNodes))
                }
            }, function(o, a) {
                f.fn[o] = function(d, g) {
                    var m = f.map(this, a, d);
                    return o.slice(-5) !== "Until" && (g = d),
                    g && typeof g == "string" && (m = f.filter(g, m)),
                    this.length > 1 && (Le[o] || f.uniqueSort(m),
                    Ne.test(o) && m.reverse()),
                    this.pushStack(m)
                }
            });
            var Ye = /[^\x20\t\r\n\f]+/g;
            function Je(o) {
                var a = {};
                return f.each(o.match(Ye) || [], function(d, g) {
                    a[g] = !0
                }),
                a
            }
            f.Callbacks = function(o) {
                o = typeof o == "string" ? Je(o) : f.extend({}, o);
                var a, d, g, m, y = [], w = [], k = -1, S = function() {
                    for (m = m || o.once,
                    g = a = !0; w.length; k = -1)
                        for (d = w.shift(); ++k < y.length; )
                            y[k].apply(d[0], d[1]) === !1 && o.stopOnFalse && (k = y.length,
                            d = !1);
                    o.memory || (d = !1),
                    a = !1,
                    m && (d ? y = [] : y = "")
                }, N = {
                    add: function() {
                        return y && (d && !a && (k = y.length - 1,
                        w.push(d)),
                        function Q(Z) {
                            f.each(Z, function(X, ue) {
                                v(ue) ? (!o.unique || !N.has(ue)) && y.push(ue) : ue && ue.length && P(ue) !== "string" && Q(ue)
                            })
                        }(arguments),
                        d && !a && S()),
                        this
                    },
                    remove: function() {
                        return f.each(arguments, function(Q, Z) {
                            for (var X; (X = f.inArray(Z, y, X)) > -1; )
                                y.splice(X, 1),
                                X <= k && k--
                        }),
                        this
                    },
                    has: function(Q) {
                        return Q ? f.inArray(Q, y) > -1 : y.length > 0
                    },
                    empty: function() {
                        return y && (y = []),
                        this
                    },
                    disable: function() {
                        return m = w = [],
                        y = d = "",
                        this
                    },
                    disabled: function() {
                        return !y
                    },
                    lock: function() {
                        return m = w = [],
                        !d && !a && (y = d = ""),
                        this
                    },
                    locked: function() {
                        return !!m
                    },
                    fireWith: function(Q, Z) {
                        return m || (Z = Z || [],
                        Z = [Q, Z.slice ? Z.slice() : Z],
                        w.push(Z),
                        a || S()),
                        this
                    },
                    fire: function() {
                        return N.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !!g
                    }
                };
                return N
            }
            ;
            function ut(o) {
                return o
            }
            function De(o) {
                throw o
            }
            function Te(o, a, d, g) {
                var m;
                try {
                    o && v(m = o.promise) ? m.call(o).done(a).fail(d) : o && v(m = o.then) ? m.call(o, a, d) : a.apply(void 0, [o].slice(g))
                } catch (y) {
                    d.apply(void 0, [y])
                }
            }
            f.extend({
                Deferred: function(o) {
                    var a = [["notify", "progress", f.Callbacks("memory"), f.Callbacks("memory"), 2], ["resolve", "done", f.Callbacks("once memory"), f.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", f.Callbacks("once memory"), f.Callbacks("once memory"), 1, "rejected"]]
                      , d = "pending"
                      , g = {
                        state: function() {
                            return d
                        },
                        always: function() {
                            return m.done(arguments).fail(arguments),
                            this
                        },
                        catch: function(y) {
                            return g.then(null, y)
                        },
                        pipe: function() {
                            var y = arguments;
                            return f.Deferred(function(w) {
                                f.each(a, function(k, S) {
                                    var N = v(y[S[4]]) && y[S[4]];
                                    m[S[1]](function() {
                                        var Q = N && N.apply(this, arguments);
                                        Q && v(Q.promise) ? Q.promise().progress(w.notify).done(w.resolve).fail(w.reject) : w[S[0] + "With"](this, N ? [Q] : arguments)
                                    })
                                }),
                                y = null
                            }).promise()
                        },
                        then: function(y, w, k) {
                            var S = 0;
                            function N(Q, Z, X, ue) {
                                return function() {
                                    var Be = this
                                      , st = arguments
                                      , qe = function() {
                                        var jt, yr;
                                        if (!(Q < S)) {
                                            if (jt = X.apply(Be, st),
                                            jt === Z.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            yr = jt && (typeof jt == "object" || typeof jt == "function") && jt.then,
                                            v(yr) ? ue ? yr.call(jt, N(S, Z, ut, ue), N(S, Z, De, ue)) : (S++,
                                            yr.call(jt, N(S, Z, ut, ue), N(S, Z, De, ue), N(S, Z, ut, Z.notifyWith))) : (X !== ut && (Be = void 0,
                                            st = [jt]),
                                            (ue || Z.resolveWith)(Be, st))
                                        }
                                    }
                                      , oi = ue ? qe : function() {
                                        try {
                                            qe()
                                        } catch (jt) {
                                            f.Deferred.exceptionHook && f.Deferred.exceptionHook(jt, oi.error),
                                            Q + 1 >= S && (X !== De && (Be = void 0,
                                            st = [jt]),
                                            Z.rejectWith(Be, st))
                                        }
                                    }
                                    ;
                                    Q ? oi() : (f.Deferred.getErrorHook ? oi.error = f.Deferred.getErrorHook() : f.Deferred.getStackHook && (oi.error = f.Deferred.getStackHook()),
                                    e.setTimeout(oi))
                                }
                            }
                            return f.Deferred(function(Q) {
                                a[0][3].add(N(0, Q, v(k) ? k : ut, Q.notifyWith)),
                                a[1][3].add(N(0, Q, v(y) ? y : ut)),
                                a[2][3].add(N(0, Q, v(w) ? w : De))
                            }).promise()
                        },
                        promise: function(y) {
                            return y != null ? f.extend(y, g) : g
                        }
                    }
                      , m = {};
                    return f.each(a, function(y, w) {
                        var k = w[2]
                          , S = w[5];
                        g[w[1]] = k.add,
                        S && k.add(function() {
                            d = S
                        }, a[3 - y][2].disable, a[3 - y][3].disable, a[0][2].lock, a[0][3].lock),
                        k.add(w[3].fire),
                        m[w[0]] = function() {
                            return m[w[0] + "With"](this === m ? void 0 : this, arguments),
                            this
                        }
                        ,
                        m[w[0] + "With"] = k.fireWith
                    }),
                    g.promise(m),
                    o && o.call(m, m),
                    m
                },
                when: function(o) {
                    var a = arguments.length
                      , d = a
                      , g = Array(d)
                      , m = n.call(arguments)
                      , y = f.Deferred()
                      , w = function(k) {
                        return function(S) {
                            g[k] = this,
                            m[k] = arguments.length > 1 ? n.call(arguments) : S,
                            --a || y.resolveWith(g, m)
                        }
                    };
                    if (a <= 1 && (Te(o, y.done(w(d)).resolve, y.reject, !a),
                    y.state() === "pending" || v(m[d] && m[d].then)))
                        return y.then();
                    for (; d--; )
                        Te(m[d], w(d), y.reject);
                    return y.promise()
                }
            });
            var Me = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            f.Deferred.exceptionHook = function(o, a) {
                e.console && e.console.warn && o && Me.test(o.name) && e.console.warn("jQuery.Deferred exception: " + o.message, o.stack, a)
            }
            ,
            f.readyException = function(o) {
                e.setTimeout(function() {
                    throw o
                })
            }
            ;
            var bt = f.Deferred();
            f.fn.ready = function(o) {
                return bt.then(o).catch(function(a) {
                    f.readyException(a)
                }),
                this
            }
            ,
            f.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(o) {
                    (o === !0 ? --f.readyWait : f.isReady) || (f.isReady = !0,
                    !(o !== !0 && --f.readyWait > 0) && bt.resolveWith(C, [f]))
                }
            }),
            f.ready.then = bt.then;
            function $() {
                C.removeEventListener("DOMContentLoaded", $),
                e.removeEventListener("load", $),
                f.ready()
            }
            C.readyState === "complete" || C.readyState !== "loading" && !C.documentElement.doScroll ? e.setTimeout(f.ready) : (C.addEventListener("DOMContentLoaded", $),
            e.addEventListener("load", $));
            var ze = function(o, a, d, g, m, y, w) {
                var k = 0
                  , S = o.length
                  , N = d == null;
                if (P(d) === "object") {
                    m = !0;
                    for (k in d)
                        ze(o, a, k, d[k], !0, y, w)
                } else if (g !== void 0 && (m = !0,
                v(g) || (w = !0),
                N && (w ? (a.call(o, g),
                a = null) : (N = a,
                a = function(Q, Z, X) {
                    return N.call(f(Q), X)
                }
                )),
                a))
                    for (; k < S; k++)
                        a(o[k], d, w ? g : g.call(o[k], k, a(o[k], d)));
                return m ? o : N ? a.call(o) : S ? a(o[0], d) : y
            }
              , ti = /^-ms-/
              , Ut = /-([a-z])/g;
            function me(o, a) {
                return a.toUpperCase()
            }
            function Ge(o) {
                return o.replace(ti, "ms-").replace(Ut, me)
            }
            var ii = function(o) {
                return o.nodeType === 1 || o.nodeType === 9 || !+o.nodeType
            };
            function Gt() {
                this.expando = f.expando + Gt.uid++
            }
            Gt.uid = 1,
            Gt.prototype = {
                cache: function(o) {
                    var a = o[this.expando];
                    return a || (a = {},
                    ii(o) && (o.nodeType ? o[this.expando] = a : Object.defineProperty(o, this.expando, {
                        value: a,
                        configurable: !0
                    }))),
                    a
                },
                set: function(o, a, d) {
                    var g, m = this.cache(o);
                    if (typeof a == "string")
                        m[Ge(a)] = d;
                    else
                        for (g in a)
                            m[Ge(g)] = a[g];
                    return m
                },
                get: function(o, a) {
                    return a === void 0 ? this.cache(o) : o[this.expando] && o[this.expando][Ge(a)]
                },
                access: function(o, a, d) {
                    return a === void 0 || a && typeof a == "string" && d === void 0 ? this.get(o, a) : (this.set(o, a, d),
                    d !== void 0 ? d : a)
                },
                remove: function(o, a) {
                    var d, g = o[this.expando];
                    if (g !== void 0) {
                        if (a !== void 0)
                            for (Array.isArray(a) ? a = a.map(Ge) : (a = Ge(a),
                            a = a in g ? [a] : a.match(Ye) || []),
                            d = a.length; d--; )
                                delete g[a[d]];
                        (a === void 0 || f.isEmptyObject(g)) && (o.nodeType ? o[this.expando] = void 0 : delete o[this.expando])
                    }
                },
                hasData: function(o) {
                    var a = o[this.expando];
                    return a !== void 0 && !f.isEmptyObject(a)
                }
            };
            var ce = new Gt
              , nt = new Gt
              , lt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
              , ri = /[A-Z]/g;
            function li(o) {
                return o === "true" ? !0 : o === "false" ? !1 : o === "null" ? null : o === +o + "" ? +o : lt.test(o) ? JSON.parse(o) : o
            }
            function fi(o, a, d) {
                var g;
                if (d === void 0 && o.nodeType === 1)
                    if (g = "data-" + a.replace(ri, "-$&").toLowerCase(),
                    d = o.getAttribute(g),
                    typeof d == "string") {
                        try {
                            d = li(d)
                        } catch {}
                        nt.set(o, a, d)
                    } else
                        d = void 0;
                return d
            }
            f.extend({
                hasData: function(o) {
                    return nt.hasData(o) || ce.hasData(o)
                },
                data: function(o, a, d) {
                    return nt.access(o, a, d)
                },
                removeData: function(o, a) {
                    nt.remove(o, a)
                },
                _data: function(o, a, d) {
                    return ce.access(o, a, d)
                },
                _removeData: function(o, a) {
                    ce.remove(o, a)
                }
            }),
            f.fn.extend({
                data: function(o, a) {
                    var d, g, m, y = this[0], w = y && y.attributes;
                    if (o === void 0) {
                        if (this.length && (m = nt.get(y),
                        y.nodeType === 1 && !ce.get(y, "hasDataAttrs"))) {
                            for (d = w.length; d--; )
                                w[d] && (g = w[d].name,
                                g.indexOf("data-") === 0 && (g = Ge(g.slice(5)),
                                fi(y, g, m[g])));
                            ce.set(y, "hasDataAttrs", !0)
                        }
                        return m
                    }
                    return typeof o == "object" ? this.each(function() {
                        nt.set(this, o)
                    }) : ze(this, function(k) {
                        var S;
                        if (y && k === void 0)
                            return S = nt.get(y, o),
                            S !== void 0 || (S = fi(y, o),
                            S !== void 0) ? S : void 0;
                        this.each(function() {
                            nt.set(this, o, k)
                        })
                    }, null, a, arguments.length > 1, null, !0)
                },
                removeData: function(o) {
                    return this.each(function() {
                        nt.remove(this, o)
                    })
                }
            }),
            f.extend({
                queue: function(o, a, d) {
                    var g;
                    if (o)
                        return a = (a || "fx") + "queue",
                        g = ce.get(o, a),
                        d && (!g || Array.isArray(d) ? g = ce.access(o, a, f.makeArray(d)) : g.push(d)),
                        g || []
                },
                dequeue: function(o, a) {
                    a = a || "fx";
                    var d = f.queue(o, a)
                      , g = d.length
                      , m = d.shift()
                      , y = f._queueHooks(o, a)
                      , w = function() {
                        f.dequeue(o, a)
                    };
                    m === "inprogress" && (m = d.shift(),
                    g--),
                    m && (a === "fx" && d.unshift("inprogress"),
                    delete y.stop,
                    m.call(o, w, y)),
                    !g && y && y.empty.fire()
                },
                _queueHooks: function(o, a) {
                    var d = a + "queueHooks";
                    return ce.get(o, d) || ce.access(o, d, {
                        empty: f.Callbacks("once memory").add(function() {
                            ce.remove(o, [a + "queue", d])
                        })
                    })
                }
            }),
            f.fn.extend({
                queue: function(o, a) {
                    var d = 2;
                    return typeof o != "string" && (a = o,
                    o = "fx",
                    d--),
                    arguments.length < d ? f.queue(this[0], o) : a === void 0 ? this : this.each(function() {
                        var g = f.queue(this, o, a);
                        f._queueHooks(this, o),
                        o === "fx" && g[0] !== "inprogress" && f.dequeue(this, o)
                    })
                },
                dequeue: function(o) {
                    return this.each(function() {
                        f.dequeue(this, o)
                    })
                },
                clearQueue: function(o) {
                    return this.queue(o || "fx", [])
                },
                promise: function(o, a) {
                    var d, g = 1, m = f.Deferred(), y = this, w = this.length, k = function() {
                        --g || m.resolveWith(y, [y])
                    };
                    for (typeof o != "string" && (a = o,
                    o = void 0),
                    o = o || "fx"; w--; )
                        d = ce.get(y[w], o + "queueHooks"),
                        d && d.empty && (g++,
                        d.empty.add(k));
                    return k(),
                    m.promise(a)
                }
            });
            var _r = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
              , pt = new RegExp("^(?:([+-])=|)(" + _r + ")([a-z%]*)$","i")
              , Qt = ["Top", "Right", "Bottom", "Left"]
              , Lt = C.documentElement
              , Kt = function(o) {
                return f.contains(o.ownerDocument, o)
            }
              , Pi = {
                composed: !0
            };
            Lt.getRootNode && (Kt = function(o) {
                return f.contains(o.ownerDocument, o) || o.getRootNode(Pi) === o.ownerDocument
            }
            );
            var Di = function(o, a) {
                return o = a || o,
                o.style.display === "none" || o.style.display === "" && Kt(o) && f.css(o, "display") === "none"
            };
            function ci(o, a, d, g) {
                var m, y, w = 20, k = g ? function() {
                    return g.cur()
                }
                : function() {
                    return f.css(o, a, "")
                }
                , S = k(), N = d && d[3] || (f.cssNumber[a] ? "" : "px"), Q = o.nodeType && (f.cssNumber[a] || N !== "px" && +S) && pt.exec(f.css(o, a));
                if (Q && Q[3] !== N) {
                    for (S = S / 2,
                    N = N || Q[3],
                    Q = +S || 1; w--; )
                        f.style(o, a, Q + N),
                        (1 - y) * (1 - (y = k() / S || .5)) <= 0 && (w = 0),
                        Q = Q / y;
                    Q = Q * 2,
                    f.style(o, a, Q + N),
                    d = d || []
                }
                return d && (Q = +Q || +S || 0,
                m = d[1] ? Q + (d[1] + 1) * d[2] : +d[2],
                g && (g.unit = N,
                g.start = Q,
                g.end = m)),
                m
            }
            var Oe = {};
            function xi(o) {
                var a, d = o.ownerDocument, g = o.nodeName, m = Oe[g];
                return m || (a = d.body.appendChild(d.createElement(g)),
                m = f.css(a, "display"),
                a.parentNode.removeChild(a),
                m === "none" && (m = "block"),
                Oe[g] = m,
                m)
            }
            function ct(o, a) {
                for (var d, g, m = [], y = 0, w = o.length; y < w; y++)
                    g = o[y],
                    g.style && (d = g.style.display,
                    a ? (d === "none" && (m[y] = ce.get(g, "display") || null,
                    m[y] || (g.style.display = "")),
                    g.style.display === "" && Di(g) && (m[y] = xi(g))) : d !== "none" && (m[y] = "none",
                    ce.set(g, "display", d)));
                for (y = 0; y < w; y++)
                    m[y] != null && (o[y].style.display = m[y]);
                return o
            }
            f.fn.extend({
                show: function() {
                    return ct(this, !0)
                },
                hide: function() {
                    return ct(this)
                },
                toggle: function(o) {
                    return typeof o == "boolean" ? o ? this.show() : this.hide() : this.each(function() {
                        Di(this) ? f(this).show() : f(this).hide()
                    })
                }
            });
            var Tt = /^(?:checkbox|radio)$/i
              , ni = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
              , Hi = /^$|^module$|\/(?:java|ecma)script/i;
            (function() {
                var o = C.createDocumentFragment()
                  , a = o.appendChild(C.createElement("div"))
                  , d = C.createElement("input");
                d.setAttribute("type", "radio"),
                d.setAttribute("checked", "checked"),
                d.setAttribute("name", "t"),
                a.appendChild(d),
                b.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
                a.innerHTML = "<textarea>x</textarea>",
                b.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue,
                a.innerHTML = "<option></option>",
                b.option = !!a.lastChild
            }
            )();
            var de = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            de.tbody = de.tfoot = de.colgroup = de.caption = de.thead,
            de.th = de.td,
            b.option || (de.optgroup = de.option = [1, "<select multiple='multiple'>", "</select>"]);
            function F(o, a) {
                var d;
                return typeof o.getElementsByTagName < "u" ? d = o.getElementsByTagName(a || "*") : typeof o.querySelectorAll < "u" ? d = o.querySelectorAll(a || "*") : d = [],
                a === void 0 || a && H(o, a) ? f.merge([o], d) : d
            }
            function ie(o, a) {
                for (var d = 0, g = o.length; d < g; d++)
                    ce.set(o[d], "globalEval", !a || ce.get(a[d], "globalEval"))
            }
            var B = /<|&#?\w+;/;
            function Y(o, a, d, g, m) {
                for (var y, w, k, S, N, Q, Z = a.createDocumentFragment(), X = [], ue = 0, Be = o.length; ue < Be; ue++)
                    if (y = o[ue],
                    y || y === 0)
                        if (P(y) === "object")
                            f.merge(X, y.nodeType ? [y] : y);
                        else if (!B.test(y))
                            X.push(a.createTextNode(y));
                        else {
                            for (w = w || Z.appendChild(a.createElement("div")),
                            k = (ni.exec(y) || ["", ""])[1].toLowerCase(),
                            S = de[k] || de._default,
                            w.innerHTML = S[1] + f.htmlPrefilter(y) + S[2],
                            Q = S[0]; Q--; )
                                w = w.lastChild;
                            f.merge(X, w.childNodes),
                            w = Z.firstChild,
                            w.textContent = ""
                        }
                for (Z.textContent = "",
                ue = 0; y = X[ue++]; ) {
                    if (g && f.inArray(y, g) > -1) {
                        m && m.push(y);
                        continue
                    }
                    if (N = Kt(y),
                    w = F(Z.appendChild(y), "script"),
                    N && ie(w),
                    d)
                        for (Q = 0; y = w[Q++]; )
                            Hi.test(y.type || "") && d.push(y)
                }
                return Z
            }
            var re = /^([^.]*)(?:\.(.+)|)/;
            function W() {
                return !0
            }
            function le() {
                return !1
            }
            function te(o, a, d, g, m, y) {
                var w, k;
                if (typeof a == "object") {
                    typeof d != "string" && (g = g || d,
                    d = void 0);
                    for (k in a)
                        te(o, k, d, g, a[k], y);
                    return o
                }
                if (g == null && m == null ? (m = d,
                g = d = void 0) : m == null && (typeof d == "string" ? (m = g,
                g = void 0) : (m = g,
                g = d,
                d = void 0)),
                m === !1)
                    m = le;
                else if (!m)
                    return o;
                return y === 1 && (w = m,
                m = function(S) {
                    return f().off(S),
                    w.apply(this, arguments)
                }
                ,
                m.guid = w.guid || (w.guid = f.guid++)),
                o.each(function() {
                    f.event.add(this, a, m, g, d)
                })
            }
            f.event = {
                global: {},
                add: function(o, a, d, g, m) {
                    var y, w, k, S, N, Q, Z, X, ue, Be, st, qe = ce.get(o);
                    if (ii(o))
                        for (d.handler && (y = d,
                        d = y.handler,
                        m = y.selector),
                        m && f.find.matchesSelector(Lt, m),
                        d.guid || (d.guid = f.guid++),
                        (S = qe.events) || (S = qe.events = Object.create(null)),
                        (w = qe.handle) || (w = qe.handle = function(oi) {
                            return typeof f < "u" && f.event.triggered !== oi.type ? f.event.dispatch.apply(o, arguments) : void 0
                        }
                        ),
                        a = (a || "").match(Ye) || [""],
                        N = a.length; N--; )
                            k = re.exec(a[N]) || [],
                            ue = st = k[1],
                            Be = (k[2] || "").split(".").sort(),
                            ue && (Z = f.event.special[ue] || {},
                            ue = (m ? Z.delegateType : Z.bindType) || ue,
                            Z = f.event.special[ue] || {},
                            Q = f.extend({
                                type: ue,
                                origType: st,
                                data: g,
                                handler: d,
                                guid: d.guid,
                                selector: m,
                                needsContext: m && f.expr.match.needsContext.test(m),
                                namespace: Be.join(".")
                            }, y),
                            (X = S[ue]) || (X = S[ue] = [],
                            X.delegateCount = 0,
                            (!Z.setup || Z.setup.call(o, g, Be, w) === !1) && o.addEventListener && o.addEventListener(ue, w)),
                            Z.add && (Z.add.call(o, Q),
                            Q.handler.guid || (Q.handler.guid = d.guid)),
                            m ? X.splice(X.delegateCount++, 0, Q) : X.push(Q),
                            f.event.global[ue] = !0)
                },
                remove: function(o, a, d, g, m) {
                    var y, w, k, S, N, Q, Z, X, ue, Be, st, qe = ce.hasData(o) && ce.get(o);
                    if (!(!qe || !(S = qe.events))) {
                        for (a = (a || "").match(Ye) || [""],
                        N = a.length; N--; ) {
                            if (k = re.exec(a[N]) || [],
                            ue = st = k[1],
                            Be = (k[2] || "").split(".").sort(),
                            !ue) {
                                for (ue in S)
                                    f.event.remove(o, ue + a[N], d, g, !0);
                                continue
                            }
                            for (Z = f.event.special[ue] || {},
                            ue = (g ? Z.delegateType : Z.bindType) || ue,
                            X = S[ue] || [],
                            k = k[2] && new RegExp("(^|\\.)" + Be.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            w = y = X.length; y--; )
                                Q = X[y],
                                (m || st === Q.origType) && (!d || d.guid === Q.guid) && (!k || k.test(Q.namespace)) && (!g || g === Q.selector || g === "**" && Q.selector) && (X.splice(y, 1),
                                Q.selector && X.delegateCount--,
                                Z.remove && Z.remove.call(o, Q));
                            w && !X.length && ((!Z.teardown || Z.teardown.call(o, Be, qe.handle) === !1) && f.removeEvent(o, ue, qe.handle),
                            delete S[ue])
                        }
                        f.isEmptyObject(S) && ce.remove(o, "handle events")
                    }
                },
                dispatch: function(o) {
                    var a, d, g, m, y, w, k = new Array(arguments.length), S = f.event.fix(o), N = (ce.get(this, "events") || Object.create(null))[S.type] || [], Q = f.event.special[S.type] || {};
                    for (k[0] = S,
                    a = 1; a < arguments.length; a++)
                        k[a] = arguments[a];
                    if (S.delegateTarget = this,
                    !(Q.preDispatch && Q.preDispatch.call(this, S) === !1)) {
                        for (w = f.event.handlers.call(this, S, N),
                        a = 0; (m = w[a++]) && !S.isPropagationStopped(); )
                            for (S.currentTarget = m.elem,
                            d = 0; (y = m.handlers[d++]) && !S.isImmediatePropagationStopped(); )
                                (!S.rnamespace || y.namespace === !1 || S.rnamespace.test(y.namespace)) && (S.handleObj = y,
                                S.data = y.data,
                                g = ((f.event.special[y.origType] || {}).handle || y.handler).apply(m.elem, k),
                                g !== void 0 && (S.result = g) === !1 && (S.preventDefault(),
                                S.stopPropagation()));
                        return Q.postDispatch && Q.postDispatch.call(this, S),
                        S.result
                    }
                },
                handlers: function(o, a) {
                    var d, g, m, y, w, k = [], S = a.delegateCount, N = o.target;
                    if (S && N.nodeType && !(o.type === "click" && o.button >= 1)) {
                        for (; N !== this; N = N.parentNode || this)
                            if (N.nodeType === 1 && !(o.type === "click" && N.disabled === !0)) {
                                for (y = [],
                                w = {},
                                d = 0; d < S; d++)
                                    g = a[d],
                                    m = g.selector + " ",
                                    w[m] === void 0 && (w[m] = g.needsContext ? f(m, this).index(N) > -1 : f.find(m, this, null, [N]).length),
                                    w[m] && y.push(g);
                                y.length && k.push({
                                    elem: N,
                                    handlers: y
                                })
                            }
                    }
                    return N = this,
                    S < a.length && k.push({
                        elem: N,
                        handlers: a.slice(S)
                    }),
                    k
                },
                addProp: function(o, a) {
                    Object.defineProperty(f.Event.prototype, o, {
                        enumerable: !0,
                        configurable: !0,
                        get: v(a) ? function() {
                            if (this.originalEvent)
                                return a(this.originalEvent)
                        }
                        : function() {
                            if (this.originalEvent)
                                return this.originalEvent[o]
                        }
                        ,
                        set: function(d) {
                            Object.defineProperty(this, o, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: d
                            })
                        }
                    })
                },
                fix: function(o) {
                    return o[f.expando] ? o : new f.Event(o)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(o) {
                            var a = this || o;
                            return Tt.test(a.type) && a.click && H(a, "input") && he(a, "click", !0),
                            !1
                        },
                        trigger: function(o) {
                            var a = this || o;
                            return Tt.test(a.type) && a.click && H(a, "input") && he(a, "click"),
                            !0
                        },
                        _default: function(o) {
                            var a = o.target;
                            return Tt.test(a.type) && a.click && H(a, "input") && ce.get(a, "click") || H(a, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(o) {
                            o.result !== void 0 && o.originalEvent && (o.originalEvent.returnValue = o.result)
                        }
                    }
                }
            };
            function he(o, a, d) {
                if (!d) {
                    ce.get(o, a) === void 0 && f.event.add(o, a, W);
                    return
                }
                ce.set(o, a, !1),
                f.event.add(o, a, {
                    namespace: !1,
                    handler: function(g) {
                        var m, y = ce.get(this, a);
                        if (g.isTrigger & 1 && this[a]) {
                            if (y)
                                (f.event.special[a] || {}).delegateType && g.stopPropagation();
                            else if (y = n.call(arguments),
                            ce.set(this, a, y),
                            this[a](),
                            m = ce.get(this, a),
                            ce.set(this, a, !1),
                            y !== m)
                                return g.stopImmediatePropagation(),
                                g.preventDefault(),
                                m
                        } else
                            y && (ce.set(this, a, f.event.trigger(y[0], y.slice(1), this)),
                            g.stopPropagation(),
                            g.isImmediatePropagationStopped = W)
                    }
                })
            }
            f.removeEvent = function(o, a, d) {
                o.removeEventListener && o.removeEventListener(a, d)
            }
            ,
            f.Event = function(o, a) {
                if (!(this instanceof f.Event))
                    return new f.Event(o,a);
                o && o.type ? (this.originalEvent = o,
                this.type = o.type,
                this.isDefaultPrevented = o.defaultPrevented || o.defaultPrevented === void 0 && o.returnValue === !1 ? W : le,
                this.target = o.target && o.target.nodeType === 3 ? o.target.parentNode : o.target,
                this.currentTarget = o.currentTarget,
                this.relatedTarget = o.relatedTarget) : this.type = o,
                a && f.extend(this, a),
                this.timeStamp = o && o.timeStamp || Date.now(),
                this[f.expando] = !0
            }
            ,
            f.Event.prototype = {
                constructor: f.Event,
                isDefaultPrevented: le,
                isPropagationStopped: le,
                isImmediatePropagationStopped: le,
                isSimulated: !1,
                preventDefault: function() {
                    var o = this.originalEvent;
                    this.isDefaultPrevented = W,
                    o && !this.isSimulated && o.preventDefault()
                },
                stopPropagation: function() {
                    var o = this.originalEvent;
                    this.isPropagationStopped = W,
                    o && !this.isSimulated && o.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var o = this.originalEvent;
                    this.isImmediatePropagationStopped = W,
                    o && !this.isSimulated && o.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            f.each({
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
                which: !0
            }, f.event.addProp),
            f.each({
                focus: "focusin",
                blur: "focusout"
            }, function(o, a) {
                function d(g) {
                    if (C.documentMode) {
                        var m = ce.get(this, "handle")
                          , y = f.event.fix(g);
                        y.type = g.type === "focusin" ? "focus" : "blur",
                        y.isSimulated = !0,
                        m(g),
                        y.target === y.currentTarget && m(y)
                    } else
                        f.event.simulate(a, g.target, f.event.fix(g))
                }
                f.event.special[o] = {
                    setup: function() {
                        var g;
                        if (he(this, o, !0),
                        C.documentMode)
                            g = ce.get(this, a),
                            g || this.addEventListener(a, d),
                            ce.set(this, a, (g || 0) + 1);
                        else
                            return !1
                    },
                    trigger: function() {
                        return he(this, o),
                        !0
                    },
                    teardown: function() {
                        var g;
                        if (C.documentMode)
                            g = ce.get(this, a) - 1,
                            g ? ce.set(this, a, g) : (this.removeEventListener(a, d),
                            ce.remove(this, a));
                        else
                            return !1
                    },
                    _default: function(g) {
                        return ce.get(g.target, o)
                    },
                    delegateType: a
                },
                f.event.special[a] = {
                    setup: function() {
                        var g = this.ownerDocument || this.document || this
                          , m = C.documentMode ? this : g
                          , y = ce.get(m, a);
                        y || (C.documentMode ? this.addEventListener(a, d) : g.addEventListener(o, d, !0)),
                        ce.set(m, a, (y || 0) + 1)
                    },
                    teardown: function() {
                        var g = this.ownerDocument || this.document || this
                          , m = C.documentMode ? this : g
                          , y = ce.get(m, a) - 1;
                        y ? ce.set(m, a, y) : (C.documentMode ? this.removeEventListener(a, d) : g.removeEventListener(o, d, !0),
                        ce.remove(m, a))
                    }
                }
            }),
            f.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(o, a) {
                f.event.special[o] = {
                    delegateType: a,
                    bindType: a,
                    handle: function(d) {
                        var g, m = this, y = d.relatedTarget, w = d.handleObj;
                        return (!y || y !== m && !f.contains(m, y)) && (d.type = w.origType,
                        g = w.handler.apply(this, arguments),
                        d.type = a),
                        g
                    }
                }
            }),
            f.fn.extend({
                on: function(o, a, d, g) {
                    return te(this, o, a, d, g)
                },
                one: function(o, a, d, g) {
                    return te(this, o, a, d, g, 1)
                },
                off: function(o, a, d) {
                    var g, m;
                    if (o && o.preventDefault && o.handleObj)
                        return g = o.handleObj,
                        f(o.delegateTarget).off(g.namespace ? g.origType + "." + g.namespace : g.origType, g.selector, g.handler),
                        this;
                    if (typeof o == "object") {
                        for (m in o)
                            this.off(m, a, o[m]);
                        return this
                    }
                    return (a === !1 || typeof a == "function") && (d = a,
                    a = void 0),
                    d === !1 && (d = le),
                    this.each(function() {
                        f.event.remove(this, o, d, a)
                    })
                }
            });
            var Fe = /<script|<style|<link/i
              , ye = /checked\s*(?:[^=]|=\s*.checked.)/i
              , Ie = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
            function Ze(o, a) {
                return H(o, "table") && H(a.nodeType !== 11 ? a : a.firstChild, "tr") && f(o).children("tbody")[0] || o
            }
            function ot(o) {
                return o.type = (o.getAttribute("type") !== null) + "/" + o.type,
                o
            }
            function je(o) {
                return (o.type || "").slice(0, 5) === "true/" ? o.type = o.type.slice(5) : o.removeAttribute("type"),
                o
            }
            function Xe(o, a) {
                var d, g, m, y, w, k, S;
                if (a.nodeType === 1) {
                    if (ce.hasData(o) && (y = ce.get(o),
                    S = y.events,
                    S)) {
                        ce.remove(a, "handle events");
                        for (m in S)
                            for (d = 0,
                            g = S[m].length; d < g; d++)
                                f.event.add(a, m, S[m][d])
                    }
                    nt.hasData(o) && (w = nt.access(o),
                    k = f.extend({}, w),
                    nt.set(a, k))
                }
            }
            function ft(o, a) {
                var d = a.nodeName.toLowerCase();
                d === "input" && Tt.test(o.type) ? a.checked = o.checked : (d === "input" || d === "textarea") && (a.defaultValue = o.defaultValue)
            }
            function Ae(o, a, d, g) {
                a = u(a);
                var m, y, w, k, S, N, Q = 0, Z = o.length, X = Z - 1, ue = a[0], Be = v(ue);
                if (Be || Z > 1 && typeof ue == "string" && !b.checkClone && ye.test(ue))
                    return o.each(function(st) {
                        var qe = o.eq(st);
                        Be && (a[0] = ue.call(this, st, qe.html())),
                        Ae(qe, a, d, g)
                    });
                if (Z && (m = Y(a, o[0].ownerDocument, !1, o, g),
                y = m.firstChild,
                m.childNodes.length === 1 && (m = y),
                y || g)) {
                    for (w = f.map(F(m, "script"), ot),
                    k = w.length; Q < Z; Q++)
                        S = m,
                        Q !== X && (S = f.clone(S, !0, !0),
                        k && f.merge(w, F(S, "script"))),
                        d.call(o[Q], S, Q);
                    if (k)
                        for (N = w[w.length - 1].ownerDocument,
                        f.map(w, je),
                        Q = 0; Q < k; Q++)
                            S = w[Q],
                            Hi.test(S.type || "") && !ce.access(S, "globalEval") && f.contains(N, S) && (S.src && (S.type || "").toLowerCase() !== "module" ? f._evalUrl && !S.noModule && f._evalUrl(S.src, {
                                nonce: S.nonce || S.getAttribute("nonce")
                            }, N) : A(S.textContent.replace(Ie, ""), S, N))
                }
                return o
            }
            function Nt(o, a, d) {
                for (var g, m = a ? f.filter(a, o) : o, y = 0; (g = m[y]) != null; y++)
                    !d && g.nodeType === 1 && f.cleanData(F(g)),
                    g.parentNode && (d && Kt(g) && ie(F(g, "script")),
                    g.parentNode.removeChild(g));
                return o
            }
            f.extend({
                htmlPrefilter: function(o) {
                    return o
                },
                clone: function(o, a, d) {
                    var g, m, y, w, k = o.cloneNode(!0), S = Kt(o);
                    if (!b.noCloneChecked && (o.nodeType === 1 || o.nodeType === 11) && !f.isXMLDoc(o))
                        for (w = F(k),
                        y = F(o),
                        g = 0,
                        m = y.length; g < m; g++)
                            ft(y[g], w[g]);
                    if (a)
                        if (d)
                            for (y = y || F(o),
                            w = w || F(k),
                            g = 0,
                            m = y.length; g < m; g++)
                                Xe(y[g], w[g]);
                        else
                            Xe(o, k);
                    return w = F(k, "script"),
                    w.length > 0 && ie(w, !S && F(o, "script")),
                    k
                },
                cleanData: function(o) {
                    for (var a, d, g, m = f.event.special, y = 0; (d = o[y]) !== void 0; y++)
                        if (ii(d)) {
                            if (a = d[ce.expando]) {
                                if (a.events)
                                    for (g in a.events)
                                        m[g] ? f.event.remove(d, g) : f.removeEvent(d, g, a.handle);
                                d[ce.expando] = void 0
                            }
                            d[nt.expando] && (d[nt.expando] = void 0)
                        }
                }
            }),
            f.fn.extend({
                detach: function(o) {
                    return Nt(this, o, !0)
                },
                remove: function(o) {
                    return Nt(this, o)
                },
                text: function(o) {
                    return ze(this, function(a) {
                        return a === void 0 ? f.text(this) : this.empty().each(function() {
                            (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = a)
                        })
                    }, null, o, arguments.length)
                },
                append: function() {
                    return Ae(this, arguments, function(o) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var a = Ze(this, o);
                            a.appendChild(o)
                        }
                    })
                },
                prepend: function() {
                    return Ae(this, arguments, function(o) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var a = Ze(this, o);
                            a.insertBefore(o, a.firstChild)
                        }
                    })
                },
                before: function() {
                    return Ae(this, arguments, function(o) {
                        this.parentNode && this.parentNode.insertBefore(o, this)
                    })
                },
                after: function() {
                    return Ae(this, arguments, function(o) {
                        this.parentNode && this.parentNode.insertBefore(o, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var o, a = 0; (o = this[a]) != null; a++)
                        o.nodeType === 1 && (f.cleanData(F(o, !1)),
                        o.textContent = "");
                    return this
                },
                clone: function(o, a) {
                    return o = o ?? !1,
                    a = a ?? o,
                    this.map(function() {
                        return f.clone(this, o, a)
                    })
                },
                html: function(o) {
                    return ze(this, function(a) {
                        var d = this[0] || {}
                          , g = 0
                          , m = this.length;
                        if (a === void 0 && d.nodeType === 1)
                            return d.innerHTML;
                        if (typeof a == "string" && !Fe.test(a) && !de[(ni.exec(a) || ["", ""])[1].toLowerCase()]) {
                            a = f.htmlPrefilter(a);
                            try {
                                for (; g < m; g++)
                                    d = this[g] || {},
                                    d.nodeType === 1 && (f.cleanData(F(d, !1)),
                                    d.innerHTML = a);
                                d = 0
                            } catch {}
                        }
                        d && this.empty().append(a)
                    }, null, o, arguments.length)
                },
                replaceWith: function() {
                    var o = [];
                    return Ae(this, arguments, function(a) {
                        var d = this.parentNode;
                        f.inArray(this, o) < 0 && (f.cleanData(F(this)),
                        d && d.replaceChild(a, this))
                    }, o)
                }
            }),
            f.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(o, a) {
                f.fn[o] = function(d) {
                    for (var g, m = [], y = f(d), w = y.length - 1, k = 0; k <= w; k++)
                        g = k === w ? this : this.clone(!0),
                        f(y[k])[a](g),
                        l.apply(m, g.get());
                    return this.pushStack(m)
                }
            });
            var yt = new RegExp("^(" + _r + ")(?!px)[a-z%]+$","i")
              , At = /^--/
              , St = function(o) {
                var a = o.ownerDocument.defaultView;
                return (!a || !a.opener) && (a = e),
                a.getComputedStyle(o)
            }
              , $t = function(o, a, d) {
                var g, m, y = {};
                for (m in a)
                    y[m] = o.style[m],
                    o.style[m] = a[m];
                g = d.call(o);
                for (m in a)
                    o.style[m] = y[m];
                return g
            }
              , Nr = new RegExp(Qt.join("|"),"i");
            (function() {
                function o() {
                    if (N) {
                        S.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                        N.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                        Lt.appendChild(S).appendChild(N);
                        var Q = e.getComputedStyle(N);
                        d = Q.top !== "1%",
                        k = a(Q.marginLeft) === 12,
                        N.style.right = "60%",
                        y = a(Q.right) === 36,
                        g = a(Q.width) === 36,
                        N.style.position = "absolute",
                        m = a(N.offsetWidth / 3) === 12,
                        Lt.removeChild(S),
                        N = null
                    }
                }
                function a(Q) {
                    return Math.round(parseFloat(Q))
                }
                var d, g, m, y, w, k, S = C.createElement("div"), N = C.createElement("div");
                N.style && (N.style.backgroundClip = "content-box",
                N.cloneNode(!0).style.backgroundClip = "",
                b.clearCloneStyle = N.style.backgroundClip === "content-box",
                f.extend(b, {
                    boxSizingReliable: function() {
                        return o(),
                        g
                    },
                    pixelBoxStyles: function() {
                        return o(),
                        y
                    },
                    pixelPosition: function() {
                        return o(),
                        d
                    },
                    reliableMarginLeft: function() {
                        return o(),
                        k
                    },
                    scrollboxSize: function() {
                        return o(),
                        m
                    },
                    reliableTrDimensions: function() {
                        var Q, Z, X, ue;
                        return w == null && (Q = C.createElement("table"),
                        Z = C.createElement("tr"),
                        X = C.createElement("div"),
                        Q.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                        Z.style.cssText = "box-sizing:content-box;border:1px solid",
                        Z.style.height = "1px",
                        X.style.height = "9px",
                        X.style.display = "block",
                        Lt.appendChild(Q).appendChild(Z).appendChild(X),
                        ue = e.getComputedStyle(Z),
                        w = parseInt(ue.height, 10) + parseInt(ue.borderTopWidth, 10) + parseInt(ue.borderBottomWidth, 10) === Z.offsetHeight,
                        Lt.removeChild(Q)),
                        w
                    }
                }))
            }
            )();
            function mr(o, a, d) {
                var g, m, y, w, k = At.test(a), S = o.style;
                return d = d || St(o),
                d && (w = d.getPropertyValue(a) || d[a],
                k && w && (w = w.replace(ne, "$1") || void 0),
                w === "" && !Kt(o) && (w = f.style(o, a)),
                !b.pixelBoxStyles() && yt.test(w) && Nr.test(a) && (g = S.width,
                m = S.minWidth,
                y = S.maxWidth,
                S.minWidth = S.maxWidth = S.width = w,
                w = d.width,
                S.width = g,
                S.minWidth = m,
                S.maxWidth = y)),
                w !== void 0 ? w + "" : w
            }
            function qt(o, a) {
                return {
                    get: function() {
                        if (o()) {
                            delete this.get;
                            return
                        }
                        return (this.get = a).apply(this, arguments)
                    }
                }
            }
            var kt = ["Webkit", "Moz", "ms"]
              , zi = C.createElement("div").style
              , no = {};
            function iu(o) {
                for (var a = o[0].toUpperCase() + o.slice(1), d = kt.length; d--; )
                    if (o = kt[d] + a,
                    o in zi)
                        return o
            }
            function Br(o) {
                var a = f.cssProps[o] || no[o];
                return a || (o in zi ? o : no[o] = iu(o) || o)
            }
            var Ji = /^(none|table(?!-c[ea]).+)/
              , Sn = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }
              , kn = {
                letterSpacing: "0",
                fontWeight: "400"
            };
            function Zr(o, a, d) {
                var g = pt.exec(a);
                return g ? Math.max(0, g[2] - (d || 0)) + (g[3] || "px") : a
            }
            function ga(o, a, d, g, m, y) {
                var w = a === "width" ? 1 : 0
                  , k = 0
                  , S = 0
                  , N = 0;
                if (d === (g ? "border" : "content"))
                    return 0;
                for (; w < 4; w += 2)
                    d === "margin" && (N += f.css(o, d + Qt[w], !0, m)),
                    g ? (d === "content" && (S -= f.css(o, "padding" + Qt[w], !0, m)),
                    d !== "margin" && (S -= f.css(o, "border" + Qt[w] + "Width", !0, m))) : (S += f.css(o, "padding" + Qt[w], !0, m),
                    d !== "padding" ? S += f.css(o, "border" + Qt[w] + "Width", !0, m) : k += f.css(o, "border" + Qt[w] + "Width", !0, m));
                return !g && y >= 0 && (S += Math.max(0, Math.ceil(o["offset" + a[0].toUpperCase() + a.slice(1)] - y - S - k - .5)) || 0),
                S + N
            }
            function $f(o, a, d) {
                var g = St(o)
                  , m = !b.boxSizingReliable() || d
                  , y = m && f.css(o, "boxSizing", !1, g) === "border-box"
                  , w = y
                  , k = mr(o, a, g)
                  , S = "offset" + a[0].toUpperCase() + a.slice(1);
                if (yt.test(k)) {
                    if (!d)
                        return k;
                    k = "auto"
                }
                return (!b.boxSizingReliable() && y || !b.reliableTrDimensions() && H(o, "tr") || k === "auto" || !parseFloat(k) && f.css(o, "display", !1, g) === "inline") && o.getClientRects().length && (y = f.css(o, "boxSizing", !1, g) === "border-box",
                w = S in o,
                w && (k = o[S])),
                k = parseFloat(k) || 0,
                k + ga(o, a, d || (y ? "border" : "content"), w, g, k) + "px"
            }
            f.extend({
                cssHooks: {
                    opacity: {
                        get: function(o, a) {
                            if (a) {
                                var d = mr(o, "opacity");
                                return d === "" ? "1" : d
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    aspectRatio: !0,
                    borderImageSlice: !0,
                    columnCount: !0,
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
                    scale: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                    fillOpacity: !0,
                    floodOpacity: !0,
                    stopOpacity: !0,
                    strokeMiterlimit: !0,
                    strokeOpacity: !0
                },
                cssProps: {},
                style: function(o, a, d, g) {
                    if (!(!o || o.nodeType === 3 || o.nodeType === 8 || !o.style)) {
                        var m, y, w, k = Ge(a), S = At.test(a), N = o.style;
                        if (S || (a = Br(k)),
                        w = f.cssHooks[a] || f.cssHooks[k],
                        d !== void 0) {
                            if (y = typeof d,
                            y === "string" && (m = pt.exec(d)) && m[1] && (d = ci(o, a, m),
                            y = "number"),
                            d == null || d !== d)
                                return;
                            y === "number" && !S && (d += m && m[3] || (f.cssNumber[k] ? "" : "px")),
                            !b.clearCloneStyle && d === "" && a.indexOf("background") === 0 && (N[a] = "inherit"),
                            (!w || !("set"in w) || (d = w.set(o, d, g)) !== void 0) && (S ? N.setProperty(a, d) : N[a] = d)
                        } else
                            return w && "get"in w && (m = w.get(o, !1, g)) !== void 0 ? m : N[a]
                    }
                },
                css: function(o, a, d, g) {
                    var m, y, w, k = Ge(a), S = At.test(a);
                    return S || (a = Br(k)),
                    w = f.cssHooks[a] || f.cssHooks[k],
                    w && "get"in w && (m = w.get(o, !0, d)),
                    m === void 0 && (m = mr(o, a, g)),
                    m === "normal" && a in kn && (m = kn[a]),
                    d === "" || d ? (y = parseFloat(m),
                    d === !0 || isFinite(y) ? y || 0 : m) : m
                }
            }),
            f.each(["height", "width"], function(o, a) {
                f.cssHooks[a] = {
                    get: function(d, g, m) {
                        if (g)
                            return Ji.test(f.css(d, "display")) && (!d.getClientRects().length || !d.getBoundingClientRect().width) ? $t(d, Sn, function() {
                                return $f(d, a, m)
                            }) : $f(d, a, m)
                    },
                    set: function(d, g, m) {
                        var y, w = St(d), k = !b.scrollboxSize() && w.position === "absolute", S = k || m, N = S && f.css(d, "boxSizing", !1, w) === "border-box", Q = m ? ga(d, a, m, N, w) : 0;
                        return N && k && (Q -= Math.ceil(d["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(w[a]) - ga(d, a, "border", !1, w) - .5)),
                        Q && (y = pt.exec(g)) && (y[3] || "px") !== "px" && (d.style[a] = g,
                        g = f.css(d, a)),
                        Zr(d, g, Q)
                    }
                }
            }),
            f.cssHooks.marginLeft = qt(b.reliableMarginLeft, function(o, a) {
                if (a)
                    return (parseFloat(mr(o, "marginLeft")) || o.getBoundingClientRect().left - $t(o, {
                        marginLeft: 0
                    }, function() {
                        return o.getBoundingClientRect().left
                    })) + "px"
            }),
            f.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(o, a) {
                f.cssHooks[o + a] = {
                    expand: function(d) {
                        for (var g = 0, m = {}, y = typeof d == "string" ? d.split(" ") : [d]; g < 4; g++)
                            m[o + Qt[g] + a] = y[g] || y[g - 2] || y[0];
                        return m
                    }
                },
                o !== "margin" && (f.cssHooks[o + a].set = Zr)
            }),
            f.fn.extend({
                css: function(o, a) {
                    return ze(this, function(d, g, m) {
                        var y, w, k = {}, S = 0;
                        if (Array.isArray(g)) {
                            for (y = St(d),
                            w = g.length; S < w; S++)
                                k[g[S]] = f.css(d, g[S], !1, y);
                            return k
                        }
                        return m !== void 0 ? f.style(d, g, m) : f.css(d, g)
                    }, o, a, arguments.length > 1)
                }
            });
            function Ai(o, a, d, g, m) {
                return new Ai.prototype.init(o,a,d,g,m)
            }
            f.Tween = Ai,
            Ai.prototype = {
                constructor: Ai,
                init: function(o, a, d, g, m, y) {
                    this.elem = o,
                    this.prop = d,
                    this.easing = m || f.easing._default,
                    this.options = a,
                    this.start = this.now = this.cur(),
                    this.end = g,
                    this.unit = y || (f.cssNumber[d] ? "" : "px")
                },
                cur: function() {
                    var o = Ai.propHooks[this.prop];
                    return o && o.get ? o.get(this) : Ai.propHooks._default.get(this)
                },
                run: function(o) {
                    var a, d = Ai.propHooks[this.prop];
                    return this.options.duration ? this.pos = a = f.easing[this.easing](o, this.options.duration * o, 0, 1, this.options.duration) : this.pos = a = o,
                    this.now = (this.end - this.start) * a + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    d && d.set ? d.set(this) : Ai.propHooks._default.set(this),
                    this
                }
            },
            Ai.prototype.init.prototype = Ai.prototype,
            Ai.propHooks = {
                _default: {
                    get: function(o) {
                        var a;
                        return o.elem.nodeType !== 1 || o.elem[o.prop] != null && o.elem.style[o.prop] == null ? o.elem[o.prop] : (a = f.css(o.elem, o.prop, ""),
                        !a || a === "auto" ? 0 : a)
                    },
                    set: function(o) {
                        f.fx.step[o.prop] ? f.fx.step[o.prop](o) : o.elem.nodeType === 1 && (f.cssHooks[o.prop] || o.elem.style[Br(o.prop)] != null) ? f.style(o.elem, o.prop, o.now + o.unit) : o.elem[o.prop] = o.now
                    }
                }
            },
            Ai.propHooks.scrollTop = Ai.propHooks.scrollLeft = {
                set: function(o) {
                    o.elem.nodeType && o.elem.parentNode && (o.elem[o.prop] = o.now)
                }
            },
            f.easing = {
                linear: function(o) {
                    return o
                },
                swing: function(o) {
                    return .5 - Math.cos(o * Math.PI) / 2
                },
                _default: "swing"
            },
            f.fx = Ai.prototype.init,
            f.fx.step = {};
            var oo, ru, Rp = /^(?:toggle|show|hide)$/, Lp = /queueHooks$/;
            function _a() {
                ru && (C.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(_a) : e.setTimeout(_a, f.fx.interval),
                f.fx.tick())
            }
            function qf() {
                return e.setTimeout(function() {
                    oo = void 0
                }),
                oo = Date.now()
            }
            function nu(o, a) {
                var d, g = 0, m = {
                    height: o
                };
                for (a = a ? 1 : 0; g < 4; g += 2 - a)
                    d = Qt[g],
                    m["margin" + d] = m["padding" + d] = o;
                return a && (m.opacity = m.width = o),
                m
            }
            function jf(o, a, d) {
                for (var g, m = (ar.tweeners[a] || []).concat(ar.tweeners["*"]), y = 0, w = m.length; y < w; y++)
                    if (g = m[y].call(d, a, o))
                        return g
            }
            function Np(o, a, d) {
                var g, m, y, w, k, S, N, Q, Z = "width"in a || "height"in a, X = this, ue = {}, Be = o.style, st = o.nodeType && Di(o), qe = ce.get(o, "fxshow");
                d.queue || (w = f._queueHooks(o, "fx"),
                w.unqueued == null && (w.unqueued = 0,
                k = w.empty.fire,
                w.empty.fire = function() {
                    w.unqueued || k()
                }
                ),
                w.unqueued++,
                X.always(function() {
                    X.always(function() {
                        w.unqueued--,
                        f.queue(o, "fx").length || w.empty.fire()
                    })
                }));
                for (g in a)
                    if (m = a[g],
                    Rp.test(m)) {
                        if (delete a[g],
                        y = y || m === "toggle",
                        m === (st ? "hide" : "show"))
                            if (m === "show" && qe && qe[g] !== void 0)
                                st = !0;
                            else
                                continue;
                        ue[g] = qe && qe[g] || f.style(o, g)
                    }
                if (S = !f.isEmptyObject(a),
                !(!S && f.isEmptyObject(ue))) {
                    Z && o.nodeType === 1 && (d.overflow = [Be.overflow, Be.overflowX, Be.overflowY],
                    N = qe && qe.display,
                    N == null && (N = ce.get(o, "display")),
                    Q = f.css(o, "display"),
                    Q === "none" && (N ? Q = N : (ct([o], !0),
                    N = o.style.display || N,
                    Q = f.css(o, "display"),
                    ct([o]))),
                    (Q === "inline" || Q === "inline-block" && N != null) && f.css(o, "float") === "none" && (S || (X.done(function() {
                        Be.display = N
                    }),
                    N == null && (Q = Be.display,
                    N = Q === "none" ? "" : Q)),
                    Be.display = "inline-block")),
                    d.overflow && (Be.overflow = "hidden",
                    X.always(function() {
                        Be.overflow = d.overflow[0],
                        Be.overflowX = d.overflow[1],
                        Be.overflowY = d.overflow[2]
                    })),
                    S = !1;
                    for (g in ue)
                        S || (qe ? "hidden"in qe && (st = qe.hidden) : qe = ce.access(o, "fxshow", {
                            display: N
                        }),
                        y && (qe.hidden = !st),
                        st && ct([o], !0),
                        X.done(function() {
                            st || ct([o]),
                            ce.remove(o, "fxshow");
                            for (g in ue)
                                f.style(o, g, ue[g])
                        })),
                        S = jf(st ? qe[g] : 0, g, X),
                        g in qe || (qe[g] = S.start,
                        st && (S.end = S.start,
                        S.start = 0))
                }
            }
            function Bp(o, a) {
                var d, g, m, y, w;
                for (d in o)
                    if (g = Ge(d),
                    m = a[g],
                    y = o[d],
                    Array.isArray(y) && (m = y[1],
                    y = o[d] = y[0]),
                    d !== g && (o[g] = y,
                    delete o[d]),
                    w = f.cssHooks[g],
                    w && "expand"in w) {
                        y = w.expand(y),
                        delete o[g];
                        for (d in y)
                            d in o || (o[d] = y[d],
                            a[d] = m)
                    } else
                        a[g] = m
            }
            function ar(o, a, d) {
                var g, m, y = 0, w = ar.prefilters.length, k = f.Deferred().always(function() {
                    delete S.elem
                }), S = function() {
                    if (m)
                        return !1;
                    for (var Z = oo || qf(), X = Math.max(0, N.startTime + N.duration - Z), ue = X / N.duration || 0, Be = 1 - ue, st = 0, qe = N.tweens.length; st < qe; st++)
                        N.tweens[st].run(Be);
                    return k.notifyWith(o, [N, Be, X]),
                    Be < 1 && qe ? X : (qe || k.notifyWith(o, [N, 1, 0]),
                    k.resolveWith(o, [N]),
                    !1)
                }, N = k.promise({
                    elem: o,
                    props: f.extend({}, a),
                    opts: f.extend(!0, {
                        specialEasing: {},
                        easing: f.easing._default
                    }, d),
                    originalProperties: a,
                    originalOptions: d,
                    startTime: oo || qf(),
                    duration: d.duration,
                    tweens: [],
                    createTween: function(Z, X) {
                        var ue = f.Tween(o, N.opts, Z, X, N.opts.specialEasing[Z] || N.opts.easing);
                        return N.tweens.push(ue),
                        ue
                    },
                    stop: function(Z) {
                        var X = 0
                          , ue = Z ? N.tweens.length : 0;
                        if (m)
                            return this;
                        for (m = !0; X < ue; X++)
                            N.tweens[X].run(1);
                        return Z ? (k.notifyWith(o, [N, 1, 0]),
                        k.resolveWith(o, [N, Z])) : k.rejectWith(o, [N, Z]),
                        this
                    }
                }), Q = N.props;
                for (Bp(Q, N.opts.specialEasing); y < w; y++)
                    if (g = ar.prefilters[y].call(N, o, Q, N.opts),
                    g)
                        return v(g.stop) && (f._queueHooks(N.elem, N.opts.queue).stop = g.stop.bind(g)),
                        g;
                return f.map(Q, jf, N),
                v(N.opts.start) && N.opts.start.call(o, N),
                N.progress(N.opts.progress).done(N.opts.done, N.opts.complete).fail(N.opts.fail).always(N.opts.always),
                f.fx.timer(f.extend(S, {
                    elem: o,
                    anim: N,
                    queue: N.opts.queue
                })),
                N
            }
            f.Animation = f.extend(ar, {
                tweeners: {
                    "*": [function(o, a) {
                        var d = this.createTween(o, a);
                        return ci(d.elem, o, pt.exec(a), d),
                        d
                    }
                    ]
                },
                tweener: function(o, a) {
                    v(o) ? (a = o,
                    o = ["*"]) : o = o.match(Ye);
                    for (var d, g = 0, m = o.length; g < m; g++)
                        d = o[g],
                        ar.tweeners[d] = ar.tweeners[d] || [],
                        ar.tweeners[d].unshift(a)
                },
                prefilters: [Np],
                prefilter: function(o, a) {
                    a ? ar.prefilters.unshift(o) : ar.prefilters.push(o)
                }
            }),
            f.speed = function(o, a, d) {
                var g = o && typeof o == "object" ? f.extend({}, o) : {
                    complete: d || !d && a || v(o) && o,
                    duration: o,
                    easing: d && a || a && !v(a) && a
                };
                return f.fx.off ? g.duration = 0 : typeof g.duration != "number" && (g.duration in f.fx.speeds ? g.duration = f.fx.speeds[g.duration] : g.duration = f.fx.speeds._default),
                (g.queue == null || g.queue === !0) && (g.queue = "fx"),
                g.old = g.complete,
                g.complete = function() {
                    v(g.old) && g.old.call(this),
                    g.queue && f.dequeue(this, g.queue)
                }
                ,
                g
            }
            ,
            f.fn.extend({
                fadeTo: function(o, a, d, g) {
                    return this.filter(Di).css("opacity", 0).show().end().animate({
                        opacity: a
                    }, o, d, g)
                },
                animate: function(o, a, d, g) {
                    var m = f.isEmptyObject(o)
                      , y = f.speed(a, d, g)
                      , w = function() {
                        var k = ar(this, f.extend({}, o), y);
                        (m || ce.get(this, "finish")) && k.stop(!0)
                    };
                    return w.finish = w,
                    m || y.queue === !1 ? this.each(w) : this.queue(y.queue, w)
                },
                stop: function(o, a, d) {
                    var g = function(m) {
                        var y = m.stop;
                        delete m.stop,
                        y(d)
                    };
                    return typeof o != "string" && (d = a,
                    a = o,
                    o = void 0),
                    a && this.queue(o || "fx", []),
                    this.each(function() {
                        var m = !0
                          , y = o != null && o + "queueHooks"
                          , w = f.timers
                          , k = ce.get(this);
                        if (y)
                            k[y] && k[y].stop && g(k[y]);
                        else
                            for (y in k)
                                k[y] && k[y].stop && Lp.test(y) && g(k[y]);
                        for (y = w.length; y--; )
                            w[y].elem === this && (o == null || w[y].queue === o) && (w[y].anim.stop(d),
                            m = !1,
                            w.splice(y, 1));
                        (m || !d) && f.dequeue(this, o)
                    })
                },
                finish: function(o) {
                    return o !== !1 && (o = o || "fx"),
                    this.each(function() {
                        var a, d = ce.get(this), g = d[o + "queue"], m = d[o + "queueHooks"], y = f.timers, w = g ? g.length : 0;
                        for (d.finish = !0,
                        f.queue(this, o, []),
                        m && m.stop && m.stop.call(this, !0),
                        a = y.length; a--; )
                            y[a].elem === this && y[a].queue === o && (y[a].anim.stop(!0),
                            y.splice(a, 1));
                        for (a = 0; a < w; a++)
                            g[a] && g[a].finish && g[a].finish.call(this);
                        delete d.finish
                    })
                }
            }),
            f.each(["toggle", "show", "hide"], function(o, a) {
                var d = f.fn[a];
                f.fn[a] = function(g, m, y) {
                    return g == null || typeof g == "boolean" ? d.apply(this, arguments) : this.animate(nu(a, !0), g, m, y)
                }
            }),
            f.each({
                slideDown: nu("show"),
                slideUp: nu("hide"),
                slideToggle: nu("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(o, a) {
                f.fn[o] = function(d, g, m) {
                    return this.animate(a, d, g, m)
                }
            }),
            f.timers = [],
            f.fx.tick = function() {
                var o, a = 0, d = f.timers;
                for (oo = Date.now(); a < d.length; a++)
                    o = d[a],
                    !o() && d[a] === o && d.splice(a--, 1);
                d.length || f.fx.stop(),
                oo = void 0
            }
            ,
            f.fx.timer = function(o) {
                f.timers.push(o),
                f.fx.start()
            }
            ,
            f.fx.interval = 13,
            f.fx.start = function() {
                ru || (ru = !0,
                _a())
            }
            ,
            f.fx.stop = function() {
                ru = null
            }
            ,
            f.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            f.fn.delay = function(o, a) {
                return o = f.fx && f.fx.speeds[o] || o,
                a = a || "fx",
                this.queue(a, function(d, g) {
                    var m = e.setTimeout(d, o);
                    g.stop = function() {
                        e.clearTimeout(m)
                    }
                })
            }
            ,
            function() {
                var o = C.createElement("input")
                  , a = C.createElement("select")
                  , d = a.appendChild(C.createElement("option"));
                o.type = "checkbox",
                b.checkOn = o.value !== "",
                b.optSelected = d.selected,
                o = C.createElement("input"),
                o.value = "t",
                o.type = "radio",
                b.radioValue = o.value === "t"
            }();
            var Xf, Go = f.expr.attrHandle;
            f.fn.extend({
                attr: function(o, a) {
                    return ze(this, f.attr, o, a, arguments.length > 1)
                },
                removeAttr: function(o) {
                    return this.each(function() {
                        f.removeAttr(this, o)
                    })
                }
            }),
            f.extend({
                attr: function(o, a, d) {
                    var g, m, y = o.nodeType;
                    if (!(y === 3 || y === 8 || y === 2)) {
                        if (typeof o.getAttribute > "u")
                            return f.prop(o, a, d);
                        if ((y !== 1 || !f.isXMLDoc(o)) && (m = f.attrHooks[a.toLowerCase()] || (f.expr.match.bool.test(a) ? Xf : void 0)),
                        d !== void 0) {
                            if (d === null) {
                                f.removeAttr(o, a);
                                return
                            }
                            return m && "set"in m && (g = m.set(o, d, a)) !== void 0 ? g : (o.setAttribute(a, d + ""),
                            d)
                        }
                        return m && "get"in m && (g = m.get(o, a)) !== null ? g : (g = f.find.attr(o, a),
                        g ?? void 0)
                    }
                },
                attrHooks: {
                    type: {
                        set: function(o, a) {
                            if (!b.radioValue && a === "radio" && H(o, "input")) {
                                var d = o.value;
                                return o.setAttribute("type", a),
                                d && (o.value = d),
                                a
                            }
                        }
                    }
                },
                removeAttr: function(o, a) {
                    var d, g = 0, m = a && a.match(Ye);
                    if (m && o.nodeType === 1)
                        for (; d = m[g++]; )
                            o.removeAttribute(d)
                }
            }),
            Xf = {
                set: function(o, a, d) {
                    return a === !1 ? f.removeAttr(o, d) : o.setAttribute(d, d),
                    d
                }
            },
            f.each(f.expr.match.bool.source.match(/\w+/g), function(o, a) {
                var d = Go[a] || f.find.attr;
                Go[a] = function(g, m, y) {
                    var w, k, S = m.toLowerCase();
                    return y || (k = Go[S],
                    Go[S] = w,
                    w = d(g, m, y) != null ? S : null,
                    Go[S] = k),
                    w
                }
            });
            var Ip = /^(?:input|select|textarea|button)$/i
              , Hp = /^(?:a|area)$/i;
            f.fn.extend({
                prop: function(o, a) {
                    return ze(this, f.prop, o, a, arguments.length > 1)
                },
                removeProp: function(o) {
                    return this.each(function() {
                        delete this[f.propFix[o] || o]
                    })
                }
            }),
            f.extend({
                prop: function(o, a, d) {
                    var g, m, y = o.nodeType;
                    if (!(y === 3 || y === 8 || y === 2))
                        return (y !== 1 || !f.isXMLDoc(o)) && (a = f.propFix[a] || a,
                        m = f.propHooks[a]),
                        d !== void 0 ? m && "set"in m && (g = m.set(o, d, a)) !== void 0 ? g : o[a] = d : m && "get"in m && (g = m.get(o, a)) !== null ? g : o[a]
                },
                propHooks: {
                    tabIndex: {
                        get: function(o) {
                            var a = f.find.attr(o, "tabindex");
                            return a ? parseInt(a, 10) : Ip.test(o.nodeName) || Hp.test(o.nodeName) && o.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }),
            b.optSelected || (f.propHooks.selected = {
                get: function(o) {
                    var a = o.parentNode;
                    return a && a.parentNode && a.parentNode.selectedIndex,
                    null
                },
                set: function(o) {
                    var a = o.parentNode;
                    a && (a.selectedIndex,
                    a.parentNode && a.parentNode.selectedIndex)
                }
            }),
            f.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                f.propFix[this.toLowerCase()] = this
            });
            function Fn(o) {
                var a = o.match(Ye) || [];
                return a.join(" ")
            }
            function Pn(o) {
                return o.getAttribute && o.getAttribute("class") || ""
            }
            function ma(o) {
                return Array.isArray(o) ? o : typeof o == "string" ? o.match(Ye) || [] : []
            }
            f.fn.extend({
                addClass: function(o) {
                    var a, d, g, m, y, w;
                    return v(o) ? this.each(function(k) {
                        f(this).addClass(o.call(this, k, Pn(this)))
                    }) : (a = ma(o),
                    a.length ? this.each(function() {
                        if (g = Pn(this),
                        d = this.nodeType === 1 && " " + Fn(g) + " ",
                        d) {
                            for (y = 0; y < a.length; y++)
                                m = a[y],
                                d.indexOf(" " + m + " ") < 0 && (d += m + " ");
                            w = Fn(d),
                            g !== w && this.setAttribute("class", w)
                        }
                    }) : this)
                },
                removeClass: function(o) {
                    var a, d, g, m, y, w;
                    return v(o) ? this.each(function(k) {
                        f(this).removeClass(o.call(this, k, Pn(this)))
                    }) : arguments.length ? (a = ma(o),
                    a.length ? this.each(function() {
                        if (g = Pn(this),
                        d = this.nodeType === 1 && " " + Fn(g) + " ",
                        d) {
                            for (y = 0; y < a.length; y++)
                                for (m = a[y]; d.indexOf(" " + m + " ") > -1; )
                                    d = d.replace(" " + m + " ", " ");
                            w = Fn(d),
                            g !== w && this.setAttribute("class", w)
                        }
                    }) : this) : this.attr("class", "")
                },
                toggleClass: function(o, a) {
                    var d, g, m, y, w = typeof o, k = w === "string" || Array.isArray(o);
                    return v(o) ? this.each(function(S) {
                        f(this).toggleClass(o.call(this, S, Pn(this), a), a)
                    }) : typeof a == "boolean" && k ? a ? this.addClass(o) : this.removeClass(o) : (d = ma(o),
                    this.each(function() {
                        if (k)
                            for (y = f(this),
                            m = 0; m < d.length; m++)
                                g = d[m],
                                y.hasClass(g) ? y.removeClass(g) : y.addClass(g);
                        else
                            (o === void 0 || w === "boolean") && (g = Pn(this),
                            g && ce.set(this, "__className__", g),
                            this.setAttribute && this.setAttribute("class", g || o === !1 ? "" : ce.get(this, "__className__") || ""))
                    }))
                },
                hasClass: function(o) {
                    var a, d, g = 0;
                    for (a = " " + o + " "; d = this[g++]; )
                        if (d.nodeType === 1 && (" " + Fn(Pn(d)) + " ").indexOf(a) > -1)
                            return !0;
                    return !1
                }
            });
            var zp = /\r/g;
            f.fn.extend({
                val: function(o) {
                    var a, d, g, m = this[0];
                    return arguments.length ? (g = v(o),
                    this.each(function(y) {
                        var w;
                        this.nodeType === 1 && (g ? w = o.call(this, y, f(this).val()) : w = o,
                        w == null ? w = "" : typeof w == "number" ? w += "" : Array.isArray(w) && (w = f.map(w, function(k) {
                            return k == null ? "" : k + ""
                        })),
                        a = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()],
                        (!a || !("set"in a) || a.set(this, w, "value") === void 0) && (this.value = w))
                    })) : m ? (a = f.valHooks[m.type] || f.valHooks[m.nodeName.toLowerCase()],
                    a && "get"in a && (d = a.get(m, "value")) !== void 0 ? d : (d = m.value,
                    typeof d == "string" ? d.replace(zp, "") : d ?? "")) : void 0
                }
            }),
            f.extend({
                valHooks: {
                    option: {
                        get: function(o) {
                            var a = f.find.attr(o, "value");
                            return a ?? Fn(f.text(o))
                        }
                    },
                    select: {
                        get: function(o) {
                            var a, d, g, m = o.options, y = o.selectedIndex, w = o.type === "select-one", k = w ? null : [], S = w ? y + 1 : m.length;
                            for (y < 0 ? g = S : g = w ? y : 0; g < S; g++)
                                if (d = m[g],
                                (d.selected || g === y) && !d.disabled && (!d.parentNode.disabled || !H(d.parentNode, "optgroup"))) {
                                    if (a = f(d).val(),
                                    w)
                                        return a;
                                    k.push(a)
                                }
                            return k
                        },
                        set: function(o, a) {
                            for (var d, g, m = o.options, y = f.makeArray(a), w = m.length; w--; )
                                g = m[w],
                                (g.selected = f.inArray(f.valHooks.option.get(g), y) > -1) && (d = !0);
                            return d || (o.selectedIndex = -1),
                            y
                        }
                    }
                }
            }),
            f.each(["radio", "checkbox"], function() {
                f.valHooks[this] = {
                    set: function(o, a) {
                        if (Array.isArray(a))
                            return o.checked = f.inArray(f(o).val(), a) > -1
                    }
                },
                b.checkOn || (f.valHooks[this].get = function(o) {
                    return o.getAttribute("value") === null ? "on" : o.value
                }
                )
            });
            var Qo = e.location
              , Wf = {
                guid: Date.now()
            }
              , ya = /\?/;
            f.parseXML = function(o) {
                var a, d;
                if (!o || typeof o != "string")
                    return null;
                try {
                    a = new e.DOMParser().parseFromString(o, "text/xml")
                } catch {}
                return d = a && a.getElementsByTagName("parsererror")[0],
                (!a || d) && f.error("Invalid XML: " + (d ? f.map(d.childNodes, function(g) {
                    return g.textContent
                }).join(`
`) : o)),
                a
            }
            ;
            var Yf = /^(?:focusinfocus|focusoutblur)$/
              , Vf = function(o) {
                o.stopPropagation()
            };
            f.extend(f.event, {
                trigger: function(o, a, d, g) {
                    var m, y, w, k, S, N, Q, Z, X = [d || C], ue = x.call(o, "type") ? o.type : o, Be = x.call(o, "namespace") ? o.namespace.split(".") : [];
                    if (y = Z = w = d = d || C,
                    !(d.nodeType === 3 || d.nodeType === 8) && !Yf.test(ue + f.event.triggered) && (ue.indexOf(".") > -1 && (Be = ue.split("."),
                    ue = Be.shift(),
                    Be.sort()),
                    S = ue.indexOf(":") < 0 && "on" + ue,
                    o = o[f.expando] ? o : new f.Event(ue,typeof o == "object" && o),
                    o.isTrigger = g ? 2 : 3,
                    o.namespace = Be.join("."),
                    o.rnamespace = o.namespace ? new RegExp("(^|\\.)" + Be.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    o.result = void 0,
                    o.target || (o.target = d),
                    a = a == null ? [o] : f.makeArray(a, [o]),
                    Q = f.event.special[ue] || {},
                    !(!g && Q.trigger && Q.trigger.apply(d, a) === !1))) {
                        if (!g && !Q.noBubble && !E(d)) {
                            for (k = Q.delegateType || ue,
                            Yf.test(k + ue) || (y = y.parentNode); y; y = y.parentNode)
                                X.push(y),
                                w = y;
                            w === (d.ownerDocument || C) && X.push(w.defaultView || w.parentWindow || e)
                        }
                        for (m = 0; (y = X[m++]) && !o.isPropagationStopped(); )
                            Z = y,
                            o.type = m > 1 ? k : Q.bindType || ue,
                            N = (ce.get(y, "events") || Object.create(null))[o.type] && ce.get(y, "handle"),
                            N && N.apply(y, a),
                            N = S && y[S],
                            N && N.apply && ii(y) && (o.result = N.apply(y, a),
                            o.result === !1 && o.preventDefault());
                        return o.type = ue,
                        !g && !o.isDefaultPrevented() && (!Q._default || Q._default.apply(X.pop(), a) === !1) && ii(d) && S && v(d[ue]) && !E(d) && (w = d[S],
                        w && (d[S] = null),
                        f.event.triggered = ue,
                        o.isPropagationStopped() && Z.addEventListener(ue, Vf),
                        d[ue](),
                        o.isPropagationStopped() && Z.removeEventListener(ue, Vf),
                        f.event.triggered = void 0,
                        w && (d[S] = w)),
                        o.result
                    }
                },
                simulate: function(o, a, d) {
                    var g = f.extend(new f.Event, d, {
                        type: o,
                        isSimulated: !0
                    });
                    f.event.trigger(g, null, a)
                }
            }),
            f.fn.extend({
                trigger: function(o, a) {
                    return this.each(function() {
                        f.event.trigger(o, a, this)
                    })
                },
                triggerHandler: function(o, a) {
                    var d = this[0];
                    if (d)
                        return f.event.trigger(o, a, d, !0)
                }
            });
            var $p = /\[\]$/
              , Uf = /\r?\n/g
              , qp = /^(?:submit|button|image|reset|file)$/i
              , jp = /^(?:input|select|textarea|keygen)/i;
            function va(o, a, d, g) {
                var m;
                if (Array.isArray(a))
                    f.each(a, function(y, w) {
                        d || $p.test(o) ? g(o, w) : va(o + "[" + (typeof w == "object" && w != null ? y : "") + "]", w, d, g)
                    });
                else if (!d && P(a) === "object")
                    for (m in a)
                        va(o + "[" + m + "]", a[m], d, g);
                else
                    g(o, a)
            }
            f.param = function(o, a) {
                var d, g = [], m = function(y, w) {
                    var k = v(w) ? w() : w;
                    g[g.length] = encodeURIComponent(y) + "=" + encodeURIComponent(k ?? "")
                };
                if (o == null)
                    return "";
                if (Array.isArray(o) || o.jquery && !f.isPlainObject(o))
                    f.each(o, function() {
                        m(this.name, this.value)
                    });
                else
                    for (d in o)
                        va(d, o[d], a, m);
                return g.join("&")
            }
            ,
            f.fn.extend({
                serialize: function() {
                    return f.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var o = f.prop(this, "elements");
                        return o ? f.makeArray(o) : this
                    }).filter(function() {
                        var o = this.type;
                        return this.name && !f(this).is(":disabled") && jp.test(this.nodeName) && !qp.test(o) && (this.checked || !Tt.test(o))
                    }).map(function(o, a) {
                        var d = f(this).val();
                        return d == null ? null : Array.isArray(d) ? f.map(d, function(g) {
                            return {
                                name: a.name,
                                value: g.replace(Uf, `\r
`)
                            }
                        }) : {
                            name: a.name,
                            value: d.replace(Uf, `\r
`)
                        }
                    }).get()
                }
            });
            var Xp = /%20/g
              , Wp = /#.*$/
              , Yp = /([?&])_=[^&]*/
              , Vp = /^(.*?):[ \t]*([^\r\n]*)$/mg
              , Up = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
              , Gp = /^(?:GET|HEAD)$/
              , Qp = /^\/\//
              , Gf = {}
              , Da = {}
              , Qf = "*/".concat("*")
              , xa = C.createElement("a");
            xa.href = Qo.href;
            function Kf(o) {
                return function(a, d) {
                    typeof a != "string" && (d = a,
                    a = "*");
                    var g, m = 0, y = a.toLowerCase().match(Ye) || [];
                    if (v(d))
                        for (; g = y[m++]; )
                            g[0] === "+" ? (g = g.slice(1) || "*",
                            (o[g] = o[g] || []).unshift(d)) : (o[g] = o[g] || []).push(d)
                }
            }
            function Jf(o, a, d, g) {
                var m = {}
                  , y = o === Da;
                function w(k) {
                    var S;
                    return m[k] = !0,
                    f.each(o[k] || [], function(N, Q) {
                        var Z = Q(a, d, g);
                        if (typeof Z == "string" && !y && !m[Z])
                            return a.dataTypes.unshift(Z),
                            w(Z),
                            !1;
                        if (y)
                            return !(S = Z)
                    }),
                    S
                }
                return w(a.dataTypes[0]) || !m["*"] && w("*")
            }
            function ba(o, a) {
                var d, g, m = f.ajaxSettings.flatOptions || {};
                for (d in a)
                    a[d] !== void 0 && ((m[d] ? o : g || (g = {}))[d] = a[d]);
                return g && f.extend(!0, o, g),
                o
            }
            function Kp(o, a, d) {
                for (var g, m, y, w, k = o.contents, S = o.dataTypes; S[0] === "*"; )
                    S.shift(),
                    g === void 0 && (g = o.mimeType || a.getResponseHeader("Content-Type"));
                if (g) {
                    for (m in k)
                        if (k[m] && k[m].test(g)) {
                            S.unshift(m);
                            break
                        }
                }
                if (S[0]in d)
                    y = S[0];
                else {
                    for (m in d) {
                        if (!S[0] || o.converters[m + " " + S[0]]) {
                            y = m;
                            break
                        }
                        w || (w = m)
                    }
                    y = y || w
                }
                if (y)
                    return y !== S[0] && S.unshift(y),
                    d[y]
            }
            function Jp(o, a, d, g) {
                var m, y, w, k, S, N = {}, Q = o.dataTypes.slice();
                if (Q[1])
                    for (w in o.converters)
                        N[w.toLowerCase()] = o.converters[w];
                for (y = Q.shift(); y; )
                    if (o.responseFields[y] && (d[o.responseFields[y]] = a),
                    !S && g && o.dataFilter && (a = o.dataFilter(a, o.dataType)),
                    S = y,
                    y = Q.shift(),
                    y) {
                        if (y === "*")
                            y = S;
                        else if (S !== "*" && S !== y) {
                            if (w = N[S + " " + y] || N["* " + y],
                            !w) {
                                for (m in N)
                                    if (k = m.split(" "),
                                    k[1] === y && (w = N[S + " " + k[0]] || N["* " + k[0]],
                                    w)) {
                                        w === !0 ? w = N[m] : N[m] !== !0 && (y = k[0],
                                        Q.unshift(k[1]));
                                        break
                                    }
                            }
                            if (w !== !0)
                                if (w && o.throws)
                                    a = w(a);
                                else
                                    try {
                                        a = w(a)
                                    } catch (Z) {
                                        return {
                                            state: "parsererror",
                                            error: w ? Z : "No conversion from " + S + " to " + y
                                        }
                                    }
                        }
                    }
                return {
                    state: "success",
                    data: a
                }
            }
            f.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Qo.href,
                    type: "GET",
                    isLocal: Up.test(Qo.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Qf,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": f.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(o, a) {
                    return a ? ba(ba(o, f.ajaxSettings), a) : ba(f.ajaxSettings, o)
                },
                ajaxPrefilter: Kf(Gf),
                ajaxTransport: Kf(Da),
                ajax: function(o, a) {
                    typeof o == "object" && (a = o,
                    o = void 0),
                    a = a || {};
                    var d, g, m, y, w, k, S, N, Q, Z, X = f.ajaxSetup({}, a), ue = X.context || X, Be = X.context && (ue.nodeType || ue.jquery) ? f(ue) : f.event, st = f.Deferred(), qe = f.Callbacks("once memory"), oi = X.statusCode || {}, jt = {}, yr = {}, vr = "canceled", et = {
                        readyState: 0,
                        getResponseHeader: function(at) {
                            var Ft;
                            if (S) {
                                if (!y)
                                    for (y = {}; Ft = Vp.exec(m); )
                                        y[Ft[1].toLowerCase() + " "] = (y[Ft[1].toLowerCase() + " "] || []).concat(Ft[2]);
                                Ft = y[at.toLowerCase() + " "]
                            }
                            return Ft == null ? null : Ft.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return S ? m : null
                        },
                        setRequestHeader: function(at, Ft) {
                            return S == null && (at = yr[at.toLowerCase()] = yr[at.toLowerCase()] || at,
                            jt[at] = Ft),
                            this
                        },
                        overrideMimeType: function(at) {
                            return S == null && (X.mimeType = at),
                            this
                        },
                        statusCode: function(at) {
                            var Ft;
                            if (at)
                                if (S)
                                    et.always(at[et.status]);
                                else
                                    for (Ft in at)
                                        oi[Ft] = [oi[Ft], at[Ft]];
                            return this
                        },
                        abort: function(at) {
                            var Ft = at || vr;
                            return d && d.abort(Ft),
                            An(0, Ft),
                            this
                        }
                    };
                    if (st.promise(et),
                    X.url = ((o || X.url || Qo.href) + "").replace(Qp, Qo.protocol + "//"),
                    X.type = a.method || a.type || X.method || X.type,
                    X.dataTypes = (X.dataType || "*").toLowerCase().match(Ye) || [""],
                    X.crossDomain == null) {
                        k = C.createElement("a");
                        try {
                            k.href = X.url,
                            k.href = k.href,
                            X.crossDomain = xa.protocol + "//" + xa.host != k.protocol + "//" + k.host
                        } catch {
                            X.crossDomain = !0
                        }
                    }
                    if (X.data && X.processData && typeof X.data != "string" && (X.data = f.param(X.data, X.traditional)),
                    Jf(Gf, X, a, et),
                    S)
                        return et;
                    N = f.event && X.global,
                    N && f.active++ === 0 && f.event.trigger("ajaxStart"),
                    X.type = X.type.toUpperCase(),
                    X.hasContent = !Gp.test(X.type),
                    g = X.url.replace(Wp, ""),
                    X.hasContent ? X.data && X.processData && (X.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (X.data = X.data.replace(Xp, "+")) : (Z = X.url.slice(g.length),
                    X.data && (X.processData || typeof X.data == "string") && (g += (ya.test(g) ? "&" : "?") + X.data,
                    delete X.data),
                    X.cache === !1 && (g = g.replace(Yp, "$1"),
                    Z = (ya.test(g) ? "&" : "?") + "_=" + Wf.guid++ + Z),
                    X.url = g + Z),
                    X.ifModified && (f.lastModified[g] && et.setRequestHeader("If-Modified-Since", f.lastModified[g]),
                    f.etag[g] && et.setRequestHeader("If-None-Match", f.etag[g])),
                    (X.data && X.hasContent && X.contentType !== !1 || a.contentType) && et.setRequestHeader("Content-Type", X.contentType),
                    et.setRequestHeader("Accept", X.dataTypes[0] && X.accepts[X.dataTypes[0]] ? X.accepts[X.dataTypes[0]] + (X.dataTypes[0] !== "*" ? ", " + Qf + "; q=0.01" : "") : X.accepts["*"]);
                    for (Q in X.headers)
                        et.setRequestHeader(Q, X.headers[Q]);
                    if (X.beforeSend && (X.beforeSend.call(ue, et, X) === !1 || S))
                        return et.abort();
                    if (vr = "abort",
                    qe.add(X.complete),
                    et.done(X.success),
                    et.fail(X.error),
                    d = Jf(Da, X, a, et),
                    !d)
                        An(-1, "No Transport");
                    else {
                        if (et.readyState = 1,
                        N && Be.trigger("ajaxSend", [et, X]),
                        S)
                            return et;
                        X.async && X.timeout > 0 && (w = e.setTimeout(function() {
                            et.abort("timeout")
                        }, X.timeout));
                        try {
                            S = !1,
                            d.send(jt, An)
                        } catch (at) {
                            if (S)
                                throw at;
                            An(-1, at)
                        }
                    }
                    function An(at, Ft, Jo, Ca) {
                        var Dr, Zo, xr, en, tn, Zi = Ft;
                        S || (S = !0,
                        w && e.clearTimeout(w),
                        d = void 0,
                        m = Ca || "",
                        et.readyState = at > 0 ? 4 : 0,
                        Dr = at >= 200 && at < 300 || at === 304,
                        Jo && (en = Kp(X, et, Jo)),
                        !Dr && f.inArray("script", X.dataTypes) > -1 && f.inArray("json", X.dataTypes) < 0 && (X.converters["text script"] = function() {}
                        ),
                        en = Jp(X, en, et, Dr),
                        Dr ? (X.ifModified && (tn = et.getResponseHeader("Last-Modified"),
                        tn && (f.lastModified[g] = tn),
                        tn = et.getResponseHeader("etag"),
                        tn && (f.etag[g] = tn)),
                        at === 204 || X.type === "HEAD" ? Zi = "nocontent" : at === 304 ? Zi = "notmodified" : (Zi = en.state,
                        Zo = en.data,
                        xr = en.error,
                        Dr = !xr)) : (xr = Zi,
                        (at || !Zi) && (Zi = "error",
                        at < 0 && (at = 0))),
                        et.status = at,
                        et.statusText = (Ft || Zi) + "",
                        Dr ? st.resolveWith(ue, [Zo, Zi, et]) : st.rejectWith(ue, [et, Zi, xr]),
                        et.statusCode(oi),
                        oi = void 0,
                        N && Be.trigger(Dr ? "ajaxSuccess" : "ajaxError", [et, X, Dr ? Zo : xr]),
                        qe.fireWith(ue, [et, Zi]),
                        N && (Be.trigger("ajaxComplete", [et, X]),
                        --f.active || f.event.trigger("ajaxStop")))
                    }
                    return et
                },
                getJSON: function(o, a, d) {
                    return f.get(o, a, d, "json")
                },
                getScript: function(o, a) {
                    return f.get(o, void 0, a, "script")
                }
            }),
            f.each(["get", "post"], function(o, a) {
                f[a] = function(d, g, m, y) {
                    return v(g) && (y = y || m,
                    m = g,
                    g = void 0),
                    f.ajax(f.extend({
                        url: d,
                        type: a,
                        dataType: y,
                        data: g,
                        success: m
                    }, f.isPlainObject(d) && d))
                }
            }),
            f.ajaxPrefilter(function(o) {
                var a;
                for (a in o.headers)
                    a.toLowerCase() === "content-type" && (o.contentType = o.headers[a] || "")
            }),
            f._evalUrl = function(o, a, d) {
                return f.ajax({
                    url: o,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(g) {
                        f.globalEval(g, a, d)
                    }
                })
            }
            ,
            f.fn.extend({
                wrapAll: function(o) {
                    var a;
                    return this[0] && (v(o) && (o = o.call(this[0])),
                    a = f(o, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && a.insertBefore(this[0]),
                    a.map(function() {
                        for (var d = this; d.firstElementChild; )
                            d = d.firstElementChild;
                        return d
                    }).append(this)),
                    this
                },
                wrapInner: function(o) {
                    return v(o) ? this.each(function(a) {
                        f(this).wrapInner(o.call(this, a))
                    }) : this.each(function() {
                        var a = f(this)
                          , d = a.contents();
                        d.length ? d.wrapAll(o) : a.append(o)
                    })
                },
                wrap: function(o) {
                    var a = v(o);
                    return this.each(function(d) {
                        f(this).wrapAll(a ? o.call(this, d) : o)
                    })
                },
                unwrap: function(o) {
                    return this.parent(o).not("body").each(function() {
                        f(this).replaceWith(this.childNodes)
                    }),
                    this
                }
            }),
            f.expr.pseudos.hidden = function(o) {
                return !f.expr.pseudos.visible(o)
            }
            ,
            f.expr.pseudos.visible = function(o) {
                return !!(o.offsetWidth || o.offsetHeight || o.getClientRects().length)
            }
            ,
            f.ajaxSettings.xhr = function() {
                try {
                    return new e.XMLHttpRequest
                } catch {}
            }
            ;
            var Zp = {
                0: 200,
                1223: 204
            }
              , Ko = f.ajaxSettings.xhr();
            b.cors = !!Ko && "withCredentials"in Ko,
            b.ajax = Ko = !!Ko,
            f.ajaxTransport(function(o) {
                var a, d;
                if (b.cors || Ko && !o.crossDomain)
                    return {
                        send: function(g, m) {
                            var y, w = o.xhr();
                            if (w.open(o.type, o.url, o.async, o.username, o.password),
                            o.xhrFields)
                                for (y in o.xhrFields)
                                    w[y] = o.xhrFields[y];
                            o.mimeType && w.overrideMimeType && w.overrideMimeType(o.mimeType),
                            !o.crossDomain && !g["X-Requested-With"] && (g["X-Requested-With"] = "XMLHttpRequest");
                            for (y in g)
                                w.setRequestHeader(y, g[y]);
                            a = function(k) {
                                return function() {
                                    a && (a = d = w.onload = w.onerror = w.onabort = w.ontimeout = w.onreadystatechange = null,
                                    k === "abort" ? w.abort() : k === "error" ? typeof w.status != "number" ? m(0, "error") : m(w.status, w.statusText) : m(Zp[w.status] || w.status, w.statusText, (w.responseType || "text") !== "text" || typeof w.responseText != "string" ? {
                                        binary: w.response
                                    } : {
                                        text: w.responseText
                                    }, w.getAllResponseHeaders()))
                                }
                            }
                            ,
                            w.onload = a(),
                            d = w.onerror = w.ontimeout = a("error"),
                            w.onabort !== void 0 ? w.onabort = d : w.onreadystatechange = function() {
                                w.readyState === 4 && e.setTimeout(function() {
                                    a && d()
                                })
                            }
                            ,
                            a = a("abort");
                            try {
                                w.send(o.hasContent && o.data || null)
                            } catch (k) {
                                if (a)
                                    throw k
                            }
                        },
                        abort: function() {
                            a && a()
                        }
                    }
            }),
            f.ajaxPrefilter(function(o) {
                o.crossDomain && (o.contents.script = !1)
            }),
            f.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(o) {
                        return f.globalEval(o),
                        o
                    }
                }
            }),
            f.ajaxPrefilter("script", function(o) {
                o.cache === void 0 && (o.cache = !1),
                o.crossDomain && (o.type = "GET")
            }),
            f.ajaxTransport("script", function(o) {
                if (o.crossDomain || o.scriptAttrs) {
                    var a, d;
                    return {
                        send: function(g, m) {
                            a = f("<script>").attr(o.scriptAttrs || {}).prop({
                                charset: o.scriptCharset,
                                src: o.url
                            }).on("load error", d = function(y) {
                                a.remove(),
                                d = null,
                                y && m(y.type === "error" ? 404 : 200, y.type)
                            }
                            ),
                            C.head.appendChild(a[0])
                        },
                        abort: function() {
                            d && d()
                        }
                    }
                }
            });
            var Zf = []
              , wa = /(=)\?(?=&|$)|\?\?/;
            f.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var o = Zf.pop() || f.expando + "_" + Wf.guid++;
                    return this[o] = !0,
                    o
                }
            }),
            f.ajaxPrefilter("json jsonp", function(o, a, d) {
                var g, m, y, w = o.jsonp !== !1 && (wa.test(o.url) ? "url" : typeof o.data == "string" && (o.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && wa.test(o.data) && "data");
                if (w || o.dataTypes[0] === "jsonp")
                    return g = o.jsonpCallback = v(o.jsonpCallback) ? o.jsonpCallback() : o.jsonpCallback,
                    w ? o[w] = o[w].replace(wa, "$1" + g) : o.jsonp !== !1 && (o.url += (ya.test(o.url) ? "&" : "?") + o.jsonp + "=" + g),
                    o.converters["script json"] = function() {
                        return y || f.error(g + " was not called"),
                        y[0]
                    }
                    ,
                    o.dataTypes[0] = "json",
                    m = e[g],
                    e[g] = function() {
                        y = arguments
                    }
                    ,
                    d.always(function() {
                        m === void 0 ? f(e).removeProp(g) : e[g] = m,
                        o[g] && (o.jsonpCallback = a.jsonpCallback,
                        Zf.push(g)),
                        y && v(m) && m(y[0]),
                        y = m = void 0
                    }),
                    "script"
            }),
            b.createHTMLDocument = function() {
                var o = C.implementation.createHTMLDocument("").body;
                return o.innerHTML = "<form></form><form></form>",
                o.childNodes.length === 2
            }(),
            f.parseHTML = function(o, a, d) {
                if (typeof o != "string")
                    return [];
                typeof a == "boolean" && (d = a,
                a = !1);
                var g, m, y;
                return a || (b.createHTMLDocument ? (a = C.implementation.createHTMLDocument(""),
                g = a.createElement("base"),
                g.href = C.location.href,
                a.head.appendChild(g)) : a = C),
                m = be.exec(o),
                y = !d && [],
                m ? [a.createElement(m[1])] : (m = Y([o], a, y),
                y && y.length && f(y).remove(),
                f.merge([], m.childNodes))
            }
            ,
            f.fn.load = function(o, a, d) {
                var g, m, y, w = this, k = o.indexOf(" ");
                return k > -1 && (g = Fn(o.slice(k)),
                o = o.slice(0, k)),
                v(a) ? (d = a,
                a = void 0) : a && typeof a == "object" && (m = "POST"),
                w.length > 0 && f.ajax({
                    url: o,
                    type: m || "GET",
                    dataType: "html",
                    data: a
                }).done(function(S) {
                    y = arguments,
                    w.html(g ? f("<div>").append(f.parseHTML(S)).find(g) : S)
                }).always(d && function(S, N) {
                    w.each(function() {
                        d.apply(this, y || [S.responseText, N, S])
                    })
                }
                ),
                this
            }
            ,
            f.expr.pseudos.animated = function(o) {
                return f.grep(f.timers, function(a) {
                    return o === a.elem
                }).length
            }
            ,
            f.offset = {
                setOffset: function(o, a, d) {
                    var g, m, y, w, k, S, N, Q = f.css(o, "position"), Z = f(o), X = {};
                    Q === "static" && (o.style.position = "relative"),
                    k = Z.offset(),
                    y = f.css(o, "top"),
                    S = f.css(o, "left"),
                    N = (Q === "absolute" || Q === "fixed") && (y + S).indexOf("auto") > -1,
                    N ? (g = Z.position(),
                    w = g.top,
                    m = g.left) : (w = parseFloat(y) || 0,
                    m = parseFloat(S) || 0),
                    v(a) && (a = a.call(o, d, f.extend({}, k))),
                    a.top != null && (X.top = a.top - k.top + w),
                    a.left != null && (X.left = a.left - k.left + m),
                    "using"in a ? a.using.call(o, X) : Z.css(X)
                }
            },
            f.fn.extend({
                offset: function(o) {
                    if (arguments.length)
                        return o === void 0 ? this : this.each(function(m) {
                            f.offset.setOffset(this, o, m)
                        });
                    var a, d, g = this[0];
                    if (g)
                        return g.getClientRects().length ? (a = g.getBoundingClientRect(),
                        d = g.ownerDocument.defaultView,
                        {
                            top: a.top + d.pageYOffset,
                            left: a.left + d.pageXOffset
                        }) : {
                            top: 0,
                            left: 0
                        }
                },
                position: function() {
                    if (this[0]) {
                        var o, a, d, g = this[0], m = {
                            top: 0,
                            left: 0
                        };
                        if (f.css(g, "position") === "fixed")
                            a = g.getBoundingClientRect();
                        else {
                            for (a = this.offset(),
                            d = g.ownerDocument,
                            o = g.offsetParent || d.documentElement; o && (o === d.body || o === d.documentElement) && f.css(o, "position") === "static"; )
                                o = o.parentNode;
                            o && o !== g && o.nodeType === 1 && (m = f(o).offset(),
                            m.top += f.css(o, "borderTopWidth", !0),
                            m.left += f.css(o, "borderLeftWidth", !0))
                        }
                        return {
                            top: a.top - m.top - f.css(g, "marginTop", !0),
                            left: a.left - m.left - f.css(g, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var o = this.offsetParent; o && f.css(o, "position") === "static"; )
                            o = o.offsetParent;
                        return o || Lt
                    })
                }
            }),
            f.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(o, a) {
                var d = a === "pageYOffset";
                f.fn[o] = function(g) {
                    return ze(this, function(m, y, w) {
                        var k;
                        if (E(m) ? k = m : m.nodeType === 9 && (k = m.defaultView),
                        w === void 0)
                            return k ? k[a] : m[y];
                        k ? k.scrollTo(d ? k.pageXOffset : w, d ? w : k.pageYOffset) : m[y] = w
                    }, o, g, arguments.length)
                }
            }),
            f.each(["top", "left"], function(o, a) {
                f.cssHooks[a] = qt(b.pixelPosition, function(d, g) {
                    if (g)
                        return g = mr(d, a),
                        yt.test(g) ? f(d).position()[a] + "px" : g
                })
            }),
            f.each({
                Height: "height",
                Width: "width"
            }, function(o, a) {
                f.each({
                    padding: "inner" + o,
                    content: a,
                    "": "outer" + o
                }, function(d, g) {
                    f.fn[g] = function(m, y) {
                        var w = arguments.length && (d || typeof m != "boolean")
                          , k = d || (m === !0 || y === !0 ? "margin" : "border");
                        return ze(this, function(S, N, Q) {
                            var Z;
                            return E(S) ? g.indexOf("outer") === 0 ? S["inner" + o] : S.document.documentElement["client" + o] : S.nodeType === 9 ? (Z = S.documentElement,
                            Math.max(S.body["scroll" + o], Z["scroll" + o], S.body["offset" + o], Z["offset" + o], Z["client" + o])) : Q === void 0 ? f.css(S, N, k) : f.style(S, N, Q, k)
                        }, a, w ? m : void 0, w)
                    }
                })
            }),
            f.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(o, a) {
                f.fn[a] = function(d) {
                    return this.on(a, d)
                }
            }),
            f.fn.extend({
                bind: function(o, a, d) {
                    return this.on(o, null, a, d)
                },
                unbind: function(o, a) {
                    return this.off(o, null, a)
                },
                delegate: function(o, a, d, g) {
                    return this.on(a, o, d, g)
                },
                undelegate: function(o, a, d) {
                    return arguments.length === 1 ? this.off(o, "**") : this.off(a, o || "**", d)
                },
                hover: function(o, a) {
                    return this.on("mouseenter", o).on("mouseleave", a || o)
                }
            }),
            f.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(o, a) {
                f.fn[a] = function(d, g) {
                    return arguments.length > 0 ? this.on(a, null, d, g) : this.trigger(a)
                }
            });
            var eg = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
            f.proxy = function(o, a) {
                var d, g, m;
                if (typeof a == "string" && (d = o[a],
                a = o,
                o = d),
                !!v(o))
                    return g = n.call(arguments, 2),
                    m = function() {
                        return o.apply(a || this, g.concat(n.call(arguments)))
                    }
                    ,
                    m.guid = o.guid = o.guid || f.guid++,
                    m
            }
            ,
            f.holdReady = function(o) {
                o ? f.readyWait++ : f.ready(!0)
            }
            ,
            f.isArray = Array.isArray,
            f.parseJSON = JSON.parse,
            f.nodeName = H,
            f.isFunction = v,
            f.isWindow = E,
            f.camelCase = Ge,
            f.type = P,
            f.now = Date.now,
            f.isNumeric = function(o) {
                var a = f.type(o);
                return (a === "number" || a === "string") && !isNaN(o - parseFloat(o))
            }
            ,
            f.trim = function(o) {
                return o == null ? "" : (o + "").replace(eg, "$1")
            }
            ;
            var tg = e.jQuery
              , ig = e.$;
            return f.noConflict = function(o) {
                return e.$ === f && (e.$ = ig),
                o && e.jQuery === f && (e.jQuery = tg),
                f
            }
            ,
            typeof i > "u" && (e.jQuery = e.$ = f),
            f
        })
    }(Tu)),
    Tu.exports
}
var gg = pg();
const Fm = hg(gg);
function $r(s) {
    if (s === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s
}
function _h(s, e) {
    s.prototype = Object.create(e.prototype),
    s.prototype.constructor = s,
    s.__proto__ = e
}
/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Gi = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, zo = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, ef, ai, wt, Ar = 1e8, yi = 1 / Ar, al = Math.PI * 2, _g = al / 4, mg = 0, mh = Math.sqrt, yg = Math.cos, vg = Math.sin, ei = function(e) {
    return typeof e == "string"
}, Pt = function(e) {
    return typeof e == "function"
}, Qr = function(e) {
    return typeof e == "number"
}, tf = function(e) {
    return typeof e > "u"
}, Lr = function(e) {
    return typeof e == "object"
}, Ri = function(e) {
    return e !== !1
}, rf = function() {
    return typeof window < "u"
}, lu = function(e) {
    return Pt(e) || ei(e)
}, yh = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, vi = Array.isArray, ll = /(?:-?\.?\d|\.)+/gi, vh = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Do = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Aa = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Dh = /[+-]=-?[.\d]+/, xh = /[^,'"\[\]\s]+/gi, Dg = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Ct, Cr, fl, nf, Qi = {}, Hu = {}, bh, wh = function(e) {
    return (Hu = $o(e, Qi)) && Ii
}, of = function(e, i) {
    return console.warn("Invalid property", e, "set to", i, "Missing plugin? gsap.registerPlugin()")
}, Hs = function(e, i) {
    return !i && console.warn(e)
}, Ch = function(e, i) {
    return e && (Qi[e] = i) && Hu && (Hu[e] = i) || Qi
}, zs = function() {
    return 0
}, xg = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, Su = {
    suppressEvents: !0,
    kill: !1
}, bg = {
    suppressEvents: !0
}, sf = {}, vn = [], cl = {}, Eh, ji = {}, Ma = {}, nc = 30, ku = [], uf = "", af = function(e) {
    var i = e[0], t, r;
    if (Lr(i) || Pt(i) || (e = [e]),
    !(t = (i._gsap || {}).harness)) {
        for (r = ku.length; r-- && !ku[r].targetTest(i); )
            ;
        t = ku[r]
    }
    for (r = e.length; r--; )
        e[r] && (e[r]._gsap || (e[r]._gsap = new Gh(e[r],t))) || e.splice(r, 1);
    return e
}, jn = function(e) {
    return e._gsap || af(sr(e))[0]._gsap
}, Th = function(e, i, t) {
    return (t = e[i]) && Pt(t) ? e[i]() : tf(t) && e.getAttribute && e.getAttribute(i) || t
}, Li = function(e, i) {
    return (e = e.split(",")).forEach(i) || e
}, Ot = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, zt = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
}, Fo = function(e, i) {
    var t = i.charAt(0)
      , r = parseFloat(i.substr(2));
    return e = parseFloat(e),
    t === "+" ? e + r : t === "-" ? e - r : t === "*" ? e * r : e / r
}, wg = function(e, i) {
    for (var t = i.length, r = 0; e.indexOf(i[r]) < 0 && ++r < t; )
        ;
    return r < t
}, zu = function() {
    var e = vn.length, i = vn.slice(0), t, r;
    for (cl = {},
    vn.length = 0,
    t = 0; t < e; t++)
        r = i[t],
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
}, Sh = function(e, i, t, r) {
    vn.length && !ai && zu(),
    e.render(i, t, ai && i < 0 && (e._initted || e._startAt)),
    vn.length && !ai && zu()
}, kh = function(e) {
    var i = parseFloat(e);
    return (i || i === 0) && (e + "").match(xh).length < 2 ? i : ei(e) ? e.trim() : e
}, Fh = function(e) {
    return e
}, Ki = function(e, i) {
    for (var t in i)
        t in e || (e[t] = i[t]);
    return e
}, Cg = function(e) {
    return function(i, t) {
        for (var r in t)
            r in i || r === "duration" && e || r === "ease" || (i[r] = t[r])
    }
}, $o = function(e, i) {
    for (var t in i)
        e[t] = i[t];
    return e
}, oc = function s(e, i) {
    for (var t in i)
        t !== "__proto__" && t !== "constructor" && t !== "prototype" && (e[t] = Lr(i[t]) ? s(e[t] || (e[t] = {}), i[t]) : i[t]);
    return e
}, $u = function(e, i) {
    var t = {}, r;
    for (r in e)
        r in i || (t[r] = e[r]);
    return t
}, vs = function(e) {
    var i = e.parent || Ct
      , t = e.keyframes ? Cg(vi(e.keyframes)) : Ki;
    if (Ri(e.inherit))
        for (; i; )
            t(e, i.vars.defaults),
            i = i.parent || i._dp;
    return e
}, Eg = function(e, i) {
    for (var t = e.length, r = t === i.length; r && t-- && e[t] === i[t]; )
        ;
    return t < 0
}, Ph = function(e, i, t, r, n) {
    var u = e[r], l;
    if (n)
        for (l = i[n]; u && u[n] > l; )
            u = u._prev;
    return u ? (i._next = u._next,
    u._next = i) : (i._next = e[t],
    e[t] = i),
    i._next ? i._next._prev = i : e[r] = i,
    i._prev = u,
    i.parent = i._dp = e,
    i
}, oa = function(e, i, t, r) {
    t === void 0 && (t = "_first"),
    r === void 0 && (r = "_last");
    var n = i._prev
      , u = i._next;
    n ? n._next = u : e[t] === i && (e[t] = u),
    u ? u._prev = n : e[r] === i && (e[r] = n),
    i._next = i._prev = i.parent = null
}, wn = function(e, i) {
    e.parent && (!i || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
    e._act = 0
}, Xn = function(e, i) {
    if (e && (!i || i._end > e._dur || i._start < 0))
        for (var t = e; t; )
            t._dirty = 1,
            t = t.parent;
    return e
}, Tg = function(e) {
    for (var i = e.parent; i && i.parent; )
        i._dirty = 1,
        i.totalDuration(),
        i = i.parent;
    return e
}, hl = function(e, i, t, r) {
    return e._startAt && (ai ? e._startAt.revert(Su) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(i, !0, r))
}, Sg = function s(e) {
    return !e || e._ts && s(e.parent)
}, sc = function(e) {
    return e._repeat ? qo(e._tTime, e = e.duration() + e._rDelay) * e : 0
}, qo = function(e, i) {
    var t = Math.floor(e = zt(e / i));
    return e && t === e ? t - 1 : t
}, qu = function(e, i) {
    return (e - i._start) * i._ts + (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur)
}, sa = function(e) {
    return e._end = zt(e._start + (e._tDur / Math.abs(e._ts || e._rts || yi) || 0))
}, ua = function(e, i) {
    var t = e._dp;
    return t && t.smoothChildTiming && e._ts && (e._start = zt(t._time - (e._ts > 0 ? i / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - i) / -e._ts)),
    sa(e),
    t._dirty || Xn(t, e)),
    e
}, Ah = function(e, i) {
    var t;
    if ((i._time || !i._dur && i._initted || i._start < e._time && (i._dur || !i.add)) && (t = qu(e.rawTime(), i),
    (!i._dur || eu(0, i.totalDuration(), t) - i._tTime > yi) && i.render(t, !0)),
    Xn(e, i)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration())
            for (t = e; t._dp; )
                t.rawTime() >= 0 && t.totalTime(t._tTime),
                t = t._dp;
        e._zTime = -1e-8
    }
}, Sr = function(e, i, t, r) {
    return i.parent && wn(i),
    i._start = zt((Qr(t) ? t : t || e !== Ct ? rr(e, t, i) : e._time) + i._delay),
    i._end = zt(i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0)),
    Ph(e, i, "_first", "_last", e._sort ? "_start" : 0),
    dl(i) || (e._recent = i),
    r || Ah(e, i),
    e._ts < 0 && ua(e, e._tTime),
    e
}, Mh = function(e, i) {
    return (Qi.ScrollTrigger || of("scrollTrigger", i)) && Qi.ScrollTrigger.create(i, e)
}, Oh = function(e, i, t, r, n) {
    if (ff(e, i, n),
    !e._initted)
        return 1;
    if (!t && e._pt && !ai && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Eh !== Wi.frame)
        return vn.push(e),
        e._lazy = [n, r],
        1
}, kg = function s(e) {
    var i = e.parent;
    return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || s(i))
}, dl = function(e) {
    var i = e.data;
    return i === "isFromStart" || i === "isStart"
}, Fg = function(e, i, t, r) {
    var n = e.ratio, u = i < 0 || !i && (!e._start && kg(e) && !(!e._initted && dl(e)) || (e._ts < 0 || e._dp._ts < 0) && !dl(e)) ? 0 : 1, l = e._rDelay, c = 0, p, _, x;
    if (l && e._repeat && (c = eu(0, e._tDur, i),
    _ = qo(c, l),
    e._yoyo && _ & 1 && (u = 1 - u),
    _ !== qo(e._tTime, l) && (n = 1 - u,
    e.vars.repeatRefresh && e._initted && e.invalidate())),
    u !== n || ai || r || e._zTime === yi || !i && e._zTime) {
        if (!e._initted && Oh(e, i, r, t, c))
            return;
        for (x = e._zTime,
        e._zTime = i || (t ? yi : 0),
        t || (t = i && !x),
        e.ratio = u,
        e._from && (u = 1 - u),
        e._time = 0,
        e._tTime = c,
        p = e._pt; p; )
            p.r(u, p.d),
            p = p._next;
        i < 0 && hl(e, i, t, !0),
        e._onUpdate && !t && Ui(e, "onUpdate"),
        c && e._repeat && !t && e.parent && Ui(e, "onRepeat"),
        (i >= e._tDur || i < 0) && e.ratio === u && (u && wn(e, 1),
        !t && !ai && (Ui(e, u ? "onComplete" : "onReverseComplete", !0),
        e._prom && e._prom()))
    } else
        e._zTime || (e._zTime = i)
}, Pg = function(e, i, t) {
    var r;
    if (t > i)
        for (r = e._first; r && r._start <= t; ) {
            if (r.data === "isPause" && r._start > i)
                return r;
            r = r._next
        }
    else
        for (r = e._last; r && r._start >= t; ) {
            if (r.data === "isPause" && r._start < i)
                return r;
            r = r._prev
        }
}, jo = function(e, i, t, r) {
    var n = e._repeat
      , u = zt(i) || 0
      , l = e._tTime / e._tDur;
    return l && !r && (e._time *= u / e._dur),
    e._dur = u,
    e._tDur = n ? n < 0 ? 1e10 : zt(u * (n + 1) + e._rDelay * n) : u,
    l > 0 && !r && ua(e, e._tTime = e._tDur * l),
    e.parent && sa(e),
    t || Xn(e.parent, e),
    e
}, uc = function(e) {
    return e instanceof ki ? Xn(e) : jo(e, e._dur)
}, Ag = {
    _start: 0,
    endTime: zs,
    totalDuration: zs
}, rr = function s(e, i, t) {
    var r = e.labels, n = e._recent || Ag, u = e.duration() >= Ar ? n.endTime(!1) : e._dur, l, c, p;
    return ei(i) && (isNaN(i) || i in r) ? (c = i.charAt(0),
    p = i.substr(-1) === "%",
    l = i.indexOf("="),
    c === "<" || c === ">" ? (l >= 0 && (i = i.replace(/=/, "")),
    (c === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (p ? (l < 0 ? n : t).totalDuration() / 100 : 1)) : l < 0 ? (i in r || (r[i] = u),
    r[i]) : (c = parseFloat(i.charAt(l - 1) + i.substr(l + 1)),
    p && t && (c = c / 100 * (vi(t) ? t[0] : t).totalDuration()),
    l > 1 ? s(e, i.substr(0, l - 1), t) + c : u + c)) : i == null ? u : +i
}, Ds = function(e, i, t) {
    var r = Qr(i[1]), n = (r ? 2 : 1) + (e < 2 ? 0 : 1), u = i[n], l, c;
    if (r && (u.duration = i[1]),
    u.parent = t,
    e) {
        for (l = u,
        c = t; c && !("immediateRender"in l); )
            l = c.vars.defaults || {},
            c = Ri(c.vars.inherit) && c.parent;
        u.immediateRender = Ri(l.immediateRender),
        e < 2 ? u.runBackwards = 1 : u.startAt = i[n - 1]
    }
    return new Ht(i[0],u,i[n + 1])
}, Tn = function(e, i) {
    return e || e === 0 ? i(e) : i
}, eu = function(e, i, t) {
    return t < e ? e : t > i ? i : t
}, _i = function(e, i) {
    return !ei(e) || !(i = Dg.exec(e)) ? "" : i[1]
}, Mg = function(e, i, t) {
    return Tn(t, function(r) {
        return eu(e, i, r)
    })
}, pl = [].slice, Rh = function(e, i) {
    return e && Lr(e) && "length"in e && (!i && !e.length || e.length - 1 in e && Lr(e[0])) && !e.nodeType && e !== Cr
}, Og = function(e, i, t) {
    return t === void 0 && (t = []),
    e.forEach(function(r) {
        var n;
        return ei(r) && !i || Rh(r, 1) ? (n = t).push.apply(n, sr(r)) : t.push(r)
    }) || t
}, sr = function(e, i, t) {
    return wt && !i && wt.selector ? wt.selector(e) : ei(e) && !t && (fl || !Xo()) ? pl.call((i || nf).querySelectorAll(e), 0) : vi(e) ? Og(e, t) : Rh(e) ? pl.call(e, 0) : e ? [e] : []
}, gl = function(e) {
    return e = sr(e)[0] || Hs("Invalid scope") || {},
    function(i) {
        var t = e.current || e.nativeElement || e;
        return sr(i, t.querySelectorAll ? t : t === e ? Hs("Invalid scope") || nf.createElement("div") : e)
    }
}, Lh = function(e) {
    return e.sort(function() {
        return .5 - Math.random()
    })
}, Nh = function(e) {
    if (Pt(e))
        return e;
    var i = Lr(e) ? e : {
        each: e
    }
      , t = Wn(i.ease)
      , r = i.from || 0
      , n = parseFloat(i.base) || 0
      , u = {}
      , l = r > 0 && r < 1
      , c = isNaN(r) || l
      , p = i.axis
      , _ = r
      , x = r;
    return ei(r) ? _ = x = {
        center: .5,
        edges: .5,
        end: 1
    }[r] || 0 : !l && c && (_ = r[0],
    x = r[1]),
    function(D, h, b) {
        var v = (b || i).length, E = u[v], C, L, A, P, M, z, f, q, H;
        if (!E) {
            if (H = i.grid === "auto" ? 0 : (i.grid || [1, Ar])[1],
            !H) {
                for (f = -1e8; f < (f = b[H++].getBoundingClientRect().left) && H < v; )
                    ;
                H < v && H--
            }
            for (E = u[v] = [],
            C = c ? Math.min(H, v) * _ - .5 : r % H,
            L = H === Ar ? 0 : c ? v * x / H - .5 : r / H | 0,
            f = 0,
            q = Ar,
            z = 0; z < v; z++)
                A = z % H - C,
                P = L - (z / H | 0),
                E[z] = M = p ? Math.abs(p === "y" ? P : A) : mh(A * A + P * P),
                M > f && (f = M),
                M < q && (q = M);
            r === "random" && Lh(E),
            E.max = f - q,
            E.min = q,
            E.v = v = (parseFloat(i.amount) || parseFloat(i.each) * (H > v ? v - 1 : p ? p === "y" ? v / H : H : Math.max(H, v / H)) || 0) * (r === "edges" ? -1 : 1),
            E.b = v < 0 ? n - v : n,
            E.u = _i(i.amount || i.each) || 0,
            t = t && v < 0 ? Yh(t) : t
        }
        return v = (E[D] - E.min) / E.max || 0,
        zt(E.b + (t ? t(v) : v) * E.v) + E.u
    }
}, _l = function(e) {
    var i = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(t) {
        var r = zt(Math.round(parseFloat(t) / e) * e * i);
        return (r - r % 1) / i + (Qr(t) ? 0 : _i(t))
    }
}, Bh = function(e, i) {
    var t = vi(e), r, n;
    return !t && Lr(e) && (r = t = e.radius || Ar,
    e.values ? (e = sr(e.values),
    (n = !Qr(e[0])) && (r *= r)) : e = _l(e.increment)),
    Tn(i, t ? Pt(e) ? function(u) {
        return n = e(u),
        Math.abs(n - u) <= r ? n : u
    }
    : function(u) {
        for (var l = parseFloat(n ? u.x : u), c = parseFloat(n ? u.y : 0), p = Ar, _ = 0, x = e.length, D, h; x--; )
            n ? (D = e[x].x - l,
            h = e[x].y - c,
            D = D * D + h * h) : D = Math.abs(e[x] - l),
            D < p && (p = D,
            _ = x);
        return _ = !r || p <= r ? e[_] : u,
        n || _ === u || Qr(u) ? _ : _ + _i(u)
    }
    : _l(e))
}, Ih = function(e, i, t, r) {
    return Tn(vi(e) ? !i : t === !0 ? !!(t = 0) : !r, function() {
        return vi(e) ? e[~~(Math.random() * e.length)] : (t = t || 1e-5) && (r = t < 1 ? Math.pow(10, (t + "").length - 2) : 1) && Math.floor(Math.round((e - t / 2 + Math.random() * (i - e + t * .99)) / t) * t * r) / r
    })
}, Rg = function() {
    for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++)
        i[t] = arguments[t];
    return function(r) {
        return i.reduce(function(n, u) {
            return u(n)
        }, r)
    }
}, Lg = function(e, i) {
    return function(t) {
        return e(parseFloat(t)) + (i || _i(t))
    }
}, Ng = function(e, i, t) {
    return zh(e, i, 0, 1, t)
}, Hh = function(e, i, t) {
    return Tn(t, function(r) {
        return e[~~i(r)]
    })
}, Bg = function s(e, i, t) {
    var r = i - e;
    return vi(e) ? Hh(e, s(0, e.length), i) : Tn(t, function(n) {
        return (r + (n - e) % r) % r + e
    })
}, Ig = function s(e, i, t) {
    var r = i - e
      , n = r * 2;
    return vi(e) ? Hh(e, s(0, e.length - 1), i) : Tn(t, function(u) {
        return u = (n + (u - e) % n) % n || 0,
        e + (u > r ? n - u : u)
    })
}, $s = function(e) {
    for (var i = 0, t = "", r, n, u, l; ~(r = e.indexOf("random(", i)); )
        u = e.indexOf(")", r),
        l = e.charAt(r + 7) === "[",
        n = e.substr(r + 7, u - r - 7).match(l ? xh : ll),
        t += e.substr(i, r - i) + Ih(l ? n : +n[0], l ? 0 : +n[1], +n[2] || 1e-5),
        i = u + 1;
    return t + e.substr(i, e.length - i)
}, zh = function(e, i, t, r, n) {
    var u = i - e
      , l = r - t;
    return Tn(n, function(c) {
        return t + ((c - e) / u * l || 0)
    })
}, Hg = function s(e, i, t, r) {
    var n = isNaN(e + i) ? 0 : function(h) {
        return (1 - h) * e + h * i
    }
    ;
    if (!n) {
        var u = ei(e), l = {}, c, p, _, x, D;
        if (t === !0 && (r = 1) && (t = null),
        u)
            e = {
                p: e
            },
            i = {
                p: i
            };
        else if (vi(e) && !vi(i)) {
            for (_ = [],
            x = e.length,
            D = x - 2,
            p = 1; p < x; p++)
                _.push(s(e[p - 1], e[p]));
            x--,
            n = function(b) {
                b *= x;
                var v = Math.min(D, ~~b);
                return _[v](b - v)
            }
            ,
            t = i
        } else
            r || (e = $o(vi(e) ? [] : {}, e));
        if (!_) {
            for (c in i)
                lf.call(l, e, c, "get", i[c]);
            n = function(b) {
                return df(b, l) || (u ? e.p : e)
            }
        }
    }
    return Tn(t, n)
}, ac = function(e, i, t) {
    var r = e.labels, n = Ar, u, l, c;
    for (u in r)
        l = r[u] - i,
        l < 0 == !!t && l && n > (l = Math.abs(l)) && (c = u,
        n = l);
    return c
}, Ui = function(e, i, t) {
    var r = e.vars, n = r[i], u = wt, l = e._ctx, c, p, _;
    if (n)
        return c = r[i + "Params"],
        p = r.callbackScope || e,
        t && vn.length && zu(),
        l && (wt = l),
        _ = c ? n.apply(p, c) : n.call(p),
        wt = u,
        _
}, us = function(e) {
    return wn(e),
    e.scrollTrigger && e.scrollTrigger.kill(!!ai),
    e.progress() < 1 && Ui(e, "onInterrupt"),
    e
}, xo, $h = [], qh = function(e) {
    if (e)
        if (e = !e.name && e.default || e,
        rf() || e.headless) {
            var i = e.name
              , t = Pt(e)
              , r = i && !t && e.init ? function() {
                this._props = []
            }
            : e
              , n = {
                init: zs,
                render: df,
                add: lf,
                kill: t0,
                modifier: e0,
                rawVars: 0
            }
              , u = {
                targetTest: 0,
                get: 0,
                getSetter: hf,
                aliases: {},
                register: 0
            };
            if (Xo(),
            e !== r) {
                if (ji[i])
                    return;
                Ki(r, Ki($u(e, n), u)),
                $o(r.prototype, $o(n, $u(e, u))),
                ji[r.prop = i] = r,
                e.targetTest && (ku.push(r),
                sf[i] = 1),
                i = (i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) + "Plugin"
            }
            Ch(i, r),
            e.register && e.register(Ii, r, Ni)
        } else
            $h.push(e)
}, _t = 255, as = {
    aqua: [0, _t, _t],
    lime: [0, _t, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _t],
    navy: [0, 0, 128],
    white: [_t, _t, _t],
    olive: [128, 128, 0],
    yellow: [_t, _t, 0],
    orange: [_t, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_t, 0, 0],
    pink: [_t, 192, 203],
    cyan: [0, _t, _t],
    transparent: [_t, _t, _t, 0]
}, Oa = function(e, i, t) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0,
    (e * 6 < 1 ? i + (t - i) * e * 6 : e < .5 ? t : e * 3 < 2 ? i + (t - i) * (2 / 3 - e) * 6 : i) * _t + .5 | 0
}, jh = function(e, i, t) {
    var r = e ? Qr(e) ? [e >> 16, e >> 8 & _t, e & _t] : 0 : as.black, n, u, l, c, p, _, x, D, h, b;
    if (!r) {
        if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
        as[e])
            r = as[e];
        else if (e.charAt(0) === "#") {
            if (e.length < 6 && (n = e.charAt(1),
            u = e.charAt(2),
            l = e.charAt(3),
            e = "#" + n + n + u + u + l + l + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
            e.length === 9)
                return r = parseInt(e.substr(1, 6), 16),
                [r >> 16, r >> 8 & _t, r & _t, parseInt(e.substr(7), 16) / 255];
            e = parseInt(e.substr(1), 16),
            r = [e >> 16, e >> 8 & _t, e & _t]
        } else if (e.substr(0, 3) === "hsl") {
            if (r = b = e.match(ll),
            !i)
                c = +r[0] % 360 / 360,
                p = +r[1] / 100,
                _ = +r[2] / 100,
                u = _ <= .5 ? _ * (p + 1) : _ + p - _ * p,
                n = _ * 2 - u,
                r.length > 3 && (r[3] *= 1),
                r[0] = Oa(c + 1 / 3, n, u),
                r[1] = Oa(c, n, u),
                r[2] = Oa(c - 1 / 3, n, u);
            else if (~e.indexOf("="))
                return r = e.match(vh),
                t && r.length < 4 && (r[3] = 1),
                r
        } else
            r = e.match(ll) || as.transparent;
        r = r.map(Number)
    }
    return i && !b && (n = r[0] / _t,
    u = r[1] / _t,
    l = r[2] / _t,
    x = Math.max(n, u, l),
    D = Math.min(n, u, l),
    _ = (x + D) / 2,
    x === D ? c = p = 0 : (h = x - D,
    p = _ > .5 ? h / (2 - x - D) : h / (x + D),
    c = x === n ? (u - l) / h + (u < l ? 6 : 0) : x === u ? (l - n) / h + 2 : (n - u) / h + 4,
    c *= 60),
    r[0] = ~~(c + .5),
    r[1] = ~~(p * 100 + .5),
    r[2] = ~~(_ * 100 + .5)),
    t && r.length < 4 && (r[3] = 1),
    r
}, Xh = function(e) {
    var i = []
      , t = []
      , r = -1;
    return e.split(Dn).forEach(function(n) {
        var u = n.match(Do) || [];
        i.push.apply(i, u),
        t.push(r += u.length + 1)
    }),
    i.c = t,
    i
}, lc = function(e, i, t) {
    var r = "", n = (e + r).match(Dn), u = i ? "hsla(" : "rgba(", l = 0, c, p, _, x;
    if (!n)
        return e;
    if (n = n.map(function(D) {
        return (D = jh(D, i, 1)) && u + (i ? D[0] + "," + D[1] + "%," + D[2] + "%," + D[3] : D.join(",")) + ")"
    }),
    t && (_ = Xh(e),
    c = t.c,
    c.join(r) !== _.c.join(r)))
        for (p = e.replace(Dn, "1").split(Do),
        x = p.length - 1; l < x; l++)
            r += p[l] + (~c.indexOf(l) ? n.shift() || u + "0,0,0,0)" : (_.length ? _ : n.length ? n : t).shift());
    if (!p)
        for (p = e.split(Dn),
        x = p.length - 1; l < x; l++)
            r += p[l] + n[l];
    return r + p[x]
}, Dn = function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
    for (e in as)
        s += "|" + e + "\\b";
    return new RegExp(s + ")","gi")
}(), zg = /hsl[a]?\(/, Wh = function(e) {
    var i = e.join(" "), t;
    if (Dn.lastIndex = 0,
    Dn.test(i))
        return t = zg.test(i),
        e[1] = lc(e[1], t),
        e[0] = lc(e[0], t, Xh(e[1])),
        !0
}, qs, Wi = function() {
    var s = Date.now, e = 500, i = 33, t = s(), r = t, n = 1e3 / 240, u = n, l = [], c, p, _, x, D, h, b = function v(E) {
        var C = s() - r, L = E === !0, A, P, M, z;
        if ((C > e || C < 0) && (t += C - i),
        r += C,
        M = r - t,
        A = M - u,
        (A > 0 || L) && (z = ++x.frame,
        D = M - x.time * 1e3,
        x.time = M = M / 1e3,
        u += A + (A >= n ? 4 : n - A),
        P = 1),
        L || (c = p(v)),
        P)
            for (h = 0; h < l.length; h++)
                l[h](M, D, z, E)
    };
    return x = {
        time: 0,
        frame: 0,
        tick: function() {
            b(!0)
        },
        deltaRatio: function(E) {
            return D / (1e3 / (E || 60))
        },
        wake: function() {
            bh && (!fl && rf() && (Cr = fl = window,
            nf = Cr.document || {},
            Qi.gsap = Ii,
            (Cr.gsapVersions || (Cr.gsapVersions = [])).push(Ii.version),
            wh(Hu || Cr.GreenSockGlobals || !Cr.gsap && Cr || {}),
            $h.forEach(qh)),
            _ = typeof requestAnimationFrame < "u" && requestAnimationFrame,
            c && x.sleep(),
            p = _ || function(E) {
                return setTimeout(E, u - x.time * 1e3 + 1 | 0)
            }
            ,
            qs = 1,
            b(2))
        },
        sleep: function() {
            (_ ? cancelAnimationFrame : clearTimeout)(c),
            qs = 0,
            p = zs
        },
        lagSmoothing: function(E, C) {
            e = E || 1 / 0,
            i = Math.min(C || 33, e)
        },
        fps: function(E) {
            n = 1e3 / (E || 240),
            u = x.time * 1e3 + n
        },
        add: function(E, C, L) {
            var A = C ? function(P, M, z, f) {
                E(P, M, z, f),
                x.remove(A)
            }
            : E;
            return x.remove(E),
            l[L ? "unshift" : "push"](A),
            Xo(),
            A
        },
        remove: function(E, C) {
            ~(C = l.indexOf(E)) && l.splice(C, 1) && h >= C && h--
        },
        _listeners: l
    },
    x
}(), Xo = function() {
    return !qs && Wi.wake()
}, rt = {}, $g = /^[\d.\-M][\d.\-,\s]/, qg = /["']/g, jg = function(e) {
    for (var i = {}, t = e.substr(1, e.length - 3).split(":"), r = t[0], n = 1, u = t.length, l, c, p; n < u; n++)
        c = t[n],
        l = n !== u - 1 ? c.lastIndexOf(",") : c.length,
        p = c.substr(0, l),
        i[r] = isNaN(p) ? p.replace(qg, "").trim() : +p,
        r = c.substr(l + 1).trim();
    return i
}, Xg = function(e) {
    var i = e.indexOf("(") + 1
      , t = e.indexOf(")")
      , r = e.indexOf("(", i);
    return e.substring(i, ~r && r < t ? e.indexOf(")", t + 1) : t)
}, Wg = function(e) {
    var i = (e + "").split("(")
      , t = rt[i[0]];
    return t && i.length > 1 && t.config ? t.config.apply(null, ~e.indexOf("{") ? [jg(i[1])] : Xg(e).split(",").map(kh)) : rt._CE && $g.test(e) ? rt._CE("", e) : t
}, Yh = function(e) {
    return function(i) {
        return 1 - e(1 - i)
    }
}, Vh = function s(e, i) {
    for (var t = e._first, r; t; )
        t instanceof ki ? s(t, i) : t.vars.yoyoEase && (!t._yoyo || !t._repeat) && t._yoyo !== i && (t.timeline ? s(t.timeline, i) : (r = t._ease,
        t._ease = t._yEase,
        t._yEase = r,
        t._yoyo = i)),
        t = t._next
}, Wn = function(e, i) {
    return e && (Pt(e) ? e : rt[e] || Wg(e)) || i
}, ro = function(e, i, t, r) {
    t === void 0 && (t = function(c) {
        return 1 - i(1 - c)
    }
    ),
    r === void 0 && (r = function(c) {
        return c < .5 ? i(c * 2) / 2 : 1 - i((1 - c) * 2) / 2
    }
    );
    var n = {
        easeIn: i,
        easeOut: t,
        easeInOut: r
    }, u;
    return Li(e, function(l) {
        rt[l] = Qi[l] = n,
        rt[u = l.toLowerCase()] = t;
        for (var c in n)
            rt[u + (c === "easeIn" ? ".in" : c === "easeOut" ? ".out" : ".inOut")] = rt[l + "." + c] = n[c]
    }),
    n
}, Uh = function(e) {
    return function(i) {
        return i < .5 ? (1 - e(1 - i * 2)) / 2 : .5 + e((i - .5) * 2) / 2
    }
}, Ra = function s(e, i, t) {
    var r = i >= 1 ? i : 1
      , n = (t || (e ? .3 : .45)) / (i < 1 ? i : 1)
      , u = n / al * (Math.asin(1 / r) || 0)
      , l = function(_) {
        return _ === 1 ? 1 : r * Math.pow(2, -10 * _) * vg((_ - u) * n) + 1
    }
      , c = e === "out" ? l : e === "in" ? function(p) {
        return 1 - l(1 - p)
    }
    : Uh(l);
    return n = al / n,
    c.config = function(p, _) {
        return s(e, p, _)
    }
    ,
    c
}, La = function s(e, i) {
    i === void 0 && (i = 1.70158);
    var t = function(u) {
        return u ? --u * u * ((i + 1) * u + i) + 1 : 0
    }
      , r = e === "out" ? t : e === "in" ? function(n) {
        return 1 - t(1 - n)
    }
    : Uh(t);
    return r.config = function(n) {
        return s(e, n)
    }
    ,
    r
};
Li("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, e) {
    var i = e < 5 ? e + 1 : e;
    ro(s + ",Power" + (i - 1), e ? function(t) {
        return Math.pow(t, i)
    }
    : function(t) {
        return t
    }
    , function(t) {
        return 1 - Math.pow(1 - t, i)
    }, function(t) {
        return t < .5 ? Math.pow(t * 2, i) / 2 : 1 - Math.pow((1 - t) * 2, i) / 2
    })
});
rt.Linear.easeNone = rt.none = rt.Linear.easeIn;
ro("Elastic", Ra("in"), Ra("out"), Ra());
(function(s, e) {
    var i = 1 / e
      , t = 2 * i
      , r = 2.5 * i
      , n = function(l) {
        return l < i ? s * l * l : l < t ? s * Math.pow(l - 1.5 / e, 2) + .75 : l < r ? s * (l -= 2.25 / e) * l + .9375 : s * Math.pow(l - 2.625 / e, 2) + .984375
    };
    ro("Bounce", function(u) {
        return 1 - n(1 - u)
    }, n)
}
)(7.5625, 2.75);
ro("Expo", function(s) {
    return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s)
});
ro("Circ", function(s) {
    return -(mh(1 - s * s) - 1)
});
ro("Sine", function(s) {
    return s === 1 ? 1 : -yg(s * _g) + 1
});
ro("Back", La("in"), La("out"), La());
rt.SteppedEase = rt.steps = Qi.SteppedEase = {
    config: function(e, i) {
        e === void 0 && (e = 1);
        var t = 1 / e
          , r = e + (i ? 0 : 1)
          , n = i ? 1 : 0
          , u = 1 - yi;
        return function(l) {
            return ((r * eu(0, u, l) | 0) + n) * t
        }
    }
};
zo.ease = rt["quad.out"];
Li("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
    return uf += s + "," + s + "Params,"
});
var Gh = function(e, i) {
    this.id = mg++,
    e._gsap = this,
    this.target = e,
    this.harness = i,
    this.get = i ? i.get : Th,
    this.set = i ? i.getSetter : hf
}
  , js = function() {
    function s(i) {
        this.vars = i,
        this._delay = +i.delay || 0,
        (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) && (this._rDelay = i.repeatDelay || 0,
        this._yoyo = !!i.yoyo || !!i.yoyoEase),
        this._ts = 1,
        jo(this, +i.duration, 1, 1),
        this.data = i.data,
        wt && (this._ctx = wt,
        wt.data.push(this)),
        qs || Wi.wake()
    }
    var e = s.prototype;
    return e.delay = function(t) {
        return t || t === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
        this._delay = t,
        this) : this._delay
    }
    ,
    e.duration = function(t) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
    }
    ,
    e.totalDuration = function(t) {
        return arguments.length ? (this._dirty = 0,
        jo(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    e.totalTime = function(t, r) {
        if (Xo(),
        !arguments.length)
            return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
            for (ua(this, t),
            !n._dp || n.parent || Ah(n, this); n && n.parent; )
                n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                n = n.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Sr(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== t || !this._dur && !r || this._initted && Math.abs(this._zTime) === yi || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
        Sh(this, t, r)),
        this
    }
    ,
    e.time = function(t, r) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + sc(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), r) : this._time
    }
    ,
    e.totalProgress = function(t, r) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
    }
    ,
    e.progress = function(t, r) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - t : t) + sc(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    e.iteration = function(t, r) {
        var n = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * n, r) : this._repeat ? qo(this._tTime, n) + 1 : 1
    }
    ,
    e.timeScale = function(t, r) {
        if (!arguments.length)
            return this._rts === -1e-8 ? 0 : this._rts;
        if (this._rts === t)
            return this;
        var n = this.parent && this._ts ? qu(this.parent._time, this) : this._tTime;
        return this._rts = +t || 0,
        this._ts = this._ps || t === -1e-8 ? 0 : this._rts,
        this.totalTime(eu(-Math.abs(this._delay), this._tDur, n), r !== !1),
        sa(this),
        Tg(this)
    }
    ,
    e.paused = function(t) {
        return arguments.length ? (this._ps !== t && (this._ps = t,
        t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Xo(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== yi && (this._tTime -= yi)))),
        this) : this._ps
    }
    ,
    e.startTime = function(t) {
        if (arguments.length) {
            this._start = t;
            var r = this.parent || this._dp;
            return r && (r._sort || !this.parent) && Sr(r, this, t - this._delay),
            this
        }
        return this._start
    }
    ,
    e.endTime = function(t) {
        return this._start + (Ri(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    e.rawTime = function(t) {
        var r = this.parent || this._dp;
        return r ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? qu(r.rawTime(t), this) : this._tTime : this._tTime
    }
    ,
    e.revert = function(t) {
        t === void 0 && (t = bg);
        var r = ai;
        return ai = t,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t),
        this.totalTime(-.01, t.suppressEvents)),
        this.data !== "nested" && t.kill !== !1 && this.kill(),
        ai = r,
        this
    }
    ,
    e.globalTime = function(t) {
        for (var r = this, n = arguments.length ? t : r.rawTime(); r; )
            n = r._start + n / (Math.abs(r._ts) || 1),
            r = r._dp;
        return !this.parent && this._sat ? this._sat.globalTime(t) : n
    }
    ,
    e.repeat = function(t) {
        return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
        uc(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    e.repeatDelay = function(t) {
        if (arguments.length) {
            var r = this._time;
            return this._rDelay = t,
            uc(this),
            r ? this.time(r) : this
        }
        return this._rDelay
    }
    ,
    e.yoyo = function(t) {
        return arguments.length ? (this._yoyo = t,
        this) : this._yoyo
    }
    ,
    e.seek = function(t, r) {
        return this.totalTime(rr(this, t), Ri(r))
    }
    ,
    e.restart = function(t, r) {
        return this.play().totalTime(t ? -this._delay : 0, Ri(r)),
        this._dur || (this._zTime = -1e-8),
        this
    }
    ,
    e.play = function(t, r) {
        return t != null && this.seek(t, r),
        this.reversed(!1).paused(!1)
    }
    ,
    e.reverse = function(t, r) {
        return t != null && this.seek(t || this.totalDuration(), r),
        this.reversed(!0).paused(!1)
    }
    ,
    e.pause = function(t, r) {
        return t != null && this.seek(t, r),
        this.paused(!0)
    }
    ,
    e.resume = function() {
        return this.paused(!1)
    }
    ,
    e.reversed = function(t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)),
        this) : this._rts < 0
    }
    ,
    e.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -1e-8,
        this
    }
    ,
    e.isActive = function() {
        var t = this.parent || this._dp, r = this._start, n;
        return !!(!t || this._ts && this._initted && t.isActive() && (n = t.rawTime(!0)) >= r && n < this.endTime(!0) - yi)
    }
    ,
    e.eventCallback = function(t, r, n) {
        var u = this.vars;
        return arguments.length > 1 ? (r ? (u[t] = r,
        n && (u[t + "Params"] = n),
        t === "onUpdate" && (this._onUpdate = r)) : delete u[t],
        this) : u[t]
    }
    ,
    e.then = function(t) {
        var r = this;
        return new Promise(function(n) {
            var u = Pt(t) ? t : Fh
              , l = function() {
                var p = r.then;
                r.then = null,
                Pt(u) && (u = u(r)) && (u.then || u === r) && (r.then = p),
                n(u),
                r.then = p
            };
            r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? l() : r._prom = l
        }
        )
    }
    ,
    e.kill = function() {
        us(this)
    }
    ,
    s
}();
Ki(js.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var ki = function(s) {
    _h(e, s);
    function e(t, r) {
        var n;
        return t === void 0 && (t = {}),
        n = s.call(this, t) || this,
        n.labels = {},
        n.smoothChildTiming = !!t.smoothChildTiming,
        n.autoRemoveChildren = !!t.autoRemoveChildren,
        n._sort = Ri(t.sortChildren),
        Ct && Sr(t.parent || Ct, $r(n), r),
        t.reversed && n.reverse(),
        t.paused && n.paused(!0),
        t.scrollTrigger && Mh($r(n), t.scrollTrigger),
        n
    }
    var i = e.prototype;
    return i.to = function(r, n, u) {
        return Ds(0, arguments, this),
        this
    }
    ,
    i.from = function(r, n, u) {
        return Ds(1, arguments, this),
        this
    }
    ,
    i.fromTo = function(r, n, u, l) {
        return Ds(2, arguments, this),
        this
    }
    ,
    i.set = function(r, n, u) {
        return n.duration = 0,
        n.parent = this,
        vs(n).repeatDelay || (n.repeat = 0),
        n.immediateRender = !!n.immediateRender,
        new Ht(r,n,rr(this, u),1),
        this
    }
    ,
    i.call = function(r, n, u) {
        return Sr(this, Ht.delayedCall(0, r, n), u)
    }
    ,
    i.staggerTo = function(r, n, u, l, c, p, _) {
        return u.duration = n,
        u.stagger = u.stagger || l,
        u.onComplete = p,
        u.onCompleteParams = _,
        u.parent = this,
        new Ht(r,u,rr(this, c)),
        this
    }
    ,
    i.staggerFrom = function(r, n, u, l, c, p, _) {
        return u.runBackwards = 1,
        vs(u).immediateRender = Ri(u.immediateRender),
        this.staggerTo(r, n, u, l, c, p, _)
    }
    ,
    i.staggerFromTo = function(r, n, u, l, c, p, _, x) {
        return l.startAt = u,
        vs(l).immediateRender = Ri(l.immediateRender),
        this.staggerTo(r, n, l, c, p, _, x)
    }
    ,
    i.render = function(r, n, u) {
        var l = this._time, c = this._dirty ? this.totalDuration() : this._tDur, p = this._dur, _ = r <= 0 ? 0 : zt(r), x = this._zTime < 0 != r < 0 && (this._initted || !p), D, h, b, v, E, C, L, A, P, M, z, f;
        if (this !== Ct && _ > c && r >= 0 && (_ = c),
        _ !== this._tTime || u || x) {
            if (l !== this._time && p && (_ += this._time - l,
            r += this._time - l),
            D = _,
            P = this._start,
            A = this._ts,
            C = !A,
            x && (p || (l = this._zTime),
            (r || !n) && (this._zTime = r)),
            this._repeat) {
                if (z = this._yoyo,
                E = p + this._rDelay,
                this._repeat < -1 && r < 0)
                    return this.totalTime(E * 100 + r, n, u);
                if (D = zt(_ % E),
                _ === c ? (v = this._repeat,
                D = p) : (M = zt(_ / E),
                v = ~~M,
                v && v === M && (D = p,
                v--),
                D > p && (D = p)),
                M = qo(this._tTime, E),
                !l && this._tTime && M !== v && this._tTime - M * E - this._dur <= 0 && (M = v),
                z && v & 1 && (D = p - D,
                f = 1),
                v !== M && !this._lock) {
                    var q = z && M & 1
                      , H = q === (z && v & 1);
                    if (v < M && (q = !q),
                    l = q ? 0 : _ % p ? p : _,
                    this._lock = 1,
                    this.render(l || (f ? 0 : zt(v * E)), n, !p)._lock = 0,
                    this._tTime = _,
                    !n && this.parent && Ui(this, "onRepeat"),
                    this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1),
                    l && l !== this._time || C !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (p = this._dur,
                    c = this._tDur,
                    H && (this._lock = 2,
                    l = q ? p : -1e-4,
                    this.render(l, !0),
                    this.vars.repeatRefresh && !f && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !C)
                        return this;
                    Vh(this, f)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (L = Pg(this, zt(l), zt(D)),
            L && (_ -= D - (D = L._start))),
            this._tTime = _,
            this._time = D,
            this._act = !A,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = r,
            l = 0),
            !l && D && !n && !v && (Ui(this, "onStart"),
            this._tTime !== _))
                return this;
            if (D >= l && r >= 0)
                for (h = this._first; h; ) {
                    if (b = h._next,
                    (h._act || D >= h._start) && h._ts && L !== h) {
                        if (h.parent !== this)
                            return this.render(r, n, u);
                        if (h.render(h._ts > 0 ? (D - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (D - h._start) * h._ts, n, u),
                        D !== this._time || !this._ts && !C) {
                            L = 0,
                            b && (_ += this._zTime = -1e-8);
                            break
                        }
                    }
                    h = b
                }
            else {
                h = this._last;
                for (var I = r < 0 ? r : D; h; ) {
                    if (b = h._prev,
                    (h._act || I <= h._end) && h._ts && L !== h) {
                        if (h.parent !== this)
                            return this.render(r, n, u);
                        if (h.render(h._ts > 0 ? (I - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (I - h._start) * h._ts, n, u || ai && (h._initted || h._startAt)),
                        D !== this._time || !this._ts && !C) {
                            L = 0,
                            b && (_ += this._zTime = I ? -1e-8 : yi);
                            break
                        }
                    }
                    h = b
                }
            }
            if (L && !n && (this.pause(),
            L.render(D >= l ? 0 : -1e-8)._zTime = D >= l ? 1 : -1,
            this._ts))
                return this._start = P,
                sa(this),
                this.render(r, n, u);
            this._onUpdate && !n && Ui(this, "onUpdate", !0),
            (_ === c && this._tTime >= this.totalDuration() || !_ && l) && (P === this._start || Math.abs(A) !== Math.abs(this._ts)) && (this._lock || ((r || !p) && (_ === c && this._ts > 0 || !_ && this._ts < 0) && wn(this, 1),
            !n && !(r < 0 && !l) && (_ || l || !c) && (Ui(this, _ === c && r >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(_ < c && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    i.add = function(r, n) {
        var u = this;
        if (Qr(n) || (n = rr(this, n, r)),
        !(r instanceof js)) {
            if (vi(r))
                return r.forEach(function(l) {
                    return u.add(l, n)
                }),
                this;
            if (ei(r))
                return this.addLabel(r, n);
            if (Pt(r))
                r = Ht.delayedCall(0, r);
            else
                return this
        }
        return this !== r ? Sr(this, r, n) : this
    }
    ,
    i.getChildren = function(r, n, u, l) {
        r === void 0 && (r = !0),
        n === void 0 && (n = !0),
        u === void 0 && (u = !0),
        l === void 0 && (l = -1e8);
        for (var c = [], p = this._first; p; )
            p._start >= l && (p instanceof Ht ? n && c.push(p) : (u && c.push(p),
            r && c.push.apply(c, p.getChildren(!0, n, u)))),
            p = p._next;
        return c
    }
    ,
    i.getById = function(r) {
        for (var n = this.getChildren(1, 1, 1), u = n.length; u--; )
            if (n[u].vars.id === r)
                return n[u]
    }
    ,
    i.remove = function(r) {
        return ei(r) ? this.removeLabel(r) : Pt(r) ? this.killTweensOf(r) : (r.parent === this && oa(this, r),
        r === this._recent && (this._recent = this._last),
        Xn(this))
    }
    ,
    i.totalTime = function(r, n) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = zt(Wi.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))),
        s.prototype.totalTime.call(this, r, n),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    i.addLabel = function(r, n) {
        return this.labels[r] = rr(this, n),
        this
    }
    ,
    i.removeLabel = function(r) {
        return delete this.labels[r],
        this
    }
    ,
    i.addPause = function(r, n, u) {
        var l = Ht.delayedCall(0, n || zs, u);
        return l.data = "isPause",
        this._hasPause = 1,
        Sr(this, l, rr(this, r))
    }
    ,
    i.removePause = function(r) {
        var n = this._first;
        for (r = rr(this, r); n; )
            n._start === r && n.data === "isPause" && wn(n),
            n = n._next
    }
    ,
    i.killTweensOf = function(r, n, u) {
        for (var l = this.getTweensOf(r, u), c = l.length; c--; )
            dn !== l[c] && l[c].kill(r, n);
        return this
    }
    ,
    i.getTweensOf = function(r, n) {
        for (var u = [], l = sr(r), c = this._first, p = Qr(n), _; c; )
            c instanceof Ht ? wg(c._targets, l) && (p ? (!dn || c._initted && c._ts) && c.globalTime(0) <= n && c.globalTime(c.totalDuration()) > n : !n || c.isActive()) && u.push(c) : (_ = c.getTweensOf(l, n)).length && u.push.apply(u, _),
            c = c._next;
        return u
    }
    ,
    i.tweenTo = function(r, n) {
        n = n || {};
        var u = this, l = rr(u, r), c = n, p = c.startAt, _ = c.onStart, x = c.onStartParams, D = c.immediateRender, h, b = Ht.to(u, Ki({
            ease: n.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: l,
            overwrite: "auto",
            duration: n.duration || Math.abs((l - (p && "time"in p ? p.time : u._time)) / u.timeScale()) || yi,
            onStart: function() {
                if (u.pause(),
                !h) {
                    var E = n.duration || Math.abs((l - (p && "time"in p ? p.time : u._time)) / u.timeScale());
                    b._dur !== E && jo(b, E, 0, 1).render(b._time, !0, !0),
                    h = 1
                }
                _ && _.apply(b, x || [])
            }
        }, n));
        return D ? b.render(0) : b
    }
    ,
    i.tweenFromTo = function(r, n, u) {
        return this.tweenTo(n, Ki({
            startAt: {
                time: rr(this, r)
            }
        }, u))
    }
    ,
    i.recent = function() {
        return this._recent
    }
    ,
    i.nextLabel = function(r) {
        return r === void 0 && (r = this._time),
        ac(this, rr(this, r))
    }
    ,
    i.previousLabel = function(r) {
        return r === void 0 && (r = this._time),
        ac(this, rr(this, r), 1)
    }
    ,
    i.currentLabel = function(r) {
        return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + yi)
    }
    ,
    i.shiftChildren = function(r, n, u) {
        u === void 0 && (u = 0);
        for (var l = this._first, c = this.labels, p; l; )
            l._start >= u && (l._start += r,
            l._end += r),
            l = l._next;
        if (n)
            for (p in c)
                c[p] >= u && (c[p] += r);
        return Xn(this)
    }
    ,
    i.invalidate = function(r) {
        var n = this._first;
        for (this._lock = 0; n; )
            n.invalidate(r),
            n = n._next;
        return s.prototype.invalidate.call(this, r)
    }
    ,
    i.clear = function(r) {
        r === void 0 && (r = !0);
        for (var n = this._first, u; n; )
            u = n._next,
            this.remove(n),
            n = u;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        Xn(this)
    }
    ,
    i.totalDuration = function(r) {
        var n = 0, u = this, l = u._last, c = Ar, p, _, x;
        if (arguments.length)
            return u.timeScale((u._repeat < 0 ? u.duration() : u.totalDuration()) / (u.reversed() ? -r : r));
        if (u._dirty) {
            for (x = u.parent; l; )
                p = l._prev,
                l._dirty && l.totalDuration(),
                _ = l._start,
                _ > c && u._sort && l._ts && !u._lock ? (u._lock = 1,
                Sr(u, l, _ - l._delay, 1)._lock = 0) : c = _,
                _ < 0 && l._ts && (n -= _,
                (!x && !u._dp || x && x.smoothChildTiming) && (u._start += _ / u._ts,
                u._time -= _,
                u._tTime -= _),
                u.shiftChildren(-_, !1, -1 / 0),
                c = 0),
                l._end > n && l._ts && (n = l._end),
                l = p;
            jo(u, u === Ct && u._time > n ? u._time : n, 1, 1),
            u._dirty = 0
        }
        return u._tDur
    }
    ,
    e.updateRoot = function(r) {
        if (Ct._ts && (Sh(Ct, qu(r, Ct)),
        Eh = Wi.frame),
        Wi.frame >= nc) {
            nc += Gi.autoSleep || 120;
            var n = Ct._first;
            if ((!n || !n._ts) && Gi.autoSleep && Wi._listeners.length < 2) {
                for (; n && !n._ts; )
                    n = n._next;
                n || Wi.sleep()
            }
        }
    }
    ,
    e
}(js);
Ki(ki.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Yg = function(e, i, t, r, n, u, l) {
    var c = new Ni(this._pt,e,i,0,1,td,null,n), p = 0, _ = 0, x, D, h, b, v, E, C, L;
    for (c.b = t,
    c.e = r,
    t += "",
    r += "",
    (C = ~r.indexOf("random(")) && (r = $s(r)),
    u && (L = [t, r],
    u(L, e, i),
    t = L[0],
    r = L[1]),
    D = t.match(Aa) || []; x = Aa.exec(r); )
        b = x[0],
        v = r.substring(p, x.index),
        h ? h = (h + 1) % 5 : v.substr(-5) === "rgba(" && (h = 1),
        b !== D[_++] && (E = parseFloat(D[_ - 1]) || 0,
        c._pt = {
            _next: c._pt,
            p: v || _ === 1 ? v : ",",
            s: E,
            c: b.charAt(1) === "=" ? Fo(E, b) - E : parseFloat(b) - E,
            m: h && h < 4 ? Math.round : 0
        },
        p = Aa.lastIndex);
    return c.c = p < r.length ? r.substring(p, r.length) : "",
    c.fp = l,
    (Dh.test(r) || C) && (c.e = 0),
    this._pt = c,
    c
}, lf = function(e, i, t, r, n, u, l, c, p, _) {
    Pt(r) && (r = r(n || 0, e, u));
    var x = e[i], D = t !== "get" ? t : Pt(x) ? p ? e[i.indexOf("set") || !Pt(e["get" + i.substr(3)]) ? i : "get" + i.substr(3)](p) : e[i]() : x, h = Pt(x) ? p ? Kg : Zh : cf, b;
    if (ei(r) && (~r.indexOf("random(") && (r = $s(r)),
    r.charAt(1) === "=" && (b = Fo(D, r) + (_i(D) || 0),
    (b || b === 0) && (r = b))),
    !_ || D !== r || ml)
        return !isNaN(D * r) && r !== "" ? (b = new Ni(this._pt,e,i,+D || 0,r - (D || 0),typeof x == "boolean" ? Zg : ed,0,h),
        p && (b.fp = p),
        l && b.modifier(l, this, e),
        this._pt = b) : (!x && !(i in e) && of(i, r),
        Yg.call(this, e, i, D, r, h, c || Gi.stringFilter, p))
}, Vg = function(e, i, t, r, n) {
    if (Pt(e) && (e = xs(e, n, i, t, r)),
    !Lr(e) || e.style && e.nodeType || vi(e) || yh(e))
        return ei(e) ? xs(e, n, i, t, r) : e;
    var u = {}, l;
    for (l in e)
        u[l] = xs(e[l], n, i, t, r);
    return u
}, Qh = function(e, i, t, r, n, u) {
    var l, c, p, _;
    if (ji[e] && (l = new ji[e]).init(n, l.rawVars ? i[e] : Vg(i[e], r, n, u, t), t, r, u) !== !1 && (t._pt = c = new Ni(t._pt,n,e,0,1,l.render,l,0,l.priority),
    t !== xo))
        for (p = t._ptLookup[t._targets.indexOf(n)],
        _ = l._props.length; _--; )
            p[l._props[_]] = c;
    return l
}, dn, ml, ff = function s(e, i, t) {
    var r = e.vars, n = r.ease, u = r.startAt, l = r.immediateRender, c = r.lazy, p = r.onUpdate, _ = r.runBackwards, x = r.yoyoEase, D = r.keyframes, h = r.autoRevert, b = e._dur, v = e._startAt, E = e._targets, C = e.parent, L = C && C.data === "nested" ? C.vars.targets : E, A = e._overwrite === "auto" && !ef, P = e.timeline, M, z, f, q, H, I, ee, K, G, ne, se, ae, oe;
    if (P && (!D || !n) && (n = "none"),
    e._ease = Wn(n, zo.ease),
    e._yEase = x ? Yh(Wn(x === !0 ? n : x, zo.ease)) : 0,
    x && e._yoyo && !e._repeat && (x = e._yEase,
    e._yEase = e._ease,
    e._ease = x),
    e._from = !P && !!r.runBackwards,
    !P || D && !r.stagger) {
        if (K = E[0] ? jn(E[0]).harness : 0,
        ae = K && r[K.prop],
        M = $u(r, sf),
        v && (v._zTime < 0 && v.progress(1),
        i < 0 && _ && l && !h ? v.render(-1, !0) : v.revert(_ && b ? Su : xg),
        v._lazy = 0),
        u) {
            if (wn(e._startAt = Ht.set(E, Ki({
                data: "isStart",
                overwrite: !1,
                parent: C,
                immediateRender: !0,
                lazy: !v && Ri(c),
                startAt: null,
                delay: 0,
                onUpdate: p && function() {
                    return Ui(e, "onUpdate")
                }
                ,
                stagger: 0
            }, u))),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            i < 0 && (ai || !l && !h) && e._startAt.revert(Su),
            l && b && i <= 0 && t <= 0) {
                i && (e._zTime = i);
                return
            }
        } else if (_ && b && !v) {
            if (i && (l = !1),
            f = Ki({
                overwrite: !1,
                data: "isFromStart",
                lazy: l && !v && Ri(c),
                immediateRender: l,
                stagger: 0,
                parent: C
            }, M),
            ae && (f[K.prop] = ae),
            wn(e._startAt = Ht.set(E, f)),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            i < 0 && (ai ? e._startAt.revert(Su) : e._startAt.render(-1, !0)),
            e._zTime = i,
            !l)
                s(e._startAt, yi, yi);
            else if (!i)
                return
        }
        for (e._pt = e._ptCache = 0,
        c = b && Ri(c) || c && !b,
        z = 0; z < E.length; z++) {
            if (H = E[z],
            ee = H._gsap || af(E)[z]._gsap,
            e._ptLookup[z] = ne = {},
            cl[ee.id] && vn.length && zu(),
            se = L === E ? z : L.indexOf(H),
            K && (G = new K).init(H, ae || M, e, se, L) !== !1 && (e._pt = q = new Ni(e._pt,H,G.name,0,1,G.render,G,0,G.priority),
            G._props.forEach(function(Ce) {
                ne[Ce] = q
            }),
            G.priority && (I = 1)),
            !K || ae)
                for (f in M)
                    ji[f] && (G = Qh(f, M, e, se, H, L)) ? G.priority && (I = 1) : ne[f] = q = lf.call(e, H, f, "get", M[f], se, L, 0, r.stringFilter);
            e._op && e._op[z] && e.kill(H, e._op[z]),
            A && e._pt && (dn = e,
            Ct.killTweensOf(H, ne, e.globalTime(i)),
            oe = !e.parent,
            dn = 0),
            e._pt && c && (cl[ee.id] = 1)
        }
        I && id(e),
        e._onInit && e._onInit(e)
    }
    e._onUpdate = p,
    e._initted = (!e._op || e._pt) && !oe,
    D && i <= 0 && P.render(Ar, !0, !0)
}, Ug = function(e, i, t, r, n, u, l, c) {
    var p = (e._pt && e._ptCache || (e._ptCache = {}))[i], _, x, D, h;
    if (!p)
        for (p = e._ptCache[i] = [],
        D = e._ptLookup,
        h = e._targets.length; h--; ) {
            if (_ = D[h][i],
            _ && _.d && _.d._pt)
                for (_ = _.d._pt; _ && _.p !== i && _.fp !== i; )
                    _ = _._next;
            if (!_)
                return ml = 1,
                e.vars[i] = "+=0",
                ff(e, l),
                ml = 0,
                c ? Hs(i + " not eligible for reset") : 1;
            p.push(_)
        }
    for (h = p.length; h--; )
        x = p[h],
        _ = x._pt || x,
        _.s = (r || r === 0) && !n ? r : _.s + (r || 0) + u * _.c,
        _.c = t - _.s,
        x.e && (x.e = Ot(t) + _i(x.e)),
        x.b && (x.b = _.s + _i(x.b))
}, Gg = function(e, i) {
    var t = e[0] ? jn(e[0]).harness : 0, r = t && t.aliases, n, u, l, c;
    if (!r)
        return i;
    n = $o({}, i);
    for (u in r)
        if (u in n)
            for (c = r[u].split(","),
            l = c.length; l--; )
                n[c[l]] = n[u];
    return n
}, Qg = function(e, i, t, r) {
    var n = i.ease || r || "power1.inOut", u, l;
    if (vi(i))
        l = t[e] || (t[e] = []),
        i.forEach(function(c, p) {
            return l.push({
                t: p / (i.length - 1) * 100,
                v: c,
                e: n
            })
        });
    else
        for (u in i)
            l = t[u] || (t[u] = []),
            u === "ease" || l.push({
                t: parseFloat(e),
                v: i[u],
                e: n
            })
}, xs = function(e, i, t, r, n) {
    return Pt(e) ? e.call(i, t, r, n) : ei(e) && ~e.indexOf("random(") ? $s(e) : e
}, Kh = uf + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Jh = {};
Li(Kh + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
    return Jh[s] = 1
});
var Ht = function(s) {
    _h(e, s);
    function e(t, r, n, u) {
        var l;
        typeof r == "number" && (n.duration = r,
        r = n,
        n = null),
        l = s.call(this, u ? r : vs(r)) || this;
        var c = l.vars, p = c.duration, _ = c.delay, x = c.immediateRender, D = c.stagger, h = c.overwrite, b = c.keyframes, v = c.defaults, E = c.scrollTrigger, C = c.yoyoEase, L = r.parent || Ct, A = (vi(t) || yh(t) ? Qr(t[0]) : "length"in r) ? [t] : sr(t), P, M, z, f, q, H, I, ee;
        if (l._targets = A.length ? af(A) : Hs("GSAP target " + t + " not found. https://gsap.com", !Gi.nullTargetWarn) || [],
        l._ptLookup = [],
        l._overwrite = h,
        b || D || lu(p) || lu(_)) {
            if (r = l.vars,
            P = l.timeline = new ki({
                data: "nested",
                defaults: v || {},
                targets: L && L.data === "nested" ? L.vars.targets : A
            }),
            P.kill(),
            P.parent = P._dp = $r(l),
            P._start = 0,
            D || lu(p) || lu(_)) {
                if (f = A.length,
                I = D && Nh(D),
                Lr(D))
                    for (q in D)
                        ~Kh.indexOf(q) && (ee || (ee = {}),
                        ee[q] = D[q]);
                for (M = 0; M < f; M++)
                    z = $u(r, Jh),
                    z.stagger = 0,
                    C && (z.yoyoEase = C),
                    ee && $o(z, ee),
                    H = A[M],
                    z.duration = +xs(p, $r(l), M, H, A),
                    z.delay = (+xs(_, $r(l), M, H, A) || 0) - l._delay,
                    !D && f === 1 && z.delay && (l._delay = _ = z.delay,
                    l._start += _,
                    z.delay = 0),
                    P.to(H, z, I ? I(M, H, A) : 0),
                    P._ease = rt.none;
                P.duration() ? p = _ = 0 : l.timeline = 0
            } else if (b) {
                vs(Ki(P.vars.defaults, {
                    ease: "none"
                })),
                P._ease = Wn(b.ease || r.ease || "none");
                var K = 0, G, ne, se;
                if (vi(b))
                    b.forEach(function(ae) {
                        return P.to(A, ae, ">")
                    }),
                    P.duration();
                else {
                    z = {};
                    for (q in b)
                        q === "ease" || q === "easeEach" || Qg(q, b[q], z, b.easeEach);
                    for (q in z)
                        for (G = z[q].sort(function(ae, oe) {
                            return ae.t - oe.t
                        }),
                        K = 0,
                        M = 0; M < G.length; M++)
                            ne = G[M],
                            se = {
                                ease: ne.e,
                                duration: (ne.t - (M ? G[M - 1].t : 0)) / 100 * p
                            },
                            se[q] = ne.v,
                            P.to(A, se, K),
                            K += se.duration;
                    P.duration() < p && P.to({}, {
                        duration: p - P.duration()
                    })
                }
            }
            p || l.duration(p = P.duration())
        } else
            l.timeline = 0;
        return h === !0 && !ef && (dn = $r(l),
        Ct.killTweensOf(A),
        dn = 0),
        Sr(L, $r(l), n),
        r.reversed && l.reverse(),
        r.paused && l.paused(!0),
        (x || !p && !b && l._start === zt(L._time) && Ri(x) && Sg($r(l)) && L.data !== "nested") && (l._tTime = -1e-8,
        l.render(Math.max(0, -_) || 0)),
        E && Mh($r(l), E),
        l
    }
    var i = e.prototype;
    return i.render = function(r, n, u) {
        var l = this._time, c = this._tDur, p = this._dur, _ = r < 0, x = r > c - yi && !_ ? c : r < yi ? 0 : r, D, h, b, v, E, C, L, A, P;
        if (!p)
            Fg(this, r, n, u);
        else if (x !== this._tTime || !r || u || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== _ || this._lazy) {
            if (D = x,
            A = this.timeline,
            this._repeat) {
                if (v = p + this._rDelay,
                this._repeat < -1 && _)
                    return this.totalTime(v * 100 + r, n, u);
                if (D = zt(x % v),
                x === c ? (b = this._repeat,
                D = p) : (E = zt(x / v),
                b = ~~E,
                b && b === E ? (D = p,
                b--) : D > p && (D = p)),
                C = this._yoyo && b & 1,
                C && (P = this._yEase,
                D = p - D),
                E = qo(this._tTime, v),
                D === l && !u && this._initted && b === E)
                    return this._tTime = x,
                    this;
                b !== E && (A && this._yEase && Vh(A, C),
                this.vars.repeatRefresh && !C && !this._lock && D !== v && this._initted && (this._lock = u = 1,
                this.render(zt(v * b), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Oh(this, _ ? r : D, u, n, x))
                    return this._tTime = 0,
                    this;
                if (l !== this._time && !(u && this.vars.repeatRefresh && b !== E))
                    return this;
                if (p !== this._dur)
                    return this.render(r, n, u)
            }
            if (this._tTime = x,
            this._time = D,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = L = (P || this._ease)(D / p),
            this._from && (this.ratio = L = 1 - L),
            D && !l && !n && !b && (Ui(this, "onStart"),
            this._tTime !== x))
                return this;
            for (h = this._pt; h; )
                h.r(L, h.d),
                h = h._next;
            A && A.render(r < 0 ? r : A._dur * A._ease(D / this._dur), n, u) || this._startAt && (this._zTime = r),
            this._onUpdate && !n && (_ && hl(this, r, n, u),
            Ui(this, "onUpdate")),
            this._repeat && b !== E && this.vars.onRepeat && !n && this.parent && Ui(this, "onRepeat"),
            (x === this._tDur || !x) && this._tTime === x && (_ && !this._onUpdate && hl(this, r, !0, !0),
            (r || !p) && (x === this._tDur && this._ts > 0 || !x && this._ts < 0) && wn(this, 1),
            !n && !(_ && !l) && (x || l || C) && (Ui(this, x === c ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(x < c && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    i.targets = function() {
        return this._targets
    }
    ,
    i.invalidate = function(r) {
        return (!r || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(r),
        s.prototype.invalidate.call(this, r)
    }
    ,
    i.resetTo = function(r, n, u, l, c) {
        qs || Wi.wake(),
        this._ts || this.play();
        var p = Math.min(this._dur, (this._dp._time - this._start) * this._ts), _;
        return this._initted || ff(this, p),
        _ = this._ease(p / this._dur),
        Ug(this, r, n, u, l, _, p, c) ? this.resetTo(r, n, u, l, 1) : (ua(this, 0),
        this.parent || Ph(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    i.kill = function(r, n) {
        if (n === void 0 && (n = "all"),
        !r && (!n || n === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? us(this) : this.scrollTrigger && this.scrollTrigger.kill(!!ai),
            this;
        if (this.timeline) {
            var u = this.timeline.totalDuration();
            return this.timeline.killTweensOf(r, n, dn && dn.vars.overwrite !== !0)._first || us(this),
            this.parent && u !== this.timeline.totalDuration() && jo(this, this._dur * this.timeline._tDur / u, 0, 1),
            this
        }
        var l = this._targets, c = r ? sr(r) : l, p = this._ptLookup, _ = this._pt, x, D, h, b, v, E, C;
        if ((!n || n === "all") && Eg(l, c))
            return n === "all" && (this._pt = 0),
            us(this);
        for (x = this._op = this._op || [],
        n !== "all" && (ei(n) && (v = {},
        Li(n, function(L) {
            return v[L] = 1
        }),
        n = v),
        n = Gg(l, n)),
        C = l.length; C--; )
            if (~c.indexOf(l[C])) {
                D = p[C],
                n === "all" ? (x[C] = n,
                b = D,
                h = {}) : (h = x[C] = x[C] || {},
                b = n);
                for (v in b)
                    E = D && D[v],
                    E && ((!("kill"in E.d) || E.d.kill(v) === !0) && oa(this, E, "_pt"),
                    delete D[v]),
                    h !== "all" && (h[v] = 1)
            }
        return this._initted && !this._pt && _ && us(this),
        this
    }
    ,
    e.to = function(r, n) {
        return new e(r,n,arguments[2])
    }
    ,
    e.from = function(r, n) {
        return Ds(1, arguments)
    }
    ,
    e.delayedCall = function(r, n, u, l) {
        return new e(n,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: r,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: u,
            onReverseCompleteParams: u,
            callbackScope: l
        })
    }
    ,
    e.fromTo = function(r, n, u) {
        return Ds(2, arguments)
    }
    ,
    e.set = function(r, n) {
        return n.duration = 0,
        n.repeatDelay || (n.repeat = 0),
        new e(r,n)
    }
    ,
    e.killTweensOf = function(r, n, u) {
        return Ct.killTweensOf(r, n, u)
    }
    ,
    e
}(js);
Ki(Ht.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Li("staggerTo,staggerFrom,staggerFromTo", function(s) {
    Ht[s] = function() {
        var e = new ki
          , i = pl.call(arguments, 0);
        return i.splice(s === "staggerFromTo" ? 5 : 4, 0, 0),
        e[s].apply(e, i)
    }
});
var cf = function(e, i, t) {
    return e[i] = t
}
  , Zh = function(e, i, t) {
    return e[i](t)
}
  , Kg = function(e, i, t, r) {
    return e[i](r.fp, t)
}
  , Jg = function(e, i, t) {
    return e.setAttribute(i, t)
}
  , hf = function(e, i) {
    return Pt(e[i]) ? Zh : tf(e[i]) && e.setAttribute ? Jg : cf
}
  , ed = function(e, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * e) * 1e6) / 1e6, i)
}
  , Zg = function(e, i) {
    return i.set(i.t, i.p, !!(i.s + i.c * e), i)
}
  , td = function(e, i) {
    var t = i._pt
      , r = "";
    if (!e && i.b)
        r = i.b;
    else if (e === 1 && i.e)
        r = i.e;
    else {
        for (; t; )
            r = t.p + (t.m ? t.m(t.s + t.c * e) : Math.round((t.s + t.c * e) * 1e4) / 1e4) + r,
            t = t._next;
        r += i.c
    }
    i.set(i.t, i.p, r, i)
}
  , df = function(e, i) {
    for (var t = i._pt; t; )
        t.r(e, t.d),
        t = t._next
}
  , e0 = function(e, i, t, r) {
    for (var n = this._pt, u; n; )
        u = n._next,
        n.p === r && n.modifier(e, i, t),
        n = u
}
  , t0 = function(e) {
    for (var i = this._pt, t, r; i; )
        r = i._next,
        i.p === e && !i.op || i.op === e ? oa(this, i, "_pt") : i.dep || (t = 1),
        i = r;
    return !t
}
  , i0 = function(e, i, t, r) {
    r.mSet(e, i, r.m.call(r.tween, t, r.mt), r)
}
  , id = function(e) {
    for (var i = e._pt, t, r, n, u; i; ) {
        for (t = i._next,
        r = n; r && r.pr > i.pr; )
            r = r._next;
        (i._prev = r ? r._prev : u) ? i._prev._next = i : n = i,
        (i._next = r) ? r._prev = i : u = i,
        i = t
    }
    e._pt = n
}
  , Ni = function() {
    function s(i, t, r, n, u, l, c, p, _) {
        this.t = t,
        this.s = n,
        this.c = u,
        this.p = r,
        this.r = l || ed,
        this.d = c || this,
        this.set = p || cf,
        this.pr = _ || 0,
        this._next = i,
        i && (i._prev = this)
    }
    var e = s.prototype;
    return e.modifier = function(t, r, n) {
        this.mSet = this.mSet || this.set,
        this.set = i0,
        this.m = t,
        this.mt = n,
        this.tween = r
    }
    ,
    s
}();
Li(uf + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(s) {
    return sf[s] = 1
});
Qi.TweenMax = Qi.TweenLite = Ht;
Qi.TimelineLite = Qi.TimelineMax = ki;
Ct = new ki({
    sortChildren: !1,
    defaults: zo,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
Gi.stringFilter = Wh;
var Yn = []
  , Fu = {}
  , r0 = []
  , fc = 0
  , n0 = 0
  , Na = function(e) {
    return (Fu[e] || r0).map(function(i) {
        return i()
    })
}
  , yl = function() {
    var e = Date.now()
      , i = [];
    e - fc > 2 && (Na("matchMediaInit"),
    Yn.forEach(function(t) {
        var r = t.queries, n = t.conditions, u, l, c, p;
        for (l in r)
            u = Cr.matchMedia(r[l]).matches,
            u && (c = 1),
            u !== n[l] && (n[l] = u,
            p = 1);
        p && (t.revert(),
        c && i.push(t))
    }),
    Na("matchMediaRevert"),
    i.forEach(function(t) {
        return t.onMatch(t, function(r) {
            return t.add(null, r)
        })
    }),
    fc = e,
    Na("matchMedia"))
}
  , rd = function() {
    function s(i, t) {
        this.selector = t && gl(t),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = n0++,
        i && this.add(i)
    }
    var e = s.prototype;
    return e.add = function(t, r, n) {
        Pt(t) && (n = r,
        r = t,
        t = Pt);
        var u = this
          , l = function() {
            var p = wt, _ = u.selector, x;
            return p && p !== u && p.data.push(u),
            n && (u.selector = gl(n)),
            wt = u,
            x = r.apply(u, arguments),
            Pt(x) && u._r.push(x),
            wt = p,
            u.selector = _,
            u.isReverted = !1,
            x
        };
        return u.last = l,
        t === Pt ? l(u, function(c) {
            return u.add(null, c)
        }) : t ? u[t] = l : l
    }
    ,
    e.ignore = function(t) {
        var r = wt;
        wt = null,
        t(this),
        wt = r
    }
    ,
    e.getTweens = function() {
        var t = [];
        return this.data.forEach(function(r) {
            return r instanceof s ? t.push.apply(t, r.getTweens()) : r instanceof Ht && !(r.parent && r.parent.data === "nested") && t.push(r)
        }),
        t
    }
    ,
    e.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    e.kill = function(t, r) {
        var n = this;
        if (t ? function() {
            for (var l = n.getTweens(), c = n.data.length, p; c--; )
                p = n.data[c],
                p.data === "isFlip" && (p.revert(),
                p.getChildren(!0, !0, !1).forEach(function(_) {
                    return l.splice(l.indexOf(_), 1)
                }));
            for (l.map(function(_) {
                return {
                    g: _._dur || _._delay || _._sat && !_._sat.vars.immediateRender ? _.globalTime(0) : -1 / 0,
                    t: _
                }
            }).sort(function(_, x) {
                return x.g - _.g || -1 / 0
            }).forEach(function(_) {
                return _.t.revert(t)
            }),
            c = n.data.length; c--; )
                p = n.data[c],
                p instanceof ki ? p.data !== "nested" && (p.scrollTrigger && p.scrollTrigger.revert(),
                p.kill()) : !(p instanceof Ht) && p.revert && p.revert(t);
            n._r.forEach(function(_) {
                return _(t, n)
            }),
            n.isReverted = !0
        }() : this.data.forEach(function(l) {
            return l.kill && l.kill()
        }),
        this.clear(),
        r)
            for (var u = Yn.length; u--; )
                Yn[u].id === this.id && Yn.splice(u, 1)
    }
    ,
    e.revert = function(t) {
        this.kill(t || {})
    }
    ,
    s
}()
  , o0 = function() {
    function s(i) {
        this.contexts = [],
        this.scope = i,
        wt && wt.data.push(this)
    }
    var e = s.prototype;
    return e.add = function(t, r, n) {
        Lr(t) || (t = {
            matches: t
        });
        var u = new rd(0,n || this.scope), l = u.conditions = {}, c, p, _;
        wt && !u.selector && (u.selector = wt.selector),
        this.contexts.push(u),
        r = u.add("onMatch", r),
        u.queries = t;
        for (p in t)
            p === "all" ? _ = 1 : (c = Cr.matchMedia(t[p]),
            c && (Yn.indexOf(u) < 0 && Yn.push(u),
            (l[p] = c.matches) && (_ = 1),
            c.addListener ? c.addListener(yl) : c.addEventListener("change", yl)));
        return _ && r(u, function(x) {
            return u.add(null, x)
        }),
        this
    }
    ,
    e.revert = function(t) {
        this.kill(t || {})
    }
    ,
    e.kill = function(t) {
        this.contexts.forEach(function(r) {
            return r.kill(t, !0)
        })
    }
    ,
    s
}()
  , ju = {
    registerPlugin: function() {
        for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++)
            i[t] = arguments[t];
        i.forEach(function(r) {
            return qh(r)
        })
    },
    timeline: function(e) {
        return new ki(e)
    },
    getTweensOf: function(e, i) {
        return Ct.getTweensOf(e, i)
    },
    getProperty: function(e, i, t, r) {
        ei(e) && (e = sr(e)[0]);
        var n = jn(e || {}).get
          , u = t ? Fh : kh;
        return t === "native" && (t = ""),
        e && (i ? u((ji[i] && ji[i].get || n)(e, i, t, r)) : function(l, c, p) {
            return u((ji[l] && ji[l].get || n)(e, l, c, p))
        }
        )
    },
    quickSetter: function(e, i, t) {
        if (e = sr(e),
        e.length > 1) {
            var r = e.map(function(_) {
                return Ii.quickSetter(_, i, t)
            })
              , n = r.length;
            return function(_) {
                for (var x = n; x--; )
                    r[x](_)
            }
        }
        e = e[0] || {};
        var u = ji[i]
          , l = jn(e)
          , c = l.harness && (l.harness.aliases || {})[i] || i
          , p = u ? function(_) {
            var x = new u;
            xo._pt = 0,
            x.init(e, t ? _ + t : _, xo, 0, [e]),
            x.render(1, x),
            xo._pt && df(1, xo)
        }
        : l.set(e, c);
        return u ? p : function(_) {
            return p(e, c, t ? _ + t : _, l, 1)
        }
    },
    quickTo: function(e, i, t) {
        var r, n = Ii.to(e, Ki((r = {},
        r[i] = "+=0.1",
        r.paused = !0,
        r.stagger = 0,
        r), t || {})), u = function(c, p, _) {
            return n.resetTo(i, c, p, _)
        };
        return u.tween = n,
        u
    },
    isTweening: function(e) {
        return Ct.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
        return e && e.ease && (e.ease = Wn(e.ease, zo.ease)),
        oc(zo, e || {})
    },
    config: function(e) {
        return oc(Gi, e || {})
    },
    registerEffect: function(e) {
        var i = e.name
          , t = e.effect
          , r = e.plugins
          , n = e.defaults
          , u = e.extendTimeline;
        (r || "").split(",").forEach(function(l) {
            return l && !ji[l] && !Qi[l] && Hs(i + " effect requires " + l + " plugin.")
        }),
        Ma[i] = function(l, c, p) {
            return t(sr(l), Ki(c || {}, n), p)
        }
        ,
        u && (ki.prototype[i] = function(l, c, p) {
            return this.add(Ma[i](l, Lr(c) ? c : (p = c) && {}, this), p)
        }
        )
    },
    registerEase: function(e, i) {
        rt[e] = Wn(i)
    },
    parseEase: function(e, i) {
        return arguments.length ? Wn(e, i) : rt
    },
    getById: function(e) {
        return Ct.getById(e)
    },
    exportRoot: function(e, i) {
        e === void 0 && (e = {});
        var t = new ki(e), r, n;
        for (t.smoothChildTiming = Ri(e.smoothChildTiming),
        Ct.remove(t),
        t._dp = 0,
        t._time = t._tTime = Ct._time,
        r = Ct._first; r; )
            n = r._next,
            (i || !(!r._dur && r instanceof Ht && r.vars.onComplete === r._targets[0])) && Sr(t, r, r._start - r._delay),
            r = n;
        return Sr(Ct, t, 0),
        t
    },
    context: function(e, i) {
        return e ? new rd(e,i) : wt
    },
    matchMedia: function(e) {
        return new o0(e)
    },
    matchMediaRefresh: function() {
        return Yn.forEach(function(e) {
            var i = e.conditions, t, r;
            for (r in i)
                i[r] && (i[r] = !1,
                t = 1);
            t && e.revert()
        }) || yl()
    },
    addEventListener: function(e, i) {
        var t = Fu[e] || (Fu[e] = []);
        ~t.indexOf(i) || t.push(i)
    },
    removeEventListener: function(e, i) {
        var t = Fu[e]
          , r = t && t.indexOf(i);
        r >= 0 && t.splice(r, 1)
    },
    utils: {
        wrap: Bg,
        wrapYoyo: Ig,
        distribute: Nh,
        random: Ih,
        snap: Bh,
        normalize: Ng,
        getUnit: _i,
        clamp: Mg,
        splitColor: jh,
        toArray: sr,
        selector: gl,
        mapRange: zh,
        pipe: Rg,
        unitize: Lg,
        interpolate: Hg,
        shuffle: Lh
    },
    install: wh,
    effects: Ma,
    ticker: Wi,
    updateRoot: ki.updateRoot,
    plugins: ji,
    globalTimeline: Ct,
    core: {
        PropTween: Ni,
        globals: Ch,
        Tween: Ht,
        Timeline: ki,
        Animation: js,
        getCache: jn,
        _removeLinkedListItem: oa,
        reverting: function() {
            return ai
        },
        context: function(e) {
            return e && wt && (wt.data.push(e),
            e._ctx = wt),
            wt
        },
        suppressOverwrites: function(e) {
            return ef = e
        }
    }
};
Li("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
    return ju[s] = Ht[s]
});
Wi.add(ki.updateRoot);
xo = ju.to({}, {
    duration: 0
});
var s0 = function(e, i) {
    for (var t = e._pt; t && t.p !== i && t.op !== i && t.fp !== i; )
        t = t._next;
    return t
}
  , u0 = function(e, i) {
    var t = e._targets, r, n, u;
    for (r in i)
        for (n = t.length; n--; )
            u = e._ptLookup[n][r],
            u && (u = u.d) && (u._pt && (u = s0(u, r)),
            u && u.modifier && u.modifier(i[r], e, t[n], r))
}
  , Ba = function(e, i) {
    return {
        name: e,
        rawVars: 1,
        init: function(r, n, u) {
            u._onInit = function(l) {
                var c, p;
                if (ei(n) && (c = {},
                Li(n, function(_) {
                    return c[_] = 1
                }),
                n = c),
                i) {
                    c = {};
                    for (p in n)
                        c[p] = i(n[p]);
                    n = c
                }
                u0(l, n)
            }
        }
    }
}
  , Ii = ju.registerPlugin({
    name: "attr",
    init: function(e, i, t, r, n) {
        var u, l, c;
        this.tween = t;
        for (u in i)
            c = e.getAttribute(u) || "",
            l = this.add(e, "setAttribute", (c || 0) + "", i[u], r, n, 0, 0, u),
            l.op = u,
            l.b = c,
            this._props.push(u)
    },
    render: function(e, i) {
        for (var t = i._pt; t; )
            ai ? t.set(t.t, t.p, t.b, t) : t.r(e, t.d),
            t = t._next
    }
}, {
    name: "endArray",
    init: function(e, i) {
        for (var t = i.length; t--; )
            this.add(e, t, e[t] || 0, i[t], 0, 0, 0, 0, 0, 1)
    }
}, Ba("roundProps", _l), Ba("modifiers"), Ba("snap", Bh)) || ju;
Ht.version = ki.version = Ii.version = "3.12.7";
bh = 1;
rf() && Xo();
rt.Power0;
rt.Power1;
rt.Power2;
rt.Power3;
rt.Power4;
rt.Linear;
rt.Quad;
rt.Cubic;
rt.Quart;
rt.Quint;
rt.Strong;
rt.Elastic;
rt.Back;
rt.SteppedEase;
rt.Bounce;
rt.Sine;
rt.Expo;
rt.Circ;
/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var cc, pn, Po, pf, Hn, hc, gf, a0 = function() {
    return typeof window < "u"
}, Kr = {}, Nn = 180 / Math.PI, Ao = Math.PI / 180, ao = Math.atan2, dc = 1e8, _f = /([A-Z])/g, l0 = /(left|right|width|margin|padding|x)/i, f0 = /[\s,\(]\S/, kr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, vl = function(e, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u, i)
}, c0 = function(e, i) {
    return i.set(i.t, i.p, e === 1 ? i.e : Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u, i)
}, h0 = function(e, i) {
    return i.set(i.t, i.p, e ? Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u : i.b, i)
}, d0 = function(e, i) {
    var t = i.s + i.c * e;
    i.set(i.t, i.p, ~~(t + (t < 0 ? -.5 : .5)) + i.u, i)
}, nd = function(e, i) {
    return i.set(i.t, i.p, e ? i.e : i.b, i)
}, od = function(e, i) {
    return i.set(i.t, i.p, e !== 1 ? i.b : i.e, i)
}, p0 = function(e, i, t) {
    return e.style[i] = t
}, g0 = function(e, i, t) {
    return e.style.setProperty(i, t)
}, _0 = function(e, i, t) {
    return e._gsap[i] = t
}, m0 = function(e, i, t) {
    return e._gsap.scaleX = e._gsap.scaleY = t
}, y0 = function(e, i, t, r, n) {
    var u = e._gsap;
    u.scaleX = u.scaleY = t,
    u.renderTransform(n, u)
}, v0 = function(e, i, t, r, n) {
    var u = e._gsap;
    u[i] = t,
    u.renderTransform(n, u)
}, Et = "transform", Bi = Et + "Origin", D0 = function s(e, i) {
    var t = this
      , r = this.target
      , n = r.style
      , u = r._gsap;
    if (e in Kr && n) {
        if (this.tfm = this.tfm || {},
        e !== "transform")
            e = kr[e] || e,
            ~e.indexOf(",") ? e.split(",").forEach(function(l) {
                return t.tfm[l] = qr(r, l)
            }) : this.tfm[e] = u.x ? u[e] : qr(r, e),
            e === Bi && (this.tfm.zOrigin = u.zOrigin);
        else
            return kr.transform.split(",").forEach(function(l) {
                return s.call(t, l, i)
            });
        if (this.props.indexOf(Et) >= 0)
            return;
        u.svg && (this.svgo = r.getAttribute("data-svg-origin"),
        this.props.push(Bi, i, "")),
        e = Et
    }
    (n || i) && this.props.push(e, i, n[e])
}, sd = function(e) {
    e.translate && (e.removeProperty("translate"),
    e.removeProperty("scale"),
    e.removeProperty("rotate"))
}, x0 = function() {
    var e = this.props, i = this.target, t = i.style, r = i._gsap, n, u;
    for (n = 0; n < e.length; n += 3)
        e[n + 1] ? e[n + 1] === 2 ? i[e[n]](e[n + 2]) : i[e[n]] = e[n + 2] : e[n + 2] ? t[e[n]] = e[n + 2] : t.removeProperty(e[n].substr(0, 2) === "--" ? e[n] : e[n].replace(_f, "-$1").toLowerCase());
    if (this.tfm) {
        for (u in this.tfm)
            r[u] = this.tfm[u];
        r.svg && (r.renderTransform(),
        i.setAttribute("data-svg-origin", this.svgo || "")),
        n = gf(),
        (!n || !n.isStart) && !t[Et] && (sd(t),
        r.zOrigin && t[Bi] && (t[Bi] += " " + r.zOrigin + "px",
        r.zOrigin = 0,
        r.renderTransform()),
        r.uncache = 1)
    }
}, ud = function(e, i) {
    var t = {
        target: e,
        props: [],
        revert: x0,
        save: D0
    };
    return e._gsap || Ii.core.getCache(e),
    i && e.style && e.nodeType && i.split(",").forEach(function(r) {
        return t.save(r)
    }),
    t
}, ad, Dl = function(e, i) {
    var t = pn.createElementNS ? pn.createElementNS((i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : pn.createElement(e);
    return t && t.style ? t : pn.createElement(e)
}, Mr = function s(e, i, t) {
    var r = getComputedStyle(e);
    return r[i] || r.getPropertyValue(i.replace(_f, "-$1").toLowerCase()) || r.getPropertyValue(i) || !t && s(e, Wo(i) || i, 1) || ""
}, pc = "O,Moz,ms,Ms,Webkit".split(","), Wo = function(e, i, t) {
    var r = i || Hn
      , n = r.style
      , u = 5;
    if (e in n && !t)
        return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); u-- && !(pc[u] + e in n); )
        ;
    return u < 0 ? null : (u === 3 ? "ms" : u >= 0 ? pc[u] : "") + e
}, xl = function() {
    a0() && window.document && (cc = window,
    pn = cc.document,
    Po = pn.documentElement,
    Hn = Dl("div") || {
        style: {}
    },
    Dl("div"),
    Et = Wo(Et),
    Bi = Et + "Origin",
    Hn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    ad = !!Wo("perspective"),
    gf = Ii.core.reverting,
    pf = 1)
}, gc = function(e) {
    var i = e.ownerSVGElement, t = Dl("svg", i && i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = e.cloneNode(!0), n;
    r.style.display = "block",
    t.appendChild(r),
    Po.appendChild(t);
    try {
        n = r.getBBox()
    } catch {}
    return t.removeChild(r),
    Po.removeChild(t),
    n
}, _c = function(e, i) {
    for (var t = i.length; t--; )
        if (e.hasAttribute(i[t]))
            return e.getAttribute(i[t])
}, ld = function(e) {
    var i, t;
    try {
        i = e.getBBox()
    } catch {
        i = gc(e),
        t = 1
    }
    return i && (i.width || i.height) || t || (i = gc(e)),
    i && !i.width && !i.x && !i.y ? {
        x: +_c(e, ["x", "cx", "x1"]) || 0,
        y: +_c(e, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : i
}, fd = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && ld(e))
}, Jn = function(e, i) {
    if (i) {
        var t = e.style, r;
        i in Kr && i !== Bi && (i = Et),
        t.removeProperty ? (r = i.substr(0, 2),
        (r === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i),
        t.removeProperty(r === "--" ? i : i.replace(_f, "-$1").toLowerCase())) : t.removeAttribute(i)
    }
}, gn = function(e, i, t, r, n, u) {
    var l = new Ni(e._pt,i,t,0,1,u ? od : nd);
    return e._pt = l,
    l.b = r,
    l.e = n,
    e._props.push(t),
    l
}, mc = {
    deg: 1,
    rad: 1,
    turn: 1
}, b0 = {
    grid: 1,
    flex: 1
}, Cn = function s(e, i, t, r) {
    var n = parseFloat(t) || 0, u = (t + "").trim().substr((n + "").length) || "px", l = Hn.style, c = l0.test(i), p = e.tagName.toLowerCase() === "svg", _ = (p ? "client" : "offset") + (c ? "Width" : "Height"), x = 100, D = r === "px", h = r === "%", b, v, E, C;
    if (r === u || !n || mc[r] || mc[u])
        return n;
    if (u !== "px" && !D && (n = s(e, i, t, "px")),
    C = e.getCTM && fd(e),
    (h || u === "%") && (Kr[i] || ~i.indexOf("adius")))
        return b = C ? e.getBBox()[c ? "width" : "height"] : e[_],
        Ot(h ? n / b * x : n / 100 * b);
    if (l[c ? "width" : "height"] = x + (D ? u : r),
    v = r !== "rem" && ~i.indexOf("adius") || r === "em" && e.appendChild && !p ? e : e.parentNode,
    C && (v = (e.ownerSVGElement || {}).parentNode),
    (!v || v === pn || !v.appendChild) && (v = pn.body),
    E = v._gsap,
    E && h && E.width && c && E.time === Wi.time && !E.uncache)
        return Ot(n / E.width * x);
    if (h && (i === "height" || i === "width")) {
        var L = e.style[i];
        e.style[i] = x + r,
        b = e[_],
        L ? e.style[i] = L : Jn(e, i)
    } else
        (h || u === "%") && !b0[Mr(v, "display")] && (l.position = Mr(e, "position")),
        v === e && (l.position = "static"),
        v.appendChild(Hn),
        b = Hn[_],
        v.removeChild(Hn),
        l.position = "absolute";
    return c && h && (E = jn(v),
    E.time = Wi.time,
    E.width = v[_]),
    Ot(D ? b * n / x : b && n ? x / b * n : 0)
}, qr = function(e, i, t, r) {
    var n;
    return pf || xl(),
    i in kr && i !== "transform" && (i = kr[i],
    ~i.indexOf(",") && (i = i.split(",")[0])),
    Kr[i] && i !== "transform" ? (n = Ws(e, r),
    n = i !== "transformOrigin" ? n[i] : n.svg ? n.origin : Wu(Mr(e, Bi)) + " " + n.zOrigin + "px") : (n = e.style[i],
    (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = Xu[i] && Xu[i](e, i, t) || Mr(e, i) || Th(e, i) || (i === "opacity" ? 1 : 0))),
    t && !~(n + "").trim().indexOf(" ") ? Cn(e, i, n, t) + t : n
}, w0 = function(e, i, t, r) {
    if (!t || t === "none") {
        var n = Wo(i, e, 1)
          , u = n && Mr(e, n, 1);
        u && u !== t ? (i = n,
        t = u) : i === "borderColor" && (t = Mr(e, "borderTopColor"))
    }
    var l = new Ni(this._pt,e.style,i,0,1,td), c = 0, p = 0, _, x, D, h, b, v, E, C, L, A, P, M;
    if (l.b = t,
    l.e = r,
    t += "",
    r += "",
    r === "auto" && (v = e.style[i],
    e.style[i] = r,
    r = Mr(e, i) || r,
    v ? e.style[i] = v : Jn(e, i)),
    _ = [t, r],
    Wh(_),
    t = _[0],
    r = _[1],
    D = t.match(Do) || [],
    M = r.match(Do) || [],
    M.length) {
        for (; x = Do.exec(r); )
            E = x[0],
            L = r.substring(c, x.index),
            b ? b = (b + 1) % 5 : (L.substr(-5) === "rgba(" || L.substr(-5) === "hsla(") && (b = 1),
            E !== (v = D[p++] || "") && (h = parseFloat(v) || 0,
            P = v.substr((h + "").length),
            E.charAt(1) === "=" && (E = Fo(h, E) + P),
            C = parseFloat(E),
            A = E.substr((C + "").length),
            c = Do.lastIndex - A.length,
            A || (A = A || Gi.units[i] || P,
            c === r.length && (r += A,
            l.e += A)),
            P !== A && (h = Cn(e, i, v, A) || 0),
            l._pt = {
                _next: l._pt,
                p: L || p === 1 ? L : ",",
                s: h,
                c: C - h,
                m: b && b < 4 || i === "zIndex" ? Math.round : 0
            });
        l.c = c < r.length ? r.substring(c, r.length) : ""
    } else
        l.r = i === "display" && r === "none" ? od : nd;
    return Dh.test(r) && (l.e = 0),
    this._pt = l,
    l
}, yc = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, C0 = function(e) {
    var i = e.split(" ")
      , t = i[0]
      , r = i[1] || "50%";
    return (t === "top" || t === "bottom" || r === "left" || r === "right") && (e = t,
    t = r,
    r = e),
    i[0] = yc[t] || t,
    i[1] = yc[r] || r,
    i.join(" ")
}, E0 = function(e, i) {
    if (i.tween && i.tween._time === i.tween._dur) {
        var t = i.t, r = t.style, n = i.u, u = t._gsap, l, c, p;
        if (n === "all" || n === !0)
            r.cssText = "",
            c = 1;
        else
            for (n = n.split(","),
            p = n.length; --p > -1; )
                l = n[p],
                Kr[l] && (c = 1,
                l = l === "transformOrigin" ? Bi : Et),
                Jn(t, l);
        c && (Jn(t, Et),
        u && (u.svg && t.removeAttribute("transform"),
        r.scale = r.rotate = r.translate = "none",
        Ws(t, 1),
        u.uncache = 1,
        sd(r)))
    }
}, Xu = {
    clearProps: function(e, i, t, r, n) {
        if (n.data !== "isFromStart") {
            var u = e._pt = new Ni(e._pt,i,t,0,0,E0);
            return u.u = r,
            u.pr = -10,
            u.tween = n,
            e._props.push(t),
            1
        }
    }
}, Xs = [1, 0, 0, 1, 0, 0], cd = {}, hd = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
}, vc = function(e) {
    var i = Mr(e, Et);
    return hd(i) ? Xs : i.substr(7).match(vh).map(Ot)
}, mf = function(e, i) {
    var t = e._gsap || jn(e), r = e.style, n = vc(e), u, l, c, p;
    return t.svg && e.getAttribute("transform") ? (c = e.transform.baseVal.consolidate().matrix,
    n = [c.a, c.b, c.c, c.d, c.e, c.f],
    n.join(",") === "1,0,0,1,0,0" ? Xs : n) : (n === Xs && !e.offsetParent && e !== Po && !t.svg && (c = r.display,
    r.display = "block",
    u = e.parentNode,
    (!u || !e.offsetParent && !e.getBoundingClientRect().width) && (p = 1,
    l = e.nextElementSibling,
    Po.appendChild(e)),
    n = vc(e),
    c ? r.display = c : Jn(e, "display"),
    p && (l ? u.insertBefore(e, l) : u ? u.appendChild(e) : Po.removeChild(e))),
    i && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
}, bl = function(e, i, t, r, n, u) {
    var l = e._gsap, c = n || mf(e, !0), p = l.xOrigin || 0, _ = l.yOrigin || 0, x = l.xOffset || 0, D = l.yOffset || 0, h = c[0], b = c[1], v = c[2], E = c[3], C = c[4], L = c[5], A = i.split(" "), P = parseFloat(A[0]) || 0, M = parseFloat(A[1]) || 0, z, f, q, H;
    t ? c !== Xs && (f = h * E - b * v) && (q = P * (E / f) + M * (-v / f) + (v * L - E * C) / f,
    H = P * (-b / f) + M * (h / f) - (h * L - b * C) / f,
    P = q,
    M = H) : (z = ld(e),
    P = z.x + (~A[0].indexOf("%") ? P / 100 * z.width : P),
    M = z.y + (~(A[1] || A[0]).indexOf("%") ? M / 100 * z.height : M)),
    r || r !== !1 && l.smooth ? (C = P - p,
    L = M - _,
    l.xOffset = x + (C * h + L * v) - C,
    l.yOffset = D + (C * b + L * E) - L) : l.xOffset = l.yOffset = 0,
    l.xOrigin = P,
    l.yOrigin = M,
    l.smooth = !!r,
    l.origin = i,
    l.originIsAbsolute = !!t,
    e.style[Bi] = "0px 0px",
    u && (gn(u, l, "xOrigin", p, P),
    gn(u, l, "yOrigin", _, M),
    gn(u, l, "xOffset", x, l.xOffset),
    gn(u, l, "yOffset", D, l.yOffset)),
    e.setAttribute("data-svg-origin", P + " " + M)
}, Ws = function(e, i) {
    var t = e._gsap || new Gh(e);
    if ("x"in t && !i && !t.uncache)
        return t;
    var r = e.style, n = t.scaleX < 0, u = "px", l = "deg", c = getComputedStyle(e), p = Mr(e, Bi) || "0", _, x, D, h, b, v, E, C, L, A, P, M, z, f, q, H, I, ee, K, G, ne, se, ae, oe, Ce, U, R, _e, be, $e, ve, we;
    return _ = x = D = v = E = C = L = A = P = 0,
    h = b = 1,
    t.svg = !!(e.getCTM && fd(e)),
    c.translate && ((c.translate !== "none" || c.scale !== "none" || c.rotate !== "none") && (r[Et] = (c.translate !== "none" ? "translate3d(" + (c.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (c.rotate !== "none" ? "rotate(" + c.rotate + ") " : "") + (c.scale !== "none" ? "scale(" + c.scale.split(" ").join(",") + ") " : "") + (c[Et] !== "none" ? c[Et] : "")),
    r.scale = r.rotate = r.translate = "none"),
    f = mf(e, t.svg),
    t.svg && (t.uncache ? (Ce = e.getBBox(),
    p = t.xOrigin - Ce.x + "px " + (t.yOrigin - Ce.y) + "px",
    oe = "") : oe = !i && e.getAttribute("data-svg-origin"),
    bl(e, oe || p, !!oe || t.originIsAbsolute, t.smooth !== !1, f)),
    M = t.xOrigin || 0,
    z = t.yOrigin || 0,
    f !== Xs && (ee = f[0],
    K = f[1],
    G = f[2],
    ne = f[3],
    _ = se = f[4],
    x = ae = f[5],
    f.length === 6 ? (h = Math.sqrt(ee * ee + K * K),
    b = Math.sqrt(ne * ne + G * G),
    v = ee || K ? ao(K, ee) * Nn : 0,
    L = G || ne ? ao(G, ne) * Nn + v : 0,
    L && (b *= Math.abs(Math.cos(L * Ao))),
    t.svg && (_ -= M - (M * ee + z * G),
    x -= z - (M * K + z * ne))) : (we = f[6],
    $e = f[7],
    R = f[8],
    _e = f[9],
    be = f[10],
    ve = f[11],
    _ = f[12],
    x = f[13],
    D = f[14],
    q = ao(we, be),
    E = q * Nn,
    q && (H = Math.cos(-q),
    I = Math.sin(-q),
    oe = se * H + R * I,
    Ce = ae * H + _e * I,
    U = we * H + be * I,
    R = se * -I + R * H,
    _e = ae * -I + _e * H,
    be = we * -I + be * H,
    ve = $e * -I + ve * H,
    se = oe,
    ae = Ce,
    we = U),
    q = ao(-G, be),
    C = q * Nn,
    q && (H = Math.cos(-q),
    I = Math.sin(-q),
    oe = ee * H - R * I,
    Ce = K * H - _e * I,
    U = G * H - be * I,
    ve = ne * I + ve * H,
    ee = oe,
    K = Ce,
    G = U),
    q = ao(K, ee),
    v = q * Nn,
    q && (H = Math.cos(q),
    I = Math.sin(q),
    oe = ee * H + K * I,
    Ce = se * H + ae * I,
    K = K * H - ee * I,
    ae = ae * H - se * I,
    ee = oe,
    se = Ce),
    E && Math.abs(E) + Math.abs(v) > 359.9 && (E = v = 0,
    C = 180 - C),
    h = Ot(Math.sqrt(ee * ee + K * K + G * G)),
    b = Ot(Math.sqrt(ae * ae + we * we)),
    q = ao(se, ae),
    L = Math.abs(q) > 2e-4 ? q * Nn : 0,
    P = ve ? 1 / (ve < 0 ? -ve : ve) : 0),
    t.svg && (oe = e.getAttribute("transform"),
    t.forceCSS = e.setAttribute("transform", "") || !hd(Mr(e, Et)),
    oe && e.setAttribute("transform", oe))),
    Math.abs(L) > 90 && Math.abs(L) < 270 && (n ? (h *= -1,
    L += v <= 0 ? 180 : -180,
    v += v <= 0 ? 180 : -180) : (b *= -1,
    L += L <= 0 ? 180 : -180)),
    i = i || t.uncache,
    t.x = _ - ((t.xPercent = _ && (!i && t.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-_) ? -50 : 0))) ? e.offsetWidth * t.xPercent / 100 : 0) + u,
    t.y = x - ((t.yPercent = x && (!i && t.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-x) ? -50 : 0))) ? e.offsetHeight * t.yPercent / 100 : 0) + u,
    t.z = D + u,
    t.scaleX = Ot(h),
    t.scaleY = Ot(b),
    t.rotation = Ot(v) + l,
    t.rotationX = Ot(E) + l,
    t.rotationY = Ot(C) + l,
    t.skewX = L + l,
    t.skewY = A + l,
    t.transformPerspective = P + u,
    (t.zOrigin = parseFloat(p.split(" ")[2]) || !i && t.zOrigin || 0) && (r[Bi] = Wu(p)),
    t.xOffset = t.yOffset = 0,
    t.force3D = Gi.force3D,
    t.renderTransform = t.svg ? S0 : ad ? dd : T0,
    t.uncache = 0,
    t
}, Wu = function(e) {
    return (e = e.split(" "))[0] + " " + e[1]
}, Ia = function(e, i, t) {
    var r = _i(i);
    return Ot(parseFloat(i) + parseFloat(Cn(e, "x", t + "px", r))) + r
}, T0 = function(e, i) {
    i.z = "0px",
    i.rotationY = i.rotationX = "0deg",
    i.force3D = 0,
    dd(e, i)
}, On = "0deg", ts = "0px", Rn = ") ", dd = function(e, i) {
    var t = i || this
      , r = t.xPercent
      , n = t.yPercent
      , u = t.x
      , l = t.y
      , c = t.z
      , p = t.rotation
      , _ = t.rotationY
      , x = t.rotationX
      , D = t.skewX
      , h = t.skewY
      , b = t.scaleX
      , v = t.scaleY
      , E = t.transformPerspective
      , C = t.force3D
      , L = t.target
      , A = t.zOrigin
      , P = ""
      , M = C === "auto" && e && e !== 1 || C === !0;
    if (A && (x !== On || _ !== On)) {
        var z = parseFloat(_) * Ao, f = Math.sin(z), q = Math.cos(z), H;
        z = parseFloat(x) * Ao,
        H = Math.cos(z),
        u = Ia(L, u, f * H * -A),
        l = Ia(L, l, -Math.sin(z) * -A),
        c = Ia(L, c, q * H * -A + A)
    }
    E !== ts && (P += "perspective(" + E + Rn),
    (r || n) && (P += "translate(" + r + "%, " + n + "%) "),
    (M || u !== ts || l !== ts || c !== ts) && (P += c !== ts || M ? "translate3d(" + u + ", " + l + ", " + c + ") " : "translate(" + u + ", " + l + Rn),
    p !== On && (P += "rotate(" + p + Rn),
    _ !== On && (P += "rotateY(" + _ + Rn),
    x !== On && (P += "rotateX(" + x + Rn),
    (D !== On || h !== On) && (P += "skew(" + D + ", " + h + Rn),
    (b !== 1 || v !== 1) && (P += "scale(" + b + ", " + v + Rn),
    L.style[Et] = P || "translate(0, 0)"
}, S0 = function(e, i) {
    var t = i || this, r = t.xPercent, n = t.yPercent, u = t.x, l = t.y, c = t.rotation, p = t.skewX, _ = t.skewY, x = t.scaleX, D = t.scaleY, h = t.target, b = t.xOrigin, v = t.yOrigin, E = t.xOffset, C = t.yOffset, L = t.forceCSS, A = parseFloat(u), P = parseFloat(l), M, z, f, q, H;
    c = parseFloat(c),
    p = parseFloat(p),
    _ = parseFloat(_),
    _ && (_ = parseFloat(_),
    p += _,
    c += _),
    c || p ? (c *= Ao,
    p *= Ao,
    M = Math.cos(c) * x,
    z = Math.sin(c) * x,
    f = Math.sin(c - p) * -D,
    q = Math.cos(c - p) * D,
    p && (_ *= Ao,
    H = Math.tan(p - _),
    H = Math.sqrt(1 + H * H),
    f *= H,
    q *= H,
    _ && (H = Math.tan(_),
    H = Math.sqrt(1 + H * H),
    M *= H,
    z *= H)),
    M = Ot(M),
    z = Ot(z),
    f = Ot(f),
    q = Ot(q)) : (M = x,
    q = D,
    z = f = 0),
    (A && !~(u + "").indexOf("px") || P && !~(l + "").indexOf("px")) && (A = Cn(h, "x", u, "px"),
    P = Cn(h, "y", l, "px")),
    (b || v || E || C) && (A = Ot(A + b - (b * M + v * f) + E),
    P = Ot(P + v - (b * z + v * q) + C)),
    (r || n) && (H = h.getBBox(),
    A = Ot(A + r / 100 * H.width),
    P = Ot(P + n / 100 * H.height)),
    H = "matrix(" + M + "," + z + "," + f + "," + q + "," + A + "," + P + ")",
    h.setAttribute("transform", H),
    L && (h.style[Et] = H)
}, k0 = function(e, i, t, r, n) {
    var u = 360, l = ei(n), c = parseFloat(n) * (l && ~n.indexOf("rad") ? Nn : 1), p = c - r, _ = r + p + "deg", x, D;
    return l && (x = n.split("_")[1],
    x === "short" && (p %= u,
    p !== p % (u / 2) && (p += p < 0 ? u : -360)),
    x === "cw" && p < 0 ? p = (p + u * dc) % u - ~~(p / u) * u : x === "ccw" && p > 0 && (p = (p - u * dc) % u - ~~(p / u) * u)),
    e._pt = D = new Ni(e._pt,i,t,r,p,c0),
    D.e = _,
    D.u = "deg",
    e._props.push(t),
    D
}, Dc = function(e, i) {
    for (var t in i)
        e[t] = i[t];
    return e
}, F0 = function(e, i, t) {
    var r = Dc({}, t._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", u = t.style, l, c, p, _, x, D, h, b;
    r.svg ? (p = t.getAttribute("transform"),
    t.setAttribute("transform", ""),
    u[Et] = i,
    l = Ws(t, 1),
    Jn(t, Et),
    t.setAttribute("transform", p)) : (p = getComputedStyle(t)[Et],
    u[Et] = i,
    l = Ws(t, 1),
    u[Et] = p);
    for (c in Kr)
        p = r[c],
        _ = l[c],
        p !== _ && n.indexOf(c) < 0 && (h = _i(p),
        b = _i(_),
        x = h !== b ? Cn(t, c, p, b) : parseFloat(p),
        D = parseFloat(_),
        e._pt = new Ni(e._pt,l,c,x,D - x,vl),
        e._pt.u = b || 0,
        e._props.push(c));
    Dc(l, r)
};
Li("padding,margin,Width,Radius", function(s, e) {
    var i = "Top"
      , t = "Right"
      , r = "Bottom"
      , n = "Left"
      , u = (e < 3 ? [i, t, r, n] : [i + n, i + t, r + t, r + n]).map(function(l) {
        return e < 2 ? s + l : "border" + l + s
    });
    Xu[e > 1 ? "border" + s : s] = function(l, c, p, _, x) {
        var D, h;
        if (arguments.length < 4)
            return D = u.map(function(b) {
                return qr(l, b, p)
            }),
            h = D.join(" "),
            h.split(D[0]).length === 5 ? D[0] : h;
        D = (_ + "").split(" "),
        h = {},
        u.forEach(function(b, v) {
            return h[b] = D[v] = D[v] || D[(v - 1) / 2 | 0]
        }),
        l.init(c, h, x)
    }
});
var pd = {
    name: "css",
    register: xl,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, i, t, r, n) {
        var u = this._props, l = e.style, c = t.vars.startAt, p, _, x, D, h, b, v, E, C, L, A, P, M, z, f, q;
        pf || xl(),
        this.styles = this.styles || ud(e),
        q = this.styles.props,
        this.tween = t;
        for (v in i)
            if (v !== "autoRound" && (_ = i[v],
            !(ji[v] && Qh(v, i, t, r, e, n)))) {
                if (h = typeof _,
                b = Xu[v],
                h === "function" && (_ = _.call(t, r, e, n),
                h = typeof _),
                h === "string" && ~_.indexOf("random(") && (_ = $s(_)),
                b)
                    b(this, e, v, _, t) && (f = 1);
                else if (v.substr(0, 2) === "--")
                    p = (getComputedStyle(e).getPropertyValue(v) + "").trim(),
                    _ += "",
                    Dn.lastIndex = 0,
                    Dn.test(p) || (E = _i(p),
                    C = _i(_)),
                    C ? E !== C && (p = Cn(e, v, p, C) + C) : E && (_ += E),
                    this.add(l, "setProperty", p, _, r, n, 0, 0, v),
                    u.push(v),
                    q.push(v, 0, l[v]);
                else if (h !== "undefined") {
                    if (c && v in c ? (p = typeof c[v] == "function" ? c[v].call(t, r, e, n) : c[v],
                    ei(p) && ~p.indexOf("random(") && (p = $s(p)),
                    _i(p + "") || p === "auto" || (p += Gi.units[v] || _i(qr(e, v)) || ""),
                    (p + "").charAt(1) === "=" && (p = qr(e, v))) : p = qr(e, v),
                    D = parseFloat(p),
                    L = h === "string" && _.charAt(1) === "=" && _.substr(0, 2),
                    L && (_ = _.substr(2)),
                    x = parseFloat(_),
                    v in kr && (v === "autoAlpha" && (D === 1 && qr(e, "visibility") === "hidden" && x && (D = 0),
                    q.push("visibility", 0, l.visibility),
                    gn(this, l, "visibility", D ? "inherit" : "hidden", x ? "inherit" : "hidden", !x)),
                    v !== "scale" && v !== "transform" && (v = kr[v],
                    ~v.indexOf(",") && (v = v.split(",")[0]))),
                    A = v in Kr,
                    A) {
                        if (this.styles.save(v),
                        P || (M = e._gsap,
                        M.renderTransform && !i.parseTransform || Ws(e, i.parseTransform),
                        z = i.smoothOrigin !== !1 && M.smooth,
                        P = this._pt = new Ni(this._pt,l,Et,0,1,M.renderTransform,M,0,-1),
                        P.dep = 1),
                        v === "scale")
                            this._pt = new Ni(this._pt,M,"scaleY",M.scaleY,(L ? Fo(M.scaleY, L + x) : x) - M.scaleY || 0,vl),
                            this._pt.u = 0,
                            u.push("scaleY", v),
                            v += "X";
                        else if (v === "transformOrigin") {
                            q.push(Bi, 0, l[Bi]),
                            _ = C0(_),
                            M.svg ? bl(e, _, 0, z, 0, this) : (C = parseFloat(_.split(" ")[2]) || 0,
                            C !== M.zOrigin && gn(this, M, "zOrigin", M.zOrigin, C),
                            gn(this, l, v, Wu(p), Wu(_)));
                            continue
                        } else if (v === "svgOrigin") {
                            bl(e, _, 1, z, 0, this);
                            continue
                        } else if (v in cd) {
                            k0(this, M, v, D, L ? Fo(D, L + _) : _);
                            continue
                        } else if (v === "smoothOrigin") {
                            gn(this, M, "smooth", M.smooth, _);
                            continue
                        } else if (v === "force3D") {
                            M[v] = _;
                            continue
                        } else if (v === "transform") {
                            F0(this, _, e);
                            continue
                        }
                    } else
                        v in l || (v = Wo(v) || v);
                    if (A || (x || x === 0) && (D || D === 0) && !f0.test(_) && v in l)
                        E = (p + "").substr((D + "").length),
                        x || (x = 0),
                        C = _i(_) || (v in Gi.units ? Gi.units[v] : E),
                        E !== C && (D = Cn(e, v, p, C)),
                        this._pt = new Ni(this._pt,A ? M : l,v,D,(L ? Fo(D, L + x) : x) - D,!A && (C === "px" || v === "zIndex") && i.autoRound !== !1 ? d0 : vl),
                        this._pt.u = C || 0,
                        E !== C && C !== "%" && (this._pt.b = p,
                        this._pt.r = h0);
                    else if (v in l)
                        w0.call(this, e, v, p, L ? L + _ : _);
                    else if (v in e)
                        this.add(e, v, p || e[v], L ? L + _ : _, r, n);
                    else if (v !== "parseTransform") {
                        of(v, _);
                        continue
                    }
                    A || (v in l ? q.push(v, 0, l[v]) : typeof e[v] == "function" ? q.push(v, 2, e[v]()) : q.push(v, 1, p || e[v])),
                    u.push(v)
                }
            }
        f && id(this)
    },
    render: function(e, i) {
        if (i.tween._time || !gf())
            for (var t = i._pt; t; )
                t.r(e, t.d),
                t = t._next;
        else
            i.styles.revert()
    },
    get: qr,
    aliases: kr,
    getSetter: function(e, i, t) {
        var r = kr[i];
        return r && r.indexOf(",") < 0 && (i = r),
        i in Kr && i !== Bi && (e._gsap.x || qr(e, "x")) ? t && hc === t ? i === "scale" ? m0 : _0 : (hc = t || {}) && (i === "scale" ? y0 : v0) : e.style && !tf(e.style[i]) ? p0 : ~i.indexOf("-") ? g0 : hf(e, i)
    },
    core: {
        _removeProperty: Jn,
        _getMatrix: mf
    }
};
Ii.utils.checkPrefix = Wo;
Ii.core.getStyleSaver = ud;
(function(s, e, i, t) {
    var r = Li(s + "," + e + "," + i, function(n) {
        Kr[n] = 1
    });
    Li(e, function(n) {
        Gi.units[n] = "deg",
        cd[n] = 1
    }),
    kr[r[13]] = s + "," + e,
    Li(t, function(n) {
        var u = n.split(":");
        kr[u[1]] = r[u[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Li("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
    Gi.units[s] = "px"
});
Ii.registerPlugin(pd);
var P0 = Ii.registerPlugin(pd) || Ii;
P0.core.Tween;
function A0(s, e) {
    for (var i = 0; i < e.length; i++) {
        var t = e[i];
        t.enumerable = t.enumerable || !1,
        t.configurable = !0,
        "value"in t && (t.writable = !0),
        Object.defineProperty(s, t.key, t)
    }
}
function M0(s, e, i) {
    return e && A0(s.prototype, e),
    s
}
/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ui, Pu, Yi, _n, mn, Mo, gd, Bn, bs, _d, Wr, fr, md, yd = function() {
    return ui || typeof window < "u" && (ui = window.gsap) && ui.registerPlugin && ui
}, vd = 1, bo = [], Ue = [], Or = [], ws = Date.now, wl = function(e, i) {
    return i
}, O0 = function() {
    var e = bs.core
      , i = e.bridge || {}
      , t = e._scrollers
      , r = e._proxies;
    t.push.apply(t, Ue),
    r.push.apply(r, Or),
    Ue = t,
    Or = r,
    wl = function(u, l) {
        return i[u](l)
    }
}, xn = function(e, i) {
    return ~Or.indexOf(e) && Or[Or.indexOf(e) + 1][i]
}, Cs = function(e) {
    return !!~_d.indexOf(e)
}, Ci = function(e, i, t, r, n) {
    return e.addEventListener(i, t, {
        passive: r !== !1,
        capture: !!n
    })
}, wi = function(e, i, t, r) {
    return e.removeEventListener(i, t, !!r)
}, fu = "scrollLeft", cu = "scrollTop", Cl = function() {
    return Wr && Wr.isPressed || Ue.cache++
}, Yu = function(e, i) {
    var t = function r(n) {
        if (n || n === 0) {
            vd && (Yi.history.scrollRestoration = "manual");
            var u = Wr && Wr.isPressed;
            n = r.v = Math.round(n) || (Wr && Wr.iOS ? 1 : 0),
            e(n),
            r.cacheID = Ue.cache,
            u && wl("ss", n)
        } else
            (i || Ue.cache !== r.cacheID || wl("ref")) && (r.cacheID = Ue.cache,
            r.v = e());
        return r.v + r.offset
    };
    return t.offset = 0,
    e && t
}, Fi = {
    s: fu,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Yu(function(s) {
        return arguments.length ? Yi.scrollTo(s, Vt.sc()) : Yi.pageXOffset || _n[fu] || mn[fu] || Mo[fu] || 0
    })
}, Vt = {
    s: cu,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Fi,
    sc: Yu(function(s) {
        return arguments.length ? Yi.scrollTo(Fi.sc(), s) : Yi.pageYOffset || _n[cu] || mn[cu] || Mo[cu] || 0
    })
}, Oi = function(e, i) {
    return (i && i._ctx && i._ctx.selector || ui.utils.toArray)(e)[0] || (typeof e == "string" && ui.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
}, En = function(e, i) {
    var t = i.s
      , r = i.sc;
    Cs(e) && (e = _n.scrollingElement || mn);
    var n = Ue.indexOf(e)
      , u = r === Vt.sc ? 1 : 2;
    !~n && (n = Ue.push(e) - 1),
    Ue[n + u] || Ci(e, "scroll", Cl);
    var l = Ue[n + u]
      , c = l || (Ue[n + u] = Yu(xn(e, t), !0) || (Cs(e) ? r : Yu(function(p) {
        return arguments.length ? e[t] = p : e[t]
    })));
    return c.target = e,
    l || (c.smooth = ui.getProperty(e, "scrollBehavior") === "smooth"),
    c
}, El = function(e, i, t) {
    var r = e
      , n = e
      , u = ws()
      , l = u
      , c = i || 50
      , p = Math.max(500, c * 3)
      , _ = function(b, v) {
        var E = ws();
        v || E - u > c ? (n = r,
        r = b,
        l = u,
        u = E) : t ? r += b : r = n + (b - n) / (E - l) * (u - l)
    }
      , x = function() {
        n = r = t ? 0 : r,
        l = u = 0
    }
      , D = function(b) {
        var v = l
          , E = n
          , C = ws();
        return (b || b === 0) && b !== r && _(b),
        u === l || C - l > p ? 0 : (r + (t ? E : -E)) / ((t ? C : u) - v) * 1e3
    };
    return {
        update: _,
        reset: x,
        getVelocity: D
    }
}, is = function(e, i) {
    return i && !e._gsapAllow && e.preventDefault(),
    e.changedTouches ? e.changedTouches[0] : e
}, xc = function(e) {
    var i = Math.max.apply(Math, e)
      , t = Math.min.apply(Math, e);
    return Math.abs(i) >= Math.abs(t) ? i : t
}, Dd = function() {
    bs = ui.core.globals().ScrollTrigger,
    bs && bs.core && O0()
}, xd = function(e) {
    return ui = e || yd(),
    !Pu && ui && typeof document < "u" && document.body && (Yi = window,
    _n = document,
    mn = _n.documentElement,
    Mo = _n.body,
    _d = [Yi, _n, mn, Mo],
    ui.utils.clamp,
    md = ui.core.context || function() {}
    ,
    Bn = "onpointerenter"in Mo ? "pointer" : "mouse",
    gd = Rt.isTouch = Yi.matchMedia && Yi.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in Yi || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
    fr = Rt.eventTypes = ("ontouchstart"in mn ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in mn ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
    setTimeout(function() {
        return vd = 0
    }, 500),
    Dd(),
    Pu = 1),
    Pu
};
Fi.op = Vt;
Ue.cache = 0;
var Rt = function() {
    function s(i) {
        this.init(i)
    }
    var e = s.prototype;
    return e.init = function(t) {
        Pu || xd(ui) || console.warn("Please gsap.registerPlugin(Observer)"),
        bs || Dd();
        var r = t.tolerance
          , n = t.dragMinimum
          , u = t.type
          , l = t.target
          , c = t.lineHeight
          , p = t.debounce
          , _ = t.preventDefault
          , x = t.onStop
          , D = t.onStopDelay
          , h = t.ignore
          , b = t.wheelSpeed
          , v = t.event
          , E = t.onDragStart
          , C = t.onDragEnd
          , L = t.onDrag
          , A = t.onPress
          , P = t.onRelease
          , M = t.onRight
          , z = t.onLeft
          , f = t.onUp
          , q = t.onDown
          , H = t.onChangeX
          , I = t.onChangeY
          , ee = t.onChange
          , K = t.onToggleX
          , G = t.onToggleY
          , ne = t.onHover
          , se = t.onHoverEnd
          , ae = t.onMove
          , oe = t.ignoreCheck
          , Ce = t.isNormalizer
          , U = t.onGestureStart
          , R = t.onGestureEnd
          , _e = t.onWheel
          , be = t.onEnable
          , $e = t.onDisable
          , ve = t.onClick
          , we = t.scrollSpeed
          , ke = t.capture
          , Ne = t.allowClicks
          , Le = t.lockAxis
          , gt = t.onLockAxis;
        this.target = l = Oi(l) || mn,
        this.vars = t,
        h && (h = ui.utils.toArray(h)),
        r = r || 1e-9,
        n = n || 0,
        b = b || 1,
        we = we || 1,
        u = u || "wheel,touch,pointer",
        p = p !== !1,
        c || (c = parseFloat(Yi.getComputedStyle(Mo).lineHeight) || 22);
        var Ye, Je, ut, De, Te, Me, bt, $ = this, ze = 0, ti = 0, Ut = t.passive || !_ && t.passive !== !1, me = En(l, Fi), Ge = En(l, Vt), ii = me(), Gt = Ge(), ce = ~u.indexOf("touch") && !~u.indexOf("pointer") && fr[0] === "pointerdown", nt = Cs(l), lt = l.ownerDocument || _n, ri = [0, 0, 0], li = [0, 0, 0], fi = 0, _r = function() {
            return fi = ws()
        }, pt = function(Y, re) {
            return ($.event = Y) && h && ~h.indexOf(Y.target) || re && ce && Y.pointerType !== "touch" || oe && oe(Y, re)
        }, Qt = function() {
            $._vx.reset(),
            $._vy.reset(),
            Je.pause(),
            x && x($)
        }, Lt = function() {
            var Y = $.deltaX = xc(ri)
              , re = $.deltaY = xc(li)
              , W = Math.abs(Y) >= r
              , le = Math.abs(re) >= r;
            ee && (W || le) && ee($, Y, re, ri, li),
            W && (M && $.deltaX > 0 && M($),
            z && $.deltaX < 0 && z($),
            H && H($),
            K && $.deltaX < 0 != ze < 0 && K($),
            ze = $.deltaX,
            ri[0] = ri[1] = ri[2] = 0),
            le && (q && $.deltaY > 0 && q($),
            f && $.deltaY < 0 && f($),
            I && I($),
            G && $.deltaY < 0 != ti < 0 && G($),
            ti = $.deltaY,
            li[0] = li[1] = li[2] = 0),
            (De || ut) && (ae && ae($),
            ut && (E && ut === 1 && E($),
            L && L($),
            ut = 0),
            De = !1),
            Me && !(Me = !1) && gt && gt($),
            Te && (_e($),
            Te = !1),
            Ye = 0
        }, Kt = function(Y, re, W) {
            ri[W] += Y,
            li[W] += re,
            $._vx.update(Y),
            $._vy.update(re),
            p ? Ye || (Ye = requestAnimationFrame(Lt)) : Lt()
        }, Pi = function(Y, re) {
            Le && !bt && ($.axis = bt = Math.abs(Y) > Math.abs(re) ? "x" : "y",
            Me = !0),
            bt !== "y" && (ri[2] += Y,
            $._vx.update(Y, !0)),
            bt !== "x" && (li[2] += re,
            $._vy.update(re, !0)),
            p ? Ye || (Ye = requestAnimationFrame(Lt)) : Lt()
        }, Di = function(Y) {
            if (!pt(Y, 1)) {
                Y = is(Y, _);
                var re = Y.clientX
                  , W = Y.clientY
                  , le = re - $.x
                  , te = W - $.y
                  , he = $.isDragging;
                $.x = re,
                $.y = W,
                (he || (le || te) && (Math.abs($.startX - re) >= n || Math.abs($.startY - W) >= n)) && (ut = he ? 2 : 1,
                he || ($.isDragging = !0),
                Pi(le, te))
            }
        }, ci = $.onPress = function(B) {
            pt(B, 1) || B && B.button || ($.axis = bt = null,
            Je.pause(),
            $.isPressed = !0,
            B = is(B),
            ze = ti = 0,
            $.startX = $.x = B.clientX,
            $.startY = $.y = B.clientY,
            $._vx.reset(),
            $._vy.reset(),
            Ci(Ce ? l : lt, fr[1], Di, Ut, !0),
            $.deltaX = $.deltaY = 0,
            A && A($))
        }
        , Oe = $.onRelease = function(B) {
            if (!pt(B, 1)) {
                wi(Ce ? l : lt, fr[1], Di, !0);
                var Y = !isNaN($.y - $.startY)
                  , re = $.isDragging
                  , W = re && (Math.abs($.x - $.startX) > 3 || Math.abs($.y - $.startY) > 3)
                  , le = is(B);
                !W && Y && ($._vx.reset(),
                $._vy.reset(),
                _ && Ne && ui.delayedCall(.08, function() {
                    if (ws() - fi > 300 && !B.defaultPrevented) {
                        if (B.target.click)
                            B.target.click();
                        else if (lt.createEvent) {
                            var te = lt.createEvent("MouseEvents");
                            te.initMouseEvent("click", !0, !0, Yi, 1, le.screenX, le.screenY, le.clientX, le.clientY, !1, !1, !1, !1, 0, null),
                            B.target.dispatchEvent(te)
                        }
                    }
                })),
                $.isDragging = $.isGesturing = $.isPressed = !1,
                x && re && !Ce && Je.restart(!0),
                ut && Lt(),
                C && re && C($),
                P && P($, W)
            }
        }
        , xi = function(Y) {
            return Y.touches && Y.touches.length > 1 && ($.isGesturing = !0) && U(Y, $.isDragging)
        }, ct = function() {
            return ($.isGesturing = !1) || R($)
        }, Tt = function(Y) {
            if (!pt(Y)) {
                var re = me()
                  , W = Ge();
                Kt((re - ii) * we, (W - Gt) * we, 1),
                ii = re,
                Gt = W,
                x && Je.restart(!0)
            }
        }, ni = function(Y) {
            if (!pt(Y)) {
                Y = is(Y, _),
                _e && (Te = !0);
                var re = (Y.deltaMode === 1 ? c : Y.deltaMode === 2 ? Yi.innerHeight : 1) * b;
                Kt(Y.deltaX * re, Y.deltaY * re, 0),
                x && !Ce && Je.restart(!0)
            }
        }, Hi = function(Y) {
            if (!pt(Y)) {
                var re = Y.clientX
                  , W = Y.clientY
                  , le = re - $.x
                  , te = W - $.y;
                $.x = re,
                $.y = W,
                De = !0,
                x && Je.restart(!0),
                (le || te) && Pi(le, te)
            }
        }, de = function(Y) {
            $.event = Y,
            ne($)
        }, F = function(Y) {
            $.event = Y,
            se($)
        }, ie = function(Y) {
            return pt(Y) || is(Y, _) && ve($)
        };
        Je = $._dc = ui.delayedCall(D || .25, Qt).pause(),
        $.deltaX = $.deltaY = 0,
        $._vx = El(0, 50, !0),
        $._vy = El(0, 50, !0),
        $.scrollX = me,
        $.scrollY = Ge,
        $.isDragging = $.isGesturing = $.isPressed = !1,
        md(this),
        $.enable = function(B) {
            return $.isEnabled || (Ci(nt ? lt : l, "scroll", Cl),
            u.indexOf("scroll") >= 0 && Ci(nt ? lt : l, "scroll", Tt, Ut, ke),
            u.indexOf("wheel") >= 0 && Ci(l, "wheel", ni, Ut, ke),
            (u.indexOf("touch") >= 0 && gd || u.indexOf("pointer") >= 0) && (Ci(l, fr[0], ci, Ut, ke),
            Ci(lt, fr[2], Oe),
            Ci(lt, fr[3], Oe),
            Ne && Ci(l, "click", _r, !0, !0),
            ve && Ci(l, "click", ie),
            U && Ci(lt, "gesturestart", xi),
            R && Ci(lt, "gestureend", ct),
            ne && Ci(l, Bn + "enter", de),
            se && Ci(l, Bn + "leave", F),
            ae && Ci(l, Bn + "move", Hi)),
            $.isEnabled = !0,
            $.isDragging = $.isGesturing = $.isPressed = De = ut = !1,
            $._vx.reset(),
            $._vy.reset(),
            ii = me(),
            Gt = Ge(),
            B && B.type && ci(B),
            be && be($)),
            $
        }
        ,
        $.disable = function() {
            $.isEnabled && (bo.filter(function(B) {
                return B !== $ && Cs(B.target)
            }).length || wi(nt ? lt : l, "scroll", Cl),
            $.isPressed && ($._vx.reset(),
            $._vy.reset(),
            wi(Ce ? l : lt, fr[1], Di, !0)),
            wi(nt ? lt : l, "scroll", Tt, ke),
            wi(l, "wheel", ni, ke),
            wi(l, fr[0], ci, ke),
            wi(lt, fr[2], Oe),
            wi(lt, fr[3], Oe),
            wi(l, "click", _r, !0),
            wi(l, "click", ie),
            wi(lt, "gesturestart", xi),
            wi(lt, "gestureend", ct),
            wi(l, Bn + "enter", de),
            wi(l, Bn + "leave", F),
            wi(l, Bn + "move", Hi),
            $.isEnabled = $.isPressed = $.isDragging = !1,
            $e && $e($))
        }
        ,
        $.kill = $.revert = function() {
            $.disable();
            var B = bo.indexOf($);
            B >= 0 && bo.splice(B, 1),
            Wr === $ && (Wr = 0)
        }
        ,
        bo.push($),
        Ce && Cs(l) && (Wr = $),
        $.enable(v)
    }
    ,
    M0(s, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    s
}();
Rt.version = "3.12.7";
Rt.create = function(s) {
    return new Rt(s)
}
;
Rt.register = xd;
Rt.getAll = function() {
    return bo.slice()
}
;
Rt.getById = function(s) {
    return bo.filter(function(e) {
        return e.vars.id === s
    })[0]
}
;
yd() && ui.registerPlugin(Rt);
/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var xe, _o, Ve, Dt, Xi, ht, yf, Vu, Ys, Es, ls, hu, di, aa, Tl, Ti, bc, wc, mo, bd, Ha, wd, Ei, Sl, Cd, Ed, un, kl, vf, Oo, Df, Uu, Fl, za, du = 1, pi = Date.now, $a = pi(), ur = 0, fs = 0, Cc = function(e, i, t) {
    var r = qi(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return t["_" + i + "Clamp"] = r,
    r ? e.substr(6, e.length - 7) : e
}, Ec = function(e, i) {
    return i && (!qi(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
}, R0 = function s() {
    return fs && requestAnimationFrame(s)
}, Tc = function() {
    return aa = 1
}, Sc = function() {
    return aa = 0
}, Er = function(e) {
    return e
}, cs = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, Td = function() {
    return typeof window < "u"
}, Sd = function() {
    return xe || Td() && (xe = window.gsap) && xe.registerPlugin && xe
}, Zn = function(e) {
    return !!~yf.indexOf(e)
}, kd = function(e) {
    return (e === "Height" ? Df : Ve["inner" + e]) || Xi["client" + e] || ht["client" + e]
}, Fd = function(e) {
    return xn(e, "getBoundingClientRect") || (Zn(e) ? function() {
        return Lu.width = Ve.innerWidth,
        Lu.height = Df,
        Lu
    }
    : function() {
        return Xr(e)
    }
    )
}, L0 = function(e, i, t) {
    var r = t.d
      , n = t.d2
      , u = t.a;
    return (u = xn(e, "getBoundingClientRect")) ? function() {
        return u()[r]
    }
    : function() {
        return (i ? kd(n) : e["client" + n]) || 0
    }
}, N0 = function(e, i) {
    return !i || ~Or.indexOf(e) ? Fd(e) : function() {
        return Lu
    }
}, Fr = function(e, i) {
    var t = i.s
      , r = i.d2
      , n = i.d
      , u = i.a;
    return Math.max(0, (t = "scroll" + r) && (u = xn(e, t)) ? u() - Fd(e)()[n] : Zn(e) ? (Xi[t] || ht[t]) - kd(r) : e[t] - e["offset" + r])
}, pu = function(e, i) {
    for (var t = 0; t < mo.length; t += 3)
        (!i || ~i.indexOf(mo[t + 1])) && e(mo[t], mo[t + 1], mo[t + 2])
}, qi = function(e) {
    return typeof e == "string"
}, mi = function(e) {
    return typeof e == "function"
}, hs = function(e) {
    return typeof e == "number"
}, In = function(e) {
    return typeof e == "object"
}, rs = function(e, i, t) {
    return e && e.progress(i ? 0 : 1) && t && e.pause()
}, qa = function(e, i) {
    if (e.enabled) {
        var t = e._ctx ? e._ctx.add(function() {
            return i(e)
        }) : i(e);
        t && t.totalTime && (e.callbackAnimation = t)
    }
}, lo = Math.abs, Pd = "left", Ad = "top", xf = "right", bf = "bottom", Vn = "width", Un = "height", Ts = "Right", Ss = "Left", ks = "Top", Fs = "Bottom", It = "padding", nr = "margin", Yo = "Width", wf = "Height", Xt = "px", or = function(e) {
    return Ve.getComputedStyle(e)
}, B0 = function(e) {
    var i = or(e).position;
    e.style.position = i === "absolute" || i === "fixed" ? i : "relative"
}, kc = function(e, i) {
    for (var t in i)
        t in e || (e[t] = i[t]);
    return e
}, Xr = function(e, i) {
    var t = i && or(e)[Tl] !== "matrix(1, 0, 0, 1, 0, 0)" && xe.to(e, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
      , r = e.getBoundingClientRect();
    return t && t.progress(0).kill(),
    r
}, Gu = function(e, i) {
    var t = i.d2;
    return e["offset" + t] || e["client" + t] || 0
}, Md = function(e) {
    var i = [], t = e.labels, r = e.duration(), n;
    for (n in t)
        i.push(t[n] / r);
    return i
}, I0 = function(e) {
    return function(i) {
        return xe.utils.snap(Md(e), i)
    }
}, Cf = function(e) {
    var i = xe.utils.snap(e)
      , t = Array.isArray(e) && e.slice(0).sort(function(r, n) {
        return r - n
    });
    return t ? function(r, n, u) {
        u === void 0 && (u = .001);
        var l;
        if (!n)
            return i(r);
        if (n > 0) {
            for (r -= u,
            l = 0; l < t.length; l++)
                if (t[l] >= r)
                    return t[l];
            return t[l - 1]
        } else
            for (l = t.length,
            r += u; l--; )
                if (t[l] <= r)
                    return t[l];
        return t[0]
    }
    : function(r, n, u) {
        u === void 0 && (u = .001);
        var l = i(r);
        return !n || Math.abs(l - r) < u || l - r < 0 == n < 0 ? l : i(n < 0 ? r - e : r + e)
    }
}, H0 = function(e) {
    return function(i, t) {
        return Cf(Md(e))(i, t.direction)
    }
}, gu = function(e, i, t, r) {
    return t.split(",").forEach(function(n) {
        return e(i, n, r)
    })
}, Zt = function(e, i, t, r, n) {
    return e.addEventListener(i, t, {
        passive: !r,
        capture: !!n
    })
}, Jt = function(e, i, t, r) {
    return e.removeEventListener(i, t, !!r)
}, _u = function(e, i, t) {
    t = t && t.wheelHandler,
    t && (e(i, "wheel", t),
    e(i, "touchmove", t))
}, Fc = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, mu = {
    toggleActions: "play",
    anticipatePin: 0
}, Qu = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, Au = function(e, i) {
    if (qi(e)) {
        var t = e.indexOf("=")
          , r = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
        ~t && (e.indexOf("%") > t && (r *= i / 100),
        e = e.substr(0, t - 1)),
        e = r + (e in Qu ? Qu[e] * i : ~e.indexOf("%") ? parseFloat(e) * i / 100 : parseFloat(e) || 0)
    }
    return e
}, yu = function(e, i, t, r, n, u, l, c) {
    var p = n.startColor
      , _ = n.endColor
      , x = n.fontSize
      , D = n.indent
      , h = n.fontWeight
      , b = Dt.createElement("div")
      , v = Zn(t) || xn(t, "pinType") === "fixed"
      , E = e.indexOf("scroller") !== -1
      , C = v ? ht : t
      , L = e.indexOf("start") !== -1
      , A = L ? p : _
      , P = "border-color:" + A + ";font-size:" + x + ";color:" + A + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return P += "position:" + ((E || c) && v ? "fixed;" : "absolute;"),
    (E || c || !v) && (P += (r === Vt ? xf : bf) + ":" + (u + parseFloat(D)) + "px;"),
    l && (P += "box-sizing:border-box;text-align:left;width:" + l.offsetWidth + "px;"),
    b._isStart = L,
    b.setAttribute("class", "gsap-marker-" + e + (i ? " marker-" + i : "")),
    b.style.cssText = P,
    b.innerText = i || i === 0 ? e + "-" + i : e,
    C.children[0] ? C.insertBefore(b, C.children[0]) : C.appendChild(b),
    b._offset = b["offset" + r.op.d2],
    Mu(b, 0, r, L),
    b
}, Mu = function(e, i, t, r) {
    var n = {
        display: "block"
    }
      , u = t[r ? "os2" : "p2"]
      , l = t[r ? "p2" : "os2"];
    e._isFlipped = r,
    n[t.a + "Percent"] = r ? -100 : 0,
    n[t.a] = r ? "1px" : 0,
    n["border" + u + Yo] = 1,
    n["border" + l + Yo] = 0,
    n[t.p] = i + "px",
    xe.set(e, n)
}, We = [], Pl = {}, Vs, Pc = function() {
    return pi() - ur > 34 && (Vs || (Vs = requestAnimationFrame(Gr)))
}, fo = function() {
    (!Ei || !Ei.isPressed || Ei.startX > ht.clientWidth) && (Ue.cache++,
    Ei ? Vs || (Vs = requestAnimationFrame(Gr)) : Gr(),
    ur || to("scrollStart"),
    ur = pi())
}, ja = function() {
    Ed = Ve.innerWidth,
    Cd = Ve.innerHeight
}, ds = function(e) {
    Ue.cache++,
    (e === !0 || !di && !wd && !Dt.fullscreenElement && !Dt.webkitFullscreenElement && (!Sl || Ed !== Ve.innerWidth || Math.abs(Ve.innerHeight - Cd) > Ve.innerHeight * .25)) && Vu.restart(!0)
}, eo = {}, z0 = [], Od = function s() {
    return Jt(tt, "scrollEnd", s) || zn(!0)
}, to = function(e) {
    return eo[e] && eo[e].map(function(i) {
        return i()
    }) || z0
}, $i = [], Rd = function(e) {
    for (var i = 0; i < $i.length; i += 5)
        (!e || $i[i + 4] && $i[i + 4].query === e) && ($i[i].style.cssText = $i[i + 1],
        $i[i].getBBox && $i[i].setAttribute("transform", $i[i + 2] || ""),
        $i[i + 3].uncache = 1)
}, Ef = function(e, i) {
    var t;
    for (Ti = 0; Ti < We.length; Ti++)
        t = We[Ti],
        t && (!i || t._ctx === i) && (e ? t.kill(1) : t.revert(!0, !0));
    Uu = !0,
    i && Rd(i),
    i || to("revert")
}, Ld = function(e, i) {
    Ue.cache++,
    (i || !Si) && Ue.forEach(function(t) {
        return mi(t) && t.cacheID++ && (t.rec = 0)
    }),
    qi(e) && (Ve.history.scrollRestoration = vf = e)
}, Si, Gn = 0, Ac, $0 = function() {
    if (Ac !== Gn) {
        var e = Ac = Gn;
        requestAnimationFrame(function() {
            return e === Gn && zn(!0)
        })
    }
}, Nd = function() {
    ht.appendChild(Oo),
    Df = !Ei && Oo.offsetHeight || Ve.innerHeight,
    ht.removeChild(Oo)
}, Mc = function(e) {
    return Ys(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i) {
        return i.style.display = e ? "none" : "block"
    })
}, zn = function(e, i) {
    if (Xi = Dt.documentElement,
    ht = Dt.body,
    yf = [Ve, Dt, Xi, ht],
    ur && !e && !Uu) {
        Zt(tt, "scrollEnd", Od);
        return
    }
    Nd(),
    Si = tt.isRefreshing = !0,
    Ue.forEach(function(r) {
        return mi(r) && ++r.cacheID && (r.rec = r())
    });
    var t = to("refreshInit");
    bd && tt.sort(),
    i || Ef(),
    Ue.forEach(function(r) {
        mi(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"),
        r(0))
    }),
    We.slice(0).forEach(function(r) {
        return r.refresh()
    }),
    Uu = !1,
    We.forEach(function(r) {
        if (r._subPinOffset && r.pin) {
            var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight"
              , u = r.pin[n];
            r.revert(!0, 1),
            r.adjustPinSpacing(r.pin[n] - u),
            r.refresh()
        }
    }),
    Fl = 1,
    Mc(!0),
    We.forEach(function(r) {
        var n = Fr(r.scroller, r._dir)
          , u = r.vars.end === "max" || r._endClamp && r.end > n
          , l = r._startClamp && r.start >= n;
        (u || l) && r.setPositions(l ? n - 1 : r.start, u ? Math.max(l ? n : r.start + 1, n) : r.end, !0)
    }),
    Mc(!1),
    Fl = 0,
    t.forEach(function(r) {
        return r && r.render && r.render(-1)
    }),
    Ue.forEach(function(r) {
        mi(r) && (r.smooth && requestAnimationFrame(function() {
            return r.target.style.scrollBehavior = "smooth"
        }),
        r.rec && r(r.rec))
    }),
    Ld(vf, 1),
    Vu.pause(),
    Gn++,
    Si = 2,
    Gr(2),
    We.forEach(function(r) {
        return mi(r.vars.onRefresh) && r.vars.onRefresh(r)
    }),
    Si = tt.isRefreshing = !1,
    to("refresh")
}, Al = 0, Ou = 1, Ps, Gr = function(e) {
    if (e === 2 || !Si && !Uu) {
        tt.isUpdating = !0,
        Ps && Ps.update(0);
        var i = We.length
          , t = pi()
          , r = t - $a >= 50
          , n = i && We[0].scroll();
        if (Ou = Al > n ? -1 : 1,
        Si || (Al = n),
        r && (ur && !aa && t - ur > 200 && (ur = 0,
        to("scrollEnd")),
        ls = $a,
        $a = t),
        Ou < 0) {
            for (Ti = i; Ti-- > 0; )
                We[Ti] && We[Ti].update(0, r);
            Ou = 1
        } else
            for (Ti = 0; Ti < i; Ti++)
                We[Ti] && We[Ti].update(0, r);
        tt.isUpdating = !1
    }
    Vs = 0
}, Ml = [Pd, Ad, bf, xf, nr + Fs, nr + Ts, nr + ks, nr + Ss, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Ru = Ml.concat([Vn, Un, "boxSizing", "max" + Yo, "max" + wf, "position", nr, It, It + ks, It + Ts, It + Fs, It + Ss]), q0 = function(e, i, t) {
    Ro(t);
    var r = e._gsap;
    if (r.spacerIsNative)
        Ro(r.spacerState);
    else if (e._gsap.swappedIn) {
        var n = i.parentNode;
        n && (n.insertBefore(e, i),
        n.removeChild(i))
    }
    e._gsap.swappedIn = !1
}, Xa = function(e, i, t, r) {
    if (!e._gsap.swappedIn) {
        for (var n = Ml.length, u = i.style, l = e.style, c; n--; )
            c = Ml[n],
            u[c] = t[c];
        u.position = t.position === "absolute" ? "absolute" : "relative",
        t.display === "inline" && (u.display = "inline-block"),
        l[bf] = l[xf] = "auto",
        u.flexBasis = t.flexBasis || "auto",
        u.overflow = "visible",
        u.boxSizing = "border-box",
        u[Vn] = Gu(e, Fi) + Xt,
        u[Un] = Gu(e, Vt) + Xt,
        u[It] = l[nr] = l[Ad] = l[Pd] = "0",
        Ro(r),
        l[Vn] = l["max" + Yo] = t[Vn],
        l[Un] = l["max" + wf] = t[Un],
        l[It] = t[It],
        e.parentNode !== i && (e.parentNode.insertBefore(i, e),
        i.appendChild(e)),
        e._gsap.swappedIn = !0
    }
}, j0 = /([A-Z])/g, Ro = function(e) {
    if (e) {
        var i = e.t.style, t = e.length, r = 0, n, u;
        for ((e.t._gsap || xe.core.getCache(e.t)).uncache = 1; r < t; r += 2)
            u = e[r + 1],
            n = e[r],
            u ? i[n] = u : i[n] && i.removeProperty(n.replace(j0, "-$1").toLowerCase())
    }
}, vu = function(e) {
    for (var i = Ru.length, t = e.style, r = [], n = 0; n < i; n++)
        r.push(Ru[n], t[Ru[n]]);
    return r.t = e,
    r
}, X0 = function(e, i, t) {
    for (var r = [], n = e.length, u = t ? 8 : 0, l; u < n; u += 2)
        l = e[u],
        r.push(l, l in i ? i[l] : e[u + 1]);
    return r.t = e.t,
    r
}, Lu = {
    left: 0,
    top: 0
}, Oc = function(e, i, t, r, n, u, l, c, p, _, x, D, h, b) {
    mi(e) && (e = e(c)),
    qi(e) && e.substr(0, 3) === "max" && (e = D + (e.charAt(4) === "=" ? Au("0" + e.substr(3), t) : 0));
    var v = h ? h.time() : 0, E, C, L;
    if (h && h.seek(0),
    isNaN(e) || (e = +e),
    hs(e))
        h && (e = xe.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, D, e)),
        l && Mu(l, t, r, !0);
    else {
        mi(i) && (i = i(c));
        var A = (e || "0").split(" "), P, M, z, f;
        L = Oi(i, c) || ht,
        P = Xr(L) || {},
        (!P || !P.left && !P.top) && or(L).display === "none" && (f = L.style.display,
        L.style.display = "block",
        P = Xr(L),
        f ? L.style.display = f : L.style.removeProperty("display")),
        M = Au(A[0], P[r.d]),
        z = Au(A[1] || "0", t),
        e = P[r.p] - p[r.p] - _ + M + n - z,
        l && Mu(l, z, r, t - z < 20 || l._isStart && z > 20),
        t -= t - z
    }
    if (b && (c[b] = e || -.001,
    e < 0 && (e = 0)),
    u) {
        var q = e + t
          , H = u._isStart;
        E = "scroll" + r.d2,
        Mu(u, q, r, H && q > 20 || !H && (x ? Math.max(ht[E], Xi[E]) : u.parentNode[E]) <= q + 1),
        x && (p = Xr(l),
        x && (u.style[r.op.p] = p[r.op.p] - r.op.m - u._offset + Xt))
    }
    return h && L && (E = Xr(L),
    h.seek(D),
    C = Xr(L),
    h._caScrollDist = E[r.p] - C[r.p],
    e = e / h._caScrollDist * D),
    h && h.seek(v),
    h ? e : Math.round(e)
}, W0 = /(webkit|moz|length|cssText|inset)/i, Rc = function(e, i, t, r) {
    if (e.parentNode !== i) {
        var n = e.style, u, l;
        if (i === ht) {
            e._stOrig = n.cssText,
            l = or(e);
            for (u in l)
                !+u && !W0.test(u) && l[u] && typeof n[u] == "string" && u !== "0" && (n[u] = l[u]);
            n.top = t,
            n.left = r
        } else
            n.cssText = e._stOrig;
        xe.core.getCache(e).uncache = 1,
        i.appendChild(e)
    }
}, Bd = function(e, i, t) {
    var r = i
      , n = r;
    return function(u) {
        var l = Math.round(e());
        return l !== r && l !== n && Math.abs(l - r) > 3 && Math.abs(l - n) > 3 && (u = l,
        t && t()),
        n = r,
        r = Math.round(u),
        r
    }
}, Du = function(e, i, t) {
    var r = {};
    r[i.p] = "+=" + t,
    xe.set(e, r)
}, Lc = function(e, i) {
    var t = En(e, i)
      , r = "_scroll" + i.p2
      , n = function u(l, c, p, _, x) {
        var D = u.tween
          , h = c.onComplete
          , b = {};
        p = p || t();
        var v = Bd(t, p, function() {
            D.kill(),
            u.tween = 0
        });
        return x = _ && x || 0,
        _ = _ || l - p,
        D && D.kill(),
        c[r] = l,
        c.inherit = !1,
        c.modifiers = b,
        b[r] = function() {
            return v(p + _ * D.ratio + x * D.ratio * D.ratio)
        }
        ,
        c.onUpdate = function() {
            Ue.cache++,
            u.tween && Gr()
        }
        ,
        c.onComplete = function() {
            u.tween = 0,
            h && h.call(D)
        }
        ,
        D = u.tween = xe.to(e, c),
        D
    };
    return e[r] = t,
    t.wheelHandler = function() {
        return n.tween && n.tween.kill() && (n.tween = 0)
    }
    ,
    Zt(e, "wheel", t.wheelHandler),
    tt.isTouch && Zt(e, "touchmove", t.wheelHandler),
    n
}, tt = function() {
    function s(i, t) {
        _o || s.register(xe) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        kl(this),
        this.init(i, t)
    }
    var e = s.prototype;
    return e.init = function(t, r) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        !fs) {
            this.update = this.refresh = this.kill = Er;
            return
        }
        t = kc(qi(t) || hs(t) || t.nodeType ? {
            trigger: t
        } : t, mu);
        var n = t, u = n.onUpdate, l = n.toggleClass, c = n.id, p = n.onToggle, _ = n.onRefresh, x = n.scrub, D = n.trigger, h = n.pin, b = n.pinSpacing, v = n.invalidateOnRefresh, E = n.anticipatePin, C = n.onScrubComplete, L = n.onSnapComplete, A = n.once, P = n.snap, M = n.pinReparent, z = n.pinSpacer, f = n.containerAnimation, q = n.fastScrollEnd, H = n.preventOverlaps, I = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? Fi : Vt, ee = !x && x !== 0, K = Oi(t.scroller || Ve), G = xe.core.getCache(K), ne = Zn(K), se = ("pinType"in t ? t.pinType : xn(K, "pinType") || ne && "fixed") === "fixed", ae = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack], oe = ee && t.toggleActions.split(" "), Ce = "markers"in t ? t.markers : mu.markers, U = ne ? 0 : parseFloat(or(K)["border" + I.p2 + Yo]) || 0, R = this, _e = t.onRefreshInit && function() {
            return t.onRefreshInit(R)
        }
        , be = L0(K, ne, I), $e = N0(K, ne), ve = 0, we = 0, ke = 0, Ne = En(K, I), Le, gt, Ye, Je, ut, De, Te, Me, bt, $, ze, ti, Ut, me, Ge, ii, Gt, ce, nt, lt, ri, li, fi, _r, pt, Qt, Lt, Kt, Pi, Di, ci, Oe, xi, ct, Tt, ni, Hi, de, F;
        if (R._startClamp = R._endClamp = !1,
        R._dir = I,
        E *= 45,
        R.scroller = K,
        R.scroll = f ? f.time.bind(f) : Ne,
        Je = Ne(),
        R.vars = t,
        r = r || t.animation,
        "refreshPriority"in t && (bd = 1,
        t.refreshPriority === -9999 && (Ps = R)),
        G.tweenScroll = G.tweenScroll || {
            top: Lc(K, Vt),
            left: Lc(K, Fi)
        },
        R.tweenTo = Le = G.tweenScroll[I.p],
        R.scrubDuration = function(W) {
            xi = hs(W) && W,
            xi ? Oe ? Oe.duration(W) : Oe = xe.to(r, {
                ease: "expo",
                totalProgress: "+=0",
                inherit: !1,
                duration: xi,
                paused: !0,
                onComplete: function() {
                    return C && C(R)
                }
            }) : (Oe && Oe.progress(1).kill(),
            Oe = 0)
        }
        ,
        r && (r.vars.lazy = !1,
        r._initted && !R.isReverted || r.vars.immediateRender !== !1 && t.immediateRender !== !1 && r.duration() && r.render(0, !0, !0),
        R.animation = r.pause(),
        r.scrollTrigger = R,
        R.scrubDuration(x),
        Di = 0,
        c || (c = r.vars.id)),
        P && ((!In(P) || P.push) && (P = {
            snapTo: P
        }),
        "scrollBehavior"in ht.style && xe.set(ne ? [ht, Xi] : K, {
            scrollBehavior: "auto"
        }),
        Ue.forEach(function(W) {
            return mi(W) && W.target === (ne ? Dt.scrollingElement || Xi : K) && (W.smooth = !1)
        }),
        Ye = mi(P.snapTo) ? P.snapTo : P.snapTo === "labels" ? I0(r) : P.snapTo === "labelsDirectional" ? H0(r) : P.directional !== !1 ? function(W, le) {
            return Cf(P.snapTo)(W, pi() - we < 500 ? 0 : le.direction)
        }
        : xe.utils.snap(P.snapTo),
        ct = P.duration || {
            min: .1,
            max: 2
        },
        ct = In(ct) ? Es(ct.min, ct.max) : Es(ct, ct),
        Tt = xe.delayedCall(P.delay || xi / 2 || .1, function() {
            var W = Ne()
              , le = pi() - we < 500
              , te = Le.tween;
            if ((le || Math.abs(R.getVelocity()) < 10) && !te && !aa && ve !== W) {
                var he = (W - De) / me, Fe = r && !ee ? r.totalProgress() : he, ye = le ? 0 : (Fe - ci) / (pi() - ls) * 1e3 || 0, Ie = xe.utils.clamp(-he, 1 - he, lo(ye / 2) * ye / .185), Ze = he + (P.inertia === !1 ? 0 : Ie), ot, je, Xe = P, ft = Xe.onStart, Ae = Xe.onInterrupt, Nt = Xe.onComplete;
                if (ot = Ye(Ze, R),
                hs(ot) || (ot = Ze),
                je = Math.max(0, Math.round(De + ot * me)),
                W <= Te && W >= De && je !== W) {
                    if (te && !te._initted && te.data <= lo(je - W))
                        return;
                    P.inertia === !1 && (Ie = ot - he),
                    Le(je, {
                        duration: ct(lo(Math.max(lo(Ze - Fe), lo(ot - Fe)) * .185 / ye / .05 || 0)),
                        ease: P.ease || "power3",
                        data: lo(je - W),
                        onInterrupt: function() {
                            return Tt.restart(!0) && Ae && Ae(R)
                        },
                        onComplete: function() {
                            R.update(),
                            ve = Ne(),
                            r && !ee && (Oe ? Oe.resetTo("totalProgress", ot, r._tTime / r._tDur) : r.progress(ot)),
                            Di = ci = r && !ee ? r.totalProgress() : R.progress,
                            L && L(R),
                            Nt && Nt(R)
                        }
                    }, W, Ie * me, je - W - Ie * me),
                    ft && ft(R, Le.tween)
                }
            } else
                R.isActive && ve !== W && Tt.restart(!0)
        }).pause()),
        c && (Pl[c] = R),
        D = R.trigger = Oi(D || h !== !0 && h),
        F = D && D._gsap && D._gsap.stRevert,
        F && (F = F(R)),
        h = h === !0 ? D : Oi(h),
        qi(l) && (l = {
            targets: D,
            className: l
        }),
        h && (b === !1 || b === nr || (b = !b && h.parentNode && h.parentNode.style && or(h.parentNode).display === "flex" ? !1 : It),
        R.pin = h,
        gt = xe.core.getCache(h),
        gt.spacer ? Ge = gt.pinState : (z && (z = Oi(z),
        z && !z.nodeType && (z = z.current || z.nativeElement),
        gt.spacerIsNative = !!z,
        z && (gt.spacerState = vu(z))),
        gt.spacer = ce = z || Dt.createElement("div"),
        ce.classList.add("pin-spacer"),
        c && ce.classList.add("pin-spacer-" + c),
        gt.pinState = Ge = vu(h)),
        t.force3D !== !1 && xe.set(h, {
            force3D: !0
        }),
        R.spacer = ce = gt.spacer,
        Pi = or(h),
        _r = Pi[b + I.os2],
        lt = xe.getProperty(h),
        ri = xe.quickSetter(h, I.a, Xt),
        Xa(h, ce, Pi),
        Gt = vu(h)),
        Ce) {
            ti = In(Ce) ? kc(Ce, Fc) : Fc,
            $ = yu("scroller-start", c, K, I, ti, 0),
            ze = yu("scroller-end", c, K, I, ti, 0, $),
            nt = $["offset" + I.op.d2];
            var ie = Oi(xn(K, "content") || K);
            Me = this.markerStart = yu("start", c, ie, I, ti, nt, 0, f),
            bt = this.markerEnd = yu("end", c, ie, I, ti, nt, 0, f),
            f && (de = xe.quickSetter([Me, bt], I.a, Xt)),
            !se && !(Or.length && xn(K, "fixedMarkers") === !0) && (B0(ne ? ht : K),
            xe.set([$, ze], {
                force3D: !0
            }),
            Qt = xe.quickSetter($, I.a, Xt),
            Kt = xe.quickSetter(ze, I.a, Xt))
        }
        if (f) {
            var B = f.vars.onUpdate
              , Y = f.vars.onUpdateParams;
            f.eventCallback("onUpdate", function() {
                R.update(0, 0, 1),
                B && B.apply(f, Y || [])
            })
        }
        if (R.previous = function() {
            return We[We.indexOf(R) - 1]
        }
        ,
        R.next = function() {
            return We[We.indexOf(R) + 1]
        }
        ,
        R.revert = function(W, le) {
            if (!le)
                return R.kill(!0);
            var te = W !== !1 || !R.enabled
              , he = di;
            te !== R.isReverted && (te && (ni = Math.max(Ne(), R.scroll.rec || 0),
            ke = R.progress,
            Hi = r && r.progress()),
            Me && [Me, bt, $, ze].forEach(function(Fe) {
                return Fe.style.display = te ? "none" : "block"
            }),
            te && (di = R,
            R.update(te)),
            h && (!M || !R.isActive) && (te ? q0(h, ce, Ge) : Xa(h, ce, or(h), pt)),
            te || R.update(te),
            di = he,
            R.isReverted = te)
        }
        ,
        R.refresh = function(W, le, te, he) {
            if (!((di || !R.enabled) && !le)) {
                if (h && W && ur) {
                    Zt(s, "scrollEnd", Od);
                    return
                }
                !Si && _e && _e(R),
                di = R,
                Le.tween && !te && (Le.tween.kill(),
                Le.tween = 0),
                Oe && Oe.pause(),
                v && r && r.revert({
                    kill: !1
                }).invalidate(),
                R.isReverted || R.revert(!0, !0),
                R._subPinOffset = !1;
                var Fe = be(), ye = $e(), Ie = f ? f.duration() : Fr(K, I), Ze = me <= .01, ot = 0, je = he || 0, Xe = In(te) ? te.end : t.end, ft = t.endTrigger || D, Ae = In(te) ? te.start : t.start || (t.start === 0 || !D ? 0 : h ? "0 0" : "0 100%"), Nt = R.pinnedContainer = t.pinnedContainer && Oi(t.pinnedContainer, R), yt = D && Math.max(0, We.indexOf(R)) || 0, At = yt, St, $t, Nr, mr, qt, kt, zi, no, iu, Br, Ji, Sn, kn;
                for (Ce && In(te) && (Sn = xe.getProperty($, I.p),
                kn = xe.getProperty(ze, I.p)); At-- > 0; )
                    kt = We[At],
                    kt.end || kt.refresh(0, 1) || (di = R),
                    zi = kt.pin,
                    zi && (zi === D || zi === h || zi === Nt) && !kt.isReverted && (Br || (Br = []),
                    Br.unshift(kt),
                    kt.revert(!0, !0)),
                    kt !== We[At] && (yt--,
                    At--);
                for (mi(Ae) && (Ae = Ae(R)),
                Ae = Cc(Ae, "start", R),
                De = Oc(Ae, D, Fe, I, Ne(), Me, $, R, ye, U, se, Ie, f, R._startClamp && "_startClamp") || (h ? -.001 : 0),
                mi(Xe) && (Xe = Xe(R)),
                qi(Xe) && !Xe.indexOf("+=") && (~Xe.indexOf(" ") ? Xe = (qi(Ae) ? Ae.split(" ")[0] : "") + Xe : (ot = Au(Xe.substr(2), Fe),
                Xe = qi(Ae) ? Ae : (f ? xe.utils.mapRange(0, f.duration(), f.scrollTrigger.start, f.scrollTrigger.end, De) : De) + ot,
                ft = D)),
                Xe = Cc(Xe, "end", R),
                Te = Math.max(De, Oc(Xe || (ft ? "100% 0" : Ie), ft, Fe, I, Ne() + ot, bt, ze, R, ye, U, se, Ie, f, R._endClamp && "_endClamp")) || -.001,
                ot = 0,
                At = yt; At--; )
                    kt = We[At],
                    zi = kt.pin,
                    zi && kt.start - kt._pinPush <= De && !f && kt.end > 0 && (St = kt.end - (R._startClamp ? Math.max(0, kt.start) : kt.start),
                    (zi === D && kt.start - kt._pinPush < De || zi === Nt) && isNaN(Ae) && (ot += St * (1 - kt.progress)),
                    zi === h && (je += St));
                if (De += ot,
                Te += ot,
                R._startClamp && (R._startClamp += ot),
                R._endClamp && !Si && (R._endClamp = Te || -.001,
                Te = Math.min(Te, Fr(K, I))),
                me = Te - De || (De -= .01) && .001,
                Ze && (ke = xe.utils.clamp(0, 1, xe.utils.normalize(De, Te, ni))),
                R._pinPush = je,
                Me && ot && (St = {},
                St[I.a] = "+=" + ot,
                Nt && (St[I.p] = "-=" + Ne()),
                xe.set([Me, bt], St)),
                h && !(Fl && R.end >= Fr(K, I)))
                    St = or(h),
                    mr = I === Vt,
                    Nr = Ne(),
                    li = parseFloat(lt(I.a)) + je,
                    !Ie && Te > 1 && (Ji = (ne ? Dt.scrollingElement || Xi : K).style,
                    Ji = {
                        style: Ji,
                        value: Ji["overflow" + I.a.toUpperCase()]
                    },
                    ne && or(ht)["overflow" + I.a.toUpperCase()] !== "scroll" && (Ji.style["overflow" + I.a.toUpperCase()] = "scroll")),
                    Xa(h, ce, St),
                    Gt = vu(h),
                    $t = Xr(h, !0),
                    no = se && En(K, mr ? Fi : Vt)(),
                    b ? (pt = [b + I.os2, me + je + Xt],
                    pt.t = ce,
                    At = b === It ? Gu(h, I) + me + je : 0,
                    At && (pt.push(I.d, At + Xt),
                    ce.style.flexBasis !== "auto" && (ce.style.flexBasis = At + Xt)),
                    Ro(pt),
                    Nt && We.forEach(function(Zr) {
                        Zr.pin === Nt && Zr.vars.pinSpacing !== !1 && (Zr._subPinOffset = !0)
                    }),
                    se && Ne(ni)) : (At = Gu(h, I),
                    At && ce.style.flexBasis !== "auto" && (ce.style.flexBasis = At + Xt)),
                    se && (qt = {
                        top: $t.top + (mr ? Nr - De : no) + Xt,
                        left: $t.left + (mr ? no : Nr - De) + Xt,
                        boxSizing: "border-box",
                        position: "fixed"
                    },
                    qt[Vn] = qt["max" + Yo] = Math.ceil($t.width) + Xt,
                    qt[Un] = qt["max" + wf] = Math.ceil($t.height) + Xt,
                    qt[nr] = qt[nr + ks] = qt[nr + Ts] = qt[nr + Fs] = qt[nr + Ss] = "0",
                    qt[It] = St[It],
                    qt[It + ks] = St[It + ks],
                    qt[It + Ts] = St[It + Ts],
                    qt[It + Fs] = St[It + Fs],
                    qt[It + Ss] = St[It + Ss],
                    ii = X0(Ge, qt, M),
                    Si && Ne(0)),
                    r ? (iu = r._initted,
                    Ha(1),
                    r.render(r.duration(), !0, !0),
                    fi = lt(I.a) - li + me + je,
                    Lt = Math.abs(me - fi) > 1,
                    se && Lt && ii.splice(ii.length - 2, 2),
                    r.render(0, !0, !0),
                    iu || r.invalidate(!0),
                    r.parent || r.totalTime(r.totalTime()),
                    Ha(0)) : fi = me,
                    Ji && (Ji.value ? Ji.style["overflow" + I.a.toUpperCase()] = Ji.value : Ji.style.removeProperty("overflow-" + I.a));
                else if (D && Ne() && !f)
                    for ($t = D.parentNode; $t && $t !== ht; )
                        $t._pinOffset && (De -= $t._pinOffset,
                        Te -= $t._pinOffset),
                        $t = $t.parentNode;
                Br && Br.forEach(function(Zr) {
                    return Zr.revert(!1, !0)
                }),
                R.start = De,
                R.end = Te,
                Je = ut = Si ? ni : Ne(),
                !f && !Si && (Je < ni && Ne(ni),
                R.scroll.rec = 0),
                R.revert(!1, !0),
                we = pi(),
                Tt && (ve = -1,
                Tt.restart(!0)),
                di = 0,
                r && ee && (r._initted || Hi) && r.progress() !== Hi && r.progress(Hi || 0, !0).render(r.time(), !0, !0),
                (Ze || ke !== R.progress || f || v || r && !r._initted) && (r && !ee && r.totalProgress(f && De < -.001 && !ke ? xe.utils.normalize(De, Te, 0) : ke, !0),
                R.progress = Ze || (Je - De) / me === ke ? 0 : ke),
                h && b && (ce._pinOffset = Math.round(R.progress * fi)),
                Oe && Oe.invalidate(),
                isNaN(Sn) || (Sn -= xe.getProperty($, I.p),
                kn -= xe.getProperty(ze, I.p),
                Du($, I, Sn),
                Du(Me, I, Sn - (he || 0)),
                Du(ze, I, kn),
                Du(bt, I, kn - (he || 0))),
                Ze && !Si && R.update(),
                _ && !Si && !Ut && (Ut = !0,
                _(R),
                Ut = !1)
            }
        }
        ,
        R.getVelocity = function() {
            return (Ne() - ut) / (pi() - ls) * 1e3 || 0
        }
        ,
        R.endAnimation = function() {
            rs(R.callbackAnimation),
            r && (Oe ? Oe.progress(1) : r.paused() ? ee || rs(r, R.direction < 0, 1) : rs(r, r.reversed()))
        }
        ,
        R.labelToScroll = function(W) {
            return r && r.labels && (De || R.refresh() || De) + r.labels[W] / r.duration() * me || 0
        }
        ,
        R.getTrailing = function(W) {
            var le = We.indexOf(R)
              , te = R.direction > 0 ? We.slice(0, le).reverse() : We.slice(le + 1);
            return (qi(W) ? te.filter(function(he) {
                return he.vars.preventOverlaps === W
            }) : te).filter(function(he) {
                return R.direction > 0 ? he.end <= De : he.start >= Te
            })
        }
        ,
        R.update = function(W, le, te) {
            if (!(f && !te && !W)) {
                var he = Si === !0 ? ni : R.scroll(), Fe = W ? 0 : (he - De) / me, ye = Fe < 0 ? 0 : Fe > 1 ? 1 : Fe || 0, Ie = R.progress, Ze, ot, je, Xe, ft, Ae, Nt, yt;
                if (le && (ut = Je,
                Je = f ? Ne() : he,
                P && (ci = Di,
                Di = r && !ee ? r.totalProgress() : ye)),
                E && h && !di && !du && ur && (!ye && De < he + (he - ut) / (pi() - ls) * E ? ye = 1e-4 : ye === 1 && Te > he + (he - ut) / (pi() - ls) * E && (ye = .9999)),
                ye !== Ie && R.enabled) {
                    if (Ze = R.isActive = !!ye && ye < 1,
                    ot = !!Ie && Ie < 1,
                    Ae = Ze !== ot,
                    ft = Ae || !!ye != !!Ie,
                    R.direction = ye > Ie ? 1 : -1,
                    R.progress = ye,
                    ft && !di && (je = ye && !Ie ? 0 : ye === 1 ? 1 : Ie === 1 ? 2 : 3,
                    ee && (Xe = !Ae && oe[je + 1] !== "none" && oe[je + 1] || oe[je],
                    yt = r && (Xe === "complete" || Xe === "reset" || Xe in r))),
                    H && (Ae || yt) && (yt || x || !r) && (mi(H) ? H(R) : R.getTrailing(H).forEach(function(Nr) {
                        return Nr.endAnimation()
                    })),
                    ee || (Oe && !di && !du ? (Oe._dp._time - Oe._start !== Oe._time && Oe.render(Oe._dp._time - Oe._start),
                    Oe.resetTo ? Oe.resetTo("totalProgress", ye, r._tTime / r._tDur) : (Oe.vars.totalProgress = ye,
                    Oe.invalidate().restart())) : r && r.totalProgress(ye, !!(di && (we || W)))),
                    h) {
                        if (W && b && (ce.style[b + I.os2] = _r),
                        !se)
                            ri(cs(li + fi * ye));
                        else if (ft) {
                            if (Nt = !W && ye > Ie && Te + 1 > he && he + 1 >= Fr(K, I),
                            M)
                                if (!W && (Ze || Nt)) {
                                    var At = Xr(h, !0)
                                      , St = he - De;
                                    Rc(h, ht, At.top + (I === Vt ? St : 0) + Xt, At.left + (I === Vt ? 0 : St) + Xt)
                                } else
                                    Rc(h, ce);
                            Ro(Ze || Nt ? ii : Gt),
                            Lt && ye < 1 && Ze || ri(li + (ye === 1 && !Nt ? fi : 0))
                        }
                    }
                    P && !Le.tween && !di && !du && Tt.restart(!0),
                    l && (Ae || A && ye && (ye < 1 || !za)) && Ys(l.targets).forEach(function(Nr) {
                        return Nr.classList[Ze || A ? "add" : "remove"](l.className)
                    }),
                    u && !ee && !W && u(R),
                    ft && !di ? (ee && (yt && (Xe === "complete" ? r.pause().totalProgress(1) : Xe === "reset" ? r.restart(!0).pause() : Xe === "restart" ? r.restart(!0) : r[Xe]()),
                    u && u(R)),
                    (Ae || !za) && (p && Ae && qa(R, p),
                    ae[je] && qa(R, ae[je]),
                    A && (ye === 1 ? R.kill(!1, 1) : ae[je] = 0),
                    Ae || (je = ye === 1 ? 1 : 3,
                    ae[je] && qa(R, ae[je]))),
                    q && !Ze && Math.abs(R.getVelocity()) > (hs(q) ? q : 2500) && (rs(R.callbackAnimation),
                    Oe ? Oe.progress(1) : rs(r, Xe === "reverse" ? 1 : !ye, 1))) : ee && u && !di && u(R)
                }
                if (Kt) {
                    var $t = f ? he / f.duration() * (f._caScrollDist || 0) : he;
                    Qt($t + ($._isFlipped ? 1 : 0)),
                    Kt($t)
                }
                de && de(-he / f.duration() * (f._caScrollDist || 0))
            }
        }
        ,
        R.enable = function(W, le) {
            R.enabled || (R.enabled = !0,
            Zt(K, "resize", ds),
            ne || Zt(K, "scroll", fo),
            _e && Zt(s, "refreshInit", _e),
            W !== !1 && (R.progress = ke = 0,
            Je = ut = ve = Ne()),
            le !== !1 && R.refresh())
        }
        ,
        R.getTween = function(W) {
            return W && Le ? Le.tween : Oe
        }
        ,
        R.setPositions = function(W, le, te, he) {
            if (f) {
                var Fe = f.scrollTrigger
                  , ye = f.duration()
                  , Ie = Fe.end - Fe.start;
                W = Fe.start + Ie * W / ye,
                le = Fe.start + Ie * le / ye
            }
            R.refresh(!1, !1, {
                start: Ec(W, te && !!R._startClamp),
                end: Ec(le, te && !!R._endClamp)
            }, he),
            R.update()
        }
        ,
        R.adjustPinSpacing = function(W) {
            if (pt && W) {
                var le = pt.indexOf(I.d) + 1;
                pt[le] = parseFloat(pt[le]) + W + Xt,
                pt[1] = parseFloat(pt[1]) + W + Xt,
                Ro(pt)
            }
        }
        ,
        R.disable = function(W, le) {
            if (R.enabled && (W !== !1 && R.revert(!0, !0),
            R.enabled = R.isActive = !1,
            le || Oe && Oe.pause(),
            ni = 0,
            gt && (gt.uncache = 1),
            _e && Jt(s, "refreshInit", _e),
            Tt && (Tt.pause(),
            Le.tween && Le.tween.kill() && (Le.tween = 0)),
            !ne)) {
                for (var te = We.length; te--; )
                    if (We[te].scroller === K && We[te] !== R)
                        return;
                Jt(K, "resize", ds),
                ne || Jt(K, "scroll", fo)
            }
        }
        ,
        R.kill = function(W, le) {
            R.disable(W, le),
            Oe && !le && Oe.kill(),
            c && delete Pl[c];
            var te = We.indexOf(R);
            te >= 0 && We.splice(te, 1),
            te === Ti && Ou > 0 && Ti--,
            te = 0,
            We.forEach(function(he) {
                return he.scroller === R.scroller && (te = 1)
            }),
            te || Si || (R.scroll.rec = 0),
            r && (r.scrollTrigger = null,
            W && r.revert({
                kill: !1
            }),
            le || r.kill()),
            Me && [Me, bt, $, ze].forEach(function(he) {
                return he.parentNode && he.parentNode.removeChild(he)
            }),
            Ps === R && (Ps = 0),
            h && (gt && (gt.uncache = 1),
            te = 0,
            We.forEach(function(he) {
                return he.pin === h && te++
            }),
            te || (gt.spacer = 0)),
            t.onKill && t.onKill(R)
        }
        ,
        We.push(R),
        R.enable(!1, !1),
        F && F(R),
        r && r.add && !me) {
            var re = R.update;
            R.update = function() {
                R.update = re,
                Ue.cache++,
                De || Te || R.refresh()
            }
            ,
            xe.delayedCall(.01, R.update),
            me = .01,
            De = Te = 0
        } else
            R.refresh();
        h && $0()
    }
    ,
    s.register = function(t) {
        return _o || (xe = t || Sd(),
        Td() && window.document && s.enable(),
        _o = fs),
        _o
    }
    ,
    s.defaults = function(t) {
        if (t)
            for (var r in t)
                mu[r] = t[r];
        return mu
    }
    ,
    s.disable = function(t, r) {
        fs = 0,
        We.forEach(function(u) {
            return u[r ? "kill" : "disable"](t)
        }),
        Jt(Ve, "wheel", fo),
        Jt(Dt, "scroll", fo),
        clearInterval(hu),
        Jt(Dt, "touchcancel", Er),
        Jt(ht, "touchstart", Er),
        gu(Jt, Dt, "pointerdown,touchstart,mousedown", Tc),
        gu(Jt, Dt, "pointerup,touchend,mouseup", Sc),
        Vu.kill(),
        pu(Jt);
        for (var n = 0; n < Ue.length; n += 3)
            _u(Jt, Ue[n], Ue[n + 1]),
            _u(Jt, Ue[n], Ue[n + 2])
    }
    ,
    s.enable = function() {
        if (Ve = window,
        Dt = document,
        Xi = Dt.documentElement,
        ht = Dt.body,
        xe && (Ys = xe.utils.toArray,
        Es = xe.utils.clamp,
        kl = xe.core.context || Er,
        Ha = xe.core.suppressOverwrites || Er,
        vf = Ve.history.scrollRestoration || "auto",
        Al = Ve.pageYOffset || 0,
        xe.core.globals("ScrollTrigger", s),
        ht)) {
            fs = 1,
            Oo = document.createElement("div"),
            Oo.style.height = "100vh",
            Oo.style.position = "absolute",
            Nd(),
            R0(),
            Rt.register(xe),
            s.isTouch = Rt.isTouch,
            un = Rt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            Sl = Rt.isTouch === 1,
            Zt(Ve, "wheel", fo),
            yf = [Ve, Dt, Xi, ht],
            xe.matchMedia ? (s.matchMedia = function(p) {
                var _ = xe.matchMedia(), x;
                for (x in p)
                    _.add(x, p[x]);
                return _
            }
            ,
            xe.addEventListener("matchMediaInit", function() {
                return Ef()
            }),
            xe.addEventListener("matchMediaRevert", function() {
                return Rd()
            }),
            xe.addEventListener("matchMedia", function() {
                zn(0, 1),
                to("matchMedia")
            }),
            xe.matchMedia().add("(orientation: portrait)", function() {
                return ja(),
                ja
            })) : console.warn("Requires GSAP 3.11.0 or later"),
            ja(),
            Zt(Dt, "scroll", fo);
            var t = ht.hasAttribute("style"), r = ht.style, n = r.borderTopStyle, u = xe.core.Animation.prototype, l, c;
            for (u.revert || Object.defineProperty(u, "revert", {
                value: function() {
                    return this.time(-.01, !0)
                }
            }),
            r.borderTopStyle = "solid",
            l = Xr(ht),
            Vt.m = Math.round(l.top + Vt.sc()) || 0,
            Fi.m = Math.round(l.left + Fi.sc()) || 0,
            n ? r.borderTopStyle = n : r.removeProperty("border-top-style"),
            t || (ht.setAttribute("style", ""),
            ht.removeAttribute("style")),
            hu = setInterval(Pc, 250),
            xe.delayedCall(.5, function() {
                return du = 0
            }),
            Zt(Dt, "touchcancel", Er),
            Zt(ht, "touchstart", Er),
            gu(Zt, Dt, "pointerdown,touchstart,mousedown", Tc),
            gu(Zt, Dt, "pointerup,touchend,mouseup", Sc),
            Tl = xe.utils.checkPrefix("transform"),
            Ru.push(Tl),
            _o = pi(),
            Vu = xe.delayedCall(.2, zn).pause(),
            mo = [Dt, "visibilitychange", function() {
                var p = Ve.innerWidth
                  , _ = Ve.innerHeight;
                Dt.hidden ? (bc = p,
                wc = _) : (bc !== p || wc !== _) && ds()
            }
            , Dt, "DOMContentLoaded", zn, Ve, "load", zn, Ve, "resize", ds],
            pu(Zt),
            We.forEach(function(p) {
                return p.enable(0, 1)
            }),
            c = 0; c < Ue.length; c += 3)
                _u(Jt, Ue[c], Ue[c + 1]),
                _u(Jt, Ue[c], Ue[c + 2])
        }
    }
    ,
    s.config = function(t) {
        "limitCallbacks"in t && (za = !!t.limitCallbacks);
        var r = t.syncInterval;
        r && clearInterval(hu) || (hu = r) && setInterval(Pc, r),
        "ignoreMobileResize"in t && (Sl = s.isTouch === 1 && t.ignoreMobileResize),
        "autoRefreshEvents"in t && (pu(Jt) || pu(Zt, t.autoRefreshEvents || "none"),
        wd = (t.autoRefreshEvents + "").indexOf("resize") === -1)
    }
    ,
    s.scrollerProxy = function(t, r) {
        var n = Oi(t)
          , u = Ue.indexOf(n)
          , l = Zn(n);
        ~u && Ue.splice(u, l ? 6 : 2),
        r && (l ? Or.unshift(Ve, r, ht, r, Xi, r) : Or.unshift(n, r))
    }
    ,
    s.clearMatchMedia = function(t) {
        We.forEach(function(r) {
            return r._ctx && r._ctx.query === t && r._ctx.kill(!0, !0)
        })
    }
    ,
    s.isInViewport = function(t, r, n) {
        var u = (qi(t) ? Oi(t) : t).getBoundingClientRect()
          , l = u[n ? Vn : Un] * r || 0;
        return n ? u.right - l > 0 && u.left + l < Ve.innerWidth : u.bottom - l > 0 && u.top + l < Ve.innerHeight
    }
    ,
    s.positionInViewport = function(t, r, n) {
        qi(t) && (t = Oi(t));
        var u = t.getBoundingClientRect()
          , l = u[n ? Vn : Un]
          , c = r == null ? l / 2 : r in Qu ? Qu[r] * l : ~r.indexOf("%") ? parseFloat(r) * l / 100 : parseFloat(r) || 0;
        return n ? (u.left + c) / Ve.innerWidth : (u.top + c) / Ve.innerHeight
    }
    ,
    s.killAll = function(t) {
        if (We.slice(0).forEach(function(n) {
            return n.vars.id !== "ScrollSmoother" && n.kill()
        }),
        t !== !0) {
            var r = eo.killAll || [];
            eo = {},
            r.forEach(function(n) {
                return n()
            })
        }
    }
    ,
    s
}();
tt.version = "3.12.7";
tt.saveStyles = function(s) {
    return s ? Ys(s).forEach(function(e) {
        if (e && e.style) {
            var i = $i.indexOf(e);
            i >= 0 && $i.splice(i, 5),
            $i.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), xe.core.getCache(e), kl())
        }
    }) : $i
}
;
tt.revert = function(s, e) {
    return Ef(!s, e)
}
;
tt.create = function(s, e) {
    return new tt(s,e)
}
;
tt.refresh = function(s) {
    return s ? ds(!0) : (_o || tt.register()) && zn(!0)
}
;
tt.update = function(s) {
    return ++Ue.cache && Gr(s === !0 ? 2 : 0)
}
;
tt.clearScrollMemory = Ld;
tt.maxScroll = function(s, e) {
    return Fr(s, e ? Fi : Vt)
}
;
tt.getScrollFunc = function(s, e) {
    return En(Oi(s), e ? Fi : Vt)
}
;
tt.getById = function(s) {
    return Pl[s]
}
;
tt.getAll = function() {
    return We.filter(function(s) {
        return s.vars.id !== "ScrollSmoother"
    })
}
;
tt.isScrolling = function() {
    return !!ur
}
;
tt.snapDirectional = Cf;
tt.addEventListener = function(s, e) {
    var i = eo[s] || (eo[s] = []);
    ~i.indexOf(e) || i.push(e)
}
;
tt.removeEventListener = function(s, e) {
    var i = eo[s]
      , t = i && i.indexOf(e);
    t >= 0 && i.splice(t, 1)
}
;
tt.batch = function(s, e) {
    var i = [], t = {}, r = e.interval || .016, n = e.batchMax || 1e9, u = function(p, _) {
        var x = []
          , D = []
          , h = xe.delayedCall(r, function() {
            _(x, D),
            x = [],
            D = []
        }).pause();
        return function(b) {
            x.length || h.restart(!0),
            x.push(b.trigger),
            D.push(b),
            n <= x.length && h.progress(1)
        }
    }, l;
    for (l in e)
        t[l] = l.substr(0, 2) === "on" && mi(e[l]) && l !== "onRefreshInit" ? u(l, e[l]) : e[l];
    return mi(n) && (n = n(),
    Zt(tt, "refresh", function() {
        return n = e.batchMax()
    })),
    Ys(s).forEach(function(c) {
        var p = {};
        for (l in t)
            p[l] = t[l];
        p.trigger = c,
        i.push(tt.create(p))
    }),
    i
}
;
var Nc = function(e, i, t, r) {
    return i > r ? e(r) : i < 0 && e(0),
    t > r ? (r - i) / (t - i) : t < 0 ? i / (i - t) : 1
}, Wa = function s(e, i) {
    i === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = i === !0 ? "auto" : i ? "pan-" + i + (Rt.isTouch ? " pinch-zoom" : "") : "none",
    e === Xi && s(ht, i)
}, xu = {
    auto: 1,
    scroll: 1
}, Y0 = function(e) {
    var i = e.event, t = e.target, r = e.axis, n = (i.changedTouches ? i.changedTouches[0] : i).target, u = n._gsap || xe.core.getCache(n), l = pi(), c;
    if (!u._isScrollT || l - u._isScrollT > 2e3) {
        for (; n && n !== ht && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(xu[(c = or(n)).overflowY] || xu[c.overflowX])); )
            n = n.parentNode;
        u._isScroll = n && n !== t && !Zn(n) && (xu[(c = or(n)).overflowY] || xu[c.overflowX]),
        u._isScrollT = l
    }
    (u._isScroll || r === "x") && (i.stopPropagation(),
    i._gsapAllow = !0)
}, Id = function(e, i, t, r) {
    return Rt.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: i,
        onWheel: r = r && Y0,
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function() {
            return t && Zt(Dt, Rt.eventTypes[0], Ic, !1, !0)
        },
        onDisable: function() {
            return Jt(Dt, Rt.eventTypes[0], Ic, !0)
        }
    })
}, V0 = /(input|label|select|textarea)/i, Bc, Ic = function(e) {
    var i = V0.test(e.target.tagName);
    (i || Bc) && (e._gsapAllow = !0,
    Bc = i)
}, U0 = function(e) {
    In(e) || (e = {}),
    e.preventDefault = e.isNormalizer = e.allowClicks = !0,
    e.type || (e.type = "wheel,touch"),
    e.debounce = !!e.debounce,
    e.id = e.id || "normalizer";
    var i = e, t = i.normalizeScrollX, r = i.momentum, n = i.allowNestedScroll, u = i.onRelease, l, c, p = Oi(e.target) || Xi, _ = xe.core.globals().ScrollSmoother, x = _ && _.get(), D = un && (e.content && Oi(e.content) || x && e.content !== !1 && !x.smooth() && x.content()), h = En(p, Vt), b = En(p, Fi), v = 1, E = (Rt.isTouch && Ve.visualViewport ? Ve.visualViewport.scale * Ve.visualViewport.width : Ve.outerWidth) / Ve.innerWidth, C = 0, L = mi(r) ? function() {
        return r(l)
    }
    : function() {
        return r || 2.8
    }
    , A, P, M = Id(p, e.type, !0, n), z = function() {
        return P = !1
    }, f = Er, q = Er, H = function() {
        c = Fr(p, Vt),
        q = Es(un ? 1 : 0, c),
        t && (f = Es(0, Fr(p, Fi))),
        A = Gn
    }, I = function() {
        D._gsap.y = cs(parseFloat(D._gsap.y) + h.offset) + "px",
        D.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(D._gsap.y) + ", 0, 1)",
        h.offset = h.cacheID = 0
    }, ee = function() {
        if (P) {
            requestAnimationFrame(z);
            var Ce = cs(l.deltaY / 2)
              , U = q(h.v - Ce);
            if (D && U !== h.v + h.offset) {
                h.offset = U - h.v;
                var R = cs((parseFloat(D && D._gsap.y) || 0) - h.offset);
                D.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + R + ", 0, 1)",
                D._gsap.y = R + "px",
                h.cacheID = Ue.cache,
                Gr()
            }
            return !0
        }
        h.offset && I(),
        P = !0
    }, K, G, ne, se, ae = function() {
        H(),
        K.isActive() && K.vars.scrollY > c && (h() > c ? K.progress(1) && h(c) : K.resetTo("scrollY", c))
    };
    return D && xe.set(D, {
        y: "+=0"
    }),
    e.ignoreCheck = function(oe) {
        return un && oe.type === "touchmove" && ee() || v > 1.05 && oe.type !== "touchstart" || l.isGesturing || oe.touches && oe.touches.length > 1
    }
    ,
    e.onPress = function() {
        P = !1;
        var oe = v;
        v = cs((Ve.visualViewport && Ve.visualViewport.scale || 1) / E),
        K.pause(),
        oe !== v && Wa(p, v > 1.01 ? !0 : t ? !1 : "x"),
        G = b(),
        ne = h(),
        H(),
        A = Gn
    }
    ,
    e.onRelease = e.onGestureStart = function(oe, Ce) {
        if (h.offset && I(),
        !Ce)
            se.restart(!0);
        else {
            Ue.cache++;
            var U = L(), R, _e;
            t && (R = b(),
            _e = R + U * .05 * -oe.velocityX / .227,
            U *= Nc(b, R, _e, Fr(p, Fi)),
            K.vars.scrollX = f(_e)),
            R = h(),
            _e = R + U * .05 * -oe.velocityY / .227,
            U *= Nc(h, R, _e, Fr(p, Vt)),
            K.vars.scrollY = q(_e),
            K.invalidate().duration(U).play(.01),
            (un && K.vars.scrollY >= c || R >= c - 1) && xe.to({}, {
                onUpdate: ae,
                duration: U
            })
        }
        u && u(oe)
    }
    ,
    e.onWheel = function() {
        K._ts && K.pause(),
        pi() - C > 1e3 && (A = 0,
        C = pi())
    }
    ,
    e.onChange = function(oe, Ce, U, R, _e) {
        if (Gn !== A && H(),
        Ce && t && b(f(R[2] === Ce ? G + (oe.startX - oe.x) : b() + Ce - R[1])),
        U) {
            h.offset && I();
            var be = _e[2] === U
              , $e = be ? ne + oe.startY - oe.y : h() + U - _e[1]
              , ve = q($e);
            be && $e !== ve && (ne += ve - $e),
            h(ve)
        }
        (U || Ce) && Gr()
    }
    ,
    e.onEnable = function() {
        Wa(p, t ? !1 : "x"),
        tt.addEventListener("refresh", ae),
        Zt(Ve, "resize", ae),
        h.smooth && (h.target.style.scrollBehavior = "auto",
        h.smooth = b.smooth = !1),
        M.enable()
    }
    ,
    e.onDisable = function() {
        Wa(p, !0),
        Jt(Ve, "resize", ae),
        tt.removeEventListener("refresh", ae),
        M.kill()
    }
    ,
    e.lockAxis = e.lockAxis !== !1,
    l = new Rt(e),
    l.iOS = un,
    un && !h() && h(1),
    un && xe.ticker.add(Er),
    se = l._dc,
    K = xe.to(l, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: t ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
            scrollY: Bd(h, h(), function() {
                return K.pause()
            })
        },
        onUpdate: Gr,
        onComplete: se.vars.onComplete
    }),
    l
};
tt.sort = function(s) {
    if (mi(s))
        return We.sort(s);
    var e = Ve.pageYOffset || 0;
    return tt.getAll().forEach(function(i) {
        return i._sortY = i.trigger ? e + i.trigger.getBoundingClientRect().top : i.start + Ve.innerHeight
    }),
    We.sort(s || function(i, t) {
        return (i.vars.refreshPriority || 0) * -1e6 + (i.vars.containerAnimation ? 1e6 : i._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6)
    }
    )
}
;
tt.observe = function(s) {
    return new Rt(s)
}
;
tt.normalizeScroll = function(s) {
    if (typeof s > "u")
        return Ei;
    if (s === !0 && Ei)
        return Ei.enable();
    if (s === !1) {
        Ei && Ei.kill(),
        Ei = s;
        return
    }
    var e = s instanceof Rt ? s : U0(s);
    return Ei && Ei.target === e.target && Ei.kill(),
    Zn(e.target) && (Ei = e),
    e
}
;
tt.core = {
    _getVelocityProp: El,
    _inputObserver: Id,
    _scrollers: Ue,
    _proxies: Or,
    bridge: {
        ss: function() {
            ur || to("scrollStart"),
            ur = pi()
        },
        ref: function() {
            return di
        }
    }
};
Sd() && xe.registerPlugin(tt);
var G0 = "1.3.1";
function Hd(s, e, i) {
    return Math.max(s, Math.min(e, i))
}
function Q0(s, e, i) {
    return (1 - i) * s + i * e
}
function K0(s, e, i, t) {
    return Q0(s, e, 1 - Math.exp(-i * t))
}
function J0(s, e) {
    return (s % e + e) % e
}
var Z0 = class {
    constructor() {
        Se(this, "isRunning", !1);
        Se(this, "value", 0);
        Se(this, "from", 0);
        Se(this, "to", 0);
        Se(this, "currentTime", 0);
        Se(this, "lerp");
        Se(this, "duration");
        Se(this, "easing");
        Se(this, "onUpdate")
    }
    advance(s) {
        var i;
        if (!this.isRunning)
            return;
        let e = !1;
        if (this.duration && this.easing) {
            this.currentTime += s;
            const t = Hd(0, this.currentTime / this.duration, 1);
            e = t >= 1;
            const r = e ? 1 : this.easing(t);
            this.value = this.from + (this.to - this.from) * r
        } else
            this.lerp ? (this.value = K0(this.value, this.to, this.lerp * 60, s),
            Math.round(this.value) === this.to && (this.value = this.to,
            e = !0)) : (this.value = this.to,
            e = !0);
        e && this.stop(),
        (i = this.onUpdate) == null || i.call(this, this.value, e)
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(s, e, {lerp: i, duration: t, easing: r, onStart: n, onUpdate: u}) {
        this.from = this.value = s,
        this.to = e,
        this.lerp = i,
        this.duration = t,
        this.easing = r,
        this.currentTime = 0,
        this.isRunning = !0,
        n == null || n(),
        this.onUpdate = u
    }
}
;
function e_(s, e) {
    let i;
    return function(...t) {
        let r = this;
        clearTimeout(i),
        i = setTimeout( () => {
            i = void 0,
            s.apply(r, t)
        }
        , e)
    }
}
var t_ = class {
    constructor(s, e, {autoResize: i=!0, debounce: t=250}={}) {
        Se(this, "width", 0);
        Se(this, "height", 0);
        Se(this, "scrollHeight", 0);
        Se(this, "scrollWidth", 0);
        Se(this, "debouncedResize");
        Se(this, "wrapperResizeObserver");
        Se(this, "contentResizeObserver");
        Se(this, "resize", () => {
            this.onWrapperResize(),
            this.onContentResize()
        }
        );
        Se(this, "onWrapperResize", () => {
            this.wrapper instanceof Window ? (this.width = window.innerWidth,
            this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth,
            this.height = this.wrapper.clientHeight)
        }
        );
        Se(this, "onContentResize", () => {
            this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight,
            this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight,
            this.scrollWidth = this.wrapper.scrollWidth)
        }
        );
        this.wrapper = s,
        this.content = e,
        i && (this.debouncedResize = e_(this.resize, t),
        this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize),
        this.wrapperResizeObserver.observe(this.wrapper)),
        this.contentResizeObserver = new ResizeObserver(this.debouncedResize),
        this.contentResizeObserver.observe(this.content)),
        this.resize()
    }
    destroy() {
        var s, e;
        (s = this.wrapperResizeObserver) == null || s.disconnect(),
        (e = this.contentResizeObserver) == null || e.disconnect(),
        this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize, !1)
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        }
    }
}
  , zd = class {
    constructor() {
        Se(this, "events", {})
    }
    emit(s, ...e) {
        var t;
        let i = this.events[s] || [];
        for (let r = 0, n = i.length; r < n; r++)
            (t = i[r]) == null || t.call(i, ...e)
    }
    on(s, e) {
        var i;
        return (i = this.events[s]) != null && i.push(e) || (this.events[s] = [e]),
        () => {
            var t;
            this.events[s] = (t = this.events[s]) == null ? void 0 : t.filter(r => e !== r)
        }
    }
    off(s, e) {
        var i;
        this.events[s] = (i = this.events[s]) == null ? void 0 : i.filter(t => e !== t)
    }
    destroy() {
        this.events = {}
    }
}
  , Hc = 100 / 6
  , nn = {
    passive: !1
}
  , i_ = class {
    constructor(s, e={
        wheelMultiplier: 1,
        touchMultiplier: 1
    }) {
        Se(this, "touchStart", {
            x: 0,
            y: 0
        });
        Se(this, "lastDelta", {
            x: 0,
            y: 0
        });
        Se(this, "window", {
            width: 0,
            height: 0
        });
        Se(this, "emitter", new zd);
        Se(this, "onTouchStart", s => {
            const {clientX: e, clientY: i} = s.targetTouches ? s.targetTouches[0] : s;
            this.touchStart.x = e,
            this.touchStart.y = i,
            this.lastDelta = {
                x: 0,
                y: 0
            },
            this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: s
            })
        }
        );
        Se(this, "onTouchMove", s => {
            const {clientX: e, clientY: i} = s.targetTouches ? s.targetTouches[0] : s
              , t = -(e - this.touchStart.x) * this.options.touchMultiplier
              , r = -(i - this.touchStart.y) * this.options.touchMultiplier;
            this.touchStart.x = e,
            this.touchStart.y = i,
            this.lastDelta = {
                x: t,
                y: r
            },
            this.emitter.emit("scroll", {
                deltaX: t,
                deltaY: r,
                event: s
            })
        }
        );
        Se(this, "onTouchEnd", s => {
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: s
            })
        }
        );
        Se(this, "onWheel", s => {
            let {deltaX: e, deltaY: i, deltaMode: t} = s;
            const r = t === 1 ? Hc : t === 2 ? this.window.width : 1
              , n = t === 1 ? Hc : t === 2 ? this.window.height : 1;
            e *= r,
            i *= n,
            e *= this.options.wheelMultiplier,
            i *= this.options.wheelMultiplier,
            this.emitter.emit("scroll", {
                deltaX: e,
                deltaY: i,
                event: s
            })
        }
        );
        Se(this, "onWindowResize", () => {
            this.window = {
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
        );
        this.element = s,
        this.options = e,
        window.addEventListener("resize", this.onWindowResize, !1),
        this.onWindowResize(),
        this.element.addEventListener("wheel", this.onWheel, nn),
        this.element.addEventListener("touchstart", this.onTouchStart, nn),
        this.element.addEventListener("touchmove", this.onTouchMove, nn),
        this.element.addEventListener("touchend", this.onTouchEnd, nn)
    }
    on(s, e) {
        return this.emitter.on(s, e)
    }
    destroy() {
        this.emitter.destroy(),
        window.removeEventListener("resize", this.onWindowResize, !1),
        this.element.removeEventListener("wheel", this.onWheel, nn),
        this.element.removeEventListener("touchstart", this.onTouchStart, nn),
        this.element.removeEventListener("touchmove", this.onTouchMove, nn),
        this.element.removeEventListener("touchend", this.onTouchEnd, nn)
    }
}
  , Pm = class {
    constructor({wrapper: s=window, content: e=document.documentElement, eventsTarget: i=s, smoothWheel: t=!0, syncTouch: r=!1, syncTouchLerp: n=.075, touchInertiaMultiplier: u=35, duration: l, easing: c=q => Math.min(1, 1.001 - Math.pow(2, -10 * q)), lerp: p=.1, infinite: _=!1, orientation: x="vertical", gestureOrientation: D="vertical", touchMultiplier: h=1, wheelMultiplier: b=1, autoResize: v=!0, prevent: E, virtualScroll: C, overscroll: L=!0, autoRaf: A=!1, anchors: P=!1, autoToggle: M=!1, allowNestedScroll: z=!1, __experimental__naiveDimensions: f=!1}={}) {
        Se(this, "_isScrolling", !1);
        Se(this, "_isStopped", !1);
        Se(this, "_isLocked", !1);
        Se(this, "_preventNextNativeScrollEvent", !1);
        Se(this, "_resetVelocityTimeout", null);
        Se(this, "__rafID", null);
        Se(this, "isTouching");
        Se(this, "time", 0);
        Se(this, "userData", {});
        Se(this, "lastVelocity", 0);
        Se(this, "velocity", 0);
        Se(this, "direction", 0);
        Se(this, "options");
        Se(this, "targetScroll");
        Se(this, "animatedScroll");
        Se(this, "animate", new Z0);
        Se(this, "emitter", new zd);
        Se(this, "dimensions");
        Se(this, "virtualScroll");
        Se(this, "onScrollEnd", s => {
            s instanceof CustomEvent || (this.isScrolling === "smooth" || this.isScrolling === !1) && s.stopPropagation()
        }
        );
        Se(this, "dispatchScrollendEvent", () => {
            this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{
                bubbles: this.options.wrapper === window,
                detail: {
                    lenisScrollEnd: !0
                }
            }))
        }
        );
        Se(this, "onTransitionEnd", s => {
            if (s.propertyName.includes("overflow")) {
                const e = this.isHorizontal ? "overflow-x" : "overflow-y"
                  , i = getComputedStyle(this.rootElement)[e];
                ["hidden", "clip"].includes(i) ? this.stop() : this.start()
            }
        }
        );
        Se(this, "onClick", s => {
            const i = s.composedPath().find(t => {
                var r, n, u;
                return t instanceof HTMLAnchorElement && (((r = t.getAttribute("href")) == null ? void 0 : r.startsWith("#")) || ((n = t.getAttribute("href")) == null ? void 0 : n.startsWith("/#")) || ((u = t.getAttribute("href")) == null ? void 0 : u.startsWith("./#")))
            }
            );
            if (i) {
                const t = i.getAttribute("href");
                if (t) {
                    const r = typeof this.options.anchors == "object" && this.options.anchors ? this.options.anchors : void 0;
                    let n = `#${t.split("#")[1]}`;
                    ["#", "/#", "./#", "#top", "/#top", "./#top"].includes(t) && (n = 0),
                    this.scrollTo(n, r)
                }
            }
        }
        );
        Se(this, "onPointerDown", s => {
            s.button === 1 && this.reset()
        }
        );
        Se(this, "onVirtualScroll", s => {
            if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(s) === !1)
                return;
            const {deltaX: e, deltaY: i, event: t} = s;
            if (this.emitter.emit("virtual-scroll", {
                deltaX: e,
                deltaY: i,
                event: t
            }),
            t.ctrlKey || t.lenisStopPropagation)
                return;
            const r = t.type.includes("touch")
              , n = t.type.includes("wheel");
            this.isTouching = t.type === "touchstart" || t.type === "touchmove";
            const u = e === 0 && i === 0;
            if (this.options.syncTouch && r && t.type === "touchstart" && u && !this.isStopped && !this.isLocked) {
                this.reset();
                return
            }
            const c = this.options.gestureOrientation === "vertical" && i === 0 || this.options.gestureOrientation === "horizontal" && e === 0;
            if (u || c)
                return;
            let p = t.composedPath();
            p = p.slice(0, p.indexOf(this.rootElement));
            const _ = this.options.prevent;
            if (p.find(E => {
                var C, L, A;
                return E instanceof HTMLElement && (typeof _ == "function" && (_ == null ? void 0 : _(E)) || ((C = E.hasAttribute) == null ? void 0 : C.call(E, "data-lenis-prevent")) || r && ((L = E.hasAttribute) == null ? void 0 : L.call(E, "data-lenis-prevent-touch")) || n && ((A = E.hasAttribute) == null ? void 0 : A.call(E, "data-lenis-prevent-wheel")) || this.options.allowNestedScroll && this.checkNestedScroll(E, {
                    deltaX: e,
                    deltaY: i
                }))
            }
            ))
                return;
            if (this.isStopped || this.isLocked) {
                t.preventDefault();
                return
            }
            if (!(this.options.syncTouch && r || this.options.smoothWheel && n)) {
                this.isScrolling = "native",
                this.animate.stop(),
                t.lenisStopPropagation = !0;
                return
            }
            let D = i;
            this.options.gestureOrientation === "both" ? D = Math.abs(i) > Math.abs(e) ? i : e : this.options.gestureOrientation === "horizontal" && (D = e),
            (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && i > 0 || this.animatedScroll === this.limit && i < 0)) && (t.lenisStopPropagation = !0),
            t.preventDefault();
            const h = r && this.options.syncTouch
              , v = r && t.type === "touchend" && Math.abs(D) > 5;
            v && (D = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + D, {
                programmatic: !1,
                ...h ? {
                    lerp: v ? this.options.syncTouchLerp : 1
                } : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing
                }
            })
        }
        );
        Se(this, "onNativeScroll", () => {
            if (this._resetVelocityTimeout !== null && (clearTimeout(this._resetVelocityTimeout),
            this._resetVelocityTimeout = null),
            this._preventNextNativeScrollEvent) {
                this._preventNextNativeScrollEvent = !1;
                return
            }
            if (this.isScrolling === !1 || this.isScrolling === "native") {
                const s = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll,
                this.lastVelocity = this.velocity,
                this.velocity = this.animatedScroll - s,
                this.direction = Math.sign(this.animatedScroll - s),
                this.isStopped || (this.isScrolling = "native"),
                this.emit(),
                this.velocity !== 0 && (this._resetVelocityTimeout = setTimeout( () => {
                    this.lastVelocity = this.velocity,
                    this.velocity = 0,
                    this.isScrolling = !1,
                    this.emit()
                }
                , 400))
            }
        }
        );
        Se(this, "raf", s => {
            const e = s - (this.time || s);
            this.time = s,
            this.animate.advance(e * .001),
            this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
        }
        );
        window.lenisVersion = G0,
        (!s || s === document.documentElement) && (s = window),
        this.options = {
            wrapper: s,
            content: e,
            eventsTarget: i,
            smoothWheel: t,
            syncTouch: r,
            syncTouchLerp: n,
            touchInertiaMultiplier: u,
            duration: l,
            easing: c,
            lerp: p,
            infinite: _,
            gestureOrientation: D,
            orientation: x,
            touchMultiplier: h,
            wheelMultiplier: b,
            autoResize: v,
            prevent: E,
            virtualScroll: C,
            overscroll: L,
            autoRaf: A,
            anchors: P,
            autoToggle: M,
            allowNestedScroll: z,
            __experimental__naiveDimensions: f
        },
        this.dimensions = new t_(s,e,{
            autoResize: v
        }),
        this.updateClassName(),
        this.targetScroll = this.animatedScroll = this.actualScroll,
        this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
        this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
            capture: !0
        }),
        this.options.anchors && this.options.wrapper === window && this.options.wrapper.addEventListener("click", this.onClick, !1),
        this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1),
        this.virtualScroll = new i_(i,{
            touchMultiplier: h,
            wheelMultiplier: b
        }),
        this.virtualScroll.on("scroll", this.onVirtualScroll),
        this.options.autoToggle && this.rootElement.addEventListener("transitionend", this.onTransitionEnd, {
            passive: !0
        }),
        this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
    }
    destroy() {
        this.emitter.destroy(),
        this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1),
        this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
            capture: !0
        }),
        this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1),
        this.options.anchors && this.options.wrapper === window && this.options.wrapper.removeEventListener("click", this.onClick, !1),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.cleanUpClassName(),
        this.__rafID && cancelAnimationFrame(this.__rafID)
    }
    on(s, e) {
        return this.emitter.on(s, e)
    }
    off(s, e) {
        return this.emitter.off(s, e)
    }
    setScroll(s) {
        this.isHorizontal ? this.options.wrapper.scrollTo({
            left: s,
            behavior: "instant"
        }) : this.options.wrapper.scrollTo({
            top: s,
            behavior: "instant"
        })
    }
    resize() {
        this.dimensions.resize(),
        this.animatedScroll = this.targetScroll = this.actualScroll,
        this.emit()
    }
    emit() {
        this.emitter.emit("scroll", this)
    }
    reset() {
        this.isLocked = !1,
        this.isScrolling = !1,
        this.animatedScroll = this.targetScroll = this.actualScroll,
        this.lastVelocity = this.velocity = 0,
        this.animate.stop()
    }
    start() {
        this.isStopped && (this.reset(),
        this.isStopped = !1)
    }
    stop() {
        this.isStopped || (this.reset(),
        this.isStopped = !0)
    }
    scrollTo(s, {offset: e=0, immediate: i=!1, lock: t=!1, duration: r=this.options.duration, easing: n=this.options.easing, lerp: u=this.options.lerp, onStart: l, onComplete: c, force: p=!1, programmatic: _=!0, userData: x}={}) {
        if (!((this.isStopped || this.isLocked) && !p)) {
            if (typeof s == "string" && ["top", "left", "start"].includes(s))
                s = 0;
            else if (typeof s == "string" && ["bottom", "right", "end"].includes(s))
                s = this.limit;
            else {
                let D;
                if (typeof s == "string" ? D = document.querySelector(s) : s instanceof HTMLElement && (s != null && s.nodeType) && (D = s),
                D) {
                    if (this.options.wrapper !== window) {
                        const b = this.rootElement.getBoundingClientRect();
                        e -= this.isHorizontal ? b.left : b.top
                    }
                    const h = D.getBoundingClientRect();
                    s = (this.isHorizontal ? h.left : h.top) + this.animatedScroll
                }
            }
            if (typeof s == "number") {
                if (s += e,
                s = Math.round(s),
                this.options.infinite) {
                    if (_) {
                        this.targetScroll = this.animatedScroll = this.scroll;
                        const D = s - this.animatedScroll;
                        D > this.limit / 2 ? s = s - this.limit : D < -this.limit / 2 && (s = s + this.limit)
                    }
                } else
                    s = Hd(0, s, this.limit);
                if (s === this.targetScroll) {
                    l == null || l(this),
                    c == null || c(this);
                    return
                }
                if (this.userData = x ?? {},
                i) {
                    this.animatedScroll = this.targetScroll = s,
                    this.setScroll(this.scroll),
                    this.reset(),
                    this.preventNextNativeScrollEvent(),
                    this.emit(),
                    c == null || c(this),
                    this.userData = {},
                    requestAnimationFrame( () => {
                        this.dispatchScrollendEvent()
                    }
                    );
                    return
                }
                _ || (this.targetScroll = s),
                this.animate.fromTo(this.animatedScroll, s, {
                    duration: r,
                    easing: n,
                    lerp: u,
                    onStart: () => {
                        t && (this.isLocked = !0),
                        this.isScrolling = "smooth",
                        l == null || l(this)
                    }
                    ,
                    onUpdate: (D, h) => {
                        this.isScrolling = "smooth",
                        this.lastVelocity = this.velocity,
                        this.velocity = D - this.animatedScroll,
                        this.direction = Math.sign(this.velocity),
                        this.animatedScroll = D,
                        this.setScroll(this.scroll),
                        _ && (this.targetScroll = D),
                        h || this.emit(),
                        h && (this.reset(),
                        this.emit(),
                        c == null || c(this),
                        this.userData = {},
                        requestAnimationFrame( () => {
                            this.dispatchScrollendEvent()
                        }
                        ),
                        this.preventNextNativeScrollEvent())
                    }
                })
            }
        }
    }
    preventNextNativeScrollEvent() {
        this._preventNextNativeScrollEvent = !0,
        requestAnimationFrame( () => {
            this._preventNextNativeScrollEvent = !1
        }
        )
    }
    checkNestedScroll(s, {deltaX: e, deltaY: i}) {
        const t = Date.now()
          , r = s._lenis ?? (s._lenis = {});
        let n, u, l, c, p, _, x, D;
        const h = this.options.gestureOrientation;
        if (t - (r.time ?? 0) > 2e3) {
            r.time = Date.now();
            const M = window.getComputedStyle(s);
            r.computedStyle = M;
            const z = M.overflowX
              , f = M.overflowY;
            if (n = ["auto", "overlay", "scroll"].includes(z),
            u = ["auto", "overlay", "scroll"].includes(f),
            r.hasOverflowX = n,
            r.hasOverflowY = u,
            !n && !u || h === "vertical" && !u || h === "horizontal" && !n)
                return !1;
            p = s.scrollWidth,
            _ = s.scrollHeight,
            x = s.clientWidth,
            D = s.clientHeight,
            l = p > x,
            c = _ > D,
            r.isScrollableX = l,
            r.isScrollableY = c,
            r.scrollWidth = p,
            r.scrollHeight = _,
            r.clientWidth = x,
            r.clientHeight = D
        } else
            l = r.isScrollableX,
            c = r.isScrollableY,
            n = r.hasOverflowX,
            u = r.hasOverflowY,
            p = r.scrollWidth,
            _ = r.scrollHeight,
            x = r.clientWidth,
            D = r.clientHeight;
        if (!n && !u || !l && !c || h === "vertical" && (!u || !c) || h === "horizontal" && (!n || !l))
            return !1;
        let b;
        if (h === "horizontal")
            b = "x";
        else if (h === "vertical")
            b = "y";
        else {
            const M = e !== 0
              , z = i !== 0;
            M && n && l && (b = "x"),
            z && u && c && (b = "y")
        }
        if (!b)
            return !1;
        let v, E, C, L, A;
        if (b === "x")
            v = s.scrollLeft,
            E = p - x,
            C = e,
            L = n,
            A = l;
        else if (b === "y")
            v = s.scrollTop,
            E = _ - D,
            C = i,
            L = u,
            A = c;
        else
            return !1;
        return (C > 0 ? v < E : v > 0) && L && A
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
    }
    get limit() {
        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
    }
    get isHorizontal() {
        return this.options.orientation === "horizontal"
    }
    get actualScroll() {
        const s = this.options.wrapper;
        return this.isHorizontal ? s.scrollX ?? s.scrollLeft : s.scrollY ?? s.scrollTop
    }
    get scroll() {
        return this.options.infinite ? J0(this.animatedScroll, this.limit) : this.animatedScroll
    }
    get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit
    }
    get isScrolling() {
        return this._isScrolling
    }
    set isScrolling(s) {
        this._isScrolling !== s && (this._isScrolling = s,
        this.updateClassName())
    }
    get isStopped() {
        return this._isStopped
    }
    set isStopped(s) {
        this._isStopped !== s && (this._isStopped = s,
        this.updateClassName())
    }
    get isLocked() {
        return this._isLocked
    }
    set isLocked(s) {
        this._isLocked !== s && (this._isLocked = s,
        this.updateClassName())
    }
    get isSmooth() {
        return this.isScrolling === "smooth"
    }
    get className() {
        let s = "lenis";
        return this.options.autoToggle && (s += " lenis-autoToggle"),
        this.isStopped && (s += " lenis-stopped"),
        this.isLocked && (s += " lenis-locked"),
        this.isScrolling && (s += " lenis-scrolling"),
        this.isScrolling === "smooth" && (s += " lenis-smooth"),
        s
    }
    updateClassName() {
        this.cleanUpClassName(),
        this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
    }
    cleanUpClassName() {
        this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
    }
}
;
function r_(s, e) {
    for (var i = 0; i < e.length; i++) {
        var t = e[i];
        t.enumerable = t.enumerable || !1,
        t.configurable = !0,
        "value"in t && (t.writable = !0),
        Object.defineProperty(s, typeof (r = function(n, u) {
            if (typeof n != "object" || n === null)
                return n;
            var l = n[Symbol.toPrimitive];
            if (l !== void 0) {
                var c = l.call(n, "string");
                if (typeof c != "object")
                    return c;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(n)
        }(t.key)) == "symbol" ? r : String(r), t)
    }
    var r
}
function Tf(s, e, i) {
    return e && r_(s.prototype, e),
    Object.defineProperty(s, "prototype", {
        writable: !1
    }),
    s
}
function Pr() {
    return Pr = Object.assign ? Object.assign.bind() : function(s) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var t in i)
                Object.prototype.hasOwnProperty.call(i, t) && (s[t] = i[t])
        }
        return s
    }
    ,
    Pr.apply(this, arguments)
}
function la(s, e) {
    s.prototype = Object.create(e.prototype),
    s.prototype.constructor = s,
    Us(s, e)
}
function Ol(s) {
    return Ol = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    }
    ,
    Ol(s)
}
function Us(s, e) {
    return Us = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, t) {
        return i.__proto__ = t,
        i
    }
    ,
    Us(s, e)
}
function n_() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function")
        return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
        !0
    } catch {
        return !1
    }
}
function Rl(s, e, i) {
    return Rl = n_() ? Reflect.construct.bind() : function(t, r, n) {
        var u = [null];
        u.push.apply(u, r);
        var l = new (Function.bind.apply(t, u));
        return n && Us(l, n.prototype),
        l
    }
    ,
    Rl.apply(null, arguments)
}
function Ll(s) {
    var e = typeof Map == "function" ? new Map : void 0;
    return Ll = function(i) {
        if (i === null || Function.toString.call(i).indexOf("[native code]") === -1)
            return i;
        if (typeof i != "function")
            throw new TypeError("Super expression must either be null or a function");
        if (e !== void 0) {
            if (e.has(i))
                return e.get(i);
            e.set(i, t)
        }
        function t() {
            return Rl(i, arguments, Ol(this).constructor)
        }
        return t.prototype = Object.create(i.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        Us(t, i)
    }
    ,
    Ll(s)
}
function o_(s) {
    if (s === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s
}
var fn, s_ = function() {
    this.before = void 0,
    this.beforeLeave = void 0,
    this.leave = void 0,
    this.afterLeave = void 0,
    this.beforeEnter = void 0,
    this.enter = void 0,
    this.afterEnter = void 0,
    this.after = void 0
};
(function(s) {
    s[s.off = 0] = "off",
    s[s.error = 1] = "error",
    s[s.warning = 2] = "warning",
    s[s.info = 3] = "info",
    s[s.debug = 4] = "debug"
}
)(fn || (fn = {}));
var zc = fn.off
  , $n = function() {
    function s(i) {
        this.t = void 0,
        this.t = i
    }
    s.getLevel = function() {
        return zc
    }
    ,
    s.setLevel = function(i) {
        return zc = fn[i]
    }
    ;
    var e = s.prototype;
    return e.error = function() {
        this.i(console.error, fn.error, [].slice.call(arguments))
    }
    ,
    e.warn = function() {
        this.i(console.warn, fn.warning, [].slice.call(arguments))
    }
    ,
    e.info = function() {
        this.i(console.info, fn.info, [].slice.call(arguments))
    }
    ,
    e.debug = function() {
        this.i(console.log, fn.debug, [].slice.call(arguments))
    }
    ,
    e.i = function(i, t, r) {
        t <= s.getLevel() && i.apply(console, ["[" + this.t + "] "].concat(r))
    }
    ,
    s
}();
function co(s) {
    return s.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
}
function $c(s) {
    return s && s.sensitive ? "" : "i"
}
var Rr = {
    container: "container",
    history: "history",
    namespace: "namespace",
    prefix: "data-barba",
    prevent: "prevent",
    wrapper: "wrapper"
}
  , qn = new (function() {
    function s() {
        this.o = Rr,
        this.u = void 0,
        this.h = {
            after: null,
            before: null,
            parent: null
        }
    }
    var e = s.prototype;
    return e.toString = function(i) {
        return i.outerHTML
    }
    ,
    e.toDocument = function(i) {
        return this.u || (this.u = new DOMParser),
        this.u.parseFromString(i, "text/html")
    }
    ,
    e.toElement = function(i) {
        var t = document.createElement("div");
        return t.innerHTML = i,
        t
    }
    ,
    e.getHtml = function(i) {
        return i === void 0 && (i = document),
        this.toString(i.documentElement)
    }
    ,
    e.getWrapper = function(i) {
        return i === void 0 && (i = document),
        i.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
    }
    ,
    e.getContainer = function(i) {
        return i === void 0 && (i = document),
        i.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
    }
    ,
    e.removeContainer = function(i) {
        document.body.contains(i) && (this.v(i),
        i.parentNode.removeChild(i))
    }
    ,
    e.addContainer = function(i, t) {
        var r = this.getContainer() || this.h.before;
        r ? this.l(i, r) : this.h.after ? this.h.after.parentNode.insertBefore(i, this.h.after) : this.h.parent ? this.h.parent.appendChild(i) : t.appendChild(i)
    }
    ,
    e.getSibling = function() {
        return this.h
    }
    ,
    e.getNamespace = function(i) {
        i === void 0 && (i = document);
        var t = i.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
        return t ? t.getAttribute(this.o.prefix + "-" + this.o.namespace) : null
    }
    ,
    e.getHref = function(i) {
        if (i.tagName && i.tagName.toLowerCase() === "a") {
            if (typeof i.href == "string")
                return i.href;
            var t = i.getAttribute("href") || i.getAttribute("xlink:href");
            if (t)
                return this.resolveUrl(t.baseVal || t)
        }
        return null
    }
    ,
    e.resolveUrl = function() {
        var i = [].slice.call(arguments).length;
        if (i === 0)
            throw new Error("resolveUrl requires at least one argument; got none.");
        var t = document.createElement("base");
        if (t.href = arguments[0],
        i === 1)
            return t.href;
        var r = document.getElementsByTagName("head")[0];
        r.insertBefore(t, r.firstChild);
        for (var n, u = document.createElement("a"), l = 1; l < i; l++)
            u.href = arguments[l],
            t.href = n = u.href;
        return r.removeChild(t),
        n
    }
    ,
    e.l = function(i, t) {
        t.parentNode.insertBefore(i, t.nextSibling)
    }
    ,
    e.v = function(i) {
        return this.h = {
            after: i.nextElementSibling,
            before: i.previousElementSibling,
            parent: i.parentElement
        },
        this.h
    }
    ,
    s
}())
  , u_ = function() {
    function s() {
        this.p = void 0,
        this.m = [],
        this.P = -1
    }
    var e = s.prototype;
    return e.init = function(i, t) {
        this.p = "barba";
        var r = {
            data: {},
            ns: t,
            scroll: {
                x: window.scrollX,
                y: window.scrollY
            },
            url: i
        };
        this.P = 0,
        this.m.push(r);
        var n = {
            from: this.p,
            index: this.P,
            states: [].concat(this.m)
        };
        window.history && window.history.replaceState(n, "", i)
    }
    ,
    e.change = function(i, t, r) {
        if (r && r.state) {
            var n = r.state
              , u = n.index;
            t = this.g(this.P - u),
            this.replace(n.states),
            this.P = u
        } else
            this.add(i, t);
        return t
    }
    ,
    e.add = function(i, t, r, n) {
        var u = r ?? this.R(t)
          , l = {
            data: n ?? {},
            ns: "tmp",
            scroll: {
                x: window.scrollX,
                y: window.scrollY
            },
            url: i
        };
        switch (u) {
        case "push":
            this.P = this.size,
            this.m.push(l);
            break;
        case "replace":
            this.set(this.P, l)
        }
        var c = {
            from: this.p,
            index: this.P,
            states: [].concat(this.m)
        };
        switch (u) {
        case "push":
            window.history && window.history.pushState(c, "", i);
            break;
        case "replace":
            window.history && window.history.replaceState(c, "", i)
        }
    }
    ,
    e.store = function(i, t) {
        var r = t || this.P
          , n = this.get(r);
        n.data = Pr({}, n.data, i),
        this.set(r, n);
        var u = {
            from: this.p,
            index: this.P,
            states: [].concat(this.m)
        };
        window.history.replaceState(u, "")
    }
    ,
    e.update = function(i, t) {
        var r = t || this.P
          , n = Pr({}, this.get(r), i);
        this.set(r, n)
    }
    ,
    e.remove = function(i) {
        i ? this.m.splice(i, 1) : this.m.pop(),
        this.P--
    }
    ,
    e.clear = function() {
        this.m = [],
        this.P = -1
    }
    ,
    e.replace = function(i) {
        this.m = i
    }
    ,
    e.get = function(i) {
        return this.m[i]
    }
    ,
    e.set = function(i, t) {
        return this.m[i] = t
    }
    ,
    e.R = function(i) {
        var t = "push"
          , r = i
          , n = Rr.prefix + "-" + Rr.history;
        return r.hasAttribute && r.hasAttribute(n) && (t = r.getAttribute(n)),
        t
    }
    ,
    e.g = function(i) {
        return Math.abs(i) > 1 ? i > 0 ? "forward" : "back" : i === 0 ? "popstate" : i > 0 ? "back" : "forward"
    }
    ,
    Tf(s, [{
        key: "current",
        get: function() {
            return this.m[this.P]
        }
    }, {
        key: "previous",
        get: function() {
            return this.P < 1 ? null : this.m[this.P - 1]
        }
    }, {
        key: "size",
        get: function() {
            return this.m.length
        }
    }]),
    s
}()
  , $d = new u_
  , Ku = function(s, e) {
    try {
        var i = function() {
            if (!e.next.html)
                return Promise.resolve(s).then(function(t) {
                    var r = e.next;
                    if (t) {
                        var n = qn.toElement(t.html);
                        r.namespace = qn.getNamespace(n),
                        r.container = qn.getContainer(n),
                        r.url = t.url,
                        r.html = t.html,
                        $d.update({
                            ns: r.namespace
                        });
                        var u = qn.toDocument(t.html);
                        document.title = u.title
                    }
                })
        }();
        return Promise.resolve(i && i.then ? i.then(function() {}) : void 0)
    } catch (t) {
        return Promise.reject(t)
    }
}
  , qd = function s(e, i, t) {
    return e instanceof RegExp ? function(r, n) {
        if (!n)
            return r;
        for (var u = /\((?:\?<(.*?)>)?(?!\?)/g, l = 0, c = u.exec(r.source); c; )
            n.push({
                name: c[1] || l++,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            }),
            c = u.exec(r.source);
        return r
    }(e, i) : Array.isArray(e) ? function(r, n, u) {
        var l = r.map(function(c) {
            return s(c, n, u).source
        });
        return new RegExp("(?:".concat(l.join("|"), ")"),$c(u))
    }(e, i, t) : function(r, n, u) {
        return function(l, c, p) {
            p === void 0 && (p = {});
            for (var _ = p.strict, x = _ !== void 0 && _, D = p.start, h = D === void 0 || D, b = p.end, v = b === void 0 || b, E = p.encode, C = E === void 0 ? function(ae) {
                return ae
            }
            : E, L = p.delimiter, A = L === void 0 ? "/#?" : L, P = p.endsWith, M = "[".concat(co(P === void 0 ? "" : P), "]|$"), z = "[".concat(co(A), "]"), f = h ? "^" : "", q = 0, H = l; q < H.length; q++) {
                var I = H[q];
                if (typeof I == "string")
                    f += co(C(I));
                else {
                    var ee = co(C(I.prefix))
                      , K = co(C(I.suffix));
                    if (I.pattern)
                        if (c && c.push(I),
                        ee || K)
                            if (I.modifier === "+" || I.modifier === "*") {
                                var G = I.modifier === "*" ? "?" : "";
                                f += "(?:".concat(ee, "((?:").concat(I.pattern, ")(?:").concat(K).concat(ee, "(?:").concat(I.pattern, "))*)").concat(K, ")").concat(G)
                            } else
                                f += "(?:".concat(ee, "(").concat(I.pattern, ")").concat(K, ")").concat(I.modifier);
                        else
                            f += I.modifier === "+" || I.modifier === "*" ? "((?:".concat(I.pattern, ")").concat(I.modifier, ")") : "(".concat(I.pattern, ")").concat(I.modifier);
                    else
                        f += "(?:".concat(ee).concat(K, ")").concat(I.modifier)
                }
            }
            if (v)
                x || (f += "".concat(z, "?")),
                f += p.endsWith ? "(?=".concat(M, ")") : "$";
            else {
                var ne = l[l.length - 1]
                  , se = typeof ne == "string" ? z.indexOf(ne[ne.length - 1]) > -1 : ne === void 0;
                x || (f += "(?:".concat(z, "(?=").concat(M, "))?")),
                se || (f += "(?=".concat(z, "|").concat(M, ")"))
            }
            return new RegExp(f,$c(p))
        }(function(l, c) {
            c === void 0 && (c = {});
            for (var p = function(K) {
                for (var G = [], ne = 0; ne < K.length; ) {
                    var se = K[ne];
                    if (se !== "*" && se !== "+" && se !== "?")
                        if (se !== "\\")
                            if (se !== "{")
                                if (se !== "}")
                                    if (se !== ":")
                                        if (se !== "(")
                                            G.push({
                                                type: "CHAR",
                                                index: ne,
                                                value: K[ne++]
                                            });
                                        else {
                                            var ae = 1
                                              , oe = "";
                                            if (K[U = ne + 1] === "?")
                                                throw new TypeError('Pattern cannot start with "?" at '.concat(U));
                                            for (; U < K.length; )
                                                if (K[U] !== "\\") {
                                                    if (K[U] === ")") {
                                                        if (--ae == 0) {
                                                            U++;
                                                            break
                                                        }
                                                    } else if (K[U] === "(" && (ae++,
                                                    K[U + 1] !== "?"))
                                                        throw new TypeError("Capturing groups are not allowed at ".concat(U));
                                                    oe += K[U++]
                                                } else
                                                    oe += K[U++] + K[U++];
                                            if (ae)
                                                throw new TypeError("Unbalanced pattern at ".concat(ne));
                                            if (!oe)
                                                throw new TypeError("Missing pattern at ".concat(ne));
                                            G.push({
                                                type: "PATTERN",
                                                index: ne,
                                                value: oe
                                            }),
                                            ne = U
                                        }
                                    else {
                                        for (var Ce = "", U = ne + 1; U < K.length; ) {
                                            var R = K.charCodeAt(U);
                                            if (!(R >= 48 && R <= 57 || R >= 65 && R <= 90 || R >= 97 && R <= 122 || R === 95))
                                                break;
                                            Ce += K[U++]
                                        }
                                        if (!Ce)
                                            throw new TypeError("Missing parameter name at ".concat(ne));
                                        G.push({
                                            type: "NAME",
                                            index: ne,
                                            value: Ce
                                        }),
                                        ne = U
                                    }
                                else
                                    G.push({
                                        type: "CLOSE",
                                        index: ne,
                                        value: K[ne++]
                                    });
                            else
                                G.push({
                                    type: "OPEN",
                                    index: ne,
                                    value: K[ne++]
                                });
                        else
                            G.push({
                                type: "ESCAPED_CHAR",
                                index: ne++,
                                value: K[ne++]
                            });
                    else
                        G.push({
                            type: "MODIFIER",
                            index: ne,
                            value: K[ne++]
                        })
                }
                return G.push({
                    type: "END",
                    index: ne,
                    value: ""
                }),
                G
            }(l), _ = c.prefixes, x = _ === void 0 ? "./" : _, D = "[^".concat(co(c.delimiter || "/#?"), "]+?"), h = [], b = 0, v = 0, E = "", C = function(K) {
                if (v < p.length && p[v].type === K)
                    return p[v++].value
            }, L = function(K) {
                var G = C(K);
                if (G !== void 0)
                    return G;
                var ne = p[v]
                  , se = ne.index;
                throw new TypeError("Unexpected ".concat(ne.type, " at ").concat(se, ", expected ").concat(K))
            }, A = function() {
                for (var K, G = ""; K = C("CHAR") || C("ESCAPED_CHAR"); )
                    G += K;
                return G
            }; v < p.length; ) {
                var P = C("CHAR")
                  , M = C("NAME")
                  , z = C("PATTERN");
                if (M || z)
                    x.indexOf(q = P || "") === -1 && (E += q,
                    q = ""),
                    E && (h.push(E),
                    E = ""),
                    h.push({
                        name: M || b++,
                        prefix: q,
                        suffix: "",
                        pattern: z || D,
                        modifier: C("MODIFIER") || ""
                    });
                else {
                    var f = P || C("ESCAPED_CHAR");
                    if (f)
                        E += f;
                    else if (E && (h.push(E),
                    E = ""),
                    C("OPEN")) {
                        var q = A()
                          , H = C("NAME") || ""
                          , I = C("PATTERN") || ""
                          , ee = A();
                        L("CLOSE"),
                        h.push({
                            name: H || (I ? b++ : ""),
                            pattern: H && !I ? D : I,
                            prefix: q,
                            suffix: ee,
                            modifier: C("MODIFIER") || ""
                        })
                    } else
                        L("END")
                }
            }
            return h
        }(r, u), n, u)
    }(e, i, t)
}
  , a_ = {
    __proto__: null,
    update: Ku,
    nextTick: function() {
        return new Promise(function(s) {
            window.requestAnimationFrame(s)
        }
        )
    },
    pathToRegexp: qd
}
  , jd = function() {
    return window.location.origin
}
  , Gs = function(s) {
    return s === void 0 && (s = window.location.href),
    cn(s).port
}
  , cn = function(s) {
    var e, i = s.match(/:\d+/);
    if (i === null)
        /^http/.test(s) && (e = 80),
        /^https/.test(s) && (e = 443);
    else {
        var t = i[0].substring(1);
        e = parseInt(t, 10)
    }
    var r, n = s.replace(jd(), ""), u = {}, l = n.indexOf("#");
    l >= 0 && (r = n.slice(l + 1),
    n = n.slice(0, l));
    var c = n.indexOf("?");
    return c >= 0 && (u = Xd(n.slice(c + 1)),
    n = n.slice(0, c)),
    {
        hash: r,
        path: n,
        port: e,
        query: u
    }
}
  , Xd = function(s) {
    return s.split("&").reduce(function(e, i) {
        var t = i.split("=");
        return e[t[0]] = t[1],
        e
    }, {})
}
  , Nl = function(s) {
    return s === void 0 && (s = window.location.href),
    s.replace(/(\/#.*|\/|#.*)$/, "")
}
  , l_ = {
    __proto__: null,
    getHref: function() {
        return window.location.href
    },
    getAbsoluteHref: function(s, e) {
        return e === void 0 && (e = document.baseURI),
        new URL(s,e).href
    },
    getOrigin: jd,
    getPort: Gs,
    getPath: function(s) {
        return s === void 0 && (s = window.location.href),
        cn(s).path
    },
    getQuery: function(s, e) {
        return e === void 0 && (e = !1),
        e ? JSON.stringify(cn(s).query) : cn(s).query
    },
    getHash: function(s) {
        return cn(s).hash
    },
    parse: cn,
    parseQuery: Xd,
    clean: Nl
};
function f_(s, e, i, t, r) {
    return e === void 0 && (e = 2e3),
    new Promise(function(n, u) {
        var l = new XMLHttpRequest;
        l.onreadystatechange = function() {
            if (l.readyState === XMLHttpRequest.DONE) {
                if (l.status === 200) {
                    var c = l.responseURL !== "" && l.responseURL !== s ? l.responseURL : s;
                    n({
                        html: l.responseText,
                        url: Pr({
                            href: c
                        }, cn(c))
                    }),
                    t.update(s, {
                        status: "fulfilled",
                        target: c
                    })
                } else if (l.status) {
                    var p = {
                        status: l.status,
                        statusText: l.statusText
                    };
                    i(s, p),
                    u(p),
                    t.update(s, {
                        status: "rejected"
                    })
                }
            }
        }
        ,
        l.ontimeout = function() {
            var c = new Error("Timeout error [" + e + "]");
            i(s, c),
            u(c),
            t.update(s, {
                status: "rejected"
            })
        }
        ,
        l.onerror = function() {
            var c = new Error("Fetch error");
            i(s, c),
            u(c),
            t.update(s, {
                status: "rejected"
            })
        }
        ,
        l.open("GET", s),
        l.timeout = e,
        l.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"),
        l.setRequestHeader("x-barba", "yes"),
        r.all().forEach(function(c, p) {
            l.setRequestHeader(p, c)
        }),
        l.send()
    }
    )
}
function c_(s) {
    return !!s && (typeof s == "object" || typeof s == "function") && typeof s.then == "function"
}
function wo(s, e) {
    return e === void 0 && (e = {}),
    function() {
        var i = arguments
          , t = !1
          , r = new Promise(function(n, u) {
            e.async = function() {
                return t = !0,
                function(c, p) {
                    c ? u(c) : n(p)
                }
            }
            ;
            var l = s.apply(e, [].slice.call(i));
            t || (c_(l) ? l.then(n, u) : n(l))
        }
        );
        return r
    }
}
var an = new (function(s) {
    function e() {
        var t;
        return (t = s.call(this) || this).logger = new $n("@barba/core"),
        t.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"],
        t.registered = new Map,
        t.init(),
        t
    }
    la(e, s);
    var i = e.prototype;
    return i.init = function() {
        var t = this;
        this.registered.clear(),
        this.all.forEach(function(r) {
            t[r] || (t[r] = function(n, u) {
                t.registered.has(r) || t.registered.set(r, new Set),
                t.registered.get(r).add({
                    ctx: u || {},
                    fn: n
                })
            }
            )
        })
    }
    ,
    i.do = function(t) {
        var r = arguments
          , n = this;
        if (this.registered.has(t)) {
            var u = Promise.resolve();
            return this.registered.get(t).forEach(function(l) {
                u = u.then(function() {
                    return wo(l.fn, l.ctx).apply(void 0, [].slice.call(r, 1))
                })
            }),
            u.catch(function(l) {
                n.logger.debug("Hook error [" + t + "]"),
                n.logger.error(l)
            })
        }
        return Promise.resolve()
    }
    ,
    i.clear = function() {
        var t = this;
        this.all.forEach(function(r) {
            delete t[r]
        }),
        this.init()
    }
    ,
    i.help = function() {
        this.logger.info("Available hooks: " + this.all.join(","));
        var t = [];
        this.registered.forEach(function(r, n) {
            return t.push(n)
        }),
        this.logger.info("Registered hooks: " + t.join(","))
    }
    ,
    e
}(s_))
  , Wd = function() {
    function s(e) {
        if (this.k = void 0,
        this.O = [],
        typeof e == "boolean")
            this.k = e;
        else {
            var i = Array.isArray(e) ? e : [e];
            this.O = i.map(function(t) {
                return qd(t)
            })
        }
    }
    return s.prototype.checkHref = function(e) {
        if (typeof this.k == "boolean")
            return this.k;
        var i = cn(e).path;
        return this.O.some(function(t) {
            return t.exec(i) !== null
        })
    }
    ,
    s
}()
  , h_ = function(s) {
    function e(t) {
        var r;
        return (r = s.call(this, t) || this).T = new Map,
        r
    }
    la(e, s);
    var i = e.prototype;
    return i.set = function(t, r, n, u, l) {
        return this.T.set(t, {
            action: n,
            request: r,
            status: u,
            target: l ?? t
        }),
        {
            action: n,
            request: r,
            status: u,
            target: l
        }
    }
    ,
    i.get = function(t) {
        return this.T.get(t)
    }
    ,
    i.getRequest = function(t) {
        return this.T.get(t).request
    }
    ,
    i.getAction = function(t) {
        return this.T.get(t).action
    }
    ,
    i.getStatus = function(t) {
        return this.T.get(t).status
    }
    ,
    i.getTarget = function(t) {
        return this.T.get(t).target
    }
    ,
    i.has = function(t) {
        return !this.checkHref(t) && this.T.has(t)
    }
    ,
    i.delete = function(t) {
        return this.T.delete(t)
    }
    ,
    i.update = function(t, r) {
        var n = Pr({}, this.T.get(t), r);
        return this.T.set(t, n),
        n
    }
    ,
    e
}(Wd)
  , d_ = function() {
    function s() {
        this.A = new Map
    }
    var e = s.prototype;
    return e.set = function(i, t) {
        return this.A.set(i, t),
        {
            name: t
        }
    }
    ,
    e.get = function(i) {
        return this.A.get(i)
    }
    ,
    e.all = function() {
        return this.A
    }
    ,
    e.has = function(i) {
        return this.A.has(i)
    }
    ,
    e.delete = function(i) {
        return this.A.delete(i)
    }
    ,
    e.clear = function() {
        return this.A.clear()
    }
    ,
    s
}()
  , p_ = function() {
    return !window.history.pushState
}
  , g_ = function(s) {
    return !s.el || !s.href
}
  , __ = function(s) {
    var e = s.event;
    return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
}
  , m_ = function(s) {
    var e = s.el;
    return e.hasAttribute("target") && e.target === "_blank"
}
  , y_ = function(s) {
    var e = s.el;
    return e.protocol !== void 0 && window.location.protocol !== e.protocol || e.hostname !== void 0 && window.location.hostname !== e.hostname
}
  , v_ = function(s) {
    var e = s.el;
    return e.port !== void 0 && Gs() !== Gs(e.href)
}
  , D_ = function(s) {
    var e = s.el;
    return e.getAttribute && typeof e.getAttribute("download") == "string"
}
  , x_ = function(s) {
    return s.el.hasAttribute(Rr.prefix + "-" + Rr.prevent)
}
  , b_ = function(s) {
    return !!s.el.closest("[" + Rr.prefix + "-" + Rr.prevent + '="all"]')
}
  , w_ = function(s) {
    var e = s.href;
    return Nl(e) === Nl() && Gs(e) === Gs()
}
  , C_ = function(s) {
    function e(t) {
        var r;
        return (r = s.call(this, t) || this).suite = [],
        r.tests = new Map,
        r.init(),
        r
    }
    la(e, s);
    var i = e.prototype;
    return i.init = function() {
        this.add("pushState", p_),
        this.add("exists", g_),
        this.add("newTab", __),
        this.add("blank", m_),
        this.add("corsDomain", y_),
        this.add("corsPort", v_),
        this.add("download", D_),
        this.add("preventSelf", x_),
        this.add("preventAll", b_),
        this.add("sameUrl", w_, !1)
    }
    ,
    i.add = function(t, r, n) {
        n === void 0 && (n = !0),
        this.tests.set(t, r),
        n && this.suite.push(t)
    }
    ,
    i.run = function(t, r, n, u) {
        return this.tests.get(t)({
            el: r,
            event: n,
            href: u
        })
    }
    ,
    i.checkLink = function(t, r, n) {
        var u = this;
        return this.suite.some(function(l) {
            return u.run(l, t, r, n)
        })
    }
    ,
    e
}(Wd)
  , Ya = function(s) {
    function e(i, t) {
        var r;
        return t === void 0 && (t = "Barba error"),
        (r = s.call.apply(s, [this].concat([].slice.call(arguments, 2))) || this).error = void 0,
        r.label = void 0,
        r.error = i,
        r.label = t,
        Error.captureStackTrace && Error.captureStackTrace(o_(r), e),
        r.name = "BarbaError",
        r
    }
    return la(e, s),
    e
}(Ll(Error))
  , E_ = function() {
    function s(i) {
        i === void 0 && (i = []),
        this.logger = new $n("@barba/core"),
        this.all = [],
        this.page = [],
        this.once = [],
        this.j = [{
            name: "namespace",
            type: "strings"
        }, {
            name: "custom",
            type: "function"
        }],
        i && (this.all = this.all.concat(i)),
        this.update()
    }
    var e = s.prototype;
    return e.add = function(i, t) {
        i === "rule" ? this.j.splice(t.position || 0, 0, t.value) : this.all.push(t),
        this.update()
    }
    ,
    e.resolve = function(i, t) {
        var r = this;
        t === void 0 && (t = {});
        var n = t.once ? this.once : this.page;
        n = n.filter(t.self ? function(D) {
            return D.name && D.name === "self"
        }
        : function(D) {
            return !D.name || D.name !== "self"
        }
        );
        var u = new Map
          , l = n.find(function(D) {
            var h = !0
              , b = {};
            return t.self && D.name === "self" ? (u.set(D, b),
            !0) : (r.j.reverse().forEach(function(v) {
                h && (h = r.M(D, v, i, b),
                D.from && D.to && (h = r.M(D, v, i, b, "from") && r.M(D, v, i, b, "to")),
                D.from && !D.to && (h = r.M(D, v, i, b, "from")),
                !D.from && D.to && (h = r.M(D, v, i, b, "to")))
            }),
            u.set(D, b),
            h)
        })
          , c = u.get(l)
          , p = [];
        if (p.push(t.once ? "once" : "page"),
        t.self && p.push("self"),
        c) {
            var _, x = [l];
            Object.keys(c).length > 0 && x.push(c),
            (_ = this.logger).info.apply(_, ["Transition found [" + p.join(",") + "]"].concat(x))
        } else
            this.logger.info("No transition found [" + p.join(",") + "]");
        return l
    }
    ,
    e.update = function() {
        var i = this;
        this.all = this.all.map(function(t) {
            return i.N(t)
        }).sort(function(t, r) {
            return t.priority - r.priority
        }).reverse().map(function(t) {
            return delete t.priority,
            t
        }),
        this.page = this.all.filter(function(t) {
            return t.leave !== void 0 || t.enter !== void 0
        }),
        this.once = this.all.filter(function(t) {
            return t.once !== void 0
        })
    }
    ,
    e.M = function(i, t, r, n, u) {
        var l = !0
          , c = !1
          , p = i
          , _ = t.name
          , x = _
          , D = _
          , h = _
          , b = u ? p[u] : p
          , v = u === "to" ? r.next : r.current;
        if (u ? b && b[_] : b[_]) {
            switch (t.type) {
            case "strings":
            default:
                var E = Array.isArray(b[x]) ? b[x] : [b[x]];
                v[x] && E.indexOf(v[x]) !== -1 && (c = !0),
                E.indexOf(v[x]) === -1 && (l = !1);
                break;
            case "object":
                var C = Array.isArray(b[D]) ? b[D] : [b[D]];
                v[D] ? (v[D].name && C.indexOf(v[D].name) !== -1 && (c = !0),
                C.indexOf(v[D].name) === -1 && (l = !1)) : l = !1;
                break;
            case "function":
                b[h](r) ? c = !0 : l = !1
            }
            c && (u ? (n[u] = n[u] || {},
            n[u][_] = p[u][_]) : n[_] = p[_])
        }
        return l
    }
    ,
    e.S = function(i, t, r) {
        var n = 0;
        return (i[t] || i.from && i.from[t] || i.to && i.to[t]) && (n += Math.pow(10, r),
        i.from && i.from[t] && (n += 1),
        i.to && i.to[t] && (n += 2)),
        n
    }
    ,
    e.N = function(i) {
        var t = this;
        i.priority = 0;
        var r = 0;
        return this.j.forEach(function(n, u) {
            r += t.S(i, n.name, u + 1)
        }),
        i.priority = r,
        i
    }
    ,
    s
}();
function ns(s, e) {
    try {
        var i = s()
    } catch (t) {
        return e(t)
    }
    return i && i.then ? i.then(void 0, e) : i
}
var T_ = function() {
    function s(i) {
        i === void 0 && (i = []),
        this.logger = new $n("@barba/core"),
        this.store = void 0,
        this.C = !1,
        this.store = new E_(i)
    }
    var e = s.prototype;
    return e.get = function(i, t) {
        return this.store.resolve(i, t)
    }
    ,
    e.doOnce = function(i) {
        var t = i.data
          , r = i.transition;
        try {
            var n = function() {
                u.C = !1
            }
              , u = this
              , l = r || {};
            u.C = !0;
            var c = ns(function() {
                return Promise.resolve(u.L("beforeOnce", t, l)).then(function() {
                    return Promise.resolve(u.once(t, l)).then(function() {
                        return Promise.resolve(u.L("afterOnce", t, l)).then(function() {})
                    })
                })
            }, function(p) {
                u.C = !1,
                u.logger.debug("Transition error [before/after/once]"),
                u.logger.error(p)
            });
            return Promise.resolve(c && c.then ? c.then(n) : n())
        } catch (p) {
            return Promise.reject(p)
        }
    }
    ,
    e.doPage = function(i) {
        var t = i.data
          , r = i.transition
          , n = i.page
          , u = i.wrapper;
        try {
            var l = function(D) {
                c.C = !1
            }
              , c = this
              , p = r || {}
              , _ = p.sync === !0 || !1;
            c.C = !0;
            var x = ns(function() {
                function D() {
                    return Promise.resolve(c.L("before", t, p)).then(function() {
                        function b(E) {
                            return Promise.resolve(c.remove(t)).then(function() {
                                return Promise.resolve(c.L("after", t, p)).then(function() {})
                            })
                        }
                        var v = function() {
                            if (_)
                                return ns(function() {
                                    return Promise.resolve(c.add(t, u)).then(function() {
                                        return Promise.resolve(c.L("beforeLeave", t, p)).then(function() {
                                            return Promise.resolve(c.L("beforeEnter", t, p)).then(function() {
                                                return Promise.resolve(Promise.all([c.leave(t, p), c.enter(t, p)])).then(function() {
                                                    return Promise.resolve(c.L("afterLeave", t, p)).then(function() {
                                                        return Promise.resolve(c.L("afterEnter", t, p)).then(function() {})
                                                    })
                                                })
                                            })
                                        })
                                    })
                                }, function(A) {
                                    if (c.H(A))
                                        throw new Ya(A,"Transition error [sync]")
                                });
                            var E = function(A) {
                                return ns(function() {
                                    var P = function() {
                                        if (C !== !1)
                                            return Promise.resolve(c.add(t, u)).then(function() {
                                                return Promise.resolve(c.L("beforeEnter", t, p)).then(function() {
                                                    return Promise.resolve(c.enter(t, p, C)).then(function() {
                                                        return Promise.resolve(c.L("afterEnter", t, p)).then(function() {})
                                                    })
                                                })
                                            })
                                    }();
                                    if (P && P.then)
                                        return P.then(function() {})
                                }, function(P) {
                                    if (c.H(P))
                                        throw new Ya(P,"Transition error [before/after/enter]")
                                })
                            }
                              , C = !1
                              , L = ns(function() {
                                return Promise.resolve(c.L("beforeLeave", t, p)).then(function() {
                                    return Promise.resolve(Promise.all([c.leave(t, p), Ku(n, t)]).then(function(A) {
                                        return A[0]
                                    })).then(function(A) {
                                        return C = A,
                                        Promise.resolve(c.L("afterLeave", t, p)).then(function() {})
                                    })
                                })
                            }, function(A) {
                                if (c.H(A))
                                    throw new Ya(A,"Transition error [before/after/leave]")
                            });
                            return L && L.then ? L.then(E) : E()
                        }();
                        return v && v.then ? v.then(b) : b()
                    })
                }
                var h = function() {
                    if (_)
                        return Promise.resolve(Ku(n, t)).then(function() {})
                }();
                return h && h.then ? h.then(D) : D()
            }, function(D) {
                throw c.C = !1,
                D.name && D.name === "BarbaError" ? (c.logger.debug(D.label),
                c.logger.error(D.error),
                D) : (c.logger.debug("Transition error [page]"),
                c.logger.error(D),
                D)
            });
            return Promise.resolve(x && x.then ? x.then(l) : l())
        } catch (D) {
            return Promise.reject(D)
        }
    }
    ,
    e.once = function(i, t) {
        try {
            return Promise.resolve(an.do("once", i, t)).then(function() {
                return t.once ? wo(t.once, t)(i) : Promise.resolve()
            })
        } catch (r) {
            return Promise.reject(r)
        }
    }
    ,
    e.leave = function(i, t) {
        try {
            return Promise.resolve(an.do("leave", i, t)).then(function() {
                return t.leave ? wo(t.leave, t)(i) : Promise.resolve()
            })
        } catch (r) {
            return Promise.reject(r)
        }
    }
    ,
    e.enter = function(i, t, r) {
        try {
            return Promise.resolve(an.do("enter", i, t)).then(function() {
                return t.enter ? wo(t.enter, t)(i, r) : Promise.resolve()
            })
        } catch (n) {
            return Promise.reject(n)
        }
    }
    ,
    e.add = function(i, t) {
        try {
            return qn.addContainer(i.next.container, t),
            an.do("nextAdded", i),
            Promise.resolve()
        } catch (r) {
            return Promise.reject(r)
        }
    }
    ,
    e.remove = function(i) {
        try {
            return qn.removeContainer(i.current.container),
            an.do("currentRemoved", i),
            Promise.resolve()
        } catch (t) {
            return Promise.reject(t)
        }
    }
    ,
    e.H = function(i) {
        return i.message ? !/Timeout error|Fetch error/.test(i.message) : !i.status
    }
    ,
    e.L = function(i, t, r) {
        try {
            return Promise.resolve(an.do(i, t, r)).then(function() {
                return r[i] ? wo(r[i], r)(t) : Promise.resolve()
            })
        } catch (n) {
            return Promise.reject(n)
        }
    }
    ,
    Tf(s, [{
        key: "isRunning",
        get: function() {
            return this.C
        },
        set: function(i) {
            this.C = i
        }
    }, {
        key: "hasOnce",
        get: function() {
            return this.store.once.length > 0
        }
    }, {
        key: "hasSelf",
        get: function() {
            return this.store.all.some(function(i) {
                return i.name === "self"
            })
        }
    }, {
        key: "shouldWait",
        get: function() {
            return this.store.all.some(function(i) {
                return i.to && !i.to.route || i.sync
            })
        }
    }]),
    s
}()
  , S_ = function() {
    function s(e) {
        var i = this;
        this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"],
        this.byNamespace = new Map,
        e.length !== 0 && (e.forEach(function(t) {
            i.byNamespace.set(t.namespace, t)
        }),
        this.names.forEach(function(t) {
            an[t](i._(t))
        }))
    }
    return s.prototype._ = function(e) {
        var i = this;
        return function(t) {
            var r = e.match(/enter/i) ? t.next : t.current
              , n = i.byNamespace.get(r.namespace);
            return n && n[e] ? wo(n[e], n)(t) : Promise.resolve()
        }
    }
    ,
    s
}();
Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
Element.prototype.closest || (Element.prototype.closest = function(s) {
    var e = this;
    do {
        if (e.matches(s))
            return e;
        e = e.parentElement || e.parentNode
    } while (e !== null && e.nodeType === 1);
    return null
}
);
var k_ = {
    container: null,
    html: "",
    namespace: "",
    url: {
        hash: "",
        href: "",
        path: "",
        port: null,
        query: {}
    }
}
  , Am = new (function() {
    function s() {
        this.version = "2.10.3",
        this.schemaPage = k_,
        this.Logger = $n,
        this.logger = new $n("@barba/core"),
        this.plugins = [],
        this.timeout = void 0,
        this.cacheIgnore = void 0,
        this.cacheFirstPage = void 0,
        this.prefetchIgnore = void 0,
        this.preventRunning = void 0,
        this.hooks = an,
        this.cache = void 0,
        this.headers = void 0,
        this.prevent = void 0,
        this.transitions = void 0,
        this.views = void 0,
        this.dom = qn,
        this.helpers = a_,
        this.history = $d,
        this.request = f_,
        this.url = l_,
        this.D = void 0,
        this.B = void 0,
        this.q = void 0,
        this.F = void 0
    }
    var e = s.prototype;
    return e.use = function(i, t) {
        var r = this.plugins;
        r.indexOf(i) > -1 ? this.logger.warn("Plugin [" + i.name + "] already installed.") : typeof i.install == "function" ? (i.install(this, t),
        r.push(i)) : this.logger.warn("Plugin [" + i.name + '] has no "install" method.')
    }
    ,
    e.init = function(i) {
        var t = i === void 0 ? {} : i
          , r = t.transitions
          , n = r === void 0 ? [] : r
          , u = t.views
          , l = u === void 0 ? [] : u
          , c = t.schema
          , p = c === void 0 ? Rr : c
          , _ = t.requestError
          , x = t.timeout
          , D = x === void 0 ? 2e3 : x
          , h = t.cacheIgnore
          , b = h !== void 0 && h
          , v = t.cacheFirstPage
          , E = v !== void 0 && v
          , C = t.prefetchIgnore
          , L = C !== void 0 && C
          , A = t.preventRunning
          , P = A !== void 0 && A
          , M = t.prevent
          , z = M === void 0 ? null : M
          , f = t.debug
          , q = t.logLevel;
        if ($n.setLevel((f !== void 0 && f) === !0 ? "debug" : q === void 0 ? "off" : q),
        this.logger.info(this.version),
        Object.keys(p).forEach(function(ee) {
            Rr[ee] && (Rr[ee] = p[ee])
        }),
        this.B = _,
        this.timeout = D,
        this.cacheIgnore = b,
        this.cacheFirstPage = E,
        this.prefetchIgnore = L,
        this.preventRunning = P,
        this.q = this.dom.getWrapper(),
        !this.q)
            throw new Error("[@barba/core] No Barba wrapper found");
        this.I();
        var H = this.data.current;
        if (!H.container)
            throw new Error("[@barba/core] No Barba container found");
        if (this.cache = new h_(b),
        this.headers = new d_,
        this.prevent = new C_(L),
        this.transitions = new T_(n),
        this.views = new S_(l),
        z !== null) {
            if (typeof z != "function")
                throw new Error("[@barba/core] Prevent should be a function");
            this.prevent.add("preventCustom", z)
        }
        this.history.init(H.url.href, H.namespace),
        E && this.cache.set(H.url.href, Promise.resolve({
            html: H.html,
            url: H.url
        }), "init", "fulfilled"),
        this.U = this.U.bind(this),
        this.$ = this.$.bind(this),
        this.X = this.X.bind(this),
        this.G(),
        this.plugins.forEach(function(ee) {
            return ee.init()
        });
        var I = this.data;
        I.trigger = "barba",
        I.next = I.current,
        I.current = Pr({}, this.schemaPage),
        this.hooks.do("ready", I),
        this.once(I),
        this.I()
    }
    ,
    e.destroy = function() {
        this.I(),
        this.J(),
        this.history.clear(),
        this.hooks.clear(),
        this.plugins = []
    }
    ,
    e.force = function(i) {
        window.location.assign(i)
    }
    ,
    e.go = function(i, t, r) {
        var n;
        if (t === void 0 && (t = "barba"),
        this.F = null,
        this.transitions.isRunning)
            this.force(i);
        else if (!(n = t === "popstate" ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(i) && this.url.getQuery(this.history.current.url, !0) === this.url.getQuery(i, !0) : this.prevent.run("sameUrl", null, null, i)) || this.transitions.hasSelf)
            return t = this.history.change(this.cache.has(i) ? this.cache.get(i).target : i, t, r),
            r && (r.stopPropagation(),
            r.preventDefault()),
            this.page(i, t, r ?? void 0, n)
    }
    ,
    e.once = function(i) {
        try {
            var t = this;
            return Promise.resolve(t.hooks.do("beforeEnter", i)).then(function() {
                function r() {
                    return Promise.resolve(t.hooks.do("afterEnter", i)).then(function() {})
                }
                var n = function() {
                    if (t.transitions.hasOnce) {
                        var u = t.transitions.get(i, {
                            once: !0
                        });
                        return Promise.resolve(t.transitions.doOnce({
                            transition: u,
                            data: i
                        })).then(function() {})
                    }
                }();
                return n && n.then ? n.then(r) : r()
            })
        } catch (r) {
            return Promise.reject(r)
        }
    }
    ,
    e.page = function(i, t, r, n) {
        try {
            var u, l = function() {
                var x = c.data;
                return Promise.resolve(c.hooks.do("page", x)).then(function() {
                    var D = function(h, b) {
                        try {
                            var v = (E = c.transitions.get(x, {
                                once: !1,
                                self: n
                            }),
                            Promise.resolve(c.transitions.doPage({
                                data: x,
                                page: u,
                                transition: E,
                                wrapper: c.q
                            })).then(function() {
                                c.I()
                            }))
                        } catch {
                            return b()
                        }
                        var E;
                        return v && v.then ? v.then(void 0, b) : v
                    }(0, function() {
                        $n.getLevel() === 0 && c.force(x.next.url.href)
                    });
                    if (D && D.then)
                        return D.then(function() {})
                })
            }, c = this;
            if (c.data.next.url = Pr({
                href: i
            }, c.url.parse(i)),
            c.data.trigger = t,
            c.data.event = r,
            c.cache.has(i))
                u = c.cache.update(i, {
                    action: "click"
                }).request;
            else {
                var p = c.request(i, c.timeout, c.onRequestError.bind(c, t), c.cache, c.headers);
                p.then(function(x) {
                    x.url.href !== i && c.history.add(x.url.href, t, "replace")
                }),
                u = c.cache.set(i, p, "click", "pending").request
            }
            var _ = function() {
                if (c.transitions.shouldWait)
                    return Promise.resolve(Ku(u, c.data)).then(function() {})
            }();
            return Promise.resolve(_ && _.then ? _.then(l) : l())
        } catch (x) {
            return Promise.reject(x)
        }
    }
    ,
    e.onRequestError = function(i) {
        this.transitions.isRunning = !1;
        var t = [].slice.call(arguments, 1)
          , r = t[0]
          , n = t[1]
          , u = this.cache.getAction(r);
        return this.cache.delete(r),
        this.B && this.B(i, u, r, n) === !1 || u === "click" && this.force(r),
        !1
    }
    ,
    e.prefetch = function(i) {
        var t = this;
        i = this.url.getAbsoluteHref(i),
        this.cache.has(i) || this.cache.set(i, this.request(i, this.timeout, this.onRequestError.bind(this, "barba"), this.cache, this.headers).catch(function(r) {
            t.logger.error(r)
        }), "prefetch", "pending")
    }
    ,
    e.G = function() {
        this.prefetchIgnore !== !0 && (document.addEventListener("mouseover", this.U),
        document.addEventListener("touchstart", this.U)),
        document.addEventListener("click", this.$),
        window.addEventListener("popstate", this.X)
    }
    ,
    e.J = function() {
        this.prefetchIgnore !== !0 && (document.removeEventListener("mouseover", this.U),
        document.removeEventListener("touchstart", this.U)),
        document.removeEventListener("click", this.$),
        window.removeEventListener("popstate", this.X)
    }
    ,
    e.U = function(i) {
        var t = this
          , r = this.W(i);
        if (r) {
            var n = this.url.getAbsoluteHref(this.dom.getHref(r));
            this.prevent.checkHref(n) || this.cache.has(n) || this.cache.set(n, this.request(n, this.timeout, this.onRequestError.bind(this, r), this.cache, this.headers).catch(function(u) {
                t.logger.error(u)
            }), "enter", "pending")
        }
    }
    ,
    e.$ = function(i) {
        var t = this.W(i);
        if (t) {
            if (this.transitions.isRunning && this.preventRunning)
                return i.preventDefault(),
                void i.stopPropagation();
            this.F = i,
            this.go(this.dom.getHref(t), t, i)
        }
    }
    ,
    e.X = function(i) {
        this.go(this.url.getHref(), "popstate", i)
    }
    ,
    e.W = function(i) {
        for (var t = i.target; t && !this.dom.getHref(t); )
            t = t.parentNode;
        if (t && !this.prevent.checkLink(t, i, this.dom.getHref(t)))
            return t
    }
    ,
    e.I = function() {
        var i = this.url.getHref()
          , t = {
            container: this.dom.getContainer(),
            html: this.dom.getHtml(),
            namespace: this.dom.getNamespace(),
            url: Pr({
                href: i
            }, this.url.parse(i))
        };
        this.D = {
            current: t,
            event: void 0,
            next: Pr({}, this.schemaPage),
            trigger: void 0
        },
        this.hooks.do("reset", this.data)
    }
    ,
    Tf(s, [{
        key: "data",
        get: function() {
            return this.D
        }
    }, {
        key: "wrapper",
        get: function() {
            return this.q
        }
    }]),
    s
}());
/*!
 * matrix 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Yr, Qn, Sf, fa, ps, Nu, Ju, As, dr = "transform", Bl = dr + "Origin", Yd, kf = function(e) {
    var i = e.ownerDocument || e;
    for (!(dr in e.style) && ("msTransform"in e.style) && (dr = "msTransform",
    Bl = dr + "Origin"); i.parentNode && (i = i.parentNode); )
        ;
    if (Qn = window,
    Ju = new Jr,
    i) {
        Yr = i,
        Sf = i.documentElement,
        fa = i.body,
        As = Yr.createElementNS("http://www.w3.org/2000/svg", "g"),
        As.style.transform = "none";
        var t = i.createElement("div")
          , r = i.createElement("div")
          , n = i && (i.body || i.firstElementChild);
        n && n.appendChild && (n.appendChild(t),
        t.appendChild(r),
        t.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"),
        Yd = r.offsetParent !== t,
        n.removeChild(t))
    }
    return i
}, F_ = function(e) {
    for (var i, t; e && e !== fa; )
        t = e._gsap,
        t && t.uncache && t.get(e, "x"),
        t && !t.scaleX && !t.scaleY && t.renderTransform && (t.scaleX = t.scaleY = 1e-4,
        t.renderTransform(1, t),
        i ? i.push(t) : i = [t]),
        e = e.parentNode;
    return i
}, Vd = [], Ud = [], Ff = function() {
    return Qn.pageYOffset || Yr.scrollTop || Sf.scrollTop || fa.scrollTop || 0
}, Pf = function() {
    return Qn.pageXOffset || Yr.scrollLeft || Sf.scrollLeft || fa.scrollLeft || 0
}, Af = function(e) {
    return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
}, P_ = function s(e) {
    if (Qn.getComputedStyle(e).position === "fixed")
        return !0;
    if (e = e.parentNode,
    e && e.nodeType === 1)
        return s(e)
}, Va = function s(e, i) {
    if (e.parentNode && (Yr || kf(e))) {
        var t = Af(e)
          , r = t ? t.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml"
          , n = t ? i ? "rect" : "g" : "div"
          , u = i !== 2 ? 0 : 100
          , l = i === 3 ? 100 : 0
          , c = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;"
          , p = Yr.createElementNS ? Yr.createElementNS(r.replace(/^https/, "http"), n) : Yr.createElement(n);
        return i && (t ? (Nu || (Nu = s(e)),
        p.setAttribute("width", .01),
        p.setAttribute("height", .01),
        p.setAttribute("transform", "translate(" + u + "," + l + ")"),
        Nu.appendChild(p)) : (ps || (ps = s(e),
        ps.style.cssText = c),
        p.style.cssText = c + "width:0.1px;height:0.1px;top:" + l + "px;left:" + u + "px",
        ps.appendChild(p))),
        p
    }
    throw "Need document and parent."
}, A_ = function(e) {
    for (var i = new Jr, t = 0; t < e.numberOfItems; t++)
        i.multiply(e.getItem(t).matrix);
    return i
}, Gd = function(e) {
    var i = e.getCTM(), t;
    return i || (t = e.style[dr],
    e.style[dr] = "none",
    e.appendChild(As),
    i = As.getCTM(),
    e.removeChild(As),
    t ? e.style[dr] = t : e.style.removeProperty(dr.replace(/([A-Z])/g, "-$1").toLowerCase())),
    i || Ju.clone()
}, M_ = function(e, i) {
    var t = Af(e), r = e === t, n = t ? Vd : Ud, u = e.parentNode, l, c, p, _, x, D;
    if (e === Qn)
        return e;
    if (n.length || n.push(Va(e, 1), Va(e, 2), Va(e, 3)),
    l = t ? Nu : ps,
    t)
        r ? (p = Gd(e),
        _ = -p.e / p.a,
        x = -p.f / p.d,
        c = Ju) : e.getBBox ? (p = e.getBBox(),
        c = e.transform ? e.transform.baseVal : {},
        c = c.numberOfItems ? c.numberOfItems > 1 ? A_(c) : c.getItem(0).matrix : Ju,
        _ = c.a * p.x + c.c * p.y,
        x = c.b * p.x + c.d * p.y) : (c = new Jr,
        _ = x = 0),
        i && e.tagName.toLowerCase() === "g" && (_ = x = 0),
        (r ? t : u).appendChild(l),
        l.setAttribute("transform", "matrix(" + c.a + "," + c.b + "," + c.c + "," + c.d + "," + (c.e + _) + "," + (c.f + x) + ")");
    else {
        if (_ = x = 0,
        Yd)
            for (c = e.offsetParent,
            p = e; p && (p = p.parentNode) && p !== c && p.parentNode; )
                (Qn.getComputedStyle(p)[dr] + "").length > 4 && (_ = p.offsetLeft,
                x = p.offsetTop,
                p = 0);
        if (D = Qn.getComputedStyle(e),
        D.position !== "absolute" && D.position !== "fixed")
            for (c = e.offsetParent; u && u !== c; )
                _ += u.scrollLeft || 0,
                x += u.scrollTop || 0,
                u = u.parentNode;
        p = l.style,
        p.top = e.offsetTop - x + "px",
        p.left = e.offsetLeft - _ + "px",
        p[dr] = D[dr],
        p[Bl] = D[Bl],
        p.position = D.position === "fixed" ? "fixed" : "absolute",
        e.parentNode.appendChild(l)
    }
    return l
}, Ua = function(e, i, t, r, n, u, l) {
    return e.a = i,
    e.b = t,
    e.c = r,
    e.d = n,
    e.e = u,
    e.f = l,
    e
}, Jr = function() {
    function s(i, t, r, n, u, l) {
        i === void 0 && (i = 1),
        t === void 0 && (t = 0),
        r === void 0 && (r = 0),
        n === void 0 && (n = 1),
        u === void 0 && (u = 0),
        l === void 0 && (l = 0),
        Ua(this, i, t, r, n, u, l)
    }
    var e = s.prototype;
    return e.inverse = function() {
        var t = this.a
          , r = this.b
          , n = this.c
          , u = this.d
          , l = this.e
          , c = this.f
          , p = t * u - r * n || 1e-10;
        return Ua(this, u / p, -r / p, -n / p, t / p, (n * c - u * l) / p, -(t * c - r * l) / p)
    }
    ,
    e.multiply = function(t) {
        var r = this.a
          , n = this.b
          , u = this.c
          , l = this.d
          , c = this.e
          , p = this.f
          , _ = t.a
          , x = t.c
          , D = t.b
          , h = t.d
          , b = t.e
          , v = t.f;
        return Ua(this, _ * r + D * u, _ * n + D * l, x * r + h * u, x * n + h * l, c + b * r + v * u, p + b * n + v * l)
    }
    ,
    e.clone = function() {
        return new s(this.a,this.b,this.c,this.d,this.e,this.f)
    }
    ,
    e.equals = function(t) {
        var r = this.a
          , n = this.b
          , u = this.c
          , l = this.d
          , c = this.e
          , p = this.f;
        return r === t.a && n === t.b && u === t.c && l === t.d && c === t.e && p === t.f
    }
    ,
    e.apply = function(t, r) {
        r === void 0 && (r = {});
        var n = t.x
          , u = t.y
          , l = this.a
          , c = this.b
          , p = this.c
          , _ = this.d
          , x = this.e
          , D = this.f;
        return r.x = n * l + u * p + x || 0,
        r.y = n * c + u * _ + D || 0,
        r
    }
    ,
    s
}();
function si(s, e, i, t) {
    if (!s || !s.parentNode || (Yr || kf(s)).documentElement === s)
        return new Jr;
    var r = F_(s)
      , n = Af(s)
      , u = n ? Vd : Ud
      , l = M_(s, i)
      , c = u[0].getBoundingClientRect()
      , p = u[1].getBoundingClientRect()
      , _ = u[2].getBoundingClientRect()
      , x = l.parentNode
      , D = !t && P_(s)
      , h = new Jr((p.left - c.left) / 100,(p.top - c.top) / 100,(_.left - c.left) / 100,(_.top - c.top) / 100,c.left + (D ? 0 : Pf()),c.top + (D ? 0 : Ff()));
    if (x.removeChild(l),
    r)
        for (c = r.length; c--; )
            p = r[c],
            p.scaleX = p.scaleY = 0,
            p.renderTransform(1, p);
    return e ? h.inverse() : h
}
/*!
 * Flip 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var O_ = 1, Vo, gi, xt, Ms, hn, Vr, Il, qc = function(e, i) {
    return e.actions.forEach(function(t) {
        return t.vars[i] && t.vars[i](t)
    })
}, Hl = {}, jc = 180 / Math.PI, R_ = Math.PI / 180, Zu = {}, Xc = {}, ca = {}, Mf = function(e) {
    return typeof e == "string" ? e.split(" ").join("").split(",") : e
}, L_ = Mf("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"), ha = Mf("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"), Os = function(e) {
    return Vo(e)[0] || console.warn("Element not found:", e)
}, Co = function(e) {
    return Math.round(e * 1e4) / 1e4 || 0
}, Ga = function(e, i, t) {
    return e.forEach(function(r) {
        return r.classList[t](i)
    })
}, Wc = {
    zIndex: 1,
    kill: 1,
    simple: 1,
    spin: 1,
    clearProps: 1,
    targets: 1,
    toggleClass: 1,
    onComplete: 1,
    onUpdate: 1,
    onInterrupt: 1,
    onStart: 1,
    delay: 1,
    repeat: 1,
    repeatDelay: 1,
    yoyo: 1,
    scale: 1,
    fade: 1,
    absolute: 1,
    props: 1,
    onEnter: 1,
    onLeave: 1,
    custom: 1,
    paused: 1,
    nested: 1,
    prune: 1,
    absoluteOnLeave: 1
}, Qd = {
    zIndex: 1,
    simple: 1,
    clearProps: 1,
    scale: 1,
    absolute: 1,
    fitChild: 1,
    getVars: 1,
    props: 1
}, Kd = function(e) {
    return e.replace(/([A-Z])/g, "-$1").toLowerCase()
}, Eo = function(e, i) {
    var t = {}, r;
    for (r in e)
        i[r] || (t[r] = e[r]);
    return t
}, Of = {}, Jd = function(e) {
    var i = Of[e] = Mf(e);
    return ca[e] = i.concat(ha),
    i
}, N_ = function(e) {
    var i = e._gsap || gi.core.getCache(e);
    return i.gmCache === gi.ticker.frame ? i.gMatrix : (i.gmCache = gi.ticker.frame,
    i.gMatrix = si(e, !0, !1, !0))
}, B_ = function s(e, i, t) {
    t === void 0 && (t = 0);
    for (var r = e.parentNode, n = 1e3 * Math.pow(10, t) * (i ? -1 : 1), u = i ? -n * 900 : 0; e; )
        u += n,
        e = e.previousSibling;
    return r ? u + s(r, i, t + 1) : u
}, ea = function(e, i, t) {
    return e.forEach(function(r) {
        return r.d = B_(t ? r.element : r.t, i)
    }),
    e.sort(function(r, n) {
        return r.d - n.d
    }),
    e
}, Qs = function(e, i) {
    for (var t = e.element.style, r = e.css = e.css || [], n = i.length, u, l; n--; )
        u = i[n],
        l = t[u] || t.getPropertyValue(u),
        r.push(l ? u : Xc[u] || (Xc[u] = Kd(u)), l);
    return t
}, ta = function(e) {
    var i = e.css
      , t = e.element.style
      , r = 0;
    for (e.cache.uncache = 1; r < i.length; r += 2)
        i[r + 1] ? t[i[r]] = i[r + 1] : t.removeProperty(i[r]);
    !i[i.indexOf("transform") + 1] && t.translate && (t.removeProperty("translate"),
    t.removeProperty("scale"),
    t.removeProperty("rotate"))
}, Yc = function(e, i) {
    e.forEach(function(t) {
        return t.a.cache.uncache = 1
    }),
    i || e.finalStates.forEach(ta)
}, Qa = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","), Rf = function(e, i, t) {
    var r = e.element, n = e.width, u = e.height, l = e.uncache, c = e.getProp, p = r.style, _ = 4, x, D, h;
    if (typeof i != "object" && (i = e),
    xt && t !== 1)
        return xt._abs.push({
            t: r,
            b: e,
            a: e,
            sd: 0
        }),
        xt._final.push(function() {
            return (e.cache.uncache = 1) && ta(e)
        }),
        r;
    for (D = c("display") === "none",
    (!e.isVisible || D) && (D && (Qs(e, ["display"]).display = i.display),
    e.matrix = i.matrix,
    e.width = n = e.width || i.width,
    e.height = u = e.height || i.height),
    Qs(e, Qa),
    h = window.getComputedStyle(r); _--; )
        p[Qa[_]] = h[Qa[_]];
    if (p.gridArea = "1 / 1 / 1 / 1",
    p.transition = "none",
    p.position = "absolute",
    p.width = n + "px",
    p.height = u + "px",
    p.top || (p.top = "0px"),
    p.left || (p.left = "0px"),
    l)
        x = new io(r);
    else if (x = Eo(e, Zu),
    x.position = "absolute",
    e.simple) {
        var b = r.getBoundingClientRect();
        x.matrix = new Jr(1,0,0,1,b.left + Pf(),b.top + Ff())
    } else
        x.matrix = si(r, !1, !1, !0);
    return x = Lo(x, e, !0),
    e.x = Vr(x.x, .01),
    e.y = Vr(x.y, .01),
    r
}, Vc = function(e, i) {
    return i !== !0 && (i = Vo(i),
    e = e.filter(function(t) {
        if (i.indexOf((t.sd < 0 ? t.b : t.a).element) !== -1)
            return !0;
        t.t._gsap.renderTransform(1),
        t.b.isVisible && (t.t.style.width = t.b.width + "px",
        t.t.style.height = t.b.height + "px")
    })),
    e
}, Zd = function(e) {
    return ea(e, !0).forEach(function(i) {
        return (i.a.isVisible || i.b.isVisible) && Rf(i.sd < 0 ? i.b : i.a, i.b, 1)
    })
}, I_ = function(e, i) {
    return i && e.idLookup[zl(i).id] || e.elementStates[0]
}, zl = function(e, i, t, r) {
    return e instanceof io ? e : e instanceof pr ? I_(e, r) : new io(typeof e == "string" ? Os(e) || console.warn(e + " not found") : e,i,t)
}, H_ = function(e, i) {
    for (var t = gi.getProperty(e.element, null, "native"), r = e.props = {}, n = i.length; n--; )
        r[i[n]] = (t(i[n]) + "").trim();
    return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0),
    e
}, ep = function(e, i) {
    var t = e.style || e, r;
    for (r in i)
        t[r] = i[r]
}, z_ = function(e) {
    var i = e.getAttribute("data-flip-id");
    return i || e.setAttribute("data-flip-id", i = "auto-" + O_++),
    i
}, tp = function(e) {
    return e.map(function(i) {
        return i.element
    })
}, Uc = function(e, i, t) {
    return e && i.length && t.add(e(tp(i), t, new pr(i,0,!0)), 0)
}, Lo = function(e, i, t, r, n, u) {
    var l = e.element, c = e.cache, p = e.parent, _ = e.x, x = e.y, D = i.width, h = i.height, b = i.scaleX, v = i.scaleY, E = i.rotation, C = i.bounds, L = u && Il && Il(l, "transform,width,height"), A = e, P = i.matrix, M = P.e, z = P.f, f = e.bounds.width !== C.width || e.bounds.height !== C.height || e.scaleX !== b || e.scaleY !== v || e.rotation !== E, q = !f && e.simple && i.simple && !n, H, I, ee, K, G, ne, se;
    return q || !p ? (b = v = 1,
    E = H = 0) : (G = N_(p),
    ne = G.clone().multiply(i.ctm ? i.matrix.clone().multiply(i.ctm) : i.matrix),
    E = Co(Math.atan2(ne.b, ne.a) * jc),
    H = Co(Math.atan2(ne.c, ne.d) * jc + E) % 360,
    b = Math.sqrt(Math.pow(ne.a, 2) + Math.pow(ne.b, 2)),
    v = Math.sqrt(Math.pow(ne.c, 2) + Math.pow(ne.d, 2)) * Math.cos(H * R_),
    n && (n = Vo(n)[0],
    K = gi.getProperty(n),
    se = n.getBBox && typeof n.getBBox == "function" && n.getBBox(),
    A = {
        scaleX: K("scaleX"),
        scaleY: K("scaleY"),
        width: se ? se.width : Math.ceil(parseFloat(K("width", "px"))),
        height: se ? se.height : parseFloat(K("height", "px"))
    }),
    c.rotation = E + "deg",
    c.skewX = H + "deg"),
    t ? (b *= D === A.width || !A.width ? 1 : D / A.width,
    v *= h === A.height || !A.height ? 1 : h / A.height,
    c.scaleX = b,
    c.scaleY = v) : (D = Vr(D * b / A.scaleX, 0),
    h = Vr(h * v / A.scaleY, 0),
    l.style.width = D + "px",
    l.style.height = h + "px"),
    r && ep(l, i.props),
    q || !p ? (_ += M - e.matrix.e,
    x += z - e.matrix.f) : f || p !== i.parent ? (c.renderTransform(1, c),
    ne = si(n || l, !1, !1, !0),
    I = G.apply({
        x: ne.e,
        y: ne.f
    }),
    ee = G.apply({
        x: M,
        y: z
    }),
    _ += ee.x - I.x,
    x += ee.y - I.y) : (G.e = G.f = 0,
    ee = G.apply({
        x: M - e.matrix.e,
        y: z - e.matrix.f
    }),
    _ += ee.x,
    x += ee.y),
    _ = Vr(_, .02),
    x = Vr(x, .02),
    u && !(u instanceof io) ? L && L.revert() : (c.x = _ + "px",
    c.y = x + "px",
    c.renderTransform(1, c)),
    u && (u.x = _,
    u.y = x,
    u.rotation = E,
    u.skewX = H,
    t ? (u.scaleX = b,
    u.scaleY = v) : (u.width = D,
    u.height = h)),
    u || c
}, Ka = function(e, i) {
    return e instanceof pr ? e : new pr(e,i)
}, ip = function(e, i, t) {
    var r = e.idLookup[t]
      , n = e.alt[t];
    return n.isVisible && (!(i.getElementState(n.element) || n).isVisible || !r.isVisible) ? n : r
}, Ja = [], Za = "width,height,overflowX,overflowY".split(","), bu, Gc = function(e) {
    if (e !== bu) {
        var i = hn.style
          , t = hn.clientWidth === window.outerWidth
          , r = hn.clientHeight === window.outerHeight
          , n = 4;
        if (e && (t || r)) {
            for (; n--; )
                Ja[n] = i[Za[n]];
            t && (i.width = hn.clientWidth + "px",
            i.overflowY = "hidden"),
            r && (i.height = hn.clientHeight + "px",
            i.overflowX = "hidden"),
            bu = e
        } else if (bu) {
            for (; n--; )
                Ja[n] ? i[Za[n]] = Ja[n] : i.removeProperty(Kd(Za[n]));
            bu = e
        }
    }
}, el = function(e, i, t, r) {
    e instanceof pr && i instanceof pr || console.warn("Not a valid state object."),
    t = t || {};
    var n = t, u = n.clearProps, l = n.onEnter, c = n.onLeave, p = n.absolute, _ = n.absoluteOnLeave, x = n.custom, D = n.delay, h = n.paused, b = n.repeat, v = n.repeatDelay, E = n.yoyo, C = n.toggleClass, L = n.nested, A = n.zIndex, P = n.scale, M = n.fade, z = n.stagger, f = n.spin, q = n.prune, H = ("props"in t ? t : e).props, I = Eo(t, Wc), ee = gi.timeline({
        delay: D,
        paused: h,
        repeat: b,
        repeatDelay: v,
        yoyo: E,
        data: "isFlip"
    }), K = I, G = [], ne = [], se = [], ae = [], oe = f === !0 ? 1 : f || 0, Ce = typeof f == "function" ? f : function() {
        return oe
    }
    , U = e.interrupted || i.interrupted, R = ee[r !== 1 ? "to" : "from"], _e, be, $e, ve, we, ke, Ne, Le, gt, Ye, Je, ut, De, Te;
    for (be in i.idLookup)
        Je = i.alt[be] ? ip(i, e, be) : i.idLookup[be],
        we = Je.element,
        Ye = e.idLookup[be],
        e.alt[be] && we === Ye.element && (e.alt[be].isVisible || !Je.isVisible) && (Ye = e.alt[be]),
        Ye ? (ke = {
            t: we,
            b: Ye,
            a: Je,
            sd: Ye.element === we ? 0 : Je.isVisible ? 1 : -1
        },
        se.push(ke),
        ke.sd && (ke.sd < 0 && (ke.b = Je,
        ke.a = Ye),
        U && Qs(ke.b, H ? ca[H] : ha),
        M && se.push(ke.swap = {
            t: Ye.element,
            b: ke.b,
            a: ke.a,
            sd: -ke.sd,
            swap: ke
        })),
        we._flip = Ye.element._flip = xt ? xt.timeline : ee) : Je.isVisible && (se.push({
            t: we,
            b: Eo(Je, {
                isVisible: 1
            }),
            a: Je,
            sd: 0,
            entering: 1
        }),
        we._flip = xt ? xt.timeline : ee);
    if (H && (Of[H] || Jd(H)).forEach(function($) {
        return I[$] = function(ze) {
            return se[ze].a.props[$]
        }
    }),
    se.finalStates = gt = [],
    ut = function() {
        for (ea(se),
        Gc(!0),
        ve = 0; ve < se.length; ve++)
            ke = se[ve],
            De = ke.a,
            Te = ke.b,
            q && !De.isDifferent(Te) && !ke.entering ? se.splice(ve--, 1) : (we = ke.t,
            L && !(ke.sd < 0) && ve && (De.matrix = si(we, !1, !1, !0)),
            Te.isVisible && De.isVisible ? (ke.sd < 0 ? (Ne = new io(we,H,e.simple),
            Lo(Ne, De, P, 0, 0, Ne),
            Ne.matrix = si(we, !1, !1, !0),
            Ne.css = ke.b.css,
            ke.a = De = Ne,
            M && (we.style.opacity = U ? Te.opacity : De.opacity),
            z && ae.push(we)) : ke.sd > 0 && M && (we.style.opacity = U ? De.opacity - Te.opacity : "0"),
            Lo(De, Te, P, H)) : Te.isVisible !== De.isVisible && (Te.isVisible ? De.isVisible || (Te.css = De.css,
            ne.push(Te),
            se.splice(ve--, 1),
            p && L && Lo(De, Te, P, H)) : (De.isVisible && G.push(De),
            se.splice(ve--, 1))),
            P || (we.style.maxWidth = Math.max(De.width, Te.width) + "px",
            we.style.maxHeight = Math.max(De.height, Te.height) + "px",
            we.style.minWidth = Math.min(De.width, Te.width) + "px",
            we.style.minHeight = Math.min(De.height, Te.height) + "px"),
            L && C && we.classList.add(C)),
            gt.push(De);
        var ze;
        if (C && (ze = gt.map(function(me) {
            return me.element
        }),
        L && ze.forEach(function(me) {
            return me.classList.remove(C)
        })),
        Gc(!1),
        P ? (I.scaleX = function(me) {
            return se[me].a.scaleX
        }
        ,
        I.scaleY = function(me) {
            return se[me].a.scaleY
        }
        ) : (I.width = function(me) {
            return se[me].a.width + "px"
        }
        ,
        I.height = function(me) {
            return se[me].a.height + "px"
        }
        ,
        I.autoRound = t.autoRound || !1),
        I.x = function(me) {
            return se[me].a.x + "px"
        }
        ,
        I.y = function(me) {
            return se[me].a.y + "px"
        }
        ,
        I.rotation = function(me) {
            return se[me].a.rotation + (f ? Ce(me, Le[me], Le) * 360 : 0)
        }
        ,
        I.skewX = function(me) {
            return se[me].a.skewX
        }
        ,
        Le = se.map(function(me) {
            return me.t
        }),
        (A || A === 0) && (I.modifiers = {
            zIndex: function() {
                return A
            }
        },
        I.zIndex = A,
        I.immediateRender = t.immediateRender !== !1),
        M && (I.opacity = function(me) {
            return se[me].sd < 0 ? 0 : se[me].sd > 0 ? se[me].a.opacity : "+=0"
        }
        ),
        ae.length) {
            z = gi.utils.distribute(z);
            var ti = Le.slice(ae.length);
            I.stagger = function(me, Ge) {
                return z(~ae.indexOf(Ge) ? Le.indexOf(se[me].swap.t) : me, Ge, ti)
            }
        }
        if (L_.forEach(function(me) {
            return t[me] && ee.eventCallback(me, t[me], t[me + "Params"])
        }),
        x && Le.length) {
            K = Eo(I, Wc),
            "scale"in x && (x.scaleX = x.scaleY = x.scale,
            delete x.scale);
            for (be in x)
                _e = Eo(x[be], Qd),
                _e[be] = I[be],
                !("duration"in _e) && "duration"in I && (_e.duration = I.duration),
                _e.stagger = I.stagger,
                R.call(ee, Le, _e, 0),
                delete K[be]
        }
        (Le.length || ne.length || G.length) && (C && ee.add(function() {
            return Ga(ze, C, ee._zTime < 0 ? "remove" : "add")
        }, 0) && !h && Ga(ze, C, "add"),
        Le.length && R.call(ee, Le, K, 0)),
        Uc(l, G, ee),
        Uc(c, ne, ee);
        var Ut = xt && xt.timeline;
        Ut && (Ut.add(ee, 0),
        xt._final.push(function() {
            return Yc(se, !u)
        })),
        $e = ee.duration(),
        ee.call(function() {
            var me = ee.time() >= $e;
            me && !Ut && Yc(se, !u),
            C && Ga(ze, C, me ? "remove" : "add")
        })
    }
    ,
    _ && (p = se.filter(function($) {
        return !$.sd && !$.a.isVisible && $.b.isVisible
    }).map(function($) {
        return $.a.element
    })),
    xt) {
        var Me;
        p && (Me = xt._abs).push.apply(Me, Vc(se, p)),
        xt._run.push(ut)
    } else
        p && Zd(Vc(se, p)),
        ut();
    var bt = xt ? xt.timeline : ee;
    return bt.revert = function() {
        return Lf(bt, 1, 1)
    }
    ,
    bt
}, $_ = function s(e) {
    e.vars.onInterrupt && e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []),
    e.getChildren(!0, !1, !0).forEach(s)
}, Lf = function(e, i, t) {
    if (e && e.progress() < 1 && (!e.paused() || t))
        return i && ($_(e),
        i < 2 && e.progress(1),
        e.kill()),
        !0
}, wu = function(e) {
    for (var i = e.idLookup = {}, t = e.alt = {}, r = e.elementStates, n = r.length, u; n--; )
        u = r[n],
        i[u.id] ? t[u.id] = u : i[u.id] = u
}, pr = function() {
    function s(i, t, r) {
        if (this.props = t && t.props,
        this.simple = !!(t && t.simple),
        r)
            this.targets = tp(i),
            this.elementStates = i,
            wu(this);
        else {
            this.targets = Vo(i);
            var n = t && (t.kill === !1 || t.batch && !t.kill);
            xt && !n && xt._kill.push(this),
            this.update(n || !!xt)
        }
    }
    var e = s.prototype;
    return e.update = function(t) {
        var r = this;
        return this.elementStates = this.targets.map(function(n) {
            return new io(n,r.props,r.simple)
        }),
        wu(this),
        this.interrupt(t),
        this.recordInlineStyles(),
        this
    }
    ,
    e.clear = function() {
        return this.targets.length = this.elementStates.length = 0,
        wu(this),
        this
    }
    ,
    e.fit = function(t, r, n) {
        for (var u = ea(this.elementStates.slice(0), !1, !0), l = (t || this).idLookup, c = 0, p, _; c < u.length; c++)
            p = u[c],
            n && (p.matrix = si(p.element, !1, !1, !0)),
            _ = l[p.id],
            _ && Lo(p, _, r, !0, 0, p),
            p.matrix = si(p.element, !1, !1, !0);
        return this
    }
    ,
    e.getProperty = function(t, r) {
        var n = this.getElementState(t) || Zu;
        return (r in n ? n : n.props || Zu)[r]
    }
    ,
    e.add = function(t) {
        for (var r = t.targets.length, n = this.idLookup, u = this.alt, l, c, p; r--; )
            c = t.elementStates[r],
            p = n[c.id],
            p && (c.element === p.element || u[c.id] && u[c.id].element === c.element) ? (l = this.elementStates.indexOf(c.element === p.element ? p : u[c.id]),
            this.targets.splice(l, 1, t.targets[r]),
            this.elementStates.splice(l, 1, c)) : (this.targets.push(t.targets[r]),
            this.elementStates.push(c));
        return t.interrupted && (this.interrupted = !0),
        t.simple || (this.simple = !1),
        wu(this),
        this
    }
    ,
    e.compare = function(t) {
        var r = t.idLookup, n = this.idLookup, u = [], l = [], c = [], p = [], _ = [], x = t.alt, D = this.alt, h = function(q, H, I) {
            return (q.isVisible !== H.isVisible ? q.isVisible ? c : p : q.isVisible ? l : u).push(I) && _.push(I)
        }, b = function(q, H, I) {
            return _.indexOf(I) < 0 && h(q, H, I)
        }, v, E, C, L, A, P, M, z;
        for (C in r)
            A = x[C],
            P = D[C],
            v = A ? ip(t, this, C) : r[C],
            L = v.element,
            E = n[C],
            P ? (z = E.isVisible || !P.isVisible && L === E.element ? E : P,
            M = A && !v.isVisible && !A.isVisible && z.element === A.element ? A : v,
            M.isVisible && z.isVisible && M.element !== z.element ? ((M.isDifferent(z) ? l : u).push(M.element, z.element),
            _.push(M.element, z.element)) : h(M, z, M.element),
            A && M.element === A.element && (A = r[C]),
            b(M.element !== E.element && A ? A : M, E, E.element),
            b(A && A.element === P.element ? A : M, P, P.element),
            A && b(A, P.element === A.element ? P : E, A.element)) : (E ? E.isDifferent(v) ? h(v, E, L) : u.push(L) : c.push(L),
            A && b(A, E, A.element));
        for (C in n)
            r[C] || (p.push(n[C].element),
            D[C] && p.push(D[C].element));
        return {
            changed: l,
            unchanged: u,
            enter: c,
            leave: p
        }
    }
    ,
    e.recordInlineStyles = function() {
        for (var t = ca[this.props] || ha, r = this.elementStates.length; r--; )
            Qs(this.elementStates[r], t)
    }
    ,
    e.interrupt = function(t) {
        var r = this
          , n = [];
        this.targets.forEach(function(u) {
            var l = u._flip
              , c = Lf(l, t ? 0 : 1);
            t && c && n.indexOf(l) < 0 && l.add(function() {
                return r.updateVisibility()
            }),
            c && n.push(l)
        }),
        !t && n.length && this.updateVisibility(),
        this.interrupted || (this.interrupted = !!n.length)
    }
    ,
    e.updateVisibility = function() {
        this.elementStates.forEach(function(t) {
            var r = t.element.getBoundingClientRect();
            t.isVisible = !!(r.width || r.height || r.top || r.left),
            t.uncache = 1
        })
    }
    ,
    e.getElementState = function(t) {
        return this.elementStates[this.targets.indexOf(Os(t))]
    }
    ,
    e.makeAbsolute = function() {
        return ea(this.elementStates.slice(0), !0, !0).map(Rf)
    }
    ,
    s
}(), io = function() {
    function s(i, t, r) {
        this.element = i,
        this.update(t, r)
    }
    var e = s.prototype;
    return e.isDifferent = function(t) {
        var r = this.bounds
          , n = t.bounds;
        return r.top !== n.top || r.left !== n.left || r.width !== n.width || r.height !== n.height || !this.matrix.equals(t.matrix) || this.opacity !== t.opacity || this.props && t.props && JSON.stringify(this.props) !== JSON.stringify(t.props)
    }
    ,
    e.update = function(t, r) {
        var n = this
          , u = n.element
          , l = gi.getProperty(u)
          , c = gi.core.getCache(u)
          , p = u.getBoundingClientRect()
          , _ = u.getBBox && typeof u.getBBox == "function" && u.nodeName.toLowerCase() !== "svg" && u.getBBox()
          , x = r ? new Jr(1,0,0,1,p.left + Pf(),p.top + Ff()) : si(u, !1, !1, !0);
        n.getProp = l,
        n.element = u,
        n.id = z_(u),
        n.matrix = x,
        n.cache = c,
        n.bounds = p,
        n.isVisible = !!(p.width || p.height || p.left || p.top),
        n.display = l("display"),
        n.position = l("position"),
        n.parent = u.parentNode,
        n.x = l("x"),
        n.y = l("y"),
        n.scaleX = c.scaleX,
        n.scaleY = c.scaleY,
        n.rotation = l("rotation"),
        n.skewX = l("skewX"),
        n.opacity = l("opacity"),
        n.width = _ ? _.width : Vr(l("width", "px"), .04),
        n.height = _ ? _.height : Vr(l("height", "px"), .04),
        t && H_(n, Of[t] || Jd(t)),
        n.ctm = u.getCTM && u.nodeName.toLowerCase() === "svg" && Gd(u).inverse(),
        n.simple = r || Co(x.a) === 1 && !Co(x.b) && !Co(x.c) && Co(x.d) === 1,
        n.uncache = 0
    }
    ,
    s
}(), q_ = function() {
    function s(i, t) {
        this.vars = i,
        this.batch = t,
        this.states = [],
        this.timeline = t.timeline
    }
    var e = s.prototype;
    return e.getStateById = function(t) {
        for (var r = this.states.length; r--; )
            if (this.states[r].idLookup[t])
                return this.states[r]
    }
    ,
    e.kill = function() {
        this.batch.remove(this)
    }
    ,
    s
}(), j_ = function() {
    function s(i) {
        this.id = i,
        this.actions = [],
        this._kill = [],
        this._final = [],
        this._abs = [],
        this._run = [],
        this.data = {},
        this.state = new pr,
        this.timeline = gi.timeline()
    }
    var e = s.prototype;
    return e.add = function(t) {
        var r = this.actions.filter(function(n) {
            return n.vars === t
        });
        return r.length ? r[0] : (r = new q_(typeof t == "function" ? {
            animate: t
        } : t,this),
        this.actions.push(r),
        r)
    }
    ,
    e.remove = function(t) {
        var r = this.actions.indexOf(t);
        return r >= 0 && this.actions.splice(r, 1),
        this
    }
    ,
    e.getState = function(t) {
        var r = this
          , n = xt
          , u = Ms;
        return xt = this,
        this.state.clear(),
        this._kill.length = 0,
        this.actions.forEach(function(l) {
            l.vars.getState && (l.states.length = 0,
            Ms = l,
            l.state = l.vars.getState(l)),
            t && l.states.forEach(function(c) {
                return r.state.add(c)
            })
        }),
        Ms = u,
        xt = n,
        this.killConflicts(),
        this
    }
    ,
    e.animate = function() {
        var t = this, r = xt, n = this.timeline, u = this.actions.length, l, c;
        for (xt = this,
        n.clear(),
        this._abs.length = this._final.length = this._run.length = 0,
        this.actions.forEach(function(p) {
            p.vars.animate && p.vars.animate(p);
            var _ = p.vars.onEnter, x = p.vars.onLeave, D = p.targets, h, b;
            D && D.length && (_ || x) && (h = new pr,
            p.states.forEach(function(v) {
                return h.add(v)
            }),
            b = h.compare(Nf.getState(D)),
            b.enter.length && _ && _(b.enter),
            b.leave.length && x && x(b.leave))
        }),
        Zd(this._abs),
        this._run.forEach(function(p) {
            return p()
        }),
        c = n.duration(),
        l = this._final.slice(0),
        n.add(function() {
            c <= n.time() && (l.forEach(function(p) {
                return p()
            }),
            qc(t, "onComplete"))
        }),
        xt = r; u--; )
            this.actions[u].vars.once && this.actions[u].kill();
        return qc(this, "onStart"),
        n.restart(),
        this
    }
    ,
    e.loadState = function(t) {
        t || (t = function() {
            return 0
        }
        );
        var r = [];
        return this.actions.forEach(function(n) {
            if (n.vars.loadState) {
                var u, l = function c(p) {
                    p && (n.targets = p),
                    u = r.indexOf(c),
                    ~u && (r.splice(u, 1),
                    r.length || t())
                };
                r.push(l),
                n.vars.loadState(l)
            }
        }),
        r.length || t(),
        this
    }
    ,
    e.setState = function() {
        return this.actions.forEach(function(t) {
            return t.targets = t.vars.setState && t.vars.setState(t)
        }),
        this
    }
    ,
    e.killConflicts = function(t) {
        return this.state.interrupt(t),
        this._kill.forEach(function(r) {
            return r.interrupt(t)
        }),
        this
    }
    ,
    e.run = function(t, r) {
        var n = this;
        return this !== xt && (t || this.getState(r),
        this.loadState(function() {
            n._killed || (n.setState(),
            n.animate())
        })),
        this
    }
    ,
    e.clear = function(t) {
        this.state.clear(),
        t || (this.actions.length = 0)
    }
    ,
    e.getStateById = function(t) {
        for (var r = this.actions.length, n; r--; )
            if (n = this.actions[r].getStateById(t),
            n)
                return n;
        return this.state.idLookup[t] && this.state
    }
    ,
    e.kill = function() {
        this._killed = 1,
        this.clear(),
        delete Hl[this.id]
    }
    ,
    s
}(), Nf = function() {
    function s() {}
    return s.getState = function(i, t) {
        var r = Ka(i, t);
        return Ms && Ms.states.push(r),
        t && t.batch && s.batch(t.batch).state.add(r),
        r
    }
    ,
    s.from = function(i, t) {
        return t = t || {},
        "clearProps"in t || (t.clearProps = !0),
        el(i, Ka(t.targets || i.targets, {
            props: t.props || i.props,
            simple: t.simple,
            kill: !!t.kill
        }), t, -1)
    }
    ,
    s.to = function(i, t) {
        return el(i, Ka(t.targets || i.targets, {
            props: t.props || i.props,
            simple: t.simple,
            kill: !!t.kill
        }), t, 1)
    }
    ,
    s.fromTo = function(i, t, r) {
        return el(i, t, r)
    }
    ,
    s.fit = function(i, t, r) {
        var n = r ? Eo(r, Qd) : {}
          , u = r || n
          , l = u.absolute
          , c = u.scale
          , p = u.getVars
          , _ = u.props
          , x = u.runBackwards
          , D = u.onComplete
          , h = u.simple
          , b = r && r.fitChild && Os(r.fitChild)
          , v = zl(t, _, h, i)
          , E = zl(i, 0, h, v)
          , C = _ ? ca[_] : ha
          , L = gi.context();
        return _ && ep(n, v.props),
        Qs(E, C),
        x && ("immediateRender"in n || (n.immediateRender = !0),
        n.onComplete = function() {
            ta(E),
            D && D.apply(this, arguments)
        }
        ),
        l && Rf(E, v),
        n = Lo(E, v, c || b, _, b, n.duration || p ? n : 0),
        typeof r == "object" && "zIndex"in r && (n.zIndex = r.zIndex),
        L && !p && L.add(function() {
            return function() {
                return ta(E)
            }
        }),
        p ? n : n.duration ? gi.to(E.element, n) : null
    }
    ,
    s.makeAbsolute = function(i, t) {
        return (i instanceof pr ? i : new pr(i,t)).makeAbsolute()
    }
    ,
    s.batch = function(i) {
        return i || (i = "default"),
        Hl[i] || (Hl[i] = new j_(i))
    }
    ,
    s.killFlipsOf = function(i, t) {
        (i instanceof pr ? i.targets : Vo(i)).forEach(function(r) {
            return r && Lf(r._flip, t !== !1 ? 1 : 2)
        })
    }
    ,
    s.isFlipping = function(i) {
        var t = s.getByTarget(i);
        return !!t && t.isActive()
    }
    ,
    s.getByTarget = function(i) {
        return (Os(i) || Zu)._flip
    }
    ,
    s.getElementState = function(i, t) {
        return new io(Os(i),t)
    }
    ,
    s.convertCoordinates = function(i, t, r) {
        var n = si(t, !0, !0).multiply(si(i));
        return r ? n.apply(r) : n
    }
    ,
    s.register = function(i) {
        if (hn = typeof document < "u" && document.body,
        hn) {
            gi = i,
            kf(hn),
            Vo = gi.utils.toArray,
            Il = gi.core.getStyleSaver;
            var t = gi.utils.snap(.1);
            Vr = function(n, u) {
                return t(parseFloat(n) + u)
            }
        }
    }
    ,
    s
}();
Nf.version = "3.12.7";
typeof window < "u" && window.gsap && window.gsap.registerPlugin(Nf);
function Qc(s) {
    if (s === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s
}
function X_(s, e) {
    s.prototype = Object.create(e.prototype),
    s.prototype.constructor = s,
    s.__proto__ = e
}
var it, mt, Vi, gr, Ur, tl, jr, $l, gs, yn, rp, ql, Ks, Bf, _s, cr, ms, Bu, np, jl, ia = 0, op = function() {
    return typeof window < "u"
}, sp = function() {
    return it || op() && (it = window.gsap) && it.registerPlugin && it
}, ln = function(e) {
    return typeof e == "function"
}, Rs = function(e) {
    return typeof e == "object"
}, hr = function(e) {
    return typeof e > "u"
}, Iu = function() {
    return !1
}, Ls = "transform", Xl = "transformOrigin", on = function(e) {
    return Math.round(e * 1e4) / 1e4
}, os = Array.isArray, Cu = function(e, i) {
    var t = Vi.createElementNS ? Vi.createElementNS("http://www.w3.org/1999/xhtml".replace(/^https/, "http"), e) : Vi.createElement(e);
    return t.style ? t : Vi.createElement(e)
}, Kc = 180 / Math.PI, ho = 1e20, W_ = new Jr, sn = Date.now || function() {
    return new Date().getTime()
}
, Kn = [], No = {}, Y_ = 0, V_ = /^(?:a|input|textarea|button|select)$/i, Jc = 0, po = {}, zr = {}, up = function(e, i) {
    var t = {}, r;
    for (r in e)
        t[r] = i ? e[r] * i : e[r];
    return t
}, U_ = function(e, i) {
    for (var t in i)
        t in e || (e[t] = i[t]);
    return e
}, Zc = function s(e, i) {
    for (var t = e.length, r; t--; )
        i ? e[t].style.touchAction = i : e[t].style.removeProperty("touch-action"),
        r = e[t].children,
        r && r.length && s(r, i)
}, ap = function() {
    return Kn.forEach(function(e) {
        return e()
    })
}, G_ = function(e) {
    Kn.push(e),
    Kn.length === 1 && it.ticker.add(ap)
}, eh = function() {
    return !Kn.length && it.ticker.remove(ap)
}, th = function(e) {
    for (var i = Kn.length; i--; )
        Kn[i] === e && Kn.splice(i, 1);
    it.to(eh, {
        overwrite: !0,
        delay: 15,
        duration: 0,
        onComplete: eh,
        data: "_draggable"
    })
}, Q_ = function(e, i) {
    for (var t in i)
        t in e || (e[t] = i[t]);
    return e
}, Wt = function(e, i, t, r) {
    if (e.addEventListener) {
        var n = Ks[i];
        r = r || (rp ? {
            passive: !1
        } : null),
        e.addEventListener(n || i, t, r),
        n && i !== n && e.addEventListener(i, t, r)
    }
}, Bt = function(e, i, t, r) {
    if (e.removeEventListener) {
        var n = Ks[i];
        e.removeEventListener(n || i, t, r),
        n && i !== n && e.removeEventListener(i, t, r)
    }
}, tr = function(e) {
    e.preventDefault && e.preventDefault(),
    e.preventManipulation && e.preventManipulation()
}, K_ = function(e, i) {
    for (var t = e.length; t--; )
        if (e[t].identifier === i)
            return !0
}, J_ = function s(e) {
    Bf = e.touches && ia < e.touches.length,
    Bt(e.target, "touchend", s)
}, ih = function(e) {
    Bf = e.touches && ia < e.touches.length,
    Wt(e.target, "touchend", J_)
}, Bo = function(e) {
    return mt.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0
}, Io = function(e) {
    return mt.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0
}, rh = function s(e, i) {
    Wt(e, "scroll", i),
    Uo(e.parentNode) || s(e.parentNode, i)
}, nh = function s(e, i) {
    Bt(e, "scroll", i),
    Uo(e.parentNode) || s(e.parentNode, i)
}, Uo = function(e) {
    return !e || e === gr || e.nodeType === 9 || e === Vi.body || e === mt || !e.nodeType || !e.parentNode
}, oh = function(e, i) {
    var t = i === "x" ? "Width" : "Height"
      , r = "scroll" + t
      , n = "client" + t;
    return Math.max(0, Uo(e) ? Math.max(gr[r], Ur[r]) - (mt["inner" + t] || gr[n] || Ur[n]) : e[r] - e[n])
}, il = function s(e, i) {
    var t = oh(e, "x")
      , r = oh(e, "y");
    Uo(e) ? e = zr : s(e.parentNode, i),
    e._gsMaxScrollX = t,
    e._gsMaxScrollY = r,
    i || (e._gsScrollX = e.scrollLeft || 0,
    e._gsScrollY = e.scrollTop || 0)
}, rl = function(e, i, t) {
    var r = e.style;
    r && (hr(r[i]) && (i = gs(i, e) || i),
    t == null ? r.removeProperty && r.removeProperty(i.replace(/([A-Z])/g, "-$1").toLowerCase()) : r[i] = t)
}, Js = function(e) {
    return mt.getComputedStyle(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e)
}, Ln = {}, go = function(e) {
    if (e === mt)
        return Ln.left = Ln.top = 0,
        Ln.width = Ln.right = gr.clientWidth || e.innerWidth || Ur.clientWidth || 0,
        Ln.height = Ln.bottom = (e.innerHeight || 0) - 20 < gr.clientHeight ? gr.clientHeight : e.innerHeight || Ur.clientHeight || 0,
        Ln;
    var i = e.ownerDocument || Vi
      , t = hr(e.pageX) ? !e.nodeType && !hr(e.left) && !hr(e.top) ? e : yn(e)[0].getBoundingClientRect() : {
        left: e.pageX - Io(i),
        top: e.pageY - Bo(i),
        right: e.pageX - Io(i) + 1,
        bottom: e.pageY - Bo(i) + 1
    };
    return hr(t.right) && !hr(t.width) ? (t.right = t.left + t.width,
    t.bottom = t.top + t.height) : hr(t.width) && (t = {
        width: t.right - t.left,
        height: t.bottom - t.top,
        right: t.right,
        left: t.left,
        bottom: t.bottom,
        top: t.top
    }),
    t
}, Mt = function(e, i, t) {
    var r = e.vars, n = r[t], u = e._listeners[i], l;
    return ln(n) && (l = n.apply(r.callbackScope || e, r[t + "Params"] || [e.pointerEvent])),
    u && e.dispatchEvent(i) === !1 && (l = !1),
    l
}, sh = function(e, i) {
    var t = yn(e)[0], r, n, u;
    return !t.nodeType && t !== mt ? hr(e.left) ? (n = e.min || e.minX || e.minRotation || 0,
    r = e.min || e.minY || 0,
    {
        left: n,
        top: r,
        width: (e.max || e.maxX || e.maxRotation || 0) - n,
        height: (e.max || e.maxY || 0) - r
    }) : (u = {
        x: 0,
        y: 0
    },
    {
        left: e.left - u.x,
        top: e.top - u.y,
        width: e.width,
        height: e.height
    }) : Z_(t, i)
}, ir = {}, Z_ = function(e, i) {
    i = yn(i)[0];
    var t = e.getBBox && e.ownerSVGElement, r = e.ownerDocument || Vi, n, u, l, c, p, _, x, D, h, b, v, E, C;
    if (e === mt)
        l = Bo(r),
        n = Io(r),
        u = n + (r.documentElement.clientWidth || e.innerWidth || r.body.clientWidth || 0),
        c = l + ((e.innerHeight || 0) - 20 < r.documentElement.clientHeight ? r.documentElement.clientHeight : e.innerHeight || r.body.clientHeight || 0);
    else {
        if (i === mt || hr(i))
            return e.getBoundingClientRect();
        n = l = 0,
        t ? (b = e.getBBox(),
        v = b.width,
        E = b.height) : (e.viewBox && (b = e.viewBox.baseVal) && (n = b.x || 0,
        l = b.y || 0,
        v = b.width,
        E = b.height),
        v || (C = Js(e),
        b = C.boxSizing === "border-box",
        v = (parseFloat(C.width) || e.clientWidth || 0) + (b ? 0 : parseFloat(C.borderLeftWidth) + parseFloat(C.borderRightWidth)),
        E = (parseFloat(C.height) || e.clientHeight || 0) + (b ? 0 : parseFloat(C.borderTopWidth) + parseFloat(C.borderBottomWidth)))),
        u = v,
        c = E
    }
    return e === i ? {
        left: n,
        top: l,
        width: u - n,
        height: c - l
    } : (p = si(i, !0).multiply(si(e)),
    _ = p.apply({
        x: n,
        y: l
    }),
    x = p.apply({
        x: u,
        y: l
    }),
    D = p.apply({
        x: u,
        y: c
    }),
    h = p.apply({
        x: n,
        y: c
    }),
    n = Math.min(_.x, x.x, D.x, h.x),
    l = Math.min(_.y, x.y, D.y, h.y),
    {
        left: n,
        top: l,
        width: Math.max(_.x, x.x, D.x, h.x) - n,
        height: Math.max(_.y, x.y, D.y, h.y) - l
    })
}, nl = function(e, i, t, r, n, u) {
    var l = {}, c, p, _;
    if (i)
        if (n !== 1 && i instanceof Array) {
            if (l.end = c = [],
            _ = i.length,
            Rs(i[0]))
                for (p = 0; p < _; p++)
                    c[p] = up(i[p], n);
            else
                for (p = 0; p < _; p++)
                    c[p] = i[p] * n;
            t += 1.1,
            r -= 1.1
        } else
            ln(i) ? l.end = function(x) {
                var D = i.call(e, x), h, b;
                if (n !== 1)
                    if (Rs(D)) {
                        h = {};
                        for (b in D)
                            h[b] = D[b] * n;
                        D = h
                    } else
                        D *= n;
                return D
            }
            : l.end = i;
    return (t || t === 0) && (l.max = t),
    (r || r === 0) && (l.min = r),
    u && (l.velocity = 0),
    l
}, em = function s(e) {
    var i;
    return !e || !e.getAttribute || e === Ur ? !1 : (i = e.getAttribute("data-clickable")) === "true" || i !== "false" && (V_.test(e.nodeName + "") || e.getAttribute("contentEditable") === "true") ? !0 : s(e.parentNode)
}, Eu = function(e, i) {
    for (var t = e.length, r; t--; )
        r = e[t],
        r.ondragstart = r.onselectstart = i ? null : Iu,
        it.set(r, {
            lazy: !0,
            userSelect: i ? "text" : "none"
        })
}, tm = function s(e) {
    if (Js(e).position === "fixed")
        return !0;
    if (e = e.parentNode,
    e && e.nodeType === 1)
        return s(e)
}, lp, Wl, im = function(e, i) {
    e = it.utils.toArray(e)[0],
    i = i || {};
    var t = document.createElement("div"), r = t.style, n = e.firstChild, u = 0, l = 0, c = e.scrollTop, p = e.scrollLeft, _ = e.scrollWidth, x = e.scrollHeight, D = 0, h = 0, b = 0, v, E, C, L, A, P;
    lp && i.force3D !== !1 ? (A = "translate3d(",
    P = "px,0px)") : Ls && (A = "translate(",
    P = "px)"),
    this.scrollTop = function(M, z) {
        if (!arguments.length)
            return -this.top();
        this.top(-M, z)
    }
    ,
    this.scrollLeft = function(M, z) {
        if (!arguments.length)
            return -this.left();
        this.left(-M, z)
    }
    ,
    this.left = function(M, z) {
        if (!arguments.length)
            return -(e.scrollLeft + l);
        var f = e.scrollLeft - p
          , q = l;
        if ((f > 2 || f < -2) && !z) {
            p = e.scrollLeft,
            it.killTweensOf(this, {
                left: 1,
                scrollLeft: 1
            }),
            this.left(-p),
            i.onKill && i.onKill();
            return
        }
        M = -M,
        M < 0 ? (l = M - .5 | 0,
        M = 0) : M > h ? (l = M - h | 0,
        M = h) : l = 0,
        (l || q) && (this._skip || (r[Ls] = A + -l + "px," + -u + P),
        l + D >= 0 && (r.paddingRight = l + D + "px")),
        e.scrollLeft = M | 0,
        p = e.scrollLeft
    }
    ,
    this.top = function(M, z) {
        if (!arguments.length)
            return -(e.scrollTop + u);
        var f = e.scrollTop - c
          , q = u;
        if ((f > 2 || f < -2) && !z) {
            c = e.scrollTop,
            it.killTweensOf(this, {
                top: 1,
                scrollTop: 1
            }),
            this.top(-c),
            i.onKill && i.onKill();
            return
        }
        M = -M,
        M < 0 ? (u = M - .5 | 0,
        M = 0) : M > b ? (u = M - b | 0,
        M = b) : u = 0,
        (u || q) && (this._skip || (r[Ls] = A + -l + "px," + -u + P)),
        e.scrollTop = M | 0,
        c = e.scrollTop
    }
    ,
    this.maxScrollTop = function() {
        return b
    }
    ,
    this.maxScrollLeft = function() {
        return h
    }
    ,
    this.disable = function() {
        for (n = t.firstChild; n; )
            L = n.nextSibling,
            e.appendChild(n),
            n = L;
        e === t.parentNode && e.removeChild(t)
    }
    ,
    this.enable = function() {
        if (n = e.firstChild,
        n !== t) {
            for (; n; )
                L = n.nextSibling,
                t.appendChild(n),
                n = L;
            e.appendChild(t),
            this.calibrate()
        }
    }
    ,
    this.calibrate = function(M) {
        var z = e.clientWidth === v, f, q, H;
        c = e.scrollTop,
        p = e.scrollLeft,
        !(z && e.clientHeight === E && t.offsetHeight === C && _ === e.scrollWidth && x === e.scrollHeight && !M) && ((u || l) && (q = this.left(),
        H = this.top(),
        this.left(-e.scrollLeft),
        this.top(-e.scrollTop)),
        f = Js(e),
        (!z || M) && (r.display = "block",
        r.width = "auto",
        r.paddingRight = "0px",
        D = Math.max(0, e.scrollWidth - e.clientWidth),
        D && (D += parseFloat(f.paddingLeft) + (Wl ? parseFloat(f.paddingRight) : 0))),
        r.display = "inline-block",
        r.position = "relative",
        r.overflow = "visible",
        r.verticalAlign = "top",
        r.boxSizing = "content-box",
        r.width = "100%",
        r.paddingRight = D + "px",
        Wl && (r.paddingBottom = f.paddingBottom),
        v = e.clientWidth,
        E = e.clientHeight,
        _ = e.scrollWidth,
        x = e.scrollHeight,
        h = e.scrollWidth - v,
        b = e.scrollHeight - E,
        C = t.offsetHeight,
        r.display = "block",
        (q || H) && (this.left(q),
        this.top(H)))
    }
    ,
    this.content = t,
    this.element = e,
    this._skip = !1,
    this.enable()
}, ol = function(e) {
    if (op() && document.body) {
        var i = window && window.navigator;
        mt = window,
        Vi = document,
        gr = Vi.documentElement,
        Ur = Vi.body,
        tl = Cu("div"),
        Bu = !!window.PointerEvent,
        jr = Cu("div"),
        jr.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",
        ms = jr.style.cursor === "grab" ? "grab" : "move",
        _s = i && i.userAgent.toLowerCase().indexOf("android") !== -1,
        ql = "ontouchstart"in gr && "orientation"in mt || i && (i.MaxTouchPoints > 0 || i.msMaxTouchPoints > 0),
        Wl = function() {
            var t = Cu("div"), r = Cu("div"), n = r.style, u = Ur, l;
            return n.display = "inline-block",
            n.position = "relative",
            t.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",
            t.appendChild(r),
            u.appendChild(t),
            l = r.offsetHeight + 18 > t.scrollHeight,
            u.removeChild(t),
            l
        }(),
        Ks = function(t) {
            for (var r = t.split(","), n = ("onpointerdown"in tl ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown"in tl ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : t).split(","), u = {}, l = 4; --l > -1; )
                u[r[l]] = n[l],
                u[n[l]] = r[l];
            try {
                gr.addEventListener("test", null, Object.defineProperty({}, "passive", {
                    get: function() {
                        rp = 1
                    }
                }))
            } catch {}
            return u
        }("touchstart,touchmove,touchend,touchcancel"),
        Wt(Vi, "touchcancel", Iu),
        Wt(mt, "touchmove", Iu),
        Ur && Ur.addEventListener("touchstart", Iu),
        Wt(Vi, "contextmenu", function() {
            for (var t in No)
                No[t].isPressed && No[t].endDrag()
        }),
        it = $l = sp()
    }
    it ? (cr = it.plugins.inertia,
    np = it.core.context || function() {}
    ,
    gs = it.utils.checkPrefix,
    Ls = gs(Ls),
    Xl = gs(Xl),
    yn = it.utils.toArray,
    jl = it.core.getStyleSaver,
    lp = !!gs("perspective")) : e && console.warn("Please gsap.registerPlugin(Draggable)")
}, rm = function() {
    function s(i) {
        this._listeners = {},
        this.target = i || this
    }
    var e = s.prototype;
    return e.addEventListener = function(t, r) {
        var n = this._listeners[t] || (this._listeners[t] = []);
        ~n.indexOf(r) || n.push(r)
    }
    ,
    e.removeEventListener = function(t, r) {
        var n = this._listeners[t]
          , u = n && n.indexOf(r);
        u >= 0 && n.splice(u, 1)
    }
    ,
    e.dispatchEvent = function(t) {
        var r = this, n;
        return (this._listeners[t] || []).forEach(function(u) {
            return u.call(r, {
                type: t,
                target: r.target
            }) === !1 && (n = !1)
        }),
        n
    }
    ,
    s
}(), da = function(s) {
    X_(e, s);
    function e(i, t) {
        var r;
        r = s.call(this) || this,
        $l || ol(1),
        i = yn(i)[0],
        r.styles = jl && jl(i, "transform,left,top"),
        cr || (cr = it.plugins.inertia),
        r.vars = t = up(t || {}),
        r.target = i,
        r.x = r.y = r.rotation = 0,
        r.dragResistance = parseFloat(t.dragResistance) || 0,
        r.edgeResistance = isNaN(t.edgeResistance) ? 1 : parseFloat(t.edgeResistance) || 0,
        r.lockAxis = t.lockAxis,
        r.autoScroll = t.autoScroll || 0,
        r.lockedAxis = null,
        r.allowEventDefault = !!t.allowEventDefault,
        it.getProperty(i, "x");
        var n = (t.type || "x,y").toLowerCase(), u = ~n.indexOf("x") || ~n.indexOf("y"), l = n.indexOf("rotation") !== -1, c = l ? "rotation" : u ? "x" : "left", p = u ? "y" : "top", _ = !!(~n.indexOf("x") || ~n.indexOf("left") || n === "scroll"), x = !!(~n.indexOf("y") || ~n.indexOf("top") || n === "scroll"), D = t.minimumMovement || 2, h = Qc(r), b = yn(t.trigger || t.handle || i), v = {}, E = 0, C = !1, L = t.autoScrollMarginTop || 40, A = t.autoScrollMarginRight || 40, P = t.autoScrollMarginBottom || 40, M = t.autoScrollMarginLeft || 40, z = t.clickableTest || em, f = 0, q = i._gsap || it.core.getCache(i), H = tm(i), I = function(F, ie) {
            return parseFloat(q.get(i, F, ie))
        }, ee = i.ownerDocument || Vi, K, G, ne, se, ae, oe, Ce, U, R, _e, be, $e, ve, we, ke, Ne, Le, gt, Ye, Je, ut, De, Te, Me, bt, $, ze, ti, Ut, me, Ge, ii, Gt, ce = function(F) {
            return tr(F),
            F.stopImmediatePropagation && F.stopImmediatePropagation(),
            !1
        }, nt = function de(F) {
            if (h.autoScroll && h.isDragging && (C || Le)) {
                var ie = i, B = h.autoScroll * 15, Y, re, W, le, te, he, Fe, ye;
                for (C = !1,
                zr.scrollTop = mt.pageYOffset != null ? mt.pageYOffset : ee.documentElement.scrollTop != null ? ee.documentElement.scrollTop : ee.body.scrollTop,
                zr.scrollLeft = mt.pageXOffset != null ? mt.pageXOffset : ee.documentElement.scrollLeft != null ? ee.documentElement.scrollLeft : ee.body.scrollLeft,
                le = h.pointerX - zr.scrollLeft,
                te = h.pointerY - zr.scrollTop; ie && !re; )
                    re = Uo(ie.parentNode),
                    Y = re ? zr : ie.parentNode,
                    W = re ? {
                        bottom: Math.max(gr.clientHeight, mt.innerHeight || 0),
                        right: Math.max(gr.clientWidth, mt.innerWidth || 0),
                        left: 0,
                        top: 0
                    } : Y.getBoundingClientRect(),
                    he = Fe = 0,
                    x && (ye = Y._gsMaxScrollY - Y.scrollTop,
                    ye < 0 ? Fe = ye : te > W.bottom - P && ye ? (C = !0,
                    Fe = Math.min(ye, B * (1 - Math.max(0, W.bottom - te) / P) | 0)) : te < W.top + L && Y.scrollTop && (C = !0,
                    Fe = -Math.min(Y.scrollTop, B * (1 - Math.max(0, te - W.top) / L) | 0)),
                    Fe && (Y.scrollTop += Fe)),
                    _ && (ye = Y._gsMaxScrollX - Y.scrollLeft,
                    ye < 0 ? he = ye : le > W.right - A && ye ? (C = !0,
                    he = Math.min(ye, B * (1 - Math.max(0, W.right - le) / A) | 0)) : le < W.left + M && Y.scrollLeft && (C = !0,
                    he = -Math.min(Y.scrollLeft, B * (1 - Math.max(0, le - W.left) / M) | 0)),
                    he && (Y.scrollLeft += he)),
                    re && (he || Fe) && (mt.scrollTo(Y.scrollLeft, Y.scrollTop),
                    xi(h.pointerX + he, h.pointerY + Fe)),
                    ie = Y
            }
            if (Le) {
                var Ie = h.x
                  , Ze = h.y;
                l ? (h.deltaX = Ie - parseFloat(q.rotation),
                h.rotation = Ie,
                q.rotation = Ie + "deg",
                q.renderTransform(1, q)) : G ? (x && (h.deltaY = Ze - G.top(),
                G.top(Ze)),
                _ && (h.deltaX = Ie - G.left(),
                G.left(Ie))) : u ? (x && (h.deltaY = Ze - parseFloat(q.y),
                q.y = Ze + "px"),
                _ && (h.deltaX = Ie - parseFloat(q.x),
                q.x = Ie + "px"),
                q.renderTransform(1, q)) : (x && (h.deltaY = Ze - parseFloat(i.style.top || 0),
                i.style.top = Ze + "px"),
                _ && (h.deltaX = Ie - parseFloat(i.style.left || 0),
                i.style.left = Ie + "px")),
                U && !F && !ti && (ti = !0,
                Mt(h, "drag", "onDrag") === !1 && (_ && (h.x -= h.deltaX),
                x && (h.y -= h.deltaY),
                de(!0)),
                ti = !1)
            }
            Le = !1
        }, lt = function(F, ie) {
            var B = h.x, Y = h.y, re, W;
            i._gsap || (q = it.core.getCache(i)),
            q.uncache && it.getProperty(i, "x"),
            u ? (h.x = parseFloat(q.x),
            h.y = parseFloat(q.y)) : l ? h.x = h.rotation = parseFloat(q.rotation) : G ? (h.y = G.top(),
            h.x = G.left()) : (h.y = parseFloat(i.style.top || (W = Js(i)) && W.top) || 0,
            h.x = parseFloat(i.style.left || (W || {}).left) || 0),
            (Ye || Je || ut) && !ie && (h.isDragging || h.isThrowing) && (ut && (po.x = h.x,
            po.y = h.y,
            re = ut(po),
            re.x !== h.x && (h.x = re.x,
            Le = !0),
            re.y !== h.y && (h.y = re.y,
            Le = !0)),
            Ye && (re = Ye(h.x),
            re !== h.x && (h.x = re,
            l && (h.rotation = re),
            Le = !0)),
            Je && (re = Je(h.y),
            re !== h.y && (h.y = re),
            Le = !0)),
            Le && nt(!0),
            F || (h.deltaX = h.x - B,
            h.deltaY = h.y - Y,
            Mt(h, "throwupdate", "onThrowUpdate"))
        }, ri = function(F, ie, B, Y) {
            return ie == null && (ie = -1e20),
            B == null && (B = ho),
            ln(F) ? function(re) {
                var W = h.isPressed ? 1 - h.edgeResistance : 1;
                return F.call(h, (re > B ? B + (re - B) * W : re < ie ? ie + (re - ie) * W : re) * Y) * Y
            }
            : os(F) ? function(re) {
                for (var W = F.length, le = 0, te = ho, he, Fe; --W > -1; )
                    he = F[W],
                    Fe = he - re,
                    Fe < 0 && (Fe = -Fe),
                    Fe < te && he >= ie && he <= B && (le = W,
                    te = Fe);
                return F[le]
            }
            : isNaN(F) ? function(re) {
                return re
            }
            : function() {
                return F * Y
            }
        }, li = function(F, ie, B, Y, re, W, le) {
            return W = W && W < ho ? W * W : ho,
            ln(F) ? function(te) {
                var he = h.isPressed ? 1 - h.edgeResistance : 1, Fe = te.x, ye = te.y, Ie, Ze, ot;
                return te.x = Fe = Fe > B ? B + (Fe - B) * he : Fe < ie ? ie + (Fe - ie) * he : Fe,
                te.y = ye = ye > re ? re + (ye - re) * he : ye < Y ? Y + (ye - Y) * he : ye,
                Ie = F.call(h, te),
                Ie !== te && (te.x = Ie.x,
                te.y = Ie.y),
                le !== 1 && (te.x *= le,
                te.y *= le),
                W < ho && (Ze = te.x - Fe,
                ot = te.y - ye,
                Ze * Ze + ot * ot > W && (te.x = Fe,
                te.y = ye)),
                te
            }
            : os(F) ? function(te) {
                for (var he = F.length, Fe = 0, ye = ho, Ie, Ze, ot, je; --he > -1; )
                    ot = F[he],
                    Ie = ot.x - te.x,
                    Ze = ot.y - te.y,
                    je = Ie * Ie + Ze * Ze,
                    je < ye && (Fe = he,
                    ye = je);
                return ye <= W ? F[Fe] : te
            }
            : function(te) {
                return te
            }
        }, fi = function() {
            var F, ie, B, Y;
            Ce = !1,
            G ? (G.calibrate(),
            h.minX = be = -G.maxScrollLeft(),
            h.minY = ve = -G.maxScrollTop(),
            h.maxX = _e = h.maxY = $e = 0,
            Ce = !0) : t.bounds && (F = sh(t.bounds, i.parentNode),
            l ? (h.minX = be = F.left,
            h.maxX = _e = F.left + F.width,
            h.minY = ve = h.maxY = $e = 0) : !hr(t.bounds.maxX) || !hr(t.bounds.maxY) ? (F = t.bounds,
            h.minX = be = F.minX,
            h.minY = ve = F.minY,
            h.maxX = _e = F.maxX,
            h.maxY = $e = F.maxY) : (ie = sh(i, i.parentNode),
            h.minX = be = Math.round(I(c, "px") + F.left - ie.left),
            h.minY = ve = Math.round(I(p, "px") + F.top - ie.top),
            h.maxX = _e = Math.round(be + (F.width - ie.width)),
            h.maxY = $e = Math.round(ve + (F.height - ie.height))),
            be > _e && (h.minX = _e,
            h.maxX = _e = be,
            be = h.minX),
            ve > $e && (h.minY = $e,
            h.maxY = $e = ve,
            ve = h.minY),
            l && (h.minRotation = be,
            h.maxRotation = _e),
            Ce = !0),
            t.liveSnap && (B = t.liveSnap === !0 ? t.snap || {} : t.liveSnap,
            Y = os(B) || ln(B),
            l ? (Ye = ri(Y ? B : B.rotation, be, _e, 1),
            Je = null) : B.points ? ut = li(Y ? B : B.points, be, _e, ve, $e, B.radius, G ? -1 : 1) : (_ && (Ye = ri(Y ? B : B.x || B.left || B.scrollLeft, be, _e, G ? -1 : 1)),
            x && (Je = ri(Y ? B : B.y || B.top || B.scrollTop, ve, $e, G ? -1 : 1))))
        }, _r = function() {
            h.isThrowing = !1,
            Mt(h, "throwcomplete", "onThrowComplete")
        }, pt = function() {
            h.isThrowing = !1
        }, Qt = function(F, ie) {
            var B, Y, re, W;
            F && cr ? (F === !0 && (B = t.snap || t.liveSnap || {},
            Y = os(B) || ln(B),
            F = {
                resistance: (t.throwResistance || t.resistance || 1e3) / (l ? 10 : 1)
            },
            l ? F.rotation = nl(h, Y ? B : B.rotation, _e, be, 1, ie) : (_ && (F[c] = nl(h, Y ? B : B.points || B.x || B.left, _e, be, G ? -1 : 1, ie || h.lockedAxis === "x")),
            x && (F[p] = nl(h, Y ? B : B.points || B.y || B.top, $e, ve, G ? -1 : 1, ie || h.lockedAxis === "y")),
            (B.points || os(B) && Rs(B[0])) && (F.linkedProps = c + "," + p,
            F.radius = B.radius))),
            h.isThrowing = !0,
            W = isNaN(t.overshootTolerance) ? t.edgeResistance === 1 ? 0 : 1 - h.edgeResistance + .2 : t.overshootTolerance,
            F.duration || (F.duration = {
                max: Math.max(t.minDuration || 0, "maxDuration"in t ? t.maxDuration : 2),
                min: isNaN(t.minDuration) ? W === 0 || Rs(F) && F.resistance > 1e3 ? 0 : .5 : t.minDuration,
                overshoot: W
            }),
            h.tween = re = it.to(G || i, {
                inertia: F,
                data: "_draggable",
                inherit: !1,
                onComplete: _r,
                onInterrupt: pt,
                onUpdate: t.fastMode ? Mt : lt,
                onUpdateParams: t.fastMode ? [h, "onthrowupdate", "onThrowUpdate"] : B && B.radius ? [!1, !0] : []
            }),
            t.fastMode || (G && (G._skip = !0),
            re.render(1e9, !0, !0),
            lt(!0, !0),
            h.endX = h.x,
            h.endY = h.y,
            l && (h.endRotation = h.x),
            re.play(0),
            lt(!0, !0),
            G && (G._skip = !1))) : Ce && h.applyBounds()
        }, Lt = function(F) {
            var ie = Me, B;
            Me = si(i.parentNode, !0),
            F && h.isPressed && !Me.equals(ie || new Jr) && (B = ie.inverse().apply({
                x: ne,
                y: se
            }),
            Me.apply(B, B),
            ne = B.x,
            se = B.y),
            Me.equals(W_) && (Me = null)
        }, Kt = function() {
            var F = 1 - h.edgeResistance, ie = H ? Io(ee) : 0, B = H ? Bo(ee) : 0, Y, re, W;
            u && (q.x = I(c, "px") + "px",
            q.y = I(p, "px") + "px",
            q.renderTransform()),
            Lt(!1),
            ir.x = h.pointerX - ie,
            ir.y = h.pointerY - B,
            Me && Me.apply(ir, ir),
            ne = ir.x,
            se = ir.y,
            Le && (xi(h.pointerX, h.pointerY),
            nt(!0)),
            ii = si(i),
            G ? (fi(),
            oe = G.top(),
            ae = G.left()) : (Pi() ? (lt(!0, !0),
            fi()) : h.applyBounds(),
            l ? (Y = i.ownerSVGElement ? [q.xOrigin - i.getBBox().x, q.yOrigin - i.getBBox().y] : (Js(i)[Xl] || "0 0").split(" "),
            Ne = h.rotationOrigin = si(i).apply({
                x: parseFloat(Y[0]) || 0,
                y: parseFloat(Y[1]) || 0
            }),
            lt(!0, !0),
            re = h.pointerX - Ne.x - ie,
            W = Ne.y - h.pointerY + B,
            ae = h.x,
            oe = h.y = Math.atan2(W, re) * Kc) : (oe = I(p, "px"),
            ae = I(c, "px"))),
            Ce && F && (ae > _e ? ae = _e + (ae - _e) / F : ae < be && (ae = be - (be - ae) / F),
            l || (oe > $e ? oe = $e + (oe - $e) / F : oe < ve && (oe = ve - (ve - oe) / F))),
            h.startX = ae = on(ae),
            h.startY = oe = on(oe)
        }, Pi = function() {
            return h.tween && h.tween.isActive()
        }, Di = function() {
            jr.parentNode && !Pi() && !h.isDragging && jr.parentNode.removeChild(jr)
        }, ci = function(F, ie) {
            var B;
            if (!K || h.isPressed || !F || (F.type === "mousedown" || F.type === "pointerdown") && !ie && sn() - f < 30 && Ks[h.pointerEvent.type]) {
                Ge && F && K && tr(F);
                return
            }
            if (bt = Pi(),
            Gt = !1,
            h.pointerEvent = F,
            Ks[F.type] ? (Te = ~F.type.indexOf("touch") ? F.currentTarget || F.target : ee,
            Wt(Te, "touchend", ct),
            Wt(Te, "touchmove", Oe),
            Wt(Te, "touchcancel", ct),
            Wt(ee, "touchstart", ih)) : (Te = null,
            Wt(ee, "mousemove", Oe)),
            ze = null,
            (!Bu || !Te) && (Wt(ee, "mouseup", ct),
            F && F.target && Wt(F.target, "mouseup", ct)),
            De = z.call(h, F.target) && t.dragClickables === !1 && !ie,
            De) {
                Wt(F.target, "change", ct),
                Mt(h, "pressInit", "onPressInit"),
                Mt(h, "press", "onPress"),
                Eu(b, !0),
                Ge = !1;
                return
            }
            if ($ = !Te || _ === x || h.vars.allowNativeTouchScrolling === !1 || h.vars.allowContextMenu && F && (F.ctrlKey || F.which > 2) ? !1 : _ ? "y" : "x",
            Ge = !$ && !h.allowEventDefault,
            Ge && (tr(F),
            Wt(mt, "touchforcechange", tr)),
            F.changedTouches ? (F = we = F.changedTouches[0],
            ke = F.identifier) : F.pointerId ? ke = F.pointerId : we = ke = null,
            ia++,
            G_(nt),
            se = h.pointerY = F.pageY,
            ne = h.pointerX = F.pageX,
            Mt(h, "pressInit", "onPressInit"),
            ($ || h.autoScroll) && il(i.parentNode),
            i.parentNode && h.autoScroll && !G && !l && i.parentNode._gsMaxScrollX && !jr.parentNode && !i.getBBox && (jr.style.width = i.parentNode.scrollWidth + "px",
            i.parentNode.appendChild(jr)),
            Kt(),
            h.tween && h.tween.kill(),
            h.isThrowing = !1,
            it.killTweensOf(G || i, v, !0),
            G && it.killTweensOf(i, {
                scrollTo: 1
            }, !0),
            h.tween = h.lockedAxis = null,
            (t.zIndexBoost || !l && !G && t.zIndexBoost !== !1) && (i.style.zIndex = e.zIndex++),
            h.isPressed = !0,
            U = !!(t.onDrag || h._listeners.drag),
            R = !!(t.onMove || h._listeners.move),
            t.cursor !== !1 || t.activeCursor)
                for (B = b.length; --B > -1; )
                    it.set(b[B], {
                        cursor: t.activeCursor || t.cursor || (ms === "grab" ? "grabbing" : ms)
                    });
            Mt(h, "press", "onPress")
        }, Oe = function(F) {
            var ie = F, B, Y, re, W, le, te;
            if (!K || Bf || !h.isPressed || !F) {
                Ge && F && K && tr(F);
                return
            }
            if (h.pointerEvent = F,
            B = F.changedTouches,
            B) {
                if (F = B[0],
                F !== we && F.identifier !== ke) {
                    for (W = B.length; --W > -1 && (F = B[W]).identifier !== ke && F.target !== i; )
                        ;
                    if (W < 0)
                        return
                }
            } else if (F.pointerId && ke && F.pointerId !== ke)
                return;
            if (Te && $ && !ze && (ir.x = F.pageX - (H ? Io(ee) : 0),
            ir.y = F.pageY - (H ? Bo(ee) : 0),
            Me && Me.apply(ir, ir),
            Y = ir.x,
            re = ir.y,
            le = Math.abs(Y - ne),
            te = Math.abs(re - se),
            (le !== te && (le > D || te > D) || _s && $ === ze) && (ze = le > te && _ ? "x" : "y",
            $ && ze !== $ && Wt(mt, "touchforcechange", tr),
            h.vars.lockAxisOnTouchScroll !== !1 && _ && x && (h.lockedAxis = ze === "x" ? "y" : "x",
            ln(h.vars.onLockAxis) && h.vars.onLockAxis.call(h, ie)),
            _s && $ === ze))) {
                ct(ie);
                return
            }
            !h.allowEventDefault && (!$ || ze && $ !== ze) && ie.cancelable !== !1 ? (tr(ie),
            Ge = !0) : Ge && (Ge = !1),
            h.autoScroll && (C = !0),
            xi(F.pageX, F.pageY, R)
        }, xi = function(F, ie, B) {
            var Y = 1 - h.dragResistance, re = 1 - h.edgeResistance, W = h.pointerX, le = h.pointerY, te = oe, he = h.x, Fe = h.y, ye = h.endX, Ie = h.endY, Ze = h.endRotation, ot = Le, je, Xe, ft, Ae, Nt, yt;
            h.pointerX = F,
            h.pointerY = ie,
            H && (F -= Io(ee),
            ie -= Bo(ee)),
            l ? (Ae = Math.atan2(Ne.y - ie, F - Ne.x) * Kc,
            Nt = h.y - Ae,
            Nt > 180 ? (oe -= 360,
            h.y = Ae) : Nt < -180 && (oe += 360,
            h.y = Ae),
            h.x !== ae || Math.max(Math.abs(ne - F), Math.abs(se - ie)) > D ? (h.y = Ae,
            ft = ae + (oe - Ae) * Y) : ft = ae) : (Me && (yt = F * Me.a + ie * Me.c + Me.e,
            ie = F * Me.b + ie * Me.d + Me.f,
            F = yt),
            Xe = ie - se,
            je = F - ne,
            Xe < D && Xe > -D && (Xe = 0),
            je < D && je > -D && (je = 0),
            (h.lockAxis || h.lockedAxis) && (je || Xe) && (yt = h.lockedAxis,
            yt || (h.lockedAxis = yt = _ && Math.abs(je) > Math.abs(Xe) ? "y" : x ? "x" : null,
            yt && ln(h.vars.onLockAxis) && h.vars.onLockAxis.call(h, h.pointerEvent)),
            yt === "y" ? Xe = 0 : yt === "x" && (je = 0)),
            ft = on(ae + je * Y),
            Ae = on(oe + Xe * Y)),
            (Ye || Je || ut) && (h.x !== ft || h.y !== Ae && !l) && (ut && (po.x = ft,
            po.y = Ae,
            yt = ut(po),
            ft = on(yt.x),
            Ae = on(yt.y)),
            Ye && (ft = on(Ye(ft))),
            Je && (Ae = on(Je(Ae)))),
            Ce && (ft > _e ? ft = _e + Math.round((ft - _e) * re) : ft < be && (ft = be + Math.round((ft - be) * re)),
            l || (Ae > $e ? Ae = Math.round($e + (Ae - $e) * re) : Ae < ve && (Ae = Math.round(ve + (Ae - ve) * re)))),
            (h.x !== ft || h.y !== Ae && !l) && (l ? (h.endRotation = h.x = h.endX = ft,
            Le = !0) : (x && (h.y = h.endY = Ae,
            Le = !0),
            _ && (h.x = h.endX = ft,
            Le = !0)),
            !B || Mt(h, "move", "onMove") !== !1 ? !h.isDragging && h.isPressed && (h.isDragging = Gt = !0,
            Mt(h, "dragstart", "onDragStart")) : (h.pointerX = W,
            h.pointerY = le,
            oe = te,
            h.x = he,
            h.y = Fe,
            h.endX = ye,
            h.endY = Ie,
            h.endRotation = Ze,
            Le = ot))
        }, ct = function de(F, ie) {
            if (!K || !h.isPressed || F && ke != null && !ie && (F.pointerId && F.pointerId !== ke && F.target !== i || F.changedTouches && !K_(F.changedTouches, ke))) {
                Ge && F && K && tr(F);
                return
            }
            h.isPressed = !1;
            var B = F, Y = h.isDragging, re = h.vars.allowContextMenu && F && (F.ctrlKey || F.which > 2), W = it.delayedCall(.001, Di), le, te, he, Fe, ye;
            if (Te ? (Bt(Te, "touchend", de),
            Bt(Te, "touchmove", Oe),
            Bt(Te, "touchcancel", de),
            Bt(ee, "touchstart", ih)) : Bt(ee, "mousemove", Oe),
            Bt(mt, "touchforcechange", tr),
            (!Bu || !Te) && (Bt(ee, "mouseup", de),
            F && F.target && Bt(F.target, "mouseup", de)),
            Le = !1,
            Y && (E = Jc = sn(),
            h.isDragging = !1),
            th(nt),
            De && !re) {
                F && (Bt(F.target, "change", de),
                h.pointerEvent = B),
                Eu(b, !1),
                Mt(h, "release", "onRelease"),
                Mt(h, "click", "onClick"),
                De = !1;
                return
            }
            for (te = b.length; --te > -1; )
                rl(b[te], "cursor", t.cursor || (t.cursor !== !1 ? ms : null));
            if (ia--,
            F) {
                if (le = F.changedTouches,
                le && (F = le[0],
                F !== we && F.identifier !== ke)) {
                    for (te = le.length; --te > -1 && (F = le[te]).identifier !== ke && F.target !== i; )
                        ;
                    if (te < 0 && !ie)
                        return
                }
                h.pointerEvent = B,
                h.pointerX = F.pageX,
                h.pointerY = F.pageY
            }
            return re && B ? (tr(B),
            Ge = !0,
            Mt(h, "release", "onRelease")) : B && !Y ? (Ge = !1,
            bt && (t.snap || t.bounds) && Qt(t.inertia || t.throwProps),
            Mt(h, "release", "onRelease"),
            (!_s || B.type !== "touchmove") && B.type.indexOf("cancel") === -1 && (Mt(h, "click", "onClick"),
            sn() - f < 300 && Mt(h, "doubleclick", "onDoubleClick"),
            Fe = B.target || i,
            f = sn(),
            ye = function() {
                f !== Ut && h.enabled() && !h.isPressed && !B.defaultPrevented && (Fe.click ? Fe.click() : ee.createEvent && (he = ee.createEvent("MouseEvents"),
                he.initMouseEvent("click", !0, !0, mt, 1, h.pointerEvent.screenX, h.pointerEvent.screenY, h.pointerX, h.pointerY, !1, !1, !1, !1, 0, null),
                Fe.dispatchEvent(he)))
            }
            ,
            !_s && !B.defaultPrevented && it.delayedCall(.05, ye))) : (Qt(t.inertia || t.throwProps),
            !h.allowEventDefault && B && (t.dragClickables !== !1 || !z.call(h, B.target)) && Y && (!$ || ze && $ === ze) && B.cancelable !== !1 ? (Ge = !0,
            tr(B)) : Ge = !1,
            Mt(h, "release", "onRelease")),
            Pi() && W.duration(h.tween.duration()),
            Y && Mt(h, "dragend", "onDragEnd"),
            !0
        }, Tt = function(F) {
            if (F && h.isDragging && !G) {
                var ie = F.target || i.parentNode
                  , B = ie.scrollLeft - ie._gsScrollX
                  , Y = ie.scrollTop - ie._gsScrollY;
                (B || Y) && (Me ? (ne -= B * Me.a + Y * Me.c,
                se -= Y * Me.d + B * Me.b) : (ne -= B,
                se -= Y),
                ie._gsScrollX += B,
                ie._gsScrollY += Y,
                xi(h.pointerX, h.pointerY))
            }
        }, ni = function(F) {
            var ie = sn()
              , B = ie - f < 100
              , Y = ie - E < 50
              , re = B && Ut === f
              , W = h.pointerEvent && h.pointerEvent.defaultPrevented
              , le = B && me === f
              , te = F.isTrusted || F.isTrusted == null && B && re;
            if ((re || Y && h.vars.suppressClickOnDrag !== !1) && F.stopImmediatePropagation && F.stopImmediatePropagation(),
            B && !(h.pointerEvent && h.pointerEvent.defaultPrevented) && (!re || te && !le)) {
                te && re && (me = f),
                Ut = f;
                return
            }
            (h.isPressed || Y || B) && (!te || !F.detail || !B || W) && tr(F),
            !B && !Y && !Gt && (F && F.target && (h.pointerEvent = F),
            Mt(h, "click", "onClick"))
        }, Hi = function(F) {
            return Me ? {
                x: F.x * Me.a + F.y * Me.c + Me.e,
                y: F.x * Me.b + F.y * Me.d + Me.f
            } : {
                x: F.x,
                y: F.y
            }
        };
        return gt = e.get(i),
        gt && gt.kill(),
        r.startDrag = function(de, F) {
            var ie, B, Y, re;
            ci(de || h.pointerEvent, !0),
            F && !h.hitTest(de || h.pointerEvent) && (ie = go(de || h.pointerEvent),
            B = go(i),
            Y = Hi({
                x: ie.left + ie.width / 2,
                y: ie.top + ie.height / 2
            }),
            re = Hi({
                x: B.left + B.width / 2,
                y: B.top + B.height / 2
            }),
            ne -= Y.x - re.x,
            se -= Y.y - re.y),
            h.isDragging || (h.isDragging = Gt = !0,
            Mt(h, "dragstart", "onDragStart"))
        }
        ,
        r.drag = Oe,
        r.endDrag = function(de) {
            return ct(de || h.pointerEvent, !0)
        }
        ,
        r.timeSinceDrag = function() {
            return h.isDragging ? 0 : (sn() - E) / 1e3
        }
        ,
        r.timeSinceClick = function() {
            return (sn() - f) / 1e3
        }
        ,
        r.hitTest = function(de, F) {
            return e.hitTest(h.target, de, F)
        }
        ,
        r.getDirection = function(de, F) {
            var ie = de === "velocity" && cr ? de : Rs(de) && !l ? "element" : "start", B, Y, re, W, le, te;
            return ie === "element" && (le = go(h.target),
            te = go(de)),
            B = ie === "start" ? h.x - ae : ie === "velocity" ? cr.getVelocity(i, c) : le.left + le.width / 2 - (te.left + te.width / 2),
            l ? B < 0 ? "counter-clockwise" : "clockwise" : (F = F || 2,
            Y = ie === "start" ? h.y - oe : ie === "velocity" ? cr.getVelocity(i, p) : le.top + le.height / 2 - (te.top + te.height / 2),
            re = Math.abs(B / Y),
            W = re < 1 / F ? "" : B < 0 ? "left" : "right",
            re < F && (W !== "" && (W += "-"),
            W += Y < 0 ? "up" : "down"),
            W)
        }
        ,
        r.applyBounds = function(de, F) {
            var ie, B, Y, re, W, le;
            if (de && t.bounds !== de)
                return t.bounds = de,
                h.update(!0, F);
            if (lt(!0),
            fi(),
            Ce && !Pi()) {
                if (ie = h.x,
                B = h.y,
                ie > _e ? ie = _e : ie < be && (ie = be),
                B > $e ? B = $e : B < ve && (B = ve),
                (h.x !== ie || h.y !== B) && (Y = !0,
                h.x = h.endX = ie,
                l ? h.endRotation = ie : h.y = h.endY = B,
                Le = !0,
                nt(!0),
                h.autoScroll && !h.isDragging))
                    for (il(i.parentNode),
                    re = i,
                    zr.scrollTop = mt.pageYOffset != null ? mt.pageYOffset : ee.documentElement.scrollTop != null ? ee.documentElement.scrollTop : ee.body.scrollTop,
                    zr.scrollLeft = mt.pageXOffset != null ? mt.pageXOffset : ee.documentElement.scrollLeft != null ? ee.documentElement.scrollLeft : ee.body.scrollLeft; re && !le; )
                        le = Uo(re.parentNode),
                        W = le ? zr : re.parentNode,
                        x && W.scrollTop > W._gsMaxScrollY && (W.scrollTop = W._gsMaxScrollY),
                        _ && W.scrollLeft > W._gsMaxScrollX && (W.scrollLeft = W._gsMaxScrollX),
                        re = W;
                h.isThrowing && (Y || h.endX > _e || h.endX < be || h.endY > $e || h.endY < ve) && Qt(t.inertia || t.throwProps, Y)
            }
            return h
        }
        ,
        r.update = function(de, F, ie) {
            if (F && h.isPressed) {
                var B = si(i)
                  , Y = ii.apply({
                    x: h.x - ae,
                    y: h.y - oe
                })
                  , re = si(i.parentNode, !0);
                re.apply({
                    x: B.e - Y.x,
                    y: B.f - Y.y
                }, Y),
                h.x -= Y.x - re.e,
                h.y -= Y.y - re.f,
                nt(!0),
                Kt()
            }
            var W = h.x
              , le = h.y;
            return Lt(!F),
            de ? h.applyBounds() : (Le && ie && nt(!0),
            lt(!0)),
            F && (xi(h.pointerX, h.pointerY),
            Le && nt(!0)),
            h.isPressed && !F && (_ && Math.abs(W - h.x) > .01 || x && Math.abs(le - h.y) > .01 && !l) && Kt(),
            h.autoScroll && (il(i.parentNode, h.isDragging),
            C = h.isDragging,
            nt(!0),
            nh(i, Tt),
            rh(i, Tt)),
            h
        }
        ,
        r.enable = function(de) {
            var F = {
                lazy: !0
            }, ie, B, Y;
            if (t.cursor !== !1 && (F.cursor = t.cursor || ms),
            it.utils.checkPrefix("touchCallout") && (F.touchCallout = "none"),
            de !== "soft") {
                for (Zc(b, _ === x ? "none" : t.allowNativeTouchScrolling && i.scrollHeight === i.clientHeight == (i.scrollWidth === i.clientHeight) || t.allowEventDefault ? "manipulation" : _ ? "pan-y" : "pan-x"),
                B = b.length; --B > -1; )
                    Y = b[B],
                    Bu || Wt(Y, "mousedown", ci),
                    Wt(Y, "touchstart", ci),
                    Wt(Y, "click", ni, !0),
                    it.set(Y, F),
                    Y.getBBox && Y.ownerSVGElement && _ !== x && it.set(Y.ownerSVGElement, {
                        touchAction: t.allowNativeTouchScrolling || t.allowEventDefault ? "manipulation" : _ ? "pan-y" : "pan-x"
                    }),
                    t.allowContextMenu || Wt(Y, "contextmenu", ce);
                Eu(b, !1)
            }
            return rh(i, Tt),
            K = !0,
            cr && de !== "soft" && cr.track(G || i, u ? "x,y" : l ? "rotation" : "top,left"),
            i._gsDragID = ie = i._gsDragID || "d" + Y_++,
            No[ie] = h,
            G && (G.enable(),
            G.element._gsDragID = ie),
            (t.bounds || l) && Kt(),
            t.bounds && h.applyBounds(),
            h
        }
        ,
        r.disable = function(de) {
            for (var F = h.isDragging, ie = b.length, B; --ie > -1; )
                rl(b[ie], "cursor", null);
            if (de !== "soft") {
                for (Zc(b, null),
                ie = b.length; --ie > -1; )
                    B = b[ie],
                    rl(B, "touchCallout", null),
                    Bt(B, "mousedown", ci),
                    Bt(B, "touchstart", ci),
                    Bt(B, "click", ni, !0),
                    Bt(B, "contextmenu", ce);
                Eu(b, !0),
                Te && (Bt(Te, "touchcancel", ct),
                Bt(Te, "touchend", ct),
                Bt(Te, "touchmove", Oe)),
                Bt(ee, "mouseup", ct),
                Bt(ee, "mousemove", Oe)
            }
            return nh(i, Tt),
            K = !1,
            cr && de !== "soft" && (cr.untrack(G || i, u ? "x,y" : l ? "rotation" : "top,left"),
            h.tween && h.tween.kill()),
            G && G.disable(),
            th(nt),
            h.isDragging = h.isPressed = De = !1,
            F && Mt(h, "dragend", "onDragEnd"),
            h
        }
        ,
        r.enabled = function(de, F) {
            return arguments.length ? de ? h.enable(F) : h.disable(F) : K
        }
        ,
        r.kill = function() {
            return h.isThrowing = !1,
            h.tween && h.tween.kill(),
            h.disable(),
            it.set(b, {
                clearProps: "userSelect"
            }),
            delete No[i._gsDragID],
            h
        }
        ,
        r.revert = function() {
            this.kill(),
            this.styles && this.styles.revert()
        }
        ,
        ~n.indexOf("scroll") && (G = r.scrollProxy = new im(i,U_({
            onKill: function() {
                h.isPressed && ct(null)
            }
        }, t)),
        i.style.overflowY = x && !ql ? "auto" : "hidden",
        i.style.overflowX = _ && !ql ? "auto" : "hidden",
        i = G.content),
        l ? v.rotation = 1 : (_ && (v[c] = 1),
        x && (v[p] = 1)),
        q.force3D = "force3D"in t ? t.force3D : !0,
        np(Qc(r)),
        r.enable(),
        r
    }
    return e.register = function(t) {
        it = t,
        ol()
    }
    ,
    e.create = function(t, r) {
        return $l || ol(!0),
        yn(t).map(function(n) {
            return new e(n,r)
        })
    }
    ,
    e.get = function(t) {
        return No[(yn(t)[0] || {})._gsDragID]
    }
    ,
    e.timeSinceDrag = function() {
        return (sn() - Jc) / 1e3
    }
    ,
    e.hitTest = function(t, r, n) {
        if (t === r)
            return !1;
        var u = go(t), l = go(r), c = u.top, p = u.left, _ = u.right, x = u.bottom, D = u.width, h = u.height, b = l.left > _ || l.right < p || l.top > x || l.bottom < c, v, E, C;
        return b || !n ? !b : (C = (n + "").indexOf("%") !== -1,
        n = parseFloat(n) || 0,
        v = {
            left: Math.max(p, l.left),
            top: Math.max(c, l.top)
        },
        v.width = Math.min(_, l.right) - v.left,
        v.height = Math.min(x, l.bottom) - v.top,
        v.width < 0 || v.height < 0 ? !1 : C ? (n *= .01,
        E = v.width * v.height,
        E >= D * h * n || E >= l.width * l.height * n) : v.width > n && v.height > n)
    }
    ,
    e
}(rm);
Q_(da.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: !1,
    isPressed: !1
});
da.zIndex = 1e3;
da.version = "3.12.7";
sp() && it.registerPlugin(da);
/*!
 * VelocityTracker: 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Tr, Yl, Ns, fp, yo, To, Vl, cp, hp = function() {
    return Tr || typeof window < "u" && (Tr = window.gsap)
}, Ul = {}, nm = function(e) {
    return Math.round(e * 1e4) / 1e4
}, Gl = function(e) {
    return cp(e).id
}, ys = function(e) {
    return Ul[Gl(typeof e == "string" ? Ns(e)[0] : e)]
}, uh = function(e) {
    var i = yo, t;
    if (e - Vl >= .05)
        for (Vl = e; i; )
            t = i.g(i.t, i.p),
            (t !== i.v1 || e - i.t1 > .2) && (i.v2 = i.v1,
            i.v1 = t,
            i.t2 = i.t1,
            i.t1 = e),
            i = i._next
}, om = {
    deg: 360,
    rad: Math.PI * 2
}, sl = function() {
    Tr = hp(),
    Tr && (Ns = Tr.utils.toArray,
    fp = Tr.utils.getUnit,
    cp = Tr.core.getCache,
    To = Tr.ticker,
    Yl = 1)
}, sm = function(e, i, t, r) {
    this.t = e,
    this.p = i,
    this.g = e._gsap.get,
    this.rCap = om[t || fp(this.g(e, i))],
    this.v1 = this.v2 = 0,
    this.t1 = this.t2 = To.time,
    r && (this._next = r,
    r._prev = this)
}, tu = function() {
    function s(i, t) {
        Yl || sl(),
        this.target = Ns(i)[0],
        Ul[Gl(this.target)] = this,
        this._props = {},
        t && this.add(t)
    }
    s.register = function(t) {
        Tr = t,
        sl()
    }
    ;
    var e = s.prototype;
    return e.get = function(t, r) {
        var n = this._props[t] || console.warn("Not tracking " + t + " velocity."), u, l, c;
        return u = parseFloat(r ? n.v1 : n.g(n.t, n.p)),
        l = u - parseFloat(n.v2),
        c = n.rCap,
        c && (l = l % c,
        l !== l % (c / 2) && (l = l < 0 ? l + c : l - c)),
        nm(l / ((r ? n.t1 : To.time) - n.t2))
    }
    ,
    e.getAll = function() {
        var t = {}, r = this._props, n;
        for (n in r)
            t[n] = this.get(n);
        return t
    }
    ,
    e.isTracking = function(t) {
        return t in this._props
    }
    ,
    e.add = function(t, r) {
        t in this._props || (yo || (To.add(uh),
        Vl = To.time),
        yo = this._props[t] = new sm(this.target,t,r,yo))
    }
    ,
    e.remove = function(t) {
        var r = this._props[t], n, u;
        r && (n = r._prev,
        u = r._next,
        n && (n._next = u),
        u ? u._prev = n : yo === r && (To.remove(uh),
        yo = 0),
        delete this._props[t])
    }
    ,
    e.kill = function(t) {
        for (var r in this._props)
            this.remove(r);
        t || delete Ul[Gl(this.target)]
    }
    ,
    s.track = function(t, r, n) {
        Yl || sl();
        for (var u = [], l = Ns(t), c = r.split(","), p = (n || "").split(","), _ = l.length, x, D; _--; ) {
            for (x = ys(l[_]) || new s(l[_]),
            D = c.length; D--; )
                x.add(c[D], p[D] || p[0]);
            u.push(x)
        }
        return u
    }
    ,
    s.untrack = function(t, r) {
        var n = (r || "").split(",");
        Ns(t).forEach(function(u) {
            var l = ys(u);
            l && (n.length ? n.forEach(function(c) {
                return l.remove(c)
            }) : l.kill(1))
        })
    }
    ,
    s.isTracking = function(t, r) {
        var n = ys(t);
        return n && n.isTracking(r)
    }
    ,
    s.getVelocity = function(t, r) {
        var n = ys(t);
        return !n || !n.isTracking(r) ? console.warn("Not tracking velocity of " + r) : n.get(r)
    }
    ,
    s
}();
tu.getByTarget = ys;
hp() && Tr.registerPlugin(tu);
/*!
 * InertiaPlugin 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Yt, dp, ah, pp, Ql, Bs, gp, _p, mp, If, yp, Is, Kl, vp, ra = tu.getByTarget, Dp = function() {
    return Yt || typeof window < "u" && (Yt = window.gsap) && Yt.registerPlugin && Yt
}, um = function(e) {
    return typeof e == "string"
}, Zs = function(e) {
    return typeof e == "number"
}, bn = function(e) {
    return typeof e == "object"
}, Jl = function(e) {
    return typeof e == "function"
}, am = 1, xp = Array.isArray, lm = function(e) {
    return e
}, Ho = 1e10, lh = 1 / Ho, bp = .05, fm = function(e) {
    return Math.round(e * 1e4) / 1e4
}, cm = function(e, i, t) {
    for (var r in i)
        !(r in e) && r !== t && (e[r] = i[r]);
    return e
}, hm = function s(e) {
    var i = {}, t, r;
    for (t in e)
        i[t] = bn(r = e[t]) && !xp(r) ? s(r) : r;
    return i
}, fh = function(e, i, t, r, n) {
    var u = i.length, l = 0, c = Ho, p, _, x, D;
    if (bn(e)) {
        for (; u--; ) {
            p = i[u],
            _ = 0;
            for (x in e)
                D = p[x] - e[x],
                _ += D * D;
            _ < c && (l = u,
            c = _)
        }
        if ((n || Ho) < Ho && n < Math.sqrt(c))
            return e
    } else
        for (; u--; )
            p = i[u],
            _ = p - e,
            _ < 0 && (_ = -_),
            _ < c && p >= r && p <= t && (l = u,
            c = _);
    return i[l]
}, wp = function(e, i, t, r, n, u, l) {
    if (e.end === "auto")
        return e;
    var c = e.end, p, _;
    if (t = isNaN(t) ? Ho : t,
    r = isNaN(r) ? -1e10 : r,
    bn(i)) {
        if (p = i.calculated ? i : (Jl(c) ? c(i, l) : fh(i, c, t, r, u)) || i,
        !i.calculated) {
            for (_ in p)
                i[_] = p[_];
            i.calculated = !0
        }
        p = p[n]
    } else
        p = Jl(c) ? c(i, l) : xp(c) ? fh(i, c, t, r, u) : parseFloat(c);
    return p > t ? p = t : p < r && (p = r),
    {
        max: p,
        min: p,
        unitFactor: e.unitFactor
    }
}, na = function(e, i, t) {
    return isNaN(e[i]) ? t : +e[i]
}, Hf = function(e, i) {
    return i * bp * e / If
}, ch = function(e, i, t) {
    return Math.abs((i - e) * If / t / bp)
}, Cp = {
    resistance: 1,
    checkpoint: 1,
    preventOvershoot: 1,
    linkedProps: 1,
    radius: 1,
    duration: 1
}, Ep = function(e, i, t, r) {
    if (i.linkedProps) {
        var n = i.linkedProps.split(","), u = {}, l, c, p, _, x, D;
        for (l = 0; l < n.length; l++)
            c = n[l],
            p = i[c],
            p && (Zs(p.velocity) ? _ = p.velocity : (x = x || ra(e),
            _ = x && x.isTracking(c) ? x.get(c) : 0),
            D = Math.abs(_ / na(p, "resistance", r)),
            u[c] = parseFloat(t(e, c)) + Hf(_, D));
        return u
    }
}, dm = function(e, i, t, r, n, u) {
    if (t === void 0 && (t = 10),
    r === void 0 && (r = .2),
    n === void 0 && (n = 1),
    um(e) && (e = pp(e)[0]),
    !e)
        return 0;
    var l = 0, c = Ho, p = i.inertia || i, _ = mp(e).get, x = na(p, "resistance", Bs.resistance), D, h, b, v, E, C, L, A, P, M;
    M = Ep(e, p, _, x);
    for (D in p)
        Cp[D] || (h = p[D],
        bn(h) || (A = A || ra(e),
        A && A.isTracking(D) ? h = Zs(h) ? {
            velocity: h
        } : {
            velocity: A.get(D)
        } : (v = +h || 0,
        b = Math.abs(v / x))),
        bn(h) && (Zs(h.velocity) ? v = h.velocity : (A = A || ra(e),
        v = A && A.isTracking(D) ? A.get(D) : 0),
        b = yp(r, t, Math.abs(v / na(h, "resistance", x))),
        E = parseFloat(_(e, D)) || 0,
        C = E + Hf(v, b),
        "end"in h && (h = wp(h, M && D in M ? M : C, h.max, h.min, D, p.radius, v),
        Is === i && (Is = p = hm(i)),
        p[D] = cm(h, p[D], "end")),
        "max"in h && C > +h.max + lh ? (P = h.unitFactor || Bs.unitFactors[D] || 1,
        L = E > h.max && h.min !== h.max || v * P > -15 && v * P < 45 ? r + (t - r) * .1 : ch(E, h.max, v),
        L + n < c && (c = L + n)) : "min"in h && C < +h.min - lh && (P = h.unitFactor || Bs.unitFactors[D] || 1,
        L = E < h.min && h.min !== h.max || v * P > -45 && v * P < 15 ? r + (t - r) * .1 : ch(E, h.min, v),
        L + n < c && (c = L + n)),
        L > l && (l = L)),
        b > l && (l = b));
    return l > c && (l = c),
    l > t ? t : l < r ? r : l
}, hh = function() {
    Yt = Dp(),
    Yt && (ah = Yt.parseEase,
    pp = Yt.utils.toArray,
    gp = Yt.utils.getUnit,
    mp = Yt.core.getCache,
    yp = Yt.utils.clamp,
    Kl = Yt.core.getStyleSaver,
    vp = Yt.core.reverting || function() {}
    ,
    Ql = ah("power3"),
    If = Ql(.05),
    _p = Yt.core.PropTween,
    Yt.config({
        resistance: 100,
        unitFactors: {
            time: 1e3,
            totalTime: 1e3,
            progress: 1e3,
            totalProgress: 1e3
        }
    }),
    Bs = Yt.config(),
    Yt.registerPlugin(tu),
    dp = 1)
}, Tp = {
    version: "3.12.7",
    name: "inertia",
    register: function(e) {
        Yt = e,
        hh()
    },
    init: function(e, i, t, r, n) {
        dp || hh();
        var u = ra(e);
        if (i === "auto") {
            if (!u) {
                console.warn("No inertia tracking on " + e + ". InertiaPlugin.track(target) first.");
                return
            }
            i = u.getAll()
        }
        this.styles = Kl && typeof e.style == "object" && Kl(e),
        this.target = e,
        this.tween = t,
        Is = i;
        var l = e._gsap, c = l.get, p = i.duration, _ = bn(p), x = i.preventOvershoot || _ && p.overshoot === 0, D = na(i, "resistance", Bs.resistance), h = Zs(p) ? p : dm(e, i, _ && p.max || 10, _ && p.min || .2, _ && "overshoot"in p ? +p.overshoot : x ? 0 : 1), b, v, E, C, L, A, P, M, z;
        i = Is,
        Is = 0,
        z = Ep(e, i, c, D);
        for (b in i)
            Cp[b] || (v = i[b],
            Jl(v) && (v = v(r, e, n)),
            Zs(v) ? L = v : bn(v) && !isNaN(v.velocity) ? L = +v.velocity : u && u.isTracking(b) ? L = u.get(b) : console.warn("ERROR: No velocity was defined for " + e + " property: " + b),
            A = Hf(L, h),
            M = 0,
            E = c(e, b),
            C = gp(E),
            E = parseFloat(E),
            bn(v) && (P = E + A,
            "end"in v && (v = wp(v, z && b in z ? z : P, v.max, v.min, b, i.radius, L)),
            "max"in v && +v.max < P ? x || v.preventOvershoot ? A = v.max - E : M = v.max - E - A : "min"in v && +v.min > P && (x || v.preventOvershoot ? A = v.min - E : M = v.min - E - A)),
            this._props.push(b),
            this.styles && this.styles.save(b),
            this._pt = new _p(this._pt,e,b,E,0,lm,0,l.set(e, b, this)),
            this._pt.u = C || 0,
            this._pt.c1 = A,
            this._pt.c2 = M);
        return t.duration(h),
        am
    },
    render: function(e, i) {
        var t = i._pt;
        if (e = Ql(i.tween._time / i.tween._dur),
        e || !vp())
            for (; t; )
                t.set(t.t, t.p, fm(t.s + t.c1 * e + t.c2 * e * e) + t.u, t.d, e),
                t = t._next;
        else
            i.styles.revert()
    }
};
"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(s) {
    return Tp[s] = tu[s]
});
Dp() && Yt.registerPlugin(Tp);
/*!
 * strings: 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var pm = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function Sp(s) {
    var e = s.nodeType
      , i = "";
    if (e === 1 || e === 9 || e === 11) {
        if (typeof s.textContent == "string")
            return s.textContent;
        for (s = s.firstChild; s; s = s.nextSibling)
            i += Sp(s)
    } else if (e === 3 || e === 4)
        return s.nodeValue;
    return i
}
/*!
 * SplitText: 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var So, Zl, kp, ss, Fp, pa, gm = /(?:\r|\n|\t\t)/g, _m = /(?:\s\s+)/g, mm = " ", Pp = function(e) {
    So = document,
    Zl = window,
    ss = ss || e || Zl.gsap || console.warn("Please gsap.registerPlugin(SplitText)"),
    ss && (pa = ss.utils.toArray,
    Fp = ss.core.context || function() {}
    ,
    kp = 1)
}, Ap = function(e) {
    return Zl.getComputedStyle(e)
}, zf = function(e) {
    return e.position === "absolute" || e.absolute === !0
}, ym = function(e, i) {
    for (var t = i.length, r; --t > -1; )
        if (r = i[t],
        e.substr(0, r.length) === r)
            return r.length
}, vm = " style='position:relative;display:inline-block;'", dh = function(e, i) {
    e === void 0 && (e = "");
    var t = ~e.indexOf("++")
      , r = 1;
    return t && (e = e.split("++").join("")),
    function() {
        return "<" + i + vm + (e ? " class='" + e + (t ? r++ : "") + "'>" : ">")
    }
}, Mp = function s(e, i, t) {
    var r = e.nodeType;
    if (r === 1 || r === 9 || r === 11)
        for (e = e.firstChild; e; e = e.nextSibling)
            s(e, i, t);
    else
        (r === 3 || r === 4) && (e.nodeValue = e.nodeValue.split(i).join(t))
}, ul = function(e, i) {
    for (var t = i.length; --t > -1; )
        e.push(i[t])
}, ph = function(e, i, t) {
    for (var r; e && e !== i; ) {
        if (r = e._next || e.nextSibling,
        r)
            return r.textContent.charAt(0) === t;
        e = e.parentNode || e._parent
    }
}, Dm = function s(e) {
    var i = pa(e.childNodes), t = i.length, r, n;
    for (r = 0; r < t; r++)
        n = i[r],
        n._isSplit ? s(n) : r && n.previousSibling && n.previousSibling.nodeType === 3 ? (n.previousSibling.nodeValue += n.nodeType === 3 ? n.nodeValue : n.firstChild.nodeValue,
        e.removeChild(n)) : n.nodeType !== 3 && (e.insertBefore(n.firstChild, n),
        e.removeChild(n))
}, wr = function(e, i) {
    return parseFloat(i[e]) || 0
}, xm = function(e, i, t, r, n, u, l) {
    var c = Ap(e), p = wr("paddingLeft", c), _ = -999, x = wr("borderBottomWidth", c) + wr("borderTopWidth", c), D = wr("borderLeftWidth", c) + wr("borderRightWidth", c), h = wr("paddingTop", c) + wr("paddingBottom", c), b = wr("paddingLeft", c) + wr("paddingRight", c), v = wr("fontSize", c) * (i.lineThreshold || .2), E = c.textAlign, C = [], L = [], A = [], P = i.wordDelimiter || " ", M = i.tag ? i.tag : i.span ? "span" : "div", z = i.type || i.split || "chars,words,lines", f = n && ~z.indexOf("lines") ? [] : null, q = ~z.indexOf("words"), H = ~z.indexOf("chars"), I = zf(i), ee = i.linesClass, K = ~(ee || "").indexOf("++"), G = [], ne = c.display === "flex", se = e.style.display, ae, oe, Ce, U, R, _e, be, $e, ve, we, ke, Ne;
    for (K && (ee = ee.split("++").join("")),
    ne && (e.style.display = "block"),
    oe = e.getElementsByTagName("*"),
    Ce = oe.length,
    R = [],
    ae = 0; ae < Ce; ae++)
        R[ae] = oe[ae];
    if (f || I)
        for (ae = 0; ae < Ce; ae++)
            U = R[ae],
            _e = U.parentNode === e,
            (_e || I || H && !q) && (Ne = U.offsetTop,
            f && _e && Math.abs(Ne - _) > v && (U.nodeName !== "BR" || ae === 0) && (be = [],
            f.push(be),
            _ = Ne),
            I && (U._x = U.offsetLeft,
            U._y = Ne,
            U._w = U.offsetWidth,
            U._h = U.offsetHeight),
            f && ((U._isSplit && _e || !H && _e || q && _e || !q && U.parentNode.parentNode === e && !U.parentNode._isSplit) && (be.push(U),
            U._x -= p,
            ph(U, e, P) && (U._wordEnd = !0)),
            U.nodeName === "BR" && (U.nextSibling && U.nextSibling.nodeName === "BR" || ae === 0) && f.push([])));
    for (ae = 0; ae < Ce; ae++) {
        if (U = R[ae],
        _e = U.parentNode === e,
        U.nodeName === "BR") {
            f || I ? (U.parentNode && U.parentNode.removeChild(U),
            R.splice(ae--, 1),
            Ce--) : q || e.appendChild(U);
            continue
        }
        if (I && (ve = U.style,
        !q && !_e && (U._x += U.parentNode._x,
        U._y += U.parentNode._y),
        ve.left = U._x + "px",
        ve.top = U._y + "px",
        ve.position = "absolute",
        ve.display = "block",
        ve.width = U._w + 1 + "px",
        ve.height = U._h + "px"),
        !q && H)
            if (U._isSplit)
                for (U._next = oe = U.nextSibling,
                U.parentNode.appendChild(U); oe && oe.nodeType === 3 && oe.textContent === " "; )
                    U._next = oe.nextSibling,
                    U.parentNode.appendChild(oe),
                    oe = oe.nextSibling;
            else
                U.parentNode._isSplit ? (U._parent = U.parentNode,
                !U.previousSibling && U.firstChild && (U.firstChild._isFirst = !0),
                U.nextSibling && U.nextSibling.textContent === " " && !U.nextSibling.nextSibling && G.push(U.nextSibling),
                U._next = U.nextSibling && U.nextSibling._isFirst ? null : U.nextSibling,
                U.parentNode.removeChild(U),
                R.splice(ae--, 1),
                Ce--) : _e || (Ne = !U.nextSibling && ph(U.parentNode, e, P),
                U.parentNode._parent && U.parentNode._parent.appendChild(U),
                Ne && U.parentNode.appendChild(So.createTextNode(" ")),
                M === "span" && (U.style.display = "inline"),
                C.push(U));
        else
            U.parentNode._isSplit && !U._isSplit && U.innerHTML !== "" ? L.push(U) : H && !U._isSplit && (M === "span" && (U.style.display = "inline"),
            C.push(U))
    }
    for (ae = G.length; --ae > -1; )
        G[ae].parentNode.removeChild(G[ae]);
    if (f) {
        for (I && (we = So.createElement(M),
        e.appendChild(we),
        ke = we.offsetWidth + "px",
        Ne = we.offsetParent === e ? 0 : e.offsetLeft,
        e.removeChild(we)),
        ve = e.style.cssText,
        e.style.cssText = "display:none;"; e.firstChild; )
            e.removeChild(e.firstChild);
        for ($e = P === " " && (!I || !q && !H),
        ae = 0; ae < f.length; ae++) {
            for (be = f[ae],
            we = So.createElement(M),
            we.style.cssText = "display:block;text-align:" + E + ";position:" + (I ? "absolute;" : "relative;"),
            ee && (we.className = ee + (K ? ae + 1 : "")),
            A.push(we),
            Ce = be.length,
            oe = 0; oe < Ce; oe++)
                be[oe].nodeName !== "BR" && (U = be[oe],
                we.appendChild(U),
                $e && U._wordEnd && we.appendChild(So.createTextNode(" ")),
                I && (oe === 0 && (we.style.top = U._y + "px",
                we.style.left = p + Ne + "px"),
                U.style.top = "0px",
                Ne && (U.style.left = U._x - Ne + "px")));
            Ce === 0 ? we.innerHTML = "&nbsp;" : !q && !H && (Dm(we),
            Mp(we, " ", " ")),
            I && (we.style.width = ke,
            we.style.height = U._h + "px"),
            e.appendChild(we)
        }
        e.style.cssText = ve
    }
    I && (l > e.clientHeight && (e.style.height = l - h + "px",
    e.clientHeight < l && (e.style.height = l + x + "px")),
    u > e.clientWidth && (e.style.width = u - b + "px",
    e.clientWidth < u && (e.style.width = u + D + "px"))),
    ne && (se ? e.style.display = se : e.style.removeProperty("display")),
    ul(t, C),
    q && ul(r, L),
    ul(n, A)
}, bm = function(e, i, t, r) {
    var n = i.tag ? i.tag : i.span ? "span" : "div", u = i.type || i.split || "chars,words,lines", l = ~u.indexOf("chars"), c = zf(i), p = i.wordDelimiter || " ", _ = function(I) {
        return I === p || I === mm && p === " "
    }, x = p !== " " ? "" : c ? "&#173; " : " ", D = "</" + n + ">", h = 1, b = i.specialChars ? typeof i.specialChars == "function" ? i.specialChars : ym : null, v, E, C, L, A, P, M, z, f = So.createElement("div"), q = e.parentNode;
    for (q.insertBefore(f, e),
    f.textContent = e.nodeValue,
    q.removeChild(e),
    e = f,
    v = Sp(e),
    M = v.indexOf("<") !== -1,
    i.reduceWhiteSpace !== !1 && (v = v.replace(_m, " ").replace(gm, "")),
    M && (v = v.split("<").join("{{LT}}")),
    A = v.length,
    E = (v.charAt(0) === " " ? x : "") + t(),
    C = 0; C < A; C++)
        if (P = v.charAt(C),
        b && (z = b(v.substr(C), i.specialChars)))
            P = v.substr(C, z || 1),
            E += l && P !== " " ? r() + P + "</" + n + ">" : P,
            C += z - 1;
        else if (_(P) && !_(v.charAt(C - 1)) && C) {
            for (E += h ? D : "",
            h = 0; _(v.charAt(C + 1)); )
                E += x,
                C++;
            C === A - 1 ? E += x : v.charAt(C + 1) !== ")" && (E += x + t(),
            h = 1)
        } else
            P === "{" && v.substr(C, 6) === "{{LT}}" ? (E += l ? r() + "{{LT}}</" + n + ">" : "{{LT}}",
            C += 5) : P.charCodeAt(0) >= 55296 && P.charCodeAt(0) <= 56319 || v.charCodeAt(C + 1) >= 65024 && v.charCodeAt(C + 1) <= 65039 ? (L = ((v.substr(C, 12).split(pm) || [])[1] || "").length || 2,
            E += l && P !== " " ? r() + v.substr(C, L) + "</" + n + ">" : v.substr(C, L),
            C += L - 1) : E += l && P !== " " ? r() + P + "</" + n + ">" : P;
    e.outerHTML = E + (h ? D : ""),
    M && Mp(q, "{{LT}}", "<")
}, wm = function s(e, i, t, r) {
    var n = pa(e.childNodes), u = n.length, l = zf(i), c, p;
    if (e.nodeType !== 3 || u > 1) {
        for (i.absolute = !1,
        c = 0; c < u; c++)
            p = n[c],
            p._next = p._isFirst = p._parent = p._wordEnd = null,
            (p.nodeType !== 3 || /\S+/.test(p.nodeValue)) && (l && p.nodeType !== 3 && Ap(p).display === "inline" && (p.style.display = "inline-block",
            p.style.position = "relative"),
            p._isSplit = !0,
            s(p, i, t, r));
        i.absolute = l,
        e._isSplit = !0;
        return
    }
    bm(e, i, t, r)
}, Op = function() {
    function s(i, t) {
        kp || Pp(),
        this.elements = pa(i),
        this.chars = [],
        this.words = [],
        this.lines = [],
        this._originals = [],
        this.vars = t || {},
        Fp(this),
        this.split(t)
    }
    var e = s.prototype;
    return e.split = function(t) {
        this.isSplit && this.revert(),
        this.vars = t = t || this.vars,
        this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var r = this.elements.length, n = t.tag ? t.tag : t.span ? "span" : "div", u = dh(t.wordsClass, n), l = dh(t.charsClass, n), c, p, _; --r > -1; )
            _ = this.elements[r],
            this._originals[r] = {
                html: _.innerHTML,
                style: _.getAttribute("style")
            },
            c = _.clientHeight,
            p = _.clientWidth,
            wm(_, t, u, l),
            xm(_, t, this.chars, this.words, this.lines, p, c);
        return this.chars.reverse(),
        this.words.reverse(),
        this.lines.reverse(),
        this.isSplit = !0,
        this
    }
    ,
    e.revert = function() {
        var t = this._originals;
        if (!t)
            throw "revert() call wasn't scoped properly.";
        return this.elements.forEach(function(r, n) {
            r.innerHTML = t[n].html,
            r.setAttribute("style", t[n].style || "")
        }),
        this.chars = [],
        this.words = [],
        this.lines = [],
        this.isSplit = !1,
        this
    }
    ,
    s.create = function(t, r) {
        return new s(t,r)
    }
    ,
    s
}();
Op.version = "3.12.7";
Op.register = Pp;
function Cm(s, e, i, t) {
    function r(n) {
        return n instanceof i ? n : new i(function(u) {
            u(n)
        }
        )
    }
    return new (i || (i = Promise))(function(n, u) {
        function l(_) {
            try {
                p(t.next(_))
            } catch (x) {
                u(x)
            }
        }
        function c(_) {
            try {
                p(t.throw(_))
            } catch (x) {
                u(x)
            }
        }
        function p(_) {
            _.done ? n(_.value) : r(_.value).then(l, c)
        }
        p((t = t.apply(s, [])).next())
    }
    )
}
function Em(s) {
    return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s
}
var Tm = function s(e, i) {
    if (e === i)
        return !0;
    if (e && i && typeof e == "object" && typeof i == "object") {
        if (e.constructor !== i.constructor)
            return !1;
        var t, r, n;
        if (Array.isArray(e)) {
            if (t = e.length,
            t != i.length)
                return !1;
            for (r = t; r-- !== 0; )
                if (!s(e[r], i[r]))
                    return !1;
            return !0
        }
        if (e.constructor === RegExp)
            return e.source === i.source && e.flags === i.flags;
        if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === i.valueOf();
        if (e.toString !== Object.prototype.toString)
            return e.toString() === i.toString();
        if (n = Object.keys(e),
        t = n.length,
        t !== Object.keys(i).length)
            return !1;
        for (r = t; r-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(i, n[r]))
                return !1;
        for (r = t; r-- !== 0; ) {
            var u = n[r];
            if (!s(e[u], i[u]))
                return !1
        }
        return !0
    }
    return e !== e && i !== i
}
  , Sm = Em(Tm);
const gh = "__googleMapsScriptId";
var ko;
(function(s) {
    s[s.INITIALIZED = 0] = "INITIALIZED",
    s[s.LOADING = 1] = "LOADING",
    s[s.SUCCESS = 2] = "SUCCESS",
    s[s.FAILURE = 3] = "FAILURE"
}
)(ko || (ko = {}));
class vo {
    constructor({apiKey: e, authReferrerPolicy: i, channel: t, client: r, id: n=gh, language: u, libraries: l=[], mapIds: c, nonce: p, region: _, retries: x=3, url: D="https://maps.googleapis.com/maps/api/js", version: h}) {
        if (this.callbacks = [],
        this.done = !1,
        this.loading = !1,
        this.errors = [],
        this.apiKey = e,
        this.authReferrerPolicy = i,
        this.channel = t,
        this.client = r,
        this.id = n || gh,
        this.language = u,
        this.libraries = l,
        this.mapIds = c,
        this.nonce = p,
        this.region = _,
        this.retries = x,
        this.url = D,
        this.version = h,
        vo.instance) {
            if (!Sm(this.options, vo.instance.options))
                throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(vo.instance.options)}`);
            return vo.instance
        }
        vo.instance = this
    }
    get options() {
        return {
            version: this.version,
            apiKey: this.apiKey,
            channel: this.channel,
            client: this.client,
            id: this.id,
            libraries: this.libraries,
            language: this.language,
            region: this.region,
            mapIds: this.mapIds,
            nonce: this.nonce,
            url: this.url,
            authReferrerPolicy: this.authReferrerPolicy
        }
    }
    get status() {
        return this.errors.length ? ko.FAILURE : this.done ? ko.SUCCESS : this.loading ? ko.LOADING : ko.INITIALIZED
    }
    get failed() {
        return this.done && !this.loading && this.errors.length >= this.retries + 1
    }
    createUrl() {
        let e = this.url;
        return e += "?callback=__googleMapsCallback&loading=async",
        this.apiKey && (e += `&key=${this.apiKey}`),
        this.channel && (e += `&channel=${this.channel}`),
        this.client && (e += `&client=${this.client}`),
        this.libraries.length > 0 && (e += `&libraries=${this.libraries.join(",")}`),
        this.language && (e += `&language=${this.language}`),
        this.region && (e += `&region=${this.region}`),
        this.version && (e += `&v=${this.version}`),
        this.mapIds && (e += `&map_ids=${this.mapIds.join(",")}`),
        this.authReferrerPolicy && (e += `&auth_referrer_policy=${this.authReferrerPolicy}`),
        e
    }
    deleteScript() {
        const e = document.getElementById(this.id);
        e && e.remove()
    }
    load() {
        return this.loadPromise()
    }
    loadPromise() {
        return new Promise( (e, i) => {
            this.loadCallback(t => {
                t ? i(t.error) : e(window.google)
            }
            )
        }
        )
    }
    importLibrary(e) {
        return this.execute(),
        google.maps.importLibrary(e)
    }
    loadCallback(e) {
        this.callbacks.push(e),
        this.execute()
    }
    setScript() {
        var e, i;
        if (document.getElementById(this.id)) {
            this.callback();
            return
        }
        const t = {
            key: this.apiKey,
            channel: this.channel,
            client: this.client,
            libraries: this.libraries.length && this.libraries,
            v: this.version,
            mapIds: this.mapIds,
            language: this.language,
            region: this.region,
            authReferrerPolicy: this.authReferrerPolicy
        };
        Object.keys(t).forEach(n => !t[n] && delete t[n]),
        !((i = (e = window == null ? void 0 : window.google) === null || e === void 0 ? void 0 : e.maps) === null || i === void 0) && i.importLibrary || (n => {
            let u, l, c, p = "The Google Maps JavaScript API", _ = "google", x = "importLibrary", D = "__ib__", h = document, b = window;
            b = b[_] || (b[_] = {});
            const v = b.maps || (b.maps = {})
              , E = new Set
              , C = new URLSearchParams
              , L = () => u || (u = new Promise( (A, P) => Cm(this, void 0, void 0, function*() {
                var M;
                yield l = h.createElement("script"),
                l.id = this.id,
                C.set("libraries", [...E] + "");
                for (c in n)
                    C.set(c.replace(/[A-Z]/g, z => "_" + z[0].toLowerCase()), n[c]);
                C.set("callback", _ + ".maps." + D),
                l.src = this.url + "?" + C,
                v[D] = A,
                l.onerror = () => u = P(Error(p + " could not load.")),
                l.nonce = this.nonce || ((M = h.querySelector("script[nonce]")) === null || M === void 0 ? void 0 : M.nonce) || "",
                h.head.append(l)
            })));
            v[x] ? console.warn(p + " only loads once. Ignoring:", n) : v[x] = (A, ...P) => E.add(A) && L().then( () => v[x](A, ...P))
        }
        )(t);
        const r = this.libraries.map(n => this.importLibrary(n));
        r.length || r.push(this.importLibrary("core")),
        Promise.all(r).then( () => this.callback(), n => {
            const u = new ErrorEvent("error",{
                error: n
            });
            this.loadErrorCallback(u)
        }
        )
    }
    reset() {
        this.deleteScript(),
        this.done = !1,
        this.loading = !1,
        this.errors = [],
        this.onerrorEvent = null
    }
    resetIfRetryingFailed() {
        this.failed && this.reset()
    }
    loadErrorCallback(e) {
        if (this.errors.push(e),
        this.errors.length <= this.retries) {
            const i = this.errors.length * Math.pow(2, this.errors.length);
            console.error(`Failed to load Google Maps script, retrying in ${i} ms.`),
            setTimeout( () => {
                this.deleteScript(),
                this.setScript()
            }
            , i)
        } else
            this.onerrorEvent = e,
            this.callback()
    }
    callback() {
        this.done = !0,
        this.loading = !1,
        this.callbacks.forEach(e => {
            e(this.onerrorEvent)
        }
        ),
        this.callbacks = []
    }
    execute() {
        if (this.resetIfRetryingFailed(),
        !this.loading)
            if (this.done)
                this.callback();
            else {
                if (window.google && window.google.maps && window.google.maps.version) {
                    console.warn("Google Maps already loaded outside @googlemaps/js-api-loader. This may result in undesirable behavior as options and script parameters may not match."),
                    this.callback();
                    return
                }
                this.loading = !0,
                this.setScript()
            }
    }
}
export {Fm as $, da as D, Nf as F, Tp as I, Pm as L, tt as S, Am as Z, Op as a, vo as b, P0 as g};
