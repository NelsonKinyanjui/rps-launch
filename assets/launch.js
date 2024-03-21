function playGame(playerMove){
    const computerMove = getComputerMove();
        
        let result = '';
    if (playerMove === 'rock'){
        if (computerMove === 'rock'){
            result = 'You Tie.';
        }
        else if (computerMove === 'paper'){
            result = 'You Lose.';
        }
        else if (computerMove === 'scissors'){
            result = 'You Win.';
        }
    }
    else if (playerMove === 'paper'){
        if (computerMove === 'rock'){
            result = 'You Win.';
        }
        else if (computerMove === 'paper'){
            result = 'You Tie.';
        }
        else if (computerMove === 'scissors'){
            result = 'You Lose.';
        }
    }
    else if (playerMove === 'Scissors'){
        if (computerMove === 'rock'){
            result = 'You Lose.';
        }
        else if (computerMove === 'paper'){
            result = 'You Win.';
        }
        else if (computerMove === 'scissors'){
            result = 'You Tie.';
        }
    }
        


alert(`You picked ${playerMove} , computer picked ${computerMove} ,${result}`);
}
 
 function getComputerMove(){
    let randomNumber = Math.random();

    let computerMove = '';
    
    if(randomNumber > 0 && randomNumber < 1 / 3){
        computerMove = 'rock';
    }
    else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3){
        computerMove = 'paper';
    }
     else if(randomNumber >= 2 / 3 && randomNumber < 1 ){
        computerMove = 'scissors';
    }

    return computerMove;
 }

 