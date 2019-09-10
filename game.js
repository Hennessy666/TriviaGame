
//Code set to load as soon as page loads
window.onload = function(){
    $("#button-start").on("click", start);
};

//variables for the logic of the game

var seconds = Math.floor((1000 * 60) / 1000);
var correctAnwers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

var time = 3000;

function timer (){
    var i
    for (i = 30; i < 30; i --){
        console.log(i);
    }
}


//function for start and stop

function start (){
    // var i = 30;
    // for (i = 30; 0 < i < 30; i --);
    $("#timeRemaining").html(timer + "seconds left");
    $("#button-start").hide();
    console.log(timer);
}; 

function working(){

}
  

