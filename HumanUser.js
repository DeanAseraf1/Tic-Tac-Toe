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
var HumanUser = /** @class */ (function (_super) {
    __extends(HumanUser, _super);
    function HumanUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //function to return input string based on the board.
    HumanUser.prototype.getMoveInput = function (board) {
        return prompt(board + "\n Enter your move:");
    };
    return HumanUser;
}(User));
//# sourceMappingURL=HumanUser.js.map