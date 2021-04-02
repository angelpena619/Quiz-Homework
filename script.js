var startQuiz = document.getElementById("start-button");
var questionTitles=document.getElementById("question-title");
var question_options=document.getElementsByClassName("answer-button");
var current_question_index = 0;

//questions
const questions = [{
    title: 'What color is the sky?',
    options: ['red', 'yellow', 'blue'],
    answer: 'blue' 
  },
{
    title: 'What day is today?',
    options: ['mon', 'tues', 'weds'],
    answer: 'weds' 
  },
 {
    title: 'Who is the prez?',
    options: ['clinton', 'bush', 'bidon'],
    answer: 'bidon' 
  }]


  //questions generator

  document.querySelector("#start").addEventListener("click", displayCurrentQuestion);
  var current_question = questions[current_question_index];

  function displayCurrentQuestion() {
    current_question = questions[current_question_index];
    questionTitles.textContent=current_question.title
    var i;
  for (i = 0; i < current_question.options.length; i++) {
  question_options[i].textContent=current_question.options[i]

}
  }
  document.addEventListener("click",handleAnswerquestion)

  function handleAnswerquestion (event){
    if (event.target.matches(".answer-button")) {
      if(event.target.textContent===current_question.answer){
        current_question_index++
        displayCurrentQuestion()
      }
    }
  }

