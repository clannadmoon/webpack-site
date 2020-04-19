var redirectUrl =
  window.location.protocol +
  "//" +
  window.location.host +
  "/main.html?clchash=1";
$(".register-btn").attr(
  "href",
  "https://passport.vip.com/register?whereFrom=vipotd&src=" +
    encodeURIComponent(redirectUrl)
),
  $(".login-btn").attr(
    "href",
    "https://passport.vip.com/login?whereFrom=vipotd&src=" +
      encodeURIComponent(redirectUrl)
  ),
  $.ajax({ url: "user/current", type: "GET", dataType: "json" })
    .done(function (e) {
      if (
        ($(".enter-btn, .username-btn, .logout-btn-mobile")
          .removeClass("hidden")
          .siblings(".top-btn")
          .addClass("hidden"),
        e && e.data && e.data.key)
      ) {
        var t = new String(e.data.key).toString();
        (t = t.length > 11 ? t.substr(0, 9) + "..." : t),
          $(".username-btn .username-text").text(t),
          $(".nav-list-toggle .username-text").text(t).removeClass("hidden"),
          $(".username-btn .username-text").attr("title", e.data.key);
      }
    })
    .fail(function () {})
    .always(function () {}),
  $(".copy-right-end-year").text(new Date().getFullYear()),
  $(".logout-btn, .logout-btn-mobile").on("click", function () {
    $.get("/logout").done(function () {
      window.location.href = "/index.html";
    });
  }),
  $(".nav-list-toggle").on("click", function (e) {
    $("body").toggleClass("menu-open"),
      $("body").hasClass("menu-open")
        ? $("body").removeClass("menu-close")
        : $("body").addClass("menu-close");
  }),
  $(".mobile-menu-open-mask").on("click", function (e) {
    $("body").removeClass("menu-open").addClass("menu-close");
  }),
  $(".has-sub-menu.menu-li").on("click", function (e) {
    $(this).toggleClass("sub-menu-open"),
      $(this).hasClass("sub-menu-open")
        ? $(this).removeClass("sub-menu-close")
        : $(this).addClass("sub-menu-close");
  });

//设置font-size
function setRootFontSize() {
  var t,
    e = document.documentElement.clientWidth;
  e > 750 ? (t = "120%") : (e > 540 && (e = 540), (t = e / 27 + "px")),
    (document.getElementsByTagName("html")[0].style["font-size"] = t),
    (window.wapParams = { rootFontSize: t, clientWidth: e });
}
setRootFontSize(),
  window.addEventListener(
    "resize",
    function () {
      setRootFontSize();
    },
    !1
  );
