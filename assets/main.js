//var-section
let questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    question: "What does API stand for ?",
    choices: ["application programming interface","application internet problem","algorism programming interface","algorism problem internet"],
    answer: "application programming interface",
  },
  {
    question: "What is the correct JavaScript syntax to write 'Hello World'?",
    choices: ["response.write('Hello World')","'Hello World","document.write('Hello World')","('Hello World')"],
    answer: "document.write('Hello World')",
  }
];

let startButton =document.getElementById("start-btn")
let nextButton =document.getElementById("next-btn")
let questionContainerElement =document.getElementById ("question-container")
let questionElement =document.getElementById("question")
let optionListElement=document.getElementById("option-list")
let currentQuestionIndex, shuffledQuestions
let timerElement = document.querySelector("#timer");
let questionResultElement = document.querySelector("#question-result");
let time = 20;
let intervalId;

//event-section
startButton.addEventListener('click',startQuiz)
nextButton.addEventListener("click", () => {
  currentQuestionIndex++
  setNextQuestion()
})

//function-section
function startQuiz() {
  startButton.classList.add("hide")
  shuffledQuestions=questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove("hide")
  setNextQuestion()
}

function setNextQuestion(){
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(questions){
  questionElement.innerText = questions.question
  questions.choices.forEach(choices =>{
    let button = document.createElement("button")
    button.innerText = choices.text
    button.classList.add("btn")
    if(choices.answer){
      button.dataset.answer =choices.answer
    }
    button.addEventListener("click", selectAnswer)
    optionListElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add("hide")
  while (optionListElement.firstChild) {
    optionListElement.removeChild
    (optionListElement.firstChild)
  }
}
;
function selectAnswer(e) {
  let selectedButton =e.target
  let correct= selectedButton.dataset.answer;
  setStatusClass(document.body, correct)
  Array.from(optionListElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex +1) {
    nextButton.classList.remove("hide")
  }else {
    startButton.innerText = "Restart"
    startButton.classList.remove("hide")
  }
  
}

function setStatusClass (element, correct) {
  clearStatusClass(element)
  if (correct){
    element.classList.add("correct")
  }else{
    element.classList.add("wrong")
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct")
  element.classList.remove("wrong")
}





 
/*




function endQuiz() {
  clearInterval(intervalId);
  var body = document.body;
  body.innerHTML = "Game over, You scored " + correctCount;
}

function updateTime() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    endQuiz();
  }
}

function renderQuestion() {
  
  if (time == 0) {
    updateTime();
    return;
  }

  intervalId = setInterval(updateTime, 1000);
  
  questionEl.textContent = questions[questionIndex].question;

  optionListEl.innerHTML = "";
  questionResultEl.innerHTML = "";

  var choices = questions[questionIndex].choices;
  var choicesLenth = choices.length;

  for (var i = 0; i < choicesLenth; i++) {
    var questionListItem = document.createElement("li");
    questionListItem.textContent = choices[i];
    optionListEl.append(questionListItem);
  }
}

function nextQuestion() {
  questionIndex++;
  if (questionIndex === questions.length) {
    time = 0;
  }
  renderQuestion();
}

function checkAnswer(event) {
  clearInterval(intervalId);
  if (event.target.matches("li")) {
    var answer = event.target.textContent;
    if (answer === questions[questionIndex].answer) {
      questionResultEl.textContent = "Correct";
      correctCount++;
    } else {
      questionResultEl.textContent = "Incorrect";
      time = time - 2;
      timerEl.textContent = time;
    }
  }
  setTimeout(nextQuestion, 2000);
}

renderQuestion();
optionListEl.addEventListener("click", checkAnswer);


*/