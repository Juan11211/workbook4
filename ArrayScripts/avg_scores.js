"use strict";

let restOfClass = [83, 89, 90, 72, 86, 95];
let myScore = [90, 94, 86, 88, 98, 93];

function getAverage(avg) {
    let sum = 0;
// loop through each element and add each element[i] to the sum += 
    for (let i = 0; i < avg.length; i++) {
        sum += avg[i];
    }

    // return sum and divide by the avg length
    return sum / avg.length;
}

console.log(getAverage(myScore));
console.log(getAverage(restOfClass));
