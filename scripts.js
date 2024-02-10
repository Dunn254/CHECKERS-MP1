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
// Create a center tag to center all the elements
let center = document.createElement('center');
        
// Create board element
let CheckersBoard = document.createElement('board');
for (let x = 0; x < 8; x++) {

    // Create row
    let ab = document.createElement('ab');
    for (let y = 0; y < 8; y++) {

        // Create cell
        let cd = document.createElement('cd');

        // If the sum of cell coordinates is even
        // then color the cell white
        if ((x + y) % 2 == 0) {

            // Create a class attribute for white cells
            cd.setAttribute('class', 'cell whitecell');
            ab.appendChild(cd);
        }

        // If the sum of cell coordinates is odd then
        // color the cell black
        else {

            // Create a class attribute for black cells
            cd.setAttribute('class', 'cell blackcell');

            // Append cell to its row
            ab.appendChild(cd);
        }
    }

    // Append the row
    CheckersBoard.appendChild(ab);
}
center.appendChild(CheckersBoard);

// Modifying table attribute properties
CheckersBoard.setAttribute('cellspacing', '0');
CheckersBoard.setAttribute('width', '270px');
document.body.appendChild(center);