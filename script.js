// TESTE DE ANIMAÇÃO COM SCROLL DO FOGUETE
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

// DARK MODE
const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function () {
  $html.classList.toggle('dark-mode')

  if ( document.getElementById("mode-icon").className.match(/(?:^|\s)fa fa-sun-o(?!\S)/) ) {
  document.getElementById("mode-icon").className = document.getElementById("mode-icon").className.replace( /(?:^|\s)fa fa-sun-o(?!\S)/g , 'fa fa-moon-o' )
  document.getElementById("mode-icon").style = document.getElementById("mode-icon").style.setProperty("padding-left", "5px", "1")
  }
  else
  document.getElementById("mode-icon").className = document.getElementById("mode-icon").className.replace( /(?:^|\s)fa fa-moon-o(?!\S)/g , 'fa fa-sun-o' )
})