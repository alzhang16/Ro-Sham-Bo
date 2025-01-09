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
    return randChoice;
}

function getHumanChoice(){
    
}

console.log(getComputerChoice());