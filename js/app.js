const g_gameOptions = ['Rock', 'Paper', 'Scissors'];

/*function game() {
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
}*/

function playRound(playerSelection, computerSelection) {
    let playerAnswer = lowerCaseCapitalize(playerSelection);

    for (let i = 0; i < 3; i++) {
        if (playerAnswer === g_gameOptions[i]) {

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

const buttons = document.querySelectorAll('.playerButtons button');
const resultH1 = document.querySelector('#resultH1');
const versusH1 = document.querySelector('#versusH1');
const wonDiv = document.querySelector('#wonDiv');
//const lostDiv = document.querySelector('#versusH1');
let playerScore = 0;
let computerScore = 0;

function getSelectionButton(buttonId) { //replaces example: "rockButton" with "Rock"
    let selection = buttonId.replace('Button', '');
    return lowerCaseCapitalize(selection);
}

function playerClickButton(e) { //Plays logic one round
    let playerChoice = getSelectionButton(this.getAttribute('id'));
    let machineChoice = getComputerChoice();

    let result = playRound(playerChoice, machineChoice);

    //Changing text
    versusH1.innerHTML = `Player chose: ${playerChoice}<br>Machine chose: ${machineChoice}`;
    calculateScoreSingleRound(result);
    resultH1.innerHTML = `${returnResultMessage(result)}<br>Your score:${playerScore}<br>Opponent score:${computerScore}`;

    if (playerScore >= 5) {
        winScreen;
    } else if (computerScore === 5) {
        lostScreen;
    }
}

function calculateScoreSingleRound(result) {
    if (result === 'won') {
        ++playerScore;
    } else if (result === 'lost') {
        ++computerScore;
    }
}

function hideScreen() {
    wonDiv.style.display = "none";
}

function winScreen() {
    wonDiv.style.display = "block";
}

function lostScreen() {

}
function returnResultMessage(result) {
    if (result === 'won') {
        return 'You won this round!';
    } else if (result === 'lost') {
        return 'You lost this round...';
    } else if (result === 'tie') {
        return 'TIE!';
    }
}


buttons.forEach(button => button.addEventListener('click', playerClickButton));