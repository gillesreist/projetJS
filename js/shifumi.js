let choices = ['rock', 'paper', 'scissors', 'bomb'];

function getPlayerChoice(fieldId) {
    const playerInput = document.getElementById(fieldId).value; 
    playerInput.toLowerCase();
    if (choices.indexOf(playerInput) >= 0) {
        return playerInput;
    } else {
        return getPlayerChoice();
    }
}

function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3);
    return choices[computerNumber];
}

function findWinner(player1, player2) {

    if (player1 == "bomb") {
        yourScore++;
        document.querySelector(".your_score").textContent = yourScore;
        return "Vous, gros bourrin !";
    } else if (player1 == player2) {
        return "Personne...";
    } else if ((player1 == "rock" && player2 == "scissors") || (player1 == "scissors" && player2 == "paper") || (player1 == "paper" && player2 == "rock")) {
        yourScore++;
        document.querySelector(".your_score").textContent = yourScore;
        return "Vous !";
    } else {
        opponentScore++;
        document.querySelector(".opponent_score").textContent = opponentScore;
        return "L'ordinateur O_O";
    }
}

function playGame(){
    const uchoice = getPlayerChoice('player_choice');
    const computerChoice= getComputerChoice();

    let player_image = document.createElement("img");
    player_image.classList.add('weapon');
    let opponent_image = document.createElement("img");
    opponent_image.classList.add('weapon');

    switch (uchoice) {
        case 'rock': 
            player_image.src = "img/player_rock.jpg";
            break;
        case 'paper': 
            player_image.src = "img/player_paper.jpg";
            break;
        case 'scissors': 
            player_image.src = "img/player_scissors.jpg";
            break;
        case 'bomb': 
            player_image.src = "img/bombe.png";
            break;
    }

    switch (computerChoice) {
        case 'rock': 
            opponent_image.src = "img/opponent_rock.jpg";
            break;
        case 'paper': 
            opponent_image.src = "img/opponent_paper.jpg";
            break;
        case 'scissors': 
            opponent_image.src = "img/opponent_scissors.jpg";
            break;
    }

    let images_div = document.getElementsByClassName('weapon_container');

    if(images_div[0].firstElementChild) {
        images_div[0].firstElementChild.remove();
    }
    images_div[0].appendChild(player_image);
    if(images_div[1].firstElementChild) {
        images_div[1].firstElementChild.remove();
    }
    images_div[1].appendChild(opponent_image);

    let result = document.querySelector('.result');

    result.textContent = findWinner(uchoice, computerChoice);
}


const play = document.querySelector('.fight');

let yourScore = 0;
let opponentScore = 0;

play.addEventListener('click', ()=> {
    if (document.getElementById("player_choice").value) {
        playGame()
    } else {
        alert("Choisissez d'abord une option voyons !")
    }
});
