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
  },
  {
    question: "What does API stand for ?",
    choices: ["application internet problem","algorism programming interface","application programming interface","algorism problem internet"],   
    answer:"application programming interface"
  },
  {
    question: "What is the correct JavaScript syntax to write 'Hello World'?",
    choices: ["Hello World","response.write('Hello World')","document.write('Hello World')","('Hello World')"],
    answer:"document.write('Hello World')"
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
let questionResult= document.getElementById("quiz-result");
let correctAnswer=0;
let answered= document.getElementById("correct-or-wrong");

//event-section
startButton.addEventListener('click',startQuiz);


//function-section
function startQuiz() {
 // timer=
  startButton.classList.add("hide");
  questionContainer.classList.remove("hide");
  for(var quizIndex=0;quizIndex<4;quizIndex++){
  questionArea.textContent=quizQuestions[quizIndex].question;
  choiceA.textContent=quizQuestions[quizIndex].choices[0];
  choiceB.textContent=quizQuestions[quizIndex].choices[1];
  choiceC.textContent=quizQuestions[quizIndex].choices[2];
  choiceD.textContent=quizQuestions[quizIndex].choices[3];
  
  if (choiceC.value){
    console.log("correct");
  }else{
    console.log("wrong");
  }
}
}

 function gameOver(){
  questionContainer.classList.add("hide");
  console.log("game is over");
 } 