$(document).ready(function(){   
    
    
/* ------ Tabs ------ */ 
$(function(){
   $("#tabs").tabs(); 
});
    
/* ------ Buttons ------- */
$("button").button();
    
/* ------ Table ------- */

$("#myTable").DataTable();

    
/* ------ Date ------ */
var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

    

/* ------- Weather Temp API ------- */
    
$.ajax({
  url : "http://api.wunderground.com/api/ecac81007093c564/conditions/q/NY/New_York.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var temp_f = parsed_json['current_observation']['temp_f'];
$("#temp").html(temp_f);
  }
  });
    
/* ------- Stock Price API ------- */
$.ajax({
  url : "http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=fb",
  dataType : "jsonp",
  success : function(parsed_json) {
  var stock_price = parsed_json['LastPrice'];
$("#stock_price").html(stock_price);
  }
  });
    
    
    
/* ------- XBOX Add Button ------- */
    
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





































