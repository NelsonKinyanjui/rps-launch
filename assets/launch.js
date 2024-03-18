 function rockMove(){
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
     
    let result = '';
    if (computerMove === 'rock'){
        result = 'You tie.';
    }
    else if (computerMove === 'paper'){
        result = 'You win. ';
    }
    else if (computerMove === 'scissors'){
        result = 'You Lose.';
    }
    

    alert(`You picked Rock , computer picked ${computerMove} ,${result}`);
 }

 function paperMove(){
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
     
    let result = '';
    if (computerMove === 'rock'){
        result = 'You win.';
    }
    else if (computerMove === 'paper'){
        result = 'You Tie.';
    }
    else if (computerMove === 'scissors'){
        result = 'You Lose.';
    }
    

    alert(`You picked Paper , computer picked ${computerMove} ,${result}`);
 }
 function scissorsMove(){
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
     
    let result = '';
    if (computerMove === 'rock'){
        result = 'You Lose.';
    }
    else if (computerMove === 'paper'){
        result = 'You Win.';
    }
    else if (computerMove === 'scissors'){
        result = 'You Tie.';
    }
    

    alert(`You picked Scissors , computer picked ${computerMove} ,${result}`);
 }