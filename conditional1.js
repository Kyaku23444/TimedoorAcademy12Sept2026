var testNumber = -40

if(testNumber < 0) {
    console.log("negative number");
} else if(testNumber > 0) {
    console.log("positive number");
}

var age = 20;

if(age < 17) {
    console.log("Not enough age to drive");
} else if(age >= 17) {
    console.log("You're old enough to drive");
}

var grade = 90;

if(grade >= 90) {
    console.log("Grade A");
} else if(grade >= 75) {
    console.log("Grade B");
} else if(grade >= 60) {
    console.log("Grade C");
} else if(grade < 60) {
    console.log("Grade D");
}

var totalPayment = 200000;
var member = true;

if(member == true) {
    console.log(totalPayment * (1 - 10/100));
} else if(member == false) {
    console.log(totalPayment);
}

var choosenPlayer = "Knight";

if(choosenPlayer == "Knight") {
    console.log("Welcome, Knight the hero");
} else if(choosenPlayer == "Wizard") {
    console.log("Welcome, Wizard the wtich!");
}