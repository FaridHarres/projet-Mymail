// mise a jour du compteur 

var message = document.getElementsByClassName('nameText').length
//console.log(message)

var compteur = document.getElementById('compteur')
//console.log(compteur.textContent)
compteur.textContent = message
 

// suppression du message

var trash = document.getElementsByClassName('trash')
var text = document.getElementsByClassName('nameText')
//console.log(text)


for (var i=0; i<trash.length; i++){

    trash[i].addEventListener('click', function(){
        
            console.log("click")
            this.parentNode.remove()
            
            var message = document.getElementsByClassName('nameText').length
            //console.log(message)
            compteur.textContent = message
        


    })
}

