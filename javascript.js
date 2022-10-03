function getComputerChoice(){
    let choice = ['Rock','Paper','Scissors'];
    let choiceIndex = Math.floor(Math.random() *3);
    return choice[choiceIndex];
}



let win = 0;
let loss = 0;
let draw = 0;



function playRound(playerSelection, computerChoice){
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase();

    if(computerChoice === 'Rock' && playerSelection === 'Paper'){
        paragraph.innerText = `You Win!!, your choice: ${playerSelection} beats computer choice:${computerChoice}`;
        win++;
        
    }else if(computerChoice === 'Paper' && playerSelection === 'Scissors'){
        paragraph.innerText = `You Win!!, your choice: ${playerSelection} beats computer choice:${computerChoice}`;
        win++;
       

    }else if(computerChoice === 'Scissors' && playerSelection === 'Rock'){
        paragraph.innerText = `You Win!!, your choice: ${playerSelection} beats computer choice:${computerChoice}`;
        win++;
        

    }else if(playerSelection === 'Rock' && computerChoice === 'Paper'){
        paragraph.innerText = `You lose!!, your choice: ${playerSelection} loses to computer choice: ${computerChoice} `;
        loss++;

    }else if(playerSelection === 'Paper' && computerChoice === 'Scissors'){
        paragraph.innerText = `You lose!!, your choice: ${playerSelection} loses to computer choice: ${computerChoice} `;
        loss++;

    }else if(playerSelection === 'Scissors' && computerChoice === 'Rock'){
        paragraph.innerText = `You lose!!, your choice: ${playerSelection} loses to computer choice: ${computerChoice} `;
        loss++;
        
    }else if(playerSelection === computerChoice){
        paragraph.innerText = `Nobody wins because your choice: ${playerSelection} equals computer choice:${computerChoice}`;
        draw++;

    }
    
    results.appendChild(paragraph);
    

    return [win,loss,draw];
}









const playerSelection = document.querySelectorAll('button');
const paragraph = document.createElement('p');  //create paragraph to display result
const score = document.createElement('h3');
const results = document.querySelector('.results');
const replay = document.createElement('button');
const replayDiv = document.querySelector('.replay-div');
replay.innerText = 'REPLAY';


let count = 0;
for(let play of playerSelection ){
    play.addEventListener('click',(e)=>{

        let computerChoice = getComputerChoice();
        const returnedArr = playRound(play.innerText,computerChoice);
        
        count ++;
// actions to perform when we play five times
        if(count === 5){
            if(returnedArr[0]> returnedArr[1]){
                paragraph.innerText = 'CONGRATULATIONS YOU WON!!!!!!!!!!!';
            }else{
                paragraph.innerText = 'SORRY!!!!, COMPUTER WON';

            }
            paragraph.setAttribute("style","background-color:#000;color:#fff")
            results.appendChild(paragraph);
            score.innerText = `YOUR SCORE: ${returnedArr[0]}/5; DRAWS:${returnedArr[2]}`;
            results.appendChild(score);

            for(let play of playerSelection){
                play.disabled = true;
                
            }
            replayDiv.appendChild(replay);
            replay.addEventListener('click',()=> location.reload()) // Refresh page
        }
        
        
    })
}




