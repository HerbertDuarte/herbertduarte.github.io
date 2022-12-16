const labelCursos = document.querySelector('#label-cursos')
const labelConhecimentos = document.querySelector('#label-conhecimentos')
// const cursosArt = document.querySelector("#cursos-art")
// const conhArt = document.querySelector("#conhecimentos-art")
// const labels = document.querySelectorAll('.cont-hab h3')
const cur = document.querySelector('input#cur')
const cur2 = document.querySelector('input#cur2')
const con = document.querySelector('input#con')
const con2 = document.querySelector('input#con2')



revelar = ()=>{

  if(cur.checked === true){
    con.checked = true
    con2.checked = true
    cur2.checked =false
  }
  else if(con.checked === true){
    cur.checked = true
    cur2.checked = true
    con2.checked = false
  }
}

labelConhecimentos.addEventListener('click', revelar)
labelCursos.addEventListener('click', revelar)
