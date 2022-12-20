const $html = document.querySelector('html')
const $checkbox = document.querySelector('#toggle-color-mode')

$checkbox.addEventListener('change', function(){
  $html.classList.toggle('light-mode')
})