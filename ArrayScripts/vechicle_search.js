"use strict"

let vehicles = [
    {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7
    },
    {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6
    },
    {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5
    },
    {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7
    },
    {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("12-30-2022"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2023"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    }
    ];

    // Which vehicles are RED?
    for(let i = 0; i < vehicles.length; i++ ){
        if(vehicles[i].color.indexOf("Red") !== -1 ){
            console.log(`These vehicles are the color red: ${vehicles[i].type}`)
        } 
    }

    // for(let i = 0; i < vehicles.length; i++){
    //     if(vehicles[i].color === 'Red'){
    //         console.log(`These vehicles are red: ${vehicles[i].type}`)
    //     }
    // }


// Which vehicles have registrations that are expired?

let currentDate = new Date();

for (let i = 0; i < vehicles.length; i++) {
    if (vehicles[i].registrationExpires && vehicles[i].registrationExpires.getTime() < currentDate.getTime()) {
        console.log(`These vehicles' tags are expired: ${vehicles[i].type} - it expired on ${vehicles[i].registrationExpires}`);
    } else {
        console.log(`Registration for ${vehicles[i].type} is still good.`);
    }
}

// Which vehicles that hold at least 6 people?

for(let i = 0; i < vehicles.length; i++){
    if(vehicles[i].capacity >= 6){
        console.log(`These vehicles can hold up to 6: ${vehicles[i].type}`)
    }
}
// Which vehicles have license plates that end with "222"?

for (let i = 0; i < vehicles.length; i++) {
    const licenseNo = vehicles[i].licenseNo;
    
    if (licenseNo && typeof licenseNo === 'string') {
        const lastIndex = licenseNo.indexOf('-');
        if (lastIndex !== -1 && licenseNo.substring(lastIndex + 1) === "222") {
            console.log(`This vehicle licenseNo ends in 222: ${vehicles[i].type} - licenseNo ${vehicles[i].licenseNo}`);
        }
    }
}





