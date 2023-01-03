const $html = document.querySelector('html')
const $checkbox = document.querySelector('#toggle-color-mode')



$checkbox.addEventListener('click', ()=>{

  const colorbar = document.getElementsByClassName('color-bar')
  
  if($checkbox.checked === true) {
    $html.classList.add('light-mode')
    colorbar[0].setAttribute('content', '#fafafa')
    colorbar[1].setAttribute('content', '#fafafa')
    colorbar[2].setAttribute('content', '#fafafa')  
  }
  if($checkbox.checked === false) {
    $html.classList.remove('light-mode')
    colorbar[0].setAttribute('content', '#2c2c2c')
    colorbar[1].setAttribute('content', '#2c2c2c')
    colorbar[2].setAttribute('content', '#2c2c2c') 
  }
})