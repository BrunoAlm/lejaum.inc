// ANIMAÇÃO COM SCROLL DO FOGUETE
window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

// 
// TESTE NAVBAR
// 
$(document).ready(function () {
  var state = false,
    links = $(".navbar-responsive__link");
  $("#nav-icon3").click(function () {
    $(this).toggleClass("open");
    if (!state) {
      $(".navbar-responsive").css("transform", "translate3d(0,0,0)");
      state = true;
    } else {
      $(".navbar-responsive").css("transform", "translate3d(-100%,0,0)");
      state = false;
    }
  });
  $.each(links, function (index, value) {
    value.addEventListener("click", function () {
      if (!state) {
        $(".navbar-responsive").css("transform", "translate3d(0,0,0)");
        state = true;
      } else {
        $(".navbar-responsive").css("transform", "translate3d(-100%,0,0)");
        state = false;
      }
      $("#nav-icon3").removeClass("open");
    });
  });
});
