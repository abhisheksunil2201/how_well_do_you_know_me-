const readLineSync = require("readline-sync");
let playerName = readLineSync.question("What is your name?");
let score = 0;

console.log(`Welcome ${playerName} to How well do you know Abhishek`);

function askQuestion(question, ans) {
  let playerResponse = readLineSync.question(question);
  if (playerResponse.toLowerCase() === ans) {
    console.log("Correct!!!");
    score += 1;
  } else {
    console.log("Incorrect!!!");
  }
}

function game() {
  let questions = [
    {
      question: "Where does Abhishek live?",
      ans: "india",
    },
    {
      question: "What is his favourite game?",
      ans: "football",
    },
    {
      question: "What does Abhishek like to eat the most?",
      ans: "icecream",
    },
    {
      question: "Who is Abhishek's favourite football player?",
      ans: "cristiano ronaldo",
    },
  ];

  questions.map(({ question, ans }) => {
    askQuestion(question, ans);
  });

  console.log();
  console.log("Thank you for playing the game!!");
  console.log(`Your score is:${score}/4`);
}

game();
