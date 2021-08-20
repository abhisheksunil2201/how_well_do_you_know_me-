const readLineSync = require("readline-sync");
let playerName = readLineSync.question("What is your name?");
let score = 0;

console.log("Welcome " + playerName + " to How well do you know Abhishek");

function askQuestion(question, ans) {
  let playerResponse = readLineSync.question(question);
  if (playerResponse.toLowerCase() === ans) {
    score += 1;
    console.log("Correct!!!");
    console.log("Your Current Score is: " + score);
    console.log("---------------------");
  } else {
    console.log("Incorrect!!!");
    console.log(
      "Correct Ans is: " + ans.charAt(0).toUpperCase() + ans.slice(1)
    );
    console.log("Your Current Score is: " + score);
    console.log("---------------------");
  }
}

function game() {
  let questions = [
    {
      question: "Where does Abhishek live?",
      answer: "india",
    },
    {
      question: "What is his favourite game?",
      answer: "football",
    },
    {
      question: "What does Abhishek like to eat the most?",
      answer: "icecream",
    },
    {
      question: "Who is Abhishek's favourite football player?",
      answer: "cristiano ronaldo",
    },
    {
      question: "Which is Abhishek's favourite sitcom?",
      answer: "friends"
    }
  ];

  for (let i = 0; i < questions.length; i++) {
    let ques = questions[i];
    askQuestion(ques.question, ques.answer);
  }
  console.log();
  console.log("Thank you for playing the game!!");
  console.log(`Your score is:${score}/4`);
}

game();
