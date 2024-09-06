/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



//1) Define the required variables used to track the state of the game.
let board;
let turn;
let winner;
let tie;
//2) Store cached element references.
const squareEls = document.querySelectorAll(".sqr");
const messageEls = document.querySelector("#message");
//console.log("message :", messageEls);
//console.log("msg :", squareEls);

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.
function init() {
  board = ['', '', '', '', '', '', '', '', ''];
  turn = 'X';
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
//updateMessage();


//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
//init()