/*code from webdesign.tutsplus.com/multiple-choice-quiz-app-with-javascript--cms-107756t*/
const questions = [
  {
    question: "A group of monkeys is called a:",
    choices: ["Club", "Troop", "School", "Pride"],
    correct: 1
  },
  {
    question: "Monkeys can live upto how many years?",
    choices: ["45", "35", "50", "20"],
    correct: 0
  },
  {
    question: "The male eastern lowland gorilla holds which Guinness World Records title?",
    choices: ["Most Northerly Primate", "Fastest primate", "Largest primate living", "Longest nose primate"],
    correct: 2
  },
  {
    question: "What is the difference between monkeys and apes?",
    choices: ["Nothing", "Monkeys have tails and apes do not", "Monkeys are smaller the 50lbs and apes are larger", "Monkeys can be kept as pets"],
    correct: 1
  },
  {
    question: "What is the world's largest tree-dwelling mammal?",
    choices: ["Chimpanzee", "Orangutan", "Gorilla", "Bonobo"],
    correct: 1
  },
    
];
  
let currentQuestion = 0;
let correctAnswers = 0;

function showQuestion() {
  const questionText = document.getElementById("question-text");
  questionText.textContent = questions[currentQuestion].question;

  const choices = document.querySelectorAll(".choice");
  choices.forEach((choice, index) => {
    choice.textContent = questions[currentQuestion].choices[index];
  });

  const feedback = document.getElementById("feedback");
  feedback.textContent = "";
}

function checkAnswer(selected) {
  const feedback = document.getElementById("feedback");
  if (selected === questions[currentQuestion].correct) {
    feedback.textContent = "Correct!";
    correctAnswers++;
  } else {
    feedback.textContent = "Incorrect!";
  }

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      const quizContainer = document.querySelector(".quiz-container");
      quizContainer.innerHTML = `<p>You got ${correctAnswers} out of ${questions.length} questions.</p>`;
    }
  }, 2000);
}

showQuestion();