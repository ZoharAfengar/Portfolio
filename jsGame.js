"use strict";
let board = ["", "", "", "", "", "", "", "", ""];
const endGameMessage = document.getElementById('endGameMessage');
const cellField = document.getElementById('cellField');
const submitX = document.getElementById('submitX');
const gameBoard = document.querySelectorAll('.gameBoard div');
let gameEnded = false;
let resetButton;

cellField.focus();
submitX.addEventListener("click", playerMove);

function playerMove() {
    let xPosition = cellField.value;
    if (board[xPosition] == 'X' || board[xPosition] == 'O') {
        alert("Invalid Position, Try again!");
        cellField.value = "";
        return;
    }
    draw(xPosition, "X");
    checkWinAndPrint();
    if (!gameEnded) {
        computerMove();
        checkWinAndPrint();
    }

}

function draw(position, shape) {
    board[position] = shape;
    gameBoard[position].textContent = shape;
}

function computerMove() {
    let oPosition;
    do {
        oPosition = Math.floor(Math.random() * 9);
    } while (board[oPosition] != "");
    draw(oPosition, "O");
}

function checkWinAndPrint() {
    let res = checkWin()
    if (res == "X") {
        endGameMessage.textContent = "You Win!!";
        endGameMessage.style.backgroundColor = 'green';
        gameOver();
    } else if (res == "O") {
        endGameMessage.textContent = "You Lose!!";
        endGameMessage.style.backgroundColor = 'red';
        gameOver();
    } else if (boardFull()) {
        endGameMessage.textContent = "Draw!";
        endGameMessage.style.backgroundColor = 'yellow';
        gameOver();
    }
}

function checkWin() {
    for (let i = 0; i < board.length; i += 3) {//check the lines
        if (checkCombination(i, i + 1, i + 2)) {
            return board[i];
        }
    }
    for (let i = 0; i < 3; i++) {//check the rows
        if (checkCombination(i, i + 3, i + 6)) {
            return board[i];
        }
    }
    if (checkCombination(0, 4, 8)) {
        return board[0];
    }
    if (checkCombination(2, 4, 6)) {
        return board[2];
    }
    return "";
}

function checkCombination(a, b, c) {
    return (board[a] == board[b] && board[b] == board[c] && (board[a] == 'X' || board[a] == 'O')
    );
}

function gameOver() {
    gameEnded = true;
    cellField.value = "";
    submitX.disabled = true;
    cellField.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'New game!';
    resetButton.classList.add('btn');
    document.getElementById("form").append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function boardFull() {
    for (let i = 0; i < board.length; i++) {
        if (board[i] == "") {
            return false;
        }
    }
    return true;
}

function resetGame() {
    for (let i = 0; i < board.length; i++) {
        gameBoard[i].innerHTML = "<span class=\"index\">" + i + "</span>";
        board[i] = "";

    }
    endGameMessage.textContent = "";
    endGameMessage.style.backgroundColor = '';
    resetButton.parentNode.removeChild(resetButton);
    gameEnded = false;
    cellField.disabled = false;
    submitX.disabled = false;
}

function placeValue(xPosition) {
    let inputVal = document.getElementById('cellField');
    inputVal.value = xPosition;
}