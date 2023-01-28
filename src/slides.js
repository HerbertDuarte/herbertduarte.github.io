setInterval(function () {nextImage()},4000)

function nextImage(){
    const array = [...document.getElementsByName('slide-items')]
    for(let e in array){
        if(array[e].checked){
            var i = +e+1
        }
    }   
    
    if (i >= 5) {
        i = 0
    }
    i++

document.getElementById(`radio${i}`).checked = true
}