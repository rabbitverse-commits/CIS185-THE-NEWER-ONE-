// Problem 2:Fall Leaf Counter
// Marian Bambaloff
// October 22, 2015

function countLeaves(days) {
    // Each day, leaves fall following this pattern:
    // Day 1: 10 leaves
    // Day 2: 20 leaves (doubles)
    // Day 3: 30 leaves (+10 from day 2)
    // Day 4: 40 leaves (+10 from day 3)
    // Pattern: First day doubles, then +10 each day
    countLeaves(days = 1) = 10;
    countLeaves(days = 2) = (10 +20);
    countLeaves(days = 4) = (10 + 20 + 30 + 40);
    countLeaves(days = 5) = (10 + 20 +30 + 40 + 50);

    let total = 0;
    // Use a for loop to calculate total 
    for (let i=1; i <= 5; i++){
            console.log('Leaf ${i}');
    }
    return total;
}

function categorizeLeafColors(leaves) {
    // leaves is an array of color strings
    // Count each color and return an object
    let fallColors = [
        "Red",
        "Orange",
        "Yellow",
        "Brown",
    ];
    
    let colorCount = {};
    // Loop through array and count colors
    for (let i = 0; i < fallColors.length; i ++) {
        console.log(fallColors[i]);
    }
    return colorCount;
}

/*Might use loop here

HINTS:
For the first function, notice the pattern changes after day 1. 
For the second, you'll need to check if a color already exists in your object before counting. 
*/

//I'm trying to test the code, but nothing is popping up. 
// So here is what I coded. 
//I don't know if it works, but this what I got. 