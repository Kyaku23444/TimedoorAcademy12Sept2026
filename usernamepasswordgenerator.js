const prompt = require("prompt-sync")();

let random = Math.floor(Math.random() * Math.floor(10));
let adjectives = ["Reliable", "Honest", "Patient", "Confident", "Kind", "Ambitious", "Creative", "Generous", "Curious", "Optimistic"];
let nouns = ["Laptop", "Computer", "Mouse", "Keyboard", "Motherboard","CPU", "GPU", "RAM", "USB", "Cable"];
let symbols = ["!", "@", "#", "$", "%", "^", "&", "*","_", "-"];
let newUsername = undefined;
let newPassword = undefined;

let userOption = prompt("Generate username(1) or password(2): ");

function generate() {
    if (userOption == "1") {
        newUsername = adjectives[Math.floor(Math.random() * adjectives.length)]
            + nouns[Math.floor(Math.random() * nouns.length)];
        console.log(newUsername);
    }

    if (userOption == "2") {
        newPassword = nouns[Math.floor(Math.random() * nouns.length)]
            + random + symbols[Math.floor(Math.random() * symbols.length)];
        console.log(newPassword);
    }
}

generate();
