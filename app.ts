let user1: HumanUser = new HumanUser("You", "X");
let user2: AIUser = new AIUser("PC", "O");

let board: Board = new Board(3);

let currentUser: User = user1;
let gameStatus: GameStatus = GameStatus.InGame;

//In Game
while (gameStatus == GameStatus.InGame) {
    let cellChoise: string = currentUser.getMoveInput(board);
    if (isNaN(+cellChoise)) {
        alert("Please enter only numbers.");
    }
    else if (+cellChoise < 1 || +cellChoise > board.boardSize*board.boardSize) {
        alert(`Please enter only numbers between 1-${board.boardSize * board.boardSize}`);
    }
    else if (cellChoise.split(".").length > 1) {
        alert("Please enter only whole integer numbers.");
    }
    else if (board.getCellAt(+cellChoise).isMarked) {
        alert("This cell number already taken. Please try a different one.");
    }
    else {
        board.markCellAt(+cellChoise, currentUser.userSign);
        checkWin();
        checkDraw();
        switch (+gameStatus) {
            case GameStatus.Win:
                alert(board + `${currentUser.userName} Win!`);
                break;
            case GameStatus.Draw:
                alert(board + `Draw! No more moves available`);
                break;
            default:
                switchUsers();
        }
    }
}

//Switching between the game users turn.
function switchUsers(): void {
    if (currentUser == user1) {
        currentUser = user2;
    }
    else {
        currentUser = user1;
    }
}

//Function to check if theres a draw.
function checkDraw(): void {
    if (board.unmarkedCellsArray.length <= 0 && gameStatus == GameStatus.InGame) {
        gameStatus = GameStatus.Draw;
    }
}

//Function to check if theres a winner.
function checkWin(): void {
    let steps: number = board.boardSize - 1;
    let stepsToWinRow: number = steps;
    let stepsToWinColumn: number = steps;
    let stepsToWinDiagonal1: number = steps;
    let stepsToWinDiagonal2: number = steps;

    for (let i: number = 0; i < board.cellsArray.length; i++) {
        for (let j: number = 0; j < board.cellsArray[i].length; j++) {

            let currentCell: Cell = board.cellsArray[i][j];

            if (currentCell.sign == currentUser.userSign) {
                for (let w: number = 0; w < board.cellsArray.length; w++) {
                    for (let z: number = 0; z < board.cellsArray[w].length; z++) {

                        let compareCell: Cell = board.cellsArray[w][z];

                        if (currentCell != compareCell && compareCell.sign == currentUser.userSign) {

                            if (currentCell.x == compareCell.x) {
                                stepsToWinRow--;
                            }

                            if (currentCell.y == compareCell.y) {
                                stepsToWinColumn--;
                            }

                            if ((currentCell.x == currentCell.y && compareCell.x == compareCell.y)) {
                                stepsToWinDiagonal1--;
                            }

                            if (((currentCell.x + currentCell.y == steps) &&
                                (compareCell.x + compareCell.y == steps))) {
                                stepsToWinDiagonal2--;
                            }

                            if (stepsToWinRow <= 0 || stepsToWinColumn <= 0 || stepsToWinDiagonal1 <= 0 || stepsToWinDiagonal2 <= 0) {
                                gameStatus = GameStatus.Win;
                                return;
                            }
                        }
                    }
                }
                stepsToWinRow = steps;
                stepsToWinColumn = steps;
                stepsToWinDiagonal1 = steps;
                stepsToWinDiagonal2 = steps;
            }
        }
    }

}
