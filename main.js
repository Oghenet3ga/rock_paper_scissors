function getComputerChoice(){
let choices=['Rock', 'Paper', 'Scissors'];
return choices[Math.floor(Math.random()* choices.length)];
}
const computerSelection=getComputerChoice()

function startGame(){
    let playerSelection=prompt("Rock, Paper or Scissors?").toLowerCase();
    alert(`Computer chose: ${computerSelection}` )
    if(playerSelection==="rock" && computerSelection==="Paper"){
        alert("You Lose! Paper beats Rock")
    }
}
startGame()