var card = $("#quiz-area");

//Question set
var questions = [
    {
        question: "What color is a giraffe's tongue?"
        answers: ["Red", "Blue", "Black", "Green"]
        correctAnswer: "Blue"
    },
    {
        question: "How many hours a day does an elephant eat?"
        answers: ["20", "2", "15", "1"]
        correctAnswer: "20"
    },
    {
        question: "What are baby sharks called?"
        answers: ["Calfs", "Pups", "Whales", "Tigers"]
        correctAnswer: "Pups"
    },
    {
        question: "The largest African terrestrial animal is?"
        answers: ["Hippos", "Giraffes", "Ostrich", "Elephants"]
        correctAnswer: "Elephants"
    },
    {
        question: "Which animal does not have sweat glands?"
        answers: ["African wild dog", "Gorillas", "Wildebeest", "Elephants"]
        correctAnswer: "Elephants"
    },
    {
        question: "How long do Gorillas live?"
        answers: ["Roughly 10 years", "Roughly 35 years", "Roughly 23 years", "Roughly 50 years"]
        correctAnswer: "Roughly 35 years"
    },

];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function(){
        game.counter--;
        $("#counter-number").html(game.counter);
        if(game.counter === 0){
            console.log("TIME UP");
            game.done();
        }
    },

    start: function(){
        timer = setInterval(game.countdown, 1000);

        $("sub-wrapper").prepend(
            "<h2>Time Remaining: <span id = 'counter-number'>120</span>Seconds</h2>"
        );

        $("#start").remove();

    }
}


result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};

$("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },


// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});
