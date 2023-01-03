const $html = document.querySelector('html')
const $checkbox = document.querySelector('.color-mode-box')
const $ball = document.getElementById('ball')

const mudarTema = ()=>{
  
  const colorbar = document.getElementsByClassName('color-bar')

  if(localStorage.tema == 'escuro') {
    $html.classList.add('light-mode')
    $ball.classList.add('mudar')
    localStorage.setItem('tema','claro')
    colorbar[0].setAttribute('content', '#fafafa')
    colorbar[1].setAttribute('content', '#fafafa')
    colorbar[2].setAttribute('content', '#fafafa')  
  }
  else if(localStorage.tema == 'claro') {
    $html.classList.remove('light-mode')
    $ball.classList.remove('mudar')
    localStorage.setItem('tema','escuro')
    colorbar[0].setAttribute('content', '#2c2c2c')
    colorbar[1].setAttribute('content', '#2c2c2c')
    colorbar[2].setAttribute('content', '#2c2c2c') 
  }
}

const verificarTema = ()=>{

if(!localStorage.tema){
  localStorage.setItem('tema','escuro')
}

  else if(localStorage.tema == 'claro'){
    $ball.classList.add('mudar')
    $html.classList.add('light-mode')
  } 
  else if(localStorage.tema == 'escuro'){
    $ball.classList.remove('mudar')
    $html.classList.remove('light-mode')
  }
}
$checkbox.addEventListener('click', mudarTema)
window.onload = verificarTema