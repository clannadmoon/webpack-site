import "./produce.less";
import "../customer/customer.less";

$(function () {
  function i() {
    var i = $(document).scrollTop(),
      o = [];
    t.each(function (n, e) {
      e + 500 < i + a && i >= 0 && o.push(n);
    }),
      (!s || i + a > $(document).outerHeight() - 50) &&
        ((s = !0),
        o.forEach(function (i, n) {
          $(e[i]).addClass("animated");
        })),
      (n = setTimeout(function () {
        s = !1;
      }, 200));
  }
  var n,
    e = $(".tab-content:first .sub-banner-li-wrap"),
    t = e.map(function (i, n) {
      return $(n).offset().top;
    }),
    a = $(window).height(),
    s = !1;
  if (
    ($(document).scroll(function () {
      i();
    }),
    $(".slide-tab-li").on("click", function (n) {
      var a = $(this).attr("tab-name");
      $(this).attr("tab-order-idx"),
        $(".slide-tab-li.active").attr("tab-order-idx");
      $('.sub-menu-li[tab-name="' + a + '"]')
        .addClass("active")
        .siblings()
        .removeClass("active"),
        $(this).addClass("active").siblings().removeClass("active"),
        $(".tab-content." + a)
          .removeClass("hidden")
          .siblings(".tab-content")
          .addClass("hidden"),
        $(".banner-block .slide-li." + a)
          .removeClass("hidden")
          .siblings(".slide-li")
          .addClass("hidden"),
        (e = $(".tab-content." + a).find(".sub-banner-li-wrap")),
        (t = e.map(function (i, n) {
          return $(n).offset().top;
        })),
        (window.location.hash = a),
        i();
    }),
    $(".sub-menu-li").on("click", function (n) {
      var a = $(this).attr("tab-name");
      $(".tab-content." + a)
        .removeClass("hidden")
        .siblings(".tab-content")
        .addClass("hidden"),
        $(".banner-block .slide-li." + a)
          .removeClass("hidden")
          .siblings(".slide-li")
          .addClass("hidden"),
        $("body").removeClass("menu-open"),
        $(this).addClass("active").siblings().removeClass("active"),
        (e = $(".tab-content." + a).find(".sub-banner-li-wrap")),
        (t = e.map(function (i, n) {
          return $(n).offset().top;
        })),
        $(window).scrollTop(0),
        i();
    }),
    window.location.hash)
  ) {
    var o = window.location.hash.replace("#", "");
    $('.slide-tab-li[tab-name="' + o + '"]').trigger("click");
  }
  $(window).on("resize", function () {
    (a = $(window).height()), i();
  }),
    $(".phone-slide-tab .tab-icon").on("click", function (i) {
      var n = $(this).attr("tab-name");
      $(this).addClass("active").siblings().removeClass("active"),
        $(this)
          .parents(".phone-preview-block")
          .find('.phone-slide-li[slide-name="' + n + '"]')
          .removeClass("hidden")
          .siblings(".phone-slide-li")
          .addClass("hidden");
    }),
    i(),
    $(".phone-preview-block").swipe({
      swipeLeft: function (i, n, e, t, a, s) {
        var o = $(this).find(".phone-slide-tab .tab-icon.active").next();
        (o && o.length) ||
          (o = $(this).find(".phone-slide-tab .tab-icon:first")),
          o.trigger("click");
      },
      swipeRight: function (i, n, e, t, a, s) {
        var o = $(this).find(".phone-slide-tab .tab-icon.active").prev();
        (o && o.length) ||
          (o = $(this).find(".phone-slide-tab .tab-icon:last")),
          o.trigger("click");
      }
    });

  $("#myVideoBox").on("click", function () {
    var videoElement = document.getElementById("myVideo");
    console.log(videoElement);
    videoElement.play();
    $("#videoImg").addClass("playVideoImg-0");
  });
  var video = document.getElementById("myVideo");
  video.addEventListener(
    "ended",
    function () {
      const videoSrc = video.currentSrc;

      video.src = "";
      video.src =
        "http://mgcdn.vod.migucloud.com/vi1/1904.2Z8tZqtqNc3W16tp9j9sSb.4.fZTZYz.mp4";
    },
    false
  );
});

$(function () {
  function n() {
    var n = $(document).scrollTop(),
      c = [];
    e.each(function (o, t) {
      ((t + 100 < n + i && n > 0) || (0 == n && 0 == o)) && c.push(o);
    }),
      (!u || n + i > $(document).outerHeight() - 50) &&
        ((u = !0),
        c.forEach(function (n, o) {
          $(t[n]).addClass("animated");
        })),
      (o = setTimeout(function () {
        u = !1;
      }, 200));
  }
  var o,
    t = $(".feature-block .feature-li"),
    e = t.map(function (n, o) {
      return $(o).offset().top;
    }),
    i = $(window).height(),
    u = !1;
  $(document).scroll(function () {
    n();
  }),
    $(window).on("resize", function () {
      (i = $(window).height()), n();
    }),
    n();
});
