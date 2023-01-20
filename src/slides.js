let i = 1
    
 setInterval(function(){
     nextImage()
},4000)

 function nextImage(){
     i++

     if (i > 5) {
         i = 1
   }

document.getElementById(`radio${i}`).checked = true
}