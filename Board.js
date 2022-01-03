var Board = /** @class */ (function () {
    function Board(boardSize) {
        this.boardSize = boardSize;
        this.resetBoard();
    }
    Object.defineProperty(Board.prototype, "cellsArray", {
        get: function () { return this._cellsArray; },
        set: function (value) { this._cellsArray = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "unmarkedCellsArray", {
        get: function () { return this._unmarkedCellsArray; },
        set: function (value) { this._unmarkedCellsArray = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "boardSize", {
        get: function () { return this._boardSize; },
        set: function (value) { this._boardSize = value; },
        enumerable: true,
        configurable: true
    });
    //Function to reset the board at the start of the game.
    Board.prototype.resetBoard = function () {
        var currentCellNumber = 1;
        this.cellsArray = new Array(this.boardSize);
        this.unmarkedCellsArray = [];
        for (var i = 0; i < this.cellsArray.length; i++) {
            this.cellsArray[i] = new Array(this.boardSize);
            for (var j = 0; j < this.cellsArray[i].length; j++) {
                var newCell = new Cell(currentCellNumber, currentCellNumber + "", i, j, false);
                this.unmarkedCellsArray.push(newCell);
                this.cellsArray[i][j] = newCell;
                currentCellNumber++;
            }
        }
    };
    //Function to get a cell based on the input.
    Board.prototype.getCellAt = function (cellNumber) {
        for (var i = 0; i < this.cellsArray.length; i++) {
            for (var j = 0; j < this.cellsArray[i].length; j++) {
                if (this.cellsArray[i][j].cellNumber == cellNumber) {
                    return this.cellsArray[i][j];
                }
            }
        }
        return null;
    };
    //Function to mark a cell
    Board.prototype.markCellAt = function (cellNumber, sign) {
        var cell = this.getCellAt(cellNumber);
        cell.sign = sign;
        cell.isMarked = true;
        this.unmarkedCellsArray.splice(this.unmarkedCellsArray.indexOf(cell), 1);
    };
    //Function to get the board representation string.
    Board.prototype.toString = function () {
        var str = "-------------\n";
        for (var i = 0; i < this.cellsArray.length; i++) {
            for (var j = 0; j < this.cellsArray[i].length; j++) {
                str += " | " + this.cellsArray[i][j].sign + " ";
            }
            str += "|\n-------------\n";
        }
        return str;
    };
    return Board;
}());
//# sourceMappingURL=Board.js.map