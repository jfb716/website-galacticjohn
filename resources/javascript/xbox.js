

$(document).ready(function(){

/* ------ Table ------- */

$("#myTable").DataTable();

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

jaData();
  $('#gameInsert').submit(function(e){

    var jData = $('#gameInsert');

    $.ajax({
      type: jData.attr('method'),
      url: jData.attr('action'),
      data: jData.serialize(),
      success: function(response){
        console.log(response);
        jaData();
      }
    });
    e.preventDefault();
  });

  function jaData(){
    $('#date, #home, #away, #winner, #win_goals, #lose_goals, #game').empty();
    $.ajax({
      type: 'GET',
      url: 'resources/php/json.php',
      success: function(response){
        $.each(response, function(index){
          console.log(response[index].date, response[index].home, response[index].away, response[index].winner, response[index].win_goals, response[index].lose_goals, response[index].game);
          $('#date').append(response[index].date + '<br>');
          $('#home').append(response[index].home + '<br>');
          $('#away').append(response[index].away + '<br>');
          $('#winner').append(response[index].winner + '<br>');
          $('#win_goals').append(response[index].win_goals + '<br>');
          $('#lose_goals').append(response[index].lose_goals + '<br>');
          $('#game').append(response[index].game + '<br>');
        });
        console.log(response);
      }
    });
  }

});
