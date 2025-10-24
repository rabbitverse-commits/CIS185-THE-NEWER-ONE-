// Problem 5: Array Manipulator
// Marian Bambaloff
// October 23, 2015

function reverseArray(arr) {
    // Return a new array with elements in reverse order
    // Don't use the built-in reverse() method!
    // Don't modify the original array
     const reversed = [];
     for (let i = arr.length - arguments; i >= 0; i--) {
        reversed.push(arr[i]);
     }
     return reversed;
}

function removeDuplicates(arr) {
    // Return a new array with duplicates removed
    // Maintain original order of first occurrence
    return [...new Set(arr)];
}

function rotateArray(arr, positions) {
    // Rotate array to the right by 'positions'
    // Handle positions larger than array length
    const len = arr.length;
    if (len === 0) return [];
    const rotation = positions % len;
    if (rotation === 0) {
        return arr.slice();
    }
    const splitIndex = len -rotation;
    const end = arr.slice(splitIndex);
    const start = arr.slice(0, splitIndex);
    return end.concat(start);
}

function findSecondLargest(numbers) {
    // Find and return the second largest number
    // Return null if array has less than 2 unique values
    const uniqueNumbers = [...new Set (numbers)];

    if (uniqueNumbers.length < 2) {
        return null;
    }
    uniqueNumbers.sort((a, b) => b - a);
    return uniqueNumbers[1];

}
console.log(`[1, 2, 3, 4] -> [${reverseArray([1, 2, 3, 4])}]`);
console.log(`["a", "b", "c"] -> [${reverseArray(["a", "b", "c"])}]`);
console.log(`[] -> [${reverseArray([])}]`);


console.log(`[1, 2, 2, 3, 1, 4] -> [${removeDuplicates([1, 2, 2, 3, 1, 4])}]`);
console.log(`["a", "b", "a", "c"] -> [${removeDuplicates(["a", "b", "a", "c"])}]`);


console.log(`[1, 2, 3, 4] rotated by 1 -> [${rotateArray([1, 2, 3, 4], 1)}]`);
console.log(`[1, 2, 3, 4] rotated by 2 -> [${rotateArray([1, 2, 3, 4], 2)}]`);
console.log(`[1, 2, 3] rotated by 4 -> [${rotateArray([1, 2, 3], 4)}]`);


console.log(`[10, 20, 30, 40] -> ${findSecondLargest([10, 20, 30, 40])}`);
console.log(`[5, 5, 5] -> ${findSecondLargest([5, 5, 5])}`);
console.log(`[100, 50, 100, 75] -> ${findSecondLargest([100, 50, 100, 75])}`);


/*arrayssss and return else if statements.*/

//FINAL NOTES: (AKA Maybe I should've done a README instead...)
//Due to a time crunch (That's my fault), I had to use Google AI to walk me through the coding.
//I really struggled greatly due to constraints caused by me
//and so I rushed this last problem and couldn't get to the
//commenting parts of this assignment. However, unless the AI is wrong in some places,
//at least I have more coding references for the future... hopefully.

//I tried
/*  if (reverseArray === 0){
        return 0;
    }

    let sum = 0;
    for (const reverseArray) {
        (let i );
    }
    return reverseArray; */