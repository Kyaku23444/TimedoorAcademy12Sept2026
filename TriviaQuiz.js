let questionList = [
  "What country has the longest coastline in the world? ",
  "What is the smallest country in the world? ",
  "Which country has a unicorn as its national animal? ",
  "Which country is home to the world's tallest building? ",
  "What is the coldest country in the world? "
];

let answersList = ["Canada", "Vatican City", "Scotland", "United Arab Emirates","Russia"];
let score = 0;
let i = 3;

do {
  let playerAnswer = prompt(questionList[i].toLowerCase());
  let answerKey = answersList[i];
  if(playerAnswer == answersList[i]) {
    score = score + 20;
  }
  i++;
} while(i < questionList[i])
console.log(`Your score ${score}`);
