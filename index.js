let header = document.querySelector("h1");
let Colors = ["red", "black", "white"];

let Actions = ["Rock", "Scissor", "Paper"];
let values = { PlayerValue: 0, ComputerValue: 0 };

const playerSpan = document.getElementById("Player");
const computerSpan = document.getElementById("Computer");

function initializeResult() {
    values.PlayerValue = 0;
    values.ComputerValue = 0;
    playerSpan.innerText = `${values.PlayerValue}`;
    computerSpan.innerText = `${values.ComputerValue}`;
}

function checkValues() {
    if (values.PlayerValue == 5) {
        initializeResult();
        changeColor();
        return "Player";
    } else {
        if (values.ComputerValue == 5) {
            initializeResult();
            changeColor();
            return "Computer";
        }
    }
}

function changeColor() {
    if (values.PlayerValue < values.ComputerValue) {
        playerSpan.style.color = "red";
        computerSpan.style.color = "green";
    } else {
        if (values.PlayerValue > values.ComputerValue) {
            playerSpan.style.color = "green";
            computerSpan.style.color = "red";
        } else {
            playerSpan.style.color = "white";
            computerSpan.style.color = "white";
        }
    }
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 3);
}

function getRandomAction() {
    return Actions[generateRandomNumber()];
}

function incrementValueOfPlayer(player) {
    values[`${player}Value`]++;
    const element = document.getElementById(player);
    element.innerText = `${values[`${player}Value`]}`;
}

function findWinnerOfTheRound(playerAction, computerAction) {
    if (playerAction == "Scissor" && computerAction == "Paper") {
        incrementValueOfPlayer("Player");
    } else {
        if (playerAction == "Scissor" && computerAction == "Rock") {
            incrementValueOfPlayer("Computer");
        }
    }

    if (playerAction == "Rock" && computerAction == "Scissor") {
        incrementValueOfPlayer("Player");
    } else {
        if (playerAction == "Rock" && computerAction == "Paper") {
            incrementValueOfPlayer("Computer");
        }
    }

    if (playerAction == "Paper" && computerAction == "Rock") {
        incrementValueOfPlayer("Player");
    } else {
        if (playerAction == "Paper" && computerAction == "Scissor") {
            incrementValueOfPlayer("Computer");
        }
    }
    changeColor();
}

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        playerAction = event.target.parentElement.id;
        computerAction = getRandomAction();
        findWinnerOfTheRound(playerAction, computerAction);
        console.log(values.PlayerValue, values.ComputerValue);
        answer = checkValues();
        if (answer == "Player") {
            alert("You won the game!!");
        } else {
            if (answer == "Computer") {
                alert("The Computer won the game!");
            }
        }
    });
});
