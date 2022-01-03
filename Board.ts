class Board {
    //Holding all the cells in the board.
    private _cellsArray: Cell[][];
    get cellsArray(): Cell[][] { return this._cellsArray; }
    set cellsArray(value: Cell[][]) { this._cellsArray = value; }

    //Holding all the Unmarked cells in the current board.
    private _unmarkedCellsArray: Cell[];
    get unmarkedCellsArray(): Cell[] { return this._unmarkedCellsArray; }
    set unmarkedCellsArray(value: Cell[]) { this._unmarkedCellsArray = value; }

    //Holding the board size.
    private _boardSize: number;
    get boardSize(): number { return this._boardSize; }
    set boardSize(value: number) { this._boardSize = value; }

    constructor(boardSize: number) {
        this.boardSize = boardSize;
        this.resetBoard();
    }

    //Function to reset the board at the start of the game.
    resetBoard(): void {
        let currentCellNumber: number = 1;
        this.cellsArray = new Array(this.boardSize);
        this.unmarkedCellsArray = [];
        for (let i: number = 0; i < this.cellsArray.length; i++) {
            this.cellsArray[i] = new Array(this.boardSize);
            for (let j: number = 0; j < this.cellsArray[i].length; j++) {
                let newCell: Cell = new Cell(currentCellNumber, currentCellNumber + "", i, j, false);
                this.unmarkedCellsArray.push(newCell);
                this.cellsArray[i][j] = newCell;
                currentCellNumber++;
            }
        }
    }

    //Function to get a cell based on the input.
    getCellAt(cellNumber: number): Cell {
        for (let i: number = 0; i < this.cellsArray.length; i++) {
            for (let j: number = 0; j < this.cellsArray[i].length; j++) {
                if (this.cellsArray[i][j].cellNumber == cellNumber) {
                    return this.cellsArray[i][j];
                }
            }
        }
        return null;
    }

    //Function to mark a cell
    markCellAt(cellNumber: number, sign: string) {
        let cell: Cell = this.getCellAt(cellNumber);
        cell.sign = sign;
        cell.isMarked = true;
        this.unmarkedCellsArray.splice(this.unmarkedCellsArray.indexOf(cell), 1);
    }

    //Function to get the board representation string.
    toString(): string {
        let str: string = "-------------\n";
        for (let i: number = 0; i < this.cellsArray.length; i++) {
            for (let j: number = 0; j < this.cellsArray[i].length; j++) {
                str += ` | ${this.cellsArray[i][j].sign} `;
            }
            str += "|\n-------------\n";
        }
        return str;
    }
}