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

//evenemment ADD 


    var btn = document.getElementById("btnAdd")
    var principal = document.getElementById("principal")
    btn.addEventListener("click", function(){
        //console.log(this, "click detecte")
        var newMessage = document.getElementById("newMessage").value

        if(newMessage!=""){
            var divGlobal = document.createElement("div");
            divGlobal.className = "row";

            //console.log("test")

            var img = document.createElement("img");
            img.className ="avatar"
            img.src ="image/avatar-1.jpg"

            var divText = document.createElement("div")
            divText.className = "nameText";
            var name = document.createElement("h6")
            name.textContent ="FARID HARRES"
            var messagetext= document.createElement("p")

            var imgTrash = document.createElement("img")
            imgTrash.className= "trash"
            imgTrash.src = "image/trash.png"


            divGlobal.appendChild(img)
            divGlobal.appendChild(divText)
            divText.appendChild(name)
            divText.appendChild(messagetext)
            divGlobal.appendChild(imgTrash)
            principal.appendChild(divGlobal)

            messagetext.textContent = newMessage
            
            //inserer la div dans une position precise
            var inserteNode = principal.insertBefore(divGlobal, principal.firstChild.nextSibling.nextSibling.nextSibling.nextSibling)

        }
            document.getElementById("newMessage").value =""     
        


        // mise a jour du compteur une fois le message ajouté       

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

            //remise a jour du compteur 
            compteur.textContent = message
        


            })
        }
    })
   






