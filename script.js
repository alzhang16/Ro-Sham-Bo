function getComputerChoice(){
    const randChoice = Math.random()*3;
    let choice = "";
    if(randChoice <= 1){
        choice = "Rock";
    }else if(randChoice <= 2){ 
        choice = "Paper";
    }else{
        choice = "Scissors";
    }
    return choice.toLowerCase();
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase(); 

    if(humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors"){
        return humanChoice;
    }else{
        console.log("Please enter a valid value");
        getHumanChoice();
    }

}

function playRound(humanChoice, computerChoice){
    console.log(humanChoice);
    console.log(computerChoice);
    if(humanChoice == computerChoice){
        console.log("Draw");
    }else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("Win!");
        humanScore+=1;
    }else if(humanChoice == "rock" && computerChoice == "paper"){
        computerScore+=1;
        console.log("Lost!");
    }else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("Win!");
        humanScore+=1;
    }else if(humanChoice == "paper" && computerChoice == "scissors"){
        computerScore+=1;
        console.log("Lost!");
    }else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("Win!");
        humanScore+=1;
    }else if(humanChoice == "scissors" && computerChoice == "rock"){
        computerScore+=1;
        console.log("Lost!");
    }
}  

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
let humanScore = 0;
let computerScore = 0;

playRound(humanSelection, computerSelection);