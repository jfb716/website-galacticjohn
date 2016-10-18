/* ------- XBOX Add Button ------- */

$(document).ready(function(){
    

$("#addButton").click(function(){
   var gameDate = $("#gameDate").val();
   var home = $("#home").val();
   var away = $("#away").val();
   var winner = $("#winner").val();
   var winGoals = $("#winGoals").val();
   var loseGoals = $("#loseGoals").val();
   var gamePlayed = $("#gamePlayed").val();
   console.log(gameDate, home, away, winner, winGoals, loseGoals, gamePlayed);
    
   $("#myTable tr:last").after("<tr><td>"+gameDate+"</td><td>"+home+"</td><td>"+away+"</td><td>"+winner+"</td><td>"+winGoals+"</td><td>"+loseGoals+"</td><td>"+gamePlayed+"</td></tr>");
});
   
});