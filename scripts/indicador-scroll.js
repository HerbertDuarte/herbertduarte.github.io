
    const inicio = document.getElementById('inicio')
    const sobre = document.getElementById('sobre')
    const habilidades = document.getElementById('habilidades')
    const projetos = document.getElementById('projetos')
    const contatos = document.getElementById('contatos')

    /* Indicador de página pelo scrollFromTheTop */
    
    document.addEventListener("scroll", function() {
      var posicaoy = window.pageYOffset
      console.log(posicaoy)
      
      if(posicaoy < 470){
        inicio.style.color = '#FFD921'
        sobre.style.color = 'white'
        habilidades.style.color = 'white'
        projetos.style.color = 'white'
        contatos.style.color = 'white'
      }
      else if(posicaoy >= 470 && posicaoy <= 1076){
        inicio.style.color = 'white'
        sobre.style.color = '#FFD921'
        habilidades.style.color = 'white'
        projetos.style.color = 'white'
        contatos.style.color = 'white'
      }
      else if(posicaoy >= 1076 && posicaoy <= 1750){
        inicio.style.color = 'white'
        sobre.style.color = 'white'
        habilidades.style.color = '#FFD921'
        projetos.style.color = 'white'
        contatos.style.color = 'white'
      }
      else if(posicaoy >= 1750 && posicaoy <= 2330){
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
    
    