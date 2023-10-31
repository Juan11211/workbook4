"use strict" 

let supplierCode1 = {
    "supplierCode": "LTC1",
    "productNumber": "123",
    "size": "L"
}

let allSupplierCode = [
    "JAN:123-M",
    "FEB:456-M",
    "MAR:789-M",
    "APR:123-M",
    "MAY:567-M",
    "JUN:432-M",
]

// for(let i =0; i < allSupplierCode.length; i++){
//     let thepartCode = allSupplierCode[i];
//     let part = parsePartCode(thepartCode)

//     console.log(part);
// }

function displayAllSupplier(partcode){
    for(let i = 0; i < partcodes.length; i++){
        parsePartCode(supplierCode(partcode[i]));
    }
}

function parsePartCode(supplierCode){
    console.log("Supplier: " + supplierCode.supplierCode + " Product Number: " + supplierCode.productNumber + " Size: " + supplierCode.size); 
}

parsePartCode(supplierCode1)

