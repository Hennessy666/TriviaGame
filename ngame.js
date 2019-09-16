

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
