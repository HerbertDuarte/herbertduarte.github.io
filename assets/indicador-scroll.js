
    const inicio = document.getElementById('inicio')
    const sobre = document.getElementById('sobre')
    const habilidades = document.getElementById('habilidades')
    const projetos = document.getElementById('projetos')
    const contatos = document.getElementById('contatos')

    /* Indicador de página pelo scrollFromTheTop */
    
    document.addEventListener("scroll", function() {
      var posicaoy = window.pageYOffset
      
      if(posicaoy < 470){
        inicio.style.color = 'var(--color02)'
        sobre.style.color = 'var(--color04)'
        habilidades.style.color = 'var(--color04)'
        projetos.style.color = 'var(--color04)'
        contatos.style.color = 'var(--color04)'
      }
      else if(posicaoy >= 470 && posicaoy <= 1076){
        inicio.style.color = 'var(--color04)'
        sobre.style.color = 'var(--color02)'
        habilidades.style.color = 'var(--color04)'
        projetos.style.color = 'var(--color04)'
        contatos.style.color = 'var(--color04)'
      }
      else if(posicaoy >= 1076 && posicaoy <= 1750){
        inicio.style.color = 'var(--color04)'
        sobre.style.color = 'var(--color04)'
        habilidades.style.color = 'var(--color02)'
        projetos.style.color = 'var(--color04)'
        contatos.style.color = 'var(--color04)'
      }
      else if(posicaoy >= 1750 && posicaoy <= 2330){
        inicio.style.color = 'var(--color04)'
        sobre.style.color = 'var(--color04)'
        habilidades.style.color = 'var(--color04)'
        projetos.style.color = 'var(--color02)'
        contatos.style.color = 'var(--color04)'
      }
      else{
        inicio.style.color = 'var(--color04)'
        sobre.style.color = 'var(--color04)'
        habilidades.style.color = 'var(--color04)'
        projetos.style.color = 'var(--color04)'
        contatos.style.color = 'var(--color02)'
      }

    })
    
    