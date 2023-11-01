"use strict"

let myOrder = [
    { item: "Buffalo wings", price: 15.99, quantity: 2 },
    { item: "French Fries", price: 8.99 },
    { item: "Asaigo Chicken Sandwich", price: 10.99 },
];

let familyOrder = [
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

    // let totalCost = 0

    // for(let indexOfOrder = 0 ; indexOfOrder < order.length; indexOfOrder++){
    //     let thisorderItem = order[indexOfOrder];
    //     let thisItemCost = thisorderItem.price;
    //     totalCost = totalCost + thisItemCost
    // }

    // return totalCost; 
}

function getMealDescription(order){
    let description = "your order contains: "

    let indexOfOrder = 0;
    while(indexOfOrder < order.length){
        let orderline = order[indexOfOrder]

        if(orderline.quantity > 1){
            description += `${orderline.quantity} ${orderline.item}`
        } else {
           description += orderline.item;
        }
            if(indexOfOrder != (order.length -1)){
                description += ", "
            }

        indexOfOrder++
    }

    return description
}

console.log(getMealDescription(myOrder))
console.log(mealCost(myOrder).toFixed(2))