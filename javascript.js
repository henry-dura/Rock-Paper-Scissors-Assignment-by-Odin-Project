function getComputerChoice(){
    let choice = ['Rock','Paper','Scissors'];
    let choiceIndex = Math.floor(Math.random() *3);
    return choice[choiceIndex];
}

console.log(getComputerChoice())