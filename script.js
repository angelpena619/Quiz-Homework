var startQuiz = document.getElementById("start-button");
var questionTitles = document.getElementById("question-title");
var question_options_A = document.getElementById("answer-button-A");
var question_options_B = document.getElementById("answer-button-B");
var question_options_C = document.getElementById("answer-button-C");
var current_question_index = 0;

const questions = [
  {
    title: "What color is the sky?",
    options: ["red", "yellow", "blue"],
    answer: 2,
  },
  {
    title: "What day is today?",
    options: ["mon", "tues", "weds"],
    answer: 2,
  },
  {
    title: "Who is the prez?",
    options: ["clinton", "bush", "bidon"],
    answer: 2,
  },
];

//question generator

document
  .querySelector("#start")
  .addEventListener("click", displayCurrentQuestion);

function displayCurrentQuestion() {
  console.log (questions[current_question_index])
  current_question = questions[current_question_index];
  questionTitles.innerHTML = current_question.title;

  for (var i = 0; questions[current_question_index].options.length; i++) {

    question_options_A.innerHTML = current_question.options[i];
    question_options_B.innerHTML = current_question.options[i];
    question_options_C.innerHTML = current_question.options[i];
  }
}
//*document.addEventListener("click", handleAnswerquestion);

function handleAnswerquestion(event) {
  if (event.target.matches(".answer-button")) {
    if (event.target.textContent === current_question.answer) {
      current_question_index++;
      displayCurrentQuestion();
    }
  }
}

function checkAnswers(answer) {}
