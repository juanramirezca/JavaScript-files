function randomValue(min, max){
    return (Math.floor(Math.random() * (max - min + 1) + min)).toString()
}

function chosenValue(value){
    let option = ""

    if(value == "1"){
        option = "📄";
    } else if(value == "2"){
        option = "🪨";
    } else if(value == "3"){
        option = "✂️";
    } else {
        option = "not a valid option!"
    }

    return option
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
        wons += 1
        alert("You have won!!")  
   } else {
        losses += 1
        alert("You lost!!")
   }
    


}
// #1 is for paper 📄, #2 is for  🪨, #3 is for ✂️
let playerValue, pcValue, playerChoice, pcChoice
let wons = 0
let losses = 0

while(wons < 3 && losses <3){
    playerValue = prompt("Choose #1 for 📄, #2 for 🪨, or #3 for ✂️")
    playerChoice = chosenValue(playerValue)
    alert("You chose" + playerChoice)

    pcValue = randomValue(1, 3);
    pcChoice = chosenValue(pcValue)
    alert("PC chose" + pcChoice)

    resultOfgame(playerChoice, pcChoice)
}

alert("You have won " + wons + " times and lost " + losses + " times.")


