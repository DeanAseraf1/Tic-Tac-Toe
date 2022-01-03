var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AIUser = /** @class */ (function (_super) {
    __extends(AIUser, _super);
    function AIUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Function to return a random not marked cell.
    AIUser.prototype.pickRandomMove = function (board) {
        var rng = 0;
        while ((board.getCellAt(rng) == null || board.getCellAt(rng).isMarked)) {
            rng = Math.round(Math.random() * (board.unmarkedCellsArray.length - 1) + 1);
        }
        return board.getCellAt(rng);
    };
    //Function to calculate and return winnig or blocking cell based on the current game board.
    AIUser.prototype.tryNecessaryMove = function (board, tryWinning) {
        var steps = board.boardSize - 1;
        //Winning
        var checkRows = steps;
        var checkColumns = steps;
        var checkDiagonal1 = steps;
        var checkDiagonal2 = steps;
        for (var i = 0; i < board.unmarkedCellsArray.length; i++) {
            var inputCell = board.unmarkedCellsArray[i];
            for (var w = 0; w < board.cellsArray.length; w++) {
                for (var z = 0; z < board.cellsArray[w].length; z++) {
                    var compareCell = board.cellsArray[w][z];
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
    };
    //Function to return input string based on the board.
    AIUser.prototype.getMoveInput = function (board) {
        var cell = this.tryNecessaryMove(board, true);
        if (cell != null && !cell.isMarked) {
            return cell.cellNumber + "";
        }
        cell = this.tryNecessaryMove(board, false);
        if (cell != null && !cell.isMarked) {
            return cell.cellNumber + "";
        }
        return this.pickRandomMove(board).cellNumber + "";
    };
    return AIUser;
}(User));
//# sourceMappingURL=AIUser.js.map