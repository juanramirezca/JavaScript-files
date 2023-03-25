function startGame(){
   let buttonChoosePoke = document.getElementById('choose-poke')
   buttonChoosePoke.addEventListener('click', choosePokemon) 
}


function choosePokemon(){
    if(document.getElementById('charmander').checked){
        alert("You chose charmander")
    }
}

window.addEventListener('load', startGame)