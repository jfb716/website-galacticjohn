

$(document).ready(function(){


getTable();

  $('.gameAdd').submit(function(e){

    var gameData = $('.gameAdd');

    $.ajax({
      type: gameData.attr('method'),
      url: gameData.attr('action'),
      data: gameData.serialize(),
      success: function(response){
        $('.gameAdd')[0].reset();
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
        $('.standingsBody tr').remove();
        var html = '';
        for(var i = 0; i < response.length; i++)
        html += '<tr><td>' + response[i].dates + '</td><td>' + response[i].game + '</td><td>' + response[i].home + '</td><td>' + response[i].away + '</td><td>' + response[i].winner + '</td><td>' + response[i].wingoals + '</td><td>' + response[i].losegoals + '</td></tr>';
        $('#gameTable tbody').append(html);
        var curChampObj = {};
        var winRates = [];
        $('#home').find('option').not(':first').each(function(){
          playerName = $(this).text();
          function counter(playerName){
            homeCount = 0;
            awayCount = 0;
            playerWins = 0;
            playerLoses = 0;
            goalsFor = 0;
            goalsAgainst = 0;
            for(var i = 0; i < response.length; i++){
              if(response[i].game === 'NHL 2012'){
                if(response[i].home === playerName){
                  homeCount++;
                };
                if(response[i].away === playerName){
                  awayCount++;
                };
                if(response[i].winner === playerName){
                  playerWins++;
                  goalsFor = goalsFor + Number(response[i].wingoals);
                  goalsAgainst = goalsAgainst + Number(response[i].losegoals);
                };
                if(response[i].winner !== playerName && (response[i].home === playerName || response[i].away === playerName)){
                  goalsFor = goalsFor + Number(response[i].losegoals);
                  goalsAgainst = goalsAgainst + Number(response[i].wingoals);
                };
              };
            };
          };
          counter(playerName);
          goalsPM = goalsFor - goalsAgainst;
          gamesPlayed = homeCount + awayCount;
          winPercent =  (playerWins/gamesPlayed) * 100;

          if(goalsPM > 0) {
              pmStyle = "bg-success";
            } else if(goalsPM < 0){
              pmStyle = "bg-danger";
            } else {
              pmStyle = "bg-warning";
            };
          if(winPercent > 50) {
              wpStyle = "bg-success";
            } else if(winPercent === 50){
              wpStyle = "bg-warning";
            } else {
              wpStyle = "bg-danger";
            };

          html = '<tr><td style="color:white" class="bg-inverse">' + playerName + '</td><td>' + homeCount + '</td><td>' + awayCount + '</td><td>' + gamesPlayed + '</td><td class="bg-primary" style="color:white">' + playerWins + '</td><td>' + goalsFor + '</td><td>' + goalsAgainst + '</td><td class="' + pmStyle + '">' + goalsPM + '</td><td class="percent ' + wpStyle + '">' + winPercent.toFixed(0) + '%</td></tr>';
          $('.standingsBody').append(html);
          var winNum = Number(winPercent);
          curChampObj[playerName] = winNum;
          winRates.push(winNum);
        });
        maxWinRate = Math.max.apply(Math, winRates);
        var champPicker = Object.keys(curChampObj).forEach(function(key){
          if(maxWinRate === curChampObj[key]){
            champ = key;
          }
        });
        champHtml = '<div><strong>Current Champ: </strong>' + champ + '</div>';
        $('.curChamp').append(champHtml);
        }
    });
  }

});
