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
let  center = document.createElement('center');
        
// Create  a  table  element
let  CheckersBoard = document.createElement('table');
for (let x = 0; x < 8; x++) {

    // Create  a row
    let  tr = document.createElement('tr');
    for  (let y = 0; y < 8; y++) {

        // Create  a  cell
        let td = document.createElement('td');

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