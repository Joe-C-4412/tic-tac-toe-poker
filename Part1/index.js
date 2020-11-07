const board = []


function play(clickedId) {
    const clickedElement = document.getElementById(clickedId)
    const playerSpan = document.getElementById('player')

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
    } else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId] = 'O'
    }

   setTimeout(()=> {
    if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') {
        alert("Player O is the winner! Congratulations!!")
        return
    }
    if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') {
        alert("Player X is the winner! Congratulations!!")
        return
    }
    if (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') {
        alert("Player O is the winner! Congratulations!!")
        return
    }
    if (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') {
        alert("Player X is the winner! Congratulations!!")
        return
    }
    if (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') {
        alert("Player O is the winner! Congratulations!!")
        return
    }
    if (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') {
        alert("Player X is the winner! Congratulations!!")
        return
    }
    if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') {
        alert("Player O is the winner! Congratulations!!")
        return
    }
    if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') {
        alert("Player X is the winner! Congratulations!!")
        return
    }
    if (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
        alert("Player O is the winner! Congratulations!!")
        return
    }
    if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') {
        alert("Player X is the winner! Congratulations!!")
        return
    }
    
    let boardFull = true
    for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
        boardFull = false
    }
    }
    if (boardFull === true) {
    alert("There is no Winner, but let's play again shall we?")
    }
   },100)
   
} 

console.log(board)
