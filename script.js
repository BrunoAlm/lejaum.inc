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
// DARK MODE
//
const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function () {
  $html.classList.toggle('dark-mode')

  if (document.getElementById("mode-icon").className.match(/(?:^|\s)fa fa-sun-o(?!\S)/)) {
    document.getElementById("mode-icon").className = document.getElementById("mode-icon").className.replace(/(?:^|\s)fa fa-sun-o(?!\S)/g, 'fa fa-moon-o')
    document.getElementById("mode-icon").style = document.getElementById("mode-icon").style.setProperty("padding-left", "5px", "1")
  } else
    document.getElementById("mode-icon").className = document.getElementById("mode-icon").className.replace(/(?:^|\s)fa fa-moon-o(?!\S)/g, 'fa fa-sun-o')
})

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



// CARROSSEL
const track = document.querySelector('.track');
let initialPosition = null;
let moving = false;
let transform = 0;
let lastPageX = 0;

const gestureStart = (e) => {
  initialPosition = e.pageX;
  moving = true;
  const transformMatrix = window.getComputedStyle(track).getPropertyValue('transform');
  if (transformMatrix !== 'none') {
    transform = parseInt(transformMatrix.split(',')[4].trim());
  }
}

const gestureMove = (e) => {
  if (moving) {
    const currentPosition = e.pageX;
    const diff = currentPosition - initialPosition;
    if (e.pageX - lastPageX > 0) {
      if (transform > 0) {
        return;
      }
    }
    track.style.transform = `translateX(${transform + diff}px)`;
  }
  lastPageX = e.pageX;
}

const gestureEnd = (e) => {
  moving = false;
}

if (window.PointerEvent) {
  window.addEventListener('pointerdown', gestureStart);
  window.addEventListener('pointermove', gestureMove);
  window.addEventListener('pointerup', gestureEnd);
} else {
  window.addEventListener('touchstart', gestureStart);
  window.addEventListener('touchmove', gestureMove);
  window.addEventListener('touchend', gestureEnd);

  window.addEventListener('mousedown', gestureStart);
  window.addEventListener('mousemove', gestureMove);
  window.addEventListener('mouseup', gestureEnd);
}