$(document).ready( function() {
  // On-click start function
  $("#start").on("click", function() {
   $("#start").fadeToggle("slow", displayq) 
  
  })

var questions = [
    {
        question: "This animal has notoriously bad eyesight, but will charge when it feels threatened and at close range can do much damage.",
        answers: ["Jaguar", "Rhinoceros", "Wildebeest", "Giraffe"],
        values: [false, true, false, false],
        detail:
        gif:
    },

    {
        question: "Which is the closest living relative of the hippo?",
        answers: ["Whale", "Rhinoceros", "Zebra", "Elephant"],
        values: [true, false, false, false],
        detail:
        gif:
    },

    {
        question: "Which species of monkey is not found in Africa?",
        answers: ["Rhesus Macaque", "Mandrills", "Colobus Monkey", "Golden Lion Tamarin"],
        values: [false, false, false, true],
        detail:
        gif:
    },

    {
        question: "How fast can a cheetah run?",
        answers: ["100 mph", "70 mph", "120 mph", "50 mph"],
        values: [false, true, false, false],
        detail:
        gif:
    },

// Very important for tracking questions. This will track the player's progress through the questions. When this value is equal to questions.length - 1 the score screen will appear
  var currentQuestion = 0;
  var correct = 0; //records number of correct answers
  var wrong = 0; //records number of wrong answers
  var none = 0; //records unanswered (timed out) questions
  
  //set up the timer
  var time = 30;
  timer.html("<h2>" + time + "seconds remaining</h2>")
  
  //Countdown function that stops the timer at zero
  var countDown = setInterval(function(){
    time--;
    timer.html("<h2>" + time + " seconds remaining</h2>")
    
      // If time reaches 0, the question times out, none increases in value, and the timedOut function is called
      if (time === 0) {
        clearInterval(countDown)
        questionArea.fadeToggle("slow", timedOut)
        none++;
      }
    }, 1000);
  
  //this function will display the starting question
  function displayq(){
    $(".message-content").remove();
    $(".start").remove();
    
    //create the html element that will constitute the timer, question, and answer area
    
    var questionArea = $("<div>");
    questionArea.attr("id", "question-area")
    var timer = $("<h2>")
    var question = $("<h2>")

    // Append elements to the content area, so they display properly
    questionArea.appendTo("#content")
    timer.appendTo(questionArea)
    question.appendTo(questionArea)

    // Display the question. I'm using the currenQuestion value to reach into the array of objects and pull the proper question.
    question.html(questions[currentQuestion].question)

    // Display the answers as list items using a for loop
    for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
      var answers = $("<button>")
      answers.html(questions[currentQuestion].answers[i])
      answers.addClass("answer-buttons")
      answers.attr("value", questions[currentQuestion].values[i])
      answers.attr("id", "a" + i)
      answers.appendTo(questionArea)
    };
    
    //Slides to answers into place
    $("#a0").animate({"left": "+=600px"})
    
    //When the player clicks the buttons
    
    $(".answer-buttons").on("click", function(){
      //checking value of 'this'
      console.log($(this).attr("value"));
      
      //if the player clicks the correct button, stop the clock and clear the counter
     if ($(this).attr("value")=== "true"){
       questionArea.fadeToggle("slow", displayCorrect)
       clearInterval(countDown);
       correct++;
     };
    //if the player clicks the wrong thing, stop clock and clear counter
     if($(this).attr("value")=== "false"){
       questionArea.fadeToggle("slow", displayWrong)
       clearInterval(countDown);
       
       wrong++;
     };
    });
  };
  
  //function displays the correct answer screen
  function displayCorrect(){
    var cycle = setTimeout(displayq, 1000)
    var messageArea= $("<div>");
    messageArea.addClass("message-content")
    //Declare content that will go into the Message area
    var winMessage = $("<h2>");
    var detail = $("<img>")
    //Append it all to the content container and add text and images
   messageArea.appendTo($("#content"));
    winMessage.appendTo($(messageArea))
    image.appendTo($(messageArea))
    winMessage.text("Right!");
    detail.text(questions[currentQuestion].detail)
    image.attr("src", question[currentQuestion].gif)
    
  //no questions left then display game over
   if (currentQuestion === (questions.length -1)){
     clearTimeout(cycle);
     var gameEnd = setTimeout(gameOver, 100000)
     }
    currentQuestion++;
  };
  
  //Function will display the wrong answer screen
  function displayWrong(){
    var cycle = setTimeout(displayq, 10000);
    var messageArea = $("<div>");
    messageArea.addClass("message-content")
    var lossMessage = $("<h2>");
    var detail = $("<h2>")
    var image = $("<img>")
   //Append it all to the content container and add text and images
    messageArea.appendTo($("#content"));
    lossMessage.appendTo(messageArea)
    detail.appendTo($(messageArea))
    image.appendTo($(messageArea))
    lossMessage.html("Wrong, the right answer is" + questions[currentQuestion].answers[questions[currentQuestion].values.indexOf(true)]);
    detail.text(questions[currentQuestion].detail)
    image.attr("src", questions[currentQuestion].gif)
    
    //Gameover
    if(currentQuestion ===(questions.length -1)){
      clearTimeout(cycle);
      var gameEnd = setTimeout( gameOver, 10000)
      }
    currentQuestion++;
  };
  
  //this will display the time out screen
  function timedOut(){
    var cycle= setTimeout(displayq, 1000);
    var messageArea = $("<div>");
    messageArea.addClass("message-content")
    var lossMessage = $("<h2>");
    var detail = $("<h2>");
    var image = $("<img>")
    //Append it to the content container and add text and images
    messageArea.appendTo($("#content"));
    lossMessage.appendTo(messageArea)
    detail.appendTo($(messageArea))
    image.appendTo($(messageArea))
    lossMessage.html("Times Up! The answer is" + questions[currentQuestion].answers[questions[currentQuestion].values.indexOf(true)]);
    detail.text(questions[currentQuestion].detail)
    image.attr("src", questions[currentQuestion].gif)
    
    
    // If there are no questions left, then run this function to display gameOver
    if (currentQuestion === (questions.length - 1)) { 
      clearTimeout(cycle);
      var gameEnd = setTimeout( gameOver, 10000)
    }
    currentQuestion++;
  };

  // This will display when the currentQuestion amount is equal to questions.length - 1. In other words, when all questions have been answered
  function gameOver() {
    // Clear out the post-question message
    $(".message-content").remove();
    var totalCorrect = $("<h3>")
    var totalIncorrect = $("<h3>")
    var totalNone = $("<h3>")
    var restart = $("<button>")
    totalCorrect.appendTo($("#content"))
    totalCorrect.html("You got " + correct + " correct!")
    totalIncorrect.appendTo("#content")
    totalIncorrect.html("You got " + wrong + " wrong.")
    totalNone.appendTo("#content")
    
    // If block to determine if question or questions should be used
    if (none === 1) {
      totalNone.html("You didn't answer " + none + " question.")
    }
    if (none > 1 || none === 0) {
      totalNone.html("You didn't answer " + none + " questions.")
    }
    
    
    // Restart button
    restart.addClass("restart")
    restart.text("Restart")
    restart.appendTo($("#content"))

    //Reset button onclick function
    $(".restart").on("click", function() {
      totalCorrect.remove();
      totalIncorrect.remove();
      totalNone.remove();
      restart.remove();
      currentQuestion = 0;
      correct = 0; //records number of correct answers
      wrong = 0; //records number of wrong answers
      none = 0;
      displayQ();
    })

  }

<<<<<<< HEAD
})
=======
})

    
    
>>>>>>> c3f046f04cf1a984d8e731814f2201b484338c49
