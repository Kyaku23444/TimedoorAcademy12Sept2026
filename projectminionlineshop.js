let customerName = "John";
let products = ["Mouse", "Keyboard", "USB Flash"];

let productPrice1 = 40000;
let productPrice2 = 47000;
let productPrice3 = 35000;

let totalPrice = productPrice1 + productPrice2 + productPrice3;

let discount_percentage = 0;

if(totalPrice >= 100000) {
    discount_percentage = 0.20;
} else if (totalPrice >= 50000) {
    discount_percentage = 0.10;
} else if(totalPrice < 50000) {
    discount_percentage = 0;
}

console.log("================================");
console.log(" Customer Name: " + customerName);
console.log(" Shopping list: ");
console.log(" 1 " + products[0] + " Price: " + productPrice1);
console.log(" 2 " + products[1] + " Price: " + productPrice2);
console.log(" 3 " + products[2] + " Price: " + productPrice3);
console.log( "Total: " + totalPrice);
console.log("++++++++++++++++++++++++++++++++");