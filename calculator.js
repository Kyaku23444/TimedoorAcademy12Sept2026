let num1 = parseInt(prompt("Enter the first number: "));
let operator = prompt("Enter operator: ");
let num2 = parseInt(prompt("Enter the second number: "));
let result;

if(isNaN(num1) && isNaN(num2)) {
    console.log("invalid input");
} else {
    if(operator == "+") {
       result = num1 + num2;
    } else if(operator == "-") {
    result = num1 - num2;
} else if(operator == "*") {
    result = num1 * num2;
} else if(operator == "/") {
    result = num1 / num2;
} else {
    alert("Invalid Operator");
}
  console.log(result);
}
