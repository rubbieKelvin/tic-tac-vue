import { createStore } from "vuex";

const board_has_slot = (board) => {
    for (let i=1; i<10; i+=1){
        // checks if theres still space
        if (board[i]==null||board[i]==undefined) return true
    }
    return false
}

const clear_board = (board) => {
    for (let i=1; i<10; i+=1){
        board[i] = null
    }
}

const getLine = (board) => {
    const indexes_list = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 5, 9],
        [3, 5, 7],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
    ]

    for (let i=0; i<indexes_list.length; i+=1){
        let res = true;
        const indexes = indexes_list[i]
        let mark = board[indexes[0]]


        if (mark !== null) {
            res = (board[indexes[1]]==mark) && (board[indexes[2]]==mark)
            if (res) return mark
        }

    }

    return null
}

export const store = createStore({
    state: {
        game: {
            players: {
                playerOne: "Player One",
                playerTwo: "Player Two",
            },
            score: {
                playerOne: 0,
                playerTwo: 0,
            },
            board: {},
            whosPlaying: 0,
            finished: false,
            sessionWinner: null
        }
    },
    mutations: {
        SET_PLAYER_ONE(state, name){
            state.game.players.playerOne = name.trim()
        },
        SET_PLAYER_TWO(state, name){
            state.game.players.playerTwo = name.trim()
        },
        CLEAR_BOARD: (state) => clear_board(state.game.board),
        NEXT_PLAYER(state){
            state.game.whosPlaying = (state.game.whosPlaying===0) ? 1 : 0
        },
        WRITE_BOARD(state, position){
            if (position < 0 || position > 9) return
            state.game.board[position] = (state.game.whosPlaying===0) ? "X" : "O"

            // check if that was a winning move
            const winnerMark = getLine(state.game.board)
            
            if (winnerMark){
                if (winnerMark=="X") state.game.score.playerOne += 1
                if (winnerMark=="O") state.game.score.playerTwo += 1
                state.game.finished = true
                state.game.sessionWinner = winnerMark
            }
            
            // check if slots are empty
            if (!board_has_slot(state.game.board)) state.game.finished = true
            
            // clear the board after a while, if game finished
            if (state.game.finished){
                setTimeout(()=>{
                    clear_board(state.game.board)
                    state.game.finished = false
                    state.game.whosPlaying = 0
                    state.game.sessionWinner = null
                }, 3000)
            }
        }
    }
})