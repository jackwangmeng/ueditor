webpackJsonp([1], {
    "0pbF": function(e, t) {},
    "8Fmz": function(e, t) {},
    "8os4": function(e, t) { !
        function() {
            var e = window.UEDITOR_HOME_URL || t();
            function t(e, t) {
                return function(e, t) {
                    var n = t;
                    /^(\/|\\\\)/.test(t) ? n = /^.+?\w(\/|\\\\)/.exec(e)[0] + t.replace(/^(\/|\\\\)/, "") : /^[a-z]+:/i.test(t) || (e = e.split("#")[0].split("?")[0].replace(/[^\\\/]+$/, ""), n = e + "" + t);
                    return function(e) {
                        var t = /^[a-z]+:\/\//.exec(e)[0],
                        n = null,
                        i = []; (e = (e = e.replace(t, "").split("?")[0].split("#")[0]).replace(/\\/g, "/").split(/\//))[e.length - 1] = "";
                        for (; e.length;)".." === (n = e.shift()) ? i.pop() : "." !== n && i.push(n);
                        return t + i.join("/")
                    } (n)
                } (e || self.document.URL || self.location.href, t || (n = document.getElementsByTagName("script"))[n.length - 1].src);
                var n
            }
            window.UEDITOR_CONFIG = {
                UEDITOR_HOME_URL: e,
                serverUrl: "https://operationgwdev.bgycc.com/zuul/phantom-service-storage/ueditor/exec",
                toolbars: [["fullscreen", "source", "|", "undo", "redo", "|", "bold", "italic", "underline", "fontborder", "strikethrough", "superscript", "subscript", "removeformat", "formatmatch", "autotypeset", "blockquote", "pasteplain", "|", "forecolor", "backcolor", "insertorderedlist", "insertunorderedlist", "selectall", "cleardoc", "|", "rowspacingtop", "rowspacingbottom", "lineheight", "|", "customstyle", "paragraph", "fontfamily", "fontsize", "|", "directionalityltr", "directionalityrtl", "indent", "|", "justifyleft", "justifycenter", "justifyright", "justifyjustify", "|", "touppercase", "tolowercase", "|", "link", "unlink", "anchor", "|", "imagenone", "imageleft", "imageright", "imagecenter", "|", "simpleupload", "insertimage", "emotion", "scrawl", "insertvideo", "music", "attachment", "map", "gmap", "insertframe", "insertcode", "webapp", "pagebreak", "template", "background", "|", "horizontal", "date", "time", "spechars", "snapscreen", "wordimage", "|", "inserttable", "deletetable", "insertparagraphbeforetable", "insertrow", "deleterow", "insertcol", "deletecol", "mergecells", "mergeright", "mergedown", "splittocells", "splittorows", "splittocols", "charts", "|", "print", "preview", "searchreplace", "drafts", "help"]],
                xssFilterRules: !0,
                inputXssFilter: !0,
                outputXssFilter: !0,
                whitList: {
                    a: ["target", "href", "title", "class", "style"],
                    abbr: ["title", "class", "style"],
                    address: ["class", "style"],
                    area: ["shape", "coords", "href", "alt"],
                    article: [],
                    aside: [],
                    audio: ["autoplay", "controls", "loop", "preload", "src", "class", "style"],
                    b: ["class", "style"],
                    bdi: ["dir"],
                    bdo: ["dir"],
                    big: [],
                    blockquote: ["cite", "class", "style"],
                    br: [],
                    caption: ["class", "style"],
                    center: [],
                    cite: [],
                    code: ["class", "style"],
                    col: ["align", "valign", "span", "width", "class", "style"],
                    colgroup: ["align", "valign", "span", "width", "class", "style"],
                    dd: ["class", "style"],
                    del: ["datetime"],
                    details: ["open"],
                    div: ["class", "style"],
                    dl: ["class", "style"],
                    dt: ["class", "style"],
                    em: ["class", "style"],
                    font: ["color", "size", "face"],
                    footer: [],
                    h1: ["class", "style"],
                    h2: ["class", "style"],
                    h3: ["class", "style"],
                    h4: ["class", "style"],
                    h5: ["class", "style"],
                    h6: ["class", "style"],
                    header: [],
                    hr: [],
                    i: ["class", "style"],
                    img: ["src", "alt", "title", "width", "height", "id", "_src", "loadingclass", "class", "data-latex"],
                    ins: ["datetime"],
                    li: ["class", "style"],
                    mark: [],
                    nav: [],
                    ol: ["class", "style"],
                    p: ["class", "style"],
                    pre: ["class", "style"],
                    s: [],
                    section: [],
                    small: [],
                    span: ["class", "style"],
                    sub: ["class", "style"],
                    sup: ["class", "style"],
                    strong: ["class", "style"],
                    table: ["width", "border", "align", "valign", "class", "style"],
                    tbody: ["align", "valign", "class", "style"],
                    td: ["width", "rowspan", "colspan", "align", "valign", "class", "style"],
                    tfoot: ["align", "valign", "class", "style"],
                    th: ["width", "rowspan", "colspan", "align", "valign", "class", "style"],
                    thead: ["align", "valign", "class", "style"],
                    tr: ["rowspan", "align", "valign", "class", "style"],
                    tt: [],
                    u: [],
                    ul: ["class", "style"],
                    video: ["autoplay", "controls", "loop", "preload", "src", "height", "width", "class", "style"]
                }
            },
            console.log(window.UEDITOR_CONFIG),
            window.UE = {
                getUEBasePath: t
            }
        } ()
    },
    KchE: function(module, exports) {
        /*!
 * UEditor
 * version: ueditor
 * build: Wed Aug 10 2016 11:06:16 GMT+0800 (CST)
 */
        !
        function() {
            UEDITOR_CONFIG = window.UEDITOR_CONFIG || {};
            var baidu = window.baidu || {};
            window.baidu = baidu,
            window.UE = baidu.editor = window.UE || {},
            UE.plugins = {},
            UE.commands = {},
            UE.instants = {},
            UE.I18N = {},
            UE._customizeUI = {},
            UE.version = "1.4.3";
            var dom = UE.dom = {},
            browser = UE.browser = function() {
                var e = navigator.userAgent.toLowerCase(),
                t = window.opera,
                n = {
                    ie: /(msie\s|trident.*rv:)([\w.]+)/.test(e),
                    opera: !!t && t.version,
                    webkit: e.indexOf(" applewebkit/") > -1,
                    mac: e.indexOf("macintosh") > -1,
                    quirks: "BackCompat" == document.compatMode
                };
                n.gecko = "Gecko" == navigator.product && !n.webkit && !n.opera && !n.ie;
                var i = 0;
                if (n.ie) {
                    var o = e.match(/(?:msie\s([\w.]+))/),
                    r = e.match(/(?:trident.*rv:([\w.]+))/);
                    i = o && r && o[1] && r[1] ? Math.max(1 * o[1], 1 * r[1]) : o && o[1] ? 1 * o[1] : r && r[1] ? 1 * r[1] : 0,
                    n.ie11Compat = 11 == document.documentMode,
                    n.ie9Compat = 9 == document.documentMode,
                    n.ie8 = !!document.documentMode,
                    n.ie8Compat = 8 == document.documentMode,
                    n.ie7Compat = 7 == i && !document.documentMode || 7 == document.documentMode,
                    n.ie6Compat = i < 7 || n.quirks,
                    n.ie9above = i > 8,
                    n.ie9below = i < 9,
                    n.ie11above = i > 10,
                    n.ie11below = i < 11
                }
                if (n.gecko) {
                    var a = e.match(/rv:([\d\.]+)/);
                    a && (i = 1e4 * (a = a[1].split("."))[0] + 100 * (a[1] || 0) + 1 * (a[2] || 0))
                }
                return /chrome\/(\d+\.\d)/i.test(e) && (n.chrome = +RegExp.$1),
                /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(e) && !/chrome/i.test(e) && (n.safari = +(RegExp.$1 || RegExp.$2)),
                n.opera && (i = parseFloat(t.version())),
                n.webkit && (i = parseFloat(e.match(/ applewebkit\/(\d+)/)[1])),
                n.version = i,
                n.isCompatible = !n.mobile && (n.ie && i >= 6 || n.gecko && i >= 10801 || n.opera && i >= 9.5 || n.air && i >= 1 || n.webkit && i >= 522 || !1),
                n
            } (),
            ie = browser.ie,
            webkit = browser.webkit,
            gecko = browser.gecko,
            opera = browser.opera,
            utils = UE.utils = {
                each: function(e, t, n) {
                    if (null != e) if (e.length === +e.length) {
                        for (var i = 0,
                        o = e.length; i < o; i++) if (!1 === t.call(n, e[i], i, e)) return ! 1
                    } else for (var r in e) if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) return ! 1
                },
                makeInstance: function(e) {
                    var t = new Function;
                    return t.prototype = e,
                    e = new t,
                    t.prototype = null,
                    e
                },
                extend: function(e, t, n) {
                    if (t) for (var i in t) n && e.hasOwnProperty(i) || (e[i] = t[i]);
                    return e
                },
                extend2: function(e) {
                    for (var t = arguments,
                    n = 1; n < t.length; n++) {
                        var i = t[n];
                        for (var o in i) e.hasOwnProperty(o) || (e[o] = i[o])
                    }
                    return e
                },
                inherits: function(e, t) {
                    var n = e.prototype,
                    i = utils.makeInstance(t.prototype);
                    return utils.extend(i, n, !0),
                    e.prototype = i,
                    i.constructor = e
                },
                bind: function(e, t) {
                    return function() {
                        return e.apply(t, arguments)
                    }
                },
                defer: function(e, t, n) {
                    var i;
                    return function() {
                        n && clearTimeout(i),
                        i = setTimeout(e, t)
                    }
                },
                indexOf: function(e, t, n) {
                    var i = -1;
                    return n = this.isNumber(n) ? n: 0,
                    this.each(e,
                    function(e, o) {
                        if (o >= n && e === t) return i = o,
                        !1
                    }),
                    i
                },
                removeItem: function(e, t) {
                    for (var n = 0,
                    i = e.length; n < i; n++) e[n] === t && (e.splice(n, 1), n--)
                },
                trim: function(e) {
                    return e.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, "")
                },
                listToMap: function(e) {
                    if (!e) return {};
                    e = utils.isArray(e) ? e: e.split(",");
                    for (var t, n = 0,
                    i = {}; t = e[n++];) i[t.toUpperCase()] = i[t] = 1;
                    return i
                },
                unhtml: function(e, t) {
                    return e ? e.replace(t || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp|#\d+);)?/g,
                    function(e, t) {
                        return t ? e: {
                            "<": "&lt;",
                            "&": "&amp;",
                            '"': "&quot;",
                            ">": "&gt;",
                            "'": "&#39;"
                        } [e]
                    }) : ""
                },
                unhtmlForUrl: function(e, t) {
                    return e ? e.replace(t || /[<">']/g,
                    function(e) {
                        return {
                            "<": "&lt;",
                            "&": "&amp;",
                            '"': "&quot;",
                            ">": "&gt;",
                            "'": "&#39;"
                        } [e]
                    }) : ""
                },
                html: function(e) {
                    return e ? e.replace(/&((g|l|quo)t|amp|#39|nbsp);/g,
                    function(e) {
                        return {
                            "&lt;": "<",
                            "&amp;": "&",
                            "&quot;": '"',
                            "&gt;": ">",
                            "&#39;": "'",
                            "&nbsp;": " "
                        } [e]
                    }) : ""
                },
                cssStyleToDomStyle: (test = document.createElement("div").style, cache = {
                    float: void 0 != test.cssFloat ? "cssFloat": void 0 != test.styleFloat ? "styleFloat": "float"
                },
                function(e) {
                    return cache[e] || (cache[e] = e.toLowerCase().replace(/-./g,
                    function(e) {
                        return e.charAt(1).toUpperCase()
                    }))
                }),
                loadFile: function() {
                    var e = [];
                    function t(t, n) {
                        try {
                            for (var i, o = 0; i = e[o++];) if (i.doc === t && i.url == (n.src || n.href)) return i
                        } catch(e) {
                            return null
                        }
                    }
                    return function(n, i, o) {
                        var r = t(n, i);
                        if (r) r.ready ? o && o() : r.funs.push(o);
                        else if (e.push({
                            doc: n,
                            url: i.src || i.href,
                            funs: [o]
                        }), n.body) {
                            if (!i.id || !n.getElementById(i.id)) {
                                var a = n.createElement(i.tag);
                                for (var s in delete i.tag,
                                i) a.setAttribute(s, i[s]);
                                a.onload = a.onreadystatechange = function() {
                                    if (!this.readyState || /loaded|complete/.test(this.readyState)) {
                                        if ((r = t(n, i)).funs.length > 0) {
                                            r.ready = 1;
                                            for (var e; e = r.funs.pop();) e()
                                        }
                                        a.onload = a.onreadystatechange = null
                                    }
                                },
                                a.onerror = function() {
                                    throw Error("The load " + (i.href || i.src) + " fails,check the url settings of file ueditor.config.js ")
                                },
                                n.getElementsByTagName("head")[0].appendChild(a)
                            }
                        } else {
                            var l = [];
                            for (var s in i)"tag" != s && l.push(s + '="' + i[s] + '"');
                            n.write("<" + i.tag + " " + l.join(" ") + " ></" + i.tag + ">")
                        }
                    }
                } (),
                isEmptyObject: function(e) {
                    if (null == e) return ! 0;
                    if (this.isArray(e) || this.isString(e)) return 0 === e.length;
                    for (var t in e) if (e.hasOwnProperty(t)) return ! 1;
                    return ! 0
                },
                fixColor: function(e, t) {
                    if (/color/i.test(e) && /rgba?/.test(t)) {
                        var n = t.split(",");
                        if (n.length > 3) return "";
                        t = "#";
                        for (var i, o = 0; i = n[o++];) t += 1 == (i = parseInt(i.replace(/[^\d]/gi, ""), 10).toString(16)).length ? "0" + i: i;
                        t = t.toUpperCase()
                    }
                    return t
                },
                optCss: function(e) {
                    var t, n;
                    function i(e, t) {
                        if (!e) return "";
                        var n = e.top,
                        i = e.bottom,
                        o = e.left,
                        r = e.right,
                        a = "";
                        if (n && o && i && r) a += ";" + t + ":" + (n == i && i == o && o == r ? n: n == i && o == r ? n + " " + o: o == r ? n + " " + o + " " + i: n + " " + r + " " + i + " " + o) + ";";
                        else for (var s in e) a += ";" + t + "-" + s + ":" + e[s] + ";";
                        return a
                    }
                    return e = e.replace(/(padding|margin|border)\-([^:]+):([^;]+);?/gi,
                    function(e, i, o, r) {
                        if (1 == r.split(" ").length) switch (i) {
                        case "padding":
                            return ! t && (t = {}),
                            t[o] = r,
                            "";
                        case "margin":
                            return ! n && (n = {}),
                            n[o] = r,
                            "";
                        case "border":
                            return "initial" == r ? "": e
                        }
                        return e
                    }),
                    (e += i(t, "padding") + i(n, "margin")).replace(/^[ \n\r\t;]*|[ \n\r\t]*$/, "").replace(/;([ \n\r\t]+)|\1;/g, ";").replace(/(&((l|g)t|quot|#39))?;{2,}/g,
                    function(e, t) {
                        return t ? t + ";;": ";"
                    })
                },
                clone: function(e, t) {
                    var n;
                    for (var i in t = t || {},
                    e) e.hasOwnProperty(i) && ("object" == typeof(n = e[i]) ? (t[i] = utils.isArray(n) ? [] : {},
                    utils.clone(e[i], t[i])) : t[i] = n);
                    return t
                },
                transUnitToPx: function(e) {
                    if (!/(pt|cm)/.test(e)) return e;
                    var t;
                    switch (e.replace(/([\d.]+)(\w+)/,
                    function(n, i, o) {
                        e = i,
                        t = o
                    }), t) {
                    case "cm":
                        e = 25 * parseFloat(e);
                        break;
                    case "pt":
                        e = Math.round(96 * parseFloat(e) / 72)
                    }
                    return e + (e ? "px": "")
                },
                domReady: function() {
                    var e = [];
                    function t(t) {
                        t.isReady = !0;
                        for (var n; n = e.pop(); n());
                    }
                    return function(n, i) {
                        var o = (i = i || window).document;
                        n && e.push(n),
                        "complete" === o.readyState ? t(o) : (o.isReady && t(o), browser.ie && 11 != browser.version ? (!
                        function() {
                            if (!o.isReady) {
                                try {
                                    o.documentElement.doScroll("left")
                                } catch(e) {
                                    return void setTimeout(arguments.callee, 0)
                                }
                                t(o)
                            }
                        } (), i.attachEvent("onload",
                        function() {
                            t(o)
                        })) : (o.addEventListener("DOMContentLoaded",
                        function() {
                            o.removeEventListener("DOMContentLoaded", arguments.callee, !1),
                            t(o)
                        },
                        !1), i.addEventListener("load",
                        function() {
                            t(o)
                        },
                        !1)))
                    }
                } (),
                cssRule: browser.ie && 11 != browser.version ?
                function(e, t, n) {
                    var i, o;
                    return void 0 === t || t && t.nodeType && 9 == t.nodeType ? void 0 !== (o = (i = (n = t && t.nodeType && 9 == t.nodeType ? t: n || document).indexList || (n.indexList = {}))[e]) ? n.styleSheets[o].cssText: void 0 : (o = (i = (n = n || document).indexList || (n.indexList = {}))[e], "" === t ? void 0 !== o && (n.styleSheets[o].cssText = "", delete i[e], !0) : (void 0 !== o ? sheetStyle = n.styleSheets[o] : (sheetStyle = n.createStyleSheet("", o = n.styleSheets.length), i[e] = o), void(sheetStyle.cssText = t)))
                }: function(e, t, n) {
                    var i;
                    return void 0 === t || t && t.nodeType && 9 == t.nodeType ? (i = (n = t && t.nodeType && 9 == t.nodeType ? t: n || document).getElementById(e)) ? i.innerHTML: void 0 : (i = (n = n || document).getElementById(e), "" === t ? !!i && (i.parentNode.removeChild(i), !0) : void(i ? i.innerHTML = t: ((i = n.createElement("style")).id = e, i.innerHTML = t, n.getElementsByTagName("head")[0].appendChild(i))))
                },
                sort: function(e, t) {
                    t = t ||
                    function(e, t) {
                        return e.localeCompare(t)
                    };
                    for (var n = 0,
                    i = e.length; n < i; n++) for (var o = n,
                    r = e.length; o < r; o++) if (t(e[n], e[o]) > 0) {
                        var a = e[n];
                        e[n] = e[o],
                        e[o] = a
                    }
                    return e
                },
                serializeParam: function(e) {
                    var t = [];
                    for (var n in e) if ("method" != n && "timeout" != n && "async" != n) if ("function" != (typeof e[n]).toLowerCase() && "object" != (typeof e[n]).toLowerCase()) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                    else if (utils.isArray(e[n])) for (var i = 0; i < e[n].length; i++) t.push(encodeURIComponent(n) + "[]=" + encodeURIComponent(e[n][i]));
                    return t.join("&")
                },
                formatUrl: function(e) {
                    var t = e.replace(/&&/g, "&");
                    return t = (t = (t = (t = t.replace(/\?&/g, "?")).replace(/&$/g, "")).replace(/&#/g, "#")).replace(/&+/g, "&")
                },
                isCrossDomainUrl: function(e) {
                    var t = document.createElement("a");
                    return t.href = e,
                    browser.ie && (t.href = t.href),
                    !(t.protocol == location.protocol && t.hostname == location.hostname && (t.port == location.port || "80" == t.port && "" == location.port || "" == t.port && "80" == location.port))
                },
                clearEmptyAttrs: function(e) {
                    for (var t in e)"" === e[t] && delete e[t];
                    return e
                },
                str2json: function(e) {
                    return utils.isString(e) ? window.JSON ? JSON.parse(e) : new Function("return " + utils.trim(e || ""))() : null
                },
                json2str: function() {
                    if (window.JSON) return JSON.stringify; {
                        var e = {
                            "\b": "\\b",
                            "\t": "\\t",
                            "\n": "\\n",
                            "\f": "\\f",
                            "\r": "\\r",
                            '"': '\\"',
                            "\\": "\\\\"
                        };
                        function t(e) {
                            return e < 10 ? "0" + e: e
                        }
                        return function(n) {
                            switch (typeof n) {
                            case "undefined":
                                return "undefined";
                            case "number":
                                return isFinite(n) ? String(n) : "null";
                            case "string":
                                return /["\\\x00-\x1f]/.test(l = n) && (l = l.replace(/["\\\x00-\x1f]/g,
                                function(t) {
                                    var n = e[t];
                                    return n || (n = t.charCodeAt(), "\\u00" + Math.floor(n / 16).toString(16) + (n % 16).toString(16))
                                })),
                                '"' + l + '"';
                            case "boolean":
                                return String(n);
                            default:
                                if (null === n) return "null";
                                if (utils.isArray(n)) return function(e) {
                                    var t, n, i, o = ["["],
                                    r = e.length;
                                    for (n = 0; n < r; n++) switch (typeof(i = e[n])) {
                                    case "undefined":
                                    case "function":
                                    case "unknown":
                                        break;
                                    default:
                                        t && o.push(","),
                                        o.push(utils.json2str(i)),
                                        t = 1
                                    }
                                    return o.push("]"),
                                    o.join("")
                                } (n);
                                if (utils.isDate(n)) return function(e) {
                                    return '"' + e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + "T" + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + '"'
                                } (n);
                                var i, o, r = ["{"],
                                a = utils.json2str;
                                for (var s in n) if (Object.prototype.hasOwnProperty.call(n, s)) switch (typeof(o = n[s])) {
                                case "undefined":
                                case "unknown":
                                case "function":
                                    break;
                                default:
                                    i && r.push(","),
                                    i = 1,
                                    r.push(a(s) + ":" + a(o))
                                }
                                return r.push("}"),
                                r.join("")
                            }
                            var l
                        }
                    }
                } ()
            },
            test,
            cache;
            utils.each(["String", "Function", "Array", "Number", "RegExp", "Object", "Date"],
            function(e) {
                UE.utils["is" + e] = function(t) {
                    return Object.prototype.toString.apply(t) == "[object " + e + "]"
                }
            });
            var EventBase = UE.EventBase = function() {};
            function getListener(e, t, n) {
                var i;
                return t = t.toLowerCase(),
                (i = e.__allListeners || n && (e.__allListeners = {})) && (i[t] || n && (i[t] = []))
            }
            EventBase.prototype = {
                addListener: function(e, t) {
                    e = utils.trim(e).split(/\s+/);
                    for (var n, i = 0; n = e[i++];) getListener(this, n, !0).push(t)
                },
                on: function(e, t) {
                    return this.addListener(e, t)
                },
                off: function(e, t) {
                    return this.removeListener(e, t)
                },
                trigger: function() {
                    return this.fireEvent.apply(this, arguments)
                },
                removeListener: function(e, t) {
                    e = utils.trim(e).split(/\s+/);
                    for (var n, i = 0; n = e[i++];) utils.removeItem(getListener(this, n) || [], t)
                },
                fireEvent: function() {
                    var e = arguments[0];
                    e = utils.trim(e).split(" ");
                    for (var t, n = 0; t = e[n++];) {
                        var i, o, r, a = getListener(this, t);
                        if (a) for (r = a.length; r--;) if (a[r]) {
                            if (!0 === (o = a[r].apply(this, arguments))) return o;
                            void 0 !== o && (i = o)
                        } (o = this["on" + t.toLowerCase()]) && (i = o.apply(this, arguments))
                    }
                    return i
                }
            };
            var dtd = dom.dtd = function() {
                function e(e) {
                    for (var t in e) e[t.toUpperCase()] = e[t];
                    return e
                }
                var t = utils.extend2,
                n = e({
                    isindex: 1,
                    fieldset: 1
                }),
                i = e({
                    input: 1,
                    button: 1,
                    select: 1,
                    textarea: 1,
                    label: 1
                }),
                o = t(e({
                    a: 1
                }), i),
                r = t({
                    iframe: 1
                },
                o),
                a = e({
                    hr: 1,
                    ul: 1,
                    menu: 1,
                    div: 1,
                    blockquote: 1,
                    noscript: 1,
                    table: 1,
                    center: 1,
                    address: 1,
                    dir: 1,
                    pre: 1,
                    h5: 1,
                    dl: 1,
                    h4: 1,
                    noframes: 1,
                    h6: 1,
                    ol: 1,
                    h1: 1,
                    h3: 1,
                    h2: 1
                }),
                s = e({
                    ins: 1,
                    del: 1,
                    script: 1,
                    style: 1
                }),
                l = t(e({
                    b: 1,
                    acronym: 1,
                    bdo: 1,
                    var: 1,
                    "#": 1,
                    abbr: 1,
                    code: 1,
                    br: 1,
                    i: 1,
                    cite: 1,
                    kbd: 1,
                    u: 1,
                    strike: 1,
                    s: 1,
                    tt: 1,
                    strong: 1,
                    q: 1,
                    samp: 1,
                    em: 1,
                    dfn: 1,
                    span: 1
                }), s),
                d = t(e({
                    sub: 1,
                    img: 1,
                    embed: 1,
                    object: 1,
                    sup: 1,
                    basefont: 1,
                    map: 1,
                    applet: 1,
                    font: 1,
                    big: 1,
                    small: 1
                }), l),
                c = t(e({
                    p: 1
                }), d),
                u = t(e({
                    iframe: 1
                }), d, i),
                m = e({
                    img: 1,
                    embed: 1,
                    noscript: 1,
                    br: 1,
                    kbd: 1,
                    center: 1,
                    button: 1,
                    basefont: 1,
                    h5: 1,
                    h4: 1,
                    samp: 1,
                    h6: 1,
                    ol: 1,
                    h1: 1,
                    h3: 1,
                    h2: 1,
                    form: 1,
                    font: 1,
                    "#": 1,
                    select: 1,
                    menu: 1,
                    ins: 1,
                    abbr: 1,
                    label: 1,
                    code: 1,
                    table: 1,
                    script: 1,
                    cite: 1,
                    input: 1,
                    iframe: 1,
                    strong: 1,
                    textarea: 1,
                    noframes: 1,
                    big: 1,
                    small: 1,
                    span: 1,
                    hr: 1,
                    sub: 1,
                    bdo: 1,
                    var: 1,
                    div: 1,
                    object: 1,
                    sup: 1,
                    strike: 1,
                    dir: 1,
                    map: 1,
                    dl: 1,
                    applet: 1,
                    del: 1,
                    isindex: 1,
                    fieldset: 1,
                    ul: 1,
                    b: 1,
                    acronym: 1,
                    a: 1,
                    blockquote: 1,
                    i: 1,
                    u: 1,
                    s: 1,
                    tt: 1,
                    address: 1,
                    q: 1,
                    pre: 1,
                    p: 1,
                    em: 1,
                    dfn: 1
                }),
                f = t(e({
                    a: 0
                }), u),
                p = e({
                    tr: 1
                }),
                h = e({
                    "#": 1
                }),
                g = t(e({
                    param: 1
                }), m),
                v = t(e({
                    form: 1
                }), n, r, a, c),
                b = e({
                    li: 1,
                    ol: 1,
                    ul: 1
                }),
                y = e({
                    style: 1,
                    script: 1
                }),
                C = e({
                    base: 1,
                    link: 1,
                    meta: 1,
                    title: 1
                }),
                x = t(C, y),
                w = e({
                    head: 1,
                    body: 1
                }),
                N = e({
                    html: 1
                }),
                E = e({
                    address: 1,
                    blockquote: 1,
                    center: 1,
                    dir: 1,
                    div: 1,
                    dl: 1,
                    fieldset: 1,
                    form: 1,
                    h1: 1,
                    h2: 1,
                    h3: 1,
                    h4: 1,
                    h5: 1,
                    h6: 1,
                    hr: 1,
                    isindex: 1,
                    menu: 1,
                    noframes: 1,
                    ol: 1,
                    p: 1,
                    pre: 1,
                    table: 1,
                    ul: 1
                }),
                T = e({
                    area: 1,
                    base: 1,
                    basefont: 1,
                    br: 1,
                    col: 1,
                    command: 1,
                    dialog: 1,
                    embed: 1,
                    hr: 1,
                    img: 1,
                    input: 1,
                    isindex: 1,
                    keygen: 1,
                    link: 1,
                    meta: 1,
                    param: 1,
                    source: 1,
                    track: 1,
                    wbr: 1
                });
                return e({
                    $nonBodyContent: t(N, w, C),
                    $block: E,
                    $inline: f,
                    $inlineWithA: t(e({
                        a: 1
                    }), f),
                    $body: t(e({
                        script: 1,
                        style: 1
                    }), E),
                    $cdata: e({
                        script: 1,
                        style: 1
                    }),
                    $empty: T,
                    $nonChild: e({
                        iframe: 1,
                        textarea: 1
                    }),
                    $listItem: e({
                        dd: 1,
                        dt: 1,
                        li: 1
                    }),
                    $list: e({
                        ul: 1,
                        ol: 1,
                        dl: 1
                    }),
                    $isNotEmpty: e({
                        table: 1,
                        ul: 1,
                        ol: 1,
                        dl: 1,
                        iframe: 1,
                        area: 1,
                        base: 1,
                        col: 1,
                        hr: 1,
                        img: 1,
                        embed: 1,
                        input: 1,
                        link: 1,
                        meta: 1,
                        param: 1,
                        h1: 1,
                        h2: 1,
                        h3: 1,
                        h4: 1,
                        h5: 1,
                        h6: 1
                    }),
                    $removeEmpty: e({
                        a: 1,
                        abbr: 1,
                        acronym: 1,
                        address: 1,
                        b: 1,
                        bdo: 1,
                        big: 1,
                        cite: 1,
                        code: 1,
                        del: 1,
                        dfn: 1,
                        em: 1,
                        font: 1,
                        i: 1,
                        ins: 1,
                        label: 1,
                        kbd: 1,
                        q: 1,
                        s: 1,
                        samp: 1,
                        small: 1,
                        span: 1,
                        strike: 1,
                        strong: 1,
                        sub: 1,
                        sup: 1,
                        tt: 1,
                        u: 1,
                        var: 1
                    }),
                    $removeEmptyBlock: e({
                        p: 1,
                        div: 1
                    }),
                    $tableContent: e({
                        caption: 1,
                        col: 1,
                        colgroup: 1,
                        tbody: 1,
                        td: 1,
                        tfoot: 1,
                        th: 1,
                        thead: 1,
                        tr: 1,
                        table: 1
                    }),
                    $notTransContent: e({
                        pre: 1,
                        script: 1,
                        style: 1,
                        textarea: 1
                    }),
                    html: w,
                    head: x,
                    style: h,
                    script: h,
                    body: v,
                    base: {},
                    link: {},
                    meta: {},
                    title: h,
                    col: {},
                    tr: e({
                        td: 1,
                        th: 1
                    }),
                    img: {},
                    embed: {},
                    colgroup: e({
                        thead: 1,
                        col: 1,
                        tbody: 1,
                        tr: 1,
                        tfoot: 1
                    }),
                    noscript: v,
                    td: v,
                    br: {},
                    th: v,
                    center: v,
                    kbd: f,
                    button: t(c, a),
                    basefont: {},
                    h5: f,
                    h4: f,
                    samp: f,
                    h6: f,
                    ol: b,
                    h1: f,
                    h3: f,
                    option: h,
                    h2: f,
                    form: t(n, r, a, c),
                    select: e({
                        optgroup: 1,
                        option: 1
                    }),
                    font: f,
                    ins: f,
                    menu: b,
                    abbr: f,
                    label: f,
                    table: e({
                        thead: 1,
                        col: 1,
                        tbody: 1,
                        tr: 1,
                        colgroup: 1,
                        caption: 1,
                        tfoot: 1
                    }),
                    code: f,
                    tfoot: p,
                    cite: f,
                    li: v,
                    input: {},
                    iframe: v,
                    strong: f,
                    textarea: h,
                    noframes: v,
                    big: f,
                    small: f,
                    span: e({
                        "#": 1,
                        br: 1,
                        b: 1,
                        strong: 1,
                        u: 1,
                        i: 1,
                        em: 1,
                        sub: 1,
                        sup: 1,
                        strike: 1,
                        span: 1
                    }),
                    hr: f,
                    dt: f,
                    sub: f,
                    optgroup: e({
                        option: 1
                    }),
                    param: {},
                    bdo: f,
                    var: f,
                    div: v,
                    object: g,
                    sup: f,
                    dd: v,
                    strike: f,
                    area: {},
                    dir: b,
                    map: t(e({
                        area: 1,
                        form: 1,
                        p: 1
                    }), n, s, a),
                    applet: g,
                    dl: e({
                        dt: 1,
                        dd: 1
                    }),
                    del: f,
                    isindex: {},
                    fieldset: t(e({
                        legend: 1
                    }), m),
                    thead: p,
                    ul: b,
                    acronym: f,
                    b: f,
                    a: t(e({
                        a: 1
                    }), u),
                    blockquote: t(e({
                        td: 1,
                        tr: 1,
                        tbody: 1,
                        li: 1
                    }), v),
                    caption: f,
                    i: f,
                    u: f,
                    tbody: p,
                    s: f,
                    address: t(r, c),
                    tt: f,
                    legend: f,
                    q: f,
                    pre: t(l, o),
                    p: t(e({
                        a: 1
                    }), f),
                    em: f,
                    dfn: f
                })
            } ();
            function getDomNode(e, t, n, i, o, r) {
                var a, s = i && e[t];
                for (!s && (s = e[n]); ! s && (a = (a || e).parentNode);) {
                    if ("BODY" == a.tagName || r && !r(a)) return null;
                    s = a[n]
                }
                return s && o && !o(s) ? getDomNode(s, t, n, !1, o) : s
            }
            var attrFix = ie && browser.version < 9 ? {
                tabindex: "tabIndex",
                readonly: "readOnly",
                for: "htmlFor",
                class: "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder"
            }: {
                tabindex: "tabIndex",
                readonly: "readOnly"
            },
            styleBlock = utils.listToMap(["-webkit-box", "-moz-box", "block", "list-item", "table", "table-row-group", "table-header-group", "table-footer-group", "table-row", "table-column-group", "table-column", "table-cell", "table-caption"]),
            domUtils = dom.domUtils = {
                NODE_ELEMENT: 1,
                NODE_DOCUMENT: 9,
                NODE_TEXT: 3,
                NODE_COMMENT: 8,
                NODE_DOCUMENT_FRAGMENT: 11,
                POSITION_IDENTICAL: 0,
                POSITION_DISCONNECTED: 1,
                POSITION_FOLLOWING: 2,
                POSITION_PRECEDING: 4,
                POSITION_IS_CONTAINED: 8,
                POSITION_CONTAINS: 16,
                fillChar: ie && "6" == browser.version ? "\ufeff": "​",
                keys: {
                    8 : 1,
                    46 : 1,
                    16 : 1,
                    17 : 1,
                    18 : 1,
                    37 : 1,
                    38 : 1,
                    39 : 1,
                    40 : 1,
                    13 : 1
                },
                getPosition: function(e, t) {
                    if (e === t) return 0;
                    var n, i = [e],
                    o = [t];
                    for (n = e; n = n.parentNode;) {
                        if (n === t) return 10;
                        i.push(n)
                    }
                    for (n = t; n = n.parentNode;) {
                        if (n === e) return 20;
                        o.push(n)
                    }
                    if (i.reverse(), o.reverse(), i[0] !== o[0]) return 1;
                    for (var r = -1; i[++r] === o[r];);
                    for (e = i[r], t = o[r]; e = e.nextSibling;) if (e === t) return 4;
                    return 2
                },
                getNodeIndex: function(e, t) {
                    for (var n = e,
                    i = 0; n = n.previousSibling;) t && 3 == n.nodeType ? n.nodeType != n.nextSibling.nodeType && i++:i++;
                    return i
                },
                inDoc: function(e, t) {
                    return 10 == domUtils.getPosition(e, t)
                },
                findParent: function(e, t, n) {
                    if (e && !domUtils.isBody(e)) for (e = n ? e: e.parentNode; e;) {
                        if (!t || t(e) || domUtils.isBody(e)) return t && !t(e) && domUtils.isBody(e) ? null: e;
                        e = e.parentNode
                    }
                    return null
                },
                findParentByTagName: function(e, t, n, i) {
                    return t = utils.listToMap(utils.isArray(t) ? t: [t]),
                    domUtils.findParent(e,
                    function(e) {
                        return t[e.tagName] && !(i && i(e))
                    },
                    n)
                },
                findParents: function(e, t, n, i) {
                    for (var o = t && (n && n(e) || !n) ? [e] : []; e = domUtils.findParent(e, n);) o.push(e);
                    return i ? o: o.reverse()
                },
                insertAfter: function(e, t) {
                    return e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t)
                },
                remove: function(e, t) {
                    var n, i = e.parentNode;
                    if (i) {
                        if (t && e.hasChildNodes()) for (; n = e.firstChild;) i.insertBefore(n, e);
                        i.removeChild(e)
                    }
                    return e
                },
                getNextDomNode: function(e, t, n, i) {
                    return getDomNode(e, "firstChild", "nextSibling", t, n, i)
                },
                getPreDomNode: function(e, t, n, i) {
                    return getDomNode(e, "lastChild", "previousSibling", t, n, i)
                },
                isBookmarkNode: function(e) {
                    return 1 == e.nodeType && e.id && /^_baidu_bookmark_/i.test(e.id)
                },
                getWindow: function(e) {
                    var t = e.ownerDocument || e;
                    return t.defaultView || t.parentWindow
                },
                getCommonAncestor: function(e, t) {
                    if (e === t) return e;
                    for (var n = [e], i = [t], o = e, r = -1; o = o.parentNode;) {
                        if (o === t) return o;
                        n.push(o)
                    }
                    for (o = t; o = o.parentNode;) {
                        if (o === e) return o;
                        i.push(o)
                    }
                    for (n.reverse(), i.reverse(); n[++r] === i[r];);
                    return 0 == r ? null: n[r - 1]
                },
                clearEmptySibling: function(e, t, n) {
                    function i(e, t) {
                        for (var n; e && !domUtils.isBookmarkNode(e) && (domUtils.isEmptyInlineElement(e) || !new RegExp("[^\t\n\r" + domUtils.fillChar + "]").test(e.nodeValue));) n = e[t],
                        domUtils.remove(e),
                        e = n
                    } ! t && i(e.nextSibling, "nextSibling"),
                    !n && i(e.previousSibling, "previousSibling")
                },
                split: function(e, t) {
                    var n = e.ownerDocument;
                    if (browser.ie && t == e.nodeValue.length) {
                        var i = n.createTextNode("");
                        return domUtils.insertAfter(e, i)
                    }
                    var o = e.splitText(t);
                    if (browser.ie8) {
                        var r = n.createTextNode("");
                        domUtils.insertAfter(o, r),
                        domUtils.remove(r)
                    }
                    return o
                },
                isWhitespace: function(e) {
                    return ! new RegExp("[^ \t\n\r" + domUtils.fillChar + "]").test(e.nodeValue)
                },
                getXY: function(e) {
                    for (var t = 0,
                    n = 0; e.offsetParent;) n += e.offsetTop,
                    t += e.offsetLeft,
                    e = e.offsetParent;
                    return {
                        x: t,
                        y: n
                    }
                },
                on: function(e, t, n) {
                    var i = utils.isArray(t) ? t: utils.trim(t).split(/\s+/),
                    o = i.length;
                    if (o) for (; o--;) if (t = i[o], e.addEventListener) e.addEventListener(t, n, !1);
                    else {
                        n._d || (n._d = {
                            els: []
                        });
                        var r = t + n.toString(),
                        a = utils.indexOf(n._d.els, e);
                        n._d[r] && -1 != a || ( - 1 == a && n._d.els.push(e), n._d[r] || (n._d[r] = function(e) {
                            return n.call(e.srcElement, e || window.event)
                        }), e.attachEvent("on" + t, n._d[r]))
                    }
                    e = null
                },
                un: function(e, t, n) {
                    var i = utils.isArray(t) ? t: utils.trim(t).split(/\s+/),
                    o = i.length;
                    if (o) for (; o--;) if (t = i[o], e.removeEventListener) e.removeEventListener(t, n, !1);
                    else {
                        var r = t + n.toString();
                        try {
                            e.detachEvent("on" + t, n._d ? n._d[r] : n)
                        } catch(e) {}
                        if (n._d && n._d[r]) {
                            var a = utils.indexOf(n._d.els, e); - 1 != a && n._d.els.splice(a, 1),
                            0 == n._d.els.length && delete n._d[r]
                        }
                    }
                },
                isSameElement: function(e, t) {
                    if (e.tagName != t.tagName) return ! 1;
                    var n = e.attributes,
                    i = t.attributes;
                    if (!ie && n.length != i.length) return ! 1;
                    for (var o, r, a = 0,
                    s = 0,
                    l = 0; o = n[l++];) {
                        if ("style" == o.nodeName) {
                            if (o.specified && a++, domUtils.isSameStyle(e, t)) continue;
                            return ! 1
                        }
                        if (ie) {
                            if (!o.specified) continue;
                            a++,
                            r = i.getNamedItem(o.nodeName)
                        } else r = t.attributes[o.nodeName];
                        if (!r.specified || o.nodeValue != r.nodeValue) return ! 1
                    }
                    if (ie) {
                        for (l = 0; r = i[l++];) r.specified && s++;
                        if (a != s) return ! 1
                    }
                    return ! 0
                },
                isSameStyle: function(e, t) {
                    var n = e.style.cssText.replace(/( ?; ?)/g, ";").replace(/( ?: ?)/g, ":"),
                    i = t.style.cssText.replace(/( ?; ?)/g, ";").replace(/( ?: ?)/g, ":");
                    if (browser.opera) {
                        if (n = e.style, i = t.style, n.length != i.length) return ! 1;
                        for (var o in n) if (!/^(\d+|csstext)$/i.test(o) && n[o] != i[o]) return ! 1;
                        return ! 0
                    }
                    if (!n || !i) return n == i;
                    if (n = n.split(";"), i = i.split(";"), n.length != i.length) return ! 1;
                    for (var r, a = 0; r = n[a++];) if ( - 1 == utils.indexOf(i, r)) return ! 1;
                    return ! 0
                },
                isBlockElm: function(e) {
                    return 1 == e.nodeType && (dtd.$block[e.tagName] || styleBlock[domUtils.getComputedStyle(e, "display")]) && !dtd.$nonChild[e.tagName]
                },
                isBody: function(e) {
                    return e && 1 == e.nodeType && "body" == e.tagName.toLowerCase()
                },
                breakParent: function(e, t) {
                    var n, i, o, r = e,
                    a = e;
                    do {
                        for (r = r.parentNode, i ? ((n = r.cloneNode(!1)).appendChild(i), i = n, (n = r.cloneNode(!1)).appendChild(o), o = n) : o = (i = r.cloneNode(!1)).cloneNode(!1); n = a.previousSibling;) i.insertBefore(n, i.firstChild);
                        for (; n = a.nextSibling;) o.appendChild(n);
                        a = r
                    } while ( t !== r );
                    return (n = t.parentNode).insertBefore(i, t),
                    n.insertBefore(o, t),
                    n.insertBefore(e, o),
                    domUtils.remove(t),
                    e
                },
                isEmptyInlineElement: function(e) {
                    if (1 != e.nodeType || !dtd.$removeEmpty[e.tagName]) return 0;
                    for (e = e.firstChild; e;) {
                        if (domUtils.isBookmarkNode(e)) return 0;
                        if (1 == e.nodeType && !domUtils.isEmptyInlineElement(e) || 3 == e.nodeType && !domUtils.isWhitespace(e)) return 0;
                        e = e.nextSibling
                    }
                    return 1
                },
                trimWhiteTextNode: function(e) {
                    function t(t) {
                        for (var n; (n = e[t]) && 3 == n.nodeType && domUtils.isWhitespace(n);) e.removeChild(n)
                    }
                    t("firstChild"),
                    t("lastChild")
                },
                mergeChild: function(e, t, n) {
                    for (var i, o = domUtils.getElementsByTagName(e, e.tagName.toLowerCase()), r = 0; i = o[r++];) if (i.parentNode && !domUtils.isBookmarkNode(i)) if ("span" != i.tagName.toLowerCase()) domUtils.isSameElement(e, i) && domUtils.remove(i, !0);
                    else {
                        if (e === i.parentNode && (domUtils.trimWhiteTextNode(e), 1 == e.childNodes.length)) {
                            e.style.cssText = i.style.cssText + ";" + e.style.cssText,
                            domUtils.remove(i, !0);
                            continue
                        }
                        if (i.style.cssText = e.style.cssText + ";" + i.style.cssText, n) {
                            var a = n.style;
                            if (a) {
                                a = a.split(";");
                                for (var s, l = 0; s = a[l++];) i.style[utils.cssStyleToDomStyle(s.split(":")[0])] = s.split(":")[1]
                            }
                        }
                        domUtils.isSameStyle(i, e) && domUtils.remove(i, !0)
                    }
                },
                getElementsByTagName: function(e, t, n) {
                    if (n && utils.isString(n)) {
                        var i = n;
                        n = function(e) {
                            return domUtils.hasClass(e, i)
                        }
                    }
                    t = utils.trim(t).replace(/[ ]{2,}/g, " ").split(" ");
                    for (var o, r = [], a = 0; o = t[a++];) for (var s, l = e.getElementsByTagName(o), d = 0; s = l[d++];) n && !n(s) || r.push(s);
                    return r
                },
                mergeToParent: function(e) {
                    for (var t = e.parentNode; t && dtd.$removeEmpty[t.tagName];) {
                        if (t.tagName == e.tagName || "A" == t.tagName) {
                            if (domUtils.trimWhiteTextNode(t), "SPAN" == t.tagName && !domUtils.isSameStyle(t, e) || "A" == t.tagName && "SPAN" == e.tagName) {
                                if (t.childNodes.length > 1 || t !== e.parentNode) {
                                    e.style.cssText = t.style.cssText + ";" + e.style.cssText,
                                    t = t.parentNode;
                                    continue
                                }
                                t.style.cssText += ";" + e.style.cssText,
                                "A" == t.tagName && (t.style.textDecoration = "underline")
                            }
                            if ("A" != t.tagName) {
                                t === e.parentNode && domUtils.remove(e, !0);
                                break
                            }
                        }
                        t = t.parentNode
                    }
                },
                mergeSibling: function(e, t, n) {
                    function i(e, t, n) {
                        var i;
                        if ((i = n[e]) && !domUtils.isBookmarkNode(i) && 1 == i.nodeType && domUtils.isSameElement(n, i)) {
                            for (; i.firstChild;)"firstChild" == t ? n.insertBefore(i.lastChild, n.firstChild) : n.appendChild(i.firstChild);
                            domUtils.remove(i)
                        }
                    } ! t && i("previousSibling", "firstChild", e),
                    !n && i("nextSibling", "lastChild", e)
                },
                unSelectable: ie && browser.ie9below || browser.opera ?
                function(e) {
                    e.onselectstart = function() {
                        return ! 1
                    },
                    e.onclick = e.onkeyup = e.onkeydown = function() {
                        return ! 1
                    },
                    e.unselectable = "on",
                    e.setAttribute("unselectable", "on");
                    for (var t, n = 0; t = e.all[n++];) switch (t.tagName.toLowerCase()) {
                    case "iframe":
                    case "textarea":
                    case "input":
                    case "select":
                        break;
                    default:
                        t.unselectable = "on",
                        e.setAttribute("unselectable", "on")
                    }
                }: function(e) {
                    e.style.MozUserSelect = e.style.webkitUserSelect = e.style.msUserSelect = e.style.KhtmlUserSelect = "none"
                },
                removeAttributes: function(e, t) {
                    t = utils.isArray(t) ? t: utils.trim(t).replace(/[ ]{2,}/g, " ").split(" ");
                    for (var n, i = 0; n = t[i++];) {
                        switch (n = attrFix[n] || n) {
                        case "className":
                            e[n] = "";
                            break;
                        case "style":
                            e.style.cssText = "";
                            var o = e.getAttributeNode("style"); ! browser.ie && o && e.removeAttributeNode(o)
                        }
                        e.removeAttribute(n)
                    }
                },
                createElement: function(e, t, n) {
                    return domUtils.setAttributes(e.createElement(t), n)
                },
                setAttributes: function(e, t) {
                    for (var n in t) if (t.hasOwnProperty(n)) {
                        var i = t[n];
                        switch (n) {
                        case "class":
                            e.className = i;
                            break;
                        case "style":
                            e.style.cssText = e.style.cssText + ";" + i;
                            break;
                        case "innerHTML":
                            e[n] = i;
                            break;
                        case "value":
                            e.value = i;
                            break;
                        default:
                            e.setAttribute(attrFix[n] || n, i)
                        }
                    }
                    return e
                },
                getComputedStyle: function(e, t) {
                    if ("width height top left".indexOf(t) > -1) return e["offset" + t.replace(/^\w/,
                    function(e) {
                        return e.toUpperCase()
                    })] + "px";
                    if (3 == e.nodeType && (e = e.parentNode), browser.ie && browser.version < 9 && "font-size" == t && !e.style.fontSize && !dtd.$empty[e.tagName] && !dtd.$nonChild[e.tagName]) {
                        var n = e.ownerDocument.createElement("span");
                        n.style.cssText = "padding:0;border:0;font-family:simsun;",
                        n.innerHTML = ".",
                        e.appendChild(n);
                        var i = n.offsetHeight;
                        return e.removeChild(n),
                        n = null,
                        i + "px"
                    }
                    try {
                        var o = domUtils.getStyle(e, t) || (window.getComputedStyle ? domUtils.getWindow(e).getComputedStyle(e, "").getPropertyValue(t) : (e.currentStyle || e.style)[utils.cssStyleToDomStyle(t)])
                    } catch(e) {
                        return ""
                    }
                    return utils.transUnitToPx(utils.fixColor(t, o))
                },
                removeClasses: function(e, t) {
                    t = utils.isArray(t) ? t: utils.trim(t).replace(/[ ]{2,}/g, " ").split(" ");
                    for (var n, i = 0,
                    o = e.className; n = t[i++];) o = o.replace(new RegExp("\\b" + n + "\\b"), ""); (o = utils.trim(o).replace(/[ ]{2,}/g, " ")) ? e.className = o: domUtils.removeAttributes(e, ["class"])
                },
                addClass: function(e, t) {
                    if (e) {
                        t = utils.trim(t).replace(/[ ]{2,}/g, " ").split(" ");
                        for (var n, i = 0,
                        o = e.className; n = t[i++];) new RegExp("\\b" + n + "\\b").test(o) || (o += " " + n);
                        e.className = utils.trim(o)
                    }
                },
                hasClass: function(e, t) {
                    if (utils.isRegExp(t)) return t.test(e.className);
                    t = utils.trim(t).replace(/[ ]{2,}/g, " ").split(" ");
                    for (var n, i = 0,
                    o = e.className; n = t[i++];) if (!new RegExp("\\b" + n + "\\b", "i").test(o)) return ! 1;
                    return i - 1 == t.length
                },
                preventDefault: function(e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1
                },
                removeStyle: function(e, t) {
                    browser.ie ? ("color" == t && (t = "(^|;)" + t), e.style.cssText = e.style.cssText.replace(new RegExp(t + "[^:]*:[^;]+;?", "ig"), "")) : e.style.removeProperty ? e.style.removeProperty(t) : e.style.removeAttribute(utils.cssStyleToDomStyle(t)),
                    e.style.cssText || domUtils.removeAttributes(e, ["style"])
                },
                getStyle: function(e, t) {
                    var n = e.style[utils.cssStyleToDomStyle(t)];
                    return utils.fixColor(t, n)
                },
                setStyle: function(e, t, n) {
                    e.style[utils.cssStyleToDomStyle(t)] = n,
                    utils.trim(e.style.cssText) || this.removeAttributes(e, "style")
                },
                setStyles: function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && domUtils.setStyle(e, n, t[n])
                },
                removeDirtyAttr: function(e) {
                    for (var t, n = 0,
                    i = e.getElementsByTagName("*"); t = i[n++];) t.removeAttribute("_moz_dirty");
                    e.removeAttribute("_moz_dirty")
                },
                getChildCount: function(e, t) {
                    var n = 0,
                    i = e.firstChild;
                    for (t = t ||
                    function() {
                        return 1
                    }; i;) t(i) && n++,
                    i = i.nextSibling;
                    return n
                },
                isEmptyNode: function(e) {
                    return ! e.firstChild || 0 == domUtils.getChildCount(e,
                    function(e) {
                        return ! domUtils.isBr(e) && !domUtils.isBookmarkNode(e) && !domUtils.isWhitespace(e)
                    })
                },
                clearSelectedArr: function(e) {
                    for (var t; t = e.pop();) domUtils.removeAttributes(t, ["class"])
                },
                scrollToView: function(e, t, n) {
                    var i, o, r = (i = t.document, o = "CSS1Compat" == i.compatMode, {
                        width: (o ? i.documentElement.clientWidth: i.body.clientWidth) || 0,
                        height: (o ? i.documentElement.clientHeight: i.body.clientHeight) || 0
                    }).height,
                    a = -1 * r + n;
                    a += e.offsetHeight || 0,
                    a += domUtils.getXY(e).y;
                    var s = function(e) {
                        if ("pageXOffset" in e) return {
                            x: e.pageXOffset || 0,
                            y: e.pageYOffset || 0
                        };
                        var t = e.document;
                        return {
                            x: t.documentElement.scrollLeft || t.body.scrollLeft || 0,
                            y: t.documentElement.scrollTop || t.body.scrollTop || 0
                        }
                    } (t).y; (a > s || a < s - r) && t.scrollTo(0, a + (a < 0 ? -20 : 20))
                },
                isBr: function(e) {
                    return 1 == e.nodeType && "BR" == e.tagName
                },
                isFillChar: function(e, t) {
                    if (3 != e.nodeType) return ! 1;
                    var n = e.nodeValue;
                    return t ? new RegExp("^" + domUtils.fillChar).test(n) : !n.replace(new RegExp(domUtils.fillChar, "g"), "").length
                },
                isStartInblock: function(e) {
                    var t, n = e.cloneRange(),
                    i = 0,
                    o = n.startContainer;
                    if (1 == o.nodeType && o.childNodes[n.startOffset]) for (var r = (o = o.childNodes[n.startOffset]).previousSibling; r && domUtils.isFillChar(r);) o = r,
                    r = r.previousSibling;
                    for (this.isFillChar(o, !0) && 1 == n.startOffset && (n.setStartBefore(o), o = n.startContainer); o && domUtils.isFillChar(o);) t = o,
                    o = o.previousSibling;
                    for (t && (n.setStartBefore(t), o = n.startContainer), 1 == o.nodeType && domUtils.isEmptyNode(o) && 1 == n.startOffset && n.setStart(o, 0).collapse(!0); ! n.startOffset;) {
                        if (o = n.startContainer, domUtils.isBlockElm(o) || domUtils.isBody(o)) {
                            i = 1;
                            break
                        }
                        var a;
                        if (r = n.startContainer.previousSibling) {
                            for (; r && domUtils.isFillChar(r);) a = r,
                            r = r.previousSibling;
                            a ? n.setStartBefore(a) : n.setStartBefore(n.startContainer)
                        } else n.setStartBefore(n.startContainer)
                    }
                    return i && !domUtils.isBody(n.startContainer) ? 1 : 0
                },
                isEmptyBlock: function(e, t) {
                    if (1 != e.nodeType) return 0;
                    if (t = t || new RegExp("[  \t\r\n" + domUtils.fillChar + "]", "g"), e[browser.ie ? "innerText": "textContent"].replace(t, "").length > 0) return 0;
                    for (var n in dtd.$isNotEmpty) if (e.getElementsByTagName(n).length) return 0;
                    return 1
                },
                setViewportOffset: function(e, t) {
                    var n = 0 | parseInt(e.style.left),
                    i = 0 | parseInt(e.style.top),
                    o = e.getBoundingClientRect(),
                    r = t.left - o.left,
                    a = t.top - o.top;
                    r && (e.style.left = n + r + "px"),
                    a && (e.style.top = i + a + "px")
                },
                fillNode: function(e, t) {
                    var n = browser.ie ? e.createTextNode(domUtils.fillChar) : e.createElement("br");
                    t.innerHTML = "",
                    t.appendChild(n)
                },
                moveChild: function(e, t, n) {
                    for (; e.firstChild;) n && t.firstChild ? t.insertBefore(e.lastChild, t.firstChild) : t.appendChild(e.firstChild)
                },
                hasNoAttributes: function(e) {
                    return browser.ie ? /^<\w+\s*?>/.test(e.outerHTML) : 0 == e.attributes.length
                },
                isCustomeNode: function(e) {
                    return 1 == e.nodeType && e.getAttribute("_ue_custom_node_")
                },
                isTagNode: function(e, t) {
                    return 1 == e.nodeType && new RegExp("\\b" + e.tagName + "\\b", "i").test(t)
                },
                filterNodeList: function(e, t, n) {
                    var i = [];
                    if (!utils.isFunction(t)) {
                        var o = t;
                        t = function(e) {
                            return - 1 != utils.indexOf(utils.isArray(o) ? o: o.split(" "), e.tagName.toLowerCase())
                        }
                    }
                    return utils.each(e,
                    function(e) {
                        t(e) && i.push(e)
                    }),
                    0 == i.length ? null: 1 != i.length && n ? i: i[0]
                },
                isInNodeEndBoundary: function(e, t) {
                    var n = e.startContainer;
                    if (3 == n.nodeType && e.startOffset != n.nodeValue.length) return 0;
                    if (1 == n.nodeType && e.startOffset != n.childNodes.length) return 0;
                    for (; n !== t;) {
                        if (n.nextSibling) return 0;
                        n = n.parentNode
                    }
                    return 1
                },
                isBoundaryNode: function(e, t) {
                    for (; ! domUtils.isBody(e);) if (e !== (e = e.parentNode)[t]) return ! 1;
                    return ! 0
                },
                fillHtml: browser.ie11below ? "&nbsp;": "<br/>"
            },
            fillCharReg = new RegExp(domUtils.fillChar, "g"); !
            function() {
                var e, t = 0,
                n = domUtils.fillChar;
                function i(e) {
                    return ! e.collapsed && 1 == e.startContainer.nodeType && e.startContainer === e.endContainer && e.endOffset - e.startOffset == 1
                }
                function o(e, t, n, i) {
                    return 1 == t.nodeType && (dtd.$empty[t.tagName] || dtd.$nonChild[t.tagName]) && (n = domUtils.getNodeIndex(t) + (e ? 0 : 1), t = t.parentNode),
                    e ? (i.startContainer = t, i.startOffset = n, i.endContainer || i.collapse(!0)) : (i.endContainer = t, i.endOffset = n, i.startContainer || i.collapse(!1)),
                    function(e) {
                        e.collapsed = e.startContainer && e.endContainer && e.startContainer === e.endContainer && e.startOffset == e.endOffset
                    } (i),
                    i
                }
                function r(e, t) {
                    var n, i, o = e.startContainer,
                    r = e.endContainer,
                    a = e.startOffset,
                    s = e.endOffset,
                    l = e.document,
                    d = l.createDocumentFragment();
                    if (1 == o.nodeType && (o = o.childNodes[a] || (n = o.appendChild(l.createTextNode("")))), 1 == r.nodeType && (r = r.childNodes[s] || (i = r.appendChild(l.createTextNode("")))), o === r && 3 == o.nodeType) return d.appendChild(l.createTextNode(o.substringData(a, s - a))),
                    t && (o.deleteData(a, s - a), e.collapse(!0)),
                    d;
                    for (var c, u, m = d,
                    f = domUtils.findParents(o, !0), p = domUtils.findParents(r, !0), h = 0; f[h] == p[h];) h++;
                    for (var g, v = h; g = f[v]; v++) {
                        for (c = g.nextSibling, g == o ? n || (3 == e.startContainer.nodeType ? (m.appendChild(l.createTextNode(o.nodeValue.slice(a))), t && o.deleteData(a, o.nodeValue.length - a)) : m.appendChild(t ? o: o.cloneNode(!0))) : (u = g.cloneNode(!1), m.appendChild(u)); c && c !== r && c !== p[v];) g = c.nextSibling,
                        m.appendChild(t ? c: c.cloneNode(!0)),
                        c = g;
                        m = u
                    }
                    m = d,
                    f[h] || (m.appendChild(f[h - 1].cloneNode(!1)), m = m.firstChild);
                    var b;
                    for (v = h; b = p[v]; v++) {
                        if (c = b.previousSibling, b == r ? i || 3 != e.endContainer.nodeType || (m.appendChild(l.createTextNode(r.substringData(0, s))), t && r.deleteData(0, s)) : (u = b.cloneNode(!1), m.appendChild(u)), v != h || !f[h]) for (; c && c !== o;) b = c.previousSibling,
                        m.insertBefore(t ? c: c.cloneNode(!0), m.firstChild),
                        c = b;
                        m = u
                    }
                    return t && e.setStartBefore(p[h] ? f[h] ? p[h] : f[h - 1] : p[h - 1]).collapse(!0),
                    n && domUtils.remove(n),
                    i && domUtils.remove(i),
                    d
                }
                var a = dom.Range = function(e) {
                    var t = this;
                    t.startContainer = t.startOffset = t.endContainer = t.endOffset = null,
                    t.document = e,
                    t.collapsed = !0
                };
                function s(t, n) {
                    try {
                        if (e && domUtils.inDoc(e, t)) if (e.nodeValue.replace(fillCharReg, "").length) e.nodeValue = e.nodeValue.replace(fillCharReg, "");
                        else {
                            var i = e.parentNode;
                            for (domUtils.remove(e); i && domUtils.isEmptyInlineElement(i) && (browser.safari ? !(domUtils.getPosition(i, n) & domUtils.POSITION_CONTAINS) : !i.contains(n));) e = i.parentNode,
                            domUtils.remove(i),
                            i = e
                        }
                    } catch(e) {}
                }
                function l(e, t) {
                    var n;
                    for (e = e[t]; e && domUtils.isFillChar(e);) n = e[t],
                    domUtils.remove(e),
                    e = n
                }
                a.prototype = {
                    cloneContents: function() {
                        return this.collapsed ? null: r(this, 0)
                    },
                    deleteContents: function() {
                        var e;
                        return this.collapsed || r(this, 1),
                        browser.webkit && (3 != (e = this.startContainer).nodeType || e.nodeValue.length || (this.setStartBefore(e).collapse(!0), domUtils.remove(e))),
                        this
                    },
                    extractContents: function() {
                        return this.collapsed ? null: r(this, 2)
                    },
                    setStart: function(e, t) {
                        return o(!0, e, t, this)
                    },
                    setEnd: function(e, t) {
                        return o(!1, e, t, this)
                    },
                    setStartAfter: function(e) {
                        return this.setStart(e.parentNode, domUtils.getNodeIndex(e) + 1)
                    },
                    setStartBefore: function(e) {
                        return this.setStart(e.parentNode, domUtils.getNodeIndex(e))
                    },
                    setEndAfter: function(e) {
                        return this.setEnd(e.parentNode, domUtils.getNodeIndex(e) + 1)
                    },
                    setEndBefore: function(e) {
                        return this.setEnd(e.parentNode, domUtils.getNodeIndex(e))
                    },
                    setStartAtFirst: function(e) {
                        return this.setStart(e, 0)
                    },
                    setStartAtLast: function(e) {
                        return this.setStart(e, 3 == e.nodeType ? e.nodeValue.length: e.childNodes.length)
                    },
                    setEndAtFirst: function(e) {
                        return this.setEnd(e, 0)
                    },
                    setEndAtLast: function(e) {
                        return this.setEnd(e, 3 == e.nodeType ? e.nodeValue.length: e.childNodes.length)
                    },
                    selectNode: function(e) {
                        return this.setStartBefore(e).setEndAfter(e)
                    },
                    selectNodeContents: function(e) {
                        return this.setStart(e, 0).setEndAtLast(e)
                    },
                    cloneRange: function() {
                        var e = this;
                        return new a(e.document).setStart(e.startContainer, e.startOffset).setEnd(e.endContainer, e.endOffset)
                    },
                    collapse: function(e) {
                        var t = this;
                        return e ? (t.endContainer = t.startContainer, t.endOffset = t.startOffset) : (t.startContainer = t.endContainer, t.startOffset = t.endOffset),
                        t.collapsed = !0,
                        t
                    },
                    shrinkBoundary: function(e) {
                        var t, n = this,
                        i = n.collapsed;
                        function o(e) {
                            return 1 == e.nodeType && !domUtils.isBookmarkNode(e) && !dtd.$empty[e.tagName] && !dtd.$nonChild[e.tagName]
                        }
                        for (; 1 == n.startContainer.nodeType && (t = n.startContainer.childNodes[n.startOffset]) && o(t);) n.setStart(t, 0);
                        if (i) return n.collapse(!0);
                        if (!e) for (; 1 == n.endContainer.nodeType && n.endOffset > 0 && (t = n.endContainer.childNodes[n.endOffset - 1]) && o(t);) n.setEnd(t, t.childNodes.length);
                        return n
                    },
                    getCommonAncestor: function(e, t) {
                        var n = this.startContainer,
                        o = this.endContainer;
                        return n === o ? e && i(this) && 1 == (n = n.childNodes[this.startOffset]).nodeType ? n: t && 3 == n.nodeType ? n.parentNode: n: domUtils.getCommonAncestor(n, o)
                    },
                    trimBoundary: function(e) {
                        this.txtToElmBoundary();
                        var t = this.startContainer,
                        n = this.startOffset,
                        i = this.collapsed,
                        o = this.endContainer;
                        if (3 == t.nodeType) {
                            if (0 == n) this.setStartBefore(t);
                            else if (n >= t.nodeValue.length) this.setStartAfter(t);
                            else {
                                var r = domUtils.split(t, n);
                                t === o ? this.setEnd(r, this.endOffset - n) : t.parentNode === o && (this.endOffset += 1),
                                this.setStartBefore(r)
                            }
                            if (i) return this.collapse(!0)
                        }
                        return e || (n = this.endOffset, 3 == (o = this.endContainer).nodeType && (0 == n ? this.setEndBefore(o) : (n < o.nodeValue.length && domUtils.split(o, n), this.setEndAfter(o)))),
                        this
                    },
                    txtToElmBoundary: function(e) {
                        function t(e, t) {
                            var n = e[t + "Container"],
                            i = e[t + "Offset"];
                            3 == n.nodeType && (i ? i >= n.nodeValue.length && e["set" + t.replace(/(\w)/,
                            function(e) {
                                return e.toUpperCase()
                            }) + "After"](n) : e["set" + t.replace(/(\w)/,
                            function(e) {
                                return e.toUpperCase()
                            }) + "Before"](n))
                        }
                        return ! e && this.collapsed || (t(this, "start"), t(this, "end")),
                        this
                    },
                    insertNode: function(e) {
                        var t = e,
                        n = 1;
                        11 == e.nodeType && (t = e.firstChild, n = e.childNodes.length),
                        this.trimBoundary(!0);
                        var i = this.startContainer,
                        o = this.startOffset,
                        r = i.childNodes[o];
                        return r ? i.insertBefore(e, r) : i.appendChild(e),
                        t.parentNode === this.endContainer && (this.endOffset = this.endOffset + n),
                        this.setStartBefore(t)
                    },
                    setCursor: function(e, t) {
                        return this.collapse(!e).select(t)
                    },
                    createBookmark: function(e, n) {
                        var i, o = this.document.createElement("span");
                        return o.style.cssText = "display:none;line-height:0px;",
                        o.appendChild(this.document.createTextNode("‍")),
                        o.id = "_baidu_bookmark_start_" + (n ? "": t++),
                        this.collapsed || ((i = o.cloneNode(!0)).id = "_baidu_bookmark_end_" + (n ? "": t++)),
                        this.insertNode(o),
                        i && this.collapse().insertNode(i).setEndBefore(i),
                        this.setStartAfter(o),
                        {
                            start: e ? o.id: o,
                            end: i ? e ? i.id: i: null,
                            id: e
                        }
                    },
                    moveToBookmark: function(e) {
                        var t = e.id ? this.document.getElementById(e.start) : e.start,
                        n = e.end && e.id ? this.document.getElementById(e.end) : e.end;
                        return this.setStartBefore(t),
                        domUtils.remove(t),
                        n ? (this.setEndBefore(n), domUtils.remove(n)) : this.collapse(!0),
                        this
                    },
                    enlarge: function(e, t) {
                        var n, i, o = domUtils.isBody,
                        r = this.document.createTextNode("");
                        if (e) {
                            for (1 == (i = this.startContainer).nodeType ? i.childNodes[this.startOffset] ? n = i = i.childNodes[this.startOffset] : (i.appendChild(r), n = i = r) : n = i;;) {
                                if (domUtils.isBlockElm(i)) {
                                    for (i = n; (n = i.previousSibling) && !domUtils.isBlockElm(n);) i = n;
                                    this.setStartBefore(i);
                                    break
                                }
                                n = i,
                                i = i.parentNode
                            }
                            for (1 == (i = this.endContainer).nodeType ? ((n = i.childNodes[this.endOffset]) ? i.insertBefore(r, n) : i.appendChild(r), n = i = r) : n = i;;) {
                                if (domUtils.isBlockElm(i)) {
                                    for (i = n; (n = i.nextSibling) && !domUtils.isBlockElm(n);) i = n;
                                    this.setEndAfter(i);
                                    break
                                }
                                n = i,
                                i = i.parentNode
                            }
                            r.parentNode === this.endContainer && this.endOffset--,
                            domUtils.remove(r)
                        }
                        if (!this.collapsed) {
                            for (; ! (0 != this.startOffset || t && t(this.startContainer) || o(this.startContainer));) this.setStartBefore(this.startContainer);
                            for (; ! (this.endOffset != (1 == this.endContainer.nodeType ? this.endContainer.childNodes.length: this.endContainer.nodeValue.length) || t && t(this.endContainer) || o(this.endContainer));) this.setEndAfter(this.endContainer)
                        }
                        return this
                    },
                    enlargeToBlockElm: function(e) {
                        for (; ! domUtils.isBlockElm(this.startContainer);) this.setStartBefore(this.startContainer);
                        if (!e) for (; ! domUtils.isBlockElm(this.endContainer);) this.setEndAfter(this.endContainer);
                        return this
                    },
                    adjustmentBoundary: function() {
                        if (!this.collapsed) {
                            for (; ! domUtils.isBody(this.startContainer) && this.startOffset == this.startContainer[3 == this.startContainer.nodeType ? "nodeValue": "childNodes"].length && this.startContainer[3 == this.startContainer.nodeType ? "nodeValue": "childNodes"].length;) this.setStartAfter(this.startContainer);
                            for (; ! domUtils.isBody(this.endContainer) && !this.endOffset && this.endContainer[3 == this.endContainer.nodeType ? "nodeValue": "childNodes"].length;) this.setEndBefore(this.endContainer)
                        }
                        return this
                    },
                    applyInlineStyle: function(e, t, n) {
                        if (this.collapsed) return this;
                        this.trimBoundary().enlarge(!1,
                        function(e) {
                            return 1 == e.nodeType && domUtils.isBlockElm(e)
                        }).adjustmentBoundary();
                        for (var i, o, r = this.createBookmark(), a = r.end, s = function(e) {
                            return 1 == e.nodeType ? "br" != e.tagName.toLowerCase() : !domUtils.isWhitespace(e)
                        },
                        l = domUtils.getNextDomNode(r.start, !1, s), d = this.cloneRange(); l && domUtils.getPosition(l, a) & domUtils.POSITION_PRECEDING;) if (3 == l.nodeType || dtd[e][l.tagName]) {
                            for (d.setStartBefore(l), i = l; i && (3 == i.nodeType || dtd[e][i.tagName]) && i !== a;) o = i,
                            i = domUtils.getNextDomNode(i, 1 == i.nodeType, null,
                            function(t) {
                                return dtd[e][t.tagName]
                            });
                            var c, u, m = d.setEndAfter(o).extractContents();
                            if (n && n.length > 0) {
                                var f, p;
                                p = f = n[0].cloneNode(!1);
                                for (var h, g = 1; h = n[g++];) f.appendChild(h.cloneNode(!1)),
                                f = f.firstChild;
                                c = f
                            } else c = d.document.createElement(e);
                            if (t && domUtils.setAttributes(c, t), c.appendChild(m), d.insertNode(n ? p: c), "span" == e && t.style && /text\-decoration/.test(t.style) && (u = domUtils.findParentByTagName(c, "a", !0)) ? (domUtils.setAttributes(u, t), domUtils.remove(c, !0), c = u) : (domUtils.mergeSibling(c), domUtils.clearEmptySibling(c)), domUtils.mergeChild(c, t), l = domUtils.getNextDomNode(c, !1, s), domUtils.mergeToParent(c), i === a) break
                        } else l = domUtils.getNextDomNode(l, !0, s);
                        return this.moveToBookmark(r)
                    },
                    removeInlineStyle: function(e) {
                        if (this.collapsed) return this;
                        e = utils.isArray(e) ? e: [e],
                        this.shrinkBoundary().adjustmentBoundary();
                        for (var t = this.startContainer,
                        n = this.endContainer;;) {
                            if (1 == t.nodeType) {
                                if (utils.indexOf(e, t.tagName.toLowerCase()) > -1) break;
                                if ("body" == t.tagName.toLowerCase()) {
                                    t = null;
                                    break
                                }
                            }
                            t = t.parentNode
                        }
                        for (;;) {
                            if (1 == n.nodeType) {
                                if (utils.indexOf(e, n.tagName.toLowerCase()) > -1) break;
                                if ("body" == n.tagName.toLowerCase()) {
                                    n = null;
                                    break
                                }
                            }
                            n = n.parentNode
                        }
                        var i, o, r = this.createBookmark();
                        t && (i = (o = this.cloneRange().setEndBefore(r.start).setStartBefore(t)).extractContents(), o.insertNode(i), domUtils.clearEmptySibling(t, !0), t.parentNode.insertBefore(r.start, t)),
                        n && (i = (o = this.cloneRange().setStartAfter(r.end).setEndAfter(n)).extractContents(), o.insertNode(i), domUtils.clearEmptySibling(n, !1, !0), n.parentNode.insertBefore(r.end, n.nextSibling));
                        for (var a, s = domUtils.getNextDomNode(r.start, !1,
                        function(e) {
                            return 1 == e.nodeType
                        }); s && s !== r.end;) a = domUtils.getNextDomNode(s, !0,
                        function(e) {
                            return 1 == e.nodeType
                        }),
                        utils.indexOf(e, s.tagName.toLowerCase()) > -1 && domUtils.remove(s, !0),
                        s = a;
                        return this.moveToBookmark(r)
                    },
                    getClosedNode: function() {
                        var e;
                        if (!this.collapsed) {
                            var t = this.cloneRange().adjustmentBoundary().shrinkBoundary();
                            if (i(t)) {
                                var n = t.startContainer.childNodes[t.startOffset];
                                n && 1 == n.nodeType && (dtd.$empty[n.tagName] || dtd.$nonChild[n.tagName]) && (e = n)
                            }
                        }
                        return e
                    },
                    select: browser.ie ?
                    function(t, i) {
                        var o;
                        this.collapsed || this.shrinkBoundary();
                        var r = this.getClosedNode();
                        if (r && !i) {
                            try { (o = this.document.body.createControlRange()).addElement(r),
                                o.select()
                            } catch(e) {}
                            return this
                        }
                        var a, d = this.createBookmark(),
                        c = d.start;
                        if ((o = this.document.body.createTextRange()).moveToElementText(c), o.moveStart("character", 1), this.collapsed) {
                            if (!t && 3 != this.startContainer.nodeType) {
                                var u = this.document.createTextNode(n),
                                m = this.document.createElement("span");
                                m.appendChild(this.document.createTextNode(n)),
                                c.parentNode.insertBefore(m, c),
                                c.parentNode.insertBefore(u, c),
                                s(this.document, u),
                                e = u,
                                l(m, "previousSibling"),
                                l(c, "nextSibling"),
                                o.moveStart("character", -1),
                                o.collapse(!0)
                            }
                        } else {
                            var f = this.document.body.createTextRange();
                            a = d.end,
                            f.moveToElementText(a),
                            o.setEndPoint("EndToEnd", f)
                        }
                        this.moveToBookmark(d),
                        m && domUtils.remove(m);
                        try {
                            o.select()
                        } catch(e) {}
                        return this
                    }: function(t) {
                        var i, o = domUtils.getWindow(this.document),
                        r = o.getSelection();
                        if (browser.gecko ? this.document.body.focus() : o.focus(), r) {
                            if (r.removeAllRanges(), this.collapsed && !t) {
                                var a = this.startContainer,
                                d = a;
                                1 == a.nodeType && (d = a.childNodes[this.startOffset]),
                                3 == a.nodeType && this.startOffset || (d ? d.previousSibling && 3 == d.previousSibling.nodeType: a.lastChild && 3 == a.lastChild.nodeType) || (i = this.document.createTextNode(n), this.insertNode(i), s(this.document, i), l(i, "previousSibling"), l(i, "nextSibling"), e = i, this.setStart(i, browser.webkit ? 1 : 0).collapse(!0))
                            }
                            var c = this.document.createRange();
                            if (this.collapsed && browser.opera && 1 == this.startContainer.nodeType) if (d = this.startContainer.childNodes[this.startOffset]) {
                                for (; d && domUtils.isBlockElm(d) && 1 == d.nodeType && d.childNodes[0];) d = d.childNodes[0];
                                d && this.setStartBefore(d).collapse(!0)
                            } else(d = this.startContainer.lastChild) && domUtils.isBr(d) && this.setStartBefore(d).collapse(!0); !
                            function(e) {
                                function t(t, n, i) {
                                    3 == t.nodeType && t.nodeValue.length < n && (e[i + "Offset"] = t.nodeValue.length)
                                }
                                t(e.startContainer, e.startOffset, "start"),
                                t(e.endContainer, e.endOffset, "end")
                            } (this),
                            c.setStart(this.startContainer, this.startOffset),
                            c.setEnd(this.endContainer, this.endOffset),
                            r.addRange(c)
                        }
                        return this
                    },
                    scrollToView: function(e, t) {
                        e = e ? window: domUtils.getWindow(this.document);
                        var n = this.document.createElement("span");
                        return n.innerHTML = "&nbsp;",
                        this.cloneRange().insertNode(n),
                        domUtils.scrollToView(n, e, t),
                        domUtils.remove(n),
                        this
                    },
                    inFillChar: function() {
                        var e = this.startContainer;
                        return ! (!this.collapsed || 3 != e.nodeType || e.nodeValue.replace(new RegExp("^" + domUtils.fillChar), "").length + 1 != e.nodeValue.length)
                    },
                    createAddress: function(e, t) {
                        var n = {},
                        i = this;
                        function o(e) {
                            for (var n, o = e ? i.startContainer: i.endContainer, r = domUtils.findParents(o, !0,
                            function(e) {
                                return ! domUtils.isBody(e)
                            }), a = [], s = 0; n = r[s++];) a.push(domUtils.getNodeIndex(n, t));
                            var l = 0;
                            if (t) if (3 == o.nodeType) {
                                for (var d = o.previousSibling; d && 3 == d.nodeType;) l += d.nodeValue.replace(fillCharReg, "").length,
                                d = d.previousSibling;
                                l += e ? i.startOffset: i.endOffset
                            } else if (o = o.childNodes[e ? i.startOffset: i.endOffset]) l = domUtils.getNodeIndex(o, t);
                            else for (var c = (o = e ? i.startContainer: i.endContainer).firstChild; c;) if (domUtils.isFillChar(c)) c = c.nextSibling;
                            else if (l++, 3 == c.nodeType) for (; c && 3 == c.nodeType;) c = c.nextSibling;
                            else c = c.nextSibling;
                            else l = e ? domUtils.isFillChar(o) ? 0 : i.startOffset: i.endOffset;
                            return l < 0 && (l = 0),
                            a.push(l),
                            a
                        }
                        return n.startAddress = o(!0),
                        e || (n.endAddress = i.collapsed ? [].concat(n.startAddress) : o()),
                        n
                    },
                    moveToAddress: function(e, t) {
                        var n = this;
                        function i(e, t) {
                            for (var i, o, r, a = n.document.body,
                            s = 0,
                            l = e.length; s < l; s++) if (r = e[s], i = a, !(a = a.childNodes[r])) {
                                o = r;
                                break
                            }
                            t ? a ? n.setStartBefore(a) : n.setStart(i, o) : a ? n.setEndBefore(a) : n.setEnd(i, o)
                        }
                        return i(e.startAddress, !0),
                        !t && e.endAddress && i(e.endAddress),
                        n
                    },
                    equals: function(e) {
                        for (var t in this) if (this.hasOwnProperty(t) && this[t] !== e[t]) return ! 1;
                        return ! 0
                    },
                    traversal: function(e, t) {
                        if (this.collapsed) return this;
                        for (var n = this.createBookmark(), i = n.end, o = domUtils.getNextDomNode(n.start, !1, t); o && o !== i && domUtils.getPosition(o, i) & domUtils.POSITION_PRECEDING;) {
                            var r = domUtils.getNextDomNode(o, !1, t);
                            e(o),
                            o = r
                        }
                        return this.moveToBookmark(n)
                    }
                }
            } (),
            function() {
                function e(e, t) {
                    var n = domUtils.getNodeIndex; (e = e.duplicate()).collapse(t);
                    var i = e.parentElement();
                    if (!i.hasChildNodes()) return {
                        container: i,
                        offset: 0
                    };
                    for (var o, r, a = i.children,
                    s = e.duplicate(), l = 0, d = a.length - 1, c = -1; l <= d;) {
                        o = a[c = Math.floor((l + d) / 2)],
                        s.moveToElementText(o);
                        var u = s.compareEndPoints("StartToStart", e);
                        if (u > 0) d = c - 1;
                        else {
                            if (! (u < 0)) return {
                                container: i,
                                offset: n(o)
                            };
                            l = c + 1
                        }
                    }
                    if ( - 1 == c) {
                        if (s.moveToElementText(i), s.setEndPoint("StartToStart", e), r = s.text.replace(/(\r\n|\r)/g, "\n").length, a = i.childNodes, !r) return {
                            container: o = a[a.length - 1],
                            offset: o.nodeValue.length
                        };
                        for (var m = a.length; r > 0;) r -= a[--m].nodeValue.length;
                        return {
                            container: a[m],
                            offset: -r
                        }
                    }
                    if (s.collapse(u > 0), s.setEndPoint(u > 0 ? "StartToStart": "EndToStart", e), !(r = s.text.replace(/(\r\n|\r)/g, "\n").length)) return dtd.$empty[o.tagName] || dtd.$nonChild[o.tagName] ? {
                        container: i,
                        offset: n(o) + (u > 0 ? 0 : 1)
                    }: {
                        container: o,
                        offset: u > 0 ? 0 : o.childNodes.length
                    };
                    for (; r > 0;) try {
                        var f = o;
                        r -= (o = o[u > 0 ? "previousSibling": "nextSibling"]).nodeValue.length
                    } catch(e) {
                        return {
                            container: i,
                            offset: n(f)
                        }
                    }
                    return {
                        container: o,
                        offset: u > 0 ? -r: o.nodeValue.length + r
                    }
                }
                function t(e) {
                    var t;
                    try {
                        t = e.getNative().createRange()
                    } catch(e) {
                        return null
                    }
                    var n = t.item ? t.item(0) : t.parentElement();
                    return (n.ownerDocument || n) === e.document ? t: null
                } (dom.Selection = function(e) {
                    var n, i = this;
                    i.document = e,
                    browser.ie9below && (n = domUtils.getWindow(e).frameElement, domUtils.on(n, "beforedeactivate",
                    function() {
                        i._bakIERange = i.getIERange()
                    }), domUtils.on(n, "activate",
                    function() {
                        try { ! t(i) && i._bakIERange && i._bakIERange.select()
                        } catch(e) {}
                        i._bakIERange = null
                    })),
                    n = e = null
                }).prototype = {
                    rangeInBody: function(e, t) {
                        var n = browser.ie9below || t ? e.item ? e.item() : e.parentElement() : e.startContainer;
                        return n === this.document.body || domUtils.inDoc(n, this.document)
                    },
                    getNative: function() {
                        var e = this.document;
                        try {
                            return e ? browser.ie9below ? e.selection: domUtils.getWindow(e).getSelection() : null
                        } catch(e) {
                            return null
                        }
                    },
                    getIERange: function() {
                        var e = t(this);
                        return ! e && this._bakIERange ? this._bakIERange: e
                    },
                    cache: function() {
                        this.clear(),
                        this._cachedRange = this.getRange(),
                        this._cachedStartElement = this.getStart(),
                        this._cachedStartElementPath = this.getStartElementPath()
                    },
                    getStartElementPath: function() {
                        if (this._cachedStartElementPath) return this._cachedStartElementPath;
                        var e = this.getStart();
                        return e ? domUtils.findParents(e, !0, null, !0) : []
                    },
                    clear: function() {
                        this._cachedStartElementPath = this._cachedRange = this._cachedStartElement = null
                    },
                    isFocus: function() {
                        try {
                            if (browser.ie9below) {
                                var e = t(this);
                                return ! (!e || !this.rangeInBody(e))
                            }
                            return !! this.getNative().rangeCount
                        } catch(e) {
                            return ! 1
                        }
                    },
                    getRange: function() {
                        var t = this;
                        function n(e) {
                            for (var n = t.document.body.firstChild,
                            i = e.collapsed; n && n.firstChild;) e.setStart(n, 0),
                            n = n.firstChild;
                            e.startContainer || e.setStart(t.document.body, 0),
                            i && e.collapse(!0)
                        }
                        if (null != t._cachedRange) return this._cachedRange;
                        var i = new baidu.editor.dom.Range(t.document);
                        if (browser.ie9below) {
                            var o = t.getIERange();
                            if (o) try { !
                                function(t, n) {
                                    if (t.item) n.selectNode(t.item(0));
                                    else {
                                        var i = e(t, !0);
                                        n.setStart(i.container, i.offset),
                                        0 != t.compareEndPoints("StartToEnd", t) && (i = e(t, !1), n.setEnd(i.container, i.offset))
                                    }
                                } (o, i)
                            } catch(e) {
                                n(i)
                            } else n(i)
                        } else {
                            var r = t.getNative();
                            if (r && r.rangeCount) {
                                var a = r.getRangeAt(0),
                                s = r.getRangeAt(r.rangeCount - 1);
                                i.setStart(a.startContainer, a.startOffset).setEnd(s.endContainer, s.endOffset),
                                i.collapsed && domUtils.isBody(i.startContainer) && !i.startOffset && n(i)
                            } else {
                                if (this._bakRange && domUtils.inDoc(this._bakRange.startContainer, this.document)) return this._bakRange;
                                n(i)
                            }
                        }
                        return this._bakRange = i
                    },
                    getStart: function() {
                        if (this._cachedStartElement) return this._cachedStartElement;
                        var e, t, n, i, o = browser.ie9below ? this.getIERange() : this.getRange();
                        if (browser.ie9below) {
                            if (!o) return this.document.body.firstChild;
                            if (o.item) return o.item(0);
                            for ((e = o.duplicate()).text.length > 0 && e.moveStart("character", 1), e.collapse(1), t = e.parentElement(), i = n = o.parentElement(); n = n.parentNode;) if (n == t) {
                                t = i;
                                break
                            }
                        } else if (o.shrinkBoundary(), 1 == (t = o.startContainer).nodeType && t.hasChildNodes() && (t = t.childNodes[Math.min(t.childNodes.length - 1, o.startOffset)]), 3 == t.nodeType) return t.parentNode;
                        return t
                    },
                    getText: function() {
                        var e, t;
                        return this.isFocus() && (e = this.getNative()) ? (t = browser.ie9below ? e.createRange() : e.getRangeAt(0), browser.ie9below ? t.text: t.toString()) : ""
                    },
                    clearRange: function() {
                        this.getNative()[browser.ie9below ? "empty": "removeAllRanges"]()
                    }
                }
            } (),
            function() {
                var e, t = 0;
                function n(e, t) {
                    var n;
                    if (t.textarea) if (utils.isString(t.textarea)) {
                        for (var i, o = 0,
                        r = domUtils.getElementsByTagName(e, "textarea"); i = r[o++];) if (i.id == "ueditor_textarea_" + t.options.textarea) {
                            n = i;
                            break
                        }
                    } else n = t.textarea;
                    n || (e.appendChild(n = domUtils.createElement(document, "textarea", {
                        name: t.options.textarea,
                        id: "ueditor_textarea_" + t.options.textarea,
                        style: "display:none"
                    })), t.textarea = n),
                    !n.getAttribute("name") && n.setAttribute("name", t.options.textarea),
                    n.value = t.hasContents() ? t.options.allHtmlEnabled ? t.getAllHtml() : t.getContent(null, null, !0) : ""
                }
                function i(e) {
                    e.langIsReady = !0,
                    e.fireEvent("langReady")
                }
                var o = UE.Editor = function(e) {
                    var n = this;
                    n.uid = t++,
                    EventBase.call(n),
                    n.commands = {},
                    n.options = utils.extend(utils.clone(e || {}), UEDITOR_CONFIG, !0),
                    n.shortcutkeys = {},
                    n.inputRules = [],
                    n.outputRules = [],
                    n.setOpt(o.defaultOptions(n)),
                    n.loadServerConfig(),
                    utils.isEmptyObject(UE.I18N) ? utils.loadFile(document, {
                        src: n.options.langPath + n.options.lang + "/" + n.options.lang + ".js",
                        tag: "script",
                        type: "text/javascript",
                        defer: "defer"
                    },
                    function() {
                        UE.plugin.load(n),
                        i(n)
                    }) : (n.options.lang = function(e) {
                        for (var t in e) return t
                    } (UE.I18N), UE.plugin.load(n), i(n)),
                    UE.instants["ueditorInstant" + n.uid] = n
                };
                o.prototype = {
                    registerCommand: function(e, t) {
                        this.commands[e] = t
                    },
                    ready: function(e) {
                        e && (this.isReady ? e.apply(this) : this.addListener("ready", e))
                    },
                    setOpt: function(e, t) {
                        var n = {};
                        utils.isString(e) ? n[e] = t: n = e,
                        utils.extend(this.options, n, !0)
                    },
                    getOpt: function(e) {
                        return this.options[e]
                    },
                    destroy: function() {
                        var e = this;
                        e.fireEvent("destroy");
                        var t = e.container.parentNode,
                        n = e.textarea;
                        n ? n.style.display = "": (n = document.createElement("textarea"), t.parentNode.insertBefore(n, t)),
                        n.style.width = e.iframe.offsetWidth + "px",
                        n.style.height = e.iframe.offsetHeight + "px",
                        n.value = e.getContent(),
                        n.id = e.key,
                        t.innerHTML = "",
                        domUtils.remove(t);
                        var i = e.key;
                        for (var o in e) e.hasOwnProperty(o) && delete this[o];
                        UE.delEditor(i)
                    },
                    render: function(e) {
                        var t = this.options,
                        n = function(t) {
                            return parseInt(domUtils.getComputedStyle(e, t))
                        };
                        if (utils.isString(e) && (e = document.getElementById(e)), e) {
                            t.initialFrameWidth ? t.minFrameWidth = t.initialFrameWidth: t.minFrameWidth = t.initialFrameWidth = e.offsetWidth,
                            t.initialFrameHeight ? t.minFrameHeight = t.initialFrameHeight: t.initialFrameHeight = t.minFrameHeight = e.offsetHeight,
                            e.style.width = /%$/.test(t.initialFrameWidth) ? "100%": t.initialFrameWidth - n("padding-left") - n("padding-right") + "px",
                            e.style.height = /%$/.test(t.initialFrameHeight) ? "100%": t.initialFrameHeight - n("padding-top") - n("padding-bottom") + "px",
                            e.style.zIndex = t.zIndex;
                            var i = (ie && browser.version < 9 ? "": "<!DOCTYPE html>") + "<html xmlns='http://www.w3.org/1999/xhtml' class='view' ><head><style type='text/css'>.view{padding:0;word-wrap:break-word;cursor:text;height:90%;}\nbody{margin:8px;font-family:sans-serif;font-size:16px;}p{margin:5px 0;}</style>" + (t.iframeCssUrl ? "<link rel='stylesheet' type='text/css' href='" + utils.unhtml(t.iframeCssUrl) + "'/>": "") + (t.initialStyle ? "<style>" + t.initialStyle + "</style>": "") + "</head><body class='view' ></body><script type='text/javascript' " + (ie ? "defer='defer'": "") + " id='_initialScript'>setTimeout(function(){editor = window.parent.UE.instants['ueditorInstant" + this.uid + "'];editor._setup(document);},0);var _tmpScript = document.getElementById('_initialScript');_tmpScript.parentNode.removeChild(_tmpScript);<\/script></html>";
                            e.appendChild(domUtils.createElement(document, "iframe", {
                                id: "ueditor_" + this.uid,
                                width: "100%",
                                height: "100%",
                                frameborder: "0",
                                src: "javascript:void(function(){document.open();" + (t.customDomain && document.domain != location.hostname ? 'document.domain="' + document.domain + '";': "") + 'document.write("' + i + '");document.close();}())'
                            })),
                            e.style.overflow = "hidden",
                            setTimeout(function() { / %$ / .test(t.initialFrameWidth) && (t.minFrameWidth = t.initialFrameWidth = e.offsetWidth),
                                /%$/.test(t.initialFrameHeight) && (t.minFrameHeight = t.initialFrameHeight = e.offsetHeight, e.style.height = t.initialFrameHeight + "px")
                            })
                        }
                    },
                    _setup: function(e) {
                        var t, i = this,
                        o = i.options;
                        ie ? (e.body.disabled = !0, e.body.contentEditable = !0, e.body.disabled = !1) : e.body.contentEditable = !0,
                        e.body.spellcheck = !1,
                        i.document = e,
                        i.window = e.defaultView || e.parentWindow,
                        i.iframe = i.window.frameElement,
                        i.body = e.body,
                        i.selection = new dom.Selection(e),
                        browser.gecko && (t = this.selection.getNative()) && t.removeAllRanges(),
                        this._initEvents();
                        for (var r = this.iframe.parentNode; ! domUtils.isBody(r); r = r.parentNode) if ("FORM" == r.tagName) {
                            i.form = r,
                            i.options.autoSyncData ? domUtils.on(i.window, "blur",
                            function() {
                                n(r, i)
                            }) : domUtils.on(r, "submit",
                            function() {
                                n(this, i)
                            });
                            break
                        }
                        if (o.initialContent) if (o.autoClearinitialContent) {
                            var a = i.execCommand;
                            i.execCommand = function() {
                                return i.fireEvent("firstBeforeExecCommand"),
                                a.apply(i, arguments)
                            },
                            this._setDefaultContent(o.initialContent)
                        } else this.setContent(o.initialContent, !1, !0);
                        domUtils.isEmptyNode(i.body) && (i.body.innerHTML = "<p>" + (browser.ie ? "": "<br/>") + "</p>"),
                        o.focus && setTimeout(function() {
                            i.focus(i.options.focusInEnd),
                            !i.options.autoClearinitialContent && i._selectionChange()
                        },
                        0),
                        i.container || (i.container = this.iframe.parentNode),
                        o.fullscreen && i.ui && i.ui.setFullScreen(!0);
                        try {
                            i.document.execCommand("2D-position", !1, !1)
                        } catch(e) {}
                        try {
                            i.document.execCommand("enableInlineTableEditing", !1, !1)
                        } catch(e) {}
                        try {
                            i.document.execCommand("enableObjectResizing", !1, !1)
                        } catch(e) {}
                        i._bindshortcutKeys(),
                        i.isReady = 1,
                        i.fireEvent("ready"),
                        o.onready && o.onready.call(i),
                        browser.ie9below || domUtils.on(i.window, ["blur", "focus"],
                        function(e) {
                            if ("blur" == e.type) {
                                i._bakRange = i.selection.getRange();
                                try {
                                    i._bakNativeRange = i.selection.getNative().getRangeAt(0),
                                    i.selection.getNative().removeAllRanges()
                                } catch(e) {
                                    i._bakNativeRange = null
                                }
                            } else try {
                                i._bakRange && i._bakRange.select()
                            } catch(e) {}
                        }),
                        browser.gecko && browser.version <= 10902 && (i.body.contentEditable = !1, setTimeout(function() {
                            i.body.contentEditable = !0
                        },
                        100), setInterval(function() {
                            i.body.style.height = i.iframe.offsetHeight - 20 + "px"
                        },
                        100)),
                        !o.isShow && i.setHide(),
                        o.readonly && i.setDisabled()
                    },
                    sync: function(e) {
                        var t = e ? document.getElementById(e) : domUtils.findParent(this.iframe.parentNode,
                        function(e) {
                            return "FORM" == e.tagName
                        },
                        !0);
                        t && n(t, this)
                    },
                    setHeight: function(e, t) {
                        e !== parseInt(this.iframe.parentNode.style.height) && (this.iframe.parentNode.style.height = e + "px"),
                        !t && (this.options.minFrameHeight = this.options.initialFrameHeight = e),
                        this.body.style.height = e + "px",
                        !t && this.trigger("setHeight")
                    },
                    addshortcutkey: function(e, t) {
                        var n = {};
                        t ? n[e] = t: n = e,
                        utils.extend(this.shortcutkeys, n)
                    },
                    _bindshortcutKeys: function() {
                        var e = this,
                        t = this.shortcutkeys;
                        e.addListener("keydown",
                        function(n, i) {
                            var o = i.keyCode || i.which;
                            for (var r in t) for (var a, s = t[r].split(","), l = 0; a = s[l++];) {
                                var d = (a = a.split(":"))[0],
                                c = a[1]; (/^(ctrl)(\+shift)?\+(\d+)$/.test(d.toLowerCase()) || /^(\d+)$/.test(d)) && ("ctrl" == RegExp.$1 && (i.ctrlKey || i.metaKey) && ("" == RegExp.$2 || i[RegExp.$2.slice(1) + "Key"]) && o == RegExp.$3 || o == RegExp.$1) && ( - 1 != e.queryCommandState(r, c) && e.execCommand(r, c), domUtils.preventDefault(i))
                            }
                        })
                    },
                    getContent: function(e, t, n, i, o) {
                        if (e && utils.isFunction(e) && (t = e, e = ""), t ? !t() : !this.hasContents()) return "";
                        this.fireEvent("beforegetcontent");
                        var r = UE.htmlparser(this.body.innerHTML, i);
                        return this.filterOutputRule(r),
                        this.fireEvent("aftergetcontent", e, r),
                        r.toHtml(o)
                    },
                    getAllHtml: function() {
                        var e = this,
                        t = [];
                        if (e.fireEvent("getAllHtml", t), browser.ie && browser.version > 8) {
                            var n = "";
                            utils.each(e.document.styleSheets,
                            function(e) {
                                n += e.href ? '<link rel="stylesheet" type="text/css" href="' + e.href + '" />': "<style>" + e.cssText + "</style>"
                            }),
                            utils.each(e.document.getElementsByTagName("script"),
                            function(e) {
                                n += e.outerHTML
                            })
                        }
                        return "<html><head>" + (e.options.charset ? '<meta http-equiv="Content-Type" content="text/html; charset=' + e.options.charset + '"/>': "") + (n || e.document.getElementsByTagName("head")[0].innerHTML) + t.join("\n") + "</head><body " + (ie && browser.version < 9 ? 'class="view"': "") + ">" + e.getContent(null, null, !0) + "</body></html>"
                    },
                    getPlainTxt: function() {
                        var e = new RegExp(domUtils.fillChar, "g"),
                        t = this.body.innerHTML.replace(/[\n\r]/g, "");
                        return (t = t.replace(/<(p|div)[^>]*>(<br\/?>|&nbsp;)<\/\1>/gi, "\n").replace(/<br\/?>/gi, "\n").replace(/<[^>/] + >/g,"").replace(/ (\n) ? <\ / ([ ^ >] + ) > /g,function(e,t,n){return dtd.$block[n]?"\n":t||""})).replace(e,"").replace(/\u00a0 / g, " ").replace(/&nbsp;/g, " ")
                    },
                    getContentTxt: function() {
                        var e = new RegExp(domUtils.fillChar, "g");
                        return this.body[browser.ie ? "innerText": "textContent"].replace(e, "").replace(/\u00a0/g, " ")
                    },
                    setContent: function(e, t, i) {
                        var o = this;
                        o.fireEvent("beforesetcontent", e);
                        var r, a, s = UE.htmlparser(e);
                        if (o.filterInputRule(s), e = s.toHtml(), o.body.innerHTML = (t ? o.body.innerHTML: "") + e, "p" == o.options.enterTag) {
                            var l, d = this.body.firstChild;
                            if (!d || 1 == d.nodeType && (dtd.$cdata[d.tagName] || "DIV" == (r = d).tagName && r.getAttribute("cdata_tag") || domUtils.isCustomeNode(d)) && d === this.body.lastChild) this.body.innerHTML = "<p>" + (browser.ie ? "&nbsp;": "<br/>") + "</p>" + this.body.innerHTML;
                            else for (var c = o.document.createElement("p"); d;) {
                                for (; d && (3 == d.nodeType || 1 == d.nodeType && dtd.p[d.tagName] && !dtd.$cdata[d.tagName]);) l = d.nextSibling,
                                c.appendChild(d),
                                d = l;
                                if (c.firstChild) {
                                    if (!d) {
                                        o.body.appendChild(c);
                                        break
                                    }
                                    d.parentNode.insertBefore(c, d),
                                    c = o.document.createElement("p")
                                }
                                d = d.nextSibling
                            }
                        }
                        o.fireEvent("aftersetcontent"),
                        o.fireEvent("contentchange"),
                        !i && o._selectionChange(),
                        o._bakRange = o._bakIERange = o._bakNativeRange = null,
                        browser.gecko && (a = this.selection.getNative()) && a.removeAllRanges(),
                        o.options.autoSyncData && o.form && n(o.form, o)
                    },
                    focus: function(e) {
                        try {
                            var t = this.selection.getRange();
                            if (e) { (n = this.body.lastChild) && 1 == n.nodeType && !dtd.$empty[n.tagName] && (domUtils.isEmptyBlock(n) ? t.setStartAtFirst(n) : t.setStartAtLast(n), t.collapse(!0)),
                                t.setCursor(!0)
                            } else {
                                var n;
                                if (!t.collapsed && domUtils.isBody(t.startContainer) && 0 == t.startOffset)(n = this.body.firstChild) && 1 == n.nodeType && !dtd.$empty[n.tagName] && t.setStartAtFirst(n).collapse(!0);
                                t.select(!0)
                            }
                            this.fireEvent("focus selectionchange")
                        } catch(e) {}
                    },
                    isFocus: function() {
                        return this.selection.isFocus()
                    },
                    blur: function() {
                        var e = this.selection.getNative();
                        if (e.empty && browser.ie) {
                            var t = document.body.createTextRange();
                            t.moveToElementText(document.body),
                            t.collapse(!0),
                            t.select(),
                            e.empty()
                        } else e.removeAllRanges()
                    },
                    _initEvents: function() {
                        var e = this,
                        t = e.document,
                        n = e.window;
                        e._proxyDomEvent = utils.bind(e._proxyDomEvent, e),
                        domUtils.on(t, ["click", "contextmenu", "mousedown", "keydown", "keyup", "keypress", "mouseup", "mouseover", "mouseout", "selectstart"], e._proxyDomEvent),
                        domUtils.on(n, ["focus", "blur"], e._proxyDomEvent),
                        domUtils.on(e.body, "drop",
                        function(t) {
                            browser.gecko && t.stopPropagation && t.stopPropagation(),
                            e.fireEvent("contentchange")
                        }),
                        domUtils.on(t, ["mouseup", "keydown"],
                        function(t) {
                            "keydown" == t.type && (t.ctrlKey || t.metaKey || t.shiftKey || t.altKey) || 2 != t.button && e._selectionChange(250, t)
                        })
                    },
                    _proxyDomEvent: function(e) {
                        return ! 1 !== this.fireEvent("before" + e.type.replace(/^on/, "").toLowerCase()) && (!1 !== this.fireEvent(e.type.replace(/^on/, ""), e) && this.fireEvent("after" + e.type.replace(/^on/, "").toLowerCase()))
                    },
                    _selectionChange: function(t, n) {
                        var i, o, r = this,
                        a = !1;
                        browser.ie && browser.version < 9 && n && "mouseup" == n.type && (this.selection.getRange().collapsed || (a = !0, i = n.clientX, o = n.clientY));
                        clearTimeout(e),
                        e = setTimeout(function() {
                            if (r.selection && r.selection.getNative()) {
                                var e, t;
                                if (a && "None" == r.selection.getNative().type) {
                                    e = r.document.body.createTextRange();
                                    try {
                                        e.moveToPoint(i, o)
                                    } catch(t) {
                                        e = null
                                    }
                                }
                                e && (t = r.selection.getIERange, r.selection.getIERange = function() {
                                    return e
                                }),
                                r.selection.cache(),
                                t && (r.selection.getIERange = t),
                                r.selection._cachedRange && r.selection._cachedStartElement && (r.fireEvent("beforeselectionchange"), r.fireEvent("selectionchange", !!n), r.fireEvent("afterselectionchange"), r.selection.clear())
                            }
                        },
                        t || 50)
                    },
                    _callCmdFn: function(e, t) {
                        var n, i, o = t[0].toLowerCase();
                        return i = (n = this.commands[o] || UE.commands[o]) && n[e],
                        n && i || "queryCommandState" != e ? i ? i.apply(this, t) : void 0 : 0
                    },
                    execCommand: function(e) {
                        e = e.toLowerCase();
                        var t, n = this,
                        i = n.commands[e] || UE.commands[e];
                        return i && i.execCommand ? (i.notNeedUndo || n.__hasEnterExecCommand ? (t = this._callCmdFn("execCommand", arguments), !n.__hasEnterExecCommand && !i.ignoreContentChange && !n._ignoreContentChange && n.fireEvent("contentchange")) : (n.__hasEnterExecCommand = !0, -1 != n.queryCommandState.apply(n, arguments) && (n.fireEvent("saveScene"), n.fireEvent.apply(n, ["beforeexeccommand", e].concat(arguments)), t = this._callCmdFn("execCommand", arguments), n.fireEvent.apply(n, ["afterexeccommand", e].concat(arguments)), n.fireEvent("saveScene")), n.__hasEnterExecCommand = !1), !n.__hasEnterExecCommand && !i.ignoreContentChange && !n._ignoreContentChange && n._selectionChange(), t) : null
                    },
                    queryCommandState: function(e) {
                        return this._callCmdFn("queryCommandState", arguments)
                    },
                    queryCommandValue: function(e) {
                        return this._callCmdFn("queryCommandValue", arguments)
                    },
                    hasContents: function(e) {
                        if (e) for (var t, n = 0; t = e[n++];) if (this.document.getElementsByTagName(t).length > 0) return ! 0;
                        if (!domUtils.isEmptyBlock(this.body)) return ! 0;
                        for (e = ["div"], n = 0; t = e[n++];) for (var i, o = domUtils.getElementsByTagName(this.document, t), r = 0; i = o[r++];) if (domUtils.isCustomeNode(i)) return ! 0;
                        return ! 1
                    },
                    reset: function() {
                        this.fireEvent("reset")
                    },
                    setEnabled: function() {
                        var e, t = this;
                        if ("false" == t.body.contentEditable) {
                            t.body.contentEditable = !0,
                            e = t.selection.getRange();
                            try {
                                e.moveToBookmark(t.lastBk),
                                delete t.lastBk
                            } catch(n) {
                                e.setStartAtFirst(t.body).collapse(!0)
                            }
                            e.select(!0),
                            t.bkqueryCommandState && (t.queryCommandState = t.bkqueryCommandState, delete t.bkqueryCommandState),
                            t.bkqueryCommandValue && (t.queryCommandValue = t.bkqueryCommandValue, delete t.bkqueryCommandValue),
                            t.fireEvent("selectionchange")
                        }
                    },
                    enable: function() {
                        return this.setEnabled()
                    },
                    setDisabled: function(e) {
                        var t = this;
                        e = e ? utils.isArray(e) ? e: [e] : [],
                        "true" == t.body.contentEditable && (t.lastBk || (t.lastBk = t.selection.getRange().createBookmark(!0)), t.body.contentEditable = !1, t.bkqueryCommandState = t.queryCommandState, t.bkqueryCommandValue = t.queryCommandValue, t.queryCommandState = function(n) {
                            return - 1 != utils.indexOf(e, n) ? t.bkqueryCommandState.apply(t, arguments) : -1
                        },
                        t.queryCommandValue = function(n) {
                            return - 1 != utils.indexOf(e, n) ? t.bkqueryCommandValue.apply(t, arguments) : null
                        },
                        t.fireEvent("selectionchange"))
                    },
                    disable: function(e) {
                        return this.setDisabled(e)
                    },
                    _setDefaultContent: function() {
                        function e() {
                            var t = this;
                            t.document.getElementById("initContent") && (t.body.innerHTML = "<p>" + (ie ? "": "<br/>") + "</p>", t.removeListener("firstBeforeExecCommand focus", e), setTimeout(function() {
                                t.focus(),
                                t._selectionChange()
                            },
                            0))
                        }
                        return function(t) {
                            this.body.innerHTML = '<p id="initContent">' + t + "</p>",
                            this.addListener("firstBeforeExecCommand focus", e)
                        }
                    } (),
                    setShow: function() {
                        var e = this,
                        t = e.selection.getRange();
                        if ("none" == e.container.style.display) {
                            try {
                                t.moveToBookmark(e.lastBk),
                                delete e.lastBk
                            } catch(n) {
                                t.setStartAtFirst(e.body).collapse(!0)
                            }
                            setTimeout(function() {
                                t.select(!0)
                            },
                            100),
                            e.container.style.display = ""
                        }
                    },
                    show: function() {
                        return this.setShow()
                    },
                    setHide: function() {
                        this.lastBk || (this.lastBk = this.selection.getRange().createBookmark(!0)),
                        this.container.style.display = "none"
                    },
                    hide: function() {
                        return this.setHide()
                    },
                    getLang: function(e) {
                        var t = UE.I18N[this.options.lang];
                        if (!t) throw Error("not import language file");
                        e = (e || "").split(".");
                        for (var n, i = 0; (n = e[i++]) && (t = t[n]););
                        return t
                    },
                    getContentLength: function(e, t) {
                        var n = this.getContent(!1, !1, !0).length;
                        if (e) {
                            t = (t || []).concat(["hr", "img", "iframe"]),
                            n = this.getContentTxt().replace(/[\t\r\n]+/g, "").length;
                            for (var i, o = 0; i = t[o++];) n += this.document.getElementsByTagName(i).length
                        }
                        return n
                    },
                    addInputRule: function(e) {
                        this.inputRules.push(e)
                    },
                    filterInputRule: function(e) {
                        for (var t, n = 0; t = this.inputRules[n++];) t.call(this, e)
                    },
                    addOutputRule: function(e) {
                        this.outputRules.push(e)
                    },
                    filterOutputRule: function(e) {
                        for (var t, n = 0; t = this.outputRules[n++];) t.call(this, e)
                    },
                    getActionUrl: function(e) {
                        var t = this.getOpt(e) || e,
                        n = this.getOpt("imageUrl"),
                        i = this.getOpt("serverUrl");
                        return ! i && n && (i = n.replace(/^(.*[\/]).+([\.].+)$/, "$1controller$2")),
                        i ? (i = i + ( - 1 == i.indexOf("?") ? "?": "&") + "action=" + (t || ""), utils.formatUrl(i)) : ""
                    }
                },
                utils.inherits(o, EventBase)
            } (),
            UE.Editor.defaultOptions = function(e) {
                var t = e.options.UEDITOR_HOME_URL;
                return {
                    isShow: !0,
                    initialContent: "",
                    initialStyle: "",
                    autoClearinitialContent: !1,
                    iframeCssUrl: t + "themes/iframe.css",
                    textarea: "editorValue",
                    focus: !1,
                    focusInEnd: !0,
                    autoClearEmptyNode: !0,
                    fullscreen: !1,
                    readonly: !1,
                    zIndex: 9999,
                    imagePopup: !0,
                    enterTag: "p",
                    customDomain: !1,
                    lang: "zh-cn",
                    langPath: t + "lang/",
                    theme: "default",
                    themePath: t + "themes/",
                    allHtmlEnabled: !1,
                    scaleEnabled: !1,
                    tableNativeEditInFF: !1,
                    autoSyncData: !0,
                    fileNameFormat: "{time}{rand:6}"
                }
            },
            function() {
                UE.Editor.prototype.loadServerConfig = function() {
                    var me = this;
                    function showErrorMsg(e) {
                        console && console.error(e)
                    }
                    setTimeout(function() {
                        try {
                            me.options.imageUrl && me.setOpt("serverUrl", me.options.imageUrl.replace(/^(.*[\/]).+([\.].+)$/, "$1controller$2"));
                            var configUrl = me.getActionUrl("config"),
                            isJsonp = !1;
                            me._serverConfigLoaded = !1,
                            configUrl && UE.ajax.request(configUrl, {
                                method: "GET",
                                dataType: isJsonp ? "jsonp": "",
                                onsuccess: function(r) {
                                    try {
                                        var config = isJsonp ? r: eval("(" + r.responseText + ")");
                                        utils.extend(me.options, config),
                                        me.fireEvent("serverConfigLoaded"),
                                        me._serverConfigLoaded = !0
                                    } catch(e) {
                                        showErrorMsg(me.getLang("loadconfigFormatError"))
                                    }
                                },
                                onerror: function() {
                                    showErrorMsg(me.getLang("loadconfigHttpError"))
                                }
                            })
                        } catch(e) {
                            showErrorMsg(me.getLang("loadconfigError"))
                        }
                    })
                },
                UE.Editor.prototype.isServerConfigLoaded = function() {
                    return this._serverConfigLoaded || !1
                },
                UE.Editor.prototype.afterConfigReady = function(e) {
                    if (e && utils.isFunction(e)) {
                        var t = this,
                        n = function() {
                            e.apply(t, arguments),
                            t.removeListener("serverConfigLoaded", n)
                        };
                        t.isServerConfigLoaded() ? e.call(t, "serverConfigLoaded") : t.addListener("serverConfigLoaded", n)
                    }
                }
            } (),
            UE.ajax = function() {
                var e = "XMLHttpRequest()";
                try {
                    new ActiveXObject("Msxml2.XMLHTTP"),
                    e = "ActiveXObject('Msxml2.XMLHTTP')"
                } catch(t) {
                    try {
                        new ActiveXObject("Microsoft.XMLHTTP"),
                        e = "ActiveXObject('Microsoft.XMLHTTP')"
                    } catch(e) {}
                }
                var t = new Function("return new " + e);
                function n(e) {
                    var t = [];
                    for (var n in e) if ("method" != n && "timeout" != n && "async" != n && "dataType" != n && "callback" != n && void 0 != e[n] && null != e[n]) if ("function" != (typeof e[n]).toLowerCase() && "object" != (typeof e[n]).toLowerCase()) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                    else if (utils.isArray(e[n])) for (var i = 0; i < e[n].length; i++) t.push(encodeURIComponent(n) + "[]=" + encodeURIComponent(e[n][i]));
                    return t.join("&")
                }
                function i(e, t) {
                    var i, o, r, a = t.onsuccess ||
                    function() {},
                    s = document.createElement("SCRIPT"),
                    l = t || {},
                    d = l.charset,
                    c = l.jsonp || "callback",
                    u = l.timeOut || 0,
                    m = new RegExp("(\\?|&)" + c + "=([^&]*)");
                    utils.isFunction(a) ? (i = "bd__editor__" + Math.floor(2147483648 * Math.random()).toString(36), window[i] = p(0)) : utils.isString(a) ? i = a: (r = m.exec(e)) && (i = r[2]),
                    (e = e.replace(m, "$1" + c + "=" + i)).search(m) < 0 && (e += (e.indexOf("?") < 0 ? "?": "&") + c + "=" + i);
                    var f = n(t);
                    function p(e) {
                        return function() {
                            try {
                                if (e) l.onerror && l.onerror();
                                else try {
                                    clearTimeout(o),
                                    a.apply(window, arguments)
                                } catch(e) {}
                            } catch(e) {
                                l.onerror && l.onerror.call(window, e)
                            } finally {
                                l.oncomplete && l.oncomplete.apply(window, arguments),
                                s.parentNode && s.parentNode.removeChild(s),
                                window[i] = null;
                                try {
                                    delete window[i]
                                } catch(e) {}
                            }
                        }
                    }
                    utils.isEmptyObject(t.data) || (f += (f ? "&": "") + n(t.data)),
                    f && (e = e.replace(/\?/, "?" + f + "&")),
                    s.onerror = p(1),
                    u && (o = setTimeout(p(1), u)),
                    function(e, t, n) {
                        e.setAttribute("type", "text/javascript"),
                        e.setAttribute("defer", "defer"),
                        n && e.setAttribute("charset", n),
                        e.setAttribute("src", t),
                        document.getElementsByTagName("head")[0].appendChild(e)
                    } (s, e, d)
                }
                return {
                    request: function(e, o) {
                        o && "jsonp" == o.dataType ? i(e, o) : function(e, i) {
                            var o = t(),
                            r = !1,
                            a = {
                                method: "POST",
                                timeout: 5e3,
                                async: !0,
                                data: {},
                                onsuccess: function() {},
                                onerror: function() {}
                            };
                            if ("object" == typeof e && (e = (i = e).url), o && e) {
                                var s = i ? utils.extend(a, i) : a,
                                l = n(s);
                                utils.isEmptyObject(s.data) || (l += (l ? "&": "") + n(s.data));
                                var d = setTimeout(function() {
                                    4 != o.readyState && (r = !0, o.abort(), clearTimeout(d))
                                },
                                s.timeout),
                                c = s.method.toUpperCase(),
                                u = e + ( - 1 == e.indexOf("?") ? "?": "&") + ("POST" == c ? "": l + "&noCache=" + +new Date);
                                o.open(c, u, s.async),
                                o.onreadystatechange = function() {
                                    4 == o.readyState && (r || 200 != o.status ? s.onerror(o) : s.onsuccess(o))
                                },
                                o.setRequestHeader("Authorization", sessionStorage.getItem("token")),
                                "POST" == c ? (o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.send(l)) : o.send(null)
                            }
                        } (e, o)
                    },
                    getJSONP: function(e, t, n) {
                        i(e, {
                            data: t,
                            oncomplete: n
                        })
                    }
                }
            } ();
            var filterWord = UE.filterWord = function() {
                function e(e) {
                    return e = e.replace(/[\d.]+\w+/g,
                    function(e) {
                        return utils.transUnitToPx(e)
                    })
                }
                return function(t) {
                    return /(class="?Mso|style="[^"]*\bmso\-|w:WordDocument|<(v|o):|lang=)/gi.test(t) ?
                    function(t) {
                        return t.replace(/[\t\r\n]+/g, " ").replace(/<!--[\s\S]*?-->/gi, "").replace(/<v:shape [^>]*>[\s\S]*?.<\/v:shape>/gi,
                        function(t) {
                            if (browser.opera) return "";
                            try {
                                if (/Bitmap/i.test(t)) return "";
                                var n = t.match(/width:([ \d.]*p[tx])/i)[1],
                                i = t.match(/height:([ \d.]*p[tx])/i)[1],
                                o = t.match(/src=\s*"([^"]*)"/i)[1];
                                return '<img width="' + e(n) + '" height="' + e(i) + '" src="' + o + '" />'
                            } catch(e) {
                                return ""
                            }
                        }).replace(/<\/?div[^>]*>/g, "").replace(/v:\w+=(["']?)[^'"]+\1/g, "").replace(/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|xml|meta|link|style|\w+:\w+)(?=[\s\/>]))[^>]*>/gi, "").replace(/<p [^>]*class="?MsoHeading"?[^>]*>(.*?)<\/p>/gi, "<p><strong>$1</strong></p>").replace(/\s+(class|lang|align)\s*=\s*(['"]?)([\w-]+)\2/gi,
                        function(e, t, n, i) {
                            return "class" == t && "MsoListParagraph" == i ? e: ""
                        }).replace(/<(font|span)[^>]*>(\s*)<\/\1>/gi,
                        function(e, t, n) {
                            return n.replace(/[\t\r\n ]+/g, " ")
                        }).replace(/(<[a-z][^>]*)\sstyle=(["'])([^\2]*?)\2/gi,
                        function(t, n, i, o) {
                            for (var r, a = [], s = o.replace(/^\s+|\s+$/, "").replace(/&#39;/g, "'").replace(/&quot;/gi, "'").replace(/[\d.]+(cm|pt)/g,
                            function(e) {
                                return utils.transUnitToPx(e)
                            }).split(/;\s*/g), l = 0; r = s[l]; l++) {
                                var d, c, u = r.split(":");
                                if (2 == u.length) {
                                    if (d = u[0].toLowerCase(), c = u[1].toLowerCase(), /^(background)\w*/.test(d) && 0 == c.replace(/(initial|\s)/g, "").length || /^(margin)\w*/.test(d) && /^0\w+$/.test(c)) continue;
                                    switch (d) {
                                    case "mso-padding-alt":
                                    case "mso-padding-top-alt":
                                    case "mso-padding-right-alt":
                                    case "mso-padding-bottom-alt":
                                    case "mso-padding-left-alt":
                                    case "mso-margin-alt":
                                    case "mso-margin-top-alt":
                                    case "mso-margin-right-alt":
                                    case "mso-margin-bottom-alt":
                                    case "mso-margin-left-alt":
                                    case "mso-height":
                                    case "mso-width":
                                    case "mso-vertical-align-alt":
                                        /<table/.test(n) || (a[l] = d.replace(/^mso-|-alt$/g, "") + ":" + e(c));
                                        continue;
                                    case "horiz-align":
                                        a[l] = "text-align:" + c;
                                        continue;
                                    case "vert-align":
                                        a[l] = "vertical-align:" + c;
                                        continue;
                                    case "font-color":
                                    case "mso-foreground":
                                        a[l] = "color:" + c;
                                        continue;
                                    case "mso-background":
                                    case "mso-highlight":
                                        a[l] = "background:" + c;
                                        continue;
                                    case "mso-default-height":
                                        a[l] = "min-height:" + e(c);
                                        continue;
                                    case "mso-default-width":
                                        a[l] = "min-width:" + e(c);
                                        continue;
                                    case "mso-padding-between-alt":
                                        a[l] = "border-collapse:separate;border-spacing:" + e(c);
                                        continue;
                                    case "text-line-through":
                                        "single" != c && "double" != c || (a[l] = "text-decoration:line-through");
                                        continue;
                                    case "mso-zero-height":
                                        "yes" == c && (a[l] = "display:none");
                                        continue;
                                    case "margin":
                                        if (!/[1-9]/.test(c)) continue
                                    }
                                    if (/^(mso|column|font-emph|lang|layout|line-break|list-image|nav|panose|punct|row|ruby|sep|size|src|tab-|table-border|text-(?:decor|trans)|top-bar|version|vnd|word-break)/.test(d) || /text\-indent|padding|margin/.test(d) && /\-[\d.]+/.test(c)) continue;
                                    a[l] = d + ":" + u[1]
                                }
                            }
                            return n + (a.length ? ' style="' + a.join(";").replace(/;{2,}/g, ";") + '"': "")
                        })
                    } (t) : t
                }
            } (); !
            function() {
                var e = UE.uNode = function(e) {
                    this.type = e.type,
                    this.data = e.data,
                    this.tagName = e.tagName,
                    this.parentNode = e.parentNode,
                    this.attrs = e.attrs || {},
                    this.children = e.children
                },
                t = {
                    href: 1,
                    src: 1,
                    _src: 1,
                    _href: 1,
                    cdata_data: 1
                },
                n = {
                    style: 1,
                    script: 1
                },
                i = "    ",
                o = "\n";
                function r(e, t, n) {
                    return e.push(o),
                    t + (n ? 1 : -1)
                }
                function a(e, t) {
                    for (var n = 0; n < t; n++) e.push(i)
                }
                function s(e, i, o, l) {
                    switch (e.type) {
                    case "root":
                        for (var d, c = 0; d = e.children[c++];) o && "element" == d.type && !dtd.$inlineWithA[d.tagName] && c > 1 && (r(i, l, !0), a(i, l)),
                        s(d, i, o, l);
                        break;
                    case "text":
                        !
                        function(e, t) {
                            "pre" == e.parentNode.tagName ? t.push(e.data) : t.push(n[e.parentNode.tagName] ? utils.html(e.data) : e.data.replace(/[ ]{2}/g, " &nbsp;"))
                        } (e, i);
                        break;
                    case "element":
                        !
                        function(e, n, i, o) {
                            var l = "";
                            if (e.attrs) {
                                l = [];
                                var d = e.attrs;
                                for (var c in d) l.push(c + (void 0 !== d[c] ? '="' + (t[c] ? utils.html(d[c]).replace(/["]/g,
                                function(e) {
                                    return "&quot;"
                                }) : utils.unhtml(d[c])) + '"': ""));
                                l = l.join(" ")
                            }
                            n.push("<" + e.tagName + (l ? " " + l: "") + (dtd.$empty[e.tagName] ? "/": "") + ">"),
                            i && !dtd.$inlineWithA[e.tagName] && "pre" != e.tagName && e.children && e.children.length && (o = r(n, o, !0), a(n, o));
                            if (e.children && e.children.length) for (var u, m = 0; u = e.children[m++];) i && "element" == u.type && !dtd.$inlineWithA[u.tagName] && m > 1 && (r(n, o), a(n, o)),
                            s(u, n, i, o);
                            dtd.$empty[e.tagName] || (i && !dtd.$inlineWithA[e.tagName] && "pre" != e.tagName && e.children && e.children.length && (o = r(n, o), a(n, o)), n.push("</" + e.tagName + ">"))
                        } (e, i, o, l);
                        break;
                    case "comment":
                        !
                        function(e, t) {
                            t.push("\x3c!--" + e.data + "--\x3e")
                        } (e, i)
                    }
                    return i
                }
                function l(e, t) {
                    var n;
                    if ("element" == e.type && e.getAttr("id") == t) return e;
                    if (e.children && e.children.length) for (var i, o = 0; i = e.children[o++];) if (n = l(i, t)) return n
                }
                function d(e, t, n) {
                    if ("element" == e.type && e.tagName == t && n.push(e), e.children && e.children.length) for (var i, o = 0; i = e.children[o++];) d(i, t, n)
                }
                e.createElement = function(t) {
                    return /[<>]/.test(t) ? UE.htmlparser(t).children[0] : new e({
                        type: "element",
                        children: [],
                        tagName: t
                    })
                },
                e.createText = function(e, t) {
                    return new UE.uNode({
                        type: "text",
                        data: t ? e: utils.unhtml(e || "")
                    })
                },
                e.prototype = {
                    toHtml: function(e) {
                        var t = [];
                        return s(this, t, e, 0),
                        t.join("")
                    },
                    innerHTML: function(e) {
                        if ("element" != this.type || dtd.$empty[this.tagName]) return this;
                        if (utils.isString(e)) {
                            if (this.children) for (var t = 0; n = this.children[t++];) n.parentNode = null;
                            this.children = [];
                            var n, i = UE.htmlparser(e);
                            for (t = 0; n = i.children[t++];) this.children.push(n),
                            n.parentNode = this;
                            return this
                        }
                        return (i = new UE.uNode({
                            type: "root",
                            children: this.children
                        })).toHtml()
                    },
                    innerText: function(t, n) {
                        if ("element" != this.type || dtd.$empty[this.tagName]) return this;
                        if (t) {
                            if (this.children) for (var i, o = 0; i = this.children[o++];) i.parentNode = null;
                            return this.children = [],
                            this.appendChild(e.createText(t, n)),
                            this
                        }
                        return this.toHtml().replace(/<[^>]+>/g, "")
                    },
                    getData: function() {
                        return "element" == this.type ? "": this.data
                    },
                    firstChild: function() {
                        return this.children ? this.children[0] : null
                    },
                    lastChild: function() {
                        return this.children ? this.children[this.children.length - 1] : null
                    },
                    previousSibling: function() {
                        for (var e, t = this.parentNode,
                        n = 0; e = t.children[n]; n++) if (e === this) return 0 == n ? null: t.children[n - 1]
                    },
                    nextSibling: function() {
                        for (var e, t = this.parentNode,
                        n = 0; e = t.children[n++];) if (e === this) return t.children[n]
                    },
                    replaceChild: function(e, t) {
                        if (this.children) {
                            e.parentNode && e.parentNode.removeChild(e);
                            for (var n, i = 0; n = this.children[i]; i++) if (n === t) return this.children.splice(i, 1, e),
                            t.parentNode = null,
                            e.parentNode = this,
                            e
                        }
                    },
                    appendChild: function(e) {
                        if ("root" == this.type || "element" == this.type && !dtd.$empty[this.tagName]) {
                            this.children || (this.children = []),
                            e.parentNode && e.parentNode.removeChild(e);
                            for (var t, n = 0; t = this.children[n]; n++) if (t === e) {
                                this.children.splice(n, 1);
                                break
                            }
                            return this.children.push(e),
                            e.parentNode = this,
                            e
                        }
                    },
                    insertBefore: function(e, t) {
                        if (this.children) {
                            e.parentNode && e.parentNode.removeChild(e);
                            for (var n, i = 0; n = this.children[i]; i++) if (n === t) return this.children.splice(i, 0, e),
                            e.parentNode = this,
                            e
                        }
                    },
                    insertAfter: function(e, t) {
                        if (this.children) {
                            e.parentNode && e.parentNode.removeChild(e);
                            for (var n, i = 0; n = this.children[i]; i++) if (n === t) return this.children.splice(i + 1, 0, e),
                            e.parentNode = this,
                            e
                        }
                    },
                    removeChild: function(e, t) {
                        if (this.children) for (var n, i = 0; n = this.children[i]; i++) if (n === e) {
                            if (this.children.splice(i, 1), n.parentNode = null, t && n.children && n.children.length) for (var o, r = 0; o = n.children[r]; r++) this.children.splice(i + r, 0, o),
                            o.parentNode = this;
                            return n
                        }
                    },
                    getAttr: function(e) {
                        return this.attrs && this.attrs[e.toLowerCase()]
                    },
                    setAttr: function(e, t) {
                        if (e) if (this.attrs || (this.attrs = {}), utils.isObject(e)) for (var n in e) e[n] ? this.attrs[n.toLowerCase()] = e[n] : delete this.attrs[n];
                        else t ? this.attrs[e.toLowerCase()] = t: delete this.attrs[e];
                        else delete this.attrs
                    },
                    getIndex: function() {
                        for (var e, t = this.parentNode,
                        n = 0; e = t.children[n]; n++) if (e === this) return n;
                        return - 1
                    },
                    getNodeById: function(e) {
                        var t;
                        if (this.children && this.children.length) for (var n, i = 0; n = this.children[i++];) if (t = l(n, e)) return t
                    },
                    getNodesByTagName: function(e) {
                        e = utils.trim(e).replace(/[ ]{2,}/g, " ").split(" ");
                        var t = [],
                        n = this;
                        return utils.each(e,
                        function(e) {
                            if (n.children && n.children.length) for (var i, o = 0; i = n.children[o++];) d(i, e, t)
                        }),
                        t
                    },
                    getStyle: function(e) {
                        var t = this.getAttr("style");
                        if (!t) return "";
                        var n = new RegExp("(^|;)\\s*" + e + ":([^;]+)", "i"),
                        i = t.match(n);
                        return i && i[0] ? i[2] : ""
                    },
                    setStyle: function(e, t) {
                        function n(e, t) {
                            var n = new RegExp("(^|;)\\s*" + e + ":([^;]+;?)", "gi");
                            i = i.replace(n, "$1"),
                            t && (i = e + ":" + utils.unhtml(t) + ";" + i)
                        }
                        var i = this.getAttr("style");
                        if (i || (i = ""), utils.isObject(e)) for (var o in e) n(o, e[o]);
                        else n(e, t);
                        this.setAttr("style", utils.trim(i))
                    },
                    traversal: function(e) {
                        return this.children && this.children.length &&
                        function e(t, n) {
                            if (t.children && t.children.length) for (var i, o = 0; i = t.children[o];) e(i, n),
                            i.parentNode && (i.children && i.children.length && n(i), i.parentNode && o++);
                            else n(t)
                        } (this, e),
                        this
                    }
                }
            } ();
            var htmlparser = UE.htmlparser = function(e, t) {
                var n = /<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)-->)|(?:([^\s\/<>]+)\s*((?:(?:"[^"]*")|(?:'[^']*')|[^"'<>])*)\/?>))/g,
                i = /([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,
                o = {
                    b: 1,
                    code: 1,
                    i: 1,
                    u: 1,
                    strike: 1,
                    s: 1,
                    tt: 1,
                    strong: 1,
                    q: 1,
                    samp: 1,
                    em: 1,
                    span: 1,
                    sub: 1,
                    img: 1,
                    sup: 1,
                    font: 1,
                    big: 1,
                    small: 1,
                    iframe: 1,
                    a: 1,
                    br: 1,
                    pre: 1
                };
                e = e.replace(new RegExp(domUtils.fillChar, "g"), ""),
                t || (e = e.replace(new RegExp("[\\r\\t\\n" + (t ? "": " ") + "]*</?(\\w+)\\s*(?:[^>]*)>[\\r\\t\\n" + (t ? "": " ") + "]*", "g"),
                function(e, n) {
                    return n && o[n.toLowerCase()] ? e.replace(/(^[\n\r]+)|([\n\r]+$)/g, "") : e.replace(new RegExp("^[\\r\\n" + (t ? "": " ") + "]+"), "").replace(new RegExp("[\\r\\n" + (t ? "": " ") + "]+$"), "")
                }));
                var r = {
                    href: 1,
                    src: 1
                },
                a = UE.uNode,
                s = {
                    td: "tr",
                    tr: ["tbody", "thead", "tfoot"],
                    tbody: "table",
                    th: "tr",
                    thead: "table",
                    tfoot: "table",
                    caption: "table",
                    li: ["ul", "ol"],
                    dt: "dl",
                    dd: "dl",
                    option: "select"
                },
                l = {
                    ol: "li",
                    ul: "li"
                };
                function d(e, t) {
                    if (l[e.tagName]) {
                        var n = a.createElement(l[e.tagName]);
                        e.appendChild(n),
                        n.appendChild(a.createText(t)),
                        e = n
                    } else e.appendChild(a.createText(t))
                }
                function c(e, t, n) {
                    var o;
                    if (o = s[t]) {
                        for (var l, d = e;
                        "root" != d.type;) {
                            if (utils.isArray(o) ? -1 != utils.indexOf(o, d.tagName) : o == d.tagName) {
                                e = d,
                                l = !0;
                                break
                            }
                            d = d.parentNode
                        }
                        l || (e = c(e, utils.isArray(o) ? o[0] : o))
                    }
                    var u = new a({
                        parentNode: e,
                        type: "element",
                        tagName: t.toLowerCase(),
                        children: dtd.$empty[t] ? null: []
                    });
                    if (n) {
                        for (var m, f = {}; m = i.exec(n);) f[m[1].toLowerCase()] = r[m[1].toLowerCase()] ? m[2] || m[3] || m[4] : utils.unhtml(m[2] || m[3] || m[4]);
                        u.attrs = f
                    }
                    return e.children.push(u),
                    dtd.$empty[t] ? e: u
                }
                for (var u, m, f, p = 0,
                h = 0,
                g = new a({
                    type: "root",
                    children: []
                }), v = g; u = n.exec(e);) {
                    p = u.index;
                    try {
                        if (p > h && d(v, e.slice(h, p)), u[3]) dtd.$cdata[v.tagName] ? d(v, u[0]) : v = c(v, u[3].toLowerCase(), u[4]);
                        else if (u[1]) {
                            if ("root" != v.type) if (dtd.$cdata[v.tagName] && !dtd.$cdata[u[1]]) d(v, u[0]);
                            else {
                                for (var b = v;
                                "element" == v.type && v.tagName != u[1].toLowerCase();) if ("root" == (v = v.parentNode).type) throw v = b,
                                "break";
                                v = v.parentNode
                            }
                        } else u[2] && (m = v, f = u[2], m.children.push(new a({
                            type: "comment",
                            data: f,
                            parentNode: m
                        })))
                    } catch(e) {}
                    h = n.lastIndex
                }
                return h < e.length && d(v, e.slice(h)),
                g
            },
            filterNode = UE.filterNode = function() {
                function e(t, n) {
                    switch (t.type) {
                    case "text":
                        break;
                    case "element":
                        var i;
                        if (i = n[t.tagName]) if ("-" === i) t.parentNode.removeChild(t);
                        else if (utils.isFunction(i)) {
                            var o = t.parentNode,
                            r = t.getIndex();
                            if (i(t), t.parentNode) {
                                if (t.children) for (var a = 0; m = t.children[a];) e(m, n),
                                m.parentNode && a++
                            } else for (a = r; m = o.children[a];) e(m, n),
                            m.parentNode && a++
                        } else {
                            var s = i.$;
                            if (s && t.attrs) {
                                var l, d = {};
                                for (var c in s) {
                                    if (l = t.getAttr(c), "style" == c && utils.isArray(s[c])) {
                                        var u = [];
                                        utils.each(s[c],
                                        function(e) {
                                            var n; (n = t.getStyle(e)) && u.push(e + ":" + n)
                                        }),
                                        l = u.join(";")
                                    }
                                    l && (d[c] = l)
                                }
                                t.attrs = d
                            }
                            if (t.children) for (a = 0; m = t.children[a];) e(m, n),
                            m.parentNode && a++
                        } else if (dtd.$cdata[t.tagName]) t.parentNode.removeChild(t);
                        else {
                            o = t.parentNode,
                            r = t.getIndex();
                            t.parentNode.removeChild(t, !0);
                            var m;
                            for (a = r; m = o.children[a];) e(m, n),
                            m.parentNode && a++
                        }
                        break;
                    case "comment":
                        t.parentNode.removeChild(t)
                    }
                }
                return function(t, n) {
                    if (utils.isEmptyObject(n)) return t;
                    var i; (i = n["-"]) && utils.each(i.split(" "),
                    function(e) {
                        n[e] = "-"
                    });
                    for (var o, r = 0; o = t.children[r];) e(o, n),
                    o.parentNode && r++;
                    return t
                }
            } (),
            _plugins;
            UE.plugin = (_plugins = {},
            {
                register: function(e, t, n, i) {
                    n && utils.isFunction(n) && (i = n, n = null),
                    _plugins[e] = {
                        optionName: n || e,
                        execFn: t,
                        afterDisabled: i
                    }
                },
                load: function(e) {
                    utils.each(_plugins,
                    function(t) {
                        var n = t.execFn.call(e); ! 1 !== e.options[t.optionName] ? n && utils.each(n,
                        function(t, n) {
                            switch (n.toLowerCase()) {
                            case "shortcutkey":
                                e.addshortcutkey(t);
                                break;
                            case "bindevents":
                                utils.each(t,
                                function(t, n) {
                                    e.addListener(n, t)
                                });
                                break;
                            case "bindmultievents":
                                utils.each(utils.isArray(t) ? t: [t],
                                function(t) {
                                    var n = utils.trim(t.type).split(/\s+/);
                                    utils.each(n,
                                    function(n) {
                                        e.addListener(n, t.handler)
                                    })
                                });
                                break;
                            case "commands":
                                utils.each(t,
                                function(t, n) {
                                    e.commands[n] = t
                                });
                                break;
                            case "outputrule":
                                e.addOutputRule(t);
                                break;
                            case "inputrule":
                                e.addInputRule(t);
                                break;
                            case "defaultoptions":
                                e.setOpt(t)
                            }
                        }):
                        t.afterDisabled && t.afterDisabled.call(e)
                    }),
                    utils.each(UE.plugins,
                    function(t) {
                        t.call(e)
                    })
                },
                run: function(e, t) {
                    var n = _plugins[e];
                    n && n.exeFn.call(t)
                }
            });
            var keymap = UE.keymap = {
                Backspace: 8,
                Tab: 9,
                Enter: 13,
                Shift: 16,
                Control: 17,
                Alt: 18,
                CapsLock: 20,
                Esc: 27,
                Spacebar: 32,
                PageUp: 33,
                PageDown: 34,
                End: 35,
                Home: 36,
                Left: 37,
                Up: 38,
                Right: 39,
                Down: 40,
                Insert: 45,
                Del: 46,
                NumLock: 144,
                Cmd: 91,
                "=": 187,
                "-": 189,
                b: 66,
                i: 73,
                z: 90,
                y: 89,
                v: 86,
                x: 88,
                s: 83,
                n: 78
            },
            LocalStorage = UE.LocalStorage = function() {
                var e = window.localStorage ||
                function() {
                    var e = document.createElement("div");
                    if (e.style.display = "none", !e.addBehavior) return null;
                    return e.addBehavior("#default#userdata"),
                    {
                        getItem: function(n) {
                            var i = null;
                            try {
                                document.body.appendChild(e),
                                e.load(t),
                                i = e.getAttribute(n),
                                document.body.removeChild(e)
                            } catch(e) {}
                            return i
                        },
                        setItem: function(n, i) {
                            document.body.appendChild(e),
                            e.setAttribute(n, i),
                            e.save(t),
                            document.body.removeChild(e)
                        },
                        removeItem: function(n) {
                            document.body.appendChild(e),
                            e.removeAttribute(n),
                            e.save(t),
                            document.body.removeChild(e)
                        }
                    }
                } () || null,
                t = "localStorage";
                return {
                    saveLocalData: function(t, n) {
                        return ! (!e || !n) && (e.setItem(t, n), !0)
                    },
                    getLocalData: function(t) {
                        return e ? e.getItem(t) : null
                    },
                    removeItem: function(t) {
                        e && e.removeItem(t)
                    }
                }
            } (),
            ROOTKEY,
            block,
            getObj,
            sourceEditors;
            ROOTKEY = "ueditor_preference",
            UE.Editor.prototype.setPreferences = function(e, t) {
                var n = {};
                utils.isString(e) ? n[e] = t: n = e;
                var i = LocalStorage.getLocalData(ROOTKEY);
                i && (i = utils.str2json(i)) ? utils.extend(i, n) : i = n,
                i && LocalStorage.saveLocalData(ROOTKEY, utils.json2str(i))
            },
            UE.Editor.prototype.getPreferences = function(e) {
                var t = LocalStorage.getLocalData(ROOTKEY);
                return t && (t = utils.str2json(t)) ? e ? t[e] : t: null
            },
            UE.Editor.prototype.removePreferences = function(e) {
                var t = LocalStorage.getLocalData(ROOTKEY);
                t && (t = utils.str2json(t)) && (t[e] = void 0, delete t[e]),
                t && LocalStorage.saveLocalData(ROOTKEY, utils.json2str(t))
            },
            UE.plugins.defaultfilter = function() {
                var e = this;
                e.setOpt({
                    allowDivTransToP: !0,
                    disabledTableInTable: !0
                }),
                e.addInputRule(function(t) {
                    var n, i = this.options.allowDivTransToP;
                    t.traversal(function(t) {
                        if ("element" == t.type) {
                            if (!dtd.$cdata[t.tagName] && e.options.autoClearEmptyNode && dtd.$inline[t.tagName] && !dtd.$empty[t.tagName] && (!t.attrs || utils.isEmptyObject(t.attrs))) return void(t.firstChild() ? "span" != t.tagName || t.attrs && !utils.isEmptyObject(t.attrs) || t.parentNode.removeChild(t, !0) : t.parentNode.removeChild(t));
                            switch (t.tagName) {
                            case "style":
                            case "script":
                                t.setAttr({
                                    cdata_tag:
                                    t.tagName,
                                    cdata_data: t.innerHTML() || "",
                                    _ue_custom_node_: "true"
                                }),
                                t.tagName = "div",
                                t.innerHTML("");
                                break;
                            case "a":
                                (n = t.getAttr("href")) && t.setAttr("_href", n);
                                break;
                            case "img":
                                if ((n = t.getAttr("src")) && /^data:/.test(n)) {
                                    t.parentNode.removeChild(t);
                                    break
                                }
                                t.setAttr("_src", t.getAttr("src"));
                                break;
                            case "span":
                                browser.webkit && (n = t.getStyle("white-space")) && /nowrap|normal/.test(n) && (t.setStyle("white-space", ""), e.options.autoClearEmptyNode && utils.isEmptyObject(t.attrs) && t.parentNode.removeChild(t, !0)),
                                (n = t.getAttr("id")) && /^_baidu_bookmark_/i.test(n) && t.parentNode.removeChild(t);
                                break;
                            case "p":
                                (n = t.getAttr("align")) && (t.setAttr("align"), t.setStyle("text-align", n)),
                                utils.each(t.children,
                                function(e) {
                                    if ("element" == e.type && "p" == e.tagName) {
                                        var n = e.nextSibling();
                                        t.parentNode.insertAfter(e, t);
                                        for (var i = e; n;) {
                                            var o = n.nextSibling();
                                            t.parentNode.insertAfter(n, i),
                                            i = n,
                                            n = o
                                        }
                                        return ! 1
                                    }
                                }),
                                t.firstChild() || t.innerHTML(browser.ie ? "&nbsp;": "<br/>");
                                break;
                            case "div":
                                if (t.getAttr("cdata_tag")) break;
                                if ((n = t.getAttr("class")) && /^line number\d+/.test(n)) break;
                                if (!i) break;
                                for (var o, r = UE.uNode.createElement("p"); o = t.firstChild();)"text" != o.type && UE.dom.dtd.$block[o.tagName] ? r.firstChild() ? (t.parentNode.insertBefore(r, t), r = UE.uNode.createElement("p")) : t.parentNode.insertBefore(o, t) : r.appendChild(o);
                                r.firstChild() && t.parentNode.insertBefore(r, t),
                                t.parentNode.removeChild(t);
                                break;
                            case "dl":
                                t.tagName = "ul";
                                break;
                            case "dt":
                            case "dd":
                                t.tagName = "li";
                                break;
                            case "li":
                                var a = t.getAttr("class");
                                a && /list\-/.test(a) || t.setAttr();
                                var s = t.getNodesByTagName("ol ul");
                                UE.utils.each(s,
                                function(e) {
                                    t.parentNode.insertAfter(e, t)
                                });
                                break;
                            case "td":
                            case "th":
                            case "caption":
                                t.children && t.children.length || t.appendChild(browser.ie11below ? UE.uNode.createText(" ") : UE.uNode.createElement("br"));
                                break;
                            case "table":
                                e.options.disabledTableInTable &&
                                function(e) {
                                    for (; e && "element" == e.type;) {
                                        if ("td" == e.tagName) return ! 0;
                                        e = e.parentNode
                                    }
                                    return ! 1
                                } (t) && (t.parentNode.insertBefore(UE.uNode.createText(t.innerText()), t), t.parentNode.removeChild(t))
                            }
                        }
                    })
                }),
                e.addOutputRule(function(t) {
                    var n;
                    t.traversal(function(t) {
                        if ("element" == t.type) {
                            if (e.options.autoClearEmptyNode && dtd.$inline[t.tagName] && !dtd.$empty[t.tagName] && (!t.attrs || utils.isEmptyObject(t.attrs))) return void(t.firstChild() ? "span" != t.tagName || t.attrs && !utils.isEmptyObject(t.attrs) || t.parentNode.removeChild(t, !0) : t.parentNode.removeChild(t));
                            switch (t.tagName) {
                            case "div":
                                (n = t.getAttr("cdata_tag")) && (t.tagName = n, t.appendChild(UE.uNode.createText(t.getAttr("cdata_data"))), t.setAttr({
                                    cdata_tag: "",
                                    cdata_data: "",
                                    _ue_custom_node_: ""
                                }));
                                break;
                            case "a":
                                (n = t.getAttr("_href")) && t.setAttr({
                                    href: utils.html(n),
                                    _href: ""
                                });
                                break;
                            case "span":
                                (n = t.getAttr("id")) && /^_baidu_bookmark_/i.test(n) && t.parentNode.removeChild(t);
                                break;
                            case "img":
                                (n = t.getAttr("_src")) && t.setAttr({
                                    src: t.getAttr("_src"),
                                    _src: ""
                                })
                            }
                        }
                    })
                })
            },
            UE.commands.inserthtml = {
                execCommand: function(e, t, n) {
                    var i, o, r = this;
                    if (t && !0 !== r.fireEvent("beforeinserthtml", t)) {
                        if ((o = (i = r.selection.getRange()).document.createElement("div")).style.display = "inline", !n) {
                            var a = UE.htmlparser(t);
                            r.options.filterRules && UE.filterNode(a, r.options.filterRules),
                            r.filterInputRule(a),
                            t = a.toHtml()
                        }
                        if (o.innerHTML = utils.trim(t), !i.collapsed) {
                            var s = i.startContainer;
                            if (domUtils.isFillChar(s) && i.setStartBefore(s), s = i.endContainer, domUtils.isFillChar(s) && i.setEndAfter(s), i.txtToElmBoundary(), i.endContainer && 1 == i.endContainer.nodeType && (s = i.endContainer.childNodes[i.endOffset]) && domUtils.isBr(s) && i.setEndAfter(s), 0 == i.startOffset && (s = i.startContainer, domUtils.isBoundaryNode(s, "firstChild") && (s = i.endContainer, i.endOffset == (3 == s.nodeType ? s.nodeValue.length: s.childNodes.length) && domUtils.isBoundaryNode(s, "lastChild") && (r.body.innerHTML = "<p>" + (browser.ie ? "": "<br/>") + "</p>", i.setStart(r.body.firstChild, 0).collapse(!0)))), !i.collapsed && i.deleteContents(), 1 == i.startContainer.nodeType) if ((l = i.startContainer.childNodes[i.startOffset]) && domUtils.isBlockElm(l) && (v = l.previousSibling) && domUtils.isBlockElm(v)) {
                                for (i.setEnd(v, v.childNodes.length).collapse(); l.firstChild;) v.appendChild(l.firstChild);
                                domUtils.remove(l)
                            }
                        }
                        var l, d, c, u, m = 0;
                        i.inFillChar() && (l = i.startContainer, domUtils.isFillChar(l) ? (i.setStartBefore(l).collapse(!0), domUtils.remove(l)) : domUtils.isFillChar(l, !0) && (l.nodeValue = l.nodeValue.replace(fillCharReg, ""), i.startOffset--, i.collapsed && i.collapse(!0)));
                        var f = domUtils.findParentByTagName(i.startContainer, "li", !0);
                        if (f) {
                            for (var p; l = o.firstChild;) {
                                for (; l && (3 == l.nodeType || !domUtils.isBlockElm(l) || "HR" == l.tagName);) b = l.nextSibling,
                                i.insertNode(l).collapse(),
                                p = l,
                                l = b;
                                if (l) if (/^(ol|ul)$/i.test(l.tagName)) {
                                    for (; l.firstChild;) p = l.firstChild,
                                    domUtils.insertAfter(f, l.firstChild),
                                    f = f.nextSibling;
                                    domUtils.remove(l)
                                } else {
                                    var h;
                                    b = l.nextSibling,
                                    h = r.document.createElement("li"),
                                    domUtils.insertAfter(f, h),
                                    h.appendChild(l),
                                    p = l,
                                    l = b,
                                    f = h
                                }
                            }
                            f = domUtils.findParentByTagName(i.startContainer, "li", !0),
                            domUtils.isEmptyBlock(f) && domUtils.remove(f),
                            p && i.setStartAfter(p).collapse(!0).select(!0)
                        } else {
                            for (; l = o.firstChild;) {
                                if (m) {
                                    for (var g = r.document.createElement("p"); l && (3 == l.nodeType || !dtd.$block[l.tagName]);) u = l.nextSibling,
                                    g.appendChild(l),
                                    l = u;
                                    g.firstChild && (l = g)
                                }
                                if (i.insertNode(l), u = l.nextSibling, !m && l.nodeType == domUtils.NODE_ELEMENT && domUtils.isBlockElm(l) && (d = domUtils.findParent(l,
                                function(e) {
                                    return domUtils.isBlockElm(e)
                                })) && "body" != d.tagName.toLowerCase() && (!dtd[d.tagName][l.nodeName] || l.parentNode !== d)) {
                                    if (dtd[d.tagName][l.nodeName]) for (c = l.parentNode; c !== d;) v = c,
                                    c = c.parentNode;
                                    else v = d;
                                    domUtils.breakParent(l, v || c);
                                    var v = l.previousSibling;
                                    domUtils.trimWhiteTextNode(v),
                                    v.childNodes.length || domUtils.remove(v),
                                    !browser.ie && (b = l.nextSibling) && domUtils.isBlockElm(b) && b.lastChild && !domUtils.isBr(b.lastChild) && b.appendChild(r.document.createElement("br")),
                                    m = 1
                                }
                                var b = l.nextSibling;
                                if (!o.firstChild && b && domUtils.isBlockElm(b)) {
                                    i.setStart(b, 0).collapse(!0);
                                    break
                                }
                                i.setEndAfter(l).collapse()
                            }
                            if (l = i.startContainer, u && domUtils.isBr(u) && domUtils.remove(u), domUtils.isBlockElm(l) && domUtils.isEmptyNode(l)) if (u = l.nextSibling) domUtils.remove(l),
                            1 == u.nodeType && dtd.$block[u.tagName] && i.setStart(u, 0).collapse(!0).shrinkBoundary();
                            else try {
                                l.innerHTML = browser.ie ? domUtils.fillChar: "<br/>"
                            } catch(e) {
                                i.setStartBefore(l),
                                domUtils.remove(l)
                            }
                            try {
                                i.select(!0)
                            } catch(e) {}
                        }
                        setTimeout(function() { (i = r.selection.getRange()).scrollToView(r.autoHeightEnabled, r.autoHeightEnabled ? domUtils.getXY(r.iframe).y: 0),
                            r.fireEvent("afterinserthtml", t)
                        },
                        200)
                    }
                }
            },
            UE.plugins.autotypeset = function() {
                this.setOpt({
                    autotypeset: {
                        mergeEmptyline: !0,
                        removeClass: !0,
                        removeEmptyline: !1,
                        textAlign: "left",
                        imageBlockLine: "center",
                        pasteFilter: !1,
                        clearFontSize: !1,
                        clearFontFamily: !1,
                        removeEmptyNode: !1,
                        removeTagNames: utils.extend({
                            div: 1
                        },
                        dtd.$removeEmpty),
                        indent: !1,
                        indentValue: "2em",
                        bdc2sb: !1,
                        tobdc: !1
                    }
                });
                var e, t, n = this,
                i = n.options.autotypeset,
                o = {
                    selectTdClass: 1,
                    pagebreak: 1,
                    anchorclass: 1
                },
                r = {
                    li: 1
                },
                a = {
                    div: 1,
                    p: 1,
                    blockquote: 1,
                    center: 1,
                    h1: 1,
                    h2: 1,
                    h3: 1,
                    h4: 1,
                    h5: 1,
                    h6: 1,
                    span: 1
                };
                i && (t = n.getPreferences("autotypeset"), utils.extend(n.options.autotypeset, t), i.pasteFilter && n.addListener("beforepaste", d), n.commands.autotypeset = {
                    execCommand: function() {
                        n.removeListener("beforepaste", d),
                        i.pasteFilter && n.addListener("beforepaste", d),
                        d.call(n)
                    }
                });
                function s(t, n) {
                    return t && 3 != t.nodeType ? domUtils.isBr(t) ? 1 : t && t.parentNode && a[t.tagName.toLowerCase()] ? e && e.contains(t) || t.getAttribute("pagebreak") ? 0 : n ? !domUtils.isEmptyBlock(t) : domUtils.isEmptyBlock(t, new RegExp("[\\s" + domUtils.fillChar + "]", "g")) : void 0 : 0
                }
                function l(e) {
                    e.style.cssText || (domUtils.removeAttributes(e, ["style"]), "span" == e.tagName.toLowerCase() && domUtils.hasNoAttributes(e) && domUtils.remove(e, !0))
                }
                function d(t, n) {
                    var a, d = this;
                    if (n) {
                        if (!i.pasteFilter) return; (a = d.document.createElement("div")).innerHTML = n.html
                    } else a = d.document.body;
                    for (var c, u, m = domUtils.getElementsByTagName(a, "*"), f = 0; c = m[f++];) if (!0 !== d.fireEvent("excludeNodeinautotype", c)) {
                        if (i.clearFontSize && c.style.fontSize && (domUtils.removeStyle(c, "font-size"), l(c)), i.clearFontFamily && c.style.fontFamily && (domUtils.removeStyle(c, "font-family"), l(c)), s(c)) {
                            if (i.mergeEmptyline) for (var p = c.nextSibling,
                            h = domUtils.isBr(c); s(p) && (p = (v = p).nextSibling, !h || p && (!p || domUtils.isBr(p)));) domUtils.remove(v);
                            if (i.removeEmptyline && domUtils.inDoc(c, a) && !r[c.parentNode.tagName.toLowerCase()]) {
                                if (domUtils.isBr(c) && (p = c.nextSibling) && !domUtils.isBr(p)) continue;
                                domUtils.remove(c);
                                continue
                            }
                        }
                        if (s(c, !0) && "SPAN" != c.tagName && (i.indent && (c.style.textIndent = i.indentValue), i.textAlign && (c.style.textAlign = i.textAlign)), i.removeClass && c.className && !o[c.className.toLowerCase()]) {
                            if (e && e.contains(c)) continue;
                            domUtils.removeAttributes(c, ["class"])
                        }
                        if (i.imageBlockLine && "img" == c.tagName.toLowerCase() && !c.getAttribute("emotion")) if (n) {
                            var g = c;
                            switch (i.imageBlockLine) {
                            case "left":
                            case "right":
                            case "none":
                                for (var v, b, y = g.parentNode; dtd.$inline[y.tagName] || "A" == y.tagName;) y = y.parentNode;
                                if ("P" == (v = y).tagName && "center" == domUtils.getStyle(v, "text-align") && !domUtils.isBody(v) && 1 == domUtils.getChildCount(v,
                                function(e) {
                                    return ! domUtils.isBr(e) && !domUtils.isWhitespace(e)
                                })) if (b = v.previousSibling, p = v.nextSibling, b && p && 1 == b.nodeType && 1 == p.nodeType && b.tagName == p.tagName && domUtils.isBlockElm(b)) {
                                    for (b.appendChild(v.firstChild); p.firstChild;) b.appendChild(p.firstChild);
                                    domUtils.remove(v),
                                    domUtils.remove(p)
                                } else domUtils.setStyle(v, "text-align", "");
                                domUtils.setStyle(g, "float", i.imageBlockLine);
                                break;
                            case "center":
                                if ("center" != d.queryCommandValue("imagefloat")) {
                                    for (y = g.parentNode, domUtils.setStyle(g, "float", "none"), v = g; y && 1 == domUtils.getChildCount(y,
                                    function(e) {
                                        return ! domUtils.isBr(e) && !domUtils.isWhitespace(e)
                                    }) && (dtd.$inline[y.tagName] || "A" == y.tagName);) v = y,
                                    y = y.parentNode;
                                    var C = d.document.createElement("p");
                                    domUtils.setAttributes(C, {
                                        style: "text-align:center"
                                    }),
                                    v.parentNode.insertBefore(C, v),
                                    C.appendChild(v),
                                    domUtils.setStyle(v, "float", "")
                                }
                            }
                        } else {
                            d.selection.getRange().selectNode(c).select(),
                            d.execCommand("imagefloat", i.imageBlockLine)
                        }
                        i.removeEmptyNode && i.removeTagNames[c.tagName.toLowerCase()] && domUtils.hasNoAttributes(c) && domUtils.isEmptyBlock(c) && domUtils.remove(c)
                    }
                    i.tobdc && ((u = UE.htmlparser(a.innerHTML)).traversal(function(e) {
                        "text" == e.type && (e.data = function(e) {
                            e = utils.html(e);
                            for (var t = "",
                            n = 0; n < e.length; n++) 32 == e.charCodeAt(n) ? t += String.fromCharCode(12288) : e.charCodeAt(n) < 127 ? t += String.fromCharCode(e.charCodeAt(n) + 65248) : t += e.charAt(n);
                            return t
                        } (e.data))
                    }), a.innerHTML = u.toHtml());
                    i.bdc2sb && ((u = UE.htmlparser(a.innerHTML)).traversal(function(e) {
                        "text" == e.type && (e.data = function(e) {
                            for (var t = "",
                            n = 0; n < e.length; n++) {
                                var i = e.charCodeAt(n);
                                t += i >= 65281 && i <= 65373 ? String.fromCharCode(e.charCodeAt(n) - 65248) : 12288 == i ? String.fromCharCode(e.charCodeAt(n) - 12288 + 32) : e.charAt(n)
                            }
                            return t
                        } (e.data))
                    }), a.innerHTML = u.toHtml());
                    n && (n.html = a.innerHTML)
                }
            },
            UE.plugin.register("autosubmit",
            function() {
                return {
                    shortcutkey: {
                        autosubmit: "ctrl+13"
                    },
                    commands: {
                        autosubmit: {
                            execCommand: function() {
                                var e = domUtils.findParentByTagName(this.iframe, "form", !1);
                                if (e) {
                                    if (!1 === this.fireEvent("beforesubmit")) return;
                                    this.sync(),
                                    e.submit()
                                }
                            }
                        }
                    }
                }
            }),
            UE.plugin.register("background",
            function() {
                var e, t = this,
                n = "editor_background",
                i = new RegExp("body[\\s]*\\{(.+)\\}", "i");
                function o(e) {
                    var t = {},
                    n = e.split(";");
                    return utils.each(n,
                    function(e) {
                        var n = e.indexOf(":"),
                        i = utils.trim(e.substr(0, n)).toLowerCase();
                        i && (t[i] = utils.trim(e.substr(n + 1) || ""))
                    }),
                    t
                }
                function r(e) {
                    if (e) {
                        var i = [];
                        for (var o in e) e.hasOwnProperty(o) && i.push(o + ":" + e[o] + "; ");
                        utils.cssRule(n, i.length ? "body{" + i.join("") + "}": "", t.document)
                    } else utils.cssRule(n, "", t.document)
                }
                var a = t.hasContents;
                return t.hasContents = function() {
                    return !! t.queryCommandValue("background") || a.apply(t, arguments)
                },
                {
                    bindEvents: {
                        getAllHtml: function(e, n) {
                            var i = this.body,
                            o = domUtils.getComputedStyle(i, "background-image"),
                            r = "";
                            r = o.indexOf(t.options.imagePath) > 0 ? o.substring(o.indexOf(t.options.imagePath), o.length - 1).replace(/"|\(|\)/gi, "") : "none" != o ? o.replace(/url\("?|"?\)/gi, "") : "";
                            var a = '<style type="text/css">body{',
                            s = {
                                "background-color": domUtils.getComputedStyle(i, "background-color") || "#ffffff",
                                "background-image": r ? "url(" + r + ")": "",
                                "background-repeat": domUtils.getComputedStyle(i, "background-repeat") || "",
                                "background-position": browser.ie ? domUtils.getComputedStyle(i, "background-position-x") + " " + domUtils.getComputedStyle(i, "background-position-y") : domUtils.getComputedStyle(i, "background-position"),
                                height: domUtils.getComputedStyle(i, "height")
                            };
                            for (var l in s) s.hasOwnProperty(l) && (a += l + ":" + s[l] + "; ");
                            a += "}</style> ",
                            n.push(a)
                        },
                        aftersetcontent: function() {
                            0 == e && r()
                        }
                    },
                    inputRule: function(t) {
                        e = !1,
                        utils.each(t.getNodesByTagName("p"),
                        function(t) {
                            var n = t.getAttr("data-background");
                            n && (e = !0, r(o(n)), t.parentNode.removeChild(t))
                        })
                    },
                    outputRule: function(e) {
                        var t = (utils.cssRule(n, this.document) || "").replace(/[\n\r]+/g, "").match(i);
                        t && e.appendChild(UE.uNode.createElement('<p style="display:none;" data-background="' + utils.trim(t[1].replace(/"/g, "").replace(/[\s]+/g, " ")) + '"><br/></p>'))
                    },
                    commands: {
                        background: {
                            execCommand: function(e, t) {
                                r(t)
                            },
                            queryCommandValue: function() {
                                var e = (utils.cssRule(n, this.document) || "").replace(/[\n\r]+/g, "").match(i);
                                return e ? o(e[1]) : null
                            },
                            notNeedUndo: !0
                        }
                    }
                }
            }),
            UE.commands.imagefloat = {
                execCommand: function(e, t) {
                    var n = this,
                    i = n.selection.getRange();
                    if (!i.collapsed) {
                        var o = i.getClosedNode();
                        if (o && "IMG" == o.tagName) switch (t) {
                        case "left":
                        case "right":
                        case "none":
                            for (var r, a, s, l = o.parentNode; dtd.$inline[l.tagName] || "A" == l.tagName;) l = l.parentNode;
                            if ("P" == (r = l).tagName && "center" == domUtils.getStyle(r, "text-align")) {
                                if (!domUtils.isBody(r) && 1 == domUtils.getChildCount(r,
                                function(e) {
                                    return ! domUtils.isBr(e) && !domUtils.isWhitespace(e)
                                })) if (a = r.previousSibling, s = r.nextSibling, a && s && 1 == a.nodeType && 1 == s.nodeType && a.tagName == s.tagName && domUtils.isBlockElm(a)) {
                                    for (a.appendChild(r.firstChild); s.firstChild;) a.appendChild(s.firstChild);
                                    domUtils.remove(r),
                                    domUtils.remove(s)
                                } else domUtils.setStyle(r, "text-align", "");
                                i.selectNode(o).select()
                            }
                            domUtils.setStyle(o, "float", "none" == t ? "": t),
                            "none" == t && domUtils.removeAttributes(o, "align");
                            break;
                        case "center":
                            if ("center" != n.queryCommandValue("imagefloat")) {
                                for (l = o.parentNode, domUtils.setStyle(o, "float", ""), domUtils.removeAttributes(o, "align"), r = o; l && 1 == domUtils.getChildCount(l,
                                function(e) {
                                    return ! domUtils.isBr(e) && !domUtils.isWhitespace(e)
                                }) && (dtd.$inline[l.tagName] || "A" == l.tagName);) r = l,
                                l = l.parentNode;
                                i.setStartBefore(r).setCursor(!1),
                                (l = n.document.createElement("div")).appendChild(r),
                                domUtils.setStyle(r, "float", ""),
                                n.execCommand("insertHtml", '<p id="_img_parent_tmp" style="text-align:center">' + l.innerHTML + "</p>"),
                                (r = n.document.getElementById("_img_parent_tmp")).removeAttribute("id"),
                                r = r.firstChild,
                                i.selectNode(r).select(),
                                (s = r.parentNode.nextSibling) && domUtils.isEmptyNode(s) && domUtils.remove(s)
                            }
                        }
                    }
                },
                queryCommandValue: function() {
                    var e, t, n = this.selection.getRange();
                    return n.collapsed ? "none": (e = n.getClosedNode()) && 1 == e.nodeType && "IMG" == e.tagName ? ("none" == (t = domUtils.getComputedStyle(e, "float") || e.getAttribute("align")) && (t = "center" == domUtils.getComputedStyle(e.parentNode, "text-align") ? "center": t), {
                        left: 1,
                        right: 1,
                        center: 1
                    } [t] ? t: "none") : "none"
                },
                queryCommandState: function() {
                    var e, t = this.selection.getRange();
                    return t.collapsed ? -1 : (e = t.getClosedNode()) && 1 == e.nodeType && "IMG" == e.tagName ? 0 : -1
                }
            },
            UE.commands.insertimage = {
                execCommand: function(e, t) {
                    if ((t = utils.isArray(t) ? t: [t]).length) {
                        var n = this,
                        i = n.selection.getRange(),
                        o = i.getClosedNode();
                        if (!0 !== n.fireEvent("beforeinsertimage", t)) {
                            if (!o || !/img/i.test(o.tagName) || "edui-faked-video" == o.className && -1 == o.className.indexOf("edui-upload-video") || o.getAttribute("word_img")) {
                                var r, a = [],
                                s = "";
                                if (r = t[0], 1 == t.length) u(r),
                                s = '<img src="' + r.src + '" ' + (r._src ? ' _src="' + r._src + '" ': "") + (r.width ? 'width="' + r.width + '" ': "") + (r.height ? ' height="' + r.height + '" ': "") + ("left" == r.floatStyle || "right" == r.floatStyle ? ' style="float:' + r.floatStyle + ';"': "") + (r.title && "" != r.title ? ' title="' + r.title + '"': "") + (r.border && "0" != r.border ? ' border="' + r.border + '"': "") + (r.alt && "" != r.alt ? ' alt="' + r.alt + '"': "") + (r.hspace && "0" != r.hspace ? ' hspace = "' + r.hspace + '"': "") + (r.vspace && "0" != r.vspace ? ' vspace = "' + r.vspace + '"': "") + "/>",
                                "center" == r.floatStyle && (s = '<p style="text-align: center">' + s + "</p>"),
                                a.push(s);
                                else for (var l = 0; r = t[l++];) u(r),
                                s = "<p " + ("center" == r.floatStyle ? 'style="text-align: center" ': "") + '><img src="' + r.src + '" ' + (r.width ? 'width="' + r.width + '" ': "") + (r._src ? ' _src="' + r._src + '" ': "") + (r.height ? ' height="' + r.height + '" ': "") + ' style="' + (r.floatStyle && "center" != r.floatStyle ? "float:" + r.floatStyle + ";": "") + (r.border || "") + '" ' + (r.title ? ' title="' + r.title + '"': "") + " /></p>",
                                a.push(s);
                                n.execCommand("insertHtml", a.join(""))
                            } else {
                                var d = t.shift(),
                                c = d.floatStyle;
                                delete d.floatStyle,
                                domUtils.setAttributes(o, d),
                                n.execCommand("imagefloat", c),
                                t.length > 0 && (i.setStartAfter(o).setCursor(!1, !0), n.execCommand("insertimage", t))
                            }
                            n.fireEvent("afterinsertimage", t)
                        }
                    }
                    function u(e) {
                        utils.each("width,height,border,hspace,vspace".split(","),
                        function(t) {
                            e[t] && (e[t] = parseInt(e[t], 10) || 0)
                        }),
                        utils.each("src,_src".split(","),
                        function(t) {
                            e[t] && (e[t] = utils.unhtmlForUrl(e[t]))
                        }),
                        utils.each("title,alt".split(","),
                        function(t) {
                            e[t] && (e[t] = utils.unhtml(e[t]))
                        })
                    }
                }
            },
            UE.plugins.justify = function() {
                var e = domUtils.isBlockElm,
                t = {
                    left: 1,
                    right: 1,
                    center: 1,
                    justify: 1
                };
                UE.commands.justify = {
                    execCommand: function(t, n) {
                        var i, o = this.selection.getRange();
                        return o.collapsed && (i = this.document.createTextNode("p"), o.insertNode(i)),
                        function(t, n) {
                            var i = t.createBookmark(),
                            o = function(e) {
                                return 1 == e.nodeType ? "br" != e.tagName.toLowerCase() && !domUtils.isBookmarkNode(e) : !domUtils.isWhitespace(e)
                            };
                            t.enlarge(!0);
                            for (var r, a = t.createBookmark(), s = domUtils.getNextDomNode(a.start, !1, o), l = t.cloneRange(); s && !(domUtils.getPosition(s, a.end) & domUtils.POSITION_FOLLOWING);) if (3 != s.nodeType && e(s)) s = domUtils.getNextDomNode(s, !0, o);
                            else {
                                for (l.setStartBefore(s); s && s !== a.end && !e(s);) r = s,
                                s = domUtils.getNextDomNode(s, !1, null,
                                function(t) {
                                    return ! e(t)
                                });
                                l.setEndAfter(r);
                                var d = l.getCommonAncestor();
                                if (!domUtils.isBody(d) && e(d)) domUtils.setStyles(d, utils.isString(n) ? {
                                    "text-align": n
                                }: n),
                                s = d;
                                else {
                                    var c = t.document.createElement("p");
                                    domUtils.setStyles(c, utils.isString(n) ? {
                                        "text-align": n
                                    }: n);
                                    var u = l.extractContents();
                                    c.appendChild(u),
                                    l.insertNode(c),
                                    s = c
                                }
                                s = domUtils.getNextDomNode(s, !1, o)
                            }
                            t.moveToBookmark(a).moveToBookmark(i)
                        } (o, n),
                        i && (o.setStartBefore(i).collapse(!0), domUtils.remove(i)),
                        o.select(),
                        !0
                    },
                    queryCommandValue: function() {
                        var e = this.selection.getStart(),
                        n = domUtils.getComputedStyle(e, "text-align");
                        return t[n] ? n: "left"
                    },
                    queryCommandState: function() {
                        var e = this.selection.getStart();
                        return e && domUtils.findParentByTagName(e, ["td", "th", "caption"], !0) ? -1 : 0
                    }
                }
            },
            UE.plugins.font = function() {
                var e = {
                    forecolor: "color",
                    backcolor: "background-color",
                    fontsize: "font-size",
                    fontfamily: "font-family",
                    underline: "text-decoration",
                    strikethrough: "text-decoration",
                    fontborder: "border"
                },
                t = {
                    underline: 1,
                    strikethrough: 1,
                    fontborder: 1
                },
                n = {
                    forecolor: "color",
                    backcolor: "background-color",
                    fontsize: "font-size",
                    fontfamily: "font-family"
                };
                function i(e, t, i) {
                    var o, r = e.collapsed,
                    a = e.createBookmark();
                    if (r) for (o = a.start.parentNode; dtd.$inline[o.tagName];) o = o.parentNode;
                    else o = domUtils.getCommonAncestor(a.start, a.end);
                    utils.each(domUtils.getElementsByTagName(o, "span"),
                    function(e) {
                        if (e.parentNode && !domUtils.isBookmarkNode(e)) if (/\s*border\s*:\s*none;?\s*/i.test(e.style.cssText)) / ^\s * border\s * :\s * none; ? \s * $ / .test(e.style.cssText) ? domUtils.remove(e, !0) : domUtils.removeStyle(e, "border");
                        else {
                            if (/border/i.test(e.style.cssText) && "SPAN" == e.parentNode.tagName && /border/i.test(e.parentNode.style.cssText) && (e.style.cssText = e.style.cssText.replace(/border[^:]*:[^;]+;?/gi, "")), "fontborder" != t || "none" != i) for (var n = e.nextSibling; n && 1 == n.nodeType && "SPAN" == n.tagName;) if (domUtils.isBookmarkNode(n) && "fontborder" == t) e.appendChild(n),
                            n = e.nextSibling;
                            else {
                                if (n.style.cssText == e.style.cssText && (domUtils.moveChild(n, e), domUtils.remove(n)), e.nextSibling === n) break;
                                n = e.nextSibling
                            }
                            if (function(e) {
                                for (var t; (t = e.parentNode) && "SPAN" == t.tagName && 1 == domUtils.getChildCount(t,
                                function(e) {
                                    return ! domUtils.isBookmarkNode(e) && !domUtils.isBr(e)
                                });) t.style.cssText += e.style.cssText,
                                domUtils.remove(e, !0),
                                e = t
                            } (e), browser.ie && browser.version > 8) {
                                var o = domUtils.findParent(e,
                                function(e) {
                                    return "SPAN" == e.tagName && /background-color/.test(e.style.cssText)
                                });
                                o && !/background-color/.test(e.style.cssText) && (e.style.backgroundColor = o.style.backgroundColor)
                            }
                        }
                    }),
                    e.moveToBookmark(a),
                    function(e, t, i) {
                        if (n[t] && (e.adjustmentBoundary(), !e.collapsed && 1 == e.startContainer.nodeType)) {
                            var o = e.startContainer.childNodes[e.startOffset];
                            if (o && domUtils.isTagNode(o, "span")) {
                                var r = e.createBookmark();
                                utils.each(domUtils.getElementsByTagName(o, "span"),
                                function(e) {
                                    e.parentNode && !domUtils.isBookmarkNode(e) && ("backcolor" == t && domUtils.getComputedStyle(e, "background-color").toLowerCase() === i || (domUtils.removeStyle(e, n[t]), 0 == e.style.cssText.replace(/^\s+$/, "").length && domUtils.remove(e, !0)))
                                }),
                                e.moveToBookmark(r)
                            }
                        }
                    } (e, t, i)
                }
                for (var o in this.setOpt({
                    fontfamily: [{
                        name: "songti",
                        val: "宋体,SimSun"
                    },
                    {
                        name: "yahei",
                        val: "微软雅黑,Microsoft YaHei"
                    },
                    {
                        name: "kaiti",
                        val: "楷体,楷体_GB2312, SimKai"
                    },
                    {
                        name: "heiti",
                        val: "黑体, SimHei"
                    },
                    {
                        name: "lishu",
                        val: "隶书, SimLi"
                    },
                    {
                        name: "andaleMono",
                        val: "andale mono"
                    },
                    {
                        name: "arial",
                        val: "arial, helvetica,sans-serif"
                    },
                    {
                        name: "arialBlack",
                        val: "arial black,avant garde"
                    },
                    {
                        name: "comicSansMs",
                        val: "comic sans ms"
                    },
                    {
                        name: "impact",
                        val: "impact,chicago"
                    },
                    {
                        name: "timesNewRoman",
                        val: "times new roman"
                    }],
                    fontsize: [10, 11, 12, 14, 16, 18, 20, 24, 36]
                }), this.addInputRule(function(e) {
                    utils.each(e.getNodesByTagName("u s del font strike"),
                    function(e) {
                        if ("font" == e.tagName) {
                            var t = [];
                            for (var n in e.attrs) switch (n) {
                            case "size":
                                t.push("font-size:" + ({
                                    1 : "10",
                                    2 : "12",
                                    3 : "16",
                                    4 : "18",
                                    5 : "24",
                                    6 : "32",
                                    7 : "48"
                                } [e.attrs[n]] || e.attrs[n]) + "px");
                                break;
                            case "color":
                                t.push("color:" + e.attrs[n]);
                                break;
                            case "face":
                                t.push("font-family:" + e.attrs[n]);
                                break;
                            case "style":
                                t.push(e.attrs[n])
                            }
                            e.attrs = {
                                style: t.join(";")
                            }
                        } else {
                            var i = "u" == e.tagName ? "underline": "line-through";
                            e.attrs = {
                                style: (e.getAttr("style") || "") + "text-decoration:" + i + ";"
                            }
                        }
                        e.tagName = "span"
                    })
                }), e) !
                function(e, n) {
                    UE.commands[e] = {
                        execCommand: function(o, r) {
                            r = r || (this.queryCommandState(o) ? "none": "underline" == o ? "underline": "fontborder" == o ? "1px solid #000": "line-through");
                            var a, s = this,
                            l = this.selection.getRange();
                            if ("default" == r) l.collapsed && (a = s.document.createTextNode("font"), l.insertNode(a).select()),
                            s.execCommand("removeFormat", "span,a", n),
                            a && (l.setStartBefore(a).collapse(!0), domUtils.remove(a)),
                            i(l, o, r),
                            l.select();
                            else if (l.collapsed) {
                                var d = domUtils.findParentByTagName(l.startContainer, "span", !0);
                                if (a = s.document.createTextNode("font"), !d || d.children.length || d[browser.ie ? "innerText": "textContent"].replace(fillCharReg, "").length) {
                                    if (l.insertNode(a), l.selectNode(a).select(), d = l.document.createElement("span"), t[e]) {
                                        if (domUtils.findParentByTagName(a, "a", !0)) return l.setStartBefore(a).setCursor(),
                                        void domUtils.remove(a);
                                        s.execCommand("removeFormat", "span,a", n)
                                    }
                                    if (d.style.cssText = n + ":" + r, a.parentNode.insertBefore(d, a), !browser.ie || browser.ie && 9 == browser.version) for (var c = d.parentNode; ! domUtils.isBlockElm(c);)"SPAN" == c.tagName && (d.style.cssText = c.style.cssText + ";" + d.style.cssText),
                                    c = c.parentNode;
                                    opera ? setTimeout(function() {
                                        l.setStart(d, 0).collapse(!0),
                                        i(l, o, r),
                                        l.select()
                                    }) : (l.setStart(d, 0).collapse(!0), i(l, o, r), l.select())
                                } else l.insertNode(a),
                                t[e] && (l.selectNode(a).select(), s.execCommand("removeFormat", "span,a", n, null), d = domUtils.findParentByTagName(a, "span", !0), l.setStartBefore(a)),
                                d && (d.style.cssText += ";" + n + ":" + r),
                                l.collapse(!0).select();
                                domUtils.remove(a)
                            } else t[e] && s.queryCommandValue(e) && s.execCommand("removeFormat", "span,a", n),
                            (l = s.selection.getRange()).applyInlineStyle("span", {
                                style: n + ":" + r
                            }),
                            i(l, o, r),
                            l.select();
                            return ! 0
                        },
                        queryCommandValue: function(e) {
                            var t = this.selection.getStart();
                            if ("underline" == e || "strikethrough" == e) {
                                for (var i, o = t; o && !domUtils.isBlockElm(o) && !domUtils.isBody(o);) {
                                    if (1 == o.nodeType && "none" != (i = domUtils.getComputedStyle(o, n))) return i;
                                    o = o.parentNode
                                }
                                return "none"
                            }
                            if ("fontborder" == e) {
                                for (var r, a = t; a && dtd.$inline[a.tagName];) {
                                    if ((r = domUtils.getComputedStyle(a, "border")) && /1px/.test(r) && /solid/.test(r)) return r;
                                    a = a.parentNode
                                }
                                return ""
                            }
                            if ("FontSize" == e) {
                                var s = domUtils.getComputedStyle(t, n);
                                return (a = /^([\d\.]+)(\w+)$/.exec(s)) ? Math.floor(a[1]) + a[2] : s
                            }
                            return domUtils.getComputedStyle(t, n)
                        },
                        queryCommandState: function(e) {
                            if (!t[e]) return 0;
                            var n = this.queryCommandValue(e);
                            return "fontborder" == e ? /1px/.test(n) && /solid/.test(n) : "underline" == e ? /underline/.test(n) : /line\-through/.test(n)
                        }
                    }
                } (o, e[o])
            },
            UE.plugins.link = function() {
                function e(e) {
                    var t = e.startContainer,
                    n = e.endContainer; (t = domUtils.findParentByTagName(t, "a", !0)) && e.setStartBefore(t),
                    (n = domUtils.findParentByTagName(n, "a", !0)) && e.setEndAfter(n)
                }
                UE.commands.unlink = {
                    execCommand: function() {
                        var t, n = this.selection.getRange();
                        n.collapsed && !domUtils.findParentByTagName(n.startContainer, "a", !0) || (t = n.createBookmark(), e(n), n.removeInlineStyle("a").moveToBookmark(t).select())
                    },
                    queryCommandState: function() {
                        return ! this.highlight && this.queryCommandValue("link") ? 0 : -1
                    }
                },
                UE.commands.link = {
                    execCommand: function(t, n) {
                        var i;
                        n._href && (n._href = utils.unhtml(n._href, /[<">]/g)),
                        n.href && (n.href = utils.unhtml(n.href, /[<">]/g)),
                        n.textValue && (n.textValue = utils.unhtml(n.textValue, /[<">]/g)),
                        function(t, n, i) {
                            var o = t.cloneRange(),
                            r = i.queryCommandValue("link");
                            e(t = t.adjustmentBoundary());
                            var a = t.startContainer;
                            if (1 == a.nodeType && r && (a = a.childNodes[t.startOffset]) && 1 == a.nodeType && "A" == a.tagName && /^(?:https?|ftp|file)\s*:\s*\/\//.test(a[browser.ie ? "innerText": "textContent"]) && (a[browser.ie ? "innerText": "textContent"] = utils.html(n.textValue || n.href)), o.collapsed && !r || (t.removeInlineStyle("a"), o = t.cloneRange()), o.collapsed) {
                                var s = t.document.createElement("a"),
                                l = "";
                                n.textValue ? (l = utils.html(n.textValue), delete n.textValue) : l = utils.html(n.href),
                                domUtils.setAttributes(s, n),
                                (a = domUtils.findParentByTagName(o.startContainer, "a", !0)) && domUtils.isInNodeEndBoundary(o, a) && t.setStartAfter(a).collapse(!0),
                                s[browser.ie ? "innerText": "textContent"] = l,
                                t.insertNode(s).selectNode(s)
                            } else t.applyInlineStyle("a", n)
                        } (i = this.selection.getRange(), n, this),
                        i.collapse().select(!0)
                    },
                    queryCommandValue: function() {
                        var e, t = this.selection.getRange();
                        if (!t.collapsed) {
                            t.shrinkBoundary();
                            var n = 3 != t.startContainer.nodeType && t.startContainer.childNodes[t.startOffset] ? t.startContainer.childNodes[t.startOffset] : t.startContainer,
                            i = 3 == t.endContainer.nodeType || 0 == t.endOffset ? t.endContainer: t.endContainer.childNodes[t.endOffset - 1],
                            o = t.getCommonAncestor();
                            if (! (e = domUtils.findParentByTagName(o, "a", !0)) && 1 == o.nodeType) for (var r, a, s, l = o.getElementsByTagName("a"), d = 0; s = l[d++];) if (r = domUtils.getPosition(s, n), a = domUtils.getPosition(s, i), (r & domUtils.POSITION_FOLLOWING || r & domUtils.POSITION_CONTAINS) && (a & domUtils.POSITION_PRECEDING || a & domUtils.POSITION_CONTAINS)) {
                                e = s;
                                break
                            }
                            return e
                        }
                        if ((e = 1 == (e = t.startContainer).nodeType ? e: e.parentNode) && (e = domUtils.findParentByTagName(e, "a", !0)) && !domUtils.isInNodeEndBoundary(t, e)) return e
                    },
                    queryCommandState: function() {
                        var e = this.selection.getRange().getClosedNode();
                        return e && ("edui-faked-video" == e.className || -1 != e.className.indexOf("edui-upload-video")) ? -1 : 0
                    }
                }
            },
            UE.plugins.insertframe = function() {
                var e = this;
                e.addListener("selectionchange",
                function() {
                    e._iframe && delete e._iframe
                })
            },
            UE.commands.scrawl = {
                queryCommandState: function() {
                    return browser.ie && browser.version <= 8 ? -1 : 0
                }
            },
            UE.plugins.removeformat = function() {
                this.setOpt({
                    removeFormatTags: "b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var",
                    removeFormatAttributes: "class,style,lang,width,height,align,hspace,valign"
                }),
                this.commands.removeformat = {
                    execCommand: function(e, t, n, i, o) {
                        var r, a, s = new RegExp("^(?:" + (t || this.options.removeFormatTags).replace(/,/g, "|") + ")$", "i"),
                        l = n ? [] : (i || this.options.removeFormatAttributes).split(","),
                        d = new dom.Range(this.document),
                        c = function(e) {
                            return 1 == e.nodeType
                        };
                        function u(e) {
                            if (3 == e.nodeType || "span" != e.tagName.toLowerCase()) return 0;
                            if (browser.ie) {
                                var t = e.attributes;
                                if (t.length) {
                                    for (var n = 0,
                                    i = t.length; n < i; n++) if (t[n].specified) return 0;
                                    return 1
                                }
                            }
                            return ! e.attributes.length
                        } (function(e) {
                            var t = e.createBookmark();
                            if (e.collapsed && e.enlarge(!0), !o) {
                                var i = domUtils.findParentByTagName(e.startContainer, "a", !0);
                                i && e.setStartBefore(i),
                                (i = domUtils.findParentByTagName(e.endContainer, "a", !0)) && e.setEndAfter(i)
                            }
                            for (h = (r = e.createBookmark()).start; (a = h.parentNode) && !domUtils.isBlockElm(a);) domUtils.breakParent(h, a),
                            domUtils.clearEmptySibling(h);
                            if (r.end) {
                                for (h = r.end; (a = h.parentNode) && !domUtils.isBlockElm(a);) domUtils.breakParent(h, a),
                                domUtils.clearEmptySibling(h);
                                for (var d, m = domUtils.getNextDomNode(r.start, !1, c); m && m != r.end;) d = domUtils.getNextDomNode(m, !0, c),
                                dtd.$empty[m.tagName.toLowerCase()] || domUtils.isBookmarkNode(m) || (s.test(m.tagName) ? n ? (domUtils.removeStyle(m, n), u(m) && "text-decoration" != n && domUtils.remove(m, !0)) : domUtils.remove(m, !0) : dtd.$tableContent[m.tagName] || dtd.$list[m.tagName] || (domUtils.removeAttributes(m, l), u(m) && domUtils.remove(m, !0))),
                                m = d
                            }
                            var f = r.start.parentNode; ! domUtils.isBlockElm(f) || dtd.$tableContent[f.tagName] || dtd.$list[f.tagName] || domUtils.removeAttributes(f, l),
                            f = r.end.parentNode,
                            r.end && domUtils.isBlockElm(f) && !dtd.$tableContent[f.tagName] && !dtd.$list[f.tagName] && domUtils.removeAttributes(f, l),
                            e.moveToBookmark(r).moveToBookmark(t);
                            for (var p, h = e.startContainer,
                            g = e.collapsed; 1 == h.nodeType && domUtils.isEmptyNode(h) && dtd.$removeEmpty[h.tagName];) p = h.parentNode,
                            e.setStartBefore(h),
                            e.startContainer === e.endContainer && e.endOffset--,
                            domUtils.remove(h),
                            h = p;
                            if (!g) for (h = e.endContainer; 1 == h.nodeType && domUtils.isEmptyNode(h) && dtd.$removeEmpty[h.tagName];) p = h.parentNode,
                            e.setEndBefore(h),
                            domUtils.remove(h),
                            h = p
                        })(d = this.selection.getRange()),
                        d.select()
                    }
                }
            },
            UE.plugins.blockquote = function() {
                function e(e) {
                    return domUtils.filterNodeList(e.selection.getStartElementPath(), "blockquote")
                }
                this.commands.blockquote = {
                    execCommand: function(t, n) {
                        var i = this.selection.getRange(),
                        o = e(this),
                        r = dtd.blockquote,
                        a = i.createBookmark();
                        if (o) {
                            var s = i.startContainer,
                            l = domUtils.isBlockElm(s) ? s: domUtils.findParent(s,
                            function(e) {
                                return domUtils.isBlockElm(e)
                            }),
                            d = i.endContainer,
                            c = domUtils.isBlockElm(d) ? d: domUtils.findParent(d,
                            function(e) {
                                return domUtils.isBlockElm(e)
                            });
                            l = domUtils.findParentByTagName(l, "li", !0) || l,
                            c = domUtils.findParentByTagName(c, "li", !0) || c,
                            "LI" == l.tagName || "TD" == l.tagName || l === o || domUtils.isBody(l) ? domUtils.remove(o, !0) : domUtils.breakParent(l, o),
                            l !== c && (o = domUtils.findParentByTagName(c, "blockquote")) && ("LI" == c.tagName || "TD" == c.tagName || domUtils.isBody(c) ? o.parentNode && domUtils.remove(o, !0) : domUtils.breakParent(c, o));
                            for (var u, m = domUtils.getElementsByTagName(this.document, "blockquote"), f = 0; u = m[f++];) u.childNodes.length ? domUtils.getPosition(u, l) & domUtils.POSITION_FOLLOWING && domUtils.getPosition(u, c) & domUtils.POSITION_PRECEDING && domUtils.remove(u, !0) : domUtils.remove(u)
                        } else {
                            for (var p = i.cloneRange(), h = 1 == p.startContainer.nodeType ? p.startContainer: p.startContainer.parentNode, g = h, v = 1;;) {
                                if (domUtils.isBody(h)) {
                                    g !== h ? i.collapsed ? (p.selectNode(g), v = 0) : p.setStartBefore(g) : p.setStart(h, 0);
                                    break
                                }
                                if (!r[h.tagName]) {
                                    i.collapsed ? p.selectNode(g) : p.setStartBefore(g);
                                    break
                                }
                                g = h,
                                h = h.parentNode
                            }
                            if (v) for (g = h = h = 1 == p.endContainer.nodeType ? p.endContainer: p.endContainer.parentNode;;) {
                                if (domUtils.isBody(h)) {
                                    g !== h ? p.setEndAfter(g) : p.setEnd(h, h.childNodes.length);
                                    break
                                }
                                if (!r[h.tagName]) {
                                    p.setEndAfter(g);
                                    break
                                }
                                g = h,
                                h = h.parentNode
                            }
                            h = i.document.createElement("blockquote"),
                            domUtils.setAttributes(h, n),
                            h.appendChild(p.extractContents()),
                            p.insertNode(h);
                            var b, y = domUtils.getElementsByTagName(h, "blockquote");
                            for (f = 0; b = y[f++];) b.parentNode && domUtils.remove(b, !0)
                        }
                        i.moveToBookmark(a).select()
                    },
                    queryCommandState: function() {
                        return e(this) ? 1 : 0
                    }
                }
            },
            UE.commands.touppercase = UE.commands.tolowercase = {
                execCommand: function(e) {
                    var t = this.selection.getRange();
                    if (t.collapsed) return t;
                    for (var n = t.createBookmark(), i = n.end, o = function(e) {
                        return ! domUtils.isBr(e) && !domUtils.isWhitespace(e)
                    },
                    r = domUtils.getNextDomNode(n.start, !1, o); r && domUtils.getPosition(r, i) & domUtils.POSITION_PRECEDING && (3 == r.nodeType && (r.nodeValue = r.nodeValue["touppercase" == e ? "toUpperCase": "toLowerCase"]()), (r = domUtils.getNextDomNode(r, !0, o)) !== i););
                    t.moveToBookmark(n).select()
                }
            },
            UE.commands.indent = {
                execCommand: function() {
                    var e = this.queryCommandState("indent") ? "0em": this.options.indentValue || "2em";
                    this.execCommand("Paragraph", "p", {
                        style: "text-indent:" + e
                    })
                },
                queryCommandState: function() {
                    var e = domUtils.filterNodeList(this.selection.getStartElementPath(), "p h1 h2 h3 h4 h5 h6");
                    return e && e.style.textIndent && parseInt(e.style.textIndent) ? 1 : 0
                }
            },
            UE.commands.print = {
                execCommand: function() {
                    this.window.print()
                },
                notNeedUndo: 1
            },
            UE.commands.preview = {
                execCommand: function() {
                    var e = window.open("", "_blank", "").document;
                    e.open(),
                    e.write('<!DOCTYPE html><html><head><meta charset="utf-8"/><script src="' + this.options.UEDITOR_HOME_URL + "ueditor.parse.js\"><\/script><script>setTimeout(function(){uParse('div',{rootPath: '" + this.options.UEDITOR_HOME_URL + "'})},300)<\/script></head><body><div>" + this.getContent(null, null, !0) + "</div></body></html>"),
                    e.close()
                },
                notNeedUndo: 1
            },
            UE.plugins.selectall = function() {
                this.commands.selectall = {
                    execCommand: function() {
                        var e = this.body,
                        t = this.selection.getRange();
                        t.selectNodeContents(e),
                        domUtils.isEmptyBlock(e) && (browser.opera && e.firstChild && 1 == e.firstChild.nodeType && t.setStartAtFirst(e.firstChild), t.collapse(!0)),
                        t.select(!0)
                    },
                    notNeedUndo: 1
                },
                this.addshortcutkey({
                    selectAll: "ctrl+65"
                })
            },
            UE.plugins.paragraph = function() {
                var e = domUtils.isBlockElm,
                t = ["TD", "LI", "PRE"];
                this.setOpt("paragraph", {
                    p: "",
                    h1: "",
                    h2: "",
                    h3: "",
                    h4: "",
                    h5: "",
                    h6: ""
                }),
                this.commands.paragraph = {
                    execCommand: function(n, i, o, r) {
                        var a = this.selection.getRange();
                        if (a.collapsed) {
                            var s = this.document.createTextNode("p");
                            if (a.insertNode(s), browser.ie) {
                                var l = s.previousSibling;
                                l && domUtils.isWhitespace(l) && domUtils.remove(l),
                                (l = s.nextSibling) && domUtils.isWhitespace(l) && domUtils.remove(l)
                            }
                        }
                        if (a = function(n, i, o, r) {
                            var a, s = n.createBookmark(),
                            l = function(e) {
                                return 1 == e.nodeType ? "br" != e.tagName.toLowerCase() && !domUtils.isBookmarkNode(e) : !domUtils.isWhitespace(e)
                            };
                            n.enlarge(!0);
                            for (var d, c = n.createBookmark(), u = domUtils.getNextDomNode(c.start, !1, l), m = n.cloneRange(); u && !(domUtils.getPosition(u, c.end) & domUtils.POSITION_FOLLOWING);) if (3 != u.nodeType && e(u)) u = domUtils.getNextDomNode(u, !0, l);
                            else {
                                for (m.setStartBefore(u); u && u !== c.end && !e(u);) d = u,
                                u = domUtils.getNextDomNode(u, !1, null,
                                function(t) {
                                    return ! e(t)
                                });
                                m.setEndAfter(d),
                                a = n.document.createElement(i),
                                o && (domUtils.setAttributes(a, o), r && "customstyle" == r && o.style && (a.style.cssText = o.style)),
                                a.appendChild(m.extractContents()),
                                domUtils.isEmptyNode(a) && domUtils.fillChar(n.document, a),
                                m.insertNode(a);
                                var f = a.parentNode;
                                e(f) && !domUtils.isBody(a.parentNode) && -1 == utils.indexOf(t, f.tagName) && (r && "customstyle" == r || (f.getAttribute("dir") && a.setAttribute("dir", f.getAttribute("dir")), f.style.cssText && (a.style.cssText = f.style.cssText + ";" + a.style.cssText), f.style.textAlign && !a.style.textAlign && (a.style.textAlign = f.style.textAlign), f.style.textIndent && !a.style.textIndent && (a.style.textIndent = f.style.textIndent), f.style.padding && !a.style.padding && (a.style.padding = f.style.padding)), o && /h\d/i.test(f.tagName) && !/h\d/i.test(a.tagName) ? (domUtils.setAttributes(f, o), r && "customstyle" == r && o.style && (f.style.cssText = o.style), domUtils.remove(a, !0), a = f) : domUtils.remove(a.parentNode, !0)),
                                u = -1 != utils.indexOf(t, f.tagName) ? f: a,
                                u = domUtils.getNextDomNode(u, !1, l)
                            }
                            return n.moveToBookmark(c).moveToBookmark(s)
                        } (a, i, o, r), s && (a.setStartBefore(s).collapse(!0), pN = s.parentNode, domUtils.remove(s), domUtils.isBlockElm(pN) && domUtils.isEmptyNode(pN) && domUtils.fillNode(this.document, pN)), browser.gecko && a.collapsed && 1 == a.startContainer.nodeType) {
                            var d = a.startContainer.childNodes[a.startOffset];
                            d && 1 == d.nodeType && d.tagName.toLowerCase() == i && a.setStart(d, 0).collapse(!0)
                        }
                        return a.select(),
                        !0
                    },
                    queryCommandValue: function() {
                        var e = domUtils.filterNodeList(this.selection.getStartElementPath(), "p h1 h2 h3 h4 h5 h6");
                        return e ? e.tagName.toLowerCase() : ""
                    }
                }
            },
            block = domUtils.isBlockElm,
            getObj = function(e) {
                return domUtils.filterNodeList(e.selection.getStartElementPath(),
                function(e) {
                    return e && 1 == e.nodeType && e.getAttribute("dir")
                })
            },
            UE.commands.directionality = {
                execCommand: function(e, t) {
                    var n = this.selection.getRange();
                    if (n.collapsed) {
                        var i = this.document.createTextNode("d");
                        n.insertNode(i)
                    }
                    return function(e, t, n) {
                        var i, o = function(e) {
                            return 1 == e.nodeType ? !domUtils.isBookmarkNode(e) : !domUtils.isWhitespace(e)
                        },
                        r = getObj(t);
                        if (r && e.collapsed) return r.setAttribute("dir", n),
                        e;
                        i = e.createBookmark(),
                        e.enlarge(!0);
                        for (var a, s = e.createBookmark(), l = domUtils.getNextDomNode(s.start, !1, o), d = e.cloneRange(); l && !(domUtils.getPosition(l, s.end) & domUtils.POSITION_FOLLOWING);) if (3 != l.nodeType && block(l)) l = domUtils.getNextDomNode(l, !0, o);
                        else {
                            for (d.setStartBefore(l); l && l !== s.end && !block(l);) a = l,
                            l = domUtils.getNextDomNode(l, !1, null,
                            function(e) {
                                return ! block(e)
                            });
                            d.setEndAfter(a);
                            var c = d.getCommonAncestor();
                            if (!domUtils.isBody(c) && block(c)) c.setAttribute("dir", n),
                            l = c;
                            else {
                                var u = e.document.createElement("p");
                                u.setAttribute("dir", n);
                                var m = d.extractContents();
                                u.appendChild(m),
                                d.insertNode(u),
                                l = u
                            }
                            l = domUtils.getNextDomNode(l, !1, o)
                        }
                        e.moveToBookmark(s).moveToBookmark(i)
                    } (n, this, t),
                    i && (n.setStartBefore(i).collapse(!0), domUtils.remove(i)),
                    n.select(),
                    !0
                },
                queryCommandValue: function() {
                    var e = getObj(this);
                    return e ? e.getAttribute("dir") : "ltr"
                }
            },
            UE.plugins.horizontal = function() {
                this.commands.horizontal = {
                    execCommand: function(e) {
                        var t = this;
                        if ( - 1 !== t.queryCommandState(e)) {
                            t.execCommand("insertHtml", "<hr>");
                            var n, i = t.selection.getRange(),
                            o = i.startContainer;
                            if (1 == o.nodeType && !o.childNodes[i.startOffset])(n = o.childNodes[i.startOffset - 1]) && 1 == n.nodeType && "HR" == n.tagName && ("p" == t.options.enterTag ? (n = t.document.createElement("p"), i.insertNode(n), i.setStart(n, 0).setCursor()) : (n = t.document.createElement("br"), i.insertNode(n), i.setStartBefore(n).setCursor()));
                            return ! 0
                        }
                    },
                    queryCommandState: function() {
                        return domUtils.filterNodeList(this.selection.getStartElementPath(), "table") ? -1 : 0
                    }
                },
                this.addListener("delkeydown",
                function(e, t) {
                    var n = this.selection.getRange();
                    if (n.txtToElmBoundary(!0), domUtils.isStartInblock(n)) {
                        var i = n.startContainer.previousSibling;
                        if (i && domUtils.isTagNode(i, "hr")) return domUtils.remove(i),
                        n.select(),
                        domUtils.preventDefault(t),
                        !0
                    }
                })
            },
            UE.commands.time = UE.commands.date = {
                execCommand: function(e, t) {
                    var n = new Date;
                    this.execCommand("insertHtml", "time" == e ?
                    function(e, t) {
                        var n = ("0" + e.getHours()).slice( - 2),
                        i = ("0" + e.getMinutes()).slice( - 2),
                        o = ("0" + e.getSeconds()).slice( - 2);
                        return (t = t || "hh:ii:ss").replace(/hh/gi, n).replace(/ii/gi, i).replace(/ss/gi, o)
                    } (n, t) : function(e, t) {
                        var n = ("000" + e.getFullYear()).slice( - 4),
                        i = n.slice( - 2),
                        o = ("0" + (e.getMonth() + 1)).slice( - 2),
                        r = ("0" + e.getDate()).slice( - 2);
                        return (t = t || "yyyy-mm-dd").replace(/yyyy/gi, n).replace(/yy/gi, i).replace(/mm/gi, o).replace(/dd/gi, r)
                    } (n, t))
                }
            },
            UE.plugins.rowspacing = function() {
                this.setOpt({
                    rowspacingtop: ["5", "10", "15", "20", "25"],
                    rowspacingbottom: ["5", "10", "15", "20", "25"]
                }),
                this.commands.rowspacing = {
                    execCommand: function(e, t, n) {
                        return this.execCommand("paragraph", "p", {
                            style: "margin-" + n + ":" + t + "px"
                        }),
                        !0
                    },
                    queryCommandValue: function(e, t) {
                        var n = domUtils.filterNodeList(this.selection.getStartElementPath(),
                        function(e) {
                            return domUtils.isBlockElm(e)
                        });
                        return n && domUtils.getComputedStyle(n, "margin-" + t).replace(/[^\d]/g, "") || 0
                    }
                }
            },
            UE.plugins.lineheight = function() {
                this.setOpt({
                    lineheight: ["1", "1.5", "1.75", "2", "3", "4", "5"]
                }),
                this.commands.lineheight = {
                    execCommand: function(e, t) {
                        return this.execCommand("paragraph", "p", {
                            style: "line-height:" + ("1" == t ? "normal": t + "em")
                        }),
                        !0
                    },
                    queryCommandValue: function() {
                        var e = domUtils.filterNodeList(this.selection.getStartElementPath(),
                        function(e) {
                            return domUtils.isBlockElm(e)
                        });
                        if (e) {
                            var t = domUtils.getComputedStyle(e, "line-height");
                            return "normal" == t ? 1 : t.replace(/[^\d.]*/gi, "")
                        }
                    }
                }
            },
            UE.plugins.insertcode = function() {
                var e = this;
                e.ready(function() {
                    utils.cssRule("pre", "pre{margin:.5em 0;padding:.4em .6em;border-radius:8px;background:#f8f8f8;}", e.document)
                }),
                e.setOpt("insertcode", {
                    as3: "ActionScript3",
                    bash: "Bash/Shell",
                    cpp: "C/C++",
                    css: "Css",
                    cf: "CodeFunction",
                    "c#": "C#",
                    delphi: "Delphi",
                    diff: "Diff",
                    erlang: "Erlang",
                    groovy: "Groovy",
                    html: "Html",
                    java: "Java",
                    jfx: "JavaFx",
                    js: "Javascript",
                    pl: "Perl",
                    php: "Php",
                    plain: "Plain Text",
                    ps: "PowerShell",
                    python: "Python",
                    ruby: "Ruby",
                    scala: "Scala",
                    sql: "Sql",
                    vb: "Vb",
                    xml: "Xml"
                }),
                e.commands.insertcode = {
                    execCommand: function(e, t) {
                        var n = this,
                        i = n.selection.getRange(),
                        o = domUtils.findParentByTagName(i.startContainer, "pre", !0);
                        if (o) o.className = "brush:" + t + ";toolbar:false;";
                        else {
                            var r = "";
                            if (i.collapsed) r = browser.ie && browser.ie11below ? browser.version <= 8 ? "&nbsp;": "": "<br/>";
                            else {
                                var a = i.extractContents(),
                                s = n.document.createElement("div");
                                s.appendChild(a),
                                utils.each(UE.filterNode(UE.htmlparser(s.innerHTML.replace(/[\r\t]/g, "")), n.options.filterTxtRules).children,
                                function(e) {
                                    if (browser.ie && browser.ie11below && browser.version > 8)"element" == e.type ? "br" == e.tagName ? r += "\n": dtd.$empty[e.tagName] || (utils.each(e.children,
                                    function(t) {
                                        "element" == t.type ? "br" == t.tagName ? r += "\n": dtd.$empty[e.tagName] || (r += t.innerText()) : r += t.data
                                    }), /\n$/.test(r) || (r += "\n")) : r += e.data + "\n",
                                    !e.nextSibling() && /\n$/.test(r) && (r = r.replace(/\n$/, ""));
                                    else if (browser.ie && browser.ie11below)"element" == e.type ? "br" == e.tagName ? r += "<br>": dtd.$empty[e.tagName] || (utils.each(e.children,
                                    function(t) {
                                        "element" == t.type ? "br" == t.tagName ? r += "<br>": dtd.$empty[e.tagName] || (r += t.innerText()) : r += t.data
                                    }), /br>$/.test(r) || (r += "<br>")) : r += e.data + "<br>",
                                    !e.nextSibling() && /<br>$/.test(r) && (r = r.replace(/<br>$/, ""));
                                    else if (r += "element" == e.type ? dtd.$empty[e.tagName] ? "": e.innerText() : e.data, !/br\/?\s*>$/.test(r)) {
                                        if (!e.nextSibling()) return;
                                        r += "<br>"
                                    }
                                })
                            }
                            n.execCommand("inserthtml", '<pre id="coder"class="brush:' + t + ';toolbar:false">' + r + "</pre>", !0),
                            o = n.document.getElementById("coder"),
                            domUtils.removeAttributes(o, "id");
                            var l = o.previousSibling;
                            l && (3 == l.nodeType && 1 == l.nodeValue.length && browser.ie && 6 == browser.version || domUtils.isEmptyBlock(l)) && domUtils.remove(l);
                            i = n.selection.getRange();
                            domUtils.isEmptyBlock(o) ? i.setStart(o, 0).setCursor(!1, !0) : i.selectNodeContents(o).select()
                        }
                    },
                    queryCommandValue: function() {
                        var e = this.selection.getStartElementPath(),
                        t = "";
                        return utils.each(e,
                        function(e) {
                            if ("PRE" == e.nodeName) {
                                var n = e.className.match(/brush:([^;]+)/);
                                return t = n && n[1] ? n[1] : "",
                                !1
                            }
                        }),
                        t
                    }
                },
                e.addInputRule(function(e) {
                    utils.each(e.getNodesByTagName("pre"),
                    function(e) {
                        var t = e.getNodesByTagName("br");
                        if (t.length) browser.ie && browser.ie11below && browser.version > 8 && utils.each(t,
                        function(e) {
                            var t = UE.uNode.createText("\n");
                            e.parentNode.insertBefore(t, e),
                            e.parentNode.removeChild(e)
                        });
                        else if (! (browser.ie && browser.ie11below && browser.version > 8)) {
                            var n = e.innerText().split(/\n/);
                            e.innerHTML(""),
                            utils.each(n,
                            function(t) {
                                t.length && e.appendChild(UE.uNode.createText(t)),
                                e.appendChild(UE.uNode.createElement("br"))
                            })
                        }
                    })
                }),
                e.addOutputRule(function(e) {
                    utils.each(e.getNodesByTagName("pre"),
                    function(e) {
                        var t = "";
                        utils.each(e.children,
                        function(e) {
                            "text" == e.type ? t += e.data.replace(/[ ]/g, "&nbsp;").replace(/\n$/, "") : "br" == e.tagName ? t += "\n": t += dtd.$empty[e.tagName] ? e.innerText() : ""
                        }),
                        e.innerText(t.replace(/(&nbsp;|\n)+$/, ""))
                    })
                }),
                e.notNeedCodeQuery = {
                    help: 1,
                    undo: 1,
                    redo: 1,
                    source: 1,
                    print: 1,
                    searchreplace: 1,
                    fullscreen: 1,
                    preview: 1,
                    insertparagraph: 1,
                    elementpath: 1,
                    insertcode: 1,
                    inserthtml: 1,
                    selectall: 1
                };
                e.queryCommandState;
                e.queryCommandState = function(e) {
                    return ! this.notNeedCodeQuery[e.toLowerCase()] && this.selection && this.queryCommandValue("insertcode") ? -1 : UE.Editor.prototype.queryCommandState.apply(this, arguments)
                },
                e.addListener("beforeenterkeydown",
                function() {
                    var t = e.selection.getRange();
                    if (n = domUtils.findParentByTagName(t.startContainer, "pre", !0)) {
                        if (e.fireEvent("saveScene"), t.collapsed || t.deleteContents(), !browser.ie || browser.ie9above) {
                            var n, i = e.document.createElement("br");
                            for (t.insertNode(i).setStartAfter(i).collapse(!0), i.nextSibling || browser.ie && !(browser.version > 10) ? t.setStartAfter(i) : t.insertNode(i.cloneNode(!1)), n = i.previousSibling; n;) if (l = n, !(n = n.previousSibling) || "BR" == n.nodeName) {
                                n = l;
                                break
                            }
                            if (n) {
                                for (var o = ""; n && "BR" != n.nodeName && new RegExp("^[\\s" + domUtils.fillChar + "]*$").test(n.nodeValue);) o += n.nodeValue,
                                n = n.nextSibling;
                                if ("BR" != n.nodeName)(d = n.nodeValue.match(new RegExp("^([\\s" + domUtils.fillChar + "]+)"))) && d[1] && (o += d[1]);
                                o && (o = e.document.createTextNode(o), t.insertNode(o).setStartAfter(o))
                            }
                            t.collapse(!0).select(!0)
                        } else if (browser.version > 8) {
                            var r = e.document.createTextNode("\n"),
                            a = t.startContainer;
                            if (0 == t.startOffset) {
                                if (a.previousSibling) {
                                    t.insertNode(r);
                                    var s = e.document.createTextNode(" ");
                                    t.setStartAfter(r).insertNode(s).setStart(s, 0).collapse(!0).select(!0)
                                }
                            } else {
                                t.insertNode(r).setStartAfter(r);
                                s = e.document.createTextNode(" "); (a = t.startContainer.childNodes[t.startOffset]) && !/^\n/.test(a.nodeValue) && t.setStartBefore(r),
                                t.insertNode(s).setStart(s, 0).collapse(!0).select(!0)
                            }
                        } else {
                            var l;
                            i = e.document.createElement("br");
                            for (t.insertNode(i), t.insertNode(e.document.createTextNode(domUtils.fillChar)), t.setStartAfter(i), n = i.previousSibling; n;) if (l = n, !(n = n.previousSibling) || "BR" == n.nodeName) {
                                n = l;
                                break
                            }
                            if (n) {
                                var d;
                                for (o = ""; n && "BR" != n.nodeName && new RegExp("^[ " + domUtils.fillChar + "]*$").test(n.nodeValue);) o += n.nodeValue,
                                n = n.nextSibling;
                                if ("BR" != n.nodeName)(d = n.nodeValue.match(new RegExp("^([ " + domUtils.fillChar + "]+)"))) && d[1] && (o += d[1]);
                                o = e.document.createTextNode(o),
                                t.insertNode(o).setStartAfter(o)
                            }
                            t.collapse(!0).select()
                        }
                        return e.fireEvent("saveScene"),
                        !0
                    }
                }),
                e.addListener("tabkeydown",
                function(t, n) {
                    var i = e.selection.getRange(),
                    o = domUtils.findParentByTagName(i.startContainer, "pre", !0);
                    if (o) {
                        if (e.fireEvent("saveScene"), n.shiftKey);
                        else if (i.collapsed) {
                            var r = e.document.createTextNode("    ");
                            i.insertNode(r).setStartAfter(r).collapse(!0).select(!0)
                        } else {
                            for (var a = i.createBookmark(), s = a.start.previousSibling; s;) {
                                if (o.firstChild === s && !domUtils.isBr(s)) {
                                    o.insertBefore(e.document.createTextNode("    "), s);
                                    break
                                }
                                if (domUtils.isBr(s)) {
                                    o.insertBefore(e.document.createTextNode("    "), s.nextSibling);
                                    break
                                }
                                s = s.previousSibling
                            }
                            var l = a.end;
                            for (s = a.start.nextSibling, o.firstChild === a.start && o.insertBefore(e.document.createTextNode("    "), s.nextSibling); s && s !== l;) {
                                if (domUtils.isBr(s) && s.nextSibling) {
                                    if (s.nextSibling === l) break;
                                    o.insertBefore(e.document.createTextNode("    "), s.nextSibling)
                                }
                                s = s.nextSibling
                            }
                            i.moveToBookmark(a).select()
                        }
                        return e.fireEvent("saveScene"),
                        !0
                    }
                }),
                e.addListener("beforeinserthtml",
                function(e, t) {
                    var n = this,
                    i = n.selection.getRange();
                    if (domUtils.findParentByTagName(i.startContainer, "pre", !0)) {
                        i.collapsed || i.deleteContents();
                        var o = "";
                        if (browser.ie && browser.version > 8) {
                            utils.each(UE.filterNode(UE.htmlparser(t), n.options.filterTxtRules).children,
                            function(e) {
                                "element" == e.type ? "br" == e.tagName ? o += "\n": dtd.$empty[e.tagName] || (utils.each(e.children,
                                function(t) {
                                    "element" == t.type ? "br" == t.tagName ? o += "\n": dtd.$empty[e.tagName] || (o += t.innerText()) : o += t.data
                                }), /\n$/.test(o) || (o += "\n")) : o += e.data + "\n",
                                !e.nextSibling() && /\n$/.test(o) && (o = o.replace(/\n$/, ""))
                            });
                            var r = n.document.createTextNode(utils.html(o.replace(/&nbsp;/g, " ")));
                            i.insertNode(r).selectNode(r).select()
                        } else {
                            var a = n.document.createDocumentFragment();
                            utils.each(UE.filterNode(UE.htmlparser(t), n.options.filterTxtRules).children,
                            function(e) {
                                "element" == e.type ? "br" == e.tagName ? a.appendChild(n.document.createElement("br")) : dtd.$empty[e.tagName] || (utils.each(e.children,
                                function(t) {
                                    "element" == t.type ? "br" == t.tagName ? a.appendChild(n.document.createElement("br")) : dtd.$empty[e.tagName] || a.appendChild(n.document.createTextNode(utils.html(t.innerText().replace(/&nbsp;/g, " ")))) : a.appendChild(n.document.createTextNode(utils.html(t.data.replace(/&nbsp;/g, " "))))
                                }), "BR" != a.lastChild.nodeName && a.appendChild(n.document.createElement("br"))) : a.appendChild(n.document.createTextNode(utils.html(e.data.replace(/&nbsp;/g, " ")))),
                                e.nextSibling() || "BR" != a.lastChild.nodeName || a.removeChild(a.lastChild)
                            }),
                            i.insertNode(a).select()
                        }
                        return ! 0
                    }
                }),
                e.addListener("keydown",
                function(e, t) {
                    if (40 == (t.keyCode || t.which)) {
                        var n, i = this.selection.getRange(),
                        o = i.startContainer;
                        if (i.collapsed && (n = domUtils.findParentByTagName(i.startContainer, "pre", !0)) && !n.nextSibling) {
                            for (var r = n.lastChild; r && "BR" == r.nodeName;) r = r.previousSibling; (r === o || i.startContainer === n && i.startOffset == n.childNodes.length) && (this.execCommand("insertparagraph"), domUtils.preventDefault(t))
                        }
                    }
                }),
                e.addListener("delkeydown",
                function(t, n) {
                    var i = this.selection.getRange();
                    i.txtToElmBoundary(!0);
                    var o = i.startContainer;
                    if (domUtils.isTagNode(o, "pre") && i.collapsed && domUtils.isStartInblock(i)) {
                        var r = e.document.createElement("p");
                        return domUtils.fillNode(e.document, r),
                        o.parentNode.insertBefore(r, o),
                        domUtils.remove(o),
                        i.setStart(r, 0).setCursor(!1, !0),
                        domUtils.preventDefault(n),
                        !0
                    }
                })
            },
            UE.commands.cleardoc = {
                execCommand: function(e) {
                    var t = this,
                    n = t.options.enterTag,
                    i = t.selection.getRange();
                    "br" == n ? (t.body.innerHTML = "<br/>", i.setStart(t.body, 0).setCursor()) : (t.body.innerHTML = "<p>" + (ie ? "": "<br/>") + "</p>", i.setStart(t.body.firstChild, 0).setCursor(!1, !0)),
                    setTimeout(function() {
                        t.fireEvent("clearDoc")
                    },
                    0)
                }
            },
            UE.plugin.register("anchor",
            function() {
                return {
                    bindEvents: {
                        ready: function() {
                            utils.cssRule("anchor", ".anchorclass{background: url('" + this.options.themePath + this.options.theme + "/images/anchor.gif') no-repeat scroll left center transparent;cursor: auto;display: inline-block;height: 16px;width: 15px;}", this.document)
                        }
                    },
                    outputRule: function(e) {
                        utils.each(e.getNodesByTagName("img"),
                        function(e) {
                            var t; (t = e.getAttr("anchorname")) && (e.tagName = "a", e.setAttr({
                                anchorname: "",
                                name: t,
                                class: ""
                            }))
                        })
                    },
                    inputRule: function(e) {
                        utils.each(e.getNodesByTagName("a"),
                        function(e) {
                            e.getAttr("name") && !e.getAttr("href") && (e.tagName = "img", e.setAttr({
                                anchorname: e.getAttr("name"),
                                class: "anchorclass"
                            }), e.setAttr("name"))
                        })
                    },
                    commands: {
                        anchor: {
                            execCommand: function(e, t) {
                                var n = this.selection.getRange(),
                                i = n.getClosedNode();
                                if (i && i.getAttribute("anchorname")) t ? i.setAttribute("anchorname", t) : (n.setStartBefore(i).setCursor(), domUtils.remove(i));
                                else if (t) {
                                    var o = this.document.createElement("img");
                                    n.collapse(!0),
                                    domUtils.setAttributes(o, {
                                        anchorname: t,
                                        class: "anchorclass"
                                    }),
                                    n.insertNode(o).setStartAfter(o).setCursor(!1, !0)
                                }
                            }
                        }
                    }
                }
            }),
            UE.plugins.wordcount = function() {
                var e, t = this;
                t.setOpt("wordCount", !0),
                t.addListener("contentchange",
                function() {
                    t.fireEvent("wordcount")
                }),
                t.addListener("ready",
                function() {
                    var t = this;
                    domUtils.on(t.body, "keyup",
                    function(n) { (n.keyCode || n.which) in {
                            16 : 1,
                            18 : 1,
                            20 : 1,
                            37 : 1,
                            38 : 1,
                            39 : 1,
                            40 : 1
                        } || (clearTimeout(e), e = setTimeout(function() {
                            t.fireEvent("wordcount")
                        },
                        200))
                    })
                })
            },
            UE.plugins.pagebreak = function() {
                var e = this,
                t = ["td"];
                function n(t) {
                    if (domUtils.isEmptyBlock(t)) {
                        for (var n, i = t.firstChild; i && 1 == i.nodeType && domUtils.isEmptyBlock(i);) n = i,
                        i = i.firstChild; ! n && (n = t),
                        domUtils.fillNode(e.document, n)
                    }
                }
                function i(e) {
                    return e && 1 == e.nodeType && "HR" == e.tagName && "pagebreak" == e.className
                }
                e.setOpt("pageBreakTag", "_ueditor_page_break_tag_"),
                e.ready(function() {
                    utils.cssRule("pagebreak", ".pagebreak{display:block;clear:both !important;cursor:default !important;width: 100% !important;margin:0;}", e.document)
                }),
                e.addInputRule(function(t) {
                    t.traversal(function(t) {
                        if ("text" == t.type && t.data == e.options.pageBreakTag) {
                            var n = UE.uNode.createElement('<hr class="pagebreak" noshade="noshade" size="5" style="-webkit-user-select: none;">');
                            t.parentNode.insertBefore(n, t),
                            t.parentNode.removeChild(t)
                        }
                    })
                }),
                e.addOutputRule(function(t) {
                    utils.each(t.getNodesByTagName("hr"),
                    function(t) {
                        if ("pagebreak" == t.getAttr("class")) {
                            var n = UE.uNode.createText(e.options.pageBreakTag);
                            t.parentNode.insertBefore(n, t),
                            t.parentNode.removeChild(t)
                        }
                    })
                }),
                e.commands.pagebreak = {
                    execCommand: function() {
                        var o = e.selection.getRange(),
                        r = e.document.createElement("hr");
                        domUtils.setAttributes(r, {
                            class: "pagebreak",
                            noshade: "noshade",
                            size: "5"
                        }),
                        domUtils.unSelectable(r);
                        var a = domUtils.findParentByTagName(o.startContainer, t, !0),
                        s = [];
                        if (a) switch (a.tagName) {
                        case "TD":
                            if ((u = a.parentNode).previousSibling) u.parentNode.insertBefore(r, u),
                            s = domUtils.findParents(r);
                            else {
                                var l = domUtils.findParentByTagName(u, "table");
                                l.parentNode.insertBefore(r, l),
                                s = domUtils.findParents(r, !0)
                            }
                            r !== (u = s[1]) && domUtils.breakParent(r, u),
                            e.fireEvent("afteradjusttable", e.document)
                        } else {
                            if (!o.collapsed) {
                                o.deleteContents();
                                for (var d = o.startContainer; ! domUtils.isBody(d) && domUtils.isBlockElm(d) && domUtils.isEmptyNode(d);) o.setStartBefore(d).collapse(!0),
                                domUtils.remove(d),
                                d = o.startContainer
                            }
                            o.insertNode(r);
                            for (var c, u = r.parentNode; ! domUtils.isBody(u);) domUtils.breakParent(r, u),
                            (c = r.nextSibling) && domUtils.isEmptyBlock(c) && domUtils.remove(c),
                            u = r.parentNode;
                            c = r.nextSibling;
                            var m = r.previousSibling;
                            if (i(m) ? domUtils.remove(m) : m && n(m), c) i(c) ? domUtils.remove(c) : n(c),
                            o.setEndAfter(r).collapse(!1);
                            else {
                                var f = e.document.createElement("p");
                                r.parentNode.appendChild(f),
                                domUtils.fillNode(e.document, f),
                                o.setStart(f, 0).collapse(!0)
                            }
                            o.select(!0)
                        }
                    }
                }
            },
            UE.plugin.register("wordimage",
            function() {
                var e = this,
                t = [];
                return {
                    commands: {
                        wordimage: {
                            execCommand: function() {
                                for (var t, n = domUtils.getElementsByTagName(e.body, "img"), i = [], o = 0; t = n[o++];) {
                                    var r = t.getAttribute("word_img");
                                    r && i.push(r)
                                }
                                return i
                            },
                            queryCommandState: function() {
                                t = domUtils.getElementsByTagName(e.body, "img");
                                for (var n, i = 0; n = t[i++];) if (n.getAttribute("word_img")) return 1;
                                return - 1
                            },
                            notNeedUndo: !0
                        }
                    },
                    inputRule: function(t) {
                        utils.each(t.getNodesByTagName("img"),
                        function(t) {
                            var n = t.attrs,
                            i = parseInt(n.width) < 128 || parseInt(n.height) < 43,
                            o = e.options,
                            r = o.UEDITOR_HOME_URL + "themes/default/images/spacer.gif";
                            n.src && /^(?:(file:\/+))/.test(n.src) && t.setAttr({
                                width: n.width,
                                height: n.height,
                                alt: n.alt,
                                word_img: n.src,
                                src: r,
                                style: "background:url(" + (i ? o.themePath + o.theme + "/images/word.gif": o.langPath + o.lang + "/images/localimage.png") + ") no-repeat center center;border:1px solid #ddd"
                            })
                        })
                    }
                }
            }),
            UE.plugins.dragdrop = function() {
                var e = this;
                e.ready(function() {
                    domUtils.on(this.body, "dragend",
                    function() {
                        var t = e.selection.getRange(),
                        n = t.getClosedNode() || e.selection.getStart();
                        if (n && "IMG" == n.tagName) {
                            for (var i, o = n.previousSibling; (i = n.nextSibling) && 1 == i.nodeType && "SPAN" == i.tagName && !i.firstChild;) domUtils.remove(i); (!o || 1 != o.nodeType || domUtils.isEmptyBlock(o)) && o || i && (!i || domUtils.isEmptyBlock(i)) || (o && "P" == o.tagName && !domUtils.isEmptyBlock(o) ? (o.appendChild(n), domUtils.moveChild(i, o), domUtils.remove(i)) : i && "P" == i.tagName && !domUtils.isEmptyBlock(i) && i.insertBefore(n, i.firstChild), o && "P" == o.tagName && domUtils.isEmptyBlock(o) && domUtils.remove(o), i && "P" == i.tagName && domUtils.isEmptyBlock(i) && domUtils.remove(i), t.selectNode(n).select(), e.fireEvent("saveScene"))
                        }
                    })
                }),
                e.addListener("keyup",
                function(t, n) {
                    if (13 == (n.keyCode || n.which)) {
                        var i, o = e.selection.getRange(); (i = domUtils.findParentByTagName(o.startContainer, "p", !0)) && "center" == domUtils.getComputedStyle(i, "text-align") && domUtils.removeStyle(i, "text-align")
                    }
                })
            },
            UE.plugins.undo = function() {
                var e, t = this,
                n = t.options.maxUndoCount || 20,
                i = t.options.maxInputCount || 20,
                o = new RegExp(domUtils.fillChar + "|</hr>", "gi"),
                r = {
                    ol: 1,
                    ul: 1,
                    table: 1,
                    tbody: 1,
                    tr: 1,
                    body: 1
                },
                a = t.options.autoClearEmptyNode;
                function s(e, t) {
                    if (e.length != t.length) return 0;
                    for (var n = 0,
                    i = e.length; n < i; n++) if (e[n] != t[n]) return 0;
                    return 1
                }
                t.undoManger = new
                function() {
                    this.list = [],
                    this.index = 0,
                    this.hasUndo = !1,
                    this.hasRedo = !1,
                    this.undo = function() {
                        if (this.hasUndo) {
                            if (!this.list[this.index - 1] && 1 == this.list.length) return void this.reset();
                            for (; this.list[this.index].content == this.list[this.index - 1].content;) if (this.index--, 0 == this.index) return this.restore(0);
                            this.restore(--this.index)
                        }
                    },
                    this.redo = function() {
                        if (this.hasRedo) {
                            for (; this.list[this.index].content == this.list[this.index + 1].content;) if (this.index++, this.index == this.list.length - 1) return this.restore(this.index);
                            this.restore(++this.index)
                        }
                    },
                    this.restore = function() {
                        var e = this.editor,
                        t = this.list[this.index],
                        n = UE.htmlparser(t.content.replace(o, ""));
                        e.options.autoClearEmptyNode = !1,
                        e.filterInputRule(n),
                        e.options.autoClearEmptyNode = a,
                        e.document.body.innerHTML = n.toHtml(),
                        e.fireEvent("afterscencerestore"),
                        browser.ie && utils.each(domUtils.getElementsByTagName(e.document, "td th caption p"),
                        function(t) {
                            domUtils.isEmptyNode(t) && domUtils.fillNode(e.document, t)
                        });
                        try {
                            var i = new dom.Range(e.document).moveToAddress(t.address);
                            i.select(r[i.startContainer.nodeName.toLowerCase()])
                        } catch(e) {}
                        this.update(),
                        this.clearKey(),
                        e.fireEvent("reset", !0)
                    },
                    this.getScene = function() {
                        var e = this.editor,
                        t = e.selection.getRange().createAddress(!1, !0);
                        e.fireEvent("beforegetscene");
                        var n = UE.htmlparser(e.body.innerHTML);
                        e.options.autoClearEmptyNode = !1,
                        e.filterOutputRule(n),
                        e.options.autoClearEmptyNode = a;
                        var i = n.toHtml();
                        return e.fireEvent("aftergetscene"),
                        {
                            address: t,
                            content: i
                        }
                    },
                    this.save = function(i, o) {
                        clearTimeout(e);
                        var r, a, l = this.getScene(o),
                        d = this.list[this.index];
                        d && d.content != l.content && t.trigger("contentchange"),
                        d && d.content == l.content && (i || (r = d.address, a = l.address, r.collapsed == a.collapsed && s(r.startAddress, a.startAddress) && s(r.endAddress, a.endAddress))) || (this.list = this.list.slice(0, this.index + 1), this.list.push(l), this.list.length > n && this.list.shift(), this.index = this.list.length - 1, this.clearKey(), this.update())
                    },
                    this.update = function() {
                        this.hasRedo = !!this.list[this.index + 1],
                        this.hasUndo = !!this.list[this.index - 1]
                    },
                    this.reset = function() {
                        this.list = [],
                        this.index = 0,
                        this.hasUndo = !1,
                        this.hasRedo = !1,
                        this.clearKey()
                    },
                    this.clearKey = function() {
                        d = 0,
                        null
                    }
                },
                t.undoManger.editor = t,
                t.addListener("saveScene",
                function() {
                    var e = Array.prototype.splice.call(arguments, 1);
                    this.undoManger.save.apply(this.undoManger, e)
                }),
                t.addListener("reset",
                function(e, t) {
                    t || this.undoManger.reset()
                }),
                t.commands.redo = t.commands.undo = {
                    execCommand: function(e) {
                        this.undoManger[e]()
                    },
                    queryCommandState: function(e) {
                        return this.undoManger["has" + ("undo" == e.toLowerCase() ? "Undo": "Redo")] ? 0 : -1
                    },
                    notNeedUndo: 1
                };
                var l = {
                    16 : 1,
                    17 : 1,
                    18 : 1,
                    37 : 1,
                    38 : 1,
                    39 : 1,
                    40 : 1
                },
                d = 0,
                c = !1;
                t.addListener("ready",
                function() {
                    domUtils.on(this.body, "compositionstart",
                    function() {
                        c = !0
                    }),
                    domUtils.on(this.body, "compositionend",
                    function() {
                        c = !1
                    })
                }),
                t.addshortcutkey({
                    Undo: "ctrl+90",
                    Redo: "ctrl+89"
                });
                var u = !0;
                t.addListener("keydown",
                function(t, n) {
                    var o = this,
                    r = n.keyCode || n.which;
                    if (! (l[r] || n.ctrlKey || n.metaKey || n.shiftKey || n.altKey)) {
                        if (c) return;
                        if (!o.selection.getRange().collapsed) return o.undoManger.save(!1, !0),
                        void(u = !1);
                        function a(e) {
                            e.undoManger.save(!1, !0),
                            e.fireEvent("selectionchange")
                        }
                        0 == o.undoManger.list.length && o.undoManger.save(!0),
                        clearTimeout(e),
                        e = setTimeout(function() {
                            if (c) var e = setInterval(function() {
                                c || (a(o), clearInterval(e))
                            },
                            300);
                            else a(o)
                        },
                        200),
                        r,
                        ++d >= i && a(o)
                    }
                }),
                t.addListener("keyup",
                function(e, t) {
                    var n = t.keyCode || t.which;
                    if (! (l[n] || t.ctrlKey || t.metaKey || t.shiftKey || t.altKey)) {
                        if (c) return;
                        u || (this.undoManger.save(!1, !0), u = !0)
                    }
                }),
                t.stopCmdUndo = function() {
                    t.__hasEnterExecCommand = !0
                },
                t.startCmdUndo = function() {
                    t.__hasEnterExecCommand = !1
                }
            },
            UE.plugin.register("copy",
            function() {
                var e = this;
                function t() {
                    ZeroClipboard.config({
                        debug: !1,
                        swfPath: e.options.UEDITOR_HOME_URL + "third-party/zeroclipboard/ZeroClipboard.swf"
                    });
                    var t = e.zeroclipboard = new ZeroClipboard;
                    t.on("copy",
                    function(t) {
                        var n = t.client,
                        i = e.selection.getRange(),
                        o = document.createElement("div");
                        o.appendChild(i.cloneContents()),
                        n.setText(o.innerText || o.textContent),
                        n.setHtml(o.innerHTML),
                        i.select()
                    }),
                    t.on("mouseover mouseout",
                    function(e) {
                        var t = e.target;
                        "mouseover" == e.type ? domUtils.addClass(t, "edui-state-hover") : "mouseout" == e.type && domUtils.removeClasses(t, "edui-state-hover")
                    }),
                    t.on("wrongflash noflash",
                    function() {
                        ZeroClipboard.destroy()
                    })
                }
                return {
                    bindEvents: {
                        ready: function() {
                            browser.ie || (window.ZeroClipboard ? t() : utils.loadFile(document, {
                                src: e.options.UEDITOR_HOME_URL + "third-party/zeroclipboard/ZeroClipboard.js",
                                tag: "script",
                                type: "text/javascript",
                                defer: "defer"
                            },
                            function() {
                                t()
                            }))
                        }
                    },
                    commands: {
                        copy: {
                            execCommand: function(t) {
                                e.document.execCommand("copy") || alert(e.getLang("copymsg"))
                            }
                        }
                    }
                }
            }),
            UE.plugins.paste = function() {
                function e(e) {
                    var t = this.document;
                    if (!t.getElementById("baidu_pastebin")) {
                        var n = this.selection.getRange(),
                        i = n.createBookmark(),
                        o = t.createElement("div");
                        o.id = "baidu_pastebin",
                        browser.webkit && o.appendChild(t.createTextNode(domUtils.fillChar + domUtils.fillChar)),
                        t.body.appendChild(o),
                        i.start.style.display = "",
                        o.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;left:-1000px;white-space:nowrap;top:" + domUtils.getXY(i.start).y + "px",
                        n.selectNodeContents(o).select(!0),
                        setTimeout(function() {
                            if (browser.webkit) for (var r, a = 0,
                            s = t.querySelectorAll("#baidu_pastebin"); r = s[a++];) {
                                if (!domUtils.isEmptyNode(r)) {
                                    o = r;
                                    break
                                }
                                domUtils.remove(r)
                            }
                            try {
                                o.parentNode.removeChild(o)
                            } catch(e) {}
                            n.moveToBookmark(i).select(!0),
                            e(o)
                        },
                        0)
                    }
                }
                var t, n, i, o = this;
                function r(e) {
                    return e.replace(/<(\/?)([\w\-]+)([^>]*)>/gi,
                    function(e, t, n, i) {
                        return {
                            img: 1
                        } [n = n.toLowerCase()] ? e: (i = i.replace(/([\w\-]*?)\s*=\s*(("([^"]*)")|('([^']*)')|([^\s>]+))/gi,
                        function(e, t, n) {
                            return {
                                src: 1,
                                href: 1,
                                name: 1
                            } [t.toLowerCase()] ? t + "=" + n + " ": ""
                        }), {
                            span: 1,
                            div: 1
                        } [n] ? "": "<" + t + n + " " + utils.trim(i) + ">")
                    })
                }
                function a(e) {
                    var a;
                    if (e.firstChild) {
                        for (var s, l = domUtils.getElementsByTagName(e, "span"), d = 0; s = l[d++];)"_baidu_cut_start" != s.id && "_baidu_cut_end" != s.id || domUtils.remove(s);
                        if (browser.webkit) {
                            var c, u = e.querySelectorAll("div br");
                            for (d = 0; c = u[d++];) {
                                var m = c.parentNode;
                                "DIV" == m.tagName && 1 == m.childNodes.length && (m.innerHTML = "<p><br/></p>", domUtils.remove(m))
                            }
                            var f, p = e.querySelectorAll("#baidu_pastebin");
                            for (d = 0; f = p[d++];) {
                                var h = o.document.createElement("p");
                                for (f.parentNode.insertBefore(h, f); f.firstChild;) h.appendChild(f.firstChild);
                                domUtils.remove(f)
                            }
                            var g = e.querySelectorAll("meta");
                            for (d = 0; b = g[d++];) domUtils.remove(b);
                            u = e.querySelectorAll("br");
                            for (d = 0; b = u[d++];) / ^apple - /i.test(b.className)&&domUtils.remove(b)}if(browser.gecko){var v=e.querySelectorAll("[_moz_dirty]");for(d=0;b=v[d++];)b.removeAttribute("_moz_dirty")}if(!browser.ie){var b,y=e.querySelectorAll("span.Apple-style-span");for(d=0;b=y[d++];)domUtils.remove(b,!0)}a=e.innerHTML,a=UE.filterWord(a);var C=UE.htmlparser(a);if(o.options.filterRules&&UE.filterNode(C,o.options.filterRules),o.filterInputRule(C),browser.webkit){var x=C.lastChild();x&&"element"==x.type&&"br"==x.tagName&&C.removeChild(x),utils.each(o.body.querySelectorAll("div"),function(e){domUtils.isEmptyBlock(e)&&domUtils.remove(e,!0)})}if(a={html:C.toHtml()},o.fireEvent("beforepaste",a,C),!a.html)return;C=UE.htmlparser(a.html,!0),1===o.queryCommandState("pasteplain")?o.execCommand("insertHtml",UE.filterNode(C,o.options.filterTxtRules).toHtml(),!0):(UE.filterNode(C,o.options.filterTxtRules),t=C.toHtml(),n=a.html,i=o.selection.getRange().createAddress(!0),o.execCommand("insertHtml",!0===o.getOpt("retainOnlyLabelPasted")?r(n):n,!0)),o.fireEvent("afterpaste",a)}}o.setOpt({retainOnlyLabelPasted:!1}),o.addListener("pasteTransfer",function(e,a){if(i&&t&&n&&t!=n){var s=o.selection.getRange();if(s.moveToAddress(i,!0),!s.collapsed){for(;!domUtils.isBody(s.startContainer);){var l=s.startContainer;if(1==l.nodeType){if(!(l=l.childNodes[s.startOffset])){s.setStartBefore(s.startContainer);continue}var d=l.previousSibling;d&&3==d.nodeType&&new RegExp("^[\n\r\t "+domUtils.fillChar+"]*$").test(d.nodeValue)&&s.setStartBefore(d)}if(0!=s.startOffset)break;s.setStartBefore(s.startContainer)}for(;!domUtils.isBody(s.endContainer);){var c=s.endContainer;if(1==c.nodeType){if(!(c=c.childNodes[s.endOffset])){s.setEndAfter(s.endContainer);continue}var u=c.nextSibling;u&&3==u.nodeType&&new RegExp("^[\n\r\t"+domUtils.fillChar+"]*$").test(u.nodeValue)&&s.setEndAfter(u)}if(s.endOffset!=s.endContainer[3==s.endContainer.nodeType?"nodeValue":"childNodes"].length)break;s.setEndAfter(s.endContainer)}}s.deleteContents(),s.select(!0),o.__hasEnterExecCommand=!0;var m=n;2===a?m=r(m):a&&(m=t),o.execCommand("inserthtml",m,!0),o.__hasEnterExecCommand=!1;for(var f=o.selection.getRange();!domUtils.isBody(f.startContainer)&&!f.startOffset&&f.startContainer[3==f.startContainer.nodeType?"nodeValue":"childNodes"].length;)f.setStartBefore(f.startContainer);var p=f.createAddress(!0);i.endAddress=p.startAddress}}),o.addListener("ready",function(){domUtils.on(o.body,"cut",function(){!o.selection.getRange().collapsed&&o.undoManger&&o.undoManger.save()}),domUtils.on(o.body,browser.ie||browser.opera?"keydown":"paste",function(t){(!browser.ie&&!browser.opera||(t.ctrlKey||t.metaKey)&&"86"==t.keyCode)&&e.call(o,function(e){a(e)})})}),o.commands.paste={execCommand:function(t){browser.ie?(e.call(o,function(e){a(e)}),o.document.execCommand("paste")):alert(o.getLang("pastemsg"))}}},UE.plugins.pasteplain=function(){this.setOpt({pasteplain:!1,filterTxtRules:function(){function e(e){e.tagName="p",e.setStyle()}function t(e){e.parentNode.removeChild(e,!0)}return{"-":"script style object iframe embed input select",p:{$:{}},br:{$:{}},div:function(e){for(var t,n=UE.uNode.createElement("p");t=e.firstChild();)"text"!=t.type&&UE.dom.dtd.$block[t.tagName]?n.firstChild()?(e.parentNode.insertBefore(n,e),n=UE.uNode.createElement("p")):e.parentNode.insertBefore(t,e):n.appendChild(t);n.firstChild()&&e.parentNode.insertBefore(n,e),e.parentNode.removeChild(e)},ol:t,ul:t,dl:t,dt:t,dd:t,li:t,caption:e,th:e,tr:e,h1:e,h2:e,h3:e,h4:e,h5:e,h6:e,td:function(e){!!e.innerText()&&e.parentNode.insertAfter(UE.uNode.createText(" &nbsp; &nbsp;"),e),e.parentNode.removeChild(e,e.innerText())}}}()});var e=this.options.pasteplain;this.commands.pasteplain={queryCommandState:function(){return e?1:0},execCommand:function(){e=0|!e},notNeedUndo:1}},UE.plugins.list=function(){var e=this,t={TD:1,PRE:1,BLOCKQUOTE:1},n={cn:"cn-1-",cn1:"cn-2-",cn2:"cn-3-",num:"num-1-",num1:"num-2-",num2:"num-3-",dash:"dash",dot:"dot"};function i(e){var t=[];for(var n in e)t.push(n);return t}e.setOpt({autoTransWordToList:!1,insertorderedlist:{num:"",num1:"",num2:"",cn:"",cn1:"",cn2:"",decimal:"","lower-alpha":"","lower-roman":"","upper-alpha":"","upper-roman":""},insertunorderedlist:{circle:"",disc:"",square:"",dash:"",dot:""},listDefaultPaddingLeft:"30",listiconpath:"http:/ / bs.baidu.com / listicon / ",maxListLevel:-1,disablePInList:!1});var o={OL:i(e.options.insertorderedlist),UL:i(e.options.insertunorderedlist)},r=e.options.listiconpath;for(var a in n)e.options.insertorderedlist.hasOwnProperty(a)||e.options.insertunorderedlist.hasOwnProperty(a)||delete n[a];function s(e){var t=e.className;return domUtils.hasClass(e,/custom_/)?t.match(/custom_(\w+)/)[1]:domUtils.getStyle(e,"list - style - type ")}function l(e,t){utils.each(domUtils.getElementsByTagName(e,"ol ul "),function(i){if(domUtils.inDoc(i,e)){var r=i.parentNode;if(r.tagName==i.tagName){var a=s(i)||("OL "==i.tagName?"decimal ":"disc ");if(a==(s(r)||("OL "==r.tagName?"decimal ":"disc "))){var l=utils.indexOf(o[i.tagName],a);l=l+1==o[i.tagName].length?0:l+1,c(i,o[i.tagName][l])}}var u=0,m=2;domUtils.hasClass(i,/custom_/)?/[ou]l/i.test(r.tagName)&&domUtils.hasClass(r,/custom_/)||(m=1):/[ou]l/i.test(r.tagName)&&domUtils.hasClass(r,/custom_/)&&(m=3);var f=domUtils.getStyle(i,"list - style - type ");f&&(i.style.cssText="list - style - type: "+f),i.className=utils.trim(i.className.replace(/list-paddingleft-\w+/,""))+"list - paddingleft - "+m,utils.each(domUtils.getElementsByTagName(i,"li "),function(e){if(e.style.cssText&&(e.style.cssText=""),e.firstChild){if(e.parentNode===i){if(u++,domUtils.hasClass(i,/custom_/)){var t=1,o=s(i);if("OL "==i.tagName){if(o)switch(o){case"cn ":case"cn1 ":case"cn2 ":u>10&&(u%10==0||u>10&&u<20)?t=2:u>20&&(t=3);break;case"num2 ":u>9&&(t=2)}e.className="list - "+n[o]+u+"list - "+o+" - paddingleft - "+t}else e.className="list - "+n[o]+"list - "+o+" - paddingleft "}else e.className=e.className.replace(/list-[\w\-]+/gi,"");var r=e.getAttribute("class ");null===r||r.replace(/\s/g,"")||domUtils.removeAttributes(e,"class ")}}else domUtils.remove(e)}),!t&&d(i,i.tagName.toLowerCase(),s(i)||domUtils.getStyle(i,"list - style - type "),!0)}})}function d(e,t,n,i){var o=e.nextSibling;o&&1==o.nodeType&&o.tagName.toLowerCase()==t&&(s(o)||domUtils.getStyle(o,"list - style - type ")||("ol "==t?"decimal ":"disc "))==n&&(domUtils.moveChild(o,e),0==o.childNodes.length&&domUtils.remove(o)),o&&domUtils.isFillChar(o)&&domUtils.remove(o);var r=e.previousSibling;r&&1==r.nodeType&&r.tagName.toLowerCase()==t&&(s(r)||domUtils.getStyle(r,"list - style - type ")||("ol "==t?"decimal ":"disc "))==n&&domUtils.moveChild(e,r),r&&domUtils.isFillChar(r)&&domUtils.remove(r),!i&&domUtils.isEmptyBlock(e)&&domUtils.remove(e),s(e)&&l(e.ownerDocument,!0)}function c(e,t){n[t]&&(e.className="custom_ "+t);try{domUtils.setStyle(e,"list - style - type ",t)}catch(e){}}function u(e){var t=e.previousSibling;t&&domUtils.isEmptyBlock(t)&&domUtils.remove(t),(t=e.nextSibling)&&domUtils.isEmptyBlock(t)&&domUtils.remove(t)}function m(e){for(;e&&!domUtils.isBody(e);){if("TABLE "==e.nodeName)return null;if("LI "==e.nodeName)return e;e=e.parentNode}}e.ready(function(){var t=[];for(var i in n){if("dash "==i||"dot "==i)t.push("li.list - "+n[i]+" {
                                background - image: url("+r+n[i]+".gif)
                            }
                            "),t.push("ul.custom_ "+i+" {
                                list - style: none;
                            }
                            ul.custom_ "+i+"li {
                                background - position: 0 3px;
                                background - repeat: no - repeat
                            }
                            ");else{for(var o=0;o<99;o++)t.push("li.list - "+n[i]+o+" {
                                background - image: url("+r+"list - "+n[i]+o+".gif)
                            }
                            ");t.push("ol.custom_ "+i+" {
                                list - style: none;
                            }
                            ol.custom_ "+i+"li {
                                background - position: 0 3px;
                                background - repeat: no - repeat
                            }
                            ")}switch(i){case"cn ":t.push("li.list - "+i+" - paddingleft - 1 {
                                padding - left: 25px
                            }
                            "),t.push("li.list - "+i+" - paddingleft - 2 {
                                padding - left: 40px
                            }
                            "),t.push("li.list - "+i+" - paddingleft - 3 {
                                padding - left: 55px
                            }
                            ");break;case"cn1 ":t.push("li.list - "+i+" - paddingleft - 1 {
                                padding - left: 30px
                            }
                            "),t.push("li.list - "+i+" - paddingleft - 2 {
                                padding - left: 40px
                            }
                            "),t.push("li.list - "+i+" - paddingleft - 3 {
                                padding - left: 55px
                            }
                            ");break;case"cn2 ":t.push("li.list - "+i+" - paddingleft - 1 {
                                padding - left: 40px
                            }
                            "),t.push("li.list - "+i+" - paddingleft - 2 {
                                padding - left: 55px
                            }
                            "),t.push("li.list - "+i+" - paddingleft - 3 {
                                padding - left: 68px
                            }
                            ");break;case"num ":case"num1 ":t.push("li.list - "+i+" - paddingleft - 1 {
                                padding - left: 25px
                            }
                            ");break;case"num2 ":t.push("li.list - "+i+" - paddingleft - 1 {
                                padding - left: 35px
                            }
                            "),t.push("li.list - "+i+" - paddingleft - 2 {
                                padding - left: 40px
                            }
                            ");break;case"dash ":t.push("li.list - "+i+" - paddingleft {
                                padding - left: 35px
                            }
                            ");break;case"dot ":t.push("li.list - "+i+" - paddingleft {
                                padding - left: 20px
                            }
                            ")}}t.push(".list - paddingleft - 1 {
                                padding - left: 0
                            }
                            "),t.push(".list - paddingleft - 2 {
                                padding - left: "+e.options.listDefaultPaddingLeft+"px
                            }
                            "),t.push(".list - paddingleft - 3 {
                                padding - left: "+2*e.options.listDefaultPaddingLeft+"px
                            }
                            "),utils.cssRule("list ","ol,
                            ul {
                                margin: 0;
                                pading: 0;
                                "+(browser.ie?"":"width: 95 % ")+"
                            }
                            li {
                                clear: both;
                            }
                            "+t.join("\n "),e.document)}),e.ready(function(){domUtils.on(e.body,"cut ",function(){setTimeout(function(){var t,n=e.selection.getRange();if(!n.collapsed&&(t=domUtils.findParentByTagName(n.startContainer,"li ",!0))&&!t.nextSibling&&domUtils.isEmptyBlock(t)){var i,o=t.parentNode;if(i=o.previousSibling)domUtils.remove(o),n.setStartAtLast(i).collapse(!0),n.select(!0);else if(i=o.nextSibling)domUtils.remove(o),n.setStartAtFirst(i).collapse(!0),n.select(!0);else{var r=e.document.createElement("p ");domUtils.fillNode(e.document,r),o.parentNode.insertBefore(r,o),domUtils.remove(o),n.setStart(r,0).collapse(!0),n.select(!0)}}})})}),e.addListener("beforepaste ",function(e,t){var i,r=this.selection.getRange(),a=UE.htmlparser(t.html,!0);if(i=domUtils.findParentByTagName(r.startContainer,"li ",!0)){var l=i.parentNode,d="OL "==l.tagName?"ul ":"ol ";utils.each(a.getNodesByTagName(d),function(t){if(t.tagName=l.tagName,t.setAttr(),t.parentNode===a)e=s(l)||("OL "==l.tagName?"decimal ":"disc ");else{var i=t.parentNode.getAttr("class ");(e=i&&/custom_/.test(i)?i.match(/custom_(\w+)/)[1]:t.parentNode.getStyle("list - style - type "))||(e="OL "==l.tagName?"decimal ":"disc ")}var r=utils.indexOf(o[l.tagName],e);t.parentNode!==a&&(r=r+1==o[l.tagName].length?0:r+1);var d=o[l.tagName][r];n[d]?t.setAttr("class ","custom_ "+d):t.setStyle("list - style - type ",d)})}t.html=a.toHtml()}),!0===e.getOpt("disablePInList ")&&e.addOutputRule(function(e){utils.each(e.getNodesByTagName("li "),function(e){var t=[],n=0;utils.each(e.children,function(i){if("p "==i.tagName){for(var o;o=i.children.pop();)t.splice(n,0,o),o.parentNode=e,lastNode=o;if(!(o=t[t.length-1])||"element "!=o.type||"br "!=o.tagName){var r=UE.uNode.createElement("br ");r.parentNode=e,t.push(r)}n=t.length}}),t.length&&(e.children=t)})}),e.addInputRule(function(t){if(utils.each(t.getNodesByTagName("li "),function(e){for(var t,n=UE.uNode.createElement("p "),i=0;t=e.children[i];)"text "==t.type||dtd.p[t.tagName]?n.appendChild(t):n.firstChild()?(e.insertBefore(n,t),n=UE.uNode.createElement("p "),i+=2):i++;(n.firstChild()&&!n.parentNode||!e.firstChild())&&e.appendChild(n),n.firstChild()||n.innerHTML(browser.ie?" & nbsp;
                            ":" < br / >");var o=e.firstChild(),r=o.lastChild();r&&"text "==r.type&&/^\s*$/.test(r.data)&&o.removeChild(r)}),e.options.autoTransWordToList){var i={num1:/^\d+\)/,decimal:/^\d+\./,"lower - alpha ":/^[a-z]+\)/,"upper - alpha ":/^[A-Z]+\./,cn:/^[\u4E00\u4E8C\u4E09\u56DB\u516d\u4e94\u4e03\u516b\u4e5d]+[\u3001]/,cn2:/^\([\u4E00\u4E8C\u4E09\u56DB\u516d\u4e94\u4e03\u516b\u4e5d]+\)/},o={square:"n "};function r(e,t){var n=t.firstChild();if(n&&"element "==n.type&&"span "==n.tagName&&/Wingdings|Symbol/.test(n.getStyle("font - family "))){for(var r in o)if(o[r]==n.data)return r;return"disc "}for(var r in i)if(i[r].test(e))return r}utils.each(t.getNodesByTagName("p "),function(t){if("MsoListParagraph "==t.getAttr("class ")){t.setStyle("margin ",""),t.setStyle("margin - left ",""),t.setAttr("class ","");var o,a=t,s=t;if("li "!=t.parentNode.tagName&&(o=r(t.innerText(),t))){var l=UE.uNode.createElement(e.options.insertorderedlist.hasOwnProperty(o)?"ol ":"ul ");for(n[o]?l.setAttr("class ","custom_ "+o):l.setStyle("list - style - type ",o);t&&"li "!=t.parentNode.tagName&&r(t.innerText(),t);)(a=t.nextSibling())||t.parentNode.insertBefore(l,t),c(l,t,o),t=a;!l.parentNode&&t&&t.parentNode&&t.parentNode.insertBefore(l,t)}var d=s.firstChild();d&&"element "==d.type&&"span "==d.tagName&&/^\s*(&nbsp;)+\s*$/.test(d.innerText())&&d.parentNode.removeChild(d)}function c(e,t,n){if("ol "==e.tagName)if(browser.ie){var o=t.firstChild();"element "==o.type&&"span "==o.tagName&&i[n].test(o.innerText())&&t.removeChild(o)}else t.innerHTML(t.innerHTML().replace(i[n],""));else t.removeChild(t.firstChild());var r=UE.uNode.createElement("li ");r.appendChild(t),e.appendChild(r)}})}}),e.addListener("contentchange ",function(){l(e.document)}),e.addListener("keydown ",function(t,n){function i(){n.preventDefault?n.preventDefault():n.returnValue=!1,e.fireEvent("contentchange "),e.undoManger&&e.undoManger.save()}function o(e,t){for(;e&&!domUtils.isBody(e);){if(t(e))return null;if(1==e.nodeType&&/[ou]l/i.test(e.tagName))return e;e=e.parentNode}return null}var r=n.keyCode||n.which;if(13==r&&!n.shiftKey){var a=e.selection.getRange(),s=domUtils.findParent(a.startContainer,function(e){return domUtils.isBlockElm(e)},!0),l=domUtils.findParentByTagName(a.startContainer,"li ",!0);if(s&&"PRE "!=s.tagName&&!l){var d=s.innerHTML.replace(new RegExp(domUtils.fillChar,"g "),"");/^\s*1\s*\.[^\d]/.test(d)&&(s.innerHTML=d.replace(/^\s*1\s*\./,""),a.setStartAtLast(s).collapse(!0).select(),e.__hasEnterExecCommand=!0,e.execCommand("insertorderedlist "),e.__hasEnterExecCommand=!1)}var c=e.selection.getRange(),m=o(c.startContainer,function(e){return"TABLE "==e.tagName}),f=c.collapsed?m:o(c.endContainer,function(e){return"TABLE "==e.tagName});if(m&&f&&m===f){if(!c.collapsed){if(m=domUtils.findParentByTagName(c.startContainer,"li ",!0),f=domUtils.findParentByTagName(c.endContainer,"li ",!0),!m||!f||m!==f){var p=c.cloneRange(),h=p.collapse(!1).createBookmark();return c.deleteContents(),p.moveToBookmark(h),u(l=domUtils.findParentByTagName(p.startContainer,"li ",!0)),p.select(),void i()}if(c.deleteContents(),(l=domUtils.findParentByTagName(c.startContainer,"li ",!0))&&domUtils.isEmptyBlock(l))return C=l.previousSibling,next=l.nextSibling,v=e.document.createElement("p "),domUtils.fillNode(e.document,v),x=l.parentNode,C&&next?(c.setStart(next,0).collapse(!0).select(!0),domUtils.remove(l)):((C||next)&&C?l.parentNode.parentNode.insertBefore(v,x.nextSibling):x.parentNode.insertBefore(v,x),domUtils.remove(l),x.firstChild||domUtils.remove(x),c.setStart(v,0).setCursor()),void i()}if(l=domUtils.findParentByTagName(c.startContainer,"li ",!0)){if(domUtils.isEmptyBlock(l)){if(h=c.createBookmark(),l!==(x=l.parentNode).lastChild?(domUtils.breakParent(l,x),u(l)):(x.parentNode.insertBefore(l,x.nextSibling),domUtils.isEmptyNode(x)&&domUtils.remove(x)),!dtd.$list[l.parentNode.tagName])if(domUtils.isBlockElm(l.firstChild))domUtils.remove(l,!0);else{for(v=e.document.createElement("p "),l.parentNode.insertBefore(v,l);l.firstChild;)v.appendChild(l.firstChild);domUtils.remove(l)}c.moveToBookmark(h).select()}else{var g=l.firstChild;if(!g||!domUtils.isBlockElm(g)){var v=e.document.createElement("p ");for(!l.firstChild&&domUtils.fillNode(e.document,v);l.firstChild;)v.appendChild(l.firstChild);l.appendChild(v),g=v}var b=e.document.createElement("span ");c.insertNode(b),domUtils.breakParent(b,l);var y=b.nextSibling;(g=y.firstChild)||(v=e.document.createElement("p "),domUtils.fillNode(e.document,v),y.appendChild(v),g=v),domUtils.isEmptyNode(g)&&(g.innerHTML="",domUtils.fillNode(e.document,g)),c.setStart(g,0).collapse(!0).shrinkBoundary().select(),domUtils.remove(b);var C=y.previousSibling;C&&domUtils.isEmptyBlock(C)&&(C.innerHTML=" < p > </p>",domUtils.fillNode(e.document,C.firstChild))}i()}}}if(8==r&&(c=e.selection.getRange()).collapsed&&domUtils.isStartInblock(c)&&(p=c.cloneRange().trimBoundary(),(l=domUtils.findParentByTagName(c.startContainer,"li",!0))&&domUtils.isStartInblock(p))){if((m=domUtils.findParentByTagName(c.startContainer,"p",!0))&&m!==l.firstChild){var x=domUtils.findParentByTagName(m,["ol","ul"]);return domUtils.breakParent(m,x),u(m),e.fireEvent("contentchange"),c.setStart(m,0).setCursor(!1,!0),e.fireEvent("saveScene"),void domUtils.preventDefault(n)}if(l&&(C=l.previousSibling)){if(46==r&&l.childNodes.length)return;if(dtd.$list[C.tagName]&&(C=C.lastChild),e.undoManger&&e.undoManger.save(),g=l.firstChild,domUtils.isBlockElm(g))if(domUtils.isEmptyNode(g))for(C.appendChild(g),c.setStart(g,0).setCursor(!1,!0);l.firstChild;)C.appendChild(l.firstChild);else b=e.document.createElement("span"),c.insertNode(b),domUtils.isEmptyBlock(C)&&(C.innerHTML=""),domUtils.moveChild(l,C),c.setStartBefore(b).collapse(!0).select(!0),domUtils.remove(b);else if(domUtils.isEmptyNode(l)){v=e.document.createElement("p");C.appendChild(v),c.setStart(v,0).setCursor()}else for(c.setEnd(C,C.childNodes.length).collapse().select(!0);l.firstChild;)C.appendChild(l.firstChild);return domUtils.remove(l),e.fireEvent("contentchange"),e.fireEvent("saveScene"),void domUtils.preventDefault(n)}if(l&&!l.previousSibling){x=l.parentNode,h=c.createBookmark();if(domUtils.isTagNode(x.parentNode,"ol ul"))x.parentNode.insertBefore(l,x),domUtils.isEmptyNode(x)&&domUtils.remove(x);else{for(;l.firstChild;)x.parentNode.insertBefore(l.firstChild,x);domUtils.remove(l),domUtils.isEmptyNode(x)&&domUtils.remove(x)}return c.moveToBookmark(h).setCursor(!1,!0),e.fireEvent("contentchange"),e.fireEvent("saveScene"),void domUtils.preventDefault(n)}}}),e.addListener("keyup",function(t,n){if(8==(n.keyCode||n.which)){var i,o=e.selection.getRange();(i=domUtils.findParentByTagName(o.startContainer,["ol","ul"],!0))&&d(i,i.tagName.toLowerCase(),s(i)||domUtils.getComputedStyle(i,"list-style-type"),!0)}}),e.addListener("tabkeydown",function(){var t=e.selection.getRange();function n(t){if(-1!=e.options.maxListLevel){for(var n=t.parentNode,i=0;/ [ou] l / i.test(n.tagName);) i++,
                            n = n.parentNode;
                            if (i >= e.options.maxListLevel) return ! 0
                        }
                    }
                    var i = domUtils.findParentByTagName(t.startContainer, "li", !0);
                    if (i) {
                        var r;
                        if (!t.collapsed) {
                            e.fireEvent("saveScene"),
                            r = t.createBookmark();
                            for (var a, l, u = 0,
                            m = domUtils.findParents(i); l = m[u++];) if (domUtils.isTagNode(l, "ol ul")) {
                                a = l;
                                break
                            }
                            var f = i;
                            if (r.end) for (; f && !(domUtils.getPosition(f, r.end) & domUtils.POSITION_FOLLOWING);) if (n(f)) f = domUtils.getNextDomNode(f, !1, null,
                            function(e) {
                                return e !== a
                            });
                            else {
                                v = f.parentNode,
                                b = e.document.createElement(v.tagName);
                                var p = (h = utils.indexOf(o[b.tagName], s(v) || domUtils.getComputedStyle(v, "list-style-type"))) + 1 == o[b.tagName].length ? 0 : h + 1;
                                for (c(b, g = o[b.tagName][p]), v.insertBefore(b, f); f && !(domUtils.getPosition(f, r.end) & domUtils.POSITION_FOLLOWING);) {
                                    if (i = f.nextSibling, b.appendChild(f), !i || domUtils.isTagNode(i, "ol ul")) {
                                        if (i) for (; (i = i.firstChild) && "LI" != i.tagName;);
                                        else i = domUtils.getNextDomNode(f, !1, null,
                                        function(e) {
                                            return e !== a
                                        });
                                        break
                                    }
                                    f = i
                                }
                                d(b, b.tagName.toLowerCase(), g),
                                f = i
                            }
                            return e.fireEvent("contentchange"),
                            t.moveToBookmark(r).select(),
                            !0
                        }
                        if (n(i)) return ! 0;
                        var h, g, v = i.parentNode,
                        b = e.document.createElement(v.tagName);
                        if (h = (h = utils.indexOf(o[b.tagName], s(v) || domUtils.getComputedStyle(v, "list-style-type"))) + 1 == o[b.tagName].length ? 0 : h + 1, c(b, g = o[b.tagName][h]), domUtils.isStartInblock(t)) return e.fireEvent("saveScene"),
                        r = t.createBookmark(),
                        v.insertBefore(b, i),
                        b.appendChild(i),
                        d(b, b.tagName.toLowerCase(), g),
                        e.fireEvent("contentchange"),
                        t.moveToBookmark(r).select(!0),
                        !0
                    }
                }),
                e.commands.insertorderedlist = e.commands.insertunorderedlist = {
                    execCommand: function(e, n) {
                        n || (n = "insertorderedlist" == e.toLowerCase() ? "decimal": "disc");
                        var i = this,
                        o = this.selection.getRange(),
                        r = function(e) {
                            return 1 == e.nodeType ? "br" != e.tagName.toLowerCase() : !domUtils.isWhitespace(e)
                        },
                        a = "insertorderedlist" == e.toLowerCase() ? "ol": "ul",
                        l = i.document.createDocumentFragment();
                        o.adjustmentBoundary().shrinkBoundary();
                        var u, f, p, h, g = o.createBookmark(!0),
                        v = m(i.document.getElementById(g.start)),
                        b = 0,
                        y = m(i.document.getElementById(g.end)),
                        C = 0;
                        if (v || y) {
                            if (v && (u = v.parentNode), g.end || (y = v), y && (f = y.parentNode), u === f) {
                                for (; v !== y;) {
                                    if (h = v, v = v.nextSibling, !domUtils.isBlockElm(h.firstChild)) {
                                        for (var x = i.document.createElement("p"); h.firstChild;) x.appendChild(h.firstChild);
                                        h.appendChild(x)
                                    }
                                    l.appendChild(h)
                                }
                                if (h = i.document.createElement("span"), u.insertBefore(h, y), !domUtils.isBlockElm(y.firstChild)) {
                                    for (x = i.document.createElement("p"); y.firstChild;) x.appendChild(y.firstChild);
                                    y.appendChild(x)
                                }
                                l.appendChild(y),
                                domUtils.breakParent(h, u),
                                domUtils.isEmptyNode(h.previousSibling) && domUtils.remove(h.previousSibling),
                                domUtils.isEmptyNode(h.nextSibling) && domUtils.remove(h.nextSibling);
                                var w = s(u) || domUtils.getComputedStyle(u, "list-style-type") || ("insertorderedlist" == e.toLowerCase() ? "decimal": "disc");
                                if (u.tagName.toLowerCase() == a && w == n) {
                                    for (var N = 0,
                                    E = i.document.createDocumentFragment(); D = l.firstChild;) if (domUtils.isTagNode(D, "ol ul")) E.appendChild(D);
                                    else for (; D.firstChild;) E.appendChild(D.firstChild),
                                    domUtils.remove(D);
                                    h.parentNode.insertBefore(E, h)
                                } else c(p = i.document.createElement(a), n),
                                p.appendChild(l),
                                h.parentNode.insertBefore(p, h);
                                return domUtils.remove(h),
                                p && d(p, a, n),
                                void o.moveToBookmark(g).select()
                            }
                            if (v) {
                                for (; v;) {
                                    if (h = v.nextSibling, domUtils.isTagNode(v, "ol ul")) l.appendChild(v);
                                    else {
                                        for (var T = i.document.createDocumentFragment(), U = 0; v.firstChild;) domUtils.isBlockElm(v.firstChild) && (U = 1),
                                        T.appendChild(v.firstChild);
                                        if (U) l.appendChild(T);
                                        else {
                                            var S = i.document.createElement("p");
                                            S.appendChild(T),
                                            l.appendChild(S)
                                        }
                                        domUtils.remove(v)
                                    }
                                    v = h
                                }
                                u.parentNode.insertBefore(l, u.nextSibling),
                                domUtils.isEmptyNode(u) ? (o.setStartBefore(u), domUtils.remove(u)) : o.setStartAfter(u),
                                b = 1
                            }
                            if (y && domUtils.inDoc(f, i.document)) {
                                for (v = f.firstChild; v && v !== y;) {
                                    if (h = v.nextSibling, domUtils.isTagNode(v, "ol ul")) l.appendChild(v);
                                    else {
                                        for (T = i.document.createDocumentFragment(), U = 0; v.firstChild;) domUtils.isBlockElm(v.firstChild) && (U = 1),
                                        T.appendChild(v.firstChild);
                                        U ? l.appendChild(T) : ((S = i.document.createElement("p")).appendChild(T), l.appendChild(S)),
                                        domUtils.remove(v)
                                    }
                                    v = h
                                }
                                var k = domUtils.createElement(i.document, "div", {
                                    tmpDiv: 1
                                });
                                domUtils.moveChild(y, k),
                                l.appendChild(k),
                                domUtils.remove(y),
                                f.parentNode.insertBefore(l, f),
                                o.setEndBefore(f),
                                domUtils.isEmptyNode(f) && domUtils.remove(f),
                                C = 1
                            }
                        }
                        b || o.setStartBefore(i.document.getElementById(g.start)),
                        g.end && !C && o.setEndAfter(i.document.getElementById(g.end)),
                        o.enlarge(!0,
                        function(e) {
                            return t[e.tagName]
                        }),
                        l = i.document.createDocumentFragment();
                        for (var _ = o.createBookmark(), B = domUtils.getNextDomNode(_.start, !1, r), A = o.cloneRange(), I = domUtils.isBlockElm; B && B !== _.end && domUtils.getPosition(B, _.end) & domUtils.POSITION_PRECEDING;) if (3 == B.nodeType || dtd.li[B.tagName]) {
                            if (1 == B.nodeType && dtd.$list[B.tagName]) {
                                for (; B.firstChild;) l.appendChild(B.firstChild);
                                R = domUtils.getNextDomNode(B, !1, r),
                                domUtils.remove(B),
                                B = R;
                                continue
                            }
                            for (R = B, A.setStartBefore(B); B && B !== _.end && (!I(B) || domUtils.isBookmarkNode(B));) R = B,
                            B = domUtils.getNextDomNode(B, !1, null,
                            function(e) {
                                return ! t[e.tagName]
                            });
                            B && I(B) && (h = domUtils.getNextDomNode(R, !1, r)) && domUtils.isBookmarkNode(h) && (B = domUtils.getNextDomNode(h, !1, r), R = h),
                            A.setEndAfter(R),
                            B = domUtils.getNextDomNode(R, !1, r);
                            var L = o.document.createElement("li");
                            if (L.appendChild(A.extractContents()), domUtils.isEmptyNode(L)) {
                                for (var R = o.document.createElement("p"); L.firstChild;) R.appendChild(L.firstChild);
                                L.appendChild(R)
                            }
                            l.appendChild(L)
                        } else B = domUtils.getNextDomNode(B, !0, r);
                        o.moveToBookmark(_).collapse(!0),
                        c(p = i.document.createElement(a), n),
                        p.appendChild(l),
                        o.insertNode(p),
                        d(p, a, n);
                        N = 0;
                        for (var D, O = domUtils.getElementsByTagName(p, "div"); D = O[N++];) D.getAttribute("tmpDiv") && domUtils.remove(D, !0);
                        o.moveToBookmark(g).select()
                    },
                    queryCommandState: function(e) {
                        for (var t, n = "insertorderedlist" == e.toLowerCase() ? "ol": "ul", i = this.selection.getStartElementPath(), o = 0; t = i[o++];) {
                            if ("TABLE" == t.nodeName) return 0;
                            if (n == t.nodeName.toLowerCase()) return 1
                        }
                        return 0
                    },
                    queryCommandValue: function(e) {
                        for (var t, n, i = "insertorderedlist" == e.toLowerCase() ? "ol": "ul", o = this.selection.getStartElementPath(), r = 0; n = o[r++];) {
                            if ("TABLE" == n.nodeName) {
                                t = null;
                                break
                            }
                            if (i == n.nodeName.toLowerCase()) {
                                t = n;
                                break
                            }
                        }
                        return t ? s(t) || domUtils.getComputedStyle(t, "list-style-type") : null
                    }
                }
            },
            sourceEditors = {
                textarea: function(e, t) {
                    var n = t.ownerDocument.createElement("textarea");
                    return n.style.cssText = "position:absolute;resize:none;width:100%;height:100%;border:0;padding:0;margin:0;overflow-y:auto;",
                    browser.ie && browser.version < 8 && (n.style.width = t.offsetWidth + "px", n.style.height = t.offsetHeight + "px", t.onresize = function() {
                        n.style.width = t.offsetWidth + "px",
                        n.style.height = t.offsetHeight + "px"
                    }),
                    t.appendChild(n),
                    {
                        setContent: function(e) {
                            n.value = e
                        },
                        getContent: function() {
                            return n.value
                        },
                        select: function() {
                            var e;
                            browser.ie ? ((e = n.createTextRange()).collapse(!0), e.select()) : (n.setSelectionRange(0, 0), n.focus())
                        },
                        dispose: function() {
                            t.removeChild(n),
                            t.onresize = null,
                            n = null,
                            t = null
                        }
                    }
                },
                codemirror: function(e, t) {
                    var n = window.CodeMirror(t, {
                        mode: "text/html",
                        tabMode: "indent",
                        lineNumbers: !0,
                        lineWrapping: !0
                    }),
                    i = n.getWrapperElement();
                    return i.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;font-family:consolas,"Courier new",monospace;font-size:13px;',
                    n.getScrollerElement().style.cssText = "position:absolute;left:0;top:0;width:100%;height:100%;",
                    n.refresh(),
                    {
                        getCodeMirror: function() {
                            return n
                        },
                        setContent: function(e) {
                            n.setValue(e)
                        },
                        getContent: function() {
                            return n.getValue()
                        },
                        select: function() {
                            n.focus()
                        },
                        dispose: function() {
                            t.removeChild(i),
                            i = null,
                            n = null
                        }
                    }
                }
            },
            UE.plugins.source = function() {
                var e, t, n, i, o, r = this,
                a = this.options,
                s = !1;
                a.sourceEditor = browser.ie ? "textarea": a.sourceEditor || "codemirror",
                r.setOpt({
                    sourceEditorFirst: !1
                }),
                r.commands.source = {
                    execCommand: function() {
                        if (s = !s) {
                            o = r.selection.getRange().createAddress(!1, !0),
                            r.undoManger && r.undoManger.save(!0),
                            browser.gecko && (r.body.contentEditable = !1),
                            n = r.iframe.style.cssText,
                            r.iframe.style.cssText += "position:absolute;left:-32768px;top:-32768px;",
                            r.fireEvent("beforegetcontent");
                            var l = UE.htmlparser(r.body.innerHTML);
                            r.filterOutputRule(l),
                            l.traversal(function(e) {
                                if ("element" == e.type) switch (e.tagName) {
                                case "td":
                                case "th":
                                case "caption":
                                    e.children && 1 == e.children.length && "br" == e.firstChild().tagName && e.removeChild(e.firstChild());
                                    break;
                                case "pre":
                                    e.innerText(e.innerText().replace(/&nbsp;/g, " "))
                                }
                            }),
                            r.fireEvent("aftergetcontent");
                            var d = l.toHtml(!0);
                            f = r.iframe.parentNode,
                            (e = sourceEditors["codemirror" == a.sourceEditor && window.CodeMirror ? "codemirror": "textarea"](r, f)).setContent(d),
                            t = r.setContent,
                            r.setContent = function(t) {
                                var n = UE.htmlparser(t);
                                r.filterInputRule(n),
                                t = n.toHtml(),
                                e.setContent(t)
                            },
                            setTimeout(function() {
                                e.select(),
                                r.addListener("fullscreenchanged",
                                function() {
                                    try {
                                        e.getCodeMirror().refresh()
                                    } catch(e) {}
                                })
                            }),
                            i = r.getContent,
                            r.getContent = function() {
                                return e.getContent() || "<p>" + (browser.ie ? "": "<br/>") + "</p>"
                            }
                        } else {
                            r.iframe.style.cssText = n;
                            var c = e.getContent() || "<p>" + (browser.ie ? "": "<br/>") + "</p>";
                            c = c.replace(new RegExp("[\\r\\t\\n ]*</?(\\w+)\\s*(?:[^>]*)>", "g"),
                            function(e, t) {
                                return t && !dtd.$inlineWithA[t.toLowerCase()] ? e.replace(/(^[\n\r\t ]*)|([\n\r\t ]*$)/g, "") : e.replace(/(^[\n\r\t]*)|([\n\r\t]*$)/g, "")
                            }),
                            r.setContent = t,
                            r.setContent(c),
                            e.dispose(),
                            e = null,
                            r.getContent = i;
                            var u = r.body.firstChild;
                            if (u || (r.body.innerHTML = "<p>" + (browser.ie ? "": "<br/>") + "</p>", u = r.body.firstChild), r.undoManger && r.undoManger.save(!0), browser.gecko) {
                                var m = document.createElement("input");
                                m.style.cssText = "position:absolute;left:0;top:-32768px",
                                document.body.appendChild(m),
                                r.body.contentEditable = !1,
                                setTimeout(function() {
                                    domUtils.setViewportOffset(m, {
                                        left: -32768,
                                        top: 0
                                    }),
                                    m.focus(),
                                    setTimeout(function() {
                                        r.body.contentEditable = !0,
                                        r.selection.getRange().moveToAddress(o).select(!0),
                                        domUtils.remove(m)
                                    })
                                })
                            } else try {
                                r.selection.getRange().moveToAddress(o).select(!0)
                            } catch(e) {}
                        }
                        var f;
                        this.fireEvent("sourcemodechanged", s)
                    },
                    queryCommandState: function() {
                        return 0 | s
                    },
                    notNeedUndo: 1
                };
                var l = r.queryCommandState;
                r.queryCommandState = function(e) {
                    return e = e.toLowerCase(),
                    s ? e in {
                        source: 1,
                        fullscreen: 1
                    } ? 1 : -1 : l.apply(this, arguments)
                },
                "codemirror" == a.sourceEditor && r.addListener("ready",
                function() {
                    utils.loadFile(document, {
                        src: a.codeMirrorJsUrl || a.UEDITOR_HOME_URL + "third-party/codemirror/codemirror.js",
                        tag: "script",
                        type: "text/javascript",
                        defer: "defer"
                    },
                    function() {
                        a.sourceEditorFirst && setTimeout(function() {
                            r.execCommand("source")
                        },
                        0)
                    }),
                    utils.loadFile(document, {
                        tag: "link",
                        rel: "stylesheet",
                        type: "text/css",
                        href: a.codeMirrorCssUrl || a.UEDITOR_HOME_URL + "third-party/codemirror/codemirror.css"
                    })
                })
            },
            UE.plugins.enterkey = function() {
                var e, t = this,
                n = t.options.enterTag;
                t.addListener("keyup",
                function(n, i) {
                    if (13 == (i.keyCode || i.which)) {
                        var o, r = t.selection.getRange(),
                        a = r.startContainer;
                        if (browser.ie) t.fireEvent("saveScene", !0, !0);
                        else {
                            if (/h\d/i.test(e)) {
                                if (browser.gecko) domUtils.findParentByTagName(a, ["h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "caption", "table"], !0) || (t.document.execCommand("formatBlock", !1, "<p>"), o = 1);
                                else if (1 == a.nodeType) {
                                    var s, l = t.document.createTextNode("");
                                    if (r.insertNode(l), s = domUtils.findParentByTagName(l, "div", !0)) {
                                        for (var d = t.document.createElement("p"); s.firstChild;) d.appendChild(s.firstChild);
                                        s.parentNode.insertBefore(d, s),
                                        domUtils.remove(s),
                                        r.setStartBefore(l).setCursor(),
                                        o = 1
                                    }
                                    domUtils.remove(l)
                                }
                                t.undoManger && o && t.undoManger.save()
                            }
                            browser.opera && r.select()
                        }
                    }
                }),
                t.addListener("keydown",
                function(i, o) {
                    if (13 == (o.keyCode || o.which)) {
                        if (t.fireEvent("beforeenterkeydown")) return void domUtils.preventDefault(o);
                        t.fireEvent("saveScene", !0, !0),
                        e = "";
                        var r = t.selection.getRange();
                        if (!r.collapsed) {
                            var a = r.startContainer,
                            s = r.endContainer,
                            l = domUtils.findParentByTagName(a, "td", !0),
                            d = domUtils.findParentByTagName(s, "td", !0);
                            if (l && d && l !== d || !l && d || l && !d) return void(o.preventDefault ? o.preventDefault() : o.returnValue = !1)
                        }
                        if ("p" == n) browser.ie || ((a = domUtils.findParentByTagName(r.startContainer, ["ol", "ul", "p", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "caption"], !0)) || browser.opera ? (e = a.tagName, "p" == a.tagName.toLowerCase() && browser.gecko && domUtils.removeDirtyAttr(a)) : (t.document.execCommand("formatBlock", !1, "<p>"), browser.gecko && (r = t.selection.getRange(), (a = domUtils.findParentByTagName(r.startContainer, "p", !0)) && domUtils.removeDirtyAttr(a))));
                        else if (o.preventDefault ? o.preventDefault() : o.returnValue = !1, r.collapsed) c = r.document.createElement("br"),
                        r.insertNode(c),
                        c.parentNode.lastChild === c ? (c.parentNode.insertBefore(c.cloneNode(!0), c), r.setStartBefore(c)) : r.setStartAfter(c),
                        r.setCursor();
                        else if (r.deleteContents(), 1 == (a = r.startContainer).nodeType && (a = a.childNodes[r.startOffset])) {
                            for (; 1 == a.nodeType;) {
                                if (dtd.$empty[a.tagName]) return r.setStartBefore(a).setCursor(),
                                t.undoManger && t.undoManger.save(),
                                !1;
                                if (!a.firstChild) {
                                    var c = r.document.createElement("br");
                                    return a.appendChild(c),
                                    r.setStart(a, 0).setCursor(),
                                    t.undoManger && t.undoManger.save(),
                                    !1
                                }
                                a = a.firstChild
                            }
                            a === r.startContainer.childNodes[r.startOffset] ? (c = r.document.createElement("br"), r.insertNode(c).setCursor()) : r.setStart(a, 0).setCursor()
                        } else c = r.document.createElement("br"),
                        r.insertNode(c).setStartAfter(c).setCursor()
                    }
                })
            },
            UE.plugins.keystrokes = function() {
                var e = this,
                t = !0;
                e.addListener("keydown",
                function(n, i) {
                    var o = i.keyCode || i.which,
                    r = e.selection.getRange();
                    if (!r.collapsed && !(i.ctrlKey || i.shiftKey || i.altKey || i.metaKey) && (o >= 65 && o <= 90 || o >= 48 && o <= 57 || o >= 96 && o <= 111 || {
                        13 : 1,
                        8 : 1,
                        46 : 1
                    } [o])) {
                        var a = r.startContainer;
                        if (domUtils.isFillChar(a) && r.setStartBefore(a), a = r.endContainer, domUtils.isFillChar(a) && r.setEndAfter(a), r.txtToElmBoundary(), r.endContainer && 1 == r.endContainer.nodeType && (a = r.endContainer.childNodes[r.endOffset]) && domUtils.isBr(a) && r.setEndAfter(a), 0 == r.startOffset && (a = r.startContainer, domUtils.isBoundaryNode(a, "firstChild") && (a = r.endContainer, r.endOffset == (3 == a.nodeType ? a.nodeValue.length: a.childNodes.length) && domUtils.isBoundaryNode(a, "lastChild")))) return e.fireEvent("saveScene"),
                        e.body.innerHTML = "<p>" + (browser.ie ? "": "<br/>") + "</p>",
                        r.setStart(e.body.firstChild, 0).setCursor(!1, !0),
                        void e._selectionChange()
                    }
                    if (o == keymap.Backspace) {
                        if (r = e.selection.getRange(), t = r.collapsed, e.fireEvent("delkeydown", i)) return;
                        var s, l;
                        if (r.collapsed && r.inFillChar() && (s = r.startContainer, domUtils.isFillChar(s) ? (r.setStartBefore(s).shrinkBoundary(!0).collapse(!0), domUtils.remove(s)) : (s.nodeValue = s.nodeValue.replace(new RegExp("^" + domUtils.fillChar), ""), r.startOffset--, r.collapse(!0).select(!0))), s = r.getClosedNode()) return e.fireEvent("saveScene"),
                        r.setStartBefore(s),
                        domUtils.remove(s),
                        r.setCursor(),
                        e.fireEvent("saveScene"),
                        void domUtils.preventDefault(i);
                        if (!browser.ie && (s = domUtils.findParentByTagName(r.startContainer, "table", !0), l = domUtils.findParentByTagName(r.endContainer, "table", !0), s && !l || !s && l || s !== l)) return void i.preventDefault()
                    }
                    if (o == keymap.Tab) {
                        var d = {
                            ol: 1,
                            ul: 1,
                            table: 1
                        };
                        if (e.fireEvent("tabkeydown", i)) return void domUtils.preventDefault(i);
                        var c = e.selection.getRange();
                        e.fireEvent("saveScene");
                        for (var u = 0,
                        m = "",
                        f = e.options.tabSize || 4,
                        p = e.options.tabNode || "&nbsp;"; u < f; u++) m += p;
                        var h = e.document.createElement("span");
                        if (h.innerHTML = m + domUtils.fillChar, c.collapsed) c.insertNode(h.cloneNode(!0).firstChild).setCursor(!0);
                        else {
                            var g = function(e) {
                                return domUtils.isBlockElm(e) && !d[e.tagName.toLowerCase()]
                            };
                            if (s = domUtils.findParent(c.startContainer, g, !0), l = domUtils.findParent(c.endContainer, g, !0), s && l && s === l) c.deleteContents(),
                            c.insertNode(h.cloneNode(!0).firstChild).setCursor(!0);
                            else {
                                var v = c.createBookmark();
                                c.enlarge(!0);
                                for (var b = c.createBookmark(), y = domUtils.getNextDomNode(b.start, !1, g); y && !(domUtils.getPosition(y, b.end) & domUtils.POSITION_FOLLOWING);) y.insertBefore(h.cloneNode(!0).firstChild, y.firstChild),
                                y = domUtils.getNextDomNode(y, !1, g);
                                c.moveToBookmark(b).moveToBookmark(v).select()
                            }
                        }
                        domUtils.preventDefault(i)
                    }
                    if (browser.gecko && 46 == o && (c = e.selection.getRange()).collapsed && (s = c.startContainer, domUtils.isEmptyBlock(s))) {
                        for (var C = s.parentNode; 1 == domUtils.getChildCount(C) && !domUtils.isBody(C);) s = C,
                        C = C.parentNode;
                        s === C.lastChild && i.preventDefault()
                    } else;
                }),
                e.addListener("keyup",
                function(e, n) {
                    var i;
                    if ((n.keyCode || n.which) == keymap.Backspace) {
                        if (this.fireEvent("delkeyup")) return;
                        if ((i = this.selection.getRange()).collapsed) {
                            if ((a = domUtils.findParentByTagName(i.startContainer, ["h1", "h2", "h3", "h4", "h5", "h6"], !0)) && domUtils.isEmptyBlock(a)) {
                                var o = a.previousSibling;
                                if (o && "TABLE" != o.nodeName) return domUtils.remove(a),
                                void i.setStartAtLast(o).setCursor(!1, !0);
                                var r = a.nextSibling;
                                if (r && "TABLE" != r.nodeName) return domUtils.remove(a),
                                void i.setStartAtFirst(r).setCursor(!1, !0)
                            }
                            if (domUtils.isBody(i.startContainer)) {
                                var a = domUtils.createElement(this.document, "p", {
                                    innerHTML: browser.ie ? domUtils.fillChar: "<br/>"
                                });
                                i.insertNode(a).setStart(a, 0).setCursor(!1, !0)
                            }
                        }
                        if (!t && (3 == i.startContainer.nodeType || 1 == i.startContainer.nodeType && domUtils.isEmptyBlock(i.startContainer))) if (browser.ie) {
                            var s = i.document.createElement("span");
                            i.insertNode(s).setStartBefore(s).collapse(!0),
                            i.select(),
                            domUtils.remove(s)
                        } else i.select()
                    }
                })
            },
            UE.plugins.fiximgclick = function() {
                var e, t = !1;
                function n() {
                    this.editor = null,
                    this.resizer = null,
                    this.cover = null,
                    this.doc = document,
                    this.prePos = {
                        x: 0,
                        y: 0
                    },
                    this.startPos = {
                        x: 0,
                        y: 0
                    }
                }
                return e = [[0, 0, -1, -1], [0, 0, 0, -1], [0, 0, 1, -1], [0, 0, -1, 0], [0, 0, 1, 0], [0, 0, -1, 1], [0, 0, 0, 1], [0, 0, 1, 1]],
                n.prototype = {
                    init: function(e) {
                        var t = this;
                        t.editor = e,
                        t.startPos = this.prePos = {
                            x: 0,
                            y: 0
                        },
                        t.dragId = -1;
                        var n = [],
                        o = t.cover = document.createElement("div"),
                        r = t.resizer = document.createElement("div");
                        for (o.id = t.editor.ui.id + "_imagescale_cover", o.style.cssText = "position:absolute;display:none;z-index:" + t.editor.options.zIndex + ";filter:alpha(opacity=0); opacity:0;background:#CCC;", domUtils.on(o, "mousedown click",
                        function() {
                            t.hide()
                        }), i = 0; i < 8; i++) n.push('<span class="edui-editor-imagescale-hand' + i + '"></span>');
                        r.id = t.editor.ui.id + "_imagescale",
                        r.className = "edui-editor-imagescale",
                        r.innerHTML = n.join(""),
                        r.style.cssText += ";display:none;border:1px solid #3b77ff;z-index:" + t.editor.options.zIndex + ";",
                        t.editor.ui.getDom().appendChild(o),
                        t.editor.ui.getDom().appendChild(r),
                        t.initStyle(),
                        t.initEvents()
                    },
                    initStyle: function() {
                        utils.cssRule("imagescale", ".edui-editor-imagescale{display:none;position:absolute;border:1px solid #38B2CE;cursor:hand;-webkit-box-sizing: content-box;-moz-box-sizing: content-box;box-sizing: content-box;}.edui-editor-imagescale span{position:absolute;width:6px;height:6px;overflow:hidden;font-size:0px;display:block;background-color:#3C9DD0;}.edui-editor-imagescale .edui-editor-imagescale-hand0{cursor:nw-resize;top:0;margin-top:-4px;left:0;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand1{cursor:n-resize;top:0;margin-top:-4px;left:50%;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand2{cursor:ne-resize;top:0;margin-top:-4px;left:100%;margin-left:-3px;}.edui-editor-imagescale .edui-editor-imagescale-hand3{cursor:w-resize;top:50%;margin-top:-4px;left:0;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand4{cursor:e-resize;top:50%;margin-top:-4px;left:100%;margin-left:-3px;}.edui-editor-imagescale .edui-editor-imagescale-hand5{cursor:sw-resize;top:100%;margin-top:-3px;left:0;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand6{cursor:s-resize;top:100%;margin-top:-3px;left:50%;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand7{cursor:se-resize;top:100%;margin-top:-3px;left:100%;margin-left:-3px;}")
                    },
                    initEvents: function() {
                        this.startPos.x = this.startPos.y = 0,
                        this.isDraging = !1
                    },
                    _eventHandler: function(e) {
                        var n = this;
                        switch (e.type) {
                        case "mousedown":
                            var i; - 1 != (i = e.target || e.srcElement).className.indexOf("edui-editor-imagescale-hand") && -1 == n.dragId && (n.dragId = i.className.slice( - 1), n.startPos.x = n.prePos.x = e.clientX, n.startPos.y = n.prePos.y = e.clientY, domUtils.on(n.doc, "mousemove", n.proxy(n._eventHandler, n)));
                            break;
                        case "mousemove":
                            -1 != n.dragId && (n.updateContainerStyle(n.dragId, {
                                x: e.clientX - n.prePos.x,
                                y: e.clientY - n.prePos.y
                            }), n.prePos.x = e.clientX, n.prePos.y = e.clientY, t = !0, n.updateTargetElement());
                            break;
                        case "mouseup":
                            -1 != n.dragId && (n.updateContainerStyle(n.dragId, {
                                x: e.clientX - n.prePos.x,
                                y: e.clientY - n.prePos.y
                            }), n.updateTargetElement(), n.target.parentNode && n.attachTo(n.target), n.dragId = -1),
                            domUtils.un(n.doc, "mousemove", n.proxy(n._eventHandler, n)),
                            t && (t = !1, n.editor.fireEvent("contentchange"))
                        }
                    },
                    updateTargetElement: function() {
                        var e = this;
                        domUtils.setStyles(e.target, {
                            width: e.resizer.style.width,
                            height: e.resizer.style.height
                        }),
                        e.target.width = parseInt(e.resizer.style.width),
                        e.target.height = parseInt(e.resizer.style.height),
                        e.attachTo(e.target)
                    },
                    updateContainerStyle: function(t, n) {
                        var i, o = this,
                        r = o.resizer;
                        0 != e[t][0] && (i = parseInt(r.style.left) + n.x, r.style.left = o._validScaledProp("left", i) + "px"),
                        0 != e[t][1] && (i = parseInt(r.style.top) + n.y, r.style.top = o._validScaledProp("top", i) + "px"),
                        0 != e[t][2] && (i = r.clientWidth + e[t][2] * n.x, r.style.width = o._validScaledProp("width", i) + "px"),
                        0 != e[t][3] && (i = r.clientHeight + e[t][3] * n.y, r.style.height = o._validScaledProp("height", i) + "px")
                    },
                    _validScaledProp: function(e, t) {
                        var n = this.resizer,
                        i = document;
                        switch (t = isNaN(t) ? 0 : t, e) {
                        case "left":
                            return t < 0 ? 0 : t + n.clientWidth > i.clientWidth ? i.clientWidth - n.clientWidth: t;
                        case "top":
                            return t < 0 ? 0 : t + n.clientHeight > i.clientHeight ? i.clientHeight - n.clientHeight: t;
                        case "width":
                            return t <= 0 ? 1 : t + n.offsetLeft > i.clientWidth ? i.clientWidth - n.offsetLeft: t;
                        case "height":
                            return t <= 0 ? 1 : t + n.offsetTop > i.clientHeight ? i.clientHeight - n.offsetTop: t
                        }
                    },
                    hideCover: function() {
                        this.cover.style.display = "none"
                    },
                    showCover: function() {
                        var e = this,
                        t = domUtils.getXY(e.editor.ui.getDom()),
                        n = domUtils.getXY(e.editor.iframe);
                        domUtils.setStyles(e.cover, {
                            width: e.editor.iframe.offsetWidth + "px",
                            height: e.editor.iframe.offsetHeight + "px",
                            top: n.y - t.y + "px",
                            left: n.x - t.x + "px",
                            position: "absolute",
                            display: ""
                        })
                    },
                    show: function(e) {
                        var t = this;
                        t.resizer.style.display = "block",
                        e && t.attachTo(e),
                        domUtils.on(this.resizer, "mousedown", t.proxy(t._eventHandler, t)),
                        domUtils.on(t.doc, "mouseup", t.proxy(t._eventHandler, t)),
                        t.showCover(),
                        t.editor.fireEvent("afterscaleshow", t),
                        t.editor.fireEvent("saveScene")
                    },
                    hide: function() {
                        var e = this;
                        e.hideCover(),
                        e.resizer.style.display = "none",
                        domUtils.un(e.resizer, "mousedown", e.proxy(e._eventHandler, e)),
                        domUtils.un(e.doc, "mouseup", e.proxy(e._eventHandler, e)),
                        e.editor.fireEvent("afterscalehide", e)
                    },
                    proxy: function(e, t) {
                        return function(n) {
                            return e.apply(t || this, arguments)
                        }
                    },
                    attachTo: function(e) {
                        var t = this.target = e,
                        n = this.resizer,
                        i = domUtils.getXY(t),
                        o = domUtils.getXY(this.editor.iframe),
                        r = domUtils.getXY(n.parentNode);
                        domUtils.setStyles(n, {
                            width: t.width + "px",
                            height: t.height + "px",
                            left: o.x + i.x - this.editor.document.body.scrollLeft - r.x - parseInt(n.style.borderLeftWidth) + "px",
                            top: o.y + i.y - this.editor.document.body.scrollTop - r.y - parseInt(n.style.borderTopWidth) + "px"
                        })
                    }
                },
                function() {
                    var e, t = this;
                    t.setOpt("imageScaleEnabled", !0),
                    !browser.ie && t.options.imageScaleEnabled && t.addListener("click",
                    function(i, o) {
                        var r = t.selection.getRange().getClosedNode();
                        if (r && "IMG" == r.tagName && "false" != t.body.contentEditable) {
                            if ( - 1 != r.className.indexOf("edui-faked-music") || r.getAttribute("anchorname") || domUtils.hasClass(r, "loadingclass") || domUtils.hasClass(r, "loaderrorclass")) return;
                            if (!e) { (e = new n).init(t),
                                t.ui.getDom().appendChild(e.resizer);
                                var a, s = function(n) {
                                    e.hide(),
                                    e.target && t.selection.getRange().selectNode(e.target).select()
                                },
                                l = function(e) {
                                    var t = e.target || e.srcElement; ! t || void 0 !== t.className && -1 != t.className.indexOf("edui-editor-imagescale") || s()
                                };
                                t.addListener("afterscaleshow",
                                function(e) {
                                    t.addListener("beforekeydown", s),
                                    t.addListener("beforemousedown", l),
                                    domUtils.on(document, "keydown", s),
                                    domUtils.on(document, "mousedown", l),
                                    t.selection.getNative().removeAllRanges()
                                }),
                                t.addListener("afterscalehide",
                                function(n) {
                                    t.removeListener("beforekeydown", s),
                                    t.removeListener("beforemousedown", l),
                                    domUtils.un(document, "keydown", s),
                                    domUtils.un(document, "mousedown", l);
                                    var i = e.target;
                                    i.parentNode && t.selection.getRange().selectNode(i).select()
                                }),
                                domUtils.on(e.resizer, "mousedown",
                                function(n) {
                                    t.selection.getNative().removeAllRanges();
                                    var i = n.target || n.srcElement;
                                    i && -1 == i.className.indexOf("edui-editor-imagescale-hand") && (a = setTimeout(function() {
                                        e.hide(),
                                        e.target && t.selection.getRange().selectNode(i).select()
                                    },
                                    200))
                                }),
                                domUtils.on(e.resizer, "mouseup",
                                function(e) {
                                    var t = e.target || e.srcElement;
                                    t && -1 == t.className.indexOf("edui-editor-imagescale-hand") && clearTimeout(a)
                                })
                            }
                            e.show(r)
                        } else e && "none" != e.resizer.style.display && e.hide()
                    }),
                    browser.webkit && t.addListener("click",
                    function(e, n) {
                        "IMG" == n.target.tagName && "false" != t.body.contentEditable && new dom.Range(t.document).selectNode(n.target).select()
                    })
                }
            } (),
            UE.plugin.register("autolink",
            function() {
                return browser.ie ? {}: {
                    bindEvents: {
                        reset: function() {
                            0
                        },
                        keydown: function(e, t) {
                            var n = this,
                            i = t.keyCode || t.which;
                            if (32 == i || 13 == i) {
                                for (var o, r, a = n.selection.getNative(), s = a.getRangeAt(0).cloneRange(), l = s.startContainer; 1 == l.nodeType && s.startOffset > 0 && (l = s.startContainer.childNodes[s.startOffset - 1]);) s.setStart(l, 1 == l.nodeType ? l.childNodes.length: l.nodeValue.length),
                                s.collapse(!0),
                                l = s.startContainer;
                                do {
                                    if (0 == s.startOffset) {
                                        for (l = s.startContainer.previousSibling; l && 1 == l.nodeType;) l = l.lastChild;
                                        if (!l || domUtils.isFillChar(l)) break;
                                        o = l.nodeValue.length
                                    } else l = s.startContainer, o = s.startOffset;
                                    s.setStart(l, o - 1), r = s.toString().charCodeAt(0)
                                } while ( 160 != r && 32 != r );
                                if (s.toString().replace(new RegExp(domUtils.fillChar, "g"), "").match(/(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i)) {
                                    for (; s.toString().length && !/^(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i.test(s.toString());) try {
                                        s.setStart(s.startContainer, s.startOffset + 1)
                                    } catch(e) {
                                        for (l = s.startContainer; ! (next = l.nextSibling);) {
                                            if (domUtils.isBody(l)) return;
                                            l = l.parentNode
                                        }
                                        s.setStart(next, 0)
                                    }
                                    if (domUtils.findParentByTagName(s.startContainer, "a", !0)) return;
                                    var d, c = n.document.createElement("a"),
                                    u = n.document.createTextNode(" ");
                                    n.undoManger && n.undoManger.save(),
                                    c.appendChild(s.extractContents()),
                                    c.href = c.innerHTML = c.innerHTML.replace(/<[^>]+>/g, ""),
                                    d = c.getAttribute("href").replace(new RegExp(domUtils.fillChar, "g"), ""),
                                    d = /^(?:https?:\/\/)/gi.test(d) ? d: "http://" + d,
                                    c.setAttribute("_src", utils.html(d)),
                                    c.href = utils.html(d),
                                    s.insertNode(c),
                                    c.parentNode.insertBefore(u, c.nextSibling),
                                    s.setStart(u, 0),
                                    s.collapse(!0),
                                    a.removeAllRanges(),
                                    a.addRange(s),
                                    n.undoManger && n.undoManger.save()
                                }
                            }
                        }
                    }
                }
            },
            function() {
                var e = {
                    37 : 1,
                    38 : 1,
                    39 : 1,
                    40 : 1,
                    13 : 1,
                    32 : 1
                };
                browser.ie && this.addListener("keyup",
                function(t, n) {
                    var i = n.keyCode;
                    if (e[i]) {
                        var o = this.selection.getRange(),
                        r = o.startContainer;
                        if (13 == i) {
                            for (; r && !domUtils.isBody(r) && !domUtils.isBlockElm(r);) r = r.parentNode;
                            var a;
                            if (r && !domUtils.isBody(r) && "P" == r.nodeName) if ((a = r.previousSibling) && 1 == a.nodeType)(a = function(e) {
                                if (3 == e.nodeType) return null;
                                if ("A" == e.nodeName) return e;
                                for (var t = e.lastChild; t;) {
                                    if ("A" == t.nodeName) return t;
                                    if (3 == t.nodeType) {
                                        if (domUtils.isWhitespace(t)) {
                                            t = t.previousSibling;
                                            continue
                                        }
                                        return null
                                    }
                                    t = t.lastChild
                                }
                            } (a)) && !a.getAttribute("_href") && domUtils.remove(a, !0)
                        } else if (32 == i) 3 == r.nodeType && /^\s$/.test(r.nodeValue) && (r = r.previousSibling) && "A" == r.nodeName && !r.getAttribute("_href") && domUtils.remove(r, !0);
                        else if ((r = domUtils.findParentByTagName(r, "a", !0)) && !r.getAttribute("_href")) {
                            var s = o.createBookmark();
                            domUtils.remove(r, !0),
                            o.moveToBookmark(s).select(!0)
                        }
                    }
                })
            }),
            UE.plugins.autoheight = function() {
                var e = this;
                if (e.autoHeightEnabled = !1 !== e.options.autoHeightEnabled, e.autoHeightEnabled) {
                    var t, n, i, o, r = 0,
                    a = e.options;
                    e.addListener("fullscreenchanged",
                    function(e, t) {
                        o = t
                    }),
                    e.addListener("destroy",
                    function() {
                        e.removeListener("contentchange afterinserthtml keyup mouseup", s)
                    }),
                    e.enableAutoHeight = function() {
                        var e = this;
                        if (e.autoHeightEnabled) {
                            var n = e.document;
                            e.autoHeightEnabled = !0,
                            t = n.body.style.overflowY,
                            n.body.style.overflowY = "hidden",
                            e.addListener("contentchange afterinserthtml keyup mouseup", s),
                            setTimeout(function() {
                                s.call(e)
                            },
                            browser.gecko ? 100 : 0),
                            e.fireEvent("autoheightchanged", e.autoHeightEnabled)
                        }
                    },
                    e.disableAutoHeight = function() {
                        e.body.style.overflowY = t || "",
                        e.removeListener("contentchange", s),
                        e.removeListener("keyup", s),
                        e.removeListener("mouseup", s),
                        e.autoHeightEnabled = !1,
                        e.fireEvent("autoheightchanged", e.autoHeightEnabled)
                    },
                    e.on("setHeight",
                    function() {
                        e.disableAutoHeight()
                    }),
                    e.addListener("ready",
                    function() {
                        var t, n;
                        e.enableAutoHeight(),
                        domUtils.on(browser.ie ? e.body: e.document, browser.webkit ? "dragover": "drop",
                        function() {
                            clearTimeout(t),
                            t = setTimeout(function() {
                                s.call(e)
                            },
                            100)
                        }),
                        window.onscroll = function() {
                            null === n ? n = this.scrollY: 0 == this.scrollY && 0 != n && (e.window.scrollTo(0, 0), n = null)
                        }
                    })
                }
                function s() {
                    var e = this;
                    clearTimeout(i),
                    o || (!e.queryCommandState || e.queryCommandState && 1 != e.queryCommandState("source")) && (i = setTimeout(function() {
                        for (var t = e.body.lastChild; t && 1 != t.nodeType;) t = t.previousSibling;
                        t && 1 == t.nodeType && (t.style.clear = "both", (n = Math.max(domUtils.getXY(t).y + t.offsetHeight + 25, Math.max(a.minFrameHeight, a.initialFrameHeight))) != r && (n !== parseInt(e.iframe.parentNode.style.height) && (e.iframe.parentNode.style.height = n + "px"), e.body.style.height = n + "px", r = n), domUtils.removeStyle(t, "clear"))
                    },
                    50))
                }
            },
            UE.plugins.autofloat = function() {
                var e = this,
                t = e.getLang();
                e.setOpt({
                    topOffset: 0
                });
                var n = !1 !== e.options.autoFloatEnabled,
                i = e.options.topOffset;
                if (n) {
                    var o, r, a, s, l = UE.ui.uiUtils,
                    d = browser.ie && browser.version <= 6,
                    c = browser.quirks,
                    u = document.createElement("div"),
                    m = !0,
                    f = utils.defer(function() {
                        h()
                    },
                    browser.ie ? 200 : 100, !0);
                    e.addListener("destroy",
                    function() {
                        domUtils.un(window, ["scroll", "resize"], h),
                        e.removeListener("keydown", f)
                    }),
                    e.addListener("ready",
                    function() {
                        if (UE.ui || (alert(t.autofloatMsg), 0)) {
                            if (!e.ui) return;
                            s = l.getClientRect,
                            r = e.ui.getDom("toolbarbox"),
                            a = s(r).top,
                            o = r.style.cssText,
                            u.style.height = r.offsetHeight + "px",
                            d && ((n = document.body.style).backgroundImage = 'url("about:blank")', n.backgroundAttachment = "fixed"),
                            domUtils.on(window, ["scroll", "resize"], h),
                            e.addListener("keydown", f),
                            e.addListener("beforefullscreenchange",
                            function(e, t) {
                                t && p()
                            }),
                            e.addListener("fullscreenchanged",
                            function(e, t) {
                                t || h()
                            }),
                            e.addListener("sourcemodechanged",
                            function(e, t) {
                                setTimeout(function() {
                                    h()
                                },
                                0)
                            }),
                            e.addListener("clearDoc",
                            function() {
                                setTimeout(function() {
                                    h()
                                },
                                0)
                            })
                        }
                        var n
                    })
                }
                function p() {
                    m = !0,
                    u.parentNode && u.parentNode.removeChild(u),
                    r.style.cssText = o
                }
                function h() {
                    var t, n, o, l = s(e.container),
                    f = e.options.toolbarTopOffset || 0;
                    l.top < 0 && l.bottom - r.offsetHeight > f ? (t = domUtils.getXY(r), n = domUtils.getComputedStyle(r, "position"), o = domUtils.getComputedStyle(r, "left"), r.style.width = r.offsetWidth + "px", r.style.zIndex = 1 * e.options.zIndex + 1, r.parentNode.insertBefore(u, r), d || c && browser.ie ? ("absolute" != r.style.position && (r.style.position = "absolute"), r.style.top = (document.body.scrollTop || document.documentElement.scrollTop) - a + i + "px") : (browser.ie7Compat && m && (m = !1, r.style.left = domUtils.getXY(r).x - document.documentElement.getBoundingClientRect().left + 2 + "px"), "fixed" != r.style.position && (r.style.position = "fixed", r.style.top = i + "px", ("absolute" == n || "relative" == n) && parseFloat(o) && (r.style.left = t.x + "px")))) : p()
                }
            },
            UE.plugins.video = function() {
                var e = this;
                function t(t, n, i, o, r, a, s) {
                    var l;
                    switch (t = utils.unhtmlForUrl(t), r = utils.unhtml(r), a = utils.unhtml(a), n = parseInt(n, 10) || 0, i = parseInt(i, 10) || 0, s) {
                    case "image":
                        l = "<img " + (o ? 'id="' + o + '"': "") + ' width="' + n + '" height="' + i + '" _url="' + t + '" class="' + a.replace(/\bvideo-js\b/, "") + '" src="' + e.options.UEDITOR_HOME_URL + 'themes/default/images/spacer.gif" style="background:url(' + e.options.UEDITOR_HOME_URL + "themes/default/images/videologo.gif) no-repeat center center; border:1px solid gray;" + (r ? "float:" + r + ";": "") + '" />';
                        break;
                    case "embed":
                        l = '<embed type="application/x-shockwave-flash" class="' + a + '" pluginspage="http://www.macromedia.com/go/getflashplayer" src="' + utils.html(t) + '" width="' + n + '" height="' + i + '"' + (r ? ' style="float:' + r + '"': "") + ' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >';
                        break;
                    case "video":
                        var d = t.substr(t.lastIndexOf(".") + 1);
                        "ogv" == d && (d = "ogg"),
                        l = "<video" + (o ? ' id="' + o + '"': "") + ' class="' + a + ' video-js" ' + (r ? ' style="float:' + r + '"': "") + ' controls preload="none" width="' + n + '" height="' + i + '" src="' + t + '" data-setup="{}"><source src="' + t + '" type="video/' + d + '" /></video>'
                    }
                    return l
                }
                function n(e, n) {
                    utils.each(e.getNodesByTagName(n ? "img": "embed video"),
                    function(e) {
                        var i = e.getAttr("class");
                        if (i && -1 != i.indexOf("edui-faked-video")) {
                            var o = t(n ? e.getAttr("_url") : e.getAttr("src"), e.getAttr("width"), e.getAttr("height"), null, e.getStyle("float") || "", i, n ? "embed": "image");
                            e.parentNode.replaceChild(UE.uNode.createElement(o), e)
                        }
                        if (i && -1 != i.indexOf("edui-upload-video")) {
                            o = t(n ? e.getAttr("_url") : e.getAttr("src"), e.getAttr("width"), e.getAttr("height"), null, e.getStyle("float") || "", i, n ? "video": "image");
                            e.parentNode.replaceChild(UE.uNode.createElement(o), e)
                        }
                    })
                }
                e.addOutputRule(function(e) {
                    n(e, !0)
                }),
                e.addInputRule(function(e) {
                    n(e)
                }),
                e.commands.insertvideo = {
                    execCommand: function(n, i, o) {
                        for (var r, a, s = [], l = 0, d = (i = utils.isArray(i) ? i: [i]).length; l < d; l++) a = i[l],
                        r = "upload" == o ? "video-js vjs-default-skin": "edui-faked-video",
                        s.push(t(a.url, a.width || 420, a.height || 280, "tmpVedio" + l, null, r, "video"));
                        e.execCommand("inserthtml", s.join(""), !0);
                        var c = this.selection.getRange();
                        for (l = 0, d = i.length; l < d; l++) {
                            var u = this.document.getElementById("tmpVedio" + l);
                            domUtils.removeAttributes(u, "id"),
                            c.selectNode(u).select(),
                            e.execCommand("imagefloat", i[l].align)
                        }
                    },
                    queryCommandState: function() {
                        var t = e.selection.getRange().getClosedNode();
                        return t && ("edui-faked-video" == t.className || -1 != t.className.indexOf("edui-upload-video")) ? 1 : 0
                    }
                }
            },
            function() {
                var e = UE.UETable = function(e) {
                    this.table = e,
                    this.indexTable = [],
                    this.selectedTds = [],
                    this.cellsRange = {},
                    this.update(e)
                };
                e.removeSelectedClass = function(e) {
                    utils.each(e,
                    function(e) {
                        domUtils.removeClasses(e, "selectTdClass")
                    })
                },
                e.addSelectedClass = function(e) {
                    utils.each(e,
                    function(e) {
                        domUtils.addClass(e, "selectTdClass")
                    })
                },
                e.isEmptyBlock = function(e) {
                    var t = new RegExp(domUtils.fillChar, "g");
                    if (e[browser.ie ? "innerText": "textContent"].replace(/^\s*$/, "").replace(t, "").length > 0) return 0;
                    for (var n in dtd.$isNotEmpty) if (dtd.$isNotEmpty.hasOwnProperty(n) && e.getElementsByTagName(n).length) return 0;
                    return 1
                },
                e.getWidth = function(e) {
                    return e ? parseInt(domUtils.getComputedStyle(e, "width"), 10) : 0
                },
                e.getTableCellAlignState = function(e) { ! utils.isArray(e) && (e = [e]);
                    var t = {},
                    n = ["align", "valign"],
                    i = null,
                    o = !0;
                    return utils.each(e,
                    function(e) {
                        return utils.each(n,
                        function(n) {
                            if (i = e.getAttribute(n), !t[n] && i) t[n] = i;
                            else if (!t[n] || i !== t[n]) return o = !1,
                            !1
                        }),
                        o
                    }),
                    o ? t: null
                },
                e.getTableItemsByRange = function(e) {
                    var t = e.selection.getStart();
                    t && t.id && 0 === t.id.indexOf("_baidu_bookmark_start_") && t.nextSibling && (t = t.nextSibling);
                    var n = t && domUtils.findParentByTagName(t, ["td", "th"], !0),
                    i = n && n.parentNode,
                    o = t && domUtils.findParentByTagName(t, "caption", !0);
                    return {
                        cell: n,
                        tr: i,
                        table: o ? o.parentNode: i && i.parentNode.parentNode,
                        caption: o
                    }
                },
                e.getUETableBySelected = function(t) {
                    var n = e.getTableItemsByRange(t).table;
                    return n && n.ueTable && n.ueTable.selectedTds.length ? n.ueTable: null
                },
                e.getDefaultValue = function(e, t) {
                    var n, i, o, r, a = {
                        thin: "0px",
                        medium: "1px",
                        thick: "2px"
                    };
                    if (t) return s = t.getElementsByTagName("td")[0],
                    r = domUtils.getComputedStyle(t, "border-left-width"),
                    n = parseInt(a[r] || r, 10),
                    r = domUtils.getComputedStyle(s, "padding-left"),
                    i = parseInt(a[r] || r, 10),
                    r = domUtils.getComputedStyle(s, "border-left-width"),
                    {
                        tableBorder: n,
                        tdPadding: i,
                        tdBorder: o = parseInt(a[r] || r, 10)
                    }; (t = e.document.createElement("table")).insertRow(0).insertCell(0).innerHTML = "xxx",
                    e.body.appendChild(t);
                    var s = t.getElementsByTagName("td")[0];
                    return r = domUtils.getComputedStyle(t, "border-left-width"),
                    n = parseInt(a[r] || r, 10),
                    r = domUtils.getComputedStyle(s, "padding-left"),
                    i = parseInt(a[r] || r, 10),
                    r = domUtils.getComputedStyle(s, "border-left-width"),
                    o = parseInt(a[r] || r, 10),
                    domUtils.remove(t),
                    {
                        tableBorder: n,
                        tdPadding: i,
                        tdBorder: o
                    }
                },
                e.getUETable = function(t) {
                    var n = t.tagName.toLowerCase();
                    return (t = "td" == n || "th" == n || "caption" == n ? domUtils.findParentByTagName(t, "table", !0) : t).ueTable || (t.ueTable = new e(t)),
                    t.ueTable
                },
                e.cloneCell = function(e, t, n) {
                    if (!e || utils.isString(e)) return this.table.ownerDocument.createElement(e || "td");
                    var i = domUtils.hasClass(e, "selectTdClass");
                    i && domUtils.removeClasses(e, "selectTdClass");
                    var o = e.cloneNode(!0);
                    return t && (o.rowSpan = o.colSpan = 1),
                    !n && domUtils.removeAttributes(o, "width height"),
                    !n && domUtils.removeAttributes(o, "style"),
                    o.style.borderLeftStyle = "",
                    o.style.borderTopStyle = "",
                    o.style.borderLeftColor = e.style.borderRightColor,
                    o.style.borderLeftWidth = e.style.borderRightWidth,
                    o.style.borderTopColor = e.style.borderBottomColor,
                    o.style.borderTopWidth = e.style.borderBottomWidth,
                    i && domUtils.addClass(e, "selectTdClass"),
                    o
                },
                e.prototype = {
                    getMaxRows: function() {
                        for (var e, t = this.table.rows,
                        n = 1,
                        i = 0; e = t[i]; i++) {
                            for (var o, r = 1,
                            a = 0; o = e.cells[a++];) r = Math.max(o.rowSpan || 1, r);
                            n = Math.max(r + i, n)
                        }
                        return n
                    },
                    getMaxCols: function() {
                        for (var e, t = this.table.rows,
                        n = 0,
                        i = {},
                        o = 0; e = t[o]; o++) {
                            for (var r, a = 0,
                            s = 0; r = e.cells[s++];) if (a += r.colSpan || 1, r.rowSpan && r.rowSpan > 1) for (var l = 1; l < r.rowSpan; l++) i["row_" + (o + l)] ? i["row_" + (o + l)]++:i["row_" + (o + l)] = r.colSpan || 1;
                            a += i["row_" + o] || 0,
                            n = Math.max(a, n)
                        }
                        return n
                    },
                    getCellColIndex: function(e) {},
                    getHSideCell: function(e, t) {
                        try {
                            var n, i, o = this.getCellInfo(e),
                            r = this.selectedTds.length,
                            a = this.cellsRange;
                            return ! t && (r ? !a.beginColIndex: !o.colIndex) || t && (r ? a.endColIndex == this.colsNum - 1 : o.colIndex == this.colsNum - 1) ? null: (n = r ? a.beginRowIndex: o.rowIndex, i = t ? r ? a.endColIndex + 1 : o.colIndex + 1 : r ? a.beginColIndex - 1 : o.colIndex < 1 ? 0 : o.colIndex - 1, this.getCell(this.indexTable[n][i].rowIndex, this.indexTable[n][i].cellIndex))
                        } catch(e) {}
                    },
                    getTabNextCell: function(e, t) {
                        var n, i = this.getCellInfo(e),
                        o = t || i.rowIndex,
                        r = i.colIndex + 1 + (i.colSpan - 1);
                        try {
                            n = this.getCell(this.indexTable[o][r].rowIndex, this.indexTable[o][r].cellIndex)
                        } catch(e) {
                            try {
                                o = 1 * o + 1,
                                r = 0,
                                n = this.getCell(this.indexTable[o][r].rowIndex, this.indexTable[o][r].cellIndex)
                            } catch(e) {}
                        }
                        return n
                    },
                    getVSideCell: function(e, t, n) {
                        try {
                            var i, o, r = this.getCellInfo(e),
                            a = this.selectedTds.length && !n,
                            s = this.cellsRange;
                            return ! t && 0 == r.rowIndex || t && (a ? s.endRowIndex == this.rowsNum - 1 : r.rowIndex + r.rowSpan > this.rowsNum - 1) ? null: (i = t ? a ? s.endRowIndex + 1 : r.rowIndex + r.rowSpan: a ? s.beginRowIndex - 1 : r.rowIndex - 1, o = a ? s.beginColIndex: r.colIndex, this.getCell(this.indexTable[i][o].rowIndex, this.indexTable[i][o].cellIndex))
                        } catch(e) {}
                    },
                    getSameEndPosCells: function(e, t) {
                        try {
                            for (var n = "x" === t.toLowerCase(), i = domUtils.getXY(e)[n ? "x": "y"] + e["offset" + (n ? "Width": "Height")], o = this.table.rows, r = null, a = [], s = 0; s < this.rowsNum; s++) {
                                r = o[s].cells;
                                for (var l, d = 0; l = r[d++];) {
                                    var c = domUtils.getXY(l)[n ? "x": "y"] + l["offset" + (n ? "Width": "Height")];
                                    if (c > i && n) break;
                                    if ((e == l || i == c) && (1 == l[n ? "colSpan": "rowSpan"] && a.push(l), n)) break
                                }
                            }
                            return a
                        } catch(e) {}
                    },
                    setCellContent: function(e, t) {
                        e.innerHTML = t || (browser.ie ? domUtils.fillChar: "<br />")
                    },
                    cloneCell: e.cloneCell,
                    getSameStartPosXCells: function(e) {
                        try {
                            for (var t, n = domUtils.getXY(e).x + e.offsetWidth, i = this.table.rows, o = [], r = 0; r < this.rowsNum; r++) {
                                t = i[r].cells;
                                for (var a, s = 0; a = t[s++];) {
                                    var l = domUtils.getXY(a).x;
                                    if (l > n) break;
                                    if (l == n && 1 == a.colSpan) {
                                        o.push(a);
                                        break
                                    }
                                }
                            }
                            return o
                        } catch(e) {}
                    },
                    update: function(e) {
                        this.table = e || this.table,
                        this.selectedTds = [],
                        this.cellsRange = {},
                        this.indexTable = [];
                        for (var t = this.table.rows,
                        n = this.getMaxRows(), i = n - t.length, o = this.getMaxCols(); i--;) this.table.insertRow(t.length);
                        this.rowsNum = n,
                        this.colsNum = o;
                        for (var r = 0,
                        a = t.length; r < a; r++) this.indexTable[r] = new Array(o);
                        for (var s, l = 0; s = t[l]; l++) for (var d, c = 0,
                        u = s.cells; d = u[c]; c++) {
                            d.rowSpan > n && (d.rowSpan = n);
                            for (var m = c,
                            f = d.rowSpan || 1,
                            p = d.colSpan || 1; this.indexTable[l][m];) m++;
                            for (var h = 0; h < f; h++) for (var g = 0; g < p; g++) this.indexTable[l + h][m + g] = {
                                rowIndex: l,
                                cellIndex: c,
                                colIndex: m,
                                rowSpan: f,
                                colSpan: p
                            }
                        }
                        for (h = 0; h < n; h++) for (g = 0; g < o; g++) void 0 === this.indexTable[h][g] && (d = (d = (s = t[h]).cells[s.cells.length - 1]) ? d.cloneNode(!0) : this.table.ownerDocument.createElement("td"), this.setCellContent(d), 1 !== d.colSpan && (d.colSpan = 1), 1 !== d.rowSpan && (d.rowSpan = 1), s.appendChild(d), this.indexTable[h][g] = {
                            rowIndex: h,
                            cellIndex: d.cellIndex,
                            colIndex: g,
                            rowSpan: 1,
                            colSpan: 1
                        });
                        var v = domUtils.getElementsByTagName(this.table, "td"),
                        b = [];
                        if (utils.each(v,
                        function(e) {
                            domUtils.hasClass(e, "selectTdClass") && b.push(e)
                        }), b.length) {
                            var y = b[0],
                            C = b[b.length - 1],
                            x = this.getCellInfo(y),
                            w = this.getCellInfo(C);
                            this.selectedTds = b,
                            this.cellsRange = {
                                beginRowIndex: x.rowIndex,
                                beginColIndex: x.colIndex,
                                endRowIndex: w.rowIndex + w.rowSpan - 1,
                                endColIndex: w.colIndex + w.colSpan - 1
                            }
                        }
                        if (!domUtils.hasClass(this.table.rows[0], "firstRow")) {
                            domUtils.addClass(this.table.rows[0], "firstRow");
                            for (r = 1; r < this.table.rows.length; r++) domUtils.removeClasses(this.table.rows[r], "firstRow")
                        }
                    },
                    getCellInfo: function(e) {
                        if (e) for (var t = e.cellIndex,
                        n = e.parentNode.rowIndex,
                        i = this.indexTable[n], o = this.colsNum, r = t; r < o; r++) {
                            var a = i[r];
                            if (a.rowIndex === n && a.cellIndex === t) return a
                        }
                    },
                    getCell: function(e, t) {
                        return e < this.rowsNum && this.table.rows[e].cells[t] || null
                    },
                    deleteCell: function(e, t) {
                        t = "number" == typeof t ? t: e.parentNode.rowIndex,
                        this.table.rows[t].deleteCell(e.cellIndex)
                    },
                    getCellsRange: function(e, t) {
                        try {
                            var n = this,
                            i = n.getCellInfo(e);
                            if (e === t) return {
                                beginRowIndex: i.rowIndex,
                                beginColIndex: i.colIndex,
                                endRowIndex: i.rowIndex + i.rowSpan - 1,
                                endColIndex: i.colIndex + i.colSpan - 1
                            };
                            var o = n.getCellInfo(t);
                            return function e(t, i, o, r) {
                                var a, s, l, d = t,
                                c = i,
                                u = o,
                                m = r;
                                if (t > 0) for (s = i; s < r; s++)(l = (a = n.indexTable[t][s]).rowIndex) < t && (d = Math.min(l, d));
                                if (r < n.colsNum) for (l = t; l < o; l++)(s = (a = n.indexTable[l][r]).colIndex + a.colSpan - 1) > r && (m = Math.max(s, m));
                                if (o < n.rowsNum) for (s = i; s < r; s++)(l = (a = n.indexTable[o][s]).rowIndex + a.rowSpan - 1) > o && (u = Math.max(l, u));
                                if (i > 0) for (l = t; l < o; l++)(s = (a = n.indexTable[l][i]).colIndex) < i && (c = Math.min(a.colIndex, c));
                                return d != t || c != i || u != o || m != r ? e(d, c, u, m) : {
                                    beginRowIndex: t,
                                    beginColIndex: i,
                                    endRowIndex: o,
                                    endColIndex: r
                                }
                            } (Math.min(i.rowIndex, o.rowIndex), Math.min(i.colIndex, o.colIndex), Math.max(i.rowIndex + i.rowSpan - 1, o.rowIndex + o.rowSpan - 1), Math.max(i.colIndex + i.colSpan - 1, o.colIndex + o.colSpan - 1))
                        } catch(e) {}
                    },
                    getCells: function(e) {
                        this.clearSelected();
                        for (var t, n, i, o = e.beginRowIndex,
                        r = e.beginColIndex,
                        a = e.endRowIndex,
                        s = e.endColIndex,
                        l = {},
                        d = [], c = o; c <= a; c++) for (var u = r; u <= s; u++) {
                            var m = (n = (t = this.indexTable[c][u]).rowIndex) + "|" + (i = t.colIndex);
                            if (!l[m]) {
                                if (l[m] = 1, n < c || i < u || n + t.rowSpan - 1 > a || i + t.colSpan - 1 > s) return null;
                                d.push(this.getCell(n, t.cellIndex))
                            }
                        }
                        return d
                    },
                    clearSelected: function() {
                        e.removeSelectedClass(this.selectedTds),
                        this.selectedTds = [],
                        this.cellsRange = {}
                    },
                    setSelected: function(t) {
                        var n = this.getCells(t);
                        e.addSelectedClass(n),
                        this.selectedTds = n,
                        this.cellsRange = t
                    },
                    isFullRow: function() {
                        var e = this.cellsRange;
                        return e.endColIndex - e.beginColIndex + 1 == this.colsNum
                    },
                    isFullCol: function() {
                        var e = this.cellsRange,
                        t = this.table.getElementsByTagName("th"),
                        n = e.endRowIndex - e.beginRowIndex + 1;
                        return t.length ? n == this.rowsNum || n == this.rowsNum - 1 : n == this.rowsNum
                    },
                    getNextCell: function(e, t, n) {
                        try {
                            var i, o, r = this.getCellInfo(e),
                            a = this.selectedTds.length && !n,
                            s = this.cellsRange;
                            return ! t && 0 == r.rowIndex || t && (a ? s.endRowIndex == this.rowsNum - 1 : r.rowIndex + r.rowSpan > this.rowsNum - 1) ? null: (i = t ? a ? s.endRowIndex + 1 : r.rowIndex + r.rowSpan: a ? s.beginRowIndex - 1 : r.rowIndex - 1, o = a ? s.beginColIndex: r.colIndex, this.getCell(this.indexTable[i][o].rowIndex, this.indexTable[i][o].cellIndex))
                        } catch(e) {}
                    },
                    getPreviewCell: function(e, t) {
                        try {
                            var n, i, o = this.getCellInfo(e),
                            r = this.selectedTds.length,
                            a = this.cellsRange;
                            return ! t && (r ? !a.beginColIndex: !o.colIndex) || t && (r ? a.endColIndex == this.colsNum - 1 : o.rowIndex > this.colsNum - 1) ? null: (n = t ? r ? a.beginRowIndex: o.rowIndex < 1 ? 0 : o.rowIndex - 1 : r ? a.beginRowIndex: o.rowIndex, i = t ? r ? a.endColIndex + 1 : o.colIndex: r ? a.beginColIndex - 1 : o.colIndex < 1 ? 0 : o.colIndex - 1, this.getCell(this.indexTable[n][i].rowIndex, this.indexTable[n][i].cellIndex))
                        } catch(e) {}
                    },
                    moveContent: function(t, n) {
                        if (!e.isEmptyBlock(n)) if (e.isEmptyBlock(t)) t.innerHTML = n.innerHTML;
                        else {
                            var i = t.lastChild;
                            for (3 != i.nodeType && dtd.$block[i.tagName] || t.appendChild(t.ownerDocument.createElement("br")); i = n.firstChild;) t.appendChild(i)
                        }
                    },
                    mergeRight: function(e) {
                        var t = this.getCellInfo(e),
                        n = t.colIndex + t.colSpan,
                        i = this.indexTable[t.rowIndex][n],
                        o = this.getCell(i.rowIndex, i.cellIndex);
                        e.colSpan = t.colSpan + i.colSpan,
                        e.removeAttribute("width"),
                        this.moveContent(e, o),
                        this.deleteCell(o, i.rowIndex),
                        this.update()
                    },
                    mergeDown: function(e) {
                        var t = this.getCellInfo(e),
                        n = t.rowIndex + t.rowSpan,
                        i = this.indexTable[n][t.colIndex],
                        o = this.getCell(i.rowIndex, i.cellIndex);
                        e.rowSpan = t.rowSpan + i.rowSpan,
                        e.removeAttribute("height"),
                        this.moveContent(e, o),
                        this.deleteCell(o, i.rowIndex),
                        this.update()
                    },
                    mergeRange: function() {
                        var e = this.cellsRange,
                        t = this.getCell(e.beginRowIndex, this.indexTable[e.beginRowIndex][e.beginColIndex].cellIndex);
                        if ("TH" == t.tagName && e.endRowIndex !== e.beginRowIndex) {
                            var n = this.indexTable,
                            i = this.getCellInfo(t);
                            t = this.getCell(1, n[1][i.colIndex].cellIndex),
                            e = this.getCellsRange(t, this.getCell(n[this.rowsNum - 1][i.colIndex].rowIndex, n[this.rowsNum - 1][i.colIndex].cellIndex))
                        }
                        for (var o, r = this.getCells(e), a = 0; o = r[a++];) o !== t && (this.moveContent(t, o), this.deleteCell(o));
                        if (t.rowSpan = e.endRowIndex - e.beginRowIndex + 1, t.rowSpan > 1 && t.removeAttribute("height"), t.colSpan = e.endColIndex - e.beginColIndex + 1, t.colSpan > 1 && t.removeAttribute("width"), t.rowSpan == this.rowsNum && 1 != t.colSpan && (t.colSpan = 1), t.colSpan == this.colsNum && 1 != t.rowSpan) {
                            var s = t.parentNode.rowIndex;
                            if (this.table.deleteRow) {
                                a = s + 1;
                                for (var l = s + 1,
                                d = t.rowSpan; a < d; a++) this.table.deleteRow(l)
                            } else for (a = 0, d = t.rowSpan - 1; a < d; a++) {
                                var c = this.table.rows[s + 1];
                                c.parentNode.removeChild(c)
                            }
                            t.rowSpan = 1
                        }
                        this.update()
                    },
                    insertRow: function(e, t) {
                        var n, i = this.colsNum,
                        o = this.table.insertRow(e),
                        r = "string" == typeof t && "TH" == t.toUpperCase();
                        function a(e, t, n) {
                            if (0 == e) {
                                var i = (n.nextSibling || n.previousSibling).cells[e];
                                "TH" == i.tagName && ((i = t.ownerDocument.createElement("th")).appendChild(t.firstChild), n.insertBefore(i, t), domUtils.remove(t))
                            } else if ("TH" == t.tagName) {
                                var o = t.ownerDocument.createElement("td");
                                o.appendChild(t.firstChild),
                                n.insertBefore(o, t),
                                domUtils.remove(t)
                            }
                        }
                        if (0 == e || e == this.rowsNum) for (var s = 0; s < i; s++) n = this.cloneCell(t, !0),
                        this.setCellContent(n),
                        n.getAttribute("vAlign") && n.setAttribute("vAlign", n.getAttribute("vAlign")),
                        o.appendChild(n),
                        r || a(s, n, o);
                        else {
                            var l = this.indexTable[e];
                            for (s = 0; s < i; s++) {
                                var d = l[s];
                                d.rowIndex < e ? (n = this.getCell(d.rowIndex, d.cellIndex)).rowSpan = d.rowSpan + 1 : (n = this.cloneCell(t, !0), this.setCellContent(n), o.appendChild(n)),
                                r || a(s, n, o)
                            }
                        }
                        return this.update(),
                        o
                    },
                    deleteRow: function(e) {
                        for (var t = this.table.rows[e], n = this.indexTable[e], i = this.colsNum, o = 0, r = 0; r < i;) {
                            var a = n[r],
                            s = this.getCell(a.rowIndex, a.cellIndex);
                            if (s.rowSpan > 1 && a.rowIndex == e) {
                                var l = s.cloneNode(!0);
                                l.rowSpan = s.rowSpan - 1,
                                l.innerHTML = "",
                                s.rowSpan = 1;
                                var d, c = e + 1,
                                u = this.table.rows[c],
                                m = this.getPreviewMergedCellsNum(c, r) - o;
                                m < r ? (d = r - m - 1, domUtils.insertAfter(u.cells[d], l)) : u.cells.length && u.insertBefore(l, u.cells[0]),
                                o += 1
                            }
                            r += s.colSpan || 1
                        }
                        var f = [],
                        p = {};
                        for (r = 0; r < i; r++) {
                            var h = n[r].rowIndex,
                            g = n[r].cellIndex,
                            v = h + "_" + g;
                            p[v] || (p[v] = 1, s = this.getCell(h, g), f.push(s))
                        }
                        var b = [];
                        utils.each(f,
                        function(e) {
                            1 == e.rowSpan ? e.parentNode.removeChild(e) : b.push(e)
                        }),
                        utils.each(b,
                        function(e) {
                            e.rowSpan--
                        }),
                        t.parentNode.removeChild(t),
                        this.update()
                    },
                    insertCol: function(e, t, n) {
                        var i, o, r, a = this.rowsNum,
                        s = 0,
                        l = parseInt((this.table.offsetWidth - 20 * (this.colsNum + 1) - (this.colsNum + 1)) / (this.colsNum + 1), 10),
                        d = "string" == typeof t && "TH" == t.toUpperCase();
                        function c(e, t, n) {
                            if (0 == e) {
                                var i = t.nextSibling || t.previousSibling;
                                "TH" == i.tagName && ((i = t.ownerDocument.createElement("th")).appendChild(t.firstChild), n.insertBefore(i, t), domUtils.remove(t))
                            } else if ("TH" == t.tagName) {
                                var o = t.ownerDocument.createElement("td");
                                o.appendChild(t.firstChild),
                                n.insertBefore(o, t),
                                domUtils.remove(t)
                            }
                        }
                        if (0 == e || e == this.colsNum) for (; s < a; s++) r = (i = this.table.rows[s]).cells[0 == e ? e: i.cells.length],
                        o = this.cloneCell(t, !0),
                        this.setCellContent(o),
                        o.setAttribute("vAlign", o.getAttribute("vAlign")),
                        r && o.setAttribute("width", r.getAttribute("width")),
                        e ? domUtils.insertAfter(i.cells[i.cells.length - 1], o) : i.insertBefore(o, i.cells[0]),
                        d || c(s, o, i);
                        else for (; s < a; s++) {
                            var u = this.indexTable[s][e];
                            u.colIndex < e ? (o = this.getCell(u.rowIndex, u.cellIndex)).colSpan = u.colSpan + 1 : (r = (i = this.table.rows[s]).cells[u.cellIndex], o = this.cloneCell(t, !0), this.setCellContent(o), o.setAttribute("vAlign", o.getAttribute("vAlign")), r && o.setAttribute("width", r.getAttribute("width")), r ? i.insertBefore(o, r) : i.appendChild(o)),
                            d || c(s, o, i)
                        }
                        this.update(),
                        this.updateWidth(l, n || {
                            tdPadding: 10,
                            tdBorder: 1
                        })
                    },
                    updateWidth: function(t, n) {
                        var i = this.table,
                        o = e.getWidth(i) - 2 * n.tdPadding - n.tdBorder + t;
                        if (o < i.ownerDocument.body.offsetWidth) i.setAttribute("width", o);
                        else {
                            var r = domUtils.getElementsByTagName(this.table, "td th");
                            utils.each(r,
                            function(e) {
                                e.setAttribute("width", t)
                            })
                        }
                    },
                    deleteCol: function(e) {
                        for (var t = this.indexTable,
                        n = this.table.rows,
                        i = this.table.getAttribute("width"), o = 0, r = this.rowsNum, a = {},
                        s = 0; s < r;) {
                            var l = t[s][e],
                            d = l.rowIndex + "_" + l.colIndex;
                            if (!a[d]) {
                                a[d] = 1;
                                var c = this.getCell(l.rowIndex, l.cellIndex);
                                o || (o = c && parseInt(c.offsetWidth / c.colSpan, 10).toFixed(0)),
                                c.colSpan > 1 ? c.colSpan--:n[s].deleteCell(l.cellIndex),
                                s += l.rowSpan || 1
                            }
                        }
                        this.table.setAttribute("width", i - o),
                        this.update()
                    },
                    splitToCells: function(e) {
                        var t = this,
                        n = this.splitToRows(e);
                        utils.each(n,
                        function(e) {
                            t.splitToCols(e)
                        })
                    },
                    splitToRows: function(e) {
                        var t = this.getCellInfo(e),
                        n = t.rowIndex,
                        i = t.colIndex,
                        o = [];
                        e.rowSpan = 1,
                        o.push(e);
                        for (var r = n,
                        a = n + t.rowSpan; r < a; r++) if (r != n) {
                            var s = this.table.rows[r].insertCell(i - this.getPreviewMergedCellsNum(r, i));
                            s.colSpan = t.colSpan,
                            this.setCellContent(s),
                            s.setAttribute("vAlign", e.getAttribute("vAlign")),
                            s.setAttribute("align", e.getAttribute("align")),
                            e.style.cssText && (s.style.cssText = e.style.cssText),
                            o.push(s)
                        }
                        return this.update(),
                        o
                    },
                    getPreviewMergedCellsNum: function(e, t) {
                        for (var n = this.indexTable[e], i = 0, o = 0; o < t;) {
                            var r = n[o].colSpan;
                            i += r - (n[o].rowIndex == e ? 1 : 0),
                            o += r
                        }
                        return i
                    },
                    splitToCols: function(e) {
                        var t = (e.offsetWidth / e.colSpan - 22).toFixed(0),
                        n = this.getCellInfo(e),
                        i = n.rowIndex,
                        o = n.colIndex,
                        r = [];
                        e.colSpan = 1,
                        e.setAttribute("width", t),
                        r.push(e);
                        for (var a = o,
                        s = o + n.colSpan; a < s; a++) if (a != o) {
                            var l = this.table.rows[i],
                            d = l.insertCell(this.indexTable[i][a].cellIndex + 1);
                            if (d.rowSpan = n.rowSpan, this.setCellContent(d), d.setAttribute("vAlign", e.getAttribute("vAlign")), d.setAttribute("align", e.getAttribute("align")), d.setAttribute("width", t), e.style.cssText && (d.style.cssText = e.style.cssText), "TH" == e.tagName) {
                                var c = e.ownerDocument.createElement("th");
                                c.appendChild(d.firstChild),
                                c.setAttribute("vAlign", e.getAttribute("vAlign")),
                                c.rowSpan = d.rowSpan,
                                l.insertBefore(c, d),
                                domUtils.remove(d)
                            }
                            r.push(d)
                        }
                        return this.update(),
                        r
                    },
                    isLastCell: function(e, t, n) {
                        t = t || this.rowsNum,
                        n = n || this.colsNum;
                        var i = this.getCellInfo(e);
                        return i.rowIndex + i.rowSpan == t && i.colIndex + i.colSpan == n
                    },
                    getLastCell: function(e) {
                        e = e || this.table.getElementsByTagName("td");
                        this.getCellInfo(e[0]);
                        var t, n = this,
                        i = e[0],
                        o = i.parentNode,
                        r = 0,
                        a = 0;
                        return utils.each(e,
                        function(e) {
                            e.parentNode == o && (a += e.colSpan || 1),
                            r += e.rowSpan * e.colSpan || 1
                        }),
                        t = r / a,
                        utils.each(e,
                        function(e) {
                            if (n.isLastCell(e, t, a)) return i = e,
                            !1
                        }),
                        i
                    },
                    selectRow: function(e) {
                        var t = this.indexTable[e],
                        n = this.getCell(t[0].rowIndex, t[0].cellIndex),
                        i = this.getCell(t[this.colsNum - 1].rowIndex, t[this.colsNum - 1].cellIndex),
                        o = this.getCellsRange(n, i);
                        this.setSelected(o)
                    },
                    selectTable: function() {
                        var e = this.table.getElementsByTagName("td"),
                        t = this.getCellsRange(e[0], e[e.length - 1]);
                        this.setSelected(t)
                    },
                    setBackground: function(e, t) {
                        if ("string" == typeof t) utils.each(e,
                        function(e) {
                            e.style.backgroundColor = t
                        });
                        else if ("object" == typeof t) {
                            t = utils.extend({
                                repeat: !0,
                                colorList: ["#ddd", "#fff"]
                            },
                            t);
                            for (var n, i = this.getCellInfo(e[0]).rowIndex, o = 0, r = t.colorList, a = 0; n = e[a++];) {
                                var s = this.getCellInfo(n);
                                n.style.backgroundColor = (l = r, d = i + o == s.rowIndex ? o: ++o, c = t.repeat, l[d] ? l[d] : c ? l[d % l.length] : "")
                            }
                        }
                        var l, d, c
                    }, removeBackground: function(e) {
                        utils.each(e,
                        function(e) {
                            e.style.backgroundColor = ""
                        })
                    }
                }
            } (),
            function() {
                var e = UE.UETable,
                t = function(t) {
                    return e.getTableItemsByRange(t)
                },
                n = function(t) {
                    return e.getUETableBySelected(t)
                },
                i = function(t, n) {
                    return e.getDefaultValue(t, n)
                },
                o = function(t) {
                    return e.getUETable(t)
                };
                function r(e, t) {
                    var n = domUtils.getElementsByTagName(e, "td th");
                    utils.each(n,
                    function(e) {
                        e.removeAttribute("width")
                    }),
                    e.setAttribute("width",
                    function(e, t, n) {
                        var i = e.body;
                        return i.offsetWidth - (t ? 2 * parseInt(domUtils.getComputedStyle(i, "margin-left"), 10) : 0) - 2 * n.tableBorder - (e.options.offsetWidth || 0)
                    } (t, !0, i(t, e)));
                    var o = [];
                    setTimeout(function() {
                        utils.each(n,
                        function(e) {
                            1 == e.colSpan && o.push(e.offsetWidth)
                        }),
                        utils.each(n,
                        function(e, t) {
                            1 == e.colSpan && e.setAttribute("width", o[t] + "")
                        })
                    },
                    0)
                }
                function a(e) {
                    var n = t(e).cell;
                    if (n) {
                        var i = o(n);
                        return i.selectedTds.length ? i.selectedTds: [n]
                    }
                    return []
                }
                UE.commands.inserttable = {
                    queryCommandState: function() {
                        return t(this).table ? -1 : 0
                    },
                    execCommand: function(e, t) {
                        t || (t = utils.extend({},
                        {
                            numCols: this.options.defaultCols,
                            numRows: this.options.defaultRows,
                            tdvalign: this.options.tdvalign
                        }));
                        var n = this.selection.getRange().startContainer,
                        o = domUtils.findParent(n,
                        function(e) {
                            return domUtils.isBlockElm(e)
                        },
                        !0) || this.body,
                        r = i(this),
                        a = o.offsetWidth,
                        s = Math.floor(a / t.numCols - 2 * r.tdPadding - r.tdBorder); ! t.tdvalign && (t.tdvalign = this.options.tdvalign),
                        this.execCommand("inserthtml",
                        function(e, t) {
                            for (var n = [], i = e.numRows, o = e.numCols, r = 0; r < i; r++) {
                                n.push("<tr" + (0 == r ? ' class="firstRow"': "") + ">");
                                for (var a = 0; a < o; a++) n.push('<td width="' + t + '"  vAlign="' + e.tdvalign + '" >' + (browser.ie && browser.version < 11 ? domUtils.fillChar: "<br/>") + "</td>");
                                n.push("</tr>")
                            }
                            return "<table><tbody>" + n.join("") + "</tbody></table>"
                        } (t, s))
                    }
                },
                UE.commands.insertparagraphbeforetable = {
                    queryCommandState: function() {
                        return t(this).cell ? 0 : -1
                    },
                    execCommand: function() {
                        var e = t(this).table;
                        if (e) {
                            var n = this.document.createElement("p");
                            n.innerHTML = browser.ie ? "&nbsp;": "<br />",
                            e.parentNode.insertBefore(n, e),
                            this.selection.getRange().setStart(n, 0).setCursor()
                        }
                    }
                },
                UE.commands.deletetable = {
                    queryCommandState: function() {
                        var e = this.selection.getRange();
                        return domUtils.findParentByTagName(e.startContainer, "table", !0) ? 0 : -1
                    },
                    execCommand: function(e, t) {
                        var n = this.selection.getRange();
                        if (t = t || domUtils.findParentByTagName(n.startContainer, "table", !0)) {
                            var i = t.nextSibling;
                            i || (i = domUtils.createElement(this.document, "p", {
                                innerHTML: browser.ie ? domUtils.fillChar: "<br/>"
                            }), t.parentNode.insertBefore(i, t)),
                            domUtils.remove(t),
                            n = this.selection.getRange(),
                            3 == i.nodeType ? n.setStartBefore(i) : n.setStart(i, 0),
                            n.setCursor(!1, !0),
                            this.fireEvent("tablehasdeleted")
                        }
                    }
                },
                UE.commands.cellalign = {
                    queryCommandState: function() {
                        return a(this).length ? 0 : -1
                    },
                    execCommand: function(e, t) {
                        var n = a(this);
                        if (n.length) for (var i, o = 0; i = n[o++];) i.setAttribute("align", t)
                    }
                },
                UE.commands.cellvalign = {
                    queryCommandState: function() {
                        return a(this).length ? 0 : -1
                    },
                    execCommand: function(e, t) {
                        var n = a(this);
                        if (n.length) for (var i, o = 0; i = n[o++];) i.setAttribute("vAlign", t)
                    }
                },
                UE.commands.insertcaption = {
                    queryCommandState: function() {
                        var e = t(this).table;
                        return e && 0 == e.getElementsByTagName("caption").length ? 1 : -1
                    },
                    execCommand: function() {
                        var e = t(this).table;
                        if (e) {
                            var n = this.document.createElement("caption");
                            n.innerHTML = browser.ie ? domUtils.fillChar: "<br/>",
                            e.insertBefore(n, e.firstChild),
                            this.selection.getRange().setStart(n, 0).setCursor()
                        }
                    }
                },
                UE.commands.deletecaption = {
                    queryCommandState: function() {
                        var e = this.selection.getRange(),
                        t = domUtils.findParentByTagName(e.startContainer, "table");
                        return t ? 0 == t.getElementsByTagName("caption").length ? -1 : 1 : -1
                    },
                    execCommand: function() {
                        var e = this.selection.getRange(),
                        t = domUtils.findParentByTagName(e.startContainer, "table");
                        t && (domUtils.remove(t.getElementsByTagName("caption")[0]), this.selection.getRange().setStart(t.rows[0].cells[0], 0).setCursor())
                    }
                },
                UE.commands.inserttitle = {
                    queryCommandState: function() {
                        var e = t(this).table;
                        if (e) {
                            var n = e.rows[0];
                            return "th" != n.cells[n.cells.length - 1].tagName.toLowerCase() ? 0 : -1
                        }
                        return - 1
                    },
                    execCommand: function() {
                        var e = t(this).table;
                        e && o(e).insertRow(0, "th");
                        var n = e.getElementsByTagName("th")[0];
                        this.selection.getRange().setStart(n, 0).setCursor(!1, !0)
                    }
                },
                UE.commands.deletetitle = {
                    queryCommandState: function() {
                        var e = t(this).table;
                        if (e) {
                            var n = e.rows[0];
                            return "th" == n.cells[n.cells.length - 1].tagName.toLowerCase() ? 0 : -1
                        }
                        return - 1
                    },
                    execCommand: function() {
                        var e = t(this).table;
                        e && domUtils.remove(e.rows[0]);
                        var n = e.getElementsByTagName("td")[0];
                        this.selection.getRange().setStart(n, 0).setCursor(!1, !0)
                    }
                },
                UE.commands.inserttitlecol = {
                    queryCommandState: function() {
                        var e = t(this).table;
                        return e ? e.rows[e.rows.length - 1].getElementsByTagName("th").length ? -1 : 0 : -1
                    },
                    execCommand: function(e) {
                        var n = t(this).table;
                        n && o(n).insertCol(0, "th"),
                        r(n, this);
                        var i = n.getElementsByTagName("th")[0];
                        this.selection.getRange().setStart(i, 0).setCursor(!1, !0)
                    }
                },
                UE.commands.deletetitlecol = {
                    queryCommandState: function() {
                        var e = t(this).table;
                        return e && e.rows[e.rows.length - 1].getElementsByTagName("th").length ? 0 : -1
                    },
                    execCommand: function() {
                        var e = t(this).table;
                        if (e) for (var n = 0; n < e.rows.length; n++) domUtils.remove(e.rows[n].children[0]);
                        r(e, this);
                        var i = e.getElementsByTagName("td")[0];
                        this.selection.getRange().setStart(i, 0).setCursor(!1, !0)
                    }
                },
                UE.commands.mergeright = {
                    queryCommandState: function(e) {
                        var n = t(this),
                        i = n.table,
                        r = n.cell;
                        if (!i || !r) return - 1;
                        var a = o(i);
                        if (a.selectedTds.length) return - 1;
                        var s = a.getCellInfo(r),
                        l = s.colIndex + s.colSpan;
                        if (l >= a.colsNum) return - 1;
                        var d = a.indexTable[s.rowIndex][l],
                        c = i.rows[d.rowIndex].cells[d.cellIndex];
                        return c && r.tagName == c.tagName && d.rowIndex == s.rowIndex && d.rowSpan == s.rowSpan ? 0 : -1
                    },
                    execCommand: function(e) {
                        var n = this.selection.getRange(),
                        i = n.createBookmark(!0),
                        r = t(this).cell;
                        o(r).mergeRight(r),
                        n.moveToBookmark(i).select()
                    }
                },
                UE.commands.mergedown = {
                    queryCommandState: function(e) {
                        var n = t(this),
                        i = n.table,
                        r = n.cell;
                        if (!i || !r) return - 1;
                        var a = o(i);
                        if (a.selectedTds.length) return - 1;
                        var s = a.getCellInfo(r),
                        l = s.rowIndex + s.rowSpan;
                        if (l >= a.rowsNum) return - 1;
                        var d = a.indexTable[l][s.colIndex],
                        c = i.rows[d.rowIndex].cells[d.cellIndex];
                        return c && r.tagName == c.tagName && d.colIndex == s.colIndex && d.colSpan == s.colSpan ? 0 : -1
                    },
                    execCommand: function() {
                        var e = this.selection.getRange(),
                        n = e.createBookmark(!0),
                        i = t(this).cell;
                        o(i).mergeDown(i),
                        e.moveToBookmark(n).select()
                    }
                },
                UE.commands.mergecells = {
                    queryCommandState: function() {
                        return n(this) ? 0 : -1
                    },
                    execCommand: function() {
                        var e = n(this);
                        if (e && e.selectedTds.length) {
                            var t = e.selectedTds[0];
                            e.mergeRange();
                            var i = this.selection.getRange();
                            domUtils.isEmptyBlock(t) ? i.setStart(t, 0).collapse(!0) : i.selectNodeContents(t),
                            i.select()
                        }
                    }
                },
                UE.commands.insertrow = {
                    queryCommandState: function() {
                        var e = t(this),
                        n = e.cell;
                        return n && ("TD" == n.tagName || "TH" == n.tagName && e.tr !== e.table.rows[0]) && o(e.table).rowsNum < this.options.maxRowNum ? 0 : -1
                    },
                    execCommand: function() {
                        var e = this.selection.getRange(),
                        n = e.createBookmark(!0),
                        i = t(this),
                        r = i.cell,
                        a = i.table,
                        s = o(a),
                        l = s.getCellInfo(r);
                        if (s.selectedTds.length) for (var d = s.cellsRange,
                        c = 0,
                        u = d.endRowIndex - d.beginRowIndex + 1; c < u; c++) s.insertRow(d.beginRowIndex, r);
                        else s.insertRow(l.rowIndex, r);
                        e.moveToBookmark(n).select(),
                        "enabled" === a.getAttribute("interlaced") && this.fireEvent("interlacetable", a)
                    }
                },
                UE.commands.insertrownext = {
                    queryCommandState: function() {
                        var e = t(this),
                        n = e.cell;
                        return n && "TD" == n.tagName && o(e.table).rowsNum < this.options.maxRowNum ? 0 : -1
                    },
                    execCommand: function() {
                        var e = this.selection.getRange(),
                        n = e.createBookmark(!0),
                        i = t(this),
                        r = i.cell,
                        a = i.table,
                        s = o(a),
                        l = s.getCellInfo(r);
                        if (s.selectedTds.length) for (var d = s.cellsRange,
                        c = 0,
                        u = d.endRowIndex - d.beginRowIndex + 1; c < u; c++) s.insertRow(d.endRowIndex + 1, r);
                        else s.insertRow(l.rowIndex + l.rowSpan, r);
                        e.moveToBookmark(n).select(),
                        "enabled" === a.getAttribute("interlaced") && this.fireEvent("interlacetable", a)
                    }
                },
                UE.commands.deleterow = {
                    queryCommandState: function() {
                        return t(this).cell ? 0 : -1
                    },
                    execCommand: function() {
                        var e = t(this).cell,
                        n = o(e),
                        i = n.cellsRange,
                        r = n.getCellInfo(e),
                        a = n.getVSideCell(e),
                        s = n.getVSideCell(e, !0),
                        l = this.selection.getRange();
                        if (utils.isEmptyObject(i)) n.deleteRow(r.rowIndex);
                        else for (var d = i.beginRowIndex; d < i.endRowIndex + 1; d++) n.deleteRow(i.beginRowIndex);
                        var c = n.table;
                        if (c.getElementsByTagName("td").length) if (1 == r.rowSpan || r.rowSpan == i.endRowIndex - i.beginRowIndex + 1)(s || a) && l.selectNodeContents(s || a).setCursor(!1, !0);
                        else {
                            var u = n.getCell(r.rowIndex, n.indexTable[r.rowIndex][r.colIndex].cellIndex);
                            u && l.selectNodeContents(u).setCursor(!1, !0)
                        } else {
                            var m = c.nextSibling;
                            domUtils.remove(c),
                            m && l.setStart(m, 0).setCursor(!1, !0)
                        }
                        "enabled" === c.getAttribute("interlaced") && this.fireEvent("interlacetable", c)
                    }
                },
                UE.commands.insertcol = {
                    queryCommandState: function(e) {
                        var n = t(this),
                        i = n.cell;
                        return i && ("TD" == i.tagName || "TH" == i.tagName && i !== n.tr.cells[0]) && o(n.table).colsNum < this.options.maxColNum ? 0 : -1
                    },
                    execCommand: function(e) {
                        var n = this.selection.getRange(),
                        i = n.createBookmark(!0);
                        if ( - 1 != this.queryCommandState(e)) {
                            var r = t(this).cell,
                            a = o(r),
                            s = a.getCellInfo(r);
                            if (a.selectedTds.length) for (var l = a.cellsRange,
                            d = 0,
                            c = l.endColIndex - l.beginColIndex + 1; d < c; d++) a.insertCol(l.beginColIndex, r);
                            else a.insertCol(s.colIndex, r);
                            n.moveToBookmark(i).select(!0)
                        }
                    }
                },
                UE.commands.insertcolnext = {
                    queryCommandState: function() {
                        var e = t(this);
                        return e.cell && o(e.table).colsNum < this.options.maxColNum ? 0 : -1
                    },
                    execCommand: function() {
                        var e = this.selection.getRange(),
                        n = e.createBookmark(!0),
                        i = t(this).cell,
                        r = o(i),
                        a = r.getCellInfo(i);
                        if (r.selectedTds.length) for (var s = r.cellsRange,
                        l = 0,
                        d = s.endColIndex - s.beginColIndex + 1; l < d; l++) r.insertCol(s.endColIndex + 1, i);
                        else r.insertCol(a.colIndex + a.colSpan, i);
                        e.moveToBookmark(n).select()
                    }
                },
                UE.commands.deletecol = {
                    queryCommandState: function() {
                        return t(this).cell ? 0 : -1
                    },
                    execCommand: function() {
                        var e = t(this).cell,
                        n = o(e),
                        i = n.cellsRange,
                        r = n.getCellInfo(e),
                        a = n.getHSideCell(e),
                        s = n.getHSideCell(e, !0);
                        if (utils.isEmptyObject(i)) n.deleteCol(r.colIndex);
                        else for (var l = i.beginColIndex; l < i.endColIndex + 1; l++) n.deleteCol(i.beginColIndex);
                        var d = n.table,
                        c = this.selection.getRange();
                        if (d.getElementsByTagName("td").length) domUtils.inDoc(e, this.document) ? c.setStart(e, 0).setCursor(!1, !0) : s && domUtils.inDoc(s, this.document) ? c.selectNodeContents(s).setCursor(!1, !0) : a && domUtils.inDoc(a, this.document) && c.selectNodeContents(a).setCursor(!0, !0);
                        else {
                            var u = d.nextSibling;
                            domUtils.remove(d),
                            u && c.setStart(u, 0).setCursor(!1, !0)
                        }
                    }
                },
                UE.commands.splittocells = {
                    queryCommandState: function() {
                        var e = t(this),
                        n = e.cell;
                        return n ? o(e.table).selectedTds.length > 0 ? -1 : n && (n.colSpan > 1 || n.rowSpan > 1) ? 0 : -1 : -1
                    },
                    execCommand: function() {
                        var e = this.selection.getRange(),
                        n = e.createBookmark(!0),
                        i = t(this).cell;
                        o(i).splitToCells(i),
                        e.moveToBookmark(n).select()
                    }
                },
                UE.commands.splittorows = {
                    queryCommandState: function() {
                        var e = t(this),
                        n = e.cell;
                        return n ? o(e.table).selectedTds.length > 0 ? -1 : n && n.rowSpan > 1 ? 0 : -1 : -1
                    },
                    execCommand: function() {
                        var e = this.selection.getRange(),
                        n = e.createBookmark(!0),
                        i = t(this).cell;
                        o(i).splitToRows(i),
                        e.moveToBookmark(n).select()
                    }
                },
                UE.commands.splittocols = {
                    queryCommandState: function() {
                        var e = t(this),
                        n = e.cell;
                        return n ? o(e.table).selectedTds.length > 0 ? -1 : n && n.colSpan > 1 ? 0 : -1 : -1
                    },
                    execCommand: function() {
                        var e = this.selection.getRange(),
                        n = e.createBookmark(!0),
                        i = t(this).cell;
                        o(i).splitToCols(i),
                        e.moveToBookmark(n).select()
                    }
                },
                UE.commands.adaptbytext = UE.commands.adaptbywindow = {
                    queryCommandState: function() {
                        return t(this).table ? 0 : -1
                    },
                    execCommand: function(e) {
                        var n = t(this).table;
                        if (n) if ("adaptbywindow" == e) r(n, this);
                        else {
                            var i = domUtils.getElementsByTagName(n, "td th");
                            utils.each(i,
                            function(e) {
                                e.removeAttribute("width")
                            }),
                            n.removeAttribute("width")
                        }
                    }
                },
                UE.commands.averagedistributecol = {
                    queryCommandState: function() {
                        var e = n(this);
                        return e && (e.isFullRow() || e.isFullCol()) ? 0 : -1
                    },
                    execCommand: function(e) {
                        var t = this,
                        o = n(t);
                        o && o.selectedTds.length &&
                        function(e) {
                            utils.each(domUtils.getElementsByTagName(o.table, "th"),
                            function(e) {
                                e.setAttribute("width", "")
                            });
                            var t = o.isFullRow() ? domUtils.getElementsByTagName(o.table, "td") : o.selectedTds;
                            utils.each(t,
                            function(t) {
                                1 == t.colSpan && t.setAttribute("width", e)
                            })
                        } (function() {
                            var e = o.table,
                            n = 0,
                            r = 0,
                            a = i(t, e);
                            if (o.isFullRow()) n = e.offsetWidth,
                            r = o.colsNum;
                            else for (var s, l = o.cellsRange.beginColIndex,
                            d = o.cellsRange.endColIndex,
                            c = l; c <= d;) n += (s = o.selectedTds[c]).offsetWidth,
                            c += s.colSpan,
                            r += 1;
                            return Math.ceil(n / r) - 2 * a.tdBorder - 2 * a.tdPadding
                        } ())
                    }
                },
                UE.commands.averagedistributerow = {
                    queryCommandState: function() {
                        var e = n(this);
                        return e ? e.selectedTds && /th/gi.test(e.selectedTds[0].tagName) ? -1 : e.isFullRow() || e.isFullCol() ? 0 : -1 : -1
                    },
                    execCommand: function(e) {
                        var t, o, r = this,
                        a = n(r);
                        a && a.selectedTds.length && (t = function() {
                            var e, t = 0,
                            n = a.table,
                            o = i(r, n),
                            s = parseInt(domUtils.getComputedStyle(n.getElementsByTagName("td")[0], "padding-top"));
                            if (a.isFullCol()) {
                                var l, d, c = domUtils.getElementsByTagName(n, "caption"),
                                u = domUtils.getElementsByTagName(n, "th");
                                c.length > 0 && (l = c[0].offsetHeight),
                                u.length > 0 && (d = u[0].offsetHeight),
                                t = n.offsetHeight - (l || 0) - (d || 0),
                                e = 0 == u.length ? a.rowsNum: a.rowsNum - 1
                            } else {
                                for (var m = a.cellsRange.beginRowIndex,
                                f = a.cellsRange.endRowIndex,
                                p = 0,
                                h = domUtils.getElementsByTagName(n, "tr"), g = m; g <= f; g++) t += h[g].offsetHeight,
                                p += 1;
                                e = p
                            }
                            return browser.ie && browser.version < 9 ? Math.ceil(t / e) : Math.ceil(t / e) - 2 * o.tdBorder - 2 * s
                        } (), o = a.isFullCol() ? domUtils.getElementsByTagName(a.table, "td") : a.selectedTds, utils.each(o,
                        function(e) {
                            1 == e.rowSpan && e.setAttribute("height", t)
                        }))
                    }
                },
                UE.commands.cellalignment = {
                    queryCommandState: function() {
                        return t(this).table ? 0 : -1
                    },
                    execCommand: function(e, t) {
                        var i = n(this);
                        if (i) utils.each(i.selectedTds,
                        function(e) {
                            domUtils.setAttributes(e, t)
                        });
                        else {
                            var o = this.selection.getStart(),
                            r = o && domUtils.findParentByTagName(o, ["td", "th", "caption"], !0);
                            /caption/gi.test(r.tagName) ? (r.style.textAlign = t.align, r.style.verticalAlign = t.vAlign) : domUtils.setAttributes(r, t),
                            this.selection.getRange().setCursor(!0)
                        }
                    },
                    queryCommandValue: function(e) {
                        var n = t(this).cell;
                        if (n || (n = a(this)[0]), n) {
                            var i = UE.UETable.getUETable(n).selectedTds;
                            return ! i.length && (i = n),
                            UE.UETable.getTableCellAlignState(i)
                        }
                        return null
                    }
                },
                UE.commands.tablealignment = {
                    queryCommandState: function() {
                        return browser.ie && browser.version < 8 ? -1 : t(this).table ? 0 : -1
                    },
                    execCommand: function(e, t) {
                        var n = this.selection.getStart(),
                        i = n && domUtils.findParentByTagName(n, ["table"], !0);
                        i && i.setAttribute("align", t)
                    }
                },
                UE.commands.edittable = {
                    queryCommandState: function() {
                        return t(this).table ? 0 : -1
                    },
                    execCommand: function(e, t) {
                        var n = this.selection.getRange(),
                        i = domUtils.findParentByTagName(n.startContainer, "table");
                        if (i) {
                            var o = domUtils.getElementsByTagName(i, "td").concat(domUtils.getElementsByTagName(i, "th"), domUtils.getElementsByTagName(i, "caption"));
                            utils.each(o,
                            function(e) {
                                e.style.borderColor = t
                            })
                        }
                    }
                },
                UE.commands.edittd = {
                    queryCommandState: function() {
                        return t(this).table ? 0 : -1
                    },
                    execCommand: function(e, t) {
                        var i = n(this);
                        if (i) utils.each(i.selectedTds,
                        function(e) {
                            e.style.backgroundColor = t
                        });
                        else {
                            var o = this.selection.getStart(),
                            r = o && domUtils.findParentByTagName(o, ["td", "th", "caption"], !0);
                            r && (r.style.backgroundColor = t)
                        }
                    }
                },
                UE.commands.settablebackground = {
                    queryCommandState: function() {
                        return a(this).length > 1 ? 0 : -1
                    },
                    execCommand: function(e, t) {
                        var n;
                        n = a(this),
                        o(n[0]).setBackground(n, t)
                    }
                },
                UE.commands.cleartablebackground = {
                    queryCommandState: function() {
                        var e = a(this);
                        if (!e.length) return - 1;
                        for (var t, n = 0; t = e[n++];) if ("" !== t.style.backgroundColor) return 0;
                        return - 1
                    },
                    execCommand: function() {
                        var e = a(this);
                        o(e[0]).removeBackground(e)
                    }
                },
                UE.commands.interlacetable = UE.commands.uninterlacetable = {
                    queryCommandState: function(e) {
                        var n = t(this).table;
                        if (!n) return - 1;
                        var i = n.getAttribute("interlaced");
                        return "interlacetable" == e ? "enabled" === i ? -1 : 0 : i && "disabled" !== i ? 0 : -1
                    },
                    execCommand: function(e, n) {
                        var i = t(this).table;
                        "interlacetable" == e ? (i.setAttribute("interlaced", "enabled"), this.fireEvent("interlacetable", i, n)) : (i.setAttribute("interlaced", "disabled"), this.fireEvent("uninterlacetable", i))
                    }
                },
                UE.commands.setbordervisible = {
                    queryCommandState: function(e) {
                        return t(this).table ? 0 : -1
                    },
                    execCommand: function() {
                        var e = t(this).table;
                        utils.each(domUtils.getElementsByTagName(e, "td"),
                        function(e) {
                            e.style.borderWidth = "1px",
                            e.style.borderStyle = "solid"
                        })
                    }
                }
            } (),
            UE.plugins.table = function() {
                var e = this,
                t = null,
                n = 5,
                i = !1,
                o = 5,
                r = 10,
                a = 0,
                s = null,
                l = 360,
                d = UE.UETable,
                c = function(e) {
                    return d.getUETable(e)
                },
                u = function(e) {
                    return d.getUETableBySelected(e)
                },
                m = function(e, t) {
                    return d.getDefaultValue(e, t)
                },
                f = function(e) {
                    return d.removeSelectedClass(e)
                };
                e.ready(function() {
                    var e = this,
                    t = e.selection.getText;
                    e.selection.getText = function() {
                        var n = u(e);
                        if (n) {
                            var i = "";
                            return utils.each(n.selectedTds,
                            function(e) {
                                i += e[browser.ie ? "innerText": "textContent"]
                            }),
                            i
                        }
                        return t.call(e.selection)
                    }
                });
                var p = null,
                h = null,
                g = "",
                v = !1,
                b = null,
                y = !1,
                C = null,
                x = null,
                w = !1;
                e.setOpt({
                    maxColNum: 20,
                    maxRowNum: 100,
                    defaultCols: 5,
                    defaultRows: 5,
                    tdvalign: "top",
                    cursorpath: e.options.UEDITOR_HOME_URL + "themes/default/images/cursor_",
                    tableDragable: !1,
                    classList: ["ue-table-interlace-color-single", "ue-table-interlace-color-double"]
                }),
                e.getUETable = c;
                var N = {
                    deletetable: 1,
                    inserttable: 1,
                    cellvalign: 1,
                    insertcaption: 1,
                    deletecaption: 1,
                    inserttitle: 1,
                    deletetitle: 1,
                    mergeright: 1,
                    mergedown: 1,
                    mergecells: 1,
                    insertrow: 1,
                    insertrownext: 1,
                    deleterow: 1,
                    insertcol: 1,
                    insertcolnext: 1,
                    deletecol: 1,
                    splittocells: 1,
                    splittorows: 1,
                    splittocols: 1,
                    adaptbytext: 1,
                    adaptbywindow: 1,
                    adaptbycustomer: 1,
                    insertparagraph: 1,
                    insertparagraphbeforetable: 1,
                    averagedistributecol: 1,
                    averagedistributerow: 1
                };
                function E(e, t) {
                    T(e, "width", !0),
                    T(e, "height", !0)
                }
                function T(e, t, n) {
                    e.style[t] && (n && e.setAttribute(t, parseInt(e.style[t], 10)), e.style[t] = "")
                }
                function U(e) {
                    return "TD" == e.tagName || "TH" == e.tagName ? e: (t = domUtils.findParentByTagName(e, "td", !0) || domUtils.findParentByTagName(e, "th", !0)) ? t: null;
                    var t
                }
                function S(e) {
                    var t = new RegExp(domUtils.fillChar, "g");
                    if (e[browser.ie ? "innerText": "textContent"].replace(/^\s*$/, "").replace(t, "").length > 0) return 0;
                    for (var n in dtd.$isNotEmpty) if (e.getElementsByTagName(n).length) return 0;
                    return 1
                }
                function k(t) {
                    return t.pageX || t.pageY ? {
                        x: t.pageX,
                        y: t.pageY
                    }: {
                        x: t.clientX + e.document.body.scrollLeft - e.document.body.clientLeft,
                        y: t.clientY + e.document.body.scrollTop - e.document.body.clientTop
                    }
                }
                function _(t) {
                    if (!j()) try {
                        var o, l = U(t.target || t.srcElement);
                        if (i && (e.body.style.webkitUserSelect = "none", (Math.abs(s.x - t.clientX) > r || Math.abs(s.y - t.clientY) > r) && (P(), i = !1, a = 0, M(t))), g && x) return a = 0,
                        e.body.style.webkitUserSelect = "none",
                        e.selection.getNative()[browser.ie9below ? "empty": "removeAllRanges"](),
                        o = k(t),
                        I(e, !0, g, o, l),
                        void("h" == g ? C.style.left = function(t, i) {
                            var o = c(t);
                            if (o) {
                                var r = o.getSameEndPosCells(t, "x")[0],
                                a = o.getSameStartPosXCells(t)[0],
                                s = k(i).x,
                                l = (r ? domUtils.getXY(r).x: domUtils.getXY(o.table).x) + 20,
                                d = a ? domUtils.getXY(a).x + a.offsetWidth - 20 : e.body.offsetWidth + 5 || parseInt(domUtils.getComputedStyle(e.body, "width"), 10);
                                return d -= n,
                                s < (l += n) ? l: s > d ? d: s
                            }
                        } (x, t) + "px": "v" == g && (C.style.top = function(e, t) {
                            try {
                                var n = domUtils.getXY(e).y,
                                i = k(t).y;
                                return i < n ? n: i
                            } catch(e) {}
                        } (x, t) + "px"));
                        if (l) {
                            if (!0 === e.fireEvent("excludetable", l)) return;
                            var d = L(l, o = k(t)),
                            u = domUtils.findParentByTagName(l, "table", !0);
                            if (A(u, l, t, !0)) {
                                if (!0 === e.fireEvent("excludetable", u)) return;
                                e.body.style.cursor = "url(" + e.options.cursorpath + "h.png),pointer"
                            } else if (A(u, l, t)) {
                                if (!0 === e.fireEvent("excludetable", u)) return;
                                e.body.style.cursor = "url(" + e.options.cursorpath + "v.png),pointer"
                            } else {
                                e.body.style.cursor = "text";
                                /\d/.test(d) && (d = d.replace(/\d/, ""), l = c(l).getPreviewCell(l, "v" == d)),
                                I(e, !!l && !!d, l ? d: "", o, l)
                            }
                        } else B(!1, u, e)
                    } catch(e) {}
                }
                function B(e, t, n) {
                    if (e) !
                    function(e, t) {
                        var n, i = domUtils.getXY(e),
                        o = e.ownerDocument;
                        if (b && b.parentNode) return b; (b = o.createElement("div")).contentEditable = !1,
                        b.innerHTML = "",
                        b.style.cssText = "width:15px;height:15px;background-image:url(" + t.options.UEDITOR_HOME_URL + "dialogs/table/dragicon.png);position: absolute;cursor:move;top:" + (i.y - 15) + "px;left:" + i.x + "px;",
                        domUtils.unSelectable(b),
                        b.onmouseover = function(e) {
                            y = !0
                        },
                        b.onmouseout = function(e) {
                            y = !1
                        },
                        domUtils.on(b, "click",
                        function(i, o) {
                            var r;
                            r = this,
                            clearTimeout(n),
                            n = setTimeout(function() {
                                t.fireEvent("tableClicked", e, r)
                            },
                            300)
                        }),
                        domUtils.on(b, "dblclick",
                        function(i, o) { !
                            function(i) {
                                clearTimeout(n);
                                var o = c(e),
                                r = e.rows[0].cells[0],
                                a = o.getLastCell(),
                                s = o.getCellsRange(r, a);
                                t.selection.getRange().setStart(r, 0).setCursor(!1, !0),
                                o.setSelected(s)
                            } ()
                        }),
                        domUtils.on(b, "dragstart",
                        function(e, t) {
                            domUtils.preventDefault(t)
                        }),
                        o.body.appendChild(b)
                    } (t, n);
                    else {
                        if (y) return;
                        setTimeout(function() { ! y && b && b.parentNode && b.parentNode.removeChild(b)
                        },
                        2e3)
                    }
                }
                function A(e, t, n, i) {
                    var o = k(n),
                    r = L(t, o);
                    if (i) {
                        var a = e.getElementsByTagName("caption")[0],
                        s = a ? a.offsetHeight: 0;
                        return "v1" == r && o.y - domUtils.getXY(e).y - s < 8
                    }
                    return "h1" == r && o.x - domUtils.getXY(e).x < 8
                }
                function I(e, t, n, i, o) {
                    try {
                        e.body.style.cursor = "h" == n ? "col-resize": "v" == n ? "row-resize": "text",
                        browser.ie && (!n || w || u(e) ? X(e) : (V(e, e.document), Y(n, o))),
                        v = t
                    } catch(e) {}
                }
                function L(e, t) {
                    var n = domUtils.getXY(e);
                    return n ? n.x + e.offsetWidth - t.x < o ? "h": t.x - n.x < o ? "h1": n.y + e.offsetHeight - t.y < o ? "v": t.y - n.y < o ? "v1": "": ""
                }
                function R(t, n) {
                    if (!j()) if (s = {
                        x: n.clientX,
                        y: n.clientY
                    },
                    2 == n.button) {
                        var i = u(e),
                        o = !1;
                        if (i) {
                            var r = G(e, n);
                            utils.each(i.selectedTds,
                            function(e) {
                                e === r && (o = !0)
                            }),
                            o ? (r = i.selectedTds[0], setTimeout(function() {
                                e.selection.getRange().setStart(r, 0).setCursor(!1, !0)
                            },
                            0)) : (f(domUtils.getElementsByTagName(e.body, "th td")), i.clearSelected())
                        }
                    } else O(n)
                }
                function D(t) {
                    a = 0;
                    var n, i = U((t = t || e.window.event).target || t.srcElement);
                    if (i && (n = L(i, k(t)))) {
                        if (X(e), "h1" == n) if (n = "h", A(domUtils.findParentByTagName(i, "table"), i, t)) e.execCommand("adaptbywindow");
                        else if (i = c(i).getPreviewCell(i)) e.selection.getRange().selectNodeContents(i).setCursor(!0, !0);
                        if ("h" == n) {
                            var o = c(i),
                            r = $(i, o.table, !0);
                            r = function(e, t) {
                                for (var n = [], i = null, o = 0, r = e.length; o < r; o++)(i = e[o][t]) && n.push(i);
                                return n
                            } (r, "left"),
                            o.width = o.offsetWidth;
                            var s = [],
                            l = [];
                            utils.each(r,
                            function(e) {
                                s.push(e.offsetWidth)
                            }),
                            utils.each(r,
                            function(e) {
                                e.removeAttribute("width")
                            }),
                            window.setTimeout(function() {
                                var e = !0;
                                utils.each(r,
                                function(t, n) {
                                    var i = t.offsetWidth;
                                    if (i > s[n]) return e = !1,
                                    !1;
                                    l.push(i)
                                });
                                var t = e ? l: s;
                                utils.each(r,
                                function(e, n) {
                                    e.width = t[n] - W()
                                })
                            },
                            0)
                        }
                    }
                }
                function O(n) {
                    if (f(domUtils.getElementsByTagName(e.body, "td th")), utils.each(e.document.getElementsByTagName("table"),
                    function(e) {
                        e.ueTable = null
                    }), p = G(e, n)) {
                        var o = domUtils.findParentByTagName(p, "table", !0);
                        ut = c(o),
                        ut && ut.clearSelected(),
                        v ?
                        function(e) {
                            browser.ie && (e = function(e) {
                                var t = ["pageX", "pageY", "clientX", "clientY", "srcElement", "target"],
                                n = {};
                                if (e) for (var i, o, r = 0; i = t[r]; r++)(o = e[i]) && (n[i] = o);
                                return n
                            } (e));
                            P(),
                            i = !0,
                            t = setTimeout(function() {
                                M(e)
                            },
                            l)
                        } (n) : (e.document.body.style.webkitUserSelect = "", w = !0, e.addListener("mouseover", F))
                    }
                }
                function P() {
                    t && clearTimeout(t),
                    t = null
                }
                function M(t) {
                    if (i = !1, p = t.target || t.srcElement) {
                        var n = L(p, k(t));
                        /\d/.test(n) && (n = n.replace(/\d/, ""), p = c(p).getPreviewCell(p, "v" == n)),
                        X(e),
                        V(e, e.document),
                        e.fireEvent("saveScene"),
                        Y(n, p),
                        w = !0,
                        g = n,
                        x = p
                    }
                }
                function H(e, t) {
                    if (!j()) {
                        if (P(), i = !1, v && (a = ++a % 3, s = {
                            x: t.clientX,
                            y: t.clientY
                        },
                        setTimeout(function() {
                            a > 0 && a--
                        },
                        l), 2 === a)) return a = 0,
                        void D(t);
                        if (2 != t.button) {
                            var o = this,
                            r = o.selection.getRange(),
                            d = domUtils.findParentByTagName(r.startContainer, "table", !0),
                            u = domUtils.findParentByTagName(r.endContainer, "table", !0);
                            if ((d || u) && (d === u ? (d = domUtils.findParentByTagName(r.startContainer, ["td", "th", "caption"], !0)) !== (u = domUtils.findParentByTagName(r.endContainer, ["td", "th", "caption"], !0)) && o.selection.clearRange() : o.selection.clearRange()), w = !1, o.document.body.style.webkitUserSelect = "", g && x && (o.selection.getNative()[browser.ie9below ? "empty": "removeAllRanges"](), a = 0, C = o.document.getElementById("ue_tableDragLine"))) {
                                var m = domUtils.getXY(x),
                                f = domUtils.getXY(C);
                                switch (g) {
                                case "h":
                                    !
                                    function(e, t) {
                                        var i = c(e);
                                        if (i) {
                                            var o = i.table,
                                            r = $(e, o);
                                            if (o.style.width = "", o.removeAttribute("width"), t = function(e, t, i) {
                                                if ((e -= W()) < 0) return 0;
                                                var o = (e -= z(t)) < 0 ? "left": "right";
                                                return e = Math.abs(e),
                                                utils.each(i,
                                                function(t) {
                                                    var i = t[o];
                                                    i && (e = Math.min(e, z(i) - n))
                                                }),
                                                e = e < 0 ? 0 : e,
                                                "left" === o ? -e: e
                                            } (t, e, r), e.nextSibling) {
                                                utils.each(r,
                                                function(e) {
                                                    e.left.width = +e.left.width + t,
                                                    e.right && (e.right.width = +e.right.width - t)
                                                })
                                            } else utils.each(r,
                                            function(e) {
                                                e.left.width -= -t
                                            })
                                        }
                                    } (x, f.x - m.x);
                                    break;
                                case "v":
                                    !
                                    function(e, t) {
                                        if (Math.abs(t) < 10) return;
                                        var n = c(e);
                                        if (n) for (var i, o = n.getSameEndPosCells(e, "y"), r = o[0] ? o[0].offsetHeight: 0, a = 0; i = o[a++];) q(i, t, r)
                                    } (x, f.y - m.y - x.offsetHeight)
                                }
                                return g = "",
                                x = null,
                                X(o),
                                void o.fireEvent("saveScene")
                            }
                            if (p) {
                                var h = c(p),
                                b = h ? h.selectedTds[0] : null;
                                if (b) r = new dom.Range(o.document),
                                domUtils.isEmptyBlock(b) ? r.setStart(b, 0).setCursor(!1, !0) : r.selectNodeContents(b).shrinkBoundary().setCursor(!1, !0);
                                else if (! (r = o.selection.getRange().shrinkBoundary()).collapsed) {
                                    d = domUtils.findParentByTagName(r.startContainer, ["td", "th"], !0),
                                    u = domUtils.findParentByTagName(r.endContainer, ["td", "th"], !0); (d && !u || !d && u || d && u && d !== u) && r.setCursor(!1, !0)
                                }
                                p = null,
                                o.removeListener("mouseover", F)
                            } else {
                                var y = domUtils.findParentByTagName(t.target || t.srcElement, "td", !0);
                                if (y || (y = domUtils.findParentByTagName(t.target || t.srcElement, "th", !0)), y && ("TD" == y.tagName || "TH" == y.tagName)) {
                                    if (!0 === o.fireEvent("excludetable", y)) return; (r = new dom.Range(o.document)).setStart(y, 0).setCursor(!1, !0)
                                }
                            }
                            o._selectionChange(250, t)
                        }
                    }
                }
                function F(e, t) {
                    if (!j()) {
                        var n = t.target || t.srcElement;
                        if (h = domUtils.findParentByTagName(n, "td", !0) || domUtils.findParentByTagName(n, "th", !0), p && h && ("TD" == p.tagName && "TD" == h.tagName || "TH" == p.tagName && "TH" == h.tagName) && domUtils.findParentByTagName(p, "table") == domUtils.findParentByTagName(h, "table")) {
                            var i = c(h);
                            if (p != h) {
                                this.document.body.style.webkitUserSelect = "none",
                                this.selection.getNative()[browser.ie9below ? "empty": "removeAllRanges"]();
                                var o = i.getCellsRange(p, h);
                                i.setSelected(o)
                            } else this.document.body.style.webkitUserSelect = "",
                            i.clearSelected()
                        }
                        t.preventDefault ? t.preventDefault() : t.returnValue = !1
                    }
                }
                function q(e, t, n) {
                    var i = parseInt(domUtils.getComputedStyle(e, "line-height"), 10),
                    o = n + t;
                    t = o < i ? i: o,
                    e.style.height && (e.style.height = ""),
                    1 == e.rowSpan ? e.setAttribute("height", t) : e.removeAttribute && e.removeAttribute("height")
                }
                function j() {
                    return "false" === e.body.contentEditable
                }
                function $(e, t, n) {
                    if (t || (t = domUtils.findParentByTagName(e, "table")), !t) return null;
                    domUtils.getNodeIndex(e);
                    for (var i = e,
                    o = t.rows,
                    r = 0; i;) 1 === i.nodeType && (r += i.colSpan || 1),
                    i = i.previousSibling;
                    i = null;
                    var a = [];
                    return utils.each(o,
                    function(e) {
                        var t = e.cells,
                        i = 0;
                        utils.each(t,
                        function(e) {
                            return (i += e.colSpan || 1) === r ? (a.push({
                                left: e,
                                right: e.nextSibling || null
                            }), !1) : i > r ? (n && a.push({
                                left: e
                            }), !1) : void 0
                        })
                    }),
                    a
                }
                function z(e) {
                    var t = 0;
                    t = e.offsetWidth - W();
                    e.nextSibling || (t -=
                    function(e) {
                        if (tab = domUtils.findParentByTagName(e, "table", !1), void 0 === tab.offsetVal) {
                            var t = e.previousSibling;
                            tab.offsetVal = t && e.offsetWidth - t.offsetWidth === d.borderWidth ? d.borderWidth: 0
                        }
                        return tab.offsetVal
                    } (e)),
                    t = t < 0 ? 0 : t;
                    try {
                        e.width = t
                    } catch(e) {}
                    return t
                }
                function W() {
                    if (void 0 === d.tabcellSpace) {
                        var t = e.document.createElement("table"),
                        n = e.document.createElement("tbody"),
                        i = e.document.createElement("tr"),
                        o = e.document.createElement("td"),
                        r = null;
                        o.style.cssText = "border: 0;",
                        o.width = 1,
                        i.appendChild(o),
                        i.appendChild(r = o.cloneNode(!1)),
                        n.appendChild(i),
                        t.appendChild(n),
                        t.style.cssText = "visibility: hidden;",
                        e.body.appendChild(t),
                        d.paddingSpace = o.offsetWidth - 1;
                        var a = t.offsetWidth;
                        o.style.cssText = "",
                        r.style.cssText = "",
                        d.borderWidth = (t.offsetWidth - a) / 3,
                        d.tabcellSpace = d.paddingSpace + d.borderWidth,
                        e.body.removeChild(t)
                    }
                    return W = function() {
                        return d.tabcellSpace
                    },
                    d.tabcellSpace
                }
                function V(e, t) {
                    w || (C = e.document.createElement("div"), domUtils.setAttributes(C, {
                        id: "ue_tableDragLine",
                        unselectable: "on",
                        contenteditable: !1,
                        onresizestart: "return false",
                        ondragstart: "return false",
                        onselectstart: "return false",
                        style: "background-color:blue;position:absolute;padding:0;margin:0;background-image:none;border:0px none;opacity:0;filter:alpha(opacity=0)"
                    }), e.body.appendChild(C))
                }
                function X(e) {
                    if (!w) for (var t; t = e.document.getElementById("ue_tableDragLine");) domUtils.remove(t)
                }
                function Y(e, t) {
                    if (t) {
                        var n, i = domUtils.findParentByTagName(t, "table"),
                        o = i.getElementsByTagName("caption"),
                        r = i.offsetWidth,
                        a = i.offsetHeight - (o.length > 0 ? o[0].offsetHeight: 0),
                        s = domUtils.getXY(i),
                        l = domUtils.getXY(t);
                        switch (e) {
                        case "h":
                            n = "height:" + a + "px;top:" + (s.y + (o.length > 0 ? o[0].offsetHeight: 0)) + "px;left:" + (l.x + t.offsetWidth),
                            C.style.cssText = n + "px;position: absolute;display:block;background-color:blue;width:1px;border:0; color:blue;opacity:.3;filter:alpha(opacity=30)";
                            break;
                        case "v":
                            n = "width:" + r + "px;left:" + s.x + "px;top:" + (l.y + t.offsetHeight),
                            C.style.cssText = n + "px;overflow:hidden;position: absolute;display:block;background-color:blue;height:1px;border:0;color:blue;opacity:.2;filter:alpha(opacity=20)"
                        }
                    }
                }
                function K(e, t) {
                    for (var n, i, o = domUtils.getElementsByTagName(e.body, "table"), r = 0; i = o[r++];) {
                        var a = domUtils.getElementsByTagName(i, "td");
                        a[0] && (t ? (n = a[0].style.borderColor.replace(/\s/g, ""), /(#ffffff)|(rgb\(255,255,255\))/gi.test(n) && domUtils.addClass(i, "noBorderTable")) : domUtils.removeClasses(i, "noBorderTable"))
                    }
                }
                function G(e, t) {
                    var n, i = domUtils.findParentByTagName(t.target || t.srcElement, ["td", "th"], !0);
                    if (!i) return null;
                    if (n = L(i, k(t)), !i) return null;
                    if ("h1" === n && i.previousSibling) {
                        var o = domUtils.getXY(i),
                        r = i.offsetWidth;
                        Math.abs(o.x + r - t.clientX) > r / 3 && (i = i.previousSibling)
                    } else if ("v1" === n && i.parentNode.previousSibling) {
                        o = domUtils.getXY(i);
                        var a = i.offsetHeight;
                        Math.abs(o.y + a - t.clientY) > a / 3 && (i = i.parentNode.previousSibling.firstChild)
                    }
                    return i && !0 !== e.fireEvent("excludetable", i) ? i: null
                }
                e.ready(function() {
                    var t, n, i, o;
                    utils.cssRule("table", ".selectTdClass{background-color:#edf5fa !important}table.noBorderTable td,table.noBorderTable th,table.noBorderTable caption{border:1px dashed #ddd !important}table{margin-bottom:10px;border-collapse:collapse;display:table;}td,th{padding: 5px 10px;border: 1px solid #DDD;}caption{border:1px dashed #DDD;border-bottom:0;padding:3px;text-align:center;}th{border-top:1px solid #BBB;background-color:#F7F7F7;}table tr.firstRow th{border-top-width:2px;}.ue-table-interlace-color-single{ background-color: #fcfcfc; } .ue-table-interlace-color-double{ background-color: #f7faff; }td p{margin:0;padding:0;}", e.document),
                    e.addListener("keydown",
                    function(e, o) {
                        var r = this,
                        a = o.keyCode || o.which;
                        if (8 == a) {
                            var s; (s = u(r)) && s.selectedTds.length && (s.isFullCol() ? r.execCommand("deletecol") : s.isFullRow() ? r.execCommand("deleterow") : r.fireEvent("delcells"), domUtils.preventDefault(o));
                            var l = domUtils.findParentByTagName(r.selection.getStart(), "caption", !0),
                            d = r.selection.getRange();
                            if (d.collapsed && l && S(l)) {
                                r.fireEvent("saveScene");
                                var c = l.parentNode;
                                domUtils.remove(l),
                                c && d.setStart(c.rows[0].cells[0], 0).setCursor(!1, !0),
                                r.fireEvent("saveScene")
                            }
                        }
                        if (46 == a && (s = u(r))) {
                            r.fireEvent("saveScene");
                            for (var m = 0; y = s.selectedTds[m++];) domUtils.fillNode(r.document, y);
                            r.fireEvent("saveScene"),
                            domUtils.preventDefault(o)
                        }
                        if (13 == a) {
                            var f = r.selection.getRange();
                            if (l = domUtils.findParentByTagName(f.startContainer, "caption", !0)) {
                                var c = domUtils.findParentByTagName(l, "table");
                                return f.collapsed ? l && f.setStart(c.rows[0].cells[0], 0).setCursor(!1, !0) : (f.deleteContents(), r.fireEvent("saveScene")),
                                void domUtils.preventDefault(o)
                            }
                            if (f.collapsed) if (c = domUtils.findParentByTagName(f.startContainer, "table")) {
                                var p = c.rows[0].cells[0],
                                h = domUtils.findParentByTagName(r.selection.getStart(), ["td", "th"], !0),
                                g = c.previousSibling;
                                if (p === h && (!g || 1 == g.nodeType && "TABLE" == g.tagName) && domUtils.isStartInblock(f)) {
                                    var v = domUtils.findParent(r.selection.getStart(),
                                    function(e) {
                                        return domUtils.isBlockElm(e)
                                    },
                                    !0);
                                    v && (/t(h|d)/i.test(v.tagName) || v === h.firstChild) && (r.execCommand("insertparagraphbeforetable"), domUtils.preventDefault(o))
                                }
                            }
                        }
                        if ((o.ctrlKey || o.metaKey) && "67" == o.keyCode && (t = null, s = u(r))) {
                            var b = s.selectedTds;
                            n = s.isFullCol(),
                            i = s.isFullRow(),
                            t = [[s.cloneCell(b[0], null, !0)]];
                            var y;
                            for (m = 1; y = b[m]; m++) y.parentNode !== b[m - 1].parentNode ? t.push([s.cloneCell(y, null, !0)]) : t[t.length - 1].push(s.cloneCell(y, null, !0))
                        }
                    }),
                    e.addListener("tablehasdeleted",
                    function() {
                        I(this, !1, "", null),
                        b && domUtils.remove(b)
                    }),
                    e.addListener("beforepaste",
                    function(e, o) {
                        var r = this,
                        a = r.selection.getRange();
                        if (domUtils.findParentByTagName(a.startContainer, "caption", !0)) return (s = r.document.createElement("div")).innerHTML = o.html,
                        void(o.html = s[browser.ie9below ? "innerText": "textContent"]);
                        var s, l, f = u(r);
                        if (t) {
                            r.fireEvent("saveScene");
                            a = r.selection.getRange();
                            var p, h, g = domUtils.findParentByTagName(a.startContainer, ["td", "th"], !0);
                            if (g) {
                                var v = c(g);
                                if (i) {
                                    var b = v.getCellInfo(g).rowIndex;
                                    "TH" == g.tagName && b++;
                                    for (var y = 0; T = t[y++];) {
                                        for (var C = v.insertRow(b++, "td"), x = 0; _ = T[x]; x++) {
                                            var w = C.cells[x];
                                            w || (w = C.insertCell(x)),
                                            w.innerHTML = _.innerHTML,
                                            _.getAttribute("width") && w.setAttribute("width", _.getAttribute("width")),
                                            _.getAttribute("vAlign") && w.setAttribute("vAlign", _.getAttribute("vAlign")),
                                            _.getAttribute("align") && w.setAttribute("align", _.getAttribute("align")),
                                            _.style.cssText && (w.style.cssText = _.style.cssText)
                                        }
                                        for (x = 0; (_ = C.cells[x]) && T[x]; x++) _.innerHTML = T[x].innerHTML,
                                        T[x].getAttribute("width") && _.setAttribute("width", T[x].getAttribute("width")),
                                        T[x].getAttribute("vAlign") && _.setAttribute("vAlign", T[x].getAttribute("vAlign")),
                                        T[x].getAttribute("align") && _.setAttribute("align", T[x].getAttribute("align")),
                                        T[x].style.cssText && (_.style.cssText = T[x].style.cssText)
                                    }
                                } else {
                                    if (n) {
                                        k = v.getCellInfo(g);
                                        for (var N = 0,
                                        T = (x = 0, t[0]); _ = T[x++];) N += _.colSpan || 1;
                                        for (r.__hasEnterExecCommand = !0, y = 0; y < N; y++) r.execCommand("insertcol");
                                        r.__hasEnterExecCommand = !1,
                                        "TH" == (g = v.table.rows[0].cells[k.cellIndex]).tagName && (g = v.table.rows[1].cells[k.cellIndex])
                                    }
                                    for (y = 0; T = t[y++];) {
                                        p = g;
                                        for (x = 0; _ = T[x++];) if (g) g.innerHTML = _.innerHTML,
                                        _.getAttribute("width") && g.setAttribute("width", _.getAttribute("width")),
                                        _.getAttribute("vAlign") && g.setAttribute("vAlign", _.getAttribute("vAlign")),
                                        _.getAttribute("align") && g.setAttribute("align", _.getAttribute("align")),
                                        _.style.cssText && (g.style.cssText = _.style.cssText),
                                        h = g,
                                        g = g.nextSibling;
                                        else {
                                            var U = _.cloneNode(!0);
                                            domUtils.removeAttributes(U, ["class", "rowSpan", "colSpan"]),
                                            h.parentNode.appendChild(U)
                                        }
                                        if (g = v.getNextCell(p, !0, !0), !t[y]) break;
                                        if (!g) {
                                            var k = v.getCellInfo(p);
                                            v.table.insertRow(v.table.rows.length),
                                            v.update(),
                                            g = v.getVSideCell(p, !0)
                                        }
                                    }
                                }
                                v.update()
                            } else {
                                f = r.document.createElement("table");
                                for (y = 0; T = t[y++];) {
                                    var _;
                                    for (C = f.insertRow(f.rows.length), x = 0; _ = T[x++];) U = d.cloneCell(_, null, !0),
                                    domUtils.removeAttributes(U, ["class"]),
                                    C.appendChild(U);
                                    2 == x && U.rowSpan > 1 && (U.rowSpan = 1)
                                }
                                var B = m(r),
                                A = r.body.offsetWidth - 2 * parseInt(domUtils.getComputedStyle(r.body, "margin-left"), 10) - 2 * B.tableBorder - (r.options.offsetWidth || 0);
                                r.execCommand("insertHTML", "<table  " + (n && i ? 'width="' + A + '"': "") + ">" + f.innerHTML.replace(/>\s*</g, "><").replace(/\bth\b/gi, "td") + "</table>")
                            }
                            return r.fireEvent("contentchange"),
                            r.fireEvent("saveScene"),
                            o.html = "",
                            !0
                        } (s = r.document.createElement("div")).innerHTML = o.html,
                        l = s.getElementsByTagName("table"),
                        domUtils.findParentByTagName(r.selection.getStart(), "table") ? (utils.each(l,
                        function(e) {
                            domUtils.remove(e)
                        }), domUtils.findParentByTagName(r.selection.getStart(), "caption", !0) && (s.innerHTML = s[browser.ie ? "innerText": "textContent"])) : utils.each(l,
                        function(e) {
                            E(e, !0),
                            domUtils.removeAttributes(e, ["style", "border"]),
                            utils.each(domUtils.getElementsByTagName(e, "td"),
                            function(e) {
                                S(e) && domUtils.fillNode(r.document, e),
                                E(e, !0)
                            })
                        }),
                        o.html = s.innerHTML
                    }),
                    e.addListener("afterpaste",
                    function() {
                        utils.each(domUtils.getElementsByTagName(e.body, "table"),
                        function(t) {
                            if (t.offsetWidth > e.body.offsetWidth) {
                                var n = m(e, t);
                                t.style.width = e.body.offsetWidth - 2 * parseInt(domUtils.getComputedStyle(e.body, "margin-left"), 10) - 2 * n.tableBorder - (e.options.offsetWidth || 0) + "px"
                            }
                        })
                    }),
                    e.addListener("blur",
                    function() {
                        t = null
                    }),
                    e.addListener("keydown",
                    function() {
                        clearTimeout(o),
                        o = setTimeout(function() {
                            var t = e.selection.getRange(),
                            n = domUtils.findParentByTagName(t.startContainer, ["th", "td"], !0);
                            if (n) {
                                var i = n.parentNode.parentNode.parentNode;
                                i.offsetWidth > i.getAttribute("width") && (n.style.wordBreak = "break-all")
                            }
                        },
                        100)
                    }),
                    e.addListener("selectionchange",
                    function() {
                        I(e, !1, "", null)
                    }),
                    e.addListener("contentchange",
                    function() {
                        var e = this;
                        if (X(e), !u(e)) {
                            var t = e.selection.getRange().startContainer;
                            t = domUtils.findParentByTagName(t, ["td", "th"], !0),
                            utils.each(domUtils.getElementsByTagName(e.document, "table"),
                            function(t) { ! 0 !== e.fireEvent("excludetable", t) && (t.ueTable = new d(t), t.onmouseover = function() {
                                    e.fireEvent("tablemouseover", t)
                                },
                                t.onmousemove = function() {
                                    e.fireEvent("tablemousemove", t),
                                    e.options.tableDragable && B(!0, this, e),
                                    utils.defer(function() {
                                        e.fireEvent("contentchange", 50)
                                    },
                                    !0)
                                },
                                t.onmouseout = function() {
                                    e.fireEvent("tablemouseout", t),
                                    I(e, !1, "", null),
                                    X(e)
                                },
                                t.onclick = function(t) {
                                    var n = U((t = e.window.event || t).target || t.srcElement);
                                    if (n) {
                                        var i, o = c(n),
                                        r = o.table,
                                        a = o.getCellInfo(n),
                                        s = e.selection.getRange();
                                        if (A(r, n, t, !0)) {
                                            var l = o.getCell(o.indexTable[o.rowsNum - 1][a.colIndex].rowIndex, o.indexTable[o.rowsNum - 1][a.colIndex].cellIndex);
                                            t.shiftKey && o.selectedTds.length ? o.selectedTds[0] !== l ? (i = o.getCellsRange(o.selectedTds[0], l), o.setSelected(i)) : s && s.selectNodeContents(l).select() : n !== l ? (i = o.getCellsRange(n, l), o.setSelected(i)) : s && s.selectNodeContents(l).select()
                                        } else if (A(r, n, t)) {
                                            var d = o.getCell(o.indexTable[a.rowIndex][o.colsNum - 1].rowIndex, o.indexTable[a.rowIndex][o.colsNum - 1].cellIndex);
                                            t.shiftKey && o.selectedTds.length ? o.selectedTds[0] !== d ? (i = o.getCellsRange(o.selectedTds[0], d), o.setSelected(i)) : s && s.selectNodeContents(d).select() : n !== d ? (i = o.getCellsRange(n, d), o.setSelected(i)) : s && s.selectNodeContents(d).select()
                                        }
                                    }
                                })
                            }),
                            K(e, !0)
                        }
                    }),
                    domUtils.on(e.document, "mousemove", _),
                    domUtils.on(e.document, "mouseout",
                    function(t) {
                        "TABLE" == (t.target || t.srcElement).tagName && I(e, !1, "", null)
                    }),
                    e.addListener("interlacetable",
                    function(e, t, n) {
                        if (t) for (var i, o, r, a = t.rows,
                        s = a.length,
                        l = 0; l < s; l++) a[l].className = (i = n || this.options.classList, r = !0, i[o = l] ? i[o] : r ? i[o % i.length] : "")
                    }),
                    e.addListener("uninterlacetable",
                    function(e, t) {
                        if (t) for (var n = t.rows,
                        i = this.options.classList,
                        o = n.length,
                        r = 0; r < o; r++) domUtils.removeClasses(n[r], i)
                    }),
                    e.addListener("mousedown", R),
                    e.addListener("mouseup", H),
                    domUtils.on(e.body, "dragstart",
                    function(t) {
                        H.call(e, "dragstart", t)
                    }),
                    e.addOutputRule(function(e) {
                        utils.each(e.getNodesByTagName("div"),
                        function(e) {
                            "ue_tableDragLine" == e.getAttr("id") && e.parentNode.removeChild(e)
                        })
                    });
                    var r = 0;
                    e.addListener("mousedown",
                    function() {
                        r = 0
                    }),
                    e.addListener("tabkeydown",
                    function() {
                        var t = this.selection.getRange(),
                        n = t.getCommonAncestor(!0, !0),
                        i = domUtils.findParentByTagName(n, "table");
                        if (i) {
                            if (domUtils.findParentByTagName(n, "caption", !0)) { (o = domUtils.getElementsByTagName(i, "th td")) && o.length && t.setStart(o[0], 0).setCursor(!1, !0)
                            } else {
                                var o = domUtils.findParentByTagName(n, ["td", "th"], !0),
                                a = c(o);
                                r = o.rowSpan > 1 ? r: a.getCellInfo(o).rowIndex;
                                var s = a.getTabNextCell(o, r);
                                s ? S(s) ? t.setStart(s, 0).setCursor(!1, !0) : t.selectNodeContents(s).select() : (e.fireEvent("saveScene"), e.__hasEnterExecCommand = !0, this.execCommand("insertrownext"), e.__hasEnterExecCommand = !1, (t = this.selection.getRange()).setStart(i.rows[i.rows.length - 1].cells[0], 0).setCursor(), e.fireEvent("saveScene"))
                            }
                            return ! 0
                        }
                    }),
                    browser.ie && e.addListener("selectionchange",
                    function() {
                        I(this, !1, "", null)
                    }),
                    e.addListener("keydown",
                    function(e, t) {
                        var n = t.keyCode || t.which;
                        if (8 != n && 46 != n) {
                            var i = !(t.ctrlKey || t.metaKey || t.shiftKey || t.altKey);
                            i && f(domUtils.getElementsByTagName(this.body, "td"));
                            var o = u(this);
                            o && i && o.clearSelected()
                        }
                    }),
                    e.addListener("beforegetcontent",
                    function() {
                        K(this, !1),
                        browser.ie && utils.each(this.document.getElementsByTagName("caption"),
                        function(e) {
                            domUtils.isEmptyNode(e) && (e.innerHTML = "&nbsp;")
                        })
                    }),
                    e.addListener("aftergetcontent",
                    function() {
                        K(this, !0)
                    }),
                    e.addListener("getAllHtml",
                    function() {
                        f(e.document.getElementsByTagName("td"))
                    }),
                    e.addListener("fullscreenchanged",
                    function(t, n) {
                        if (!n) {
                            var i = this.body.offsetWidth / document.body.offsetWidth,
                            o = domUtils.getElementsByTagName(this.body, "table");
                            utils.each(o,
                            function(t) {
                                if (t.offsetWidth < e.body.offsetWidth) return ! 1;
                                var n = domUtils.getElementsByTagName(t, "td"),
                                o = [];
                                utils.each(n,
                                function(e) {
                                    o.push(e.offsetWidth)
                                });
                                for (var r, a = 0; r = n[a]; a++) r.setAttribute("width", Math.floor(o[a] * i));
                                t.setAttribute("width", Math.floor(function(e, t, n) {
                                    var i = e.body;
                                    return i.offsetWidth - (t ? 2 * parseInt(domUtils.getComputedStyle(i, "margin-left"), 10) : 0) - 2 * n.tableBorder - (e.options.offsetWidth || 0)
                                } (e, !0, m(e))))
                            })
                        }
                    });
                    var a = e.execCommand;
                    e.execCommand = function(e, t) {
                        var n = this;
                        e = e.toLowerCase();
                        var i, o, r = u(n),
                        s = new dom.Range(n.document),
                        l = n.commands[e] || UE.commands[e];
                        if (l) {
                            if (!r || N[e] || l.notNeedUndo || n.__hasEnterExecCommand) o = a.apply(n, arguments);
                            else {
                                n.__hasEnterExecCommand = !0,
                                n.fireEvent("beforeexeccommand", e),
                                i = r.selectedTds;
                                for (var d, c, m, f = -2,
                                p = -2,
                                h = 0; m = i[h]; h++) S(m) ? s.setStart(m, 0).setCursor(!1, !0) : s.selectNode(m).select(!0),
                                c = n.queryCommandState(e),
                                d = n.queryCommandValue(e),
                                -1 != c && (f === c && p === d || (n._ignoreContentChange = !0, o = a.apply(n, arguments), n._ignoreContentChange = !1), f = n.queryCommandState(e), p = n.queryCommandValue(e), domUtils.isEmptyBlock(m) && domUtils.fillNode(n.document, m));
                                s.setStart(i[0], 0).shrinkBoundary(!0).setCursor(!1, !0),
                                n.fireEvent("contentchange"),
                                n.fireEvent("afterexeccommand", e),
                                n.__hasEnterExecCommand = !1,
                                n._selectionChange()
                            }
                            return o
                        }
                    }
                })
            },
            UE.UETable.prototype.sortTable = function(e, t) {
                var n = this.table,
                i = n.rows,
                o = [],
                r = "TH" === i[0].cells[0].tagName,
                a = 0;
                if (this.selectedTds.length) {
                    for (var s = this.cellsRange,
                    l = s.endRowIndex + 1,
                    d = s.beginRowIndex; d < l; d++) o[d] = i[d];
                    o.splice(0, s.beginRowIndex),
                    a = s.endRowIndex + 1 === this.rowsNum ? 0 : s.endRowIndex + 1
                } else for (d = 0, l = i.length; d < l; d++) o[d] = i[d];
                var c = {
                    reversecurrent: function(e, t) {
                        return 1
                    },
                    orderbyasc: function(e, t) {
                        var n = e.innerText || e.textContent,
                        i = t.innerText || t.textContent;
                        return n.localeCompare(i)
                    },
                    reversebyasc: function(e, t) {
                        var n = e.innerHTML;
                        return t.innerHTML.localeCompare(n)
                    },
                    orderbynum: function(e, t) {
                        var n = e[browser.ie ? "innerText": "textContent"].match(/\d+/),
                        i = t[browser.ie ? "innerText": "textContent"].match(/\d+/);
                        return n && (n = +n[0]),
                        i && (i = +i[0]),
                        (n || 0) - (i || 0)
                    },
                    reversebynum: function(e, t) {
                        var n = e[browser.ie ? "innerText": "textContent"].match(/\d+/),
                        i = t[browser.ie ? "innerText": "textContent"].match(/\d+/);
                        return n && (n = +n[0]),
                        i && (i = +i[0]),
                        (i || 0) - (n || 0)
                    }
                };
                n.setAttribute("data-sort-type", t && "string" == typeof t && c[t] ? t: ""),
                r && o.splice(0, 1),
                o = utils.sort(o,
                function(n, i) {
                    return t && "function" == typeof t ? t.call(this, n.cells[e], i.cells[e]) : t && "number" == typeof t ? 1 : t && "string" == typeof t && c[t] ? c[t].call(this, n.cells[e], i.cells[e]) : c.orderbyasc.call(this, n.cells[e], i.cells[e])
                });
                var u = n.ownerDocument.createDocumentFragment(),
                m = 0;
                for (l = o.length; m < l; m++) u.appendChild(o[m]);
                var f = n.getElementsByTagName("tbody")[0];
                a ? f.insertBefore(u, i[a - s.endRowIndex + s.beginRowIndex - 1]) : f.appendChild(u)
            },
            UE.plugins.tablesort = function() {
                var e = this,
                t = UE.UETable,
                n = function(e) {
                    return t.getTableItemsByRange(e)
                };
                e.ready(function() {
                    utils.cssRule("tablesort", "table.sortEnabled tr.firstRow th,table.sortEnabled tr.firstRow td{padding-right:20px;background-repeat: no-repeat;background-position: center right;   background-image:url(" + e.options.themePath + e.options.theme + "/images/sortable.png);}", e.document),
                    e.addListener("afterexeccommand",
                    function(e, t) {
                        "mergeright" != t && "mergedown" != t && "mergecells" != t || this.execCommand("disablesort")
                    })
                }),
                UE.commands.sorttable = {
                    queryCommandState: function() {
                        var e = n(this);
                        if (!e.cell) return - 1;
                        for (var t, i = e.table.getElementsByTagName("td"), o = 0; t = i[o++];) if (1 != t.rowSpan || 1 != t.colSpan) return - 1;
                        return 0
                    },
                    execCommand: function(e, i) {
                        var o, r = this.selection.getRange(),
                        a = r.createBookmark(!0),
                        s = n(this),
                        l = s.cell,
                        d = (o = s.table, t.getUETable(o)),
                        c = d.getCellInfo(l);
                        d.sortTable(c.cellIndex, i),
                        r.moveToBookmark(a);
                        try {
                            r.select()
                        } catch(e) {}
                    }
                },
                UE.commands.enablesort = UE.commands.disablesort = {
                    queryCommandState: function(e) {
                        var t = n(this).table;
                        if (t && "enablesort" == e) for (var i = domUtils.getElementsByTagName(t, "th td"), o = 0; o < i.length; o++) if (i[o].getAttribute("colspan") > 1 || i[o].getAttribute("rowspan") > 1) return - 1;
                        return t ? "enablesort" == e ^ "sortEnabled" != t.getAttribute("data-sort") ? -1 : 0 : -1
                    },
                    execCommand: function(e) {
                        var t = n(this).table;
                        t.setAttribute("data-sort", "enablesort" == e ? "sortEnabled": "sortDisabled"),
                        "enablesort" == e ? domUtils.addClass(t, "sortEnabled") : domUtils.removeClasses(t, "sortEnabled")
                    }
                }
            },
            UE.plugins.contextmenu = function() {
                var e = this;
                if (e.setOpt("enableContextMenu", !0), !1 !== e.getOpt("enableContextMenu")) {
                    var t, n = e.getLang("contextMenu"),
                    i = e.options.contextMenu || [{
                        label: n.selectall,
                        cmdName: "selectall"
                    },
                    {
                        label: n.cleardoc,
                        cmdName: "cleardoc",
                        exec: function() {
                            confirm(n.confirmclear) && this.execCommand("cleardoc")
                        }
                    },
                    "-", {
                        label: n.unlink,
                        cmdName: "unlink"
                    },
                    "-", {
                        group: n.paragraph,
                        icon: "justifyjustify",
                        subMenu: [{
                            label: n.justifyleft,
                            cmdName: "justify",
                            value: "left"
                        },
                        {
                            label: n.justifyright,
                            cmdName: "justify",
                            value: "right"
                        },
                        {
                            label: n.justifycenter,
                            cmdName: "justify",
                            value: "center"
                        },
                        {
                            label: n.justifyjustify,
                            cmdName: "justify",
                            value: "justify"
                        }]
                    },
                    "-", {
                        group: n.table,
                        icon: "table",
                        subMenu: [{
                            label: n.inserttable,
                            cmdName: "inserttable"
                        },
                        {
                            label: n.deletetable,
                            cmdName: "deletetable"
                        },
                        "-", {
                            label: n.deleterow,
                            cmdName: "deleterow"
                        },
                        {
                            label: n.deletecol,
                            cmdName: "deletecol"
                        },
                        {
                            label: n.insertcol,
                            cmdName: "insertcol"
                        },
                        {
                            label: n.insertcolnext,
                            cmdName: "insertcolnext"
                        },
                        {
                            label: n.insertrow,
                            cmdName: "insertrow"
                        },
                        {
                            label: n.insertrownext,
                            cmdName: "insertrownext"
                        },
                        "-", {
                            label: n.insertcaption,
                            cmdName: "insertcaption"
                        },
                        {
                            label: n.deletecaption,
                            cmdName: "deletecaption"
                        },
                        {
                            label: n.inserttitle,
                            cmdName: "inserttitle"
                        },
                        {
                            label: n.deletetitle,
                            cmdName: "deletetitle"
                        },
                        {
                            label: n.inserttitlecol,
                            cmdName: "inserttitlecol"
                        },
                        {
                            label: n.deletetitlecol,
                            cmdName: "deletetitlecol"
                        },
                        "-", {
                            label: n.mergecells,
                            cmdName: "mergecells"
                        },
                        {
                            label: n.mergeright,
                            cmdName: "mergeright"
                        },
                        {
                            label: n.mergedown,
                            cmdName: "mergedown"
                        },
                        "-", {
                            label: n.splittorows,
                            cmdName: "splittorows"
                        },
                        {
                            label: n.splittocols,
                            cmdName: "splittocols"
                        },
                        {
                            label: n.splittocells,
                            cmdName: "splittocells"
                        },
                        "-", {
                            label: n.averageDiseRow,
                            cmdName: "averagedistributerow"
                        },
                        {
                            label: n.averageDisCol,
                            cmdName: "averagedistributecol"
                        },
                        "-", {
                            label: n.edittd,
                            cmdName: "edittd",
                            exec: function() {
                                UE.ui.edittd && new UE.ui.edittd(this),
                                this.getDialog("edittd").open()
                            }
                        },
                        {
                            label: n.edittable,
                            cmdName: "edittable",
                            exec: function() {
                                UE.ui.edittable && new UE.ui.edittable(this),
                                this.getDialog("edittable").open()
                            }
                        },
                        {
                            label: n.setbordervisible,
                            cmdName: "setbordervisible"
                        }]
                    },
                    {
                        group: n.tablesort,
                        icon: "tablesort",
                        subMenu: [{
                            label: n.enablesort,
                            cmdName: "enablesort"
                        },
                        {
                            label: n.disablesort,
                            cmdName: "disablesort"
                        },
                        "-", {
                            label: n.reversecurrent,
                            cmdName: "sorttable",
                            value: "reversecurrent"
                        },
                        {
                            label: n.orderbyasc,
                            cmdName: "sorttable",
                            value: "orderbyasc"
                        },
                        {
                            label: n.reversebyasc,
                            cmdName: "sorttable",
                            value: "reversebyasc"
                        },
                        {
                            label: n.orderbynum,
                            cmdName: "sorttable",
                            value: "orderbynum"
                        },
                        {
                            label: n.reversebynum,
                            cmdName: "sorttable",
                            value: "reversebynum"
                        }]
                    },
                    {
                        group: n.borderbk,
                        icon: "borderBack",
                        subMenu: [{
                            label: n.setcolor,
                            cmdName: "interlacetable",
                            exec: function() {
                                this.execCommand("interlacetable")
                            }
                        },
                        {
                            label: n.unsetcolor,
                            cmdName: "uninterlacetable",
                            exec: function() {
                                this.execCommand("uninterlacetable")
                            }
                        },
                        {
                            label: n.setbackground,
                            cmdName: "settablebackground",
                            exec: function() {
                                this.execCommand("settablebackground", {
                                    repeat: !0,
                                    colorList: ["#bbb", "#ccc"]
                                })
                            }
                        },
                        {
                            label: n.unsetbackground,
                            cmdName: "cleartablebackground",
                            exec: function() {
                                this.execCommand("cleartablebackground")
                            }
                        },
                        {
                            label: n.redandblue,
                            cmdName: "settablebackground",
                            exec: function() {
                                this.execCommand("settablebackground", {
                                    repeat: !0,
                                    colorList: ["red", "blue"]
                                })
                            }
                        },
                        {
                            label: n.threecolorgradient,
                            cmdName: "settablebackground",
                            exec: function() {
                                this.execCommand("settablebackground", {
                                    repeat: !0,
                                    colorList: ["#aaa", "#bbb", "#ccc"]
                                })
                            }
                        }]
                    },
                    {
                        group: n.aligntd,
                        icon: "aligntd",
                        subMenu: [{
                            cmdName: "cellalignment",
                            value: {
                                align: "left",
                                vAlign: "top"
                            }
                        },
                        {
                            cmdName: "cellalignment",
                            value: {
                                align: "center",
                                vAlign: "top"
                            }
                        },
                        {
                            cmdName: "cellalignment",
                            value: {
                                align: "right",
                                vAlign: "top"
                            }
                        },
                        {
                            cmdName: "cellalignment",
                            value: {
                                align: "left",
                                vAlign: "middle"
                            }
                        },
                        {
                            cmdName: "cellalignment",
                            value: {
                                align: "center",
                                vAlign: "middle"
                            }
                        },
                        {
                            cmdName: "cellalignment",
                            value: {
                                align: "right",
                                vAlign: "middle"
                            }
                        },
                        {
                            cmdName: "cellalignment",
                            value: {
                                align: "left",
                                vAlign: "bottom"
                            }
                        },
                        {
                            cmdName: "cellalignment",
                            value: {
                                align: "center",
                                vAlign: "bottom"
                            }
                        },
                        {
                            cmdName: "cellalignment",
                            value: {
                                align: "right",
                                vAlign: "bottom"
                            }
                        }]
                    },
                    {
                        group: n.aligntable,
                        icon: "aligntable",
                        subMenu: [{
                            cmdName: "tablealignment",
                            className: "left",
                            label: n.tableleft,
                            value: "left"
                        },
                        {
                            cmdName: "tablealignment",
                            className: "center",
                            label: n.tablecenter,
                            value: "center"
                        },
                        {
                            cmdName: "tablealignment",
                            className: "right",
                            label: n.tableright,
                            value: "right"
                        }]
                    },
                    "-", {
                        label: n.insertparagraphbefore,
                        cmdName: "insertparagraph",
                        value: !0
                    },
                    {
                        label: n.insertparagraphafter,
                        cmdName: "insertparagraph"
                    },
                    {
                        label: n.copy,
                        cmdName: "copy"
                    },
                    {
                        label: n.paste,
                        cmdName: "paste"
                    }];
                    if (i.length) {
                        var o = UE.ui.uiUtils;
                        e.addListener("contextmenu",
                        function(r, a) {
                            var s = o.getViewportOffsetByEvent(a);
                            e.fireEvent("beforeselectionchange"),
                            t && t.destroy();
                            for (var l, d = 0,
                            c = []; l = i[d]; d++) {
                                var u; !
                                function(t) {
                                    if ("-" == t)(u = c[c.length - 1]) && "-" !== u && c.push("-");
                                    else if (t.hasOwnProperty("group")) {
                                        for (var i, o = 0,
                                        r = []; i = t.subMenu[o]; o++) !
                                        function(t) {
                                            "-" == t ? (u = r[r.length - 1]) && "-" !== u ? r.push("-") : r.splice(r.length - 1) : (e.commands[t.cmdName] || UE.commands[t.cmdName] || t.query) && (t.query ? t.query() : e.queryCommandState(t.cmdName)) > -1 && r.push({
                                                label: t.label || e.getLang("contextMenu." + t.cmdName + (t.value || "")) || "",
                                                className: "edui-for-" + t.cmdName + (t.className ? " edui-for-" + t.cmdName + "-" + t.className: ""),
                                                onclick: t.exec ?
                                                function() {
                                                    t.exec.call(e)
                                                }: function() {
                                                    e.execCommand(t.cmdName, t.value)
                                                }
                                            })
                                        } (i);
                                        if (r.length) {
                                            c.push({
                                                label: function() {
                                                    switch (t.icon) {
                                                    case "table":
                                                        return e.getLang("contextMenu.table");
                                                    case "justifyjustify":
                                                        return e.getLang("contextMenu.paragraph");
                                                    case "aligntd":
                                                        return e.getLang("contextMenu.aligntd");
                                                    case "aligntable":
                                                        return e.getLang("contextMenu.aligntable");
                                                    case "tablesort":
                                                        return n.tablesort;
                                                    case "borderBack":
                                                        return n.borderbk;
                                                    default:
                                                        return ""
                                                    }
                                                } (),
                                                className: "edui-for-" + t.icon,
                                                subMenu: {
                                                    items: r,
                                                    editor: e
                                                }
                                            })
                                        }
                                    } else(e.commands[t.cmdName] || UE.commands[t.cmdName] || t.query) && (t.query ? t.query.call(e) : e.queryCommandState(t.cmdName)) > -1 && c.push({
                                        label: t.label || e.getLang("contextMenu." + t.cmdName),
                                        className: "edui-for-" + (t.icon ? t.icon: t.cmdName + (t.value || "")),
                                        onclick: t.exec ?
                                        function() {
                                            t.exec.call(e)
                                        }: function() {
                                            e.execCommand(t.cmdName, t.value)
                                        }
                                    })
                                } (l)
                            }
                            if ("-" == c[c.length - 1] && c.pop(), (t = new UE.ui.Menu({
                                items: c,
                                className: "edui-contextmenu",
                                editor: e
                            })).render(), t.showAt(s), e.fireEvent("aftershowcontextmenu", t), domUtils.preventDefault(a), browser.ie) {
                                var m;
                                try {
                                    m = e.selection.getNative().createRange()
                                } catch(e) {
                                    return
                                }
                                if (m.item) new dom.Range(e.document).selectNode(m.item(0)).select(!0, !0)
                            }
                        }),
                        e.addListener("aftershowcontextmenu",
                        function(t, n) {
                            if (e.zeroclipboard) {
                                var i = n.items;
                                for (var o in i)"edui-for-copy" == i[o].className && e.zeroclipboard.clip(i[o].getDom())
                            }
                        })
                    }
                }
            },
            UE.plugins.shortcutmenu = function() {
                var e, t = this.options.shortcutMenu || [];
                t.length && (this.addListener("contextmenu mouseup",
                function(n, i) {
                    var o = this,
                    r = {
                        type: n,
                        target: i.target || i.srcElement,
                        screenX: i.screenX,
                        screenY: i.screenY,
                        clientX: i.clientX,
                        clientY: i.clientY
                    };
                    if (setTimeout(function() { ! 1 !== o.selection.getRange().collapsed && "contextmenu" != n || (e || ((e = new baidu.editor.ui.ShortCutMenu({
                            editor: o,
                            items: t,
                            theme: o.options.theme,
                            className: "edui-shortcutmenu"
                        })).render(), o.fireEvent("afterrendershortcutmenu", e)), e.show(r, !!UE.plugins.contextmenu))
                    }), "contextmenu" == n && (domUtils.preventDefault(i), browser.ie9below)) {
                        var a;
                        try {
                            a = o.selection.getNative().createRange()
                        } catch(i) {
                            return
                        }
                        if (a.item) new dom.Range(o.document).selectNode(a.item(0)).select(!0, !0)
                    }
                }), this.addListener("keydown",
                function(t) {
                    "keydown" == t && e && !e.isHidden && e.hide()
                }))
            },
            UE.plugins.basestyle = function() {
                var e = {
                    bold: ["strong", "b"],
                    italic: ["em", "i"],
                    subscript: ["sub"],
                    superscript: ["sup"]
                },
                t = function(e, t) {
                    return domUtils.filterNodeList(e.selection.getStartElementPath(), t)
                },
                n = this;
                for (var i in n.addshortcutkey({
                    Bold: "ctrl+66",
                    Italic: "ctrl+73",
                    Underline: "ctrl+85"
                }), n.addInputRule(function(e) {
                    utils.each(e.getNodesByTagName("b i"),
                    function(e) {
                        switch (e.tagName) {
                        case "b":
                            e.tagName = "strong";
                            break;
                        case "i":
                            e.tagName = "em"
                        }
                    })
                }), e) !
                function(e, i) {
                    n.commands[e] = {
                        execCommand: function(e) {
                            var o = n.selection.getRange(),
                            r = t(this, i);
                            if (o.collapsed) {
                                if (r) {
                                    var a = n.document.createTextNode("");
                                    o.insertNode(a).removeInlineStyle(i),
                                    o.setStartBefore(a),
                                    domUtils.remove(a)
                                } else {
                                    var s = o.document.createElement(i[0]);
                                    "superscript" != e && "subscript" != e || (a = n.document.createTextNode(""), o.insertNode(a).removeInlineStyle(["sub", "sup"]).setStartBefore(a).collapse(!0)),
                                    o.insertNode(s).setStart(s, 0)
                                }
                                o.collapse(!0)
                            } else "superscript" != e && "subscript" != e || r && r.tagName.toLowerCase() == e || o.removeInlineStyle(["sub", "sup"]),
                            r ? o.removeInlineStyle(i) : o.applyInlineStyle(i[0]);
                            o.select()
                        },
                        queryCommandState: function() {
                            return t(this, i) ? 1 : 0
                        }
                    }
                } (i, e[i])
            },
            UE.plugins.elementpath = function() {
                var e, t, n = this;
                n.setOpt("elementPathEnabled", !0),
                n.options.elementPathEnabled && (n.commands.elementpath = {
                    execCommand: function(i, o) {
                        var r = t[o],
                        a = n.selection.getRange();
                        e = 1 * o,
                        a.selectNode(r).select()
                    },
                    queryCommandValue: function() {
                        var n = [].concat(this.selection.getStartElementPath()).reverse(),
                        i = [];
                        t = n;
                        for (var o, r = 0; o = n[r]; r++) if (3 != o.nodeType) {
                            var a = o.tagName.toLowerCase();
                            if ("img" == a && o.getAttribute("anchorname") && (a = "anchor"), i[r] = a, e == r) {
                                e = -1;
                                break
                            }
                        }
                        return i
                    }
                })
            },
            UE.plugins.formatmatch = function() {
                var e, t = this,
                n = [],
                i = 0;
                function o(r, a) {
                    if (browser.webkit) var s = "IMG" == a.target.tagName ? a.target: null;
                    t.undoManger && t.undoManger.save();
                    var l = t.selection.getRange(),
                    d = s || l.getClosedNode();
                    if (e && d && "IMG" == d.tagName) d.style.cssText += ";float:" + (e.style.cssFloat || e.style.styleFloat || "none") + ";display:" + (e.style.display || "inline"),
                    e = null;
                    else if (!e) {
                        if (l.collapsed) {
                            var c = t.document.createTextNode("match");
                            l.insertNode(c).select()
                        }
                        t.__hasEnterExecCommand = !0;
                        var u = t.options.removeFormatAttributes;
                        t.options.removeFormatAttributes = "",
                        t.execCommand("removeformat"),
                        t.options.removeFormatAttributes = u,
                        t.__hasEnterExecCommand = !1,
                        l = t.selection.getRange(),
                        n.length &&
                        function(e) {
                            c && e.selectNode(c),
                            e.applyInlineStyle(n[n.length - 1].tagName, null, n)
                        } (l),
                        c && l.setStartBefore(c).collapse(!0),
                        l.select(),
                        c && domUtils.remove(c)
                    }
                    t.undoManger && t.undoManger.save(),
                    t.removeListener("mouseup", o),
                    i = 0
                }
                t.addListener("reset",
                function() {
                    n = [],
                    i = 0
                }),
                t.commands.formatmatch = {
                    execCommand: function(r) {
                        if (i) return i = 0,
                        n = [],
                        void t.removeListener("mouseup", o);
                        var a = t.selection.getRange();
                        if (! (e = a.getClosedNode()) || "IMG" != e.tagName) {
                            a.collapse(!0).shrinkBoundary();
                            var s = a.startContainer;
                            n = domUtils.findParents(s, !0,
                            function(e) {
                                return ! domUtils.isBlockElm(e) && 1 == e.nodeType
                            });
                            for (var l, d = 0; l = n[d]; d++) if ("A" == l.tagName) {
                                n.splice(d, 1);
                                break
                            }
                        }
                        t.addListener("mouseup", o),
                        i = 1
                    },
                    queryCommandState: function() {
                        return i
                    },
                    notNeedUndo: 1
                }
            },
            UE.plugin.register("searchreplace",
            function() {
                var e = this,
                t = {
                    table: 1,
                    tbody: 1,
                    tr: 1,
                    ol: 1,
                    ul: 1
                };
                function n(e, t, n) {
                    var i = t.searchStr; - 1 == t.dir && (e = e.split("").reverse().join(""), i = i.split("").reverse().join(""), n = e.length - n);
                    for (var o, r = new RegExp(i, "g" + (t.casesensitive ? "": "i")); o = r.exec(e);) if (o.index >= n) return - 1 == t.dir ? e.length - o.index - t.searchStr.length: o.index;
                    return - 1
                }
                function i(e, t, n) {
                    for (var o, r = 0,
                    a = e.firstChild,
                    s = 0; a;) {
                        if (3 == a.nodeType) {
                            if ((r += s = a.nodeValue.replace(/(^[\t\r\n]+)|([\t\r\n]+$)/, "").length) >= t) return {
                                node: a,
                                index: s - (r - t)
                            }
                        } else if (!dtd.$empty[a.tagName] && (r += s = a[browser.ie ? "innerText": "textContent"].replace(/(^[\t\r\n]+)|([\t\r\n]+$)/, "").length) >= t && (o = i(a, s - (r - t), n))) return o;
                        a = domUtils.getNextDomNode(a)
                    }
                }
                function o(e, o) {
                    var a, s = e.selection.getRange(),
                    l = o.searchStr,
                    d = e.document.createElement("span");
                    if (d.innerHTML = "$$ueditor_searchreplace_key$$", s.shrinkBoundary(!0), !s.collapsed) {
                        s.select();
                        var c = e.selection.getText();
                        if (new RegExp("^" + o.searchStr + "$", o.casesensitive ? "": "i").test(c)) {
                            if (void 0 != o.replaceStr) return r(s, o.replaceStr),
                            s.select(),
                            !0;
                            s.collapse( - 1 == o.dir)
                        }
                    }
                    s.insertNode(d),
                    s.enlargeToBlockElm(!0);
                    var u = (a = s.startContainer)[browser.ie ? "innerText": "textContent"].indexOf("$$ueditor_searchreplace_key$$");
                    s.setStartBefore(d),
                    domUtils.remove(d);
                    var m = function(e, i, o) {
                        var r, a = o.all || 1 == o.dir ? "getNextDomNode": "getPreDomNode";
                        for (domUtils.isBody(e) && (e = e.firstChild); e;) {
                            if ( - 1 != (r = n(3 == e.nodeType ? e.nodeValue: e[browser.ie ? "innerText": "textContent"], o, i))) return {
                                node: e,
                                index: r
                            };
                            for (e = domUtils[a](e); e && t[e.nodeName.toLowerCase()];) e = domUtils[a](e, !0);
                            e && (i = -1 == o.dir ? (3 == e.nodeType ? e.nodeValue: e[browser.ie ? "innerText": "textContent"]).length: 0)
                        }
                    } (a, u, o);
                    if (m) {
                        var f = i(m.node, m.index, l),
                        p = i(m.node, m.index + l.length, l);
                        return s.setStart(f.node, f.index).setEnd(p.node, p.index),
                        void 0 !== o.replaceStr && r(s, o.replaceStr),
                        s.select(),
                        !0
                    }
                    s.setCursor()
                }
                function r(t, n) {
                    n = e.document.createTextNode(n),
                    t.deleteContents().insertNode(n)
                }
                return {
                    commands: {
                        searchreplace: {
                            execCommand: function(t, n) {
                                utils.extend(n, {
                                    all: !1,
                                    casesensitive: !1,
                                    dir: 1
                                },
                                !0);
                                var i = 0;
                                if (n.all) {
                                    var r = e.selection.getRange(),
                                    a = e.body.firstChild;
                                    for (a && 1 == a.nodeType ? (r.setStart(a, 0), r.shrinkBoundary(!0)) : 3 == a.nodeType && r.setStartBefore(a), r.collapse(!0).select(!0), void 0 !== n.replaceStr && e.fireEvent("saveScene"); o(this, n);) i++;
                                    i && e.fireEvent("saveScene")
                                } else void 0 !== n.replaceStr && e.fireEvent("saveScene"),
                                o(this, n) && i++,
                                i && e.fireEvent("saveScene");
                                return i
                            },
                            notNeedUndo: 1
                        }
                    }
                }
            }),
            UE.plugins.customstyle = function() {
                var e = this;
                e.setOpt({
                    customstyle: [{
                        tag: "h1",
                        name: "tc",
                        style: "font-size:32px;font-weight:bold;border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:center;margin:0 0 20px 0;"
                    },
                    {
                        tag: "h1",
                        name: "tl",
                        style: "font-size:32px;font-weight:bold;border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:left;margin:0 0 10px 0;"
                    },
                    {
                        tag: "span",
                        name: "im",
                        style: "font-size:16px;font-style:italic;font-weight:bold;line-height:18px;"
                    },
                    {
                        tag: "span",
                        name: "hi",
                        style: "font-size:16px;font-style:italic;font-weight:bold;color:rgb(51, 153, 204);line-height:18px;"
                    }]
                }),
                e.commands.customstyle = {
                    execCommand: function(e, t) {
                        var n, i, o = this,
                        r = t.tag,
                        a = domUtils.findParent(o.selection.getStart(),
                        function(e) {
                            return e.getAttribute("label")
                        },
                        !0),
                        s = {};
                        for (var l in t) void 0 !== t[l] && (s[l] = t[l]);
                        if (delete s.tag, a && a.getAttribute("label") == t.label) {
                            if (i = (n = this.selection.getRange()).createBookmark(), n.collapsed) if (dtd.$block[a.tagName]) {
                                var d = o.document.createElement("p");
                                domUtils.moveChild(a, d),
                                a.parentNode.insertBefore(d, a),
                                domUtils.remove(a)
                            } else domUtils.remove(a, !0);
                            else {
                                var c = domUtils.getCommonAncestor(i.start, i.end),
                                u = domUtils.getElementsByTagName(c, r);
                                new RegExp(r, "i").test(c.tagName) && u.push(c);
                                for (var m, f = 0; m = u[f++];) if (m.getAttribute("label") == t.label) {
                                    var p = domUtils.getPosition(m, i.start),
                                    h = domUtils.getPosition(m, i.end);
                                    if ((p & domUtils.POSITION_FOLLOWING || p & domUtils.POSITION_CONTAINS) && (h & domUtils.POSITION_PRECEDING || h & domUtils.POSITION_CONTAINS) && dtd.$block[r]) {
                                        d = o.document.createElement("p");
                                        domUtils.moveChild(m, d),
                                        m.parentNode.insertBefore(d, m)
                                    }
                                    domUtils.remove(m, !0)
                                } (a = domUtils.findParent(c,
                                function(e) {
                                    return e.getAttribute("label") == t.label
                                },
                                !0)) && domUtils.remove(a, !0)
                            }
                            n.moveToBookmark(i).select()
                        } else if (dtd.$block[r]) {
                            if (this.execCommand("paragraph", r, s, "customstyle"), !(n = o.selection.getRange()).collapsed) {
                                n.collapse(),
                                a = domUtils.findParent(o.selection.getStart(),
                                function(e) {
                                    return e.getAttribute("label") == t.label
                                },
                                !0);
                                var g = o.document.createElement("p");
                                domUtils.insertAfter(a, g),
                                domUtils.fillNode(o.document, g),
                                n.setStart(g, 0).setCursor()
                            }
                        } else {
                            if ((n = o.selection.getRange()).collapsed) return a = o.document.createElement(r),
                            domUtils.setAttributes(a, s),
                            void n.insertNode(a).setStart(a, 0).setCursor();
                            i = n.createBookmark(),
                            n.applyInlineStyle(r, s).moveToBookmark(i).select()
                        }
                    },
                    queryCommandValue: function() {
                        var e = domUtils.filterNodeList(this.selection.getStartElementPath(),
                        function(e) {
                            return e.getAttribute("label")
                        });
                        return e ? e.getAttribute("label") : ""
                    }
                },
                e.addListener("keyup",
                function(t, n) {
                    var i = n.keyCode || n.which;
                    if (32 == i || 13 == i) {
                        var o = e.selection.getRange();
                        if (o.collapsed) {
                            var r = domUtils.findParent(e.selection.getStart(),
                            function(e) {
                                return e.getAttribute("label")
                            },
                            !0);
                            if (r && dtd.$block[r.tagName] && domUtils.isEmptyNode(r)) {
                                var a = e.document.createElement("p");
                                domUtils.insertAfter(r, a),
                                domUtils.fillNode(e.document, a),
                                domUtils.remove(r),
                                o.setStart(a, 0).setCursor()
                            }
                        }
                    }
                })
            },
            UE.plugins.catchremoteimage = function() {
                var me = this,
                ajax = UE.ajax;
                void 0 !== me.options.catchRemoteImageEnable && (me.setOpt({
                    catchRemoteImageEnable: !1
                }), me.addListener("afterpaste",
                function() {
                    me.fireEvent("catchRemoteImage")
                }), me.addListener("catchRemoteImage",
                function() {
                    for (var catcherLocalDomain = me.getOpt("catcherLocalDomain"), catcherActionUrl = me.getActionUrl(me.getOpt("catcherActionName")), catcherUrlPrefix = me.getOpt("catcherUrlPrefix"), catcherFieldName = me.getOpt("catcherFieldName"), remoteImages = [], imgs = domUtils.getElementsByTagName(me.document, "img"), test = function(e, t) {
                        if ( - 1 != e.indexOf(location.host) || /(^\.)|(^\/)/.test(e)) return ! 0;
                        if (t) for (var n, i = 0; n = t[i++];) if ( - 1 !== e.indexOf(n)) return ! 0;
                        return ! 1
                    },
                    i = 0, ci; ci = imgs[i++];) if (!ci.getAttribute("word_img")) {
                        var src = ci.getAttribute("_src") || ci.src || "";
                        /^(https?|ftp):/i.test(src) && !test(src, catcherLocalDomain) && remoteImages.push(src)
                    }
                    function catchremoteimage(e, t) {
                        var n = utils.serializeParam(me.queryCommandValue("serverparam")) || "",
                        i = utils.formatUrl(catcherActionUrl + ( - 1 == catcherActionUrl.indexOf("?") ? "?": "&") + n),
                        o = {
                            method: "POST",
                            dataType: utils.isCrossDomainUrl(i) ? "jsonp": "",
                            timeout: 6e4,
                            onsuccess: t.success,
                            onerror: t.error
                        };
                        o[catcherFieldName] = e,
                        ajax.request(i, o)
                    }
                    remoteImages.length && catchremoteimage(remoteImages, {
                        success: function(r) {
                            try {
                                var info = void 0 !== r.state ? r: eval("(" + r.responseText + ")")
                            } catch(e) {
                                return
                            }
                            var i, j, ci, cj, oldSrc, newSrc, list = info.list;
                            for (i = 0; ci = imgs[i++];) for (oldSrc = ci.getAttribute("_src") || ci.src || "", j = 0; cj = list[j++];) if (oldSrc == cj.source && "SUCCESS" == cj.state) {
                                newSrc = catcherUrlPrefix + cj.url,
                                domUtils.setAttributes(ci, {
                                    src: newSrc,
                                    _src: newSrc
                                });
                                break
                            }
                            me.fireEvent("catchremotesuccess")
                        },
                        error: function() {
                            me.fireEvent("catchremoteerror")
                        }
                    })
                }))
            },
            UE.plugin.register("snapscreen",
            function() {
                var me = this,
                snapplugin;
                function getLocation(e) {
                    var t, n = document.createElement("a"),
                    i = utils.serializeParam(me.queryCommandValue("serverparam")) || "";
                    return n.href = e,
                    browser.ie && (n.href = n.href),
                    t = n.search,
                    i && (t = (t = t + ( - 1 == t.indexOf("?") ? "?": "&") + i).replace(/[&]+/gi, "&")),
                    {
                        port: n.port,
                        hostname: n.hostname,
                        path: n.pathname + t || +n.hash
                    }
                }
                return {
                    commands: {
                        snapscreen: {
                            execCommand: function(cmd) {
                                var url, local, res, lang = me.getLang("snapScreen_plugin");
                                if (!snapplugin) {
                                    var container = me.container,
                                    doc = me.container.ownerDocument || me.container.document;
                                    snapplugin = doc.createElement("object");
                                    try {
                                        snapplugin.type = "application/x-pluginbaidusnap"
                                    } catch(e) {
                                        return
                                    }
                                    snapplugin.style.cssText = "position:absolute;left:-9999px;width:0;height:0;",
                                    snapplugin.setAttribute("width", "0"),
                                    snapplugin.setAttribute("height", "0"),
                                    container.appendChild(snapplugin)
                                }
                                function onSuccess(rs) {
                                    try {
                                        if (rs = eval("(" + rs + ")"), "SUCCESS" == rs.state) {
                                            var opt = me.options;
                                            me.execCommand("insertimage", {
                                                src: opt.snapscreenUrlPrefix + rs.url,
                                                _src: opt.snapscreenUrlPrefix + rs.url,
                                                alt: rs.title || "",
                                                floatStyle: opt.snapscreenImgAlign
                                            })
                                        } else alert(rs.state)
                                    } catch(e) {
                                        alert(lang.callBackErrorMsg)
                                    }
                                }
                                url = me.getActionUrl(me.getOpt("snapscreenActionName")),
                                local = getLocation(url),
                                setTimeout(function() {
                                    try {
                                        res = snapplugin.saveSnapshot(local.hostname, local.path, local.port)
                                    } catch(e) {
                                        return void me.ui._dialogs.snapscreenDialog.open()
                                    }
                                    onSuccess(res)
                                },
                                50)
                            },
                            queryCommandState: function() {
                                return - 1 != navigator.userAgent.indexOf("Windows", 0) ? 0 : -1
                            }
                        }
                    }
                }
            }),
            UE.commands.insertparagraph = {
                execCommand: function(e, t) {
                    for (var n, i = this.selection.getRange(), o = i.startContainer; o && !domUtils.isBody(o);) n = o,
                    o = o.parentNode;
                    if (n) {
                        var r = this.document.createElement("p");
                        t ? n.parentNode.insertBefore(r, n) : n.parentNode.insertBefore(r, n.nextSibling),
                        domUtils.fillNode(this.document, r),
                        i.setStart(r, 0).setCursor(!1, !0)
                    }
                }
            },
            UE.plugin.register("webapp",
            function() {
                var e = this;
                function t(t, n) {
                    return n ? '<iframe class="edui-faked-webapp" title="' + t.title + '" ' + (t.align && !t.cssfloat ? 'align="' + t.align + '"': "") + (t.cssfloat ? 'style="float:' + t.cssfloat + '"': "") + 'width="' + t.width + '" height="' + t.height + '"  scrolling="no" frameborder="0" src="' + t.url + '" logo_url = "' + t.logo + '"></iframe>': '<img title="' + t.title + '" width="' + t.width + '" height="' + t.height + '" src="' + e.options.UEDITOR_HOME_URL + 'themes/default/images/spacer.gif" _logo_url="' + t.logo + '" style="background:url(' + t.logo + ') no-repeat center center; border:1px solid gray;" class="edui-faked-webapp" _url="' + t.url + '" ' + (t.align && !t.cssfloat ? 'align="' + t.align + '"': "") + (t.cssfloat ? 'style="float:' + t.cssfloat + '"': "") + "/>"
                }
                return {
                    outputRule: function(e) {
                        utils.each(e.getNodesByTagName("img"),
                        function(e) {
                            var n;
                            if ("edui-faked-webapp" == e.getAttr("class")) {
                                n = t({
                                    title: e.getAttr("title"),
                                    width: e.getAttr("width"),
                                    height: e.getAttr("height"),
                                    align: e.getAttr("align"),
                                    cssfloat: e.getStyle("float"),
                                    url: e.getAttr("_url"),
                                    logo: e.getAttr("_logo_url")
                                },
                                !0);
                                var i = UE.uNode.createElement(n);
                                e.parentNode.replaceChild(i, e)
                            }
                        })
                    },
                    inputRule: function(e) {
                        utils.each(e.getNodesByTagName("iframe"),
                        function(e) {
                            if ("edui-faked-webapp" == e.getAttr("class")) {
                                var n = UE.uNode.createElement(t({
                                    title: e.getAttr("title"),
                                    width: e.getAttr("width"),
                                    height: e.getAttr("height"),
                                    align: e.getAttr("align"),
                                    cssfloat: e.getStyle("float"),
                                    url: e.getAttr("src"),
                                    logo: e.getAttr("logo_url")
                                }));
                                e.parentNode.replaceChild(n, e)
                            }
                        })
                    },
                    commands: {
                        webapp: {
                            execCommand: function(e, n) {
                                var i = t(utils.extend(n, {
                                    align: "none"
                                }), !1);
                                this.execCommand("inserthtml", i)
                            },
                            queryCommandState: function() {
                                var e = this.selection.getRange().getClosedNode();
                                return e && "edui-faked-webapp" == e.className ? 1 : 0
                            }
                        }
                    }
                }
            }),
            UE.plugins.template = function() {
                UE.commands.template = {
                    execCommand: function(e, t) {
                        t.html && this.execCommand("inserthtml", t.html)
                    }
                },
                this.addListener("click",
                function(e, t) {
                    var n = t.target || t.srcElement,
                    i = this.selection.getRange(),
                    o = domUtils.findParent(n,
                    function(e) {
                        if (e.className && domUtils.hasClass(e, "ue_t")) return e
                    },
                    !0);
                    o && i.selectNode(o).shrinkBoundary().select()
                }),
                this.addListener("keydown",
                function(e, t) {
                    var n = this.selection.getRange();
                    if (!n.collapsed && !(t.ctrlKey || t.metaKey || t.shiftKey || t.altKey)) {
                        var i = domUtils.findParent(n.startContainer,
                        function(e) {
                            if (e.className && domUtils.hasClass(e, "ue_t")) return e
                        },
                        !0);
                        i && domUtils.removeClasses(i, ["ue_t"])
                    }
                })
            },
            UE.plugin.register("music",
            function() {
                var e = this;
                function t(t, n, i, o, r, a) {
                    return a ? '<embed type="application/x-shockwave-flash" class="edui-faked-music" pluginspage="http://www.macromedia.com/go/getflashplayer" src="' + t + '" width="' + n + '" height="' + i + '" ' + (o && !r ? 'align="' + o + '"': "") + (r ? 'style="float:' + r + '"': "") + ' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >': "<img " + (o && !r ? 'align="' + o + '"': "") + (r ? 'style="float:' + r + '"': "") + ' width="' + n + '" height="' + i + '" _url="' + t + '" class="edui-faked-music" src="' + e.options.langPath + e.options.lang + '/images/music.png" />'
                }
                return {
                    outputRule: function(e) {
                        utils.each(e.getNodesByTagName("img"),
                        function(e) {
                            var n;
                            if ("edui-faked-music" == e.getAttr("class")) {
                                var i = e.getStyle("float"),
                                o = e.getAttr("align");
                                n = t(e.getAttr("_url"), e.getAttr("width"), e.getAttr("height"), o, i, !0);
                                var r = UE.uNode.createElement(n);
                                e.parentNode.replaceChild(r, e)
                            }
                        })
                    },
                    inputRule: function(e) {
                        utils.each(e.getNodesByTagName("embed"),
                        function(e) {
                            if ("edui-faked-music" == e.getAttr("class")) {
                                var n = e.getStyle("float"),
                                i = e.getAttr("align");
                                html = t(e.getAttr("src"), e.getAttr("width"), e.getAttr("height"), i, n, !1);
                                var o = UE.uNode.createElement(html);
                                e.parentNode.replaceChild(o, e)
                            }
                        })
                    },
                    commands: {
                        music: {
                            execCommand: function(e, n) {
                                var i = t(n.url, n.width || 400, n.height || 95, "none", !1);
                                this.execCommand("inserthtml", i)
                            },
                            queryCommandState: function() {
                                var e = this.selection.getRange().getClosedNode();
                                return e && "edui-faked-music" == e.className ? 1 : 0
                            }
                        }
                    }
                }
            }),
            UE.plugin.register("autoupload",
            function() {
                function e(e, t) {
                    var n, i, o, r, a, s, l, d, c = t,
                    u = /image\/\w+/i.test(e.type) ? "image": "file",
                    m = "loading_" + ( + new Date).toString(36);
                    if (n = c.getOpt(u + "FieldName"), i = c.getOpt(u + "UrlPrefix"), o = c.getOpt(u + "MaxSize"), r = c.getOpt(u + "AllowFiles"), a = c.getActionUrl(c.getOpt(u + "ActionName")), l = function(e) {
                        var t = c.document.getElementById(m);
                        t && domUtils.remove(t),
                        c.fireEvent("showmessage", {
                            id: m,
                            content: e,
                            type: "error",
                            timeout: 4e3
                        })
                    },
                    "image" == u ? (s = '<img class="loadingclass" id="' + m + '" src="' + c.options.themePath + c.options.theme + '/images/spacer.gif" title="' + (c.getLang("autoupload.loading") || "") + '" >', d = function(e) {
                        var t = i + e.url,
                        n = c.document.getElementById(m);
                        n && (n.setAttribute("src", t), n.setAttribute("_src", t), n.setAttribute("title", e.title || ""), n.setAttribute("alt", e.original || ""), n.removeAttribute("id"), domUtils.removeClasses(n, "loadingclass"))
                    }) : (s = '<p><img class="loadingclass" id="' + m + '" src="' + c.options.themePath + c.options.theme + '/images/spacer.gif" title="' + (c.getLang("autoupload.loading") || "") + '" ></p>', d = function(e) {
                        var t = i + e.url,
                        n = c.document.getElementById(m),
                        o = c.selection.getRange(),
                        r = o.createBookmark();
                        o.selectNode(n).select(),
                        c.execCommand("insertfile", {
                            url: t
                        }),
                        o.moveToBookmark(r).select()
                    }), c.execCommand("inserthtml", s), c.getOpt(u + "ActionName")) if (e.size > o) l(c.getLang("autoupload.exceedSizeError"));
                    else {
                        var f = e.name ? e.name.substr(e.name.lastIndexOf(".")) : "";
                        if (f && "image" != u || r && -1 == (r.join("") + ".").indexOf(f.toLowerCase() + ".")) l(c.getLang("autoupload.exceedTypeError"));
                        else {
                            var p = new XMLHttpRequest,
                            h = new FormData,
                            g = utils.serializeParam(c.queryCommandValue("serverparam")) || "",
                            v = utils.formatUrl(a + ( - 1 == a.indexOf("?") ? "?": "&") + g);
                            h.append(n, e, e.name || "blob." + e.type.substr("image/".length)),
                            h.append("type", "ajax"),
                            p.open("post", v, !0),
                            p.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                            p.addEventListener("load",
                            function(e) {
                                try {
                                    var t = new Function("return " + utils.trim(e.target.response))();
                                    "SUCCESS" == t.state && t.url ? d(t) : l(t.state)
                                } catch(e) {
                                    l(c.getLang("autoupload.loadError"))
                                }
                            }),
                            p.send(h)
                        }
                    } else l(c.getLang("autoupload.errorLoadConfig"))
                }
                return {
                    outputRule: function(e) {
                        utils.each(e.getNodesByTagName("img"),
                        function(e) { / \b(loaderrorclass) | (bloaderrorclass)\b / .test(e.getAttr("class")) && e.parentNode.removeChild(e)
                        }),
                        utils.each(e.getNodesByTagName("p"),
                        function(e) { / \bloadpara\b / .test(e.getAttr("class")) && e.parentNode.removeChild(e)
                        })
                    },
                    bindEvents: {
                        ready: function(t) {
                            var n = this;
                            window.FormData && window.FileReader && (domUtils.on(n.body, "paste drop",
                            function(t) {
                                var i, o = !1;
                                if (i = "paste" == t.type ?
                                function(e) {
                                    return e.clipboardData && e.clipboardData.items && 1 == e.clipboardData.items.length && /^image\//.test(e.clipboardData.items[0].type) ? e.clipboardData.items: null
                                } (t) : function(e) {
                                    return e.dataTransfer && e.dataTransfer.files ? e.dataTransfer.files: null
                                } (t)) {
                                    for (var r, a = i.length; a--;)(r = i[a]).getAsFile && (r = r.getAsFile()),
                                    r && r.size > 0 && (e(r, n), o = !0);
                                    o && t.preventDefault()
                                }
                            }), domUtils.on(n.body, "dragover",
                            function(e) {
                                "Files" == e.dataTransfer.types[0] && e.preventDefault()
                            }), utils.cssRule("loading", ".loadingclass{display:inline-block;cursor:default;background: url('" + this.options.themePath + this.options.theme + "/images/loading.gif') no-repeat center center transparent;border:1px solid #cccccc;margin-left:1px;height: 22px;width: 22px;}\n.loaderrorclass{display:inline-block;cursor:default;background: url('" + this.options.themePath + this.options.theme + "/images/loaderror.png') no-repeat center center transparent;border:1px solid #cccccc;margin-right:1px;height: 22px;width: 22px;}", this.document))
                        }
                    }
                }
            }),
            UE.plugin.register("autosave",
            function() {
                var e = this,
                t = new Date,
                n = 20,
                i = null;
                function o(o) {
                    var r;
                    new Date - t < n || (o.hasContents() ? (t = new Date, o._saveFlag = null, r = e.body.innerHTML, !1 !== o.fireEvent("beforeautosave", {
                        content: r
                    }) && (e.setPreferences(i, r), o.fireEvent("afterautosave", {
                        content: r
                    }))) : i && e.removePreferences(i))
                }
                return {
                    defaultOptions: {
                        saveInterval: 500
                    },
                    bindEvents: {
                        ready: function() {
                            var t = null;
                            t = e.key ? e.key + "-drafts-data": (e.container.parentNode.id || "ue-common") + "-drafts-data",
                            i = (location.protocol + location.host + location.pathname).replace(/[.:\/]/g, "_") + t
                        },
                        contentchange: function() {
                            i && (e._saveFlag && window.clearTimeout(e._saveFlag), e.options.saveInterval > 0 ? e._saveFlag = window.setTimeout(function() {
                                o(e)
                            },
                            e.options.saveInterval) : o(e))
                        }
                    },
                    commands: {
                        clearlocaldata: {
                            execCommand: function(t, n) {
                                i && e.getPreferences(i) && e.removePreferences(i)
                            },
                            notNeedUndo: !0,
                            ignoreContentChange: !0
                        },
                        getlocaldata: {
                            execCommand: function(t, n) {
                                return i && e.getPreferences(i) || ""
                            },
                            notNeedUndo: !0,
                            ignoreContentChange: !0
                        },
                        drafts: {
                            execCommand: function(t, n) {
                                i && (e.body.innerHTML = e.getPreferences(i) || "<p>" + domUtils.fillHtml + "</p>", e.focus(!0))
                            },
                            queryCommandState: function() {
                                return i ? null === e.getPreferences(i) ? -1 : 0 : -1
                            },
                            notNeedUndo: !0,
                            ignoreContentChange: !0
                        }
                    }
                }
            }),
            UE.plugin.register("charts",
            function() {
                var e = this;
                return {
                    bindEvents: {
                        chartserror: function() {}
                    },
                    commands: {
                        charts: {
                            execCommand: function(n, i) {
                                var o = domUtils.findParentByTagName(this.selection.getRange().startContainer, "table", !0),
                                r = [],
                                a = {};
                                if (!o) return ! 1;
                                if (!t(o)) return e.fireEvent("chartserror"),
                                !1;
                                for (var s in a.title = i.title || "",
                                a.subTitle = i.subTitle || "",
                                a.xTitle = i.xTitle || "",
                                a.yTitle = i.yTitle || "",
                                a.suffix = i.suffix || "",
                                a.tip = i.tip || "",
                                a.dataFormat = i.tableDataFormat || "",
                                a.chartType = i.chartType || 0,
                                a) a.hasOwnProperty(s) && r.push(s + ":" + a[s]);
                                o.setAttribute("data-chart", r.join(";")),
                                domUtils.addClass(o, "edui-charts-table")
                            },
                            queryCommandState: function(e, n) {
                                var i = domUtils.findParentByTagName(this.selection.getRange().startContainer, "table", !0);
                                return i && t(i) ? 0 : -1
                            }
                        }
                    },
                    inputRule: function(e) {
                        utils.each(e.getNodesByTagName("table"),
                        function(e) {
                            void 0 !== e.getAttr("data-chart") && e.setAttr("style")
                        })
                    },
                    outputRule: function(e) {
                        utils.each(e.getNodesByTagName("table"),
                        function(e) {
                            void 0 !== e.getAttr("data-chart") && e.setAttr("style", "display: none;")
                        })
                    }
                };
                function t(e) {
                    var t, n;
                    if (e.rows.length < 2) return ! 1;
                    if (e.rows[0].cells.length < 2) return ! 1;
                    n = (t = e.rows[0].cells).length;
                    for (var i = 0; r = t[i]; i++) if ("th" !== r.tagName.toLowerCase()) return ! 1;
                    var o;
                    for (i = 1; o = e.rows[i]; i++) {
                        if (o.cells.length != n) return ! 1;
                        if ("th" !== o.cells[0].tagName.toLowerCase()) return ! 1;
                        for (var r, a = 1; r = o.cells[a]; a++) {
                            var s = utils.trim(r.innerText || r.textContent || "");
                            if (s = s.replace(new RegExp(UE.dom.domUtils.fillChar, "g"), "").replace(/^\s+|\s+$/g, ""), !/^\d*\.?\d+$/.test(s)) return ! 1
                        }
                    }
                    return ! 0
                }
            }),
            UE.plugin.register("section",
            function() {
                function e(e) {
                    var t = new
                    function(e) {
                        this.tag = "",
                        this.level = -1,
                        this.dom = null,
                        this.nextSection = null,
                        this.previousSection = null,
                        this.parentSection = null,
                        this.startAddress = [],
                        this.endAddress = [],
                        this.children = []
                    };
                    return utils.extend(t, e)
                }
                function t(e, t) {
                    for (var n = t,
                    i = 0; i < e.length; i++) {
                        if (!n.childNodes) return null;
                        n = n.childNodes[e[i]]
                    }
                    return n
                }
                var n = this;
                return {
                    bindMultiEvents: {
                        type: "aftersetcontent afterscencerestore",
                        handler: function() {
                            n.fireEvent("updateSections")
                        }
                    },
                    bindEvents: {
                        ready: function() {
                            n.fireEvent("updateSections"),
                            domUtils.on(n.body, "drop paste",
                            function() {
                                n.fireEvent("updateSections")
                            })
                        },
                        afterexeccommand: function(e, t) {
                            "paragraph" == t && n.fireEvent("updateSections")
                        },
                        keyup: function(e, t) {
                            if (1 != this.selection.getRange().collapsed) this.fireEvent("updateSections");
                            else {
                                var n = t.keyCode || t.which;
                                13 != n && 8 != n && 46 != n || this.fireEvent("updateSections")
                            }
                        }
                    },
                    commands: {
                        getsections: {
                            execCommand: function(t, n) {
                                for (var i = n || ["h1", "h2", "h3", "h4", "h5", "h6"], o = 0; o < i.length; o++)"string" == typeof i[o] ? i[o] = function(e) {
                                    return function(t) {
                                        return t.tagName == e.toUpperCase()
                                    }
                                } (i[o]) : "function" != typeof i[o] && (i[o] = function(e) {
                                    return null
                                });
                                function r(e) {
                                    for (var t = 0; t < i.length; t++) if (i[t](e)) return t;
                                    return - 1
                                }
                                var a = this,
                                s = e({
                                    level: -1,
                                    title: "root"
                                }),
                                l = s;
                                return function t(n, i) {
                                    for (var o, s, d, c = null,
                                    u = n.childNodes,
                                    m = 0,
                                    f = u.length; m < f; m++) if ((o = r(d = u[m])) >= 0) {
                                        var p = a.selection.getRange().selectNode(d).createAddress(!0).startAddress,
                                        h = e({
                                            tag: d.tagName,
                                            title: d.innerText || d.textContent || "",
                                            level: o,
                                            dom: d,
                                            startAddress: utils.clone(p, []),
                                            endAddress: utils.clone(p, []),
                                            children: []
                                        });
                                        for (l.nextSection = h, h.previousSection = l, s = l; o <= s.level;) s = s.parentSection;
                                        h.parentSection = s,
                                        s.children.push(h),
                                        c = l = h
                                    } else 1 === d.nodeType && t(d, i),
                                    c && c.endAddress[c.endAddress.length - 1]++
                                } (a.body, s),
                                s
                            },
                            notNeedUndo: !0
                        },
                        movesection: {
                            execCommand: function(e, n, i, o) {
                                var r, a;
                                if (n && i && -1 != i.level && (a = t(r = o ? i.endAddress: i.startAddress, this.body), r && a && !
                                function(e, t, n) {
                                    for (var i = !1,
                                    o = !1,
                                    r = 0; r < e.length && !(r >= n.length); r++) {
                                        if (n[r] > e[r]) {
                                            i = !0;
                                            break
                                        }
                                        if (n[r] < e[r]) break
                                    }
                                    for (var r = 0; r < t.length && !(r >= n.length); r++) {
                                        if (n[r] < e[r]) {
                                            o = !0;
                                            break
                                        }
                                        if (n[r] > e[r]) break
                                    }
                                    return i && o
                                } (n.startAddress, n.endAddress, r))) {
                                    var s, l, d = t(n.startAddress, this.body),
                                    c = t(n.endAddress, this.body);
                                    if (o) for (s = c; s && !(domUtils.getPosition(d, s) & domUtils.POSITION_FOLLOWING) && (l = s.previousSibling, domUtils.insertAfter(a, s), s != d);) s = l;
                                    else for (s = d; s && !(domUtils.getPosition(s, c) & domUtils.POSITION_FOLLOWING) && (l = s.nextSibling, a.parentNode.insertBefore(s, a), s != c);) s = l;
                                    this.fireEvent("updateSections")
                                }
                            }
                        },
                        deletesection: {
                            execCommand: function(e, t, n) {
                                var i = this;
                                if (t) {
                                    var o, r = l(t.startAddress),
                                    a = l(t.endAddress),
                                    s = r;
                                    if (n) domUtils.remove(s);
                                    else for (; s && domUtils.inDoc(a, i.document) && !(domUtils.getPosition(s, a) & domUtils.POSITION_FOLLOWING);) o = s.nextSibling,
                                    domUtils.remove(s),
                                    s = o;
                                    i.fireEvent("updateSections")
                                }
                                function l(e) {
                                    for (var t = i.body,
                                    n = 0; n < e.length; n++) {
                                        if (!t.childNodes) return null;
                                        t = t.childNodes[e[n]]
                                    }
                                    return t
                                }
                            }
                        },
                        selectsection: {
                            execCommand: function(e, t) {
                                if (!t && !t.dom) return ! 1;
                                var n = this.selection.getRange(),
                                i = {
                                    startAddress: utils.clone(t.startAddress, []),
                                    endAddress: utils.clone(t.endAddress, [])
                                };
                                return i.endAddress[i.endAddress.length - 1]++,
                                n.moveToAddress(i).select().scrollToView(),
                                !0
                            },
                            notNeedUndo: !0
                        },
                        scrolltosection: {
                            execCommand: function(e, t) {
                                if (!t && !t.dom) return ! 1;
                                var n = this.selection.getRange(),
                                i = {
                                    startAddress: t.startAddress,
                                    endAddress: t.endAddress
                                };
                                return i.endAddress[i.endAddress.length - 1]++,
                                n.moveToAddress(i).scrollToView(),
                                !0
                            },
                            notNeedUndo: !0
                        }
                    }
                }
            }),
            UE.plugin.register("simpleupload",
            function() {
                var e, t = this,
                n = !1;
                function i() {
                    var i = e.offsetWidth || 20,
                    o = e.offsetHeight || 20,
                    r = document.createElement("iframe"),
                    a = "display:block;width:" + i + "px;height:" + o + "px;overflow:hidden;border:0;margin:0;padding:0;position:absolute;top:0;left:0;filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity: 0;opacity: 0;cursor:pointer;";
                    domUtils.on(r, "load",
                    function() {
                        var e, s, l, d = ( + new Date).toString(36);
                        l = (s = r.contentDocument || r.contentWindow.document).body,
                        (e = s.createElement("div")).innerHTML = '<form id="edui_form_' + d + '" target="edui_iframe_' + d + '" method="POST" enctype="multipart/form-data" action="' + t.getOpt("serverUrl") + '" style="' + a + '"><input id="edui_input_' + d + '" type="file" accept="image/*" name="' + t.options.imageFieldName + '" style="' + a + '"></form><iframe id="edui_iframe_' + d + '" name="edui_iframe_' + d + '" style="display:none;width:0;height:0;border:0;margin:0;padding:0;position:absolute;"></iframe>',
                        e.className = "edui-" + t.options.theme,
                        e.id = t.ui.id + "_iframeupload",
                        l.style.cssText = a,
                        l.style.width = i + "px",
                        l.style.height = o + "px",
                        l.appendChild(e),
                        l.parentNode && (l.parentNode.style.width = i + "px", l.parentNode.style.height = i + "px");
                        var c, u = s.getElementById("edui_form_" + d),
                        m = s.getElementById("edui_input_" + d),
                        f = s.getElementById("edui_iframe_" + d);
                        domUtils.on(m, "change",
                        function() {
                            if (m.value) {
                                var e = "loading_" + ( + new Date).toString(36),
                                n = t.getActionUrl(t.getOpt("imageActionName")),
                                i = t.getOpt("imageAllowFiles");
                                if (t.focus(), t.execCommand("inserthtml", '<img class="loadingclass" id="' + e + '" src="' + t.options.themePath + t.options.theme + '/images/spacer.gif" title="' + (t.getLang("simpleupload.loading") || "") + '" >'), t.getOpt("imageActionName")) {
                                    var o = m.value,
                                    r = o ? o.substr(o.lastIndexOf(".")) : "";
                                    if (!r || i && -1 == (i.join("") + ".").indexOf(r.toLowerCase() + ".")) d(t.getLang("simpleupload.exceedTypeError"));
                                    else {
                                        var a = utils.serializeParam(t.queryCommandValue("serverparam")) || "",
                                        s = utils.formatUrl(n + ( - 1 == n.indexOf("?") ? "?": "&") + a),
                                        l = new FormData;
                                        l.append("upfile", u[0].files[0]),
                                        $.ajax({
                                            url: s,
                                            type: "POST",
                                            cache: !1,
                                            data: l,
                                            processData: !1,
                                            contentType: !1,
                                            success: function(n) {
                                                n = JSON.parse(n);
                                                var i, o, r = (f.contentDocument || f.contentWindow.document).body;
                                                r.innerText || r.textContent;
                                                i = t.options.imageUrlPrefix + n.url,
                                                "SUCCESS" == n.state && n.url ? ((o = t.document.getElementById(e)).setAttribute("src", i), o.setAttribute("_src", i), o.setAttribute("title", n.title || ""), o.setAttribute("alt", n.original || ""), o.removeAttribute("id"), domUtils.removeClasses(o, "loadingclass")) : d && d(n.state),
                                                u.reset()
                                            }
                                        })
                                    }
                                } else errorHandler(t.getLang("autoupload.errorLoadConfig"))
                            }
                            function d(n) {
                                if (e) {
                                    var i = t.document.getElementById(e);
                                    i && domUtils.remove(i),
                                    t.fireEvent("showmessage", {
                                        id: e,
                                        content: n,
                                        type: "error",
                                        timeout: 4e3
                                    })
                                }
                            }
                        }),
                        t.addListener("selectionchange",
                        function() {
                            clearTimeout(c),
                            c = setTimeout(function() {
                                var e = t.queryCommandState("simpleupload");
                                m.disabled = -1 == e && "disabled"
                            },
                            400)
                        }),
                        n = !0
                    }),
                    r.style.cssText = a,
                    e.appendChild(r)
                }
                return {
                    bindEvents: {
                        ready: function() {
                            utils.cssRule("loading", ".loadingclass{display:inline-block;cursor:default;background: url('" + this.options.themePath + this.options.theme + "/images/loading.gif') no-repeat center center transparent;border:1px solid #cccccc;margin-right:1px;height: 22px;width: 22px;}\n.loaderrorclass{display:inline-block;cursor:default;background: url('" + this.options.themePath + this.options.theme + "/images/loaderror.png') no-repeat center center transparent;border:1px solid #cccccc;margin-right:1px;height: 22px;width: 22px;}", this.document)
                        },
                        simpleuploadbtnready: function(n, o) {
                            e = o,
                            t.afterConfigReady(i)
                        }
                    },
                    outputRule: function(e) {
                        utils.each(e.getNodesByTagName("img"),
                        function(e) { / \b(loaderrorclass) | (bloaderrorclass)\b / .test(e.getAttr("class")) && e.parentNode.removeChild(e)
                        })
                    },
                    commands: {
                        simpleupload: {
                            queryCommandState: function() {
                                return n ? 0 : -1
                            }
                        }
                    }
                }
            }),
            UE.plugin.register("serverparam",
            function() {
                var e = {};
                return {
                    commands: {
                        serverparam: {
                            execCommand: function(t, n, i) {
                                void 0 === n || null === n ? e = {}: utils.isString(n) ? void 0 === i || null === i ? delete e[n] : e[n] = i: utils.isObject(n) ? utils.extend(e, n, !0) : utils.isFunction(n) && utils.extend(e, n(), !0)
                            },
                            queryCommandValue: function() {
                                return e || {}
                            }
                        }
                    }
                }
            }),
            UE.plugin.register("insertfile",
            function() {
                var e = this;
                return {
                    commands: {
                        insertfile: {
                            execCommand: function(t, n) {
                                n = utils.isArray(n) ? n: [n];
                                var i, o, r, a, s, l, d, c = "",
                                u = e.getOpt("UEDITOR_HOME_URL"),
                                m = u + ("/" == u.substr(u.length - 1) ? "": "/") + "dialogs/attachment/fileTypeImages/";
                                for (i = 0; i < n.length; i++) o = n[i],
                                r = m + (s = o.url, void 0, void 0, l = s.substr(s.lastIndexOf(".") + 1).toLowerCase(), (d = {
                                    rar: "icon_rar.gif",
                                    zip: "icon_rar.gif",
                                    tar: "icon_rar.gif",
                                    gz: "icon_rar.gif",
                                    bz2: "icon_rar.gif",
                                    doc: "icon_doc.gif",
                                    docx: "icon_doc.gif",
                                    pdf: "icon_pdf.gif",
                                    mp3: "icon_mp3.gif",
                                    xls: "icon_xls.gif",
                                    chm: "icon_chm.gif",
                                    ppt: "icon_ppt.gif",
                                    pptx: "icon_ppt.gif",
                                    avi: "icon_mv.gif",
                                    rmvb: "icon_mv.gif",
                                    wmv: "icon_mv.gif",
                                    flv: "icon_mv.gif",
                                    swf: "icon_mv.gif",
                                    rm: "icon_mv.gif",
                                    exe: "icon_exe.gif",
                                    psd: "icon_psd.gif",
                                    txt: "icon_txt.gif",
                                    jpg: "icon_jpg.gif",
                                    png: "icon_jpg.gif",
                                    jpeg: "icon_jpg.gif",
                                    gif: "icon_jpg.gif",
                                    ico: "icon_jpg.gif",
                                    bmp: "icon_jpg.gif"
                                })[l] ? d[l] : d.txt),
                                a = o.title || o.url.substr(o.url.lastIndexOf("/") + 1),
                                c += '<p style="line-height: 16px;"><img style="vertical-align: middle; margin-right: 2px;" src="' + r + '" _src="' + r + '" /><a style="font-size:12px; color:#0066cc;" href="' + o.url + '" title="' + a + '">' + a + "</a></p>";
                                e.execCommand("insertHtml", c)
                            }
                        }
                    }
                }
            }),
            UE.plugins.xssFilter = function() {
                var e, t = UEDITOR_CONFIG,
                n = t.whitList;
                function i(e) {
                    var t = e.tagName,
                    i = e.attrs;
                    if (!n.hasOwnProperty(t)) return e.parentNode.removeChild(e),
                    !1;
                    UE.utils.each(i,
                    function(i, o) { - 1 === n[t].indexOf(o) && e.setAttr(o)
                    })
                }
                n && t.xssFilterRules && (this.options.filterRules = (e = {},
                UE.utils.each(n,
                function(t, n) {
                    e[n] = function(e) {
                        return i(e)
                    }
                }), e));
                var o = [];
                UE.utils.each(n,
                function(e, t) {
                    o.push(t)
                }),
                n && t.inputXssFilter && this.addInputRule(function(e) {
                    e.traversal(function(e) {
                        if ("element" !== e.type) return ! 1;
                        i(e)
                    })
                }),
                n && t.outputXssFilter && this.addOutputRule(function(e) {
                    e.traversal(function(e) {
                        if ("element" !== e.type) return ! 1;
                        i(e)
                    })
                })
            };
            var baidu = baidu || {};
            baidu.editor = baidu.editor || {},
            UE.ui = baidu.editor.ui = {},
            function() {
                var e = baidu.editor.browser,
                t = baidu.editor.dom.domUtils,
                n = window.$EDITORUI = {},
                i = 0,
                o = baidu.editor.ui.uiUtils = {
                    uid: function(e) {
                        return e ? e.ID$EDITORUI || (e.ID$EDITORUI = ++i) : ++i
                    },
                    hook: function(e, t) {
                        var n;
                        return e && e._callbacks ? n = e: (n = function() {
                            var t;
                            e && (t = e.apply(this, arguments));
                            for (var i = n._callbacks,
                            o = i.length; o--;) {
                                var r = i[o].apply(this, arguments);
                                void 0 === t && (t = r)
                            }
                            return t
                        })._callbacks = [],
                        n._callbacks.push(t),
                        n
                    },
                    createElementByHtml: function(e) {
                        var t = document.createElement("div");
                        return t.innerHTML = e,
                        (t = t.firstChild).parentNode.removeChild(t),
                        t
                    },
                    getViewportElement: function() {
                        return e.ie && e.quirks ? document.body: document.documentElement
                    },
                    getClientRect: function(e) {
                        var n;
                        try {
                            n = e.getBoundingClientRect()
                        } catch(e) {
                            n = {
                                left: 0,
                                top: 0,
                                height: 0,
                                width: 0
                            }
                        }
                        for (var i, o = {
                            left: Math.round(n.left),
                            top: Math.round(n.top),
                            height: Math.round(n.bottom - n.top),
                            width: Math.round(n.right - n.left)
                        }; (i = e.ownerDocument) !== document && (e = t.getWindow(i).frameElement);) n = e.getBoundingClientRect(),
                        o.left += n.left,
                        o.top += n.top;
                        return o.bottom = o.top + o.height,
                        o.right = o.left + o.width,
                        o
                    },
                    getViewportRect: function() {
                        var e = o.getViewportElement(),
                        t = 0 | (window.innerWidth || e.clientWidth),
                        n = 0 | (window.innerHeight || e.clientHeight);
                        return {
                            left: 0,
                            top: 0,
                            height: n,
                            width: t,
                            bottom: n,
                            right: t
                        }
                    },
                    setViewportOffset: function(e, n) {
                        var i = o.getFixedLayer();
                        e.parentNode === i ? (e.style.left = n.left + "px", e.style.top = n.top + "px") : t.setViewportOffset(e, n)
                    },
                    getEventOffset: function(e) {
                        var t = e.target || e.srcElement,
                        n = o.getClientRect(t),
                        i = o.getViewportOffsetByEvent(e);
                        return {
                            left: i.left - n.left,
                            top: i.top - n.top
                        }
                    },
                    getViewportOffsetByEvent: function(e) {
                        var n = e.target || e.srcElement,
                        i = t.getWindow(n).frameElement,
                        r = {
                            left: e.clientX,
                            top: e.clientY
                        };
                        if (i && n.ownerDocument !== document) {
                            var a = o.getClientRect(i);
                            r.left += a.left,
                            r.top += a.top
                        }
                        return r
                    },
                    setGlobal: function(e, t) {
                        return n[e] = t,
                        '$EDITORUI["' + e + '"]'
                    },
                    unsetGlobal: function(e) {
                        delete n[e]
                    },
                    copyAttributes: function(n, i) {
                        for (var o = i.attributes,
                        r = o.length; r--;) {
                            var a = o[r];
                            "style" == a.nodeName || "class" == a.nodeName || e.ie && !a.specified || n.setAttribute(a.nodeName, a.nodeValue)
                        }
                        i.className && t.addClass(n, i.className),
                        i.style.cssText && (n.style.cssText += ";" + i.style.cssText)
                    },
                    removeStyle: function(e, t) {
                        if (e.style.removeProperty) e.style.removeProperty(t);
                        else {
                            if (!e.style.removeAttribute) throw "";
                            e.style.removeAttribute(t)
                        }
                    },
                    contains: function(e, t) {
                        return e && t && e !== t && (e.contains ? e.contains(t) : 16 & e.compareDocumentPosition(t))
                    },
                    startDrag: function(e, t, n) {
                        n = n || document;
                        var i = e.clientX,
                        o = e.clientY;
                        function r(e) {
                            var n = e.clientX - i,
                            r = e.clientY - o;
                            t.ondragmove(n, r, e),
                            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
                        }
                        if (n.addEventListener) {
                            function a(e) {
                                n.removeEventListener("mousemove", r, !0),
                                n.removeEventListener("mouseup", a, !0),
                                window.removeEventListener("mouseup", a, !0),
                                t.ondragstop()
                            }
                            n.addEventListener("mousemove", r, !0),
                            n.addEventListener("mouseup", a, !0),
                            window.addEventListener("mouseup", a, !0),
                            e.preventDefault()
                        } else {
                            var s = e.srcElement;
                            function l() {
                                s.releaseCapture(),
                                s.detachEvent("onmousemove", r),
                                s.detachEvent("onmouseup", l),
                                s.detachEvent("onlosecaptrue", l),
                                t.ondragstop()
                            }
                            s.setCapture(),
                            s.attachEvent("onmousemove", r),
                            s.attachEvent("onmouseup", l),
                            s.attachEvent("onlosecaptrue", l),
                            e.returnValue = !1
                        }
                        t.ondragstart()
                    },
                    getFixedLayer: function() {
                        var n = document.getElementById("edui_fixedlayer");
                        return null == n && ((n = document.createElement("div")).id = "edui_fixedlayer", document.body.appendChild(n), e.ie && e.version <= 8 ? (n.style.position = "absolute", t.on(window, "scroll", r), t.on(window, "resize", baidu.editor.utils.defer(r, 0, !0)), setTimeout(r)) : n.style.position = "fixed", n.style.left = "0", n.style.top = "0", n.style.width = "0", n.style.height = "0"),
                        n
                    },
                    makeUnselectable: function(t) {
                        if (e.opera || e.ie && e.version < 9) {
                            if (t.unselectable = "on", t.hasChildNodes()) for (var n = 0; n < t.childNodes.length; n++) 1 == t.childNodes[n].nodeType && o.makeUnselectable(t.childNodes[n])
                        } else void 0 !== t.style.MozUserSelect ? t.style.MozUserSelect = "none": void 0 !== t.style.WebkitUserSelect ? t.style.WebkitUserSelect = "none": void 0 !== t.style.KhtmlUserSelect && (t.style.KhtmlUserSelect = "none")
                    }
                };
                function r() {
                    var e = document.getElementById("edui_fixedlayer");
                    o.setViewportOffset(e, {
                        left: 0,
                        top: 0
                    })
                }
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.ui.uiUtils,
                n = baidu.editor.EventBase,
                i = baidu.editor.ui.UIBase = function() {};
                i.prototype = {
                    className: "",
                    uiName: "",
                    initOptions: function(e) {
                        for (var n in e) this[n] = e[n];
                        this.id = this.id || "edui" + t.uid()
                    },
                    initUIBase: function() {
                        this._globalKey = e.unhtml(t.setGlobal(this.id, this))
                    },
                    render: function(e) {
                        for (var n, i = this.renderHtml(), o = t.createElementByHtml(i), r = domUtils.getElementsByTagName(o, "*"), a = "edui-" + (this.theme || this.editor.options.theme), s = document.getElementById("edui_fixedlayer"), l = 0; n = r[l++];) domUtils.addClass(n, a);
                        domUtils.addClass(o, a),
                        s && (s.className = "", domUtils.addClass(s, a));
                        var d = this.getDom();
                        null != d ? (d.parentNode.replaceChild(o, d), t.copyAttributes(o, d)) : ("string" == typeof e && (e = document.getElementById(e)), e = e || t.getFixedLayer(), domUtils.addClass(e, a), e.appendChild(o)),
                        this.postRender()
                    },
                    getDom: function(e) {
                        return e ? document.getElementById(this.id + "_" + e) : document.getElementById(this.id)
                    },
                    postRender: function() {
                        this.fireEvent("postrender")
                    },
                    getHtmlTpl: function() {
                        return ""
                    },
                    formatHtml: function(e) {
                        var t = "edui-" + this.uiName;
                        return e.replace(/##/g, this.id).replace(/%%-/g, this.uiName ? t + "-": "").replace(/%%/g, (this.uiName ? t: "") + " " + this.className).replace(/\$\$/g, this._globalKey)
                    },
                    renderHtml: function() {
                        return this.formatHtml(this.getHtmlTpl())
                    },
                    dispose: function() {
                        var e = this.getDom();
                        e && baidu.editor.dom.domUtils.remove(e),
                        t.unsetGlobal(this.id)
                    }
                },
                e.inherits(i, n)
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.ui.UIBase,
                n = baidu.editor.ui.Separator = function(e) {
                    this.initOptions(e),
                    this.initSeparator()
                };
                n.prototype = {
                    uiName: "separator",
                    initSeparator: function() {
                        this.initUIBase()
                    },
                    getHtmlTpl: function() {
                        return '<div id="##" class="edui-box %%"></div>'
                    }
                },
                e.inherits(n, t)
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.dom.domUtils,
                n = baidu.editor.ui.UIBase,
                i = baidu.editor.ui.uiUtils,
                o = baidu.editor.ui.Mask = function(e) {
                    this.initOptions(e),
                    this.initUIBase()
                };
                o.prototype = {
                    getHtmlTpl: function() {
                        return '<div id="##" class="edui-mask %%" onclick="return $$._onClick(event, this);" onmousedown="return $$._onMouseDown(event, this);"></div>'
                    },
                    postRender: function() {
                        var e = this;
                        t.on(window, "resize",
                        function() {
                            setTimeout(function() {
                                e.isHidden() || e._fill()
                            })
                        })
                    },
                    show: function(e) {
                        this._fill(),
                        this.getDom().style.display = "",
                        this.getDom().style.zIndex = e
                    },
                    hide: function() {
                        this.getDom().style.display = "none",
                        this.getDom().style.zIndex = ""
                    },
                    isHidden: function() {
                        return "none" == this.getDom().style.display
                    },
                    _onMouseDown: function() {
                        return ! 1
                    },
                    _onClick: function(e, t) {
                        this.fireEvent("click", e, t)
                    },
                    _fill: function() {
                        var e = this.getDom(),
                        t = i.getViewportRect();
                        e.style.width = t.width + "px",
                        e.style.height = t.height + "px"
                    }
                },
                e.inherits(o, n)
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.ui.uiUtils,
                n = baidu.editor.dom.domUtils,
                i = baidu.editor.ui.UIBase,
                o = baidu.editor.ui.Popup = function(e) {
                    this.initOptions(e),
                    this.initPopup()
                },
                r = [];
                function a(e, t) {
                    for (var n = 0; n < r.length; n++) {
                        var i = r[n];
                        if (!i.isHidden() && !1 !== i.queryAutoHide(t)) {
                            if (e && /scroll/gi.test(e.type) && "edui-wordpastepop" == i.className) return;
                            i.hide()
                        }
                    }
                    r.length && i.editor.fireEvent("afterhidepop")
                }
                o.postHide = a;
                var s = ["edui-anchor-topleft", "edui-anchor-topright", "edui-anchor-bottomleft", "edui-anchor-bottomright"];
                o.prototype = {
                    SHADOW_RADIUS: 5,
                    content: null,
                    _hidden: !1,
                    autoRender: !0,
                    canSideLeft: !0,
                    canSideUp: !0,
                    initPopup: function() {
                        this.initUIBase(),
                        r.push(this)
                    },
                    getHtmlTpl: function() {
                        return '<div id="##" class="edui-popup %%" onmousedown="return false;"> <div id="##_body" class="edui-popup-body"> <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: transparent;" frameborder="0" width="100%" height="100%" src="about:blank"></iframe> <div class="edui-shadow"></div> <div id="##_content" class="edui-popup-content">' + this.getContentHtmlTpl() + "  </div> </div></div>"
                    },
                    getContentHtmlTpl: function() {
                        return this.content ? "string" == typeof this.content ? this.content: this.content.renderHtml() : ""
                    },
                    _UIBase_postRender: i.prototype.postRender,
                    postRender: function() {
                        if (this.content instanceof i && this.content.postRender(), this.captureWheel && !this.captured) {
                            this.captured = !0;
                            var e = (document.documentElement.clientHeight || document.body.clientHeight) - 80,
                            o = this.getDom().offsetHeight,
                            r = t.getClientRect(this.combox.getDom()).top,
                            a = this.getDom("content"),
                            s = this.getDom("body").getElementsByTagName("iframe"),
                            l = this;
                            for (s.length && (s = s[0]); r + o > e;) o -= 30;
                            a.style.height = o + "px",
                            s && (s.style.height = o + "px"),
                            window.XMLHttpRequest ? n.on(a, "onmousewheel" in document.body ? "mousewheel": "DOMMouseScroll",
                            function(e) {
                                e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                                e.wheelDelta ? a.scrollTop -= e.wheelDelta / 120 * 60 : a.scrollTop -= e.detail / -3 * 60
                            }) : n.on(this.getDom(), "mousewheel",
                            function(e) {
                                e.returnValue = !1,
                                l.getDom("content").scrollTop -= e.wheelDelta / 120 * 60
                            })
                        }
                        this.fireEvent("postRenderAfter"),
                        this.hide(!0),
                        this._UIBase_postRender()
                    },
                    _doAutoRender: function() { ! this.getDom() && this.autoRender && this.render()
                    },
                    mesureSize: function() {
                        var e = this.getDom("content");
                        return t.getClientRect(e)
                    },
                    fitSize: function() {
                        if (this.captureWheel && this.sized) return this.__size;
                        this.sized = !0;
                        var e = this.getDom("body");
                        e.style.width = "",
                        e.style.height = "";
                        var t = this.mesureSize();
                        if (this.captureWheel) {
                            e.style.width = -( - 20 - t.width) + "px";
                            var n = parseInt(this.getDom("content").style.height, 10); ! window.isNaN(n) && (t.height = n)
                        } else e.style.width = t.width + "px";
                        return e.style.height = t.height + "px",
                        this.__size = t,
                        this.captureWheel && (this.getDom("content").style.overflow = "auto"),
                        t
                    },
                    showAnchor: function(e, n) {
                        this.showAnchorRect(t.getClientRect(e), n)
                    },
                    showAnchorRect: function(e, i, o) {
                        this._doAutoRender();
                        var r = t.getViewportRect();
                        this.getDom().style.visibility = "hidden",
                        this._show();
                        var a, l, d, c, u = this.fitSize();
                        i ? (a = this.canSideLeft && e.right + u.width > r.right && e.left > u.width, l = this.canSideUp && e.top + u.height > r.bottom && e.bottom > u.height, d = a ? e.left - u.width: e.right, c = l ? e.bottom - u.height: e.top) : (a = this.canSideLeft && e.right + u.width > r.right && e.left > u.width, l = this.canSideUp && e.top + u.height > r.bottom && e.bottom > u.height, d = a ? e.right - u.width: e.left, c = l ? e.top - u.height: e.bottom);
                        var m = this.getDom();
                        t.setViewportOffset(m, {
                            left: d,
                            top: c
                        }),
                        n.removeClasses(m, s),
                        m.className += " " + s[2 * (l ? 1 : 0) + (a ? 1 : 0)],
                        this.editor && (m.style.zIndex = 1 * this.editor.container.style.zIndex + 10, baidu.editor.ui.uiUtils.getFixedLayer().style.zIndex = m.style.zIndex - 1),
                        this.getDom().style.visibility = "visible"
                    },
                    showAt: function(e) {
                        var t = e.left,
                        n = e.top,
                        i = {
                            left: t,
                            top: n,
                            right: t,
                            bottom: n,
                            height: 0,
                            width: 0
                        };
                        this.showAnchorRect(i, !1, !0)
                    },
                    _show: function() {
                        this._hidden && (this.getDom().style.display = "", this._hidden = !1, this.fireEvent("show"))
                    },
                    isHidden: function() {
                        return this._hidden
                    },
                    show: function() {
                        this._doAutoRender(),
                        this._show()
                    },
                    hide: function(e) { ! this._hidden && this.getDom() && (this.getDom().style.display = "none", this._hidden = !0, e || this.fireEvent("hide"))
                    },
                    queryAutoHide: function(e) {
                        return ! e || !t.contains(this.getDom(), e)
                    }
                },
                e.inherits(o, i),
                n.on(document, "mousedown",
                function(e) {
                    a(e, e.target || e.srcElement)
                }),
                n.on(window, "scroll",
                function(e, t) {
                    a(e, t)
                })
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.ui.UIBase,
                n = baidu.editor.ui.ColorPicker = function(e) {
                    this.initOptions(e),
                    this.noColorText = this.noColorText || this.editor.getLang("clearColor"),
                    this.initUIBase()
                };
                n.prototype = {
                    getHtmlTpl: function() {
                        return function(e, t) {
                            for (var n = '<div id="##" class="edui-colorpicker %%"><div class="edui-colorpicker-topbar edui-clearfix"><div unselectable="on" id="##_preview" class="edui-colorpicker-preview"></div><div unselectable="on" class="edui-colorpicker-nocolor" onclick="$$._onPickNoColor(event, this);">' + e + '</div></div><table  class="edui-box" style="border-collapse: collapse;" onmouseover="$$._onTableOver(event, this);" onmouseout="$$._onTableOut(event, this);" onclick="return $$._onTableClick(event, this);" cellspacing="0" cellpadding="0"><tr style="border-bottom: 1px solid #ddd;font-size: 13px;line-height: 25px;color:#39C;padding-top: 2px"><td colspan="10">' + t.getLang("themeColor") + '</td> </tr><tr class="edui-colorpicker-tablefirstrow" >', o = 0; o < i.length; o++) o && o % 10 == 0 && (n += "</tr>" + (60 == o ? '<tr style="border-bottom: 1px solid #ddd;font-size: 13px;line-height: 25px;color:#39C;"><td colspan="10">' + t.getLang("standardColor") + "</td></tr>": "") + "<tr" + (60 == o ? ' class="edui-colorpicker-tablefirstrow"': "") + ">"),
                            n += o < 70 ? '<td style="padding: 0 2px;"><a hidefocus title="' + i[o] + '" onclick="return false;" href="javascript:" unselectable="on" class="edui-box edui-colorpicker-colorcell" data-color="#' + i[o] + '" style="background-color:#' + i[o] + ";border:solid #ccc;" + (o < 10 || o >= 60 ? "border-width:1px;": o >= 10 && o < 20 ? "border-width:1px 1px 0 1px;": "border-width:0 1px 0 1px;") + '"></a></td>': "";
                            return n += "</tr></table></div>"
                        } (this.noColorText, this.editor)
                    },
                    _onTableClick: function(e) {
                        var t = (e.target || e.srcElement).getAttribute("data-color");
                        t && this.fireEvent("pickcolor", t)
                    },
                    _onTableOver: function(e) {
                        var t = (e.target || e.srcElement).getAttribute("data-color");
                        t && (this.getDom("preview").style.backgroundColor = t)
                    },
                    _onTableOut: function() {
                        this.getDom("preview").style.backgroundColor = ""
                    },
                    _onPickNoColor: function() {
                        this.fireEvent("picknocolor")
                    }
                },
                e.inherits(n, t);
                var i = "ffffff,000000,eeece1,1f497d,4f81bd,c0504d,9bbb59,8064a2,4bacc6,f79646,f2f2f2,7f7f7f,ddd9c3,c6d9f0,dbe5f1,f2dcdb,ebf1dd,e5e0ec,dbeef3,fdeada,d8d8d8,595959,c4bd97,8db3e2,b8cce4,e5b9b7,d7e3bc,ccc1d9,b7dde8,fbd5b5,bfbfbf,3f3f3f,938953,548dd4,95b3d7,d99694,c3d69b,b2a2c7,92cddc,fac08f,a5a5a5,262626,494429,17365d,366092,953734,76923c,5f497a,31859b,e36c09,7f7f7f,0c0c0c,1d1b10,0f243e,244061,632423,4f6128,3f3151,205867,974806,c00000,ff0000,ffc000,ffff00,92d050,00b050,00b0f0,0070c0,002060,7030a0,".split(",")
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.ui.uiUtils,
                n = baidu.editor.ui.UIBase,
                i = baidu.editor.ui.TablePicker = function(e) {
                    this.initOptions(e),
                    this.initTablePicker()
                };
                i.prototype = {
                    defaultNumRows: 10,
                    defaultNumCols: 10,
                    maxNumRows: 20,
                    maxNumCols: 20,
                    numRows: 10,
                    numCols: 10,
                    lengthOfCellSide: 22,
                    initTablePicker: function() {
                        this.initUIBase()
                    },
                    getHtmlTpl: function() {
                        return '<div id="##" class="edui-tablepicker %%"><div class="edui-tablepicker-body"><div class="edui-infoarea"><span id="##_label" class="edui-label"></span></div><div class="edui-pickarea" onmousemove="$$._onMouseMove(event, this);" onmouseover="$$._onMouseOver(event, this);" onmouseout="$$._onMouseOut(event, this);" onclick="$$._onClick(event, this);"><div id="##_overlay" class="edui-overlay"></div></div></div></div>'
                    },
                    _UIBase_render: n.prototype.render,
                    render: function(e) {
                        this._UIBase_render(e),
                        this.getDom("label").innerHTML = "0" + this.editor.getLang("t_row") + " x 0" + this.editor.getLang("t_col")
                    },
                    _track: function(e, t) {
                        var n = this.getDom("overlay").style,
                        i = this.lengthOfCellSide;
                        n.width = e * i + "px",
                        n.height = t * i + "px",
                        this.getDom("label").innerHTML = e + this.editor.getLang("t_col") + " x " + t + this.editor.getLang("t_row"),
                        this.numCols = e,
                        this.numRows = t
                    },
                    _onMouseOver: function(e, n) {
                        var i = e.relatedTarget || e.fromElement;
                        t.contains(n, i) || n === i || (this.getDom("label").innerHTML = "0" + this.editor.getLang("t_col") + " x 0" + this.editor.getLang("t_row"), this.getDom("overlay").style.visibility = "")
                    },
                    _onMouseOut: function(e, n) {
                        var i = e.relatedTarget || e.toElement;
                        t.contains(n, i) || n === i || (this.getDom("label").innerHTML = "0" + this.editor.getLang("t_col") + " x 0" + this.editor.getLang("t_row"), this.getDom("overlay").style.visibility = "hidden")
                    },
                    _onMouseMove: function(e, n) {
                        this.getDom("overlay").style;
                        var i = t.getEventOffset(e),
                        o = this.lengthOfCellSide,
                        r = Math.ceil(i.left / o),
                        a = Math.ceil(i.top / o);
                        this._track(r, a)
                    },
                    _onClick: function() {
                        this.fireEvent("picktable", this.numCols, this.numRows)
                    }
                },
                e.inherits(i, n)
            } (),
            function() {
                var e = baidu.editor.browser,
                t = baidu.editor.dom.domUtils,
                n = baidu.editor.ui.uiUtils,
                i = 'onmousedown="$$.Stateful_onMouseDown(event, this);" onmouseup="$$.Stateful_onMouseUp(event, this);"' + (e.ie ? ' onmouseenter="$$.Stateful_onMouseEnter(event, this);" onmouseleave="$$.Stateful_onMouseLeave(event, this);"': ' onmouseover="$$.Stateful_onMouseOver(event, this);" onmouseout="$$.Stateful_onMouseOut(event, this);"');
                baidu.editor.ui.Stateful = {
                    alwalysHoverable: !1,
                    target: null,
                    Stateful_init: function() {
                        this._Stateful_dGetHtmlTpl = this.getHtmlTpl,
                        this.getHtmlTpl = this.Stateful_getHtmlTpl
                    },
                    Stateful_getHtmlTpl: function() {
                        return this._Stateful_dGetHtmlTpl().replace(/stateful/g,
                        function() {
                            return i
                        })
                    },
                    Stateful_onMouseEnter: function(e, t) {
                        this.target = t,
                        this.isDisabled() && !this.alwalysHoverable || (this.addState("hover"), this.fireEvent("over"))
                    },
                    Stateful_onMouseLeave: function(e, t) {
                        this.isDisabled() && !this.alwalysHoverable || (this.removeState("hover"), this.removeState("active"), this.fireEvent("out"))
                    },
                    Stateful_onMouseOver: function(e, t) {
                        var i = e.relatedTarget;
                        n.contains(t, i) || t === i || this.Stateful_onMouseEnter(e, t)
                    },
                    Stateful_onMouseOut: function(e, t) {
                        var i = e.relatedTarget;
                        n.contains(t, i) || t === i || this.Stateful_onMouseLeave(e, t)
                    },
                    Stateful_onMouseDown: function(e, t) {
                        this.isDisabled() || this.addState("active")
                    },
                    Stateful_onMouseUp: function(e, t) {
                        this.isDisabled() || this.removeState("active")
                    },
                    Stateful_postRender: function() {
                        this.disabled && !this.hasState("disabled") && this.addState("disabled")
                    },
                    hasState: function(e) {
                        return t.hasClass(this.getStateDom(), "edui-state-" + e)
                    },
                    addState: function(e) {
                        this.hasState(e) || (this.getStateDom().className += " edui-state-" + e)
                    },
                    removeState: function(e) {
                        this.hasState(e) && t.removeClasses(this.getStateDom(), ["edui-state-" + e])
                    },
                    getStateDom: function() {
                        return this.getDom("state")
                    },
                    isChecked: function() {
                        return this.hasState("checked")
                    },
                    setChecked: function(e) { ! this.isDisabled() && e ? this.addState("checked") : this.removeState("checked")
                    },
                    isDisabled: function() {
                        return this.hasState("disabled")
                    },
                    setDisabled: function(e) {
                        e ? (this.removeState("hover"), this.removeState("checked"), this.removeState("active"), this.addState("disabled")) : this.removeState("disabled")
                    }
                }
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.ui.UIBase,
                n = baidu.editor.ui.Stateful,
                i = baidu.editor.ui.Button = function(e) {
                    if (e.name) {
                        var t = e.name,
                        n = e.cssRules;
                        e.className || (e.className = "edui-for-" + t),
                        e.cssRules = ".edui-default  .edui-for-" + t + " .edui-icon {" + n + "}"
                    }
                    this.initOptions(e),
                    this.initButton()
                };
                i.prototype = {
                    uiName: "button",
                    label: "",
                    title: "",
                    showIcon: !0,
                    showText: !0,
                    cssRules: "",
                    initButton: function() {
                        this.initUIBase(),
                        this.Stateful_init(),
                        this.cssRules && e.cssRule("edui-customize-" + this.name + "-style", this.cssRules)
                    },
                    getHtmlTpl: function() {
                        return '<div id="##" class="edui-box %%"><div id="##_state" stateful><div class="%%-wrap"><div id="##_body" unselectable="on" ' + (this.title ? 'title="' + this.title + '"': "") + ' class="%%-body" onmousedown="return $$._onMouseDown(event, this);" onclick="return $$._onClick(event, this);">' + (this.showIcon ? '<div class="edui-box edui-icon"></div>': "") + (this.showText ? '<div class="edui-box edui-label">' + this.label + "</div>": "") + "</div></div></div></div>"
                    },
                    postRender: function() {
                        this.Stateful_postRender(),
                        this.setDisabled(this.disabled)
                    },
                    _onMouseDown: function(e) {
                        var t = e.target || e.srcElement,
                        n = t && t.tagName && t.tagName.toLowerCase();
                        if ("input" == n || "object" == n || "object" == n) return ! 1
                    },
                    _onClick: function() {
                        this.isDisabled() || this.fireEvent("click")
                    },
                    setTitle: function(e) {
                        this.getDom("label").innerHTML = e
                    }
                },
                e.inherits(i, t),
                e.extend(i.prototype, n)
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.ui.uiUtils,
                n = (baidu.editor.dom.domUtils, baidu.editor.ui.UIBase),
                i = baidu.editor.ui.Stateful,
                o = baidu.editor.ui.SplitButton = function(e) {
                    this.initOptions(e),
                    this.initSplitButton()
                };
                o.prototype = {
                    popup: null,
                    uiName: "splitbutton",
                    title: "",
                    initSplitButton: function() {
                        this.initUIBase(),
                        this.Stateful_init();
                        if (null != this.popup) {
                            var e = this.popup;
                            this.popup = null,
                            this.setPopup(e)
                        }
                    },
                    _UIBase_postRender: n.prototype.postRender,
                    postRender: function() {
                        this.Stateful_postRender(),
                        this._UIBase_postRender()
                    },
                    setPopup: function(n) {
                        this.popup !== n && (null != this.popup && this.popup.dispose(), n.addListener("show", e.bind(this._onPopupShow, this)), n.addListener("hide", e.bind(this._onPopupHide, this)), n.addListener("postrender", e.bind(function() {
                            n.getDom("body").appendChild(t.createElementByHtml('<div id="' + this.popup.id + '_bordereraser" class="edui-bordereraser edui-background" style="width:' + (t.getClientRect(this.getDom()).width + 20) + 'px"></div>')),
                            n.getDom().className += " " + this.className
                        },
                        this)), this.popup = n)
                    },
                    _onPopupShow: function() {
                        this.addState("opened")
                    },
                    _onPopupHide: function() {
                        this.removeState("opened")
                    },
                    getHtmlTpl: function() {
                        return '<div id="##" class="edui-box %%"><div ' + (this.title ? 'title="' + this.title + '"': "") + ' id="##_state" stateful><div class="%%-body"><div id="##_button_body" class="edui-box edui-button-body" onclick="$$._onButtonClick(event, this);"><div class="edui-box edui-icon"></div></div><div class="edui-box edui-splitborder"></div><div class="edui-box edui-arrow" onclick="$$._onArrowClick();"></div></div></div></div>'
                    },
                    showPopup: function() {
                        var e = t.getClientRect(this.getDom());
                        e.top -= this.popup.SHADOW_RADIUS,
                        e.height += this.popup.SHADOW_RADIUS,
                        this.popup.showAnchorRect(e)
                    },
                    _onArrowClick: function(e, t) {
                        this.isDisabled() || this.showPopup()
                    },
                    _onButtonClick: function() {
                        this.isDisabled() || this.fireEvent("buttonclick")
                    }
                },
                e.inherits(o, n),
                e.extend(o.prototype, i, !0)
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.ui.uiUtils,
                n = baidu.editor.ui.ColorPicker,
                i = baidu.editor.ui.Popup,
                o = baidu.editor.ui.SplitButton,
                r = baidu.editor.ui.ColorButton = function(e) {
                    this.initOptions(e),
                    this.initColorButton()
                };
                r.prototype = {
                    initColorButton: function() {
                        var e = this;
                        this.popup = new i({
                            content: new n({
                                noColorText: e.editor.getLang("clearColor"),
                                editor: e.editor,
                                onpickcolor: function(t, n) {
                                    e._onPickColor(n)
                                },
                                onpicknocolor: function(t, n) {
                                    e._onPickNoColor(n)
                                }
                            }),
                            editor: e.editor
                        }),
                        this.initSplitButton()
                    },
                    _SplitButton_postRender: o.prototype.postRender,
                    postRender: function() {
                        this._SplitButton_postRender(),
                        this.getDom("button_body").appendChild(t.createElementByHtml('<div id="' + this.id + '_colorlump" class="edui-colorlump"></div>')),
                        this.getDom().className += " edui-colorbutton"
                    },
                    setColor: function(e) {
                        this.getDom("colorlump").style.backgroundColor = e,
                        this.color = e
                    },
                    _onPickColor: function(e) { ! 1 !== this.fireEvent("pickcolor", e) && (this.setColor(e), this.popup.hide())
                    },
                    _onPickNoColor: function(e) { ! 1 !== this.fireEvent("picknocolor") && this.popup.hide()
                    }
                },
                e.inherits(r, o)
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.ui.Popup,
                n = baidu.editor.ui.TablePicker,
                i = baidu.editor.ui.SplitButton,
                o = baidu.editor.ui.TableButton = function(e) {
                    this.initOptions(e),
                    this.initTableButton()
                };
                o.prototype = {
                    initTableButton: function() {
                        var e = this;
                        this.popup = new t({
                            content: new n({
                                editor: e.editor,
                                onpicktable: function(t, n, i) {
                                    e._onPickTable(n, i)
                                }
                            }),
                            editor: e.editor
                        }),
                        this.initSplitButton()
                    },
                    _onPickTable: function(e, t) { ! 1 !== this.fireEvent("picktable", e, t) && this.popup.hide()
                    }
                },
                e.inherits(o, i)
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.ui.UIBase,
                n = baidu.editor.ui.AutoTypeSetPicker = function(e) {
                    this.initOptions(e),
                    this.initAutoTypeSetPicker()
                };
                n.prototype = {
                    initAutoTypeSetPicker: function() {
                        this.initUIBase()
                    },
                    getHtmlTpl: function() {
                        var e = this.editor,
                        t = e.options.autotypeset,
                        n = e.getLang("autoTypeSet"),
                        i = "textAlignValue" + e.uid,
                        o = "imageBlockLineValue" + e.uid,
                        r = "symbolConverValue" + e.uid;
                        return '<div id="##" class="edui-autotypesetpicker %%"><div class="edui-autotypesetpicker-body"><table ><tr><td nowrap><input type="checkbox" name="mergeEmptyline" ' + (t.mergeEmptyline ? "checked": "") + ">" + n.mergeLine + '</td><td colspan="2"><input type="checkbox" name="removeEmptyline" ' + (t.removeEmptyline ? "checked": "") + ">" + n.delLine + '</td></tr><tr><td nowrap><input type="checkbox" name="removeClass" ' + (t.removeClass ? "checked": "") + ">" + n.removeFormat + '</td><td colspan="2"><input type="checkbox" name="indent" ' + (t.indent ? "checked": "") + ">" + n.indent + '</td></tr><tr><td nowrap><input type="checkbox" name="textAlign" ' + (t.textAlign ? "checked": "") + ">" + n.alignment + '</td><td colspan="2" id="' + i + '"><input type="radio" name="' + i + '" value="left" ' + (t.textAlign && "left" == t.textAlign ? "checked": "") + ">" + e.getLang("justifyleft") + '<input type="radio" name="' + i + '" value="center" ' + (t.textAlign && "center" == t.textAlign ? "checked": "") + ">" + e.getLang("justifycenter") + '<input type="radio" name="' + i + '" value="right" ' + (t.textAlign && "right" == t.textAlign ? "checked": "") + ">" + e.getLang("justifyright") + '</td></tr><tr><td nowrap><input type="checkbox" name="imageBlockLine" ' + (t.imageBlockLine ? "checked": "") + ">" + n.imageFloat + '</td><td nowrap id="' + o + '"><input type="radio" name="' + o + '" value="none" ' + (t.imageBlockLine && "none" == t.imageBlockLine ? "checked": "") + ">" + e.getLang("default") + '<input type="radio" name="' + o + '" value="left" ' + (t.imageBlockLine && "left" == t.imageBlockLine ? "checked": "") + ">" + e.getLang("justifyleft") + '<input type="radio" name="' + o + '" value="center" ' + (t.imageBlockLine && "center" == t.imageBlockLine ? "checked": "") + ">" + e.getLang("justifycenter") + '<input type="radio" name="' + o + '" value="right" ' + (t.imageBlockLine && "right" == t.imageBlockLine ? "checked": "") + ">" + e.getLang("justifyright") + '</td></tr><tr><td nowrap><input type="checkbox" name="clearFontSize" ' + (t.clearFontSize ? "checked": "") + ">" + n.removeFontsize + '</td><td colspan="2"><input type="checkbox" name="clearFontFamily" ' + (t.clearFontFamily ? "checked": "") + ">" + n.removeFontFamily + '</td></tr><tr><td nowrap colspan="3"><input type="checkbox" name="removeEmptyNode" ' + (t.removeEmptyNode ? "checked": "") + ">" + n.removeHtml + '</td></tr><tr><td nowrap colspan="3"><input type="checkbox" name="pasteFilter" ' + (t.pasteFilter ? "checked": "") + ">" + n.pasteFilter + '</td></tr><tr><td nowrap><input type="checkbox" name="symbolConver" ' + (t.bdc2sb || t.tobdc ? "checked": "") + ">" + n.symbol + '</td><td id="' + r + '"><input type="radio" name="bdc" value="bdc2sb" ' + (t.bdc2sb ? "checked": "") + ">" + n.bdc2sb + '<input type="radio" name="bdc" value="tobdc" ' + (t.tobdc ? "checked": "") + ">" + n.tobdc + '</td><td nowrap align="right"><button >' + n.run + "</button></td></tr></table></div></div>"
                    },
                    _UIBase_render: t.prototype.render
                },
                e.inherits(n, t)
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.ui.Popup,
                n = baidu.editor.ui.AutoTypeSetPicker,
                i = baidu.editor.ui.SplitButton,
                o = baidu.editor.ui.AutoTypeSetButton = function(e) {
                    this.initOptions(e),
                    this.initAutoTypeSetButton()
                };
                function r(t) {
                    for (var n, i = {},
                    o = t.getDom(), r = t.editor.uid, a = null, s = domUtils.getElementsByTagName(o, "input"), l = s.length - 1; n = s[l--];) if ("checkbox" == n.getAttribute("type")) if (i[a = n.getAttribute("name")] && delete i[a], n.checked) {
                        var d = document.getElementById(a + "Value" + r);
                        if (d) {
                            if (/input/gi.test(d.tagName)) i[a] = d.value;
                            else for (var c, u = d.getElementsByTagName("input"), m = u.length - 1; c = u[m--];) if (c.checked) {
                                i[a] = c.value;
                                break
                            }
                        } else i[a] = !0
                    } else i[a] = !1;
                    else i[n.getAttribute("value")] = n.checked;
                    var f, p = domUtils.getElementsByTagName(o, "select");
                    for (l = 0; f = p[l++];) {
                        var h = f.getAttribute("name");
                        i[h] = i[h] ? f.value: ""
                    }
                    e.extend(t.editor.options.autotypeset, i),
                    t.editor.setPreferences("autotypeset", i)
                }
                o.prototype = {
                    initAutoTypeSetButton: function() {
                        var e = this;
                        this.popup = new t({
                            content: new n({
                                editor: e.editor
                            }),
                            editor: e.editor,
                            hide: function() { ! this._hidden && this.getDom() && (r(this), this.getDom().style.display = "none", this._hidden = !0, this.fireEvent("hide"))
                            }
                        });
                        var i = 0;
                        this.popup.addListener("postRenderAfter",
                        function() {
                            var t = this;
                            if (!i) {
                                var n = this.getDom();
                                n.getElementsByTagName("button")[0].onclick = function() {
                                    r(t),
                                    e.editor.execCommand("autotypeset"),
                                    t.hide()
                                },
                                domUtils.on(n, "click",
                                function(n) {
                                    var i = n.target || n.srcElement,
                                    o = e.editor.uid;
                                    if (i && "INPUT" == i.tagName) {
                                        if ("imageBlockLine" == i.name || "textAlign" == i.name || "symbolConver" == i.name) for (var a = i.checked,
                                        s = document.getElementById(i.name + "Value" + o).getElementsByTagName("input"), l = {
                                            imageBlockLine: "none",
                                            textAlign: "left",
                                            symbolConver: "tobdc"
                                        },
                                        d = 0; d < s.length; d++) a ? s[d].value == l[i.name] && (s[d].checked = "checked") : s[d].checked = !1;
                                        if (i.name == "imageBlockLineValue" + o || i.name == "textAlignValue" + o || "bdc" == i.name) {
                                            var c = i.parentNode.previousSibling.getElementsByTagName("input");
                                            c && (c[0].checked = !0)
                                        }
                                        r(t)
                                    }
                                }),
                                i = 1
                            }
                        }),
                        this.initSplitButton()
                    }
                },
                e.inherits(o, i)
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.ui.Popup,
                n = baidu.editor.ui.Stateful,
                i = baidu.editor.ui.UIBase,
                o = baidu.editor.ui.CellAlignPicker = function(e) {
                    this.initOptions(e),
                    this.initSelected(),
                    this.initCellAlignPicker()
                };
                o.prototype = {
                    initSelected: function() {
                        var e = {
                            top: 0,
                            middle: 1,
                            bottom: 2
                        },
                        t = {
                            left: 0,
                            center: 1,
                            right: 2
                        },
                        n = 3;
                        this.selected && (this.selectedIndex = e[this.selected.valign] * n + t[this.selected.align])
                    },
                    initCellAlignPicker: function() {
                        this.initUIBase(),
                        this.Stateful_init()
                    },
                    getHtmlTpl: function() {
                        for (var e = ["left", "center", "right"], t = null, n = -1, i = [], o = 0; o < 9; o++) t = this.selectedIndex === o ? ' class="edui-cellalign-selected" ': "",
                        0 === (n = o % 3) && i.push("<tr>"),
                        i.push('<td index="' + o + '" ' + t + ' stateful><div class="edui-icon edui-' + e[n] + '"></div></td>'),
                        2 === n && i.push("</tr>");
                        return '<div id="##" class="edui-cellalignpicker %%"><div class="edui-cellalignpicker-body"><table onclick="$$._onClick(event);">' + i.join("") + "</table></div></div>"
                    },
                    getStateDom: function() {
                        return this.target
                    },
                    _onClick: function(e) {
                        var n = e.target || e.srcElement;
                        /icon/.test(n.className) && (this.items[n.parentNode.getAttribute("index")].onclick(), t.postHide(e))
                    },
                    _UIBase_render: i.prototype.render
                },
                e.inherits(o, i),
                e.extend(o.prototype, n, !0)
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.ui.Stateful,
                n = baidu.editor.ui.uiUtils,
                i = baidu.editor.ui.UIBase,
                o = baidu.editor.ui.PastePicker = function(e) {
                    this.initOptions(e),
                    this.initPastePicker()
                };
                o.prototype = {
                    initPastePicker: function() {
                        this.initUIBase(),
                        this.Stateful_init()
                    },
                    getHtmlTpl: function() {
                        return '<div class="edui-pasteicon" onclick="$$._onClick(this)"></div><div class="edui-pastecontainer"><div class="edui-title">' + this.editor.getLang("pasteOpt") + '</div><div class="edui-button"><div title="' + this.editor.getLang("pasteSourceFormat") + '" onclick="$$.format(false)" stateful><div class="edui-richtxticon"></div></div><div title="' + this.editor.getLang("tagFormat") + '" onclick="$$.format(2)" stateful><div class="edui-tagicon"></div></div><div title="' + this.editor.getLang("pasteTextFormat") + '" onclick="$$.format(true)" stateful><div class="edui-plaintxticon"></div></div></div></div></div>'
                    },
                    getStateDom: function() {
                        return this.target
                    },
                    format: function(e) {
                        this.editor.ui._isTransfer = !0,
                        this.editor.fireEvent("pasteTransfer", e)
                    },
                    _onClick: function(e) {
                        var t = domUtils.getNextDomNode(e),
                        i = n.getViewportRect().height,
                        o = n.getClientRect(t);
                        o.top + o.height > i ? t.style.top = -o.height - e.offsetHeight + "px": t.style.top = "",
                        /hidden/gi.test(domUtils.getComputedStyle(t, "visibility")) ? (t.style.visibility = "visible", domUtils.addClass(e, "edui-state-opened")) : (t.style.visibility = "hidden", domUtils.removeClasses(e, "edui-state-opened"))
                    },
                    _UIBase_render: i.prototype.render
                },
                e.inherits(o, i),
                e.extend(o.prototype, t, !0)
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.ui.uiUtils,
                n = baidu.editor.ui.UIBase,
                i = baidu.editor.ui.Toolbar = function(e) {
                    this.initOptions(e),
                    this.initToolbar()
                };
                i.prototype = {
                    items: null,
                    initToolbar: function() {
                        this.items = this.items || [],
                        this.initUIBase()
                    },
                    add: function(e, t) {
                        void 0 === t ? this.items.push(e) : this.items.splice(t, 0, e)
                    },
                    getHtmlTpl: function() {
                        for (var e = [], t = 0; t < this.items.length; t++) e[t] = this.items[t].renderHtml();
                        return '<div id="##" class="edui-toolbar %%" onselectstart="return false;" onmousedown="return $$._onMouseDown(event, this);">' + e.join("") + "</div>"
                    },
                    postRender: function() {
                        for (var e = this.getDom(), n = 0; n < this.items.length; n++) this.items[n].postRender();
                        t.makeUnselectable(e)
                    },
                    _onMouseDown: function(e) {
                        var t = e.target || e.srcElement,
                        n = t && t.tagName && t.tagName.toLowerCase();
                        if ("input" == n || "object" == n || "object" == n) return ! 1
                    }
                },
                e.inherits(i, n)
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.dom.domUtils,
                n = baidu.editor.ui.uiUtils,
                i = baidu.editor.ui.UIBase,
                o = baidu.editor.ui.Popup,
                r = baidu.editor.ui.Stateful,
                a = baidu.editor.ui.CellAlignPicker,
                s = baidu.editor.ui.Menu = function(e) {
                    this.initOptions(e),
                    this.initMenu()
                },
                l = {
                    renderHtml: function() {
                        return '<div class="edui-menuitem edui-menuseparator"><div class="edui-menuseparator-inner"></div></div>'
                    },
                    postRender: function() {},
                    queryAutoHide: function() {
                        return ! 0
                    }
                };
                s.prototype = {
                    items: null,
                    uiName: "menu",
                    initMenu: function() {
                        this.items = this.items || [],
                        this.initPopup(),
                        this.initItems()
                    },
                    initItems: function() {
                        for (var e = 0; e < this.items.length; e++) {
                            var t = this.items[e];
                            "-" == t ? this.items[e] = this.getSeparator() : t instanceof d || (t.editor = this.editor, t.theme = this.editor.options.theme, this.items[e] = this.createItem(t))
                        }
                    },
                    getSeparator: function() {
                        return l
                    },
                    createItem: function(e) {
                        return e.menu = this,
                        new d(e)
                    },
                    _Popup_getContentHtmlTpl: o.prototype.getContentHtmlTpl,
                    getContentHtmlTpl: function() {
                        if (0 == this.items.length) return this._Popup_getContentHtmlTpl();
                        for (var e = [], t = 0; t < this.items.length; t++) {
                            var n = this.items[t];
                            e[t] = n.renderHtml()
                        }
                        return '<div class="%%-body">' + e.join("") + "</div>"
                    },
                    _Popup_postRender: o.prototype.postRender,
                    postRender: function() {
                        for (var e = this,
                        i = 0; i < this.items.length; i++) {
                            var o = this.items[i];
                            o.ownerMenu = this,
                            o.postRender()
                        }
                        t.on(this.getDom(), "mouseover",
                        function(t) {
                            var i = (t = t || event).relatedTarget || t.fromElement,
                            o = e.getDom();
                            n.contains(o, i) || o === i || e.fireEvent("over")
                        }),
                        this._Popup_postRender()
                    },
                    queryAutoHide: function(e) {
                        if (e) {
                            if (n.contains(this.getDom(), e)) return ! 1;
                            for (var t = 0; t < this.items.length; t++) {
                                if (!1 === this.items[t].queryAutoHide(e)) return ! 1
                            }
                        }
                    },
                    clearItems: function() {
                        for (var e = 0; e < this.items.length; e++) {
                            var t = this.items[e];
                            clearTimeout(t._showingTimer),
                            clearTimeout(t._closingTimer),
                            t.subMenu && t.subMenu.destroy()
                        }
                        this.items = []
                    },
                    destroy: function() {
                        this.getDom() && t.remove(this.getDom()),
                        this.clearItems()
                    },
                    dispose: function() {
                        this.destroy()
                    }
                },
                e.inherits(s, o);
                var d = baidu.editor.ui.MenuItem = function(e) {
                    if (this.initOptions(e), this.initUIBase(), this.Stateful_init(), this.subMenu && !(this.subMenu instanceof s)) if (e.className && -1 != e.className.indexOf("aligntd")) {
                        var n = this;
                        this.subMenu.selected = this.editor.queryCommandValue("cellalignment"),
                        this.subMenu = new o({
                            content: new a(this.subMenu),
                            parentMenu: n,
                            editor: n.editor,
                            destroy: function() {
                                this.getDom() && t.remove(this.getDom())
                            }
                        }),
                        this.subMenu.addListener("postRenderAfter",
                        function() {
                            t.on(this.getDom(), "mouseover",
                            function() {
                                n.addState("opened")
                            })
                        })
                    } else this.subMenu = new s(this.subMenu)
                };
                d.prototype = {
                    label: "",
                    subMenu: null,
                    ownerMenu: null,
                    uiName: "menuitem",
                    alwalysHoverable: !0,
                    getHtmlTpl: function() {
                        return '<div id="##" class="%%" stateful onclick="$$._onClick(event, this);"><div class="%%-body">' + this.renderLabelHtml() + "</div></div>"
                    },
                    postRender: function() {
                        var e = this;
                        this.addListener("over",
                        function() {
                            e.ownerMenu.fireEvent("submenuover", e),
                            e.subMenu && e.delayShowSubMenu()
                        }),
                        this.subMenu && (this.getDom().className += " edui-hassubmenu", this.subMenu.render(), this.addListener("out",
                        function() {
                            e.delayHideSubMenu()
                        }), this.subMenu.addListener("over",
                        function() {
                            clearTimeout(e._closingTimer),
                            e._closingTimer = null,
                            e.addState("opened")
                        }), this.ownerMenu.addListener("hide",
                        function() {
                            e.hideSubMenu()
                        }), this.ownerMenu.addListener("submenuover",
                        function(t, n) {
                            n !== e && e.delayHideSubMenu()
                        }), this.subMenu._bakQueryAutoHide = this.subMenu.queryAutoHide, this.subMenu.queryAutoHide = function(t) {
                            return (!t || !n.contains(e.getDom(), t)) && this._bakQueryAutoHide(t)
                        }),
                        this.getDom().style.tabIndex = "-1",
                        n.makeUnselectable(this.getDom()),
                        this.Stateful_postRender()
                    },
                    delayShowSubMenu: function() {
                        var e = this;
                        e.isDisabled() || (e.addState("opened"), clearTimeout(e._showingTimer), clearTimeout(e._closingTimer), e._closingTimer = null, e._showingTimer = setTimeout(function() {
                            e.showSubMenu()
                        },
                        250))
                    },
                    delayHideSubMenu: function() {
                        var e = this;
                        e.isDisabled() || (e.removeState("opened"), clearTimeout(e._showingTimer), e._closingTimer || (e._closingTimer = setTimeout(function() {
                            e.hasState("opened") || e.hideSubMenu(),
                            e._closingTimer = null
                        },
                        400)))
                    },
                    renderLabelHtml: function() {
                        return '<div class="edui-arrow"></div><div class="edui-box edui-icon"></div><div class="edui-box edui-label %%-label">' + (this.label || "") + "</div>"
                    },
                    getStateDom: function() {
                        return this.getDom()
                    },
                    queryAutoHide: function(e) {
                        if (this.subMenu && this.hasState("opened")) return this.subMenu.queryAutoHide(e)
                    },
                    _onClick: function(e, t) {
                        this.hasState("disabled") || !1 !== this.fireEvent("click", e, t) && (this.subMenu ? this.showSubMenu() : o.postHide(e))
                    },
                    showSubMenu: function() {
                        var e = n.getClientRect(this.getDom());
                        e.right -= 5,
                        e.left += 2,
                        e.width -= 7,
                        e.top -= 4,
                        e.bottom += 4,
                        e.height += 8,
                        this.subMenu.showAnchorRect(e, !0, !0)
                    },
                    hideSubMenu: function() {
                        this.subMenu.hide()
                    }
                },
                e.inherits(d, i),
                e.extend(d.prototype, r, !0)
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.ui.uiUtils,
                n = baidu.editor.ui.Menu,
                i = baidu.editor.ui.SplitButton,
                o = baidu.editor.ui.Combox = function(e) {
                    this.initOptions(e),
                    this.initCombox()
                };
                o.prototype = {
                    uiName: "combox",
                    onbuttonclick: function() {
                        this.showPopup()
                    },
                    initCombox: function() {
                        var e = this;
                        this.items = this.items || [];
                        for (var t = 0; t < this.items.length; t++) {
                            var i = this.items[t];
                            i.uiName = "listitem",
                            i.index = t,
                            i.onclick = function() {
                                e.selectByIndex(this.index)
                            }
                        }
                        this.popup = new n({
                            items: this.items,
                            uiName: "list",
                            editor: this.editor,
                            captureWheel: !0,
                            combox: this
                        }),
                        this.initSplitButton()
                    },
                    _SplitButton_postRender: i.prototype.postRender,
                    postRender: function() {
                        this._SplitButton_postRender(),
                        this.setLabel(this.label || ""),
                        this.setValue(this.initValue || "")
                    },
                    showPopup: function() {
                        var e = t.getClientRect(this.getDom());
                        e.top += 1,
                        e.bottom -= 1,
                        e.height -= 2,
                        this.popup.showAnchorRect(e)
                    },
                    getValue: function() {
                        return this.value
                    },
                    setValue: function(e) {
                        var t = this.indexByValue(e); - 1 != t ? (this.selectedIndex = t, this.setLabel(this.items[t].label), this.value = this.items[t].value) : (this.selectedIndex = -1, this.setLabel(this.getLabelForUnknowValue(e)), this.value = e)
                    },
                    setLabel: function(e) {
                        this.getDom("button_body").innerHTML = e,
                        this.label = e
                    },
                    getLabelForUnknowValue: function(e) {
                        return e
                    },
                    indexByValue: function(e) {
                        for (var t = 0; t < this.items.length; t++) if (e == this.items[t].value) return t;
                        return - 1
                    },
                    getItem: function(e) {
                        return this.items[e]
                    },
                    selectByIndex: function(e) {
                        e < this.items.length && !1 !== this.fireEvent("select", e) && (this.selectedIndex = e, this.value = this.items[e].value, this.setLabel(this.items[e].label))
                    }
                },
                e.inherits(o, i)
            } (),
            function() {
                var e, t, n, i = baidu.editor.utils,
                o = baidu.editor.dom.domUtils,
                r = baidu.editor.ui.uiUtils,
                a = baidu.editor.ui.Mask,
                s = baidu.editor.ui.UIBase,
                l = baidu.editor.ui.Button,
                d = baidu.editor.ui.Dialog = function(e) {
                    if (e.name) {
                        var t = e.name,
                        n = e.cssRules;
                        e.className || (e.className = "edui-for-" + t),
                        n && (e.cssRules = ".edui-default .edui-for-" + t + " .edui-dialog-content  {" + n + "}")
                    }
                    this.initOptions(i.extend({
                        autoReset: !0,
                        draggable: !0,
                        onok: function() {},
                        oncancel: function() {},
                        onclose: function(e, t) {
                            return t ? this.onok() : this.oncancel()
                        },
                        holdScroll: !1
                    },
                    e)),
                    this.initDialog()
                };
                d.prototype = {
                    draggable: !1,
                    uiName: "dialog",
                    initDialog: function() {
                        var o = this,
                        r = this.editor.options.theme;
                        if (this.cssRules && i.cssRule("edui-customize-" + this.name + "-style", this.cssRules), this.initUIBase(), this.modalMask = e || (e = new a({
                            className: "edui-dialog-modalmask",
                            theme: r,
                            onclick: function() {
                                n && n.close(!1)
                            }
                        })), this.dragMask = t || (t = new a({
                            className: "edui-dialog-dragmask",
                            theme: r
                        })), this.closeButton = new l({
                            className: "edui-dialog-closebutton",
                            title: o.closeDialog,
                            theme: r,
                            onclick: function() {
                                o.close(!1)
                            }
                        }), this.fullscreen && this.initResizeEvent(), this.buttons) for (var s = 0; s < this.buttons.length; s++) this.buttons[s] instanceof l || (this.buttons[s] = new l(i.extend(this.buttons[s], {
                            editor: this.editor
                        },
                        !0)))
                    },
                    initResizeEvent: function() {
                        var e = this;
                        o.on(window, "resize",
                        function() {
                            e._hidden || void 0 === e._hidden || (e.__resizeTimer && window.clearTimeout(e.__resizeTimer), e.__resizeTimer = window.setTimeout(function() {
                                e.__resizeTimer = null;
                                var t = e.getDom(),
                                n = e.getDom("content"),
                                i = UE.ui.uiUtils.getClientRect(t),
                                o = UE.ui.uiUtils.getClientRect(n),
                                a = r.getViewportRect();
                                n.style.width = a.width - i.width + o.width + "px",
                                n.style.height = a.height - i.height + o.height + "px",
                                t.style.width = a.width + "px",
                                t.style.height = a.height + "px",
                                e.fireEvent("resize")
                            },
                            100))
                        })
                    },
                    fitSize: function() {
                        var e = this.getDom("body"),
                        t = this.mesureSize();
                        return e.style.width = t.width + "px",
                        e.style.height = t.height + "px",
                        t
                    },
                    safeSetOffset: function(e) {
                        var t = this.getDom(),
                        n = r.getViewportRect(),
                        i = r.getClientRect(t),
                        o = e.left;
                        o + i.width > n.right && (o = n.right - i.width);
                        var a = e.top;
                        a + i.height > n.bottom && (a = n.bottom - i.height),
                        t.style.left = Math.max(o, 0) + "px",
                        t.style.top = Math.max(a, 0) + "px"
                    },
                    showAtCenter: function() {
                        var e = r.getViewportRect();
                        if (this.fullscreen) {
                            var t = this.getDom(),
                            n = this.getDom("content");
                            t.style.display = "block";
                            var i = UE.ui.uiUtils.getClientRect(t),
                            a = UE.ui.uiUtils.getClientRect(n);
                            t.style.left = "-100000px",
                            n.style.width = e.width - i.width + a.width + "px",
                            n.style.height = e.height - i.height + a.height + "px",
                            t.style.width = e.width + "px",
                            t.style.height = e.height + "px",
                            t.style.left = 0,
                            this._originalContext = {
                                html: {
                                    overflowX: document.documentElement.style.overflowX,
                                    overflowY: document.documentElement.style.overflowY
                                },
                                body: {
                                    overflowX: document.body.style.overflowX,
                                    overflowY: document.body.style.overflowY
                                }
                            },
                            document.documentElement.style.overflowX = "hidden",
                            document.documentElement.style.overflowY = "hidden",
                            document.body.style.overflowX = "hidden",
                            document.body.style.overflowY = "hidden"
                        } else {
                            this.getDom().style.display = "";
                            var s = this.fitSize(),
                            l = 0 | this.getDom("titlebar").offsetHeight,
                            d = e.width / 2 - s.width / 2,
                            c = e.height / 2 - (s.height - l) / 2 - l,
                            u = this.getDom();
                            this.safeSetOffset({
                                left: Math.max(0 | d, 0),
                                top: Math.max(0 | c, 0)
                            }),
                            o.hasClass(u, "edui-state-centered") || (u.className += " edui-state-centered")
                        }
                        this._show()
                    },
                    getContentHtml: function() {
                        var e = "";
                        return "string" == typeof this.content ? e = this.content: this.iframeUrl && (e = '<span id="' + this.id + '_contmask" class="dialogcontmask"></span><iframe id="' + this.id + '_iframe" class="%%-iframe" height="100%" width="100%" frameborder="0" src="' + this.iframeUrl + '"></iframe>'),
                        e
                    },
                    getHtmlTpl: function() {
                        var e = "";
                        if (this.buttons) {
                            for (var t = [], n = 0; n < this.buttons.length; n++) t[n] = this.buttons[n].renderHtml();
                            e = '<div class="%%-foot"><div id="##_buttons" class="%%-buttons">' + t.join("") + "</div></div>"
                        }
                        return '<div id="##" class="%%"><div ' + (this.fullscreen ? 'class="%%-wrap edui-dialog-fullscreen-flag"': 'class="%%"') + '><div id="##_body" class="%%-body"><div class="%%-shadow"></div><div id="##_titlebar" class="%%-titlebar"><div class="%%-draghandle" onmousedown="$$._onTitlebarMouseDown(event, this);"><span class="%%-caption">' + (this.title || "") + "</span></div>" + this.closeButton.renderHtml() + '</div><div id="##_content" class="%%-content">' + (this.autoReset ? "": this.getContentHtml()) + "</div>" + e + "</div></div></div>"
                    },
                    postRender: function() {
                        this.modalMask.getDom() || (this.modalMask.render(), this.modalMask.hide()),
                        this.dragMask.getDom() || (this.dragMask.render(), this.dragMask.hide());
                        var e = this;
                        if (this.addListener("show",
                        function() {
                            e.modalMask.show(this.getDom().style.zIndex - 2)
                        }), this.addListener("hide",
                        function() {
                            e.modalMask.hide()
                        }), this.buttons) for (var t = 0; t < this.buttons.length; t++) this.buttons[t].postRender();
                        o.on(window, "resize",
                        function() {
                            setTimeout(function() {
                                e.isHidden() || e.safeSetOffset(r.getClientRect(e.getDom()))
                            })
                        }),
                        this._hide()
                    },
                    mesureSize: function() {
                        var e = this.getDom("body"),
                        t = r.getClientRect(this.getDom("content")).width;
                        return e.style.width = t,
                        r.getClientRect(e)
                    },
                    _onTitlebarMouseDown: function(e, t) {
                        if (this.draggable) {
                            r.getViewportRect();
                            var n, i = this;
                            r.startDrag(e, {
                                ondragstart: function() {
                                    n = r.getClientRect(i.getDom()),
                                    i.getDom("contmask").style.visibility = "visible",
                                    i.dragMask.show(i.getDom().style.zIndex - 1)
                                },
                                ondragmove: function(e, t) {
                                    var o = n.left + e,
                                    r = n.top + t;
                                    i.safeSetOffset({
                                        left: o,
                                        top: r
                                    })
                                },
                                ondragstop: function() {
                                    i.getDom("contmask").style.visibility = "hidden",
                                    o.removeClasses(i.getDom(), ["edui-state-centered"]),
                                    i.dragMask.hide()
                                }
                            })
                        }
                    },
                    reset: function() {
                        this.getDom("content").innerHTML = this.getContentHtml(),
                        this.fireEvent("dialogafterreset")
                    },
                    _show: function() {
                        this._hidden && (this.getDom().style.display = "", this.editor.container.style.zIndex && (this.getDom().style.zIndex = 1 * this.editor.container.style.zIndex + 10), this._hidden = !1, this.fireEvent("show"), baidu.editor.ui.uiUtils.getFixedLayer().style.zIndex = this.getDom().style.zIndex - 4)
                    },
                    isHidden: function() {
                        return this._hidden
                    },
                    _hide: function() {
                        if (!this._hidden) {
                            var e = this.getDom();
                            e.style.display = "none",
                            e.style.zIndex = "",
                            e.style.width = "",
                            e.style.height = "",
                            this._hidden = !0,
                            this.fireEvent("hide")
                        }
                    },
                    open: function() {
                        if (this.autoReset) try {
                            this.reset()
                        } catch(e) {
                            this.render(),
                            this.open()
                        }
                        if (this.showAtCenter(), this.iframeUrl) try {
                            this.getDom("iframe").focus()
                        } catch(e) {}
                        n = this
                    },
                    _onCloseButtonClick: function(e, t) {
                        this.close(!1)
                    },
                    close: function(e) {
                        if (!1 !== this.fireEvent("close", e)) {
                            this.fullscreen && (document.documentElement.style.overflowX = this._originalContext.html.overflowX, document.documentElement.style.overflowY = this._originalContext.html.overflowY, document.body.style.overflowX = this._originalContext.body.overflowX, document.body.style.overflowY = this._originalContext.body.overflowY, delete this._originalContext),
                            this._hide();
                            var t = this.getDom("content"),
                            n = this.getDom("iframe");
                            if (t && n) {
                                var i = n.contentDocument || n.contentWindow.document;
                                i && (i.body.innerHTML = ""),
                                o.remove(t)
                            }
                        }
                    }
                },
                i.inherits(d, s)
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.ui.Menu,
                n = baidu.editor.ui.SplitButton,
                i = baidu.editor.ui.MenuButton = function(e) {
                    this.initOptions(e),
                    this.initMenuButton()
                };
                i.prototype = {
                    initMenuButton: function() {
                        var e = this;
                        this.uiName = "menubutton",
                        this.popup = new t({
                            items: e.items,
                            className: e.className,
                            editor: e.editor
                        }),
                        this.popup.addListener("show",
                        function() {
                            for (var t = 0; t < this.items.length; t++) this.items[t].removeState("checked"),
                            this.items[t].value == e._value && (this.items[t].addState("checked"), this.value = e._value)
                        }),
                        this.initSplitButton()
                    },
                    setValue: function(e) {
                        this._value = e
                    }
                },
                e.inherits(i, n)
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.ui.Popup,
                n = baidu.editor.ui.SplitButton,
                i = baidu.editor.ui.MultiMenuPop = function(e) {
                    this.initOptions(e),
                    this.initMultiMenu()
                };
                i.prototype = {
                    initMultiMenu: function() {
                        var e = this;
                        this.popup = new t({
                            content: "",
                            editor: e.editor,
                            iframe_rendered: !1,
                            onshow: function() {
                                this.iframe_rendered || (this.iframe_rendered = !0, this.getDom("content").innerHTML = '<iframe id="' + e.id + '_iframe" src="' + e.iframeUrl + '" frameborder="0"></iframe>', e.editor.container.style.zIndex && (this.getDom().style.zIndex = 1 * e.editor.container.style.zIndex + 1))
                            }
                        }),
                        this.onbuttonclick = function() {
                            this.showPopup()
                        },
                        this.initSplitButton()
                    }
                },
                e.inherits(i, n)
            } (),
            function() {
                var e, t = baidu.editor.ui,
                n = t.UIBase,
                i = t.uiUtils,
                o = baidu.editor.utils,
                r = baidu.editor.dom.domUtils,
                a = [],
                s = !1,
                l = t.ShortCutMenu = function(e) {
                    this.initOptions(e),
                    this.initShortCutMenu()
                };
                function d(e) {
                    var t = e.target || e.srcElement;
                    if (!r.findParent(t,
                    function(e) {
                        return r.hasClass(e, "edui-shortcutmenu") || r.hasClass(e, "edui-popup")
                    },
                    !0)) for (var n, i = 0; n = a[i++];) n.hide()
                }
                l.postHide = d,
                l.prototype = {
                    isHidden: !0,
                    SPACE: 5,
                    initShortCutMenu: function() {
                        this.items = this.items || [],
                        this.initUIBase(),
                        this.initItems(),
                        this.initEvent(),
                        a.push(this)
                    },
                    initEvent: function() {
                        var t = this,
                        n = t.editor.document;
                        r.on(n, "mousemove",
                        function(n) {
                            if (!1 === t.isHidden) {
                                if (t.getSubMenuMark() || "contextmenu" == t.eventType) return;
                                var i = !0,
                                o = t.getDom(),
                                r = o.offsetWidth,
                                a = o.offsetHeight,
                                s = r / 2 + t.SPACE,
                                l = a / 2,
                                d = Math.abs(n.screenX - t.left),
                                c = Math.abs(n.screenY - t.top);
                                clearTimeout(e),
                                e = setTimeout(function() {
                                    c > 0 && c < l ? t.setOpacity(o, "1") : c > l && c < l + 70 ? (t.setOpacity(o, "0.5"), i = !1) : c > l + 70 && c < l + 140 && t.hide(),
                                    i && d > 0 && d < s ? t.setOpacity(o, "1") : d > s && d < s + 70 ? t.setOpacity(o, "0.5") : d > s + 70 && d < s + 140 && t.hide()
                                })
                            }
                        }),
                        browser.chrome && r.on(n, "mouseout",
                        function(e) {
                            var n = e.relatedTarget || e.toElement;
                            null != n && "HTML" != n.tagName || t.hide()
                        }),
                        t.editor.addListener("afterhidepop",
                        function() {
                            t.isHidden || (s = !0)
                        })
                    },
                    initItems: function() {
                        if (o.isArray(this.items)) for (var e = 0,
                        n = this.items.length; e < n; e++) {
                            var i = this.items[e].toLowerCase();
                            t[i] && (this.items[e] = new t[i](this.editor), this.items[e].className += " edui-shortcutsubmenu ")
                        }
                    },
                    setOpacity: function(e, t) {
                        browser.ie && browser.version < 9 ? e.style.filter = "alpha(opacity = " + 100 * parseFloat(t) + ");": e.style.opacity = t
                    },
                    getSubMenuMark: function() {
                        s = !1;
                        for (var e, t = i.getFixedLayer(), n = r.getElementsByTagName(t, "div",
                        function(e) {
                            return r.hasClass(e, "edui-shortcutsubmenu edui-popup")
                        }), o = 0; e = n[o++];)"none" != e.style.display && (s = !0);
                        return s
                    },
                    show: function(e, t) {
                        var n = this,
                        o = {},
                        a = this.getDom(),
                        s = i.getFixedLayer();
                        function l(e) {
                            e.left < 0 && (e.left = 0),
                            e.top < 0 && (e.top = 0),
                            a.style.cssText = "position:absolute;left:" + e.left + "px;top:" + e.top + "px;"
                        }
                        function d(e) {
                            e.tagName || (e = e.getDom()),
                            o.left = parseInt(e.style.left),
                            o.top = parseInt(e.style.top),
                            o.top -= a.offsetHeight + 15,
                            l(o)
                        }
                        if (n.eventType = e.type, a.style.cssText = "display:block;left:-9999px", "contextmenu" == e.type && t) {
                            var c = r.getElementsByTagName(s, "div", "edui-contextmenu")[0];
                            c ? d(c) : n.editor.addListener("aftershowcontextmenu",
                            function(e, t) {
                                d(t)
                            })
                        } else(o = i.getViewportOffsetByEvent(e)).top -= a.offsetHeight + n.SPACE,
                        o.left += n.SPACE + 20,
                        l(o),
                        n.setOpacity(a, .2);
                        n.isHidden = !1,
                        n.left = e.screenX + a.offsetWidth / 2 - n.SPACE,
                        n.top = e.screenY - a.offsetHeight / 2 - n.SPACE,
                        n.editor && (a.style.zIndex = 1 * n.editor.container.style.zIndex + 10, s.style.zIndex = a.style.zIndex - 1)
                    },
                    hide: function() {
                        this.getDom() && (this.getDom().style.display = "none"),
                        this.isHidden = !0
                    },
                    postRender: function() {
                        if (o.isArray(this.items)) for (var e, t = 0; e = this.items[t++];) e.postRender()
                    },
                    getHtmlTpl: function() {
                        var e;
                        if (o.isArray(this.items)) {
                            e = [];
                            for (var t = 0; t < this.items.length; t++) e[t] = this.items[t].renderHtml();
                            e = e.join("")
                        } else e = this.items;
                        return '<div id="##" class="%% edui-toolbar" data-src="shortcutmenu" onmousedown="return false;" onselectstart="return false;" >' + e + "</div>"
                    }
                },
                o.inherits(l, n),
                r.on(document, "mousedown",
                function(e) {
                    d(e)
                }),
                r.on(window, "scroll",
                function(e) {
                    d(e)
                })
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.ui.UIBase,
                n = baidu.editor.ui.Breakline = function(e) {
                    this.initOptions(e),
                    this.initSeparator()
                };
                n.prototype = {
                    uiName: "Breakline",
                    initSeparator: function() {
                        this.initUIBase()
                    },
                    getHtmlTpl: function() {
                        return "<br/>"
                    }
                },
                e.inherits(n, t)
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.dom.domUtils,
                n = baidu.editor.ui.UIBase,
                i = baidu.editor.ui.Message = function(e) {
                    this.initOptions(e),
                    this.initMessage()
                };
                i.prototype = {
                    initMessage: function() {
                        this.initUIBase()
                    },
                    getHtmlTpl: function() {
                        return '<div id="##" class="edui-message %%"> <div id="##_closer" class="edui-message-closer">×</div> <div id="##_body" class="edui-message-body edui-message-type-info"> <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: transparent;" frameborder="0" width="100%" height="100%" src="about:blank"></iframe> <div class="edui-shadow"></div> <div id="##_content" class="edui-message-content">  </div> </div></div>'
                    },
                    reset: function(e) {
                        var t = this;
                        e.keepshow || (clearTimeout(this.timer), t.timer = setTimeout(function() {
                            t.hide()
                        },
                        e.timeout || 4e3)),
                        void 0 !== e.content && t.setContent(e.content),
                        void 0 !== e.type && t.setType(e.type),
                        t.show()
                    },
                    postRender: function() {
                        var e = this,
                        n = this.getDom("closer");
                        n && t.on(n, "click",
                        function() {
                            e.hide()
                        })
                    },
                    setContent: function(e) {
                        this.getDom("content").innerHTML = e
                    },
                    setType: function(e) {
                        e = e || "info";
                        var t = this.getDom("body");
                        t.className = t.className.replace(/edui-message-type-[\w-]+/, "edui-message-type-" + e)
                    },
                    getContent: function() {
                        return this.getDom("content").innerHTML
                    },
                    getType: function() {
                        var e = this.getDom("body").match(/edui-message-type-([\w-]+)/);
                        return e ? e[1] : ""
                    },
                    show: function() {
                        this.getDom().style.display = "block"
                    },
                    hide: function() {
                        var e = this.getDom();
                        e && (e.style.display = "none", e.parentNode && e.parentNode.removeChild(e))
                    }
                },
                e.inherits(i, n)
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.ui,
                n = t.Dialog;
                t.buttons = {},
                t.Dialog = function(e) {
                    var t = new n(e);
                    return t.addListener("hide",
                    function() {
                        if (t.editor) {
                            var e = t.editor;
                            try {
                                if (browser.gecko) {
                                    var n = e.window.scrollY,
                                    i = e.window.scrollX;
                                    e.body.focus(),
                                    e.window.scrollTo(i, n)
                                } else e.focus()
                            } catch(e) {}
                        }
                    }),
                    t
                };
                for (var i = {
                    anchor: "~/dialogs/anchor/anchor.html",
                    insertimage: "~/dialogs/image/image.html",
                    link: "~/dialogs/link/link.html",
                    spechars: "~/dialogs/spechars/spechars.html",
                    searchreplace: "~/dialogs/searchreplace/searchreplace.html",
                    map: "~/dialogs/map/map.html",
                    gmap: "~/dialogs/gmap/gmap.html",
                    insertvideo: "~/dialogs/video/video.html",
                    help: "~/dialogs/help/help.html",
                    preview: "~/dialogs/preview/preview.html",
                    emotion: "~/dialogs/emotion/emotion.html",
                    wordimage: "~/dialogs/wordimage/wordimage.html",
                    attachment: "~/dialogs/attachment/attachment.html",
                    insertframe: "~/dialogs/insertframe/insertframe.html",
                    edittip: "~/dialogs/table/edittip.html",
                    edittable: "~/dialogs/table/edittable.html",
                    edittd: "~/dialogs/table/edittd.html",
                    webapp: "~/dialogs/webapp/webapp.html",
                    snapscreen: "~/dialogs/snapscreen/snapscreen.html",
                    scrawl: "~/dialogs/scrawl/scrawl.html",
                    music: "~/dialogs/music/music.html",
                    template: "~/dialogs/template/template.html",
                    background: "~/dialogs/background/background.html",
                    charts: "~/dialogs/charts/charts.html"
                },
                o = ["undo", "redo", "formatmatch", "bold", "italic", "underline", "fontborder", "touppercase", "tolowercase", "strikethrough", "subscript", "superscript", "source", "indent", "outdent", "blockquote", "pasteplain", "pagebreak", "selectall", "print", "horizontal", "removeformat", "time", "date", "unlink", "insertparagraphbeforetable", "insertrow", "insertcol", "mergeright", "mergedown", "deleterow", "deletecol", "splittorows", "splittocols", "splittocells", "mergecells", "deletetable", "drafts"], r = 0; l = o[r++];) l = l.toLowerCase(),
                t[l] = function(e) {
                    return function(n) {
                        var i = new t.Button({
                            className: "edui-for-" + e,
                            title: n.options.labelMap[e] || n.getLang("labelMap." + e) || "",
                            onclick: function() {
                                n.execCommand(e)
                            },
                            theme: n.options.theme,
                            showText: !1
                        });
                        return t.buttons[e] = i,
                        n.addListener("selectionchange",
                        function(t, o, r) {
                            var a = n.queryCommandState(e); - 1 == a ? (i.setDisabled(!0), i.setChecked(!1)) : r || (i.setDisabled(!1), i.setChecked(a))
                        }),
                        i
                    }
                } (l);
                t.cleardoc = function(e) {
                    var n = new t.Button({
                        className: "edui-for-cleardoc",
                        title: e.options.labelMap.cleardoc || e.getLang("labelMap.cleardoc") || "",
                        theme: e.options.theme,
                        onclick: function() {
                            confirm(e.getLang("confirmClear")) && e.execCommand("cleardoc")
                        }
                    });
                    return t.buttons.cleardoc = n,
                    e.addListener("selectionchange",
                    function() {
                        n.setDisabled( - 1 == e.queryCommandState("cleardoc"))
                    }),
                    n
                };
                var a = {
                    justify: ["left", "right", "center", "justify"],
                    imagefloat: ["none", "left", "center", "right"],
                    directionality: ["ltr", "rtl"]
                };
                for (var s in a) !
                function(e, n) {
                    for (var i, o = 0; i = n[o++];) !
                    function(n) {
                        t[e.replace("float", "") + n] = function(i) {
                            var o = new t.Button({
                                className: "edui-for-" + e.replace("float", "") + n,
                                title: i.options.labelMap[e.replace("float", "") + n] || i.getLang("labelMap." + e.replace("float", "") + n) || "",
                                theme: i.options.theme,
                                onclick: function() {
                                    i.execCommand(e, n)
                                }
                            });
                            return t.buttons[e] = o,
                            i.addListener("selectionchange",
                            function(t, r, a) {
                                o.setDisabled( - 1 == i.queryCommandState(e)),
                                o.setChecked(i.queryCommandValue(e) == n && !a)
                            }),
                            o
                        }
                    } (i)
                } (s, a[s]);
                var l;
                for (r = 0; l = ["backcolor", "forecolor"][r++];) t[l] = function(e) {
                    return function(n) {
                        var i = new t.ColorButton({
                            className: "edui-for-" + e,
                            color: "default",
                            title: n.options.labelMap[e] || n.getLang("labelMap." + e) || "",
                            editor: n,
                            onpickcolor: function(t, i) {
                                n.execCommand(e, i)
                            },
                            onpicknocolor: function() {
                                n.execCommand(e, "default"),
                                this.setColor("transparent"),
                                this.color = "default"
                            },
                            onbuttonclick: function() {
                                n.execCommand(e, this.color)
                            }
                        });
                        return t.buttons[e] = i,
                        n.addListener("selectionchange",
                        function() {
                            i.setDisabled( - 1 == n.queryCommandState(e))
                        }),
                        i
                    }
                } (l);
                var d = {
                    noOk: ["searchreplace", "help", "spechars", "webapp", "preview"],
                    ok: ["attachment", "anchor", "link", "insertimage", "map", "gmap", "insertframe", "wordimage", "insertvideo", "insertframe", "edittip", "edittable", "edittd", "scrawl", "template", "music", "background", "charts"]
                };
                for (var s in d) !
                function(n, o) {
                    for (var r, a = 0; r = o[a++];) browser.opera && "searchreplace" === r ||
                    function(o) {
                        t[o] = function(r, a, s) {
                            var l;
                            a = a || (r.options.iframeUrlMap || {})[o] || i[o],
                            s = r.options.labelMap[o] || r.getLang("labelMap." + o) || "",
                            a && (l = new t.Dialog(e.extend({
                                iframeUrl: r.ui.mapUrl(a),
                                editor: r,
                                className: "edui-for-" + o,
                                title: s,
                                holdScroll: "insertimage" === o,
                                fullscreen: /charts|preview/.test(o),
                                closeDialog: r.getLang("closeDialog")
                            },
                            "ok" == n ? {
                                buttons: [{
                                    className: "edui-okbutton",
                                    label: r.getLang("ok"),
                                    editor: r,
                                    onclick: function() {
                                        l.close(!0)
                                    }
                                },
                                {
                                    className: "edui-cancelbutton",
                                    label: r.getLang("cancel"),
                                    editor: r,
                                    onclick: function() {
                                        l.close(!1)
                                    }
                                }]
                            }: {})), r.ui._dialogs[o + "Dialog"] = l);
                            var d = new t.Button({
                                className: "edui-for-" + o,
                                title: s,
                                onclick: function() {
                                    if (l) switch (o) {
                                    case "wordimage":
                                        var e = r.execCommand("wordimage");
                                        e && e.length && (l.render(), l.open());
                                        break;
                                    case "scrawl":
                                        -1 != r.queryCommandState("scrawl") && (l.render(), l.open());
                                        break;
                                    default:
                                        l.render(),
                                        l.open()
                                    }
                                },
                                theme: r.options.theme,
                                disabled: "scrawl" == o && -1 == r.queryCommandState("scrawl") || "charts" == o
                            });
                            return t.buttons[o] = d,
                            r.addListener("selectionchange",
                            function() {
                                if (! (o in {
                                    edittable: 1
                                })) {
                                    var e = r.queryCommandState(o);
                                    d.getDom() && (d.setDisabled( - 1 == e), d.setChecked(e))
                                }
                            }),
                            d
                        }
                    } (r.toLowerCase())
                } (s, d[s]);
                t.snapscreen = function(e, n, o) {
                    o = e.options.labelMap.snapscreen || e.getLang("labelMap.snapscreen") || "";
                    var r = new t.Button({
                        className: "edui-for-snapscreen",
                        title: o,
                        onclick: function() {
                            e.execCommand("snapscreen")
                        },
                        theme: e.options.theme
                    });
                    if (t.buttons.snapscreen = r, n = n || (e.options.iframeUrlMap || {}).snapscreen || i.snapscreen) {
                        var a = new t.Dialog({
                            iframeUrl: e.ui.mapUrl(n),
                            editor: e,
                            className: "edui-for-snapscreen",
                            title: o,
                            buttons: [{
                                className: "edui-okbutton",
                                label: e.getLang("ok"),
                                editor: e,
                                onclick: function() {
                                    a.close(!0)
                                }
                            },
                            {
                                className: "edui-cancelbutton",
                                label: e.getLang("cancel"),
                                editor: e,
                                onclick: function() {
                                    a.close(!1)
                                }
                            }]
                        });
                        a.render(),
                        e.ui._dialogs.snapscreenDialog = a
                    }
                    return e.addListener("selectionchange",
                    function() {
                        r.setDisabled( - 1 == e.queryCommandState("snapscreen"))
                    }),
                    r
                },
                t.insertcode = function(n, i, o) {
                    i = n.options.insertcode || [],
                    o = n.options.labelMap.insertcode || n.getLang("labelMap.insertcode") || "";
                    var r = [];
                    e.each(i,
                    function(e, t) {
                        r.push({
                            label: e,
                            value: t,
                            theme: n.options.theme,
                            renderLabelHtml: function() {
                                return '<div class="edui-label %%-label" >' + (this.label || "") + "</div>"
                            }
                        })
                    });
                    var a = new t.Combox({
                        editor: n,
                        items: r,
                        onselect: function(e, t) {
                            n.execCommand("insertcode", this.items[t].value)
                        },
                        onbuttonclick: function() {
                            this.showPopup()
                        },
                        title: o,
                        initValue: o,
                        className: "edui-for-insertcode",
                        indexByValue: function(e) {
                            if (e) for (var t, n = 0; t = this.items[n]; n++) if ( - 1 != t.value.indexOf(e)) return n;
                            return - 1
                        }
                    });
                    return t.buttons.insertcode = a,
                    n.addListener("selectionchange",
                    function(e, t, i) {
                        if (!i) if ( - 1 == n.queryCommandState("insertcode")) a.setDisabled(!0);
                        else {
                            a.setDisabled(!1);
                            var r = n.queryCommandValue("insertcode");
                            if (!r) return void a.setValue(o);
                            r && (r = r.replace(/['"]/g, "").split(",")[0]),
                            a.setValue(r)
                        }
                    }),
                    a
                },
                t.fontfamily = function(n, i, o) {
                    if (i = n.options.fontfamily || [], o = n.options.labelMap.fontfamily || n.getLang("labelMap.fontfamily") || "", i.length) {
                        for (var r, a = 0,
                        s = []; r = i[a]; a++) {
                            var l = n.getLang("fontfamily")[r.name] || "";
                            d = r.label || l,
                            c = r.val,
                            s.push({
                                label: d,
                                value: c,
                                theme: n.options.theme,
                                renderLabelHtml: function() {
                                    return '<div class="edui-label %%-label" style="font-family:' + e.unhtml(this.value) + '">' + (this.label || "") + "</div>"
                                }
                            })
                        }
                        var d, c, u = new t.Combox({
                            editor: n,
                            items: s,
                            onselect: function(e, t) {
                                n.execCommand("FontFamily", this.items[t].value)
                            },
                            onbuttonclick: function() {
                                this.showPopup()
                            },
                            title: o,
                            initValue: o,
                            className: "edui-for-fontfamily",
                            indexByValue: function(e) {
                                if (e) for (var t, n = 0; t = this.items[n]; n++) if ( - 1 != t.value.indexOf(e)) return n;
                                return - 1
                            }
                        });
                        return t.buttons.fontfamily = u,
                        n.addListener("selectionchange",
                        function(e, t, i) {
                            if (!i) if ( - 1 == n.queryCommandState("FontFamily")) u.setDisabled(!0);
                            else {
                                u.setDisabled(!1);
                                var o = n.queryCommandValue("FontFamily");
                                o && (o = o.replace(/['"]/g, "").split(",")[0]),
                                u.setValue(o)
                            }
                        }),
                        u
                    }
                },
                t.fontsize = function(e, n, i) {
                    if (i = e.options.labelMap.fontsize || e.getLang("labelMap.fontsize") || "", (n = n || e.options.fontsize || []).length) {
                        for (var o = [], r = 0; r < n.length; r++) {
                            var a = n[r] + "px";
                            o.push({
                                label: a,
                                value: a,
                                theme: e.options.theme,
                                renderLabelHtml: function() {
                                    return '<div class="edui-label %%-label" style="line-height:1;font-size:' + this.value + '">' + (this.label || "") + "</div>"
                                }
                            })
                        }
                        var s = new t.Combox({
                            editor: e,
                            items: o,
                            title: i,
                            initValue: i,
                            onselect: function(t, n) {
                                e.execCommand("FontSize", this.items[n].value)
                            },
                            onbuttonclick: function() {
                                this.showPopup()
                            },
                            className: "edui-for-fontsize"
                        });
                        return t.buttons.fontsize = s,
                        e.addListener("selectionchange",
                        function(t, n, i) {
                            i || ( - 1 == e.queryCommandState("FontSize") ? s.setDisabled(!0) : (s.setDisabled(!1), s.setValue(e.queryCommandValue("FontSize"))))
                        }),
                        s
                    }
                },
                t.paragraph = function(n, i, o) {
                    if (o = n.options.labelMap.paragraph || n.getLang("labelMap.paragraph") || "", i = n.options.paragraph || [], !e.isEmptyObject(i)) {
                        var r = [];
                        for (var a in i) r.push({
                            value: a,
                            label: i[a] || n.getLang("paragraph")[a],
                            theme: n.options.theme,
                            renderLabelHtml: function() {
                                return '<div class="edui-label %%-label"><span class="edui-for-' + this.value + '">' + (this.label || "") + "</span></div>"
                            }
                        });
                        var s = new t.Combox({
                            editor: n,
                            items: r,
                            title: o,
                            initValue: o,
                            className: "edui-for-paragraph",
                            onselect: function(e, t) {
                                n.execCommand("Paragraph", this.items[t].value)
                            },
                            onbuttonclick: function() {
                                this.showPopup()
                            }
                        });
                        return t.buttons.paragraph = s,
                        n.addListener("selectionchange",
                        function(e, t, i) {
                            if (!i) if ( - 1 == n.queryCommandState("Paragraph")) s.setDisabled(!0);
                            else {
                                s.setDisabled(!1);
                                var o = n.queryCommandValue("Paragraph"); - 1 != s.indexByValue(o) ? s.setValue(o) : s.setValue(s.initValue)
                            }
                        }),
                        s
                    }
                },
                t.customstyle = function(e) {
                    var n = e.options.customstyle || [],
                    i = e.options.labelMap.customstyle || e.getLang("labelMap.customstyle") || "";
                    if (n.length) {
                        for (var o, r = e.getLang("customstyle"), a = 0, s = []; o = n[a++];) !
                        function(t) {
                            var n = {};
                            n.label = t.label ? t.label: r[t.name],
                            n.style = t.style,
                            n.className = t.className,
                            n.tag = t.tag,
                            s.push({
                                label: n.label,
                                value: n,
                                theme: e.options.theme,
                                renderLabelHtml: function() {
                                    return '<div class="edui-label %%-label"><' + n.tag + " " + (n.className ? ' class="' + n.className + '"': "") + (n.style ? ' style="' + n.style + '"': "") + ">" + n.label + "</" + n.tag + "></div>"
                                }
                            })
                        } (o);
                        var l = new t.Combox({
                            editor: e,
                            items: s,
                            title: i,
                            initValue: i,
                            className: "edui-for-customstyle",
                            onselect: function(t, n) {
                                e.execCommand("customstyle", this.items[n].value)
                            },
                            onbuttonclick: function() {
                                this.showPopup()
                            },
                            indexByValue: function(e) {
                                for (var t, n = 0; t = this.items[n++];) if (t.label == e) return n - 1;
                                return - 1
                            }
                        });
                        return t.buttons.customstyle = l,
                        e.addListener("selectionchange",
                        function(t, n, i) {
                            if (!i) if ( - 1 == e.queryCommandState("customstyle")) l.setDisabled(!0);
                            else {
                                l.setDisabled(!1);
                                var o = e.queryCommandValue("customstyle"); - 1 != l.indexByValue(o) ? l.setValue(o) : l.setValue(l.initValue)
                            }
                        }),
                        l
                    }
                },
                t.inserttable = function(e, n, i) {
                    i = e.options.labelMap.inserttable || e.getLang("labelMap.inserttable") || "";
                    var o = new t.TableButton({
                        editor: e,
                        title: i,
                        className: "edui-for-inserttable",
                        onpicktable: function(t, n, i) {
                            e.execCommand("InsertTable", {
                                numRows: i,
                                numCols: n,
                                border: 1
                            })
                        },
                        onbuttonclick: function() {
                            this.showPopup()
                        }
                    });
                    return t.buttons.inserttable = o,
                    e.addListener("selectionchange",
                    function() {
                        o.setDisabled( - 1 == e.queryCommandState("inserttable"))
                    }),
                    o
                },
                t.lineheight = function(e) {
                    var n = e.options.lineheight || [];
                    if (n.length) {
                        for (var i, o = 0,
                        r = []; i = n[o++];) r.push({
                            label: i,
                            value: i,
                            theme: e.options.theme,
                            onclick: function() {
                                e.execCommand("lineheight", this.value)
                            }
                        });
                        var a = new t.MenuButton({
                            editor: e,
                            className: "edui-for-lineheight",
                            title: e.options.labelMap.lineheight || e.getLang("labelMap.lineheight") || "",
                            items: r,
                            onbuttonclick: function() {
                                var t = e.queryCommandValue("LineHeight") || this.value;
                                e.execCommand("LineHeight", t)
                            }
                        });
                        return t.buttons.lineheight = a,
                        e.addListener("selectionchange",
                        function() {
                            var t = e.queryCommandState("LineHeight");
                            if ( - 1 == t) a.setDisabled(!0);
                            else {
                                a.setDisabled(!1);
                                var n = e.queryCommandValue("LineHeight");
                                n && a.setValue((n + "").replace(/cm/, "")),
                                a.setChecked(t)
                            }
                        }),
                        a
                    }
                };
                for (var c, u = ["top", "bottom"], m = 0; c = u[m++];) !
                function(e) {
                    t["rowspacing" + e] = function(n) {
                        var i = n.options["rowspacing" + e] || [];
                        if (!i.length) return null;
                        for (var o, r = 0,
                        a = []; o = i[r++];) a.push({
                            label: o,
                            value: o,
                            theme: n.options.theme,
                            onclick: function() {
                                n.execCommand("rowspacing", this.value, e)
                            }
                        });
                        var s = new t.MenuButton({
                            editor: n,
                            className: "edui-for-rowspacing" + e,
                            title: n.options.labelMap["rowspacing" + e] || n.getLang("labelMap.rowspacing" + e) || "",
                            items: a,
                            onbuttonclick: function() {
                                var t = n.queryCommandValue("rowspacing", e) || this.value;
                                n.execCommand("rowspacing", t, e)
                            }
                        });
                        return t.buttons[e] = s,
                        n.addListener("selectionchange",
                        function() {
                            var t = n.queryCommandState("rowspacing", e);
                            if ( - 1 == t) s.setDisabled(!0);
                            else {
                                s.setDisabled(!1);
                                var i = n.queryCommandValue("rowspacing", e);
                                i && s.setValue((i + "").replace(/%/, "")),
                                s.setChecked(t)
                            }
                        }),
                        s
                    }
                } (c);
                for (var f, p = ["insertorderedlist", "insertunorderedlist"], h = 0; f = p[h++];) !
                function(e) {
                    t[e] = function(n) {
                        var i = n.options[e],
                        o = function() {
                            n.execCommand(e, this.value)
                        },
                        r = [];
                        for (var a in i) r.push({
                            label: i[a] || n.getLang()[e][a] || "",
                            value: a,
                            theme: n.options.theme,
                            onclick: o
                        });
                        var s = new t.MenuButton({
                            editor: n,
                            className: "edui-for-" + e,
                            title: n.getLang("labelMap." + e) || "",
                            items: r,
                            onbuttonclick: function() {
                                var t = n.queryCommandValue(e) || this.value;
                                n.execCommand(e, t)
                            }
                        });
                        return t.buttons[e] = s,
                        n.addListener("selectionchange",
                        function() {
                            var t = n.queryCommandState(e);
                            if ( - 1 == t) s.setDisabled(!0);
                            else {
                                s.setDisabled(!1);
                                var i = n.queryCommandValue(e);
                                s.setValue(i),
                                s.setChecked(t)
                            }
                        }),
                        s
                    }
                } (f);
                t.fullscreen = function(e, n) {
                    n = e.options.labelMap.fullscreen || e.getLang("labelMap.fullscreen") || "";
                    var i = new t.Button({
                        className: "edui-for-fullscreen",
                        title: n,
                        theme: e.options.theme,
                        onclick: function() {
                            e.ui && e.ui.setFullScreen(!e.ui.isFullScreen()),
                            this.setChecked(e.ui.isFullScreen())
                        }
                    });
                    return t.buttons.fullscreen = i,
                    e.addListener("selectionchange",
                    function() {
                        var t = e.queryCommandState("fullscreen");
                        i.setDisabled( - 1 == t),
                        i.setChecked(e.ui.isFullScreen())
                    }),
                    i
                },
                t.emotion = function(e, n) {
                    var o = "emotion",
                    r = new t.MultiMenuPop({
                        title: e.options.labelMap[o] || e.getLang("labelMap." + o) || "",
                        editor: e,
                        className: "edui-for-" + o,
                        iframeUrl: e.ui.mapUrl(n || (e.options.iframeUrlMap || {})[o] || i[o])
                    });
                    return t.buttons[o] = r,
                    e.addListener("selectionchange",
                    function() {
                        r.setDisabled( - 1 == e.queryCommandState(o))
                    }),
                    r
                },
                t.autotypeset = function(e) {
                    var n = new t.AutoTypeSetButton({
                        editor: e,
                        title: e.options.labelMap.autotypeset || e.getLang("labelMap.autotypeset") || "",
                        className: "edui-for-autotypeset",
                        onbuttonclick: function() {
                            e.execCommand("autotypeset")
                        }
                    });
                    return t.buttons.autotypeset = n,
                    e.addListener("selectionchange",
                    function() {
                        n.setDisabled( - 1 == e.queryCommandState("autotypeset"))
                    }),
                    n
                },
                t.simpleupload = function(e) {
                    var n = "simpleupload",
                    i = new t.Button({
                        className: "edui-for-" + n,
                        title: e.options.labelMap[n] || e.getLang("labelMap." + n) || "",
                        onclick: function() {},
                        theme: e.options.theme,
                        showText: !1
                    });
                    return t.buttons[n] = i,
                    e.addListener("ready",
                    function() {
                        var t = i.getDom("body").children[0];
                        e.fireEvent("simpleuploadbtnready", t)
                    }),
                    e.addListener("selectionchange",
                    function(t, o, r) {
                        var a = e.queryCommandState(n); - 1 == a ? (i.setDisabled(!0), i.setChecked(!1)) : r || (i.setDisabled(!1), i.setChecked(a))
                    }),
                    i
                }
            } (),
            function() {
                var e = baidu.editor.utils,
                t = baidu.editor.ui.uiUtils,
                n = baidu.editor.ui.UIBase,
                i = baidu.editor.dom.domUtils,
                o = [];
                function r(e) {
                    this.initOptions(e),
                    this.initEditorUI()
                }
                r.prototype = {
                    uiName: "editor",
                    initEditorUI: function() {
                        this.editor.ui = this,
                        this._dialogs = {},
                        this.initUIBase(),
                        this._initToolbars();
                        var e = this.editor,
                        t = this;
                        e.addListener("ready",
                        function() {
                            if (e.getDialog = function(t) {
                                return e.ui._dialogs[t + "Dialog"]
                            },
                            i.on(e.window, "scroll",
                            function(e) {
                                baidu.editor.ui.Popup.postHide(e)
                            }), e.ui._actualFrameWidth = e.options.initialFrameWidth, UE.browser.ie && 6 === UE.browser.version && e.container.ownerDocument.execCommand("BackgroundImageCache", !1, !0), e.options.elementPathEnabled && (e.ui.getDom("elementpath").innerHTML = '<div class="edui-editor-breadcrumb">' + e.getLang("elementPathTip") + ":</div>"), e.options.wordCount) {
                                i.on(e.document, "click",
                                function() {
                                    a(e, t),
                                    i.un(e.document, "click", arguments.callee)
                                }),
                                e.ui.getDom("wordcount").innerHTML = e.getLang("wordCountTip")
                            }
                            e.ui._scale(),
                            e.options.scaleEnabled ? (e.autoHeightEnabled && e.disableAutoHeight(), t.enableScale()) : t.disableScale(),
                            e.options.elementPathEnabled || e.options.wordCount || e.options.scaleEnabled || (e.ui.getDom("elementpath").style.display = "none", e.ui.getDom("wordcount").style.display = "none", e.ui.getDom("scale").style.display = "none"),
                            e.selection.isFocus() && e.fireEvent("selectionchange", !1, !0)
                        }),
                        e.addListener("mousedown",
                        function(e, t) {
                            var n = t.target || t.srcElement;
                            baidu.editor.ui.Popup.postHide(t, n),
                            baidu.editor.ui.ShortCutMenu.postHide(t)
                        }),
                        e.addListener("delcells",
                        function() {
                            UE.ui.edittip && new UE.ui.edittip(e),
                            e.getDialog("edittip").open()
                        });
                        var n, o, r = !1;
                        function a(e, t) {
                            e.setOpt({
                                wordCount: !0,
                                maximumWords: 1e4,
                                wordCountMsg: e.options.wordCountMsg || e.getLang("wordCountMsg"),
                                wordOverFlowMsg: e.options.wordOverFlowMsg || e.getLang("wordOverFlowMsg")
                            });
                            var n = e.options,
                            i = n.maximumWords,
                            o = n.wordCountMsg,
                            r = n.wordOverFlowMsg,
                            a = t.getDom("wordcount");
                            if (n.wordCount) {
                                var s = e.getContentLength(!0);
                                s > i ? (a.innerHTML = r, e.fireEvent("wordcountoverflow")) : a.innerHTML = o.replace("{#leave}", i - s).replace("{#count}", s)
                            }
                        }
                        e.addListener("afterpaste",
                        function() {
                            e.queryCommandState("pasteplain") || (baidu.editor.ui.PastePicker && (n = new baidu.editor.ui.Popup({
                                content: new baidu.editor.ui.PastePicker({
                                    editor: e
                                }),
                                editor: e,
                                className: "edui-wordpastepop"
                            })).render(), r = !0)
                        }),
                        e.addListener("afterinserthtml",
                        function() {
                            clearTimeout(o),
                            o = setTimeout(function() {
                                if (n && (r || e.ui._isTransfer)) {
                                    if (n.isHidden()) {
                                        var t = i.createElement(e.document, "span", {
                                            style: "line-height:0px;",
                                            innerHTML: "\ufeff"
                                        });
                                        e.selection.getRange().insertNode(t);
                                        var o = getDomNode(t, "firstChild", "previousSibling");
                                        o && n.showAnchor(3 == o.nodeType ? o.parentNode: o),
                                        i.remove(t)
                                    } else n.show();
                                    delete e.ui._isTransfer,
                                    r = !1
                                }
                            },
                            200)
                        }),
                        e.addListener("contextmenu",
                        function(e, t) {
                            baidu.editor.ui.Popup.postHide(t)
                        }),
                        e.addListener("keydown",
                        function(e, t) {
                            n && n.dispose(t);
                            var i = t.keyCode || t.which;
                            t.altKey && 90 == i && UE.ui.buttons.fullscreen.onclick()
                        }),
                        e.addListener("wordcount",
                        function(e) {
                            a(this, t)
                        }),
                        e.addListener("selectionchange",
                        function() {
                            e.options.elementPathEnabled && t[( - 1 == e.queryCommandState("elementpath") ? "dis": "en") + "ableElementPath"](),
                            e.options.scaleEnabled && t[( - 1 == e.queryCommandState("scale") ? "dis": "en") + "ableScale"]()
                        });
                        var s = new baidu.editor.ui.Popup({
                            editor: e,
                            content: "",
                            className: "edui-bubble",
                            _onEditButtonClick: function() {
                                this.hide(),
                                e.ui._dialogs.linkDialog.open()
                            },
                            _onImgEditButtonClick: function(t) {
                                this.hide(),
                                e.ui._dialogs[t] && e.ui._dialogs[t].open()
                            },
                            _onImgSetFloat: function(t) {
                                this.hide(),
                                e.execCommand("imagefloat", t)
                            },
                            _setIframeAlign: function(e) {
                                var t = s.anchorEl,
                                n = t.cloneNode(!0);
                                switch (e) {
                                case - 2 : n.setAttribute("align", "");
                                    break;
                                case - 1 : n.setAttribute("align", "left");
                                    break;
                                case 1:
                                    n.setAttribute("align", "right")
                                }
                                t.parentNode.insertBefore(n, t),
                                i.remove(t),
                                s.anchorEl = n,
                                s.showAnchor(s.anchorEl)
                            },
                            _updateIframe: function() {
                                var t = e._iframe = s.anchorEl;
                                i.hasClass(t, "ueditor_baidumap") ? (e.selection.getRange().selectNode(t).select(), e.ui._dialogs.mapDialog.open(), s.hide()) : (e.ui._dialogs.insertframeDialog.open(), s.hide())
                            },
                            _onRemoveButtonClick: function(t) {
                                e.execCommand(t),
                                this.hide()
                            },
                            queryAutoHide: function(t) {
                                return t && t.ownerDocument == e.document && ("img" == t.tagName.toLowerCase() || i.findParentByTagName(t, "a", !0)) ? t !== s.anchorEl: baidu.editor.ui.Popup.prototype.queryAutoHide.call(this, t)
                            }
                        });
                        s.render(),
                        e.options.imagePopup && (e.addListener("mouseover",
                        function(t, n) {
                            var i = (n = n || window.event).target || n.srcElement;
                            if (e.ui._dialogs.insertframeDialog && /iframe/gi.test(i.tagName)) {
                                var o = s.formatHtml("<nobr>" + e.getLang("property") + ': <span onclick=$$._setIframeAlign(-2) class="edui-clickable">' + e.getLang("default") + '</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(-1) class="edui-clickable">' + e.getLang("justifyleft") + '</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(1) class="edui-clickable">' + e.getLang("justifyright") + '</span>&nbsp;&nbsp; <span onclick="$$._updateIframe( this);" class="edui-clickable">' + e.getLang("modify") + "</span></nobr>");
                                o ? (s.getDom("content").innerHTML = o, s.anchorEl = i, s.showAnchor(s.anchorEl)) : s.hide()
                            }
                        }), e.addListener("selectionchange",
                        function(t, n) {
                            if (n) {
                                var o = "",
                                r = "",
                                a = e.selection.getRange().getClosedNode(),
                                l = e.ui._dialogs;
                                if (a && "IMG" == a.tagName) {
                                    var d = "insertimageDialog";
                                    if ( - 1 == a.className.indexOf("edui-faked-video") && -1 == a.className.indexOf("edui-upload-video") || (d = "insertvideoDialog"), -1 != a.className.indexOf("edui-faked-webapp") && (d = "webappDialog"), -1 != a.src.indexOf("http://api.map.baidu.com") && (d = "mapDialog"), -1 != a.className.indexOf("edui-faked-music") && (d = "musicDialog"), -1 != a.src.indexOf("http://maps.google.com/maps/api/staticmap") && (d = "gmapDialog"), a.getAttribute("anchorname") && (d = "anchorDialog", o = s.formatHtml("<nobr>" + e.getLang("property") + ': <span onclick=$$._onImgEditButtonClick("anchorDialog") class="edui-clickable">' + e.getLang("modify") + "</span>&nbsp;&nbsp;<span onclick=$$._onRemoveButtonClick('anchor') class=\"edui-clickable\">" + e.getLang("delete") + "</span></nobr>")), a.getAttribute("word_img") && (e.word_img = [a.getAttribute("word_img")], d = "wordimageDialog"), (i.hasClass(a, "loadingclass") || i.hasClass(a, "loaderrorclass")) && (d = ""), !l[d]) return;
                                    r = "<nobr>" + e.getLang("property") + ': <span onclick=$$._onImgSetFloat("none") class="edui-clickable">' + e.getLang("default") + '</span>&nbsp;&nbsp;<span onclick=$$._onImgSetFloat("left") class="edui-clickable">' + e.getLang("justifyleft") + '</span>&nbsp;&nbsp;<span onclick=$$._onImgSetFloat("right") class="edui-clickable">' + e.getLang("justifyright") + '</span>&nbsp;&nbsp;<span onclick=$$._onImgSetFloat("center") class="edui-clickable">' + e.getLang("justifycenter") + "</span>&nbsp;&nbsp;<span onclick=\"$$._onImgEditButtonClick('" + d + '\');" class="edui-clickable">' + e.getLang("modify") + "</span></nobr>",
                                    !o && (o = s.formatHtml(r))
                                }
                                if (e.ui._dialogs.linkDialog) {
                                    var c, u = e.queryCommandValue("link");
                                    if (u && (c = u.getAttribute("_href") || u.getAttribute("href", 2))) {
                                        var m = c;
                                        c.length > 30 && (m = c.substring(0, 20) + "..."),
                                        o && (o += '<div style="height:5px;"></div>'),
                                        o += s.formatHtml("<nobr>" + e.getLang("anthorMsg") + ': <a target="_blank" href="' + c + '" title="' + c + '" >' + m + '</a> <span class="edui-clickable" onclick="$$._onEditButtonClick();">' + e.getLang("modify") + '</span> <span class="edui-clickable" onclick="$$._onRemoveButtonClick(\'unlink\');"> ' + e.getLang("clear") + "</span></nobr>"),
                                        s.showAnchor(u)
                                    }
                                }
                                o ? (s.getDom("content").innerHTML = o, s.anchorEl = a || u, s.showAnchor(s.anchorEl)) : s.hide()
                            }
                        }))
                    },
                    _initToolbars: function() {
                        for (var t = this.editor,
                        n = this.toolbars || [], i = [], o = 0; o < n.length; o++) {
                            for (var r = n[o], a = new baidu.editor.ui.Toolbar({
                                theme: t.options.theme
                            }), s = 0; s < r.length; s++) {
                                var l = r[s],
                                d = null;
                                if ("string" == typeof l) {
                                    if ("|" == (l = l.toLowerCase()) && (l = "Separator"), "||" == l && (l = "Breakline"), baidu.editor.ui[l] && (d = new baidu.editor.ui[l](t)), "fullscreen" == l) {
                                        i && i[0] ? i[0].items.splice(0, 0, d) : d && a.items.splice(0, 0, d);
                                        continue
                                    }
                                } else d = l;
                                d && d.id && a.add(d)
                            }
                            i[o] = a
                        }
                        e.each(UE._customizeUI,
                        function(e, n) {
                            var i, o;
                            if (e.id && e.id != t.key) return ! 1; (i = e.execFn.call(t, t, n)) && (void 0 === (o = e.index) && (o = a.items.length), a.add(i, o))
                        }),
                        this.toolbars = i
                    },
                    getHtmlTpl: function() {
                        return '<div id="##" class="%%"><div id="##_toolbarbox" class="%%-toolbarbox">' + (this.toolbars.length ? '<div id="##_toolbarboxouter" class="%%-toolbarboxouter"><div class="%%-toolbarboxinner">' + this.renderToolbarBoxHtml() + "</div></div>": "") + '<div id="##_toolbarmsg" class="%%-toolbarmsg" style="display:none;"><div id = "##_upload_dialog" class="%%-toolbarmsg-upload" onclick="$$.showWordImageDialog();">' + this.editor.getLang("clickToUpload") + '</div><div class="%%-toolbarmsg-close" onclick="$$.hideToolbarMsg();">x</div><div id="##_toolbarmsg_label" class="%%-toolbarmsg-label"></div><div style="height:0;overflow:hidden;clear:both;"></div></div><div id="##_message_holder" class="%%-messageholder"></div></div><div id="##_iframeholder" class="%%-iframeholder"></div><div id="##_bottombar" class="%%-bottomContainer"><table><tr><td id="##_elementpath" class="%%-bottombar"></td><td id="##_wordcount" class="%%-wordcount"></td><td id="##_scale" class="%%-scale"><div class="%%-icon"></div></td></tr></table></div><div id="##_scalelayer"></div></div>'
                    },
                    showWordImageDialog: function() {
                        this._dialogs.wordimageDialog.open()
                    },
                    renderToolbarBoxHtml: function() {
                        for (var e = [], t = 0; t < this.toolbars.length; t++) e.push(this.toolbars[t].renderHtml());
                        return e.join("")
                    },
                    setFullScreen: function(e) {
                        var t = this.editor,
                        n = t.container.parentNode.parentNode;
                        if (this._fullscreen != e) {
                            if (this._fullscreen = e, this.editor.fireEvent("beforefullscreenchange", e), baidu.editor.browser.gecko) var i = t.selection.getRange().createBookmark();
                            if (e) {
                                for (;
                                "BODY" != n.tagName;) {
                                    var r = baidu.editor.dom.domUtils.getComputedStyle(n, "position");
                                    o.push(r),
                                    n.style.position = "static",
                                    n = n.parentNode
                                }
                                this._bakHtmlOverflow = document.documentElement.style.overflow,
                                this._bakBodyOverflow = document.body.style.overflow,
                                this._bakAutoHeight = this.editor.autoHeightEnabled,
                                this._bakScrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop),
                                this._bakEditorContaninerWidth = t.iframe.parentNode.offsetWidth,
                                this._bakAutoHeight && (t.autoHeightEnabled = !1, this.editor.disableAutoHeight()),
                                document.documentElement.style.overflow = "hidden",
                                window.scrollTo(0, window.scrollY),
                                this._bakCssText = this.getDom().style.cssText,
                                this._bakCssText1 = this.getDom("iframeholder").style.cssText,
                                t.iframe.parentNode.style.width = "",
                                this._updateFullScreen()
                            } else {
                                for (;
                                "BODY" != n.tagName;) n.style.position = o.shift(),
                                n = n.parentNode;
                                this.getDom().style.cssText = this._bakCssText,
                                this.getDom("iframeholder").style.cssText = this._bakCssText1,
                                this._bakAutoHeight && (t.autoHeightEnabled = !0, this.editor.enableAutoHeight()),
                                document.documentElement.style.overflow = this._bakHtmlOverflow,
                                document.body.style.overflow = this._bakBodyOverflow,
                                t.iframe.parentNode.style.width = this._bakEditorContaninerWidth + "px",
                                window.scrollTo(0, this._bakScrollTop)
                            }
                            if (browser.gecko && "true" === t.body.contentEditable) {
                                var a = document.createElement("input");
                                document.body.appendChild(a),
                                t.body.contentEditable = !1,
                                setTimeout(function() {
                                    a.focus(),
                                    setTimeout(function() {
                                        t.body.contentEditable = !0,
                                        t.fireEvent("fullscreenchanged", e),
                                        t.selection.getRange().moveToBookmark(i).select(!0),
                                        baidu.editor.dom.domUtils.remove(a),
                                        e && window.scroll(0, 0)
                                    },
                                    0)
                                },
                                0)
                            }
                            "true" === t.body.contentEditable && (this.editor.fireEvent("fullscreenchanged", e), this.triggerLayout())
                        }
                    },
                    _updateFullScreen: function() {
                        if (this._fullscreen) {
                            var e = t.getViewportRect();
                            if (this.getDom().style.cssText = "border:0;position:absolute;left:0;top:" + (this.editor.options.topOffset || 0) + "px;width:" + e.width + "px;height:" + e.height + "px;z-index:" + (1 * this.getDom().style.zIndex + 100), t.setViewportOffset(this.getDom(), {
                                left: 0,
                                top: this.editor.options.topOffset || 0
                            }), this.editor.setHeight(e.height - this.getDom("toolbarbox").offsetHeight - this.getDom("bottombar").offsetHeight - (this.editor.options.topOffset || 0), !0), browser.gecko) try {
                                window.onresize()
                            } catch(e) {}
                        }
                    },
                    _updateElementPath: function() {
                        var e, t = this.getDom("elementpath");
                        if (this.elementPathEnabled && (e = this.editor.queryCommandValue("elementpath"))) {
                            for (var n, i = [], o = 0; n = e[o]; o++) i[o] = this.formatHtml('<span unselectable="on" onclick="$$.editor.execCommand(&quot;elementpath&quot;, &quot;' + o + '&quot;);">' + n + "</span>");
                            t.innerHTML = '<div class="edui-editor-breadcrumb" onmousedown="return false;">' + this.editor.getLang("elementPathTip") + ": " + i.join(" &gt; ") + "</div>"
                        } else t.style.display = "none"
                    },
                    disableElementPath: function() {
                        var e = this.getDom("elementpath");
                        e.innerHTML = "",
                        e.style.display = "none",
                        this.elementPathEnabled = !1
                    },
                    enableElementPath: function() {
                        this.getDom("elementpath").style.display = "",
                        this.elementPathEnabled = !0,
                        this._updateElementPath()
                    },
                    _scale: function() {
                        var e = document,
                        t = this.editor,
                        n = t.container,
                        o = t.document,
                        r = this.getDom("toolbarbox"),
                        a = this.getDom("bottombar"),
                        s = this.getDom("scale"),
                        l = this.getDom("scalelayer"),
                        d = !1,
                        c = null,
                        u = 0,
                        m = t.options.minFrameWidth,
                        f = 0,
                        p = 0,
                        h = 0,
                        g = 0;
                        function v() {
                            c = i.getXY(n),
                            u || (u = t.options.minFrameHeight + r.offsetHeight + a.offsetHeight),
                            l.style.cssText = "position:absolute;left:0;display:;top:0;background-color:#41ABFF;opacity:0.4;filter: Alpha(opacity=40);width:" + n.offsetWidth + "px;height:" + n.offsetHeight + "px;z-index:" + (t.options.zIndex + 1),
                            i.on(e, "mousemove", y),
                            i.on(o, "mouseup", C),
                            i.on(e, "mouseup", C)
                        }
                        var b = this;
                        function y(t) {
                            x();
                            var n = t || window.event;
                            f = n.pageX || e.documentElement.scrollLeft + n.clientX,
                            p = n.pageY || e.documentElement.scrollTop + n.clientY,
                            h = f - c.x,
                            g = p - c.y,
                            h >= m && (d = !0, l.style.width = h + "px"),
                            g >= u && (d = !0, l.style.height = g + "px")
                        }
                        function C() {
                            d && (d = !1, t.ui._actualFrameWidth = l.offsetWidth - 2, n.style.width = t.ui._actualFrameWidth + "px", t.setHeight(l.offsetHeight - a.offsetHeight - r.offsetHeight - 2, !0)),
                            l && (l.style.display = "none"),
                            x(),
                            i.un(e, "mousemove", y),
                            i.un(o, "mouseup", C),
                            i.un(e, "mouseup", C)
                        }
                        function x() {
                            browser.ie ? e.selection.clear() : window.getSelection().removeAllRanges()
                        }
                        this.editor.addListener("fullscreenchanged",
                        function(e, t) {
                            if (t) b.disableScale();
                            else if (b.editor.options.scaleEnabled) {
                                b.enableScale();
                                var n = b.editor.document.createElement("span");
                                b.editor.body.appendChild(n),
                                b.editor.body.style.height = Math.max(i.getXY(n).y, b.editor.iframe.offsetHeight - 20) + "px",
                                i.remove(n)
                            }
                        }),
                        this.enableScale = function() {
                            1 != t.queryCommandState("source") && (s.style.display = "", this.scaleEnabled = !0, i.on(s, "mousedown", v))
                        },
                        this.disableScale = function() {
                            s.style.display = "none",
                            this.scaleEnabled = !1,
                            i.un(s, "mousedown", v)
                        }
                    },
                    isFullScreen: function() {
                        return this._fullscreen
                    },
                    postRender: function() {
                        n.prototype.postRender.call(this);
                        for (var e = 0; e < this.toolbars.length; e++) this.toolbars[e].postRender();
                        var t, i = this,
                        o = baidu.editor.dom.domUtils,
                        r = function() {
                            clearTimeout(t),
                            t = setTimeout(function() {
                                i._updateFullScreen()
                            })
                        };
                        o.on(window, "resize", r),
                        i.addListener("destroy",
                        function() {
                            o.un(window, "resize", r),
                            clearTimeout(t)
                        })
                    },
                    showToolbarMsg: function(e, t) { (this.getDom("toolbarmsg_label").innerHTML = e, this.getDom("toolbarmsg").style.display = "", t) || (this.getDom("upload_dialog").style.display = "none")
                    },
                    hideToolbarMsg: function() {
                        this.getDom("toolbarmsg").style.display = "none"
                    },
                    mapUrl: function(e) {
                        return e ? e.replace("~/", this.editor.options.UEDITOR_HOME_URL || "") : ""
                    },
                    triggerLayout: function() {
                        var e = this.getDom();
                        "1" == e.style.zoom ? e.style.zoom = "100%": e.style.zoom = "1"
                    }
                },
                e.inherits(r, baidu.editor.ui.UIBase);
                var a = {};
                UE.ui.Editor = function(t) {
                    var n = new UE.Editor(t);
                    n.options.editor = n,
                    e.loadFile(document, {
                        href: n.options.themePath + n.options.theme + "/css/ueditor.css",
                        tag: "link",
                        type: "text/css",
                        rel: "stylesheet"
                    });
                    var o = n.render;
                    return n.render = function(t) {
                        t.constructor === String && (n.key = t, a[t] = n),
                        e.domReady(function() {
                            function e() {
                                if (n.setOpt({
                                    labelMap: n.options.labelMap || n.getLang("labelMap")
                                }), new r(n.options), t && (t.constructor === String && (t = document.getElementById(t)), t && t.getAttribute("name") && (n.options.textarea = t.getAttribute("name")), t && /script|textarea/gi.test(t.tagName))) {
                                    var e = document.createElement("div");
                                    t.parentNode.insertBefore(e, t);
                                    var a = t.value || t.innerHTML;
                                    n.options.initialContent = /^[\t\r\n ]*$/.test(a) ? n.options.initialContent: a.replace(/>[\n\r\t]+([ ]{4})+/g, ">").replace(/[\n\r\t]+([ ]{4})+</g, "<").replace(/>[\n\r\t]+</g, "><"),
                                    t.className && (e.className = t.className),
                                    t.style.cssText && (e.style.cssText = t.style.cssText),
                                    /textarea/i.test(t.tagName) ? (n.textarea = t, n.textarea.style.display = "none") : t.parentNode.removeChild(t),
                                    t.id && (e.id = t.id, i.removeAttributes(t, "id")),
                                    (t = e).innerHTML = ""
                                }
                                i.addClass(t, "edui-" + n.options.theme),
                                n.ui.render(t);
                                var s = n.options;
                                n.container = n.ui.getDom();
                                for (var l = i.findParents(t, !0), d = [], c = 0; m = l[c]; c++) d[c] = m.style.display,
                                m.style.display = "block";
                                if (s.initialFrameWidth) s.minFrameWidth = s.initialFrameWidth;
                                else {
                                    s.minFrameWidth = s.initialFrameWidth = t.offsetWidth;
                                    var u = t.style.width;
                                    /%$/.test(u) && (s.initialFrameWidth = u)
                                }
                                s.initialFrameHeight ? s.minFrameHeight = s.initialFrameHeight: s.initialFrameHeight = s.minFrameHeight = t.offsetHeight;
                                var m;
                                for (c = 0; m = l[c]; c++) m.style.display = d[c];
                                t.style.height && (t.style.height = ""),
                                n.container.style.width = s.initialFrameWidth + (/%$/.test(s.initialFrameWidth) ? "": "px"),
                                n.container.style.zIndex = s.zIndex,
                                o.call(n, n.ui.getDom("iframeholder")),
                                n.fireEvent("afteruiready")
                            }
                            n.langIsReady ? e() : n.addListener("langReady", e)
                        })
                    },
                    n
                },
                UE.getEditor = function(e, t) {
                    var n = a[e];
                    return n || (n = a[e] = new UE.ui.Editor(t)).render(e),
                    n
                },
                UE.delEditor = function(e) {
                    var t; (t = a[e]) && (t.key && t.destroy(), delete a[e])
                },
                UE.registerUI = function(t, n, i, o) {
                    e.each(t.split(/\s+/),
                    function(e) {
                        UE._customizeUI[e] = {
                            id: o,
                            execFn: n,
                            index: i
                        }
                    })
                }
            } (),
            UE.registerUI("message",
            function(e) {
                var t, n = baidu.editor.ui.Message,
                i = [],
                o = e;
                function r() {
                    var e = o.ui.getDom("toolbarbox");
                    e && (t.style.top = e.offsetHeight + 3 + "px"),
                    t.style.zIndex = Math.max(o.options.zIndex, o.iframe.style.zIndex) + 1
                }
                o.addListener("ready",
                function() {
                    t = document.getElementById(o.ui.id + "_message_holder"),
                    r(),
                    setTimeout(function() {
                        r()
                    },
                    500)
                }),
                o.addListener("showmessage",
                function(e, a) {
                    a = utils.isString(a) ? {
                        content: a
                    }: a;
                    var s = new n({
                        timeout: a.timeout,
                        type: a.type,
                        content: a.content,
                        keepshow: a.keepshow,
                        editor: o
                    }),
                    l = a.id || "msg_" + ( + new Date).toString(36);
                    return s.render(t),
                    i[l] = s,
                    s.reset(a),
                    r(),
                    l
                }),
                o.addListener("updatemessage",
                function(e, n, o) {
                    o = utils.isString(o) ? {
                        content: o
                    }: o;
                    var r = i[n];
                    r.render(t),
                    r && r.reset(o)
                }),
                o.addListener("hidemessage",
                function(e, t) {
                    var n = i[t];
                    n && n.hide()
                })
            }),
            UE.registerUI("autosave",
            function(e) {
                var t = null,
                n = null;
                e.on("afterautosave",
                function() {
                    clearTimeout(t),
                    t = setTimeout(function() {
                        n && e.trigger("hidemessage", n),
                        n = e.trigger("showmessage", {
                            content: e.getLang("autosave.success"),
                            timeout: 2e3
                        })
                    },
                    2e3)
                })
            })
        } ()
    },
    NHnr: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("7+uW"),
        o = {
            render: function() {
                var e = this.$createElement,
                t = this._self._c || e;
                return t("div", {
                    attrs: {
                        id: "app"
                    }
                },
                [t("router-view")], 1)
            },
            staticRenderFns: []
        };
        var r = n("VU/8")({
            name: "app"
        },
        o, !1,
        function(e) {
            n("0pbF")
        },
        null, null).exports,
        a = n("/ocq"),
        s = {
            render: function() {
                var e = this,
                t = e.$createElement,
                n = e._self._c || t;
                return n("div", {
                    staticClass: "hello"
                },
                [n("h1", [e._v(e._s(e.msg))]), e._v(" "), n("h2", [e._v("Essential Links")]), e._v(" "), e._m(0), e._v(" "), n("h2", [e._v("Ecosystem")]), e._v(" "), e._m(1)])
            },
            staticRenderFns: [function() {
                var e = this,
                t = e.$createElement,
                n = e._self._c || t;
                return n("ul", [n("li", [n("a", {
                    attrs: {
                        href: "https://vuejs.org",
                        target: "_blank"
                    }
                },
                [e._v("Core Docs")])]), e._v(" "), n("li", [n("a", {
                    attrs: {
                        href: "https://forum.vuejs.org",
                        target: "_blank"
                    }
                },
                [e._v("Forum")])]), e._v(" "), n("li", [n("a", {
                    attrs: {
                        href: "https://chat.vuejs.org",
                        target: "_blank"
                    }
                },
                [e._v("Community Chat")])]), e._v(" "), n("li", [n("a", {
                    attrs: {
                        href: "https://twitter.com/vuejs",
                        target: "_blank"
                    }
                },
                [e._v("Twitter")])]), e._v(" "), n("br"), e._v(" "), n("li", [n("a", {
                    attrs: {
                        href: "http://vuejs-templates.github.io/webpack/",
                        target: "_blank"
                    }
                },
                [e._v("Docs for This Template")])])])
            },
            function() {
                var e = this.$createElement,
                t = this._self._c || e;
                return t("ul", [t("li", [t("a", {
                    attrs: {
                        href: "http://router.vuejs.org/",
                        target: "_blank"
                    }
                },
                [this._v("vue-router")])]), this._v(" "), t("li", [t("a", {
                    attrs: {
                        href: "http://vuex.vuejs.org/",
                        target: "_blank"
                    }
                },
                [this._v("vuex")])]), this._v(" "), t("li", [t("a", {
                    attrs: {
                        href: "http://vue-loader.vuejs.org/",
                        target: "_blank"
                    }
                },
                [this._v("vue-loader")])]), this._v(" "), t("li", [t("a", {
                    attrs: {
                        href: "https://github.com/vuejs/awesome-vue",
                        target: "_blank"
                    }
                },
                [this._v("awesome-vue")])])])
            }]
        };
        n("VU/8")({
            name: "HelloWorld",
            data: function() {
                return {
                    msg: "Welcome to Your Vue.js App"
                }
            }
        },
        s, !1,
        function(e) {
            n("8Fmz")
        },
        "data-v-1f520946", null).exports,
        n("8os4"),
        n("KchE"),
        n("xDzJ"),
        n("yevg");
        var l = {
            name: "UEditor",
            props: {
                id: {
                    type: String
                },
                config: {
                    type: Object
                }
            },
            data: function() {
                return {
                    editor: null
                }
            },
            mounted: function() {
                this.editor = UE.delEditor("editor"),
                this.editor = UE.getEditor("editor", this.config)
            },
            destoryed: function() {
                this.editor.destory()
            },
            methods: {
                getUEContent: function() {
                    return this.editor.getContent()
                },
                getContentTxt: function() {
                    return this.editor.getContentTxt()
                }
            }
        },
        d = {
            render: function() {
                this.$createElement;
                this._self._c;
                return this._m(0)
            },
            staticRenderFns: [function() {
                var e = this.$createElement,
                t = this._self._c || e;
                return t("div", [t("script", {
                    attrs: {
                        id: "editor",
                        type: "text/plain"
                    }
                })])
            }]
        },
        c = {
            name: "hello",
            components: {
                UEditor: n("VU/8")(l, d, !1, null, null, null).exports
            },
            data: function() {
                return {
                    config: {
                        autoHeightEnabled: !1,
                        autoFloatEnabled: !0,
                        initialContent: "请输入内容",
                        autoClearinitialContent: !0,
                        initialFrameWidth: null,
                        initialFrameHeight: 450,
                        BaseUrl: "",
                        UEDITOR_HOME_URL: "static/ueditor/"
                    },
                    addFormVisible: !1
                }
            },
            methods: {
                getContent: function() {
                    var e = this.$refs.ueditor.getUEContent();
                    console.log(e),
                    alert(e)
                }
            }
        },
        u = {
            render: function() {
                var e = this.$createElement,
                t = this._self._c || e;
                return t("div", {
                    attrs: {
                        id: "app"
                    }
                },
                [t("div", [t("button", {
                    attrs: {
                        size: "primary",
                        type: "info",
                        icon: "plus"
                    },
                    on: {
                        click: this.getContent
                    }
                },
                [this._v("获取内容")]), this._v(" "), t("UEditor", {
                    ref: "ueditor",
                    attrs: {
                        config: this.config
                    }
                })], 1)])
            },
            staticRenderFns: []
        },
        m = n("VU/8")(c, u, !1, null, null, null).exports;
        i.a.use(a.a);
        var f = new a.a({
            routes: [{
                path: "/ueditor",
                name: "ueditor",
                component: m
            }]
        });
        n("4kSj");
        i.a.config.productionTip = !1,
        new i.a({
            el: "#app",
            router: f,
            template: "<App/>",
            components: {
                App: r
            }
        })
    },
    xDzJ: function(e, t) {
        UE.I18N["zh-cn"] = {
            labelMap: {
                anchor: "锚点",
                undo: "撤销",
                redo: "重做",
                bold: "加粗",
                indent: "首行缩进",
                snapscreen: "截图",
                italic: "斜体",
                underline: "下划线",
                strikethrough: "删除线",
                subscript: "下标",
                fontborder: "字符边框",
                superscript: "上标",
                formatmatch: "格式刷",
                source: "源代码",
                blockquote: "引用",
                pasteplain: "纯文本粘贴模式",
                selectall: "全选",
                print: "打印",
                preview: "预览",
                horizontal: "分隔线",
                removeformat: "清除格式",
                time: "时间",
                date: "日期",
                unlink: "取消链接",
                insertrow: "前插入行",
                insertcol: "前插入列",
                mergeright: "右合并单元格",
                mergedown: "下合并单元格",
                deleterow: "删除行",
                deletecol: "删除列",
                splittorows: "拆分成行",
                splittocols: "拆分成列",
                splittocells: "完全拆分单元格",
                deletecaption: "删除表格标题",
                inserttitle: "插入标题",
                mergecells: "合并多个单元格",
                deletetable: "删除表格",
                cleardoc: "清空文档",
                insertparagraphbeforetable: "表格前插入行",
                insertcode: "代码语言",
                fontfamily: "字体",
                fontsize: "字号",
                paragraph: "段落格式",
                simpleupload: "单图上传",
                insertimage: "多图上传",
                edittable: "表格属性",
                edittd: "单元格属性",
                link: "超链接",
                emotion: "表情",
                spechars: "特殊字符",
                searchreplace: "查询替换",
                map: "Baidu地图",
                gmap: "Google地图",
                insertvideo: "视频",
                help: "帮助",
                justifyleft: "居左对齐",
                justifyright: "居右对齐",
                justifycenter: "居中对齐",
                justifyjustify: "两端对齐",
                forecolor: "字体颜色",
                backcolor: "背景色",
                insertorderedlist: "有序列表",
                insertunorderedlist: "无序列表",
                fullscreen: "全屏",
                directionalityltr: "从左向右输入",
                directionalityrtl: "从右向左输入",
                rowspacingtop: "段前距",
                rowspacingbottom: "段后距",
                pagebreak: "分页",
                insertframe: "插入Iframe",
                imagenone: "默认",
                imageleft: "左浮动",
                imageright: "右浮动",
                attachment: "附件",
                imagecenter: "居中",
                wordimage: "图片转存",
                lineheight: "行间距",
                edittip: "编辑提示",
                customstyle: "自定义标题",
                autotypeset: "自动排版",
                webapp: "百度应用",
                touppercase: "字母大写",
                tolowercase: "字母小写",
                background: "背景",
                template: "模板",
                scrawl: "涂鸦",
                music: "音乐",
                inserttable: "插入表格",
                drafts: "从草稿箱加载",
                charts: "图表"
            },
            insertorderedlist: {
                num: "1,2,3...",
                num1: "1),2),3)...",
                num2: "(1),(2),(3)...",
                cn: "一,二,三....",
                cn1: "一),二),三)....",
                cn2: "(一),(二),(三)....",
                decimal: "1,2,3...",
                "lower-alpha": "a,b,c...",
                "lower-roman": "i,ii,iii...",
                "upper-alpha": "A,B,C...",
                "upper-roman": "I,II,III..."
            },
            insertunorderedlist: {
                circle: "○ 大圆圈",
                disc: "● 小黑点",
                square: "■ 小方块 ",
                dash: "— 破折号",
                dot: " 。 小圆圈"
            },
            paragraph: {
                p: "段落",
                h1: "标题 1",
                h2: "标题 2",
                h3: "标题 3",
                h4: "标题 4",
                h5: "标题 5",
                h6: "标题 6"
            },
            fontfamily: {
                songti: "宋体",
                kaiti: "楷体",
                heiti: "黑体",
                lishu: "隶书",
                yahei: "微软雅黑",
                andaleMono: "andale mono",
                arial: "arial",
                arialBlack: "arial black",
                comicSansMs: "comic sans ms",
                impact: "impact",
                timesNewRoman: "times new roman"
            },
            customstyle: {
                tc: "标题居中",
                tl: "标题居左",
                im: "强调",
                hi: "明显强调"
            },
            autoupload: {
                exceedSizeError: "文件大小超出限制",
                exceedTypeError: "文件格式不允许",
                jsonEncodeError: "服务器返回格式错误",
                loading: "正在上传...",
                loadError: "上传错误",
                errorLoadConfig: "后端配置项没有正常加载，上传插件不能正常使用！"
            },
            simpleupload: {
                exceedSizeError: "文件大小超出限制",
                exceedTypeError: "文件格式不允许",
                jsonEncodeError: "服务器返回格式错误",
                loading: "正在上传...",
                loadError: "上传错误",
                errorLoadConfig: "后端配置项没有正常加载，上传插件不能正常使用！"
            },
            elementPathTip: "元素路径",
            wordCountTip: "字数统计",
            wordCountMsg: "当前已输入{#count}个字符, 您还可以输入{#leave}个字符。 ",
            wordOverFlowMsg: '<span style="color:red;">字数超出最大允许值，服务器可能拒绝保存！</span>',
            ok: "确认",
            cancel: "取消",
            closeDialog: "关闭对话框",
            tableDrag: "表格拖动必须引入uiUtils.js文件！",
            autofloatMsg: "工具栏浮动依赖编辑器UI，您首先需要引入UI文件!",
            loadconfigError: "获取后台配置项请求出错，上传功能将不能正常使用！",
            loadconfigFormatError: "后台配置项返回格式出错，上传功能将不能正常使用！",
            loadconfigHttpError: "请求后台配置项http错误，上传功能将不能正常使用！",
            snapScreen_plugin: {
                browserMsg: "仅支持IE浏览器！",
                callBackErrorMsg: "服务器返回数据有误，请检查配置项之后重试。",
                uploadErrorMsg: "截图上传失败，请检查服务器端环境! "
            },
            insertcode: {
                as3: "ActionScript 3",
                bash: "Bash/Shell",
                cpp: "C/C++",
                css: "CSS",
                cf: "ColdFusion",
                "c#": "C#",
                delphi: "Delphi",
                diff: "Diff",
                erlang: "Erlang",
                groovy: "Groovy",
                html: "HTML",
                java: "Java",
                jfx: "JavaFX",
                js: "JavaScript",
                pl: "Perl",
                php: "PHP",
                plain: "Plain Text",
                ps: "PowerShell",
                python: "Python",
                ruby: "Ruby",
                scala: "Scala",
                sql: "SQL",
                vb: "Visual Basic",
                xml: "XML"
            },
            confirmClear: "确定清空当前文档么？",
            contextMenu: {
                delete: "删除",
                selectall: "全选",
                deletecode: "删除代码",
                cleardoc: "清空文档",
                confirmclear: "确定清空当前文档么？",
                unlink: "删除超链接",
                paragraph: "段落格式",
                edittable: "表格属性",
                aligntd: "单元格对齐方式",
                aligntable: "表格对齐方式",
                tableleft: "左浮动",
                tablecenter: "居中显示",
                tableright: "右浮动",
                edittd: "单元格属性",
                setbordervisible: "设置表格边线可见",
                justifyleft: "左对齐",
                justifyright: "右对齐",
                justifycenter: "居中对齐",
                justifyjustify: "两端对齐",
                table: "表格",
                inserttable: "插入表格",
                deletetable: "删除表格",
                insertparagraphbefore: "前插入段落",
                insertparagraphafter: "后插入段落",
                deleterow: "删除当前行",
                deletecol: "删除当前列",
                insertrow: "前插入行",
                insertcol: "左插入列",
                insertrownext: "后插入行",
                insertcolnext: "右插入列",
                insertcaption: "插入表格名称",
                deletecaption: "删除表格名称",
                inserttitle: "插入表格标题行",
                deletetitle: "删除表格标题行",
                inserttitlecol: "插入表格标题列",
                deletetitlecol: "删除表格标题列",
                averageDiseRow: "平均分布各行",
                averageDisCol: "平均分布各列",
                mergeright: "向右合并",
                mergeleft: "向左合并",
                mergedown: "向下合并",
                mergecells: "合并单元格",
                splittocells: "完全拆分单元格",
                splittocols: "拆分成列",
                splittorows: "拆分成行",
                tablesort: "表格排序",
                enablesort: "设置表格可排序",
                disablesort: "取消表格可排序",
                reversecurrent: "逆序当前",
                orderbyasc: "按ASCII字符升序",
                reversebyasc: "按ASCII字符降序",
                orderbynum: "按数值大小升序",
                reversebynum: "按数值大小降序",
                borderbk: "边框底纹",
                setcolor: "表格隔行变色",
                unsetcolor: "取消表格隔行变色",
                setbackground: "选区背景隔行",
                unsetbackground: "取消选区背景",
                redandblue: "红蓝相间",
                threecolorgradient: "三色渐变",
                copy: "复制(Ctrl + c)",
                copymsg: "浏览器不支持,请使用 'Ctrl + c'",
                paste: "粘贴(Ctrl + v)",
                pastemsg: "浏览器不支持,请使用 'Ctrl + v'"
            },
            copymsg: "浏览器不支持,请使用 'Ctrl + c'",
            pastemsg: "浏览器不支持,请使用 'Ctrl + v'",
            anthorMsg: "链接",
            clearColor: "清空颜色",
            standardColor: "标准颜色",
            themeColor: "主题颜色",
            property: "属性",
        default:
            "默认",
            modify: "修改",
            justifyleft: "左对齐",
            justifyright: "右对齐",
            justifycenter: "居中",
            justify: "默认",
            clear: "清除",
            anchorMsg: "锚点",
            delete: "删除",
            clickToUpload: "点击上传",
            unset: "尚未设置语言文件",
            t_row: "行",
            t_col: "列",
            more: "更多",
            pasteOpt: "粘贴选项",
            pasteSourceFormat: "保留源格式",
            tagFormat: "只保留标签",
            pasteTextFormat: "只保留文本",
            autoTypeSet: {
                mergeLine: "合并空行",
                delLine: "清除空行",
                removeFormat: "清除格式",
                indent: "首行缩进",
                alignment: "对齐方式",
                imageFloat: "图片浮动",
                removeFontsize: "清除字号",
                removeFontFamily: "清除字体",
                removeHtml: "清除冗余HTML代码",
                pasteFilter: "粘贴过滤",
                run: "执行",
                symbol: "符号转换",
                bdc2sb: "全角转半角",
                tobdc: "半角转全角"
            },
            background: {
                static: {
                    lang_background_normal: "背景设置",
                    lang_background_local: "在线图片",
                    lang_background_set: "选项",
                    lang_background_none: "无背景色",
                    lang_background_colored: "有背景色",
                    lang_background_color: "颜色设置",
                    lang_background_netimg: "网络图片",
                    lang_background_align: "对齐方式",
                    lang_background_position: "精确定位",
                    repeatType: {
                        options: ["居中", "横向重复", "纵向重复", "平铺", "自定义"]
                    }
                },
                noUploadImage: "当前未上传过任何图片！",
                toggleSelect: "单击可切换选中状态\n原图尺寸: "
            },
            insertimage: {
                static: {
                    lang_tab_remote: "插入图片",
                    lang_tab_upload: "本地上传",
                    lang_tab_online: "在线管理",
                    lang_tab_search: "图片搜索",
                    lang_input_url: "地 址：",
                    lang_input_size: "大 小：",
                    lang_input_width: "宽度",
                    lang_input_height: "高度",
                    lang_input_border: "边 框：",
                    lang_input_vhspace: "边 距：",
                    lang_input_title: "描 述：",
                    lang_input_align: "图片浮动方式：",
                    lang_imgLoading: "　图片加载中……",
                    lang_start_upload: "开始上传",
                    lock: {
                        title: "锁定宽高比例"
                    },
                    searchType: {
                        title: "图片类型",
                        options: ["新闻", "壁纸", "表情", "头像"]
                    },
                    searchTxt: {
                        value: "请输入搜索关键词"
                    },
                    searchBtn: {
                        value: "百度一下"
                    },
                    searchReset: {
                        value: "清空搜索"
                    },
                    noneAlign: {
                        title: "无浮动"
                    },
                    leftAlign: {
                        title: "左浮动"
                    },
                    rightAlign: {
                        title: "右浮动"
                    },
                    centerAlign: {
                        title: "居中独占一行"
                    }
                },
                uploadSelectFile: "点击选择图片",
                uploadAddFile: "继续添加",
                uploadStart: "开始上传",
                uploadPause: "暂停上传",
                uploadContinue: "继续上传",
                uploadRetry: "重试上传",
                uploadDelete: "删除",
                uploadTurnLeft: "向左旋转",
                uploadTurnRight: "向右旋转",
                uploadPreview: "预览中",
                uploadNoPreview: "不能预览",
                updateStatusReady: "选中_张图片，共_KB。",
                updateStatusConfirm: "已成功上传_张照片，_张照片上传失败",
                updateStatusFinish: "共_张（_KB），_张上传成功",
                updateStatusError: "，_张上传失败。",
                errorNotSupport: "WebUploader 不支持您的浏览器！如果你使用的是IE浏览器，请尝试升级 flash 播放器。",
                errorLoadConfig: "后端配置项没有正常加载，上传插件不能正常使用！",
                errorExceedSize: "文件大小超出",
                errorFileType: "文件格式不允许",
                errorInterrupt: "文件传输中断",
                errorUploadRetry: "上传失败，请重试",
                errorHttp: "http请求错误",
                errorServerUpload: "服务器返回出错",
                remoteLockError: "宽高不正确,不能所定比例",
                numError: "请输入正确的长度或者宽度值！例如：123，400",
                imageUrlError: "不允许的图片格式或者图片域！",
                imageLoadError: "图片加载失败！请检查链接地址或网络状态！",
                searchRemind: "请输入搜索关键词",
                searchLoading: "图片加载中，请稍后……",
                searchRetry: " :( ，抱歉，没有找到图片！请重试一次！"
            },
            attachment: {
                static: {
                    lang_tab_upload: "上传附件",
                    lang_tab_online: "在线附件",
                    lang_start_upload: "开始上传",
                    lang_drop_remind: "可以将文件拖到这里，单次最多可选100个文件"
                },
                uploadSelectFile: "点击选择文件",
                uploadAddFile: "继续添加",
                uploadStart: "开始上传",
                uploadPause: "暂停上传",
                uploadContinue: "继续上传",
                uploadRetry: "重试上传",
                uploadDelete: "删除",
                uploadTurnLeft: "向左旋转",
                uploadTurnRight: "向右旋转",
                uploadPreview: "预览中",
                updateStatusReady: "选中_个文件，共_KB。",
                updateStatusConfirm: "已成功上传_个文件，_个文件上传失败",
                updateStatusFinish: "共_个（_KB），_个上传成功",
                updateStatusError: "，_张上传失败。",
                errorNotSupport: "WebUploader 不支持您的浏览器！如果你使用的是IE浏览器，请尝试升级 flash 播放器。",
                errorLoadConfig: "后端配置项没有正常加载，上传插件不能正常使用！",
                errorExceedSize: "文件大小超出",
                errorFileType: "文件格式不允许",
                errorInterrupt: "文件传输中断",
                errorUploadRetry: "上传失败，请重试",
                errorHttp: "http请求错误",
                errorServerUpload: "服务器返回出错"
            },
            insertvideo: {
                static: {
                    lang_tab_insertV: "插入视频",
                    lang_tab_searchV: "搜索视频",
                    lang_tab_uploadV: "上传视频",
                    lang_video_url: "视频网址",
                    lang_video_size: "视频尺寸",
                    lang_videoW: "宽度",
                    lang_videoH: "高度",
                    lang_alignment: "对齐方式",
                    videoSearchTxt: {
                        value: "请输入搜索关键字！"
                    },
                    videoType: {
                        options: ["全部", "热门", "娱乐", "搞笑", "体育", "科技", "综艺"]
                    },
                    videoSearchBtn: {
                        value: "百度一下"
                    },
                    videoSearchReset: {
                        value: "清空结果"
                    },
                    lang_input_fileStatus: " 当前未上传文件",
                    startUpload: {
                        style: "background:url(upload.png) no-repeat;"
                    },
                    lang_upload_size: "视频尺寸",
                    lang_upload_width: "宽度",
                    lang_upload_height: "高度",
                    lang_upload_alignment: "对齐方式",
                    lang_format_advice: "建议使用mp4格式."
                },
                numError: "请输入正确的数值，如123,400",
                floatLeft: "左浮动",
                floatRight: "右浮动",
                '"default"': "默认",
                block: "独占一行",
                urlError: "输入的视频地址有误，请检查后再试！",
                loading: " &nbsp;视频加载中，请等待……",
                clickToSelect: "点击选中",
                goToSource: "访问源视频",
                noVideo: " &nbsp; &nbsp;抱歉，找不到对应的视频，请重试！",
                browseFiles: "浏览文件",
                uploadSuccess: "上传成功!",
                delSuccessFile: "从成功队列中移除",
                delFailSaveFile: "移除保存失败文件",
                statusPrompt: " 个文件已上传！ ",
                flashVersionError: "当前Flash版本过低，请更新FlashPlayer后重试！",
                flashLoadingError: "Flash加载失败!请检查路径或网络状态",
                fileUploadReady: "等待上传……",
                delUploadQueue: "从上传队列中移除",
                limitPrompt1: "单次不能选择超过",
                limitPrompt2: "个文件！请重新选择！",
                delFailFile: "移除失败文件",
                fileSizeLimit: "文件大小超出限制！",
                emptyFile: "空文件无法上传！",
                fileTypeError: "文件类型不允许！",
                unknownError: "未知错误！",
                fileUploading: "上传中，请等待……",
                cancelUpload: "取消上传",
                netError: "网络错误",
                failUpload: "上传失败!",
                serverIOError: "服务器IO错误！",
                noAuthority: "无权限！",
                fileNumLimit: "上传个数限制",
                failCheck: "验证失败，本次上传被跳过！",
                fileCanceling: "取消中，请等待……",
                stopUploading: "上传已停止……",
                uploadSelectFile: "点击选择文件",
                uploadAddFile: "继续添加",
                uploadStart: "开始上传",
                uploadPause: "暂停上传",
                uploadContinue: "继续上传",
                uploadRetry: "重试上传",
                uploadDelete: "删除",
                uploadTurnLeft: "向左旋转",
                uploadTurnRight: "向右旋转",
                uploadPreview: "预览中",
                updateStatusReady: "选中_个文件，共_KB。",
                updateStatusConfirm: "成功上传_个，_个失败",
                updateStatusFinish: "共_个(_KB)，_个成功上传",
                updateStatusError: "，_张上传失败。",
                errorNotSupport: "WebUploader 不支持您的浏览器！如果你使用的是IE浏览器，请尝试升级 flash 播放器。",
                errorLoadConfig: "后端配置项没有正常加载，上传插件不能正常使用！",
                errorExceedSize: "文件大小超出",
                errorFileType: "文件格式不允许",
                errorInterrupt: "文件传输中断",
                errorUploadRetry: "上传失败，请重试",
                errorHttp: "http请求错误",
                errorServerUpload: "服务器返回出错"
            },
            webapp: {
                tip1: "本功能由百度APP提供，如看到此页面，请各位站长首先申请百度APPKey!",
                tip2: "申请完成之后请至ueditor.config.js中配置获得的appkey! ",
                applyFor: "点此申请",
                anthorApi: "百度API"
            },
            template: {
                static: {
                    lang_template_bkcolor: "背景颜色",
                    lang_template_clear: "保留原有内容",
                    lang_template_select: "选择模板"
                },
                blank: "空白文档",
                blog: "博客文章",
                resume: "个人简历",
                richText: "图文混排",
                sciPapers: "科技论文"
            },
            scrawl: {
                static: {
                    lang_input_previousStep: "上一步",
                    lang_input_nextsStep: "下一步",
                    lang_input_clear: "清空",
                    lang_input_addPic: "添加背景",
                    lang_input_ScalePic: "缩放背景",
                    lang_input_removePic: "删除背景",
                    J_imgTxt: {
                        title: "添加背景图片"
                    }
                },
                noScarwl: "尚未作画，白纸一张~",
                scrawlUpLoading: "涂鸦上传中,别急哦~",
                continueBtn: "继续",
                imageError: "糟糕，图片读取失败了！",
                backgroundUploading: "背景图片上传中,别急哦~"
            },
            music: {
                static: {
                    lang_input_tips: "输入歌手/歌曲/专辑，搜索您感兴趣的音乐！",
                    J_searchBtn: {
                        value: "搜索歌曲"
                    }
                },
                emptyTxt: "未搜索到相关音乐结果，请换一个关键词试试。",
                chapter: "歌曲",
                singer: "歌手",
                special: "专辑",
                listenTest: "试听"
            },
            anchor: {
                static: {
                    lang_input_anchorName: "锚点名字："
                }
            },
            charts: {
                static: {
                    lang_data_source: "数据源：",
                    lang_chart_format: "图表格式：",
                    lang_data_align: "数据对齐方式",
                    lang_chart_align_same: "数据源与图表X轴Y轴一致",
                    lang_chart_align_reverse: "数据源与图表X轴Y轴相反",
                    lang_chart_title: "图表标题",
                    lang_chart_main_title: "主标题：",
                    lang_chart_sub_title: "子标题：",
                    lang_chart_x_title: "X轴标题：",
                    lang_chart_y_title: "Y轴标题：",
                    lang_chart_tip: "提示文字",
                    lang_cahrt_tip_prefix: "提示文字前缀：",
                    lang_cahrt_tip_description: "仅饼图有效， 当鼠标移动到饼图中相应的块上时，提示框内的文字的前缀",
                    lang_chart_data_unit: "数据单位",
                    lang_chart_data_unit_title: "单位：",
                    lang_chart_data_unit_description: "显示在每个数据点上的数据的单位， 比如： 温度的单位 ℃",
                    lang_chart_type: "图表类型：",
                    lang_prev_btn: "上一个",
                    lang_next_btn: "下一个"
                }
            },
            emotion: {
                static: {
                    lang_input_choice: "精选",
                    lang_input_Tuzki: "兔斯基",
                    lang_input_BOBO: "BOBO",
                    lang_input_lvdouwa: "绿豆蛙",
                    lang_input_babyCat: "baby猫",
                    lang_input_bubble: "泡泡",
                    lang_input_youa: "有啊"
                }
            },
            gmap: {
                static: {
                    lang_input_address: "地址",
                    lang_input_search: "搜索",
                    address: {
                        value: "北京"
                    }
                },
                searchError: "无法定位到该地址!"
            },
            help: {
                static: {
                    lang_input_about: "关于UEditor",
                    lang_input_shortcuts: "快捷键",
                    lang_input_introduction: "UEditor是由百度web前端研发部开发的所见即所得富文本web编辑器，具有轻量，可定制，注重用户体验等特点。开源基于BSD协议，允许自由使用和修改代码。",
                    lang_Txt_shortcuts: "快捷键",
                    lang_Txt_func: "功能",
                    lang_Txt_bold: "给选中字设置为加粗",
                    lang_Txt_copy: "复制选中内容",
                    lang_Txt_cut: "剪切选中内容",
                    lang_Txt_Paste: "粘贴",
                    lang_Txt_undo: "重新执行上次操作",
                    lang_Txt_redo: "撤销上一次操作",
                    lang_Txt_italic: "给选中字设置为斜体",
                    lang_Txt_underline: "给选中字加下划线",
                    lang_Txt_selectAll: "全部选中",
                    lang_Txt_visualEnter: "软回车",
                    lang_Txt_fullscreen: "全屏"
                }
            },
            insertframe: {
                static: {
                    lang_input_address: "地址：",
                    lang_input_width: "宽度：",
                    lang_input_height: "高度：",
                    lang_input_isScroll: "允许滚动条：",
                    lang_input_frameborder: "显示框架边框：",
                    lang_input_alignMode: "对齐方式：",
                    align: {
                        title: "对齐方式",
                        options: ["默认", "左对齐", "右对齐", "居中"]
                    }
                },
                enterAddress: "请输入地址!"
            },
            link: {
                static: {
                    lang_input_text: "文本内容：",
                    lang_input_url: "链接地址：",
                    lang_input_title: "标题：",
                    lang_input_target: "是否在新窗口打开："
                },
                validLink: "只支持选中一个链接时生效",
                httpPrompt: "您输入的超链接中不包含http等协议名称，默认将为您添加http://前缀"
            },
            map: {
                static: {
                    lang_city: "城市",
                    lang_address: "地址",
                    city: {
                        value: "北京"
                    },
                    lang_search: "搜索",
                    lang_dynamicmap: "插入动态地图"
                },
                cityMsg: "请选择城市",
                errorMsg: "抱歉，找不到该位置！"
            },
            searchreplace: {
                static: {
                    lang_tab_search: "查找",
                    lang_tab_replace: "替换",
                    lang_search1: "查找",
                    lang_search2: "查找",
                    lang_replace: "替换",
                    lang_searchReg: "支持正则表达式，添加前后斜杠标示为正则表达式，例如“/表达式/”",
                    lang_searchReg1: "支持正则表达式，添加前后斜杠标示为正则表达式，例如“/表达式/”",
                    lang_case_sensitive1: "区分大小写",
                    lang_case_sensitive2: "区分大小写",
                    nextFindBtn: {
                        value: "下一个"
                    },
                    preFindBtn: {
                        value: "上一个"
                    },
                    nextReplaceBtn: {
                        value: "下一个"
                    },
                    preReplaceBtn: {
                        value: "上一个"
                    },
                    repalceBtn: {
                        value: "替换"
                    },
                    repalceAllBtn: {
                        value: "全部替换"
                    }
                },
                getEnd: "已经搜索到文章末尾！",
                getStart: "已经搜索到文章头部",
                countMsg: "总共替换了{#count}处！"
            },
            snapscreen: {
                static: {
                    lang_showMsg: "截图功能需要首先安装UEditor截图插件！ ",
                    lang_download: "点此下载",
                    lang_step1: "第一步，下载UEditor截图插件并运行安装。",
                    lang_step2: "第二步，插件安装完成后即可使用，如不生效，请重启浏览器后再试！"
                }
            },
            spechars: {
                static: {},
                tsfh: "特殊字符",
                lmsz: "罗马字符",
                szfh: "数学字符",
                rwfh: "日文字符",
                xlzm: "希腊字母",
                ewzm: "俄文字符",
                pyzm: "拼音字母",
                yyyb: "英语音标",
                zyzf: "其他"
            },
            edittable: {
                static: {
                    lang_tableStyle: "表格样式",
                    lang_insertCaption: "添加表格名称行",
                    lang_insertTitle: "添加表格标题行",
                    lang_insertTitleCol: "添加表格标题列",
                    lang_orderbycontent: "使表格内容可排序",
                    lang_tableSize: "自动调整表格尺寸",
                    lang_autoSizeContent: "按表格文字自适应",
                    lang_autoSizePage: "按页面宽度自适应",
                    lang_example: "示例",
                    lang_borderStyle: "表格边框",
                    lang_color: "颜色:"
                },
                captionName: "表格名称",
                titleName: "标题",
                cellsName: "内容",
                errorMsg: "有合并单元格，不可排序"
            },
            edittip: {
                static: {
                    lang_delRow: "删除整行",
                    lang_delCol: "删除整列"
                }
            },
            edittd: {
                static: {
                    lang_tdBkColor: "背景颜色:"
                }
            },
            formula: {
                static: {}
            },
            wordimage: {
                static: {
                    lang_resave: "转存步骤",
                    uploadBtn: {
                        src: "upload.png",
                        alt: "上传"
                    },
                    clipboard: {
                        style: "background: url(copy.png) -153px -1px no-repeat;"
                    },
                    lang_step: "1、点击顶部复制按钮，将地址复制到剪贴板；2、点击添加照片按钮，在弹出的对话框中使用Ctrl+V粘贴地址；3、点击打开后选择图片上传流程。"
                },
                fileType: "图片",
                flashError: "FLASH初始化失败，请检查FLASH插件是否正确安装！",
                netError: "网络连接错误，请重试！",
                copySuccess: "图片地址已经复制！",
                flashI18n: {}
            },
            autosave: {
                saving: "保存中...",
                success: "本地保存成功"
            }
        }
    },
    yevg: function(e, t, n) {
        var i, o, r;
        /*! jQuery v2.2.3 | (c) jQuery Foundation | jquery.org/license */
        o = "undefined" != typeof window ? window: this,
        r = function(o, r) {
            var a = [],
            s = o.document,
            l = a.slice,
            d = a.concat,
            c = a.push,
            u = a.indexOf,
            m = {},
            f = m.toString,
            p = m.hasOwnProperty,
            h = {},
            g = "2.2.3",
            v = function(e, t) {
                return new v.fn.init(e, t)
            },
            b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            y = /^-ms-/,
            C = /-([\da-z])/gi,
            x = function(e, t) {
                return t.toUpperCase()
            };
            function w(e) {
                var t = !!e && "length" in e && e.length,
                n = v.type(e);
                return "function" !== n && !v.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            v.fn = v.prototype = {
                jquery: g,
                constructor: v,
                selector: "",
                length: 0,
                toArray: function() {
                    return l.call(this)
                },
                get: function(e) {
                    return null != e ? 0 > e ? this[e + this.length] : this[e] : l.call(this)
                },
                pushStack: function(e) {
                    var t = v.merge(this.constructor(), e);
                    return t.prevObject = this,
                    t.context = this.context,
                    t
                },
                each: function(e) {
                    return v.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(v.map(this,
                    function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(l.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq( - 1)
                },
                eq: function(e) {
                    var t = this.length,
                    n = +e + (0 > e ? t: 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: c,
                sort: a.sort,
                splice: a.splice
            },
            v.extend = v.fn.extend = function() {
                var e, t, n, i, o, r, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                d = !1;
                for ("boolean" == typeof a && (d = a, a = arguments[s] || {},
                s++), "object" == typeof a || v.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++) if (null != (e = arguments[s])) for (t in e) n = a[t],
                a !== (i = e[t]) && (d && i && (v.isPlainObject(i) || (o = v.isArray(i))) ? (o ? (o = !1, r = n && v.isArray(n) ? n: []) : r = n && v.isPlainObject(n) ? n: {},
                a[t] = v.extend(d, r, i)) : void 0 !== i && (a[t] = i));
                return a
            },
            v.extend({
                expando: "jQuery" + (g + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return "function" === v.type(e)
                },
                isArray: Array.isArray,
                isWindow: function(e) {
                    return null != e && e === e.window
                },
                isNumeric: function(e) {
                    var t = e && e.toString();
                    return ! v.isArray(e) && t - parseFloat(t) + 1 >= 0
                },
                isPlainObject: function(e) {
                    var t;
                    if ("object" !== v.type(e) || e.nodeType || v.isWindow(e)) return ! 1;
                    if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype || {},
                    "isPrototypeOf")) return ! 1;
                    for (t in e);
                    return void 0 === t || p.call(e, t)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return ! 1;
                    return ! 0
                },
                type: function(e) {
                    return null == e ? e + "": "object" == typeof e || "function" == typeof e ? m[f.call(e)] || "object": typeof e
                },
                globalEval: function(e) {
                    var t, n = eval; (e = v.trim(e)) && (1 === e.indexOf("use strict") ? ((t = s.createElement("script")).text = e, s.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                },
                camelCase: function(e) {
                    return e.replace(y, "ms-").replace(C, x)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t) {
                    var n, i = 0;
                    if (w(e)) for (n = e.length; n > i && !1 !== t.call(e[i], i, e[i]); i++);
                    else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "": (e + "").replace(b, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (w(Object(e)) ? v.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)),
                    n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : u.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length,
                    i = 0,
                    o = e.length; n > i; i++) e[o++] = t[i];
                    return e.length = o,
                    e
                },
                grep: function(e, t, n) {
                    for (var i = [], o = 0, r = e.length, a = !n; r > o; o++) ! t(e[o], o) !== a && i.push(e[o]);
                    return i
                },
                map: function(e, t, n) {
                    var i, o, r = 0,
                    a = [];
                    if (w(e)) for (i = e.length; i > r; r++) null != (o = t(e[r], r, n)) && a.push(o);
                    else for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
                    return d.apply([], a)
                },
                guid: 1,
                proxy: function(e, t) {
                    var n, i, o;
                    return "string" == typeof t && (n = e[t], t = e, e = n),
                    v.isFunction(e) ? (i = l.call(arguments, 2), (o = function() {
                        return e.apply(t || this, i.concat(l.call(arguments)))
                    }).guid = e.guid = e.guid || v.guid++, o) : void 0
                },
                now: Date.now,
                support: h
            }),
            "function" == typeof Symbol && (v.fn[Symbol.iterator] = a[Symbol.iterator]),
            v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
            function(e, t) {
                m["[object " + t + "]"] = t.toLowerCase()
            });
            var N = function(e) {
                var t, n, i, o, r, a, s, l, d, c, u, m, f, p, h, g, v, b, y, C = "sizzle" + 1 * new Date,
                x = e.document,
                w = 0,
                N = 0,
                E = re(),
                T = re(),
                U = re(),
                S = function(e, t) {
                    return e === t && (u = !0),
                    0
                },
                k = 1 << 31,
                _ = {}.hasOwnProperty,
                B = [],
                A = B.pop,
                I = B.push,
                L = B.push,
                R = B.slice,
                D = function(e, t) {
                    for (var n = 0,
                    i = e.length; i > n; n++) if (e[n] === t) return n;
                    return - 1
                },
                O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                P = "[\\x20\\t\\r\\n\\f]",
                M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                H = "\\[" + P + "*(" + M + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + P + "*\\]",
                F = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                q = new RegExp(P + "+", "g"),
                j = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                $ = new RegExp("^" + P + "*," + P + "*"),
                z = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                W = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
                V = new RegExp(F),
                X = new RegExp("^" + M + "$"),
                Y = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    TAG: new RegExp("^(" + M + "|[*])"),
                    ATTR: new RegExp("^" + H),
                    PSEUDO: new RegExp("^" + F),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + O + ")$", "i"),
                    needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
                },
                K = /^(?:input|select|textarea|button)$/i,
                G = /^h\d$/i,
                J = /^[^{]+\{\s*\[native \w/,
                Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Z = /[+~]/,
                ee = /'|\\/g,
                te = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
                ne = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i != i || n ? t: 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                ie = function() {
                    m()
                };
                try {
                    L.apply(B = R.call(x.childNodes), x.childNodes),
                    B[x.childNodes.length].nodeType
                } catch(e) {
                    L = {
                        apply: B.length ?
                        function(e, t) {
                            I.apply(e, R.call(t))
                        }: function(e, t) {
                            for (var n = e.length,
                            i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }
                function oe(e, t, i, o) {
                    var r, s, d, c, u, p, v, b, w = t && t.ownerDocument,
                    N = t ? t.nodeType: 9;
                    if (i = i || [], "string" != typeof e || !e || 1 !== N && 9 !== N && 11 !== N) return i;
                    if (!o && ((t ? t.ownerDocument || t: x) !== f && m(t), t = t || f, h)) {
                        if (11 !== N && (p = Q.exec(e))) if (r = p[1]) {
                            if (9 === N) {
                                if (! (d = t.getElementById(r))) return i;
                                if (d.id === r) return i.push(d),
                                i
                            } else if (w && (d = w.getElementById(r)) && y(t, d) && d.id === r) return i.push(d),
                            i
                        } else {
                            if (p[2]) return L.apply(i, t.getElementsByTagName(e)),
                            i;
                            if ((r = p[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(i, t.getElementsByClassName(r)),
                            i
                        }
                        if (n.qsa && !U[e + " "] && (!g || !g.test(e))) {
                            if (1 !== N) w = t,
                            b = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((c = t.getAttribute("id")) ? c = c.replace(ee, "\\$&") : t.setAttribute("id", c = C), s = (v = a(e)).length, u = X.test(c) ? "#" + c: "[id='" + c + "']"; s--;) v[s] = u + " " + he(v[s]);
                                b = v.join(","),
                                w = Z.test(e) && fe(t.parentNode) || t
                            }
                            if (b) try {
                                return L.apply(i, w.querySelectorAll(b)),
                                i
                            } catch(e) {} finally {
                                c === C && t.removeAttribute("id")
                            }
                        }
                    }
                    return l(e.replace(j, "$1"), t, i, o)
                }
                function re() {
                    var e = [];
                    return function t(n, o) {
                        return e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                        t[n + " "] = o
                    }
                }
                function ae(e) {
                    return e[C] = !0,
                    e
                }
                function se(e) {
                    var t = f.createElement("div");
                    try {
                        return !! e(t)
                    } catch(e) {
                        return ! 1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null
                    }
                }
                function le(e, t) {
                    for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t
                }
                function de(e, t) {
                    var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || k) - (~e.sourceIndex || k);
                    if (i) return i;
                    if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
                    return e ? 1 : -1
                }
                function ce(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }
                function ue(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }
                function me(e) {
                    return ae(function(t) {
                        return t = +t,
                        ae(function(n, i) {
                            for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                        })
                    })
                }
                function fe(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = oe.support = {},
                r = oe.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !! t && "HTML" !== t.nodeName
                },
                m = oe.setDocument = function(e) {
                    var t, o, a = e ? e.ownerDocument || e: x;
                    return a !== f && 9 === a.nodeType && a.documentElement ? (p = (f = a).documentElement, h = !r(f), (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.attributes = se(function(e) {
                        return e.className = "i",
                        !e.getAttribute("className")
                    }), n.getElementsByTagName = se(function(e) {
                        return e.appendChild(f.createComment("")),
                        !e.getElementsByTagName("*").length
                    }), n.getElementsByClassName = J.test(f.getElementsByClassName), n.getById = se(function(e) {
                        return p.appendChild(e).id = C,
                        !f.getElementsByName || !f.getElementsByName(C).length
                    }), n.getById ? (i.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && h) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    },
                    i.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete i.find.ID, i.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), i.find.TAG = n.getElementsByTagName ?
                    function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                    }: function(e, t) {
                        var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return r
                    },
                    i.find.CLASS = n.getElementsByClassName &&
                    function(e, t) {
                        return void 0 !== t.getElementsByClassName && h ? t.getElementsByClassName(e) : void 0
                    },
                    v = [], g = [], (n.qsa = J.test(f.querySelectorAll)) && (se(function(e) {
                        p.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + O + ")"),
                        e.querySelectorAll("[id~=" + C + "-]").length || g.push("~="),
                        e.querySelectorAll(":checked").length || g.push(":checked"),
                        e.querySelectorAll("a#" + C + "+*").length || g.push(".#.+[+~]")
                    }), se(function(e) {
                        var t = f.createElement("input");
                        t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && g.push("name" + P + "*[*^$|!~]?="),
                        e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        g.push(",.*:")
                    })), (n.matchesSelector = J.test(b = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && se(function(e) {
                        n.disconnectedMatch = b.call(e, "div"),
                        b.call(e, "[s!='']:x"),
                        v.push("!=", F)
                    }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(p.compareDocumentPosition), y = t || J.test(p.contains) ?
                    function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement: e,
                        i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    }: function(e, t) {
                        if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                        return ! 1
                    },
                    S = t ?
                    function(e, t) {
                        if (e === t) return u = !0,
                        0;
                        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === f || e.ownerDocument === x && y(x, e) ? -1 : t === f || t.ownerDocument === x && y(x, t) ? 1 : c ? D(c, e) - D(c, t) : 0 : 4 & i ? -1 : 1)
                    }: function(e, t) {
                        if (e === t) return u = !0,
                        0;
                        var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        a = [e],
                        s = [t];
                        if (!o || !r) return e === f ? -1 : t === f ? 1 : o ? -1 : r ? 1 : c ? D(c, e) - D(c, t) : 0;
                        if (o === r) return de(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (; a[i] === s[i];) i++;
                        return i ? de(a[i], s[i]) : a[i] === x ? -1 : s[i] === x ? 1 : 0
                    },
                    f) : f
                },
                oe.matches = function(e, t) {
                    return oe(e, null, null, t)
                },
                oe.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== f && m(e), t = t.replace(W, "='$1']"), n.matchesSelector && h && !U[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                        var i = b.call(e, t);
                        if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch(e) {}
                    return oe(t, f, null, [e]).length > 0
                },
                oe.contains = function(e, t) {
                    return (e.ownerDocument || e) !== f && m(e),
                    y(e, t)
                },
                oe.attr = function(e, t) { (e.ownerDocument || e) !== f && m(e);
                    var o = i.attrHandle[t.toLowerCase()],
                    r = o && _.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !h) : void 0;
                    return void 0 !== r ? r: n.attributes || !h ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
                },
                oe.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                },
                oe.uniqueSort = function(e) {
                    var t, i = [],
                    o = 0,
                    r = 0;
                    if (u = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(S), u) {
                        for (; t = e[r++];) t === e[r] && (o = i.push(r));
                        for (; o--;) e.splice(i[o], 1)
                    }
                    return c = null,
                    e
                },
                o = oe.getText = function(e) {
                    var t, n = "",
                    i = 0,
                    r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else for (; t = e[i++];) n += o(t);
                    return n
                },
                (i = oe.selectors = {
                    cacheLength: 50,
                    createPseudo: ae,
                    match: Y,
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
                        ATTR: function(e) {
                            return e[1] = e[1].replace(te, ne),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]),
                            e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return Y.CHILD.test(e[0]) ? null: (e[3] ? e[2] = e[4] || e[5] || "": n && V.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ?
                            function() {
                                return ! 0
                            }: function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = E[e + " "];
                            return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && E(e,
                            function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, n) {
                            return function(i) {
                                var o = oe.attr(i, e);
                                return null == o ? "!=" === t: !t || (o += "", "=" === t ? o === n: "!=" === t ? o !== n: "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice( - n.length) === n: "~=" === t ? (" " + o.replace(q, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(e, t, n, i, o) {
                            var r = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice( - 4),
                            s = "of-type" === t;
                            return 1 === i && 0 === o ?
                            function(e) {
                                return !! e.parentNode
                            }: function(t, n, l) {
                                var d, c, u, m, f, p, h = r !== a ? "nextSibling": "previousSibling",
                                g = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                b = !l && !s,
                                y = !1;
                                if (g) {
                                    if (r) {
                                        for (; h;) {
                                            for (m = t; m = m[h];) if (s ? m.nodeName.toLowerCase() === v: 1 === m.nodeType) return ! 1;
                                            p = h = "only" === e && !p && "nextSibling"
                                        }
                                        return ! 0
                                    }
                                    if (p = [a ? g.firstChild: g.lastChild], a && b) {
                                        for (y = (f = (d = (c = (u = (m = g)[C] || (m[C] = {}))[m.uniqueID] || (u[m.uniqueID] = {}))[e] || [])[0] === w && d[1]) && d[2], m = f && g.childNodes[f]; m = ++f && m && m[h] || (y = f = 0) || p.pop();) if (1 === m.nodeType && ++y && m === t) {
                                            c[e] = [w, f, y];
                                            break
                                        }
                                    } else if (b && (y = f = (d = (c = (u = (m = t)[C] || (m[C] = {}))[m.uniqueID] || (u[m.uniqueID] = {}))[e] || [])[0] === w && d[1]), !1 === y) for (; (m = ++f && m && m[h] || (y = f = 0) || p.pop()) && ((s ? m.nodeName.toLowerCase() !== v: 1 !== m.nodeType) || !++y || (b && ((c = (u = m[C] || (m[C] = {}))[m.uniqueID] || (u[m.uniqueID] = {}))[e] = [w, y]), m !== t)););
                                    return (y -= o) === i || y % i == 0 && y / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                            return o[C] ? o(t) : o.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, n) {
                                for (var i, r = o(e, t), a = r.length; a--;) e[i = D(e, r[a])] = !(n[i] = r[a])
                            }) : function(e) {
                                return o(e, 0, n)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: ae(function(e) {
                            var t = [],
                            n = [],
                            i = s(e.replace(j, "$1"));
                            return i[C] ? ae(function(e, t, n, o) {
                                for (var r, a = i(e, null, o, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                            }) : function(e, o, r) {
                                return t[0] = e,
                                i(t, null, r, n),
                                t[0] = null,
                                !n.pop()
                            }
                        }),
                        has: ae(function(e) {
                            return function(t) {
                                return oe(e, t).length > 0
                            }
                        }),
                        contains: ae(function(e) {
                            return e = e.replace(te, ne),
                            function(t) {
                                return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                            }
                        }),
                        lang: ae(function(e) {
                            return X.test(e || "") || oe.error("unsupported lang: " + e),
                            e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = h ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while (( t = t . parentNode ) && 1 === t.nodeType);
                                return ! 1
                            }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === p
                        },
                        focus: function(e) {
                            return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return ! 1 === e.disabled
                        },
                        disabled: function(e) {
                            return ! 0 === e.disabled
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return ! 1;
                            return ! 0
                        },
                        parent: function(e) {
                            return ! i.pseudos.empty(e)
                        },
                        header: function(e) {
                            return G.test(e.nodeName)
                        },
                        input: function(e) {
                            return K.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: me(function() {
                            return [0]
                        }),
                        last: me(function(e, t) {
                            return [t - 1]
                        }),
                        eq: me(function(e, t, n) {
                            return [0 > n ? n + t: n]
                        }),
                        even: me(function(e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: me(function(e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: me(function(e, t, n) {
                            for (var i = 0 > n ? n + t: n; --i >= 0;) e.push(i);
                            return e
                        }),
                        gt: me(function(e, t, n) {
                            for (var i = 0 > n ? n + t: n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }).pseudos.nth = i.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[t] = ce(t);
                for (t in {
                    submit: !0,
                    reset: !0
                }) i.pseudos[t] = ue(t);
                function pe() {}
                function he(e) {
                    for (var t = 0,
                    n = e.length,
                    i = ""; n > t; t++) i += e[t].value;
                    return i
                }
                function ge(e, t, n) {
                    var i = t.dir,
                    o = n && "parentNode" === i,
                    r = N++;
                    return t.first ?
                    function(t, n, r) {
                        for (; t = t[i];) if (1 === t.nodeType || o) return e(t, n, r)
                    }: function(t, n, a) {
                        var s, l, d, c = [w, r];
                        if (a) {
                            for (; t = t[i];) if ((1 === t.nodeType || o) && e(t, n, a)) return ! 0
                        } else for (; t = t[i];) if (1 === t.nodeType || o) {
                            if ((s = (l = (d = t[C] || (t[C] = {}))[t.uniqueID] || (d[t.uniqueID] = {}))[i]) && s[0] === w && s[1] === r) return c[2] = s[2];
                            if (l[i] = c, c[2] = e(t, n, a)) return ! 0
                        }
                    }
                }
                function ve(e) {
                    return e.length > 1 ?
                    function(t, n, i) {
                        for (var o = e.length; o--;) if (!e[o](t, n, i)) return ! 1;
                        return ! 0
                    }: e[0]
                }
                function be(e, t, n, i, o) {
                    for (var r, a = [], s = 0, l = e.length, d = null != t; l > s; s++)(r = e[s]) && (n && !n(r, i, o) || (a.push(r), d && t.push(s)));
                    return a
                }
                function ye(e, t, n, i, o, r) {
                    return i && !i[C] && (i = ye(i)),
                    o && !o[C] && (o = ye(o, r)),
                    ae(function(r, a, s, l) {
                        var d, c, u, m = [],
                        f = [],
                        p = a.length,
                        h = r ||
                        function(e, t, n) {
                            for (var i = 0,
                            o = t.length; o > i; i++) oe(e, t[i], n);
                            return n
                        } (t || "*", s.nodeType ? [s] : s, []),
                        g = !e || !r && t ? h: be(h, m, e, s, l),
                        v = n ? o || (r ? e: p || i) ? [] : a: g;
                        if (n && n(g, v, s, l), i) for (d = be(v, f), i(d, [], s, l), c = d.length; c--;)(u = d[c]) && (v[f[c]] = !(g[f[c]] = u));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (d = [], c = v.length; c--;)(u = v[c]) && d.push(g[c] = u);
                                    o(null, v = [], d, l)
                                }
                                for (c = v.length; c--;)(u = v[c]) && (d = o ? D(r, u) : m[c]) > -1 && (r[d] = !(a[d] = u))
                            }
                        } else v = be(v === a ? v.splice(p, v.length) : v),
                        o ? o(null, a, v, l) : L.apply(a, v)
                    })
                }
                function Ce(e) {
                    for (var t, n, o, r = e.length,
                    a = i.relative[e[0].type], s = a || i.relative[" "], l = a ? 1 : 0, c = ge(function(e) {
                        return e === t
                    },
                    s, !0), u = ge(function(e) {
                        return D(t, e) > -1
                    },
                    s, !0), m = [function(e, n, i) {
                        var o = !a && (i || n !== d) || ((t = n).nodeType ? c(e, n, i) : u(e, n, i));
                        return t = null,
                        o
                    }]; r > l; l++) if (n = i.relative[e[l].type]) m = [ge(ve(m), n)];
                    else {
                        if ((n = i.filter[e[l].type].apply(null, e[l].matches))[C]) {
                            for (o = ++l; r > o && !i.relative[e[o].type]; o++);
                            return ye(l > 1 && ve(m), l > 1 && he(e.slice(0, l - 1).concat({
                                value: " " === e[l - 2].type ? "*": ""
                            })).replace(j, "$1"), n, o > l && Ce(e.slice(l, o)), r > o && Ce(e = e.slice(o)), r > o && he(e))
                        }
                        m.push(n)
                    }
                    return ve(m)
                }
                function xe(e, t) {
                    var n = t.length > 0,
                    o = e.length > 0,
                    r = function(r, a, s, l, c) {
                        var u, p, g, v = 0,
                        b = "0",
                        y = r && [],
                        C = [],
                        x = d,
                        N = r || o && i.find.TAG("*", c),
                        E = w += null == x ? 1 : Math.random() || .1,
                        T = N.length;
                        for (c && (d = a === f || a || c); b !== T && null != (u = N[b]); b++) {
                            if (o && u) {
                                for (p = 0, a || u.ownerDocument === f || (m(u), s = !h); g = e[p++];) if (g(u, a || f, s)) {
                                    l.push(u);
                                    break
                                }
                                c && (w = E)
                            }
                            n && ((u = !g && u) && v--, r && y.push(u))
                        }
                        if (v += b, n && b !== v) {
                            for (p = 0; g = t[p++];) g(y, C, a, s);
                            if (r) {
                                if (v > 0) for (; b--;) y[b] || C[b] || (C[b] = A.call(l));
                                C = be(C)
                            }
                            L.apply(l, C),
                            c && !r && C.length > 0 && v + t.length > 1 && oe.uniqueSort(l)
                        }
                        return c && (w = E, d = x),
                        y
                    };
                    return n ? ae(r) : r
                }
                return pe.prototype = i.filters = i.pseudos,
                i.setFilters = new pe,
                a = oe.tokenize = function(e, t) {
                    var n, o, r, a, s, l, d, c = T[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (s = e, l = [], d = i.preFilter; s;) {
                        for (a in n && !(o = $.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), n = !1, (o = z.exec(s)) && (n = o.shift(), r.push({
                            value: n,
                            type: o[0].replace(j, " ")
                        }), s = s.slice(n.length)), i.filter) ! (o = Y[a].exec(s)) || d[a] && !(o = d[a](o)) || (n = o.shift(), r.push({
                            value: n,
                            type: a,
                            matches: o
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length: s ? oe.error(e) : T(e, l).slice(0)
                },
                s = oe.compile = function(e, t) {
                    var n, i = [],
                    o = [],
                    r = U[e + " "];
                    if (!r) {
                        for (t || (t = a(e)), n = t.length; n--;)(r = Ce(t[n]))[C] ? i.push(r) : o.push(r); (r = U(e, xe(o, i))).selector = e
                    }
                    return r
                },
                l = oe.select = function(e, t, o, r) {
                    var l, d, c, u, m, f = "function" == typeof e && e,
                    p = !r && a(e = f.selector || e);
                    if (o = o || [], 1 === p.length) {
                        if ((d = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = d[0]).type && n.getById && 9 === t.nodeType && h && i.relative[d[1].type]) {
                            if (! (t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return o;
                            f && (t = t.parentNode),
                            e = e.slice(d.shift().value.length)
                        }
                        for (l = Y.needsContext.test(e) ? 0 : d.length; l--&&(c = d[l], !i.relative[u = c.type]);) if ((m = i.find[u]) && (r = m(c.matches[0].replace(te, ne), Z.test(d[0].type) && fe(t.parentNode) || t))) {
                            if (d.splice(l, 1), !(e = r.length && he(d))) return L.apply(o, r),
                            o;
                            break
                        }
                    }
                    return (f || s(e, p))(r, t, !h, o, !t || Z.test(e) && fe(t.parentNode) || t),
                    o
                },
                n.sortStable = C.split("").sort(S).join("") === C,
                n.detectDuplicates = !!u,
                m(),
                n.sortDetached = se(function(e) {
                    return 1 & e.compareDocumentPosition(f.createElement("div"))
                }),
                se(function(e) {
                    return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
                }) || le("type|href|height|width",
                function(e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }),
                n.attributes && se(function(e) {
                    return e.innerHTML = "<input/>",
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                }) || le("value",
                function(e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }),
                se(function(e) {
                    return null == e.getAttribute("disabled")
                }) || le(O,
                function(e, t, n) {
                    var i;
                    return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value: null
                }),
                oe
            } (o);
            v.find = N,
            v.expr = N.selectors,
            v.expr[":"] = v.expr.pseudos,
            v.uniqueSort = v.unique = N.uniqueSort,
            v.text = N.getText,
            v.isXMLDoc = N.isXML,
            v.contains = N.contains;
            var E = function(e, t, n) {
                for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                    if (o && v(e).is(n)) break;
                    i.push(e)
                }
                return i
            },
            T = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            U = v.expr.match.needsContext,
            S = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            k = /^.[^:#\[\.,]*$/;
            function _(e, t, n) {
                if (v.isFunction(t)) return v.grep(e,
                function(e, i) {
                    return !! t.call(e, i, e) !== n
                });
                if (t.nodeType) return v.grep(e,
                function(e) {
                    return e === t !== n
                });
                if ("string" == typeof t) {
                    if (k.test(t)) return v.filter(t, e, n);
                    t = v.filter(t, e)
                }
                return v.grep(e,
                function(e) {
                    return u.call(t, e) > -1 !== n
                })
            }
            v.filter = function(e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === i.nodeType ? v.find.matchesSelector(i, e) ? [i] : [] : v.find.matches(e, v.grep(t,
                function(e) {
                    return 1 === e.nodeType
                }))
            },
            v.fn.extend({
                find: function(e) {
                    var t, n = this.length,
                    i = [],
                    o = this;
                    if ("string" != typeof e) return this.pushStack(v(e).filter(function() {
                        for (t = 0; n > t; t++) if (v.contains(o[t], this)) return ! 0
                    }));
                    for (t = 0; n > t; t++) v.find(e, o[t], i);
                    return (i = this.pushStack(n > 1 ? v.unique(i) : i)).selector = this.selector ? this.selector + " " + e: e,
                    i
                },
                filter: function(e) {
                    return this.pushStack(_(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(_(this, e || [], !0))
                },
                is: function(e) {
                    return !! _(this, "string" == typeof e && U.test(e) ? v(e) : e || [], !1).length
                }
            });
            var B, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/; (v.fn.init = function(e, t, n) {
                var i, o;
                if (!e) return this;
                if (n = n || B, "string" == typeof e) {
                    if (! (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : A.exec(e)) || !i[1] && t) return ! t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof v ? t[0] : t, v.merge(this, v.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t: s, !0)), S.test(i[1]) && v.isPlainObject(t)) for (i in t) v.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    return (o = s.getElementById(i[2])) && o.parentNode && (this.length = 1, this[0] = o),
                    this.context = s,
                    this.selector = e,
                    this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : v.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(v) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this))
            }).prototype = v.fn,
            B = v(s);
            var I = /^(?:parents|prev(?:Until|All))/,
            L = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            function R(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            v.fn.extend({
                has: function(e) {
                    var t = v(e, this),
                    n = t.length;
                    return this.filter(function() {
                        for (var e = 0; n > e; e++) if (v.contains(this, t[e])) return ! 0
                    })
                },
                closest: function(e, t) {
                    for (var n, i = 0,
                    o = this.length,
                    r = [], a = U.test(e) || "string" != typeof e ? v(e, t || this.context) : 0; o > i; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && v.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    }
                    return this.pushStack(r.length > 1 ? v.uniqueSort(r) : r)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? u.call(v(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
                },
                add: function(e, t) {
                    return this.pushStack(v.uniqueSort(v.merge(this.get(), v(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
                }
            }),
            v.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t: null
                },
                parents: function(e) {
                    return E(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return E(e, "parentNode", n)
                },
                next: function(e) {
                    return R(e, "nextSibling")
                },
                prev: function(e) {
                    return R(e, "previousSibling")
                },
                nextAll: function(e) {
                    return E(e, "nextSibling")
                },
                prevAll: function(e) {
                    return E(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return E(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return E(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return T((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return T(e.firstChild)
                },
                contents: function(e) {
                    return e.contentDocument || v.merge([], e.childNodes)
                }
            },
            function(e, t) {
                v.fn[e] = function(n, i) {
                    var o = v.map(this, t, n);
                    return "Until" !== e.slice( - 5) && (i = n),
                    i && "string" == typeof i && (o = v.filter(i, o)),
                    this.length > 1 && (L[e] || v.uniqueSort(o), I.test(e) && o.reverse()),
                    this.pushStack(o)
                }
            });
            var D, O = /\S+/g;
            function P() {
                s.removeEventListener("DOMContentLoaded", P),
                o.removeEventListener("load", P),
                v.ready()
            }
            v.Callbacks = function(e) {
                e = "string" == typeof e ?
                function(e) {
                    var t = {};
                    return v.each(e.match(O) || [],
                    function(e, n) {
                        t[n] = !0
                    }),
                    t
                } (e) : v.extend({},
                e);
                var t, n, i, o, r = [],
                a = [],
                s = -1,
                l = function() {
                    for (o = e.once, i = t = !0; a.length; s = -1) for (n = a.shift(); ++s < r.length;) ! 1 === r[s].apply(n[0], n[1]) && e.stopOnFalse && (s = r.length, n = !1);
                    e.memory || (n = !1),
                    t = !1,
                    o && (r = n ? [] : "")
                },
                d = {
                    add: function() {
                        return r && (n && !t && (s = r.length - 1, a.push(n)),
                        function t(n) {
                            v.each(n,
                            function(n, i) {
                                v.isFunction(i) ? e.unique && d.has(i) || r.push(i) : i && i.length && "string" !== v.type(i) && t(i)
                            })
                        } (arguments), n && !t && l()),
                        this
                    },
                    remove: function() {
                        return v.each(arguments,
                        function(e, t) {
                            for (var n; (n = v.inArray(t, r, n)) > -1;) r.splice(n, 1),
                            s >= n && s--
                        }),
                        this
                    },
                    has: function(e) {
                        return e ? v.inArray(e, r) > -1 : r.length > 0
                    },
                    empty: function() {
                        return r && (r = []),
                        this
                    },
                    disable: function() {
                        return o = a = [],
                        r = n = "",
                        this
                    },
                    disabled: function() {
                        return ! r
                    },
                    lock: function() {
                        return o = a = [],
                        n || (r = n = ""),
                        this
                    },
                    locked: function() {
                        return !! o
                    },
                    fireWith: function(e, n) {
                        return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()),
                        this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !! i
                    }
                };
                return d
            },
            v.extend({
                Deferred: function(e) {
                    var t = [["resolve", "done", v.Callbacks("once memory"), "resolved"], ["reject", "fail", v.Callbacks("once memory"), "rejected"], ["notify", "progress", v.Callbacks("memory")]],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments),
                            this
                        },
                        then: function() {
                            var e = arguments;
                            return v.Deferred(function(n) {
                                v.each(t,
                                function(t, r) {
                                    var a = v.isFunction(e[t]) && e[t];
                                    o[r[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && v.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }),
                                e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? v.extend(e, i) : i
                        }
                    },
                    o = {};
                    return i.pipe = i.then,
                    v.each(t,
                    function(e, r) {
                        var a = r[2],
                        s = r[3];
                        i[r[1]] = a.add,
                        s && a.add(function() {
                            n = s
                        },
                        t[1 ^ e][2].disable, t[2][2].lock),
                        o[r[0]] = function() {
                            return o[r[0] + "With"](this === o ? i: this, arguments),
                            this
                        },
                        o[r[0] + "With"] = a.fireWith
                    }),
                    i.promise(o),
                    e && e.call(o, o),
                    o
                },
                when: function(e) {
                    var t, n, i, o = 0,
                    r = l.call(arguments),
                    a = r.length,
                    s = 1 !== a || e && v.isFunction(e.promise) ? a: 0,
                    d = 1 === s ? e: v.Deferred(),
                    c = function(e, n, i) {
                        return function(o) {
                            n[e] = this,
                            i[e] = arguments.length > 1 ? l.call(arguments) : o,
                            i === t ? d.notifyWith(n, i) : --s || d.resolveWith(n, i)
                        }
                    };
                    if (a > 1) for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) r[o] && v.isFunction(r[o].promise) ? r[o].promise().progress(c(o, n, t)).done(c(o, i, r)).fail(d.reject) : --s;
                    return s || d.resolveWith(i, r),
                    d.promise()
                }
            }),
            v.fn.ready = function(e) {
                return v.ready.promise().done(e),
                this
            },
            v.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? v.readyWait++:v.ready(!0)
                },
                ready: function(e) { (!0 === e ? --v.readyWait: v.isReady) || (v.isReady = !0, !0 !== e && --v.readyWait > 0 || (D.resolveWith(s, [v]), v.fn.triggerHandler && (v(s).triggerHandler("ready"), v(s).off("ready"))))
                }
            }),
            v.ready.promise = function(e) {
                return D || (D = v.Deferred(), "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? o.setTimeout(v.ready) : (s.addEventListener("DOMContentLoaded", P), o.addEventListener("load", P))),
                D.promise(e)
            },
            v.ready.promise();
            var M = function(e, t, n, i, o, r, a) {
                var s = 0,
                l = e.length,
                d = null == n;
                if ("object" === v.type(n)) for (s in o = !0, n) M(e, t, s, n[s], !0, r, a);
                else if (void 0 !== i && (o = !0, v.isFunction(i) || (a = !0), d && (a ? (t.call(e, i), t = null) : (d = t, t = function(e, t, n) {
                    return d.call(v(e), n)
                })), t)) for (; l > s; s++) t(e[s], n, a ? i: i.call(e[s], s, t(e[s], n)));
                return o ? e: d ? t.call(e) : l ? t(e[0], n) : r
            },
            H = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
            function F() {
                this.expando = v.expando + F.uid++
            }
            F.uid = 1,
            F.prototype = {
                register: function(e, t) {
                    var n = t || {};
                    return e.nodeType ? e[this.expando] = n: Object.defineProperty(e, this.expando, {
                        value: n,
                        writable: !0,
                        configurable: !0
                    }),
                    e[this.expando]
                },
                cache: function(e) {
                    if (!H(e)) return {};
                    var t = e[this.expando];
                    return t || (t = {},
                    H(e) && (e.nodeType ? e[this.expando] = t: Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))),
                    t
                },
                set: function(e, t, n) {
                    var i, o = this.cache(e);
                    if ("string" == typeof t) o[t] = n;
                    else for (i in t) o[i] = t[i];
                    return o
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
                },
                access: function(e, t, n) {
                    var i;
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i: this.get(e, v.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n: t)
                },
                remove: function(e, t) {
                    var n, i, o, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 === t) this.register(e);
                        else {
                            v.isArray(t) ? i = t.concat(t.map(v.camelCase)) : (o = v.camelCase(t), t in r ? i = [t, o] : i = (i = o) in r ? [i] : i.match(O) || []),
                            n = i.length;
                            for (; n--;) delete r[i[n]]
                        } (void 0 === t || v.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !v.isEmptyObject(t)
                }
            };
            var q = new F,
            j = new F,
            $ = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            z = /[A-Z]/g;
            function W(e, t, n) {
                var i;
                if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null: +n + "" === n ? +n: $.test(n) ? v.parseJSON(n) : n)
                    } catch(e) {}
                    j.set(e, t, n)
                } else n = void 0;
                return n
            }
            v.extend({
                hasData: function(e) {
                    return j.hasData(e) || q.hasData(e)
                },
                data: function(e, t, n) {
                    return j.access(e, t, n)
                },
                removeData: function(e, t) {
                    j.remove(e, t)
                },
                _data: function(e, t, n) {
                    return q.access(e, t, n)
                },
                _removeData: function(e, t) {
                    q.remove(e, t)
                }
            }),
            v.fn.extend({
                data: function(e, t) {
                    var n, i, o, r = this[0],
                    a = r && r.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = j.get(r), 1 === r.nodeType && !q.get(r, "hasDataAttrs"))) {
                            for (n = a.length; n--;) a[n] && (0 === (i = a[n].name).indexOf("data-") && (i = v.camelCase(i.slice(5)), W(r, i, o[i])));
                            q.set(r, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof e ? this.each(function() {
                        j.set(this, e)
                    }) : M(this,
                    function(t) {
                        var n, i;
                        if (r && void 0 === t) {
                            if (void 0 !== (n = j.get(r, e) || j.get(r, e.replace(z, "-$&").toLowerCase()))) return n;
                            if (i = v.camelCase(e), void 0 !== (n = j.get(r, i))) return n;
                            if (void 0 !== (n = W(r, i, void 0))) return n
                        } else i = v.camelCase(e),
                        this.each(function() {
                            var n = j.get(this, i);
                            j.set(this, i, t),
                            e.indexOf("-") > -1 && void 0 !== n && j.set(this, e, t)
                        })
                    },
                    null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        j.remove(this, e)
                    })
                }
            }),
            v.extend({
                queue: function(e, t, n) {
                    var i;
                    return e ? (t = (t || "fx") + "queue", i = q.get(e, t), n && (!i || v.isArray(n) ? i = q.access(e, t, v.makeArray(n)) : i.push(n)), i || []) : void 0
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = v.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = v._queueHooks(e, t);
                    "inprogress" === o && (o = n.shift(), i--),
                    o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e,
                    function() {
                        v.dequeue(e, t)
                    },
                    r)),
                    !i && r && r.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return q.get(e, n) || q.access(e, n, {
                        empty: v.Callbacks("once memory").add(function() {
                            q.remove(e, [t + "queue", n])
                        })
                    })
                }
            }),
            v.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--),
                    arguments.length < n ? v.queue(this[0], e) : void 0 === t ? this: this.each(function() {
                        var n = v.queue(this, e, t);
                        v._queueHooks(this, e),
                        "fx" === e && "inprogress" !== n[0] && v.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        v.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, i = 1,
                    o = v.Deferred(),
                    r = this,
                    a = this.length,
                    s = function() {--i || o.resolveWith(r, [r])
                    };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = q.get(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                    return s(),
                    o.promise(t)
                }
            });
            var V = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            X = new RegExp("^(?:([+-])=|)(" + V + ")([a-z%]*)$", "i"),
            Y = ["Top", "Right", "Bottom", "Left"],
            K = function(e, t) {
                return e = t || e,
                "none" === v.css(e, "display") || !v.contains(e.ownerDocument, e)
            };
            function G(e, t, n, i) {
                var o, r = 1,
                a = 20,
                s = i ?
                function() {
                    return i.cur()
                }: function() {
                    return v.css(e, t, "")
                },
                l = s(),
                d = n && n[3] || (v.cssNumber[t] ? "": "px"),
                c = (v.cssNumber[t] || "px" !== d && +l) && X.exec(v.css(e, t));
                if (c && c[3] !== d) {
                    d = d || c[3],
                    n = n || [],
                    c = +l || 1;
                    do {
                        c /= r = r || ".5", v.style(e, t, c + d)
                    } while ( r !== ( r = s () / l) && 1 !== r && --a)
                }
                return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = d, i.start = c, i.end = o)),
                o
            }
            var J = /^(?:checkbox|radio)$/i,
            Q = /<([\w:-]+)/,
            Z = /^$|\/(?:java|ecma)script/i,
            ee = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            function te(e, t) {
                var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && v.nodeName(e, t) ? v.merge([e], n) : n
            }
            function ne(e, t) {
                for (var n = 0,
                i = e.length; i > n; n++) q.set(e[n], "globalEval", !t || q.get(t[n], "globalEval"))
            }
            ee.optgroup = ee.option,
            ee.tbody = ee.tfoot = ee.colgroup = ee.caption = ee.thead,
            ee.th = ee.td;
            var ie = /<|&#?\w+;/;
            function oe(e, t, n, i, o) {
                for (var r, a, s, l, d, c, u = t.createDocumentFragment(), m = [], f = 0, p = e.length; p > f; f++) if ((r = e[f]) || 0 === r) if ("object" === v.type(r)) v.merge(m, r.nodeType ? [r] : r);
                else if (ie.test(r)) {
                    for (a = a || u.appendChild(t.createElement("div")), s = (Q.exec(r) || ["", ""])[1].toLowerCase(), l = ee[s] || ee._default, a.innerHTML = l[1] + v.htmlPrefilter(r) + l[2], c = l[0]; c--;) a = a.lastChild;
                    v.merge(m, a.childNodes),
                    (a = u.firstChild).textContent = ""
                } else m.push(t.createTextNode(r));
                for (u.textContent = "", f = 0; r = m[f++];) if (i && v.inArray(r, i) > -1) o && o.push(r);
                else if (d = v.contains(r.ownerDocument, r), a = te(u.appendChild(r), "script"), d && ne(a), n) for (c = 0; r = a[c++];) Z.test(r.type || "") && n.push(r);
                return u
            } !
            function() {
                var e = s.createDocumentFragment().appendChild(s.createElement("div")),
                t = s.createElement("input");
                t.setAttribute("type", "radio"),
                t.setAttribute("checked", "checked"),
                t.setAttribute("name", "t"),
                e.appendChild(t),
                h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
                e.innerHTML = "<textarea>x</textarea>",
                h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
            } ();
            var re = /^key/,
            ae = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            se = /^([^.]*)(?:\.(.+)|)/;
            function le() {
                return ! 0
            }
            function de() {
                return ! 1
            }
            function ce() {
                try {
                    return s.activeElement
                } catch(e) {}
            }
            function ue(e, t, n, i, o, r) {
                var a, s;
                if ("object" == typeof t) {
                    for (s in "string" != typeof n && (i = i || n, n = void 0), t) ue(e, s, n, i, t[s], r);
                    return e
                }
                if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = de;
                else if (!o) return e;
                return 1 === r && (a = o, (o = function(e) {
                    return v().off(e),
                    a.apply(this, arguments)
                }).guid = a.guid || (a.guid = v.guid++)),
                e.each(function() {
                    v.event.add(this, t, o, i, n)
                })
            }
            v.event = {
                global: {},
                add: function(e, t, n, i, o) {
                    var r, a, s, l, d, c, u, m, f, p, h, g = q.get(e);
                    if (g) for (n.handler && (n = (r = n).handler, o = r.selector), n.guid || (n.guid = v.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
                        return void 0 !== v && v.event.triggered !== t.type ? v.event.dispatch.apply(e, arguments) : void 0
                    }), d = (t = (t || "").match(O) || [""]).length; d--;) f = h = (s = se.exec(t[d]) || [])[1],
                    p = (s[2] || "").split(".").sort(),
                    f && (u = v.event.special[f] || {},
                    f = (o ? u.delegateType: u.bindType) || f, u = v.event.special[f] || {},
                    c = v.extend({
                        type: f,
                        origType: h,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && v.expr.match.needsContext.test(o),
                        namespace: p.join(".")
                    },
                    r), (m = l[f]) || ((m = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(f, a)), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? m.splice(m.delegateCount++, 0, c) : m.push(c), v.event.global[f] = !0)
                },
                remove: function(e, t, n, i, o) {
                    var r, a, s, l, d, c, u, m, f, p, h, g = q.hasData(e) && q.get(e);
                    if (g && (l = g.events)) {
                        for (d = (t = (t || "").match(O) || [""]).length; d--;) if (f = h = (s = se.exec(t[d]) || [])[1], p = (s[2] || "").split(".").sort(), f) {
                            for (u = v.event.special[f] || {},
                            m = l[f = (i ? u.delegateType: u.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = m.length; r--;) c = m[r],
                            !o && h !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (m.splice(r, 1), c.selector && m.delegateCount--, u.remove && u.remove.call(e, c));
                            a && !m.length && (u.teardown && !1 !== u.teardown.call(e, p, g.handle) || v.removeEvent(e, f, g.handle), delete l[f])
                        } else for (f in l) v.event.remove(e, f + t[d], n, i, !0);
                        v.isEmptyObject(l) && q.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    e = v.event.fix(e);
                    var t, n, i, o, r, a = [],
                    s = l.call(arguments),
                    d = (q.get(this, "events") || {})[e.type] || [],
                    c = v.event.special[e.type] || {};
                    if (s[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                        for (a = v.event.handlers.call(this, e, d), t = 0; (o = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, void 0 !== (i = ((v.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, e),
                        e.result
                    }
                },
                handlers: function(e, t) {
                    var n, i, o, r, a = [],
                    s = t.delegateCount,
                    l = e.target;
                    if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [], n = 0; s > n; n++) void 0 === i[o = (r = t[n]).selector + " "] && (i[o] = r.needsContext ? v(o, this).index(l) > -1 : v.find(o, this, null, [l]).length),
                        i[o] && i.push(r);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
                    return s < t.length && a.push({
                        elem: this,
                        handlers: t.slice(s)
                    }),
                    a
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                        e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, t) {
                        var n, i, o, r = t.button;
                        return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || s).documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)),
                        e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                        e
                    }
                },
                fix: function(e) {
                    if (e[v.expando]) return e;
                    var t, n, i, o = e.type,
                    r = e,
                    a = this.fixHooks[o];
                    for (a || (this.fixHooks[o] = a = ae.test(o) ? this.mouseHooks: re.test(o) ? this.keyHooks: {}), i = a.props ? this.props.concat(a.props) : this.props, e = new v.Event(r), t = i.length; t--;) e[n = i[t]] = r[n];
                    return e.target || (e.target = s),
                    3 === e.target.nodeType && (e.target = e.target.parentNode),
                    a.filter ? a.filter(e, r) : e
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            return this !== ce() && this.focus ? (this.focus(), !1) : void 0
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === ce() && this.blur ? (this.blur(), !1) : void 0
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            return "checkbox" === this.type && this.click && v.nodeName(this, "input") ? (this.click(), !1) : void 0
                        },
                        _default: function(e) {
                            return v.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            },
            v.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            },
            v.Event = function(e, t) {
                return this instanceof v.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? le: de) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), void(this[v.expando] = !0)) : new v.Event(e, t)
            },
            v.Event.prototype = {
                constructor: v.Event,
                isDefaultPrevented: de,
                isPropagationStopped: de,
                isImmediatePropagationStopped: de,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = le,
                    e && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = le,
                    e && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = le,
                    e && e.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            v.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            },
            function(e, t) {
                v.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, i = e.relatedTarget,
                        o = e.handleObj;
                        return i && (i === this || v.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
                        n
                    }
                }
            }),
            v.fn.extend({
                on: function(e, t, n, i) {
                    return ue(this, e, t, n, i)
                },
                one: function(e, t, n, i) {
                    return ue(this, e, t, n, i, 1)
                },
                off: function(e, t, n) {
                    var i, o;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj,
                    v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
                    this;
                    if ("object" == typeof e) {
                        for (o in e) this.off(o, t, e[o]);
                        return this
                    }
                    return ! 1 !== t && "function" != typeof t || (n = t, t = void 0),
                    !1 === n && (n = de),
                    this.each(function() {
                        v.event.remove(this, e, n, t)
                    })
                }
            });
            var me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            fe = /<script|<style|<link/i,
            pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            he = /^true\/(.*)/,
            ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function ve(e, t) {
                return v.nodeName(e, "table") && v.nodeName(11 !== t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }
            function be(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                e
            }
            function ye(e) {
                var t = he.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"),
                e
            }
            function Ce(e, t) {
                var n, i, o, r, a, s, l, d;
                if (1 === t.nodeType) {
                    if (q.hasData(e) && (r = q.access(e), a = q.set(t, r), d = r.events)) for (o in delete a.handle, a.events = {},
                    d) for (n = 0, i = d[o].length; i > n; n++) v.event.add(t, o, d[o][n]);
                    j.hasData(e) && (s = j.access(e), l = v.extend({},
                    s), j.set(t, l))
                }
            }
            function xe(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && J.test(e.type) ? t.checked = e.checked: "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
            function we(e, t, n, i) {
                t = d.apply([], t);
                var o, r, a, s, l, c, u = 0,
                m = e.length,
                f = m - 1,
                p = t[0],
                g = v.isFunction(p);
                if (g || m > 1 && "string" == typeof p && !h.checkClone && pe.test(p)) return e.each(function(o) {
                    var r = e.eq(o);
                    g && (t[0] = p.call(this, o, r.html())),
                    we(r, t, n, i)
                });
                if (m && (r = (o = oe(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
                    for (s = (a = v.map(te(o, "script"), be)).length; m > u; u++) l = o,
                    u !== f && (l = v.clone(l, !0, !0), s && v.merge(a, te(l, "script"))),
                    n.call(e[u], l, u);
                    if (s) for (c = a[a.length - 1].ownerDocument, v.map(a, ye), u = 0; s > u; u++) l = a[u],
                    Z.test(l.type || "") && !q.access(l, "globalEval") && v.contains(c, l) && (l.src ? v._evalUrl && v._evalUrl(l.src) : v.globalEval(l.textContent.replace(ge, "")))
                }
                return e
            }
            function Ne(e, t, n) {
                for (var i, o = t ? v.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || v.cleanData(te(i)),
                i.parentNode && (n && v.contains(i.ownerDocument, i) && ne(te(i, "script")), i.parentNode.removeChild(i));
                return e
            }
            v.extend({
                htmlPrefilter: function(e) {
                    return e.replace(me, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var i, o, r, a, s = e.cloneNode(!0),
                    l = v.contains(e.ownerDocument, e);
                    if (! (h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || v.isXMLDoc(e))) for (a = te(s), i = 0, o = (r = te(e)).length; o > i; i++) xe(r[i], a[i]);
                    if (t) if (n) for (r = r || te(e), a = a || te(s), i = 0, o = r.length; o > i; i++) Ce(r[i], a[i]);
                    else Ce(e, s);
                    return (a = te(s, "script")).length > 0 && ne(a, !l && te(e, "script")),
                    s
                },
                cleanData: function(e) {
                    for (var t, n, i, o = v.event.special,
                    r = 0; void 0 !== (n = e[r]); r++) if (H(n)) {
                        if (t = n[q.expando]) {
                            if (t.events) for (i in t.events) o[i] ? v.event.remove(n, i) : v.removeEvent(n, i, t.handle);
                            n[q.expando] = void 0
                        }
                        n[j.expando] && (n[j.expando] = void 0)
                    }
                }
            }),
            v.fn.extend({
                domManip: we,
                detach: function(e) {
                    return Ne(this, e, !0)
                },
                remove: function(e) {
                    return Ne(this, e)
                },
                text: function(e) {
                    return M(this,
                    function(e) {
                        return void 0 === e ? v.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    },
                    null, e, arguments.length)
                },
                append: function() {
                    return we(this, arguments,
                    function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ve(this, e).appendChild(e)
                    })
                },
                prepend: function() {
                    return we(this, arguments,
                    function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = ve(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return we(this, arguments,
                    function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return we(this, arguments,
                    function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (v.cleanData(te(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e,
                    t = null == t ? e: t,
                    this.map(function() {
                        return v.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return M(this,
                    function(e) {
                        var t = this[0] || {},
                        n = 0,
                        i = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !fe.test(e) && !ee[(Q.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = v.htmlPrefilter(e);
                            try {
                                for (; i > n; n++) 1 === (t = this[n] || {}).nodeType && (v.cleanData(te(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch(e) {}
                        }
                        t && this.empty().append(e)
                    },
                    null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return we(this, arguments,
                    function(t) {
                        var n = this.parentNode;
                        v.inArray(this, e) < 0 && (v.cleanData(te(this)), n && n.replaceChild(t, this))
                    },
                    e)
                }
            }),
            v.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            },
            function(e, t) {
                v.fn[e] = function(e) {
                    for (var n, i = [], o = v(e), r = o.length - 1, a = 0; r >= a; a++) n = a === r ? this: this.clone(!0),
                    v(o[a])[t](n),
                    c.apply(i, n.get());
                    return this.pushStack(i)
                }
            });
            var Ee, Te = {
                HTML: "block",
                BODY: "block"
            };
            function Ue(e, t) {
                var n = v(t.createElement(e)).appendTo(t.body),
                i = v.css(n[0], "display");
                return n.detach(),
                i
            }
            function Se(e) {
                var t = s,
                n = Te[e];
                return n || ("none" !== (n = Ue(e, t)) && n || ((t = (Ee = (Ee || v("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = Ue(e, t), Ee.detach()), Te[e] = n),
                n
            }
            var ke = /^margin/,
            _e = new RegExp("^(" + V + ")(?!px)[a-z%]+$", "i"),
            Be = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = o),
                t.getComputedStyle(e)
            },
            Ae = function(e, t, n, i) {
                var o, r, a = {};
                for (r in t) a[r] = e.style[r],
                e.style[r] = t[r];
                for (r in o = n.apply(e, i || []), t) e.style[r] = a[r];
                return o
            },
            Ie = s.documentElement;
            function Le(e, t, n) {
                var i, o, r, a, s = e.style;
                return "" !== (a = (n = n || Be(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== a || v.contains(e.ownerDocument, e) || (a = v.style(e, t)),
                n && !h.pixelMarginRight() && _e.test(a) && ke.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r),
                void 0 !== a ? a + "": a
            }
            function Re(e, t) {
                return {
                    get: function() {
                        return e() ? void delete this.get: (this.get = t).apply(this, arguments)
                    }
                }
            } !
            function() {
                var e, t, n, i, r = s.createElement("div"),
                a = s.createElement("div");
                if (a.style) {
                    function l() {
                        a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                        a.innerHTML = "",
                        Ie.appendChild(r);
                        var s = o.getComputedStyle(a);
                        e = "1%" !== s.top,
                        i = "2px" === s.marginLeft,
                        t = "4px" === s.width,
                        a.style.marginRight = "50%",
                        n = "4px" === s.marginRight,
                        Ie.removeChild(r)
                    }
                    a.style.backgroundClip = "content-box",
                    a.cloneNode(!0).style.backgroundClip = "",
                    h.clearCloneStyle = "content-box" === a.style.backgroundClip,
                    r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
                    r.appendChild(a),
                    v.extend(h, {
                        pixelPosition: function() {
                            return l(),
                            e
                        },
                        boxSizingReliable: function() {
                            return null == t && l(),
                            t
                        },
                        pixelMarginRight: function() {
                            return null == t && l(),
                            n
                        },
                        reliableMarginLeft: function() {
                            return null == t && l(),
                            i
                        },
                        reliableMarginRight: function() {
                            var e, t = a.appendChild(s.createElement("div"));
                            return t.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                            t.style.marginRight = t.style.width = "0",
                            a.style.width = "1px",
                            Ie.appendChild(r),
                            e = !parseFloat(o.getComputedStyle(t).marginRight),
                            Ie.removeChild(r),
                            a.removeChild(t),
                            e
                        }
                    })
                }
            } ();
            var De = /^(none|table(?!-c[ea]).+)/,
            Oe = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Pe = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Me = ["Webkit", "O", "Moz", "ms"],
            He = s.createElement("div").style;
            function Fe(e) {
                if (e in He) return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = Me.length; n--;) if ((e = Me[n] + t) in He) return e
            }
            function qe(e, t, n) {
                var i = X.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
            }
            function je(e, t, n, i, o) {
                for (var r = n === (i ? "border": "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2)"margin" === n && (a += v.css(e, n + Y[r], !0, o)),
                i ? ("content" === n && (a -= v.css(e, "padding" + Y[r], !0, o)), "margin" !== n && (a -= v.css(e, "border" + Y[r] + "Width", !0, o))) : (a += v.css(e, "padding" + Y[r], !0, o), "padding" !== n && (a += v.css(e, "border" + Y[r] + "Width", !0, o)));
                return a
            }
            function $e(e, t, n) {
                var i = !0,
                r = "width" === t ? e.offsetWidth: e.offsetHeight,
                a = Be(e),
                l = "border-box" === v.css(e, "boxSizing", !1, a);
                if (s.msFullscreenElement && o.top !== o && e.getClientRects().length && (r = Math.round(100 * e.getBoundingClientRect()[t])), 0 >= r || null == r) {
                    if ((0 > (r = Le(e, t, a)) || null == r) && (r = e.style[t]), _e.test(r)) return r;
                    i = l && (h.boxSizingReliable() || r === e.style[t]),
                    r = parseFloat(r) || 0
                }
                return r + je(e, t, n || (l ? "border": "content"), i, a) + "px"
            }
            function ze(e, t) {
                for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++)(i = e[a]).style && (r[a] = q.get(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && K(i) && (r[a] = q.access(i, "olddisplay", Se(i.nodeName)))) : (o = K(i), "none" === n && o || q.set(i, "olddisplay", o ? n: v.css(i, "display"))));
                for (a = 0; s > a; a++)(i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "": "none"));
                return e
            }
            function We(e, t, n, i, o) {
                return new We.prototype.init(e, t, n, i, o)
            }
            v.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Le(e, "opacity");
                                return "" === n ? "1": n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: "cssFloat"
                },
                style: function(e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, r, a, s = v.camelCase(t),
                        l = e.style;
                        return t = v.cssProps[s] || (v.cssProps[s] = Fe(s) || s),
                        a = v.cssHooks[t] || v.cssHooks[s],
                        void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o: l[t] : ("string" === (r = typeof n) && (o = X.exec(n)) && o[1] && (n = G(e, t, o), r = "number"), void(null != n && n == n && ("number" === r && (n += o && o[3] || (v.cssNumber[s] ? "": "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n))))
                    }
                },
                css: function(e, t, n, i) {
                    var o, r, a, s = v.camelCase(t);
                    return t = v.cssProps[s] || (v.cssProps[s] = Fe(s) || s),
                    (a = v.cssHooks[t] || v.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)),
                    void 0 === o && (o = Le(e, t, i)),
                    "normal" === o && t in Pe && (o = Pe[t]),
                    "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
                }
            }),
            v.each(["height", "width"],
            function(e, t) {
                v.cssHooks[t] = {
                    get: function(e, n, i) {
                        return n ? De.test(v.css(e, "display")) && 0 === e.offsetWidth ? Ae(e, Oe,
                        function() {
                            return $e(e, t, i)
                        }) : $e(e, t, i) : void 0
                    },
                    set: function(e, n, i) {
                        var o, r = i && Be(e),
                        a = i && je(e, t, i, "border-box" === v.css(e, "boxSizing", !1, r), r);
                        return a && (o = X.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = v.css(e, t)),
                        qe(0, n, a)
                    }
                }
            }),
            v.cssHooks.marginLeft = Re(h.reliableMarginLeft,
            function(e, t) {
                return t ? (parseFloat(Le(e, "marginLeft")) || e.getBoundingClientRect().left - Ae(e, {
                    marginLeft: 0
                },
                function() {
                    return e.getBoundingClientRect().left
                })) + "px": void 0
            }),
            v.cssHooks.marginRight = Re(h.reliableMarginRight,
            function(e, t) {
                return t ? Ae(e, {
                    display: "inline-block"
                },
                Le, [e, "marginRight"]) : void 0
            }),
            v.each({
                margin: "",
                padding: "",
                border: "Width"
            },
            function(e, t) {
                v.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var i = 0,
                        o = {},
                        r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + Y[i] + t] = r[i] || r[i - 2] || r[0];
                        return o
                    }
                },
                ke.test(e) || (v.cssHooks[e + t].set = qe)
            }),
            v.fn.extend({
                css: function(e, t) {
                    return M(this,
                    function(e, t, n) {
                        var i, o, r = {},
                        a = 0;
                        if (v.isArray(t)) {
                            for (i = Be(e), o = t.length; o > a; a++) r[t[a]] = v.css(e, t[a], !1, i);
                            return r
                        }
                        return void 0 !== n ? v.style(e, t, n) : v.css(e, t)
                    },
                    e, t, arguments.length > 1)
                },
                show: function() {
                    return ze(this, !0)
                },
                hide: function() {
                    return ze(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        K(this) ? v(this).show() : v(this).hide()
                    })
                }
            }),
            v.Tween = We,
            We.prototype = {
                constructor: We,
                init: function(e, t, n, i, o, r) {
                    this.elem = e,
                    this.prop = n,
                    this.easing = o || v.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = i,
                    this.unit = r || (v.cssNumber[n] ? "": "px")
                },
                cur: function() {
                    var e = We.propHooks[this.prop];
                    return e && e.get ? e.get(this) : We.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = We.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : We.propHooks._default.set(this),
                    this
                }
            },
            We.prototype.init.prototype = We.prototype,
            We.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = v.css(e.elem, e.prop, "")) && "auto" !== t ? t: 0
                    },
                    set: function(e) {
                        v.fx.step[e.prop] ? v.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[v.cssProps[e.prop]] && !v.cssHooks[e.prop] ? e.elem[e.prop] = e.now: v.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            },
            We.propHooks.scrollTop = We.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            },
            v.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return.5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            },
            v.fx = We.prototype.init,
            v.fx.step = {};
            var Ve, Xe, Ye = /^(?:toggle|show|hide)$/,
            Ke = /queueHooks$/;
            function Ge() {
                return o.setTimeout(function() {
                    Ve = void 0
                }),
                Ve = v.now()
            }
            function Je(e, t) {
                var n, i = 0,
                o = {
                    height: e
                };
                for (t = t ? 1 : 0; 4 > i; i += 2 - t) o["margin" + (n = Y[i])] = o["padding" + n] = e;
                return t && (o.opacity = o.width = e),
                o
            }
            function Qe(e, t, n) {
                for (var i, o = (Ze.tweeners[t] || []).concat(Ze.tweeners["*"]), r = 0, a = o.length; a > r; r++) if (i = o[r].call(n, t, e)) return i
            }
            function Ze(e, t, n) {
                var i, o, r = 0,
                a = Ze.prefilters.length,
                s = v.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return ! 1;
                    for (var t = Ve || Ge(), n = Math.max(0, d.startTime + d.duration - t), i = 1 - (n / d.duration || 0), r = 0, a = d.tweens.length; a > r; r++) d.tweens[r].run(i);
                    return s.notifyWith(e, [d, i, n]),
                    1 > i && a ? n: (s.resolveWith(e, [d]), !1)
                },
                d = s.promise({
                    elem: e,
                    props: v.extend({},
                    t),
                    opts: v.extend(!0, {
                        specialEasing: {},
                        easing: v.easing._default
                    },
                    n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Ve || Ge(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = v.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
                        return d.tweens.push(i),
                        i
                    },
                    stop: function(t) {
                        var n = 0,
                        i = t ? d.tweens.length: 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) d.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [d, 1, 0]), s.resolveWith(e, [d, t])) : s.rejectWith(e, [d, t]),
                        this
                    }
                }),
                c = d.props;
                for (function(e, t) {
                    var n, i, o, r, a;
                    for (n in e) if (o = t[i = v.camelCase(n)], r = e[n], v.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = v.cssHooks[i]) && "expand" in a) for (n in r = a.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                    else t[i] = o
                } (c, d.opts.specialEasing); a > r; r++) if (i = Ze.prefilters[r].call(d, e, c, d.opts)) return v.isFunction(i.stop) && (v._queueHooks(d.elem, d.opts.queue).stop = v.proxy(i.stop, i)),
                i;
                return v.map(c, Qe, d),
                v.isFunction(d.opts.start) && d.opts.start.call(e, d),
                v.fx.timer(v.extend(l, {
                    elem: e,
                    anim: d,
                    queue: d.opts.queue
                })),
                d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
            }
            v.Animation = v.extend(Ze, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return G(n.elem, e, X.exec(t), n),
                        n
                    }]
                },
                tweener: function(e, t) {
                    v.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(O);
                    for (var n, i = 0,
                    o = e.length; o > i; i++) n = e[i],
                    Ze.tweeners[n] = Ze.tweeners[n] || [],
                    Ze.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var i, o, r, a, s, l, d, c = this,
                    u = {},
                    m = e.style,
                    f = e.nodeType && K(e),
                    p = q.get(e, "fxshow");
                    for (i in n.queue || (null == (s = v._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                        s.unqueued || l()
                    }), s.unqueued++, c.always(function() {
                        c.always(function() {
                            s.unqueued--,
                            v.queue(e, "fx").length || s.empty.fire()
                        })
                    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [m.overflow, m.overflowX, m.overflowY], "inline" === ("none" === (d = v.css(e, "display")) ? q.get(e, "olddisplay") || Se(e.nodeName) : d) && "none" === v.css(e, "float") && (m.display = "inline-block")), n.overflow && (m.overflow = "hidden", c.always(function() {
                        m.overflow = n.overflow[0],
                        m.overflowX = n.overflow[1],
                        m.overflowY = n.overflow[2]
                    })), t) if (o = t[i], Ye.exec(o)) {
                        if (delete t[i], r = r || "toggle" === o, o === (f ? "hide": "show")) {
                            if ("show" !== o || !p || void 0 === p[i]) continue;
                            f = !0
                        }
                        u[i] = p && p[i] || v.style(e, i)
                    } else d = void 0;
                    if (v.isEmptyObject(u))"inline" === ("none" === d ? Se(e.nodeName) : d) && (m.display = d);
                    else for (i in p ? "hidden" in p && (f = p.hidden) : p = q.access(e, "fxshow", {}), r && (p.hidden = !f), f ? v(e).show() : c.done(function() {
                        v(e).hide()
                    }), c.done(function() {
                        var t;
                        for (t in q.remove(e, "fxshow"), u) v.style(e, t, u[t])
                    }), u) a = Qe(f ? p[i] : 0, i, c),
                    i in p || (p[i] = a.start, f && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
                }],
                prefilter: function(e, t) {
                    t ? Ze.prefilters.unshift(e) : Ze.prefilters.push(e)
                }
            }),
            v.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? v.extend({},
                e) : {
                    complete: n || !n && t || v.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !v.isFunction(t) && t
                };
                return i.duration = v.fx.off ? 0 : "number" == typeof i.duration ? i.duration: i.duration in v.fx.speeds ? v.fx.speeds[i.duration] : v.fx.speeds._default,
                null != i.queue && !0 !== i.queue || (i.queue = "fx"),
                i.old = i.complete,
                i.complete = function() {
                    v.isFunction(i.old) && i.old.call(this),
                    i.queue && v.dequeue(this, i.queue)
                },
                i
            },
            v.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(K).css("opacity", 0).show().end().animate({
                        opacity: t
                    },
                    e, n, i)
                },
                animate: function(e, t, n, i) {
                    var o = v.isEmptyObject(e),
                    r = v.speed(t, n, i),
                    a = function() {
                        var t = Ze(this, v.extend({},
                        e), r); (o || q.get(this, "finish")) && t.stop(!0)
                    };
                    return a.finish = a,
                    o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop,
                        t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0),
                    t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function() {
                        var t = !0,
                        o = null != e && e + "queueHooks",
                        r = v.timers,
                        a = q.get(this);
                        if (o) a[o] && a[o].stop && i(a[o]);
                        else for (o in a) a[o] && a[o].stop && Ke.test(o) && i(a[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1)); ! t && n || v.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return ! 1 !== e && (e = e || "fx"),
                    this.each(function() {
                        var t, n = q.get(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        r = v.timers,
                        a = i ? i.length: 0;
                        for (n.finish = !0, v.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }),
            v.each(["toggle", "show", "hide"],
            function(e, t) {
                var n = v.fn[t];
                v.fn[t] = function(e, i, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Je(t, !0), e, i, o)
                }
            }),
            v.each({
                slideDown: Je("show"),
                slideUp: Je("hide"),
                slideToggle: Je("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            },
            function(e, t) {
                v.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }),
            v.timers = [],
            v.fx.tick = function() {
                var e, t = 0,
                n = v.timers;
                for (Ve = v.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || v.fx.stop(),
                Ve = void 0
            },
            v.fx.timer = function(e) {
                v.timers.push(e),
                e() ? v.fx.start() : v.timers.pop()
            },
            v.fx.interval = 13,
            v.fx.start = function() {
                Xe || (Xe = o.setInterval(v.fx.tick, v.fx.interval))
            },
            v.fx.stop = function() {
                o.clearInterval(Xe),
                Xe = null
            },
            v.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            v.fn.delay = function(e, t) {
                return e = v.fx && v.fx.speeds[e] || e,
                t = t || "fx",
                this.queue(t,
                function(t, n) {
                    var i = o.setTimeout(t, e);
                    n.stop = function() {
                        o.clearTimeout(i)
                    }
                })
            },
            function() {
                var e = s.createElement("input"),
                t = s.createElement("select"),
                n = t.appendChild(s.createElement("option"));
                e.type = "checkbox",
                h.checkOn = "" !== e.value,
                h.optSelected = n.selected,
                t.disabled = !0,
                h.optDisabled = !n.disabled,
                (e = s.createElement("input")).value = "t",
                e.type = "radio",
                h.radioValue = "t" === e.value
            } ();
            var et, tt = v.expr.attrHandle;
            v.fn.extend({
                attr: function(e, t) {
                    return M(this, v.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        v.removeAttr(this, e)
                    })
                }
            }),
            v.extend({
                attr: function(e, t, n) {
                    var i, o, r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? v.prop(e, t, n) : (1 === r && v.isXMLDoc(e) || (t = t.toLowerCase(), o = v.attrHooks[t] || (v.expr.match.bool.test(t) ? et: void 0)), void 0 !== n ? null === n ? void v.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i: (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i: null == (i = v.find.attr(e, t)) ? void 0 : i)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!h.radioValue && "radio" === t && v.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, i, o = 0,
                    r = t && t.match(O);
                    if (r && 1 === e.nodeType) for (; n = r[o++];) i = v.propFix[n] || n,
                    v.expr.match.bool.test(n) && (e[i] = !1),
                    e.removeAttribute(n)
                }
            }),
            et = {
                set: function(e, t, n) {
                    return ! 1 === t ? v.removeAttr(e, n) : e.setAttribute(n, n),
                    n
                }
            },
            v.each(v.expr.match.bool.source.match(/\w+/g),
            function(e, t) {
                var n = tt[t] || v.find.attr;
                tt[t] = function(e, t, i) {
                    var o, r;
                    return i || (r = tt[t], tt[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, tt[t] = r),
                    o
                }
            });
            var nt = /^(?:input|select|textarea|button)$/i,
            it = /^(?:a|area)$/i;
            v.fn.extend({
                prop: function(e, t) {
                    return M(this, v.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[v.propFix[e] || e]
                    })
                }
            }),
            v.extend({
                prop: function(e, t, n) {
                    var i, o, r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r) return 1 === r && v.isXMLDoc(e) || (t = v.propFix[t] || t, o = v.propHooks[t]),
                    void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i: e[t] = n: o && "get" in o && null !== (i = o.get(e, t)) ? i: e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = v.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : nt.test(e.nodeName) || it.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }),
            h.optSelected || (v.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex,
                    null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }),
            v.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
            function() {
                v.propFix[this.toLowerCase()] = this
            });
            var ot = /[\t\r\n\f]/g;
            function rt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            v.fn.extend({
                addClass: function(e) {
                    var t, n, i, o, r, a, s, l = 0;
                    if (v.isFunction(e)) return this.each(function(t) {
                        v(this).addClass(e.call(this, t, rt(this)))
                    });
                    if ("string" == typeof e && e) for (t = e.match(O) || []; n = this[l++];) if (o = rt(n), i = 1 === n.nodeType && (" " + o + " ").replace(ot, " ")) {
                        for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (s = v.trim(i)) && n.setAttribute("class", s)
                    }
                    return this
                },
                removeClass: function(e) {
                    var t, n, i, o, r, a, s, l = 0;
                    if (v.isFunction(e)) return this.each(function(t) {
                        v(this).removeClass(e.call(this, t, rt(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof e && e) for (t = e.match(O) || []; n = this[l++];) if (o = rt(n), i = 1 === n.nodeType && (" " + o + " ").replace(ot, " ")) {
                        for (a = 0; r = t[a++];) for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                        o !== (s = v.trim(i)) && n.setAttribute("class", s)
                    }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : v.isFunction(e) ? this.each(function(n) {
                        v(this).toggleClass(e.call(this, n, rt(this), t), t)
                    }) : this.each(function() {
                        var t, i, o, r;
                        if ("string" === n) for (i = 0, o = v(this), r = e.match(O) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else void 0 !== e && "boolean" !== n || ((t = rt(this)) && q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "": q.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, n, i = 0;
                    for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + rt(n) + " ").replace(ot, " ").indexOf(t) > -1) return ! 0;
                    return ! 1
                }
            });
            var at = /\r/g,
            st = /[\x20\t\r\n\f]+/g;
            v.fn.extend({
                val: function(e) {
                    var t, n, i, o = this[0];
                    return arguments.length ? (i = v.isFunction(e), this.each(function(n) {
                        var o;
                        1 === this.nodeType && (null == (o = i ? e.call(this, n, v(this).val()) : e) ? o = "": "number" == typeof o ? o += "": v.isArray(o) && (o = v.map(o,
                        function(e) {
                            return null == e ? "": e + ""
                        })), (t = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    })) : o ? (t = v.valHooks[o.type] || v.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n: "string" == typeof(n = o.value) ? n.replace(at, "") : null == n ? "": n: void 0
                }
            }),
            v.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = v.find.attr(e, "value");
                            return null != t ? t: v.trim(v.text(e)).replace(st, " ")
                        }
                    },
                    select: {
                        get: function(e) {
                            for (var t, n, i = e.options,
                            o = e.selectedIndex,
                            r = "select-one" === e.type || 0 > o,
                            a = r ? null: [], s = r ? o + 1 : i.length, l = 0 > o ? s: r ? o: 0; s > l; l++) if (((n = i[l]).selected || l === o) && (h.optDisabled ? !n.disabled: null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
                                if (t = v(n).val(), r) return t;
                                a.push(t)
                            }
                            return a
                        },
                        set: function(e, t) {
                            for (var n, i, o = e.options,
                            r = v.makeArray(t), a = o.length; a--;)((i = o[a]).selected = v.inArray(v.valHooks.option.get(i), r) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1),
                            r
                        }
                    }
                }
            }),
            v.each(["radio", "checkbox"],
            function() {
                v.valHooks[this] = {
                    set: function(e, t) {
                        return v.isArray(t) ? e.checked = v.inArray(v(e).val(), t) > -1 : void 0
                    }
                },
                h.checkOn || (v.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on": e.value
                })
            });
            var lt = /^(?:focusinfocus|focusoutblur)$/;
            v.extend(v.event, {
                trigger: function(e, t, n, i) {
                    var r, a, l, d, c, u, m, f = [n || s],
                    h = p.call(e, "type") ? e.type: e,
                    g = p.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (a = l = n = n || s, 3 !== n.nodeType && 8 !== n.nodeType && !lt.test(h + v.event.triggered) && (h.indexOf(".") > -1 && (h = (g = h.split(".")).shift(), g.sort()), c = h.indexOf(":") < 0 && "on" + h, (e = e[v.expando] ? e: new v.Event(h, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : v.makeArray(t, [e]), m = v.event.special[h] || {},
                    i || !m.trigger || !1 !== m.trigger.apply(n, t))) {
                        if (!i && !m.noBubble && !v.isWindow(n)) {
                            for (d = m.delegateType || h, lt.test(d + h) || (a = a.parentNode); a; a = a.parentNode) f.push(a),
                            l = a;
                            l === (n.ownerDocument || s) && f.push(l.defaultView || l.parentWindow || o)
                        }
                        for (r = 0; (a = f[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? d: m.bindType || h,
                        (u = (q.get(a, "events") || {})[e.type] && q.get(a, "handle")) && u.apply(a, t),
                        (u = c && a[c]) && u.apply && H(a) && (e.result = u.apply(a, t), !1 === e.result && e.preventDefault());
                        return e.type = h,
                        i || e.isDefaultPrevented() || m._default && !1 !== m._default.apply(f.pop(), t) || !H(n) || c && v.isFunction(n[h]) && !v.isWindow(n) && ((l = n[c]) && (n[c] = null), v.event.triggered = h, n[h](), v.event.triggered = void 0, l && (n[c] = l)),
                        e.result
                    }
                },
                simulate: function(e, t, n) {
                    var i = v.extend(new v.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    v.event.trigger(i, null, t),
                    i.isDefaultPrevented() && n.preventDefault()
                }
            }),
            v.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        v.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    return n ? v.event.trigger(e, t, n, !0) : void 0
                }
            }),
            v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
            function(e, t) {
                v.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }),
            v.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }),
            h.focusin = "onfocusin" in o,
            h.focusin || v.each({
                focus: "focusin",
                blur: "focusout"
            },
            function(e, t) {
                var n = function(e) {
                    v.event.simulate(t, e.target, v.event.fix(e))
                };
                v.event.special[t] = {
                    setup: function() {
                        var i = this.ownerDocument || this,
                        o = q.access(i, t);
                        o || i.addEventListener(e, n, !0),
                        q.access(i, t, (o || 0) + 1)
                    },
                    teardown: function() {
                        var i = this.ownerDocument || this,
                        o = q.access(i, t) - 1;
                        o ? q.access(i, t, o) : (i.removeEventListener(e, n, !0), q.remove(i, t))
                    }
                }
            });
            var dt = o.location,
            ct = v.now(),
            ut = /\?/;
            v.parseJSON = function(e) {
                return JSON.parse(e + "")
            },
            v.parseXML = function(e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new o.DOMParser).parseFromString(e, "text/xml")
                } catch(e) {
                    t = void 0
                }
                return t && !t.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + e),
                t
            };
            var mt = /#.*$/,
            ft = /([?&])_=[^&]*/,
            pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ht = /^(?:GET|HEAD)$/,
            gt = /^\/\//,
            vt = {},
            bt = {},
            yt = "*/".concat("*"),
            Ct = s.createElement("a");
            function xt(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var i, o = 0,
                    r = t.toLowerCase().match(O) || [];
                    if (v.isFunction(n)) for (; i = r[o++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                }
            }
            function wt(e, t, n, i) {
                var o = {},
                r = e === bt;
                function a(s) {
                    var l;
                    return o[s] = !0,
                    v.each(e[s] || [],
                    function(e, s) {
                        var d = s(t, n, i);
                        return "string" != typeof d || r || o[d] ? r ? !(l = d) : void 0 : (t.dataTypes.unshift(d), a(d), !1)
                    }),
                    l
                }
                return a(t.dataTypes[0]) || !o["*"] && a("*")
            }
            function Nt(e, t) {
                var n, i, o = v.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((o[n] ? e: i || (i = {}))[n] = t[n]);
                return i && v.extend(!0, e, i),
                e
            }
            Ct.href = dt.href,
            v.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: dt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(dt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": yt,
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
                        "text json": v.parseJSON,
                        "text xml": v.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Nt(Nt(e, v.ajaxSettings), t) : Nt(v.ajaxSettings, e)
                },
                ajaxPrefilter: xt(vt),
                ajaxTransport: xt(bt),
                ajax: function(e, t) {
                    "object" == typeof e && (t = e, e = void 0),
                    t = t || {};
                    var n, i, r, a, l, d, c, u, m = v.ajaxSetup({},
                    t),
                    f = m.context || m,
                    p = m.context && (f.nodeType || f.jquery) ? v(f) : v.event,
                    h = v.Deferred(),
                    g = v.Callbacks("once memory"),
                    b = m.statusCode || {},
                    y = {},
                    C = {},
                    x = 0,
                    w = "canceled",
                    N = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === x) {
                                if (!a) for (a = {}; t = pt.exec(r);) a[t[1].toLowerCase()] = t[2];
                                t = a[e.toLowerCase()]
                            }
                            return null == t ? null: t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? r: null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return x || (e = C[n] = C[n] || e, y[e] = t),
                            this
                        },
                        overrideMimeType: function(e) {
                            return x || (m.mimeType = e),
                            this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e) if (2 > x) for (t in e) b[t] = [b[t], e[t]];
                            else N.always(e[N.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return n && n.abort(t),
                            E(0, t),
                            this
                        }
                    };
                    if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, m.url = ((e || m.url || dt.href) + "").replace(mt, "").replace(gt, dt.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = v.trim(m.dataType || "*").toLowerCase().match(O) || [""], null == m.crossDomain) {
                        d = s.createElement("a");
                        try {
                            d.href = m.url,
                            d.href = d.href,
                            m.crossDomain = Ct.protocol + "//" + Ct.host != d.protocol + "//" + d.host
                        } catch(e) {
                            m.crossDomain = !0
                        }
                    }
                    if (m.data && m.processData && "string" != typeof m.data && (m.data = v.param(m.data, m.traditional)), wt(vt, m, t, N), 2 === x) return N;
                    for (u in (c = v.event && m.global) && 0 == v.active++&&v.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !ht.test(m.type), i = m.url, m.hasContent || (m.data && (i = m.url += (ut.test(i) ? "&": "?") + m.data, delete m.data), !1 === m.cache && (m.url = ft.test(i) ? i.replace(ft, "$1_=" + ct++) : i + (ut.test(i) ? "&": "?") + "_=" + ct++)), m.ifModified && (v.lastModified[i] && N.setRequestHeader("If-Modified-Since", v.lastModified[i]), v.etag[i] && N.setRequestHeader("If-None-Match", v.etag[i])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && N.setRequestHeader("Content-Type", m.contentType), N.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + yt + "; q=0.01": "") : m.accepts["*"]), m.headers) N.setRequestHeader(u, m.headers[u]);
                    if (m.beforeSend && (!1 === m.beforeSend.call(f, N, m) || 2 === x)) return N.abort();
                    for (u in w = "abort", {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) N[u](m[u]);
                    if (n = wt(bt, m, t, N)) {
                        if (N.readyState = 1, c && p.trigger("ajaxSend", [N, m]), 2 === x) return N;
                        m.async && m.timeout > 0 && (l = o.setTimeout(function() {
                            N.abort("timeout")
                        },
                        m.timeout));
                        try {
                            x = 1,
                            n.send(y, E)
                        } catch(e) {
                            if (! (2 > x)) throw e;
                            E( - 1, e)
                        }
                    } else E( - 1, "No Transport");
                    function E(e, t, a, s) {
                        var d, u, y, C, w, E = t;
                        2 !== x && (x = 2, l && o.clearTimeout(l), n = void 0, r = s || "", N.readyState = e > 0 ? 4 : 0, d = e >= 200 && 300 > e || 304 === e, a && (C = function(e, t, n) {
                            for (var i, o, r, a, s = e.contents,
                            l = e.dataTypes;
                            "*" === l[0];) l.shift(),
                            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (i) for (o in s) if (s[o] && s[o].test(i)) {
                                l.unshift(o);
                                break
                            }
                            if (l[0] in n) r = l[0];
                            else {
                                for (o in n) {
                                    if (!l[0] || e.converters[o + " " + l[0]]) {
                                        r = o;
                                        break
                                    }
                                    a || (a = o)
                                }
                                r = r || a
                            }
                            return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
                        } (m, N, a)), C = function(e, t, n, i) {
                            var o, r, a, s, l, d = {},
                            c = e.dataTypes.slice();
                            if (c[1]) for (a in e.converters) d[a.toLowerCase()] = e.converters[a];
                            for (r = c.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift()) if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                                if (! (a = d[l + " " + r] || d["* " + r])) for (o in d) if ((s = o.split(" "))[1] === r && (a = d[l + " " + s[0]] || d["* " + s[0]])) { ! 0 === a ? a = d[o] : !0 !== d[o] && (r = s[0], c.unshift(s[1]));
                                    break
                                }
                                if (!0 !== a) if (a && e.throws) t = a(t);
                                else try {
                                    t = a(t)
                                } catch(e) {
                                    return {
                                        state: "parsererror",
                                        error: a ? e: "No conversion from " + l + " to " + r
                                    }
                                }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        } (m, C, N, d), d ? (m.ifModified && ((w = N.getResponseHeader("Last-Modified")) && (v.lastModified[i] = w), (w = N.getResponseHeader("etag")) && (v.etag[i] = w)), 204 === e || "HEAD" === m.type ? E = "nocontent": 304 === e ? E = "notmodified": (E = C.state, u = C.data, d = !(y = C.error))) : (y = E, !e && E || (E = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (t || E) + "", d ? h.resolveWith(f, [u, E, N]) : h.rejectWith(f, [N, E, y]), N.statusCode(b), b = void 0, c && p.trigger(d ? "ajaxSuccess": "ajaxError", [N, m, d ? u: y]), g.fireWith(f, [N, E]), c && (p.trigger("ajaxComplete", [N, m]), --v.active || v.event.trigger("ajaxStop")))
                    }
                    return N
                },
                getJSON: function(e, t, n) {
                    return v.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return v.get(e, void 0, t, "script")
                }
            }),
            v.each(["get", "post"],
            function(e, t) {
                v[t] = function(e, n, i, o) {
                    return v.isFunction(n) && (o = o || i, i = n, n = void 0),
                    v.ajax(v.extend({
                        url: e,
                        type: t,
                        dataType: o,
                        data: n,
                        success: i
                    },
                    v.isPlainObject(e) && e))
                }
            }),
            v._evalUrl = function(e) {
                return v.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    throws: !0
                })
            },
            v.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return v.isFunction(e) ? this.each(function(t) {
                        v(this).wrapAll(e.call(this, t))
                    }) : (this[0] && (t = v(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this)
                },
                wrapInner: function(e) {
                    return v.isFunction(e) ? this.each(function(t) {
                        v(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = v(this),
                        n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = v.isFunction(e);
                    return this.each(function(n) {
                        v(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        v.nodeName(this, "body") || v(this).replaceWith(this.childNodes)
                    }).end()
                }
            }),
            v.expr.filters.hidden = function(e) {
                return ! v.expr.filters.visible(e)
            },
            v.expr.filters.visible = function(e) {
                return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
            };
            var Et = /%20/g,
            Tt = /\[\]$/,
            Ut = /\r?\n/g,
            St = /^(?:submit|button|image|reset|file)$/i,
            kt = /^(?:input|select|textarea|keygen)/i;
            function _t(e, t, n, i) {
                var o;
                if (v.isArray(t)) v.each(t,
                function(t, o) {
                    n || Tt.test(e) ? i(e, o) : _t(e + "[" + ("object" == typeof o && null != o ? t: "") + "]", o, n, i)
                });
                else if (n || "object" !== v.type(t)) i(e, t);
                else for (o in t) _t(e + "[" + o + "]", t[o], n, i)
            }
            v.param = function(e, t) {
                var n, i = [],
                o = function(e, t) {
                    t = v.isFunction(t) ? t() : null == t ? "": t,
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (void 0 === t && (t = v.ajaxSettings && v.ajaxSettings.traditional), v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e,
                function() {
                    o(this.name, this.value)
                });
                else for (n in e) _t(n, e[n], t, o);
                return i.join("&").replace(Et, "+")
            },
            v.fn.extend({
                serialize: function() {
                    return v.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = v.prop(this, "elements");
                        return e ? v.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !v(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !J.test(e))
                    }).map(function(e, t) {
                        var n = v(this).val();
                        return null == n ? null: v.isArray(n) ? v.map(n,
                        function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Ut, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Ut, "\r\n")
                        }
                    }).get()
                }
            }),
            v.ajaxSettings.xhr = function() {
                try {
                    return new o.XMLHttpRequest
                } catch(e) {}
            };
            var Bt = {
                0 : 200,
                1223 : 204
            },
            At = v.ajaxSettings.xhr();
            h.cors = !!At && "withCredentials" in At,
            h.ajax = At = !!At,
            v.ajaxTransport(function(e) {
                var t, n;
                return h.cors || At && !e.crossDomain ? {
                    send: function(i, r) {
                        var a, s = e.xhr();
                        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                        for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                        t = function(e) {
                            return function() {
                                t && (t = n = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Bt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                }: {
                                    text: s.responseText
                                },
                                s.getAllResponseHeaders()))
                            }
                        },
                        s.onload = t(),
                        n = s.onerror = t("error"),
                        void 0 !== s.onabort ? s.onabort = n: s.onreadystatechange = function() {
                            4 === s.readyState && o.setTimeout(function() {
                                t && n()
                            })
                        },
                        t = t("abort");
                        try {
                            s.send(e.hasContent && e.data || null)
                        } catch(e) {
                            if (t) throw e
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                }: void 0
            }),
            v.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return v.globalEval(e),
                        e
                    }
                }
            }),
            v.ajaxPrefilter("script",
            function(e) {
                void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET")
            }),
            v.ajaxTransport("script",
            function(e) {
                var t, n;
                if (e.crossDomain) return {
                    send: function(i, o) {
                        t = v("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(),
                            n = null,
                            e && o("error" === e.type ? 404 : 200, e.type)
                        }),
                        s.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            });
            var It = [],
            Lt = /(=)\?(?=&|$)|\?\?/;
            v.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = It.pop() || v.expando + "_" + ct++;
                    return this[e] = !0,
                    e
                }
            }),
            v.ajaxPrefilter("json jsonp",
            function(e, t, n) {
                var i, r, a, s = !1 !== e.jsonp && (Lt.test(e.url) ? "url": "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(e.data) && "data");
                return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = v.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Lt, "$1" + i) : !1 !== e.jsonp && (e.url += (ut.test(e.url) ? "&": "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                    return a || v.error(i + " was not called"),
                    a[0]
                },
                e.dataTypes[0] = "json", r = o[i], o[i] = function() {
                    a = arguments
                },
                n.always(function() {
                    void 0 === r ? v(o).removeProp(i) : o[i] = r,
                    e[i] && (e.jsonpCallback = t.jsonpCallback, It.push(i)),
                    a && v.isFunction(r) && r(a[0]),
                    a = r = void 0
                }), "script") : void 0
            }),
            v.parseHTML = function(e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1),
                t = t || s;
                var i = S.exec(e),
                o = !n && [];
                return i ? [t.createElement(i[1])] : (i = oe([e], t, o), o && o.length && v(o).remove(), v.merge([], i.childNodes))
            };
            var Rt = v.fn.load;
            function Dt(e) {
                return v.isWindow(e) ? e: 9 === e.nodeType && e.defaultView
            }
            v.fn.load = function(e, t, n) {
                if ("string" != typeof e && Rt) return Rt.apply(this, arguments);
                var i, o, r, a = this,
                s = e.indexOf(" ");
                return s > -1 && (i = v.trim(e.slice(s)), e = e.slice(0, s)),
                v.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"),
                a.length > 0 && v.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    r = arguments,
                    a.html(i ? v("<div>").append(v.parseHTML(e)).find(i) : e)
                }).always(n &&
                function(e, t) {
                    a.each(function() {
                        n.apply(this, r || [e.responseText, t, e])
                    })
                }),
                this
            },
            v.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
            function(e, t) {
                v.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }),
            v.expr.filters.animated = function(e) {
                return v.grep(v.timers,
                function(t) {
                    return e === t.elem
                }).length
            },
            v.offset = {
                setOffset: function(e, t, n) {
                    var i, o, r, a, s, l, d = v.css(e, "position"),
                    c = v(e),
                    u = {};
                    "static" === d && (e.style.position = "relative"),
                    s = c.offset(),
                    r = v.css(e, "top"),
                    l = v.css(e, "left"),
                    ("absolute" === d || "fixed" === d) && (r + l).indexOf("auto") > -1 ? (a = (i = c.position()).top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0),
                    v.isFunction(t) && (t = t.call(e, n, v.extend({},
                    s))),
                    null != t.top && (u.top = t.top - s.top + a),
                    null != t.left && (u.left = t.left - s.left + o),
                    "using" in t ? t.using.call(e, u) : c.css(u)
                }
            },
            v.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this: this.each(function(t) {
                        v.offset.setOffset(this, e, t)
                    });
                    var t, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    },
                    r = i && i.ownerDocument;
                    return r ? (t = r.documentElement, v.contains(t, i) ? (o = i.getBoundingClientRect(), n = Dt(r), {
                        top: o.top + n.pageYOffset - t.clientTop,
                        left: o.left + n.pageXOffset - t.clientLeft
                    }) : o) : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                        return "fixed" === v.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), v.nodeName(e[0], "html") || (i = e.offset()), i.top += v.css(e[0], "borderTopWidth", !0), i.left += v.css(e[0], "borderLeftWidth", !0)),
                        {
                            top: t.top - i.top - v.css(n, "marginTop", !0),
                            left: t.left - i.left - v.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === v.css(e, "position");) e = e.offsetParent;
                        return e || Ie
                    })
                }
            }),
            v.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            },
            function(e, t) {
                var n = "pageYOffset" === t;
                v.fn[e] = function(i) {
                    return M(this,
                    function(e, i, o) {
                        var r = Dt(e);
                        return void 0 === o ? r ? r[t] : e[i] : void(r ? r.scrollTo(n ? r.pageXOffset: o, n ? o: r.pageYOffset) : e[i] = o)
                    },
                    e, i, arguments.length)
                }
            }),
            v.each(["top", "left"],
            function(e, t) {
                v.cssHooks[t] = Re(h.pixelPosition,
                function(e, n) {
                    return n ? (n = Le(e, t), _e.test(n) ? v(e).position()[t] + "px": n) : void 0
                })
            }),
            v.each({
                Height: "height",
                Width: "width"
            },
            function(e, t) {
                v.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                },
                function(n, i) {
                    v.fn[i] = function(i, o) {
                        var r = arguments.length && (n || "boolean" != typeof i),
                        a = n || (!0 === i || !0 === o ? "margin": "border");
                        return M(this,
                        function(t, n, i) {
                            var o;
                            return v.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? v.css(t, n, a) : v.style(t, n, i, a)
                        },
                        t, r ? i: void 0, r, null)
                    }
                })
            }),
            v.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, i) {
                    return this.on(t, e, n, i)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                size: function() {
                    return this.length
                }
            }),
            v.fn.andSelf = v.fn.addBack,
            n("nErl") && (void 0 === (i = function() {
                return v
            }.apply(t, [])) || (e.exports = i));
            var Ot = o.jQuery,
            Pt = o.$;
            return v.noConflict = function(e) {
                return o.$ === v && (o.$ = Pt),
                e && o.jQuery === v && (o.jQuery = Ot),
                v
            },
            r || (o.jQuery = o.$ = v),
            v
        },
        "object" == typeof e && "object" == typeof e.exports ? e.exports = o.document ? r(o, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return r(e)
        }: r(o)
    }
},
["NHnr"]);
//# sourceMappingURL=app.a556616eb64a051ce9f7.js.map
