class Cell {
    //Holding the input needed to get this cell
    private _cellNumber: number;
    get cellNumber(): number { return this._cellNumber; }
    set cellNumber(value: number) { this._cellNumber = value; }

    //Holding the current string to display
    private _sign: string;
    get sign(): string { return this._sign; }
    set sign(value: string) { this._sign = value; }

    //Holding the position in the grid x axis.
    private _x: number;
    get x(): number { return this._x; }
    set x(value: number) { this._x = value; }

    //Holding the position in the grid y axis
    private _y: number;
    get y(): number { return this._y; }
    set y(value: number) { this._y = value; }

    //Holding a boolean to know if this cell has been marked before or not.
    private _isMarked: boolean;
    get isMarked(): boolean { return this._isMarked; }
    set isMarked(value: boolean) { this._isMarked = value; }

    constructor(cellNumber: number, sign: string, x: number, y: number, marked: boolean) {
        this.cellNumber = cellNumber;
        this.sign = sign;
        this.x = x;
        this.y = y;
        this.isMarked = marked;
    }
}