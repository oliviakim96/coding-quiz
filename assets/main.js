/*
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
*/

//variable-section

let quizQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings","booleans","alerts","numbers"],
    answer:"alerts"
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes","curly brackets","parentheses","square brackets"],
    answer:"parentheses"
  }
];
let choiceA= document.getElementById("option1");
let choiceB= document.getElementById("option2");
let choiceC= document.getElementById("option3");
let choiceD= document.getElementById("option4");
let startButton =document.getElementById("start-btn");
let questionContainer=document.getElementById ("question-container");
let questionArea =document.getElementById("question");
let options=document.querySelectorAll(".btn");
let timer= document.getElementById("timer");
let Result= document.getElementById("quiz-result");
let questionIndex=0;
let correctAnswer=0;
let answered= document.getElementById("correct-or-wrong");
//event-section
startButton.addEventListener('click',startQuiz);
choiceC.addEventListener('click',nextQuestion);



//function-section
function startQuiz() {
 // timer=
  startButton.classList.add("hide");
  questionContainer.classList.remove("hide");
  questionArea.textContent=quizQuestions[questionIndex].question;
  choiceA.textContent=quizQuestions[questionIndex].choices[0];
  choiceB.textContent=quizQuestions[questionIndex].choices[1];
  choiceC.textContent=quizQuestions[questionIndex].choices[2];
  choiceD.textContent=quizQuestions[questionIndex].choices[3];
}

function wrong(){
  answered.textContent="This is wrong. Try it again"
}

function nextQuestion(){
  questionIndex=1
  questionArea.textContent=quizQuestions[questionIndex].question;
  choiceA.textContent=quizQuestions[questionIndex].choices[0];
  choiceB.textContent=quizQuestions[questionIndex].choices[1];
  choiceC.textContent=quizQuestions[questionIndex].choices[2];
  choiceD.textContent=quizQuestions[questionIndex].choices[3];
  choiceC.addEventListener('click',gameOver);
 }
 
 function gameOver(){
   Result
 }