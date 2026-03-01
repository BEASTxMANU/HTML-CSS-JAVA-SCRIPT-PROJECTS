let winResult = document.querySelector(".win-container");
let msg = document.querySelector("#winmsg");
let newGame = document.querySelector(".new-game-btn");
let clickBoxes = document.querySelectorAll(".box");
let resetGame = document.querySelector(".reset-game-btn");
let turnO = true;
const winPattern = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8],];
clickBoxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O"
            turnO = false;
        }
        else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        if (checkWinner()) {
            disableBoxes();
        }
    })
});

const showWinner = (winner) => {
    winResult.classList.remove("hide");
    msg.innerHTML = `Congratulations, Winner is ${winner}`
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1val = clickBoxes[pattern[0]].innerText;
        let pos2val = clickBoxes[pattern[1]].innerText;
        let pos3val = clickBoxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return true;
            }
        }
    }
};

const resetbtn = () => {
    turnO = true;
    enableBoxes();
    winResult.classList.add("hide");
    msg.textContent = "";
};
const disableBoxes = () => {
    for (let box of clickBoxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of clickBoxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
};
resetGame.addEventListener("click", resetbtn);
newGame.addEventListener("click", resetbtn);