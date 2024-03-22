const score = {
    wins: 0,
    losses: 0,
    ties: 0

}

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
    else if (playerMove === 'scissors'){
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

    if(result === 'You Win.'){
        score.wins += 1;
    }
    else if (result === 'You Lose.'){
        score.losses  += 1;
    }
    else if (result === 'You Tie.'){

        score.ties += 1;

    }
        


// alert(`You picked ${playerMove} , computer picked ${computerMove} ,${result}
// wins ${score.wins} , losses ${score.losses} , ties ${score.ties}`);

let display = document.querySelector('.display');
let para = document.querySelector('p');
para.textContent = `You picked ${playerMove} , computer picked ${computerMove} ,${result}
wins ${score.wins} , losses ${score.losses} , ties ${score.ties}`;
display.appendChild(para);
}
function resetScore (){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
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

 