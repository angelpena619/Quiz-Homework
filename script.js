var startQuiz = document.getElementById("start-button");
var questionTitles = document.getElementById("question-title");
var question_options_A = document.getElementById("answer-button-A");
var question_options_B = document.getElementById("answer-button-B");
var question_options_C = document.getElementById("answer-button-C");
var current_question_index = 0;
var timeLeft = 75;

//---was unsucesull detting up the interval counter but i did attempt so this is commented out

/*startButton.addEventListener("click", function() {
  startTime();
  })

  function startTime() {
    timerInterval = setInterval(function() {
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endGame();
    }
    timeLeft--;
    timer.textContent = "Time left: " + timeLeft;

  }, 1000)
*/

//---below are tbe question arrays
const questions = [
  {
    title: "What does the DOM stand for?",
    options: ["Days on market", "Domino", "Document Object Model"],
    answer: 2,
  },
  {
    title: "What does CSS stand for?",
    options: ["Cats Somtimes See", "Catagory Series Selector", "Cascading Style Sheets"],
    answer: 2,
  },
  {
    title: "What are AP?",
    options: ["clinton", "bush", "bidon"],
    answer: 2,
  },
];

//question generator, I was having issues with this syntax im still not confident in my javascript abilities 

document
  .querySelector("#start")
  .addEventListener("click", displayCurrentQuestion);

  function displayCurrentQuestion() {
    document.querySelector(".questions").setAttribute("class","questions show")
    current_question = questions[current_question_index];
    questionTitles.innerHTML = current_question.title;
    question_options_A.innerHTML = current_question.options[0];
    question_options_B.innerHTML = current_question.options[1];
    question_options_C.innerHTML = current_question.options[2];
  }

  function checkAnswers(answer) {
    correct = questions[current_question_index++].answer;
    if (answer === answer && current_question_index++){
      alert("that is correct!");
    }

  
    
  }
