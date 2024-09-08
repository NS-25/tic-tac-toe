// /*-------------------------------- Constants --------------------------------*/



// /*---------------------------- Variables (state) ----------------------------*/



// /*------------------------ Cached Element References ------------------------*/



// /*-------------------------------- Functions --------------------------------*/



// /*----------------------------- Event Listeners -----------------------------*/



//1) Define the required variables used to track the state of the game.
let board;
let turn;
let winner;
let tie;
//2) Store cached element references.
const squareEls = document.querySelectorAll(".sqr");
const messageEls = document.querySelector("#message");
const resetBtnEl = document.querySelector("#reset");
//console.log("message :", messageEls);
//console.log("msg :", squareEls);

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.
function init() {
  board = ['', '', '', '', '', '', '', '', ''];
  turn = 'x';
  winner = false;
  tie = false;

  render();
};
//init(); call init this way too
window.onload = () => {
  init();
}
///////////////////////////
//4) The state of the game should be rendered to the user.
function render() {
  // console.log('testing');
  updateMessage();
  updateBoard();

}

//render();
// one way to loop......
// function updateBoard() {
//   for (let i = 0; i < board.length; i++) {
//     squareEls[i].textContent = board[i];
//     console.log(squareEls[i]);
//   }
// }

const updateBoard = function () {
  board.forEach((square, squareIndex) => {
    squareEls[squareIndex].textContent = square;
  });
}

//updateBoard(board);

function updateMessage() {

  if (winner === false && tie === false) {
    // console.log("Whose turn it is.")
    messageEls.innerText = turn;
  } else if (!winner && tie) {
    // console.log("tie")
    messageEls.innerText = "It is a tie."
  } else {
    // console.log("You win!");
    messageEls.innerText = `${turn} is the winner!`
  }


}

////

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]
//updateMessage();


//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

function placePiece(index) {
  board[index] = turn;
};

function checkForWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    let currentCombo = winningCombos[i];

    if (board[currentCombo[0]].length > 0) {

      if (board[currentCombo[0]] === board[currentCombo[1]]) {


        if (board[currentCombo[0]] === board[currentCombo[2]]) {
          winner = true;
        }
      }
    }
  }
}
////
function checkForTie() {
  if (winner) return;
  if (!board.includes("")) {
    tie = true;
  }
}
/////
function switchPlayerTurn() {
  if (winner) return;
  if (turn === 'x') {
    turn = 'o'
  } else {
    turn = 'x'
  }
}

const handleClick = e => {
  if (winner) return;
  if (e.target.classList.contains("sqr")) {
    const squareIndex = e.target.id;
    // if (board[squareIndex] === 'x' || board[squareIndex] === 'o') 
    if (board[squareIndex].length > 0) {
      return;
    }
    placePiece(squareIndex);
    // console.log(board);
  }
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
  return;
}

// squareEls.forEach((square) => {
//   square.addEventListener('click', handleClick);
// })

document.querySelector(".board").addEventListener("click", handleClick);
document.querySelector("#reset").addEventListener("click", init)

//7) Create Reset functionality.

