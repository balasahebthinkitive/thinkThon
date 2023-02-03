e(function () {
    var a = e("#main-header");
    t(),
      e(window).resize(t),
      e(window).on("scroll", function () {
        e(window).scrollTop() >= 80
          ? a.addClass("menu-sticky animated slideInDown")
          : a.removeClass("menu-sticky animated slideInDown");
      });
  })