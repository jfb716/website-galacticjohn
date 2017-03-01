

$(document).ready(function(){


getTable();

  $('.gameAdd').submit(function(e){

    var gameData = $('.gameAdd');

    $.ajax({
      type: gameData.attr('method'),
      url: gameData.attr('action'),
      data: gameData.serialize(),
      success: function(response){
        getTable();
      }
    });
    e.preventDefault();
  });

  function getTable(){
    $.ajax({
      type: 'GET',
      url: 'resources/php/json.php',
      success: function(response){
        $('#gameTable tr').not(':first').remove();
        var html = '';
        for(var i = 0; i < response.length; i++)
        html += '<tr><td>' + response[i].dates + '</td><td>' + response[i].game + '</td><td>' + response[i].home + '</td><td>' + response[i].away + '</td><td>' + response[i].winner + '</td><td>' + response[i].wingoals + '</td><td>' + response[i].losegoals + '</td></tr>';
        $('#gameTable tbody').append(html);
      }
    });
  }

});
