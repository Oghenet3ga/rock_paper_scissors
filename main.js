function getComputerChoice(){
    let choices=['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()* choices.length)];
    }
    

function startGame(){
    
const playerSelection=prompt("Pick your poison: Rock, Paper or Scissors?").toLowerCase();
const computerSelection=getComputerChoice();

    if (playerSelection===computerSelection.toLowerCase()){
        return "That's a tie!"
    }
    else if ((playerSelection==="rock" && computerSelection==="Paper") ||( playerSelection==="paper" && computerSelection==="Scissors") || (playerSelection==="scissors" && computerSelection==="Rock")){
            return "You Lose!"
        }
    else {
            return "You Win!"
}
}

function game(){
    let playerWins=0;
    let computerChoice;
    for(let round=0; round < 5; round++){
      const result=startGame();
      computerChoice = getComputerChoice();
        if (result==="You Win!"){
            playerWins++
        }
alert(`Computer chose: ${computerChoice}. ${result}`);
    }
    if (playerWins >= 3) {
        return "You won this round. Congratulations!"
    }
else {return "You lost this round. Try again"}
}
const finalresult=game();
alert(finalresult);