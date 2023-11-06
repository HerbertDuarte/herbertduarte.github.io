
    const inicio = document.getElementById('inicio')
    const sobre = document.getElementById('sobre')
    const habilidades = document.getElementById('habilidades')
    const projetos = document.getElementById('projetos')
    const contatos = document.getElementById('contatos')

    /* Indicador de página pelo scrollFromTheTop */
    
    document.addEventListener("scroll", () => {
      var posicaoy = window.scrollY
      const width = window.innerWidth
      console.log(posicaoy)
      
      if(width > 815){

        if(posicaoy < 320){
          inicio.style.color = 'var(--color02)'
          sobre.style.color = 'var(--color04)'
          habilidades.style.color = 'var(--color04)'
          projetos.style.color = 'var(--color04)'
          contatos.style.color = 'var(--color04)'
        }
        else if(posicaoy >= 320 && posicaoy <= 990){
          inicio.style.color = 'var(--color04)'
          sobre.style.color = 'var(--color02)'
          habilidades.style.color = 'var(--color04)'
          projetos.style.color = 'var(--color04)'
          contatos.style.color = 'var(--color04)'
        }
        else if(posicaoy >= 990 && posicaoy <= 1560){
          inicio.style.color = 'var(--color04)'
          sobre.style.color = 'var(--color04)'
          habilidades.style.color = 'var(--color02)'
          projetos.style.color = 'var(--color04)'
          contatos.style.color = 'var(--color04)'
        }
        else if(posicaoy >= 1560 && posicaoy <= 2000){
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
      }else if(width > 450){
        if(posicaoy < 320){
          inicio.style.color = 'var(--color02)'
          sobre.style.color = 'var(--color04)'
          habilidades.style.color = 'var(--color04)'
          projetos.style.color = 'var(--color04)'
          contatos.style.color = 'var(--color04)'
        }
        else if(posicaoy >= 320 && posicaoy <= 990){
          inicio.style.color = 'var(--color04)'
          sobre.style.color = 'var(--color02)'
          habilidades.style.color = 'var(--color04)'
          projetos.style.color = 'var(--color04)'
          contatos.style.color = 'var(--color04)'
        }
        else if(posicaoy >= 990 && posicaoy <= 1560){
          inicio.style.color = 'var(--color04)'
          sobre.style.color = 'var(--color04)'
          habilidades.style.color = 'var(--color02)'
          projetos.style.color = 'var(--color04)'
          contatos.style.color = 'var(--color04)'
        }
        else if(posicaoy >= 1560 && posicaoy <= 2500){
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
      }else {
        if(posicaoy < 320){
          inicio.style.color = 'var(--color02)'
          sobre.style.color = 'var(--color04)'
          habilidades.style.color = 'var(--color04)'
          projetos.style.color = 'var(--color04)'
          contatos.style.color = 'var(--color04)'
        }
        else if(posicaoy >= 320 && posicaoy <= 1280){
          inicio.style.color = 'var(--color04)'
          sobre.style.color = 'var(--color02)'
          habilidades.style.color = 'var(--color04)'
          projetos.style.color = 'var(--color04)'
          contatos.style.color = 'var(--color04)'
        }
        else if(posicaoy >= 1280 && posicaoy <= 2100){
          inicio.style.color = 'var(--color04)'
          sobre.style.color = 'var(--color04)'
          habilidades.style.color = 'var(--color02)'
          projetos.style.color = 'var(--color04)'
          contatos.style.color = 'var(--color04)'
        }
        else if(posicaoy >= 2100 && posicaoy <= 2880){
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
      }
        
    })
    
    