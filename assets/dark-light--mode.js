const $html = document.querySelector('html')
const $ball = document.getElementById('menu')


const verificarTema = ()=>{
  if(localStorage.tema == 'claro'){
    $ball.classList.add('mudar')
    $html.classList.add('light-mode')
  } 
  if(localStorage.tema == 'escuro'){
    $ball.classList.remove('mudar')
    $html.classList.remove('light-mode')
  }
}

window.onload = verificarTema
