// Problem 4: Pattern Generator
// Marian Bambaloff
// October 23, 2015

//NOTES BEFORE STARTING: After using AI to polish the previous three assignments,
//I decided to try and see if I can create code on my own now without AI help.
//However, if I struggle still, I'm going back to the AI because I just can't
//seem to grasp coding yet and it's already nearing the middle of the quarter. 

function createPyramid(height) {
    // Build a centered pyramid of asterisks (*)
    // Example: height = 3 →
    //   *
    //  ***
    // *****
    // Return as a string with \n between lines
    let pyramidString = "";
    for (let i =1; i <= height; i++) {
        const spaces = " ".repeat(height - i);
        const stars = "*".repeat(2 * i -1);

        if (i < height) {
            pyramidString += spaces + stars + "\n"; 
        } else {
            pyramidString += spaces + stars;
        }
    }
    return pyramidString;

}

function createNumberStaircase(steps) {
    // Build a staircase of increasing numbers
    // Example: steps = 5 →
    // 1
    // 12
    // 123
    // 1234
    // 12345
    let staircaseString = "";
    let numberString = "";

    for (let i = 1; i <= steps; i++) {
        numberString += i;

        if (i < steps) {
            staircaseString += numberString + "\n";
        } else {
            staircaseString += numberString;
        }
    }
    return staircaseString;
}

function createCheckerboard(size) {
    // Create a checkerboard pattern of X and O
    // Example: size = 4 →
    // XOXO
    // OXOX
    // XOXO
    // OXOX
let checkerboardString = "";

for (let row = 0; row < size; row++) {
        let line = "";
        for (let col =0; col < size; col++) {
            if ((row + col) % 2 === 0) {
                line += "X";
            } else {
                line += "O";
            }
        }
        if (row < size - 1) {
            checkerboardString += line + "\n";
        } else {
            checkerboardString += line;
        }
    }
    return checkerboardString;
}

console.log(createPyramid(3));
console.log(createNumberStaircase(5));
console.log(createCheckerboard(4));

/*Will need to refer to week 4 tuesday slides for this. Possibly string???

HINTS:
For the pyramid: - Spaces = height - row - 1 - Stars = 2 * row + 1 
Combine each line with \n at the end. */

//Due to a time crucnh (That's my fault), I had to use Google AI to try and polish the coding. 
//Fortunately, I was mostly right on what kind of code to use. But still... the AI code was more functional.
//I did put the original, unpolished coding will be below as a comment. 
//I will do this for the
//other problems as well, but this is just to show that I attempted to 
//write my own code before getting help from AI since I struggle to 
//visualize what the code should look like.

/* function createPyramid(height) {
    // Build a centered pyramid of asterisks (*)
    // Example: height = 3 →
    //   *
    //  ***
    // *****
    // Return as a string with \n between lines
    for (let i =1; i <=3; i++) {
        console.log(`Spaces = height - row - 1 - Stares = 2 * row + 1 \n`);
    }

}

function createNumberStaircase(steps) {
    // Build a staircase of increasing numbers
    // Example: steps = 5 →
    // 1
    // 12
    // 123
    // 1234
    // 12345
for (let i =1; i <=3; i++) {
        console.log(`1`);
    }

}

function createCheckerboard(size) {
    // Create a checkerboard pattern of X and O
    // Example: size = 4 →
    // XOXO
    // OXOX
    // XOXO
    // OXOX
for (let i =1; i <=3; i++) {
        console.log(`XO`);
    }

}

console.log(createPyramid);
console.log(createNumberStaircase);
console.log(createCheckerboard);
 */