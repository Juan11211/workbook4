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

products.sort(function(a, b){
    if (a.product < b.product) return -1;
    else if (a.product == b.product) return 0;
    else return 1;
})

for(let i = 0; i < products.length; i++){
   console.log(products[i].product)
}

console.log("----------------")

products.sort(function(a, b){
    if (a.price > b.price) return -1;
    else if (a.price == b.price) return 0;
    else return 1;
})

for(let i = 0; i < products.length; i++){
   console.log(products[i].price)
}