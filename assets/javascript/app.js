$(".questions").hide();
$('.stop-game').hide();

$("#start").click(function(){
   $('.questions').show();
   $('.start-game').hide();
   $('.stop-game').hide();
   runTimer();
});


var number = 60;
var intervalId;
function runTimer() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}
function decrement() {
  number--;
  $("#timer").html("<h3>" + number + "</h3>");
  if (number === 0) {
    stopTimer();
    alert("Time's Up!");
    $('.questions').hide();
    $('.stop-game').show();
  }
}
function stopTimer() {
  clearInterval(intervalId);
  number = 60;
}


$(document).ready(function () {
    $("input[type='radio']").on('change', function () {
        
        var q1 = $('input[name="question1"]:checked').val();
        var q2 = $('input[name=question2]:checked','#form').val();
        var q3 = $('input[name=question3]:checked','#form').val();
        var q4 = $('input[name=question4]:checked','#form').val();
        var q5 = $('input[name=question5]:checked','#form').val();
        var q6 = $('input[name=question6]:checked','#form').val();
        var q7 = $('input[name=question7]:checked','#form').val();
        var q8 = $('input[name=question8]:checked','#form').val();
            
        var numberCorrect = 0;
        var numberWrong = 0;
        var numberUnanswered = 0;
        
        if (q1 == "Decatur") {
            numberCorrect++;
            }
            else if (!q1) {
            numberUnanswered++;
            }
            else {
            numberWrong++;
            }

        if (q2 == "McMahon") {
            numberCorrect++;
            }
            else if (!q2) {
            numberUnanswered++;
            }
            else {
            numberWrong++;
            }
        
        if (q3 == "Halas") {
            numberCorrect++;
            }
            else if (!q3) {
            numberUnanswered++;
            }
            else {
            numberWrong++;
            }
        
        if (q4 == "Feathers") {
            numberCorrect++;
            }
            else if (!q4) {
            numberUnanswered++;
            }
            else {
            numberWrong++;
            }
        
        if (q5 == "Gabriel") {
            numberCorrect++;
            }
            else if (!q5) {
            numberUnanswered++;
            }
            else {
            numberWrong++;
            }
        
        
        if (q6 == "Manders") {
            numberCorrect++;
            }
            else if (!q6) {
            numberUnanswered++;
            }
            else {
            numberWrong++;
            }
        
        
        if (q7 == "Bronko") {
            numberCorrect++;
            }
            else if (!q7) {
            numberUnanswered++;
            }
            else {
            numberWrong++;
            }
        
        if (q8 == "Sid") {
            numberCorrect++;
            }
            else if (!q8) {
            numberUnanswered++;
            }
            else {
            numberWrong++;
            }

        $("#correct").html("<h5>" + numberCorrect + "</h5>");
        $("#incorrect").html("<h5>" + numberWrong + "</h5>");
        $("#unanswered").html("<h5>" + numberUnanswered + "</h5>");
     });
});


$("#submit").click(function(){
    stopTimer();
    $('.questions').hide();
    $('.start-game').hide();
    $('.stop-game').show();
 });

 $("#playagain").click(function(){
    $('.questions').hide();
    $('.start-game').show();
    $('.stop-game').hide();
    stopTimer()
 });