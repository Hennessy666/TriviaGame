
//Code set to load as soon as page loads
window.onload = function () {
    $("#button-start").on("click", start);
    console.log($);
};

//variables for the logic of the game

// var seconds = Math.floor((1000 * 60) / 1000);
var correctAnwers = 0;
// var wrongAnswers = 0;
// var unAnswered = 0;
var currentQuestion = 0;

// var time = 3000;

// function timer (){
//     var i
//     for (i = 30; i < 30; i --){
//         console.log(i);
// //     }
// }


//function for start and stop

function start() {
    $("#timeRemaining").html(countDown, "seconds left");
    $("#button-start").hide();
    loadQuestion();
};

// function working(){

// }

//array of questions for the player to answer

const quizQuestions = [
    {
        question: "This animal has notoriously bad eyesight, but will charge when it feels threatened and at close range can do much damage.",
        choices: ["Jaguar", "Rhinoceros", "Wildebeest", "Giraffe"],
        correctAnswer: "Rhinoceros"
    },

    {
        question: "Which is the closest living relative of the hippo?",
        choices: ["Whale", "Rhinoceros", "Zebra", "Elephant"],
        correctAnswer: "Whale"
    },

    {
        question: "Which species of monkey is not found in Africa?",
        choices: ["Rhesus Macaque", "Mandrills", "Colobus Monkey", "Golden Lion Tamarin"],
        correctAnswer: "Golden Lion Tamarin"
    },

    {
        question: "How fast can a cheetah run?",
        choices: ["100 mph", "70 mph", "120 mph", "50 mph"],
        correctAnswer: "70 mph"
    },
]

//load questions for the player to choose from

function loadQuestion() {

    counter = 30;
    timer = setInterval(countDown, 1000);

    const question = quizQuestions[currentQuestion].question;
    const choices = quizQuestions[currentQuestion].choices;
    $("#game").html(
        ${ question } + (loadChoices(choices)))
};

loadQuestion();


//load choices for the player to choose from

function loadChoices() {
    var result = '';

    for (var i = 0; i < choices.length; i++) {
        result += '<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>';
    }
    return result;
};

//function which starts the 30 second clock for player to response to each question

function countDown() {
    counter--;

    $('#time').html('Timer:' + counter);

    if (counter === 0) {
        timeUp();
    }
};

//function makes sure that the counter in countDown function doesn't go under zero seconds.

function stopTimer() {
    clearInterval(timer);

    lost++;
};

//function goes to next question

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}





