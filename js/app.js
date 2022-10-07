const g_gameOptions = ['Rock', 'Paper', 'Scissors'];

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

const rockImage = document.querySelector('#rockPlayerImage');
const paperImage = document.querySelector('#paperPlayerImage');
const scissorsImage = document.querySelector('#scissorsPlayerImage');
const rockOImage = document.querySelector('#rockOpponentImage');
const paperOImage = document.querySelector('#paperOpponentImage');
const scissorsOImage = document.querySelector('#scissorsOpponentImage');

const resultH1 = document.querySelector('#resultH1');
const resultH2 = document.querySelector('#resultH2');
const versusH1 = document.querySelector('#versusH1');

const fullScreenDiv = document.querySelector('#fsContainer');
const wonDiv = document.querySelector('#wonDiv');
const wonDivH1 = document.querySelector('#wonDivH1');
const wonDivScore = document.querySelector('#wonDivScore');
const wonDivTotalWins = document.querySelector('#wonDivTotalWins');
const playAgainButton = document.querySelector('#playAgainButton');

//const lostDiv = document.querySelector('#versusH1');
let playerScore = 0;
let computerScore = 0;
let playerWins = 0;
let computerWins = 0;
let currentComputerSelection;

function getSelectionButton(buttonId) { //replaces example: "rockButton" with "Rock"
    let selection = buttonId.replace('Button', '');
    return lowerCaseCapitalize(selection);
}

function playerClickButton(e) { //Plays logic one round
    defaultOpponentImage();

    let playerChoice = getSelectionButton(this.getAttribute('id'));
    currentComputerSelection = getComputerChoice();
    changeOpponentImage(currentComputerSelection);

    let result = playRound(playerChoice, currentComputerSelection); 
    calculateScoreSingleRound(result);
    //Changing text
    versusH1.innerHTML = `Player chose: ${playerChoice}<br>Machine chose: ${currentComputerSelection}`;
    resultH1.textContent = `${returnResultMessage(result)}`;
    resultH2.innerHTML = `Your score:${playerScore}<br>Opponent score:${computerScore}`;

    if (playerScore >= 5) {
        playerWins++;
        winScreen();
    } else if (computerScore >= 5) {
        computerWins++;
        lostScreen();
    }
}

function calculateScoreSingleRound(result) {
    if (result === 'won') {
        ++playerScore;
    } else if (result === 'lost') {
        ++computerScore;
    }
}

function winScreen() {
    fullScreenDiv.classList.add('active');
    wonDivH1.textContent = `Congratulations, you won!`;
    wonDivScore.textContent = `You won ${playerScore} against computer's ${computerScore}`;
    wonDivTotalWins.innerHTML = `Your total Wins: ${playerWins}<br>Computer total Wins: ${computerWins}`;
    wonDiv.classList.add('active');
}

function lostScreen() {
    fullScreenDiv.classList.add('active');
    wonDivH1.textContent = `You lost!`;
    wonDivScore.textContent = `You lost ${playerScore} against computer's ${computerScore}`;
    wonDivTotalWins.innerHTML = `Your total Wins: ${playerWins}<br>Computer total Wins: ${computerWins}`;
    wonDiv.classList.add('active');
}

function removeActiveWonDiv() {
    fullScreenDiv.classList.remove('active');
    wonDiv.classList.remove('active');
}

function returnResultMessage(result) {
    switch (result) {
        case 'won':
            return 'You won this round!';
        case 'lost':
            return 'You lost this round...'
        case 'tie':
            return 'TIE!';
    }
}


buttons.forEach(button => button.addEventListener('click', playerClickButton));


//BUTTON HOVER IMAGE
function rockHover() {
    rockImage.setAttribute('src', 'images/rock.png');
}

function rockUnhover() {
    rockImage.setAttribute('src', 'images/rockGrey.png');
}

function paperHover() {
    paperImage.setAttribute('src', 'images/paper.png');
}

function paperUnhover() {
    paperImage.setAttribute('src', 'images/paperGrey.png');
}

function scissorsHover() {
    scissorsImage.setAttribute('src', 'images/scissors.png');
}

function scissorsUnhover() {
    scissorsImage.setAttribute('src', 'images/scissorsGrey.png');
}

function defaultOpponentImage() {
    rockOImage.setAttribute('src', 'images/rockGrey.png');
    paperOImage.setAttribute('src', 'images/paperGrey.png');
    scissorsOImage.setAttribute('src', 'images/scissorsGrey.png');
}

function changeOpponentImage(image) {
    if (image === 'Rock') {
        rockOImage.setAttribute('src', 'images/rockRed.png');
    } else if (image === 'Paper') {
        paperOImage.setAttribute('src', 'images/paperRed.png');
    } else if (image === 'Scissors') {
        scissorsOImage.setAttribute('src', 'images/scissorsRed.png');
    }
}

playAgainButton.addEventListener('click', removeActiveWonDiv);
playAgainButton.addEventListener('click', restartGame);


function restartGame() {    
    clearScore();
    defaultOpponentImage();
    clearBattleText();
}

function clearBattleText() {
    versusH1.textContent = `Vs`;
    resultH1.textContent = ``;
    resultH2.textContent = ``;
}

function clearScore() {
    playerScore = 0;
    computerScore = 0;
}