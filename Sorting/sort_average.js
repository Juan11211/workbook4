"use strict";

let restOfClass = [83, 89, 90, 72, 86, 95];
let myScore = [90, 94, 86, 88, 98, 93, 87];

function getAverage(avg) {
    let sum = 0;
// loop through each element and add each element[i] to the sum += 
    for (let i = 0; i < avg.length; i++) {
        sum += avg[i];
    }

    // return sum and divide by the avg length
    return sum / avg.length;
}

function sortScores(a, b){
    return a - b
}

function getMedian(score) {
    score.sort(sortScores);

    let median;

    if (score.length % 2 !== 0) {
        // If the array has an odd number of elements, the median is the middle element.
        median = score[Math.floor(score.length / 2)];
    } else {
        // If the array has an even number of elements, the median is the average of the middle two elements.
        let middle1 = score[score.length / 2 - 1];
        let middle2 = score[score.length / 2];
        median = (middle1 + middle2) / 2;
    }

                                 
    return median;
}

function highestOrLowest(score) {
    score.sort(sortScores);

    let lowest = score[0]; // Initialize the lowest with the first element
    let highest = score[score.length - 1]; // Initialize the highest with the last element

    return { highest, lowest };
}

const result = highestOrLowest(myScore);

console.log(`The highest score in class was ${result.highest}`);
console.log(`The lowest score by student was ${result.lowest}`);

console.log(`Your median score is: ` + getMedian(myScore) + ` - Your test score average is ` + getAverage(myScore).toFixed(2));
console.log(`The rest of the class median score is: ` + getMedian(restOfClass) + ` - The class test score average is ` + getAverage(restOfClass).toFixed(2));