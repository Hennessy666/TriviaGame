//Psuedocode

1.
//Create a start button which hides and then starts the timer at 30 seconds and pulls up a
//list of choices for a question.

2.
//after player chooses or time runs out, either 1. correct answer with a picture, 2. incorrect answer
//with a picture or 3. times up

3.
//cycles to next question with 2. above. In total there are ten questions.

4.
// at the end displays a score of wins/losses and end picture

//functions-

//1. Function to have player click on screen to start timer and bring up question. Must hide start button.

//2. function for timer which starts at 30 and goes down until zero.

//3. function for displaying a question w/ related choices

//4. function for each question what to display at the end.

//4. function for collecting win or loss for each individual question.

//5. function to go to next question.

//6. function to collect all of the wins/losses for game and display end screen.

//variables-

//1. var = currentQuestion -
//2. var = timer- sets the countdown for clock
//3. var = counter - sets the second to countdown from
//4. var = lost - questions player didn't answer or incorrectly answered
//5. var = win - questions player won.

//array of questions for the player to answer
$(document).ready(function(){
    $("#button-start").on("click", function(event){
        $("#button-start").hide();
        counter = setInterval(timer, 1000);
        loadQuestions();
    });

// var trivia = {
//     //trivia properties
//     correct: 0,
//     incorrect: 0,
//     unanswered: 0,
//     currentSet: 0,
//     timer: 25,
//     timerOn: false,
//     timerId: '',
// }

// //method to initialize game

// startGame: function(){
//     trivia.currentSet = 0;
//     trivia.correct = 0;
//     trivia.incorrect = 0;
//     trivia.unanswered = 0;
//     clearInterval(trivia.timerId);
// }
var timer;
var currentQuestion = 0;
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

//countdown for the clock

function timeUp(){
    clearInterval(timer);
}

function countDown(){
    counter--;

    $('#time').html('Timer:' + counter);

    if(counter === 0){
        timeup();
    }
}


//load questions for the player to choose from

function loadQuestion() {
    counter = 30;
    timer = setInterval(countDown, 1000);

    const question = quizQuestions[currentQuestion].question;
    const choices = quizQuestions[currentQuestion].choices;

    $('#game').html($(question)+ $(loadChoices(choices)))
    
};

loadQuestion();


//load choices for the player to choose from

function loadChoices() {
    let result =  '';

    for (let i = 0; i < choices.length; i++){
        result += <p class="choice" data-answer="${choices[i]}">${choices[i]}</p>;
    }
    return result;
};

});