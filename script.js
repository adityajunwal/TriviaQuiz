const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const correctCounter = document.getElementById("correct");
const incorrectCounter = document.getElementById("incorrect");
const totalQuestionsAttempted = document.getElementById("total");

const data = [
    {
        "text": "What is the capital of France?",
        "option1": "Berlin",
        "option2": "Madrid",
        "option3": "Paris",
        "option4": "Lisbon",
        "correct": "option3"
    },
    {
        "text": "What is the largest planet in our solar system?",
        "option1": "Earth",
        "option2": "Jupiter",
        "option3": "Saturn",
        "option4": "Mars",
        "correct": "option2"
    },
    {
        "text": "What is the chemical symbol for gold?",
        "option1": "Au",
        "option2": "Ag",
        "option3": "Gd",
        "option4": "Pb",
        "correct": "option1"
    },
    {
        "text": "Who wrote 'To Kill a Mockingbird'?",
        "option1": "Harper Lee",
        "option2": "Mark Twain",
        "option3": "J.K. Rowling",
        "option4": "Ernest Hemingway",
        "correct": "option1"
    },
    {
        "text": "What is the smallest prime number?",
        "option1": "1",
        "option2": "2",
        "option3": "3",
        "option4": "5",
        "correct": "option2"
    },
    {
        "text": "Which planet is known as the Red Planet?",
        "option1": "Venus",
        "option2": "Saturn",
        "option3": "Mars",
        "option4": "Jupiter",
        "correct": "option3"
    },
    {
        "text": "What is the boiling point of water?",
        "option1": "90°C",
        "option2": "100°C",
        "option3": "110°C",
        "option4": "120°C",
        "correct": "option2"
    },
    {
        "text": "Who painted the Mona Lisa?",
        "option1": "Vincent Van Gogh",
        "option2": "Pablo Picasso",
        "option3": "Leonardo da Vinci",
        "option4": "Claude Monet",
        "correct": "option3"
    },
    {
        "text": "Which country is the largest by area?",
        "option1": "USA",
        "option2": "Canada",
        "option3": "China",
        "option4": "Russia",
        "correct": "option4"
    },
    {
        "text": "What is the main ingredient in guacamole?",
        "option1": "Tomato",
        "option2": "Avocado",
        "option3": "Onion",
        "option4": "Lemon",
        "correct": "option2"
    }
]


var currentQuestionIndex = 0;
var correct = 0;
var incorrect = 0;
var total = 0;

question.innerText = data[currentQuestionIndex].text;
option1.innerText = data[currentQuestionIndex].option1;
option2.innerText = data[currentQuestionIndex].option2;
option3.innerText = data[currentQuestionIndex].option3;
option4.innerText = data[currentQuestionIndex].option4;
correctCounter.innerText = correct;
incorrectCounter.innerText = incorrect;
totalQuestionsAttempted.innerText = total;

function next () {
    if (currentQuestionIndex < data.length - 1){
        currentQuestionIndex ++;
        question.innerText = data[currentQuestionIndex].text;
        option1.innerText = data[currentQuestionIndex].option1;
        option2.innerText = data[currentQuestionIndex].option2;
        option3.innerText = data[currentQuestionIndex].option3;
        option4.innerText = data[currentQuestionIndex].option4;
    }
   else {
        window.location.href = "thanks.html"
    }
}

function submit(answer) {
    var submittedAnswer = answer;
    check(submittedAnswer)
} 

function check(submition) {
    if (submition == data[currentQuestionIndex].correct){
        correct++;
        correctCounter.innerText = correct;
    } 
    else {
        incorrect++;
        incorrectCounter.innerText = incorrect;
    } 
    total ++;
    totalQuestionsAttempted.innerText = total;
    next();
}