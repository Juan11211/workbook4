"use strict";

let lastTime = [
    { item: "Kids Pizza & French Fries", price: 10.99 },
    { item: "Tour Of Italy", price: 28.99 },
    { item: "Mac & Cheese", price: 10.99 },
    { item: "Chicken Alfredo", price: 17.99 }
];

function mealCost(orders) {
    let result = 0;

    for (let i = 0; i < orders.length; i++) {
        let sum = orders[i].price;
        let tax = 0.08;
        let tipAmount = 0.18; 

        // Calculate the cost for the current order and add it to the total
        result += sum + (sum * tax) + (sum * tipAmount);
    }

    return result;
}

console.log(mealCost(lastTime).toFixed(2)); 
