const gameBoard = (() => {
    let boardState = ["", "", "", "", "", "", "", "", ""];
    return {
        boardState
    };
})();

const displayController = (() => {
    let gameOver = false;

    const htmlInitialize = () => {
        for (let i = 1; i < 10; i++) {
            const boardSlot = document.createElement("div");
            boardSlot.id = "Slot" + i;
            boardSlot.classList = "boardSlot";
            boardSlot.textContent = "";
            container.appendChild(boardSlot);
            if (i < 4) {boardSlot.style.borderTop = "0px";}
            if (i >= 7 && i <= 9) {boardSlot.style.borderBottom = "0px";}
            if (i == 1 || i == 4 || i == 7) {boardSlot.style.borderLeft = "0px";}
            if (i == 3 || i == 6 || i == 9) {boardSlot.style.borderRight = "0px";}
        }
    }

    const displayGameBoard = () => {
        gameBoard.boardState.forEach((e, i) => {
            let slotNum = document.getElementById("Slot" + (i + 1));
            if (e == "X") {
                slotNum.textContent = "X";
            }
            else if (e == "O") {
                slotNum.textContent = "O";
            }
        })
    }

    const changeActivePlayer = (player1, player2) => {
        if (player1.checkActive()) {
            player1.disableActive();
            player2.enableActive();
        }
        else {
            player1.enableActive();
            player2.disableActive();
        }
    }

    const checkWinner = () => {
        const board = gameBoard.boardState;
        if ((board[0] == board[1] && board[0] == board[2] && board[0].length > 0 && board[1].length > 0 && board[2].length > 0) ||
            (board[3] == board[4] && board[3] == board[5] && board[3].length > 0 && board[4].length > 0 && board[5].length > 0) ||
            (board[6] == board[7] && board[6] == board[8] && board[6].length > 0 && board[7].length > 0 && board[8].length > 0) ||
            (board[0] == board[3] && board[0] == board[6] && board[0].length > 0 && board[3].length > 0 && board[6].length > 0) ||
            (board[1] == board[4] && board[1] == board[7] && board[1].length > 0 && board[4].length > 0 && board[7].length > 0) ||
            (board[2] == board[5] && board[2] == board[8] && board[2].length > 0 && board[5].length > 0 && board[8].length > 0) ||
            (board[2] == board[4] && board[2] == board[6] && board[2].length > 0 && board[4].length > 0 && board[6].length > 0) ||
            (board[0] == board[4] && board[0] == board[8] && board[0].length > 0 && board[4].length > 0 && board[8].length > 0)) {
            gameOver = true;
        }
        else if (board[0].length > 0 && board[1].length > 0 && board[2].length > 0 &&
            board[3].length > 0 && board[4].length > 0 && board[5].length > 0 &&
            board[6].length > 0 && board[7].length > 0 && board[8].length > 0) {
            //tie
        }

    }

    const addGameMarkEvent = () => {
        for (let i = 1; i < 10; i++) {
            const slotNumber = document.getElementById("Slot" + i);
            slotNumber.addEventListener("click", () => {
                if (playerCircle.checkActive() && slotNumber.textContent == "" && !gameOver) {
                    gameBoard.boardState[slotNumber.id.slice(-1) - 1] = "O";
                }
                else if (playerCross.checkActive() && slotNumber.textContent == "" && !gameOver) {
                    gameBoard.boardState[slotNumber.id.slice(-1) - 1] = "X";
                }
                displayGameBoard();
                changeActivePlayer(playerCross, playerCircle);
                checkWinner();
            })
        }
    }

    return {
        htmlInitialize,
        displayGameBoard,
        changeActivePlayer,
        addGameMarkEvent
    };
})();

const players = (type) => {
    let active = false;
    const checkActive = () => active;
    const enableActive = () => active = true;
    const disableActive = () => active = false;

    return {
        type,
        checkActive,
        enableActive,
        disableActive
    };
}

console.log(gameBoard.boardState);
displayController.htmlInitialize();
displayController.displayGameBoard();

const playerCircle = players("O");
const playerCross = players("X");

playerCross.enableActive();

displayController.addGameMarkEvent();

console.log(playerCircle.type);