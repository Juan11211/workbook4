"use strict" 

const userAddress1 = {
    "name": "Juan",
    "address": "HARLEM, NY",
    "city": "New York",
    "state": "NY",
    "zip": "10039"
}

const userAddress2 = {
    "name": "Elijah",
    "address": "BROOKLYN, NY",
    "city": "New York",
    "state": "NY",
    "zip": "11211"
}

function printContact(userAddress){
    console.log("Name: "  + userAddress.name);
    console.log("Address: " + userAddress.address);
    console.log(`City: ` + userAddress.city + ", " + userAddress.state + " " + userAddress.zip)
}

printContact(userAddress1)
printContact(userAddress2)
