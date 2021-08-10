function hi() {
  document.getElementById("myScore").innerHTML = "";
}
function hideStart() {
  let x = document.getElementById("start_quiz");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function startQuiz() {
  let x = document.getElementsByClassName("quiz-container")[0];

  let z = document.getElementById("next");
  if (x.style.display === "none") {
    x.style.display = "block";

    z.style.visibility = "visible";
  }
}
let timerCount = 75;

function initialTimer() {
  setInterval(function () {
    let x = document.getElementById("myTimer");
    x.innerText = `Time remaining ${timerCount}`;
    if (timerCount > 0) {
      timerCount = timerCount - 1;
    } else {
      showSlide(slides.length - 1);
    }
  }, 1000);
}

function wrongAnswerTimer() {
  let x = document.getElementById("myTimer");
  x.innerText = `Time remaining ${timerCount}`;

  timerCount = timerCount - 10;
}

function buildQuiz() {
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // variable to store the list of possible answers
    const answers = [];

    // and for each available answer...
    for (letter in currentQuestion.answers) {
      // ...add an HTML radio button
      answers.push(
        `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
      );
    }

    // add this question and its answers to the output
    output.push(
      `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
    );
  });

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll(".answers");

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // find selected answer

    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;

    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      // add to the number of correct answers
      numCorrect = numCorrect + 10;

      // color the answers green
      answerContainers[questionNumber].style.color = "lightgreen";
    }
    else {

      answerContainers[questionNumber].style.color = "red";
    }
  });

  resultsContainer.innerHTML = `${numCorrect} out of ${
    myQuestions.length * 10 - 10
  }`;
  let name = document.getElementById("name").value;
  document.getElementById(
    "myScore"
  ).innerText = `${name}  ${numCorrect} out of ${myQuestions.length * 10 - 10}`;
  document.getElementById("showScore").style.visibility = "visible";
  let y = document.getElementById("goBack");
  y.style.visibility = "visible";
  document.getElementById("bigDiv").style.display = "none";
}

function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;

  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "inline-block";
  }
  if (currentSlide === slides.length - 1) {
    
    let myName = document.getElementById("myName");
    myName.style.visibility = "visible";
    document.getElementById("myTimer").style.visibility = "hidden";
  }
}

function showNextSlide() {
  console.log(`Current slide is ${currentSlide}`);

  const answerContainers = quizContainer.querySelectorAll(".answers");
  const answerContainer = answerContainers[currentSlide];
  const selector = `input[name=question${currentSlide}]:checked`;

  const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  let answerType = document.getElementById("answer_type");
  answerType.style.visibility = "visible";
  console.log(timerCount);
  if (userAnswer != myQuestions[currentSlide].correctAnswer) {
    answerType.innerText = "Previous Answer was !Wrong";
    console.log(`User answer is ${userAnswer}`);
    console.log(`Correct answer is ${myQuestions[currentSlide].correctAnswer}`);

    console.log(timerCount);
    wrongAnswerTimer();
  } else {
    answerType.innerText = "Previous Answer was !Correct";
  }

  showSlide(currentSlide + 1);
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");

const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Funsuk Sandberg",
      c: "Brendan Eich",
    },
    correctAnswer: "c",
  },
  {
    question: "Which one of these is a clone of JavaScript?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
    },
    correctAnswer: "b",
  },
  {
    question: "Best Framework?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    correctAnswer: "a",
  },
  {
    question: "Quiz Over",
    answers: {},
    correctAnswer: "",
  },
];


buildQuiz();

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);

submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", showResults);

nextButton.addEventListener("click", showNextSlide);
