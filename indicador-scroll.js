
    const inicio = document.getElementById('inicio')
    const sobre = document.getElementById('sobre')
    const habilidades = document.getElementById('habilidades')
    const projetos = document.getElementById('projetos')
    const contatos = document.getElementById('contatos')

    /* Indicador de página pelo scrollFromTheTop */
    
    document.addEventListener("scroll", function() {
      var posicaoy = window.pageYOffset
      
      if(posicaoy < 435){
        inicio.style.color = '#FFD921'
        sobre.style.color = 'white'
        habilidades.style.color = 'white'
        projetos.style.color = 'white'
        contatos.style.color = 'white'
      }
      else if(posicaoy >= 435 && posicaoy <= 1176){
        inicio.style.color = 'white'
        sobre.style.color = '#FFD921'
        habilidades.style.color = 'white'
        projetos.style.color = 'white'
        contatos.style.color = 'white'
      }
      else if(posicaoy >= 1176 && posicaoy <= 1850){
        inicio.style.color = 'white'
        sobre.style.color = 'white'
        habilidades.style.color = '#FFD921'
        projetos.style.color = 'white'
        contatos.style.color = 'white'
      }
      else if(posicaoy >= 1850 && posicaoy <= 2650){
        inicio.style.color = 'white'
        sobre.style.color = 'white'
        habilidades.style.color = 'white'
        projetos.style.color = '#FFD921'
        contatos.style.color = 'white'
      }
      else{
        inicio.style.color = 'white'
        sobre.style.color = 'white'
        habilidades.style.color = 'white'
        projetos.style.color = 'white'
        contatos.style.color = '#FFD921'
      }

    })
    
    