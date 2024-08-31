(function () {
    "use strict";
    var t = {
        8885: function (t, e, n) {
            var o = n(6369), i = n(8499), c = n.n(i), a = function () {
                var t = this, e = t._self._c;
                return e("div", {attrs: {id: "app"}}, [e("HelloWorld")], 1)
            }, l = [], s = function () {
                var t = this, e = t._self._c;
                return e("el-container", {staticStyle: {height: "100vh"}}, [e("el-header", {
                    staticClass: "header",
                    attrs: {height: "10vh"}
                }, [e("el-image", {
                    staticStyle: {
                        width: "auto",
                        height: "8vh",
                        "margin-left": "2vw",
                        "margin-right": "2vw"
                    }, attrs: {src: t.logo_img}
                }), e("el-menu", {
                    attrs: {
                        "default-active": t.activeIndex,
                        mode: "horizontal",
                        "active-text-color": "#16356C"
                    }, on: {select: t.handleSelect}
                }, [e("el-menu-item", {
                    staticClass: "el-menu-demo",
                    attrs: {index: "0"}
                }, [t._v("教育数字化")]), e("el-menu-item", {
                    staticClass: "el-menu-demo",
                    attrs: {index: "1"}
                }, [t._v("高等教育")]), e("el-menu-item", {
                    staticClass: "el-menu-demo",
                    attrs: {index: "2"}
                }, [t._v("基础教育")])], 1)], 1), e("el-main", [e("div", {staticClass: "content-title"}, [t._v(t._s(t.now.title))]), e("el-carousel", {
                    attrs: {
                        interval: 3e3,
                        type: "card",
                        height: "55vh"
                    }, on: {change: t.getCardChange}
                }, t._l(t.now.items, (function (n, o) {
                    return e("el-carousel-item", {key: n.title}, [e("div", {
                        staticClass: "card",
                        style: {opacity: o == t.nowCardIndex ? .9 : .4},
                        on: {
                            click: function (e) {
                                return t.tapImage(o)
                            }
                        }
                    }, [e("el-image", {
                        staticClass: "card-img",
                        staticStyle: {height: "55vh"},
                        attrs: {src: n.img},
                        on: {
                            click: function (e) {
                                return t.tapImage(o)
                            }
                        }
                    }, [t._v("> ")]), e("div", {staticClass: "card-subTitle"}, [t._v(t._s(n.title))])], 1)])
                })), 1)], 1), e("el-footer", [t._v("教育数字化转型资源集锦")]), e("el-dialog", {
                    attrs: {
                        fullscreen: !0,
                        visible: t.dialogVisible
                    }, on: {
                        "update:visible": function (e) {
                            t.dialogVisible = e
                        }, close: t.closeDialog
                    }
                }, [e("span", {
                    staticClass: "dialog-title",
                    attrs: {slot: "title"},
                    slot: "title"
                }, [t._v(t._s(t.chosenItem.title))]), e("video", {
                    attrs: {
                        id: "video",
                        width: "70%",
                        controls: "",
                        autoplay: !0,
                        src: t.chosenItem.vedio
                    }
                })])], 1)
            }, r = [];
            const d = [{
                title: "教育数字化",
                items: [{
                    title: "教育数字化转型战略行动",
                    img: "https://oss.funcfang.cn/ccnu/yan0/zy.png",
                    vedio: "http://1318089688.vod-qcloud.com/d84817b6vodcq1318089688/56cd0f801397757885935338295/IeAgkK9hvgAA.mp4"
                },{
                    title: "数据驱动 融合创新——华中师范大学全面推进教育数字化的实践探索",
                    img: "http://1318089688.vod-qcloud.com/af32055evodtranscq1318089688/4f8618991397757891964847230/coverBySnapshot_10_0.jpg",
                    vedio: "http://1318089688.vod-qcloud.com/d84817b6vodcq1318089688/4f8618991397757891964847230/zpDtRLwVd8MA.mp4"
                },  
                {
                    title: "学校教育数字化转型规划",
                    img: "https://oss.funcfang.cn/ccnu/yan0/zx.png",
                    vedio: "http://1318089688.vod-qcloud.com/d84817b6vodcq1318089688/0eece5b31397757885941303194/8EANzqIBZHQA.mp4"
                }, {
                    title: "世界数字教育大会",
                    img: "https://oss.funcfang.cn/ccnu/yan0/dahui.png",
                    vedio: "http://1318089688.vod-qcloud.com/d84817b6vodcq1318089688/60b749761397757885942526162/Cx08e84bHUAA.mp4"
                }]
            }, {
                title: "高等教育",
                items: [{
                    title: "数字化卓越教师培养体系的构建与实践",
                    img: "https://oss.funcfang.cn/ccnu/yan0/teacher.png",
                    vedio: "http://1318089688.vod-qcloud.com/d84817b6vodcq1318089688/185566fa1397757885941716922/PmEfjFZg14EA.mp4"
                }, 
                  {
                    title: "数字人文实践中的“云上中文”平台构筑与应用",
                    img: "http://1318089688.vod-qcloud.com/af32055evodtranscq1318089688/59a289d01397757885942210805/coverBySnapshot_10_0.jpg",
                    vedio: "http://1318089688.vod-qcloud.com/d84817b6vodcq1318089688/59a289d01397757885942210805/zjlLM4xrsZAA.mp4"
                }]
            }, {
                title: "基础教育",
                items: [{
                    title: '"互联网+”支撑省域基础教育优质均衡发展',
                    img: "http://1318089688.vod-qcloud.com/af32055evodtranscq1318089688/8b1009291397757885939387818/coverBySnapshot_10_0.jpg",
                    vedio: "http://1318089688.vod-qcloud.com/d84817b6vodcq1318089688/8b1009291397757885939387818/Pa7bDDK5pxkA.mp4"
                }, {
                    title: "AI+三个课堂“开好课创新实践片",
                    img: "https://oss.funcfang.cn/ccnu/yan0/ai3.png",
                    vedio: "http://1318089688.vod-qcloud.com/d84817b6vodcq1318089688/a3ea67b61397757885936356311/yVu9Zp2U6XQA.mp4"
                }, {
                    title: "人工智能引领的科学教育创新",
                    img: "http://1318089688.vod-qcloud.com/af32055evodtranscq1318089688/ea2c701b1397757885937094253/coverBySnapshot_10_0.jpg",
                    vedio: "http://1318089688.vod-qcloud.com/d84817b6vodcq1318089688/ea2c701b1397757885937094253/KxXStZUBUXEA.mp4"
                }]
            }];
            var u = {
                    name: "HelloWorld", data() {
                        return {
                            activeIndex: "0",
                            logo_img: "temp.png",
                            dialogVisible: !1,
                            now: d[0],
                            chosenItem: d[0].items[0],
                            nowCardIndex: 0
                        }
                    }, methods: {
                        handleSelect(t) {
                            this.now = d[t], this.activeIndex = t + ""
                        }, getCardChange(t) {
                            this.nowCardIndex = t
                        }, tapImage(t) {
                            t == this.nowCardIndex ? (this.dialogVisible = !0, this.chosenItem = this.now.items[t]) : setTimeout((() => {
                                this.dialogVisible = !0, this.chosenItem = this.now.items[t]
                            }), 700)
                        }, closeDialog() {
                            const t = document.getElementById("video");
                            t.pause()
                        }
                    }
                }, m = u, v = n(1001), f = (0, v.Z)(m, s, r, !1, null, "1870551c", null), h = f.exports,
                p = {name: "App", components: {HelloWorld: h}}, g = p, y = (0, v.Z)(g, a, l, !1, null, null, null),
                b = y.exports;
            o["default"].use(c()), new o["default"]({el: "#app", render: t => t(b)})
        }
    }, e = {};

    function n(o) {
        var i = e[o];
        if (void 0 !== i) return i.exports;
        var c = e[o] = {id: o, loaded: !1, exports: {}};
        return t[o].call(c.exports, c, c.exports, n), c.loaded = !0, c.exports
    }

    n.m = t, function () {
        n.amdO = {}
    }(), function () {
        var t = [];
        n.O = function (e, o, i, c) {
            if (!o) {
                var a = 1 / 0;
                for (d = 0; d < t.length; d++) {
                    o = t[d][0], i = t[d][1], c = t[d][2];
                    for (var l = !0, s = 0; s < o.length; s++) (!1 & c || a >= c) && Object.keys(n.O).every((function (t) {
                        return n.O[t](o[s])
                    })) ? o.splice(s--, 1) : (l = !1, c < a && (a = c));
                    if (l) {
                        t.splice(d--, 1);
                        var r = i();
                        void 0 !== r && (e = r)
                    }
                }
                return e
            }
            c = c || 0;
            for (var d = t.length; d > 0 && t[d - 1][2] > c; d--) t[d] = t[d - 1];
            t[d] = [o, i, c]
        }
    }(), function () {
        n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t["default"]
            } : function () {
                return t
            };
            return n.d(e, {a: e}), e
        }
    }(), function () {
        n.d = function (t, e) {
            for (var o in e) n.o(e, o) && !n.o(t, o) && Object.defineProperty(t, o, {enumerable: !0, get: e[o]})
        }
    }(), function () {
        n.g = function () {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" === typeof window) return window
            }
        }()
    }(), function () {
        n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
    }(), function () {
        n.r = function (t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }
    }(), function () {
        n.nmd = function (t) {
            return t.paths = [], t.children || (t.children = []), t
        }
    }(), function () {
        var t = {143: 0};
        n.O.j = function (e) {
            return 0 === t[e]
        };
        var e = function (e, o) {
            var i, c, a = o[0], l = o[1], s = o[2], r = 0;
            if (a.some((function (e) {
                return 0 !== t[e]
            }))) {
                for (i in l) n.o(l, i) && (n.m[i] = l[i]);
                if (s) var d = s(n)
            }
            for (e && e(o); r < a.length; r++) c = a[r], n.o(t, c) && t[c] && t[c][0](), t[c] = 0;
            return n.O(d)
        }, o = self["webpackChunkccnu_for_ai"] = self["webpackChunkccnu_for_ai"] || [];
        o.forEach(e.bind(null, 0)), o.push = e.bind(null, o.push.bind(o))
    }();
    var o = n.O(void 0, [998], (function () {
        return n(8885)
    }));
    o = n.O(o)
})();
//# sourceMappingURL=app.0df02320.js.map
