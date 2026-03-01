let userScore = 0;
let compScore = 0;
let yourscore = document.querySelector("#user-score");
let compscore = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame = (userChoice, comChoice) => {
    msg.textContent = "Game is Draw";
}

const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        msg.innerHTML = `Winner is You! ${userChoice} beats ${comChoice}`;
        userScore++;
        yourscore.innerHTML = `${userScore}`;
    }
    else {
        msg.innerHTML = `Winner is Computer! ${comChoice} beats ${userChoice}`;
        compScore++;
        compscore.innerHTML = `${compScore}`;
    };
};
const playGame = (userChoice) => {
    const comChoice = genCompChoice();

    if (userChoice === comChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            if (comChoice === "paper") {
                userWin = false;
            }
            else {
                userWin = true;
            }
        }
        else if (userChoice === "paper") {
            if (comChoice === "scissors") {
                userWin = false;
            }
            else {
                userWin = true;
            }
        }
        else if (userChoice === "rock") {
            if (comChoice === "scissors") {
                userWin = true;
            }
            else {
                userWin = false;
            }
        };
        showWinner(userWin, userChoice, comChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});