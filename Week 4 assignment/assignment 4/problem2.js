// Problem 2:Fall Leaf Counter
// Marian Bambaloff
// October 22, 2015

function countLeaves(days) {
    // Each day, leaves fall following this pattern: (USED AI FOR THIS SECTION)
    // Day 1: 10 leaves
    // Day 2: 20 leaves (doubles)
    // Day 3: 30 leaves (+10 from day 2)
    // Day 4: 40 leaves (+10 from day 3)
    // Pattern: First day doubles, then +10 each day
    let total = 0;
    let leavesToday = 0;

    // Use a for loop to calculate total 
    for (let i=1; i <= days; i++){
            if (i === 1){
                leavesToday = 10;
            }else if (i === 2) {
            leavesToday = 20;
        } else {
            leavesToday += 10;
        }
        total += leavesToday;
    }
    return total;
}

function categorizeLeafColors(leaves) {
    // leaves is an array of color strings (ALSO USED AI HERE)
    // Count each color and return an object

    let colorCount = {};


    // Loop through array and count colors
    for (const color of leaves) {
        if (colorCount[color]) {
            colorCount[color]++;
        }
        else {
            colorCount[color] = 1;
        }
    }
    return colorCount;
}
//AI CONSOLE LOGS FOR LEAF COLORS.
//Kinda wished there was a certain way the code sas supposed to look so I know what I'm doing even more.
//Anyways, consts of leaf colors don't change unless we code in a passage of time, where the leaves WOULD change colors over time, but for now, they are frozen in time as certain colors.
const leafPile = ["Red", "Orange", "Yellow", "Brown"];
const colorCounts = categorizeLeafColors(leafPile);
console.log("Categorized leaf colors:", colorCounts);

//AI HELPED WITH CONSOLE LOGS
//Console logs are used to help the code put out the result of said coding.
console.log(`Total leaves after 5 days: ${countLeaves(5)}`);
console.log(`Total leaves after 3 days: ${countLeaves(3)}`); 
console.log(`Total leaves after 1 day: ${countLeaves(1)}`);


/*Might use loop here

HINTS:
For the first function, notice the pattern changes after day 1. 
For the second, you'll need to check if a color already exists in your object before counting. 
*/

//I used Google AI to try and polish the coding. I did put the original,
//unpolished coding will be below as a comment. I will do this for the
//other problems as well.

/* 
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
} */