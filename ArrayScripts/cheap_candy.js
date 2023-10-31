"use strict"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Jolly Rancher", price: 2.00},
    {product: "Starburst", price: 3.50},
    {product: "Candy Apple", price: 2.79},
    {product: "Chocolate Strawberry", price: 5.39},
    {product: "Dozen of Donuts", price: 10.00},
    {product: "Oreo", price: 4.58},

]   

// Which candies costs less than $4.00?

for(let i = 0; i < products.length; i++){
    if(products[i].price < 4){
        console.log(` These products are less than $4: ${products[i].product}`)
    }
}
// Which candies has "M&M" its name?

for(let i = 0; i < products.length; i++){
    if(products[i].product.indexOf("M&Ms") !== -1){
        console.log(`These products are labeled with M&M: ${products[i].product}`)
    }
}
// Do we carry "Swedish Fish"?

// for(let i = 0; i < products.length; i++){
//     if(products[i].product === "Swedish Fish" ){
//         console.log(`This product does not exist`)
//     }
// }

for (let i = 0; i < products.length; i++) {
    if (products[i].product.indexOf("Swedish Fish") !== -1) {
        console.log("We don't carry that.");
    }
}

