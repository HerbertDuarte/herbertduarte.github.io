const $html = document.querySelector('html')
const $ball = document.getElementById('menu')
const colorbar = document.getElementsByClassName('color-bar')


const verificarTema = ()=>{
  if(localStorage.tema == 'claro'){
    $ball.classList.add('mudar')
    $html.classList.add('light-mode')
    colorbar[0].setAttribute('content', '#fafafa')
    colorbar[1].setAttribute('content', '#fafafa')
    colorbar[2].setAttribute('content', '#fafafa')  
  } 
  if(localStorage.tema == 'escuro'){
    $ball.classList.remove('mudar')
    $html.classList.remove('light-mode')
    colorbar[0].setAttribute('content', '#2c2c2c')
    colorbar[1].setAttribute('content', '#2c2c2c')
    colorbar[2].setAttribute('content', '#2c2c2c') 
  }
}

window.onload = verificarTema
