!
    function ($) {
        "use strict";
        var escape = /["\\\x00-\x1f\x7f-\x9f]/g,
            meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            hasOwn = Object.prototype.hasOwnProperty;
        $.toJSON = "object" == typeof JSON && JSON.stringify ? JSON.stringify : function (a) {
            if (null === a) return "null";
            var b, c, d, e, f = $.type(a);
            if ("undefined" === f) return void 0;
            if ("number" === f || "boolean" === f) return String(a);
            if ("string" === f) return $.quoteString(a);
            if ("function" == typeof a.toJSON) return $.toJSON(a.toJSON());
            if ("date" === f) {
                var g = a.getUTCMonth() + 1,
                    h = a.getUTCDate(),
                    i = a.getUTCFullYear(),
                    j = a.getUTCHours(),
                    k = a.getUTCMinutes(),
                    l = a.getUTCSeconds(),
                    m = a.getUTCMilliseconds();
                return 10 > g && (g = "0" + g),
                    10 > h && (h = "0" + h),
                    10 > j && (j = "0" + j),
                    10 > k && (k = "0" + k),
                    10 > l && (l = "0" + l),
                    100 > m && (m = "0" + m),
                    10 > m && (m = "0" + m),
                    '"' + i + "-" + g + "-" + h + "T" + j + ":" + k + ":" + l + "." + m + 'Z"'
            }
            if (b = [], $.isArray(a)) {
                for (c = 0; c < a.length; c++) b.push($.toJSON(a[c]) || "null");
                return "[" + b.join(",") + "]"
            }
            if ("object" == typeof a) {
                for (c in a) if (hasOwn.call(a, c)) {
                    if (f = typeof c, "number" === f) d = '"' + c + '"';
                    else {
                        if ("string" !== f) continue;
                        d = $.quoteString(c)
                    }
                    f = typeof a[c],
                        "function" !== f && "undefined" !== f && (e = $.toJSON(a[c]), b.push(d + ":" + e))
                }
                return "{" + b.join(",") + "}"
            }
        },
            $.evalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function (str) {
                return eval("(" + str + ")")
            },
            $.secureEvalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function (str) {
                var filtered = str.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "");
                if (/^[\],:{}\s]*$/.test(filtered)) return eval("(" + str + ")");
                throw new SyntaxError("Error parsing JSON, source is not valid.")
            },
            $.quoteString = function (a) {
                return a.match(escape) ? '"' + a.replace(escape,
                    function (a) {
                        var b = meta[a];
                        return "string" == typeof b ? b : (b = a.charCodeAt(), "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16))
                    }) + '"' : '"' + a + '"'
            }
    }(jQuery);
var sa;
if (!sa) {
    sa = {}
}
if (!sa.click) {
    sa.click = {}
} (function () {
    var t = /^\w*?.suning.com$/,
        s = document.location.hostname,
        g = (("https:" == document.location.protocol) ? "https://" : "http://"),
        o = h(),
        b = "|",
        c = location.href,
        m = l(p(c));
    function q(Z, M) {
        var Y = Z.name ? l(Z.name) : "name undefined";
        if (Y == "name undefined") {
            var aa = Z.attributes.name;
            if (aa != undefined && aa != null) {
                Y = aa.value ? l(aa.value) : "name undefined"
            }
        }
        if (M != undefined && M != null && M != "") {
            var J = Z.attributes[M];
            if (J != undefined && J != null) {
                Y = J.value ? l(J.value) : M + " undefined"
            }
        }
        var N = Z.id ? l(Z.id) : "id undefined",
            Q = new Array(),
            z = (e(Z, Q), Q) ? l(Q.join("").replace(/\s|\|/ig, "")) : "text undefined",
            T = (T = document.getElementById("resourceType")) ? T.value : "",
            A = N + b + Y + b + z,
            R = (R = document.getElementById("errorCode")) ? R.value : "",
            W = g + o + "/ajaxClick.gif",
            y = u(),
            k = "_snck";
        i(k, y, "/", "", "");
        var X = n("_snmp"),
            D = typeof sn == "object" ? sn.cityId : "can not get cityId",
            I = y + b + X + b + A + b + m,
            V = Z.href ? Z.href : "",
            H = (V ? w(V) : "-"),
            K = document.getElementById("URLPattern"),
            P = (K ? K.value : "");
        var C = "";
        var F = n("logonStatus");
        if (F != undefined && F != null) {
            C = F
        }
        var E = "";
        var j = n("_snma");
        if (j != undefined && j != null && j.indexOf("|") >= 0) {
            try {
                E = j.split("|")[1]
            } catch (U) { }
        }
        var B = "";
        var x = n("idsLoginUserIdLastTime");
        if (x != undefined && x != null) {
            B = x
        }
        var S = "";
        var O = n("custno");
        if (O != undefined && O != null) {
            S = O
        }
        var L = "";
        var ab = n("_snmb");
        if (ab != undefined && ab != null && ab.indexOf("|") >= 0) {
            try {
                L = ab.split("|")[0]
            } catch (U) { }
        }
        var G = W + "?_snmk=" + I + "&_snme=" + R + "&_type=" + T + "&_cId=" + D + "&_sid=" + H + "&urlPattern=" + P + "&vid=" + E + "&lu=" + B + "&sid=" + L + "&mid=" + S + "&ls=" + C;
        v(G)
    }
    function u() {
        var k = new Date(),
            j = Math.round(100000 * Math.random()),
            x = k.getTime().toString().concat(j);
        return x
    }
    function n(k) {
        var j = document.cookie.split("; ");
        for (var x = 0; x < j.length; x++) {
            var y = j[x].split("=");
            if (y[0] == k) {
                return unescape(y[1])
            }
        }
    }
    function v(j) {
        var x = "log_" + (new Date()).getTime();
        var k = window[x] = new Image();
        k.onload = (k.onerror = function () {
            window[x] = null
        });
        k.src = j + "&iId=" + x;
        k = null
    }
    function h() {
        if (t.test(s)) {
            return "click.suning.cn/sa"
        } else {
            return "clicksit.suning.cn/sa"
        }
    }
    function d() {
        return document.domain
    }
    function i(k, j, C, B, A) {
        var z = k + "=" + escape(j);
        if (B != "") {
            var y = new Date();
            y.setTime(y.getTime() + B);
            z += ";expires=" + y.toGMTString()
        }
        if (C != "") {
            z += ";path=" + C
        }
        var x = d();
        if (x.indexOf(".suning.com") != -1) {
            z += ";domain=.suning.com"
        } else {
            if (x.indexOf(".cnsuning.com") != -1) {
                z += ";domain=.cnsuning.com"
            } else {
                z += ";domain=" + A
            }
        }
        document.cookie = z
    }
    function w(k) {
        var j = "-";
        if (!a(k)) {
            j = f(k, "tid", "&")
        }
        return j
    }
    function p(j) {
        if (j.length > 301) {
            j = j.substring(0, 300)
        }
        while (j.indexOf(b) != -1) {
            j = j.replace(b, "--")
        }
        return j
    }
    function e(x, k) {
        if (x.nodeType == 3) {
            k.push(x.nodeValue)
        } else {
            if (x.nodeType == 1) {
                for (var j = x.firstChild; j != null; j = j.nextSibling) {
                    e(j, k)
                }
            }
        }
    }
    function l(j) {
        return j != null ? encodeURIComponent(j) : ""
    }
    function f(x, k, A) {
        var z = "-",
            j;
        if (!a(x) && !a(k) && !a(A)) {
            j = x.indexOf(k);
            if (j > -1) {
                var y = x.indexOf(A, j);
                if (y < 0) {
                    y = x.length
                }
                z = x.substring(j + k.length + 1, y)
            }
        }
        return z
    }
    function a(j) {
        return (undefined == j || "" == j || "-" == j)
    }
    var r = sa.click;
    r.sendDatasIndex = q
})();
var st = st || {};
st.tooltipNew = {
    run: function (options) {
        var config = {
            selector: "",
            style: null,
            type: "click",
            placement: "top",
            selector: null,
            container: "body",
            template: '<div class="ui-tooltip"><div class="ui-tooltip-arrow"><i class="ui-tooltip-arrow-front">◆</i><i class="ui-tooltip-arrow-back">◆</i></div><div class="ui-tooltip-inner">tooltip</div></div>',
            html: "",
            node: "",
            wrapper: "",
            flag: "",
            openFn: function (tipDom, targeDom, tipFn) { },
            closeFn: function (tipDom, targeDom, tipFn) { }
        };
        options = $.extend(config, options);
        this.fnList.push({
            selectorName: options.selector,
            openFn: options.openFn,
            closeFn: options.closeFn
        });
        this.listen(options)
    },
    resizeIaAlreadyRun: 0,
    clickIsAlreadyRun: 0,
    listen: function (options) {
        var _this = this;
        if (options.type == "click") {
            $(document).on(options.type, options.selector,
                function (event) {
                    event && event.preventDefault();
                    event && event.stopPropagation();
                    var thisData = $(this).data();
                    if (typeof thisData.tipForce != undefined && thisData.tipForce && thisData.tipForce == 1) {
                        return
                    }
                    if (typeof thisData.tipShow != undefined && thisData.tipShow && thisData.tipShow == 1) {
                        $(this).data("tipShow", 0);
                        _this.allHide()
                    } else {
                        _this.allHide();
                        var targetNum = new Date().getTime();
                        $(this).data({
                            tipNum: targetNum,
                            tipShow: 1
                        });
                        _this.getHtml(options, $(this))
                    }
                });
            if (_this.clickIsAlreadyRun == 0) {
                _this.clickIsAlreadyRun = 1;
                $(document).on(options.type,
                    function (event) {
                        if ($(event.target).closest(".ui-tooltip").size() != 0) {
                            return
                        }
                        _this.allHide()
                    })
            }
        } else {
            if (options.type == "hover") {
                var enter = "mouseenter";
                var leave = "mouseleave";
                $(document).on(enter, options.selector,
                    function (event) {
                        _this.allHide();
                        var targetNum = new Date().getTime();
                        $(this).data({
                            tipNum: targetNum
                        });
                        _this.getHtml(options, $(this))
                    });
                $(document).on(leave, options.selector,
                    function (event) {
                        _this.allHide()
                    })
            }
        }
        if (_this.resizeIaAlreadyRun == 0) {
            _this.resizeIaAlreadyRun = 1;
            $(window).resize(function () {
                _this.allHide()
            })
        }
    },
    getHtml: function (options, target) {
        var tipDom = $(options.template);
        var innerHtml = tipDom.find(".ui-tooltip-inner");
        var opHtml = options.html;
        var opNode = options.node;
        var opFlag = options.flag;
        var closeBtn = options.closeBtn;
        var targetData = target.data();
        var targetDataHtml = targetData.html;
        var targetDataNode = targetData.node;
        var targetDataFlag = targetData.flag;
        var trueHtml;
        if (typeof opHtml != "undefined" && opHtml) {
            trueHtml = opHtml
        } else {
            if (typeof opNode != "undefined" && opNode) {
                trueHtml = $(opNode).clone().html()
            }
        }
        if (typeof targetDataHtml != "undefined" && targetDataHtml) {
            trueHtml = targetDataHtml
        } else {
            if (typeof targetDataNode != "undefined" && targetDataNode) {
                trueHtml = $(targetDataNode).clone().html()
            }
        }
        innerHtml.html(trueHtml);
        if (typeof closeBtn != "undefined" && closeBtn) {
            tipDom.prepend('<div class="ui-tooltip-close" onclick="st.tooltipNew.allHide();">×</div>')
        }
        tipDom.attr({
            "data-tip-targetnum": targetData.tipNum,
            "data-tip-targetselectorname": options.selector
        });
        if (typeof targetDataFlag != "undefined" && targetDataFlag) {
            tipDom.addClass(targetDataFlag)
        } else {
            if (typeof opFlag != "undefined" && opFlag) {
                tipDom.addClass(opFlag)
            }
        }
        var trueWrapper = this.getWrapper(options, target);
        trueWrapper.append(tipDom);
        trueWrapper = null;
        this.getSelectorFn(options.selector).openFn(options, tipDom, target, this);
        this.position(options, tipDom, target)
    },
    getWrapper: function (options, target) {
        var opWrapper = options.wrapper;
        var targetData = target.data();
        var targetDataWrapper = targetData.wrapper;
        var trueWrapper;
        if (typeof opWrapper != "undefined" && opWrapper) {
            if (opWrapper.indexOf("#")) {
                trueWrapper = $(opWrapper)
            } else {
                trueWrapper = target.closest(opWrapper)
            }
        } else {
            if (typeof targetDataWrapper != "undefined" && targetDataWrapper) {
                if (targetDataWrapper.indexOf("#")) {
                    trueWrapper = $(targetDataWrapper)
                } else {
                    trueWrapper = target.closest(targetDataWrapper)
                }
            } else {
                trueWrapper = $("body")
            }
        }
        return trueWrapper
    },
    position: function (options, tipDom, target) {
        var targetData = target.data();
        var targetStyle = options.style;
        var targetPlacement = options.placement;
        if (typeof targetData.style != "undefined" && targetData.style && targetData.style != "undefined") {
            try {
                var transformSymbol = targetData.style.replace(/&apos;/g, "'");
                targetStyle = $.extend({
                    display: "block"
                },
                    eval("(" + transformSymbol + ")"))
            } catch (e) { }
        }
        if (typeof targetData.placement != "undefined" && targetData.placement && targetData.placement != "undefined") {
            targetPlacement = targetData.placement
        }
        if (typeof targetStyle === "object" && targetStyle) {
            tipDom.css(targetStyle)
        }
        tipDom.addClass("ui-tooltip-" + targetPlacement);
        var targetOffSet = target.offset();
        var targetH = target.outerHeight();
        var targetW = target.outerWidth();
        var tipW = tipDom.outerWidth();
        var tipH = tipDom.outerHeight();
        var wrapper = this.getWrapper(options, target);
        var position = wrapper.css("position") == "absolute" || wrapper.css("position") == "relative";
        var wrapperLeft = position ? wrapper.offset().left : 0;
        var wrapperTop = position ? wrapper.offset().top : 0;
        switch (targetPlacement) {
            case "right":
                tipDom.css({
                    top:
                    targetOffSet.top - tipH / 2 + targetH / 2 - wrapperTop,
                    left: targetOffSet.left + targetW + 8 - wrapperLeft
                });
                break;
            case "bottom":
                tipDom.css({
                    top:
                    targetOffSet.top + targetH + 8 - wrapperTop,
                    left: targetOffSet.left - tipW / 2 + targetW / 2 - wrapperLeft
                });
                break;
            case "left":
                tipDom.css({
                    top:
                    targetOffSet.top - tipH / 2 + targetH / 2 - wrapperTop,
                    left: targetOffSet.left - tipW - 8 - wrapperLeft
                });
                break;
            default:
                tipDom.css({
                    top:
                    targetOffSet.top - tipH - 8 - wrapperTop,
                    left: targetOffSet.left - tipW / 2 + targetW / 2 - wrapperLeft
                });
                break
        }
        wrapper = null
    },
    allHide: function (clearAll) {
        var _this = this;
        var clearAll = clearAll || 0;
        var dUiTooltipNew = $(".ui-tooltip");
        if (dUiTooltipNew.length <= 0) {
            dUiTooltipNew = null;
            return
        }
        var isForce = 0;
        dUiTooltipNew.each(function () {
            var tipDom = this;
            var targetNum = $(this).attr("data-tip-targetnum");
            var targetSelectorName = $(this).attr("data-tip-targetselectorname");
            $(targetSelectorName).each(function () {
                if ($(this).data("tipNum") == targetNum) {
                    var newForce = $(this).data("tipForce");
                    if (typeof newForce != "undefined" && newForce && newForce == 1 && clearAll == 0) {
                        isForce = newForce;
                        return
                    }
                    $(this).removeData("tipNum");
                    $(this).removeData("tipShow");
                    _this.getSelectorFn(targetSelectorName).closeFn($(tipDom), $(this), _this);
                    return
                }
            });
            if (isForce == 0 || clearAll == 1) {
                $(this).remove()
            }
        });
        dUiTooltipNew = null
    },
    oneHide: function (nowTargetNum) {
        var _this = this;
        var nowTargetNum = nowTargetNum || "";
        var dUiTooltipNew = $(".ui-tooltip");
        if (dUiTooltipNew.length <= 0) {
            dUiTooltipNew = null;
            return
        }
        dUiTooltipNew.each(function () {
            var tipDom = this;
            var targetNum = $(this).attr("data-tip-targetnum");
            var targetSelectorName = $(this).attr("data-tip-targetselectorname");
            if (targetNum == nowTargetNum) {
                $(targetSelectorName).each(function () {
                    if ($(this).data("tipNum") == targetNum) {
                        $(this).removeData("tipNum");
                        $(this).removeData("tipShow");
                        $(this).removeData("tipForce");
                        _this.getSelectorFn(targetSelectorName).closeFn($(tipDom), $(this), _this);
                        return
                    }
                });
                $(this).remove();
                return
            }
        });
        dUiTooltipNew = null
    },
    getSelectorFn: function (selectorName) {
        var _this = this;
        var fn;
        for (var i = 0,
            listLen = _this.fnList.length; i < listLen; i++) {
            if (_this.fnList[i].selectorName == selectorName) {
                fn = _this.fnList[i];
                break
            }
        }
        return fn
    },
    fnList: [],
    clearClickState: function () {
        $(".tip-click-mark").each(function () {
            $(this).removeData("tipNum");
            $(this).removeData("tipShow")
        })
    }
}; (function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory)
    } else {
        factory(jQuery)
    }
})(function ($) {
    var Numer = function (element, options) {
        this.$element = $(element);
        this.options = options = $.extend({},
            options, this.$element.data());
        this.init.apply(this)
    };
    Numer.prototype.init = function (element) {
        this.args = {
            $element: this.$element,
            options: this.options
        };
        this.position(this.args)
    };
    Numer.prototype.position = function (args) {
        var $element = args.$element,
            $minus = '<a class="minus" href="javascript:;">-</a>',
            $plus = '<a class="plus" href="javascript:;">+</a>';
        if (!$element.prev().is(".minus") && !$element.next().is(".plus")) {
            $element.before($minus).after($plus)
        }
        try {
            this.listen(this.args)
        } catch (e) { }
    };
    Numer.prototype.oldIE = function () {
        var b = document.createElement("b");
        b.innerHTML = "<!--[if lte IE 7]><i></i><![endif]-->";
        return b.getElementsByTagName("i").length === 1
    };
    Numer.prototype.timeoutNum = "";
    Numer.prototype.listen = function (args) {
        var $element = args.$element,
            $minus = $element.prev(".minus"),
            $plus = $element.next(".plus"),
            reg = /^0|\D/g,
            plusTime,
            minusTime,
            len = args.options.max.toString().length,
            plusCallback = args.options.plusCallback,
            minusCallback = args.options.minusCallback,
            callback = args.options.callback,
            isAlways = args.options.isAlways,
            _this = this;
        $element.attr({
            maxLength: len
        });
        if ($element.val() >= args.options.max) {
            $element.val(args.options.max);
            $plus.addClass("no-plus")
        }
        if ($element.val() <= args.options.min) {
            $element.val(args.options.min);
            $minus.addClass("no-minus")
        }
        $element.off("keyup paste click drop");
        $element.on("keyup paste click drop",
            function (e) {
                var that = this,
                    e = e ? e : event,
                    key = e.keyCode,
                    val = $(that).val();
                if (key > 36 && key < 41) {
                    return
                }
                $(that).val(val.replace(reg, ""));
                setTimeout(function () {
                    if (parseInt(val) > args.options.max) {
                        $(that).val(args.options.max);
                        val = $(that).val();
                        $plus.addClass("no-plus")
                    }
                    if (parseInt(val) <= args.options.min) {
                        $(that).val(args.options.min);
                        $minus.addClass("no-minus")
                    }
                },
                    50);
                if (val == args.options.max) {
                    $plus.addClass("no-plus")
                } else {
                    $plus.removeClass("no-plus")
                }
                if (val == args.options.min) {
                    $minus.addClass("no-minus")
                } else {
                    $minus.removeClass("no-minus")
                }
            });
        var $doc = $(document);
        $element.live("focusin",
            function () {
                $(this).data("tempVal", $(this).val())
            });
        $element.live("focusout",
            function () {
                var val = $(this).val();
                val = val != undefined ? val : args.options.min;
                if (val > args.options.max) {
                    $plus.addClass("no-plus");
                    $(this).val(args.options.max)
                } else {
                    if (val < args.options.min) {
                        $minus.addClass("no-minus");
                        $(this).val(args.options.min)
                    } else {
                        $(this).val(val)
                    }
                }
                if (val != $(this).data("tempVal")) {
                    if ($.isFunction(callback)) {
                        if (!!$(this).val()) {
                            val = val < args.options.min ? args.options.min : val;
                            val = val > args.options.max ? args.options.max : val;
                            callback(val, $(this), args.options)
                        }
                    }
                }
            });
        $minus.on("click",
            function () {
                var that = this,
                    $element = $(that).siblings("input"),
                    isNoMinus = $(this).hasClass("no-minus");
                $element.data("tempVal", $element.val());
                minusEvent(that,
                    function (val) {
                        if (!$.isFunction(callback)) {
                            return
                        }
                        if (!!isAlways) {
                            callback(val, $element)
                        } else {
                            if (!isNoMinus) {
                                callback(val, $element)
                            }
                        }
                    },
                    args)
            });
        $plus.on("click",
            function () {
                var that = this,
                    $element = $(that).siblings("input"),
                    isNoPlus = $(this).hasClass("no-plus");
                $element.data("tempVal", $element.val());
                plusEvent(that,
                    function (val) {
                        if (!$.isFunction(callback)) {
                            return
                        }
                        if (!!isAlways) {
                            callback(val, $element)
                        } else {
                            if (!isNoPlus) {
                                callback(val, $element)
                            }
                        }
                    })
            });
        function CF(element, cb) {
            var that = element,
                $element = $(that).siblings("input"),
                val = $element.val() == "" ? args.options.min : $element.val();
            if (args.options.max == 0) {
                return
            }
            if (val < args.options.min + 2) {
                $(that).addClass("no-minus");
                $element.val(args.options.min)
            } else {
                $element.val(parseInt(val) - 1);
                $(that).siblings(".plus").hasClass("no-plus") && $(that).siblings(".plus").removeClass("no-plus")
            }
            try {
                cb($element.val(), $(that))
            } catch (e) { }
        }
        function minusEvent(element, cb) {
            var that = element,
                $element = $(that).siblings("input"),
                val = $element.val() == "" ? args.options.min : $element.val();
            if (args.options.max == 0) {
                return
            }
            if (val < args.options.min + 2) {
                $(that).addClass("no-minus");
                if (val == args.options.min + 1 && !(_this.oldIE())) {
                    numAnimate($element, args.options.min + 1, 0)
                } else {
                    $element.val(args.options.min)
                }
            } else {
                if (_this.oldIE()) {
                    clearTimeout(_this.timeoutNum);
                    $element.val(parseInt(val) - 1)
                } else {
                    $element.css("color", "#FFF");
                    numAnimate($element, val, 0)
                }
                $(that).siblings(".plus").hasClass("no-plus") && $(that).siblings(".plus").removeClass("no-plus")
            }
            try {
                cb($element.val(), $(that))
            } catch (e) { }
        }
        function plusEvent(element, cb) {
            var that = element,
                $element = $(that).siblings("input"),
                val = $element.val() == "" ? args.options.min - 1 : $element.val();
            if (args.options.max == 0) {
                return
            }
            if (val > args.options.max - 2) {
                $(that).addClass("no-plus");
                if (val == args.options.max - 1 && !(_this.oldIE())) {
                    numAnimate($element, args.options.max - 1, 1)
                } else {
                    $element.val(args.options.max)
                }
            } else {
                if (_this.oldIE()) {
                    clearTimeout(_this.timeoutNum);
                    $element.val(parseInt(val) + 1)
                } else {
                    $element.css("color", "#FFF");
                    numAnimate($element, val, 1)
                }
                $(that).siblings(".minus").hasClass("no-minus") && $(that).siblings(".minus").removeClass("no-minus")
            }
            try {
                cb($element.val(), $(that))
            } catch (e) { }
        }
        function numAnimate(dom, oVal, type) {
            clearTimeout(_this.timeoutNum);
            var oldVal = String(oVal),
                newVal,
                oldValArr = [],
                newValArr = [],
                spanStyle,
                oldValHtml,
                newValHtml,
                dOuterH = dom.outerHeight();
            if (type == 0) {
                dom.val(parseInt(oVal) - 1);
                newVal = String(parseInt(oldVal) - 1)
            } else {
                dom.val(parseInt(oVal) + 1);
                newVal = String(parseInt(oldVal) + 1)
            }
            spanStyle = 'style="position:absolute;left:' + dom.position().left + "px;width:" + dom.outerWidth() + "px;height:" + dOuterH + "px;line-height:" + dOuterH + "px;text-align:center;";
            oldValHtml = '<span class="slideNum orSlideNum" ' + spanStyle + 'top:0;z-index:2;">';
            for (var i = 0; i < oldVal.length; i++) {
                oldValArr[i] = oldVal.charAt(i);
                oldValHtml += '<span style="position:relative;color:#666;" ' + (i == oldVal.length - 1 ? 'class="lastNum"' : "") + ">" + oldVal.charAt(i) + "</span>"
            }
            oldValHtml += "</span>";
            newValHtml = '<span class="slideNum newSlideNum" ' + spanStyle + "top:" + (type == 0 ? "-" : "") + dOuterH + 'px;z-index:3;">';
            for (var c = 0; c < newVal.length; c++) {
                newValArr[c] = newVal.charAt(c);
                newValHtml += '<span style="position:relative;color:#666;" ' + (c == oldVal.length - 1 ? 'class="lastNum"' : "") + ">" + newVal.charAt(c) + "</span>"
            }
            newValHtml += "</span>";
            var dParent = dom.parent(".item-amount");
            dParent.css("position", "relative");
            if (type == 0) {
                dom.after(oldValHtml + newValHtml)
            } else {
                dom.before(oldValHtml + newValHtml)
            }
            dParent.find(".slideNum").find(".lastNum").animate({
                top: ((type == 0 ? "" : "-") + dOuterH)
            },
                200,
                function () {
                    $(this).parent(".slideNum").remove();
                    dom.css("color", "#666");
                    dParent = null
                })
        }
    };
    Numer.DEFAULTS = {
        max: 99,
        min: 1,
        ctrl: false,
        plusCallback: null,
        minusCallback: null,
        callback: null,
        isAAlways: false,
        ele: "input.text-amount"
    };
    var old = $.fn.numer;
    $.fn.numer = function (option) {
        return this.each(function () {
            var $this = $(this);
            var options = typeof option == "object" ? $.extend({},
                Numer.DEFAULTS, option) : $.extend({},
                    Numer.DEFAULTS);
            new Numer(this, options)
        })
    };
    $.fn.numer.Constructor = Numer;
    $.fn.numer.noConflict = function () {
        $.fn.numer = old;
        return this
    }
});
var cloudCart = cloudCart || (function (Win, Doc, $, undefined) {
    var isIE = /MSIE/.test(navigator.userAgent);
    var isIE6 = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent);
    var W3C = window.dispatchEvent;
    if (!W3C) {
        $(Doc).on("focus", "a",
            function () {
                $(this).blur()
            })
    }
    return {
        supportPlaceHolder: {
            init: function (warp) {
                var inputArr;
                if (warp) {
                    inputArr = $(warp).find("input[placetext]")
                } else {
                    inputArr = $("input[placetext]")
                }
                inputArr.each(function () {
                    if (!$(this).attr("data-is-enter")) {
                        $(this).attr("data-is-enter", 0)
                    }
                    var defaultValue = $(this).attr("placetext");
                    if ($.trim($(this).val()) == "") {
                        $(this).val(defaultValue).css("color", "#bbb")
                    }
                    $(this).focus(function () {
                        if ($.trim($(this).val()) == defaultValue && $(this).attr("data-is-enter") == 0) {
                            $(this).val("").css("color", "#333")
                        }
                    });
                    $(this).blur(function () {
                        if ($.trim($(this).val()) == "") {
                            $(this).attr("data-is-enter", 0);
                            $(this).val(defaultValue).css("color", "#bbb")
                        }
                    });
                    $(this).keydown(function () {
                        $(this).attr("data-is-enter", 1)
                    })
                })
            }
        },
        changeInputBorder: function () {
            $(document).on("focus", ".ui-text",
                function () {
                    $(this).removeClass("error").addClass("focus")
                });
            $(document).on("blur", ".ui-text",
                function () {
                    $(this).removeClass("focus")
                })
        },
        tab: function (options) {
            var def = {
                wrap: null,
                selector: null,
                start: 0,
                event: "click",
                delay: 200,
                selected: ".selected",
                callback: $.noop
            };
            var args = arguments[0];
            if (!args || !(typeof (args) == "object" && Object.prototype.toString.call(args).toLowerCase() == "[object object]" && !args.length)) {
                return $.error("tab: 参数必须为JSON格式")
            }
            $.extend(def, options);
            def.selected = def.selected.replace(/^\./, "");
            var tab = function (idArray, tagRel, handle) {
                tagRel.removeClass(def.selected);
                handle.addClass(def.selected);
                var thisTagRel = handle.attr("rel");
                var thisTagRelShow = $(thisTagRel);
                if (def.wrap != null) {
                    thisTagRelShow = $(def.wrap).find(thisTagRel);
                    $(def.wrap).find(idArray.join(",")).hide()
                } else {
                    $(idArray.join(",")).hide()
                }
                $(thisTagRelShow).show();
                def.callback.apply(this, [thisTagRel.split("#")[1]])
            };
            var tabWrap = $(def.selector);
            var numIndex = !!(typeof def.start === "number");
            tabWrap.each(function () {
                var T = $(this);
                var _id = [],
                    container,
                    display,
                    tagRel = T.find("[rel^='#']");
                if (tagRel.size() == 0) {
                    return true
                }
                tagRel.removeClass(def.selected);
                for (var i = 0; i < tagRel.length; i++) {
                    var rel = tagRel.eq(i).attr("rel");
                    _id.push(rel);
                    if (numIndex && def.start == i) {
                        display = $(rel);
                        if (def.wrap != null) {
                            display = $(def.wrap).find(rel)
                        }
                        tagRel.eq(i).addClass(def.selected)
                    }
                }
                if (!numIndex) {
                    display = $(def.start);
                    if (def.wrap != null) {
                        display = $(def.wrap).find(def.start)
                    }
                    T.find("[rel^='" + def.start + "']").addClass(def.selected)
                }
                container = $(_id.join(","));
                if (def.wrap != null) {
                    container = $(def.wrap).find(_id.join(","))
                }
                container.not($(display)).hide();
                display.show();
                def.callback.apply(this, [display.attr("id")]);
                var timer, isDelay = (/^mouseover|mouseout|mouseleave|mouseenter$/.test(def.event));
                if (!isDelay) {
                    def.delay = 15
                } else {
                    tagRel.bind("mouseout",
                        function () {
                            clearTimeout(timer)
                        })
                }
                tagRel.bind(def.event,
                    function () {
                        var _this = $(this);
                        var thisTagRel = _this.attr("rel");
                        clearTimeout(timer);
                        timer = setTimeout(function () {
                            tab(_id, tagRel, _this)
                        },
                            def.delay)
                    })
            })
        }
    }
})(window, document, jQuery);
cloudCart.floatBar = function () {
    var _d = {
        contents: null,
        align: "right",
        vertical: "middle",
        zIndex: 7500,
        css: null,
        id: null,
        ieFixed: true
    };
    var _ie = ($.browser.msie) ? parseInt($.browser.version) : false;
    if (arguments.length < 1 || !(arguments[0] instanceof Object)) {
        return $.error("ECode.floatBar: 参数必须为JSON对象")
    }
    $.extend(_d, arguments[0]);
    var _hideCss = {
        position: "fixed",
        top: "-9999em",
        left: "-9999em"
    };
    if (_ie && _ie <= 6) {
        _hideCss.position = "absolute"
    }
    $('<div class="ECode-floatBar"></div>').css(_hideCss).appendTo("body");
    var _bar = $("body").find(".ECode-floatBar:last");
    _bar.append(_d.contents);
    var _bw = _bar.width(),
        _bh = _bar.height(),
        _css = {
            zIndex: _d.zIndex
        };
    if (_d.id != null) {
        _bar.attr("id", _d.id)
    }
    switch (_d.align) {
        case "right":
            _css.left = "auto";
            _css.right = 0;
            break;
        case "left":
            _css.right = "auto";
            _css.left = 0;
            break;
        case "center":
            _css.right = "auto";
            _css.left = "50%";
            _css.marginLeft = -_bw / 2;
            break
    }
    switch (_d.vertical) {
        case "top":
            _css.top = 0;
            break;
        case "bottom":
            _css.top = "auto";
            _css.bottom = 0;
            break;
        case "middle":
            _css.top = "50%";
            _css.marginTop = -_bh / 2;
            if (_ie && _ie <= 6) {
                _css.marginTop = 0
            }
            break
    }
    _bar.css($.extend(_css, _d.css));
    var fixIE6 = function () {
        var _topHide = $(document).scrollTop(),
            _winHeight = $(window).height(),
            _winWidth = $(document).width();
        switch (_d.vertical) {
            case "top":
                _bar.stop().animate({
                    top:
                    _topHide
                });
                break;
            case "bottom":
                var _newTop = _winHeight + _topHide - _bh;
                if (_d.css.marginBottom != null) {
                    var _mb = parseInt(_d.css.marginBottom);
                    if (_mb >= 0) {
                        _newTop -= _mb
                    }
                }
                _newTop -= 100;
                _bar.css({
                    marginTop: _newTop
                });
                break;
            case "middle":
                _bar.stop().animate({
                    top:
                    _winHeight / 2 + _topHide - _bh / 2
                });
                break
        }
    };
    if (_d.ieFixed && _ie && _ie <= 6) {
        fixIE6();
        $(window).scroll(function () {
            fixIE6()
        });
        $(window).resize(function () {
            fixIE6()
        })
    }
};
cloudCart.ieVersion = function (ver) {
    var b = document.createElement("b");
    b.innerHTML = "<!--[if IE " + ver + "]><i></i><![endif]-->";
    return b.getElementsByTagName("i").length === 1
};
cloudCart.searcBox = function () {
    var cartSearch = $(".cart-search");
    var timer;
    function getData(obj) {
        var searchWord = obj.val(),
            custno = getCookie("custno"),
            rd = parseInt(Math.random() * 10000);
        $.ajax({
            url: "//ds.suning.cn/ds/his/new/" + custno + "-" + searchWord + "-0-PC-searchCallback" + rd + ".jsonp",
            type: "get",
            dataType: "jsonp",
            jsonpCallback: "searchCallback" + rd,
            success: function (data) {
                var dataTemp = data.words;
                if (!dataTemp) {
                    return
                }
                var dataLen = dataTemp.length;
                if (dataLen > 0) {
                    var listDomArr = [],
                        listDom;
                    dataLen = dataLen > 10 ? 10 : dataLen;
                    for (var i = 0; i < dataLen; i++) {
                        if (typeof (dataTemp[i].categoryId) == "undefined") {
                            var _tempkey = dataTemp[i].keyname;
                            _tempkey = _tempkey.replace(/[,;\s]+/g, "");
                            listDomArr.push('<li><a href="javascript:void(0);" target="_blank" ><span name="search_click_associational_word">' + _tempkey + "</span></a></li>")
                        }
                    }
                    listDom = listDomArr.join("");
                    obj.closest(".cart-search").find(".cart-search-list ul").html(listDom);
                    $(".cart-search-list li").each(function () {
                        var _this = $(this);
                        var searchWord = _this.text();
                        var dsSearcheUrl = "//search.suning.com/emall/".replace("emall/", "") + encodeURIComponent(resolveStr(searchWord)) + "/";
                        _this.find("a").attr("href", dsSearcheUrl)
                    });
                    obj.closest(".cart-search").find(".cart-search-list").show()
                } else {
                    obj.closest(".cart-search").find(".cart-search-list").hide()
                }
            }
        })
    }
    function goSearch(str) {
        if ($.trim(str) == "") {
            $(".cart-search-btn").attr("target", "");
            return
        }
        var searcheUrl = "//search.suning.com/emall/".replace("emall/", "") + encodeURIComponent(resolveStr(str)) + "/";
        $(".cart-search-btn").attr("href", searcheUrl);
        $(".cart-search-btn").attr("target", "_blank")
    }
    function resolveStr(str) {
        var searchStr = str;
        searchStr = searchStr.replace(/\-/g, "%2d");
        searchStr = searchStr.replace(/\&/g, "%26");
        searchStr = searchStr.replace(/\./g, "%2E");
        searchStr = searchStr.replace(/\+/g, "%2B");
        return searchStr
    }
    if (cartSearch.length != 0) {
        var cartSearchList = $(".cart-search-list"),
            cartSearchInput = $(".cart-search-input");
        $(document).on("change keydown keyup focus", ".cart-search input",
            function (e) {
                var that = $(this);
                if (e.type == "focusin") {
                    var inputVal = cartSearchInput.val();
                    if (inputVal != "" && typeof inputVal != "undefined" && inputVal != null) {
                        cartSearchList.show()
                    }
                } else {
                    if (e.type == "focusout" || e.type == "change") { } else {
                        clearTimeout(timer);
                        timer = setTimeout(function () {
                            getData(that)
                        },
                            300)
                    }
                }
            });
        $(document).on("hover", ".cart-search-list li",
            function () {
                var _this = $(this);
                if (!_this.hasClass("hover")) {
                    _this.addClass("hover")
                } else {
                    _this.removeClass("hover")
                }
            });
        $(document).on("click", ".cart-search-list li",
            function () {
                var _this = $(this),
                    searchVal = _this.text();
                cartSearchInput.val(searchVal);
                cartSearchList.hide()
            });
        $(document).click(function (event) {
            if ($(event.target).closest(".cart-search").size() == 0) {
                cartSearchList.hide()
            }
        });
        $(document).on("click", ".cart-search-btn",
            function () {
                goSearch(cartSearchInput.val())
            })
    }
};
cloudCart.searcBox();
var cartListLoop = cartListLoop || {};
cartListLoop.listloop = function (opt) {
    var _opt = {
        wrap: "",
        loopBox: "",
        triggerLeft: ".prev",
        triggerRight: ".next",
        curCount: ".cur-count",
        totalCount: ".total-count",
        step: {
            wide: 4,
            narrow: 4
        },
        scrollWidth: {
            wide: 580,
            narrow: 580
        },
        hasCount: true,
        isLoop: true,
        isLazyLoad: true,
        delay: 0,
        hasLabel: false,
        labelObj: null,
        vertical: false,
        isRandom: false,
        itemNum: null,
        hoverArr: false
    };
    $.extend(_opt, opt);
    var box = $(_opt.wrap),
        leftCtrl = box.find(_opt.triggerLeft),
        rightCtrl = box.find(_opt.triggerRight),
        moveBox = box.find(_opt.loopBox),
        moveBoxLi = moveBox.find(".list:not(.hide)"),
        step = _opt.step.wide,
        scrollWidth = _opt.scrollWidth.wide,
        len = Math.ceil(moveBoxLi.length / step),
        liLen = moveBoxLi.length,
        curCount = box.find(_opt.curCount),
        totalCount = box.find(_opt.totalCount),
        i = 0;
    if (!$("body").hasClass("root1200")) {
        step = _opt.step.narrow;
        scrollWidth = _opt.scrollWidth.narrow;
        len = Math.ceil(moveBoxLi.length / step)
    }
    _opt.hasCount && totalCount.html(len);
    leftCtrl.unbind().click(function () {
        prev()
    });
    rightCtrl.unbind().click(function () {
        next()
    });
    if (len > 1) {
        leftCtrl.show();
        rightCtrl.show()
    } else {
        leftCtrl.hide();
        rightCtrl.hide()
    }
    if (liLen > step && _opt.hoverArr) {
        box.hover(function () {
            leftCtrl.show();
            rightCtrl.show()
        },
            function () {
                leftCtrl.hide();
                rightCtrl.hide()
            })
    }
    var pager = opt.labelObj,
        pagerDom = "",
        pageri;
    if (pager) {
        if (len <= 1) {
            pager.hide()
        }
        pager.find(".prev").unbind().click(function () {
            prev()
        });
        pager.find(".next").unbind().click(function () {
            next()
        });
        for (pageri = 0; pageri < len; pageri++) {
            pagerDom += "<li></li>"
        }
        pager.find("ul").html(pagerDom).find("li").click(function () {
            i = $(this).index();
            move(false, i)
        }).first().addClass("current")
    }
    function next() {
        if (len == 1 || moveBox.is(":animated")) {
            return false
        }
        if (!_opt.isLoop) {
            i++;
            if (i >= len) {
                i = len - 1
            }
            move(false, i);
            return
        }
        if (i == len - 1) {
            for (var j = 0; j < step; j++) {
                if (_opt.vertical) {
                    moveBoxLi.eq(j).css({
                        position: "relative",
                        top: len * scrollWidth + "px"
                    })
                } else {
                    moveBoxLi.eq(j).css({
                        position: "relative",
                        left: len * scrollWidth + "px"
                    })
                }
            }
        }
        i++;
        move(function () {
            if (i == len) {
                i = 0;
                moveBoxLi.removeAttr("style");
                if (_opt.vertical) {
                    moveBox.css("top", i * scrollWidth)
                } else {
                    moveBox.css("left", i * scrollWidth)
                }
            }
        },
            i)
    }
    function prev() {
        if (len == 1 || moveBox.is(":animated")) {
            return false
        }
        if (!_opt.isLoop) {
            i--;
            if (i <= 0) {
                i = 0
            }
            move(false, i);
            return
        }
        if (i == 0) {
            for (var j = 1; j <= step; j++) {
                if (_opt.vertical) {
                    moveBoxLi.eq(liLen - j).css({
                        position: "relative",
                        top: -len * scrollWidth + "px"
                    })
                } else {
                    moveBoxLi.eq(liLen - j).css({
                        position: "relative",
                        left: -len * scrollWidth + "px"
                    })
                }
            }
        }
        i--;
        move(function () {
            if (i == -1) {
                i = len - 1;
                moveBoxLi.removeAttr("style");
                if (_opt.vertical) {
                    moveBox.css("top", -i * scrollWidth)
                } else {
                    moveBox.css("left", -i * scrollWidth)
                }
            }
        },
            i)
    }
    function move(callback, _index) {
        lazyImg();
        if (_opt.hasCount) {
            if (_index > len - 1) {
                _index = 0
            }
            if (_index < 0) {
                _index = len - 1
            }
            curCount.html(_index + 1)
        }
        if (!callback) {
            callback = function () { }
        }
        if (_opt.vertical) {
            moveBox.stop(true).animate({
                top: -i * scrollWidth
            },
                300, callback)
        } else {
            moveBox.stop(true).animate({
                left: -i * scrollWidth
            },
                300, callback)
        }
        chooseLabel(i == len ? 0 : i);
        if (pager) {
            pager.find("li").removeClass("current").eq(i == len ? 0 : i).addClass("current")
        }
    }
    function lazyImg() {
        if (!_opt.isLazyLoad) {
            return
        }
        for (var j = 0; j < step; j++) {
            var _thisImg = moveBoxLi.eq(i * step + j).find("img[src3]");
            _thisImg.each(function () {
                var _this = $(this);
                _this.attr("src", _this.attr("src3")).removeAttr("src3").addClass("err-product")
            })
        }
    }
    function createLabel() {
        var dom = [],
            j,
            timer;
        dom.push('<div class="page-list"><ul>');
        for (j = 1; j <= len; j++) {
            dom.push("<li" + (j == 1 ? ' class="current"' : "") + "></li>")
        }
        dom.push("</ul></div>");
        var pager = $(dom.join("")).appendTo(box);
        pager.find("li").hover(function () {
            var index = $(this).index(),
                begin = index * step,
                over = (index + 1) * step;
            timer = setTimeout(function () {
                for (var n = begin; n < over; n++) {
                    moveBox.find("li").eq(n).find("img[src3]").each(function () {
                        var _this = $(this);
                        _this.attr("src", _this.attr("src3")).removeAttr("src3").addClass("err-product")
                    })
                }
                moveBox.stop(true).animate({
                    left: -index * scrollWidth
                },
                    300);
                chooseLabel(index);
                if (_opt.hasCount) {
                    curCount.html(index + 1)
                }
                i = index
            },
                100)
        },
            function () {
                clearTimeout(timer)
            })
    }
    function chooseLabel(i) {
        box.find(".page-list li").removeClass("current").eq(i).addClass("current")
    }
    if (_opt.hasLabel && len > 1) {
        createLabel()
    }
    if (_opt.delay) {
        var auto = setInterval(function () {
            next()
        },
            _opt.delay);
        box.hover(function () {
            clearInterval(auto)
        },
            function () {
                auto = setInterval(function () {
                    next()
                },
                    _opt.delay)
            })
    }
    if (_opt.isRandom) {
        var random = Math.floor(Math.random() * len),
            begin = random * step,
            over = (random + 1) * step;
        for (var n = begin; n < over; n++) {
            moveBox.find("li").eq(n).find("img[src3]").each(function () {
                var _this = $(this);
                _this.attr("src2", _this.attr("src3")).removeAttr("src3").addClass("err-product")
            })
        }
        chooseLabel(random);
        moveBox.stop(true).animate({
            left: -random * scrollWidth
        },
            300);
        i = random
    }
};
var SFELion = SFELion || {};
SFELion.dialog = SFELion.dialog || (function (WIN, DOC, $, undefined) {
    if (!jQuery) {
        throw new Error("The plugin requires jQuery")
    }
    var msie = /MSIE/.test(navigator.userAgent);
    var ie6 = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent);
    var flag = true;
    $.fn.snfadeIn = function (speed, callback) {
        return this.animate({
            opacity: "show"
        },
            speed,
            function () {
                if (!!msie) {
                    this.style.removeAttribute("filter")
                }
                if ($.isFunction(callback)) {
                    callback()
                }
            })
    };
    var overlay = '<div class="m-lion-dialog-overlay"><div class="close lay overlay" ></div><!--[if IE 6]><iframe class="close lay frame"  src="about:blank" frameborder="0" ></iframe><![endif]--></div>';
    var dialog = '<div class="m-lion-dialog"><div class="container"><div class="title"><h3>温馨提示</h3></div><a href="javascript:;" class="btn close" title="关闭"></a><div class="content"></div></div></div>';
    function setup($) {
        $.mLionDialog = function (opts) {
            if (flag) {
                install(opts);
                flag = false
            }
        };
        $.unmLionDialog = function (opts, cb) {
            uninstall(opts);
            if ($.isFunction(cb)) {
                cb()
            }
            flag = true
        };
        $.mLionDialog.defaults = {
            css: {
                width: "450px",
                position: "fixed",
                _position: "absolute"
            },
            overlayCss: {},
            title: "温馨提示",
            message: "",
            callback: null,
            http: null,
            fadeIn: 0,
            fadeOut: 0,
            overlay: true,
            overlayClick: false,
            timeout: null,
            draggable: true,
            closeFn: $.noop,
            iframeSrc: /^https/i.test(window.location.href || "") ? "https://imgssl.suning.com/images/ShoppingArea/Common/blankbg.gif" : "about:blank"
        };
        var t, inopts, store, defs;
        function install(opts) {
            opts = $.extend({},
                $.mLionDialog.defaults, opts || {});
            if (t) {
                clearTimeout(t)
            }
            $("body").append(dialog).append(overlay);
            close(opts);
            render(opts);
            inopts = opts
        }
        function uninstall(opts) {
            if (!!opts) {
                opts = $.extend({},
                    $.mLionDialog.defaults, opts || {})
            } else {
                opts = inopts
            }
            var fadeOut = typeof opts.fadeOut == "number" ? opts.fadeOut : 0;
            $(".m-lion-dialog").children().fadeOut(0,
                function () {
                    $(".m-lion-dialog").remove()
                });
            $(".m-lion-dialog-overlay").children().fadeOut(fadeOut,
                function () {
                    $(".m-lion-dialog-overlay").remove()
                });
            opts.closeFn();
            if (store !== undefined) {
                opts.message.html(defs)
            }
            store = undefined
        }
        function render(opts) {
            if (!!opts.message && !opts.http) {
                if (typeof opts.message == "object") {
                    store = opts.message.children().size() ? opts.message.children() : opts.message.html();
                    defs = opts.message.children().size() ? store.clone() : opts.message.html();
                    $(".m-lion-dialog").find(".content").append(store)
                } else {
                    if (typeof opts.message == "string") {
                        $(".m-lion-dialog").find(".content").html(opts.message)
                    }
                }
            } else {
                if (!opts.message && !!opts.http && typeof opts.http == "function") {
                    opts.http($(".m-lion-dialog"), opts)
                } else {
                    if (!opts.message && !opts.http) {
                        throw new Error("至少,必须设置其中一个参数")
                    }
                }
            }
            if (typeof opts.css == "object") {
                $(".m-lion-dialog").css(opts.css);
                if (ie6) {
                    $(".m-lion-dialog").css("position", "absolute")
                }
            }
            var $dialog = $(".m-lion-dialog");
            var $overlay = $(".m-lion-dialog-overlay");
            var $lay = $(".m-lion-dialog-overlay .lay");
            var fadeIn = typeof opts.fadeIn == "number" ? opts.fadeIn : 0;
            var css = $.extend({},
                $.mLionDialog.defaults.css, opts.css || {});
            $dialog.find(".container").snfadeIn(100,
                function () {
                    if (typeof opts.callback == "function") {
                        opts.callback(this, opts)
                    }
                });
            if (typeof opts.title == "string") {
                $(".m-lion-dialog .title h3").html(opts.title)
            }
            function resize() {
                var $m = $(".m-lion-dialog").height();
                var $w = $(WIN).height();
                var $b = $("body").height();
                if (ie6) {
                    $dialog.css({
                        marginLeft: -$dialog.width() / 2,
                        marginTop: ($m > $w ? 0 : ($(document).scrollTop() - $(".m-lion-dialog").height() / 2)),
                        top: ($m > $w ? 0 : "50%")
                    })
                } else {
                    $dialog.css(css).css({
                        marginLeft: -$dialog.width() / 2,
                        marginTop: ($m > $w ? 0 : -$m / 2),
                        top: ($m > $w ? 0 : "50%")
                    })
                }
                $lay.height(Math.max($b, $w))
            }
            resize();
            if (ie6) {
                $(WIN).scroll(function () {
                    $dialog.css({
                        marginTop: ($(".m-lion-dialog").height() > $(WIN).height() ? $(document).scrollTop() : ($(document).scrollTop() - $(".m-lion-dialog").height() / 2))
                    })
                })
            }
            $(WIN).resize(function () {
                resize()
            });
            var overlayCss = $.extend({},
                $.mLionDialog.defaults.overlayCss, opts.overlayCss || {});
            if (opts.overlay === true) {
                $lay.css(overlayCss).snfadeIn(fadeIn)
            }
        }
        function close(opts) {
            var closeArr = [".close"];
            if (typeof opts.timeout == "number") {
                t = setTimeout(function () {
                    $.unmLionDialog()
                },
                    opts.timeout)
            }
            if (!!opts.overlayClick) {
                closeArr.push(".m-lion-dialog-overlay")
            }
            for (var i = 0; i < closeArr.length; i++) {
                $(".m-lion-dialog").on("click.addedClose", closeArr[i],
                    function () {
                        $.unmLionDialog()
                    })
            }
        }
        $.resizeLionDialog = function () {
            var $dialog = $(".m-lion-dialog");
            var $m = $(".m-lion-dialog").height();
            var $w = $(WIN).height();
            var $b = $("body").height();
            var $lay = $(".m-lion-dialog-overlay .lay");
            if (ie6) {
                $dialog.css({
                    marginLeft: -$dialog.width() / 2,
                    marginTop: ($m > $w ? 0 : ($(document).scrollTop() - $(".m-lion-dialog").height() / 2)),
                    top: ($m > $w ? 0 : "50%")
                })
            } else {
                $dialog.css({
                    marginLeft: -$dialog.width() / 2,
                    marginTop: ($m > $w ? 0 : -$m / 2),
                    top: ($m > $w ? 0 : "50%")
                })
            }
            $lay.height(Math.max($b, $w))
        }
    }
    setup(jQuery)
})(window, document, jQuery);
if (typeof define === "function") {
    define("SFELion.dialog.dev", ["jquery"],
        function (require, exports, module) {
            module.exports = SFELion.dialog
        })
};
var cart2Util = {
    tip: function (opt) {
        var _opt = {
            msg: null,
            wrap: $("body"),
            pos: "bottom",
            style: null,
            arrLeft: null,
            arrTop: null,
            callback: null,
            flag: null,
            extraClass: null
        };
        $.extend(_opt, opt);
        var sTip;
        if (_opt.flag) {
            sTip = _opt.wrap.find("." + _opt.flag)
        } else {
            sTip = _opt.wrap.find(".single-tooltip")
        }
        var tpl = '<div class="single-tooltip ui-tooltip-' + _opt.pos + " " + (_opt.flag ? _opt.flag : "") + " " + (_opt.extraClass ? _opt.extraClass : "") + ' "><div class="ui-tooltip-arrow"><i class="ui-tooltip-arrow-front">◆</i><i class="ui-tooltip-arrow-back">◆</i></div><div class="ui-tooltip-inner">' + _opt.msg + "</div></div>";
        if (sTip.length) {
            sTip.show()
        } else {
            _opt.wrap.append(tpl);
            if (_opt.flag) {
                sTip = _opt.wrap.find("." + _opt.flag)
            } else {
                sTip = _opt.wrap.find(".single-tooltip")
            }
            if (_opt.style) {
                sTip.css(_opt.style)
            }
        }
        if (typeof _opt.callback == "function") {
            _opt.callback.call(null, _opt)
        }
    },
    tipFn: function () {
        st.tooltipNew.run({
            selector: ".tip-common-hover-fn-btn",
            type: "hover",
            placement: "bottom",
            openFn: function (options, tipDom, targetDom, tipFn) { },
            closeFn: function (tipDom, targetDom, tipFn) { }
        });
        st.tooltipNew.run({
            selector: ".tip-common-click-fn-btn",
            type: "click",
            placement: "top",
            openFn: function (options, tipDom, targetDom, tipFn) {
                if (tipDom.hasClass("finish-view-list")) {
                    tipDom.find(".close").click(function () {
                        tipFn.allHide()
                    })
                }
            },
            closeFn: function (tipDom, targetDom, tipFn) {
                if (tipDom.hasClass("finish-view-list")) {
                    tipDom.find(".close").unbind("click")
                }
            }
        })
    }
};