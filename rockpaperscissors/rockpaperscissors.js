start.addEventListener('click', startGame)

// Change view from startpage to game view with choices displayed
function startGame() {
    document.querySelector('#start-game').style.display = "none";
    document.querySelector('#game').style.display = "block";
    let choices = document.querySelectorAll('.choice')
    choices.forEach(choice => choice.addEventListener('click', playGame))
}

// Random choice generator for opposition
function computerPlay(){
    num = Math.floor(Math.random() * 3);  
    switch(num) {
        case 0:
            return 'ROCK'
            break
        case 1:
            return 'PAPER'
            break
        case 2:
            return 'SCISSORS'
            break
    }
}

// Global variables
let playerScore = 0
let comScore = 0 
const commentary = document.querySelector("#commentary")
const commentary_text = document.querySelector("#commentary-text")

function playGame(e) {

    // Get players selection by which image was clicked, adeptly id is same as option
    let playerSelection = e.target.id.toUpperCase()
    let computerSelection = computerPlay()

    // Portray each selections on page
    document.querySelector("#selection-you").textContent = playerSelection
    document.querySelector("#selection-com").textContent = computerSelection

    // Keep playing until someone reaches 5 points
    if (playerScore < 5 && comScore < 5) {
        res = playRound(playerSelection, computerSelection);
        if (res.win === true) {
            playerScore++;
            // Allow user to play again by page reload, display scores
            if (playerScore === 5) {
                commentary_text.textContent = "Congratulations champ, you won! Click here to play again.";
                commentary.addEventListener('click', () => location.reload())
                commentary.style.display = "block";
                document.querySelector('#player1score').innerHTML = playerScore;
                document.querySelector('#player2score').innerHTML = comScore;
                return true;
            }
        } else if (res.win === false){
            comScore++;
            if (comScore === 5) {
                commentary_text.textContent = "You lose! Better luck next time. Click here to play again.";
                commentary.addEventListener('click', () => location.reload())
                commentary.style.display = "block";
                document.querySelector('#player1score').innerHTML = playerScore;
                document.querySelector('#player2score').innerHTML = comScore;
                return true;
            }
        }
        // If no one won, display comments about round wins for a short amount of time, update scores
        commentary_text.textContent = res.text;
        commentary.style.display = "block";
        setTimeout("hide(commentary)", 1400);
        document.querySelector('#player1score').innerHTML = playerScore;
        document.querySelector('#player2score').innerHTML = comScore;
        }
    }

function playRound(playerSelection, computerSelection) {
    // Text to be displayed in commentary
    let text = '';
    let win = undefined;

    if (playerSelection == 'ROCK' && computerSelection == 'ROCK' || 
        playerSelection == 'PAPER' && computerSelection == 'PAPER' || 
        playerSelection == 'SCISSORS' && computerSelection == 'SCISSORS') {
            text = "It's a draw! Try again.";
            
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER' || 
            playerSelection == 'PAPER' && computerSelection == 'SCISSORS' || 
            playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
                text = "You lost a round!";
                win = false;
    } else {
        text = "You win this round!"
        win = true;
    }
    return {text: text, win: win}
}


// Function for timeout function
function hide(element) {
    element.style.display = "none";
};