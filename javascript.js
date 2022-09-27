function getComputerChoice(){
    let choice = ['Rock','Paper','Scissors'];
    let choiceIndex = Math.floor(Math.random() *3);
    return choice[choiceIndex];
}

// console.log(getComputerChoice())

let computerChoice = getComputerChoice();

let playerSelection = prompt('Make a choice between Rock,Paper and scissors:');
// console.log(`${playerSelection}: ${typeof(playerSelection)}`);

function playRound(playerSelection, computerChoice){
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase();

    if(computerChoice === 'Rock' && playerSelection === 'Paper'){
        console.log(`You Win!!, your choice: ${playerSelection} beats computer choice:${computerChoice}`);
        return playerSelection;

    }else if(computerChoice === 'Paper' && playerSelection === 'Scissors'){
        console.log(`You Win!!, your choice: ${playerSelection} beats computer choice:${computerChoice}`);
        return playerSelection;

    }else if(computerChoice === 'Scissors' && playerSelection === 'Rock'){
        console.log(`You Win!!, your choice: ${playerSelection} beats computer choice:${computerChoice}`);
        return playerSelection

    }else if(playerSelection === 'Rock' && computerChoice === 'Paper'){
        console.log(`You lose!!, your choice: ${playerSelection} loses to computer choice: ${computerChoice} ` );
        return computerChoice;

    }else if(playerSelection === 'Paper' && computerChoice === 'Scissors'){
        console.log(`You lose!!, your choice: ${playerSelection} loses to computer choice: ${computerChoice} ` );
        return computerChoice;

    }else if(playerSelection === 'Scissors' && computerChoice === 'Rock'){
        console.log(`You lose!!, your choice: ${playerSelection} loses to computer choice: ${computerChoice} ` );
        return computerChoice;
    }
    console.log(`Nobody wins because your choice: ${playerSelection} equals computer choice:${computerChoice}`);

    return 'Equal';


}

playRound(playerSelection,computerChoice);