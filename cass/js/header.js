$(".menu").click(function () {
  $(this).toggleClass("on");
  if ($(this).hasClass("on") == true) {
    $("nav").css({
      display: "block",
    });
  } else {
    $("nav").css({
      display: "none",
    });
  }
});
