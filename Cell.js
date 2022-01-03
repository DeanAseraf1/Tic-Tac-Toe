var Cell = /** @class */ (function () {
    function Cell(cellNumber, sign, x, y, marked) {
        this.cellNumber = cellNumber;
        this.sign = sign;
        this.x = x;
        this.y = y;
        this.isMarked = marked;
    }
    Object.defineProperty(Cell.prototype, "cellNumber", {
        get: function () { return this._cellNumber; },
        set: function (value) { this._cellNumber = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "sign", {
        get: function () { return this._sign; },
        set: function (value) { this._sign = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "x", {
        get: function () { return this._x; },
        set: function (value) { this._x = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "y", {
        get: function () { return this._y; },
        set: function (value) { this._y = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "isMarked", {
        get: function () { return this._isMarked; },
        set: function (value) { this._isMarked = value; },
        enumerable: true,
        configurable: true
    });
    return Cell;
}());
//# sourceMappingURL=Cell.js.map