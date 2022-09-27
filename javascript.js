function getComputerChoice(){
    let choice = ['Rock','Paper','Scissors'];
    let choiceIndex = Math.floor(Math.random() *3);
    return choice[choiceIndex];
}

let computerChoice = getComputerChoice();




function playRound(playerSelection, computerChoice){
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase();

    if(computerChoice === 'Rock' && playerSelection === 'Paper'){
        console.log(`You Win!!, your choice: ${playerSelection} beats computer choice:${computerChoice}`);
        return 'playerWin';

    }else if(computerChoice === 'Paper' && playerSelection === 'Scissors'){
        console.log(`You Win!!, your choice: ${playerSelection} beats computer choice:${computerChoice}`);
        return 'playerWin';

    }else if(computerChoice === 'Scissors' && playerSelection === 'Rock'){
        console.log(`You Win!!, your choice: ${playerSelection} beats computer choice:${computerChoice}`);
        return 'playerWin';

    }else if(playerSelection === 'Rock' && computerChoice === 'Paper'){
        console.log(`You lose!!, your choice: ${playerSelection} loses to computer choice: ${computerChoice} ` );
        return 'computerWin';

    }else if(playerSelection === 'Paper' && computerChoice === 'Scissors'){
        console.log(`You lose!!, your choice: ${playerSelection} loses to computer choice: ${computerChoice} ` );
        return 'computerWin';

    }else if(playerSelection === 'Scissors' && computerChoice === 'Rock'){
        console.log(`You lose!!, your choice: ${playerSelection} loses to computer choice: ${computerChoice} ` );
        return 'computerWin';
    }
    console.log(`Nobody wins because your choice: ${playerSelection} equals computer choice:${computerChoice}`);

    return ;
}

let playerWins = 0;
let computerWins = 0;

function game(){
    for(let i = 1; i<= 5; i++){
        let playerSelection = prompt('Make a choice between Rock,Paper and scissors:');
        let result = playRound(playerSelection,computerChoice);
        if(result === 'playerWin'){
            playerWins++;

        }else if(result === 'computerWin'){
            computerWins++;
        }

    }

    if(playerWins > computerWins){
        console.log('CONGRATULATIONS YOU WON!!!!!!!!!!!');
    }else{
        console.log('COMPUTER WON!!!!')
    }
}


game();