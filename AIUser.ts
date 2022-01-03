class AIUser extends User {

    //Function to return a random not marked cell.
    pickRandomMove(board: Board): Cell {
        let rng: number = 0;
        while ((board.getCellAt(rng) == null || board.getCellAt(rng).isMarked)) {
            rng = Math.round(Math.random() * (board.unmarkedCellsArray.length-1)+1);
        }
        return board.getCellAt(rng);
    }

    //Function to calculate and return winnig or blocking cell based on the current game board.
    tryNecessaryMove(board: Board, tryWinning: boolean): Cell {
        let steps: number = board.boardSize - 1;

        //Winning
        let checkRows: number = steps;
        let checkColumns: number = steps;
        let checkDiagonal1: number = steps;
        let checkDiagonal2: number = steps;

        for (let i: number = 0; i < board.unmarkedCellsArray.length; i++) {
            let inputCell: Cell = board.unmarkedCellsArray[i];
            for (let w: number = 0; w < board.cellsArray.length; w++) {
                for (let z: number = 0; z < board.cellsArray[w].length; z++) {
                    let compareCell: Cell = board.cellsArray[w][z];
                    if (compareCell != inputCell && compareCell.isMarked) {

                        if (inputCell.x == compareCell.x) {
                            if ((compareCell.sign == this.userSign) == tryWinning) {
                                checkRows--;
                            }

                            if (checkRows <= 0) {
                                return inputCell;
                            }
                        }
                        if (inputCell.y == compareCell.y) {
                            if ((compareCell.sign == this.userSign) == tryWinning) {
                                checkColumns--;
                            }

                            if (checkColumns <= 0) {
                                return inputCell;
                            }
                        }

                        if (inputCell.x - inputCell.y == 0 && compareCell.x - compareCell.y == 0) {
                            if ((compareCell.sign == this.userSign) == tryWinning) {
                                checkDiagonal1--;
                            }

                            if (checkDiagonal1 <= 0) {
                                return inputCell;
                            }

                        }
                        if (inputCell.x + inputCell.y == steps && compareCell.x + compareCell.y == steps) {
                            if ((compareCell.sign == this.userSign) == tryWinning) {
                                checkDiagonal2--;
                            }

                            if (checkDiagonal2 <= 0) {
                                return inputCell;
                            }
                        }
                    }
                }
            }
            checkRows = steps;
            checkColumns = steps;
            checkDiagonal1 = steps;
            checkDiagonal2 = steps;
        }
        return null;
    }

    //Function to return input string based on the board.
    getMoveInput(board: Board): string {
        let cell: Cell = this.tryNecessaryMove(board, true);
        if (cell != null && !cell.isMarked) {
            return cell.cellNumber + "";
        }

        cell = this.tryNecessaryMove(board, false);
        if (cell != null && !cell.isMarked) {
            return cell.cellNumber + "";
        }

        return this.pickRandomMove(board).cellNumber + "";
    }
}