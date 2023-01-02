const nav = document.querySelector('#menu')
const btnMenu = document.querySelector('#mobile-menu')
const menu = document.querySelector('#nav-list')

function ClickBtn(event){


  event.stopPropagation()
  
  //[1] Mudar o ícone quando a navbar é acionada!
  
  menu.classList.toggle('active')

  function mudarIcone(){
    btnMenu.classList.toggle('active')
  }
  mudarIcone()

  //---------------[1] Fim

  //[2] chamar função de click fora do range da nav

  clickOut(menu, () => {
    menu.classList.remove('active')
    btnMenu.classList.remove('active')
  })
  clickOut(btnMenu, () => {
    menu.classList.remove('active')
    btnMenu.classList.remove('active')
  })

  //---------------[2] Fim
}

function clickOut(targetElement, callback){
  const html = document.documentElement

  function htmlClick(event){
    if(!targetElement.contains(event.target))
      targetElement.removeAttribute('data-target')
      html.removeEventListener("click", htmlClick)
      
      callback()
  }

  if(!targetElement.hasAttribute('data-target')){
    html.addEventListener("click", htmlClick)
    
    targetElement.setAttribute('data-target', '')
  }
}


btnMenu.addEventListener("click", ClickBtn)


