var User = /** @class */ (function () {
    function User(userName, userSign) {
        this.userName = userName;
        this.userSign = userSign;
    }
    Object.defineProperty(User.prototype, "userName", {
        get: function () { return this._userName; },
        set: function (value) { this._userName = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "userSign", {
        get: function () { return this._userSign; },
        set: function (value) { this._userSign = value; },
        enumerable: true,
        configurable: true
    });
    return User;
}());
//# sourceMappingURL=User.js.map