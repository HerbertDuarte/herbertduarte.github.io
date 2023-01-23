function scr(){

  window.sr = ScrollReveal({
    duration: 550,
    distance: '250px',
    easing: 'ease-out'
  })


  sr.reveal('.reveal-left', {

    origin:'left',
    reset: 'false'

  })
  sr.reveal('.reveal-barra', {

    origin:'left',
    opacity: 1,
    reset: 'false',
    duration: 1250

  })
  sr.reveal('.reveal-left-rapid', {

    origin:'left',
    reset: 'false'

  })
  sr.reveal('.reveal-top', {

    origin:'top',
    reset: 'false'

  })
  sr.reveal('.reveal-bottom', {

    origin:'bottom',
    reset: 'false'

  })
  sr.reveal('.reveal-right', {

    origin:'right',
    reset: 'false'

  })
  sr.reveal('.proj-item', {

    origin:'left',
    reset: 'false',
    duration: 450

  })

  sr.reveal('.normal', {
    opacity: 0,
    duration: 1000,
    reset: 'false'
  })
}

window.addEventListener('laod', scr())