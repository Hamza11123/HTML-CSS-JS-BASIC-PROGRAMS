// variables are Permanently Initialized, We can't change in the mid Of the Program
const cells = document.getElementsByClassName('cell');
const statusText = document.getElementById("statusText");
const restartBtn = document.getElementById("restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 6]
];
let running = false, options = ['', '', '', '', '', '', '', '', ''], currentPlayer = 'X';
function initializeGame() {
    cells.forEach(cell => cell.addEventListener('click', cellClicked)); 
    restartBtn.addEventListener('click', restartGame);  
    statusText.textContent = `${currentPlayer}'s Turn`; 

}
function cellClicked() {

}
function updateCell() {

}
function changePlayer() {

}
function checkWinner() {

}
function restartGame() {

}