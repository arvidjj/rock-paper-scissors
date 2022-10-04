const g_gameOptions = ['Rock', 'Paper', 'Scissors'];

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, paper or scissors?");
        let result = playRound(playerChoice, getComputerChoice());

        if (result === 'won') {
            playerScore += 1;
            console.log("You won this round! (+1 point)");
            console.log(`PlayerScore: ${playerScore}\nComputerScore: ${computerScore}`);
        } else if (result === 'lost') {
            computerScore += 1;
            console.log("You lost this round!");
            console.log(`PlayerScore: ${playerScore}\nComputerScore: ${computerScore}`);
        } else if (result === 'tie') {
            console.log("Tie round!");
            console.log(`PlayerScore: ${playerScore}\nComputerScore: ${computerScore}`);
        } else {
            console.log("Invalid input!");
        }
     }

     while (playerScore === computerScore) {
        console.log("UNTIE ROUND!");
        let playerChoice = prompt("Rock, paper or scissors?");
        let result = playRound(playerChoice, getComputerChoice());

        if (result === 'won') {
            playerScore += 1;
            console.log("You won this round! (+1 point)");
            console.log(`PlayerScore: ${playerScore}\nComputerScore: ${computerScore}`);
        } else if (result === 'lost') {
            computerScore += 1;
            console.log("You lost this round!");
            console.log(`PlayerScore: ${playerScore}\nComputerScore: ${computerScore}`);
        } else if (result === 'tie') {
            console.log("Tie round!");
            console.log(`PlayerScore: ${playerScore}\nComputerScore: ${computerScore}`);
        } else {
            console.log("Invalid input!");
        }
     }

     let finalResult = (playerScore > computerScore) ? "You won the game!" : "You lost the game!";
     console.log(finalResult)
}

function playRound(playerSelection, computerSelection) {
    let playerAnswer = lowerCaseCapitalize(playerSelection);

    for (let i = 0; i < 3;i++){
        if (playerAnswer === g_gameOptions[i]){

            switch (true) {
                case (playerAnswer === 'Rock' && computerSelection === 'Paper'): //LOST SCENARIO
                    return "lost";
                case (playerAnswer === 'Paper' && computerSelection === 'Rock'): //WON SCENARIO
                    return "won";
                case (playerAnswer === 'Paper' && computerSelection === 'Scissors'): //LOST SCENARIO
                    return "lost";
                case (playerAnswer === 'Scissors' && computerSelection === 'Paper'): //WON SCENARIO
                    return "won";
                case (playerAnswer === 'Scissors' && computerSelection === 'Rock'): //LOST SCENARIO
                    return "lost";
                case (playerAnswer === 'Rock' && computerSelection === 'Scissors'): //WON SCENARIO
                    return "won";
                default: // TIE SCENARIO
                    return "tie";
            }

            /*if (playerAnswer === 'Rock' && computerSelection === 'Paper') {
                return "You Lose! Paper beats Rock";
            } else if (playerAnswer === 'Paper' && computerSelection === 'Rock') {
                return "You Won! Paper beats Rock";
            } else if (playerAnswer === 'Paper' && computerSelection === 'Scissors') {
                return "You Lose! Scissors beats Paper";
            } else if (playerAnswer === 'Scissors' && computerSelection === 'Paper') {
                return "You Won! Scissors beats Paper";
            } else if (playerAnswer === 'Scissors' && computerSelection === 'Rock') {
                return "You Lose! Rock beats Scissors";
            } else if (playerAnswer === 'Rock' && computerSelection === 'Scissors') {
                return "You Won! Rock beats Scissors";
            } else {
                return "Tie!";
            }*/

        }
    }
    return "Invalid input!";
}

function getComputerChoice() {
    return g_gameOptions[getRandomInt(3)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function isEqualCaseInsensitive(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

function lowerCaseCapitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
