// Problem 3: Grade Calculator
// Marian Bambaloff
// October 22-23, 2015

function calculateAverage(scores) {
    // Calculate and return the average of an array of scores
    // Handle empty array case (return 0)

    //AI HELP.
    if (scores.length === 0){
        return 0;
    }

    let sum = 0;
    for (const score of scores) {
        sum += score;
    }
    return sum / scores.length;
}

function dropLowestScore(scores) {
    // Return a new array with the lowest score removed
    // If multiple lowest scores exist, remove only one
    // Don't modify the original array!

    //AI HELP HERE.
    if (scores.length === 0) {
        return [];
    }
    const newScores = [...scores];

    let lowestScore = Math.min(...newScores);

    const lowestIndex = newScores.indexOf(lowestScore);

    newScores.splice(lowestIndex, 1);

    return newScores;

}

function getLetterGrade(score) {
    // Return letter grade based on score (Got reversed from AI revision)
    // If score is bigger than 90, then it's an A.
        if (score >= 90){
         //console.log//
         return ("A");
    }  
        // If score is bigger than 80, then it's a B.
        else if (score >= 80){
         //console.log//
         return ("B");
    }
        // If score is bigger than 70, then it's a C.
        else if (score >= 70){
         //console.log//
         return ("C");
    }
        // If score is bigger than 690, then it's a D.
        else if (score >= 60){
         //console.log//
         return ("D");
    } else {
        //Otherwise, you fail.
             return ("F");
        }
}

function curveGrades(scores, curveAmount) {
    // Add curveAmount to each score
    // Cap all scores at 100 (no score above 100)
    // Return new array, don't modify original
    
    //I guess school grades can curve. Unless this is just for coding, I have never seen grades get curved. 
    return scores.map(score => {
        const curvedScore = score + curveAmount;
        return Math.min(curvedScore, 100);
    });

}

//AI CONSOLE LOGS... It's a lot.

//For the average grade function to find the average grade.
const scores1 = [80, 90, 100];
console.log(`Average of [80, 90, 100]: ${calculateAverage(scores1)}`);
console.log(`Average of []: ${calculateAverage([])}`);

//Used to check if score meets a certain letter grade
const scores2 = [85, 95, 70, 70];
const droppedScores = dropLowestScore(scores2);
console.log(`Original: [${scores2}]`);
console.log(`With lowest dropped: [${droppedScores}]`);

//Get A.
console.log(`Score 95: ${getLetterGrade(95)}`);

//Get B.
console.log(`Score 80: ${getLetterGrade(80)}`);

//Get C.
console.log(`Score 75: ${getLetterGrade(75)}`); 

//Get D.
console.log(`Score 60: ${getLetterGrade(60)}`); 

//Get F.
console.log(`Score 45: ${getLetterGrade(45)}`);

//For the curved grade function.
const scores3 = [80, 95, 98];
const curved = curveGrades(scores3, 5);
console.log(`Original: [${scores3}]`);
console.log(`Curved: [${curved}]`);

/*arrayssssss
*/

//I used Google AI to try and polish the coding. I did put the original,
//unpolished coding will be below as a comment. I will do this for the
//other problems as well, but this is just to show that I attempted to 
//write my own code before getting help from AI since I struggle to 
//visualize what the code should look like.


/* function calculateAverage(scores) {
    // Calculate and return the average of an array of scores
    // Handle empty array case (return 0)
    function average (num1, num2, num3) {
        let sum = num1 + num2 + num3;
        return sum / 3;
    }
    for (let i=0; i < average; i++) {
        console.log(average[i]);
    }

}

function dropLowestScore(scores) {
    // Return a new array with the lowest score removed
    // If multiple lowest scores exist, remove only one
    // Don't modify the original array!
    for (let i = 0; i > 0; i--) {
        console.log(i);
    }

}

function getLetterGrade(score) {
    // Return letter grade based on score
    // Below 50 = F, right?
        if (getLetterGrade <= 50){
         //console.log//
         return ("F");
    }  
        // 60 = D, right?
        else if (getLetterGrade = 60){
         //console.log//
         return ("D");
    }
        // 70 = C, right?
        else if (getLetterGrade = 70){
         //console.log//
         return ("C");
    }
        // 80 = B, right?
        else if (getLetterGrade = 80){
         //console.log//
         return ("B");
    }
        // 90 = A, right?
        else if (getLetterGrade >= 90){
         //console.log//
         return ("A");
        }
    return getLetterGrade(score);

}

function curveGrades(scores, curveAmount) {
    // Add curveAmount to each score
    // Cap all scores at 100 (no score above 100)
    // Return new array, don't modify original


} */
