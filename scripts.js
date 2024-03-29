//create board class
/*class board {
    constructor() {
        this.board = Array(8)
        .fill(null)
        .map(() => Array(8).fill(null));
    }
}
board()
//create squares using loop(not sure to use for or while...talk to Omar)
for (let x = 1; x <=64; x++) { ... }*/
// Create  a  center  tag  to  center  all  the  elements
let  center  =  document.createElement('center');
        
/*Create  a  table  element
let  CheckersBoard  =  document.createElement('table');
for (let x = 0; x < 8; x++) {

    // Create  a  row
    let  tr  =  document.createElement('tr');
    for  (let y = 0; y < 8; y++) {

        // Create  a  cell
        let  td =  document.createElement('td');

        // If  sum  of  cell  coordinates  is  even
        // then  color  the  cell  white
        if  ((x + y) % 2 == 0) {

            // Create  a  class  attribute  for  white  cells
            td.setAttribute('class', 'cell whitecell');
            tr.appendChild(td);
        }

        // If  sum  of  cell  coordinates  is  not  even  then
        // color  the  cell  black
        else  {

            // Create  a  class  attribute  for  black  cells
            td.setAttribute('class', 'cell blackcell');

            // Append  the  cell  to  its  row
            tr.appendChild(td);
        }
    }

    // Append  the  row
    CheckersBoard.appendChild(tr);
}
center.appendChild(CheckersBoard);

// Modifying  table  attribute  properties
CheckersBoard.setAttribute('cellspacing', '0');
CheckersBoard.setAttribute('width', '450px');
document.body.appendChild(center);
//Checkers Pieces
let squareSize  =  40;
let pieceRadius = 15;
let darkColor = '#000000';
let lightColor = '#FFFF00';

//Draw square
function  drawSquare(x,  y,  color) {
    canvas.fillStyle  =  color;
    canvas.fillRect(x,  y, squareSize, squareSize);
}
//get the canvas on which to draw
let  checkersCanvas  =  document.getElementById("checkersCanvas");
//give the canvas a 2d context
let canvas  =  checkersCanvas.getContext("2d");

function  drawPiece(x, y, pieceRadius,  color)  {
    //start a new path for drawing a filled circle
    canvas.beginPath();
    //draw arc with center as (x, y)
    canvas.arc(x +  squareSize  /  2,  y +  squareSize  /  2, pieceRadius,  0,  2 * Math.PI)
    //give the shape some color
    canvas.fillStyle  =  color;
    canvas.fill();
    canvas.closePath();


}
//Start position...
function drawStartPosition() {

    let  cellSize  =  450  /  8;
    //loop for rows
for   (let  x  =  0;  x  <  8; x++)  {

    //loop for columns
    for (let y  =  0; y  < 8;  y++) {

    //color piece according to position
    if   ((x +  y ) % 2 ===   0) {
    drawSquare (x * squareSize,  y  *  squareSize, "#888");
} else  {
    drawSquare (x * squareSize,  y  *  squareSize,  "#fff");
}
if  (x  <  3) {
    drawPiece(x  *  squareSize,  y  *  squareSize,  "white");
}
if  (x  >  4)  {
    drawPiece(x  *  squareSize,  y  *  squareSize,  "purple");
}*/

/*position pieces in cells
let  x  =  col  *  cellSize  + cellSize /  2;
let  y  =  row  *  cellSize  + cellSize /  2;

make 3 rows of black pieces
if (x  < 3)  {

    drawPiece(x  +  cellSize  /  2, y , pieceRadius, color)
}
make 3 rows of yellow pieces
if  (x  >  4)  {
    drawPiece(x  +  cellSize  /  2, y, pieceRadius, color)
}}}

drawStartPosition()*/

//alert("is this displaying");
const board = [
    null, 0, null, 1, null, 2, null, 3,
    4, null, 5, null, 6, null, 7, null,
    null, 8, null, 9, null, 10, null, 11,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    12, null, 13, null, 14, null, 15, null,
    null, 16, null, 17, null, 18, null, 19,
    20, null, 21, null, 22, null, 23, null
]

// parses pieceId's and returns the index of that piece's place on the board
let findPiece = function (pieceId) {
    let parsed = parseInt(pieceId);
    
    return board.indexOf(parsed);
};

// DOM references
const cells = document.querySelectorAll("td");
let redsPieces = document.querySelectorAll("p");
let blacksPieces = document.querySelectorAll("span")
const redTurnText = document.querySelectorAll(".red-turn-text");
const blackTurntext = document.querySelectorAll(".black-turn-text");
const divider = document.querySelector("#divider")

// player properties
let turn = true;
let redScore = 12;
let blackScore = 12;
let playerPieces;

// selected piece properties
let selectedPiece = {
    pieceId: -1,
    indexOfBoardPiece: -1,
    isKing: false,
    seventhSpace: false,
    ninthSpace: false,
    fourteenthSpace: false,
    eighteenthSpace: false,
    minusSeventhSpace: false,
    minusNinthSpace: false,
    minusFourteenthSpace: false,
    minusEighteenthSpace: false
}

/*---------- Event Listeners ----------*/

// initialize event listeners on pieces
function givePiecesEventListeners() {
    if (turn) {
        for (let i = 0; i < redsPieces.length; i++) {
            redsPieces[i].addEventListener("click", getPlayerPieces);
        }
    } else {//alert("does it display?");
        for (let i = 0; i < blacksPieces.length; i++) {
            blacksPieces[i].addEventListener("click", getPlayerPieces);
        }
    }
}

// holds the length of the players piece count
function getPlayerPieces() {
    if (turn) {
        playerPieces = redsPieces;
    } else {
        playerPieces = blacksPieces;
    }
    removeCellonclick();
    resetBorders();
    //alert("does this display?");
}

// removes possible moves from old selected piece (* this is needed because the user might re-select a piece *)
function removeCellonclick() {
    for (let i = 0; i < cells.length; i++) {
        //Alert("Does this show anywhere?");
        cells[i].removeAttribute("onclick");
    }
}

// resets borders to default
function resetBorders() {
    for (let i = 0; i < playerPieces.length; i++) {
        //Alert("Show me this");
        playerPieces[i].style.border = "1px solid white";
    }
    resetSelectedPieceProperties();
    getSelectedPiece();
}

// resets selected piece properties
function resetSelectedPieceProperties() {
    selectedPiece.pieceId = -1;
    selectedPiece.pieceId = -1;
    selectedPiece.isKing = false;
    selectedPiece.seventhSpace = false;
    selectedPiece.ninthSpace = false;
    selectedPiece.fourteenthSpace = false;
    selectedPiece.eighteenthSpace = false;
    selectedPiece.minusSeventhSpace = false;
    selectedPiece.minusNinthSpace = false;
    selectedPiece.minusFourteenthSpace = false;
    selectedPiece.minusEighteenthSpace = false;
}
// gets ID and index of the board cell its on
function getSelectedPiece() {
    selectedPiece.pieceId = parseInt(event.target.id);
    selectedPiece.indexOfBoardPiece = findPiece(selectedPiece.pieceId);
    isPieceKing();
}

// checks if selected piece is a king
function isPieceKing() {
    if (document.getElementById(selectedPiece.pieceId).classList.contains("king")) {
        selectedPiece.isKing = true;
    } else {
        selectedPiece.isKing = false;
    }
    getAvailableSpaces();
}

// gets the moves that the selected piece can make
function getAvailableSpaces() {
    if (board[selectedPiece.indexOfBoardPiece + 7] === null && 
        cells[selectedPiece.indexOfBoardPiece + 7].classList.contains("noPieceHere") !== true) {
        selectedPiece.seventhSpace = true;
    }
    if (board[selectedPiece.indexOfBoardPiece + 9] === null && 
        cells[selectedPiece.indexOfBoardPiece + 9].classList.contains("noPieceHere") !== true) {
        selectedPiece.ninthSpace = true;
    }
    if (board[selectedPiece.indexOfBoardPiece - 7] === null && 
        cells[selectedPiece.indexOfBoardPiece - 7].classList.contains("noPieceHere") !== true) {
        selectedPiece.minusSeventhSpace = true;
    }
    if (board[selectedPiece.indexOfBoardPiece - 9] === null && 
        cells[selectedPiece.indexOfBoardPiece - 9].classList.contains("noPieceHere") !== true) {
        selectedPiece.minusNinthSpace = true;
    }
    checkAvailableJumpSpaces();
}

// gets the moves that the selected piece can jump
function checkAvailableJumpSpaces() {
    if (turn) {
        if (board[selectedPiece.indexOfBoardPiece + 14] === null 
        && cells[selectedPiece.indexOfBoardPiece + 14].classList.contains("noPieceHere") !== true
        && board[selectedPiece.indexOfBoardPiece + 7] >= 12) {
            selectedPiece.fourteenthSpace = true;
        }
        if (board[selectedPiece.indexOfBoardPiece + 18] === null 
        && cells[selectedPiece.indexOfBoardPiece + 18].classList.contains("noPieceHere") !== true
        && board[selectedPiece.indexOfBoardPiece + 9] >= 12) {
            selectedPiece.eighteenthSpace = true;
        }
        if (board[selectedPiece.indexOfBoardPiece - 14] === null 
        && cells[selectedPiece.indexOfBoardPiece - 14].classList.contains("noPieceHere") !== true
        && board[selectedPiece.indexOfBoardPiece - 7] >= 12) {
            selectedPiece.minusFourteenthSpace = true;
        }
        if (board[selectedPiece.indexOfBoardPiece - 18] === null 
        && cells[selectedPiece.indexOfBoardPiece - 18].classList.contains("noPieceHere") !== true
        && board[selectedPiece.indexOfBoardPiece - 9] >= 12) {
            selectedPiece.minusEighteenthSpace = true;
        }
    } else {
        if (board[selectedPiece.indexOfBoardPiece + 14] === null 
        && cells[selectedPiece.indexOfBoardPiece + 14].classList.contains("noPieceHere") !== true
        && board[selectedPiece.indexOfBoardPiece + 7] < 12 && board[selectedPiece.indexOfBoardPiece + 7] !== null) {
            selectedPiece.fourteenthSpace = true;
        }
        if (board[selectedPiece.indexOfBoardPiece + 18] === null 
        && cells[selectedPiece.indexOfBoardPiece + 18].classList.contains("noPieceHere") !== true
        && board[selectedPiece.indexOfBoardPiece + 9] < 12 && board[selectedPiece.indexOfBoardPiece + 9] !== null) {
            selectedPiece.eighteenthSpace = true;
        }
        if (board[selectedPiece.indexOfBoardPiece - 14] === null && cells[selectedPiece.indexOfBoardPiece - 14].classList.contains("noPieceHere") !== true
        && board[selectedPiece.indexOfBoardPiece - 7] < 12 
        && board[selectedPiece.indexOfBoardPiece - 7] !== null) {
            selectedPiece.minusFourteenthSpace = true;
        }
        if (board[selectedPiece.indexOfBoardPiece - 18] === null && cells[selectedPiece.indexOfBoardPiece - 18].classList.contains("noPieceHere") !== true
        && board[selectedPiece.indexOfBoardPiece - 9] < 12
        && board[selectedPiece.indexOfBoardPiece - 9] !== null) {
            selectedPiece.minusEighteenthSpace = true;
        }
    }
    checkPieceConditions();
}

// restricts movement if the piece is a king
function checkPieceConditions() {
    if (selectedPiece.isKing) {
        givePieceBorder();
    } else {
        if (turn) {
            selectedPiece.minusSeventhSpace = false;
            selectedPiece.minusNinthSpace = false;
            selectedPiece.minusFourteenthSpace = false;
            selectedPiece.minusEighteenthSpace = false;
        } else {
            selectedPiece.seventhSpace = false;
            selectedPiece.ninthSpace = false;
            selectedPiece.fourteenthSpace = false;
            selectedPiece.eighteenthSpace = false;
        }
        givePieceBorder();
    }
}

// gives the piece a green highlight for the user (showing its movable)
function givePieceBorder() {
    if (selectedPiece.seventhSpace || selectedPiece.ninthSpace || selectedPiece.fourteenthSpace || selectedPiece.eighteenthSpace
    || selectedPiece.minusSeventhSpace || selectedPiece.minusNinthSpace || selectedPiece.minusFourteenthSpace || selectedPiece.minusEighteenthSpace) {
        document.getElementById(selectedPiece.pieceId).style.border = "3px solid green";
        giveCellsClick();
    } else {
        return;
    }
}


// gives the cells on the board a 'click' based on the possible moves
function giveCellsClick() {
    if (selectedPiece.seventhSpace) {
        cells[selectedPiece.indexOfBoardPiece + 7].setAttribute("onclick", "makeMove(7)");
    }
    if (selectedPiece.ninthSpace) {
        cells[selectedPiece.indexOfBoardPiece + 9].setAttribute("onclick", "makeMove(9)");
    }
    if (selectedPiece.fourteenthSpace) {
        cells[selectedPiece.indexOfBoardPiece + 14].setAttribute("onclick", "makeMove(14)");
    }
    if (selectedPiece.eighteenthSpace) {
        cells[selectedPiece.indexOfBoardPiece + 18].setAttribute("onclick", "makeMove(18)");
    }
    if (selectedPiece.minusSeventhSpace) {
        cells[selectedPiece.indexOfBoardPiece - 7].setAttribute("onclick", "makeMove(-7)");
    }
    if (selectedPiece.minusNinthSpace) {
        cells[selectedPiece.indexOfBoardPiece - 9].setAttribute("onclick", "makeMove(-9)");
    }
    if (selectedPiece.minusFourteenthSpace) {
        cells[selectedPiece.indexOfBoardPiece - 14].setAttribute("onclick", "makeMove(-14)");
    }
    if (selectedPiece.minusEighteenthSpace) {
        cells[selectedPiece.indexOfBoardPiece - 18].setAttribute("onclick", "makeMove(-18)");
    }
}

/* v when the cell is clicked v */

// makes the move that was clicked
function makeMove(number) {
    document.getElementById(selectedPiece.pieceId).remove();
    cells[selectedPiece.indexOfBoardPiece].innerHTML = "";
    if (turn) {
        if (selectedPiece.isKing) {
            cells[selectedPiece.indexOfBoardPiece + number].innerHTML = `<p class="red-piece king" id="${selectedPiece.pieceId}"></p>`;
            redsPieces = document.querySelectorAll("p");
        } else {
            cells[selectedPiece.indexOfBoardPiece + number].innerHTML = `<p class="red-piece" id="${selectedPiece.pieceId}"></p>`;
            redsPieces = document.querySelectorAll("p");
        }
    } else {
        if (selectedPiece.isKing) {
            cells[selectedPiece.indexOfBoardPiece + number].innerHTML = `<span class="black-piece king" id="${selectedPiece.pieceId}"></span>`;
            blacksPieces = document.querySelectorAll("span");
        } else {
            cells[selectedPiece.indexOfBoardPiece + number].innerHTML = `<span class="black-piece" id="${selectedPiece.pieceId}"></span>`;
            blacksPieces = document.querySelectorAll("span");
        }
    }

    let indexOfPiece = selectedPiece.indexOfBoardPiece
    if (number === 14 || number === -14 || number === 18 || number === -18) {
        changeData(indexOfPiece, indexOfPiece + number, indexOfPiece + number / 2);
    } else {
        changeData(indexOfPiece, indexOfPiece + number);
    }
}

// Changes the board states data on the back end
function changeData(indexOfBoardPiece, modifiedIndex, removePiece) {
    board[indexOfBoardPiece] = null;
    board[modifiedIndex] = parseInt(selectedPiece.pieceId);
    if (turn && selectedPiece.pieceId < 12 && modifiedIndex >= 57) {
        document.getElementById(selectedPiece.pieceId).classList.add("king")
    }
    if (turn === false && selectedPiece.pieceId >= 12 && modifiedIndex <= 7) {
        document.getElementById(selectedPiece.pieceId).classList.add("king");
    }
    if (removePiece) {
        board[removePiece] = null;
        if (turn && selectedPiece.pieceId < 12) {
            cells[removePiece].innerHTML = "";
            blackScore--
        }
        if (turn === false && selectedPiece.pieceId >= 12) {
            cells[removePiece].innerHTML = "";
            redScore--
        }
    }
    resetSelectedPieceProperties();
    removeCellonclick();
    removeEventListeners();
}

// removes the 'onClick' event listeners for pieces
function removeEventListeners() {
    if (turn) {
        for (let i = 0; i < redsPieces.length; i++) {
            redsPieces[i].removeEventListener("click", getPlayerPieces);
        }
    } else {
        for (let i = 0; i < blacksPieces.length; i++) {
            blacksPieces[i].removeEventListener("click", getPlayerPieces);
        }
    }
    checkForWin();
}

// Checks for a win
function checkForWin() {
    if (blackScore === 0) {
        divider.style.display = "none";
        for (let i = 0; i < redTurnText.length; i++) {
            redTurnText[i].style.color = "black";
            blackTurntext[i].style.display = "none";
            redTurnText[i].textContent = "RED WINS!";
        }
    } else if (redScore === 0) {
        divider.style.display = "none";
        for (let i = 0; i < blackTurntext.length; i++) {            
            blackTurntext[i].style.color = "black";
            redTurnText[i].style.display = "none";
            blackTurntext[i].textContent = "BLACK WINS!";
        }
    }
    changePlayer();
}

// Switches players turn
function changePlayer() {
    if (turn) {
        turn = false;
        for (let i = 0; i < redTurnText.length; i++) {
            redTurnText[i].style.color = "lightGrey";
            blackTurntext[i].style.color = "black";
        }
    } else {
        turn = true;
        for (let i = 0; i < blackTurntext.length; i++) {
            blackTurntext[i].style.color = "lightGrey";
            redTurnText[i].style.color = "black";
        }
    }
    givePiecesEventListeners();
}

givePiecesEventListeners();


/*at the start(create array to represent this)
let startBoard = {
    state: {
        board: [
             [0, 2, 0, 2, 0, 2, 0, 2],
                [2, 0, 2, 0, 2, 0, 2, 0],
                [0, 2, 0, 2, 0, 2, 0, 2],
                [2, 0, 2, 0, 2, 0, 2, 0],
                [0, 2, 0, 2, 0, 2, 0, 2],
                [2, 0, 2, 0, 2, 0, 2, 0],
                [0, 2, 0, 2, 0, 2, 0, 2],
                [2, 0, 2, 0, 2, 0, 2, 0],
        ]
    },

    player: {},
    next: {},
    events: {}
}
    
//choose player to take 1st turn
let turn = "lightPlayer";

//add event listener for cell clicked on
table.addEventListener("click", function (    ) {
    let clickedCell  = EventTarget;
})

//is the move acceptable???
function isValidMove(from, to) {

}
//Differentiating the cells
let cellType = "";
    if(x % 2) 
    cellType = (x % 2) ? "even" : "odd";
else
    cellType = (x % 2) ? "odd" : "even";
//To select or highlight cells for mvt
    let selectedX = props?.selected?.x;
    let selectedY = props?.selected?.y;
    let isSelected = (selectedX == x && selectedY == y);

    let highlighted = fs.get("highlight") || [];
    let isHighlighted = false;
    for (let a =0; a < highlighted.length; a++) {
        let b = highlighted[a];
        if  (b.x == x && b.y == y)
            isHighlighted = h;
    }

    let classSelected = isSelected ? "selected" : " ";
    let classHighlighted = isHighlighted ? "highlight" : " ";

    //select cell on click
    let onCellClick = () => {
        if (isSelected) {
            return;
        }

        if (isHighlighted) {
            let selected = fs.get("selected");
            send("move", { from: [selected.x, selected.y], dir: isHighlighted.dir})
            fs.set("highlight", []);
            fs.set("selected", null);
            return;
        }
        let local = fs.get("local");
        let cell = getCell(x,y);
        if (local.type == "C" && cell == 1 || cell == 3) {
            fs.set("selected", {x,y});
        }
        else {
            return;
        }

        let highlight = [];
        for (let ...=1; ...< 4; ...++) {
            let attempt = processValidMove(x,y,...);
            if (attempt) {
                for (let ...=0; ...< attempt.length; ...++)
                highlight.push(attempt[...]);
            }
        }

        fs.set("highlight", highlight);
    }

    /*for moves
    check if player owns the piece
    check blocked moves
    check diagonal moves
    check whether we can jump over opponent to empty spot
    

    let processValidMove = (x,y,dir, isTest) => {
        let user = fs.get("local");
        let players = fs.get("players");
        let state = fs.get("state");

        let cell = getCell(x, y)


    }

    
    
    if(finalType)
    //piece cant move
    return false;

    //but if we can eat
    const to = actionToCoords(coords.x, coords.y, dir);

    let results =[to];


    // Moving pieces
    leftUpDiagonal =(x,y) => {
        return this.getCell(x - 1, y - 1)
    }
    rightUpDiagonal =(x, y) => {
        return this.getCell(x - 1, y + 1);
    }
    leftDownDiagonal = (x,y) => {
        return this.getCell(x + 1, y - 1);
    }
    rightDownDiagonal = (x, y) {
        return this.getCell(x + 1, y + 1)
    }

    //valid moves
    const checkValidMoves = (cell, dir) => {
    //dark player can only go up
    if (cell == 1) {
        if (dir != 1 && dir != 2)
        return false;
    }
    //white player can only go down
    else if  (cell == 2) {
        if (dir != 3 && dir != 4)
        return false;
    }
    return true;
}
//Eating actions...
let cellFinal = actionToCell(coords.x, coords.y, dir);
let finalT*/






