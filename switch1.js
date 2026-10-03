let num1 = 10;
let num2 = 4;
let operator = ["x", "+", "-", ":"];
let random = Math.floor(Math.random() * 3)
let choosenOperator = operators[random];

switch(choosenOperator) {
    case choosenOperator == "x":
        total = num1 * num2;
        console.log(total);
        break;
    case choosenOperator == "+":
        total = num1 + num2;
        console.log(total);
        break;
    case choosenOperator == "-":
        total = num1 - num2;
        console.log(total);
        break;
    case choosenOperator == ":":
        total = num1 / num2;
        console.log(total);
        break;
}