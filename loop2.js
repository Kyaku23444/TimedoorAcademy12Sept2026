let gamingHours = [2, 2, 3, 3, 1, 4, 5];

let aboveLimitTime = 0;
let underLimitTime = 0;

for(i = 0; i < gamingHours.length; i++) {
    if(gamingHours[i] > 2) {
        aboveLimitTime++;
    } else {
        underLimitTime++;
    }
}

console.log("Steve plays above 2 hours: " + aboveLimitTime);
console.log("Steve plays for 1-2 hours: " + underLimitTime);
