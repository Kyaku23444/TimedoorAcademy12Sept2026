var x = "negative";
var y = "negative";

if(x == "positive" && y == "positive") {
    console.log("Go Right Up");
} else if(x == "negative" && y == "negative") {
    console.log("Go Left Down");
} else if(x == "positive" && y == "negative") {
    console.log("Go Right Down");
} else if(x == "negative" && y == "positive") {
    console.log("Go Left Up");
} 

var life = 1;
var time = 1;

if(life == 0 || time == 0) {
    console.log("Game Over");
} else if(life == 1 || time == 1) {
    console.log("Resume");
}