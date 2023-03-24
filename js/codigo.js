function randomValue(min, max){
    return (Math.floor(Math.random() * (max - min + 1) + min)).toString()
}

function chosenValue(valor){
    switch(valor){
        case "1": 
            return "📄";
            break;
        case "2":
            return "🪨";
            break;
        case "3":
            return "✂️";
            break;
        default:
            return "opción no valida!";
            break;
    }
}

function resultOfgame(player, pc){
    
    if(player == pc){
        alert("That's a tie!!")
    }
    /*
    1. paper wons over stone
    2. stone wons over scissors
    3. scissors wons over paper
    */
   else if(player == "📄" && pc == "🪨" || player == "🪨" && pc == "✂️" || player == "✂️" && pc == "📄"){
        alert("You have won!!")  
   } else {
        alert("You lost!!")
   }
    


}
// #1 is for paper 📄, #2 is for  🪨, #3 is for ✂️
let playerValue, pcValue, playerChoice, pcChoice;

playerValue = prompt("Elige 1. para papel, 2. para piedra, 3 para tijera")
playerChoice = chosenValue(playerValue)
alert("You chose" + playerChoice)

pcValue = randomValue(1, 3);
pcChoice = chosenValue(pcValue)
alert("PC chose" + pcChoice)

resultOfgame(playerChoice, pcChoice)

