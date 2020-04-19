import "./customer.less";

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
