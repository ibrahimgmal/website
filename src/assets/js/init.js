var MetaVerseFilterArray = [],
    MetaVerseFilterCondition = "and";
! function(e) {
    "use strict";
    var t = !1,
        n = 0,
        a = new Date,
        i = {
            init: function() {
                i.ready(), i.imgToSVG(), i.BgImg(), i.totopFixer(), i.slider(), i.headerFixer(), i.fn_cs_counter(), i.video(), i.collection(), i.contactForm(), i.totopScroll(), i.walletAndRightNavOpener(), i.resizeWalletAndRightNav(), i.headerAnchor(), i.isotope(), i.qnt(), i.countdown(), i.hold(), i.filterItems(), i.applyFilter(), i.navSubMenu(), i.animatedText(), i.glitchSlider(), i.movingCollection(), i.lineAnimation(), i.headerMove(), i.roadmapSlider(), i.accordion(), i.blogSlider(), i.sponsorSlider(), i.totopAppearing(), i.fullSlider(), i.floww(), i.zigZagCarousel()
            },
            floww: function() {
                i.BgImg(), e(".frenify_cards_gallery").each(function() {
                    var t = e(this),
                        n = t.find("ul"),
                        a = n.children("li");
                    if (a.length < 5) return !1;
                    i.floww_change_slide(1, t), a.on("click", function() {
                        var n = e(this).index() + 1;
                        i.floww_change_slide(n, t)
                    }), i.floww_start_autoplay(n, t)
                })
            },
            floww_start_autoplay: function(e, t) {
                var n = null;
                clearInterval(n), n = setInterval(function() {
                    var n = e.find(".current").index() + 2;
                    i.floww_change_slide(n, t)
                }, 5e3)
            },
            floww_change_slide: function(e, t) {
                var n = t.find("ul").children("li"),
                    a = n.length;
                e = (e + a) % a;
                var s = n.eq(e - 1);
                if (!s.hasClass("current")) {
                    n.removeClass("current next1 next2 prev1 prev2 next3 prev3"), s.addClass("current");
                    var o = (e + 1) % a,
                        r = (e + 2) % a,
                        l = (e + 3) % a,
                        c = (e - 1 + a) % a,
                        d = (e - 2 + a) % a,
                        f = (e - 3 + a) % a;
                    n.eq(o - 1).addClass("next1"), n.eq(r - 1).addClass("next2"), n.eq(c - 1).addClass("prev1"), n.eq(d - 1).addClass("prev2"), a > 6 && (n.eq(l - 1).addClass("next3"), n.eq(f - 1).addClass("prev3")), i.floww_calc_call(t)
                }
            },
            flow_calc: function(e) {
                var t = e.width(),
                    n = e.data("initial-width"),
                    a = e.data("ratio"),
                    i = 20,
                    s = (t - (i *= 2)) / 2 > n ? n : (t - i) / 2,
                    o = s * a + i,
                    r = e.find("ul"),
                    l = r.children("li");
                r.height(o + "px"), l.find(".img_holder img").css({
                    width: s + "px",
                    height: o - i + "px"
                }), l.css({
                    width: s + "px",
                    height: o + "px"
                });
                var c = t / 2 - s / 2,
                    d = c + s / 2.5,
                    f = d + s / 2.5,
                    v = c - s / 2.5;
                l.css({
                    left: "50%",
                    transform: "scale(0)"
                }), r.find(".current").css({
                    left: c + "px",
                    top: 0,
                    transform: "scale(1) translateZ(0) rotate(0)"
                }), r.find(".next1").css({
                    left: d + "px",
                    top: "90px",
                    transform: "scale(1) translateZ(0) rotate(15deg)"
                }), r.find(".next2").css({
                    left: f + "px",
                    top: "240px",
                    transform: "scale(1) translateZ(0) rotate(30deg)"
                }), r.find(".prev1").css({
                    left: v + "px",
                    top: "90px",
                    transform: "scale(1) translateZ(0) rotate(-15deg)"
                }), r.find(".prev2").css({
                    left: v - s / 2.5 + "px",
                    top: "240px",
                    transform: "scale(1) translateZ(0) rotate(-30deg)"
                }), l.length > 6 && (r.find(".prev3").css({
                    left: v - s / 2.5 + "px",
                    top: "360px",
                    transform: "scale(1) translateZ(0) rotate(-45deg)"
                }), r.find(".next3").css({
                    left: f + s / 2.5 + "px",
                    top: "360px",
                    transform: "scale(1) translateZ(0) rotate(45deg)"
                }))
            },
            floww_calc_call: function(t) {
                void 0 === t ? e(".frenify_cards_gallery").each(function() {
                    t = e(this), i.flow_calc(t)
                }) : i.flow_calc(t)
            },
            fullSlider: function() {
                e(".fn_cs_full_slider .swiper-container").each(function() {
                    var t = e(this),
                        n = "Y",
                        a = "horizontal";
                    "horizontal" === a && (n = "X");
                    var i = 1;
                    e("body").hasClass("rtl") && (i = -1);
                    var s = {
                        loop: !0,
                        speed: 1500,
                        autoplay: {
                            delay: 5e3,
                            disableOnInteraction: !1
                        },
                        navigation: {
                            nextEl: t.closest(".fn_cs_full_slider").find(".next"),
                            prevEl: t.closest(".fn_cs_full_slider").find(".prev")
                        },
                        slidesPerView: 1,
                        direction: a,
                        loopAdditionalSlides: 10,
                        watchSlidesProgress: !0,
                        on: {
                            init: function() {
                                this.autoplay.stop()
                            },
                            imagesReady: function() {
                                this.autoplay.start()
                            },
                            progress: function() {
                                for (var t = 0; t < this.slides.length; t++) {
                                    var a, s = this.slides[t].progress * (.5 * this.width) * i;
                                    e(this.slides[t]).find(".abs_img").css({
                                        transform: "translate" + n + "(" + s + "px)"
                                    })
                                }
                            },
                            touchStart: function() {
                                for (var e = this, t = 0; t < e.slides.length; t++) e.slides[t].style.transition = ""
                            },
                            setTransition: function(e) {
                                for (var t = this, n = 0; n < t.slides.length; n++) t.slides[n].style.transition = e + "ms", t.slides[n].querySelector(".abs_img").style.transition = e + "ms"
                            }
                        }
                    };
                    new Swiper(t, s)
                })
            },
            zigZagCarousel: function() {
                e(".fn_cs_zigzag").each(function() {
                    var t = e(this).find(".swiper-container"),
                        n = e(this).find(".slider_nav .next"),
                        a = e(this).find(".slider_nav .prev");
                    new Swiper(t, {
                        loop: !0,
                        speed: 1e3,
                        autoplay: {
                            delay: 3e3,
                            disableOnInteraction: !1
                        },
                        slidesPerView: 3,
                        spaceBetween: 30,
                        direction: "horizontal",
                        loopAdditionalSlides: 10,
                        navigation: {
                            nextEl: n,
                            prevEl: a
                        },
                        breakpoints: {
                            320: {
                                slidesPerView: 1
                            },
                            767: {
                                slidesPerView: 1
                            },
                            1201: {
                                slidesPerView: 2
                            },
                            1401: {
                                slidesPerView: 3
                            }
                        }
                    })
                })
            },
            sponsorSlider: function() {
                e(".fn_cs_sponsor").each(function() {
                    var t = e(this).find(".swiper-container");
                    new Swiper(t, {
                        loop: !0,
                        speed: 1e3,
                        autoplay: {
                            delay: 3e3,
                            disableOnInteraction: !1
                        },
                        slidesPerView: 5,
                        spaceBetween: 30,
                        direction: "horizontal",
                        loopAdditionalSlides: 10,
                        breakpoints: {
                            320: {
                                slidesPerView: 1
                            },
                            767: {
                                slidesPerView: 1
                            },
                            1201: {
                                slidesPerView: 3
                            },
                            1401: {
                                slidesPerView: 5
                            }
                        }
                    })
                })
            },
            blogSlider: function() {
                e(".fn_cs_blog").each(function() {
                    var t = e(this).find(".swiper-container");
                    new Swiper(t, {
                        loop: !0,
                        speed: 1e3,
                        autoplay: {
                            delay: 3e3,
                            disableOnInteraction: !1
                        },
                        slidesPerView: 2,
                        spaceBetween: 60,
                        direction: "horizontal",
                        loopAdditionalSlides: 10,
                        watchSlidesProgress: !0,
                        pagination: {
                            clickable: !0,
                            el: ".swiper-pagination",
                            renderBullet: function(e, t) {
                                return '<span class="' + t + '"></span>'
                            }
                        },
                        breakpoints: {
                            320: {
                                slidesPerView: 1
                            },
                            767: {
                                slidesPerView: 1
                            },
                            1201: {
                                slidesPerView: 1
                            },
                            1401: {
                                slidesPerView: 2
                            }
                        }
                    })
                })
            },
            accordion: function() {
                e(".fn_cs_accordion").each(function() {
                    var t = e(this);
                    t.find(".active").each(function() {
                        e(this).find(".acc_content").slideDown(300)
                    }), t.find(".acc_header").off().on("click", function() {
                        var t = e(this).closest(".acc_item");
                        return t.hasClass("active") ? t.removeClass("active").find(".acc_content").slideUp(300) : (t.siblings(".active").removeClass("active").find(".acc_content").slideUp(300), t.addClass("active").find(".acc_content").slideDown(300)), !1
                    })
                })
            },
            roadmapSlider: function() {
                e(".fn_cs_roadmap").each(function() {
                    var t = e(this).find(".roadmap_top .swiper-container"),
                        n = e(this).find(".roadmap_bottom .swiper-container"),
                        a = new Swiper(t, {
                            loop: !0,
                            speed: 1e3,
                            autoplay: {
                                delay: 6e3,
                                disableOnInteraction: !1
                            },
                            slidesPerView: "auto",
                            spaceBetween: 0,
                            direction: "horizontal",
                            loopAdditionalSlides: 10,
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !0
                        }),
                        i = new Swiper(n, {
                            loop: !0,
                            speed: 1e3,
                            autoplay: {
                                delay: 6e5,
                                disableOnInteraction: !1
                            },
                            slidesPerView: 1,
                            spaceBetween: 50,
                            direction: "horizontal",
                            loopAdditionalSlides: 10,
                            watchSlidesProgress: !0
                        });
                    i.controller.control = a, a.controller.control = i
                })
            },
            animatedText: function() {
                var t = e("body");
                e(".fn_animated_text").each(function() {
                    var n = e(this),
                        a = n.text().split(" ");
                    n.addClass("ready");
                    var i = n.data("color");
                    i && void 0 !== i || (i = "");
                    var s = i.replace(/[^a-zA-Z0-9]/g, "_"),
                        o = n.data("to-color");
                    o && void 0 !== o || (o = "var(--mc2)");
                    var r = "",
                        l = 0;
                    n.waypoint({
                        handler: function() {
                            if (!n.hasClass("stop")) {
                                n.addClass("stop"), n.text("");
                                var c = "";
                                e.each(a, function(t, n) {
                                    r = "", e.each(n.split(""), function(e, t) {
                                        r += '<span class="letter" style="animation: FrenifyLetterAnimation' + s + " .5s " + .03 * l + 's  forwards">' + t + "</span>", l++
                                    }), c += '<span class="word">' + r + "</span>&nbsp"
                                }), t.append("<style>@keyframes FrenifyLetterAnimation" + s + " { 60% {transform: translate(20px, 0) scale(1); color: " + i + ";} 80% {transform: translate(20px, 0) scale(1); color: " + i + ";} 99% {transform: translate(0) scale(1.2);color: " + o + ";} 100% {transform: translate(0) scale(1); opacity: 1; color: " + i + ';} }.fn_animated_text[data-color="' + i + '"],.desc[data-color="' + i + '"],.fn_animated_text[data-color="' + i + '"] .letter{color: ' + i + ";}</style>"), setTimeout(function() {
                                    n.addClass("done")
                                }, 500 + 30 * l), n.html(c)
                            }
                        },
                        offset: "90%"
                    })
                })
            },
            glitchSlider: function() {
                e(".fn_cs_glitch_slider").each(function() {
                    for (var t = e(this), n = t.find(".slider li").length, a = 2, i = "", s = 0; s < n; s++) i += '<li style="bottom:' + 60 * s + 'px"><div class="item"></div></li>';
                    i = '<div class="pagination"><ul style="height:' + (60 * n - 10) + 'px">' + i + "</ul></div>", t.append(i), setTimeout(function() {
                        t.find(".pagination li").eq(0).addClass("active")
                    }, 1), setInterval(function() {
                        a > n && (a = 1), t.find(".active").removeClass("active"), t.find("li:nth-child(" + a + ")").addClass("active"), a++
                    }, 3e3)
                })
            },
            movingCollection: function() {
                e(".fn_cs_moving_collection").each(function() {
                    var t = e(this),
                        n = t.data("direction"),
                        a = t.data("speed"),
                        i = t.data("gap"),
                        s = parseFloat(t.data("ratio")),
                        o = parseInt(t.data("width"));
                    t.find(".item").css({
                        width: o + "px"
                    }), t.find(".item img").css({
                        marginBottom: 100 * s - 100 + "%"
                    });
                    var r = !1;
                    "right" === n && (r = !0), t.find(".owl-carousel").owlCarousel({
                        loop: !0,
                        margin: i,
                        nav: !1,
                        dots: !1,
                        autoWidth: !0,
                        items: 4,
                        autoplay: !0,
                        autoplayTimeout: a,
                        smartSpeed: a,
                        slideTransition: "linear",
                        rtl: r
                    })
                })
            },
            navSubMenu: function() {
                e(".metaverse_fn_rightnav .nav_holder a").off().on("click", function() {
                    var t = e(this),
                        a = t.siblings(".sub-menu"),
                        s = e(".metaverse_fn_rightnav .nav_holder .icon").html();
                    if (a.length) return t.parent().siblings().children("a").removeClass("active"), t.addClass("active"), n++, a.find(">li>.prev").length || a.prepend('<li><a href="#" class="prev"><span class="creative_link">' + s + t.text() + "</span></a></li>"), e(".metaverse_fn_rightnav .nav_holder > ul").css({
                        transform: "translateX(-" + 100 * n + "%)"
                    }), i.previousItems(), !1
                })
            },
            previousItems: function() {
                e(".metaverse_fn_rightnav .nav_holder .prev").off().on("click", function() {
                    return n--, e(".metaverse_fn_rightnav .nav_holder > ul").css({
                        transform: "translateX(-" + 100 * n + "%)"
                    }), !1
                })
            },
            isotopeCollection: function() {
                e(".grid").isotope({
                    itemSelector: "li",
                    layoutMode: "fitRows"
                })
            },
            applyFilter: function() {
                i.isotopeCollection(), e(".metaverse_fn_filters .checkbox").off().on("click", function() {
                    var t = e(this),
                        n = t.closest(".metaverse_fn_collection"),
                        a = n.find(".metaverse_fn_result_box"),
                        s = t.data("id"),
                        o = t.data("category"),
                        r = t.find(".text").text(),
                        l = a.find(".filter_count span");
                    if (t.hasClass("selected")) {
                        t.removeClass("selected"), n.find('.result_item[data-id="' + s + '"]').remove(), 0 === a.find(".result_item").length && (a.find(".clear_all").remove(), a.find(".condition_trigger").remove(), MetaVerseFilterCondition = "and"), t.find('input[type="checkbox"]').prop("checked", ""), l.text(parseInt(l.text()) - 1);
                        var c = MetaVerseFilterArray.indexOf(s); - 1 !== c && MetaVerseFilterArray.splice(c, 1)
                    } else t.addClass("selected"), 0 === a.find(".result_item").length && a.append('<a href="#" class="clear_all">' + a.data("clear-text") + '</a><a href="#" class="condition_trigger" data-and-text="' + a.data("and-text") + '" data-or-text="' + a.data("or-text") + '"><span class="text">' + a.data("and-text") + '</span><span class="icon"></span></a>'), a.find(".clear_all").before('<div class="result_item" data-id="' + s + '"><a href="#" title="Remove Filter">' + o + ": <span>" + r + '</span><img src="svg/cancel.svg" alt="" class="fn__svg"></a></div>'), t.find('input[type="checkbox"]').prop("checked", "checked"), l.text(parseInt(l.text()) + 1), MetaVerseFilterArray.push(s), i.imgToSVG(), i.removeFilter();
                    return i.recallGridAfterFiltering(), !1
                }), i.removeFilter()
            },
            recallGridAfterFiltering: function(t) {
                var n = e(".grid").isotope({
                    itemSelector: "li",
                    layoutMode: "fitRows"
                });
                if ("clear" === t) return n.isotope({
                    filter: "*"
                }), MetaVerseFilterArray = [], MetaVerseFilterCondition = "and", !1;
                var a = "";
                0 === MetaVerseFilterArray.length ? a = "*" : "or" === MetaVerseFilterCondition ? (e.each(MetaVerseFilterArray, function(e, t) {
                    a += ".id" + t + ","
                }), a = a.slice(0, -1)) : e.each(MetaVerseFilterArray, function(e, t) {
                    a += ".id" + t
                }), n.isotope({
                    filter: a
                })
            },
            removeFilter: function() {
                e(".metaverse_fn_result_box .result_item a").off().on("click", function() {
                    var t = e(this),
                        n = t.closest(".metaverse_fn_collection"),
                        a = t.closest(".result_item"),
                        s = n.find(".metaverse_fn_result_box"),
                        o = a.data("id"),
                        r = s.find(".filter_count span");
                    a.remove(), n.find('.metaverse_fn_filters .checkbox[data-id="' + o + '"]').removeClass("selected").find('input[type="checkbox"]').prop("checked", ""), r.text(parseInt(r.text()) - 1), 0 === s.find(".result_item").length && (s.find(".clear_all").remove(), s.find(".condition_trigger").remove(), MetaVerseFilterCondition = "and");
                    var l = MetaVerseFilterArray.indexOf(o);
                    return -1 !== l && MetaVerseFilterArray.splice(l, 1), i.recallGridAfterFiltering(), !1
                }), e(".metaverse_fn_result_box .clear_all").off().on("click", function() {
                    var t = e(this),
                        n = t.closest(".metaverse_fn_collection"),
                        a = n.find(".metaverse_fn_filters"),
                        s = n.find(".metaverse_fn_result_box");
                    return s.find(".filter_count span").text(0), s.find(".result_item").remove(), t.remove(), s.find(".condition_trigger").remove(), a.find(".checkbox").removeClass("selected").find('input[type="checkbox"]').prop("checked", ""), i.recallGridAfterFiltering("clear"), !1
                }), e(".metaverse_fn_result_box .condition_trigger").off().on("click", function() {
                    var t = e(this),
                        n = t.find(".text");
                    return t.hasClass("opened") ? (t.removeClass("opened"), n.fadeOut(function() {
                        n.text(t.data("and-text")), n.fadeIn()
                    }), MetaVerseFilterCondition = "and") : (t.addClass("opened"), n.fadeOut(function() {
                        n.text(t.data("or-text")), n.fadeIn()
                    }), MetaVerseFilterCondition = "or"), i.recallGridAfterFiltering(), !1
                })
            },
            filterItems: function() {
                e(".metaverse_fn_filters .filter_item.opened").each(function() {
                    e(this).find(".filter_item__content").slideDown(300)
                }), e(".filter_item__header a").off().on("click", function() {
                    var t = e(this).closest(".filter_item");
                    return t.hasClass("opened") ? (t.removeClass("opened"), t.find(".filter_item__content").slideUp(300)) : (t.addClass("opened"), t.find(".filter_item__content").slideDown(300)), !1
                })
            },
            hold: function() {
                ! function() {
                    var t, n = e("#social,.metaverse_fn_search");

                    function a() {
                        n.addClass("hold")
                    }

                    function i() {
                        clearTimeout(t), t = setTimeout(a, 2e3), n.removeClass("hold")
                    }
                    window.onload = i, document.onmousemove = i, document.onkeypress = i
                }()
            },
            countdown: function() {
                e(".metaverse_fn_countdown").each(function() {
                    var t = e(this),
                        n = t.data("type");
                    if ("due_date" === n) var a = new Date(t.data("date")).getTime();
                    else if ("ever" === n) var i = 86400 * parseInt(t.data("days")),
                        s = 3600 * parseInt(t.data("hours")),
                        o = 60 * parseInt(t.data("minutes")),
                        r = parseInt(t.data("seconds")),
                        l = i + s + o + r;
                    var c = t.parent();
                    t.hasClass("boxed") && (t.after('<div class="metaverse_fn_boxed_countdown"><ul><li class="days"><div class="item"><div class="left__border"></div><div class="right__border"></div><div class="count"><h3>00</h3><span>Days</span></div></div></li><li class="hours"><div class="item"><div class="left__border"></div><div class="right__border"><div class="count"><h3>00</h3><span>Hours</span></div></div></li><li class="minutes"><div class="item"><div class="left__border"></div><div class="right__border"><div class="count"><h3>00</h3><span>Minutes</span></div></div></li><li class="seconds"><div class="item"><div class="left__border"></div><div class="right__border"><div class="count"><h3>00</h3><span>Seconds</span></div></div></li></ul></div>'), t.remove()), "due_date" === n ? setInterval(function() {
                        var e = new Date().getTime(),
                            n = a - e,
                            i = Math.floor(n / 864e5),
                            s = Math.floor(n % 864e5 / 36e5),
                            o = Math.floor(n % 36e5 / 6e4),
                            r = Math.floor(n % 6e4 / 1e3);
                        if (t.hasClass("boxed")) i = i < 10 ? "0" + i : i, s = s < 10 ? "0" + s : s, o = o < 10 ? "0" + o : o, r = r < 10 ? "0" + r : r, c.find(".days h3").text(i), c.find(".hours h3").text(s), c.find(".minutes h3").text(o), c.find(".seconds h3").text(r);
                        else {
                            var l = "";
                            i > 0 && (l += i + "d: "), l += s + "h: " + o + "m: " + r + "s", t.text(l)
                        }
                    }, 1e3) : "ever" === n && setInterval(function() {
                        if (i = Math.floor(l / 86400), s = Math.floor(l % 86400 / 3600), o = Math.floor(l % 3600 / 60), r = Math.floor(l % 60), t.hasClass("boxed")) i = i < 10 ? "0" + i : i, s = s < 10 ? "0" + s : s, o = o < 10 ? "0" + o : o, r = r < 10 ? "0" + r : r, c.find(".days h3").text(i), c.find(".hours h3").text(s), c.find(".minutes h3").text(o), c.find(".seconds h3").text(r);
                        else {
                            var e = "";
                            i > 0 && (e += i + "d: "), e += s + "h: " + o + "m: " + r + "s", t.text(e)
                        }
                        l--
                    }, 1e3)
                })
            },
            qnt: function() {
                e(".qnt .decrease").off().on("click", function() {
                    var t = e(this).closest(".qnt").find(".summ"),
                        n = parseInt(t.text());
                    n >= 2 && n--, t.text(n);
                    var a = n * t.data("price");
                    return t.closest(".mint_list").find(".total_price").html(a), !1
                }), e(".qnt .increase").off().on("click", function() {
                    var t = e(this).closest(".qnt").find(".summ"),
                        n = parseInt(t.text());
                    n++, t.text(n);
                    var a = n * t.data("price");
                    return t.closest(".mint_list").find(".total_price").html(a), !1
                })
            },
            isotope: function() {
                e(".fn-isotope").isotope({
                    itemSelector: ".isotope-item",
                    masonry: {}
                })
            },
            headerAnchor: function() {
                e(".header .nav a").on("click", function() {
                    var t = e(this);
                    e(t.attr("href")).length && e("html, body").animate({
                        scrollTop: e(t.attr("href")).offset().top
                    }, 1e3)
                })
            },
            resizeWalletAndRightNav: function() {
                var t = e(".metaverse_fn_walletbox").height();
                e(".metaverse_fn_walletbox .walletbox").css({
                    minHeight: t
                });
                var n = e(".metaverse_fn_rightnav").height();
                e(".metaverse_fn_rightnav .navbox").css({
                    minHeight: n
                })
            },
            ready: function() {
                e(".metaverse_fn_walletbox, .metaverse_fn_wallet_closer, .metaverse_fn_rightnav, .metaverse_fn_rightnav_closer").removeClass("ready")
            },
            walletAndRightNavOpener: function() {
                var t = e(".metaverse_fn_walletbox"),
                    n = e(".metaverse_fn_wallet_closer,.metaverse_fn_walletbox .fn__closer");
                e(".connect_btn").on("click", function() {
                    return t.addClass("active"), n.addClass("active"), !1
                }), n.on("click", function() {
                    return t.removeClass("active"), n.removeClass("active"), !1
                });
                var a = e(".metaverse_fn_rightnav"),
                    i = e(".metaverse_fn_rightnav_closer,.metaverse_fn_rightnav .fn__closer");
                e(".header .trigger,.metaverse_fn_mobnav .trigger_bar").on("click", function() {
                    return a.addClass("active"), i.addClass("active"), !1
                }), i.on("click", function() {
                    return a.removeClass("active"), i.removeClass("active"), !1
                });
                var s = e(".metaverse_fn_mobnav .trigger_menu"),
                    o = e(".metaverse_fn_mobnav .mob_bot");
                s.on("click", function() {
                    return s.hasClass("active") ? (s.removeClass("active"), o.slideUp(300)) : (s.addClass("active"), o.slideDown(300)), !1
                })
            },
            preloader: function() {
                if (t) return !1;
                t = !0;
                var n = new Date - a,
                    i = 3e3;
                n < i ? i -= n : i = 0, e(".metaverse_fn_preloader").addClass("ready")
            },
            totopAppearing: function() {
                e(window).scrollTop() > 100 ? e(".metaverse_fn_totop").addClass("active") : e(".metaverse_fn_totop").removeClass("active")
            },
            totopScroll: function() {
                e(".metaverse_fn_totop").off().on("click", function(t) {
                    t.preventDefault();
                    var n = e(this),
                        a = (e(window).scrollTop() - e(window).height()) / 2;
                    return a < 500 && (a = 500), a > 1500 && (a = 1500), n.addClass("clicked"), e("html, body").animate({
                        scrollTop: 0
                    }, a), setTimeout(function() {
                        n.removeClass("clicked")
                    }, a), !1
                })
            },
            contactForm: function() {
                e(".contact_form #send_message").on("click", function() {
                    var t = e(".contact_form #name").val(),
                        n = e(".contact_form #email").val(),
                        a = e(".contact_form #tel").val(),
                        i = e(".contact_form #subject").val(),
                        s = e(".contact_form #message").val(),
                        o = e(".contact_form .returnmessage").data("success");
                    return e(".contact_form .returnmessage").empty(), "" === t || "" === n || "" === s ? e(".contact_form .empty_notice").slideDown(500).delay(2e3).slideUp(500) : e.post("modal/contact.php", {
                        ajax_name: t,
                        ajax_email: n,
                        ajax_subject: i,
                        ajax_message: s,
                        ajax_tel: a
                    }, function(t) {
                        e(".contact_form .returnmessage").append(t), e(".contact_form .returnmessage span.contact_error").length ? e(".contact_form .returnmessage").slideDown(500).delay(2e3).slideUp(500) : (e(".contact_form .returnmessage").append("<span class='contact_success'>" + o + "</span>"), e(".contact_form .returnmessage").slideDown(500).delay(4e3).slideUp(500)), "" === t && e("#contact_form")[0].reset()
                    }), !1
                })
            },
            collection: function() {
                e(".fn_cs_collection").each(function() {
                    var t = e(this),
                        n = t.find(".item").length;
                    setInterval(function() {
                        for (var e = Math.floor(Math.random() * n), a = Math.floor(Math.random() * n); a === e;) a = Math.floor(Math.random() * n);
                        var i = t.find(".item").eq(e),
                            s = t.find(".item").eq(a),
                            o = i.find("input").val(),
                            r = s.find("input").val();
                        i.addClass("ready"), s.addClass("ready"), setTimeout(function() {
                            i.find("input").val(r), i.find(".abs_img").css({
                                backgroundImage: "url(" + r + ")"
                            }), s.find("input").val(o), s.find(".abs_img").css({
                                backgroundImage: "url(" + o + ")"
                            }), i.removeClass("ready"), s.removeClass("ready")
                        }, 500)
                    }, 2e3)
                })
            },
            video: function() {
                e(".popup-youtube, .popup-vimeo").each(function() {
                    e(this).magnificPopup({
                        disableOn: 700,
                        type: "iframe",
                        mainClass: "mfp-fade",
                        removalDelay: 160,
                        preloader: !1,
                        fixedContentPos: !1
                    })
                }), e(".popup-soundcloud").magnificPopup({
                    type: "image",
                    gallery: {
                        enabled: !0
                    }
                })
            },
            lineAnimation: function() {
                e(".fn_cs_title").each(function() {
                    var t = e(this);
                    t.waypoint({
                        handler: function() {
                            t.hasClass("ready") || t.addClass("ready")
                        },
                        offset: "80%"
                    })
                })
            },
            fn_cs_counter: function() {
                e(".fn_cs_counter").each(function() {
                    var t = e(this);
                    t.waypoint({
                        handler: function() {
                            t.hasClass("stop") || t.addClass("stop").countTo({
                                refreshInterval: 50,
                                formatter: function(e, t) {
                                    return e.toFixed(t.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, "")
                                }
                            })
                        },
                        offset: "90%"
                    })
                })
            },
            headerMove: function() {
                var t = e(".header"),
                    n = 0;
                e(window).scroll(function() {
                    var a = e(window).scrollTop();
                    a > n ? t.removeClass("done") : t.addClass("done"), n = a
                })
            },
            headerFixer: function() {
                var t = e("body"),
                    n = e(".header"),
                    a = e(window).scrollTop();
                a > 10 ? n.addClass("active") : n.removeClass("active"), a > 300 ? t.addClass("totop-active") : t.removeClass("totop-active")
            },
            slider: function() {
                e(".fn_cs_slider").each(function() {
                    var t = e(this),
                        n = t.find(".slider_top"),
                        a = t.find(".slider_content"),
                        s = 2,
                        o = setInterval(function() {
                            s++, s = i.sliderDo(n, a, s)
                        }, 6e3);
                    t.find(".slider_nav .prev").off().on("click", function() {
                        return clearInterval(o), s--, s = i.sliderDo(n, a, s), o = setInterval(function() {
                            s++, s = i.sliderDo(n, a, s)
                        }, 6e3), !1
                    }), t.find(".slider_nav .next").off().on("click", function() {
                        return clearInterval(o), s++, s = i.sliderDo(n, a, s), o = setInterval(function() {
                            s++, s = i.sliderDo(n, a, s)
                        }, 6e3), !1
                    }), t.find(".slider_top li").off().on("click", function() {
                        var t = e(this).attr("class");
                        if ("next" === t) s++;
                        else {
                            if ("prev" !== t) return !1;
                            s--
                        }
                        return clearInterval(o), s = i.sliderDo(n, a, s), o = setInterval(function() {
                            s++, s = i.sliderDo(n, a, s)
                        }, 6e3), !1
                    })
                })
            },
            sliderDo: function(e, t, n) {
                var a = e.find("li").length;
                n > a && (n -= a);
                var i = n - 1,
                    s = n - 2,
                    o = n + 1,
                    r = n + 2;
                return i > a && (i -= a), s > a && (s -= a), o > a && (o -= a), r > a && (r -= a), i < 1 && (i += a), s < 1 && (s += a), n < 1 && (n += a), o < 1 && (o += a), r < 1 && (r += a), e.find("li").removeClass("prev prev2 active next next2"), e.find('li[data-index="' + s + '"]').addClass("prev2"), e.find('li[data-index="' + i + '"]').addClass("prev"), e.find('li[data-index="' + n + '"]').addClass("active"), e.find('li[data-index="' + o + '"]').addClass("next"), e.find('li[data-index="' + r + '"]').addClass("next2"), n
            },
            totopFixer: function() {
                var t = e(".metaverse_fn_totop .totop_inner").width();
                e(".metaverse_fn_totop").css({
                    height: t + "px"
                })
            },
            imgToSVG: function() {
                e("img.fn__svg").each(function() {
                    var t = e(this),
                        n = t.attr("class"),
                        a = t.attr("src");
                    e.get(a, function(a) {
                        var i = e(a).find("svg");
                        void 0 !== n && (i = i.attr("class", n + " replaced-svg")), t.replaceWith(i)
                    }, "xml")
                })
            },
            BgImg: function() {
                e("*[data-bg-img]").each(function() {
                    var t = e(this),
                        n = t.attr("data-bg-img"),
                        a = t.data("bg-img");
                    void 0 !== n && t.css({
                        backgroundImage: "url(" + a + ")"
                    })
                })
            }
        };
    e(document).ready(function() {
        i.init(), setTimeout(function() {
            i.isotope(), i.isotopeCollection()
        }, 150)
    }), e(window).on("resize", function() {
        i.resizeWalletAndRightNav(), i.floww_calc_call(), i.totopFixer(), i.isotope(), i.isotopeCollection()
    }), e(window).on("load", function() {
        i.preloader(), i.isotope(), i.isotopeCollection(), setTimeout(function() {
            i.isotope(), i.isotopeCollection()
        }, 200)
    }), e(window).on("scroll", function() {
        i.headerFixer(), i.totopAppearing()
    }), window.addEventListener("load", function() {
        i.preloader()
    })
}(jQuery);