function computeScore(word){
    let score = 0
    let len = word.length

    ignore = ["?", "!", ".", ","]
  
    lower = word.toLowerCase()
    splitLetters = lower.split('')

    
    for ( i = 0; i < len; i++) {
        eachChar = splitLetters[i]
        ponits = eachChar.charCodeAt() - 96

        if (ignore.includes(eachChar)){
            ponits = 0
        }
        score = score + letterValue[ponits]



        console.log(score)
    }
    return score
}

const prompt = require("prompt-sync")()

let letterValue = [0, 1,	3,	3,	2,	1,	4,	2,	4,	1,	8,	5,	1,	3,	1,	1,	3,	10,	1,	1,	1,	1,	4,	4,	8,	4,	10];

let Word1 = prompt("Player 1: ");
let Word2 = prompt("Player 2: ");

player1 = computeScore(Word1)
player2 = computeScore(Word2)

if (player1 > player2) {
    console.log("Player 1 wins!")
}else if(player2 > player1) {
    console.log("Player 2 wins!")
}else if (player1 == player2) {
    console.log("Tie!")
}




    
