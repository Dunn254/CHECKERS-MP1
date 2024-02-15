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

drawStartPosition()


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
let finalType = getTypeFromCell(cellFinal);




*/
//2d array for board(white=-1, black=1, empty=0)
let board = [
    [0, -1, 0, -1, 0, -1, 0, -1, 0, -1],
    [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
    [0, -1, 0, -1, 0, -1, 0, -1, 0, -1],
    [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  ];
  //change array above to look like board
  function buildBoard() {
    game.innerHTML = "";
  
    for (let x = 0; x < board.length; x++) {
      const element = board[x];
      let row = document.createElement("div"); 
      // create div for each row
      row.setAttribute("class", "row");
  
      for (let y = 0; y < element.length; y++) {
        const elmt = element[y];
        let col = document.createElement("div"); 
        let piece = document.createElement("div");
        let caseType = "";
        let occupied = "";


        if (x % 2 === 0) {
            if (y % 2 === 0) {
              caseType = "Whitecase";
            } else {
              caseType = "blackCase";
            }
          } else {
            if (y % 2 !== 0) {
              caseType = "Whitecase";
            } else {
              caseType = "blackCase";
            }
          }
          // add the piece if the case isn't empty
      if (board[x][y] === 1) {
        occupied = "whitePiece";
      } else if (board[x][y] === -1) {
        occupied = "blackPiece";
      } else {
        occupied = "empty";
      }

      piece.setAttribute("class", "occupied " + occupied);

      // set row and column in the case
      piece.setAttribute("row", x);
      piece.setAttribute("column", y);
      piece.setAttribute("data-position", x + "-" + y);

      //add event listener to the pieces
      piece.addEventListener("click", movePiece);

      col.appendChild(piece);

      col.setAttribute("class", "column " + caseType);
      row.appendChild(col);

    }

    game.appendChild(row);
  }
}
//work on moving now(bring in players)
let currentPlayer = 1;

let newPiecesPositions = [];

function movePiece(e) {
  let piece = e.target;
  const row = parseInt(piece.getAttribute("row"));
  const column = parseInt(piece.getAttribute("column"));
  let p = new Piece(row, column);


  if (newPiecesPosition.length > 0) {
    enableToMove(p);
  }

  if (currentPlayer === board[row][column]) {
    findPossibleNewPosition(p, player);
  }
}

function findPossibleNewPosition(piece, player) {
  if (board[piece.row + player][piece.column + 1] === 0) {
    readyToMove = piece;
    markPossiblePosition(piece, player, 1);
  }

  if (board[piece.row + player][piece.column - 1] === 0) {
    readyToMove = piece;
    markPossiblePosition(piece, player, -1);
  }
}

function enableToMove(p) {
  let found = false;
  let newPosition = null;


  posNewPosition.forEach((element) => {
    if (element.compare(p)) {
      found = true;
      newPosition = element;
      return;
    }
  });

  if (found){
     // if the current piece can move on, edit the board and rebuild
    board[newPosition.row][newPosition.column] = currentPlayer;
    board[readyToMove.row][readyToMove.column] = 0;

    // init value
    readyToMove = null;
    posNewPosition = [];
    capturedPosition = [];

    currentPlayer = reverse(currentPlayer);

    displayCurrentPlayer();
    buildBoard();
  } else {
    buildBoard();
   }
}