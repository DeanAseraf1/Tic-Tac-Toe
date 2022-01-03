abstract class User {
    //Holding the User name to display
    private _userName: string;
    get userName(): string { return this._userName; }
    set userName(value: string) { this._userName = value; }

    //Holding the User mark sign to display
    private _userSign: string;
    get userSign(): string { return this._userSign; }
    set userSign(value: string) { this._userSign = value; }

    constructor(userName: string, userSign: string) {
        this.userName = userName;
        this.userSign = userSign;
    }

    //Abstract Function to return chosen cell number as a string based on the board.
    abstract getMoveInput(board: Board): string;
}