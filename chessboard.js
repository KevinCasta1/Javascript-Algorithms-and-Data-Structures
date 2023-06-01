// For loop with in a for loop

let size = 8;
let board ="";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
     }
     board += "\n";
    }
     console.log(board);

     /*
        // set variables size and board.
let size = 8; // sets a limit for iterations to be used in the loop.
let board =""; // sets a blank placeholder to be filled with our if statements.

for (let y = 0; y < size; y++) {
    // y represents verticle axix this creates the loop for the rows.

    for (let x = 0; x < size; x++) {
    // x represents the horizontwl axis this creates the loop for the columns
    // the loop of x must complete it's entire run from 0 to 8 before the loop of y
    can start it's next loop where y++ 


        if ((x + y) % 2 == 0) {
            board += " ";
    // when we set x + y, every second number will be divisible by 2 therefore
    // every second charachter will execute the " " space charachter,
    // and each new line will alternate between an even/odd number
    // board += " " -> board = board + " "


        } else {
            board += "#";
        }
        // for every other number not divisible by 2 "#" will be executed


     }
     board += "\n";
    }
    // \n creates a new line
    // board += "\n"     ->        board = board + "\n"
    // this statement is attatched to "for (let y = 0; y < size; y++)", therefore
    // it ensures that the "loop of x" runs 8 iterations, aka 8 charachters across, before
    breaking into a newline


     console.log(board);
     
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 

     */
