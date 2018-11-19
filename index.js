/**
Custom module for you to write your own javascript functions
**/
var Index = function () {

    // private functions & variables

    var myFunc = function(text) {
        alert(text);
    }

    var check_winner = function(board, current_position) {
            let x = parseInt(current_position["x"]);
            let y = parseInt(current_position["y"]);

            if (check_straight_line_winner(board, x, y) || check_diagonal_line_winner(board, x, y)) {
                alert("Player " + current_player + " win!")
            }
    }

    var check_straight_line_winner = function(board, x, y) {
        // check theo duong thang
        let flag = false;

        if (y+2 < width) {
            if (board[x][y] == board[x][y+1] && board[x][y] == board[x][y+2]) {
                flag = true;
            }
        }


        if (x+2 < width) {
            if (board[x][y] == board[x+1][y] && board[x][y] == board[x+2][y]) {
                flag = true;
            }
        }

        if ((y-1) >= 0 && (y+1) < width) {
            if (board[x][y] == board[x][y-1] && board[x][y] == board[x][y+1]) {
                flag = true;
            }
        }

        if ((x-1) >= 0 && (x+1) < width) {
            if (board[x][y] == board[x-1][y] && board[x][y] == board[x+1][y]) {
                flag = true;
            }
        }

        if (y-2 >= 0) {
            if (board[x][y] == board[x][y-1] && board[x][y] == board[x][y-2]) {
                flag = true;
            }
        }

        if (x-2 >= 0) {
            if (board[x][y] == board[x-1][y] && board[x][y] == board[x-2][y]) {
                flag = true;
            }
        }

            // if (board[x][y] == board[x][y+1] && board[x][y] == board[x][y+2]
            //  || board[x][y] == board[x+1][y] && board[x][y] == board[x+2][y]

            //  || board[x][y] == board[x][y-1] && board[x][y] == board[x][y+1]
            //  || board[x][y] == board[x-1][y] && board[x][y] == board[x+1][y]

            //  || board[x][y] == board[x][y-1] && board[x][y] == board[x][y-2]
            //  || board[x][y] == board[x-1][y] && board[x][y] == board[x-2][y]
            // ) {
            //  flag = true;
            // }

        return flag;
    }

    var check_diagonal_line_winner = function(board, x, y) {
        // check theo duong cheo
        let flag = false;

        if ((x+2) < width && (y+2) < width) {
            if (board[x][y] == board[x+1][y+1] && board[x][y] == board[x+2][y+2]) {
                flag = true;
            }
        }

        if ((x+1) < width && (y+1) < width && (x-1) >= 0 && (y-1) >= 0) {
            if (board[x][y] == board[x+1][y+1] && board[x][y] == board[x-1][y-1]) {
                flag = true;
            }

            if (board[x][y] == board[x+1][y-1] && board[x][y] == board[x-1][y+1]) {
                flag = true;
            }
        }

        if ((x-2) >= 0 && (y-2) >= 0) {
            if (board[x][y] == board[x-1][y-1] && board[x][y] == board[x-2][y-2]) {
                flag = true;
            }
        }

        if ((x-2) >= 0 && (y+2) < width) {
            if (board[x][y] == board[x-1][y+1] && board[x][y] == board[x-2][y+2]) {
                flag = true;
            }
        }

        if ((x+2) < width && (y-2) >= 0) {
            if (board[x][y] == board[x+1][y-1] && board[x][y] == board[x+2][y-2]) {
                flag = true;
            }
        }

        // if (board[x][y] == board[x+1][y+1] && board[x][y] == board[x+2][y+2]
        //  || board[x][y] == board[x+1][y+1] && board[x][y] == board[x-1][y-1]
        //  || board[x][y] == board[x-1][y-1] && board[x][y] == board[x-2][y-2]

        //  || board[x][y] == board[x-1][y+1] && board[x][y] == board[x-2][y+2]
        //  || board[x][y] == board[x+1][y-1] && board[x][y] == board[x-1][y+1]
        //  || board[x][y] == board[x+1][y-1] && board[x][y] == board[x+2][y-2]
        //  ) {
        //  flag = true;
        // }

        // 00  01  02

        // 10  11  12

        // 20  21  22

        return flag;
    }

    var data_after_change_player = function(current_player) {
        var data = {};
        if (current_player == 1) {
            data = {
                current_player: 2,
                value: 2
            }
        } else if (current_player == 2) {
            data = {
                current_player: 1,
                value: 1
            }
        }

        return data;
    }

    // public functions
    return {

        //main function
        init: function () {
            //initialize here something.
        },

        //some helper function
        doSomeStuff: function () {
            myFunc();
        },

        check_winner: function() {
            check_winner();
        },

        check_straight_line_winner: function() {
            check_straight_line_winner();
        },

        check_diagonal_line_winner: function() {
            check_diagonal_line_winner();
        },

        data_after_change_player: function() {
            data_after_change_player();
        },
    };

}();

jQuery(document).ready(function() {
   Index.init();
   Index.data_after_change_player();
});

/***
Usage
***/
//Index.doSomeStuff();
