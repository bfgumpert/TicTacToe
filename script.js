const gameBoard = (() => {
    let boardState = ["X", "O", "X", "X", "O", "O", "X", "O", "X"];
    return {
        boardState
    };
})();

const displayController = (() => {
    const htmlInitialize = () => {
        for (let i = 1; i < 10; i++) {
            const boardSlot = document.createElement("div");
            boardSlot.id = "Slot" + i;
            boardSlot.classList = "boardSlot";
            boardSlot.textContent = "x";
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

    return {
        htmlInitialize,
        displayGameBoard
    };
})();

const players = () => {
    return {};
}

console.log(gameBoard.boardState);
displayController.htmlInitialize();
displayController.displayGameBoard();