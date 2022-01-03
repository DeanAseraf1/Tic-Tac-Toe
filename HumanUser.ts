class HumanUser extends User {

    //function to return input string based on the board.
    getMoveInput(board: Board): string {
        return prompt(`${board}\n Enter your move:`);
    }
}